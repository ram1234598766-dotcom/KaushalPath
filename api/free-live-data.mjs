/*
 * Keyless public-data tools for KaushalPath.
 * Provider APIs are called server-side, with bounded responses, timeouts and
 * opportunistic in-process caching. No provider keys or user credentials are used.
 */
const CACHE = new Map();
const MAX_CACHE_ENTRIES = 120;
const DEFAULT_TIMEOUT_MS = 9000;

export const FREE_LIVE_DATA_TOOL_DEFINITIONS = [
  {
    type: "function",
    function: {
      name: "live_weather",
      description: "Fetch current conditions and a three-day forecast for a named place from Open-Meteo. No API key required. Use for current weather, temperature, rain or forecast questions. Weather-model data refresh cadence varies; include the reported observation time and attribution.",
      parameters: {
        type: "object",
        properties: { location: { type: "string", minLength: 2, maxLength: 120 } },
        required: ["location"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "live_exchange_rate",
      description: "Fetch the latest available daily reference exchange rate from Frankfurter. No API key required. These are reference rates, generally updated on working days, not tick-by-tick trading quotes. Use ISO 4217 three-letter currency codes.",
      parameters: {
        type: "object",
        properties: {
          baseCurrency: { type: "string", pattern: "^[A-Za-z]{3}$" },
          quoteCurrency: { type: "string", pattern: "^[A-Za-z]{3}$" }
        },
        required: ["baseCurrency", "quoteCurrency"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "live_earthquakes",
      description: "Read recent earthquake events from the USGS public GeoJSON feeds without an API key. Use when asked about recent earthquakes or seismic activity. Returns event timestamps, magnitudes, depths and original event links; this is not a prediction tool.",
      parameters: {
        type: "object",
        properties: { sinceHours: { type: "integer", enum: [1, 24, 168] } },
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "live_news",
      description: "Read recent headlines and short feed summaries from public BBC News RSS feeds, with original article links and publication timestamps. No API key required. RSS updates are periodic, not second-by-second; show headlines with attribution and links, not full article text.",
      parameters: {
        type: "object",
        properties: { topic: { type: "string", enum: ["top", "world", "technology", "science", "business"] } },
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "live_public_holidays",
      description: "Fetch public-holiday calendar data for an ISO 3166-1 alpha-2 country code and year from Nager.Date. No API key required. This is calendar/reference data, not a live event feed; some lunar holidays may depend on local announcements.",
      parameters: {
        type: "object",
        properties: {
          countryCode: { type: "string", pattern: "^[A-Za-z]{2}$" },
          year: { type: "integer", minimum: 1900, maximum: 2100 }
        },
        required: ["countryCode"],
        additionalProperties: false
      }
    }
  }
];

function cached(key, ttlMs, loader) {
  const now = Date.now();
  const existing = CACHE.get(key);
  if (existing && existing.expiresAt > now) return existing.promise;
  const promise = Promise.resolve().then(loader);
  CACHE.set(key, { expiresAt: now + ttlMs, promise: promise });
  while (CACHE.size > MAX_CACHE_ENTRIES) CACHE.delete(CACHE.keys().next().value);
  promise.catch(function () {
    const current = CACHE.get(key);
    if (current && current.promise === promise) CACHE.delete(key);
  });
  return promise;
}

async function readPublicText(url, accept, signal, maxChars) {
  const deadline = AbortSignal.timeout(DEFAULT_TIMEOUT_MS);
  const requestSignal = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: accept || "application/json" },
    redirect: "error",
    signal: requestSignal
  });
  if (!response.ok) {
    const error = new Error("Provider returned HTTP " + response.status);
    error.status = response.status;
    throw error;
  }
  const content = await response.text();
  if (content.length > (maxChars || 1500000)) throw new Error("Provider response exceeded the safety size limit.");
  return content;
}

async function readPublicJson(url, provider, signal, ttlMs) {
  return cached(provider + ":" + url, ttlMs, async function () {
    const body = await readPublicText(url, "application/json", signal, 1500000);
    try { return JSON.parse(body); }
    catch { throw new Error("Provider returned invalid JSON."); }
  });
}

function cleanString(value, maxLength) {
  return String(value == null ? "" : value).replace(/\u0000/g, "").trim().slice(0, maxLength || 200);
}

function publicError(provider, error, signal) {
  if (signal && signal.aborted) return "The request was cancelled.";
  const status = Number(error && error.status);
  if (status === 429) return provider + " is rate-limiting requests. Wait briefly and retry.";
  if (status === 404) return "No matching result was returned by " + provider + ". Check the requested place or codes.";
  if (status === 401 || status === 403) return provider + " refused the public request. Retry later or use the provider link.";
  if (error && (error.name === "TimeoutError" || error.name === "AbortError")) return provider + " timed out. Retry shortly.";
  return provider + " could not return data right now. Retry shortly.";
}

function decodeXmlText(value) {
  let text = String(value || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1");
  text = text.replace(/<[^>]*>/g, " ");
  text = text.replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"").replace(/&apos;|&#39;/gi, "'");
  text = text.replace(/&#(\d+);/g, function (_, digits) {
    const point = Number(digits);
    return point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : " ";
  }).replace(/&#x([0-9a-f]+);/gi, function (_, digits) {
    const point = parseInt(digits, 16);
    return Number.isFinite(point) && point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : " ";
  });
  return text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function xmlTag(item, tagName) {
  const match = item.match(new RegExp("<" + tagName + "(?:\\s[^>]*)?>([\\s\\S]*?)<\\/" + tagName + "\\s*>", "i"));
  return match ? decodeXmlText(match[1]) : "";
}

function weatherDescription(code) {
  const descriptions = {
    0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
    45: "Fog", 48: "Depositing rime fog", 51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle",
    56: "Light freezing drizzle", 57: "Dense freezing drizzle", 61: "Slight rain", 63: "Moderate rain",
    65: "Heavy rain", 66: "Light freezing rain", 67: "Heavy freezing rain", 71: "Slight snow",
    73: "Moderate snow", 75: "Heavy snow", 77: "Snow grains", 80: "Slight rain showers",
    81: "Moderate rain showers", 82: "Violent rain showers", 85: "Slight snow showers",
    86: "Heavy snow showers", 95: "Thunderstorm", 96: "Thunderstorm with slight hail", 99: "Thunderstorm with heavy hail"
  };
  return descriptions[Number(code)] || "Weather code " + String(code);
}

async function getWeather(input, signal) {
  const location = cleanString(input.location, 120);
  if (location.length < 2) return { ok: false, error: "Provide a place name, such as Hyderabad or Delhi." };
  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoUrl.searchParams.set("name", location);
  geoUrl.searchParams.set("count", "1");
  geoUrl.searchParams.set("language", "en");
  geoUrl.searchParams.set("format", "json");
  const geo = await readPublicJson(geoUrl.toString(), "Open-Meteo geocoding", signal, 21600000);
  const place = Array.isArray(geo.results) ? geo.results[0] : null;
  if (!place || !Number.isFinite(Number(place.latitude)) || !Number.isFinite(Number(place.longitude))) {
    return { ok: false, provider: "Open-Meteo", error: "No matching place was found. Try a city and country name." };
  }
  const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
  forecastUrl.searchParams.set("latitude", String(place.latitude));
  forecastUrl.searchParams.set("longitude", String(place.longitude));
  forecastUrl.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m");
  forecastUrl.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset");
  forecastUrl.searchParams.set("forecast_days", "3");
  forecastUrl.searchParams.set("timezone", "auto");
  const data = await readPublicJson(forecastUrl.toString(), "Open-Meteo forecast", signal, 90000);
  const current = data.current || {};
  const daily = data.daily || {};
  const days = (Array.isArray(daily.time) ? daily.time : []).slice(0, 3).map(function (date, index) {
    return {
      date: date,
      minimum: Array.isArray(daily.temperature_2m_min) ? daily.temperature_2m_min[index] : null,
      maximum: Array.isArray(daily.temperature_2m_max) ? daily.temperature_2m_max[index] : null,
      precipitationProbabilityMax: Array.isArray(daily.precipitation_probability_max) ? daily.precipitation_probability_max[index] : null,
      sunrise: Array.isArray(daily.sunrise) ? daily.sunrise[index] : null,
      sunset: Array.isArray(daily.sunset) ? daily.sunset[index] : null
    };
  });
  return {
    ok: true,
    provider: "Open-Meteo",
    sourceUrl: "https://open-meteo.com/",
    attribution: "Weather data by Open-Meteo; attribution under CC BY 4.0 is required.",
    retrievedAt: new Date().toISOString(),
    updateNote: "Model updates vary by region and weather model; the values are the provider's latest available conditions, not a promise of second-by-second sensor readings.",
    location: {
      name: cleanString(place.name, 100),
      admin1: cleanString(place.admin1, 100) || null,
      country: cleanString(place.country, 100) || null,
      latitude: Number(place.latitude),
      longitude: Number(place.longitude),
      timezone: data.timezone || null
    },
    current: {
      observedAt: current.time || null,
      temperature: current.temperature_2m == null ? null : current.temperature_2m,
      feelsLike: current.apparent_temperature == null ? null : current.apparent_temperature,
      relativeHumidity: current.relative_humidity_2m == null ? null : current.relative_humidity_2m,
      precipitation: current.precipitation == null ? null : current.precipitation,
      weatherCode: current.weather_code == null ? null : current.weather_code,
      description: current.weather_code == null ? null : weatherDescription(current.weather_code),
      windSpeed: current.wind_speed_10m == null ? null : current.wind_speed_10m,
      windDirection: current.wind_direction_10m == null ? null : current.wind_direction_10m,
      units: data.current_units || {}
    },
    forecastDays: days,
    dailyUnits: data.daily_units || {}
  };
}

async function getExchangeRate(input, signal) {
  const base = String(input.baseCurrency == null ? "" : input.baseCurrency).trim().toUpperCase();
  const quote = String(input.quoteCurrency == null ? "" : input.quoteCurrency).trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(base) || !/^[A-Z]{3}$/.test(quote)) {
    return { ok: false, error: "Use three-letter ISO currency codes, for example USD and INR." };
  }
  if (base === quote) return { ok: true, provider: "Frankfurter", baseCurrency: base, quoteCurrency: quote, rate: 1, date: new Date().toISOString().slice(0, 10), note: "A currency converted to itself has a rate of 1." };
  const url = "https://api.frankfurter.dev/v2/rate/" + encodeURIComponent(base) + "/" + encodeURIComponent(quote);
  const data = await readPublicJson(url, "Frankfurter", signal, 3600000);
  if (!data || !Number.isFinite(Number(data.rate))) {
    return { ok: false, provider: "Frankfurter", error: "No rate was returned for " + base + "/" + quote + "." };
  }
  return {
    ok: true,
    provider: "Frankfurter",
    sourceUrl: url,
    retrievedAt: new Date().toISOString(),
    baseCurrency: String(data.base || base).toUpperCase(),
    quoteCurrency: String(data.quote || quote).toUpperCase(),
    rate: Number(data.rate),
    date: data.date || null,
    note: "Latest available daily reference rate from official central-bank sources; rates are generally updated on working days and are not tick-by-tick trading prices."
  };
}

async function getEarthquakes(input, signal) {
  const hours = input.sinceHours == null ? 24 : Number(input.sinceHours);
  if (![1, 24, 168].includes(hours)) return { ok: false, error: "Choose sinceHours as 1, 24, or 168." };
  const feedName = hours === 1 ? "all_hour" : (hours === 24 ? "all_day" : "all_week");
  const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/" + feedName + ".geojson";
  const data = await readPublicJson(url, "USGS Earthquake Feed", signal, 90000);
  const cutoff = Date.now() - hours * 3600000;
  const features = Array.isArray(data.features) ? data.features : [];
  const matching = features.filter(function (feature) {
    return feature && feature.properties && Number(feature.properties.time) >= cutoff;
  });
  matching.sort(function (a, b) { return Number(b.properties.time) - Number(a.properties.time); });
  return {
    ok: true,
    provider: "USGS Earthquake Hazards Program",
    sourceUrl: url,
    retrievedAt: new Date().toISOString(),
    timeWindowHours: hours,
    matchingEventCount: matching.length,
    events: matching.slice(0, 12).map(function (feature) {
      const properties = feature.properties || {};
      const coordinates = feature.geometry && Array.isArray(feature.geometry.coordinates) ? feature.geometry.coordinates : [];
      return {
        magnitude: Number.isFinite(Number(properties.mag)) ? Number(properties.mag) : null,
        place: cleanString(properties.place, 240),
        time: Number.isFinite(Number(properties.time)) ? new Date(Number(properties.time)).toISOString() : null,
        depthKm: Number.isFinite(Number(coordinates[2])) ? Number(coordinates[2]) : null,
        tsunami: Boolean(properties.tsunami),
        eventUrl: typeof properties.url === "string" ? properties.url : null,
        eventType: cleanString(properties.type, 50) || null
      };
    }),
    note: "Recent reported events from USGS feeds. Earthquake events are not predictions; magnitudes and locations may be revised as data is reviewed."
  };
}

async function getNews(input, signal) {
  const requestedTopic = cleanString(input.topic || "top", 20).toLowerCase();
  const feeds = {
    top: { label: "BBC News Top Stories", url: "https://feeds.bbci.co.uk/news/rss.xml" },
    world: { label: "BBC News World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
    technology: { label: "BBC News Technology", url: "https://feeds.bbci.co.uk/news/technology/rss.xml" },
    science: { label: "BBC News Science and Environment", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml" },
    business: { label: "BBC News Business", url: "https://feeds.bbci.co.uk/news/business/rss.xml" }
  };
  if (!Object.prototype.hasOwnProperty.call(feeds, requestedTopic)) {
    return { ok: false, error: "Choose one of these topics: top, world, technology, science or business." };
  }
  const feed = feeds[requestedTopic];
  const xml = await cached("BBC RSS:" + requestedTopic, 180000, async function () {
    return readPublicText(feed.url, "application/rss+xml, application/xml, text/xml, */*", signal, 700000);
  });
  const blocks = Array.from(xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)).slice(0, 30);
  const items = blocks.map(function (block) {
    const item = block[1];
    const title = xmlTag(item, "title");
    const link = xmlTag(item, "link");
    const publishedAt = xmlTag(item, "pubDate");
    const summary = xmlTag(item, "description");
    if (!title || !/^https?:\/\//i.test(link)) return null;
    return { title: title.slice(0, 300), link: link.slice(0, 1200), publishedAt: publishedAt.slice(0, 120), summary: summary.slice(0, 420) };
  }).filter(Boolean).slice(0, 8);
  return {
    ok: true,
    provider: feed.label,
    sourceUrl: feed.url,
    retrievedAt: new Date().toISOString(),
    topic: requestedTopic,
    count: items.length,
    headlines: items,
    note: "Publisher RSS feed metadata. Updates are periodic, not second-by-second. Show each headline with its original link and do not reproduce full articles."
  };
}

async function getPublicHolidays(input, signal) {
  const countryCode = String(input.countryCode == null ? "" : input.countryCode).trim().toUpperCase();
  const year = input.year == null ? new Date().getUTCFullYear() : Number(input.year);
  if (!/^[A-Z]{2}$/.test(countryCode)) return { ok: false, error: "Use an ISO 3166-1 alpha-2 country code, such as IN, GB or US." };
  if (!Number.isInteger(year) || year < 1900 || year > 2100) return { ok: false, error: "Provide a year from 1900 through 2100." };
  const url = "https://date.nager.at/api/v3/PublicHolidays/" + year + "/" + encodeURIComponent(countryCode);
  const data = await readPublicJson(url, "Nager.Date Public Holidays", signal, 21600000);
  if (!Array.isArray(data)) return { ok: false, provider: "Nager.Date", error: "The holiday provider returned an unexpected response." };
  const today = new Date().toISOString().slice(0, 10);
  const holidays = data.map(function (item) {
    return {
      date: cleanString(item && item.date, 10),
      name: cleanString(item && item.name, 160),
      localName: cleanString(item && item.localName, 160),
      global: Boolean(item && item.global),
      counties: Array.isArray(item && item.counties) ? item.counties.slice(0, 30) : null,
      types: Array.isArray(item && item.types) ? item.types.slice(0, 10) : []
    };
  }).filter(function (item) { return /^\d{4}-\d{2}-\d{2}$/.test(item.date); }).sort(function (a, b) { return a.date.localeCompare(b.date); });
  return {
    ok: true,
    provider: "Nager.Date",
    sourceUrl: url,
    retrievedAt: new Date().toISOString(),
    countryCode: countryCode,
    year: year,
    holidayCount: holidays.length,
    upcoming: holidays.filter(function (item) { return item.date >= today; }).slice(0, 15),
    holidays: holidays.slice(0, 60),
    note: "Calendar/reference data. Some holidays based on local moon sightings or announcements may not be known in advance."
  };
}

export async function executeFreeLiveDataTool(name, args, signal) {
  const input = args && typeof args === "object" && !Array.isArray(args) ? args : {};
  const providers = {
    live_weather: "Open-Meteo",
    live_exchange_rate: "Frankfurter",
    live_earthquakes: "USGS Earthquake Hazards Program",
    live_news: "BBC News RSS",
    live_public_holidays: "Nager.Date"
  };
  if (!Object.prototype.hasOwnProperty.call(providers, name)) return { ok: false, error: "That live-data tool is not available." };
  try {
    if (name === "live_weather") return await getWeather(input, signal);
    if (name === "live_exchange_rate") return await getExchangeRate(input, signal);
    if (name === "live_earthquakes") return await getEarthquakes(input, signal);
    if (name === "live_news") return await getNews(input, signal);
    return await getPublicHolidays(input, signal);
  } catch (error) {
    if (signal && signal.aborted) throw error;
    return { ok: false, provider: providers[name], error: publicError(providers[name], error, signal) };
  }
}
