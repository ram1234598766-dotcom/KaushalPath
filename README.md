# KaushalPath

**A learning hub for CBSE Classes 10–12, grounded AI tutoring, and JEE Main / NEET UG practice.**

KaushalPath deploys to Netlify from the `main` branch. The site is in `public/`; the server-side AI tutor is a Netlify Function at `netlify/functions/study-guide.mjs`.

## Workspace design
The dashboard uses a purple workspace shell inspired by the requested Firebase-era layout: persistent left navigation (Overview, CBSE, JEE Main, NEET UG, Test Series, AI Study Guide, My Results and Official Resources), an overview banner, learning-path cards, responsive mobile navigation, and exam-specific filtering. The app hides the optional injected Netlify badge through the deployed content security policy and badge CSS selectors.

## What's included
- Responsive study hub for Classes 10, 11 and 12.
- Free-text subject support for languages, electives and vocational subjects.
- AI notes, explanations, revision sheets, practice questions and step-by-step help.
- Optional live Google Search grounding and URL Context to read up to five public website pages or PDFs per request.
- Six original JEE Main / NEET UG challenge sets and one CBSE foundation set.
- Timed tests, answer explanations, CSV/JSON result exports and browser print-to-PDF.
- Official CBSE, NCERT and NTA resource links.

## Netlify deployment
1. Connect `ram1234598766-dotcom/KaushalPath` to Netlify and set `main` as the production branch.
2. Netlify reads `netlify.toml`: publish directory `public`, functions directory `netlify/functions`, Node.js 22.
3. Pushes to `main` trigger production deployment when Git continuous deployment is connected.
4. Enable Netlify AI Features for the team. Netlify AI Gateway injects Gemini credentials at function runtime; never put provider keys into browser code or commit them.
5. The AI health check is `GET /api/study-guide` with header `x-kaushalpath-status: 1`. A health check alone does not prove live inference: submit a real question and review the response.
6. The default model is `gemini-3.6-flash`, selected for a speed/capability balance. To change it, set `KAUSHALPATH_AI_MODEL` in Netlify site environment variables and redeploy. AI usage may consume credits.

## Local checks
```powershell
npm install
npm test
```
Use Node.js 22+. The AI function relies on the Netlify runtime's injected AI Gateway variables and should be tested through `netlify dev` after a production deployment activates the gateway.

## Accuracy, web data and limits
The tutor uses live Google Search grounding by default and can read up to five public HTTP(S) pages or PDFs when you paste their full URLs. It cannot bypass sign-in walls, paywalls, blocked websites, YouTube or unsupported content. It does not automatically crawl every linked page. Webpage text is treated as untrusted source content. Citations appear when the provider returns them.

No AI system can promise perfect correctness. Verify important formulas, syllabus changes and exam rules against official materials. Built-in questions are original practice samples, not a verified archive of authentic PYQs. Compact practice sets are not full official-length mock examinations. Test history stays in local browser storage and does not sync between devices.

## Official sources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbooks](https://ncert.nic.in/textbook.php)
- [JEE Main documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG official website](https://neet.nta.nic.in/)
- [NTA downloads](https://nta.ac.in/Downloads)
