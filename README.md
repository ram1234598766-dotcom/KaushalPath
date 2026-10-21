# KaushalPath

**A learning hub for CBSE Classes 10–12, AI-guided study, and JEE Main / NEET UG practice.**

KaushalPath is a responsive student workspace with a purple learning dashboard, original timed practice sets, answer explanations, downloadable results, official education links, and an AI Study Guide.

## Features
- CBSE study workspace for Classes 10, 11 and 12, including subject and chapter prompts.
- AI-generated notes, explanations, revision sheets, practice questions and step-by-step solutions.
- Kilo Auto Free inference through the OpenAI-compatible Kilo AI Gateway endpoint.
- Seven compact original practice sets across CBSE foundation, JEE Main and NEET UG topics.
- Timed tests, answer explanations, result history, CSV/JSON exports and browser print-to-PDF.
- Official CBSE, NCERT and NTA resource links.
- Mobile-friendly layout and accessible controls.

## Deploy on Vercel

The app is configured for Vercel with root-level static frontend files `index.html` and `app.js` and a serverless AI endpoint at `api/study-guide.mjs`. The browser uses the same-origin `/api/study-guide` route.

1. Import `ram1234598766-dotcom/KaushalPath` from GitHub into Vercel.
2. Keep the project root at the repository root and select **Other** as the framework preset. The Vercel configuration explicitly packages `index.html` and `app.js` as static files and `api/study-guide.mjs` as a Node serverless function.
3. No provider API key is required for the current free-model path. The server calls the Kilo AI Gateway with model `kilo-auto/free` at `https://ai-gateway.kilo.ai/api/v1/chat/completions`.
4. Deploy the project, then open your production URL and visit the AI Study Guide.
5. To check setup, send a GET request to `/api/study-guide` with header `x-kaushalpath-status: 1`. This checks route readiness only; submit a real prompt to verify inference.

### Auto Free limitations and privacy

Kilo Auto Free chooses from available free models dynamically, so the underlying model can change and rate limits may apply. In Kilo's documentation, anonymous free-model requests are rate-limited by IP. Auto Free may route prompts to providers that log prompts and outputs; **do not submit personal or confidential information**.

This setup does not provide live web search or automatic webpage retrieval. Reference URLs are treated as pointers only; paste relevant page text into your prompt when you need it analyzed. Verify important current facts against official CBSE, NCERT, NTA and government sources.

Free hosting does not mean unlimited AI usage. Availability and rate limits depend on Kilo's current policies.

## Local checks

Use Node.js 22+:

```sh
npm install
npm test
node --check app.js
node --check api/study-guide.mjs
```

The smoke tests check the frontend, API route and deployment configuration. The AI endpoint uses the public Kilo Auto Free route; no AI key is stored in source code or sent to the browser.

## Accuracy and limits

The AI tutor can make mistakes. Verify important formulas, syllabus changes and examination rules against official sources.

Built-in questions are original practice samples, not a verified archive of authentic previous-year questions. Compact practice sets are not full official-length mock examinations. Test history is stored in local browser storage and does not sync between devices.

## Official sources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbooks](https://ncert.nic.in/textbook.php)
- [JEE Main documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG official website](https://neet.nta.nic.in/)
- [NTA downloads](https://nta.ac.in/Downloads)
