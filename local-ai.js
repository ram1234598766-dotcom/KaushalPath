/* Consent-based in-browser language model. Model weights are cached on this device by WebLLM. */
(function () {
  "use strict";
  const PREF_KEY = "kp-local-ai-preferred";
  const CONSENT_KEY = "kp-local-ai-consent-v1";
  const RUNTIME_URL = "https://esm.sh/@mlc-ai/web-llm@0.2.85?bundle";
  const MODEL_LITE = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
  const MODEL_PLUS = "Llama-3.2-3B-Instruct-q4f16_1-MLC";
  let runtimePromise = null, engine = null, loadingPromise = null, activeModel = "";
  let lastLoadError = "";

  function capabilities() {
    const memory = Number(navigator.deviceMemory || 0);
    const cores = Number(navigator.hardwareConcurrency || 0);
    const mobile = Boolean((navigator.userAgentData && navigator.userAgentData.mobile) ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ""));
    const saveData = Boolean(navigator.connection && navigator.connection.saveData);
    const webgpu = Boolean(navigator.gpu) && window.isSecureContext;
    let model = MODEL_LITE, size = "about 0.9 GB of GPU memory (model runtime estimate)", reason = "";
    if (webgpu && memory >= 8 && cores >= 8 && !mobile && !saveData) {
      model = MODEL_PLUS;
      size = "about 2.3 GB of GPU memory (model runtime estimate)";
      reason = "Higher-resource desktop detected; using the larger quantised model.";
    } else if (webgpu && memory > 0 && memory <= 2) {
      reason = "This device reports very low available RAM. Local model loading is not recommended; use cloud mode instead.";
    } else if (!webgpu) {
      reason = "This browser does not expose WebGPU in a secure context. Local inference is unavailable here; use cloud mode instead.";
    } else if (!memory) {
      reason = "The browser hides its RAM estimate. The smallest supported model will be tried, but it may still exceed available memory.";
    } else if (saveData) {
      reason = "Data Saver is enabled. The model will not download until you explicitly choose Download & enable.";
    } else if (mobile) {
      reason = "Mobile device detected. A small quantised model is recommended to reduce memory pressure.";
    } else {
      reason = "A smaller quantised model is selected for compatibility.";
    }
    return {
      webgpu, memory, cores, mobile, saveData, model, modelLabel: model === MODEL_PLUS ? "Llama 3.2 · 3B (quantised)" : "Llama 3.2 · 1B (quantised)",
      estimatedGpuMemory: size, reason, canRun: webgpu && !(memory > 0 && memory <= 2)
    };
  }

  function isPreferred() {
    try { return localStorage.getItem(PREF_KEY) === "1" && localStorage.getItem(CONSENT_KEY) === "1"; }
    catch (error) { return false; }
  }
  function setPreferred(value) {
    try {
      localStorage.setItem(PREF_KEY, value ? "1" : "0");
      if (value) localStorage.setItem(CONSENT_KEY, "1");
      return true;
    } catch (error) { return false; }
  }
  function isReady() { return Boolean(engine && activeModel && activeModel === capabilities().model); }

  async function getRuntime() {
    if (!runtimePromise) {
      runtimePromise = import(RUNTIME_URL).catch((error) => {
        runtimePromise = null;
        throw new Error("Could not load the local inference runtime. Check your connection or content-filter settings, then retry. " + String(error && error.message || error).slice(0, 180));
      });
    }
    return runtimePromise;
  }

  async function load(options) {
    const opts = options || {};
    const caps = capabilities();
    if (!caps.canRun) throw new Error(caps.reason || "This browser is not ready for local AI.");
    if (engine && activeModel === caps.model) return { model: caps.model, label: caps.modelLabel, cachedSession: true };
    if (loadingPromise) return loadingPromise;
    setPreferred(true);
    lastLoadError = "";
    loadingPromise = (async () => {
      if (opts.onProgress) opts.onProgress({ progress: 0.01, text: "Loading local AI runtime…" });
      const webllm = await getRuntime();
      if (typeof webllm.CreateMLCEngine !== "function") throw new Error("The local AI runtime loaded without its model engine.");
      const candidate = await webllm.CreateMLCEngine(caps.model, {
        initProgressCallback: (report) => {
          if (opts.onProgress) opts.onProgress({
            progress: Number.isFinite(Number(report && report.progress)) ? Math.max(0, Math.min(1, Number(report.progress))) : null,
            text: String(report && report.text || "Preparing on-device model…")
          });
        }
      });
      engine = candidate;
      activeModel = caps.model;
      if (opts.onProgress) opts.onProgress({ progress: 1, text: "Local model is ready on this device." });
      return { model: caps.model, label: caps.modelLabel, cachedSession: false };
    })().catch((error) => {
      lastLoadError = String(error && error.message || error).slice(0, 500);
      engine = null; activeModel = "";
      throw error;
    }).finally(() => { loadingPromise = null; });
    return loadingPromise;
  }

  async function respond(options) {
    const opts = options || {};
    if (!isReady()) throw new Error("The selected local model is not loaded yet. Download and enable it first.");
    if (opts.signal && opts.signal.aborted) throw new DOMException("Request aborted", "AbortError");
    const messages = [{
      role: "system",
      content: "You are KaushalPath's on-device study tutor for Indian school learners and JEE/NEET aspirants. Work offline from the supplied prompt and your learned knowledge; do not claim to have opened an NCERT textbook, verified the current syllabus, searched the web, or read an attachment. Be careful with formulas and calculations. For school/NCERT-aligned notes, create original explanations, never reproduce textbook passages verbatim. When the learner asks for detailed notes, structure the answer into concepts, definitions, why/how, formulas with units, step-by-step examples, common mistakes, exam application and recall questions. State uncertainty instead of fabricating facts. This is a compact model; encourage checking official material for high-stakes or syllabus-sensitive details."
    }];
    (Array.isArray(opts.history) ? opts.history : []).slice(-6).forEach((entry) => {
      if (entry && ["user", "assistant"].includes(entry.role) && typeof entry.content === "string") {
        messages.push({ role: entry.role, content: entry.content.slice(-7000) });
      }
    });
    messages.push({ role: "user", content: String(opts.prompt || "").slice(0, 7000) });
    const signal = opts.signal;
    const onAbort = () => { try { engine && typeof engine.interruptGenerate === "function" && engine.interruptGenerate(); } catch (error) {} };
    if (signal) signal.addEventListener("abort", onAbort, { once: true });
    try {
      const completion = await engine.chat.completions.create({
        messages,
        stream: true,
        temperature: 0.25,
        max_tokens: opts.mode === "notes" ? 1600 : opts.mode === "revision" ? 1000 : 1200
      });
      let answer = "";
      for await (const chunk of completion) {
        if (signal && signal.aborted) throw new DOMException("Request aborted", "AbortError");
        const token = chunk && chunk.choices && chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content;
        if (typeof token === "string" && token) {
          answer += token;
          if (opts.onToken) opts.onToken(token);
        }
      }
      if (!answer.trim()) throw new Error("The local model returned an empty answer. Try a shorter, more specific question.");
      return answer;
    } finally {
      if (signal) signal.removeEventListener("abort", onAbort);
    }
  }

  window.KP_LOCAL_AI = {
    capabilities,
    isReady,
    isPreferred,
    setPreferred,
    load,
    respond,
    getModel: () => activeModel,
    getLastError: () => lastLoadError
  };

  // Only initialise automatically after the learner explicitly opted in on a previous visit.
  if (isPreferred()) {
    window.addEventListener("load", () => {
      if (!isPreferred() || !capabilities().canRun) return;
      load().catch((error) => {
        window.dispatchEvent(new CustomEvent("kp-local-ai-error", { detail: { message: String(error && error.message || error) } }));
      });
    }, { once: true });
  }
})();
