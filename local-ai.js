/* KaushalPath local AI: automatically warms a cached Qwen WebGPU model on page load. */
(function(){
"use strict";
const MODEL_ID="Qwen2.5-1.5B-Instruct-q4f16_1-MLC";
const WEBLLM_MODULE="https://esm.sh/@mlc-ai/web-llm@0.2.86?bundle";
let engine=null,loadPromise=null,enabled=false,loading=false,lastStatus="Checking local model support…";
function supported(){return Boolean(window.isSecureContext&&navigator.gpu);}
function isActive(){return enabled&&Boolean(engine);}
function isReady(){return Boolean(engine);}
function isLoading(){return loading;}
function getStatus(){return lastStatus;}
function publish(report){
 const item=typeof report==="string"?{text:report}:Object.assign({},report||{});
 const text=String(item.text||"Preparing the local model…");
 lastStatus=text+(typeof item.progress==="number"?" · "+Math.round(item.progress*100)+"%":"");
 const status=document.getElementById("localAiStatus");if(status)status.textContent=lastStatus;
 window.dispatchEvent(new CustomEvent("kaushalpath:local-ai-progress",{detail:{text:text,progress:typeof item.progress==="number"?item.progress:null,loading:loading,ready:Boolean(engine),active:isActive()}}));
}
function errorForUnsupported(){return new Error("On-device AI needs a secure browser with WebGPU support and compatible graphics hardware. Cloud AI and web research remain available.");}
async function load(onProgress){
 const report=function(item){publish(item);if(typeof onProgress==="function")onProgress(item&&typeof item==="object"?item:{text:String(item||"Preparing the local model…")});};
 if(engine){enabled=true;loading=false;publish({text:"Local Qwen model ready."});return engine;}
 if(!supported())throw errorForUnsupported();
 if(!loadPromise){
  loading=true;
  loadPromise=(async function(){
   try{
    report({text:"Loading the on-device inference engine…"});
    const webllm=await import(WEBLLM_MODULE);
    if(!webllm||typeof webllm.CreateMLCEngine!=="function")throw new Error("The local inference engine could not be loaded. Check your connection and retry.");
    engine=await webllm.CreateMLCEngine(MODEL_ID,{initProgressCallback:function(progress){
     report({text:progress&&typeof progress.text==="string"?progress.text:"Downloading and preparing Qwen…",progress:progress&&typeof progress.progress==="number"?progress.progress:null});
    }});
    report({text:"Warming up local inference for faster first-token response…"});
    try{await engine.chat.completions.create({messages:[{role:"user",content:"Ready."}],max_tokens:1,temperature:0,stream:false});}catch(e){}
    enabled=true;loading=false;report({text:"Local Qwen model ready · generation runs on this device."});
    return engine;
   }catch(error){loading=false;report({text:"Automatic local setup failed · cloud AI remains available. "+String(error&&error.message||error)});throw error;}
  })().finally(function(){loadPromise=null;});
 }
 const instance=await loadPromise;enabled=true;loading=false;return instance;
}
function contentToText(value){if(typeof value==="string")return value;if(Array.isArray(value))return value.map(function(part){return typeof part==="string"?part:(part&&typeof part.text==="string"?part.text:"");}).join("");return "";}
async function generate(payload,onText,signal,onStatus){
 if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");
 const activeEngine=engine||await load(function(report){if(typeof onStatus==="function")onStatus(report.text+(report.progress!==null&&report.progress!==undefined?" · "+Math.round(report.progress*100)+"%":""));});
 enabled=true;
 const messages=[{role:"system",content:"You are KaushalPath, a careful and friendly CBSE study tutor for Classes 10–12 in India. Answer accurately and directly. Explain essential steps, include units where needed, and check calculations. Use clear headings, bullets, examples and formulas when useful. Do not invent citations or claim you browsed. This on-device text model cannot open web pages or interpret attached images; tool-dependent requests should be handled by the cloud research route."}];
 if(Array.isArray(payload.messages))payload.messages.slice(-4).forEach(function(item){if(item&&(item.role==="user"||item.role==="assistant")&&typeof item.content==="string"&&item.content.trim())messages.push({role:item.role,content:item.content.slice(-1200)});});
 let prompt=String(payload.prompt||"").trim();
 if(payload.imageData)throw new Error("Image analysis uses the cloud vision route; your image was not sent to the local text model.");
 if(payload.urls&&payload.urls.length)throw new Error("Opening public URLs uses the cloud research route.");
 if(!prompt)throw new Error("Enter a question before starting local AI.");
 messages.push({role:"user",content:prompt});
 const mode=["notes","explain","revision","questions","solve"].includes(payload.mode)?payload.mode:"explain",budget={explain:480,revision:620,solve:800,questions:900,notes:1050}[mode];
 let output="";
 const abortGeneration=function(){try{if(activeEngine&&typeof activeEngine.interruptGenerate==="function")activeEngine.interruptGenerate();}catch(e){}};
 if(signal)signal.addEventListener("abort",abortGeneration,{once:true});
 try{
  if(typeof onStatus==="function")onStatus("Generating locally with Qwen · no prompt sent to the cloud");
  const stream=await activeEngine.chat.completions.create({messages:messages,temperature:0.2,max_tokens:budget,stream:true});
  if(stream&&typeof stream[Symbol.asyncIterator]==="function"){
   for await(const chunk of stream){if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");const choice=chunk&&chunk.choices&&chunk.choices[0],text=contentToText(choice&&choice.delta&&choice.delta.content);if(text){output+=text;if(typeof onText==="function")onText(text);}}
  }else{const choice=stream&&stream.choices&&stream.choices[0];output=contentToText(choice&&choice.message&&choice.message.content);if(output&&typeof onText==="function")onText(output);}
  if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");
  if(!output.trim())throw new Error("The on-device model returned no text. Retry once or switch to Kilo Auto Free.");
  return output;
 }finally{if(signal)signal.removeEventListener("abort",abortGeneration);}
}
function disable(){enabled=false;publish({text:"Kilo Auto Free selected · local model stays cached."});}
window.KaushalPathLocalAI={modelId:MODEL_ID,isSupported:supported,isActive:isActive,isReady:isReady,isLoading:isLoading,getStatus:getStatus,load:load,generate:generate,disable:disable};
function autoStart(){
 if(!supported()){publish({text:"This browser has no compatible WebGPU device · cloud AI remains ready."});return;}
 publish({text:"Automatic setup started · downloading and caching the local Qwen model. First setup may use substantial data; later visits reuse the browser cache."});
 load(publish).catch(function(){/* Cloud AI remains available; the panel displays the failure. */});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",autoStart,{once:true});else autoStart();
})();