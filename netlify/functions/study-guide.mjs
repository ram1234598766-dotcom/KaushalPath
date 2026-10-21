import { GoogleGenAI } from "@google/genai";

const MODEL = process.env.KAUSHALPATH_AI_MODEL || "gemini-2.5-flash";
const MAX_PROMPT_CHARS = 12000;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff"
    }
  });
}

function extractSources(result) {
  const metadata = result?.candidates?.[0]?.groundingMetadata
    || result?.candidates?.[0]?.grounding_metadata
    || {};
  const chunks = metadata.groundingChunks || metadata.grounding_chunks || [];
  const seen = new Set();
  return chunks.map((chunk) => chunk?.web || chunk?.webSearch || null)
    .filter(Boolean)
    .map((source) => ({ title: String(source.title || source.uri || "Source"), uri: String(source.uri || "") }))
    .filter((source) => {
      if (!/^https?:\/\//i.test(source.uri) || seen.has(source.uri)) return false;
      seen.add(source.uri);
      return true;
    })
    .slice(0, 8);
}

export default async (request) => {
  const ready = Boolean(process.env.GEMINI_API_KEY && process.env.GOOGLE_GEMINI_BASE_URL);
  if (request.method === "GET" && request.headers.get("x-kaushalpath-status") === "1") {
    return json({
      ready,
      provider: "Netlify AI Gateway",
      message: ready
        ? "The server-side AI gateway environment is available."
        : "AI requires a successful production deploy and enabled AI Features on the Netlify team."
    });
  }
  if (request.method !== "POST") return json({ error: "Use POST for AI study requests." }, 405);
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20000) return json({ error: "Request too large. Shorten the study prompt." }, 413);
  let body;
  try { body = await request.json(); }
  catch { return json({ error: "The request must contain valid JSON." }, 400); }
  const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
  if (prompt.length < 12) return json({ error: "Enter a more specific question or topic." }, 400);
  if (prompt.length > MAX_PROMPT_CHARS) return json({ error: "Keep the prompt under 12,000 characters." }, 413);
  if (!ready) {
    return json({
      error: "The AI guide is not active yet. Publish a production deploy and enable Netlify AI Features for this team."
    }, 503);
  }
  try {
    const genAI = new GoogleGenAI({});
    const result = await genAI.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: {
        maxOutputTokens: 5000,
        temperature: 0.25,
        tools: [{ googleSearch: {} }]
      }
    });
    const text = typeof result.text === "string" ? result.text : "";
    if (!text.trim()) return json({ error: "No study response was returned. Try a more focused topic." }, 502);
    return json({ text, sources: extractSources(result), model: MODEL });
  } catch (error) {
    console.error("KaushalPath AI request failed:", error?.message || error);
    return json({ error: "AI request failed. Check Netlify AI Gateway availability, usage limits and the selected topic." }, 502);
  }
};

export const config = { path: "/api/study-guide" };
