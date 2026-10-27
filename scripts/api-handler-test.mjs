import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import handler, { createPinnedLookup, executeAITool, executeQuantumTool, isQuantumIntent, QUANTUM_TOOL_DEFINITIONS, remoteQasmFingerprint, shouldAutoBrowse, getToolDefinitionsForQuery } from "../api/study-guide.mjs";
import { AGENTIC_TOOL_DEFINITIONS, executeAgenticTool } from "../api/agentic-tools.mjs";
import { onRequest as handleWorkerStudyGuide } from "../functions/api/study-guide.js";
import { FREE_LIVE_DATA_TOOL_DEFINITIONS, detectFreeLiveDataIntent, formatFreeLiveDataResponse } from "../api/free-live-data.mjs";
import { AI_SKILLS, AI_SKILL_COUNT, selectActiveSkills, selectToolDomains } from "../api/ai-skill-registry.mjs";
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

assert.ok(AI_SKILL_COUNT >= 150, "the private AI skill registry must contain at least 150 skills");
assert.equal(AI_SKILLS.length, AI_SKILL_COUNT, "the registry count should match its actual private catalogue");
assert.equal(new Set(AI_SKILLS.map((skill) => skill.id)).size, AI_SKILL_COUNT, "each private skill should have a unique ID");
assert.deepEqual(
  AGENTIC_TOOL_DEFINITIONS.map((tool) => tool.function.name),
  ["create_pdf_document", "sandbox_execute", "coding_workflow", "browser_agent"],
  "PDF, isolated command execution, coding and browser interactions should be registered privately"
);
assert.equal(shouldAutoBrowse("Compare the latest Python packaging options", false), true, "technical/research questions should browse by default");
assert.equal(shouldAutoBrowse("Translate this paragraph into Hindi", false), false, "straight translation requests should not incur unnecessary browsing");
assert.equal(shouldAutoBrowse("What is shown in this worksheet?", true), false, "image questions should focus on the supplied image rather than sending it to web search");
assert.ok(getToolDefinitionsForQuery("Create a downloadable PDF handout").some((tool) => tool.function.name === "create_pdf_document"), "PDF tasks should automatically select the private PDF generator");
assert.ok(getToolDefinitionsForQuery("Interact with browser by clicking a button on this website").some((tool) => tool.function.name === "browser_agent"), "website click workflows should automatically select the private browser agent");
assert.ok(getToolDefinitionsForQuery("Write some code and run tests").some((tool) => tool.function.name === "coding_workflow"), "coding tasks should automatically select the agentic coding workflow");
assert.ok(getToolDefinitionsForQuery("Execute this Python script in a sandbox").some((tool) => tool.function.name === "sandbox_execute"), "explicit command execution should select the isolated execution tool");
assert.deepEqual(
  FREE_LIVE_DATA_TOOL_DEFINITIONS.map((tool) => tool.function.name),
  ["live_weather", "live_exchange_rate", "live_earthquakes", "live_news", "live_public_holidays"],
  "five public data tools should be registered without provider keys"
);
assert.ok(getToolDefinitionsForQuery("What is the current weather in Hyderabad?").some((tool) => tool.function.name === "live_weather"), "weather requests should select Open-Meteo");
assert.ok(getToolDefinitionsForQuery("What is the latest USD to INR exchange rate?").some((tool) => tool.function.name === "live_exchange_rate"), "currency-rate requests should select Frankfurter");
assert.ok(getToolDefinitionsForQuery("Show recent earthquakes in the last day").some((tool) => tool.function.name === "live_earthquakes"), "earthquake requests should select the USGS feed");
assert.ok(getToolDefinitionsForQuery("Give me the latest technology news headlines").some((tool) => tool.function.name === "live_news"), "news headline requests should select the BBC RSS feed");
assert.ok(getToolDefinitionsForQuery("List public holidays in India this year").some((tool) => tool.function.name === "live_public_holidays"), "holiday requests should select Nager.Date");
assert.deepEqual(
  detectFreeLiveDataIntent("What is the current weather in Hyderabad, India?"),
  { name: "live_weather", args: { location: "Hyderabad, India" } },
  "clear weather questions should have a direct keyless provider path"
);
assert.deepEqual(
  detectFreeLiveDataIntent("What is the latest USD to INR exchange rate?"),
  { name: "live_exchange_rate", args: { baseCurrency: "USD", quoteCurrency: "INR" } },
  "clear currency questions should have a direct reference-rate path"
);
assert.equal(detectFreeLiveDataIntent("Explain how weather forecasting models work"), null, "conceptual questions should still go through the AI");
assert.match(
  formatFreeLiveDataResponse("live_exchange_rate", { ok: true, provider: "Frankfurter", baseCurrency: "EUR", quoteCurrency: "JPY", rate: 176.42, date: "2026-10-23", sourceUrl: "https://api.frankfurter.dev/v2/rate/EUR/JPY", retrievedAt: "2026-10-26T00:00:00.000Z", note: "Daily reference rate." }, { amount: 2 }),
  /2 EUR = 352\.84 JPY/,
  "the direct formatter should apply a requested conversion amount to the live reference rate"
);


assert.ok(selectActiveSkills("solve quantum QAOA optimization on qBraid", 12).length >= 5, "base skills should always be auto-activated");
assert.ok(selectToolDomains("design and simulate a quantum circuit").has("quantum"), "quantum prompts should automatically enable quantum tools");
assert.ok(selectToolDomains("calculate statistics from this CSV dataset").has("data"), "data tasks should automatically enable data tools");
assert.equal((await executeAITool("math_evaluate_expression", { expression: "sqrt(81) + pi^0" })).result, 10, "restricted expression evaluation should calculate without eval");
assert.equal((await executeAITool("matrix_compute", { operation: "determinant", matrixA: [[1, 2], [3, 4]] })).determinant, -2, "matrix utilities should calculate real results");
const originalFetchForLiveData = globalThis.fetch;
const liveDataFetchUrls = [];
globalThis.fetch = async function (input) {
  const url = String(input);
  liveDataFetchUrls.push(url);
  let payload;
  if (url.startsWith("https://geocoding-api.open-meteo.com/")) {
    if (url.includes("name=Pune")) throw new TypeError("simulated Worker provider egress failure");
    payload = { results: [{ name: "Hyderabad", admin1: "Telangana", country: "India", latitude: 17.385, longitude: 78.4867 }] };
  } else if (url.startsWith("https://api.open-meteo.com/v1/forecast")) {
    payload = {
      timezone: "Asia/Kolkata",
      current: { time: "2026-10-26T12:00", temperature_2m: 30.5, apparent_temperature: 33.1, relative_humidity_2m: 48, precipitation: 0, weather_code: 2, wind_speed_10m: 8.5, wind_direction_10m: 120 },
      current_units: { temperature_2m: "°C", wind_speed_10m: "km/h" },
      daily: { time: ["2026-10-26", "2026-10-27"], temperature_2m_min: [24, 23], temperature_2m_max: [32, 31], precipitation_probability_max: [10, 20], sunrise: ["06:10", "06:10"], sunset: ["17:55", "17:54"] },
      daily_units: { temperature_2m_min: "°C", temperature_2m_max: "°C" }
    };
  } else if (url === "https://api.frankfurter.dev/v2/rate/EUR/JPY") {
    payload = { date: "2026-10-23", base: "EUR", quote: "JPY", rate: 176.42 };
  } else if (url === "https://kaushal-path.vercel.app/api/study-guide") {
    return new Response(JSON.stringify({
      text: "Live-data fallback answered by Vercel.",
      sources: [{ title: "Open-Meteo", url: "https://open-meteo.com/" }],
      liveSources: true,
      liveData: true
    }), { status: 200, headers: { "content-type": "application/json" } });
  } else {
    throw new Error("Unexpected test URL: " + url);
  }
  return new Response(JSON.stringify(payload), { status: 200, headers: { "content-type": "application/json" } });
};
try {
  const liveWeatherTest = await executeAITool("live_weather", { location: "Hyderabad" });
  assert.equal(liveWeatherTest.ok, true, "weather tool should normalize a keyless provider response");
  assert.equal(liveWeatherTest.current.temperature, 30.5);
  assert.equal(liveWeatherTest.location.country, "India");
  assert.equal(liveWeatherTest.forecastDays.length, 2);
  const liveExchangeTest = await executeAITool("live_exchange_rate", { baseCurrency: "EUR", quoteCurrency: "JPY" });
  assert.equal(liveExchangeTest.ok, true, "exchange tool should return latest reference-rate data");
  assert.equal(liveExchangeTest.rate, 176.42);
  assert.equal(liveExchangeTest.date, "2026-10-23");
  const invalidCurrencyTest = await executeAITool("live_exchange_rate", { baseCurrency: "EURO", quoteCurrency: "INR" });
  assert.equal(invalidCurrencyTest.ok, false, "currency codes should be validated before network access");
  const missingWorkerSignalTest = await executeAITool("live_weather", { location: "Pune" }, {});
  assert.equal(missingWorkerSignalTest.ok, true, "live-data tools should use their timeout signal when a runtime supplies no valid request AbortSignal");
  assert.equal(liveDataFetchUrls.length, 4, "mocked live-data tests should make two weather, one FX and one extra geocoding request for the signal compatibility check");

  const fallbackRequest = new Request("https://kaushalpath.kaushalpath.workers.dev/api/study-guide", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ prompt: "What is the current weather in Pune?", webSearch: false, mode: "explain", stream: false })
  });
  const fallbackResponse = await handleWorkerStudyGuide({ request: fallbackRequest, env: {} });
  const fallbackPayload = await fallbackResponse.json();
  assert.equal(fallbackResponse.status, 200, "Worker should fall back to Vercel when a keyless public provider fails");
  assert.equal(fallbackPayload.liveData, true, "the fallback should return the provider result, not a model error");
  assert.match(fallbackPayload.text, /Live-data fallback answered by Vercel/);
  assert.ok(liveDataFetchUrls.includes("https://kaushal-path.vercel.app/api/study-guide"), "provider failure should trigger the existing Vercel API as a fallback");
} finally {
  globalThis.fetch = originalFetchForLiveData;
}

const quboBaseline = await executeAITool("quantum_solve_qubo", { variables: 2, linear: [-1, 2], quadratic: [{ i: 0, j: 1, coefficient: 4 }], sense: "minimize" });
assert.equal(quboBaseline.ok, true);
assert.deepEqual(quboBaseline.assignment, [1, 0], "exact QUBO baseline should return the minimizing bit assignment");
assert.equal(quboBaseline.bestValue, -1);
const truthTable = await executeAITool("boolean_truth_table", { expression: "A & !B" });
assert.equal(truthTable.ok, true);
assert.equal(truthTable.rows.length, 4);
const pdfResult = await executeAgenticTool("create_pdf_document", {
  title: "Agentic PDF Test",
  fileName: "agentic-test.pdf",
  content: "# Overview\n\nA real PDF with readable formatting.\n\n## Checkpoints\n\n- Multi-page layout support\n- Download artifact"
});
assert.equal(pdfResult.ok, true, "PDF creation should produce a real file");
assert.equal(pdfResult.artifacts.length, 1);
assert.equal(pdfResult.artifacts[0].mimeType, "application/pdf");
assert.equal(Buffer.from(pdfResult.artifacts[0].base64, "base64").subarray(0, 5).toString("ascii"), "%PDF-", "the generated artifact must contain actual PDF bytes");
const priorE2BKey = process.env.E2B_API_KEY;
const priorBrowserbaseKey = process.env.BROWSERBASE_API_KEY;
delete process.env.E2B_API_KEY;
delete process.env.BROWSERBASE_API_KEY;
try {
  const unavailableCommand = await executeAgenticTool("sandbox_execute", { command: "echo must-not-run" });
  assert.equal(unavailableCommand.configured, false, "command execution must fail closed without the isolated sandbox key");
  const unavailableBrowser = await executeAgenticTool("browser_agent", { url: "https://example.com", goal: "inspect visible page" });
  assert.equal(unavailableBrowser.configured, false, "browser automation must fail closed without a browser provider key");
  const badWorkspace = await executeAgenticTool("coding_workflow", {
    goal: "reject traversal",
    files: [{ path: "../outside.txt", content: "unsafe" }],
    commands: ["echo no"]
  });
  assert.equal(badWorkspace.ok, false, "coding workspace paths must reject directory traversal before sandbox use");
} finally {
  if (priorE2BKey === undefined) delete process.env.E2B_API_KEY; else process.env.E2B_API_KEY = priorE2BKey;
  if (priorBrowserbaseKey === undefined) delete process.env.BROWSERBASE_API_KEY; else process.env.BROWSERBASE_API_KEY = priorBrowserbaseKey;
}

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
  qbraidRequests.push({ url: String(url), method: options.method || "GET", headers: options.headers || {} });
  assert.ok(String(url).startsWith("https://api-v2.qbraid.com/api/v1/"), "qBraid calls should use its fixed HTTPS REST host");
  assert.equal(options.headers && options.headers["X-API-KEY"], "unit-test-qbraid-key", "the key must be sent only from the server");
  if (String(url).endsWith("/jobs") && options.method === "POST") {
    return new Response(JSON.stringify({ success: true, data: { jobQrn: "job.test", status: "QUEUED" } }), {
      status: 200, headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
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

  const remoteQasm = [
    "OPENQASM 3.0;",
    'include "stdgates.inc";',
    "qubit[1] q;",
    "bit[1] c;",
    "x q[0];",
    "c = measure q;"
  ].join("\n");
  const request = { qasm: remoteQasm, deviceQrn: "simulator.test", shots: 512, expectedCost: 2.5 };
  const countBeforeConfirmation = qbraidRequests.filter((item) => item.method === "POST" && item.url.endsWith("/jobs")).length;
  const preview = await executeQuantumTool("qbraid_submit_job", request);
  assert.equal(preview.requiresConfirmation, true, "remote quantum jobs must ask for exact cost/device/circuit confirmation");
  assert.equal(preview.circuitFingerprint, remoteQasmFingerprint(remoteQasm));
  assert.match(preview.confirmationText, /CONFIRM QUANTUM RUN/);
  assert.equal(qbraidRequests.filter((item) => item.method === "POST" && item.url.endsWith("/jobs")).length, countBeforeConfirmation, "a first tool call must never submit a paid job");
  const approved = await executeQuantumTool("qbraid_submit_job", request, undefined, {
    confirmed: true, complete: true, deviceQrn: "simulator.test", shots: 512, estimatedCost: 2.5,
    circuitFingerprint: remoteQasmFingerprint(remoteQasm)
  });
  assert.equal(approved.ok, true);
  assert.equal(approved.submitted, true, "the exact confirmed run should pass the guarded path against a mocked qBraid API");
  assert.equal(approved.jobQrn, "job.test");
  assert.equal(qbraidRequests.filter((item) => item.method === "POST" && item.url.endsWith("/jobs")).length, countBeforeConfirmation + 1);
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
assert.deepEqual(health.payload.features, {
  liveSearch: true, readPublicUrls: true, imageAnalysis: true, quantumTools: true,
  qBraidCloud: Boolean(process.env.QBRAID_API_KEY),
  pdfGeneration: true,
  commandExecution: Boolean(process.env.E2B_API_KEY),
  agenticCoding: Boolean(process.env.E2B_API_KEY),
  browserAutomation: Boolean(process.env.BROWSERBASE_API_KEY)
});
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
    if (JSON.stringify(payload.messages).includes("TOOL_FOLLOWUP_REJECT_TEST")) return new Response(JSON.stringify({ error: { message: "tool result follow-up not supported by this provider" } }), { status: 400, headers: { "content-type": "application/json; charset=utf-8" } });
    const toolMessages = payload.messages.filter((message) => message.role === "tool");
    const resultText = toolMessages.map((message) => String(message.content || "")).join("\n");
    return new Response(JSON.stringify({
      id: "mock-quantum-final",
      choices: [{ message: { content: "The Bell circuit was validated and simulated. The ideal results are 00 and 11 at 50% each." } }]
    }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  }
  if (payload.tools && (requestText.includes("QUANTUM_AGENT_TEST") || requestText.includes("TOOL_FOLLOWUP_REJECT_TEST"))) {
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
  assert.equal(Object.hasOwn(quantumAgentResponse.payload, "quantumToolsUsed"), false, "tool-use metadata should not be exposed in the public response");
  assert.equal(Object.hasOwn(quantumAgentResponse.payload, "skills"), false, "private skill metadata should not be exposed in the public response");
  const quantumAgentRequest = mockedRequests.find((request) => request.tools && request.messages.some((message) => message.role === "tool"));
  assert.ok(quantumAgentRequest, "the model should receive structured quantum tool results on its next turn");
  const quantumToolResults = quantumAgentRequest.messages.filter((message) => message.role === "tool").map((message) => JSON.parse(message.content));
  assert.equal(quantumToolResults.length, 2);
  assert.equal(quantumToolResults[0].valid, true, "the validation tool should return its real structured result");
  assert.ok(Math.abs(quantumToolResults[1].outcomes.find((outcome) => outcome.bitstring === "00").probability - 0.5) < 1e-9);
  assert.ok(Math.abs(quantumToolResults[1].outcomes.find((outcome) => outcome.bitstring === "11").probability - 0.5) < 1e-9);

  const beforeToolFallback = mockedRequests.length;
  const fallbackResponse = await call({
    method: "POST",
    headers: {},
    body: { prompt: "TOOL_FOLLOWUP_REJECT_TEST: validate and simulate this Bell state circuit", stream: false }
  });
  assert.equal(fallbackResponse.statusCode, 200, "a gateway rejection after tool execution should fall back instead of returning HTTP 502");
  assert.match(fallbackResponse.payload.text, /Mocked study answer with checked steps/);
  const fallbackRequest = mockedRequests.slice(beforeToolFallback).find((request) =>
    !request.tools && request.messages.some((message) => message.role === "user" &&
      typeof message.content === "string" && message.content.includes("Trusted backend tool results"))
  );
  assert.ok(fallbackRequest, "the safe plain-chat fallback should keep actual backend tool results while removing incompatible tool protocol messages");
  assert.match(fallbackRequest.messages.at(-1).content, /idealProbabilities/, "fallback context should retain the true simulator output");

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
