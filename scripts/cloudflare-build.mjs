import { cp, mkdir, rm, access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const output = resolve(root, "dist");
const configPath = resolve(root, "wrangler.toml");
const config = await readFile(configPath, "utf8");
const configLines = config.split(/\r?\n/).map((line) => line.trim());
if (!configLines.includes('name = "kaushalpath"')) {
  throw new Error('Cloudflare build must target the existing "kaushalpath" Worker.');
}
if (!configLines.includes('main = "cloudflare-worker.mjs"')) {
  throw new Error('wrangler.toml must declare cloudflare-worker.mjs as the Worker entry point.');
}
if (configLines.includes("[assets]")) {
  throw new Error('Do not enable Wrangler static-asset uploads for this Worker: KaushalPath serves its allowlisted public files through the existing Worker, avoiding the previous unauthorized /workers/assets/upload failure.');
}
const deploymentFiles = [
  "cloudflare-worker.mjs",
  "functions/api/study-guide.js",
  "smart-system/worker.js"
];
for (const file of deploymentFiles) {
  try { await access(resolve(root, file)); }
  catch { throw new Error("Cloudflare deployment is missing required Worker module: " + file); }
}
const staticFiles = [
  "index.html",
  "app.js",
  "smart-system-client.js",
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
  "local-ai.js",
  "question-bank.js",
  "_headers"
];
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const missing = [];
for (const file of staticFiles) {
  try { await access(resolve(root, file)); }
  catch { missing.push(file); continue; }
  await cp(resolve(root, file), resolve(output, file));
}
if (missing.length) {
  console.error("Cloudflare static build is missing required files: " + missing.join(", "));
  process.exitCode = 1;
} else {
  console.log("Cloudflare Workers static-asset build ready: " + staticFiles.length + " assets copied to dist/.");
  console.log("Worker serves public app files from the repository origin and routes /api/study-guide to the existing Vercel-backed API.");
}
