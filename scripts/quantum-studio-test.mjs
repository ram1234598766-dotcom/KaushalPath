import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../quantum-studio.js", import.meta.url), "utf8");
const sandbox = { window: {} };
runInNewContext(source, sandbox);
const api = sandbox.window.KP_QUANTUM_STUDIO;
assert.ok(api, "the quantum-studio module should expose its pure circuit helpers");
assert.equal(api.maxQubits, 8, "the local simulator should enforce its documented qubit limit");
assert.deepEqual(Array.from(api.templates).sort(), ["bell", "bitflip", "ghz", "interference", "superposition"].sort());

function near(actual, expected, message) {
  assert.ok(Number.isFinite(actual) && Math.abs(actual - expected) < 1e-5, message + ": expected " + expected + ", got " + actual);
}
function distribution(result, expected, label) {
  const actual = result.probabilities;
  assert.deepEqual(Object.keys(actual).sort(), Object.keys(expected).sort(), label + " should have the expected outcomes");
  for (const key of Object.keys(expected)) near(actual[key], expected[key], label + " probability for " + key);
  near(Object.values(actual).reduce((sum, value) => sum + value, 0), 1, label + " probabilities should sum to one");
  return result;
}

const bell = api.simulateQasm(api.examples.bell.qasm);
distribution(bell, { "00": 0.5, "11": 0.5 }, "Bell pair");
assert.equal(bell.num_qubits, 2);
assert.deepEqual({ ...api.validateQasm(api.examples.bell.qasm).stats }, { numQubits: 2, numClbits: 2, gateCount: 2, depth: 3 });
distribution(api.simulateQasm(api.examples.superposition.qasm), { "0": 0.5, "1": 0.5 }, "superposition");
distribution(api.simulateQasm(api.examples.ghz.qasm), { "000": 0.5, "111": 0.5 }, "GHZ state");
distribution(api.simulateQasm(api.examples.interference.qasm), { "1": 1 }, "H-Z-H interference");
distribution(api.simulateQasm(api.examples.bitflip.qasm), { "1": 1 }, "X bit flip");

const qasm2 = [
  "OPENQASM 2.0;", 'include "qelib1.inc";', "qreg q[2];", "creg c[2];",
  "h q[0];", "cx q[0], q[1];", "measure q -> c;"
].join("\n");
distribution(api.simulateQasm(qasm2), { "00": 0.5, "11": 0.5 }, "OpenQASM 2.0 Bell pair");

const rotation = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;",
  "rx(pi) q[0];", "c = measure q;"
].join("\n");
distribution(api.simulateQasm(rotation), { "1": 1 }, "RX(pi) rotation");

const outOfRange = api.validateQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "h q[2];"
].join("\n"));
assert.equal(outOfRange.valid, false, "out-of-range qubit references should be rejected");
assert.match(outOfRange.errors[0], /outside register/i);

const unsupported = api.validateQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "u(1, 2, 3) q[0];"
].join("\n"));
assert.equal(unsupported.valid, false, "unsupported gates must fail validation rather than silently simulate");
assert.match(unsupported.errors[0], /does not support/i);

const unsafeAngle = api.validateQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "rx(globalThis.process.exit()) q[0];"
].join("\n"));
assert.equal(unsafeAngle.valid, false, "angle parsing must reject executable expressions");
const tooManyQubits = api.validateQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[9] q;"
].join("\n"));
assert.equal(tooManyQubits.valid, false, "circuits over eight qubits must be rejected by the local simulator");

assert.equal(api.validateQasm("not OpenQASM").valid, false);
assert.equal(api.validateQasm(api.examples.superposition.qasm).valid, true);
console.log("Quantum Circuit Studio tests passed: OpenQASM 2/3 validation, state-vector distributions, rotations, entanglement, interference, and guardrails.");
