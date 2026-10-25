import { cp, mkdir, rm, access } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const output = resolve(root, "dist");
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
