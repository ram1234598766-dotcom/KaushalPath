const DEFAULT_VERCEL_API_BASE_URL = "https://kaushal-path.vercel.app";
const MAX_PROXY_BODY_BYTES = 5 * 1024 * 1024;
const SECURITY_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "X-Frame-Options": "DENY"
};

function json(status, payload, extraHeaders) {
  const headers = new Headers(SECURITY_HEADERS);
  headers.set("Content-Type", "application/json; charset=utf-8");
  for (const [key, value] of Object.entries(extraHeaders || {})) headers.set(key, value);
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

  if (method !== "GET" && method !== "POST") {
    return json(405, { error: "Use GET for AI status or POST for study requests." }, { Allow: "GET, POST" });
  }
  if (method === "GET" && request.headers.get("x-kaushalpath-status") !== "1") {
    return json(405, { error: "Use POST to ask the study guide a question." }, { Allow: "GET, POST" });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (method === "POST" && Number.isFinite(contentLength) && contentLength > MAX_PROXY_BODY_BYTES) {
    return json(413, { error: "Request too large. Choose a smaller file or shorten the prompt." });
  }

  let upstreamUrl;
  try { upstreamUrl = getUpstreamUrl(env); }
  catch (error) { return json(500, { error: String(error && error.message || "The AI API origin is misconfigured.") }); }

  const upstreamHeaders = new Headers();
  for (const key of ["accept", "content-type", "x-kaushalpath-status"]) {
    const value = request.headers.get(key);
    if (value) upstreamHeaders.set(key, value);
  }
  const requestId = request.headers.get("cf-ray") || crypto.randomUUID();
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
  if ((upstream.headers.get("content-type") || "").includes("text/event-stream")) {
    headers.set("Cache-Control", "no-cache, no-store, no-transform");
    headers.set("X-Accel-Buffering", "no");
  }
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers });
}
