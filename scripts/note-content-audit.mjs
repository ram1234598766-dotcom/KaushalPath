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
const deepExamNotes = loadExport("jee-neet-chapter-notes.js", "KP_JEE_NEET_CHAPTER_NOTES");
assert.ok(deepExamNotes.length >= 54, "JEE/NEET deep chapter library should include the JEE chapters plus NEET Physics/Chemistry adaptations");
const shallowDeepNotes = [];
for (const note of deepExamNotes) {
  assert.ok(note.level && note.subject && note.chapter, "JEE/NEET note missing exam/subject/chapter metadata");
  assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, note.chapter + " needs at least four topic explanations");
  const words = note.sections.reduce((sum, section) => sum + String(section.body || "").trim().split(/\s+/).filter(Boolean).length, 0);
  if (words < 260) shallowDeepNotes.push(note.level + " " + note.subject + " · " + note.chapter + " (" + words + " words)");
  assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, note.chapter + " needs multiple worked examples");
  assert.ok(Array.isArray(note.fastMethods) && note.fastMethods.length >= 3, note.chapter + " needs at least three timed-exam methods");
  assert.ok(Array.isArray(note.practiceProblems) && note.practiceProblems.length >= 3, note.chapter + " needs solved practice questions");
  assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, note.chapter + " needs common traps");
  assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, note.chapter + " needs active recall questions");
  if (["Mathematics","Physics","Chemistry"].includes(note.subject)) {
    assert.ok(Array.isArray(note.formulaCheatSheet) && note.formulaCheatSheet.length >= 3, note.chapter + " needs an explained formula cheat sheet");
    assert.ok(note.formulaCheatSheet.every(card => card.formula && card.meaning && card.when && card.units && card.trap), note.chapter + " has an incomplete formula card");
  }
}
assert.equal(shallowDeepNotes.length, 0, "These JEE/NEET chapters need deeper explanations (260+ words across their topic sections): " + shallowDeepNotes.join("; "));

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


const englishChapterNotes = loadExport("cbse-english-chapter-notes.js", "KP_CBSE_ENGLISH_CHAPTER_NOTES");
const otherCbseChapterNotes = loadExport("cbse-commerce-computing-hindi-chapters.js", "KP_CBSE_COMMERCE_COMPUTING_HINDI_NOTES");
assert.ok(englishChapterNotes.length >= 75, "English must have individual literature lessons plus language/writing chapters");
assert.ok(otherCbseChapterNotes.length >= 100, "Hindi, Social Science, commerce and computing must have individual chapter entries");
for (const [label, notes] of [["English", englishChapterNotes], ["Hindi/CBSE other subjects", otherCbseChapterNotes]]) {
  for (const note of notes) {
    assert.ok(note.level && note.subject && note.chapter, label + " note missing class/subject/chapter metadata");
    assert.ok(Array.isArray(note.sections) && note.sections.length >= 4, label + " " + note.chapter + " needs individual topic explanations");
    const words = note.sections.reduce((sum, section) => sum + String(section.body || "").trim().split(/\s+/).filter(Boolean).length, 0);
    assert.ok(words >= 180, label + " " + note.level + " " + note.subject + " · " + note.chapter + " is still too short (" + words + " explanatory words)");
    assert.ok(Array.isArray(note.workedExamples) && note.workedExamples.length >= 2, label + " " + note.chapter + " needs worked methods/examples");
    assert.ok(Array.isArray(note.practiceProblems) && note.practiceProblems.length >= 3, label + " " + note.chapter + " needs solved practice");
    assert.ok(Array.isArray(note.commonMistakes) && note.commonMistakes.length >= 3, label + " " + note.chapter + " needs exam-trap guidance");
    assert.ok(Array.isArray(note.recall) && note.recall.length >= 3, label + " " + note.chapter + " needs self-check questions");
    assert.ok(Array.isArray(note.fastMethods) && note.fastMethods.length >= 1, label + " " + note.chapter + " needs an answer/speed method");
  }
}
for (const [level, subject] of [["Class 10","English"],["Class 11","English"],["Class 12","English"],["Class 10","Hindi"],["Class 11","Hindi"],["Class 12","Hindi"],["Class 10","Social Science"],["Class 11","Accountancy"],["Class 12","Accountancy"],["Class 11","Business Studies"],["Class 12","Business Studies"],["Class 11","Economics"],["Class 12","Economics"],["Class 11","Computer Science"],["Class 12","Computer Science"],["Class 12","Informatics Practices"]]) {
  assert.ok(englishChapterNotes.concat(otherCbseChapterNotes).some(note => note.level === level && note.subject === subject), "Missing chapter coverage for " + level + " " + subject);
}

console.log("Detailed chapter audit passed: " + counts.join(", ") + "; " + cbseNotes.length + " CBSE chapter entries and " + examNotes.length + " JEE/NEET entries validated. Gravitation has detailed theory, formula cards, worked examples and practice answers.");
