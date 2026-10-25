import { onRequest } from "./functions/api/study-guide.js";

const STATIC_ORIGIN = "https://raw.githubusercontent.com/ram1234598766-dotcom/KaushalPath/main";
const STATIC_FILES = new Set([
  "index.html", "app.js", "smart-system-client.js", "app-icon.svg", "offline.html", "manifest.webmanifest",
  "service-worker.js", "school-chapter-guides.js", "school-humanities-commerce-guides.js",
  "formula-cheat-sheets.js", "exam-prep-notes.js", "cbse-english-chapter-notes.js",
  "cbse-commerce-computing-hindi-chapters.js", "jee-neet-chapter-notes.js",
  "cbse-maths-deep-notes.js", "cbse-physics-chemistry-deep-notes.js",
  "cbse-biology-deep-notes.js", "cbse-remaining-chapter-notes.js",
  "cbse-humanities-computer-deep-notes.js", "ncert-physics-chapter-notes.js",
  "ncert-chemistry-chapter-notes.js", "ncert-mathematics-chapter-notes.js",
  "ncert-biology-chapter-notes.js", "study-library.js", "local-ai.js", "question-bank.js"
]);

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": "default-src 'self'; script-src 'self' https://esm.run https://cdn.jsdelivr.net 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://api.kilo.ai https://ai-gateway.kilo.ai https://esm.run https://cdn.jsdelivr.net https://huggingface.co https://*.huggingface.co https://*.hf.co https://raw.githubusercontent.com https://github.com https://cdn-lfs.huggingface.co https://cas-bridge.xethub.hf.co; worker-src 'self' blob:; child-src 'self' blob:; img-src 'self' data: https:; font-src 'self' data: https://cdn.jsdelivr.net; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
};

function contentType(pathname) {
  if (pathname.endsWith(".html")) return "text/html; charset=utf-8";
  if (pathname.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".webmanifest")) return "application/manifest+json; charset=utf-8";
  if (pathname.endsWith(".json")) return "application/json; charset=utf-8";
  return "application/octet-stream";
}

function responseWithHeaders(body, status, extra = {}) {
  const headers = new Headers(SECURITY_HEADERS);
  for (const [name, value] of Object.entries(extra)) headers.set(name, value);
  return new Response(body, { status, headers });
}

async function serveStaticAsset(request, env, ctx, url) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return responseWithHeaders("Method not allowed", 405, { Allow: "GET, HEAD", "Cache-Control": "no-store" });
  }

  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const assetName = pathname.slice(1);
  if (!STATIC_FILES.has(assetName)) {
    return responseWithHeaders("Not found", 404, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  }

  const isServiceWorker = pathname === "/service-worker.js";
  const cache = typeof caches !== "undefined" ? caches.default : null;
  const cacheKey = new Request(new URL(pathname, url.origin).toString(), { method: "GET" });

  if (!isServiceWorker && cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) return request.method === "HEAD"
        ? new Response(null, { status: cached.status, headers: cached.headers })
        : cached;
    } catch (error) {
      console.warn("Static asset cache read failed; loading the source directly.", error);
    }
  }

  let upstream;
  try {
    upstream = await fetch(STATIC_ORIGIN + pathname, { method: "GET", redirect: "follow" });
  } catch (error) {
    console.error("Could not reach the KaushalPath source repository.", error);
    return responseWithHeaders("KaushalPath could not load this file right now. Please refresh in a moment.", 502, {
      "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store"
    });
  }

  if (!upstream.ok) {
    return responseWithHeaders(upstream.status === 404 ? "Not found" : "KaushalPath source is temporarily unavailable.", upstream.status === 404 ? 404 : 502, {
      "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store"
    });
  }

  const cacheControl = isServiceWorker ? "no-cache, no-store, must-revalidate" : "public, max-age=60";
  const headers = {
    "Content-Type": contentType(pathname),
    "Cache-Control": cacheControl,
    "X-KaushalPath-Source": "github-main"
  };
  const response = responseWithHeaders(request.method === "HEAD" ? null : upstream.body, 200, headers);

  if (!isServiceWorker && request.method === "GET" && cache) {
    try {
      ctx.waitUntil(cache.put(cacheKey, response.clone()).catch((error) => {
        console.warn("Static asset cache write failed.", error);
      }));
    } catch (error) {
      console.warn("Static asset cache is unavailable; serving the source directly.", error);
    }
  }
  return response;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/study-guide") {
      return onRequest({ request, env, waitUntil: (promise) => ctx.waitUntil(promise) });
    }
    return serveStaticAsset(request, env, ctx, url);
  }
};
