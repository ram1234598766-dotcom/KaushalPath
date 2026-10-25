import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

function loadExport(filename, exportName) {
  const source = readFileSync(new URL("../" + filename, import.meta.url), "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename, timeout: 10000 });
  const value = sandbox.window[exportName];
  assert.ok(Array.isArray(value), filename + " must export " + exportName);
  return value;
}

const cbseSets = [
  ["cbse-maths-deep-notes.js", "KP_MATHS_INDIVIDUAL_DEEP_NOTES", 27],
  ["cbse-physics-chemistry-deep-notes.js", "KP_SCIENCE_INDIVIDUAL_DEEP_NOTES", 25],
  ["cbse-biology-deep-notes.js", "KP_BIOLOGY_INDIVIDUAL_DEEP_NOTES", 12],
  ["cbse-remaining-chapter-notes.js", "KP_REMAINING_CHAPTER_DEEP_NOTES", 25],
  ["cbse-humanities-computer-deep-notes.js", "KP_HUMANITIES_INDIVIDUAL_DEEP_NOTES", 37]
];
const cbseNotes = [];
const counts = [];
for (const [filename, exportName, minimumCount] of cbseSets) {
  const notes = loadExport(filename, exportName);
  assert.ok(notes.length >= minimumCount, filename + " should contain at least " + minimumCount + " chapter entries; found " + notes.length);
  counts.push(filename + ":" + notes.length);
  for (const note of notes) {
    assert.ok(note.level && note.subject && note.chapter, filename + " has a note without class/subject/chapter metadata");
    assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, note.chapter + " needs at least four explanation sections");
    const explanatoryWords = note.sections.reduce((sum, section) => {
      assert.ok(section.heading && typeof section.body === "string" && section.body.trim(), note.chapter + " has an empty explanation section");
      return sum + section.body.trim().split(/\s+/).filter(Boolean).length;
    }, 0);
    assert.ok(explanatoryWords >= 180, note.level + " " + note.subject + " · " + note.chapter + " has only " + explanatoryWords + " explanation words");
    assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, note.chapter + " needs at least two worked examples/methods");
    assert.ok(note.workedExamples.every(example => example.title && Array.isArray(example.steps) && example.steps.length >= 2), note.chapter + " has an incomplete worked example");
    assert.ok(Array.isArray(note.practiceProblems) && note.practiceProblems.length >= 3, note.chapter + " needs at least three practice questions");
    assert.ok(note.practiceProblems.every(problem => problem.question && problem.answer && problem.solution), note.chapter + " has a practice question without an answer/reasoning");
    assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, note.chapter + " needs at least three common exam traps");
    assert.ok(Array.isArray(note.examFocus) && note.examFocus.length >= 1, note.chapter + " needs an exam approach");
    assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, note.chapter + " needs recall questions");
    assert.ok(Array.isArray(note.glossary) && note.glossary.length >= 3, note.chapter + " needs glossary terms");
    if (["Mathematics", "Physics", "Chemistry", "Science"].includes(note.subject)) {
      assert.ok(Array.isArray(note.formulaCheatSheet) && note.formulaCheatSheet.length >= 2, note.chapter + " needs an explained formula/rule cheat sheet");
      assert.ok(note.formulaCheatSheet.every(card => card.formula && card.meaning && card.when && card.units && card.trap), note.chapter + " has an incomplete formula card");
    }
    cbseNotes.push(note);
  }
}

const gravitation = cbseNotes.find(note => note.level === "Class 11" && note.subject === "Physics" && note.chapter === "Gravitation");
assert.ok(gravitation, "Class 11 Physics · Gravitation must be its own chapter, not a short summary");
assert.ok(gravitation.sections.some(section => /potential|potential energy/i.test(section.heading + " " + section.body)), "Gravitation needs a detailed potential/energy explanation");
assert.ok(gravitation.sections.some(section => /escape|orbit|Kepler|satellite/i.test(section.heading + " " + section.body)), "Gravitation needs orbital/escape/Kepler coverage");
assert.ok(gravitation.formulaCheatSheet.length >= 4, "Gravitation needs several explained equations");
assert.ok(gravitation.workedExamples.length >= 3, "Gravitation needs multiple step-by-step worked examples");
assert.ok(gravitation.practiceProblems.length >= 4, "Gravitation needs practice with answers and reasoning");

const ncertSandbox = { window: {} };
for (const filename of ["ncert-physics-chapter-notes.js","ncert-chemistry-chapter-notes.js","ncert-mathematics-chapter-notes.js","ncert-biology-chapter-notes.js"]) {
  const source = readFileSync(new URL("../" + filename, import.meta.url), "utf8");
  vm.runInNewContext(source, ncertSandbox, { filename, timeout: 10000 });
}
const supplementalNotes = ncertSandbox.window.KP_NCERT_CHAPTER_NOTES;
assert.ok(Array.isArray(supplementalNotes) && supplementalNotes.length >= 138, "the supplemental NCERT collection should contain at least 138 individual notes");
for (const note of supplementalNotes) {
  assert.ok(note.level && note.subject && note.chapter, "supplemental note lacks class/subject/chapter metadata");
  assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, note.chapter + " needs at least four sections");
  const explanatoryWords = note.sections.reduce((sum, section) => sum + String(section.body || "").trim().split(/\s+/).filter(Boolean).length, 0);
  assert.ok(explanatoryWords >= 140, note.chapter + " is too short (" + explanatoryWords + " explanatory words)");
  assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, note.chapter + " needs at least two worked methods");
  assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, note.chapter + " needs common mistakes");
  assert.ok(Array.isArray(note.examFocus) && note.examFocus.length >= 1, note.chapter + " needs exam focus");
  assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, note.chapter + " needs recall questions");
  assert.ok(Array.isArray(note.glossary) && note.glossary.length >= 2, note.chapter + " needs glossary terms");
  if (["Mathematics","Physics","Chemistry","Science"].includes(note.subject)) {
    assert.ok(Array.isArray(note.formulaCheatSheet) && note.formulaCheatSheet.length >= 1, note.chapter + " needs at least one formula/rule card");
    assert.ok(note.formulaCheatSheet.every(card => card.formula && card.meaning && card.when && card.units && card.trap), note.chapter + " has an incomplete formula card");
  }
}
const coverageNotes = cbseNotes.concat(supplementalNotes);

const subjectCoverage = [
  ["Class 10", "Mathematics", 8],
  ["Class 11", "Mathematics", 8],
  ["Class 12", "Mathematics", 8],
  ["Class 10", "Science", 8],
  ["Class 11", "Physics", 6],
  ["Class 12", "Physics", 6],
  ["Class 11", "Chemistry", 6],
  ["Class 12", "Chemistry", 6],
  ["Class 11", "Biology", 6],
  ["Class 12", "Biology", 6]
];
for (const [level, subject, minimum] of subjectCoverage) {
  const count = coverageNotes.filter(note => note.level === level && note.subject === subject).length;
  assert.ok(count >= minimum, level + " " + subject + " expected at least " + minimum + " individual chapters; found " + count);
}

const gravitationSupplement = supplementalNotes.find(note => note.level === "Class 11" && note.subject === "Physics" && note.chapter === "Gravitation");
assert.ok(gravitationSupplement && gravitationSupplement.formulaCheatSheet.length >= 3, "supplemental Gravitation note must contain explained formula cards");

const examNotes = loadExport("exam-prep-notes.js", "KP_DEEP_NOTES");
assert.ok(examNotes.length >= 42, "JEE/NEET preparation needs at least 42 detailed exam-prep entries");
assert.ok(examNotes.some(note => note.level === "JEE Main" && note.subject === "Mathematics"), "JEE Main Mathematics notes must exist");
assert.ok(examNotes.some(note => note.level === "JEE Main" && note.subject === "Physics"), "JEE Main Physics notes must exist");
assert.ok(examNotes.some(note => note.level === "JEE Main" && note.subject === "Chemistry"), "JEE Main Chemistry notes must exist");
assert.ok(examNotes.some(note => note.level === "NEET UG" && note.subject === "Biology"), "NEET Biology notes must exist");
assert.ok(examNotes.some(note => note.level === "NEET UG" && note.subject === "Physics"), "NEET Physics notes must exist");
assert.ok(examNotes.some(note => note.level === "NEET UG" && note.subject === "Chemistry"), "NEET Chemistry notes must exist");
for (const note of examNotes) {
  assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, note.level + " " + note.subject + " · " + note.chapter + " needs four explanation sections");
  const words = note.sections.reduce((sum, section) => sum + String(section.body || "").trim().split(/\s+/).filter(Boolean).length, 0);
  assert.ok(words >= 160, note.chapter + " exam notes are too short (" + words + " explanatory words)");
  assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, note.chapter + " needs multiple worked methods");
  assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, note.chapter + " needs exam-trap guidance");
  assert.ok(Array.isArray(note.examFocus) && note.examFocus.length >= 1, note.chapter + " needs exam-specific strategy");
  assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, note.chapter + " needs active-recall questions");
  assert.ok(Array.isArray(note.glossary) && note.glossary.length >= 3, note.chapter + " needs a glossary");
}

console.log("Detailed chapter audit passed: " + counts.join(", ") + "; " + cbseNotes.length + " CBSE chapter entries and " + examNotes.length + " JEE/NEET entries validated. Gravitation has detailed theory, formula cards, worked examples and practice answers.");
