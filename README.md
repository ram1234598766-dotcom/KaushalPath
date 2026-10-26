 # KaushalPath

**A learning hub for CBSE Classes 10–12, AI-guided study, and JEE Main / NEET UG practice.**

KaushalPath is a responsive student workspace with a purple learning dashboard, original timed practice sets, answer explanations, downloadable results, official education links, and an AI Study Guide.

## Features
- A non-AI CBSE chapter-notes catalogue with 119 individual Class 10–12 chapter entries plus 61 detailed JEE/NEET entries, 17 expanded STEM master guides, 14 explained formula/concept cheat sheets and 14 humanities/language/commerce/computer-science master guides. Each short school chapter entry is now expanded with concept explanations, a subject-specific step-by-step workflow, relevant master-guide sections, formula meanings/use conditions/units/traps, worked methods, common mistakes, exam approach and recall checks; direct PDF downloads include the expanded material, starting with a landscape vector mind map followed by detailed portrait notes; downloads do not open the browser print dialog. Dedicated deep dives cover Class 11 gravitation, thermal physics, oscillations, equilibrium, redox, thermodynamics and hydrocarbons, and Class 12 optics, modern physics, semiconductors and organic chemistry. This improves the app notes but is still an original study aid, not a guarantee that every chapter/topic in every current NCERT edition is exhaustively covered; official CBSE/NCERT links remain the syllabus source of truth.
- AI-generated notes, explanations, revision sheets, practice questions and step-by-step solutions. A consent-based in-browser WebGPU mode downloads and caches quantised local weights, recommends a smaller model on phones/low-RAM devices, checks browser storage, and retries a smaller model if a larger desktop model cannot load.
- Kilo Auto Free inference through the OpenAI-compatible Kilo AI Gateway endpoint, with a separate local-only text chat option. Web research and attachments still use the cloud route.
- Quantum-enabled AI Study Guide with model-invoked tools to validate supported OpenQASM circuits, calculate ideal measurement probabilities using the tested local state-vector simulator, list live qBraid devices and estimate qBraid job costs. Tool execution stays server-side and the AI never submits a paid hardware job automatically.
- Private AI capability layer with 258 server-only skill recipes, selected automatically by task; server-side quantum problem planning, a bounded exact QUBO baseline, restricted arithmetic, matrix, statistics, unit-conversion and Boolean truth-table tools, plus qBraid job/status integration. Skill/tool menus and their registry are not shipped to the frontend. Remote qBraid submission requires a live cost estimate and an exact confirmation of circuit fingerprint, device QRN, shots and estimated credits.
- Agentic tools selected privately from the user's task: real downloadable, professionally formatted PDFs; isolated shell/Python/Node command execution; short coding workflows that write files and run tests/builds in a disposable workspace; and cloud-browser interactions that inspect a rendered public page, click visible buttons/links, fill non-password fields, press keys, and optionally capture screenshots. These tools and schemas are not exposed in the frontend UI.
- Default public web research for most factual, technical, current and research questions, unless browsing is explicitly disabled or the task is better handled offline. Research results are treated as untrusted source material and cited only when content was actually retrieved. Interactive browser automation is separate from ordinary search/page reading and needs a server-side Browserbase configuration.
- Higher-detail visual analysis for supplied diagrams, worksheets, screenshots and charts, with a larger image-preparation budget and explicit instructions to preserve symbols/line order and flag uncertain characters rather than hallucinate text.
- 120 additional original exam-style MCQs across JEE mathematics/physics/chemistry and NEET physics/chemistry/biology, with +4/-1 scoring and exam-proportional mini-set timers. These are not represented as copied previous-year questions; official past-paper sources remain linked.
- Timed tests with autosave and resume after refresh, one-click retakes of missed or unanswered questions, answer explanations, result history, CSV exports and downloadable PDF/JSON reports.
- A focus timer with persistent countdowns, completed-session tracking, accuracy summaries and active-day streaks.
- Full progress backup and restore as validated JSON, plus intentional progress clearing.
- A searchable Saved Library for useful AI explanations and notes, included in progress backups.
- Chapter-level JEE Main and NEET UG notes with explained formula cards, worked problems, fast calculation/question-selection methods, cautions on when shortcuts fail, and solved practice questions.
- Dual hosting: Vercel serves the Node-based document/image AI API; Cloudflare Pages serves the static frontend and proxies `/api/study-guide` to the Vercel API through a Pages Function.
- Local AI conversation history: recent chats restore after refresh, can be searched or deleted, and are included in backups. Uploaded file contents are not retained in chat history.
- A local Study Planner with due dates, priority levels, time estimates, task completion tracking, and backup/restore support.
- An installable progressive web app with a limited offline app shell; API responses and local student progress are never cached by the service worker.
- Local AI conversation history: recent chats restore after refresh, can be searched or deleted, and are included in backups. Uploaded file contents are not retained in chat history.
- A retry-after signal on backend rate-limit responses, with provider details kept out of student-facing errors.
- Public-page research pins each HTTP connection to DNS addresses checked by the SSRF guard, preventing a second DNS lookup from rebinding to private infrastructure.
- Research URL validation also rejects special-use, documentation, benchmarking, and deprecated IPv4/IPv6 ranges, even when IPv6 is supplied in expanded notation.
- Disconnected AI requests abort upstream work, and streamed answers respect client backpressure to avoid wasting resources on abandoned or slow connections.
- An animated first-visit guided tour, browser capability-aware performance profile, lighter image preparation on low-resource devices, and official CBSE, NCERT and NTA resource links.
- Mobile-friendly layout and accessible controls.

## Deploy on Vercel

The app is configured for Vercel with root-level static frontend files `index.html` and `app.js` and a serverless AI endpoint at `api/study-guide.mjs`. The browser uses the same-origin `/api/study-guide` route.

1. Import `ram1234598766-dotcom/KaushalPath` from GitHub into Vercel.
2. Keep the project root at the repository root and select **Other** as the framework preset. The Vercel configuration explicitly packages `index.html` and `app.js` as static files and `api/study-guide.mjs` as a Node serverless function.
3. No provider API key is required for the current free-model path. The server calls the Kilo AI Gateway with model `kilo-auto/free` at `https://ai-gateway.kilo.ai/api/v1/chat/completions`.
4. Deploy the project, then open your production URL and visit the AI Study Guide.
5. To check setup, send a GET request to `/api/study-guide` with header `x-kaushalpath-status: 1`. This checks route readiness only; submit a real prompt to verify inference.

### Quantum tools and optional qBraid connection

The AI Study Guide can validate OpenQASM circuits and calculate ideal probabilities locally without a qBraid account or qBraid credits. For live qBraid device listings and credit estimates, add `QBRAID_API_KEY` as a **Vercel server-side Environment Variable** (Project → Settings → Environment Variables) for the Production and Preview environments you use, then redeploy. Keep this key out of source files, browser code, and public issues. The Cloudflare Worker proxies AI requests to the Vercel API, so the qBraid credential belongs on Vercel, not in frontend configuration. If the key is absent, local quantum tools still work and qBraid-only tools explain that cloud access is not configured. The AI tools do not submit jobs to a paid simulator or QPU; actual device execution requires a separate, intentional run in qBraid Lab after checking the device, shots and cost. The server also keeps its automatically selected skill catalogue and tool definitions inside the API process; no registry, tool menu, or control panel is added to the website. For remote execution, the AI prepares a quote and returns a circuit fingerprint; the user must explicitly confirm the exact device, shot count, quoted credits and fingerprint in the next message. The server rechecks device status, qubit capacity, input format and the current price before it submits.

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
node --check service-worker.js
```

The smoke tests check the frontend, API route and deployment configuration. The AI endpoint uses the server-side Kilo Gateway with a second official endpoint as a fallback. If an optional configured key is stale, free-tier requests retry anonymously. No AI key is stored in source code or sent to the browser. Browser RAM detection is approximate and capability-limited: the app adapts interface animations and image preparation but does not silently download/install a model on a visitor's device.

## Accuracy and limits

The AI tutor can make mistakes. Verify important formulas, syllabus changes and examination rules against official sources.

Built-in questions are original practice samples, not a verified archive of authentic previous-year questions. Compact practice sets are not full official-length mock examinations. Test history is stored in local browser storage and does not sync between devices.

## Official sources
- [CBSE Curriculum 2026–27](https://cbseacademic.nic.in/curriculum_2027.html)
- [NCERT Textbooks](https://ncert.nic.in/textbook.php)
- [JEE Main documents](https://jeemain.nta.nic.in/documents/)
- [NEET UG official website](https://neet.nta.nic.in/)
- [NTA downloads](https://nta.ac.in/Downloads)

- Images are decoded, pixel-limited, orientation-corrected and re-encoded server-side; PNG/WebP are preserved where possible, vector/other formats are normalized, and damaged image bytes are rejected.


## Agentic browser, coding and PDF setup

PDF generation is available without a third-party key. The server creates a real multi-page PDF and returns a download link in the Study Guide response; the PDF tool is selected automatically when the request asks for a PDF, handout, report or worksheet.

To enable isolated commands and coding workflows, add `E2B_API_KEY` in **Vercel Project → Settings → Environment Variables**, for the environments where the API is deployed, then redeploy. These commands run inside a short-lived E2B sandbox, not in the KaushalPath server. A coding workflow can prepare a temporary project, run up to six test/build steps and return selected output files; it does not commit to GitHub or deploy changes.

To enable interactive website automation, add `BROWSERBASE_API_KEY` to the same server-side Vercel environment settings. `BROWSERBASE_PROJECT_ID` can be set when a specific Browserbase project should be used. After redeployment, the private browser tool can inspect public pages, click visible UI controls and capture a screenshot. It refuses password/file inputs and known sensitive actions, blocks local/private URL targets, and closes its temporary browser session at the end. Do not add these keys to `app.js`, HTML, or any other frontend file.

Most factual/technical/research prompts trigger public search and page reading by default; a request to click or interact with a website selects the separate Browserbase tool. A request can opt out of web research by saying “do not browse” or “offline only”. Remote actions are not claimed successful unless the provider returns a successful result. Provider usage, quotas and charges are controlled by their respective accounts, so enable these integrations only when you intend to use them.

## Free live-data tools (no API keys)

The AI Study Guide has private server-side adapters for several open public data providers. It chooses a matching tool for supported requests and includes the provider URL, retrieval time, and freshness caveats in its result. No additional API keys or client-side plugins are needed.

- **Weather and short forecasts:** [Open-Meteo](https://open-meteo.com/) plus its geocoding API. Attribution is required under CC BY 4.0; check the provider's current usage terms and quotas.
- **Currency reference rates:** [Frankfurter](https://frankfurter.dev/). Rates are sourced from central banks and generally update on working days; they are not second-by-second trading quotes.
- **Recent earthquakes:** [USGS real-time GeoJSON feeds](https://earthquake.usgs.gov/earthquakes/feed/v1.0/). Event details link back to USGS. These feeds report events and do not predict earthquakes.
- **News headlines:** public BBC News RSS feeds. The integration returns a small set of headlines, short descriptions, publication timestamps and links, not full articles. Respect publisher terms and keep attribution.
- **Public holidays:** [Nager.Date](https://github.com/nager/Nager.Date) public holiday API. Calendar data can be revised and some lunar holidays depend on local announcements.

Responses have bounded timeouts and sizes with opportunistic in-process caching to reduce repeated requests. These services are free/keyless, but not unlimited or guaranteed; if one provider is unavailable or rate-limits traffic, the tool reports the failure rather than inventing data. The adapters are implemented as local source code in api/free-live-data.mjs, so no third-party SDK package is required.

## Cloudflare Workers deployment

The Cloudflare build now uses a Worker with Static Assets instead of sending Pages-specific configuration to `wrangler deploy`. The Worker serves the static frontend from `dist/` and forwards only `/api/study-guide` to the existing Vercel Node API, where PDF, Office and image parsing runs in its supported runtime.

The repository root is the build root. Cloudflare's Workers Builds settings should use **`npm run build:cloudflare`** as the build command and **`npx wrangler deploy`** as the production deploy command. The matching `wrangler.toml` binds `dist/` as Worker assets. Production and connected-build previews both use the top-level `kaushalpath` Worker identity so Wrangler's build environment does not fail on an environment-specific name mismatch. The build script copies the required frontend scripts, styles/headers, icons, manifest and service worker into `dist/`; the Pages-only `_routes.json` is excluded from the Worker bundle.

The API proxy uses `VERCEL_API_BASE_URL` when configured and otherwise defaults to `https://kaushal-path.vercel.app`. Keep Vercel environment variables configured independently. Local WebGPU model weights are downloaded only after a student explicitly enables the local model; they stay in that browser's storage and are not installed on a phone or moved to the backend.

## Individual CBSE subject chapters

The Study Hub loads individual English literature chapters and writing skills, Hindi lesson/skill packs, Social Science history chapters, Business Studies, Accountancy, Economics, Computer Science and Informatics Practices. Each lesson includes explanatory sections, worked answer patterns, practice questions and common-mistake checks. These are original notes rather than copied textbook chapters. Some entries reflect commonly used NCERT texts and may be outside a particular year's assessable list; check the current CBSE curriculum and your subject code before using the library as an exhaustive exam checklist.
