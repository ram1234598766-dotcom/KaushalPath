import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const MAX_PDF_TEXT = 60000;
const MAX_ARTIFACT_BYTES = 1800000;
const MAX_WORKFLOW_FILES = 16;
const MAX_WORKFLOW_BYTES = 220000;
const MAX_WORKFLOW_STEPS = 6;
const MAX_BROWSER_ACTIONS = 8;

export const AGENTIC_TOOL_DEFINITIONS = [
  {
    type: "function",
    function: {
      name: "create_pdf_document",
      description: "Create a real, downloadable, multi-page PDF with polished typography, a colored title band, section headings, readable wrapping, bullets and page numbers. Use this whenever the learner asks for a PDF or downloadable report. Return original content in Markdown-like form.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", minLength: 1, maxLength: 140 },
          content: { type: "string", minLength: 1, maxLength: 60000 },
          fileName: { type: "string", maxLength: 90 }
        },
        required: ["title", "content"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "sandbox_execute",
      description: "Execute a shell command in a fresh, isolated, short-lived E2B cloud sandbox, never in the KaushalPath web server. Use for Python/Node scripts, build checks, unit tests, calculations or debugging. No server secrets are copied into the sandbox. Commands and output are bounded; code may access the sandbox environment's available network. Requires E2B_API_KEY on the server.",
      parameters: {
        type: "object",
        properties: {
          command: { type: "string", minLength: 1, maxLength: 2400 },
          timeoutSeconds: { type: "integer", minimum: 3, maximum: 20 }
        },
        required: ["command"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "coding_workflow",
      description: "Run a compact agentic coding workflow inside one isolated cloud sandbox: write supplied source files, execute several commands in sequence, inspect test/build output, and optionally return selected files or generated artifacts. Use for prototype, patch, test, debug, lint, build, or reproduction tasks. The sandbox is ephemeral and does not commit or deploy to any repository.",
      parameters: {
        type: "object",
        properties: {
          goal: { type: "string", minLength: 1, maxLength: 1000 },
          files: {
            type: "array", maxItems: 16,
            items: {
              type: "object",
              properties: {
                path: { type: "string", minLength: 1, maxLength: 180 },
                content: { type: "string", maxLength: 60000 }
              },
              required: ["path", "content"],
              additionalProperties: false
            }
          },
          commands: {
            type: "array", minItems: 1, maxItems: 6,
            items: { type: "string", minLength: 1, maxLength: 1600 }
          },
          readPaths: {
            type: "array", maxItems: 6,
            items: { type: "string", minLength: 1, maxLength: 180 }
          }
        },
        required: ["goal", "files", "commands"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "browser_agent",
      description: "Use a real cloud browser to navigate public websites, inspect the rendered DOM, click visible buttons or links, fill non-password fields, press keys and take a screenshot. Each call is a short, bounded workflow on a public HTTP(S) site. It cannot log in, fill passwords, access private/local addresses, or perform payment, deletion, publishing, or other sensitive actions. Requires BROWSERBASE_API_KEY; BROWSERBASE_PROJECT_ID is optional.",
      parameters: {
        type: "object",
        properties: {
          url: { type: "string", minLength: 8, maxLength: 2048 },
          goal: { type: "string", minLength: 1, maxLength: 800 },
          actions: {
            type: "array", maxItems: 8,
            items: {
              type: "object",
              properties: {
                action: { type: "string", enum: ["inspect", "click", "fill", "press", "select", "wait", "navigate"] },
                target: { type: "string", maxLength: 240 },
                value: { type: "string", maxLength: 1200 },
                role: { type: "string", enum: ["button", "link", "textbox", "combobox", "checkbox", "radio", "menuitem", "tab", "option"] }
              },
              required: ["action"],
              additionalProperties: false
            }
          },
          screenshot: { type: "boolean" }
        },
        required: ["url", "goal"],
        additionalProperties: false
      }
    }
  }
];

function cleanText(value, max = 10000) {
  return String(value ?? "").replace(/\u0000/g, "").slice(0, max);
}
function safeFileName(value, fallback = "kaushalpath-report.pdf") {
  const name = String(value || fallback).trim().replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-").replace(/\s+/g, "-").slice(0, 90);
  return /\.pdf$/i.test(name) ? name : (name || "kaushalpath-report") + ".pdf";
}
function sanitizeRelativePath(value) {
  const raw = String(value || "").replace(/\\/g, "/");
  if (!raw || raw.length > 180 || raw.startsWith("/") || /^[a-z]:/i.test(raw) || raw.includes("\0")) {
    throw new Error("Project paths must be relative paths inside the isolated workspace.");
  }
  const normalized = path.posix.normalize(raw);
  if (normalized === "." || normalized === ".." || normalized.startsWith("../") ||
      normalized.split("/").some((part) => !part || part === "." || part === "..") ||
      /(^|\/)\.env(?:\.|$)|(^|\/)\.git\/|(^|\/)(?:id_rsa|id_ed25519|known_hosts|authorized_keys)$/i.test(normalized)) {
    throw new Error("That path is not allowed in the temporary coding workspace.");
  }
  return normalized;
}
function shellQuote(value) {
  return "'" + String(value).replace(/'/g, "'\\''") + "'";
}
function artifact(name, mimeType, bytes) {
  const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes);
  if (buffer.length > MAX_ARTIFACT_BYTES) throw new Error("The generated artifact exceeds the download-size limit. Reduce the document or image size.");
  return { name: safeArtifactName(name), mimeType, bytes: buffer.length, base64: buffer.toString("base64") };
}
function safeArtifactName(value) {
  const name = String(value || "artifact").replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-").slice(0, 100);
  return name || "artifact";
}

function stripInlineMarkdown(value) {
  return String(value || "").replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1 ($2)")
    .replace(/[\x60*_~]/g, "")
    .replace(/&nbsp;/g, " ");
}
function wrapLine(text, font, size, maxWidth) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  if (!words.length) return [""];
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? line + " " + word : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    if (font.widthOfTextAtSize(word, size) <= maxWidth) {
      line = word;
    } else {
      let fragment = "";
      for (const char of word) {
        if (fragment && font.widthOfTextAtSize(fragment + char, size) > maxWidth) {
          lines.push(fragment);
          fragment = char;
        } else fragment += char;
      }
      line = fragment;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function createPdf(input) {
  const title = cleanText(input.title || "KaushalPath Report", 140).trim();
  const content = cleanText(input.content, MAX_PDF_TEXT).trim();
  if (!title || !content) return { ok: false, error: "A non-empty title and content are required to create the PDF." };
  const pdf = await PDFDocument.create();
  pdf.setTitle(title);
  pdf.setAuthor("KaushalPath AI");
  pdf.setSubject("AI-generated educational document");
  pdf.setCreator("KaushalPath");
  pdf.setProducer("KaushalPath PDF generator");

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const pageWidth = 595.28, pageHeight = 841.89;
  const margin = 54, maxWidth = pageWidth - margin * 2;
  const ink = rgb(0.15, 0.10, 0.24), muted = rgb(0.42, 0.36, 0.51);
  const purple = rgb(0.27, 0.13, 0.47), lilac = rgb(0.91, 0.86, 0.99);
  const white = rgb(1, 1, 1);
  let page = null, y = 0, pageNumber = 0;

  function addPage(first = false) {
    page = pdf.addPage([pageWidth, pageHeight]);
    pageNumber++;
    page.drawRectangle({ x: 0, y: pageHeight - (first ? 118 : 48), width: pageWidth, height: first ? 118 : 48, color: purple });
    if (first) {
      page.drawText("KAUSHALPATH  /  AI DOCUMENT", { x: margin, y: pageHeight - 36, size: 8, font: bold, color: lilac, characterSpacing: 1.1 });
      const titleLines = wrapLine(title, bold, 23, maxWidth).slice(0, 3);
      let titleY = pageHeight - 70;
      titleLines.forEach((line) => { page.drawText(line, { x: margin, y: titleY, size: 23, font: bold, color: white }); titleY -= 28; });
      page.drawText("Prepared with structured formatting and page navigation", { x: margin, y: pageHeight - 103, size: 8.8, font: regular, color: lilac });
      y = pageHeight - 148;
    } else {
      page.drawText(title.slice(0, 86), { x: margin, y: pageHeight - 30, size: 9.5, font: bold, color: white });
      y = pageHeight - 76;
    }
  }
  function footer() {
    page.drawLine({ start: { x: margin, y: 36 }, end: { x: pageWidth - margin, y: 36 }, thickness: 0.6, color: lilac });
    page.drawText("KaushalPath  |  Verify important facts against primary sources", {
      x: margin, y: 21, size: 7.5, font: regular, color: muted
    });
    const p = String(pageNumber);
    page.drawText("Page " + p, { x: pageWidth - margin - bold.widthOfTextAtSize("Page " + p, 8), y: 21, size: 8, font: bold, color: muted });
  }
  function ensureSpace(height) {
    if (y - height < 54) { footer(); addPage(false); }
  }
  function drawWrapped(text, font, size, lineHeight, color = ink, indent = 0) {
    const lines = wrapLine(text, font, size, maxWidth - indent);
    for (const line of lines) {
      ensureSpace(lineHeight);
      page.drawText(line, { x: margin + indent, y, size, font, color });
      y -= lineHeight;
    }
  }
  addPage(true);
  const normalized = content.replace(/\r\n?/g, "\n");
  const blocks = normalized.split(/\n[ \t]*\n/);
  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    if (!block) continue;
    if (/^---+$/.test(block)) {
      ensureSpace(18);
      page.drawLine({ start: { x: margin, y: y - 1 }, end: { x: pageWidth - margin, y: y - 1 }, thickness: 0.6, color: lilac });
      y -= 14;
      continue;
    }
    const heading = block.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const size = level === 1 ? 16 : level === 2 ? 13 : 11;
      ensureSpace(size + 18);
      if (level === 1) {
        page.drawRectangle({ x: margin - 4, y: y - 4, width: maxWidth + 8, height: 23, color: lilac, opacity: 0.75 });
      }
      y -= level === 1 ? 2 : 0;
      drawWrapped(stripInlineMarkdown(heading[2]), bold, size, size + 5, purple);
      y -= 6;
      continue;
    }
    if (/^\x60\x60\x60/.test(block)) {
      const code = block.replace(/^\x60\x60\x60[^\n]*\n?/, "").replace(/\n?\x60\x60\x60$/, "");
      const codeLines = code.split("\n");
      const approximateHeight = Math.min(codeLines.length, 45) * 12 + 10;
      ensureSpace(approximateHeight);
      page.drawRectangle({ x: margin - 3, y: y - approximateHeight + 4, width: maxWidth + 6, height: approximateHeight, color: rgb(0.96, 0.95, 0.99) });
      for (const line of codeLines.slice(0, 45)) drawWrapped(line || " ", regular, 8.3, 11, ink, 8);
      y -= 5;
      continue;
    }
    const lines = block.split("\n");
    for (const rawLine of lines) {
      const line = stripInlineMarkdown(rawLine.trim());
      if (!line) { y -= 3; continue; }
      const bullet = line.match(/^(?:[-*+]\s+|(\d{1,3})[.)]\s+)(.*)$/);
      if (bullet) {
        const prefix = bullet[1] ? bullet[1] + ". " : "• ";
        drawWrapped(prefix + bullet[2], regular, 9.7, 14, ink, 10);
      } else if (/^>\s?/.test(line)) {
        drawWrapped(line.replace(/^>\s?/, ""), italic, 9.5, 14, muted, 12);
      } else {
        drawWrapped(line, regular, 9.7, 14, ink);
      }
    }
    y -= 8;
  }
  footer();
  const bytes = await pdf.save({ useObjectStreams: true });
  const pdfArtifact = artifact(safeFileName(input.fileName), "application/pdf", bytes);
  return {
    ok: true, created: true, title,
    pageCount: pdf.getPageCount(),
    fileName: pdfArtifact.name,
    sizeBytes: pdfArtifact.bytes,
    note: "PDF generated successfully. The artifact is attached to this response for download.",
    artifacts: [pdfArtifact]
  };
}

async function withSandbox(work, signal) {
  if (!String(process.env.E2B_API_KEY || "").trim()) {
    return {
      ok: false, configured: false,
      error: "Isolated command execution is not configured. Add E2B_API_KEY as a server-side Vercel environment variable, then redeploy. No code ran on the KaushalPath web server."
    };
  }
  let sandbox;
  try {
    const module = await import("e2b");
    const Sandbox = module.default || module.Sandbox;
    if (!Sandbox || typeof Sandbox.create !== "function") throw new Error("The E2B SDK is not available in this deployment.");
    sandbox = await Sandbox.create({ apiKey: String(process.env.E2B_API_KEY).trim() });
    if (signal?.aborted) throw signal.reason || new Error("Client disconnected");
    return await work(sandbox);
  } catch (error) {
    if (signal?.aborted) throw error;
    return { ok: false, configured: true, error: "The isolated sandbox could not complete this task. Check the E2B account/key and retry with a smaller command or workflow." };
  } finally {
    if (sandbox && typeof sandbox.kill === "function") {
      try { await sandbox.kill(); } catch {}
    }
  }
}

async function runCommandInSandbox(sandbox, command, timeoutSeconds) {
  const clean = cleanText(command, 2400).trim();
  if (!clean) throw new Error("A non-empty command is required.");
  if (/\b(?:sudo|su\s+-|shutdown|reboot|mkfs|fdisk|parted|iptables|systemctl|service\s+\w+\s+(?:stop|disable)|rm\s+-rf\s+\/(?:\s|$)|:>\s*\/dev\/|dd\s+if=)\b/i.test(clean)) {
    throw new Error("That command is blocked because it could damage system state. Use a reversible command inside the temporary project folder.");
  }
  const timeoutMs = Math.max(3000, Math.min(20000, (Number(timeoutSeconds) || 12) * 1000));
  const result = await sandbox.commands.run("cd /home/user && " + clean, { timeoutMs });
  return {
    exitCode: Number.isFinite(Number(result?.exitCode)) ? Number(result.exitCode) : null,
    stdout: cleanText(result?.stdout, 10000),
    stderr: cleanText(result?.stderr, 6000),
    command: clean.slice(0, 400)
  };
}

async function codingWorkflow(input, signal) {
  const files = Array.isArray(input.files) ? input.files : [];
  const commands = Array.isArray(input.commands) ? input.commands : [];
  const readPaths = Array.isArray(input.readPaths) ? input.readPaths : [];
  if (files.length > MAX_WORKFLOW_FILES || commands.length < 1 || commands.length > MAX_WORKFLOW_STEPS || readPaths.length > 6) {
    return { ok: false, error: "A coding workflow supports at most 16 files, 6 command steps and 6 read-back paths." };
  }
  const safeFiles = [];
  let totalBytes = 0;
  try {
    for (const item of files) {
      const relative = sanitizeRelativePath(item?.path);
      const content = cleanText(item?.content, 60000);
      totalBytes += Buffer.byteLength(content, "utf8");
      if (totalBytes > MAX_WORKFLOW_BYTES) throw new Error("The project input exceeds 220 KB. Split the project into smaller pieces.");
      safeFiles.push({ path: relative, content });
    }
    const outputs = readPaths.map(sanitizeRelativePath);
    return withSandbox(async (sandbox) => {
      for (const file of safeFiles) {
        const absolute = "/home/user/" + file.path;
        const directory = path.posix.dirname(absolute);
        if (directory !== "/home/user") {
          const mkdir = await sandbox.commands.run("mkdir -p -- " + shellQuote(directory), { timeoutMs: 4000 });
          if (Number(mkdir?.exitCode) !== 0) throw new Error("Could not prepare a project directory.");
        }
        await sandbox.files.write(absolute, file.content);
      }
      const logs = [];
      for (let i = 0; i < commands.length; i++) {
        if (signal?.aborted) throw signal.reason || new Error("Client disconnected");
        const result = await runCommandInSandbox(sandbox, commands[i], 10);
        logs.push({ step: i + 1, ...result });
        if (result.exitCode !== 0) break;
      }
      const returnedFiles = [];
      const artifacts = [];
      for (const file of outputs) {
        try {
          const bytes = await sandbox.files.read("/home/user/" + file);
          const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(typeof bytes === "string" ? bytes : bytes?.content || "");
          if (buffer.length > MAX_ARTIFACT_BYTES) {
            returnedFiles.push({ path: file, error: "File exceeds the read-back limit." });
            continue;
          }
          if (/\.pdf$/i.test(file)) artifacts.push(artifact(path.posix.basename(file), "application/pdf", buffer));
          else if (/\.(?:png|jpe?g|webp)$/i.test(file)) {
            const mime = /\.png$/i.test(file) ? "image/png" : /\.webp$/i.test(file) ? "image/webp" : "image/jpeg";
            artifacts.push(artifact(path.posix.basename(file), mime, buffer));
          } else {
            returnedFiles.push({ path: file, content: buffer.toString("utf8").slice(0, 12000) });
          }
        } catch {
          returnedFiles.push({ path: file, error: "File not found; the command may not have created it." });
        }
      }
      return {
        ok: true, workflow: cleanText(input.goal, 400),
        filesWritten: safeFiles.map((item) => item.path),
        steps: logs,
        passed: logs.every((item) => item.exitCode === 0),
        returnedFiles,
        artifacts,
        note: "The workspace was isolated and destroyed after the workflow. These commands did not modify any GitHub repository or production deployment."
      };
    }, signal);
  } catch (error) {
    return { ok: false, error: String(error?.message || error).slice(0, 280) };
  }
}

function isPublicIPv4(value) {
  const p = String(value || "").split(".").map(Number);
  if (p.length !== 4 || p.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return false;
  const [a,b,c] = p;
  if (a === 0 || a === 10 || a === 127 || a >= 224) return false;
  if (a === 169 && b === 254) return false;
  if (a === 172 && b >= 16 && b <= 31) return false;
  if (a === 192 && (b === 168 || (b === 0 && (c === 0 || c === 2)) || (b === 88 && c === 99))) return false;
  if (a === 100 && b >= 64 && b <= 127) return false;
  if (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) return false;
  if (a === 203 && b === 0 && c === 113) return false;
  return true;
}
async function assertPublicBrowserUrl(raw) {
  let url;
  try { url = new URL(raw); } catch { throw new Error("The browser URL is invalid."); }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("The cloud browser only opens public HTTP(S) URLs without embedded credentials.");
  }
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (!host || host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal") ||
      host === "metadata.google.internal" || host.endsWith(".home") || host.endsWith(".lan")) {
    throw new Error("Private, local and internal URLs are blocked in the cloud browser.");
  }
  let addresses;
  if (isIP(host)) addresses = [{ address: host }];
  else {
    try { addresses = await lookup(host, { all: true, verbatim: true }); }
    catch { throw new Error("The browser host could not be resolved."); }
  }
  if (!addresses.length || addresses.some((entry) => {
    if (isIP(entry.address) === 4) return !isPublicIPv4(entry.address);
    if (isIP(entry.address) === 6) {
      const ip = entry.address.toLowerCase().split("%")[0];
      return !/^[23]/.test(ip) || ip.startsWith("::ffff:") || ip.startsWith("2001:db8:") || ip.startsWith("2002:");
    }
    return true;
  })) throw new Error("The cloud browser cannot access private or special-use IP addresses.");
  url.hash = "";
  return url;
}

async function browserAgent(input, signal) {
  if (!String(process.env.BROWSERBASE_API_KEY || "").trim()) {
    return {
      ok: false, configured: false,
      error: "Real button-click browser automation is not configured. Add BROWSERBASE_API_KEY (and optionally BROWSERBASE_PROJECT_ID) as server-side Vercel environment variables, then redeploy. Public web search/page reading can work without this key."
    };
  }
  const url = await assertPublicBrowserUrl(input.url);
  const actions = Array.isArray(input.actions) ? input.actions.slice(0, MAX_BROWSER_ACTIONS) : [];
  let sessionId = "";
  let browser;
  try {
    const sessionRequest = await fetch("https://api.browserbase.com/v1/sessions", {
      method: "POST",
      headers: {
        "X-BB-API-Key": String(process.env.BROWSERBASE_API_KEY).trim(),
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ...(process.env.BROWSERBASE_PROJECT_ID ? { projectId: String(process.env.BROWSERBASE_PROJECT_ID).trim() } : {}),
        timeout: 60,
        keepAlive: false,
        browserSettings: { viewport: { width: 1440, height: 1000 }, blockAds: true }
      }),
      signal: signal ? AbortSignal.any([AbortSignal.timeout(10000), signal]) : AbortSignal.timeout(10000)
    });
    const sessionData = await sessionRequest.json().catch(() => ({}));
    if (!sessionRequest.ok || !sessionData.connectUrl || !sessionData.id) {
      return { ok: false, configured: true, error: "Browserbase could not create a browser session. Verify the project/API key and current quota." };
    }
    sessionId = String(sessionData.id);
    const { chromium } = await import("playwright-core");
    browser = await chromium.connectOverCDP(String(sessionData.connectUrl));
    const context = browser.contexts()[0] || await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = context.pages()[0] || await context.newPage();
    page.setDefaultTimeout(5500);
    page.setDefaultNavigationTimeout(15000);
    await page.route("**/*", async (route) => {
      const requestUrl = route.request().url();
      if (/^(?:data|blob|about):/i.test(requestUrl)) return route.continue();
      try { await assertPublicBrowserUrl(requestUrl); return route.continue(); }
      catch { return route.abort("blockedbyclient"); }
    });
    await page.goto(url.href, { waitUntil: "domcontentloaded", timeout: 15000 });
    const outcomes = [];
    for (const item of actions) {
      if (signal?.aborted) throw signal.reason || new Error("Client disconnected");
      const action = String(item?.action || "inspect");
      const target = cleanText(item?.target, 240).trim();
      const value = cleanText(item?.value, 1200);
      if (action === "navigate") {
        if (!target) throw new Error("A navigation action requires a public URL in target.");
        const nextUrl = await assertPublicBrowserUrl(target);
        await page.goto(nextUrl.href, { waitUntil: "domcontentloaded", timeout: 15000 });
        outcomes.push({ action, url: page.url(), ok: true });
        continue;
      }
      if (action === "inspect") {
        outcomes.push({ action, ok: true });
        continue;
      }
      let locator;
      if (target.startsWith("css:")) locator = page.locator(target.slice(4)).first();
      else if (item.role) locator = page.getByRole(item.role, { name: target, exact: true }).first();
      else if (action === "fill" || action === "select") locator = page.getByLabel(target, { exact: true }).first();
      else locator = page.getByText(target, { exact: true }).first();
      if (action === "wait") {
        await locator.waitFor({ state: "visible", timeout: 5000 });
      } else if (action === "fill") {
        const type = String(await locator.getAttribute("type").catch(() => "") || "").toLowerCase();
        const tag = String(await locator.evaluate((element) => element.tagName).catch(() => "") || "").toLowerCase();
        if (type === "password" || type === "file" || ["hidden"].includes(type)) throw new Error("Password, file-upload and hidden fields cannot be filled.");
        if (tag !== "input" && tag !== "textarea" && tag !== "select") throw new Error("Only visible text, email, search, number and ordinary form fields can be filled.");
        await locator.fill(value, { timeout: 5000 });
      } else if (action === "click") {
        const label = cleanText(await locator.innerText().catch(() => target), 220).toLowerCase();
        if (/\b(?:pay now|checkout|purchase|buy now|place order|delete account|delete permanently|remove account|transfer funds|confirm payment|publish|send message|log out|logout)\b/i.test(label)) {
          throw new Error("This action could have a sensitive real-world effect, so the browser agent will not click it.");
        }
        await locator.click({ timeout: 5000 });
      } else if (action === "press") {
        if (!["ENTER", "TAB", "ESCAPE", "ARROWDOWN", "ARROWUP", "SPACE"].includes(value.toUpperCase())) throw new Error("Only Enter, Tab, Escape, ArrowDown, ArrowUp and Space are supported keys.");
        await locator.press(value, { timeout: 5000 });
      } else if (action === "select") {
        await locator.selectOption(value, { timeout: 5000 });
      }
      outcomes.push({ action, target: target.slice(0, 120), ok: true, url: page.url() });
    }
    const snapshot = await page.evaluate(() => {
      const visible = (element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
      };
      const text = (element) => (element.innerText || element.getAttribute("aria-label") || element.getAttribute("title") || "").trim().replace(/\s+/g, " ").slice(0, 160);
      const buttons = Array.from(document.querySelectorAll("button,[role=button],input[type=button],input[type=submit]")).filter(visible).slice(0, 40).map(text).filter(Boolean);
      const links = Array.from(document.querySelectorAll("a[href]")).filter(visible).slice(0, 45).map((el) => ({ text: text(el), href: el.href })).filter((item) => item.text && /^https?:/i.test(item.href));
      const inputs = Array.from(document.querySelectorAll("input:not([type=password]):not([type=file]):not([type=hidden]),textarea,select")).filter(visible).slice(0, 30).map((el) => ({
        type: (el.getAttribute("type") || el.tagName.toLowerCase()).slice(0, 24),
        label: (el.labels && el.labels[0] && el.labels[0].innerText || el.getAttribute("aria-label") || el.getAttribute("placeholder") || el.getAttribute("name") || "").trim().slice(0, 100)
      }));
      return {
        title: document.title || "",
        url: location.href,
        headings: Array.from(document.querySelectorAll("h1,h2,h3")).filter(visible).slice(0, 20).map(text).filter(Boolean),
        buttons,
        links,
        inputs,
        text: (document.body?.innerText || "").replace(/\n{3,}/g, "\n\n").slice(0, 12000)
      };
    });
    const artifacts = [];
    if (input.screenshot === true) {
      const image = await page.screenshot({ type: "png", fullPage: false, timeout: 5000 });
      artifacts.push(artifact("browser-screenshot.png", "image/png", image));
    }
    return {
      ok: true, browserUsed: true, goal: cleanText(input.goal, 500), url: snapshot.url,
      title: snapshot.title, headings: snapshot.headings, visibleButtons: snapshot.buttons,
      links: snapshot.links, formFields: snapshot.inputs, pageText: snapshot.text,
      actions: outcomes, artifacts,
      note: "Only visible public-page UI elements were inspected or interacted with; no account login or sensitive action was performed."
    };
  } catch (error) {
    if (signal?.aborted) throw error;
    return { ok: false, browserUsed: Boolean(browser), error: String(error?.message || "Browser automation failed.").slice(0, 300) };
  } finally {
    if (browser) { try { await browser.close(); } catch {} }
    if (sessionId && process.env.BROWSERBASE_API_KEY) {
      try {
        await fetch("https://api.browserbase.com/v1/sessions/" + encodeURIComponent(sessionId), {
          method: "POST",
          headers: { "X-BB-API-Key": String(process.env.BROWSERBASE_API_KEY).trim(), "Content-Type": "application/json" },
          body: JSON.stringify({ status: "REQUEST_RELEASE" }),
          signal: AbortSignal.timeout(3500)
        });
      } catch {}
    }
  }
}

export async function executeAgenticTool(name, args, signal) {
  const input = args && typeof args === "object" && !Array.isArray(args) ? args : {};
  if (name === "create_pdf_document") return createPdf(input);
  if (name === "sandbox_execute") {
    const command = cleanText(input.command, 2400).trim();
    if (!command) return { ok: false, error: "Provide a command to run in the isolated sandbox." };
    return withSandbox(async (sandbox) => ({
      ok: true, environment: "ephemeral E2B cloud sandbox", ...await runCommandInSandbox(sandbox, command, input.timeoutSeconds),
      note: "Executed outside the KaushalPath server. The sandbox is destroyed after this command."
    }), signal);
  }
  if (name === "coding_workflow") return codingWorkflow(input, signal);
  if (name === "browser_agent") return browserAgent(input, signal);
  return { ok: false, error: "This agentic tool is not available." };
}
