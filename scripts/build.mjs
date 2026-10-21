import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public");
const output = path.join(root, "dist");

if (!existsSync(path.join(source, "index.html"))) {
  throw new Error("Expected public/index.html; refusing to publish an empty site.");
}

rmSync(output, { recursive: true, force: true });
cpSync(source, output, { recursive: true });

if (!existsSync(path.join(output, "index.html")) || !existsSync(path.join(output, "app.js"))) {
  throw new Error("The Vercel output is missing required frontend files.");
}

console.log("KaushalPath static site copied from public/ to dist/.");
