import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";

const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const start = app.indexOf("const cbseCommonLanguages=");
const end = app.indexOf("function renderTests()", start);
assert.ok(start >= 0 && end > start, "annual exam builder implementation should be present");
const annualBuilder = app.slice(start, end);

const catalogue = [
  {
    level: "Class 10", subject: "Mathematics", chapter: "Quadratic Equations",
    intro: "Solve quadratic equations and interpret their roots.",
    points: ["The discriminant determines the nature of roots.", "A quadratic equation has the form ax² + bx + c = 0."],
    formulas: ["D = b² - 4ac"],
    example: "For x² - 5x + 6 = 0, factorise to obtain roots 2 and 3.",
    sections: [{ heading: "Discriminant", body: "The discriminant determines whether real roots are distinct, repeated or non-real." }],
    practiceProblems: [{ question: "Solve x² - 5x + 6 = 0.", answer: "x = 2 or x = 3.", solution: "Factorise as (x - 2)(x - 3) = 0." }],
    recall: ["How does the discriminant describe the roots?"]
  },
  {
    level: "Class 10", subject: "Biology", chapter: "Life Processes",
    intro: "Nutrition, respiration, transport and excretion.",
    points: ["Plants use photosynthesis to manufacture carbohydrates.", "Gas exchange enables cellular respiration."],
    formulas: [], example: "Trace oxygen from inhalation to the cells.",
    sections: [{ heading: "Nutrition", body: "Organisms obtain or manufacture nutrients needed for energy and growth." }],
    practiceProblems: [{ question: "Why is gas exchange necessary for cellular respiration?", answer: "It supplies oxygen for aerobic respiration and allows carbon dioxide to be removed.", solution: "Respiration uses oxygen to release usable energy and produces carbon dioxide." }],
    recall: ["Compare autotrophic and heterotrophic nutrition."]
  },
  {
    level: "Class 10", subject: "Chemistry", chapter: "Chemical Reactions",
    intro: "Recognise and represent chemical change.",
    points: ["A balanced equation has the same number of each type of atom on both sides.", "Oxidation and reduction occur together."],
    formulas: [], example: "Use observations to decide whether a new substance formed.",
    sections: [{ heading: "Conservation of atoms", body: "Balancing changes coefficients, not chemical formula subscripts." }],
    practiceProblems: [{ question: "Why must a chemical equation be balanced?", answer: "Atoms are conserved in a chemical reaction.", solution: "The number of atoms of each element must match on both sides." }],
    recall: ["What observations can suggest a chemical change?"]
  },
  {
    level: "Class 10", subject: "Physics", chapter: "Electricity",
    intro: "Current, potential difference and resistance.",
    points: ["Ohm's law relates potential difference, current and resistance.", "Electrical power depends on voltage and current."],
    formulas: ["V = IR", "P = VI"], example: "Calculate resistance from measured voltage and current.",
    sections: [{ heading: "Circuit data", body: "Voltage and current measurements can be used to infer resistance and check proportionality." }],
    practiceProblems: [{ question: "A 6 V source drives 2 A through a resistor. Find the resistance.", answer: "3 ohms.", solution: "R = V / I = 6 / 2 = 3 ohms." }],
    recall: ["What is the slope of a V-I graph for an ohmic conductor?"]
  },
  {
    level: "Class 12", subject: "Computer Science", chapter: "Python and SQL",
    intro: "Trace programs and reason about relational data.",
    points: ["A list is a mutable Python sequence.", "SQL queries retrieve rows that satisfy specified conditions."],
    formulas: [], example: "Filter records using a WHERE clause.",
    sections: [{ heading: "Query reasoning", body: "Choose a condition that matches the request, and confirm the selected columns and sort order." }],
    practiceProblems: [{ question: "What does a WHERE clause do?", answer: "It filters rows that match a condition.", solution: "The predicate is evaluated for each row." }],
    recall: ["How do AND and OR differ in a query?"]
  },
  {
    level: "Class 12", subject: "Physics", chapter: "Electrostatics",
    intro: "Fields, potential and superposition.",
    points: ["Electric field describes force per unit positive test charge.", "Potential is scalar and adds algebraically."],
    formulas: ["E = F/q"], example: "Compare field strengths at two distances.",
    sections: [{ heading: "Field and potential", body: "Field and potential represent related but distinct properties of electric interactions." }],
    practiceProblems: [{ question: "If a test charge doubles, how does the field definition change?", answer: "The field at the same point does not change.", solution: "E = F/q; force changes in proportion to test charge." }],
    recall: ["Explain why electric potential is a scalar."]
  },
  {
    level: "Class 12", subject: "Accountancy", chapter: "Financial Statements",
    intro: "Prepare and interpret statements using the available data.",
    points: ["Financial statements summarise position and performance.", "Adjustments can affect both profit and the balance sheet."],
    formulas: [], example: "Explain how an adjustment affects the final accounts.",
    sections: [{ heading: "Accounting adjustments", body: "A reliable response identifies the account affected and explains the treatment." }],
    practiceProblems: [{ question: "Why are outstanding expenses adjusted?", answer: "To recognise expenses relating to the accounting period.", solution: "Accrual accounting records obligations when incurred, not just when paid." }],
    recall: ["How can a year-end adjustment affect profit?"]
  }
];

const sandbox = { window: { KP_ANNUAL_PAPER_CATALOG: catalogue } };
const testHarness = annualBuilder + `
globalThis.__math10 = buildCbseAnnualPaper("Class 10", "Mathematics (Standard)");
globalThis.__science10 = buildCbseAnnualPaper("Class 10", "Science");
globalThis.__cs12 = buildCbseAnnualPaper("Class 12", "Computer Science");
globalThis.__physics12 = buildCbseAnnualPaper("Class 12", "Physics");
globalThis.__skill10 = buildCbseAnnualPaper("Class 10", "Retail");
globalThis.__accountancy10 = buildCbseAnnualPaper("Class 10", "Accountancy");
`;
runInNewContext(testHarness, sandbox, { timeout: 10000 });

function verifyPaper(paper, expectedQuestions, expectedMarks, label) {
  assert.equal(paper.qs.length, expectedQuestions, label + " question count");
  assert.equal(paper.maxMarks, expectedMarks, label + " declared maximum");
  assert.equal(paper.qs.reduce((sum, q) => sum + Number(q.mark || 1), 0), expectedMarks, label + " question marks sum");
  assert.ok(paper.qs.some((q) => q.responseType === "written"), label + " should contain written responses");
  assert.ok(paper.qs.some((q) => q.caseContext), label + " should contain a source/case question");
  assert.ok(paper.qs.filter((q) => q.responseType !== "written").every((q) => q.o.length === 4 && q.a >= 0 && q.a < q.o.length), label + " MCQ answers should map to four options");
  assert.ok(paper.qs.filter((q) => q.responseType === "written").every((q) => q.o.length === 0 && q.a === -1 && Array.isArray(q.rubric)), label + " written items should include model answers and rubrics");
  assert.equal(paper.annualExam, true, label + " should be marked as an annual model paper");
  assert.ok(/not an official CBSE paper/i.test(paper.desc), label + " should not be misrepresented as official");
}

verifyPaper(sandbox.__math10, 38, 80, "Class X Mathematics Standard");
verifyPaper(sandbox.__science10, 39, 80, "Class X Science");
verifyPaper(sandbox.__cs12, 37, 70, "Class XII Computer Science");
verifyPaper(sandbox.__physics12, 33, 70, "Class XII Physics");
verifyPaper(sandbox.__skill10, 23, 50, "Class X Retail skill subject");
assert.equal(sandbox.__skill10.subjectFormatFallback, true, "missing subject-specific notes should be labelled as a scaffold");
assert.equal(sandbox.__accountancy10.subjectFormatFallback, true, "a different-class subject catalogue must not silently leak into the selected class");
assert.ok(sandbox.__math10.qs.some((q) => q.sectionTitle.includes("Section D · Long answer")));
assert.ok(sandbox.__cs12.qs.some((q) => q.sectionTitle.includes("Section D · Case / source / output based questions")));
assert.ok(sandbox.__cs12.qs.some((q) => q.sectionTitle.includes("Section E · Long answer")));
console.log("CBSE annual exam checks passed: subject-specific question counts, mark totals, competency case tasks, written-answer rubrics, and class-specific content scope.");
