(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (typeof window !== "undefined" && window.document) {
    window.KP_QUANTUM_LAB = api;
    const start = function () { api.init(window.document, window); };
    if (window.document.readyState === "loading") {
      window.document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
      start();
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SQRT_HALF = 1 / Math.sqrt(2);
  const CIRCUITS = [
    {
      id: "superposition",
      title: "Superposition",
      eyebrow: "ONE QUBIT",
      description: "A Hadamard gate puts one qubit into an equal superposition. Measuring it gives 0 or 1 with equal probability.",
      explanation: "A Hadamard (H) gate turns the starting state |0⟩ into a superposition. Before measurement, the state has equal amplitudes for 0 and 1, so an ideal measurement has a 50% chance of either result.",
      qubits: 1,
      gates: [{ name: "H", target: 0 }]
    },
    {
      id: "bell",
      title: "Bell state",
      eyebrow: "TWO QUBITS",
      description: "An H gate followed by a controlled-X gate entangles two qubits. Ideal measurements agree: 00 or 11.",
      explanation: "The H gate creates a superposition on q0. The controlled-X (CX) gate flips q1 only when q0 is 1, entangling the pair. The ideal measurement results are 00 and 11, each with 50% probability. You do not see 01 or 10 in this noise-free model.",
      qubits: 2,
      gates: [{ name: "H", target: 0 }, { name: "CX", control: 0, target: 1 }]
    },
    {
      id: "ghz",
      title: "GHZ state",
      eyebrow: "THREE QUBITS",
      description: "Two controlled-X gates extend the entanglement across three qubits. Ideal results are 000 or 111.",
      explanation: "The H gate creates a superposition on q0. The two CX gates share that correlation with q1 and q2, producing a three-qubit GHZ state. A noise-free measurement returns 000 or 111 with equal probability.",
      qubits: 3,
      gates: [{ name: "H", target: 0 }, { name: "CX", control: 0, target: 1 }, { name: "CX", control: 1, target: 2 }]
    },
    {
      id: "interference",
      title: "Interference",
      eyebrow: "ONE QUBIT · THREE GATES",
      description: "H, Z, H changes the relative phase. The two paths interfere, leaving measurement result 1 with certainty.",
      explanation: "The first H gate creates two paths. Z changes the phase of the |1⟩ part without changing its measurement probability by itself. The final H gate makes the amplitudes interfere, so an ideal measurement returns 1 with 100% probability.",
      qubits: 1,
      gates: [{ name: "H", target: 0 }, { name: "Z", target: 0 }, { name: "H", target: 0 }]
    }
  ];

  function getCircuit(id) {
    return CIRCUITS.find(function (circuit) { return circuit.id === id; }) || CIRCUITS[1];
  }

  function listCircuits() {
    return CIRCUITS.map(function (circuit) {
      return {
        id: circuit.id,
        title: circuit.title,
        eyebrow: circuit.eyebrow,
        description: circuit.description,
        explanation: circuit.explanation,
        qubits: circuit.qubits,
        gateCount: circuit.gates.length
      };
    });
  }

  function qasmFor(id) {
    const circuit = typeof id === "string" ? getCircuit(id) : id;
    if (circuit && typeof circuit.qasm === "string" && circuit.qasm.trim()) return circuit.qasm;
    const gateLines = circuit.gates.map(function (gate) {
      if (gate.name === "CX") return "cx q[" + gate.control + "], q[" + gate.target + "];";
      if (gate.name === "CZ" || gate.name === "SWAP") return gate.name.toLowerCase() + " q[" + gate.control + "], q[" + gate.target + "];";
      if (["RX", "RY", "RZ"].includes(gate.name)) return gate.name.toLowerCase() + "(" + gate.angle + ") q[" + gate.target + "];";
      return gate.name.toLowerCase() + " q[" + gate.target + "];";
    });
    return [
      "OPENQASM 3.0;",
      'include "stdgates.inc";',
      "qubit[" + circuit.qubits + "] q;",
      "bit[" + circuit.qubits + "] c;",
      gateLines.join("\n"),
      "c = measure q;",
      ""
    ].join("\n");
  }

  function parseAngleExpression(expression) {
    const compact = String(expression || "").toLowerCase().replace(/\s+/g, "");
    const tokens = compact.match(/pi|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[()+\-*/]/g) || [];
    if (!compact || tokens.join("") !== compact) throw new Error("Gate angles may use numbers, pi, parentheses and +, -, * or / only.");
    let pos = 0;
    function factor() {
      const token = tokens[pos++];
      if (token === "+") return factor();
      if (token === "-") return -factor();
      if (token === "(") {
        const value = expressionValue();
        if (tokens[pos++] !== ")") throw new Error("The gate angle has an unmatched parenthesis.");
        return value;
      }
      if (token === "pi") return Math.PI;
      if (token && /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(token)) {
        const value = Number(token);
        if (Number.isFinite(value)) return value;
      }
      throw new Error("The gate angle is not a valid numeric expression.");
    }
    function term() {
      let value = factor();
      while (tokens[pos] === "*" || tokens[pos] === "/") {
        const op = tokens[pos++];
        const right = factor();
        if (op === "/" && right === 0) throw new Error("A gate angle cannot divide by zero.");
        value = op === "*" ? value * right : value / right;
      }
      return value;
    }
    function expressionValue() {
      let value = term();
      while (tokens[pos] === "+" || tokens[pos] === "-") {
        const op = tokens[pos++];
        const right = term();
        value = op === "+" ? value + right : value - right;
      }
      return value;
    }
    const value = expressionValue();
    if (pos !== tokens.length || !Number.isFinite(value)) throw new Error("The gate angle is not a finite numeric expression.");
    return value;
  }

  function parseOpenQasm(source) {
    if (typeof source !== "string" || !source.trim()) throw new Error("Add an OpenQASM circuit first.");
    if (source.length > 20000) throw new Error("The circuit editor accepts at most 20,000 characters.");
    const cleaned = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").trim();
    const versionMatch = cleaned.match(/^\s*OPENQASM\s+(2\.0|3\.0)\s*;/i);
    if (!versionMatch) throw new Error("Start with OPENQASM 3.0; or OPENQASM 2.0;.");
    const version = versionMatch[1];
    const statements = cleaned.split(";").map(function (part) { return part.trim(); }).filter(Boolean);
    const quantum = new Map();
    const classical = new Map();
    const gates = [];
    const measurements = [];
    let hasMeasurement = false;

    function addRegister(map, name, size, kind) {
      if (!Number.isInteger(size) || size < 1 || size > 8) throw new Error(kind + " register size must be between 1 and 8.");
      if (map.has(name) || (kind === "qubit" ? classical : quantum).has(name)) throw new Error("Register name \"" + name + "\" is declared more than once.");
      map.set(name, { name: name, size: size });
      if (map.size > 1) throw new Error("The learning simulator currently supports one quantum register and one classical register.");
    }

    statements.forEach(function (statement) {
      if (/^OPENQASM\b/i.test(statement) || /^include\s+["'](?:stdgates\.inc|qelib1\.inc)["']$/i.test(statement)) return;
      let match = statement.match(/^(qubit|bit)\s*(?:\[\s*(\d+)\s*\])?\s+([A-Za-z_]\w*)$/i);
      if (match) {
        const kind = match[1].toLowerCase();
        addRegister(kind === "qubit" ? quantum : classical, match[3], Number(match[2] || 1), kind);
        return;
      }
      match = statement.match(/^(qreg|creg)\s+([A-Za-z_]\w*)\s*\[\s*(\d+)\s*\]$/i);
      if (match) {
        const kind = match[1].toLowerCase() === "qreg" ? "qubit" : "bit";
        addRegister(kind === "qubit" ? quantum : classical, match[2], Number(match[3]), kind);
      }
    });

    if (quantum.size !== 1) throw new Error("Declare one quantum register, for example: qubit[2] q;");
    const qreg = quantum.values().next().value;
    const creg = classical.size ? classical.values().next().value : null;

    function operand(value, map, kind, allowWhole) {
      const match = String(value || "").trim().match(/^([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?$/);
      if (!match) throw new Error("Could not read circuit operand \"" + String(value).trim() + "\".");
      const register = map.get(match[1]);
      if (!register) throw new Error("Unknown " + kind + " register \"" + match[1] + "\".");
      if (match[2] === undefined) {
        if (register.size === 1) return { register: register, index: 0, whole: false };
        if (allowWhole) return { register: register, index: null, whole: true };
        throw new Error("Use an explicit index like " + match[1] + "[0] for this gate.");
      }
      const index = Number(match[2]);
      if (index >= register.size) throw new Error(kind + " index " + index + " is outside register \"" + register.name + "\".");
      return { register: register, index: index, whole: false };
    }

    statements.forEach(function (statement) {
      if (/^OPENQASM\b/i.test(statement) ||
          /^include\s+["'](?:stdgates\.inc|qelib1\.inc)["']$/i.test(statement) ||
          /^(?:qubit|bit)\s*(?:\[\s*\d+\s*\])?\s+[A-Za-z_]\w*$/i.test(statement) ||
          /^(?:qreg|creg)\s+[A-Za-z_]\w*\s*\[\s*\d+\s*\]$/i.test(statement) ||
          /^barrier\b/i.test(statement)) return;

      const measure = statement.match(/^(?:([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?\s*=\s*)?measure\s+([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?(?:\s*->\s*([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?)?$/i);
      if (measure) {
        hasMeasurement = true;
        const qop = operand(measure[3] + (measure[4] === undefined ? "" : "[" + measure[4] + "]"), quantum, "qubit", true);
        const cname = measure[1] || measure[5] || "";
        const cidx = measure[1] ? measure[2] : measure[6];
        const cop = cname ? operand(cname + (cidx === undefined ? "" : "[" + cidx + "]"), classical, "classical bit", true) : null;
        const count = qop.whole ? qop.register.size : 1;
        if (cop && !cop.whole && count > 1) throw new Error("A single classical bit can only receive one qubit.");
        if (cop && cop.whole && cop.register.size < count) throw new Error("The classical register must be at least as wide as the measured qubit register.");
        for (let offset = 0; offset < count; offset += 1) {
          measurements.push({ qubit: qop.whole ? offset : qop.index, clbit: !cop ? null : cop.whole ? offset : cop.index });
        }
        return;
      }

      const parsed = statement.match(/^([A-Za-z_]\w*)\s*(?:\(([^)]*)\))?\s+(.+)$/i);
      if (!parsed) throw new Error("Could not understand statement: \"" + statement.slice(0, 80) + "\".");
      let name = parsed[1].toUpperCase();
      if (name === "CNOT") name = "CX";
      if (name === "I") name = "ID";
      const supported = new Set(["H", "X", "Y", "Z", "S", "SDG", "T", "TDG", "ID", "RX", "RY", "RZ", "CX", "CZ", "SWAP"]);
      if (!supported.has(name)) throw new Error("The learning simulator does not support the \"" + parsed[1] + "\" gate yet.");
      const args = parsed[3].split(/\s*,\s*/);
      const twoQubit = ["CX", "CZ", "SWAP"].includes(name);
      if (args.length !== (twoQubit ? 2 : 1)) throw new Error(name + " has the wrong number of qubit operands.");
      const targetOps = args.map(function (value) { return operand(value, quantum, "qubit", false); });
      if (twoQubit && targetOps[0].index === targetOps[1].index) throw new Error(name + " must act on two different qubits.");
      if (["RX", "RY", "RZ"].includes(name) && parsed[2] === undefined) throw new Error(name + " needs an angle, e.g. rx(pi/2) q[0];");
      if (!["RX", "RY", "RZ"].includes(name) && parsed[2] !== undefined) throw new Error(name + " does not take an angle.");
      const target = targetOps[twoQubit ? 1 : 0].index;
      const gate = { name: name, target: target, angle: parsed[2] === undefined ? 0 : parseAngleExpression(parsed[2]), source: statement };
      if (twoQubit) gate.control = targetOps[0].index;
      gates.push(gate);
      if (gates.length > 300) throw new Error("The learning simulator accepts up to 300 gates.");
    });

    let depth = 0;
    const layers = new Array(qreg.size).fill(0);
    gates.forEach(function (gate) {
      const wires = gate.control === undefined ? [gate.target] : [gate.control, gate.target];
      const layer = Math.max.apply(null, wires.map(function (wire) { return layers[wire]; })) + 1;
      wires.forEach(function (wire) { layers[wire] = layer; });
      depth = Math.max(depth, layer);
    });
    if (hasMeasurement) depth += 1;
    return {
      id: "custom",
      title: "Custom OpenQASM circuit",
      eyebrow: "CUSTOM CIRCUIT",
      description: "A circuit edited in OpenQASM. Run the ideal local preview to inspect its measurement distribution.",
      explanation: "This is a user-edited OpenQASM circuit. Explain the role of each gate and compare the ideal measurement probabilities with your prediction.",
      qubits: qreg.size,
      gates: gates,
      qasm: source.trim() + "\n",
      measurements: measurements,
      numClbits: creg ? creg.size : 0,
      stats: { numQubits: qreg.size, numClbits: creg ? creg.size : 0, gateCount: gates.length, depth: depth },
      version: version
    };
  }

  function validateOpenQasm(source) {
    try {
      const circuit = parseOpenQasm(source);
      return { valid: true, errors: [], circuit: circuit, stats: circuit.stats };
    } catch (error) {
      return { valid: false, errors: [String(error && error.message || error)], circuit: null, stats: null };
    }
  }


    const gateLines = circuit.gates.map(function (gate) {
      if (gate.name === "CX") return "cx q[" + gate.control + "], q[" + gate.target + "];";
      return gate.name.toLowerCase() + " q[" + gate.target + "];";
    });
    return [
      "OPENQASM 3.0;",
      'include "stdgates.inc";',
      "qubit[" + circuit.qubits + "] q;",
      "bit[" + circuit.qubits + "] c;",
      gateLines.join("\n"),
      "c = measure q;",
      ""
    ].join("\n");
  }

  function applySingleQubitGate(state, qubit, gateName, angle) {
    const mask = 1 << qubit;
    const theta = Number(angle || 0);
    for (let index = 0; index < state.length; index += 1) {
      if ((index & mask) !== 0) continue;
      const zero = state[index];
      const one = state[index | mask];
      if (gateName === "H") {
        state[index] = { re: (zero.re + one.re) * SQRT_HALF, im: (zero.im + one.im) * SQRT_HALF };
        state[index | mask] = { re: (zero.re - one.re) * SQRT_HALF, im: (zero.im - one.im) * SQRT_HALF };
      } else if (gateName === "X") {
        state[index] = one;
        state[index | mask] = zero;
      } else if (gateName === "Y") {
        state[index] = { re: one.im, im: -one.re };
        state[index | mask] = { re: -zero.im, im: zero.re };
      } else if (gateName === "Z") {
        state[index | mask] = { re: -one.re, im: -one.im };
      } else if (gateName === "S" || gateName === "SDG") {
        state[index | mask] = gateName === "S" ? { re: -one.im, im: one.re } : { re: one.im, im: -one.re };
      } else if (gateName === "T" || gateName === "TDG") {
        const sign = gateName === "T" ? 1 : -1;
        state[index | mask] = { re: one.re * SQRT_HALF - one.im * sign * SQRT_HALF, im: one.re * sign * SQRT_HALF + one.im * SQRT_HALF };
      } else if (gateName === "ID") {
        // Identity leaves both amplitudes unchanged.
      } else if (gateName === "RX") {
        const c = Math.cos(theta / 2), sn = Math.sin(theta / 2);
        state[index] = { re: c * zero.re + sn * one.im, im: c * zero.im - sn * one.re };
        state[index | mask] = { re: sn * zero.im + c * one.re, im: -sn * zero.re + c * one.im };
      } else if (gateName === "RY") {
        const c = Math.cos(theta / 2), sn = Math.sin(theta / 2);
        state[index] = { re: c * zero.re - sn * one.re, im: c * zero.im - sn * one.im };
        state[index | mask] = { re: sn * zero.re + c * one.re, im: sn * zero.im + c * one.im };
      } else if (gateName === "RZ") {
        const c = Math.cos(theta / 2), sn = Math.sin(theta / 2);
        state[index] = { re: zero.re * c + zero.im * sn, im: zero.im * c - zero.re * sn };
        state[index | mask] = { re: one.re * c - one.im * sn, im: one.re * sn + one.im * c };
      } else {
        throw new Error("Unsupported gate: " + gateName);
      }
    }
  }


    const mask = 1 << qubit;
    for (let index = 0; index < state.length; index += 1) {
      if ((index & mask) !== 0) continue;
      const zero = state[index];
      const one = state[index | mask];
      if (gateName === "H") {
        state[index] = {
          re: (zero.re + one.re) * SQRT_HALF,
          im: (zero.im + one.im) * SQRT_HALF
        };
        state[index | mask] = {
          re: (zero.re - one.re) * SQRT_HALF,
          im: (zero.im - one.im) * SQRT_HALF
        };
      } else if (gateName === "X") {
        state[index] = one;
        state[index | mask] = zero;
      } else if (gateName === "Z") {
        state[index | mask] = { re: -one.re, im: -one.im };
      } else {
        throw new Error("Unsupported gate: " + gateName);
      }
    }
  }

  function applyControlledX(state, control, target) {
    const controlMask = 1 << control;
    const targetMask = 1 << target;
    for (let index = 0; index < state.length; index += 1) {
      if ((index & controlMask) === 0 || (index & targetMask) !== 0) continue;
      const pairedIndex = index | targetMask;
      const current = state[index];
      state[index] = state[pairedIndex];
      state[pairedIndex] = current;
    }
  }

  function simulateCircuit(id) {
    const circuit = id && typeof id === "object" ? id : getCircuit(id);
    if (!Number.isInteger(circuit.qubits) || circuit.qubits < 1 || circuit.qubits > 8) {
      throw new Error("The local state-vector preview supports 1 to 8 qubits.");
    }
    const state = Array.from({ length: 1 << circuit.qubits }, function () { return { re: 0, im: 0 }; });
    state[0] = { re: 1, im: 0 };
    circuit.gates.forEach(function (gate) {
      if (gate.name === "CX") applyControlledX(state, gate.control, gate.target);
      else if (gate.name === "CZ") {
        const both = (1 << gate.control) | (1 << gate.target);
        state.forEach(function (amplitude, index) {
          if ((index & both) === both) state[index] = { re: -amplitude.re, im: -amplitude.im };
        });
      } else if (gate.name === "SWAP") {
        const first = 1 << gate.control, second = 1 << gate.target;
        for (let index = 0; index < state.length; index += 1) {
          if ((index & first) || !(index & second)) continue;
          const other = index ^ first ^ second;
          const current = state[index];
          state[index] = state[other];
          state[other] = current;
        }
      } else applySingleQubitGate(state, gate.target, gate.name, gate.angle);
    });

    const mapped = Array.isArray(circuit.measurements) && circuit.measurements.some(function (entry) { return Number.isInteger(entry.clbit); });
    const width = mapped ? circuit.numClbits : circuit.qubits;
    const raw = {};
    let total = 0;
    state.forEach(function (amplitude, index) {
      const probability = amplitude.re * amplitude.re + amplitude.im * amplitude.im;
      if (probability < 1e-12) return;
      let bits;
      if (mapped) {
        const out = new Array(width).fill("0");
        circuit.measurements.forEach(function (measurement) {
          if (Number.isInteger(measurement.clbit) && (index & (1 << measurement.qubit))) out[measurement.clbit] = "1";
        });
        bits = out.reverse().join("");
      } else bits = index.toString(2).padStart(width, "0");
      raw[bits] = (raw[bits] || 0) + probability;
      total += probability;
    });
    const probabilities = {};
    Object.keys(raw).sort().forEach(function (bits) {
      probabilities[bits] = raw[bits] / total;
    });
    return {
      id: circuit.id || "custom",
      title: circuit.title || "Custom OpenQASM circuit",
      qubits: circuit.qubits,
      gateCount: circuit.gates.length,
      probabilities: probabilities,
      qasm: qasmFor(circuit)
    };
  }

  function simulateOpenQasm(source) {
    return simulateCircuit(parseOpenQasm(source));
  }

  function init(doc, win) {
    const select = doc.getElementById("quantumCircuitSelect");
    const diagram = doc.getElementById("quantumCircuitDiagram");
    const results = doc.getElementById("quantumProbabilityResults");
    const qasmOutput = doc.getElementById("quantumQasmOutput");
    const status = doc.getElementById("quantumLabStatus");
    if (!select || !diagram || !results || !qasmOutput || select.dataset.quantumReady === "true") return;
    select.dataset.quantumReady = "true";

    const titleNode = doc.getElementById("quantumCircuitTitle");
    const conceptNode = doc.getElementById("quantumCircuitConcept");
    const qubitCountNode = doc.getElementById("quantumQubitCount");
    const runButton = doc.getElementById("quantumRunSimulation");
    const validateButton = doc.getElementById("quantumValidateQasm");
    const askButton = doc.getElementById("quantumAskAi");
    const copyButton = doc.getElementById("quantumCopyQasm");
    const downloadButton = doc.getElementById("quantumDownloadQasm");
    let currentCircuit = getCircuit(select.value);

    function setStatus(message, tone) {
      if (!status) return;
      status.textContent = message;
      status.dataset.tone = tone || "neutral";
    }

    function makeNode(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }

    function renderDiagram(circuit) {
      diagram.replaceChildren();
      diagram.setAttribute("aria-label", circuit.title + " quantum circuit with " + circuit.qubits + " qubit wires.");
      const wireGrid = makeNode("div", "quantum-wire-grid");
      const labels = makeNode("div", "quantum-wire-labels");
      labels.style.gridTemplateRows = "repeat(" + circuit.qubits + ", 36px)";
      for (let qubit = 0; qubit < circuit.qubits; qubit += 1) labels.appendChild(makeNode("span", "quantum-wire-label", "q" + qubit));
      const columns = makeNode("div", "quantum-gate-columns");
      columns.style.gridTemplateColumns = "repeat(" + (circuit.gates.length + 1) + ", minmax(32px, 1fr))";
      circuit.gates.concat([{ name: "M", measurement: true }]).forEach(function (gate) {
        const multi = ["CX", "CZ", "SWAP"].includes(gate.name);
        const column = makeNode("div", "quantum-gate-column" + (multi ? " is-controlled-gate" : ""));
        column.style.gridTemplateRows = "repeat(" + circuit.qubits + ", 36px)";
        if (multi) {
          column.style.setProperty("--q-first", Math.min(gate.control, gate.target));
          column.style.setProperty("--q-distance", Math.abs(gate.target - gate.control));
        }
        for (let qubit = 0; qubit < circuit.qubits; qubit += 1) {
          const cell = makeNode("div", "quantum-gate-cell");
          cell.appendChild(makeNode("span", "quantum-wire-line"));
          let gateNode = null;
          if (gate.measurement) gateNode = makeNode("span", "quantum-gate quantum-gate-measurement", "M");
          else if (gate.name === "CX" && qubit === gate.control) gateNode = makeNode("span", "quantum-gate quantum-gate-control", "●");
          else if (gate.name === "CX" && qubit === gate.target) gateNode = makeNode("span", "quantum-gate quantum-gate-target", "⊕");
          else if (gate.name === "CZ" && (qubit === gate.control || qubit === gate.target)) gateNode = makeNode("span", "quantum-gate quantum-gate-cz", "●");
          else if (gate.name === "SWAP" && (qubit === gate.control || qubit === gate.target)) gateNode = makeNode("span", "quantum-gate quantum-gate-swap", "×");
          else if (!multi && qubit === gate.target) gateNode = makeNode("span", "quantum-gate quantum-gate-" + gate.name.toLowerCase(), gate.name);
          if (gateNode) {
            gateNode.title = gate.source || (gate.name + " gate");
            cell.appendChild(gateNode);
          }
          column.appendChild(cell);
        }
        columns.appendChild(column);
      });
      wireGrid.append(labels, columns);
      diagram.appendChild(wireGrid);
    }

    function renderProbabilities(probabilities) {
      results.replaceChildren();
      Object.keys(probabilities).sort().forEach(function (bits) {
        const probability = probabilities[bits];
        const percent = probability * 100;
        const row = makeNode("div", "quantum-probability-row");
        row.setAttribute("role", "listitem");
        row.appendChild(makeNode("code", "quantum-result-bits", bits));
        const track = makeNode("div", "quantum-probability-track");
        const bar = makeNode("span", "quantum-probability-bar");
        bar.style.width = Math.max(0, Math.min(100, percent)) + "%";
        track.appendChild(bar);
        row.appendChild(track);
        row.appendChild(makeNode("strong", "quantum-result-percent", (percent >= 99.95 ? 100 : percent).toFixed(percent >= 99.95 ? 0 : 1) + "%"));
        results.appendChild(row);
      });
    }

    function renderCircuit(runSimulation, suppliedCircuit) {
      currentCircuit = suppliedCircuit || getCircuit(select.value);
      const result = simulateCircuit(currentCircuit);
      if (titleNode) titleNode.textContent = currentCircuit.title;
      if (conceptNode) {
        conceptNode.replaceChildren(
          makeNode("span", "quantum-concept-eyebrow", currentCircuit.eyebrow || "CUSTOM CIRCUIT"),
          makeNode("p", "", currentCircuit.description || "A custom OpenQASM circuit preview.")
        );
      }
      if (qubitCountNode) qubitCountNode.textContent = result.qubits + " qubit" + (result.qubits === 1 ? "" : "s") + " · " + result.gateCount + " gate" + (result.gateCount === 1 ? "" : "s");
      qasmOutput.value = result.qasm;
      renderDiagram(currentCircuit);
      renderProbabilities(result.probabilities);
      setStatus(runSimulation
        ? "Ideal simulation complete. Results were calculated in this browser; no qBraid credits were used."
        : "Preview ready. Choose Simulate circuit to calculate ideal measurement probabilities.",
        "success");
      return result;
    }

    select.addEventListener("change", function () { renderCircuit(true); });
    if (runButton) runButton.addEventListener("click", function () {
      try {
        renderCircuit(true, parseOpenQasm(qasmOutput.value));
      } catch (error) {
        setStatus(String(error && error.message || error), "error");
      }
    });
    if (validateButton) validateButton.addEventListener("click", function () {
      const result = validateOpenQasm(qasmOutput.value);
      if (!result.valid) {
        setStatus(result.errors[0], "error");
        return;
      }
      const stats = result.stats;
      setStatus("Valid OpenQASM " + result.circuit.version + " circuit · " + stats.numQubits + " qubits · " + stats.gateCount + " gates · depth " + stats.depth + ".", "success");
    });
    qasmOutput.addEventListener("input", function () {
      setStatus("Circuit source changed. Validate or simulate to update the diagram and measurement results.", "neutral");
    });

    if (copyButton) {
      copyButton.addEventListener("click", async function () {
        const text = qasmOutput.value;
        try {
          if (win.navigator.clipboard && typeof win.navigator.clipboard.writeText === "function") {
            await win.navigator.clipboard.writeText(text);
          } else {
            throw new Error("Clipboard API unavailable");
          }
          setStatus("OpenQASM copied. Paste it into your editor or keep it with your revision notes.", "success");
        } catch (error) {
          qasmOutput.focus();
          qasmOutput.select();
          let copied = false;
          try { copied = Boolean(doc.execCommand && doc.execCommand("copy")); } catch (_) {}
          setStatus(copied ? "OpenQASM copied." : "Select the OpenQASM text above and copy it with your keyboard.", copied ? "success" : "neutral");
        }
      });
    }

    if (downloadButton) {
      downloadButton.addEventListener("click", function () {
        let parsed;
        try { parsed = parseOpenQasm(qasmOutput.value); }
        catch (error) {
          setStatus(String(error && error.message || error), "error");
          return;
        }
        currentCircuit = parsed;
        const fileName = "KaushalPath-" + String(parsed.title || "quantum-circuit").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".qasm";
        const source = parsed.qasm.trim() + "\n";
        const blob = new win.Blob([source], { type: "text/plain;charset=utf-8" });
        const url = win.URL.createObjectURL(blob);
        const anchor = doc.createElement("a");
        anchor.href = url;
        anchor.download = fileName;
        anchor.style.display = "none";
        doc.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        win.setTimeout(function () { win.URL.revokeObjectURL(url); }, 30000);
        setStatus("Downloaded " + fileName + ". Import this OpenQASM file in qBraid Lab to continue.", "success");
      });
    }

    if (askButton) {
      askButton.addEventListener("click", function () {
        const chatInput = doc.getElementById("chatInput");
        const chatSubject = doc.getElementById("chatSubject");
        if (!chatInput) {
          setStatus("Open the AI conversation below to ask for a circuit explanation.", "neutral");
          return;
        }
        if (chatSubject) {
          const quantumOption = Array.from(chatSubject.options).find(function (option) {
            return option.textContent.trim().toLowerCase() === "quantum computing";
          });
          if (quantumOption) {
            chatSubject.value = quantumOption.value;
            chatSubject.dispatchEvent(new win.Event("change", { bubbles: true }));
          }
        }
        let result;
        try {
          result = renderCircuit(true, parseOpenQasm(qasmOutput.value));
        } catch (error) {
          setStatus(String(error && error.message || error), "error");
          return;
        }
        const outcomes = Object.keys(result.probabilities).sort().map(function (bits) {
          return bits + ": " + (result.probabilities[bits] * 100).toFixed(result.probabilities[bits] > 0.9995 ? 0 : 1) + "%";
        }).join(", ");
        chatInput.value = "Explain the following qBraid-compatible quantum circuit in beginner-friendly steps. Circuit: " + currentCircuit.title + ". Main idea: " + currentCircuit.explanation + " Ideal measurement probabilities: " + outcomes + ". Explain what each gate does, what the result means, and then ask me one short check-for-understanding question.\n\nOpenQASM " + (currentCircuit.version || "3.0") + ":\n" + result.qasm;
        chatInput.focus();
        chatInput.scrollIntoView({ behavior: "smooth", block: "center" });
        setStatus("A quantum explanation prompt is ready in the AI conversation below. Review it and press Send when you are ready.", "success");
      });
    }

    renderCircuit(false);
  }

  return {
    listCircuits: listCircuits,
    getCircuit: getCircuit,
    qasmFor: qasmFor,
    parseOpenQasm: parseOpenQasm,
    validateOpenQasm: validateOpenQasm,
    simulateOpenQasm: simulateOpenQasm,
    simulateCircuit: simulateCircuit,
    init: init
  };
});
