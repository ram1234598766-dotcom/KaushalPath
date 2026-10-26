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
console.log("Quantum Study Guide checks passed: OpenQASM exports and four ideal circuit distributions.");
