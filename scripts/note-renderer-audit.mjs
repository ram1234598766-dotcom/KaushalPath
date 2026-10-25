import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../study-library.js", import.meta.url), "utf8");
const pdfExportStart = source.indexOf("function printNotes(items)");
const pdfExportEnd = source.indexOf("function toast(", pdfExportStart);
assert.ok(pdfExportStart >= 0 && pdfExportEnd > pdfExportStart, "the chapter PDF export path must be present");
const pdfExport = source.slice(pdfExportStart, pdfExportEnd);
assert.ok(pdfExport.includes("createAndDownloadChapterPdf("), "the chapter preview must call the direct PDF file generator");
assert.ok(pdfExport.includes("@media print{html,body{width:100%!important;max-width:none!important;"), "print layout must remove portrait-width constraints before rendering the landscape map");
assert.ok(pdfExport.includes("The complete chapter mind map prints on a landscape first page; detailed notes follow on portrait pages."), "the PDF preview must explain the mixed page orientation");
const helperStart = source.indexOf("  function uniqueNoteText(");
const helperEnd = source.indexOf("function printNotes(items)", helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart, "the pure chapter map and packet helpers must be present");
const helpers = source.slice(helperStart, helperEnd);

const fixture = {
  level: "Class 11",
  subject: "Physics",
  chapter: "Gravitation",
  intro: "Detailed gravitation fixture used to verify chapter export rendering.",
  points: [
    "Gravity is attractive and follows an inverse-square law.",
    "Field strength and potential use different definitions and units."
  ],
  formulas: ["F = Gm₁m₂/r²", "g = GM/r²", "V = −GM/r"],
  formulaCheatSheet: [
    { formula: "F = Gm₁m₂/r²", meaning: "Mutual gravitational force.", when: "Compare separated masses.", units: "N", trap: "Use centre-to-centre distance." },
    { formula: "g = GM/r²", meaning: "Gravitational field strength.", when: "Find field outside a spherical mass.", units: "m/s²", trap: "Use radius from the centre." }
  ],
  sections: [
    { heading: "Universal law and inverse-square dependence", body: "The gravitational force varies with both masses and inversely with the square of their centre-to-centre separation." },
    { heading: "Gravitational field and acceleration", body: "Field strength is force per unit test mass and points towards the attracting body." },
    { heading: "Potential and potential energy", body: "Potential is energy per unit mass when zero is chosen at infinity." },
    { heading: "Escape speed and orbital motion", body: "Escape and circular-orbit speeds follow from energy and centripetal-force relations." },
    { heading: "Kepler laws and satellite energy", body: "Kepler's laws describe elliptical orbits, swept areas and period versus semi-major axis." }
  ],
  workedExamples: [
    { title: "Distance doubled", steps: ["Use the inverse-square relation.", "Doubling distance makes the force one-quarter as large."] },
    { title: "Escape speed derivation", steps: ["Equate launch kinetic energy with the required gravitational energy.", "Solve for speed and use g = GM/R²."] }
  ],
  practiceProblems: [
    { question: "What happens to gravitational force when separation triples?", answer: "It falls to one-ninth.", solution: "The force is proportional to 1/r²." },
    { question: "Why is potential negative with zero at infinity?", answer: "A bound mass has lower energy.", solution: "Energy must be supplied to separate the masses to infinity." },
    { question: "How does escape speed compare with circular speed at the same radius?", answer: "It is √2 times as large.", solution: "Compare √(2GM/r) with √(GM/r)." }
  ],
  commonMistakes: [
    "Using height above a surface instead of centre-to-centre radius.",
    "Treating potential and potential energy as the same quantity.",
    "Forgetting that the object mass cancels from orbital speed."
  ],
  examFocus: ["Write derivations from Newton's law or energy conservation."],
  fastMethods: [
    { title: "Inverse-square comparison", when: "Masses are unchanged.", steps: ["Compare the distance ratio.", "Square its reciprocal."], caution: "Do not use this shortcut if the masses change." }
  ],
  glossary: ["Gravitational field", "Potential", "Potential energy", "Escape speed"],
  recall: ["State Kepler's second law.", "Explain the sign of gravitational potential."]
};

const sandbox = {};
const harness = `
const NOTE_SOURCE = "Check the prescribed textbook and current syllabus.";
const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[ch]));
${helpers}
globalThis.__map = renderMindMapPage(${JSON.stringify(fixture)});
globalThis.__packet = fullChapterPacket(${JSON.stringify(fixture)});
globalThis.__label = mapSvgLabel(
  "Universal gravitational field strength changes with altitude and must use centre-to-centre distance",
  80, 20, 160, 38, 8.2, 28
);
globalThis.__highlightedPhrase = importantTextHtml("Definition: field strength is defined as force per unit mass.");
globalThis.__importantList = noteListHtml(["Remember: use the centre-to-centre distance.", "Exam tip: verify units before substituting."], false, "kp-key-ideas");
globalThis.__formulaMarkup = formulaContentHtml({"level":"Class 11","subject":"Physics","chapter":"Audit","intro":"Definition: force is defined as mass times acceleration.","formulas":["F = ma"],"points":["Remember: always check units."],"formulaCheatSheet":[{"formula":"F = ma","meaning":"The net force is equal to mass times acceleration.","when":"Use if the mass is known.","units":"newtons","trap":"Never omit units."}]});
globalThis.__practiceMarkup = practiceContentHtml({"practiceProblems":[{"question":"What if distance doubles?","answer":"Force becomes one-quarter.","solution":"Because force is inversely proportional to distance squared."}]});

`;
runInNewContext(harness, sandbox, { timeout: 10000 });

assert.ok(sandbox.__highlightedPhrase.includes('<mark class="kp-important-mark">Definition</mark>'), "definition cues should be highlighted");
assert.ok(sandbox.__highlightedPhrase.includes('<mark class="kp-important-mark">defined as</mark>'), "definition phrases should be highlighted");
assert.ok(sandbox.__importantList.includes('class="kp-key-ideas"') && sandbox.__importantList.includes('<mark class="kp-important-mark">Remember</mark>'), "key ideas should be highlighted and semantically styled");
assert.ok(sandbox.__formulaMarkup.includes('class="kp-formula-list"') && sandbox.__formulaMarkup.includes("kp-formula-card"), "formula cards should have distinct emphasis");
assert.ok(sandbox.__practiceMarkup.includes("kp-practice-question") && sandbox.__practiceMarkup.includes("kp-practice-answer") && sandbox.__practiceMarkup.includes("kp-practice-reasoning"), "practice questions, answers and reasoning must be emphasized");
assert.ok(source.includes("highlightImportantPhrases(detail)"), "the on-screen notes reader should highlight important phrases");
assert.ok(source.includes('className = "notes-common-mistakes kp-common-mistakes"'), "common mistakes should be emphasized on screen");
assert.ok(source.includes("await engine.svg2pdf(svg, pdf, options)") && source.includes('pdf.output("blob")'), "chapter export should create a real PDF blob and render the concept map as vector graphics");
assert.ok(!source.includes("printTarget.print()"), "chapter Download PDF must not open the browser print dialog");
assert.ok(source.includes("@page chapter-map{size:A4 landscape"), "the mind map should use a landscape first page");
assert.ok(source.includes("@page chapter-notes{size:A4 portrait"), "remaining note pages should remain portrait");
assert.ok(source.includes(".mindmap-page{page:chapter-map;width:100%!important;max-width:none!important;") && source.includes("min-height:0!important;overflow:visible!important"), "the landscape map should use full print width without clipping");
assert.ok(!source.includes("html2pdf().set") && !source.includes("html2canvas:"), "the chapter PDF flow must not use a raster canvas that can crop the map");

assert.ok(source.includes("const fontSize = 11.4;"), "mind map labels should remain readable at PDF size");
assert.ok(sandbox.__map.includes('class="note-page mindmap-page"'), "the first page must be the chapter mind map");
assert.ok(sandbox.__map.includes('viewBox="0 0 1600 960"'), "the complete concept map must preserve its full landscape SVG viewBox");
assert.ok(sandbox.__map.includes('x="22"') && sandbox.__map.includes('x="1238"'), "the map must render both left and right topic columns instead of only half");
assert.ok(sandbox.__map.includes('width="166.5"'), "right-side map cards must remain inside the SVG viewport with their full width");
assert.ok(sandbox.__map.includes("mindmap-svg"), "the mind map must be a real scalable SVG");
assert.ok(sandbox.__map.includes('stroke="#3678E8"') && sandbox.__map.includes('stroke="#13A89E"') &&
  sandbox.__map.includes('stroke="#F19A32"'), "the map needs several distinct branch colours");
assert.match(sandbox.__map, / C /, "main and sub-branches must use smooth curved connector lines");
assert.ok(sandbox.__map.includes("The gravitational force varies with both masses"), "the concept branches must visibly explain the chapter topics, not only list their headings");
assert.ok(sandbox.__map.includes("Key ideas &amp; applications"), "the concept map should include a separate explanatory key-ideas branch");
assert.ok(sandbox.__map.includes("Mutual gravitational force"), "formula branches should explain what each important rule means");
assert.ok(sandbox.__map.includes("Distance doubled") && sandbox.__map.includes("one-quarter"), "worked-example branches should explain both the example and its outcome");
assert.ok(sandbox.__map.includes("Use for") || sandbox.__map.includes("Masses are unchanged"), "methods branches should explain when an approach applies");
assert.ok(sandbox.__map.includes("The gravitational force varies"), "the map must expose explanation text directly in visible SVG, not only hidden SVG title metadata");

for (const section of fixture.sections) {
  assert.ok(sandbox.__map.includes(section.heading), "the map must include the full heading: " + section.heading);
}
for (const term of ["Universal", "gravitational", "altitude", "centre-to-centre", "distance"]) {
  assert.ok(sandbox.__label.includes(term), "long SVG labels must preserve the word: " + term);
}
assert.ok((sandbox.__label.match(/<tspan/g) || []).length > 1, "long labels should wrap across multiple SVG text lines");
assert.ok(sandbox.__packet.startsWith('<article class="note-page mindmap-page"'), "the PDF packet must begin with the mind map");
assert.equal((sandbox.__packet.match(/class="note-page/g) || []).length, 12, "every chapter PDF should contain a map plus eleven detailed study pages (12 pages total)");
for (let page = 2; page <= 12; page++) {
  assert.ok(sandbox.__packet.includes("PAGE " + page + " OF 12"), "the chapter pack must include page " + page);
}
assert.ok(sandbox.__packet.includes("PRACTICE QUESTIONS WITH WORKED ANSWERS") ||
  sandbox.__packet.includes("Practice questions with worked answers"), "the packet should include the practice-answer section");
console.log("Chapter map renderer: colourful curved SVG verified; complete chapter packet: 12 pages.");
