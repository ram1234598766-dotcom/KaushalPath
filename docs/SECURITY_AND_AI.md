# Security and AI notes

- The response Content-Security-Policy allows same-origin JavaScript and API calls. Inline JavaScript is externalized as `public/app.js`. It deliberately omits `'unsafe-inline'` from `script-src`, which blocks the injected inline Powered by Netlify badge script on projects where that badge is enabled.
- Do not add inline scripts without adjusting the policy.
- AI runs in a Netlify Function, never in the browser. Netlify AI Gateway injects provider credentials at runtime; never commit keys.
- Supplied URLs are restricted to public HTTP(S) hostnames and capped at five per request. URL Context cannot bypass access controls, paywalls, bot blocks or unsupported content types.
- Google Search and URL Context return citations only when the provider returns them. This improves verifiability but does not guarantee perfect accuracy.
- The function logs compact error descriptions and avoids logging full student prompts or supplied URLs.
