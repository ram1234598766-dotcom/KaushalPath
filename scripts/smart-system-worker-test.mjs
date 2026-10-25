import assert from "node:assert/strict";
import smartSystem from "../smart-system/worker.js";

const ORIGIN = "https://kaushal-path.vercel.app";
const BASE = "https://kaushalpath.kaushalpath.workers.dev";
function request(path, options = {}) {
  const headers = new Headers({
    Origin: ORIGIN,
    "CF-Connecting-IP": "198.51.100.42",
    ...(options.headers || {})
  });
  return new Request(BASE + path, { ...options, headers });
}
function makeEnv(overrides = {}) {
  const calls = { prepared: [], batches: [], rateLimit: 0, kvGets: [], kvPuts: [] };
  const database = {
    prepare(sql) {
      const statement = {
        sql,
        values: [],
        bind(...values) { this.values = values; return this; },
        async first() {
          if (sql.includes("FROM syllabus_catalog")) {
            return {
              content_json: JSON.stringify({
                schemaVersion: 1, classLevel: 12,
                subject: { id: "physics", name: "Physics" }, chapters: []
              })
            };
          }
          if (sql.includes("FROM formula_catalog")) {
            return {
              content_json: JSON.stringify({
                schemaVersion: 1, classLevel: 12,
                subject: { id: "chemistry", name: "Chemistry" }, blocks: []
              })
            };
          }
          if (sql.includes("SUM(a.total_attempts)")) {
            return overrides.benchmarkRow || { total_attempts: 40, correct_attempts: 30 };
          }
          return null;
        },
        async all() {
          if (sql.includes("SELECT id FROM questions")) {
            return { results: this.values.filter((id) => id === "question-1" || id === "question-2").map((id) => ({ id })) };
          }
          return { results: [] };
        }
      };
      calls.prepared.push(statement);
      return statement;
    },
    async batch(statements) { calls.batches.push(statements); return statements.map(() => ({ success: true })); }
  };
  const env = {
    FRONTEND_ORIGINS: ORIGIN + ",https://kaushalpath.kaushalpath.workers.dev",
    ANALYTICS_WRITE_ENABLED: "true",
    D1_CATALOG_FALLBACK_ENABLED: "true",
    D1_BENCHMARKS_ENABLED: "true",
    STATIC_DATA: {
      async get(key, type) {
        calls.kvGets.push({ key, type });
        if (typeof overrides.kvValue === "function") return overrides.kvValue(key, type);
        return overrides.kvValue ?? null;
      },
      async put(key, value, opts) { calls.kvPuts.push({ key, value, opts }); }
    },
    DB: database,
    ANALYTICS_RATE_LIMITER: {
      async limit({ key }) {
        calls.rateLimit++;
        if (overrides.rateLimitError) throw new Error("limiter down");
        return { success: overrides.rateLimitSuccess !== false };
      }
    }
  };
  Object.assign(env, overrides.env || {});
  return { env, calls };
}
function context() {
  const scheduled = [];
  return { scheduled, waitUntil(promise) { scheduled.push(Promise.resolve(promise)); } };
}
async function json(response) { return response.json(); }

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/health"), env, context());
  assert.equal(response.status, 200);
  assert.deepEqual(await json(response), { status: "ok", service: "kaushalpath-smart-system", apiVersion: 2 });
  assert.ok(response.headers.get("X-Request-Id"), "all responses carry a traceable request ID");
  assert.match(response.headers.get("Server-Timing") || "", /^app;dur=\d+$/);
  assert.equal(response.headers.get("Cache-Control"), "no-store, max-age=0");
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/health", { headers: { Origin: "https://evil.example" } }), env, context());
  assert.equal(response.status, 403, "unlisted origins must be rejected");
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), null);
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/health", { method: "OPTIONS" }), env, context());
  assert.equal(response.status, 204);
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), ORIGIN);
  assert.match(response.headers.get("Access-Control-Expose-Headers") || "", /X-Request-Id/);
}

{
  const kvValue = { schemaVersion: 1, chapters: [{ id: "electricity" }] };
  const { env, calls } = makeEnv({ kvValue });
  const response = await smartSystem.fetch(request("/api/v2/syllabus?class=12&subject=Physics"), env, context());
  assert.equal(response.status, 200);
  const body = await json(response);
  assert.equal(body.source, "kv");
  assert.equal(body.data.chapters[0].id, "electricity");
  assert.equal(calls.kvGets[0].key, "syllabus:cbse:class12:physics");
  assert.match(response.headers.get("Cache-Control") || "", /stale-while-revalidate/);
}

{
  const { env, calls } = makeEnv();
  const ctx = context();
  const response = await smartSystem.fetch(request("/api/v2/syllabus?class=12&subject=Physics"), env, ctx);
  assert.equal(response.status, 200);
  assert.equal((await json(response)).source, "d1");
  await Promise.all(ctx.scheduled);
  assert.equal(calls.kvPuts.length, 1, "D1 fallback warms KV without blocking the response");
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/syllabus?class=9&subject=Physics"), env, context());
  assert.equal(response.status, 400);
  assert.equal((await json(response)).error, "valid_class_and_subject_required");
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/health", { method: "POST" }), env, context());
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "GET, OPTIONS");
}

{
  const { env, calls } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([
      { question_id: "question-1", is_correct: true },
      { question_id: "unknown-question", is_correct: false },
      { question_id: "question-1", is_correct: false }
    ])
  }), env, context());
  assert.equal(response.status, 200);
  assert.deepEqual(await json(response), { acceptedAttempts: 2, ignoredAttempts: 1 });
  assert.equal(calls.rateLimit, 1, "every analytics write is rate limited");
  assert.equal(calls.batches.length, 1, "accepted aggregates are written in a D1 batch");
  assert.equal(calls.batches[0].length, 1, "attempts for a question are aggregated into one statement");
}

{
  const { env, calls } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "{"
  }), env, context());
  assert.equal(response.status, 400);
  assert.equal((await json(response)).error, "invalid_json");
  assert.equal(calls.batches.length, 0);
}

{
  const { env, calls } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST", headers: { "Content-Type": "text/plain" }, body: "[]"
  }), env, context());
  assert.equal(response.status, 415);
  assert.equal(calls.batches.length, 0);
}

{
  const { env, calls } = makeEnv();
  let cancelled = false;
  const stream = new ReadableStream({
    pull(controller) { controller.enqueue(new Uint8Array(20 * 1024)); },
    cancel() { cancelled = true; }
  });
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: stream,
    duplex: "half"
  }), env, context());
  assert.equal(response.status, 413, "unknown Content-Length bodies are capped while streaming");
  assert.equal((await json(response)).error, "request_too_large");
  assert.equal(calls.batches.length, 0);
  assert.ok(cancelled, "oversized request streams should be cancelled early");
}

{
  const { env, calls } = makeEnv({ rateLimitSuccess: false });
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "[]"
  }), env, context());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "60");
  assert.equal(calls.batches.length, 0);
}

{
  const { env, calls } = makeEnv({ rateLimitError: true });
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "[]"
  }), env, context());
  assert.equal(response.status, 503, "limiter failure must fail closed instead of exposing D1 to unbounded writes");
  assert.equal(response.headers.get("Retry-After"), "30");
  assert.equal(calls.batches.length, 0);
}

{
  const { env, calls } = makeEnv({ env: { ANALYTICS_RATE_LIMITER: undefined } });
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "[]"
  }), env, context());
  assert.equal(response.status, 503, "missing rate limit bindings must fail closed");
  assert.equal(calls.batches.length, 0);
}

{
  const { env, calls } = makeEnv({ benchmarkRow: { total_attempts: 19, correct_attempts: 10 } });
  const response = await smartSystem.fetch(request("/api/v2/analytics/benchmarks?subject=Physics&chapter=Gravitation&topic=Field"), env, context());
  assert.equal(response.status, 200);
  assert.deepEqual(await json(response), { available: false, reason: "insufficient_sample", minimumAttempts: 20 });
  assert.match(response.headers.get("Cache-Control") || "", /max-age=60/);
  assert.equal(calls.batches.length, 0);
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/analytics/benchmarks?subject=Physics&chapter=Gravitation&topic=Field"), env, context());
  assert.equal(response.status, 200);
  const body = await json(response);
  assert.equal(body.available, true);
  assert.equal(body.accuracyPercent, 75);
  assert.equal(body.incorrectPercent, 25);
  assert.equal(body.unit, "recorded_attempts");
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/analytics/submit-attempt", {
    method: "PUT", headers: { "Content-Type": "application/json" }, body: "{}"
  }), env, context());
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "POST, OPTIONS");
}

{
  const { env } = makeEnv();
  const response = await smartSystem.fetch(request("/api/v2/not-a-real-route"), env, context());
  assert.equal(response.status, 404);
}
console.log("Smart System backend tests passed: health, CORS, bounded bodies, fail-closed rate limiting, catalog cache/fallback, aggregate writes, method handling and benchmark privacy.");
