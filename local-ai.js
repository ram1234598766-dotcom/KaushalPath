/* KaushalPath local AI: browser-side WebGPU inference with cached Qwen weights. */
(function(){
"use strict";
const MODEL_ID="Qwen2.5-1.5B-Instruct-q4f16_1-MLC";
const WEBLLM_MODULE="https://esm.sh/@mlc-ai/web-llm@0.2.86?bundle";
let engine=null,loadPromise=null,enabled=false;
function supported(){return Boolean(window.isSecureContext&&navigator.gpu);}
function isActive(){return enabled&&Boolean(engine);}
function isReady(){return Boolean(engine);}
function errorForUnsupported(){return new Error("On-device AI needs a secure browser with WebGPU support (a compatible Chrome or Edge browser and graphics hardware). You can switch back to Kilo Auto Free.");}
async function load(onProgress){
 if(engine){enabled=true;return engine;}
 if(!supported())throw errorForUnsupported();
 if(!loadPromise){
  loadPromise=(async function(){
   if(typeof onProgress==="function")onProgress({text:"Loading the local inference engine…"});
   const webllm=await import(WEBLLM_MODULE);
   if(!webllm||typeof webllm.CreateMLCEngine!=="function")throw new Error("The local model engine could not be loaded. Check your connection and retry.");
   engine=await webllm.CreateMLCEngine(MODEL_ID,{initProgressCallback:function(report){
    if(typeof onProgress==="function")onProgress({text:report&&typeof report.text==="string"?report.text:"Preparing the local model…",progress:report&&typeof report.progress==="number"?report.progress:null});
   }});
   return engine;
  })().finally(function(){loadPromise=null;});
 }
 const instance=await loadPromise;enabled=true;return instance;
}
function contentToText(value){if(typeof value==="string")return value;if(Array.isArray(value))return value.map(function(part){return typeof part==="string"?part:(part&&typeof part.text==="string"?part.text:"");}).join("");return "";}
async function generate(payload,onText,signal,onStatus){
 if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");
 const activeEngine=engine||await load(function(report){if(typeof onStatus==="function")onStatus(report.text+(report.progress!==null&&report.progress!==undefined?" · "+Math.round(report.progress*100)+"%":""));});
 enabled=true;
 const messages=[{role:"system",content:"You are KaushalPath, a careful and friendly CBSE study tutor for Classes 10–12 in India. Answer accurately and directly. Explain essential steps, include units where needed, and check calculations. Use clear headings, bullets, examples and formulas when useful. Do not invent citations or claim to browse websites; you cannot fetch the learner's URLs. Keep answers focused but complete."}];
 if(Array.isArray(payload.messages))payload.messages.slice(-4).forEach(function(item){if(item&&(item.role==="user"||item.role==="assistant")&&typeof item.content==="string"&&item.content.trim())messages.push({role:item.role,content:item.content.slice(-1200)});});
 let prompt=String(payload.prompt||"").trim();
 const urls=Array.isArray(payload.urls)?payload.urls.filter(function(url){return typeof url==="string"&&url.trim();}).slice(0,5):[];
 if(urls.length)prompt+="\n\nReference URLs (not fetched by this on-device model):\n"+urls.join("\n")+"\nDo not claim to have opened these URLs. Ask for relevant pasted text if needed.";
 if(!prompt)throw new Error("Enter a question before starting local AI.");messages.push({role:"user",content:prompt});
 const mode=["notes","explain","revision","questions","solve"].includes(payload.mode)?payload.mode:"explain",budget={explain:480,revision:620,solve:800,questions:900,notes:1050}[mode];
 let output="";
 const abortGeneration=function(){try{if(activeEngine&&typeof activeEngine.interruptGenerate==="function")activeEngine.interruptGenerate();}catch(e){}};
 if(signal)signal.addEventListener("abort",abortGeneration,{once:true});
 try{
  if(typeof onStatus==="function")onStatus("Generating locally with Qwen · no cloud request");
  const stream=await activeEngine.chat.completions.create({messages:messages,temperature:0.2,max_tokens:budget,stream:true});
  if(stream&&typeof stream[Symbol.asyncIterator]==="function"){
   for await(const chunk of stream){if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");const choice=chunk&&chunk.choices&&chunk.choices[0],text=contentToText(choice&&choice.delta&&choice.delta.content);if(text){output+=text;if(typeof onText==="function")onText(text);}}
  }else{const choice=stream&&stream.choices&&stream.choices[0];output=contentToText(choice&&choice.message&&choice.message.content);if(output&&typeof onText==="function")onText(output);}
  if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");
  if(!output.trim())throw new Error("The on-device model returned no text. Retry once or switch to Kilo Auto Free.");
  return output;
 }finally{if(signal)signal.removeEventListener("abort",abortGeneration);}
}
function disable(){enabled=false;}
window.KaushalPathLocalAI={modelId:MODEL_ID,isSupported:supported,isActive:isActive,isReady:isReady,load:load,generate:generate,disable:disable};
})();