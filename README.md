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

## Deploy on Vercel (recommended)

The repository now includes `vercel.json` and `api/study-guide.mjs`. The frontend remains in `public/`; the Vercel serverless function handles the AI request at the same `/api/study-guide` path the browser already uses.

1. Open [Vercel New Project](https://vercel.com/new) and import `ram1234598766-dotcom/KaushalPath` from GitHub.
2. Keep the project root at the repository root. Vercel uses `vercel.json` to run the smoke tests and publish the `public` directory while deploying the `api/` function.
3. In **Project Settings → Environment Variables**, add `GEMINI_API_KEY` with a key created in [Google AI Studio](https://aistudio.google.com/app/apikey). Add it to the Production environment (and Preview if needed). The key stays server-side; never put it in `public/` or commit it to GitHub.
4. Deploy the project. Open the Vercel production URL and visit the AI Study Guide section.
5. To check whether the server has the key configured, send a GET request to `/api/study-guide` with header `x-kaushalpath-status: 1`. This only checks configuration; submit an actual prompt in the site to verify Gemini can answer.
6. The default model is `gemini-3.8-flash`. You may override it by adding `KAUSHALPATH_AI_MODEL` as an environment variable if you choose another model available to your Google AI Studio key.

Vercel Hobby is free for personal/non-commercial projects and has usage limits. Gemini's free-tier eligibility, quota and model availability depend on Google's current policies and your project; hosting being free does not mean every AI request is unlimited.

## Keep Netlify as an alternative

The existing `netlify.toml` and `netlify/functions/study-guide.mjs` are retained for backward compatibility. Netlify deployment instructions and gateway access are separate from Vercel. The Vercel function uses a Gemini API key from environment variables instead of depending on Netlify AI Gateway credits.

## Local checks

Use Node.js 22+:

```sh
npm install
npm test
```

The tests check required UI fields, the Vercel and Netlify AI routes, security headers and deployment configuration. Local AI requests need a valid `GEMINI_API_KEY`; set it in your shell rather than committing it.

## Accuracy, sources and limits

The AI tutor can make mistakes. Verify important formulas, syllabus changes and examination rules against official sources. Search and URL context work only when Gemini's API and the selected model support those tools for your key. It cannot bypass sign-in walls, paywalls or blocked websites; URL context is not a full website crawler.

Built-in questions are original practice samples, not a verified archive of authentic previous-year questions. Compact practice sets are not full official-length mock examinations. Test history is stored in local browser storage and does not sync between devices.

## Official sources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbooks](https://ncert.nic.in/textbook.php)
- [JEE Main documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG official website](https://neet.nta.nic.in/)
- [NTA downloads](https://nta.ac.in/Downloads)
