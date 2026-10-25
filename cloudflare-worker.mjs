import { onRequest } from "./functions/api/study-guide.js";

// Serve the static KaushalPath frontend through Workers Assets and proxy only
// the study-guide endpoint to the existing Vercel Node API.
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/study-guide") {
      return onRequest({ request, env, waitUntil: (promise) => ctx.waitUntil(promise) });
    }
    return env.ASSETS.fetch(request);
  }
};
