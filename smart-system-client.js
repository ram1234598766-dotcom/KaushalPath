/* KaushalPath Smart Study Loop. Student-specific history and planner data stay local. */
(function () {
  "use strict";
  const WORKER=window.location.origin;
  const HISTORY_KEY="kp-results", PLANNER_KEY="kp-planner-tasks";
  const $=id=>document.getElementById(id);
  const norm=s=>String(s||"").normalize("NFKC").trim().replace(/\s+/g," ").toLowerCase();
  const clean=s=>typeof s==="string"&&s.trim()?s.trim().replace(/\s+/g," "):"";
  let weakTopics=[];

  function readJSON(key,fallback){try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(_){return fallback;}}
  function inferSubject(question,exam){
    const q=norm(question);
    if(/mitochondri|nephron|haemoglobin|hemoglobin|photosynth|dna|rna|enzyme|decompos|organism|flowering plant|double fertilisation|cell organelle|genetic|ecosystem|reproduction|blood glucose|amino acid/.test(q))return"Biology";
    if(/coulomb|resistor|electric potential|electric field|projectile|velocity|acceleration|ideal gas|boyle.s law|lens|mirror|impulse|force|momentum|power dissipated|surface tension|focal length|newton.s law/.test(q))return"Physics";
    if(/oxidation number|hybridisation|hybridization|molecular orbital|pH|first.order reaction|half.life|conjugate base|dilute acid|nernst|electrochem|reaction quotient|chemical bond|molar concentration/.test(q))return"Chemistry";
    if(/derivative|integral|determinant|quadratic equation|arithmetic progression|roots of|probability|matrix|differential equation|linear equations|nth term|real numbers|discriminant/.test(q))return"Mathematics";
    if(/democratic system|universal adult franchise|constitution|power sharing|federalism|nationalism|geography|history|civics/.test(q))return"Social Science";
    if(/python|sql|mutable|tuple|string|list|algorithm|computer science|database/.test(q))return"Computer Science";
    if(/spelling|correctly spelled|comprehension|grammar|noun|verb|poem|prose/.test(q))return"English";
    return exam==="NEET UG"?"Biology":"";
  }
  function inferTopic(question,subject){
    const q=norm(question);
    const rules={
      Mathematics:[[/differential equation/,"Differential equations"],[/derivative|differentiat/,"Differentiation"],[/integral|integrat/,"Integrals"],[/arithmetic progression|\bap\b|nth term/,"Arithmetic progressions"],[/determinant/,"Determinants"],[/matrix|matrices/,"Matrices"],[/quadratic|roots of .* equation|discriminant/,"Quadratic equations"],[/linear equation/,"Linear equations"],[/probability|independent events/,"Probability"],[/real numbers|prime factorisation/,"Real numbers"],[/complex number|1\s*\+\s*i/,"Complex numbers"]],
      Physics:[[/coulomb|electric charge|electric field/,"Electric charges and fields"],[/projectile/,"Motion in a plane"],[/velocity|acceleration|particle moves|travels .* km/,"Motion in a straight line"],[/lens|focal length|concave mirror/,"Ray optics"],[/resistor|ohm|power dissipated|electric potential/,"Current electricity"],[/ideal gas|boyle.s law|isotherm/,"Kinetic theory and gas laws"],[/impulse|momentum/,"Laws of motion"],[/surface tension|liquid drop/,"Mechanical properties of fluids"],[/dimension|dimensional formula/,"Units and dimensions"]],
      Chemistry:[[/nernst|electrochem|reaction quotient/,"Electrochemistry"],[/pH|conjugate base|dilute acid|acid and base/,"Equilibrium"],[/hybridisation|hybridization|bf3|molecular orbital|chemical bond/,"Chemical bonding"],[/first.order reaction|half.life|rate constant/,"Chemical kinetics"],[/oxidation number|redox/,"Redox reactions"],[/molar concentration|osmotic pressure|solution/,"Solutions"],[/hydrocarbon|organic compound/,"Organic chemistry"]],
      Biology:[[/dna|okazaki|genetic|cross between|offspring/,"Genetics and inheritance"],[/mitochondri|atp production/,"Cell: the unit of life"],[/photosynth|oxygenic photosynthesis/,"Photosynthesis in higher plants"],[/nephron|reabsorption|renal/,"Excretory products and elimination"],[/haemoglobin|hemoglobin|red blood cells|oxygen transport/,"Body fluids and circulation"],[/double fertilisation|flowering plant|zygote|endosperm/,"Sexual reproduction in flowering plants"],[/ecosystem|decomposer|nutrient/,"Ecosystem"],[/enzyme|polypeptide|peptide bond|amino acid/,"Biomolecules"]],
      "Computer Science":[[/mutable|tuple|string|python|list/,"Python programming"],[/sql|database/,"Database concepts"]]
    };
    for(const [re,topic] of rules[subject]||[])if(re.test(q))return topic;
    return "";
  }
  function chapterFor(topic,subject){
    const t=norm(topic),rules=[
      [/electric charges and fields|coulomb|electric charge/,"Electric Charges and Fields"],[/motion in a plane|projectile/,"Motion in a Plane"],[/motion in a straight line/,"Motion in a Straight Line"],[/current electricity|resistor|ohm/,"Current Electricity"],[/ray optics|lens|mirror|focal length/,"Ray Optics and Optical Instruments"],[/kinetic theory|gas laws/,"Kinetic Theory"],[/laws of motion|impulse|momentum/,"Laws of Motion"],[/mechanical properties of fluids|surface tension/,"Mechanical Properties of Fluids"],[/units and dimensions/,"Units and Measurements"],[/differential equations/,"Differential Equations"],[/differentiation|limits/,"Continuity and Differentiability"],[/integrals/,"Integrals"],[/arithmetic progressions/,"Sequences and Series"],[/determinants/,"Determinants"],[/matrices/,"Matrices"],[/quadratic equations/,"Quadratic Equations"],[/linear equations/,"Pair of Linear Equations"],[/probability/,"Probability"],[/real numbers/,"Real Numbers"],[/complex numbers/,"Complex Numbers"],[/electrochemistry/,"Electrochemistry"],[/equilibrium/,"Equilibrium"],[/chemical bonding/,"Chemical Bonding and Molecular Structure"],[/chemical kinetics/,"Chemical Kinetics"],[/redox reactions/,"Redox Reactions"],[/solutions/,"Solutions"],[/organic chemistry/,"Organic Chemistry"],[/genetics and inheritance/,"Principles of Inheritance and Variation"],[/cell: the unit of life/,"Cell: The Unit of Life"],[/photosynthesis/,"Photosynthesis in Higher Plants"],[/excretory products/,"Excretory Products and Their Elimination"],[/body fluids/,"Body Fluids and Circulation"],[/sexual reproduction/,"Sexual Reproduction in Flowering Plants"],[/ecosystem/,"Ecosystem"],[/biomolecules/,"Biomolecules"],[/python programming/,"Computer Science: Programming"],[/database concepts/,"Database Concepts"]
    ];
    for(const [re,name] of rules)if(re.test(t))return name;
    return subject+" · Mixed syllabus revision";
  }
  function taxonomy(review,exam){
    const question=clean(review.question||review.q);
    const subject=clean(review.subject)||inferSubject(question,exam);
    let topic=clean(review.topic);
    if(!topic||norm(topic)==="mixed syllabus revision")topic=inferTopic(question,subject)||topic;
    if(!subject||!topic||norm(topic)==="mixed syllabus revision")return null;
    const chosen=review.chosen,correct=review.correct;
    return{subject,chapter:clean(review.chapter)||chapterFor(topic,subject),topic,isCorrect:chosen!==undefined&&chosen!==null&&Number(chosen)===Number(correct)};
  }
  function buildMatrix(){
    const history=readJSON(HISTORY_KEY,[]);if(!Array.isArray(history))return[];
    const groups=new Map();
    history.forEach(result=>{if(!result||!Array.isArray(result.review))return;result.review.forEach(review=>{
      const row=taxonomy(review,result.exam);if(!row)return;
      const key=[row.subject,row.chapter,row.topic].map(norm).join("\u001f");
      let entry=groups.get(key);if(!entry){entry={subject:row.subject,chapter:row.chapter,topic:row.topic,totalAttempts:0,correctAttempts:0};groups.set(key,entry);}
      entry.totalAttempts++;if(row.isCorrect)entry.correctAttempts++;
    });});
    return[...groups.values()].map(x=>({...x,accuracy:x.correctAttempts/x.totalAttempts,incorrectAttempts:x.totalAttempts-x.correctAttempts}))
      .sort((a,b)=>a.accuracy-b.accuracy||b.totalAttempts-a.totalAttempts);
  }
  function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
  async function fetchBenchmark(topic){
    const url=new URL("/api/v2/analytics/benchmarks",WORKER);url.search=new URLSearchParams({subject:topic.subject,chapter:topic.chapter,topic:topic.topic}).toString();
    try{const res=await fetch(url,{headers:{Accept:"application/json"},cache:"no-store"});if(!res.ok)throw new Error("unavailable");return await res.json();}catch(_){return null;}
  }
  function renderTopics(matrix){
    const root=$("smartSystemTopics");if(!root)return;root.replaceChildren();
    weakTopics=matrix.filter(x=>x.totalAttempts>0&&x.accuracy<0.5).slice(0,5);
    const taskBtn=$("smartCreateTaskBtn");if(taskBtn)taskBtn.disabled=weakTopics.length===0;
    if(!matrix.length){root.appendChild(node("p","tiny","No topic-labelled attempts found yet. Finish another JEE/NEET practice mock; new results now retain subject and topic labels."));return;}
    if(!weakTopics.length){root.appendChild(node("p","tiny","No tracked topic is below 50% accuracy. Keep practising and revisit after your next mock."));return;}
    weakTopics.forEach(topic=>{
      const item=node("article","smart-topic-item"),head=node("div","smart-topic-heading");
      head.append(node("strong","",topic.topic),node("span","smart-topic-accuracy",Math.round(topic.accuracy*100)+"% accuracy"));
      item.append(head,node("p","tiny",topic.subject+" · "+topic.chapter+" · "+topic.totalAttempts+" recorded attempts"));
      const bench=node("p","tiny smart-topic-benchmark","Checking community benchmark…");item.append(bench);topic.benchmarkNode=bench;root.append(item);
    });
    weakTopics.slice(0,3).forEach(async topic=>{
      const b=await fetchBenchmark(topic),target=topic.benchmarkNode;if(!target||!target.isConnected)return;
      if(b&&b.available&&typeof b.incorrectPercent==="number")target.textContent=Math.round(b.incorrectPercent)+"% of recorded community attempts on this topic were incorrect. You're not alone—keep practising.";
      else if(b&&b.reason==="insufficient_sample")target.textContent="A community benchmark appears after at least "+(b.minimumAttempts||20)+" recorded attempts.";
      else target.textContent="Community benchmarks are offline for now; your local study analysis still works.";
    });
  }
  function analyze(){
    const status=$("smartSystemStatus");if(status)status.textContent="Reviewing completed test history stored on this device…";
    const matrix=buildMatrix();renderTopics(matrix);
    if(status)status.textContent=matrix.length?"Found "+matrix.length+" topic groups from local practice. Individual responses stay in this browser.":"No topic-labelled attempts yet; complete a topic-tagged practice mock to start your local weakness matrix.";
  }
  function dayKey(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
  function addTask(){
    const topic=weakTopics[0];if(!topic){analyze();return;}
    const now=new Date(),old=readJSON(PLANNER_KEY,[]),tasks=Array.isArray(old)?old:[];
    if(tasks.some(t=>t&&t.smartLoop===true&&norm(t.smartTopic)===norm(topic.topic)&&norm(t.smartSubject)===norm(topic.subject)&&!t.completed&&Date.now()-Date.parse(t.createdAt||"")<86400000)){
      const status=$("smartSystemStatus");if(status)status.textContent="A smart review task for "+topic.topic+" is already on your plan.";return;
    }
    const task={id:"kp-smart-"+(typeof crypto.randomUUID==="function"?crypto.randomUUID():Date.now().toString(36)),title:"Review "+topic.topic+" & try 5 practice questions",subject:topic.subject,dueDate:dayKey(now),minutes:25,priority:"high",completed:false,createdAt:now.toISOString(),completedAt:null,smartLoop:true,smartSubject:topic.subject,smartChapter:topic.chapter,smartTopic:topic.topic,description:"Review "+topic.topic+" in "+topic.chapter+", then solve five practice questions. Current local accuracy: "+Math.round(topic.accuracy*100)+"%."};
    try{localStorage.setItem(PLANNER_KEY,JSON.stringify([task,...tasks].slice(0,120)));window.dispatchEvent(new CustomEvent("kp:planner-updated"));const status=$("smartSystemStatus");if(status)status.textContent="Added to your local planner: "+task.title+". It is saved only on this device.";}
    catch(_){const status=$("smartSystemStatus");if(status)status.textContent="Could not save the task; browser storage may be full.";}
  }
  function init(){
    $("smartAnalyzeBtn")?.addEventListener("click",analyze);
    $("smartCreateTaskBtn")?.addEventListener("click",addTask);
    window.addEventListener("kp:results-updated",analyze);
    analyze();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
