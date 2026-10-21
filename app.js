(function(){
"use strict";
const $=function(id){return document.getElementById(id);};
const questions=[
{id:"cbse10",title:"CBSE Foundation · Class 10",exam:"CBSE",level:"Foundation",duration:8,mark:1,desc:"A short mixed-subject set for revision.",qs:[
{q:"The pair of linear equations 2x + 3y = 12 and x - y = 1 has solution:",o:["x=3, y=2","x=2, y=3","x=4, y=1","x=1, y=4"],a:0,e:"From x−y=1, x=y+1. Substitution gives 2(y+1)+3y=12, so y=2 and x=3."},
{q:"Which gas is generally released when a reactive metal reacts with a dilute acid?",o:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],a:1,e:"A reactive metal and dilute acid commonly form a salt and hydrogen gas."},
{q:"In a democratic system, universal adult franchise means:",o:["Only taxpayers vote","Every adult citizen meeting legal eligibility can vote","Only graduates vote","Voting is limited to public employees"],a:1,e:"Universal adult franchise provides voting rights to eligible adult citizens without wealth or education tests."},
{q:"A device rated 60 W is used for 2 hours. Electrical energy consumed is:",o:["30 Wh","120 Wh","62 Wh","0.03 Wh"],a:1,e:"Energy = power × time = 60 W × 2 h = 120 Wh."},
{q:"Choose the correctly spelled word.",o:["Enviroment","Environment","Envirnoment","Environmant"],a:1,e:"Environment is the correct spelling."}]},
{id:"jee1",title:"JEE Main · Challenge Set 01",exam:"JEE Main",level:"Hard",duration:10,mark:4,desc:"Original mixed Physics, Chemistry and Mathematics questions.",qs:[
{q:"If the roots of x² − 5x + k = 0 differ by 1, then k equals:",o:["4","6","25/4","24/4"],a:1,e:"For roots r,s: r+s=5 and |r−s|=1. rs=((r+s)²−(r−s)²)/4=(25−1)/4=6."},
{q:"A particle moves with velocity v=3t²−4t m/s. Its acceleration at t=2 s is:",o:["4 m/s²","8 m/s²","12 m/s²","16 m/s²"],a:1,e:"Acceleration dv/dt=6t−4. At t=2, a=12−4=8 m/s²."},
{q:"For a first-order reaction, the half-life is:",o:["Directly proportional to initial concentration","Inversely proportional to initial concentration","Independent of initial concentration","Always zero-order"],a:2,e:"For a first-order process t½=0.693/k, independent of initial concentration."},
{q:"For a projectile launched at speed u at angle θ on level ground, the range is:",o:["u² sinθ/g","u² sin2θ/g","2u sinθ/g","u cosθ/g"],a:1,e:"The time of flight is 2u sinθ/g; multiplying by horizontal speed u cosθ gives R=u²sin2θ/g."},
{q:"If z=1+i, then |z²| is:",o:["1","2","√2","4"],a:1,e:"|z²|=|z|² and |1+i|=√2, so |z²|=2."}]},
{id:"jee2",title:"JEE Main · Challenge Set 02",exam:"JEE Main",level:"Hard",duration:10,mark:4,desc:"More original questions with calculation-focused reasoning.",qs:[
{q:"The derivative of ln(x²+1) with respect to x is:",o:["1/(x²+1)","2x/(x²+1)","2/(x²+1)","x ln(x)"],a:1,e:"Apply the chain rule: derivative ln(f)=f′/f, giving 2x/(x²+1)."},
{q:"A 4 Ω resistor carries 3 A. The power dissipated is:",o:["12 W","24 W","36 W","48 W"],a:2,e:"P=I²R=9×4=36 W."},
{q:"The conjugate base of H₂PO₄⁻ after losing one proton is:",o:["H₃PO₄","HPO₄²⁻","PO₄³⁻","H₂PO₃⁻"],a:1,e:"Loss of H⁺ from H₂PO₄⁻ produces HPO₄²⁻."},
{q:"The determinant of [[2,1],[5,3]] is:",o:["1","6","11","−1"],a:0,e:"For a 2×2 matrix, determinant = ad−bc = 2×3−1×5=1."},
{q:"An ideal gas expands isothermally. Its internal energy change is:",o:["Positive","Negative","Zero","Equal to work always"],a:2,e:"For an ideal gas, internal energy depends only on temperature; isothermal means ΔT=0."}]},
{id:"jee3",title:"JEE Main · Challenge Set 03",exam:"JEE Main",level:"Hard",duration:10,mark:4,desc:"Mixed entrance-style problems created for this website.",qs:[
{q:"The sum of the first n terms of an arithmetic progression is n(3n+1). Its nth term is:",o:["6n−2","6n+1","3n+1","3n−2"],a:0,e:"aₙ=Sₙ−Sₙ₋₁. n(3n+1)−(n−1)(3n−2)=6n−2."},
{q:"For an object at the centre of curvature of a concave mirror, the image is:",o:["Virtual and magnified","Real, inverted and same size","Virtual and same size","Real and erect"],a:1,e:"An object at C forms a real, inverted image of the same size at C."},
{q:"The hybridisation of the central atom in BF₃ is:",o:["sp","sp²","sp³","dsp²"],a:1,e:"BF₃ has three bonding regions and trigonal planar geometry, corresponding to sp² hybridisation."},
{q:"If A and B are independent events with P(A)=0.4 and P(B)=0.5, P(A∩B) is:",o:["0.1","0.2","0.4","0.9"],a:1,e:"For independent events, P(A∩B)=P(A)P(B)=0.4×0.5=0.2."},
{q:"The dimensional formula of impulse is:",o:["[MLT⁻¹]","[ML²T⁻²]","[MLT⁻²]","[M⁰LT⁻¹]"],a:0,e:"Impulse = force×time = change in momentum, with dimensions [MLT⁻¹]."}]},
{id:"neet1",title:"NEET UG · Challenge Set 01",exam:"NEET UG",level:"Hard",duration:10,mark:4,desc:"Original mixed Biology, Chemistry and Physics questions.",qs:[
{q:"The enzyme that joins Okazaki fragments during DNA replication is:",o:["Helicase","DNA ligase","Primase","Topoisomerase"],a:1,e:"DNA ligase seals the nicks between adjacent DNA fragments."},
{q:"Which cell organelle is the main site of aerobic ATP production?",o:["Lysosome","Golgi apparatus","Mitochondrion","Ribosome"],a:2,e:"The mitochondrion hosts the citric acid cycle and oxidative phosphorylation in eukaryotic cells."},
{q:"A solution with pH 3 has hydrogen-ion concentration:",o:["10⁻³ mol L⁻¹","10³ mol L⁻¹","3 mol L⁻¹","10⁻¹¹ mol L⁻¹"],a:0,e:"pH=−log₁₀[H⁺], so [H⁺]=10⁻³ mol L⁻¹."},
{q:"The SI unit of electric potential difference is:",o:["Coulomb","Ohm","Volt","Tesla"],a:2,e:"Potential difference is measured in volts."},
{q:"In flowering plants, double fertilisation produces:",o:["Two embryos","Zygote and primary endosperm nucleus","Two zygotes","Only endosperm"],a:1,e:"One male gamete forms the zygote; the other fuses with the central cell nuclei to form the primary endosperm nucleus."}]},
{id:"neet2",title:"NEET UG · Challenge Set 02",exam:"NEET UG",level:"Hard",duration:10,mark:4,desc:"Further original questions to practise concepts under time pressure.",qs:[
{q:"The oxygen released during oxygenic photosynthesis comes from:",o:["Carbon dioxide","Glucose","Water","Chlorophyll"],a:2,e:"Photolysis of water supplies electrons and releases oxygen."},
{q:"In a typical mammalian nephron, the greatest reabsorption of filtered water and solutes occurs in the:",o:["Proximal convoluted tubule","Collecting duct only","Bowman's capsule","Renal pelvis"],a:0,e:"The proximal convoluted tubule reabsorbs the largest share of filtrate under normal conditions."},
{q:"For an ideal gas at constant temperature, Boyle's law states:",o:["V/T is constant","P/V is constant","PV is constant","P/T is constant"],a:2,e:"At fixed temperature and gas amount, pressure is inversely proportional to volume, so PV is constant."},
{q:"Which bond connects amino acids within a polypeptide chain?",o:["Glycosidic bond","Peptide bond","Phosphodiester bond","Hydrogen bond only"],a:1,e:"Peptide bonds form between the amino group of one amino acid and carboxyl group of another."},
{q:"The main function of haemoglobin in red blood cells is to:",o:["Digest fats","Transport oxygen","Produce antibodies","Filter urea"],a:1,e:"Haemoglobin binds oxygen reversibly and transports it from lungs to tissues."}]},
{id:"neet3",title:"NEET UG · Challenge Set 03",exam:"NEET UG",level:"Hard",duration:10,mark:4,desc:"A final set of original Biology, Physics and Chemistry questions.",qs:[
{q:"A cross between Aa and Aa, under complete dominance, gives what probability of aa offspring?",o:["0","1/4","1/2","3/4"],a:1,e:"The genotype ratio is 1 AA : 2 Aa : 1 aa; the probability of aa is 1/4."},
{q:"The hormone that lowers blood glucose by promoting uptake and storage is:",o:["Glucagon","Adrenaline","Insulin","Thyroxine"],a:2,e:"Insulin promotes glucose uptake and storage and generally lowers blood glucose."},
{q:"A lens has focal length +0.5 m. Its power is:",o:["+0.5 D","+2 D","−2 D","+5 D"],a:1,e:"Power P=1/f in metres =1/0.5=+2 dioptres."},
{q:"The oxidation number of manganese in KMnO₄ is:",o:["+2","+4","+6","+7"],a:3,e:"K is +1 and four oxygens total −8, so Mn must be +7 for a neutral compound."},
{q:"The principal role of decomposers in an ecosystem is to:",o:["Fix solar energy","Recycle nutrients from organic matter","Produce all oxygen","Stop food chains"],a:1,e:"Decomposers break down organic matter and return nutrients to ecosystems."}]}
];
let active=null,tick=null,lastAnswerText="";
function safe(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.remove("hidden");setTimeout(function(){el.classList.add("hidden");},3200);}
function subjectName(){return $("subject").value==="other"?$("otherSubject").value.trim():$("subject").value;}
$("subject").addEventListener("change",function(){$("otherSubjectWrap").hidden=$("subject").value!=="other";});
function renderTests(){const grid=$("testGrid");grid.innerHTML="";questions.forEach(function(t){const card=document.createElement("article");card.className="test-card";card.dataset.exam=t.exam;const cls=t.exam==="NEET UG"?"teal":t.exam==="CBSE"?"orange":"";card.innerHTML='<span class="tag '+cls+'">'+safe(t.exam)+" · "+safe(t.level)+'</span><h3>'+safe(t.title)+'</h3><p>'+safe(t.desc)+'</p><div class="test-meta"><span>◷ '+t.duration+' min</span><span>▦ '+t.qs.length+' questions</span><span>Practice set</span></div><button class="btn btn-blue" type="button" data-start="'+t.id+'">Start test ↗</button>';grid.appendChild(card);});}
function renderStudyText(answer){const out=$("studyOutput");out.innerHTML=markdownToHtml(answer);lastAnswerText=answer;$("copyAnswer").disabled=!answer;if($("saveStudyPdf"))$("saveStudyPdf").disabled=!answer;}
$("copyAnswer").addEventListener("click",async function(){if(!lastAnswerText)return;try{await navigator.clipboard.writeText(lastAnswerText);toast("Study text copied.");}catch(e){toast("Copy was blocked by this browser.");}});
const subjectSets={
 "Class 10":["Mathematics","Science","English","Social Science","Hindi","Computer Applications","Physical Education","Other subject / language…"],
 "Class 11":["Mathematics","Physics","Chemistry","Biology","English","Computer Science","Informatics Practices","Accountancy","Business Studies","Economics","Political Science","History","Geography","Psychology","Sociology","Physical Education","Hindi","Applied Mathematics","Other subject / language…"],
 "Class 12":["Mathematics","Physics","Chemistry","Biology","English","Computer Science","Informatics Practices","Accountancy","Business Studies","Economics","Political Science","History","Geography","Psychology","Sociology","Physical Education","Hindi","Applied Mathematics","Other subject / language…"]
};
const topicCatalog={
 "Mathematics":["Real numbers and proofs","Polynomials and zeroes","Linear equations","Quadratic equations","Arithmetic progressions","Triangles and similarity","Coordinate geometry","Trigonometry","Statistics and probability","Sets and functions","Complex numbers","Permutations and combinations","Limits and derivatives","Matrices and determinants","Integrals and applications","Differential equations","Vectors and 3D geometry","Probability distributions"],
 "Science":["Chemical reactions and equations","Acids, bases and salts","Metals and non-metals","Life processes","Control and coordination","Light and refraction","Electricity and circuits","Magnetic effects of current","Our environment"],
 "Physics":["Motion and graphs","Newton's laws of motion","Work, energy and power","System of particles and rotation","Gravitation","Thermodynamics","Oscillations and waves","Electric charges and fields","Current electricity","Magnetic effects","Electromagnetic induction","Ray optics","Wave optics","Dual nature of radiation","Semiconductors"],
 "Chemistry":["Atomic structure","Periodic classification","Chemical bonding","States of matter","Thermodynamics","Equilibrium","Redox reactions","Organic chemistry basics","Hydrocarbons","Solutions","Electrochemistry","Chemical kinetics","Coordination compounds","Aldehydes and ketones","Biomolecules"],
 "Biology":["Cell structure and function","Biomolecules","Cell cycle and division","Plant physiology","Human physiology","Genetics and inheritance","Molecular basis of inheritance","Evolution","Human reproduction","Reproductive health","Biotechnology","Ecology and ecosystems"],
 "English":["Reading comprehension","Writing skills","Grammar and editing","Poetry analysis","Prose and themes","Character and setting","Argumentative writing","Literature revision"],
 "Social Science":["Nationalism and history","Resources and development","Power sharing","Federalism","Agriculture","Money and credit","Globalisation","Sustainable development","Map skills"],
 "Computer Applications":["Python fundamentals","Conditional statements","Loops","Functions","Strings and lists","Cyber safety","HTML and web basics","Networks and internet"],
 "Computer Science":["Python functions","Lists and dictionaries","Stacks and queues","SQL queries","Database concepts","Computer networks","Boolean logic","Cyber security"],
 "Informatics Practices":["Pandas series","Data frames","Data visualisation","SQL queries","Database concepts","Computer networks","Societal impacts"],
 "Accountancy":["Accounting equation","Journal and ledger","Trial balance","Depreciation","Bank reconciliation","Financial statements","Cash flow statement","Ratio analysis"],
 "Business Studies":["Nature of management","Principles of management","Business environment","Planning and organising","Staffing and directing","Marketing management","Financial management"],
 "Economics":["Consumer equilibrium","Demand and elasticity","Production and costs","Market forms","National income","Money and banking","Government budget","Balance of payments"],
 "Political Science":["Constitution and rights","Federalism","Legislature and executive","Political theory","Globalisation","Contemporary world politics"],
 "History":["Early societies","Empires and trade","Colonialism","National movement","World wars","Modern India"],
 "Geography":["Resources and development","Landforms and processes","Climate","Population","Agriculture","Human settlements","Transport and communication"],
 "Psychology":["Learning and memory","Human development","Motivation and emotion","Personality","Psychological disorders","Stress and coping"],
 "Sociology":["Social institutions","Culture and identity","Social stratification","Social change","Indian society"],
 "Physical Education":["Fitness and wellness","Training methods","Sports psychology","Nutrition","Yoga and lifestyle"],
 "Hindi":["अपठित गद्यांश","व्याकरण और लेखन","काव्य की व्याख्या","गद्य साहित्य","अभिव्यक्ति और माध्यम"],
 "Applied Mathematics":["Financial mathematics","Matrices","Probability distributions","Descriptive statistics","Linear programming","Calculus applications"],
 "Other subject / language…":["Reading and comprehension","Grammar practice","Writing practice","Key concepts and vocabulary"]
};
function topicsFor(level,subject){
 let topics=(topicCatalog[subject]||["Key definitions and concepts","Important examples","Core formulas or facts","Common exam questions","Application-based questions","Quick revision"]);
 if(level==="Class 10"&&subject==="Mathematics")topics=["Real numbers","Polynomials","Pair of linear equations","Quadratic equations","Arithmetic progressions","Triangles","Coordinate geometry","Trigonometry","Circles","Statistics and probability"];
 if(level==="Class 11"&&subject==="Mathematics")topics=["Sets","Relations and functions","Trigonometric functions","Complex numbers","Linear inequalities","Permutations and combinations","Binomial theorem","Sequences and series","Straight lines","Limits and derivatives","Statistics","Probability"];
 if(level==="Class 12"&&subject==="Mathematics")topics=["Relations and functions","Inverse trigonometric functions","Matrices","Determinants","Continuity and differentiability","Applications of derivatives","Integrals","Applications of integrals","Differential equations","Vectors","3D geometry","Linear programming","Probability"];
 if(level==="Class 10"&&subject==="Science")topics=["Chemical reactions and equations","Acids, bases and salts","Metals and non-metals","Life processes","Control and coordination","Reproduction","Heredity","Light","The human eye","Electricity","Magnetic effects of current","Our environment"];
 const classTopics={
  "Class 11":{
   "Physics":["Units and measurements","Motion in a straight line","Motion in a plane","Laws of motion","Work, energy and power","System of particles and rotation","Gravitation","Mechanical properties","Thermodynamics","Oscillations and waves"],
   "Chemistry":["Some basic concepts of chemistry","Structure of atom","Periodicity","Chemical bonding","Thermodynamics","Equilibrium","Redox reactions","Organic chemistry basics","Hydrocarbons"],
   "Biology":["The living world","Biological classification","Plant kingdom","Animal kingdom","Cell structure and function","Biomolecules","Cell cycle and division","Plant physiology","Human physiology"],
   "English":["Reading comprehension","Class 11 prose and poetry analysis","Writing skills","Grammar and editing","Character and theme analysis","Short-answer practice"],
   "Computer Science":["Python basics","Data types and operators","Conditional statements","Loops","Strings and lists","Dictionaries and tuples","Functions","Computer systems"],
   "Informatics Practices":["Python basics","Data handling with Pandas","Series and data frames","Data visualisation","Database concepts","SQL fundamentals","Computer networks"],
   "Accountancy":["Accounting concepts","Accounting equation","Journal entries","Ledger posting","Trial balance","Bank reconciliation","Depreciation"],
   "Business Studies":["Nature and purpose of business","Forms of business organisation","Public and private enterprises","Business services","Emerging modes of business","Social responsibility"],
   "Economics":["Introduction to microeconomics","Consumer behaviour","Demand and elasticity","Production function","Cost concepts","Market equilibrium","Statistics for economics"],
   "History":["Early societies","Writing and city life","Empires and trade","Nomadic empires","Changing cultural traditions"],
   "Political Science":["Constitutional design","Rights and citizenship","Legislature and executive","Federalism","Political theory","Justice and equality"],
   "Geography":["Fundamentals of physical geography","Earth's interior","Landforms","Climate","Oceans","Natural hazards"]
  },
  "Class 12":{
   "Physics":["Electric charges and fields","Electrostatic potential and capacitance","Current electricity","Moving charges and magnetism","Electromagnetic induction","Alternating current","Ray optics","Wave optics","Dual nature of radiation","Semiconductors"],
   "Chemistry":["Solutions","Electrochemistry","Chemical kinetics","d- and f-block elements","Coordination compounds","Haloalkanes and haloarenes","Alcohols and phenols","Aldehydes and ketones","Amines","Biomolecules"],
   "Biology":["Reproduction in organisms","Sexual reproduction in flowering plants","Human reproduction","Reproductive health","Mendelian genetics","Molecular basis of inheritance","Evolution","Human health and disease","Biotechnology","Ecosystems"],
   "English":["Class 12 prose and poetry analysis","Reading comprehension","Formal writing","Article and report writing","Literary themes and characterisation","Board-style answer structure"],
   "Computer Science":["Python functions","File handling","Stack operations","Searching and sorting","SQL queries","Database connectivity","Computer networks","Cyber safety"],
   "Informatics Practices":["Data visualisation","Data frames and operations","Data handling with Pandas","SQL queries","Database connectivity","Computer networks","Societal impacts"],
   "Accountancy":["Partnership fundamentals","Reconstitution of partnership","Dissolution of partnership","Company accounts","Issue of shares","Cash flow statement","Financial statement analysis","Accounting ratios"],
   "Business Studies":["Principles of management","Business environment","Planning and organising","Staffing and directing","Financial management","Marketing management","Consumer protection"],
   "Economics":["National income accounting","Money and banking","Determination of income and employment","Government budget","Balance of payments","Indian economic development"],
   "History":["Harappan civilisation","Kings, farmers and towns","Bhakti and Sufi traditions","Colonialism and rural society","Revolt of 1857","National movement","Constitution making"],
   "Political Science":["End of bipolarity","Contemporary centres of power","South Asia","International organisations","Globalisation","Challenges of nation-building","Recent developments in Indian politics"],
   "Geography":["Human geography","Population composition","Human development","Primary activities","Transport and communication","International trade","Geographical planning"]
  }
 };
 if(classTopics[level]&&classTopics[level][subject])topics=classTopics[level][subject];
 else if(level==="Class 11"&&subject==="Mathematics")topics=["Sets","Relations and functions","Trigonometric functions","Complex numbers","Linear inequalities","Permutations and combinations","Binomial theorem","Sequences and series","Straight lines","Limits and derivatives","Statistics","Probability"];
 else if(level==="Class 12"&&subject==="Mathematics")topics=["Relations and functions","Inverse trigonometric functions","Matrices","Determinants","Continuity and differentiability","Applications of derivatives","Integrals","Applications of integrals","Differential equations","Vectors","3D geometry","Linear programming","Probability"];
 return topics;
}
function fillSubjects(select,level,selected){
 if(!select)return;
 const values=subjectSets[level]||subjectSets["Class 10"];
 select.innerHTML="";
 values.forEach(function(value){const option=document.createElement("option");option.value=value==="Other subject / language…"?"other":value;option.textContent=value;select.appendChild(option);});
 if(selected&&values.some(function(v){return(v==="Other subject / language…"?"other":v)===selected;}))select.value=selected;
}
function addTopicChips(root,level,subject,onChoose,compact){
 if(!root)return;
 root.innerHTML="";
 topicsFor(level,subject).slice(0,compact?7:9).forEach(function(topic){
  const button=document.createElement("button");button.type="button";button.className=compact?"chat-topic-button":"topic-chip";button.textContent=topic;
  button.addEventListener("click",function(){onChoose(topic);});root.appendChild(button);
 });
}
function updateHubTopics(){
 const level=$("classLevel").value;
 const subject=subjectName()||$("subject").value;
 addTopicChips($("topicSuggestions"),level,subject,function(topic){$("topic").value=topic;$("topic").focus();},false);
 $("chapter").placeholder=level==="Class 10"?"e.g. Light – Reflection and Refraction":level==="Class 11"?"e.g. Motion in a Straight Line":"e.g. Integrals";
}
function updateChatTopics(){
 const level=$("chatClass").value,subject=$("chatSubject").value;
 addTopicChips($("chatTopicSuggestions"),level,subject,function(topic){
  $("chatInput").value="Help me understand "+topic+". Explain it clearly for "+level+", use an example, and end with one quick self-check.";
  $("chatInput").focus();
 },true);
}
function mapSubjectToClass(subject,level){
 const target=subjectSets[level]||subjectSets["Class 10"];
 let mapped=subject;
 if(level==="Class 10"){
  if(["Physics","Chemistry","Biology"].includes(subject))mapped="Science";
  else if(["Computer Science","Informatics Practices"].includes(subject))mapped="Computer Applications";
  else if(subject==="Applied Mathematics")mapped="Mathematics";
  else if(["Accountancy","Business Studies","Economics","Political Science","History","Geography","Psychology","Sociology"].includes(subject))mapped="other";
 }else{
  if(subject==="Science")mapped="Physics";
  else if(subject==="Computer Applications")mapped="Computer Science";
  else if(subject==="Social Science")mapped="History";
 }
 if(!target.some(function(s){return (s==="Other subject / language…"?"other":s)===mapped;}))mapped=target[0];
 return mapped;
}
function syncClass(source){
 const level=source.value;
 if(source===$("classLevel"))$("chatClass").value=level;else $("classLevel").value=level;
 const previousHub=mapSubjectToClass($("subject")?.value||"Mathematics",level);
 const previousChat=mapSubjectToClass($("chatSubject")?.value||"Mathematics",level);
 fillSubjects($("subject"),level,previousHub);
 fillSubjects($("chatSubject"),level,previousChat);
 $("otherSubjectWrap").hidden=$("subject").value!=="other";
 updateHubTopics();updateChatTopics();
}
$("classLevel").addEventListener("change",function(){syncClass(this);});
$("chatClass").addEventListener("change",function(){syncClass(this);});
$("subject").addEventListener("change",function(){$("otherSubjectWrap").hidden=$("subject").value!=="other";updateHubTopics();});
$("chatSubject").addEventListener("change",updateChatTopics);
$("topic").addEventListener("input",function(){});
async function streamStudyRequest(payload,onText,signal){
 const response=await fetch("/api/study-guide",{method:"POST",headers:{"content-type":"application/json","accept":"text/event-stream, application/json"},body:JSON.stringify(Object.assign({},payload,{stream:true})),signal:signal});
 const contentType=response.headers.get("content-type")||"";
 if(!response.ok){const errorData=await response.json().catch(function(){return{};});throw new Error(errorData.error||"The AI guide is currently unavailable (HTTP "+response.status+").");}
 if(!response.body||!contentType.includes("text/event-stream")){
  const data=await response.json();if(data.error)throw new Error(data.error);const text=String(data.text||"");if(text)onText(text);return text;
 }
 const reader=response.body.getReader(),decoder=new TextDecoder();
 let pending="",answer="",streamError=null;
 function consume(line){
  if(!line.startsWith("data:"))return;
  const raw=line.slice(5).trim();if(!raw||raw==="[DONE]")return;
  let event;try{event=JSON.parse(raw);}catch(e){return;}
  if(event.error){streamError=new Error(typeof event.error==="string"?event.error:(event.error.message||"The AI provider stopped the response."));return;}
  const choice=event.choices&&event.choices[0];
  const piece=choice&&choice.delta&&choice.delta.content;
  const text=typeof piece==="string"?piece:(typeof event.text==="string"?event.text:"");
  if(text){answer+=text;onText(text);}
 }
 while(true){
  const result=await reader.read();pending+=decoder.decode(result.value||new Uint8Array(),{stream:!result.done});
  const lines=pending.split(/\r?\n/);pending=lines.pop()||"";
  lines.forEach(consume);
  if(streamError)throw streamError;
  if(result.done)break;
 }
 if(pending)consume(pending);
 if(streamError)throw streamError;
 if(!answer)throw new Error("The AI returned an empty response. Try a shorter question.");
 return answer;
}
function makePrompt(level,subject,chapter,mode,topic){
 const task=({"notes":"Create useful but compact chapter notes with headings, key ideas, definitions or formulas, one worked example, common mistakes and a recap.","explain":"Explain the concept in plain language, step by step, with one worked or everyday example and a short self-check.","revision":"Create a compact revision sheet with high-yield points, formulas or facts, common mistakes and five recall prompts.","questions":"Create five original practice questions, then provide their answers with short explanations.","solve":"Solve the learner's question step by step, show calculations and units, state assumptions, and check the result."})[mode]||"Explain this clearly with a short example.";
 return "Act as a careful CBSE study tutor. Student level: "+level+". Subject: "+subject+". Chapter: "+(chapter||"not specified")+". Task: "+task+"\nLearner request:\n"+topic+"\nBe accurate and age-appropriate. Keep the answer focused. Do not invent official citations or claim live syllabus verification.";
}
let lastStudyController=null;
$("studyForm").addEventListener("submit",async function(ev){
 ev.preventDefault();
 const topic=$("topic").value.trim(),subject=subjectName(),chapter=$("chapter").value.trim(),level=$("classLevel").value,mode=$("studyMode").value;
 if(!topic||!subject){toast("Choose a subject and a topic first.");return;}
 if(lastStudyController)lastStudyController.abort();
 lastStudyController=new AbortController();
 const controller=lastStudyController,btn=$("askBtn");btn.disabled=true;btn.textContent="Connecting…";
 $("sourceList").innerHTML="";$("studyOutput").textContent="Connecting to Kilo Auto Free…";lastAnswerText="";
 $("copyAnswer").disabled=true;if($("saveStudyPdf"))$("saveStudyPdf").disabled=true;
 try{
  const urls=($("sourceUrls")?.value||"").split(/\n|,/).map(function(u){return u.trim();}).filter(Boolean);
  const prompt=makePrompt(level,subject,chapter,mode,topic);
  const answer=await streamStudyRequest({prompt:prompt,urls:urls,mode:mode},function(delta){if(lastAnswerText==="")$("studyOutput").innerHTML="";lastAnswerText+="" + delta;renderMarkdownInto($("studyOutput"),lastAnswerText);$("copyAnswer").disabled=false;if($("saveStudyPdf"))$("saveStudyPdf").disabled=false;},controller.signal);
  lastAnswerText=answer;
  const note=document.createElement("p");note.className="tiny";note.textContent="Generated with Kilo Auto Free. Check important details against your textbook."; $("studyOutput").appendChild(note);
 }catch(err){
  if(err.name==="AbortError"){$("studyOutput").textContent="Response stopped.";}
  else{$("studyOutput").textContent="The AI could not complete this request.\n\n"+err.message+"\n\nTry a single focused question, or use the topic suggestions to narrow it down.";}
 }finally{if(lastStudyController===controller)lastStudyController=null;btn.disabled=false;btn.textContent="Generate study help ↗";}
});

function escapeHtml(value){return String(value==null?"":value).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function mathToHtml(raw){
 let s=String(raw||""),fr=[];
 const hold=function(h){const mark="\uE100"+fr.length+"\uE101";fr.push(h);return mark;};
 s=s.replace(/\\(?:,|;|:|!|\s)/g," ").replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g,(_,n,d)=>hold('<span class="math-fraction"><span>'+escapeHtml(n)+'</span><span>'+escapeHtml(d)+'</span></span>'));
 s=s.replace(/\\sqrt\s*\{([^{}]+)\}/g,"√($1)").replace(/\\(?:mathrm|text|mathbf|mathit)\{([^{}]*)\}/g,"$1").replace(/\\bar\s*\{?([A-Za-z])\}?/g,"$1̄");
 const symbols={Delta:"Δ",delta:"δ",theta:"θ",pi:"π",cdot:"·",times:"×",approx:"≈",neq:"≠",leq:"≤",geq:"≥",infty:"∞",mu:"μ",alpha:"α",beta:"β",gamma:"γ",lambda:"λ",omega:"ω",pm:"±",degree:"°",rightarrow:"→",Rightarrow:"⇒"};
 s=s.replace(/\\(Delta|delta|theta|pi|cdot|times|approx|neq|leq|geq|infty|mu|alpha|beta|gamma|lambda|omega|pm|degree|rightarrow|Rightarrow)\b/g,(_,k)=>symbols[k]||k);
 s=escapeHtml(s).replace(/_\{([^{}]+)\}|_([A-Za-z0-9])/g,"<sub>$1$2</sub>").replace(/\^\{([^{}]+)\}|\^([A-Za-z0-9])/g,"<sup>$1$2</sup>");
 return s.replace(/\uE100(\d+)\uE101/g,(_,n)=>fr[Number(n)]||"");
}
function inlineMarkdown(raw){
 const slots=[],hold=h=>{const mark="\uE000"+slots.length+"\uE001";slots.push(h);return mark;};
 let s=String(raw==null?"":raw).replace(/\x60([^\x60]+)\x60/g,(_,v)=>hold("<code>"+escapeHtml(v)+"</code>"));
 s=s.replace(/\\\[((?:.|\n)+?)\\\]/g,(_,m)=>hold('<span class="math-inline">'+mathToHtml(m)+'</span>'))
  .replace(/\\\(((?:.|\n)+?)\\\)/g,(_,m)=>hold('<span class="math-inline">'+mathToHtml(m)+'</span>'))
  .replace(/\$([^$\n]+)\$/g,(_,m)=>hold('<span class="math-inline">'+mathToHtml(m)+'</span>'));
 s=escapeHtml(s).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,(_,label,url)=>'<a href="'+escapeHtml(url.replace(/&amp;/g,"&"))+'" target="_blank" rel="noopener noreferrer">'+label+'</a>');
 s=s.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/\*([^*\n]+)\*/g,"<em>$1</em>");
 s=s.replace(/\uE000(\d+)\uE001/g,(_,n)=>slots[Number(n)]||"");
 return s.replace(/\n/g," ");
}
function splitTableRow(line){let s=String(line).trim();if(s.startsWith("|"))s=s.slice(1);if(s.endsWith("|"))s=s.slice(0,-1);return s.split("|").map(v=>v.trim());}
function isTableSeparator(line){return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line||"");}
function isListLine(line){return /^\s*(?:[-*+]|\d+[.)])\s+/.test(line||"");}
function isBlockStart(lines,i){const s=lines[i]||"";return /^\s{0,3}#{1,4}\s+/.test(s)||/^\s*(?:---+|\*\*\*+|___+)\s*$/.test(s)||/^\s*\x60{3}/.test(s)||/^\s*>/.test(s)||isListLine(s)||/^\s*(?:\$\$|\\\[)/.test(s)||(i+1<lines.length&&isTableSeparator(lines[i+1]));}
function markdownToHtml(markdown){
 const lines=String(markdown==null?"":markdown).replace(/\r\n?/g,"\n").split("\n"),out=[];let i=0;
 while(i<lines.length){
  const line=lines[i];if(!line.trim()){i++;continue;}
  if(/^\s*\x60{3}/.test(line)){const lang=(line.match(/^\s*\x60{3}([\w+-]*)/)||[])[1]||"text";i++;const code=[];while(i<lines.length&&!/^\s*\x60{3}/.test(lines[i]))code.push(lines[i++]);if(i<lines.length)i++;out.push('<pre class="md-code"><code class="language-'+escapeHtml(lang)+'">'+escapeHtml(code.join("\n"))+"</code></pre>");continue;}
  if(/^\s*(?:---+|\*\*\*+|___+)\s*$/.test(line)){out.push('<hr class="md-rule">');i++;continue;}
  if(/^\s*(?:\$\$|\\\[)/.test(line)){const opener=line.trim(),end=opener.startsWith("$$")?"$$":"\\]";let m=opener.startsWith("$$")?opener.replace(/^\$\$\s?/,"").replace(/\s?\$\$$/,""):opener.replace(/^\\\[\s?/,"").replace(/\s?\\\]$/,"");i++;if(!opener.endsWith(end)){while(i<lines.length&&!lines[i].trim().endsWith(end))m+=(m?"\n":"")+lines[i++];if(i<lines.length)m+=(m?"\n":"")+lines[i++].trim().replace(end,"");}out.push('<div class="md-math-block">'+mathToHtml(m)+"</div>");continue;}
  const h=line.match(/^\s{0,3}(#{1,4})\s+(.+?)\s*#*\s*$/);if(h){const n=h[1].length;out.push("<h"+n+' class="md-heading">'+inlineMarkdown(h[2])+"</h"+n+">");i++;continue;}
  if(i+1<lines.length&&isTableSeparator(lines[i+1])){const heads=splitTableRow(line),sep=splitTableRow(lines[i+1]);i+=2;const rows=[];while(i<lines.length&&lines[i].includes("|")&&lines[i].trim())rows.push(splitTableRow(lines[i++]));let t='<div class="md-table-wrap"><table class="md-table"><thead><tr>';heads.forEach((v,c)=>{const a=(sep[c]||"").startsWith(":")&&(sep[c]||"").endsWith(":")?"center":(sep[c]||"").endsWith(":")?"right":"left";t+='<th style="text-align:'+a+'">'+inlineMarkdown(v)+"</th>";});t+="</tr></thead><tbody>";rows.forEach(row=>{t+="<tr>";heads.forEach((_,c)=>t+="<td>"+inlineMarkdown(row[c]||"")+"</td>");t+="</tr>";});out.push(t+"</tbody></table></div>");continue;}
  if(isListLine(line)){const ordered=/^\s*\d+[.)]\s+/.test(line),tag=ordered?"ol":"ul",items=[];while(i<lines.length&&isListLine(lines[i])&&(/^\s*\d+[.)]\s+/.test(lines[i]))===ordered){items.push((lines[i].match(/^\s*(?:[-*+]|\d+[.)])\s+(.+)$/)||[])[1]||"");i++;}out.push("<"+tag+' class="md-list">'+items.map(v=>"<li>"+inlineMarkdown(v)+"</li>").join("")+"</"+tag+">");continue;}
  if(/^\s*>/.test(line)){const q=[];while(i<lines.length&&/^\s*>/.test(lines[i]))q.push(lines[i++].replace(/^\s*>\s?/,""));out.push('<blockquote class="md-quote">'+inlineMarkdown(q.join(" "))+"</blockquote>");continue;}
  const p=[line];i++;while(i<lines.length&&lines[i].trim()&&!isBlockStart(lines,i))p.push(lines[i++]);out.push('<p class="md-paragraph">'+inlineMarkdown(p.join("\n"))+"</p>");
 }
 return '<div class="md-content">'+out.join("")+"</div>";
}
function renderMarkdownInto(node,markdown){node.innerHTML=markdownToHtml(markdown);}

function printAsPdf(title,text){
 const mount=$("printMount");if(!mount){toast("PDF print area is unavailable.");return;}
 const previousTitle=document.title;document.title="KaushalPath - "+title;
 mount.innerHTML='<article class="print-document"><div class="print-kicker">KAUSHALPATH · LEARN WITH DIRECTION</div><h1>'+escapeHtml(title)+'</h1><p class="print-date">Created '+escapeHtml(new Date().toLocaleString())+'</p>'+markdownToHtml(text)+'<footer>Use generated study content as a learning aid. Verify important facts with official materials.</footer></article>';
 mount.style.display="block";
 const cleanup=function(){mount.innerHTML="";mount.style.display="none";document.title=previousTitle;window.removeEventListener("afterprint",cleanup);};
 window.addEventListener("afterprint",cleanup,{once:true});
 window.print();
 setTimeout(cleanup,12000);
}
$("saveStudyPdf").addEventListener("click",function(){if(lastAnswerText)printAsPdf("Study notes",lastAnswerText);});
let chatHistory=[],activeChatController=null,lastChatAnswer="",lastChatPrompt="",chatBusy=false;
function chatAddMessage(role,text){
 const welcome=$("chatMessages").querySelector(".chat-welcome");if(welcome)welcome.remove();
 const box=document.createElement("div");box.className="chat-message "+(role==="user"?"user":"assistant");
 const label=document.createElement("div");label.className="chat-message-label";label.textContent=role==="user"?"YOU":"KAUSHALPATH AI";
 const content=document.createElement("div");content.className="chat-message-content";content.textContent=text||"";
 box.appendChild(label);box.appendChild(content);$("chatMessages").appendChild(box);
 $("chatMessages").scrollTop=$("chatMessages").scrollHeight;
 return content;
}
function enableChatTools(enabled){
 ["chatCopy","chatPdf","chatText","chatSpeak","chatRegenerate"].forEach(function(id){$(id).disabled=!enabled;});
}
async function sendChat(raw,regenerate){
 const question=String(raw||"").trim();if(!question||chatBusy)return;
 if(activeChatController)activeChatController.abort();
 if(!regenerate){chatHistory.push({role:"user",content:question});chatAddMessage("user",question);lastChatPrompt=question;}
 else if(chatHistory.length&&chatHistory[chatHistory.length-1].role==="assistant")chatHistory.pop();
 chatBusy=true;activeChatController=new AbortController();
 const controller=activeChatController,send=$("chatSend"),input=$("chatInput"),stop=$("chatStop");
 send.disabled=true;input.disabled=true;stop.disabled=false;$("chatStatus").textContent="Connecting to Kilo Auto Free…";
 enableChatTools(Boolean(lastChatAnswer));
 const node=chatAddMessage("assistant","Connecting…");
 let waiting=true,answer="";
 try{
  const level=$("chatClass").value,subject=$("chatSubject").value,mode=$("chatMode").value;
  const prompt=makePrompt(level,subject,"",mode,question);
  answer=await streamStudyRequest({prompt:prompt,mode:mode,urls:[],messages:chatHistory.slice(0,-1).slice(-6)},function(delta){
   if(waiting){node.innerHTML="";waiting=false;}
   answer+=delta;renderMarkdownInto(node,answer);$("chatMessages").scrollTop=$("chatMessages").scrollHeight;
   $("chatStatus").textContent="Answering · "+answer.length+" characters";
  },controller.signal);
  lastChatAnswer=answer;chatHistory.push({role:"assistant",content:answer});chatHistory=chatHistory.slice(-10);
  $("chatStatus").textContent="Answer complete · Kilo Auto Free";
  enableChatTools(Boolean(answer));
 }catch(err){
  if(err.name==="AbortError"){$("chatStatus").textContent="Response stopped";if(waiting)node.textContent="Response stopped.";}
  else{$("chatStatus").textContent="Unable to complete";node.textContent="The AI request could not finish.\n\n"+err.message+"\n\nTry a shorter question. Auto Free availability can vary, so you can retry without losing your earlier messages.";}
  enableChatTools(Boolean(lastChatAnswer));
 }finally{
  if(activeChatController===controller)activeChatController=null;
  chatBusy=false;send.disabled=false;input.disabled=false;stop.disabled=true;input.focus();
 }
}
$("chatForm").addEventListener("submit",function(ev){ev.preventDefault();const value=$("chatInput").value.trim();if(value&&!chatBusy){$("chatInput").value="";sendChat(value,false);}});
$("chatInput").addEventListener("keydown",function(ev){if(ev.key==="Enter"&&!ev.shiftKey){ev.preventDefault();$("chatForm").requestSubmit();}});
$("chatMessages").addEventListener("click",function(ev){const btn=ev.target.closest("[data-chat-prompt]");if(btn){$("chatInput").value=btn.dataset.chatPrompt;$("chatInput").focus();}});
$("chatStop").addEventListener("click",function(){if(activeChatController)activeChatController.abort();});
$("chatCopy").addEventListener("click",async function(){if(!lastChatAnswer)return;try{await navigator.clipboard.writeText(lastChatAnswer);toast("Answer copied.");}catch(e){toast("Clipboard permission was blocked.");}});
$("chatPdf").addEventListener("click",function(){if(lastChatAnswer)printAsPdf("AI study answer",lastChatAnswer);});
$("chatText").addEventListener("click",function(){if(lastChatAnswer)download("kaushalpath-ai-answer.txt",lastChatAnswer,"text/plain");});
$("chatSpeak").addEventListener("click",function(){if(!lastChatAnswer)return;if(!("speechSynthesis" in window)){toast("Read aloud is not supported in this browser.");return;}window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(lastChatAnswer);utterance.lang="en-IN";window.speechSynthesis.speak(utterance);});
$("chatRegenerate").addEventListener("click",function(){if(lastChatPrompt&&!chatBusy)sendChat(lastChatPrompt,true);});
$("chatClear").addEventListener("click",function(){if(activeChatController)activeChatController.abort();chatHistory=[];lastChatAnswer="";lastChatPrompt="";enableChatTools(false);$("chatMessages").innerHTML='<div class="chat-welcome"><div class="chat-welcome-mark">✦</div><h3>What shall we work on?</h3><p>Ask for an explanation, a worked example, revision notes, or a short quiz. You can ask follow-up questions in the same chat.</p><div class="chat-welcome-prompts"><button type="button" data-chat-prompt="Explain this topic simply, with one everyday example and a quick self-check.">Explain simply</button><button type="button" data-chat-prompt="Create a well-organised revision sheet with key ideas, formulas or facts, examples, and a short recap.">Make revision notes</button><button type="button" data-chat-prompt="Create five original practice questions with answers and short explanations.">Quiz me</button></div></div>';$("chatStatus").textContent="New conversation";});
$("saveStudyPdf").disabled=true;

function getHistory(){try{return JSON.parse(localStorage.getItem("kp-results")||"[]");}catch(e){return [];}}
function saveHistory(item){const list=getHistory();list.unshift(item);localStorage.setItem("kp-results",JSON.stringify(list.slice(0,60)));renderHistory();}
function renderHistory(){const list=getHistory(),root=$("historyList");root.innerHTML="";if(!list.length){root.innerHTML='<div class="empty">No completed tests yet. Try a practice set above.</div>';return;}list.slice(0,12).forEach(function(r){const row=document.createElement("div");row.className="history-row";row.innerHTML='<div><strong>'+safe(r.title)+'</strong><small>'+safe(r.date)+' · '+r.correct+' correct · '+r.wrong+' wrong</small></div><strong>'+r.score+' / '+r.max+'</strong>';root.appendChild(row);});}
function startTest(id){const t=questions.find(function(q){return q.id===id;});if(!t)return;clearInterval(tick);active={test:t,answers:{},index:0,endAt:Date.now()+t.duration*60*1000};$("resultWorkspace").classList.add("hidden");$("examWorkspace").classList.remove("hidden");$("examWorkspace").scrollIntoView({behavior:"smooth",block:"start"});renderQuestion();tick=setInterval(function(){if(!active)return;updateTimer();},1000);}
function updateTimer(){if(!active)return;const secs=Math.max(0,Math.ceil((active.endAt-Date.now())/1000));const el=$("timer");if(el)el.textContent=String(Math.floor(secs/60)).padStart(2,"0")+":"+String(secs%60).padStart(2,"0");if(secs<=0)finishTest(true);}
function renderQuestion(){if(!active)return;const t=active.test,q=t.qs[active.index],selected=active.answers[active.index];const root=$("examWorkspace");root.innerHTML='<div class="exam-top"><div><div class="question-count">'+safe(t.title)+'</div><h3>Question '+(active.index+1)+' of '+t.qs.length+'</h3></div><div class="timer" id="timer">--:--</div></div><div class="question">'+safe(q.q)+'</div><div class="options">'+q.o.map(function(o,i){return '<button type="button" class="option '+(selected===i?"selected":"")+'" data-answer="'+i+'"><span class="optkey">'+String.fromCharCode(65+i)+'</span><span>'+safe(o)+'</span></button>';}).join("")+'</div><div class="question-nav">'+t.qs.map(function(qq,i){return '<button type="button" class="qnav '+(active.answers[i]!==undefined?"done ":"")+(i===active.index?"current":"")+'" data-jump="'+i+'" aria-label="Question '+(i+1)+'">'+(i+1)+'</button>';}).join("")+'</div><div class="exam-actions"><button class="btn btn-light" type="button" id="prevQ" '+(active.index===0?"disabled":"")+'>← Previous</button><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-light" type="button" id="nextQ">'+(active.index===t.qs.length-1?"Review answers":"Next question →")+'</button><button class="btn btn-blue" type="button" id="finishQ">Finish test</button></div></div><p class="tiny">Practice scoring: +'+t.mark+' for correct, '+(t.exam==="CBSE"?"0":"−1")+' for incorrect, 0 for unattempted. This is a demo practice rule, not a claim about the complete official exam pattern.</p>';updateTimer();}
$("testGrid").addEventListener("click",function(e){const b=e.target.closest("[data-start]");if(b)startTest(b.dataset.start);});
$("examWorkspace").addEventListener("click",function(e){if(!active)return;const ans=e.target.closest("[data-answer]"),jump=e.target.closest("[data-jump]");if(ans){active.answers[active.index]=Number(ans.dataset.answer);renderQuestion();return;}if(jump){active.index=Number(jump.dataset.jump);renderQuestion();return;}if(e.target.closest("#prevQ")){active.index=Math.max(0,active.index-1);renderQuestion();return;}if(e.target.closest("#nextQ")){if(active.index===active.test.qs.length-1){toast("Review your answers, then finish the test.");}else{active.index++;renderQuestion();}return;}if(e.target.closest("#finishQ"))finishTest(false);});
function finishTest(auto){if(!active)return;clearInterval(tick);tick=null;const t=active.test;let correct=0,wrong=0,blank=0;const answers=active.answers;const review=t.qs.map(function(q,i){const chosen=answers[i];if(chosen===undefined)blank++;else if(chosen===q.a)correct++;else wrong++;return {question:q.q,options:q.o,chosen:chosen,correct:q.a,explanation:q.e};});const mark=t.mark,score=correct*mark-(t.exam==="CBSE"?0:wrong);const max=t.qs.length*mark;const result={id:t.id,title:t.title,exam:t.exam,level:t.level,date:new Date().toLocaleString(),correct:correct,wrong:wrong,blank:blank,score:score,max:max,percentage:Math.round(Math.max(0,score)/max*100),review:review};saveHistory(result);active=null;renderResult(result,auto);}
function renderResult(r,auto){const root=$("resultWorkspace");root.classList.remove("hidden");$("examWorkspace").classList.add("hidden");root.innerHTML='<div class="kicker">Your result</div><h2 style="margin-top:7px">'+safe(r.title)+'</h2><p class="tiny">'+(auto?"Time ended automatically. ":"")+"Completed "+safe(r.date)+'</p><div class="result-score">'+r.score+' <span style="font-size:1.1rem;color:var(--muted);font-weight:700">/ '+r.max+'</span></div><div class="result-grid"><div class="result-metric"><strong>'+r.percentage+'%</strong><span>Percentage (clamped at 0)</span></div><div class="result-metric"><strong>'+r.correct+'</strong><span>Correct</span></div><div class="result-metric"><strong>'+r.wrong+'</strong><span>Incorrect</span></div><div class="result-metric"><strong>'+r.blank+'</strong><span>Unattempted</span></div></div><div class="actions"><button class="btn btn-blue" id="downloadJson">Download result JSON</button><button class="btn btn-light" id="downloadCsv">Download result CSV</button><button class="btn btn-light" id="printResult">Print / save PDF</button><button class="btn btn-light" id="closeResult">Back to tests</button></div><h3 style="margin-top:25px">Answer review and explanations</h3><div id="answerReview"></div>';const review=$("answerReview");r.review.forEach(function(q,i){const div=document.createElement("div");div.className="review-item";const status=q.chosen===undefined?"Not attempted":q.chosen===q.correct?"Correct":"Incorrect";div.innerHTML='<strong>'+(i+1)+". "+safe(q.question)+'</strong><p class="'+(q.chosen===q.correct?"correct":q.chosen===undefined?"":"incorrect")+'">'+status+(q.chosen===undefined?"":" · Your answer: "+String.fromCharCode(65+q.chosen))+' · Correct answer: '+String.fromCharCode(65+q.correct)+" — "+safe(q.options[q.correct])+'</p><p class="tiny">'+safe(q.explanation)+'</p>';review.appendChild(div);});root.scrollIntoView({behavior:"smooth",block:"start"});$("downloadJson").addEventListener("click",function(){download("kaushalpath-result.json",JSON.stringify(r,null,2),"application/json");});$("downloadCsv").addEventListener("click",function(){download("kaushalpath-result.csv",resultCsv(r),"text/csv");});$("printResult").addEventListener("click",function(){window.print();});$("closeResult").addEventListener("click",function(){root.classList.add("hidden");$("tests").scrollIntoView({behavior:"smooth"});});}
function download(name,content,type){const blob=new Blob([content],{type:type+";charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
function resultCsv(r){return [["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"],[r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]].map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n");}
$("exportHistory").addEventListener("click",function(){const history=getHistory();if(!history.length){toast("No history to export yet.");return;}const rows=[["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"]];history.forEach(function(r){rows.push([r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]);});download("kaushalpath-history.csv",rows.map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n"),"text/csv");});
async function checkAI(){try{const r=await fetch("/api/study-guide",{headers:{"x-kaushalpath-status":"1"}});const j=await r.json();$("aiStatus").textContent=j.ready?"AI guide ready":"AI guide setup needed";$("aiStatus").style.background=j.ready?"#1c584f":"#654a2d";}catch(e){$("aiStatus").textContent="AI status unavailable";}}

document.querySelectorAll("[data-show-exam]").forEach(function(link){link.addEventListener("click",function(){const chosen=link.dataset.showExam||"all";document.querySelectorAll(".test-card").forEach(function(card){card.classList.toggle("hidden",chosen!=="all"&&card.dataset.exam!==chosen);});document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const label=chosen==="all"?"Test Series":chosen==="JEE Main"?"JEE Main Prep":"NEET UG Prep";const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=label;});});
document.querySelectorAll('.side-link[href^="#"]').forEach(function(link){link.addEventListener("click",function(){if(!link.dataset.showExam){document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const labels={"#overview":"Overview","#learn":"CBSE Study Hub","#history":"My Results","#resources":"Official Resources"};const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=labels[link.getAttribute("href")]||"Workspace";}});});

renderTests();renderHistory();checkAI();

function activateWorkspaceView(view,clicked){
 const valid=["overview","learn","ai-guide","tests","history","resources"];
 const target=valid.includes(view)?view:"overview";
 const overviewNodes=[document.getElementById("overview"),document.querySelector("main > .hero"),document.querySelector("main > .quickstats"),document.getElementById("learningPath")];
 overviewNodes.forEach(function(node){if(node)node.classList.toggle("view-hidden",target!=="overview");});
 ["learn","ai-guide","tests","resources","history"].forEach(function(id){const node=$(id);if(node)node.classList.toggle("view-hidden",target!==id);});
 const clickedExam=clicked&&clicked.dataset.showExam;document.querySelectorAll(".side-link").forEach(function(link){const matchesExam=link.dataset.showExam?link.dataset.showExam===clickedExam||(target==="tests"&&!clickedExam&&link.dataset.showExam==="all"):true;link.classList.toggle("active",link.dataset.view===target&&matchesExam);});
 const labels={overview:"Overview",learn:"CBSE Study Hub","ai-guide":"AI Study Guide",tests:"Test Series",history:"My Results",resources:"Official Resources"};
 if(target==="tests"&&clicked&&clicked.dataset.showExam){
  const exam=clicked.dataset.showExam;
  document.querySelectorAll(".test-card").forEach(function(card){card.classList.toggle("hidden",exam!=="all"&&card.dataset.exam!==exam);});
  labels.tests=exam==="all"?"Test Series":exam==="JEE Main"?"JEE Main Prep":"NEET UG Prep";
 }else if(target==="tests"){document.querySelectorAll(".test-card").forEach(function(card){card.classList.remove("hidden");});}
 $("breadcrumbPage").textContent=labels[target]||"Workspace";
 if(location.hash!=="#"+target)history.replaceState(null,"","#"+target);
 window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-view]").forEach(function(link){
 link.addEventListener("click",function(ev){
  const view=link.dataset.view;if(!view)return;ev.preventDefault();activateWorkspaceView(view,link);
 });
});
const printMount=document.createElement("div");printMount.id="printMount";printMount.style.display="none";document.body.appendChild(printMount);
if(!document.getElementById("saveStudyPdf")){toast("PDF tool could not be initialised.");}
fillSubjects($("subject"),$("classLevel").value,$("subject").value);
fillSubjects($("chatSubject"),$("chatClass").value,$("chatSubject").value);
updateHubTopics();updateChatTopics();
activateWorkspaceView("overview");

})();
