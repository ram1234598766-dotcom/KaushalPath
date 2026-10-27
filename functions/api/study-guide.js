import { detectFreeLiveDataIntent, executeFreeLiveDataTool, formatFreeLiveDataResponse } from "../../api/free-live-data.mjs";

const DEFAULT_VERCEL_API_BASE_URL = "https://kaushal-path.vercel.app";
const MAX_PROXY_BODY_BYTES = 5 * 1024 * 1024;
const SECURITY_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "X-Frame-Options": "DENY"
};

const CORS_ALLOWED_ORIGINS = new Set([
  "https://kaushal-path.vercel.app",
  "https://kaushalpath.kaushalpath.workers.dev"
]);

function addCorsHeaders(headers, origin) {
  if (CORS_ALLOWED_ORIGINS.has(String(origin || ""))) {
    headers.set("Access-Control-Allow-Origin", origin);
    const vary = headers.get("Vary");
    if (!vary || !vary.toLowerCase().split(",").map((value) => value.trim()).includes("origin")) {
      headers.set("Vary", vary ? vary + ", Origin" : "Origin");
    }
  }
  return headers;
}

function json(status, payload, extraHeaders, origin) {
  const headers = new Headers(SECURITY_HEADERS);
  headers.set("Content-Type", "application/json; charset=utf-8");
  for (const [key, value] of Object.entries(extraHeaders || {})) headers.set(key, value);
  addCorsHeaders(headers, origin);
  return new Response(JSON.stringify(payload), { status, headers });
}

function getUpstreamUrl(env) {
  const configured = String(env && env.VERCEL_API_BASE_URL || DEFAULT_VERCEL_API_BASE_URL).trim();
  let base;
  try { base = new URL(configured); }
  catch { throw new Error("VERCEL_API_BASE_URL must be a valid HTTPS origin."); }
  if (base.protocol !== "https:" || !base.hostname || base.username || base.password ||
      (base.pathname !== "/" && base.pathname !== "") || base.search || base.hash) {
    throw new Error("VERCEL_API_BASE_URL must be an HTTPS origin only, for example https://kaushal-path.vercel.app.");
  }
  return new URL("/api/study-guide", base.origin);
}

export async function onRequest(context) {
  const request = context.request;
  const env = context.env || {};
  const method = request.method.toUpperCase();
  const origin = request.headers.get("origin") || "";
  const requestId = request.headers.get("cf-ray") || crypto.randomUUID();

  if (method === "OPTIONS") {
    if (!CORS_ALLOWED_ORIGINS.has(origin)) {
      return json(403, { error: "Cross-origin requests are not enabled for this origin.", requestId });
    }
    const headers = addCorsHeaders(new Headers(SECURITY_HEADERS), origin);
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Accept, Content-Type, X-KaushalPath-Status");
    headers.set("Access-Control-Max-Age", "86400");
    headers.set("X-Request-Id", requestId);
    return new Response(null, { status: 204, headers });
  }

  if (method !== "GET" && method !== "POST") {
    return json(405, { error: "Use GET for AI status or POST for study requests." }, { Allow: "GET, POST, OPTIONS" }, origin);
  }
  if (method === "GET" && request.headers.get("x-kaushalpath-status") !== "1") {
    return json(405, { error: "Use POST to ask the study guide a question." }, { Allow: "GET, POST, OPTIONS" }, origin);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (method === "POST" && Number.isFinite(contentLength) && contentLength > MAX_PROXY_BODY_BYTES) {
    return json(413, { error: "Request too large. Choose a smaller file or shorten the prompt." }, undefined, origin);
  }

  // For clear direct live-data questions, call the no-key public providers in
  // the Worker itself. This keeps current weather/FX/news/etc. independent from
  // the Vercel AI gateway and provides a cross-origin fallback to the Vercel UI.
  if (method === "POST" && String(request.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
    let input = null;
    try { input = await request.clone().json(); } catch {}
    const hasUploads = Boolean(input && (
      input.imageData || input.fileData || input.attachmentData ||
      (Array.isArray(input.attachments) && input.attachments.length) ||
      (Array.isArray(input.urls) && input.urls.length) ||
      (Array.isArray(input.files) && input.files.length)
    ));
    if (input && !hasUploads && typeof input.prompt === "string") {
      const directIntent = detectFreeLiveDataIntent(input.prompt);
      if (directIntent) {
        let result;
        try {
          // The adapter adds its own bounded timeout; avoid relying on Request.signal availability in Workers.
          result = await executeFreeLiveDataTool(directIntent.name, directIntent.args);
        } catch (error) {
          return json(503, {
            error: "The public live-data provider could not complete this request. Please retry shortly.",
            provider: directIntent.name,
            requestId,
            liveData: false
          }, { "X-Request-Id": requestId }, origin);
        }
        if (!result || result.ok !== true) {
          return json(503, {
            error: String(result && result.error || "The live-data provider did not return usable data."),
            provider: result && result.provider || directIntent.name,
            requestId,
            liveData: false
          }, { "X-Request-Id": requestId }, origin);
        }
        const sourceUrl = String(result.sourceUrl || "");
        return json(200, {
          text: formatFreeLiveDataResponse(directIntent.name, result, directIntent.args),
          sources: sourceUrl ? [{ title: String(result.provider || "Public live-data provider"), url: sourceUrl }] : [],
          liveSources: Boolean(sourceUrl),
          mode: "explain",
          requestId,
          liveData: true
        }, { "X-Request-Id": requestId }, origin);
      }
    }
  }

  let upstreamUrl;
  try { upstreamUrl = getUpstreamUrl(env); }
  catch (error) { return json(500, { error: String(error && error.message || "The AI API origin is misconfigured."), requestId }, { "X-Request-Id": requestId }, origin); }

  const upstreamHeaders = new Headers();
  for (const key of ["accept", "content-type", "x-kaushalpath-status"]) {
    const value = request.headers.get(key);
    if (value) upstreamHeaders.set(key, value);
  }
  upstreamHeaders.set("x-kaushalpath-edge-request-id", requestId);

  let upstream;
  try {
    upstream = await fetch(upstreamUrl.href, {
      method,
      headers: upstreamHeaders,
      body: method === "POST" ? request.body : undefined,
      redirect: "manual",
      signal: request.signal
    });
  } catch {
    return json(502, {
      error: "The AI service at Vercel could not be reached from Cloudflare. Check the Vercel deployment and try again.",
      requestId
    }, { "X-Request-Id": requestId });
  }

  // Stream the response body so server-sent events remain incremental.
  const headers = new Headers(SECURITY_HEADERS);
  headers.set("Content-Type", upstream.headers.get("content-type") || "application/json; charset=utf-8");
  headers.set("X-Request-Id", upstream.headers.get("x-request-id") || requestId);
  const retryAfter = upstream.headers.get("retry-after");
  if (retryAfter) headers.set("Retry-After", retryAfter);
  addCorsHeaders(headers, origin);
  if ((upstream.headers.get("content-type") || "").includes("text/event-stream")) {
    headers.set("Cache-Control", "no-cache, no-store, no-transform");
    headers.set("X-Accel-Buffering", "no");
  }
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers });
}
