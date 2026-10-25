import { cp, mkdir, rm, access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const output = resolve(root, "dist");
const staticFiles = [
  "index.html",
  "app.js",
  "local-ai.js",
  "app-icon.svg",
  "offline.html",
  "manifest.webmanifest",
  "service-worker.js",
  "school-chapter-guides.js",
  "school-humanities-commerce-guides.js",
  "formula-cheat-sheets.js",
  "exam-prep-notes.js",
  "cbse-english-chapter-notes.js",
  "cbse-commerce-computing-hindi-chapters.js",
  "jee-neet-chapter-notes.js",
  "cbse-maths-deep-notes.js",
  "cbse-physics-chemistry-deep-notes.js",
  "cbse-biology-deep-notes.js",
  "cbse-remaining-chapter-notes.js",
  "cbse-humanities-computer-deep-notes.js",
  "ncert-physics-chapter-notes.js",
  "ncert-chemistry-chapter-notes.js",
  "ncert-mathematics-chapter-notes.js",
  "ncert-biology-chapter-notes.js",
  "study-library.js",
  "question-bank.js",
  "_headers",
  "_routes.json"
];
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const missing = [];
for (const file of staticFiles) {
  try { await access(resolve(root, file)); }
  catch { missing.push(file); continue; }
  await cp(resolve(root, file), resolve(output, file));
}
const validationErrors = [];
if (missing.length) {
  validationErrors.push("missing required source files: " + missing.join(", "));
}

const html = await readFile(resolve(root, "index.html"), "utf8");
const referencedScripts = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)]
  .map((match) => match[1])
  .filter((src) => src.startsWith("/") && !src.startsWith("//"));
const missingPublishedScripts = [];
for (const src of referencedScripts) {
  const path = new URL(src, "https://kaushalpath.invalid").pathname.replace(/^\/+/, "");
  try { await access(resolve(output, path)); }
  catch { missingPublishedScripts.push(src); }
}
if (missingPublishedScripts.length) {
  validationErrors.push("browser scripts referenced by index.html were not published: " + [...new Set(missingPublishedScripts)].join(", "));
}

try {
  const routes = JSON.parse(await readFile(resolve(output, "_routes.json"), "utf8"));
  if (routes.version !== 1 || !Array.isArray(routes.include) || !routes.include.includes("/api/study-guide")) {
    validationErrors.push("_routes.json must route /api/study-guide to the Pages Function");
  }
} catch (error) {
  validationErrors.push("could not validate _routes.json: " + String(error && error.message || error));
}

try {
  await access(resolve(root, "functions/api/study-guide.js"));
} catch {
  validationErrors.push("functions/api/study-guide.js is missing; the Cloudflare AI proxy route will not deploy");
}

try {
  const headers = await readFile(resolve(root, "_headers"), "utf8");
  for (const required of ["https://esm.run", "https://cdn.jsdelivr.net", "worker-src 'self' blob:", "'wasm-unsafe-eval'"]) {
    if (!headers.includes(required)) validationErrors.push("_headers CSP is missing required local-AI setting: " + required);
  }
} catch (error) {
  validationErrors.push("could not validate _headers: " + String(error && error.message || error));
}

try {
  const config = await readFile(resolve(root, "wrangler.toml"), "utf8");
  if (!/pages_build_output_dir\s*=\s*["']\.\/dist["']/.test(config)) {
    validationErrors.push("wrangler.toml must set pages_build_output_dir to ./dist");
  }
} catch (error) {
  validationErrors.push("could not validate wrangler.toml: " + String(error && error.message || error));
}

if (validationErrors.length) {
  console.error("Cloudflare Pages build validation failed:\n- " + validationErrors.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Cloudflare Pages static build ready: " + staticFiles.length + " assets copied to dist/.");
  console.log("Validated " + referencedScripts.length + " local browser scripts, CSP/WebGPU origins, Pages route config, and functions/api/study-guide.js.");
}
