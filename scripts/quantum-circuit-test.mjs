import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const quantum = require("../quantum-study-lab.js");

const expectations = {
  superposition: { qubits: 1, probabilities: { "0": 0.5, "1": 0.5 } },
  bell: { qubits: 2, probabilities: { "00": 0.5, "11": 0.5 } },
  ghz: { qubits: 3, probabilities: { "000": 0.5, "111": 0.5 } },
  interference: { qubits: 1, probabilities: { "1": 1 } }
};

const circuits = quantum.listCircuits();
assert.equal(circuits.length, 4, "the quantum study lab should expose all four beginner circuits");

for (const [id, expected] of Object.entries(expectations)) {
  const result = quantum.simulateCircuit(id);
  assert.equal(result.id, id, id + " should resolve to the requested circuit");
  assert.equal(result.qubits, expected.qubits, id + " should use the expected number of qubits");
  assert.equal(result.qasm.startsWith("OPENQASM 3.0;"), true, id + " should export OpenQASM 3.0");
  assert.match(result.qasm, /include "stdgates\.inc";/, id + " should declare the standard gate library");
  assert.match(result.qasm, /c = measure q;/, id + " should include register measurement");
  assert.deepEqual(Object.keys(result.probabilities), Object.keys(expected.probabilities), id + " should yield the expected outcomes");
  for (const [bits, probability] of Object.entries(expected.probabilities)) {
    assert.ok(Math.abs(result.probabilities[bits] - probability) < 1e-9, id + " should match the ideal state-vector distribution for " + bits);
  }
  const total = Object.values(result.probabilities).reduce((sum, value) => sum + value, 0);
  assert.ok(Math.abs(total - 1) < 1e-9, id + " probabilities should sum to one");
}

assert.match(quantum.qasmFor("bell"), /cx q\[0\], q\[1\];/, "Bell state export should preserve control and target qubits");
assert.match(quantum.qasmFor("ghz"), /cx q\[1\], q\[2\];/, "GHZ export should preserve the chained entanglement gate");
assert.equal(quantum.simulateCircuit("unknown").id, "bell", "unknown starter IDs should fall back safely to the Bell state");

const customBellQasm = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "bit[2] c;",
  "h q[0];", "cx q[0], q[1];", "c = measure q;"
].join("\n");
const parsedBell = quantum.parseOpenQasm(customBellQasm);
assert.equal(parsedBell.qubits, 2, "the editor should parse the declared qubit count");
assert.equal(parsedBell.stats.gateCount, 2, "measurements should not be counted as quantum gates");
assert.equal(parsedBell.stats.depth, 3, "circuit depth should include the final measurement layer");
assert.deepEqual(quantum.simulateOpenQasm(customBellQasm).probabilities, { "00": 0.5, "11": 0.5 }, "custom OpenQASM Bell circuits should simulate correctly");

const qasm2Bell = [
  "OPENQASM 2.0;", 'include "qelib1.inc";', "qreg q[2];", "creg c[2];",
  "h q[0];", "cx q[0], q[1];", "measure q -> c;"
].join("\n");
assert.deepEqual(quantum.simulateOpenQasm(qasm2Bell).probabilities, { "00": 0.5, "11": 0.5 }, "OpenQASM 2.0 registers should be supported");

const rxPi = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;",
  "rx(pi) q[0];", "c = measure q;"
].join("\n");
assert.deepEqual(quantum.simulateOpenQasm(rxPi).probabilities, { "1": 1 }, "RX(pi) should rotate |0> to the |1> measurement outcome");

const interferenceQasm = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;",
  "h q[0];", "z q[0];", "h q[0];", "c = measure q;"
].join("\n");
assert.deepEqual(quantum.simulateOpenQasm(interferenceQasm).probabilities, { "1": 1 }, "H-Z-H should demonstrate interference in the custom editor");

const czQasm = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "bit[2] c;",
  "h q[0];", "h q[1];", "cz q[0], q[1];", "c = measure q;"
].join("\n");
const czOutput = quantum.simulateOpenQasm(czQasm).probabilities;
assert.deepEqual(Object.keys(czOutput), ["00", "01", "10", "11"], "CZ should retain the four basis outcomes in the equal-superposition example");
for (const value of Object.values(czOutput)) assert.ok(Math.abs(value - 0.25) < 1e-9, "CZ should preserve ideal measurement probabilities");

const swapQasm = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "bit[2] c;",
  "x q[0];", "swap q[0], q[1];", "c = measure q;"
].join("\n");
assert.deepEqual(quantum.simulateOpenQasm(swapQasm).probabilities, { "10": 1 }, "SWAP should exchange the qubit states");

const partialMeasurement = [
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "bit[1] c;",
  "x q[1];", "c[0] = measure q[1];"
].join("\n");
assert.deepEqual(quantum.simulateOpenQasm(partialMeasurement).probabilities, { "1": 1 }, "single-qubit classical measurement mappings should be respected");

assert.equal(quantum.validateOpenQasm("invalid source").valid, false, "malformed source must be rejected");
assert.match(quantum.validateOpenQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "h q[2];"
].join("\n")).errors[0], /outside register/i, "out-of-range qubit indexes should explain the problem");
assert.match(quantum.validateOpenQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "rx(globalThis.process.exit()) q[0];"
].join("\n")).errors[0], /angle/i, "angle parsing must reject executable code instead of evaluating it");
assert.match(quantum.validateOpenQasm([
  "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[9] q;"
].join("\n")).errors[0], /between 1 and 8/i, "local simulation must cap circuits at eight qubits");


console.log("Quantum Study Guide checks passed: OpenQASM exports and four ideal circuit distributions.");
