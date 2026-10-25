const API = "/api/v2";
const DEFAULT_ORIGINS = ["https://kaushal-path.vercel.app","https://kaushalpath.kaushalpath.workers.dev"];
const TTL = 86400, MAX_BYTES = 16384, MIN_BENCHMARK = 20;
const HEALTH_PATH = API + "/health";
const ANALYTICS_PATH = API + "/analytics/submit-attempt";
const origins = (env) => new Set((env.FRONTEND_ORIGINS || DEFAULT_ORIGINS.join(",")).split(",").map(v => v.trim()).filter(Boolean));
function headers(req, env) {
  const h = new Headers({
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Expose-Headers": "X-Request-Id, Retry-After, Server-Timing",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "Cache-Control": "no-store"
  });
  const origin = req.headers.get("Origin");
  if (origin && origins(env).has(origin)) h.set("Access-Control-Allow-Origin", origin);
  return h;
}
function json(req,env,data,status=200,extra={}) {
  const h=headers(req,env); h.set("Content-Type","application/json; charset=utf-8"); for (const [k,v] of Object.entries(extra)) h.set(k,v);
  return new Response(JSON.stringify(data),{status,headers:h});
}
const slug = v => v.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const label = (v,max=120) => typeof v==="string" && v.trim().length>0 && v.trim().length<=max && !/[\u0000-\u001f\u007f]/.test(v) ? v.normalize("NFKC").trim().replace(/\s+/g," ").toLowerCase() : null;
const classLevel = v => /^(?:class\s*)?(10|11|12)$/i.test(v||"") ? Number(String(v).match(/10|11|12/)[0]) : null;
function validId(v) { return typeof v==="string" && /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(v); }
async function readBoundedBody(request) {
  const declaredLength = request.headers.get("Content-Length");
  if (declaredLength != null) {
    const size = Number(declaredLength);
    if (Number.isFinite(size) && size > MAX_BYTES) return { error: "request_too_large" };
  }

  if (!request.body) return { text: "" };
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      const chunk = part.value;
      if (!(chunk instanceof Uint8Array)) return { error: "invalid_request_body" };
      total += chunk.byteLength;
      if (total > MAX_BYTES) {
        try { await reader.cancel("request body limit exceeded"); } catch {}
        return { error: "request_too_large" };
      }
      chunks.push(chunk);
    }
  } catch {
    return { error: "request_body_unreadable" };
  } finally {
    try { reader.releaseLock(); } catch {}
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return { text: new TextDecoder("utf-8", { fatal: true }).decode(bytes) };
  } catch {
    return { error: "invalid_utf8" };
  }
}
async function catalog(req,env,ctx,url,kind) {
  const cls=classLevel(url.searchParams.get("class")), subject=label(url.searchParams.get("subject"),80);
  if(!cls||!subject) return json(req,env,{error:"valid_class_and_subject_required",allowedClasses:[10,11,12]},400);
  const subjectKey=slug(subject), key=`${kind}:cbse:class${cls}:${subjectKey}`;
  try { const hit=await env.STATIC_DATA.get(key,"json"); if(hit && typeof hit==="object") return json(req,env,{data:hit,source:"kv"},200,{"Cache-Control":"public, max-age=300, stale-while-revalidate=3600"}); } catch(e) { console.warn("KV read failed; falling back to D1",e?.name); }
  if(env.D1_CATALOG_FALLBACK_ENABLED==="false") return json(req,env,{error:"catalog_cache_miss_d1_fallback_disabled"},503,{"Retry-After":"300"});
  const table=kind==="syllabus"?"syllabus_catalog":"formula_catalog", column=kind==="syllabus"?"structure_json":"content_json";
  try {
    const row=await env.DB.prepare(`SELECT ${column} AS content_json FROM ${table} WHERE class_level=? AND subject_key=? LIMIT 1`).bind(cls,subjectKey).first();
    if(!row) return json(req,env,{error:"catalog_not_found"},404);
    const data=JSON.parse(row.content_json);
    ctx.waitUntil(env.STATIC_DATA.put(key,JSON.stringify(data),{expirationTtl:TTL}).catch(e=>console.warn("KV cache write skipped",e?.name)));
    return json(req,env,{data,source:"d1"},200,{"Cache-Control":"public, max-age=300, stale-while-revalidate=3600"});
  } catch(e) { console.warn("D1 catalog fallback failed",e?.name); return json(req,env,{error:"catalog_temporarily_unavailable"},503,{"Retry-After":"60"}); }
}
async function submit(req,env) {
  if (env.ANALYTICS_WRITE_ENABLED === "false") {
    return json(req,env,{error:"analytics_temporarily_disabled"},503,{"Retry-After":"300"});
  }
  const contentType = (req.headers.get("Content-Type") || "").split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") return json(req,env,{error:"content_type_must_be_json"},415);

  const bodyRead = await readBoundedBody(req);
  if (bodyRead.error === "request_too_large") return json(req,env,{error:"request_too_large"},413);
  if (bodyRead.error) return json(req,env,{error:bodyRead.error},400);
  let body;
  try { body = JSON.parse(bodyRead.text); }
  catch { return json(req,env,{error:"invalid_json"},400); }
  const input=Array.isArray(body)?body:body&&Array.isArray(body.attempts)?body.attempts:null;
  if(!input||input.length<1||input.length>100) return json(req,env,{error:"attempt_count_out_of_range",maximumAttempts:100},400);
  const totals=new Map();
  for(const a of input) {
    if(!a||!validId(a.question_id)||typeof a.is_correct!=="boolean") return json(req,env,{error:"invalid_attempt_shape"},400);
    const n=totals.get(a.question_id)||{total:0,correct:0}; n.total++; if(a.is_correct)n.correct++; totals.set(a.question_id,n);
  }
  const ids=[...totals.keys()]; if(ids.length>40) return json(req,env,{error:"too_many_distinct_questions",maximumDistinctQuestions:40},400);
  try {
    const known=await env.DB.prepare(`SELECT id FROM questions WHERE id IN (${ids.map(()=>"?").join(",")})`).bind(...ids).all();
    const knownIds=new Set((known.results||[]).map(x=>x.id)), accepted=ids.filter(id=>knownIds.has(id));
    if(!accepted.length) return json(req,env,{acceptedAttempts:0,ignoredAttempts:input.length});
    const statements=accepted.map(id=>{const c=totals.get(id);return env.DB.prepare("INSERT INTO global_analytics_v2 (question_id,total_attempts,correct_attempts,updated_at) VALUES (?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(question_id) DO UPDATE SET total_attempts=global_analytics_v2.total_attempts+excluded.total_attempts,correct_attempts=global_analytics_v2.correct_attempts+excluded.correct_attempts,updated_at=CURRENT_TIMESTAMP").bind(id,c.total,c.correct);});
    await env.DB.batch(statements);
    const n=accepted.reduce((s,id)=>s+totals.get(id).total,0);
    return json(req,env,{acceptedAttempts:n,ignoredAttempts:input.length-n});
  } catch(e) { console.warn("D1 analytics write failed",e?.name); return json(req,env,{error:"analytics_temporarily_unavailable"},503,{"Retry-After":"300"}); }
}
async function benchmark(req,env,url) {
  if(env.D1_BENCHMARKS_ENABLED==="false") return json(req,env,{error:"benchmark_temporarily_disabled"},503,{"Retry-After":"300"});
  const subject=label(url.searchParams.get("subject")), chapter=label(url.searchParams.get("chapter")), topic=label(url.searchParams.get("topic"));
  if(!subject||!chapter||!topic) return json(req,env,{error:"subject_chapter_topic_required"},400);
  try {
    const row=await env.DB.prepare("SELECT COALESCE(SUM(a.total_attempts),0) total_attempts, COALESCE(SUM(a.correct_attempts),0) correct_attempts FROM questions q INNER JOIN global_analytics_v2 a ON a.question_id=q.id WHERE lower(trim(q.subject))=? AND lower(trim(q.chapter))=? AND lower(trim(q.topic))=?").bind(subject,chapter,topic).first();
    const total=Number(row?.total_attempts||0), correct=Number(row?.correct_attempts||0);
    if(total<MIN_BENCHMARK) return json(req,env,{available:false,reason:"insufficient_sample",minimumAttempts:MIN_BENCHMARK},200,{"Cache-Control":"public, max-age=60"});
    const accuracyPercent=Math.round(correct/total*1000)/10;
    return json(req,env,{available:true,subject,chapter,topic,totalAttempts:total,accuracyPercent,incorrectPercent:Math.round((100-accuracyPercent)*10)/10,unit:"recorded_attempts"},200,{"Cache-Control":"public, max-age=60, stale-while-revalidate=300"});
  } catch(e) { console.warn("D1 benchmark read failed",e?.name); return json(req,env,{error:"benchmark_temporarily_unavailable"},503,{"Retry-After":"60"}); }
}
function withRequestMetadata(response, requestId, startedAt) {
  const outHeaders = new Headers(response.headers);
  outHeaders.set("X-Request-Id", requestId);
  outHeaders.set("Server-Timing", "app;dur=" + Math.max(0, Date.now() - startedAt));
  outHeaders.set("X-Content-Type-Options", "nosniff");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: outHeaders
  });
}

export default {
  async fetch(req, env, ctx) {
    const startedAt = Date.now();
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method.toUpperCase();
    const rayId = req.headers.get("CF-Ray");
    const requestId = rayId && rayId.length <= 96 ? rayId : crypto.randomUUID();
    const allowed = origins(env);
    let response;

    try {
      response = await (async () => {
        const origin = req.headers.get("Origin");
        if (origin && !allowed.has(origin)) {
          return json(req, env, { error: "origin_not_allowed" }, 403);
        }
        if (method === "OPTIONS") {
          return new Response(null, { status: 204, headers: headers(req, env) });
        }

        if (method === "GET" && path === HEALTH_PATH) {
          return json(req, env, {
            status: "ok",
            service: "kaushalpath-smart-system",
            apiVersion: 2
          }, 200, { "Cache-Control": "no-store" });
        }
        if (method === "GET" && (path === API + "/syllabus" || path === API + "/formulas")) {
          return await catalog(req, env, ctx, url, path.endsWith("/syllabus") ? "syllabus" : "formulas");
        }
        if (path === ANALYTICS_PATH && method === "POST") {
          if (env.ANALYTICS_WRITE_ENABLED === "false") {
            return json(req, env, { error: "analytics_temporarily_disabled" }, 503, { "Retry-After": "300" });
          }

          // Analytics writes are public and anonymous, so fail closed if either
          // the edge limiter or Cloudflare's connection IP is unavailable.
          const limiter = env.ANALYTICS_RATE_LIMITER;
          const clientIp = req.headers.get("CF-Connecting-IP");
          if (!limiter || typeof limiter.limit !== "function" || !clientIp) {
            console.error(JSON.stringify({
              event: "smart_system_rate_limiter_unavailable",
              requestId,
              route: "analytics_submit"
            }));
            return json(req, env, { error: "analytics_temporarily_unavailable" }, 503, { "Retry-After": "30" });
          }
          try {
            const verdict = await limiter.limit({ key: "attempt:" + clientIp });
            if (!verdict || verdict.success !== true) {
              return json(req, env, { error: "rate_limited" }, 429, { "Retry-After": "60" });
            }
          } catch (error) {
            console.error(JSON.stringify({
              event: "smart_system_rate_limiter_error",
              requestId,
              route: "analytics_submit",
              errorName: error && error.name ? error.name : "UnknownError"
            }));
            return json(req, env, { error: "analytics_temporarily_unavailable" }, 503, { "Retry-After": "30" });
          }
          return await submit(req, env);
        }
        if (method === "GET" && path === API + "/analytics/benchmarks") {
          return await benchmark(req, env, url);
        }

        const knownRouteMethods = new Map([
          [HEALTH_PATH, "GET, OPTIONS"],
          [API + "/syllabus", "GET, OPTIONS"],
          [API + "/formulas", "GET, OPTIONS"],
          [API + "/analytics/benchmarks", "GET, OPTIONS"],
          [ANALYTICS_PATH, "POST, OPTIONS"]
        ]);
        if (knownRouteMethods.has(path)) {
          return json(req, env, { error: "method_not_allowed" }, 405, { Allow: knownRouteMethods.get(path) });
        }
        return json(req, env, { error: "not_found" }, 404);
      })();
    } catch (error) {
      console.error(JSON.stringify({
        event: "smart_system_unhandled_error",
        requestId,
        method,
        route: path.startsWith(API + "/") ? path.slice(API.length) : "unknown",
        errorName: error && error.name ? error.name : "UnknownError"
      }));
      response = json(req, env, { error: "temporarily_unavailable" }, 503, { "Retry-After": "60" });
    }

    const finalResponse = withRequestMetadata(response, requestId, startedAt);
    if (finalResponse.status >= 500) {
      console.warn(JSON.stringify({
        event: "smart_system_response_failure",
        requestId,
        method,
        route: path.startsWith(API + "/") ? path.slice(API.length) : "unknown",
        status: finalResponse.status,
        durationMs: Date.now() - startedAt
      }));
    }
    return finalResponse;
  }
};
