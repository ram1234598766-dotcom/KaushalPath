# KaushalPath

**A learning hub for CBSE Classes 10–12, AI-guided study, and JEE Main / NEET UG practice.**

KaushalPath is a responsive student workspace with a purple learning dashboard, original timed practice sets, answer explanations, downloadable results, official education links, and an AI Study Guide.

## Features
- CBSE study workspace for Classes 10, 11 and 12, including subject and chapter prompts.
- AI-generated notes, explanations, revision sheets, practice questions and step-by-step solutions.
- Optional Google Search grounding and public URL context in the AI guide.
- Seven compact original practice sets across CBSE foundation, JEE Main and NEET UG topics.
- Timed tests, answer explanations, result history, CSV/JSON exports and browser print-to-PDF.
- Official CBSE, NCERT and NTA resource links.
- Mobile-friendly layout and accessible controls.

## Deploy on Vercel

The app is configured for Vercel with static frontend files in `public/` and a serverless AI endpoint at `api/study-guide.mjs`. The browser uses the same-origin `/api/study-guide` route.

1. Open [Vercel New Project](https://vercel.com/new) and import `ram1234598766-dotcom/KaushalPath` from GitHub.
2. Keep the project root at the repository root. Use the included `vercel.json`; it publishes `public/` and runs the quality checks.
3. In **Project Settings → Environment Variables**, add `GEMINI_API_KEY` with a key created in [Google AI Studio](https://aistudio.google.com/app/apikey). Enable it for Production and Preview as needed. Keep the key server-side; never put it in `public/` or commit it to GitHub.
4. Deploy the project, then open your production URL and visit the AI Study Guide.
5. To check if the API key is configured, send a GET request to `/api/study-guide` with header `x-kaushalpath-status: 1`. This only checks setup; submit a real prompt to verify model access.
6. The default model is `gemini-3.8-flash`. You may override it with `KAUSHALPATH_AI_MODEL` if you use another supported Gemini model.

Vercel Hobby is free within its usage limits for personal/non-commercial projects. Gemini model access, free-tier quota and usage limits depend on Google's current policies and your API project. Free hosting does not mean unlimited AI usage.

## Local checks

Use Node.js 22+:

```sh
npm install
npm test
node --check public/app.js
node --check api/study-guide.mjs
```

The smoke tests check the frontend, API route and deployment configuration. Local AI requests need a valid `GEMINI_API_KEY`; set it in your shell rather than committing it.

## Accuracy, sources and limits

The AI tutor can make mistakes. Verify important formulas, syllabus changes and examination rules against official sources. Search and URL context work only when Gemini's API and selected model support these tools for your key. URL context cannot bypass sign-in walls, paywalls or blocked websites and is not a full website crawler.

Built-in questions are original practice samples, not a verified archive of authentic previous-year questions. Compact practice sets are not full official-length mock examinations. Test history is stored in local browser storage and does not sync between devices.

## Official sources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbooks](https://ncert.nic.in/textbook.php)
- [JEE Main documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG official website](https://neet.nta.nic.in/)
- [NTA downloads](https://nta.ac.in/Downloads)
