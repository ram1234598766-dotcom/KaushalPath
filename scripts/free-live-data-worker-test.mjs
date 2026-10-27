import assert from "node:assert/strict";
import { onRequest } from "../functions/api/study-guide.js";

const ORIGINAL_FETCH = globalThis.fetch;
const PROVIDER_CALLS = [];
globalThis.fetch = async function (input) {
  const url = String(input);
  PROVIDER_CALLS.push(url);
  if (url.startsWith("https://geocoding-api.open-meteo.com/")) {
    return new Response(JSON.stringify({
      results: [{ name: "Hyderabad", admin1: "Telangana", country: "India", latitude: 17.38, longitude: 78.45 }]
    }), { status: 200, headers: { "content-type": "application/json" } });
  }
  if (url.startsWith("https://api.open-meteo.com/v1/forecast")) {
    return new Response(JSON.stringify({
      timezone: "Asia/Kolkata",
      current: { time: "2026-10-27T18:00", temperature_2m: 29.2, apparent_temperature: 31, relative_humidity_2m: 57, precipitation: 0, weather_code: 2, wind_speed_10m: 7, wind_direction_10m: 100 },
      current_units: { temperature_2m: "°C", apparent_temperature: "°C", relative_humidity_2m: "%", wind_speed_10m: "km/h", precipitation: "mm" },
      daily: { time: ["2026-10-27"], temperature_2m_min: [23], temperature_2m_max: [31], precipitation_probability_max: [10], sunrise: ["06:15"], sunset: ["17:50"] },
      daily_units: { temperature_2m_min: "°C", temperature_2m_max: "°C" }
    }), { status: 200, headers: { "content-type": "application/json" } });
  }
  if (url === "https://api.frankfurter.dev/v2/rate/USD/INR") {
    return new Response(JSON.stringify({
      date: "2026-10-26", base: "USD", quote: "INR", rate: 94.96
    }), { status: 200, headers: { "content-type": "application/json" } });
  }
  if (url.startsWith("https://date.nager.at/api/v3/PublicHolidays/")) {
    return new Response(null, { status: 204 });
  }
  throw new Error("Unexpected provider URL in isolated Worker test: " + url);
};

const ORIGIN = "https://kaushal-path.vercel.app";
const WORKER_URL = "https://kaushalpath.kaushalpath.workers.dev/api/study-guide";

try {
  const preflight = await onRequest({
    request: new Request(WORKER_URL, {
      method: "OPTIONS",
      headers: {
        Origin: ORIGIN,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type"
      }
    }),
    env: {}
  });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("access-control-allow-origin"), ORIGIN);
  assert.match(preflight.headers.get("access-control-allow-methods") || "", /POST/);

  const weatherResponse = await onRequest({
    request: new Request(WORKER_URL, {
      method: "POST",
      headers: { Origin: ORIGIN, "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "What is the current weather in Hyderabad, India?", webSearch: false, stream: true })
    }),
    env: {}
  });
  const weather = await weatherResponse.json();
  assert.equal(weatherResponse.status, 200);
  assert.equal(weather.liveData, true);
  assert.match(weather.text, /Current weather: Hyderabad, Telangana, India/);
  assert.match(weather.text, /29.2/);
  assert.equal(weatherResponse.headers.get("access-control-allow-origin"), ORIGIN);

  const rateResponse = await onRequest({
    request: new Request(WORKER_URL, {
      method: "POST",
      headers: { Origin: ORIGIN, "Content-Type": "application/json" },
      body: JSON.stringify({ userPrompt: "What is the latest USD to INR exchange rate?" })
    }),
    env: {}
  });
  const rate = await rateResponse.json();
  assert.equal(rateResponse.status, 200);
  assert.equal(rate.liveData, true);
  assert.match(rate.text, /94.96 INR/);

  const emptyHolidayResponse = await onRequest({
    request: new Request(WORKER_URL, {
      method: "POST",
      headers: { Origin: ORIGIN, "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "List public holidays in India this year." })
    }),
    env: {}
  });
  const holidayError = await emptyHolidayResponse.json();
  assert.equal(emptyHolidayResponse.status, 503);
  assert.equal(holidayError.liveData, false);
  assert.match(holidayError.error, /returned no records/i);

  const ordinaryResponse = await onRequest({
    request: new Request(WORKER_URL, {
      method: "POST",
      headers: { Origin: ORIGIN, "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Explain Newton's second law simply." })
    }),
    env: { VERCEL_API_BASE_URL: "https://kaushal-path.vercel.app" }
  });
  assert.equal(ordinaryResponse.status, 502, "ordinary prompts should continue to proxy to Vercel and clearly report unavailable upstream during this isolated test");
  assert.equal(PROVIDER_CALLS.filter((url) => url.startsWith("https://geocoding-api.open-meteo.com/") || url.startsWith("https://api.open-meteo.com/") || url.startsWith("https://api.frankfurter.dev/") || url.startsWith("https://date.nager.at/")).length, 4, "only weather's two requests, FX and holiday should hit public data providers");
} finally {
  globalThis.fetch = ORIGINAL_FETCH;
}

console.log("Cloudflare keyless live-data Worker checks passed.");
