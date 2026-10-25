/** Local-first Smart System helpers. Pass the app's existing IndexedDB connection. */
export type Priority = "Low" | "Normal" | "High";
export interface TopicScore {subject:string;chapter:string;topic:string;totalAttempts:number;correctAttempts:number;accuracy:number;}
export interface Matrix {topics:TopicScore[];bySubject:Record<string,unknown>;totalAttempts:number;}
export interface Options {db:IDBDatabase;attemptsStore:string;plannerStore:string;workerBaseUrl:string;}
const key = (s:string) => s.trim().toLocaleLowerCase().replace(/\s+/g," ");
const label = (v:unknown) => typeof v==="string"&&v.trim()?v.trim().replace(/\s+/g," "):null;
function readAll(db:IDBDatabase,storeName:string):Promise<any[]> {
 return new Promise((resolve,reject)=>{if(!db.objectStoreNames.contains(storeName))return reject(new Error("IndexedDB store missing: "+storeName));
 const tx=db.transaction(storeName,"readonly"),req=tx.objectStore(storeName).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);});
}
function add(db:IDBDatabase,storeName:string,row:any):Promise<void>{
 return new Promise((resolve,reject)=>{if(!db.objectStoreNames.contains(storeName))return reject(new Error("Planner store missing: "+storeName));
 const tx=db.transaction(storeName,"readwrite"),store=tx.objectStore(storeName);if(typeof store.keyPath==="string"&&!row[store.keyPath])row[store.keyPath]=row.id;
 const req=store.add(row);req.onerror=()=>reject(req.error);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});
}
function normalise(a:any):{subject:string;chapter:string;topic:string;correct:boolean}|null {
 const q=a?.question||{},subject=label(a?.subject??q.subject),chapter=label(a?.chapter??q.chapter),topic=label(a?.topic??q.topic);
 let correct=a?.isCorrect??a?.is_correct??a?.correct;
 if(typeof correct!=="boolean"&&typeof a?.result==="string"){const r=a.result.toLowerCase();if(["correct","right","pass"].includes(r))correct=true;else if(["incorrect","wrong","fail"].includes(r))correct=false;}
 return subject&&chapter&&topic&&typeof correct==="boolean"?{subject,chapter,topic,correct}:null;
}
export async function localCompetencyAggregator(db:IDBDatabase,attemptsStore="testAttempts"):Promise<Matrix>{
 const rows=await readAll(db,attemptsStore),m=new Map<string,TopicScore>();let totalAttempts=0;
 for(const raw of rows){const a=normalise(raw);if(!a)continue;const k=[a.subject,a.chapter,a.topic].map(key).join("\u001f");
 let s=m.get(k);if(!s){s={subject:a.subject,chapter:a.chapter,topic:a.topic,totalAttempts:0,correctAttempts:0,accuracy:0};m.set(k,s);}
 s.totalAttempts++;if(a.correct)s.correctAttempts++;s.accuracy=s.correctAttempts/s.totalAttempts;totalAttempts++;}
 const topics=[...m.values()].sort((a,b)=>a.accuracy-b.accuracy||b.totalAttempts-a.totalAttempts),bySubject:Record<string,any>={};
 for(const t of topics){const s=bySubject[t.subject]??(bySubject[t.subject]={chapters:{}}),c=s.chapters[t.chapter]??(s.chapters[t.chapter]={topics:{}});c.topics[t.topic]=t;}
 return {topics,bySubject,totalAttempts};
}
function id(){return typeof crypto.randomUUID==="function"?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2);}
export async function generateSmartPlannerTask(db:IDBDatabase,opts:{attemptsStore?:string;plannerStore?:string}={}){
 const attempts=opts.attemptsStore||"testAttempts",planner=opts.plannerStore||"studyPlanner",matrix=await localCompetencyAggregator(db,attempts),weak=matrix.topics.find(t=>t.totalAttempts&&t.accuracy<0.5);
 if(!weak)return null;
 const previous=await readAll(db,planner),now=Date.now();
 if(previous.some(t=>t.source==="smart-loop"&&key(t.subject||"")===key(weak.subject)&&key(t.chapter||"")===key(weak.chapter)&&key(t.topic||"")===key(weak.topic)&&t.status!=="completed"&&now-Date.parse(t.createdAt||"")<86400000))return null;
 const task={id:id(),title:`Review ${weak.topic} & try 5 practice questions`,description:`Review ${weak.topic} in ${weak.chapter}, then solve five practice questions. Current local accuracy: ${Math.round(weak.accuracy*100)}%.`,duration:25,durationMinutes:25,priority:"High" as Priority,subject:weak.subject,chapter:weak.chapter,topic:weak.topic,status:"planned",source:"smart-loop",createdAt:new Date().toISOString()};
 await add(db,planner,task);return task;
}
export async function fetchSharedCatalog<T>(base:string,kind:"syllabus"|"formulas",cls:number,subject:string):Promise<{data:T;source?:string}|null>{
 if(!base)return null;try{const u=new URL("/api/v2/"+kind,base);u.search=new URLSearchParams({class:String(cls),subject}).toString();const r=await fetch(u);if(!r.ok)return null;const x=await r.json();return x.data===undefined?null:x;}catch{return null;}
}
export async function fetchGlobalBenchmarks(base:string,matrix:Matrix){
 return Promise.all(matrix.topics.filter(t=>t.accuracy<.5).slice(0,5).map(async t=>{try{const u=new URL("/api/v2/analytics/benchmarks",base);u.search=new URLSearchParams({subject:t.subject,chapter:t.chapter,topic:t.topic}).toString();const r=await fetch(u);const b=await r.json();return {...t,benchmark:b,benchmarkMessage:b.available?`${Math.round(b.incorrectPercent)}% of recorded community attempts on this topic were incorrect. You're not alone—keep practising.`:"A community benchmark will appear when enough anonymous attempts are available."};}catch{return {...t,benchmark:null,benchmarkMessage:"Community benchmarks are offline; your local study analysis still works."};}}));
}
export async function submitAnonymizedAttempts(base:string,attempts:{question_id:string;is_correct:boolean}[],consentGranted:boolean){
 if(!consentGranted)return {submitted:false,reason:"consent_not_granted"};if(!base)return {submitted:false,reason:"offline"};
 for(let i=0;i<attempts.length;i+=40){const r=await fetch(new URL("/api/v2/analytics/submit-attempt",base),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(attempts.slice(i,i+40))});if(!r.ok)return {submitted:false,reason:"unavailable"};}
 return {submitted:true};
}
export function createSmartSystem(options:Options){
 return {getWeaknessMatrix:()=>localCompetencyAggregator(options.db,options.attemptsStore),createSmartPlannerTask:()=>generateSmartPlannerTask(options.db,{attemptsStore:options.attemptsStore,plannerStore:options.plannerStore}),fetchSyllabus:(c:number,s:string)=>fetchSharedCatalog(options.workerBaseUrl,"syllabus",c,s),fetchFormulas:(c:number,s:string)=>fetchSharedCatalog(options.workerBaseUrl,"formulas",c,s),fetchBenchmarks:(m:Matrix)=>fetchGlobalBenchmarks(options.workerBaseUrl,m)};
}