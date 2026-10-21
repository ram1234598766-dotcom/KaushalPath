import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import handler, { createPinnedLookup } from "../api/study-guide.mjs";
import { zipSync, strToU8 } from "fflate";

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

const wrongMethod = await call({ method: "GET", headers: {} });
assert.equal(wrongMethod.statusCode, 405, "status details must not be returned without the status header");
assert.equal(wrongMethod.headers.allow, undefined, "GET denial should not falsely advertise method support");

const health = await call({ method: "GET", headers: { "x-kaushalpath-status": "1" } });
assert.equal(health.statusCode, 200, "the status endpoint should remain usable for health probes");
assert.equal(health.payload.ready, true);
assert.match(health.headers["x-request-id"], /^[0-9a-f-]{36}$/i, "every API response should have a server-generated request ID");
assert.deepEqual(health.payload.features, { liveSearch: true, readPublicUrls: true, imageAnalysis: true });
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

// Exercise valid text and image request paths with a mocked provider response.
const originalFetch = globalThis.fetch;
const mockedRequests = [];
globalThis.fetch = async (url, options = {}) => {
  assert.match(String(url), /api\.kilo\.ai\/api\/gateway\/chat\/completions/, "valid study requests should call the configured server-side gateway");
  const payload = JSON.parse(options.body);
  mockedRequests.push(payload);
  const lastMessage = payload.messages.at(-1);
  const requestText = typeof lastMessage.content === "string" ? lastMessage.content : Array.isArray(lastMessage.content) ? lastMessage.content.filter((part) => part.type === "text").map((part) => part.text).join(" ") : "";
  if (requestText.includes("RATE_LIMIT_TEST")) return new Response(JSON.stringify({ error: { message: "rate limit reached" } }), { status: 429, headers: { "content-type": "application/json; charset=utf-8" } });
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
      imageData: "data:image/png;base64,YWJj"
    }
  });
  assert.equal(imageRoundtrip.statusCode, 200);
  assert.equal(imageRoundtrip.payload.text, "Mocked study answer with checked steps.");
assert.equal(imageRoundtrip.payload.requestId, imageRoundtrip.headers["x-request-id"], "image responses should return the same trace ID as the header");
  const imageParts = mockedRequests[1].messages.at(-1).content;
  assert.ok(Array.isArray(imageParts), "image questions should use multimodal input");
  assert.ok(imageParts.some((part) => part.type === "image_url"), "the uploaded image should reach the multimodal model input");
  assert.doesNotMatch(JSON.stringify(imageRoundtrip.payload), /kilo-auto\/free|inclusionai|model|provider/i, "image response payload should hide provider metadata");
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
}

console.log("KaushalPath API handler validation tests passed.");
