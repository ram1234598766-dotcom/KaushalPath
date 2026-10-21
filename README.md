# KaushalPath

**Learning support for CBSE Classes 10–12, AI topic explanations, and JEE Main / NEET UG practice.**

This repository is configured for Netlify auto-deploy from `main`. The production website source is in `public/`, and the AI study guide is a Netlify Function at `netlify/functions/study-guide.mjs`.

## Website features
- Class 10, 11 and 12 study hub with a free-text subject option for languages, electives and vocational subjects.
- AI-generated notes, topic explanations, revision sheets, original practice questions and step-by-step solving (requires Netlify AI Gateway).
- Six original JEE Main / NEET UG demo challenge sets and one CBSE foundation set.
- Timed practice, answer explanations, downloadable CSV/JSON results and print-to-PDF results.
- Browser-local practice history and official source links.

## Deploy
1. Connect this GitHub repository to a Netlify project and use `main` as the production branch.
2. Netlify uses `netlify.toml`: publish directory `public`, function directory `netlify/functions`, Node 22.
3. The site auto-deploys after pushes to the connected production branch. Review the Deploys tab for the live URL and build status.
4. AI uses Netlify AI Gateway from a serverless function. AI is optional; tests and result downloads work without AI. Publish a production deploy and ensure AI Features are enabled before expecting AI responses.

## Local checks
Use Node.js 22 or newer:
```powershell
npm install
npm test
```
For a local static preview, serve the `public` directory with any static file server. The AI endpoint requires Netlify's runtime; use `netlify dev` after linking the site to test functions locally.

## Official learning resources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbook Catalogue](https://ncert.nic.in/textbook.php)
- [JEE Main Documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG Official Website](https://neet.nta.nic.in/)
- [NTA Downloads](https://nta.ac.in/Downloads)

## Accuracy and limitations
The built-in questions are original practice material, **not genuine PYQs**. Use official NTA portals for genuine previous-year papers and answer keys. The small demo sets are not full official-length mock exams, and their marking rule is a practice preset rather than a statement of current exam rules. AI-generated content and live-source summaries can still be wrong; cross-check important information against prescribed textbooks and official notices. Notes are generated on demand rather than claiming that a verified note exists offline for every chapter.
