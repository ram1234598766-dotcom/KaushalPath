import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const files = [
  ["ncert-physics-chapter-notes.js", 33],
  ["ncert-chemistry-chapter-notes.js", 23],
  ["ncert-mathematics-chapter-notes.js", 41],
  ["ncert-biology-chapter-notes.js", 41]
];
const sandbox = { window: {} };
const summaries = [];
const all = [];
for (const [file, expectedMinimum] of files) {
  const source = readFileSync(new URL("../" + file, import.meta.url), "utf8");
  const before = Array.isArray(sandbox.window.KP_NCERT_CHAPTER_NOTES) ? sandbox.window.KP_NCERT_CHAPTER_NOTES.length : 0;
  vm.runInNewContext(source, sandbox, { filename: file, timeout: 5000 });
  const store = sandbox.window.KP_NCERT_CHAPTER_NOTES;
  assert.ok(Array.isArray(store), file + " should append chapter data to KP_NCERT_CHAPTER_NOTES");
  const added = store.slice(before);
  assert.ok(added.length >= expectedMinimum, file + " should contain its expected minimum chapter count");
  for (const note of added) {
    assert.ok(note && typeof note === "object", file + " contains a non-object note");
    assert.ok(note.level && note.subject && note.chapter, file + " note lacks class/subject/chapter metadata");
    assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, note.chapter + " should have at least four explanatory sections");
    const sectionWords = note.sections.reduce((sum, section) => {
      assert.ok(section.heading && typeof section.body === "string" && section.body.trim(), note.chapter + " has an empty explanatory section");
      return sum + section.body.trim().split(/\s+/).filter(Boolean).length;
    }, 0);
    assert.ok(sectionWords >= 140, note.chapter + " has fewer than 140 words of explanatory chapter text (" + sectionWords + ")");
    assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, note.chapter + " should include at least two worked methods/examples");
    assert.ok(note.workedExamples.every(example => example.title && Array.isArray(example.steps) && example.steps.length >= 3), note.chapter + " has an incomplete worked example");
    assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, note.chapter + " should list common mistakes");
    assert.ok(Array.isArray(note.examFocus) && note.examFocus.length >= 1, note.chapter + " should include an exam approach");
    assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, note.chapter + " should include recall questions");
    assert.ok(Array.isArray(note.glossary) && note.glossary.length >= 2, note.chapter + " should include a glossary");
    assert.ok(Array.isArray(note.formulaCheatSheet) && note.formulaCheatSheet.length >= 1, note.chapter + " should contain a formula/term cheat sheet");
    assert.ok(note.formulaCheatSheet.every(card => card.formula && card.meaning && card.when && card.units && card.trap), note.chapter + " has an incomplete formula/term card");
    all.push(note);
  }
  summaries.push({ file, count: added.length, checked: added.length });
}
const gravitation = all.find(n => n.level === "Class 11" && n.subject === "Physics" && n.chapter === "Gravitation");
assert.ok(gravitation, "Class 11 Physics Gravitation must exist as its own note");
assert.ok(gravitation.sections.some(s => /potential|escape|orbit/i.test(s.heading + " " + s.body)), "Gravitation should explain potential energy and orbital/escape concepts");
assert.ok(gravitation.formulaCheatSheet.length >= 3, "Gravitation should include an explained formula cheat sheet");
assert.ok(gravitation.workedExamples.length >= 2, "Gravitation should include multiple worked examples");
for (const [level, subject, expected] of [
  ["Class 10", "Mathematics", 13],
  ["Class 11", "Mathematics", 14],
  ["Class 12", "Mathematics", 13],
  ["Class 10", "Science", 10],
  ["Class 11", "Physics", 14],
  ["Class 12", "Physics", 14],
  ["Class 11", "Chemistry", 9],
  ["Class 12", "Chemistry", 10],
  ["Class 11", "Biology", 21],
  ["Class 12", "Biology", 14]
]) {
  const actual = all.filter(n => n.level === level && n.subject === subject).length;
  assert.ok(actual >= expected, level + " " + subject + " expected at least " + expected + " individual chapters; found " + actual);
}
console.log("NCERT chapter audit passed: " + summaries.map(s => s.file + " (" + s.checked + ")").join(", ") + "; " + all.length + " detailed chapter entries validated.");
