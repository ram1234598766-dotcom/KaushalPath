import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const api = readFileSync(new URL("../api/study-guide.mjs", import.meta.url), "utf8");
const questionBank = readFileSync(new URL("../question-bank.js", import.meta.url), "utf8");
const studyLibrary = readFileSync(new URL("../study-library.js", import.meta.url), "utf8");
const examPrepNotes = readFileSync(new URL("../exam-prep-notes.js", import.meta.url), "utf8");
const formulaSheets = readFileSync(new URL("../formula-cheat-sheets.js", import.meta.url), "utf8");
const schoolGuides = readFileSync(new URL("../school-chapter-guides.js", import.meta.url), "utf8");
const mathsDeepNotes = readFileSync(new URL("../cbse-maths-deep-notes.js", import.meta.url), "utf8");
const physicsChemistryDeepNotes = readFileSync(new URL("../cbse-physics-chemistry-deep-notes.js", import.meta.url), "utf8");
const biologyDeepNotes = readFileSync(new URL("../cbse-biology-deep-notes.js", import.meta.url), "utf8");
const remainingDeepNotes = readFileSync(new URL("../cbse-remaining-chapter-notes.js", import.meta.url), "utf8");
const humanitiesComputerDeepNotes = readFileSync(new URL("../cbse-humanities-computer-deep-notes.js", import.meta.url), "utf8");
const ncertPhysicsNotes = readFileSync(new URL("../ncert-physics-chapter-notes.js", import.meta.url), "utf8");
const ncertChemistryNotes = readFileSync(new URL("../ncert-chemistry-chapter-notes.js", import.meta.url), "utf8");
const ncertMathematics = readFileSync(new URL("../ncert-mathematics-chapter-notes.js", import.meta.url), "utf8");
const ncertBiology = readFileSync(new URL("../ncert-biology-chapter-notes.js", import.meta.url), "utf8");
const localAI = readFileSync(new URL("../local-ai.js", import.meta.url), "utf8");
const serviceWorker = readFileSync(new URL("../service-worker.js", import.meta.url), "utf8");
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const vercel = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
const manifest = JSON.parse(readFileSync(new URL("../manifest.webmanifest", import.meta.url), "utf8"));
const offline = readFileSync(new URL("../offline.html", import.meta.url), "utf8");

assert.match(html, /KaushalPath/, "site brand should be present");

assert.equal(manifest.display, "standalone", "the web manifest should enable a standalone app window");
assert.equal(manifest.start_url, "/#overview", "install should open the workspace overview");
assert.ok(Array.isArray(manifest.icons) && manifest.icons.some((icon) => icon.src === "/app-icon.svg" && icon.type === "image/svg+xml"), "the manifest should provide a KaushalPath SVG icon");
assert.match(html, /rel="manifest" href="\/manifest\.webmanifest"/, "the webpage should link to its install manifest");
assert.match(html, /id="installApp"/, "the overview should expose an install control");
assert.match(html, /rel="icon" type="image\/svg\+xml" href="\/app-icon\.svg"/, "the app icon should also be the site favicon");
assert.match(app, /navigator\.serviceWorker\.register\("\/service-worker\.js"/, "the browser should register the local offline shell");
assert.match(serviceWorker, /const SHELL_FILES = \[/, "offline install should precache the static app shell");
assert.match(serviceWorker, /if \(url\.pathname === "\/api" \|\| url\.pathname\.startsWith\("\/api\/"\)\) return;/, "the service worker must never intercept the AI API");
assert.match(serviceWorker, /const STATIC_FILES = new Set\(\[/, "only an explicit list of fixed public assets should be cache-eligible");
assert.match(serviceWorker, /if \(request\.method !== "GET" \|\| request\.headers\.has\("authorization"\)\) return;/, "writes and authenticated requests must bypass the service worker cache");
assert.match(serviceWorker, /caches\.match\("\/offline\.html"\)/, "navigation should fall back to the offline helper");
assert.match(offline, /AI explanations, live research and new uploads need an internet connection/, "offline guidance should explain which services require connectivity");

assert.match(html, /studyForm/, "study form should exist");
assert.match(html, /id="notesResults"/, "CBSE Study Hub should render a curated chapter-notes catalogue");
assert.match(html, /id="notesDownloadAll"/, "the notes catalogue should export filtered notes as a print-ready PDF");
assert.match(html, /id="startTour"/, "the app should expose the animated guided tour");
assert.match(html, /does not send your chapter selection to the AI endpoint/, "the visible CBSE notes hub should be independent of AI requests");
assert.match(studyLibrary, /function printNotes\(items\)/, "curated notes should be exportable through the browser PDF print flow");
assert.ok(html.indexOf('src="/cbse-maths-deep-notes.js"') < html.indexOf('src="/study-library.js"'), "individual chapter data must load before the note library");
assert.ok(html.indexOf('src="/ncert-physics-chapter-notes.js"') < html.indexOf('src="/study-library.js"'), "NCERT Physics chapters must load before the renderer");
assert.ok(html.indexOf('src="/ncert-chemistry-chapter-notes.js"') < html.indexOf('src="/study-library.js"'), "NCERT Chemistry chapters must load before the renderer");
assert.ok(html.indexOf('src="/ncert-mathematics-chapter-notes.js"') < html.indexOf('src="/study-library.js"'), "NCERT Mathematics chapters must load before the renderer");
assert.ok(html.indexOf('src="/ncert-biology-chapter-notes.js"') < html.indexOf('src="/study-library.js"'), "NCERT Biology chapters must load before the renderer");
assert.ok(studyLibrary.includes("window.KP_NCERT_CHAPTER_NOTES"), "the library should merge supplemental NCERT chapters with existing deep notes");
assert.ok((ncertMathematics.match(/make\("Class /g) || []).length >= 41, "supplemental Mathematics should contain at least 41 individual chapters");
assert.ok((ncertMathematics.match(/make\("Class 12"/g) || []).length >= 13, "supplemental Mathematics should cover Class 12 chapters individually");
assert.ok((ncertBiology.match(/make\("Class /g) || []).length >= 35 && (ncertBiology.match(/makeClass10Science\(/g) || []).length >= 6, "supplemental Biology should cover Classes 11–12 and Class 10 Science biology topics");
for (const src of ["ncert-physics-chapter-notes.js","ncert-chemistry-chapter-notes.js","ncert-mathematics-chapter-notes.js","ncert-biology-chapter-notes.js"]) {
 assert.ok(vercel.builds.some(b => b.src === src && b.use === "@vercel/static"), "Vercel should publish "+src);
 assert.ok(serviceWorker.includes('"/'+src+'"'), "PWA shell should cache "+src);
}
assert.ok(existsSync(new URL("../scripts/note-content-audit.mjs", import.meta.url)), "the individual chapter content audit should exist");
assert.match(pkg.scripts.test, /node scripts\/note-content-audit\.mjs/, "CI must run the individual chapter audit");
assert.ok(html.includes('src="/cbse-physics-chemistry-deep-notes.js" defer'), "individual Physics/Chemistry notes should load");
assert.ok(html.includes('src="/cbse-biology-deep-notes.js" defer'), "individual Biology notes should load");
assert.ok(html.includes('src="/cbse-remaining-chapter-notes.js" defer'), "additional individual chapter notes should load");
assert.ok(studyLibrary.includes("Detailed chapter packs replace compact starter summaries"), "detailed sources must override short starter entries");
assert.ok(studyLibrary.includes("individualChapterSets"), "the library must merge individual chapter packs");
assert.ok(studyLibrary.includes("KP_HUMANITIES_INDIVIDUAL_DEEP_NOTES"), "detailed humanities/commerce/computer chapters must be considered by the merge logic");
assert.ok(studyLibrary.includes("practiceProblems"), "chapter practice answers must be part of the notes model");
assert.ok(existsSync(new URL("../scripts/note-content-audit.mjs", import.meta.url)), "the detailed chapter-content audit must exist");
assert.match(pkg.scripts.test, /node scripts\/note-content-audit\.mjs/, "CI must run the detailed note audit");
assert.ok(studyLibrary.includes("Practice questions with worked answers"), "reader must render solved practice");
assert.ok(studyLibrary.includes("PRACTICE QUESTIONS WITH WORKED ANSWERS"), "saved note export must retain solved practice");
assert.ok(studyLibrary.includes("function practiceContentHtml(item)") && studyLibrary.includes("problem.question ||") && studyLibrary.includes("problem.answer ||") && studyLibrary.includes("problem.solution ||"), "PDF export must retain solved practice with answers and reasoning");
assert.ok(studyLibrary.includes("function fullChapterPacket(item)") && studyLibrary.includes('renderMindMapPage(item) + pages.join("")'), "single-chapter PDF must start with a mind map and include the 12-page packet");
assert.match(studyLibrary, /function printNotes\(items\)/, "chapter notes should have a dedicated export action");
assert.match(studyLibrary, /downloadButton\.addEventListener\("click", startPrint\)/, "chapter export should use the browser print renderer");
assert.ok(studyLibrary.includes("printTarget.print()") && studyLibrary.includes("@page chapter-map{size:A4 landscape") && studyLibrary.includes("@page chapter-notes{size:A4 portrait"), "chapter PDF printing must use native vector output with a full landscape map followed by portrait notes");
assert.doesNotMatch(studyLibrary, /html2pdf\(\)\.set\(|html2canvas:/, "chapter export should not rasterize or crop the mind map in a PDF canvas");
assert.ok(studyLibrary.includes("const pageTitle = fileStem;"), "the PDF save dialog should use a chapter-specific suggested filename");
assert.ok(studyLibrary.includes("<title>' + esc(pageTitle) + '</title><style>'"), "the chapter PDF HTML should use its defined title");
assert.doesNotMatch(studyLibrary, /esc\(title\)/, "the chapter PDF generator must not reference an undefined title variable");
assert.match(studyLibrary, /id="chapterPdfContent"/, "only the chapter content should be included in the exported PDF");
assert.ok(studyLibrary.includes('downloadButton.textContent = "Download PDF"'), "the chapter notes preview should expose an explicit Download PDF action");
assert.ok(studyLibrary.includes("The print dialog didn’t open."), "the preview should explain how to recover if native printing fails");
assert.match(studyLibrary, /Preparing your PDF/, "PDF generation should show progress instead of appearing unresponsive");
assert.ok(studyLibrary.includes("function mapPalette(index)") && studyLibrary.includes("stroke-width=\"7\"") && studyLibrary.includes("stroke-width=\"2.1\""), "mind maps should use distinct colorful curved main and sub-branches");
assert.ok(studyLibrary.includes("@page chapter-map{size:A4 landscape") && studyLibrary.includes("mindmap-svg"), "the chapter mind map should print as a landscape SVG cover page");
assert.ok(!studyLibrary.includes("return chosen.length > 72") && !studyLibrary.includes('last.slice(0, maxChars - 2).trimEnd() + "…"'), "mind-map labels must wrap completely instead of adding ellipses");
assert.ok(studyLibrary.includes("const firstSentence = (value) =>") && studyLibrary.includes("const avoidSentence = (value) =>"), "mind maps should show complete explanations and grammatical trap sentences");
assert.ok(studyLibrary.indexOf("notes.forEach(enrichIndividualChapter);") > studyLibrary.indexOf("individualChapterSets.flat().forEach((item) => {") && !studyLibrary.includes('linkedSections.push({heading:"Related topic · "'), "detailed chapter sources must merge before fallback enrichment and stay on-topic");
assert.ok(studyLibrary.includes("print-color-adjust:exact") && html.includes(".notes-card:nth-child(7n+1)") && html.includes(".notes-detail .practice-answer"), "chapter PDFs, note cards and practice explanations should use distinct colours");







assert.match(studyLibrary, /I couldn’t prepare these notes/, "PDF export errors must show a helpful message instead of leaving a blank window");
assert.match(studyLibrary, /Your chapter notes are ready/, "the PDF preview should explain the next step in natural language");
assert.match(studyLibrary, /Start by checking exactly what the question wants you to find or explain/, "general revision guidance should sound natural and clear");
assert.ok(!studyLibrary.includes("<\\\\/script></body></html>"), "print document must not contain an escaped script closing tag that makes the generated page blank");


assert.ok(mathsDeepNotes.includes("KP_MATHS_INDIVIDUAL_DEEP_NOTES = notes"), "maths collection must be exported");
assert.ok(physicsChemistryDeepNotes.includes("KP_SCIENCE_INDIVIDUAL_DEEP_NOTES = notes"), "Physics/Chemistry collection must be exported");
assert.ok(biologyDeepNotes.includes("KP_BIOLOGY_INDIVIDUAL_DEEP_NOTES = notes"), "Biology collection must be exported");
assert.ok(remainingDeepNotes.includes("KP_REMAINING_CHAPTER_DEEP_NOTES = notes"), "additional collection must be exported");
assert.ok(humanitiesComputerDeepNotes.includes("KP_HUMANITIES_INDIVIDUAL_DEEP_NOTES = notes"), "humanities/commerce/computer/biology deep chapters must be exported");
assert.ok(humanitiesComputerDeepNotes.split('chapter("Class ').length - 1 >= 30, "individual humanities, commerce and computer chapters should be detailed");
assert.ok(physicsChemistryDeepNotes.includes('chapter("Class 11","Physics","Gravitation"'), "Gravitation must have a dedicated detailed chapter");
assert.ok(mathsDeepNotes.split('chapter("Class 10","Mathematics"').length - 1 >= 12, "Class 10 maths should cover individual chapters");
assert.ok(mathsDeepNotes.split('chapter("Class 11","Mathematics"').length - 1 >= 7, "Class 11 maths should cover individual chapters");
assert.ok(mathsDeepNotes.split('chapter("Class 12","Mathematics"').length - 1 >= 6, "the original deep maths notes should retain their Class 12 entries");
assert.ok(physicsChemistryDeepNotes.split('chapter("Class ').length - 1 >= 25, "Physics/Chemistry should cover individual chapters");
assert.ok(biologyDeepNotes.split('chapter("Class ').length - 1 >= 12, "Biology should cover individual chapters");
assert.ok(remainingDeepNotes.split('chapter("Class ').length - 1 >= 25, "additional individual chapters should be included");
assert.ok(studyLibrary.includes("Explained formula cheat sheet"), "formula cards must be rendered");
assert.ok(serviceWorker.includes("kaushalpath-shell-v24"), "PWA cache must be bumped for new chapter assets");
assert.ok(questionBank.includes("window.KP_FULL_LENGTH_QUESTION_BANK = fullLengthBank"), "the question bank must expose full-length JEE and NEET question pools");
assert.ok(questionBank.includes("questionsPerTest: 90") && questionBank.includes("questionsPerTest: 180"), "the configured mock lengths must be 90 for JEE and 180 for NEET");
assert.ok(app.includes("configureFullLengthEntranceTests") && app.includes("selectRotated(subjects.Mathematics,30") && app.includes("selectRotated(subjects.Biology,90"), "the app must assemble the requested subject-balanced mock tests");
assert.ok(app.includes("Keep labelled previous-year questions in every mock") && app.includes("Previous-year question"), "full mocks must prioritize source-labelled PYQs and display a source label in each question");
assert.ok(html.includes("scrollbar-width:none!important") && html.includes("*::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}"), "scrollbars must be visually hidden without disabling scrolling");
assert.ok(html.includes("Each NEET full mock contains 180 questions") && html.includes("official JEE Main 2026 Paper 1 format has 75 questions"), "the test catalogue must clearly distinguish NEET's official pattern from the requested extended JEE mock");
assert.match(app, /function openMockTestWindow\(id\)/, "full-length mocks must launch in a separate popup window");
assert.match(app, /searchParams\.set\("kpMockTest",test\.id\)/, "the popup URL must identify its requested full-length mock");
assert.match(app, /Automatically submitted because you switched tabs or left the mock-test window/, "leaving a mock test must show an automatic-submission reason in the result");
assert.match(app, /document\.visibilityState==="hidden"&&active\)/, "the app must observe hidden-tab transitions during test attempts");
assert.match(html, /body\.mock-test-window #examWorkspace/, "mock-test popups must use the focused test-only layout");

const bankRuntime = { window: {} };
runInNewContext(questionBank, bankRuntime);
const makeMock = (id, exam) => ({
  id, exam, qs: Array.from({length:5}, (_,i) => ({
    q: id + " simulated challenge question " + i,
    o: ["A","B","C","D"], a: 0, e: "Test fixture explanation."
  }))
});
const mockedTests = [
  makeMock("jee1","JEE Main"), makeMock("jee2","JEE Main"), makeMock("jee3","JEE Main"),
  makeMock("neet1","NEET UG"), makeMock("neet2","NEET UG"), makeMock("neet3","NEET UG"),
  ...bankRuntime.window.KP_EXTRA_QUESTIONS
];
const configureStart = app.indexOf("(function configureFullLengthEntranceTests() {");
const configureEnd = app.indexOf("\n})();", configureStart);
assert.ok(configureStart >= 0 && configureEnd > configureStart, "the full-length mock configuration function must exist");
const configSandbox = {
  window: { KP_FULL_LENGTH_QUESTION_BANK: bankRuntime.window.KP_FULL_LENGTH_QUESTION_BANK },
  questions: mockedTests
};
runInNewContext(app.slice(configureStart, configureEnd + 6), configSandbox);
for (const exam of ["JEE Main","NEET UG"]) {
  const sets = mockedTests.filter((set) => set.exam === exam);
  assert.equal(sets.length, 6, exam + " must provide six full-length tests");
  for (const set of sets) {
    const expectedCount = exam === "JEE Main" ? 90 : 180;
    assert.equal(set.qs.length, expectedCount, set.title + " must contain the required number of questions");
    assert.equal(set.duration, 180, set.title + " must have a 180-minute timer");
    assert.equal(set.mark, 4, set.title + " must award four marks for a correct answer");
    assert.equal(set.negativeMark, 1, set.title + " must apply the one-mark penalty");
    assert.equal(new Set(set.qs.map((q) => q.q.trim().toLowerCase())).size, expectedCount, set.title + " must not repeat questions within a single attempt");
    assert.ok(set.qs.some((q) => q.sourceType === "PYQ"), set.title + " must include at least one labelled previous-year question");
    const counts = {};
    set.qs.forEach((q) => { counts[q.subject] = (counts[q.subject] || 0) + 1; });
    assert.deepEqual(counts, exam === "JEE Main"
      ? { Mathematics: 30, Physics: 30, Chemistry: 30 }
      : { Physics: 45, Chemistry: 45, Biology: 90 },
      set.title + " must match the specified subject split");
    const max = set.qs.reduce((sum,q) => sum + (Number.isFinite(q.mark) ? q.mark : set.mark),0);
    assert.equal(max, exam === "JEE Main" ? 360 : 720, set.title + " must have the correct maximum marks");
  }
}

assert.ok(vercel.builds.some(b => b.src === "cbse-maths-deep-notes.js" && b.use === "@vercel/static"), "Vercel must publish cbse-maths-deep-notes.js");
assert.ok(vercel.builds.some(b => b.src === "cbse-physics-chemistry-deep-notes.js" && b.use === "@vercel/static"), "Vercel must publish cbse-physics-chemistry-deep-notes.js");
assert.ok(vercel.builds.some(b => b.src === "cbse-biology-deep-notes.js" && b.use === "@vercel/static"), "Vercel must publish cbse-biology-deep-notes.js");
assert.ok(vercel.builds.some(b => b.src === "cbse-remaining-chapter-notes.js" && b.use === "@vercel/static"), "Vercel must publish cbse-remaining-chapter-notes.js");
assert.ok(serviceWorker.includes('"/cbse-maths-deep-notes.js"'), "PWA shell must cache cbse-maths-deep-notes.js");
assert.ok(serviceWorker.includes('"/cbse-physics-chemistry-deep-notes.js"'), "PWA shell must cache cbse-physics-chemistry-deep-notes.js");
assert.ok(serviceWorker.includes('"/cbse-biology-deep-notes.js"'), "PWA shell must cache cbse-biology-deep-notes.js");
assert.ok(serviceWorker.includes('"/cbse-remaining-chapter-notes.js"'), "PWA shell must cache cbse-remaining-chapter-notes.js");
assert.match(html, /id="localAiInstall"/, "AI Study Guide should expose local model download controls");
assert.match(html, /id="localAiPrefer"/, "local model preference must be explicit and user controlled");
assert.match(html, /value="JEE Main"/, "the notes library should filter detailed JEE Main notes");
assert.match(html, /value="NEET UG"/, "the notes library should filter detailed NEET UG notes");
assert.ok(html.indexOf('src="/exam-prep-notes.js"') < html.indexOf('src="/study-library.js"'), "exam note data must load before the library renderer");
assert.ok(html.includes("Individual chapter notes + formula cheat sheets"), "the notes catalogue should provide a placeholder for the dynamic count of school and exam chapter-note packs");
assert.equal((studyLibrary.match(/note\("Class /g) || []).length, 119, "the curated school catalogue should retain its 119 authored note packs");
assert.ok((examPrepNotes.match(/ = pack\("/g) || []).length >= 42, "the exam notes should include at least 42 authored deep-dive chapter definitions");
assert.match(examPrepNotes, /window\.KP_DEEP_NOTES = base\.concat\(examDupes\)/, "deep-dive notes should include dedicated JEE and NEET views");
assert.match(examPrepNotes, /workedExamples/, "exam notes should include stepwise examples and problem methods");
assert.equal((formulaSheets.match(/const .* = sheet\(/g) || []).length, 14, "formula cheat sheets should cover CBSE classes and JEE/NEET");
assert.equal((schoolGuides.match(/const g[0-9]+[A-Za-z0-9]* = guide\(/g) || []).length, 17, "core CBSE chapters should have expanded master guides");
const humanitiesGuides = readFileSync(new URL("../school-humanities-commerce-guides.js", import.meta.url), "utf8");
assert.equal((humanitiesGuides.match(/=guide\("/g) || []).length, 14, "CBSE humanities, language, commerce and CS should have expanded guides");
assert.match(studyLibrary, /Common trap:/, "formula cards should render common mistakes");
assert.match(studyLibrary, /Units \/ notation:/, "formula cards should explain units and notation");
assert.match(studyLibrary, /Explained formula cheat sheet/, "the chapter reader should show formula cards with explanations");
assert.match(studyLibrary, /function enrichIndividualChapter\(item\)/, "each short CBSE chapter entry should be deepened before display");
assert.match(studyLibrary, /notes\.forEach\(enrichIndividualChapter\)/, "the detail pass should apply to all existing chapter entries, not just extra master guides");
assert.match(studyLibrary, /function genericDeepSections\(item\)/, "individual chapters should include explanations, method guidance and answer-checking sections");
assert.match(studyLibrary, /const deepChapterOverrides = \[/, "chapters with important missing detail should have dedicated, subject-specific notes");
assert.match(studyLibrary, /chapter:"Gravitation"/, "Class 11 gravitation should have an individual multi-section deep dive");
assert.match(studyLibrary, /chapter:"Thermal Properties of Matter"/, "Class 11 thermal properties should have detailed content");
assert.match(studyLibrary, /chapter:"Oscillations and Waves"/, "Class 11 oscillations and waves should have detailed content");
assert.match(studyLibrary, /chapter:"Equilibrium"/, "Class 11 chemical equilibrium should have detailed content");
assert.match(studyLibrary, /chapter:"Redox Reactions"/, "Class 11 redox should have detailed content");
assert.match(studyLibrary, /chapter:"Thermodynamics"/, "Class 11 chemistry thermodynamics should have detailed content");
assert.match(studyLibrary, /chapter:"Hydrocarbons"/, "Class 11 hydrocarbons should have detailed content");
assert.match(studyLibrary, /chapter:"Ray and Wave Optics"/, "Class 12 optics should include individual explanations, formula use and examples");
assert.match(studyLibrary, /chapter:"Dual Nature of Radiation and Matter"/, "Class 12 dual nature should have detailed content");
assert.match(studyLibrary, /chapter:"Atoms, Nuclei and Radioactivity"/, "Class 12 atomic and nuclear physics should have detailed content");
assert.match(studyLibrary, /chapter:"Semiconductor Electronics"/, "Class 12 semiconductor electronics should have detailed content");
assert.match(studyLibrary, /chapter:"Aldehydes, Ketones and Carboxylic Acids"/, "Class 12 carbonyl chemistry should have detailed content");
assert.match(studyLibrary, /chapter:"Amines"/, "Class 12 amines should have detailed content");
assert.match(studyLibrary, /chapter:"Biomolecules"/, "Class 12 biomolecules should have detailed content");
assert.match(studyLibrary, /EXPLAINED FORMULA CHEAT SHEET/, "downloadable note text should include formula meanings, uses, units and traps");

assert.match(studyLibrary, /FORMULA CHEAT SHEET/, "PDF and saved-text notes should preserve explained formula cards");

assert.match(examPrepNotes, /commonMistakes/, "exam notes should cover common mistakes");
assert.match(studyLibrary, /Detailed concept explanations/, "the note reader should render expanded concept sections");
assert.match(studyLibrary, /ADDITIONAL WORKED METHODS/, "the PDF export should include detailed worked methods");
assert.match(localAI, /web-llm@0\.2\.86/, "local inference should use the current pinned WebLLM release");
assert.match(localAI, /navigator\.deviceMemory/, "local model recommendation should use browser RAM hints when available");
assert.match(localAI, /navigator\.gpu\.requestAdapter/, "local model installation should verify WebGPU adapter availability");
assert.match(localAI, /requiredStorageBytes/, "local model installation should check estimated browser storage before downloading");
assert.match(localAI, /\[MODEL_PLUS, MODEL_LITE\]/, "a failed larger model should fall back to the smaller mobile-friendly model");
assert.match(localAI, /getModelLabel/, "the app should report which model actually loaded after fallback");
assert.match(localAI, /kp-local-ai-consent-v1/, "first-time local model downloads should be consent gated");
assert.match(app, /localApi\.respond/, "text-only Study Guide prompts should be routable to local inference");
assert.match(app, /needsCloudForThisRequest=Boolean\(attachmentForRequest\|\|webSearch\)/, "file and web-research prompts should use cloud support rather than claim local support");
assert.match(vercel.headers[0].headers.find(h => h.key === "Content-Security-Policy").value, /https:\/\/esm\.run/);
assert.match(vercel.headers[0].headers.find(h => h.key === "Content-Security-Policy").value, /wasm-unsafe-eval/);
assert.match(vercel.headers[0].headers.find(h => h.key === "Content-Security-Policy").value, /worker-src 'self' blob:/);
assert.ok(vercel.builds.some(b => b.src === "local-ai.js" && b.use === "@vercel/static"), "Vercel should publish the local inference controller");
assert.ok(vercel.builds.some(b => b.src === "exam-prep-notes.js" && b.use === "@vercel/static"), "Vercel should publish the expanded exam notes");
assert.ok(vercel.builds.some(b => b.src === "school-chapter-guides.js" && b.use === "@vercel/static"), "Vercel should publish the expanded CBSE master guides");
assert.ok(vercel.builds.some(b => b.src === "school-humanities-commerce-guides.js" && b.use === "@vercel/static"), "Vercel should publish humanities, commerce and CS guides");
assert.ok(vercel.builds.some(b => b.src === "formula-cheat-sheets.js" && b.use === "@vercel/static"), "Vercel should publish formula cheat sheets");
assert.match(serviceWorker, /kaushalpath-shell-v23/, "service worker cache should be bumped to include local model controls");
assert.match(serviceWorker, /"\/local-ai\.js"/, "PWA shell should cache local AI controls");
assert.match(serviceWorker, /"\/exam-prep-notes\.js"/, "PWA shell should cache the expanded exam notes");
assert.match(html, /id="pwaUpdateBanner"/, "students should see when a refreshed chapter library is available");
assert.match(app, /updateViaCache: "none"/, "PWA update checks should bypass stale HTTP cache entries");
assert.match(app, /registration\.update\(\)/, "PWA registration should actively check for updates on visits");
assert.match(app, /pwaUpdateReload/, "students should have a clear reload action for the latest note content");
assert.match(serviceWorker, /kaushalpath-shell-v23/, "new deep-note deployment should force a new service-worker cache");

assert.match(serviceWorker, /"\/school-humanities-commerce-guides\.js"/, "PWA shell should cache humanities, language and commerce guides");
assert.equal((studyLibrary.match(/note\("Class /g) || []).length, 119, "the curated chapter notes catalogue should contain 119 authored note packs");
assert.match(studyLibrary, /window\.KP_DEVICE_PROFILE/, "device capability detection should run before app initialization");
assert.match(studyLibrary, /navigator\.deviceMemory/, "the UI should use available browser memory hints without assuming universal support");
assert.match(studyLibrary, /prefers-reduced-motion/, "the animated guide should respect reduced-motion preferences");
assert.match(studyLibrary, /overlay\.id\s*=\s*"kpTourOverlay"/, "the guided tour should create an accessible modal overlay");
assert.match(app, /questions\.push\(\.\.\.window\.KP_EXTRA_QUESTIONS\)/, "the main test runner should include the additional MCQ bank");
assert.ok((questionBank.match(/\n    q\(/g) || []).length >= 300, "the expanded question bank must retain the starter bank and contain enough authored questions for full-length JEE/NEET mocks");
assert.match(questionBank, /JEE Main · Mathematics Practice 01/, "the bank should include a JEE mathematics set");
assert.match(questionBank, /NEET UG · Biology Practice 01/, "the bank should include a NEET biology set");
assert.match(api, /async function requestGateway\(/, "the AI request should use a resilient gateway helper");
assert.match(api, /ai-gateway\.kilo\.ai\/api\/v1\/chat\/completions/, "the AI backend should have a second official gateway endpoint");
assert.match(api, /allowsAnonymousFallback/, "a stale optional key should not block anonymous requests to free models");
assert.ok(vercel.builds.some(b => b.src === "question-bank.js" && b.use === "@vercel/static"), "Vercel should publish the extra question bank");
assert.ok(vercel.builds.some(b => b.src === "study-library.js" && b.use === "@vercel/static"), "Vercel should publish the notes and tour logic");
assert.match(serviceWorker, /kaushalpath-shell-v23/, "offline shell cache should be version-bumped for the new assets");
assert.match(serviceWorker, /"\/question-bank\.js"/, "the PWA shell cache should include the new question bank");
assert.match(serviceWorker, /"\/study-library\.js"/, "the PWA shell cache should include the notes library");

assert.match(html, /sourceUrls/, "manual website URL input should exist");
assert.match(html, /id="ai-guide"/, "AI guide should have a dedicated workspace");
assert.match(html, /id="chatMessages"/, "horizontal AI conversation should exist");
assert.match(html, /id="chatPdf"/, "AI answers should have a PDF print/export tool");
assert.match(html, /id="chatSave"/, "AI answers should be saveable to a personal study library");
assert.match(html, /id="chatSessionSearch"/, "AI study conversations should be searchable");
assert.match(html, /id="plannerTaskForm"/, "the Study Planner should let students create tasks");
assert.match(html, /id="plannerTaskList"/, "the Study Planner should list and track saved tasks");
assert.match(html, /data-planner-filter="upcoming"/, "the plan should filter upcoming work");
assert.match(app, /function validPlannerTask\(item\)/, "study-plan backup entries should be schema-validated");
assert.match(app, /function renderPlanner\(\)/, "the planner should calculate task status and completion progress");
assert.match(app, /plannerTasks:getPlannerTasks\(\)/, "full progress backups should include study-plan tasks");
assert.match(app, /function initPlanner\(\)/, "task creation, completion and delete actions should be initialized");
assert.match(app, /initPlanner\(\);/, "the Study Planner should initialize with the workspace");
assert.match(app, /writeLocalJSON\(PLANNER_KEY,\[\]\)/, "the clear-progress action should also clear saved study tasks");

assert.match(html, /id="chatSessionList"/, "the AI Study Guide should expose recent saved conversations");
assert.match(app, /function getChatSessions\(\)/, "AI conversations should persist locally");
assert.match(app, /function validChatSession\(item\)/, "imported chat sessions should be validated");
assert.match(app, /function restoreLatestChatSession\(\)/, "the latest conversation should restore after a reload");
assert.match(app, /recordChatMessage\("assistant",answer\)/, "completed AI answers should be saved to their conversation");
assert.match(app, /chatSessions:getChatSessions\(\)/, "progress backups should include chat history");

assert.match(html, /id="chatSessionSearch"/, "AI study conversations should be searchable");
assert.match(html, /id="chatSessionList"/, "the AI Study Guide should expose recent saved conversations");
assert.match(app, /function getChatSessions\(\)/, "AI conversations should persist locally");
assert.match(app, /function validChatSession\(item\)/, "imported chat sessions should be validated");
assert.match(app, /function restoreLatestChatSession\(\)/, "the latest conversation should restore after a reload");
assert.match(app, /recordChatMessage\("assistant",answer\)/, "completed AI answers should be saved to their conversation");
assert.match(app, /chatSessions:getChatSessions\(\)/, "progress backups should include chat history");
assert.match(html, /id="librarySearch"/, "saved answers should be searchable");
assert.match(html, /id="savedViewerContent"/, "saved answers should have a readable preview");
assert.match(app, /function saveLibraryItem\(kind,title,text\)/, "answers should persist to a local saved library");
assert.match(app, /function renderSavedLibrary\(\)/, "the saved library should render and filter stored answers");
assert.match(app, /savedLibrary:getSavedLibrary\(\)/, "full progress backups should include the saved library");
assert.match(html, /id="topicSuggestions"/, "class-aware study topics should be available");
assert.doesNotMatch(html, /On-device AI|Qwen 1\.5B|localAiEnable|localAiDisable|Kilo Auto Free/, "the website should not expose model or provider details");
assert.doesNotMatch(app, /Kilo Auto Free|api\\.kilo\\.ai|VISION_MODEL/, "frontend logic should not expose remote provider endpoints or server-side model identifiers");
assert.match(html, /@media print/, "print-ready PDF styles should exist");
assert.match(app, /streamStudyRequest/, "study requests should support streaming output");
assert.match(app, /topicCatalog/, "the frontend should provide class and subject topic suggestions");
assert.match(app, /chapterTopicsFor/, "chapter-specific topics should update as the chapter is typed");
assert.match(app, /needsRemoteTools/, "web and image requests should bypass text-only local inference");
assert.match(app, /resizeImageFile/, "uploaded study images should be compressed before upload");
assert.match(html, /id="studyImage"/, "the study form should support image questions");
assert.match(html, /id="chatImage"/, "chat should support image attachments");
assert.match(html, /accept="image\/\*,\.pdf,\.txt,\.md,\.csv,\.tsv,\.json,\.xml,\.html,\.htm,\.rtf,\.doc,\.docx,\.pptx,\.xlsx,\.xls,\.ods,\.odt"/, "both upload fields should allow image, PDF, office and text files");
assert.match(app, /prepareAttachmentFile/, "the UI should prepare supported attachments by file type");
assert.match(app, /attachmentPayload/, "prepared files should be sent with study and chat requests");
assert.match(api, /extractAttachmentText/, "the backend should extract text from uploaded documents");
assert.match(api, /from "pdf-parse\/worker"/, "the PDF worker must initialize before pdf-parse to avoid serverless DOMMatrix crashes");
assert.match(api, /new PDFParse\(\{ data: buffer, CanvasFactory \}\)/, "PDF parsing must inject the supported canvas factory in serverless runtime");
assert.match(api, /new PDFParse/, "the backend should read PDFs");
assert.match(api, /getScreenshot/, "scanned PDFs should render pages for visual analysis");
assert.match(api, /hasVisualInput/, "scanned PDF page images should use the vision route");
assert.match(api, /error\.status = 400/, "malformed upload payloads should return a client error");
assert.match(api, /error\.status = 413/, "oversized file payloads should return a payload-too-large error");
assert.match(api, /randomUUID/, "API requests should receive server-generated trace IDs");
assert.match(api, /Retry-After/, "rate-limited requests should tell clients when to retry");
assert.match(api, /function createPinnedLookup\(addresses\)/, "research should pin validated DNS answers to prevent DNS-rebinding SSRF");
assert.match(api, /const metadata = await sharp\(parsedImage\.buffer, imageOptions\)\.metadata\(\)/, "every uploaded image should be decoded before reaching the gateway");
assert.match(api, /limitInputPixels: 40000000/, "image decoding should cap pixel expansion");
assert.match(api, /normalizedMime = "image\/png"/, "PNG diagrams should retain a lossless output format");
assert.match(api, /normalizedMime = "image\/webp"/, "WebP image uploads should remain supported");
assert.match(api, /This image could not be decoded safely/, "corrupt image uploads should receive a clear 422 response");

assert.match(api, /function ipv6ToBigInt\(address\)/, "IPv6 reserved-range checks should normalize expanded notation");
assert.match(api, /2001:10::/, "the SSRF guard should reject non-global ORCHID ranges");
assert.match(api, /3fff::/, "the SSRF guard should reject the IPv6 documentation range");
assert.match(api, /lookup: createPinnedLookup\(addresses\)/, "page fetches should use only the prevalidated DNS addresses");
assert.match(api, /requestPublicPage\(url, addresses, signal\)/, "research HTTP requests should use the pinned transport and honor cancellation");
assert.match(api, /function waitForResponseDrain\(res, signal\)/, "streaming should respect response backpressure");
assert.match(api, /AbortSignal.any\(\[AbortSignal.timeout\(38000\), clientAbortController.signal\]\)/, "abandoned AI requests should be cancelled");
assert.match(api, /research\(urls, shouldSearch, query, clientAbortController.signal\)/, "client disconnects should cancel public research work");
assert.match(api, /Cache-Control", "no-store, no-cache, no-transform"/, "streamed study answers should not be stored by intermediaries");
assert.match(api, /X-Request-Id/, "trace IDs should be returned as a response header");
assert.match(api, /study request failed:", requestId/, "backend failure logs should include the trace ID");
assert.match(api, /function assertSafeZipArchive\(buffer\)/, "Office archive uploads should be checked before decompression");
assert.match(api, /MAX_ARCHIVE_ENTRY_BYTES = 12 \* 1024 \* 1024/, "Office archive expansion should have a per-entry cap");
assert.match(api, /MAX_ARCHIVE_TOTAL_BYTES = 32 \* 1024 \* 1024/, "Office archive expansion should have a total cap");
assert.match(api, /assertSafeZipArchive\(buffer\)/, "Office document parsers should only run after archive validation");
assert.match(api, /mammoth\.extractRawText/, "the backend should read Word documents");
assert.match(api, /WordExtractor/, "the backend should read legacy Word documents");
assert.match(api, /XLSX\.read/, "the backend should read spreadsheet attachments");
assert.match(api, /unzipSync/, "the backend should read PowerPoint and OpenDocument files");
assert.match(api, /sharp\(/, "the backend should convert uncommon image formats before vision analysis");
assert.match(api, /MAX_EXTRACTED_FILE_CHARS/, "document extraction should be bounded before model input");
assert.match(app, /imageMimeForFile/, "image formats that the browser cannot decode should have a server-conversion fallback");
assert.match(JSON.stringify(pkg.dependencies), /pdf-parse/, "the PDF parser dependency should be configured");
assert.match(JSON.stringify(pkg.dependencies), /mammoth/, "the Word parser dependency should be configured");
assert.match(JSON.stringify(pkg.dependencies), /xlsx/, "the spreadsheet parser dependency should be configured");
assert.match(JSON.stringify(pkg.dependencies), /sharp/, "the image conversion dependency should be configured");
assert.match(html, /id="chatWebSearch"/, "chat should offer an explicit web-search control");
assert.match(html, /id="chatSources"/, "retrieved source links should be displayed in chat");
assert.match(app, /activateWorkspaceView/, "workspace sections should change via menu navigation");
assert.match(app, /chatSpeak/, "AI study tools should include read-aloud");
assert.match(app, /function markdownToHtml/, "AI answers should render Markdown into readable HTML");
assert.match(app, /md-table-wrap/, "Markdown tables should be rendered as responsive tables");
assert.match(app, /mathToHtml/, "Inline and block equations should get readable math formatting");
assert.match(app, /renderMarkdownInto\(node,answer\)/, "streamed chat output should re-render formatted Markdown");
assert.match(html, /\.md-table/, "readable chat Markdown styles should exist");
assert.match(html, /AI Study Guide/, "the chat workspace should have a clear, professional title");
assert.match(html, /aria-label="Study preferences"/, "chat study settings should be grouped accessibly");
assert.match(html, /id="chatComposerHint"/, "the composer keyboard instructions should be connected to the input");
assert.match(html, /\.chat-message-avatar/, "chat messages should have distinct author avatars");
assert.match(html, /\.chat-inline-action/, "individual assistant answers should expose a copy action");
assert.match(html, /\.chat-typing/, "streaming responses should have a visible typing state");
assert.match(html, /prefers-reduced-motion:reduce/, "chat animations should respect reduced-motion preferences");

assert.match(api, /stream: wantsStream/, "API should request streamed provider output when asked");
assert.match(api, /api\.kilo\.ai\/api\/gateway\/chat\/completions/, "the AI API should use the current documented Kilo Gateway endpoint");
assert.match(api, /temperature: 0\.2/, "the tutor should favour consistent, accurate answers");
assert.match(api, /notes: 1250/, "chapter notes should use a bounded token budget to reduce latency");
assert.match(app, /study-retry-row/, "failed study generations should offer a retry action");
assert.match(app, /response was interrupted before it finished/, "partial study output should be preserved on failure");
assert.match(app, /lastStudyController!==controller/, "stale study requests should not overwrite a newer response");
assert.match(api, /body.messages/, "AI requests should preserve short chat context");

assert.match(html, /src="\/app\.js" defer/, "JavaScript should be external for CSP");
assert.doesNotMatch(html, /<script>[\s\S]*?<\/script>/i, "inline scripts should be removed");
assert.match(app, /\/api\/study-guide/, "frontend must call the Vercel API path");
assert.match(app, /urls:urls/, "frontend must send supplied URLs");
assert.match(api, /normalizeUrls/, "API validates user URLs");
assert.equal(vercel.framework, null, "Vercel should use the Other framework preset");
assert.equal(vercel.cleanUrls, true, "Vercel should expose the serverless endpoint without its .mjs extension");
assert.ok(vercel.routes.some(r => r.src === "/api/study-guide" && r.dest === "/api/study-guide.mjs"), "AI endpoint must have a clean URL route");
assert.ok(Array.isArray(vercel.builds), "Vercel should explicitly build static files and the API");
assert.ok(vercel.builds.some(b => b.src === "index.html" && b.use === "@vercel/static"), "homepage should be published as a static file");
assert.ok(vercel.builds.some(b => b.src === "app.js" && b.use === "@vercel/static"), "browser script should be published as a static file");
const offlineAssets = ["manifest.webmanifest", "app-icon.svg", "offline.html", "service-worker.js"];
for (const asset of offlineAssets) {
  assert.ok(existsSync(new URL("../" + asset, import.meta.url)), asset + " should exist in the repository");
  assert.ok(vercel.builds.some((build) => build.src === asset && build.use === "@vercel/static"), asset + " must be explicitly published by Vercel");
}

assert.ok(vercel.builds.some(b => b.src === "local-ai.js" && b.use === "@vercel/static"), "the consent-gated local model controller should be published to the browser");
assert.match(JSON.stringify(vercel), /esm[.]run/, "CSP should allow the pinned WebLLM runtime after local mode is selected");
assert.match(JSON.stringify(vercel), /cdn[.]jsdelivr[.]net/, "CSP should allow the official CDN delivery route used by WebLLM");
assert.match(JSON.stringify(vercel), /huggingface\.co/, "CSP should allow model-weight downloads after explicit local installation consent");
assert.ok(vercel.builds.some(b => b.src === "api/study-guide.mjs" && b.use === "@vercel/node"), "AI endpoint should be deployed as a Node function");
assert.ok(existsSync(new URL("../api/study-guide.mjs", import.meta.url)), "Vercel AI route exists");
assert.ok(existsSync(new URL("../index.html", import.meta.url)), "Vercel homepage exists at the root");
assert.ok(existsSync(new URL("../app.js", import.meta.url)), "Vercel browser script exists at the root");
assert.equal(existsSync(new URL("../public/index.html", import.meta.url)), false, "legacy nested homepage should be removed");
assert.equal(existsSync(new URL("../public/app.js", import.meta.url)), false, "legacy nested browser script should be removed");
assert.equal(existsSync(new URL("../netlify.toml", import.meta.url)), false, "Netlify config should be removed");
assert.equal(existsSync(new URL("../netlify/functions/study-guide.mjs", import.meta.url)), false, "Netlify AI function should be removed");
assert.match(api, /kilo-auto\/free/, "AI should use Kilo Auto Free");
assert.match(api, /api\.kilo\.ai\/api\/gateway\/chat\/completions/, "AI should use the documented Kilo Gateway chat endpoint");
assert.match(api, /normalizeUrls/, "API validates user URLs");

assert.match(api, /features: \{ liveSearch: true, readPublicUrls: true, imageAnalysis: true \}/, "health metadata should expose capabilities without model identifiers");
assert.doesNotMatch(api.slice(api.indexOf('if (req.method === "GET")'), api.indexOf('if (req.method !== "POST")')), /visionModel|localModel|Qwen|kilo-auto\/free|inclusionai/i, "health response must not expose model or provider details");
assert.match(api, /Promise\.all\(\[\s*Promise\.all\(urls\.map/, "selected public pages should be fetched concurrently");
assert.match(api, /shouldSearch\s*\?\s*searchWeb\(query, signal\)/, "web search should run concurrently with selected page retrieval and support cancellation");
assert.match(api, /AbortSignal\.timeout\(38000\)/, "upstream timeout should leave room for research and function cleanup");
assert.match(api, /async function searchWeb/, "the server backend should search the public web when requested");
assert.match(api, /async function readPublicPage/, "the server backend should read supported public pages");
assert.match(api, /assertPublicUrl/, "the page reader should validate public URLs");
assert.match(api, new RegExp("node:dns/promises"), "public URL reading should check resolved addresses");
assert.match(api, new RegExp("inclusionai/ling-3\\.0-flash-vl:free"), "image requests should use the configured free vision model");
assert.match(api, /type: "image_url"/, "image data should be sent as a multimodal message");
assert.doesNotMatch(api, /provider: "Kilo Auto Free"|provider: imageData|sources: web\.sources, model: requestedModel/, "API responses should not disclose configured model or provider");
assert.doesNotMatch(api, /Kilo Gateway rejected|Kilo Auto Free returned|Kilo Auto Free is temporarily|KILO_API_KEY in Vercel/, "user-facing errors should not expose provider configuration");
assert.doesNotMatch(api, /No live web search is available in this endpoint/, "the model instructions should not disable the implemented research route");
assert.doesNotMatch(api, /GEMINI_API_KEY|GoogleGenAI|google_search|url_context/, "the API should not depend on Gemini credentials or tools");
assert.match(app, /id:"cbse12cs26"/, "the question bank should include an official CBSE Class XII CS SQP sampler");
assert.match(app, /One exact 1-mark MCQ/, "the official paper excerpt should state that it is only a sampler");
assert.match(app, /id:"cbse12cs26"[\s\S]*?qs:\[\s*\{q:"Which of the following data types in Python is mutable\?"[\s\S]*?\}\s*\]\s*\}/, "official sampler should use a short, source-attributed actual CBSE sample-paper question");
assert.match(html, /href="https:\/\/jeemain\.nta\.nic\.in\/2026\//, "JEE card should link to current official shift-wise papers");
assert.match(html, /neet\.nta\.nic\.in\/archive\//, "NEET card should link to the official question-paper archive");

assert.match(app, /ComputerScience-SQP\.pdf/, "the official sampler should link to its question paper");
assert.match(app, /ComputerScience-MS\.pdf/, "the official sampler should link to the corresponding marking scheme");
assert.match(app, /negativeMark:1/, "JEE and NEET practice sets should explicitly configure negative marking");
assert.match(app, /const score=t\.qs\.reduce/, "scoring should honor per-question marks and configured penalties");
assert.match(app, /const maxMarks=t\.qs\.reduce/, "test cards should display their real maximum marks");
assert.ok(app.includes("Scoring: '+marking"), "test cards should display correct, wrong and blank scoring explicitly");
assert.match(app, /Official sample-paper question/, "question cards should label authentic official-paper questions");
assert.match(app, /Original practice set/, "question cards should distinguish original practice from official questions");
assert.match(html, /id="official-papers"/, "the UI should expose an official paper catalogue");
assert.match(html, /sqp_classx_2026-27\.html/, "the official catalogue should link CBSE Class X current papers");
assert.match(html, /SQP_CLASSXII_2026-27\.html/, "the official catalogue should link CBSE Class XII current papers");
assert.match(html, /jeemain\.nta\.nic\.in\/2026\//, "the official catalogue should link the JEE Main 2026 question-paper archive");
assert.match(html, /neet\.nta\.nic\.in\/2026/, "the official catalogue should link the NEET UG 2026 NTA portal");
assert.match(html, /180 compulsory MCQs in 180 minutes, for 720 total marks/, "NEET card should reflect the current official pattern");
assert.match(html, /75 questions, 300 marks/, "JEE Main card should reflect the current Paper 1 pattern");
assert.match(html, /id="resumeTestBanner"/, "unfinished timed tests should have a recovery banner");
assert.match(html, /id="resumeSavedTest"/, "students should be able to resume an autosaved test");
assert.match(app, /function saveActiveTest\(\)/, "test answers and remaining deadline should autosave locally");
assert.match(app, /function getSavedTest\(\)/, "saved test recovery should validate stored quiz state");
assert.match(app, /function validTestSnapshot\(test,expectedId\)/, "custom review tests should validate their saved question snapshots");
assert.match(app, /testSnapshot:active\.test\.id\.indexOf\("review-"\)===0\?active\.test:null/, "targeted review attempts should autosave a bounded test snapshot");
assert.match(app, /const missedCount=r\.review\.filter/, "test results should detect wrong and unanswered questions for targeted retakes");
assert.match(app, /id="retryMissed"/, "test results should offer a retry for missed questions");
assert.match(app, /questions\.push\(retryTest\);startTest\(retryTest\.id\)/, "missed questions should launch as a targeted practice set");
assert.match(app, /Targeted retake: missed or unanswered questions only/, "targeted review should identify its focused scoring context");
assert.match(app, /function initFocusTimer\(\)/, "focus timer should restore its state after a refresh");
assert.match(app, /function validLibraryItem\(item\)/, "saved library records should be validated before use");
assert.match(html, /id="focusStartPause"/, "students should have a controllable focus timer");
assert.match(app, /function refreshMomentum\(\)/, "progress cards should calculate test accuracy and study streaks");
assert.match(html, /id="momentumAccuracy"/, "learning momentum should show calculated answer accuracy");
assert.match(app, /function exportProgressBackup\(\)/, "progress should support full JSON backup export");
assert.match(app, /payload\.version!==1/, "progress imports should validate backup schema versions");
assert.match(app, /payload\.results\.some\(function\(r\)\{return !validResult\(r\);\}\)/, "progress imports should reject malformed result records");
assert.match(app, /function readLocalJSON\(key,fallback\)/, "local storage parsing should fail safely when browser data is unavailable");
assert.match(html, /id="clearProgress"/, "students should be able to clear saved progress intentionally");
assert.ok(html.includes('src="/cbse-english-chapter-notes.js"'), "HTML must load English chapter notes");
assert.ok(html.includes('src="/cbse-commerce-computing-hindi-chapters.js"'), "HTML must load Hindi/commerce/computing chapter notes");
assert.ok(serviceWorker.includes('"/cbse-english-chapter-notes.js"'), "PWA shell must cache English chapter notes");
assert.ok(serviceWorker.includes('"/cbse-commerce-computing-hindi-chapters.js"'), "PWA shell must cache Hindi/commerce/computing chapter notes");
assert.ok(vercel.builds.some(b => b.src === "cbse-english-chapter-notes.js" && b.use === "@vercel/static"), "Vercel must publish English chapter notes");
assert.ok(vercel.builds.some(b => b.src === "cbse-commerce-computing-hindi-chapters.js" && b.use === "@vercel/static"), "Vercel must publish other CBSE chapter notes");
assert.match(await readFile(new URL("../scripts/cloudflare-build.mjs", import.meta.url), "utf8"), /cbse-english-chapter-notes[.]js/);
assert.match(await readFile(new URL("../scripts/cloudflare-build.mjs", import.meta.url), "utf8"), /cbse-commerce-computing-hindi-chapters[.]js/);
assert.ok(html.includes("<option>Hindi</option>") && html.includes("<option>Informatics Practices</option>"), "Study Hub must expose expanded subject filters");
console.log("KaushalPath static assets, private AI routing, web research, and image handling checks passed.");


assert.ok(vercel.builds.some(b => b.src === "cbse-humanities-computer-deep-notes.js" && b.use === "@vercel/static"), "Vercel must publish humanities/computer detailed notes");
assert.ok(serviceWorker.includes('"/cbse-humanities-computer-deep-notes.js"'), "PWA shell must cache humanities/computer detailed notes");
const cloudflareWorker = readFileSync(new URL("../cloudflare-worker.mjs", import.meta.url), "utf8");
const wranglerConfig = readFileSync(new URL("../wrangler.toml", import.meta.url), "utf8");
assert.match(cloudflareWorker, /raw\.githubusercontent\.com\/ram1234598766-dotcom\/KaushalPath\/main/, "Cloudflare should serve current static files without the failing asset-upload JWT flow");
assert.match(cloudflareWorker, /const STATIC_FILES = new Set\(\[/, "Cloudflare should allowlist the public app assets served by the existing Worker");
assert.match(cloudflareWorker, /if \(url\.pathname === "\/api\/study-guide"\)/, "Cloudflare must preserve the existing study-guide API route");
assert.match(cloudflareWorker, /pathname === "\/service-worker\.js"/, "the service worker file must bypass the edge cache to refresh promptly");
assert.ok(!/^\[assets\]/m.test(wranglerConfig), "Wrangler should not invoke the failing Cloudflare static-assets upload flow");

const smartClient = readFileSync(new URL("../smart-system-client.js", import.meta.url), "utf8");
assert.match(smartClient, /kp-results/, "Smart System must read the existing local test history");
assert.match(smartClient, /kp-planner-tasks/, "Smart System must keep planner writes local");
assert.ok(smartClient.includes("/api/v2/analytics/benchmarks"), "Smart System UI must request aggregate community benchmarks");
assert.ok(vercel.builds.some(b => b.src === "smart-system-client.js" && b.use === "@vercel/static"), "Vercel must publish Smart System UI client");

assert.ok(studyLibrary.includes("const fallbackChapterPage ="), "chapter PDF export should fall back to a simpler per-chapter layout if rich rendering fails");
assert.ok(studyLibrary.includes("const renderChapterSafely ="), "one malformed chapter must not abort the whole notes export");
assert.ok(studyLibrary.includes("printTarget.print()"), "native browser printing should preserve vector text and mind-map graphics");
assert.ok(studyLibrary.includes(".mindmap-page{page:chapter-map;width:100%!important;max-width:none!important;"), "the landscape map should not inherit a portrait width constraint");
assert.ok(studyLibrary.includes('status.textContent = "Preview ready. Click Download PDF, then choose “Save as PDF” in the print dialog and click Save. Your map and notes remain crisp and selectable."'), "the chapter preview should clearly explain how to save the PDF");
assert.doesNotMatch(studyLibrary, /html2pdf|html2canvas|runDownload/, "the chapter export must not retain its old raster download implementation");
assert.ok(studyLibrary.includes('const fileStemSource = String('), "chapter filename construction must tolerate incomplete chapter metadata");
