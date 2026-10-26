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

  function applySingleQubitGate(state, qubit, gateName) {
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
    const circuit = getCircuit(id);
    const state = Array.from({ length: 1 << circuit.qubits }, function () { return { re: 0, im: 0 }; });
    state[0] = { re: 1, im: 0 };
    circuit.gates.forEach(function (gate) {
      if (gate.name === "CX") applyControlledX(state, gate.control, gate.target);
      else applySingleQubitGate(state, gate.target, gate.name);
    });

    const raw = {};
    let total = 0;
    state.forEach(function (amplitude, index) {
      const probability = amplitude.re * amplitude.re + amplitude.im * amplitude.im;
      if (probability < 1e-12) return;
      const bits = index.toString(2).padStart(circuit.qubits, "0");
      raw[bits] = probability;
      total += probability;
    });
    const probabilities = {};
    Object.keys(raw).sort().forEach(function (bits) {
      probabilities[bits] = raw[bits] / total;
    });
    return {
      id: circuit.id,
      title: circuit.title,
      qubits: circuit.qubits,
      gateCount: circuit.gates.length,
      probabilities: probabilities,
      qasm: qasmFor(circuit)
    };
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
      for (let qubit = 0; qubit < circuit.qubits; qubit += 1) {
        labels.appendChild(makeNode("span", "quantum-wire-label", "q" + qubit));
      }
      const columns = makeNode("div", "quantum-gate-columns");
      columns.style.gridTemplateColumns = "repeat(" + (circuit.gates.length + 1) + ", minmax(32px, 1fr))";
      const allGates = circuit.gates.concat([{ name: "M", measurement: true }]);
      allGates.forEach(function (gate) {
        const column = makeNode("div", "quantum-gate-column" + (gate.name === "CX" ? " is-controlled-gate" : ""));
        column.style.gridTemplateRows = "repeat(" + circuit.qubits + ", 36px)";
        if (gate.name === "CX") {
          column.style.setProperty("--q-first", Math.min(gate.control, gate.target));
          column.style.setProperty("--q-distance", Math.abs(gate.target - gate.control));
        }
        for (let qubit = 0; qubit < circuit.qubits; qubit += 1) {
          const cell = makeNode("div", "quantum-gate-cell");
          cell.appendChild(makeNode("span", "quantum-wire-line"));
          let gateNode = null;
          if (gate.measurement) {
            gateNode = makeNode("span", "quantum-gate quantum-gate-measurement", "M");
          } else if (gate.name === "CX" && qubit === gate.control) {
            gateNode = makeNode("span", "quantum-gate quantum-gate-control", "●");
          } else if (gate.name === "CX" && qubit === gate.target) {
            gateNode = makeNode("span", "quantum-gate quantum-gate-target", "⊕");
          } else if (gate.name !== "CX" && qubit === gate.target) {
            gateNode = makeNode("span", "quantum-gate quantum-gate-" + gate.name.toLowerCase(), gate.name);
          }
          if (gateNode) cell.appendChild(gateNode);
          column.appendChild(cell);
        }
        columns.appendChild(column);
      });
      wireGrid.append(labels, columns);
      diagram.appendChild(wireGrid);
    }

    function renderProbabilities(probabilities) {
      results.replaceChildren();
      Object.keys(probabilities).forEach(function (bits) {
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

    function renderCircuit(runSimulation) {
      currentCircuit = getCircuit(select.value);
      const result = simulateCircuit(currentCircuit.id);
      if (titleNode) titleNode.textContent = currentCircuit.title;
      if (conceptNode) {
        conceptNode.replaceChildren(
          makeNode("span", "quantum-concept-eyebrow", currentCircuit.eyebrow),
          makeNode("p", "", currentCircuit.description)
        );
      }
      if (qubitCountNode) {
        qubitCountNode.textContent = result.qubits + " qubit" + (result.qubits === 1 ? "" : "s") + " · " + result.gateCount + " gate" + (result.gateCount === 1 ? "" : "s");
      }
      qasmOutput.value = result.qasm;
      renderDiagram(currentCircuit);
      renderProbabilities(result.probabilities);
      setStatus(runSimulation
        ? "Ideal simulation complete. Results were calculated in this browser; no qBraid credits were used."
        : "Preview ready. Choose Run simulation to calculate these ideal measurement probabilities.",
        "success");
      return result;
    }

    select.addEventListener("change", function () { renderCircuit(true); });
    if (runButton) runButton.addEventListener("click", function () { renderCircuit(true); });

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
        const fileName = "KaushalPath-" + currentCircuit.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".qasm";
        const blob = new win.Blob([qasmOutput.value], { type: "text/plain;charset=utf-8" });
        const url = win.URL.createObjectURL(blob);
        const anchor = doc.createElement("a");
        anchor.href = url;
        anchor.download = fileName;
        anchor.style.display = "none";
        doc.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        win.setTimeout(function () { win.URL.revokeObjectURL(url); }, 30000);
        setStatus("Downloaded " + fileName + ". Upload this OpenQASM file in qBraid Lab to continue.", "success");
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
        const result = simulateCircuit(currentCircuit.id);
        const outcomes = Object.keys(result.probabilities).map(function (bits) {
          return bits + ": " + (result.probabilities[bits] * 100).toFixed(result.probabilities[bits] > 0.9995 ? 0 : 1) + "%";
        }).join(", ");
        chatInput.value = "Explain the following qBraid-compatible quantum circuit in beginner-friendly steps. Circuit: " + currentCircuit.title + ". Main idea: " + currentCircuit.explanation + " Ideal measurement probabilities: " + outcomes + ". Explain what each gate does, what the result means, and then ask me one short check-for-understanding question.\n\nOpenQASM 3.0:\n" + result.qasm;
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
    simulateCircuit: simulateCircuit,
    init: init
  };
});
