import { onRequest } from "./functions/api/study-guide.js";

// Cloudflare Workers static assets host the same frontend bundle as Vercel.
// Only the study-guide API route runs the proxy; regular paths are served from assets.
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/study-guide") {
      return onRequest({
        request,
        env,
        waitUntil: (promise) => ctx.waitUntil(promise)
      });
    }
    return env.ASSETS.fetch(request);
  }
};
