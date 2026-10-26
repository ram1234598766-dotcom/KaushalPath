/* KaushalPath Quantum Circuit Studio — ideal local simulator + qBraid export workflow. */
(function () {
  "use strict";
  const MAX_QUBITS = 8;
  const MAX_SOURCE_LENGTH = 20000;
  const MAX_GATES = 300;
  const DEFAULT_QASM = [
    "OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[2] q;", "bit[2] c;",
    "h q[0];", "cx q[0], q[1];", "c = measure q;"
  ].join("\n");
  const TEMPLATES = {
    superposition: {
      label: "Superposition · 1 qubit",
      note: "The Hadamard gate creates a balanced superposition. An ideal measurement returns 0 or 1 with 50% probability each.",
      qasm: ["OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;", "h q[0];", "c = measure q;"].join("\n")
    },
    bell: {
      label: "Bell pair · entanglement",
      note: "H creates a superposition on q[0], then CX correlates both qubits. The ideal outcomes are 00 and 11; this does not allow faster-than-light communication.",
      qasm: DEFAULT_QASM
    },
    ghz: {
      label: "GHZ state · 3 qubits",
      note: "A Hadamard followed by two controlled-X gates links three qubits. An ideal measurement produces 000 or 111 with equal probability.",
      qasm: ["OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[3] q;", "bit[3] c;", "h q[0];", "cx q[0], q[1];", "cx q[1], q[2];", "c = measure q;"].join("\n")
    },
    interference: {
      label: "Interference · phase flip",
      note: "H-Z-H turns a phase change into a measurable bit flip. The ideal final result is 1 with probability 100%, illustrating interference.",
      qasm: ["OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;", "h q[0];", "z q[0];", "h q[0];", "c = measure q;"].join("\n")
    },
    bitflip: {
      label: "X gate · bit flip",
      note: "The Pauli-X gate flips |0⟩ to |1⟩. This simple circuit is a useful first check that the circuit editor and measurement output work.",
      qasm: ["OPENQASM 3.0;", 'include "stdgates.inc";', "qubit[1] q;", "bit[1] c;", "x q[0];", "c = measure q;"].join("\n")
    }
  };

  function parseAngle(expression) {
    const compact = String(expression || "").toLowerCase().replace(/\s+/g, "");
    const tokens = compact.match(/pi|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[()+\-*/]/g) || [];
    if (!compact || tokens.join("") !== compact) {
      throw new Error("Gate angles may use numbers, pi, parentheses and +, −, × or ÷ only.");
    }
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
    const result = expressionValue();
    if (pos !== tokens.length || !Number.isFinite(result)) throw new Error("The gate angle is not a finite numeric expression.");
    return result;
  }

  function parseOpenQasm(source) {
    if (typeof source !== "string" || !source.trim()) throw new Error("Add an OpenQASM circuit first.");
    if (source.length > MAX_SOURCE_LENGTH) throw new Error("This learning editor accepts circuits up to 20,000 characters.");
    const cleaned = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").trim();
    const versionMatch = cleaned.match(/^\s*OPENQASM\s+(2\.0|3\.0)\s*;/i);
    if (!versionMatch) throw new Error("Start with OPENQASM 3.0; (or OPENQASM 2.0;).");
    const version = versionMatch[1];
    const statements = cleaned.split(";").map((part) => part.trim()).filter(Boolean);
    const qubitRegisters = new Map();
    const bitRegisters = new Map();
    const gates = [];
    const measurements = [];
    let hasMeasurement = false;

    function addRegister(map, name, size, kind) {
      if (!Number.isInteger(size) || size < 1 || size > MAX_QUBITS) throw new Error(kind + " register size must be between 1 and " + MAX_QUBITS + ".");
      if (map.has(name) || (kind === "qubit" ? bitRegisters : qubitRegisters).has(name)) throw new Error("Register name \"" + name + "\" is declared more than once.");
      map.set(name, { name, size, offset: 0 });
      if (map.size > 1) throw new Error("This learning simulator supports one quantum register and one classical register at a time.");
    }

    for (const statement of statements) {
      if (/^OPENQASM\b/i.test(statement) || /^include\s+["'](?:stdgates\.inc|qelib1\.inc)["']$/i.test(statement)) continue;
      let match = statement.match(/^(qubit|bit)\s*(?:\[\s*(\d+)\s*\])?\s+([A-Za-z_]\w*)$/i);
      if (match) {
        const kind = match[1].toLowerCase();
        addRegister(kind === "qubit" ? qubitRegisters : bitRegisters, match[3], Number(match[2] || 1), kind);
        continue;
      }
      match = statement.match(/^(qreg|creg)\s+([A-Za-z_]\w*)\s*\[\s*(\d+)\s*\]$/i);
      if (match) {
        const kind = match[1].toLowerCase() === "qreg" ? "qubit" : "bit";
        addRegister(kind === "qubit" ? qubitRegisters : bitRegisters, match[2], Number(match[3]), kind);
      }
    }

    if (qubitRegisters.size !== 1) throw new Error("Declare one quantum register, for example: qubit[2] q;");
    const qRegister = qubitRegisters.values().next().value;
    const cRegister = bitRegisters.size ? bitRegisters.values().next().value : null;

    function getRegister(map, name, kind) {
      const register = map.get(name);
      if (!register) throw new Error("Unknown " + kind + " register \"" + name + "\".");
      return register;
    }
    function parseOperand(text, map, kind, allowWhole) {
      const match = String(text || "").trim().match(/^([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?$/);
      if (!match) throw new Error("Could not read circuit operand \"" + String(text).trim() + "\".");
      const register = getRegister(map, match[1], kind);
      if (match[2] === undefined) {
        if (register.size === 1) return { register, index: 0, whole: false };
        if (allowWhole) return { register, index: null, whole: true };
        throw new Error("Use an explicit index such as " + match[1] + "[0] for this gate.");
      }
      const index = Number(match[2]);
      if (index >= register.size) throw new Error(kind + " index " + index + " is outside register \"" + register.name + "\".");
      return { register, index, whole: false };
    }

    for (const statement of statements) {
      if (/^OPENQASM\b/i.test(statement) ||
          /^include\s+["'](?:stdgates\.inc|qelib1\.inc)["']$/i.test(statement) ||
          /^(?:qubit|bit)\s*(?:\[\s*\d+\s*\])?\s+[A-Za-z_]\w*$/i.test(statement) ||
          /^(?:qreg|creg)\s+[A-Za-z_]\w*\s*\[\s*\d+\s*\]$/i.test(statement)) continue;
      if (/^barrier\b/i.test(statement)) continue;

      const measured = statement.match(/^(?:([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?\s*=\s*)?measure\s+([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?(?:\s*->\s*([A-Za-z_]\w*)(?:\[\s*(\d+)\s*\])?)?$/i);
      if (measured) {
        hasMeasurement = true;
        const qText = measured[3] + (measured[4] === undefined ? "" : "[" + measured[4] + "]");
        const qOperand = parseOperand(qText, qubitRegisters, "qubit", true);
        const targetName = measured[1] || measured[5] || "";
        const targetIndexText = measured[1] ? measured[2] : measured[6];
        const targetText = targetName + (targetIndexText === undefined ? "" : "[" + targetIndexText + "]");
        const targets = targetName ? parseOperand(targetText, bitRegisters, "classical bit", true) : null;
        const measuredCount = qOperand.whole ? qOperand.register.size : 1;
        if (targets && !targets.whole && measuredCount !== 1) throw new Error("A single classical bit can only receive one measured qubit.");
        if (targets && targets.whole && targets.register.size < measuredCount) throw new Error("The classical register must be at least as wide as the measured qubit register.");
        for (let offset = 0; offset < measuredCount; offset += 1) {
          measurements.push({ qubit: qOperand.whole ? offset : qOperand.index, clbit: !targets ? null : targets.whole ? offset : targets.index });
        }
        continue;
      }

      const gateMatch = statement.match(/^([A-Za-z_]\w*)\s*(?:\(([^)]*)\))?\s+(.+)$/i);
      if (!gateMatch) throw new Error("Could not understand statement: \"" + statement.slice(0, 80) + "\".");
      let type = gateMatch[1].toUpperCase();
      if (type === "CNOT") type = "CX";
      if (type === "I") type = "ID";
      const allowed = new Set(["H", "X", "Y", "Z", "S", "SDG", "T", "TDG", "ID", "RX", "RY", "RZ", "CX", "CZ", "SWAP"]);
      if (!allowed.has(type)) throw new Error("The learning simulator does not support the \"" + gateMatch[1] + "\" gate yet.");
      const operandTexts = gateMatch[3].split(/\s*,\s*/);
      const arity = ["CX", "CZ", "SWAP"].includes(type) ? 2 : 1;
      if (operandTexts.length !== arity) throw new Error(type + " needs " + arity + " qubit operand" + (arity > 1 ? "s" : "") + ".");
      const operands = operandTexts.map((text) => parseOperand(text, qubitRegisters, "qubit", false));
      if (arity === 2 && operands[0].index === operands[1].index) throw new Error(type + " must act on two different qubits.");
      if (["RX", "RY", "RZ"].includes(type) && gateMatch[2] === undefined) throw new Error(type + " needs an angle, for example " + type.toLowerCase() + "(pi/2) q[0];");
      if (!["RX", "RY", "RZ"].includes(type) && gateMatch[2] !== undefined) throw new Error(type + " does not take an angle in this editor.");
      gates.push({ type, qubits: operands.map((operand) => operand.index), angle: gateMatch[2] === undefined ? 0 : parseAngle(gateMatch[2]), source: statement });
      if (gates.length > MAX_GATES) throw new Error("This learning editor accepts up to " + MAX_GATES + " gates per circuit.");
    }

    let depth = 0;
    const qubitDepth = new Array(qRegister.size).fill(0);
    gates.forEach((gate) => {
      const layer = Math.max.apply(null, gate.qubits.map((qubit) => qubitDepth[qubit])) + 1;
      gate.qubits.forEach((qubit) => { qubitDepth[qubit] = layer; });
      depth = Math.max(depth, layer);
    });
    if (hasMeasurement) depth += 1;
    return {
      version, numQubits: qRegister.size, numClbits: cRegister ? cRegister.size : 0,
      quantumRegister: qRegister.name, classicalRegister: cRegister ? cRegister.name : "",
      gates, measurements, hasMeasurement,
      stats: { numQubits: qRegister.size, numClbits: cRegister ? cRegister.size : 0, gateCount: gates.length, depth }
    };
  }

  function validateQasm(source) {
    try {
      const circuit = parseOpenQasm(source);
      return { valid: true, errors: [], stats: circuit.stats, circuit };
    } catch (error) {
      return { valid: false, errors: [String(error && error.message || error)], stats: null, circuit: null };
    }
  }

  function simulateQasm(source) {
    const circuit = parseOpenQasm(source);
    const count = circuit.numQubits;
    const dimension = 1 << count;
    const real = new Float64Array(dimension);
    const imag = new Float64Array(dimension);
    real[0] = 1;
    function oneQubit(qubit, apply) {
      const mask = 1 << qubit;
      for (let base = 0; base < dimension; base += 1) {
        if (base & mask) continue;
        const other = base | mask;
        const value = apply(real[base], imag[base], real[other], imag[other]);
        real[base] = value[0]; imag[base] = value[1];
        real[other] = value[2]; imag[other] = value[3];
      }
    }
    function phaseOnBits(predicate, phaseReal, phaseImag) {
      for (let basis = 0; basis < dimension; basis += 1) {
        if (!predicate(basis)) continue;
        const r = real[basis], i = imag[basis];
        real[basis] = r * phaseReal - i * phaseImag;
        imag[basis] = r * phaseImag + i * phaseReal;
      }
    }
    for (const gate of circuit.gates) {
      const q = gate.qubits[0], mask = 1 << q;
      switch (gate.type) {
        case "ID": break;
        case "X": oneQubit(q, (ar, ai, br, bi) => [br, bi, ar, ai]); break;
        case "Y": oneQubit(q, (ar, ai, br, bi) => [bi, -br, -ai, ar]); break;
        case "H": {
          const inv = 1 / Math.sqrt(2);
          oneQubit(q, (ar, ai, br, bi) => [(ar + br) * inv, (ai + bi) * inv, (ar - br) * inv, (ai - bi) * inv]);
          break;
        }
        case "Z": phaseOnBits((basis) => Boolean(basis & mask), -1, 0); break;
        case "S": phaseOnBits((basis) => Boolean(basis & mask), 0, 1); break;
        case "SDG": phaseOnBits((basis) => Boolean(basis & mask), 0, -1); break;
        case "T": phaseOnBits((basis) => Boolean(basis & mask), Math.SQRT1_2, Math.SQRT1_2); break;
        case "TDG": phaseOnBits((basis) => Boolean(basis & mask), Math.SQRT1_2, -Math.SQRT1_2); break;
        case "RX": {
          const c = Math.cos(gate.angle / 2), s = Math.sin(gate.angle / 2);
          oneQubit(q, (ar, ai, br, bi) => [c * ar + s * bi, c * ai - s * br, s * ai + c * br, -s * ar + c * bi]);
          break;
        }
        case "RY": {
          const c = Math.cos(gate.angle / 2), s = Math.sin(gate.angle / 2);
          oneQubit(q, (ar, ai, br, bi) => [c * ar - s * br, c * ai - s * bi, s * ar + c * br, s * ai + c * bi]);
          break;
        }
        case "RZ": {
          const angle = gate.angle / 2, c = Math.cos(angle), s = Math.sin(angle);
          for (let basis = 0; basis < dimension; basis += 1) {
            const sign = basis & mask ? 1 : -1, r = real[basis], i = imag[basis];
            real[basis] = r * c - i * sign * s;
            imag[basis] = r * sign * s + i * c;
          }
          break;
        }
        case "CX": {
          const control = 1 << gate.qubits[0], target = 1 << gate.qubits[1];
          for (let basis = 0; basis < dimension; basis += 1) {
            if (!(basis & control) || (basis & target)) continue;
            const other = basis | target;
            let temp = real[basis]; real[basis] = real[other]; real[other] = temp;
            temp = imag[basis]; imag[basis] = imag[other]; imag[other] = temp;
          }
          break;
        }
        case "CZ": {
          const both = (1 << gate.qubits[0]) | (1 << gate.qubits[1]);
          phaseOnBits((basis) => (basis & both) === both, -1, 0);
          break;
        }
        case "SWAP": {
          const first = 1 << gate.qubits[0], second = 1 << gate.qubits[1];
          for (let basis = 0; basis < dimension; basis += 1) {
            if ((basis & first) || !(basis & second)) continue;
            const other = basis ^ first ^ second;
            let temp = real[basis]; real[basis] = real[other]; real[other] = temp;
            temp = imag[basis]; imag[basis] = imag[other]; imag[other] = temp;
          }
          break;
        }
        default: throw new Error("Unsupported gate: " + gate.type);
      }
    }

    const mapped = circuit.measurements.some((entry) => Number.isInteger(entry.clbit));
    const width = mapped ? circuit.numClbits : circuit.numQubits;
    const probabilities = Object.create(null);
    for (let basis = 0; basis < dimension; basis += 1) {
      const probability = real[basis] * real[basis] + imag[basis] * imag[basis];
      if (probability < 1e-10) continue;
      let key;
      if (mapped) {
        const bits = new Array(width).fill("0");
        circuit.measurements.forEach((entry) => {
          if (Number.isInteger(entry.clbit) && (basis & (1 << entry.qubit))) bits[entry.clbit] = "1";
        });
        key = bits.reverse().join("");
      } else {
        key = Array.from({ length: width }, (_, offset) => ((basis >> (width - offset - 1)) & 1) ? "1" : "0").join("");
      }
      probabilities[key] = (probabilities[key] || 0) + probability;
    }
    const rounded = {};
    Object.keys(probabilities).sort().forEach((key) => {
      const value = Math.round(probabilities[key] * 1e6) / 1e6;
      if (value > 0) rounded[key] = value;
    });
    return { probabilities: rounded, num_qubits: count, stats: circuit.stats, circuit };
  }

  function init() {
    const root = document.getElementById("quantumStudio");
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";
    const template = document.getElementById("quantumTemplate");
    const editor = document.getElementById("quantumQasm");
    const status = document.getElementById("quantumStatus");
    const diagram = document.getElementById("quantumDiagram");
    const results = document.getElementById("quantumResults");
    const stats = document.getElementById("quantumStats");
    const note = document.getElementById("quantumLearningNote");
    const validateButton = document.getElementById("quantumValidate");
    const simulateButton = document.getElementById("quantumSimulate");
    const resetButton = document.getElementById("quantumReset");
    const exportButton = document.getElementById("quantumExport");
    const askAiButton = document.getElementById("quantumAskAI");

    function setStatus(message, error) {
      status.textContent = message;
      status.classList.toggle("is-error", Boolean(error));
      status.classList.toggle("is-success", !error);
    }
    function clearNode(node) { while (node.firstChild) node.removeChild(node.firstChild); }
    function textNode(tag, className, text) {
      const node = document.createElement(tag);
      if (className) node.className = className;
      node.textContent = text;
      return node;
    }
    function renderStats(parsed) {
      clearNode(stats);
      [["Qubits", String(parsed.stats.numQubits)], ["Gates", String(parsed.stats.gateCount)], ["Circuit depth", String(parsed.stats.depth)]].forEach((item) => {
        const cell = textNode("div", "quantum-stat", "");
        cell.append(textNode("span", "quantum-stat-label", item[0]), textNode("strong", "", item[1]));
        stats.appendChild(cell);
      });
    }
    function renderCircuit(parsed) {
      clearNode(diagram);
      diagram.appendChild(textNode("div", "quantum-diagram-heading", parsed.numQubits + " qubit" + (parsed.numQubits === 1 ? "" : "s") + " · " + parsed.gates.length + " gates"));
      const scroll = textNode("div", "quantum-diagram-scroll", "");
      const columns = Math.max(1, parsed.gates.length);
      for (let qubit = parsed.numQubits - 1; qubit >= 0; qubit -= 1) {
        const row = textNode("div", "quantum-wire-row", "");
        row.style.gridTemplateColumns = "repeat(" + columns + ", minmax(32px, 1fr))";
        row.appendChild(textNode("span", "quantum-wire-label", "q[" + qubit + "]"));
        parsed.gates.forEach((gate) => {
          const cell = textNode("div", "quantum-wire-cell", "");
          const affected = gate.qubits.indexOf(qubit);
          if (affected >= 0) {
            let label = gate.type;
            if (gate.type === "CX") label = affected === 0 ? "●" : "⊕";
            if (gate.type === "CZ") label = "●";
            if (gate.type === "SWAP") label = "×";
            const badge = textNode("span", "quantum-gate-chip quantum-gate-" + gate.type.toLowerCase(), label);
            badge.title = gate.source;
            cell.appendChild(badge);
          } else cell.appendChild(textNode("span", "quantum-wire-empty", "·"));
          row.appendChild(cell);
        });
        scroll.appendChild(row);
      }
      diagram.appendChild(scroll);
    }
    function renderResults(output) {
      clearNode(results);
      const entries = Object.entries(output.probabilities).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      if (!entries.length) {
        results.appendChild(textNode("p", "quantum-empty", "No measurable outcomes were found."));
        return;
      }
      const max = Math.max.apply(null, entries.map((entry) => entry[1]));
      entries.slice(0, 16).forEach((entry) => {
        const row = textNode("div", "quantum-result-row", "");
        const label = textNode("code", "quantum-result-label", entry[0]);
        const track = textNode("div", "quantum-result-track", "");
        const bar = textNode("div", "quantum-result-bar", "");
        bar.style.width = (entry[1] / max * 100).toFixed(2) + "%";
        track.appendChild(bar);
        row.append(label, track, textNode("strong", "quantum-result-percent", (entry[1] * 100).toFixed(1) + "%"));
        results.appendChild(row);
      });
      results.setAttribute("aria-label", "Ideal measurement probabilities: " + entries.map((entry) => entry[0] + " " + (entry[1] * 100).toFixed(1) + " percent").join(", "));
    }
    function currentParsed() {
      const outcome = validateQasm(editor.value);
      if (!outcome.valid) throw new Error(outcome.errors[0]);
      renderStats(outcome.circuit);
      renderCircuit(outcome.circuit);
      return outcome.circuit;
    }
    function simulate() {
      simulateButton.disabled = true;
      try {
        const parsed = currentParsed();
        renderResults(simulateQasm(editor.value));
        if (template.value && TEMPLATES[template.value]) note.textContent = TEMPLATES[template.value].note;
        else note.textContent = "These are ideal, noiseless probabilities from the local state-vector preview. A hardware run can differ because real devices are noisy.";
        setStatus("Simulation complete. Ideal local results are ready; no qBraid credits or quantum hardware were used.", false);
      } catch (error) {
        setStatus(String(error && error.message || error), true);
        clearNode(results);
        clearNode(diagram);
        stats.replaceChildren();
      } finally {
        simulateButton.disabled = false;
      }
    }
    validateButton.addEventListener("click", function () {
      try {
        const parsed = currentParsed();
        setStatus("Valid OpenQASM " + parsed.version + " circuit. " + parsed.stats.numQubits + " qubits, " + parsed.stats.gateCount + " gates.", false);
      } catch (error) { setStatus(String(error && error.message || error), true); }
    });
    simulateButton.addEventListener("click", simulate);
    resetButton.addEventListener("click", function () {
      const key = template.value && TEMPLATES[template.value] ? template.value : "bell";
      editor.value = TEMPLATES[key].qasm;
      note.textContent = TEMPLATES[key].note;
      simulate();
    });
    template.addEventListener("change", function () {
      const item = TEMPLATES[template.value];
      if (!item) return;
      editor.value = item.qasm;
      note.textContent = item.note;
      simulate();
    });
    exportButton.addEventListener("click", function () {
      try {
        currentParsed();
        const blob = new Blob([editor.value.trim() + "\n"], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        const selected = template.value && TEMPLATES[template.value] ? template.value : "custom-circuit";
        anchor.href = url;
        anchor.download = "kaushalpath-" + selected + ".qasm";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        setStatus("OpenQASM exported. In qBraid Lab, import the .qasm file into a notebook or circuit workflow.", false);
      } catch (error) { setStatus(String(error && error.message || error), true); }
    });
    askAiButton.addEventListener("click", function () {
      const chatInput = document.getElementById("chatInput");
      const chatMode = document.getElementById("chatMode");
      if (!chatInput) {
        setStatus("The AI chat composer is not available on this page.", true);
        return;
      }
      const selectedName = template.value && TEMPLATES[template.value] ? TEMPLATES[template.value].label : "Custom circuit";
      chatInput.value = "I'm learning quantum computing in the KaushalPath AI Study Guide. Explain this " + selectedName +
        " circuit step by step in student-friendly language, describe each gate and the measurement probabilities, and give me one self-check question. Do not claim a hardware run occurred.\n\nOpenQASM:\n" + editor.value.trim().slice(0, 2100);
      if (chatMode) chatMode.value = "explain";
      chatInput.dispatchEvent(new Event("input", { bubbles: true }));
      chatInput.focus();
      setStatus("Circuit context added to the AI Study Guide composer. Review it, then send your question.", false);
    });
    template.value = "bell";
    editor.value = TEMPLATES.bell.qasm;
    note.textContent = TEMPLATES.bell.note;
    simulate();
  }

  if (typeof window !== "undefined") {
    window.KP_QUANTUM_STUDIO = Object.freeze({ parseOpenQasm, validateQasm, simulateQasm, templates: Object.keys(TEMPLATES), examples: Object.fromEntries(Object.entries(TEMPLATES).map((entry) => [entry[0], Object.freeze({ qasm: entry[1].qasm, label: entry[1].label, note: entry[1].note })])), maxQubits: MAX_QUBITS });
  }
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
    else init();
  }
})();