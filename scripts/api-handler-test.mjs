import assert from "node:assert/strict";
import handler from "../api/study-guide.mjs";

function makeResponse() {
  return {
    statusCode: 200,
    headers: {},
    payload: undefined,
    ended: false,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; return this; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.payload = value; this.ended = true; return this; },
    write(value) { this.writes = (this.writes || "") + value; return true; },
    end() { this.ended = true; return this; }
  };
}
async function call(request) {
  const response = makeResponse();
  await handler(request, response);
  return response;
}

const wrongMethod = await call({ method: "GET", headers: {} });
assert.equal(wrongMethod.statusCode, 405, "status details must not be returned without the status header");
assert.equal(wrongMethod.headers.allow, undefined, "GET denial should not falsely advertise method support");

const health = await call({ method: "GET", headers: { "x-kaushalpath-status": "1" } });
assert.equal(health.statusCode, 200, "the status endpoint should remain usable for health probes");
assert.equal(health.payload.ready, true);
assert.deepEqual(health.payload.features, { liveSearch: true, readPublicUrls: true, imageAnalysis: true });
assert.doesNotMatch(JSON.stringify(health.payload), /model|provider|qwen|kilo|inclusionai|webgpu/i, "health output must not reveal model/provider/runtime metadata");

const methodNotAllowed = await call({ method: "OPTIONS", headers: {} });
assert.equal(methodNotAllowed.statusCode, 405);
assert.equal(methodNotAllowed.headers.allow, "GET, POST");

const malformed = await call({ method: "POST", headers: {}, body: "{broken json" });
assert.equal(malformed.statusCode, 400);
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

console.log("KaushalPath API handler validation tests passed.");
