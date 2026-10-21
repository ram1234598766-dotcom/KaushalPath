import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../public/app.js", import.meta.url), "utf8");
const netlifyFn = readFileSync(new URL("../netlify/functions/study-guide.mjs", import.meta.url), "utf8");
const vercelFn = readFileSync(new URL("../api/study-guide.mjs", import.meta.url), "utf8");
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const toml = readFileSync(new URL("../netlify.toml", import.meta.url), "utf8");
const vercel = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

assert.match(html, /KaushalPath/, "site brand should be present");
assert.match(html, /studyForm/, "study form should exist");
assert.match(html, /sourceUrls/, "manual website URL input should exist");
assert.match(html, /liveSearch/, "live search toggle should exist");
assert.match(html, /src="\/app\.js" defer/, "JavaScript should be external for CSP");
assert.doesNotMatch(html, /<script>[\s\S]*?<\/script>/i, "inline scripts should be removed");
assert.match(app, /\/api\/study-guide/, "frontend must call the same API path on both hosts");
assert.match(app, /urls:urls/, "frontend must send supplied URLs");
for (const [name, fn] of [["Netlify", netlifyFn], ["Vercel", vercelFn]]) {
  assert.match(fn, /client\.interactions\.create/, name + " AI uses the Interactions API");
  assert.match(fn, /google_search/, name + " AI supports live search");
  assert.match(fn, /url_context/, name + " AI supports public URL reading");
  assert.match(fn, /normalizeUrls/, name + " API validates user URLs");
}
assert.equal(pkg.dependencies["@google/genai"], "^2.30.0", "SDK version should support URL context");
assert.match(toml, /Content-Security-Policy/);
assert.match(toml, /script-src 'self'/, "CSP should block inline scripts");
assert.equal(vercel.outputDirectory, "public", "Vercel serves the existing frontend");
assert.equal(vercel.buildCommand, "npm run test", "Vercel validates files before publishing");
assert.ok(existsSync(new URL("../api/study-guide.mjs", import.meta.url)), "Vercel AI route exists");
assert.ok(existsSync(new URL("../vercel.json", import.meta.url)), "Vercel config exists");
assert.ok(existsSync(new URL("../netlify/functions/study-guide.mjs", import.meta.url)), "Netlify compatibility route exists");
console.log("KaushalPath Vercel + Netlify configuration and AI route checks passed.");
