# Security and AI notes

- The Content Security Policy allows same-origin JavaScript and API calls. Browser JavaScript is served from `public/app.js`; do not add inline scripts without adjusting the policy.
- AI requests run in the Vercel serverless function at `api/study-guide.mjs`, never in browser code. The Gemini API key is read from server-side environment variables and must never be committed.
- Supplied URLs are restricted to public HTTP(S) hostnames and capped at five per request. URL Context cannot bypass access controls, paywalls, bot blocks or unsupported content types.
- Google Search and URL Context citations are shown only when the provider returns them. This improves verifiability but does not guarantee perfect accuracy.
- Function logs record a compact status and error description, avoiding full student prompts and supplied URLs.
- Protect the AI endpoint from abuse and monitor model usage. Hosting on a free tier does not make third-party model usage unlimited.
