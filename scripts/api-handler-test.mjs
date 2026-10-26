import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import handler, { createPinnedLookup, executeQuantumTool, isQuantumIntent, QUANTUM_TOOL_DEFINITIONS } from "../api/study-guide.mjs";
import { zipSync, strToU8 } from "fflate";
import sharp from "sharp";

const bellQasm = [
  "OPENQASM 3.0;",
  'include "stdgates.inc";',
  "qubit[2] q;",
  "bit[2] c;",
  "h q[0];",
  "cx q[0], q[1];",
  "c = measure q;"
].join("\n");
assert.equal(isQuantumIntent("Please simulate this quantum circuit"), true, "quantum prompts should route through the tool-calling agent");
assert.equal(isQuantumIntent("Help me write an English essay"), false, "ordinary requests should retain the regular study route");
assert.deepEqual(
  QUANTUM_TOOL_DEFINITIONS.map((tool) => tool.function.name),
  ["quantum_validate_qasm", "quantum_simulate_qasm", "qbraid_list_devices", "qbraid_estimate_job_cost"],
  "the model should receive the expected safe quantum tool definitions"
);
const bellValidation = await executeQuantumTool("quantum_validate_qasm", { qasm: bellQasm });
assert.equal(bellValidation.ok, true, "the Bell-state QASM should pass the learning parser");
assert.equal(bellValidation.stats.numQubits, 2);
assert.equal(bellValidation.stats.gateCount, 2);
const bellSimulation = await executeQuantumTool("quantum_simulate_qasm", { qasm: bellQasm });
assert.equal(bellSimulation.ok, true);
assert.equal(bellSimulation.qbraidRemoteExecution, false, "local simulation must not be mistaken for a remote qBraid run");
assert.ok(Math.abs(bellSimulation.outcomes.find((outcome) => outcome.bitstring === "00").probability - 0.5) < 1e-9);
assert.ok(Math.abs(bellSimulation.outcomes.find((outcome) => outcome.bitstring === "11").probability - 0.5) < 1e-9);
const invalidQuantum = await executeQuantumTool("quantum_simulate_qasm", { qasm: "OPENQASM 3.0; qubit[1] q; magic q[0];" });
assert.equal(invalidQuantum.ok, false, "unsupported gates should never receive invented simulation results");
const priorQbraidKey = process.env.QBRAID_API_KEY;
delete process.env.QBRAID_API_KEY;
const noQbraidKey = await executeQuantumTool("qbraid_list_devices", {});
assert.equal(noQbraidKey.configured, false, "the qBraid server tools should require a server-side API key");
assert.match(noQbraidKey.error, /QBRAID_API_KEY/i);
if (priorQbraidKey === undefined) delete process.env.QBRAID_API_KEY; else process.env.QBRAID_API_KEY = priorQbraidKey;

const originalFetchForQbraidTest = globalThis.fetch;
const originalKeyForQbraidTest = process.env.QBRAID_API_KEY;
const qbraidRequests = [];
process.env.QBRAID_API_KEY = "unit-test-qbraid-key";
globalThis.fetch = async (url, options = {}) => {
  qbraidRequests.push({ url: String(url), headers: options.headers || {} });
  assert.ok(String(url).startsWith("https://api-v2.qbraid.com/api/v1/"), "qBraid calls should use its fixed HTTPS REST host");
  assert.equal(options.headers && options.headers["X-API-KEY"], "unit-test-qbraid-key", "the key must be sent only from the server");
  if (String(url).includes("/jobs/cost-estimate?")) {
    return new Response(JSON.stringify({ success: true, data: { deviceQrn: "simulator.test", shots: 512, pricingAvailable: true, estimatedCost: 2.5 } }), {
      status: 200, headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return new Response(JSON.stringify({ success: true, data: [{
    name: "Test Simulator", qrn: "simulator.test", vendor: "TestVendor",
    deviceType: "SIMULATOR", status: "ONLINE", numberQubits: 24,
    runInputTypes: ["openqasm"], pricingModel: "simulator", directAccess: true
  }] }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
};
try {
  const devices = await executeQuantumTool("qbraid_list_devices", { deviceType: "SIMULATOR" });
  assert.equal(devices.ok, true);
  assert.equal(devices.devices[0].qrn, "simulator.test");
  const estimate = await executeQuantumTool("qbraid_estimate_job_cost", { deviceQrn: "simulator.test", shots: 512 });
  assert.equal(estimate.ok, true);
  assert.equal(estimate.estimatedCost, 2.5);
  assert.equal(estimate.shots, 512);
  assert.equal(qbraidRequests.length, 2);
  assert.doesNotMatch(JSON.stringify([devices, estimate]), /unit-test-qbraid-key/, "qBraid API keys must never appear in tool results");
} finally {
  globalThis.fetch = originalFetchForQbraidTest;
  if (originalKeyForQbraidTest === undefined) delete process.env.QBRAID_API_KEY; else process.env.QBRAID_API_KEY = originalKeyForQbraidTest;
}



function makeResponse({ blockFirstWrite = false, disconnectOnFirstWrite = false } = {}) {
  const events = new EventEmitter();
  return {
    statusCode: 200,
    headers: {},
    payload: undefined,
    ended: false,
    writableEnded: false,
    finished: false,
    _blockFirstWrite: blockFirstWrite,
    _disconnectOnFirstWrite: disconnectOnFirstWrite,
    _hasWritten: false,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; return this; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.payload = value; this.ended = true; this.writableEnded = true; return this; },
    write(value) {
      this.writes = (this.writes || "") + (typeof value === "string" ? value : Buffer.from(value).toString("utf8"));
      if (!this._hasWritten) {
        this._hasWritten = true;
        if (this._blockFirstWrite) { queueMicrotask(() => events.emit("drain")); return false; }
        if (this._disconnectOnFirstWrite) queueMicrotask(() => events.emit("close"));
      }
      return true;
    },
    end() { this.ended = true; this.writableEnded = true; this.finished = true; return this; },
    once: events.once.bind(events),
    on: events.on.bind(events),
    removeListener: events.removeListener.bind(events),
    emit: events.emit.bind(events)
  };
}
async function call(request, response = makeResponse()) {
  await handler(request, response);
  return response;
}

const safeLookup = createPinnedLookup([{ address: "93.184.216.34", family: 4 }]);
const pinnedResult = await new Promise((resolve, reject) => safeLookup("rebound.example", { all: false, family: 0 }, (error, address, family) => error ? reject(error) : resolve({ address, family })));
assert.deepEqual(pinnedResult, { address: "93.184.216.34", family: 4 }, "research connections should use the exact prevalidated IP, not a second DNS lookup");
const pinnedAll = await new Promise((resolve, reject) => safeLookup("rebound.example", { all: true }, (error, addresses) => error ? reject(error) : resolve(addresses)));
assert.deepEqual(pinnedAll, [{ address: "93.184.216.34", family: 4 }], "the pinned lookup should preserve the validated address list");
assert.throws(() => createPinnedLookup([{ address: "127.0.0.1", family: 4 }]), /validated public IP/i, "private destinations must never enter a pinned research lookup");
assert.throws(() => createPinnedLookup([{ address: "169.254.169.254", family: 4 }]), /validated public IP/i, "cloud metadata destinations must never enter a pinned research lookup");
assert.throws(() => createPinnedLookup([{ address: "93.184.216.34", family: 4 }, { address: "10.0.0.5", family: 4 }]), /validated public IP/i, "one unsafe DNS answer must reject the entire address set");
assert.throws(() => createPinnedLookup([{ address: "::ffff:127.0.0.1", family: 6 }]), /validated public IP/i, "IPv4-mapped loopback destinations must be rejected");

assert.throws(() => createPinnedLookup([{ address: "192.0.0.1", family: 4 }]), /validated public IP/i, "IETF special-use IPv4 space must be rejected");
assert.throws(() => createPinnedLookup([{ address: "192.88.99.1", family: 4 }]), /validated public IP/i, "deprecated 6to4 relay IPv4 space must be rejected");
assert.throws(() => createPinnedLookup([{ address: "198.51.100.42", family: 4 }]), /validated public IP/i, "IPv4 documentation ranges must be rejected");
assert.throws(() => createPinnedLookup([{ address: "2001:0000::1", family: 6 }]), /validated public IP/i, "expanded IETF special-use IPv6 addresses must be normalized and rejected");
assert.throws(() => createPinnedLookup([{ address: "2001:0002::1", family: 6 }]), /validated public IP/i, "IPv6 benchmarking ranges must be rejected");
assert.throws(() => createPinnedLookup([{ address: "2001:0010::1", family: 6 }]), /validated public IP/i, "expanded ORCHID ranges must be rejected");
assert.throws(() => createPinnedLookup([{ address: "2001:0020::1", family: 6 }]), /validated public IP/i, "expanded ORCHIDv2 ranges must be rejected");
assert.throws(() => createPinnedLookup([{ address: "2002:0808:0808::1", family: 6 }]), /validated public IP/i, "deprecated IPv6 6to4 addresses must be rejected");
assert.throws(() => createPinnedLookup([{ address: "3fff::1", family: 6 }]), /validated public IP/i, "IPv6 documentation addresses must be rejected");
assert.doesNotThrow(() => createPinnedLookup([{ address: "2606:4700:4700::1111", family: 6 }]), "a globally routable IPv6 address should remain usable");


assert.ok(typeof handler === "function", "the study API module should initialize without browser-only DOMMatrix globals");
const wrongMethod = await call({ method: "GET", headers: {} });
assert.equal(wrongMethod.statusCode, 405, "status details must not be returned without the status header");
assert.equal(wrongMethod.headers.allow, undefined, "GET denial should not falsely advertise method support");

const health = await call({ method: "GET", headers: { "x-kaushalpath-status": "1" } });
assert.equal(health.statusCode, 200, "the status endpoint should remain usable for health probes");
assert.equal(health.payload.ready, true);
assert.equal(health.headers["cache-control"], "no-store, max-age=0", "health data should never be cached");
assert.equal(health.headers["x-content-type-options"], "nosniff", "JSON API responses should disable MIME sniffing");
assert.equal(health.headers["referrer-policy"], "no-referrer", "JSON API responses should not leak referrers");
assert.match(health.headers["x-request-id"], /^[0-9a-f-]{36}$/i, "every API response should have a server-generated request ID");
assert.deepEqual(health.payload.features, { liveSearch: true, readPublicUrls: true, imageAnalysis: true, quantumTools: true, qBraidCloud: Boolean(process.env.QBRAID_API_KEY) });
assert.doesNotMatch(JSON.stringify(health.payload), /model|provider|qwen|kilo|inclusionai|webgpu/i, "health output must not reveal model/provider/runtime metadata");

const methodNotAllowed = await call({ method: "OPTIONS", headers: {} });
assert.equal(methodNotAllowed.statusCode, 405);
assert.equal(methodNotAllowed.headers.allow, "GET, POST");

const malformed = await call({ method: "POST", headers: {}, body: "{broken json" });
assert.equal(malformed.statusCode, 400);
assert.match(malformed.headers["x-request-id"], /^[0-9a-f-]{36}$/i, "validation errors should retain a trace ID header");
assert.match(malformed.payload.error, /valid JSON/i);

const tooLarge = await call({ method: "POST", headers: { "content-length": "4100001" }, body: {} });
assert.equal(tooLarge.statusCode, 413);

const shortPrompt = await call({ method: "POST", headers: {}, body: { prompt: "help" } });
assert.equal(shortPrompt.statusCode, 400);
assert.match(shortPrompt.payload.error, /specific question/i);

const tooManyUrls = await call({
  method: "POST",
  headers: {},
  body: {
    prompt: "Explain these sources carefully for my revision",
    urls: ["https://a.example", "https://b.example", "https://c.example", "https://d.example", "https://e.example", "https://f.example"]
  }
});
assert.equal(tooManyUrls.statusCode, 400);
assert.match(tooManyUrls.payload.error, /no more than 5 URLs/i);

const invalidUrlScheme = await call({
  method: "POST",
  headers: {},
  body: { prompt: "Explain this source to help with revision", urls: ["file:///etc/passwd"] }
});
assert.equal(invalidUrlScheme.statusCode, 400);
assert.match(invalidUrlScheme.payload.error, /public HTTP or HTTPS/i);

const malformedImageData = await call({
  method: "POST",
  headers: {},
  body: { prompt: "Please explain the attached figure for my exam", imageData: "not-a-data-url" }
});
assert.equal(malformedImageData.statusCode, 400);
assert.match(malformedImageData.payload.error, /supported format/i);

const malformedFileData = await call({
  method: "POST",
  headers: {},
  body: {
    prompt: "Please explain this document for my exam",
    fileName: "lesson.pdf",
    fileType: "application/pdf",
    fileData: "not-a-data-url"
  }
});
assert.equal(malformedFileData.statusCode, 400);
assert.match(malformedFileData.payload.error, /supported format/i);

const fakeImageMime = await call({
  method: "POST",
  headers: {},
  body: { prompt: "Please explain the attached figure for my exam", imageData: "data:text/plain;base64,SGVsbG8=" }
});
assert.equal(fakeImageMime.statusCode, 400);
assert.match(fakeImageMime.payload.error, /not a supported image/i);

const unsupportedFile = await call({
  method: "POST",
  headers: {},
  body: {
    prompt: "Please explain this attached file for my exam",
    fileName: "payload.exe",
    fileType: "application/octet-stream",
    fileData: "data:application/octet-stream;base64,YWJj"
  }
});
assert.equal(unsupportedFile.statusCode, 422);
assert.match(unsupportedFile.payload.error, /Supported files/i);

// A tiny Office ZIP whose central directory claims a 13 MiB entry must be rejected before extraction.
const zipBomb = Buffer.from(zipSync({ "ppt/slides/slide1.xml": strToU8("<a:t>tiny</a:t>") }));
const centralDirectorySignature = Buffer.from([0x50, 0x4b, 0x01, 0x02]);
const centralEntryOffset = zipBomb.indexOf(centralDirectorySignature);
assert.ok(centralEntryOffset >= 0, "test archive should contain a ZIP central directory entry");
zipBomb.writeUInt32LE(13 * 1024 * 1024, centralEntryOffset + 24);
const zipBombResponse = await call({
  method: "POST",
  headers: {},
  body: {
    prompt: "Please explain this presentation for my exam",
    fileName: "oversized.pptx",
    fileType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    fileData: "data:application/zip;base64," + zipBomb.toString("base64")
  }
});
assert.equal(zipBombResponse.statusCode, 422);
assert.match(zipBombResponse.payload.error, /archive entry that is too large/i);

const malformedOffice = await call({
  method: "POST",
  headers: {},
  body: {
    prompt: "Please explain this document for my exam",
    fileName: "broken.docx",
    fileType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileData: "data:application/zip;base64," + Buffer.from("not a zip archive").toString("base64")
  }
});
assert.equal(malformedOffice.statusCode, 422);
assert.match(malformedOffice.payload.error, /not a valid ZIP archive/i);

const testSvg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4"><rect width="6" height="4" fill="#fff"/><rect x="1" y="1" width="4" height="2" fill="#4f46e5"/></svg>');
const validPngDataUrl = "data:image/png;base64," + (await sharp(testSvg).png().toBuffer()).toString("base64");
const validWebpDataUrl = "data:image/webp;base64," + (await sharp(testSvg).webp().toBuffer()).toString("base64");
const validSvgDataUrl = "data:image/svg+xml;base64," + testSvg.toString("base64");

// Exercise valid text and image request paths with a mocked provider response.
const originalFetch = globalThis.fetch;
const originalKiloKey = process.env.KILO_API_KEY;
const mockedRequests = [];
const mockedRequestHeaders = [];
globalThis.fetch = async (url, options = {}) => {
  assert.match(String(url), /(?:api\.kilo\.ai\/api\/gateway\/chat\/completions|ai-gateway\.kilo\.ai\/api\/v1\/chat\/completions)/, "study requests should use an official Kilo Gateway endpoint");
  const payload = JSON.parse(options.body);
  mockedRequests.push(payload);
  mockedRequestHeaders.push(options.headers || {});
  const lastMessage = payload.messages.at(-1);
  const requestText = typeof lastMessage.content === "string" ? lastMessage.content : Array.isArray(lastMessage.content) ? lastMessage.content.filter((part) => part.type === "text").map((part) => part.text).join(" ") : "";
  if (requestText.includes("AUTH_FALLBACK_TEST") && options.headers && options.headers.Authorization) return new Response(JSON.stringify({ error: { message: "invalid optional key" } }), { status: 401, headers: { "content-type": "application/json; charset=utf-8" } });
  if (requestText.includes("ENDPOINT_FALLBACK_TEST") && String(url).includes("api.kilo.ai/api/gateway")) return new Response(JSON.stringify({ error: { message: "temporary gateway response" } }), { status: 503, headers: { "content-type": "application/json; charset=utf-8" } });
  if (requestText.includes("RATE_LIMIT_TEST")) return new Response(JSON.stringify({ error: { message: "rate limit reached" } }), { status: 429, headers: { "content-type": "application/json; charset=utf-8" } });
  if (payload.tools && payload.messages.some((message) => message.role === "tool")) {
    const toolMessages = payload.messages.filter((message) => message.role === "tool");
    const resultText = toolMessages.map((message) => String(message.content || "")).join("\n");
    return new Response(JSON.stringify({
      id: "mock-quantum-final",
      choices: [{ message: { content: "The Bell circuit was validated and simulated. The ideal results are 00 and 11 at 50% each." } }]
    }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  }
  if (payload.tools && requestText.includes("QUANTUM_AGENT_TEST")) {
    const source = [
      "OPENQASM 3.0;",
      'include "stdgates.inc";',
      "qubit[2] q;",
      "bit[2] c;",
      "h q[0];",
      "cx q[0], q[1];",
      "c = measure q;"
    ].join("\n");
    return new Response(JSON.stringify({
      id: "mock-quantum-call",
      choices: [{
        message: {
          role: "assistant",
          content: null,
          tool_calls: [
            { id: "call_validate", type: "function", function: { name: "quantum_validate_qasm", arguments: JSON.stringify({ qasm: source }) } },
            { id: "call_simulate", type: "function", function: { name: "quantum_simulate_qasm", arguments: JSON.stringify({ qasm: source }) } }
          ]
        }
      }]
    }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  }
  if (payload.stream) {
    const encoder = new TextEncoder();
    const disconnectTest = requestText.includes("DISCONNECT_TEST");
    return new Response(new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode('data: {"choices":[{"delta":{"content":"streamed study chunk"}}]}\n\n'));
        if (!disconnectTest) {
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } else {
          options.signal.addEventListener("abort", () => controller.error(new Error("upstream cancelled")), { once: true });
        }
      }
    }), { status: 200, headers: { "content-type": "text/event-stream; charset=utf-8" } });
  }
  return new Response(JSON.stringify({
    id: "mock-request",
    choices: [{ message: { content: "Mocked study answer with checked steps." } }]
  }), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
};
try {
  const textRoundtrip = await call({
    method: "POST",
    headers: {},
    body: {
      prompt: "Explain this attached lesson for my exam revision",
      mode: "explain",
      fileName: "lesson.txt",
      fileType: "text/plain",
      fileText: "Photosynthesis uses light energy to convert carbon dioxide and water into sugars and oxygen."
    }
  });
  assert.equal(textRoundtrip.statusCode, 200);
  assert.equal(textRoundtrip.payload.text, "Mocked study answer with checked steps.");
assert.equal(textRoundtrip.payload.requestId, textRoundtrip.headers["x-request-id"], "successful responses should return the same trace ID as the header");
  const textInput = mockedRequests[0].messages.at(-1).content;
  assert.match(textInput, /Uploaded file: lesson\.txt/, "text attachment metadata should reach the model input");
  assert.match(textInput, /Photosynthesis uses light energy/, "extracted text should reach the model input");
  assert.doesNotMatch(JSON.stringify(textRoundtrip.payload), /kilo-auto\/free|inclusionai|model|provider/i, "response payload should not expose provider metadata");

  const imageRoundtrip = await call({
    method: "POST",
    headers: {},
    body: {
      prompt: "Explain this figure and identify its important exam labels",
      mode: "solve",
      imageData: validPngDataUrl
    }
  });
  assert.equal(imageRoundtrip.statusCode, 200);
  assert.equal(imageRoundtrip.payload.text, "Mocked study answer with checked steps.");
assert.equal(imageRoundtrip.payload.requestId, imageRoundtrip.headers["x-request-id"], "image responses should return the same trace ID as the header");
  const imageParts = mockedRequests[1].messages.at(-1).content;
  assert.ok(Array.isArray(imageParts), "image questions should use multimodal input");
  assert.ok(imageParts.some((part) => part.type === "image_url"), "the uploaded image should reach the multimodal model input");
  const normalizedPng = imageParts.find((part) => part.type === "image_url").image_url.url;
  assert.match(normalizedPng, /^data:image\/png;base64,/, "a real PNG should remain PNG after validation and normalization");
  assert.notEqual(normalizedPng, validPngDataUrl, "uploaded images should be re-encoded to discard original metadata and orientation");

  assert.doesNotMatch(JSON.stringify(imageRoundtrip.payload), /kilo-auto\/free|inclusionai|model|provider/i, "image response payload should hide provider metadata");
  const webpRoundtrip = await call({
    method: "POST", headers: {},
    body: { prompt: "Explain the attached WebP diagram", mode: "solve", imageData: validWebpDataUrl }
  });
  assert.equal(webpRoundtrip.statusCode, 200, "valid WebP uploads should be accepted");
  const webpParts = mockedRequests[2].messages.at(-1).content;
  assert.match(webpParts.find((part) => part.type === "image_url").image_url.url, /^data:image\/webp;base64,/, "WebP images should remain supported after normalization");

  const svgRoundtrip = await call({
    method: "POST", headers: {},
    body: { prompt: "Read the labels in this vector diagram", mode: "solve", imageData: validSvgDataUrl }
  });
  assert.equal(svgRoundtrip.statusCode, 200, "valid SVG image uploads should be rasterized before model submission");
  const svgParts = mockedRequests[3].messages.at(-1).content;
  assert.match(svgParts.find((part) => part.type === "image_url").image_url.url, /^data:image\/jpeg;base64,/, "vector formats should be rasterized to a provider-supported image type");


  const quantumAgentResponse = await call({
    method: "POST",
    headers: {},
    body: { prompt: "QUANTUM_AGENT_TEST: validate and simulate this Bell state circuit", stream: true }
  });
  assert.equal(quantumAgentResponse.statusCode, 200, "quantum prompts should complete through the AI's tool-calling flow");
  assert.match(quantumAgentResponse.payload.text, /Bell circuit was validated and simulated/i);
  assert.equal(quantumAgentResponse.payload.quantumToolsUsed, true, "the API should report that its quantum tools were invoked");
  assert.equal(quantumAgentResponse.payload.quantumToolsAvailable, true);
  const quantumAgentRequest = mockedRequests.find((request) => request.tools && request.messages.some((message) => message.role === "tool"));
  assert.ok(quantumAgentRequest, "the model should receive structured quantum tool results on its next turn");
  const quantumToolResults = quantumAgentRequest.messages.filter((message) => message.role === "tool").map((message) => JSON.parse(message.content));
  assert.equal(quantumToolResults.length, 2);
  assert.equal(quantumToolResults[0].valid, true, "the validation tool should return its real structured result");
  assert.ok(Math.abs(quantumToolResults[1].outcomes.find((outcome) => outcome.bitstring === "00").probability - 0.5) < 1e-9);
  assert.ok(Math.abs(quantumToolResults[1].outcomes.find((outcome) => outcome.bitstring === "11").probability - 0.5) < 1e-9);

  const countBeforeInvalidImage = mockedRequests.length;
  const invalidImage = await call({
    method: "POST", headers: {},
    body: { prompt: "Read this broken diagram", mode: "solve", imageData: "data:image/png;base64,YWJj" }
  });
  assert.equal(invalidImage.statusCode, 422, "corrupt images should get a clear client error");
  assert.match(invalidImage.payload.error, /could not be decoded safely/i);
  assert.equal(mockedRequests.length, countBeforeInvalidImage, "invalid image bytes must never be forwarded to the AI gateway");

  const beforeAuthFallback = mockedRequests.length;
  process.env.KILO_API_KEY = "stale-test-key";
  const authFallback = await call({
    method: "POST", headers: {},
    body: { prompt: "Please run AUTH_FALLBACK_TEST to recover the AI study service", stream: false }
  });
  assert.equal(authFallback.statusCode, 200, "a stale optional key should fall back to anonymous inference for free models");
  assert.equal(mockedRequests.length, beforeAuthFallback + 2, "auth recovery should make one keyed request then one anonymous request");
  assert.ok(mockedRequestHeaders[beforeAuthFallback].Authorization, "first recovery attempt should use the configured key");
  assert.equal(mockedRequestHeaders[beforeAuthFallback + 1].Authorization, undefined, "anonymous recovery must not include the stale key");
  if (originalKiloKey === undefined) delete process.env.KILO_API_KEY; else process.env.KILO_API_KEY = originalKiloKey;

  const beforeEndpointFallback = mockedRequests.length;
  const alternateEndpointResponse = await call({
    method: "POST", headers: {},
    body: { prompt: "Please run ENDPOINT_FALLBACK_TEST to check gateway failover", stream: false }
  });
  assert.equal(alternateEndpointResponse.statusCode, 200, "a transient primary gateway failure should try the second documented endpoint");
  assert.equal(mockedRequests.length, beforeEndpointFallback + 2, "endpoint failover should retry once, not loop");
  assert.match(String(mockedRequestHeaders[beforeEndpointFallback].Accept || ""), /application\/json/i);

  const rateLimitedResponse = await call({
    method: "POST",
    headers: {},
    body: { prompt: "Please run RATE_LIMIT_TEST and explain my revision topic" }
  });
  assert.equal(rateLimitedResponse.statusCode, 429, "upstream rate limiting should remain distinguishable to callers");
  assert.equal(rateLimitedResponse.headers["retry-after"], "15", "rate-limited responses should say when to retry");
  assert.equal(rateLimitedResponse.payload.requestId, rateLimitedResponse.headers["x-request-id"], "rate-limit errors should include their trace ID");
  assert.match(rateLimitedResponse.payload.error, /temporarily busy/i, "rate-limit errors should remain student-friendly");
  assert.doesNotMatch(JSON.stringify(rateLimitedResponse.payload), /kilo|inclusionai|provider|model/i, "rate-limit responses must not leak provider configuration");

  const streamedResponse = await call({
    method: "POST", headers: {},
    body: { prompt: "Please explain streaming study output step by step", stream: true }
  }, makeResponse({ blockFirstWrite: true }));
  assert.equal(streamedResponse.statusCode, 200, "streaming study requests should open an event stream");
  assert.match(streamedResponse.headers["content-type"], /text\/event-stream/i);
  assert.match(streamedResponse.headers["cache-control"], /no-store/i, "private streamed answers must not be cached");
  assert.equal(streamedResponse.headers["referrer-policy"], "no-referrer", "streamed answers should also set a restrictive referrer policy");
  assert.match(streamedResponse.writes, /streamed study chunk/, "upstream streamed content should reach the client");
  assert.equal(streamedResponse.ended, true, "the stream should close after the upstream completion event");
  assert.equal(streamedResponse._hasWritten, true, "the stream test should exercise response backpressure");

  const disconnectedResponse = await call({
    method: "POST", headers: {},
    body: { prompt: "Please explain DISCONNECT_TEST while I review for exams", stream: true }
  }, makeResponse({ disconnectOnFirstWrite: true }));
  assert.equal(disconnectedResponse._hasWritten, true, "the disconnect scenario should start receiving stream data");
  assert.equal(disconnectedResponse.ended, false, "a disconnected client should not trigger a second response write/end");

} finally {
  globalThis.fetch = originalFetch;
  if (originalKiloKey === undefined) delete process.env.KILO_API_KEY; else process.env.KILO_API_KEY = originalKiloKey;
}

console.log("KaushalPath API handler validation tests passed.");
