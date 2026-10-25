(function(){
"use strict";
const $=function(id){return document.getElementById(id);};
const questions=[
{id:"cbse10",title:"CBSE Foundation · Class 10",exam:"CBSE",level:"Foundation",duration:8,mark:1,negativeMark:0,desc:"A short mixed-subject set for revision.",qs:[
{q:"The pair of linear equations 2x + 3y = 12 and x - y = 1 has solution:",o:["x=3, y=2","x=2, y=3","x=4, y=1","x=1, y=4"],a:0,e:"From x−y=1, x=y+1. Substitution gives 2(y+1)+3y=12, so y=2 and x=3."},
{q:"Which gas is generally released when a reactive metal reacts with a dilute acid?",o:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],a:1,e:"A reactive metal and dilute acid commonly form a salt and hydrogen gas."},
{q:"In a democratic system, universal adult franchise means:",o:["Only taxpayers vote","Every adult citizen meeting legal eligibility can vote","Only graduates vote","Voting is limited to public employees"],a:1,e:"Universal adult franchise provides voting rights to eligible adult citizens without wealth or education tests."},
{q:"A device rated 60 W is used for 2 hours. Electrical energy consumed is:",o:["30 Wh","120 Wh","62 Wh","0.03 Wh"],a:1,e:"Energy = power × time = 60 W × 2 h = 120 Wh."},
{q:"Choose the correctly spelled word.",o:["Enviroment","Environment","Envirnoment","Environmant"],a:1,e:"Environment is the correct spelling."}]},
{id:"jee1",title:"JEE Main · Challenge Set 01",exam:"JEE Main",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"Original mixed Physics, Chemistry and Mathematics questions.",qs:[
{q:"If the roots of x² − 5x + k = 0 differ by 1, then k equals:",o:["4","6","25/4","24/4"],a:1,e:"For roots r,s: r+s=5 and |r−s|=1. rs=((r+s)²−(r−s)²)/4=(25−1)/4=6."},
{q:"A particle moves with velocity v=3t²−4t m/s. Its acceleration at t=2 s is:",o:["4 m/s²","8 m/s²","12 m/s²","16 m/s²"],a:1,e:"Acceleration dv/dt=6t−4. At t=2, a=12−4=8 m/s²."},
{q:"For a first-order reaction, the half-life is:",o:["Directly proportional to initial concentration","Inversely proportional to initial concentration","Independent of initial concentration","Always zero-order"],a:2,e:"For a first-order process t½=0.693/k, independent of initial concentration."},
{q:"For a projectile launched at speed u at angle θ on level ground, the range is:",o:["u² sinθ/g","u² sin2θ/g","2u sinθ/g","u cosθ/g"],a:1,e:"The time of flight is 2u sinθ/g; multiplying by horizontal speed u cosθ gives R=u²sin2θ/g."},
{q:"If z=1+i, then |z²| is:",o:["1","2","√2","4"],a:1,e:"|z²|=|z|² and |1+i|=√2, so |z²|=2."}]},
{id:"jee2",title:"JEE Main · Challenge Set 02",exam:"JEE Main",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"More original questions with calculation-focused reasoning.",qs:[
{q:"The derivative of ln(x²+1) with respect to x is:",o:["1/(x²+1)","2x/(x²+1)","2/(x²+1)","x ln(x)"],a:1,e:"Apply the chain rule: derivative ln(f)=f′/f, giving 2x/(x²+1)."},
{q:"A 4 Ω resistor carries 3 A. The power dissipated is:",o:["12 W","24 W","36 W","48 W"],a:2,e:"P=I²R=9×4=36 W."},
{q:"The conjugate base of H₂PO₄⁻ after losing one proton is:",o:["H₃PO₄","HPO₄²⁻","PO₄³⁻","H₂PO₃⁻"],a:1,e:"Loss of H⁺ from H₂PO₄⁻ produces HPO₄²⁻."},
{q:"The determinant of [[2,1],[5,3]] is:",o:["1","6","11","−1"],a:0,e:"For a 2×2 matrix, determinant = ad−bc = 2×3−1×5=1."},
{q:"An ideal gas expands isothermally. Its internal energy change is:",o:["Positive","Negative","Zero","Equal to work always"],a:2,e:"For an ideal gas, internal energy depends only on temperature; isothermal means ΔT=0."}]},
{id:"jee3",title:"JEE Main · Challenge Set 03",exam:"JEE Main",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"Mixed entrance-style problems created for this website.",qs:[
{q:"The sum of the first n terms of an arithmetic progression is n(3n+1). Its nth term is:",o:["6n−2","6n+1","3n+1","3n−2"],a:0,e:"aₙ=Sₙ−Sₙ₋₁. n(3n+1)−(n−1)(3n−2)=6n−2."},
{q:"For an object at the centre of curvature of a concave mirror, the image is:",o:["Virtual and magnified","Real, inverted and same size","Virtual and same size","Real and erect"],a:1,e:"An object at C forms a real, inverted image of the same size at C."},
{q:"The hybridisation of the central atom in BF₃ is:",o:["sp","sp²","sp³","dsp²"],a:1,e:"BF₃ has three bonding regions and trigonal planar geometry, corresponding to sp² hybridisation."},
{q:"If A and B are independent events with P(A)=0.4 and P(B)=0.5, P(A∩B) is:",o:["0.1","0.2","0.4","0.9"],a:1,e:"For independent events, P(A∩B)=P(A)P(B)=0.4×0.5=0.2."},
{q:"The dimensional formula of impulse is:",o:["[MLT⁻¹]","[ML²T⁻²]","[MLT⁻²]","[M⁰LT⁻¹]"],a:0,e:"Impulse = force×time = change in momentum, with dimensions [MLT⁻¹]."}]},
{id:"neet1",title:"NEET UG · Challenge Set 01",exam:"NEET UG",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"Original mixed Biology, Chemistry and Physics questions.",qs:[
{q:"The enzyme that joins Okazaki fragments during DNA replication is:",o:["Helicase","DNA ligase","Primase","Topoisomerase"],a:1,e:"DNA ligase seals the nicks between adjacent DNA fragments."},
{q:"Which cell organelle is the main site of aerobic ATP production?",o:["Lysosome","Golgi apparatus","Mitochondrion","Ribosome"],a:2,e:"The mitochondrion hosts the citric acid cycle and oxidative phosphorylation in eukaryotic cells."},
{q:"A solution with pH 3 has hydrogen-ion concentration:",o:["10⁻³ mol L⁻¹","10³ mol L⁻¹","3 mol L⁻¹","10⁻¹¹ mol L⁻¹"],a:0,e:"pH=−log₁₀[H⁺], so [H⁺]=10⁻³ mol L⁻¹."},
{q:"The SI unit of electric potential difference is:",o:["Coulomb","Ohm","Volt","Tesla"],a:2,e:"Potential difference is measured in volts."},
{q:"In flowering plants, double fertilisation produces:",o:["Two embryos","Zygote and primary endosperm nucleus","Two zygotes","Only endosperm"],a:1,e:"One male gamete forms the zygote; the other fuses with the central cell nuclei to form the primary endosperm nucleus."}]},
{id:"neet2",title:"NEET UG · Challenge Set 02",exam:"NEET UG",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"Further original questions to practise concepts under time pressure.",qs:[
{q:"The oxygen released during oxygenic photosynthesis comes from:",o:["Carbon dioxide","Glucose","Water","Chlorophyll"],a:2,e:"Photolysis of water supplies electrons and releases oxygen."},
{q:"In a typical mammalian nephron, the greatest reabsorption of filtered water and solutes occurs in the:",o:["Proximal convoluted tubule","Collecting duct only","Bowman's capsule","Renal pelvis"],a:0,e:"The proximal convoluted tubule reabsorbs the largest share of filtrate under normal conditions."},
{q:"For an ideal gas at constant temperature, Boyle's law states:",o:["V/T is constant","P/V is constant","PV is constant","P/T is constant"],a:2,e:"At fixed temperature and gas amount, pressure is inversely proportional to volume, so PV is constant."},
{q:"Which bond connects amino acids within a polypeptide chain?",o:["Glycosidic bond","Peptide bond","Phosphodiester bond","Hydrogen bond only"],a:1,e:"Peptide bonds form between the amino group of one amino acid and carboxyl group of another."},
{q:"The main function of haemoglobin in red blood cells is to:",o:["Digest fats","Transport oxygen","Produce antibodies","Filter urea"],a:1,e:"Haemoglobin binds oxygen reversibly and transports it from lungs to tissues."}]},
{id:"neet3",title:"NEET UG · Challenge Set 03",exam:"NEET UG",level:"Hard",duration:10,mark:4,negativeMark:1,desc:"A final set of original Biology, Physics and Chemistry questions.",qs:[
{q:"A cross between Aa and Aa, under complete dominance, gives what probability of aa offspring?",o:["0","1/4","1/2","3/4"],a:1,e:"The genotype ratio is 1 AA : 2 Aa : 1 aa; the probability of aa is 1/4."},
{q:"The hormone that lowers blood glucose by promoting uptake and storage is:",o:["Glucagon","Adrenaline","Insulin","Thyroxine"],a:2,e:"Insulin promotes glucose uptake and storage and generally lowers blood glucose."},
{q:"A lens has focal length +0.5 m. Its power is:",o:["+0.5 D","+2 D","−2 D","+5 D"],a:1,e:"Power P=1/f in metres =1/0.5=+2 dioptres."},
{q:"The oxidation number of manganese in KMnO₄ is:",o:["+2","+4","+6","+7"],a:3,e:"K is +1 and four oxygens total −8, so Mn must be +7 for a neutral compound."},
{q:"The principal role of decomposers in an ecosystem is to:",o:["Fix solar energy","Recycle nutrients from organic matter","Produce all oxygen","Stop food chains"],a:1,e:"Decomposers break down organic matter and return nutrients to ecosystems."}]}

,{id:"cbse12cs26",title:"CBSE Class XII Computer Science · Official SQP Sampler 2026–27",exam:"CBSE",level:"Official SQP",duration:3,mark:1,negativeMark:0,official:true,sourceUrl:"https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/ComputerScience-SQP.pdf",schemeUrl:"https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/ComputerScience-MS.pdf",desc:"One exact 1-mark MCQ from CBSE's 2026–27 official sample paper. Open the full 3-hour, 70-mark paper and marking scheme for complete practice.",qs:[
{q:"Which of the following data types in Python is mutable?",o:["Tuple","String","Integer","List"],a:3,e:"A Python list is mutable; tuples, strings, and integers are immutable."}
]}
 ];
if (Array.isArray(window.KP_EXTRA_QUESTIONS)) questions.push(...window.KP_EXTRA_QUESTIONS);

// Convert the compact entrance cards into complete, syllabus-mapped mock exams.
(function configureFullLengthEntranceTests() {
 const bank = window.KP_FULL_LENGTH_QUESTION_BANK;
 if (!bank) return;
 const challengeSubjects = {
  jee1:["Mathematics","Physics","Chemistry","Physics","Mathematics"],
  jee2:["Mathematics","Physics","Chemistry","Mathematics","Physics"],
  jee3:["Mathematics","Physics","Chemistry","Mathematics","Physics"],
  neet1:["Biology","Biology","Chemistry","Physics","Biology"],
  neet2:["Biology","Biology","Chemistry","Biology","Biology"],
  neet3:["Biology","Biology","Physics","Chemistry","Biology"]
 };
 questions.forEach(function(test) {
  const subjects = challengeSubjects[test.id];
  if (!subjects) return;
  test.qs.forEach(function(question,index) {
   question.subject = subjects[index] || question.subject || "";
   question.sourceType = question.sourceType || "Competency";
   question.sourceLabel = question.sourceLabel || "Syllabus-mapped competency practice";
   question.topic = question.topic || "Mixed syllabus revision";
   const examBank = bank[test.exam];
   const pool = examBank && examBank.subjects && examBank.subjects[question.subject];
   if (pool && !pool.some(function(item) { return item.q === question.q; })) pool.push(Object.assign({},question));
  });
 });
 function selectRotated(pool,count,seed) {
  const source = Array.isArray(pool) ? pool : [];
  if (source.length < count) throw new Error("Full mock pool is too small: need "+count+", found "+source.length+".");
  const seen = new Set();
  const picked = [];
  // Keep labelled previous-year questions in every mock, then fill the remaining slots with the rotated pool.
  source.filter(function(item) { return item.sourceType === "PYQ"; }).forEach(function(item) {
   const key = String(item.q || "").trim().toLowerCase();
   if (key && !seen.has(key) && picked.length<count) {
    seen.add(key);
    picked.push(Object.assign({},item));
   }
  });
  const offset = ((seed % source.length) + source.length) % source.length;
  for (let step=0; picked.length<count && step<source.length*2; step++) {
   const item = source[(offset+step)%source.length];
   const key = String(item.q || "").trim().toLowerCase();
   if (!key || seen.has(key)) continue;
   seen.add(key);
   picked.push(Object.assign({},item));
  }
  if (picked.length !== count) throw new Error("Could not assemble "+count+" unique questions for a full mock.");
  return picked;
 }
 const sequence = {"JEE Main":0,"NEET UG":0};
 questions.forEach(function(test) {
  if (test.exam !== "JEE Main" && test.exam !== "NEET UG") return;
  const index = sequence[test.exam]++;
  const seed = index * 7;
  const subjects = bank[test.exam].subjects;
  if (test.exam === "JEE Main") {
   const math = selectRotated(subjects.Mathematics,30,seed);
   const physics = selectRotated(subjects.Physics,30,seed+5);
   const chemistry = selectRotated(subjects.Chemistry,30,seed+11);
   test.qs = [];
   for (let i=0;i<30;i++) test.qs.push(math[i],physics[i],chemistry[i]);
   test.title = "JEE Main · Extended Full Mock "+String(index+1).padStart(2,"0");
   test.level = "Extended mock";
   test.duration = 180;
   test.mark = 4;
   test.negativeMark = 1;
   test.subjectCounts = {Mathematics:30,Physics:30,Chemistry:30};
   test.fullLength = true;
   test.desc = "90 questions: 30 Mathematics, 30 Physics and 30 Chemistry. 360 marks with +4/−1 scoring. This extended practice mock is longer than the official JEE Main 2026 Paper 1 format of 75 questions.";
  } else {
   const physics = selectRotated(subjects.Physics,45,seed);
   const chemistry = selectRotated(subjects.Chemistry,45,seed+9);
   const biology = selectRotated(subjects.Biology,90,seed+17);
   test.qs = [];
   for (let i=0;i<45;i++) test.qs.push(physics[i],chemistry[i],biology[2*i],biology[2*i+1]);
   test.title = "NEET UG · Full Mock Test "+String(index+1).padStart(2,"0");
   test.level = "Full-length mock";
   test.duration = 180;
   test.mark = 4;
   test.negativeMark = 1;
   test.subjectCounts = {Physics:45,Chemistry:45,Biology:90};
   test.fullLength = true;
   test.desc = "180 compulsory questions: 45 Physics, 45 Chemistry and 90 Biology. 720 marks with +4/−1 scoring, following the NEET UG 2026 question count and subject split.";
  }
 });
})();
let active=null,tick=null,lastAnswerText="",studyAttachment=null,chatAttachment=null,lastChatAttachment=null;
function safe(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function resizeImageFile(file){
 return new Promise(function(resolve,reject){
  if(!file){reject(new Error("Choose an image file."));return;}
  if(file.size>15*1024*1024){reject(new Error("Choose an image smaller than 15 MB; it will be compressed before upload."));return;}
  const url=URL.createObjectURL(file),image=new Image();
  image.onload=function(){
   try{
    const max=(window.KP_DEVICE_PROFILE&&window.KP_DEVICE_PROFILE.imageMaxDimension)||1280,scale=Math.min(1,max/Math.max(image.naturalWidth,image.naturalHeight));
    const canvas=document.createElement("canvas");canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
    const ctx=canvas.getContext("2d");if(!ctx)throw new Error("This browser could not process the image.");
    ctx.fillStyle="#ffffff";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);
    let data=canvas.toDataURL("image/jpeg",0.78);
    if(data.length>2800000)data=canvas.toDataURL("image/jpeg",0.62);
    if(data.length>3500000)throw new Error("That image is still too large after compression. Choose a smaller image.");
    URL.revokeObjectURL(url);resolve(data);
   }catch(error){URL.revokeObjectURL(url);reject(error);}
  };
  image.onerror=function(){URL.revokeObjectURL(url);reject(new Error("This image format cannot be opened by your browser. Try saving it as PNG or JPG, or export the page as PDF."));};
  image.src=url;
 });
}
const ATTACHMENT_TEXT_EXTENSIONS=new Set(["txt","md","csv","tsv","json","xml","html","htm","rtf"]);
const ATTACHMENT_DOCUMENT_EXTENSIONS=new Set(["pdf","doc","docx","pptx","xlsx","xls","ods","odt"]);
const ATTACHMENT_IMAGE_EXTENSIONS=new Set(["png","jpg","jpeg","webp","gif","bmp","svg","avif","tif","tiff","heic","heif"]);
function attachmentExtension(file){const m=String(file&&file.name||"").toLowerCase().match(/\.([a-z0-9]{1,8})$/);return m?m[1]:"";}
function readFileAsDataUrl(file,overrideMime){return new Promise(function(resolve,reject){const reader=new FileReader();reader.onload=function(){if(typeof reader.result!=="string"){reject(new Error("The selected file could not be read."));return;}const data=String(reader.result);resolve(overrideMime?data.replace(/^data:[^;,]+/,"data:"+overrideMime):data);};reader.onerror=function(){reject(new Error("The selected file could not be read."));};reader.readAsDataURL(file);});}
function imageMimeForFile(file){
 const ext=attachmentExtension(file),byExt={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",tif:"image/tiff",tiff:"image/tiff",heic:"image/heic",heif:"image/heif"};
 return String(file.type||"").startsWith("image/")?file.type:(byExt[ext]||"");
}
async function prepareAttachmentFile(file){
 if(!file)return null;
 const ext=attachmentExtension(file),isImage=String(file.type||"").startsWith("image/")||ATTACHMENT_IMAGE_EXTENSIONS.has(ext);
 if(isImage){
  try{
   const data=await resizeImageFile(file);
   return {kind:"image",name:file.name,type:"image/jpeg",imageData:data};
  }catch(error){
   if(file.size<=2.5*1024*1024){
    const mime=imageMimeForFile(file);
    if(mime){
     const raw=await readFileAsDataUrl(file,mime);
     if(raw.length<=3500000)return {kind:"image",name:file.name,type:mime,imageData:raw,needsServerConversion:true};
    }
   }
   throw new Error((error&&error.message?error.message+" ":"")+"Try saving the image as PNG or JPG, or use a file under 2.5 MB.");
  }
 }
 if(ATTACHMENT_TEXT_EXTENSIONS.has(ext)){
  if(file.size>150000)throw new Error("Text, CSV and similar files must be 150 KB or smaller.");
  const text=await file.text();
  if(!text.trim())throw new Error("The selected text file is empty.");
  return {kind:"text",name:file.name,type:file.type||"text/plain",fileText:text};
 }
 if(!ATTACHMENT_DOCUMENT_EXTENSIONS.has(ext)){
  throw new Error("Supported files: images, PDF, Word (.doc/.docx), PowerPoint (.pptx), Excel (.xls/.xlsx/.ods), OpenDocument (.odt), and text/CSV/JSON/HTML/RTF.");
 }
 if(file.size>2.5*1024*1024)throw new Error("Documents must be 2.5 MB or smaller for upload. Try compressing the file or removing unused pages.");
 const data=await readFileAsDataUrl(file);
 if(data.length>3600000)throw new Error("This document is too large after encoding. Choose a smaller file (up to 2.5 MB).");
 return {kind:"document",name:file.name,type:file.type||"application/octet-stream",fileData:data};
}
function attachmentPayload(attachment){
 if(!attachment)return {};
 return {imageData:attachment.imageData||"",fileData:attachment.fileData||"",fileText:attachment.fileText||"",fileName:attachment.name||"",fileType:attachment.type||""};
}
function attachmentLabel(attachment){
 if(!attachment)return "";
 return "[Attached file: "+String(attachment.name||"file").slice(0,120)+"]";
}
function renderSourceLinks(root,sources){
 if(!root)return;root.replaceChildren();
 (Array.isArray(sources)?sources:[]).slice(0,8).forEach(function(source,index){
  if(!source||typeof source.url!=="string")return;let url;
  try{url=new URL(source.url);if(!["https:","http:"].includes(url.protocol))return;}catch(e){return;}
  const link=document.createElement("a");link.href=url.href;link.target="_blank";link.rel="noopener noreferrer";
  const title=String(source.title||url.hostname).slice(0,140);link.textContent=(index+1)+". "+title;
  link.title=String(source.snippet||title).slice(0,500);root.appendChild(link);
 });
}
function searchIntent(text){return /\b(search(?: the)? web|browse(?: the)? web|look up|find sources|cite sources|latest|current(?:ly)?|today(?:'s)?|this week|breaking news|recent news|open (?:this|the) (?:link|url|website|page)|read (?:this|the) (?:page|website|url)|what happened (?:today|recently))\b/i.test(String(text||""));}
function needsRemoteTools(payload){
 if(!payload)return false;
 if(payload.imageData||payload.fileData||payload.fileText||payload.webSearch||(Array.isArray(payload.urls)&&payload.urls.length))return true;
 return searchIntent(payload.searchQuery||payload.userPrompt||payload.prompt||"");
}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.remove("hidden");setTimeout(function(){el.classList.add("hidden");},3200);}
function subjectName(){return $("subject").value==="other"?$("otherSubject").value.trim():$("subject").value;}
$("subject").addEventListener("change",function(){$("otherSubjectWrap").hidden=$("subject").value!=="other";});

const cbseCommonLanguages=[
 "Arabic","Assamese","Bengali","Bhoti","Bhutia","Bodo","French","German","Gujarati","Japanese","Kannada","Kashmiri","Kokborok","Lepcha","Malayalam","Manipuri","Marathi","Mizo","Nepali","Odia","Persian","Punjabi","Russian","Sanskrit","Santhali","Sindhi","Spanish","Tamil","Telugu","Tibetan","Urdu"
];
const cbseClass10AnnualSubjects=[
 "Mathematics (Standard)","Mathematics (Basic)","Science","Social Science","English Language & Literature","English Communicative","Hindi Course A","Hindi Course B","Sanskrit",
 "Computer Applications","Information Technology","Artificial Intelligence","Home Science","Elements of Business","Elements of Book Keeping and Accountancy","National Cadet Corps (NCC)","Painting","Hindustani Music (Vocal)","Hindustani Music (Melodic Instruments)","Hindustani Music (Percussion)",
 "Retail","Introduction to Financial Markets","Introduction to Tourism","Beauty & Wellness","Front Office Operations","Marketing and Sales",
 ...cbseCommonLanguages.filter(function(subject){return subject!=="Sanskrit";}),
 "Other approved subject / language"
];
const cbseSeniorAnnualSubjects=[
 "Mathematics","Applied Mathematics","Physics","Chemistry","Biology","Biotechnology","English Core","English Elective","Hindi Core","Hindi Elective",
 "Computer Science","Informatics Practices","Accountancy","Business Studies","Economics","Political Science","History","Geography","Psychology","Sociology","Physical Education",
 "Entrepreneurship","Legal Studies","Home Science","Engineering Graphics","Fine Arts — Painting","Fine Arts — Sculpture","Fine Arts — Graphics","Fine Arts — Applied Art",
 "NCC","Agriculture","Artificial Intelligence","Data Science","Information Technology","Retail","Introduction to Financial Markets","Introduction to Tourism","Beauty & Wellness","Front Office Operations","Marketing and Sales",
 "Hindustani Music (Vocal)","Hindustani Music (Melodic Instruments)","Hindustani Music (Percussion)","Carnatic Music (Vocal)","Carnatic Music (Melodic Instruments)","Carnatic Music (Percussion)",
 "Dance — Bharatanatyam","Dance — Kathak","Dance — Odissi","Other approved subject / language",
 ...cbseCommonLanguages
];
const cbseAnnualSubjectOptions={"Class 10":cbseClass10AnnualSubjects,"Class 11":cbseSeniorAnnualSubjects,"Class 12":cbseSeniorAnnualSubjects};
function cbseAnnualNormalize(value){
 return String(value||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
}
function cbseAnnualCanonical(value){
 const text=cbseAnnualNormalize(value);
 const aliases={
  "mathematics standard":"mathematics","mathematics basic":"mathematics","applied mathematics":"mathematics",
  "science":"science","social science":"social science",
  "english language literature":"english","english communicative":"english","english core":"english","english elective":"english",
  "hindi course a":"hindi","hindi course b":"hindi","hindi core":"hindi","hindi elective":"hindi",
  "sanskrit core":"sanskrit","sanskrit elective":"sanskrit",
  "information technology":"information technology","computer applications":"computer applications",
  "artificial intelligence":"artificial intelligence","biotechnology":"biology",
  "elements of business":"business studies","elements of book keeping and accountancy":"accountancy",
  "fine arts painting":"painting","fine arts sculpture":"sculpture","fine arts graphics":"graphic arts","fine arts applied art":"applied art",
  "other approved subject language":"other approved subject","national cadet corps ncc":"ncc",
  "hindustani music vocal":"hindustani music","hindustani music melodic instruments":"hindustani music","hindustani music percussion":"hindustani music",
  "carnatic music vocal":"carnatic music","carnatic music melodic instruments":"carnatic music","carnatic music percussion":"carnatic music",
  "dance bharatanatyam":"dance","dance kathak":"dance","dance odissi":"dance"
 };
 return aliases[text]||text;
}
function cbseAnnualFamily(subject){
 const canonical=cbseAnnualCanonical(subject);
 if(canonical==="science")return ["science","physics","chemistry","biology"];
 if(canonical==="social science")return ["social science","history","geography","political science","economics","sociology"];
 if(canonical==="computer science"||canonical==="computer applications"||canonical==="information technology"||canonical==="artificial intelligence"||canonical==="informatics practices")return [canonical,"computer science","computer applications","information technology","informatics practices","artificial intelligence"];
 if(canonical==="other approved subject")return [];
 return [canonical];
}
function cbseAnnualFallbackNotes(className, subject){
 const canonical=cbseAnnualCanonical(subject);
 let points, sections, chapter;
 if(canonical==="english"||canonical==="hindi"||cbseCommonLanguages.map(cbseAnnualCanonical).includes(canonical)||canonical==="sanskrit"){
  chapter="Reading, writing, grammar and interpretation";
  points=["Identify a text's central idea and support the interpretation with specific evidence.","Infer the writer's or speaker's purpose, audience and tone from the language used.","Apply grammar and vocabulary rules in context rather than as isolated definitions.","Organise a coherent written response suited to its audience, purpose and required form."];
  sections=[{heading:"Reading and interpretation",body:"A reader is given an unfamiliar text with a clear claim, supporting evidence and a particular audience. The reader must distinguish stated information from inference, explain tone, and cite evidence."},{heading:"Writing for a real audience",body:"A writing task specifies a reader, purpose and format. A strong response uses a clear structure, accurate language, relevant details and a tone suited to the audience."}];
 }else if(["mathematics","physics","chemistry","biology","science"].includes(canonical)){
  chapter="Concepts, evidence and application";
  points=["Identify the quantities, conditions or observations that matter in a given problem.","Select a relevant principle, relation, representation or method before calculating or concluding.","Show working and connect each step to the information supplied in the question.","Check units, assumptions and whether the final result is consistent with the evidence."];
  sections=[{heading:"Applying a concept to unfamiliar information",body:"A student receives a new data set or practical situation and must identify the relevant concept, choose a method, show the reasoning and evaluate whether the conclusion fits the data."},{heading:"Reasoning and verification",body:"A complete response explains why a method applies, shows intermediate reasoning and checks units, assumptions or boundary conditions instead of relying only on a final answer."}];
 }else if(["accountancy","business studies","economics","entrepreneurship"].includes(canonical)){
  chapter="Business, accounting and economic decision-making";
  points=["Identify the relevant accounting, management or economic concept in a practical situation.","Use the given figures or case evidence accurately before reaching a conclusion.","Compare available choices using a stated criterion and justify the decision.","Explain one likely consequence, limitation or risk of the chosen course of action."];
  sections=[{heading:"Decision-making from a case",body:"A small enterprise faces a decision using limited resources and data. The response should identify the relevant concept, use the case evidence and justify a practical decision."},{heading:"Interpretation and evaluation",body:"A business or economic conclusion must be supported by figures, assumptions or evidence. A good answer distinguishes a calculation from its interpretation and recognises a relevant limitation."}];
 }else if(["history","geography","political science","sociology","psychology"].includes(canonical)){
  chapter="Source analysis, evidence and interpretation";
  points=["Distinguish a fact stated in a source from an inference drawn from it.","Explain a relationship using evidence and a relevant subject concept.","Compare two situations or viewpoints against a clear criterion.","Support a conclusion with evidence and acknowledge a limitation or alternative explanation."];
  sections=[{heading:"Interpreting a source",body:"A learner is given a short source, set of observations or social situation. The response must separate evidence from assumption, identify a relevant concept and explain a defensible inference."},{heading:"Cause, context and consequence",body:"A strong response connects evidence to context, explains a causal or conceptual relationship and justifies its conclusion rather than listing unrelated facts."}];
 }else if(["computer science","computer applications","information technology","informatics practices","artificial intelligence","data science"].includes(canonical)){
  chapter="Computational thinking, data and digital responsibility";
  points=["Trace the steps of a process or program before predicting its output.","Choose a data representation or digital tool that fits the task and explain why.","Test an answer with an example or boundary case and locate a possible error.","Protect data, privacy and digital access when applying a technology to a real situation."];
  sections=[{heading:"Solving a practical digital task",body:"A user needs a small digital solution from supplied input data. The response should describe the steps, select a suitable representation or tool and test the result against the requirements."},{heading:"Responsible technology use",body:"A proposed digital solution handles information about people. A sound evaluation considers data minimisation, access, reliability and likely unintended consequences."}];
 }else if(["physical education","ncc","retail","beauty wellness","front office operations","marketing and sales","introduction to financial markets","introduction to tourism","agriculture","home science"].includes(canonical)){
  chapter="Practical skills, decisions and safety";
  points=["Identify the goal and constraints in a realistic practical situation.","Choose a safe, suitable procedure and explain the reason for each major step.","Interpret observations or simple measurements before deciding what to do next.","Evaluate the result and name one improvement, safety check or ethical consideration."];
  sections=[{heading:"Practical scenario",body:"A person or team must complete a task safely using limited time and resources. A complete response outlines a suitable procedure, explains the reason for the main choices and checks the outcome."},{heading:"Reviewing performance",body:"After a task, use observations and evidence to judge whether the goal was met, identify a risk or limitation and propose a practical improvement."}];
 }else{
  chapter="Subject knowledge, evidence and applied reasoning";
  points=["Define the key idea and use the subject's terms accurately.","Apply a relevant concept to a new situation rather than repeating a definition alone.","Use evidence, examples or a stepwise method to support the response.","Check the conclusion against the task's conditions and explain one limitation."];
  sections=[{heading:"Applying subject knowledge",body:"A learner is given a new situation related to the selected subject. The learner must identify the relevant idea, apply it with evidence and justify a clear conclusion."},{heading:"Evaluation and communication",body:"A high-quality answer explains the reasoning, uses accurate terminology, considers a relevant limitation and communicates the conclusion in a structured way."}];
 }
 return [{level:className,subject:subject,chapter:chapter,intro:"Subject-format competency practice scaffold. Confirm the final chapter scope and literature texts against the prescribed current syllabus.",points:points,sections:sections,formulas:[],example:"Use the details in the source, identify the relevant principle, show the reasoning and state a justified conclusion.",recall:["What evidence supports the main conclusion?","Which condition or assumption matters most?","How would the method change if one important detail changed?"]}];
}
function cbseAnnualSources(className, subject){
 const catalog=Array.isArray(window.KP_ANNUAL_PAPER_CATALOG)?window.KP_ANNUAL_PAPER_CATALOG:[];
 const family=cbseAnnualFamily(subject);
 const classNotes=catalog.filter(function(item){return item&&item.level===className;});
 const exact=classNotes.filter(function(item){return family.includes(cbseAnnualCanonical(item.subject));});
 if(exact.length)return {notes:exact,scope:"class-specific curated chapters",fallback:false};
 // Do not silently pull another class's notes into this paper.
 return {notes:cbseAnnualFallbackNotes(className,subject),scope:"subject-format competency scaffold",fallback:true};
}
function cbseAnnualPaperConfig(className, subject){
 const text=cbseAnnualNormalize(subject),canonical=cbseAnnualCanonical(subject);
 const seniorScience=["physics","chemistry","biology","biotechnology"].includes(canonical);
 const seniorPractical=["computer science","informatics practices","physical education"].includes(canonical);
 const skillSubject=/(computer applications|information technology|artificial intelligence|retail|financial markets|tourism|beauty wellness|front office|marketing and sales|ncc)/.test(text);
 if(className==="Class 10"&&canonical==="science"){
  return {marks:80,duration:180,mcq:20,veryShort:6,short:7,long:3,case:3,profile:"class-x-science",questionCount:39};
 }
 if(className==="Class 12"&&canonical==="computer science"){
  // The current Class XII CS sample paper uses 21×1, 7×2, 3×3, 4×4, 2×5 = 70.
  return {marks:70,duration:180,mcq:21,veryShort:7,short:3,long:2,case:4,profile:"class-xii-computer-science",questionCount:37,caseBeforeLong:true};
 }
 if(className!=="Class 10"&&(seniorScience||seniorPractical)){
  // Typical 70-mark science/practical-subject model: 16×1, 5×2, 7×3, 2×4, 3×5.
  return {marks:70,duration:180,mcq:16,veryShort:5,short:7,long:3,case:2,profile:"senior-science",questionCount:33,caseBeforeLong:true};
 }
 if(className==="Class 10"&&skillSubject){return {marks:50,duration:120,mcq:10,veryShort:5,short:4,long:2,case:2,profile:"class-x-skill",questionCount:23};}
 if(className==="Class 10"&&canonical==="home science"){return {marks:70,duration:180,mcq:16,veryShort:4,short:5,long:3,case:4,profile:"class-x-home-science",questionCount:32};}
 if(className!=="Class 10"&&skillSubject&&/(retail|tourism|beauty|front office|marketing|financial markets)/.test(text)){return {marks:50,duration:120,mcq:10,veryShort:5,short:4,long:2,case:2,profile:"senior-skill",questionCount:23};}
 if(className==="Class 10"&&/mathematics/.test(text)){return {marks:80,duration:180,mcq:20,veryShort:5,short:6,long:4,case:3,profile:"class-x-mathematics",questionCount:38};}
 if(className==="Class 10"&&/(english|hindi|sanskrit|arabic|assamese|bengali|bhoti|bhutia|bodo|french|german|gujarati|japanese|kannada|kashmiri|kokborok|lepcha|malayalam|manipuri|marathi|mizo|nepali|odia|persian|punjabi|russian|santhali|sindhi|spanish|tamil|telugu|tibetan|urdu)/.test(text)){
  return {marks:80,duration:180,mcq:10,veryShort:10,short:6,long:4,case:3,profile:"language-paper",questionCount:33};
 }
 let marks=80,duration=180;
 if(className==="Class 10"&&text==="home science"){marks=70;}
 else if(className!=="Class 10"&&/(physics|chemistry|biology|biotechnology|computer science|informatics practices|physical education)/.test(text)){marks=70;}
 if(marks===80)return {marks:80,duration:180,mcq:20,veryShort:5,short:6,long:4,case:3,profile:"general-80",questionCount:38};
 if(marks===70)return {marks:70,duration:180,mcq:16,veryShort:4,short:5,long:3,case:4,profile:"general-70",questionCount:32};
 return {marks:50,duration:120,mcq:10,veryShort:5,short:4,long:2,case:2,profile:"general-50",questionCount:23};
}
function cbseAnnualRubric(marks){
 const items={
  2:["1 mark: correct concept, fact or conclusion.","1 mark: relevant reason, evidence or working."],
  3:["1 mark: identifies the relevant concept or method.","1 mark: uses accurate evidence, a formula or an explained step.","1 mark: gives a justified conclusion and checks the result."],
  4:["1 mark: interprets the source or identifies the key issue.","1 mark: selects and applies the relevant concept.","1 mark: explains the reasoning with evidence or working.","1 mark: justifies the conclusion and notes a relevant implication."],
  5:["1 mark: states the relevant concept, definition or approach.","2 marks: explains the key steps, evidence or analysis accurately.","1 mark: applies the concept to the given context or example.","1 mark: reaches a justified conclusion and checks assumptions."]
 };
 return items[marks]||["Award marks for accurate subject terminology, evidence, reasoning and a clear conclusion."];
}
function cbseAnnualPaperSourceRows(noteSources){
 const concepts=[],problems=[],recalls=[],sections=[];
 noteSources.forEach(function(item){
  const chapter=String(item.chapter||"Chapter revision"),subject=String(item.subject||"");
  (Array.isArray(item.points)?item.points:[]).forEach(function(point){if(typeof point==="string"&&point.trim())concepts.push({text:point.trim(),chapter:chapter,item:item,subject:subject});});
  (Array.isArray(item.sections)?item.sections:[]).forEach(function(section){
   if(section&&String(section.body||"").trim())sections.push({heading:String(section.heading||chapter),body:String(section.body),points:Array.isArray(section.points)?section.points.filter(function(p){return typeof p==="string";}):[],chapter:chapter,item:item,subject:subject});
   (section&&Array.isArray(section.points)?section.points:[]).forEach(function(point){if(typeof point==="string"&&point.trim())concepts.push({text:point.trim(),chapter:chapter,item:item,subject:subject});});
  });
  (Array.isArray(item.practiceProblems)?item.practiceProblems:[]).forEach(function(problem){if(problem&&String(problem.question||"").trim()&&String(problem.answer||"").trim())problems.push({question:String(problem.question),answer:String(problem.answer),solution:String(problem.solution||""),chapter:chapter,item:item,subject:subject});});
  (Array.isArray(item.recall)?item.recall:[]).forEach(function(prompt){if(typeof prompt==="string"&&prompt.trim())recalls.push({text:prompt.trim(),chapter:chapter,item:item,subject:subject});});
  if(String(item.example||"").trim())sections.push({heading:"Worked example · "+chapter,body:String(item.example),points:[],chapter:chapter,item:item,subject:subject});
 });
 if(!concepts.length){
  noteSources.forEach(function(item){(Array.isArray(item.points)?item.points:[]).forEach(function(point){concepts.push({text:String(point),chapter:String(item.chapter||"Revision"),item:item,subject:String(item.subject||"")});});});
 }
 return {concepts:concepts,problems:problems,recalls:recalls,sections:sections};
}
function buildCbseAnnualPaper(className, subject){
 const cfg=cbseAnnualPaperConfig(className,subject);
 const source=cbseAnnualSources(className,subject);
 const rows=cbseAnnualPaperSourceRows(source.notes);
 const fallback=source.fallback;
 const conceptRows=rows.concepts.length?rows.concepts:[{text:"Use the supplied information to identify the key concept, explain a relevant method and justify the conclusion.",chapter:subject,item:source.notes[0]||{},subject:subject}];
 const problemRows=rows.problems;
 const choiceDistractors=[];
 problemRows.forEach(function(problem){choiceDistractors.push({text:problem.answer,chapter:problem.chapter});});
 rows.concepts.forEach(function(concept){choiceDistractors.push({text:concept.text,chapter:concept.chapter});});
 const genericDistractors=[
  "The conclusion can be selected without using the information in the question.",
  "The stated conditions can be ignored without changing the result.",
  "The claim must be accepted even when the evidence contradicts it."
 ];
 function distinctText(pool, correct, index, chapter){
  const out=[],seen=new Set([cbseAnnualNormalize(correct)]);
  for(let step=0;step<pool.length&&out.length<3;step++){
   const candidate=pool[(index*5+step)%pool.length],text=String(candidate&&candidate.text||"").trim(),key=cbseAnnualNormalize(text);
   if(!text||text.length>1000||seen.has(key)||candidate.chapter===chapter)continue;
   seen.add(key);out.push(text);
  }
  genericDistractors.forEach(function(text){if(out.length<3&&!seen.has(cbseAnnualNormalize(text))){seen.add(cbseAnnualNormalize(text));out.push(text);}});
  return out.slice(0,3);
 }
 const qs=[];
 const sectionTitles={A:"Section A · Objective questions",B:"Section B · Very short answer",C:"Section C · Short answer",D:cfg.caseBeforeLong?"Section D · Case / source / output based questions":"Section D · Long answer",E:cfg.caseBeforeLong?"Section E · Long answer":"Section E · Case / source based questions"};
 function sourceMeta(item){
  return {subject:subject,chapter:String(item&&item.chapter||subject),topic:String(item&&item.chapter||"Mixed syllabus revision"),sourceType:"Competency",sourceLabel:fallback?"Original subject-format competency scaffold":"Original syllabus-mapped competency practice"};
 }
 function addMcq(index){
  const problem=problemRows.length&&index<problemRows.length?problemRows[index%problemRows.length]:null;
  const concept=conceptRows[index%conceptRows.length];
  const chapter=problem?problem.chapter:concept.chapter;
  const correct=problem?problem.answer:concept.text;
  const stem=problem
   ?"A student is working on "+chapter+": "+problem.question+" Which option is consistent with the worked answer?"
   :"In the context of "+chapter+", which statement is most directly supported by the chapter's key ideas?";
  const choices=[{text:correct,chapter:chapter}].concat(distinctText(choiceDistractors,correct,index,chapter).map(function(text){return {text:text,chapter:"Other chapter"};}));
  while(choices.length<4)choices.push({text:genericDistractors[(index+choices.length)%genericDistractors.length],chapter:"Alternative"});
  const answerPosition=index%4,options=[];
  for(let slot=0;slot<4;slot++)options.push(String((slot===answerPosition?choices[0]:choices[slot<answerPosition?slot+1:slot]||choices[(slot+1)%choices.length]).text).slice(0,1000));
  const explanation=problem?"Correct answer: "+correct+(problem.solution?"\nReasoning: "+problem.solution:""):"The chapter-aligned statement is: "+correct;
  qs.push(Object.assign({q:stem,o:options,a:answerPosition,e:explanation.slice(0,4800),mark:1,negativeMark:0,sectionTitle:sectionTitles.A,questionFormat:"Competency MCQ"},sourceMeta(problem?problem.item:concept.item)));
 }
 function makeWritten(index,marks,kind,sectionTitle){
  const item=source.notes[index%source.notes.length]||source.notes[0]||{};
  const section=rows.sections.length?rows.sections[index%rows.sections.length]:null;
  const problem=problemRows.length?problemRows[index%problemRows.length]:null;
  const recall=rows.recalls.length?rows.recalls[index%rows.recalls.length]:null;
  const points=Array.isArray(item.points)?item.points.filter(function(p){return typeof p==="string"&&p.trim();}):[];
  const chapter=String(item.chapter||subject);
  let question="",modelAnswer="",context="";
  if(kind==="case"){
   context=String((section&&section.body)||(item.example)||(item.intro)||conceptRows[index%conceptRows.length].text);
   question="CASE / SOURCE STUDY — "+(section&&section.heading||chapter)+"\nRead the information below:\n"+context+"\nUsing evidence from the source and your knowledge of "+chapter+", answer the task: "+(problem?problem.question:(recall?recall.text:"Explain the relevant concept, justify your reasoning and state one implication."));
   modelAnswer=(section&&section.body?section.body+"\n":"")+(problem?"Answer: "+problem.answer+"\n"+(problem.solution?"Reasoning: "+problem.solution+"\n":""):"")+(points.length?"Key points: "+points.slice(0,4).join("; "):"");
  }else if(kind==="long"){
   question=recall?recall.text:(problem?problem.question:"Explain and analyse the key ideas in "+chapter+". Connect at least two ideas, give relevant evidence or an example, and justify your conclusion.");
   if(!/explain|analyse|analyze|compare|justify|discuss|evaluate|derive|describe|why|how|what/i.test(question))question="Explain and analyse: "+question;
   question+="\nStructure a complete "+marks+"-mark response with reasoning, supporting detail and a clear conclusion.";
   modelAnswer=(section&&section.body?section.body+"\n":"")+(problem?"Answer: "+problem.answer+"\n"+(problem.solution?"Working / reasoning: "+problem.solution+"\n":""):"")+(points.length?"Important points: "+points.slice(0,Math.min(5,points.length)).join("; "):"");
  }else{
   question=problem?problem.question:(recall?recall.text:"Explain the key idea in "+chapter+" and show how it applies to a specific example.");
   modelAnswer=problem?"Answer: "+problem.answer+(problem.solution?"\nReasoning: "+problem.solution:""):(section&&section.body?section.body:points.slice(0,3).join("\n"));
   if(marks>=3)question+="\nShow the important reasoning or evidence; a final statement alone is not sufficient.";
  }
  if(!modelAnswer.trim())modelAnswer="Expected response: define the relevant concept, use evidence from the syllabus-aligned source and justify the conclusion.";
  qs.push(Object.assign({q:question.slice(0,3800),o:[],a:-1,e:modelAnswer.slice(0,4800),modelAnswer:modelAnswer.slice(0,4800),rubric:cbseAnnualRubric(marks),mark:marks,negativeMark:0,responseType:"written",sectionTitle:sectionTitle,questionFormat:kind==="case"?"Case / source based":kind==="long"?"Long answer":"Constructed response",caseContext:kind==="case",topic:chapter},sourceMeta(problem?problem.item:(section?section.item:item))));
 }
 for(let i=0;i<cfg.mcq;i++)addMcq(i);
 for(let i=0;i<cfg.veryShort;i++)makeWritten(i,2,"short",sectionTitles.B);
 for(let i=0;i<cfg.short;i++)makeWritten(i+cfg.veryShort,3,"short",sectionTitles.C);
 if(cfg.caseBeforeLong){
  for(let i=0;i<cfg.case;i++)makeWritten(i+cfg.veryShort+cfg.short,4,"case",sectionTitles.D);
  for(let i=0;i<cfg.long;i++)makeWritten(i+cfg.veryShort+cfg.short+cfg.case,5,"long",sectionTitles.E);
 }else{
  for(let i=0;i<cfg.long;i++)makeWritten(i+cfg.veryShort+cfg.short,5,"long",sectionTitles.D);
  for(let i=0;i<cfg.case;i++)makeWritten(i+cfg.veryShort+cfg.short+cfg.long,4,"case",sectionTitles.E);
 }
 const total=qs.reduce(function(sum,q){return sum+Number(q.mark||1);},0);
 if(total!==cfg.marks)throw new Error("The annual-paper blueprint does not sum to the required maximum marks.");
 const slug=cbseAnnualNormalize(subject).replace(/\s+/g,"-");
 const id="cbse-sample-"+className.toLowerCase().replace(/\s+/g,"-")+"-"+slug;
 return {
  id:id,title:"CBSE Sample Test · "+className+" · "+subject,exam:"CBSE",subject:subject,level:className,
  duration:cfg.duration,timed:false,sampleTest:true,mark:1,negativeMark:0,maxMarks:cfg.marks,annualExam:true,fullLength:false,
  desc:fallback?"Self-paced original subject-format sample test. Class-specific curated chapters were not available, so check coverage against the current official curriculum. This is not an official CBSE paper.":"Self-paced original syllabus-mapped sample test with objective, constructed-response and case/source-based questions. No timer is enforced. Not an official CBSE paper.",
  sourceScope:source.scope,subjectFormatFallback:fallback,qs:qs
 };
}
function updateCbseAnnualPattern(){
 const classNode=$("cbseAnnualClass"),subjectNode=$("cbseAnnualSubject");
 if(!classNode||!subjectNode)return;
 const config=cbseAnnualPaperConfig(classNode.value,subjectNode.value);
 const totalQuestions=config.mcq+config.veryShort+config.short+config.long+config.case;
 const marks=$("cbseAnnualMarks"),duration=$("cbseAnnualDuration"),count=$("cbseAnnualQuestionCount"),competency=$("cbseAnnualCompetency");
 if(marks)marks.textContent=config.marks+" marks";
 if(duration)duration.textContent="Self-paced";
 if(count)count.textContent=totalQuestions+" questions";
 if(competency)competency.textContent=config.profile==="class-x-science"?"Science · 39-question model":config.profile==="class-x-mathematics"?"Maths · 38-question model":config.profile==="class-xii-computer-science"?"CS · 37-question model":config.profile==="senior-science"?"Science · 33-question model":config.profile==="language-paper"?"Reading + language application":"Case + application";
 const status=$("cbseAnnualStatus");
 if(status){const source=cbseAnnualSources(classNode.value,subjectNode.value);status.textContent=source.fallback?"This self-paced sample test uses an original subject-format competency scaffold. Verify chapter coverage against the current CBSE curriculum and your school syllabus.":"Class-specific curated chapter content is available for this self-paced sample test. It is original practice, not an official CBSE paper.";}
}
function initCbseAnnualBuilder(){
 const classNode=$("cbseAnnualClass"),subjectNode=$("cbseAnnualSubject"),start=$("cbseAnnualStart"),downloadPaper=$("cbseAnnualDownloadPaper"),downloadKey=$("cbseAnnualDownloadKey"),status=$("cbseAnnualStatus");
 if(!classNode||!subjectNode||!start||!downloadPaper||!downloadKey)return;
 let currentPaper=null;
 function loadSubjectOptions(){
  const list=cbseAnnualSubjectOptions[classNode.value]||cbseClass10AnnualSubjects;
  subjectNode.replaceChildren();
  list.forEach(function(subject){const option=document.createElement("option");option.value=subject;option.textContent=subject;subjectNode.appendChild(option);});
  if(list.includes("Mathematics (Standard)"))subjectNode.value="Mathematics (Standard)";
  else subjectNode.selectedIndex=0;
  currentPaper=null;
  updateCbseAnnualPattern();
 }
 function getPaper(){
  currentPaper=buildCbseAnnualPaper(classNode.value,subjectNode.value);
  return currentPaper;
 }
 async function exportPaper(withKey){
  const paper=getPaper();
  const button=withKey?downloadKey:downloadPaper;
  button.disabled=true;
  button.textContent=withKey?"Preparing marking scheme…":"Preparing question paper…";
  if(status)status.textContent="Generating a crisp, downloadable PDF locally. No student answers are uploaded.";
  try{
   await downloadCbseAnnualPaperPdf(paper,withKey);
   if(status)status.textContent=(withKey?"Marking scheme":"Question paper")+" downloaded for "+paper.level+" · "+paper.subject+".";
  }catch(error){
   console.error("CBSE annual paper PDF failed:",error);
   if(status)status.textContent="Could not generate the PDF. Check your internet connection and try again.";
   toast("Annual paper PDF generation failed. Please retry.");
  }finally{
   button.disabled=false;
   button.textContent=withKey?"Download marking scheme":"Download question paper PDF";
  }
 }
 classNode.addEventListener("change",loadSubjectOptions);
 subjectNode.addEventListener("change",function(){currentPaper=null;updateCbseAnnualPattern();});
 start.addEventListener("click",function(){
  let paper;
  try{paper=getPaper();}catch(error){toast("Could not assemble this model paper. Please choose another subject.");return;}
  const existing=questions.findIndex(function(test){return test.id===paper.id;});
  if(existing>=0)questions[existing]=paper;else questions.push(paper);
  renderTests();
  if(status)status.textContent=(paper.subjectFormatFallback?"This subject uses an original subject-format competency scaffold because no class-specific curated chapter set was available. Check chapter coverage against the official syllabus. ":"Paper content is drawn from available class-specific curated chapter notes. ")+ "Started "+paper.title+". Objective marks are automatic; written responses are self-marked against the answer guide after submission.";
  startTest(paper.id);
 });
 downloadPaper.addEventListener("click",function(){exportPaper(false);});
 downloadKey.addEventListener("click",function(){exportPaper(true);});
 loadSubjectOptions();
}


function downloadCbseAnnualPaperPdf(paper,withKey){
 if(!paper||!Array.isArray(paper.qs)||!paper.qs.length)throw new Error("The selected sample test has no questions.");
 if(typeof window.KP_LOAD_PDF_ENGINE!=="function")throw new Error("The direct PDF engine is unavailable.");
 return window.KP_LOAD_PDF_ENGINE().then(function(engine){
  const pdf=new engine.jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true,putOnlyUsedFonts:true});
  const isKey=Boolean(withKey),title=paper.title+(isKey?" · Marking Scheme":" · Question Paper");
  const subject=paper.subject||"",className=paper.level||"",margin=17;
  const palette={ink:[38,27,57],muted:[112,98,131],purple:[105,61,183],blue:[48,112,210],teal:[19,139,130],line:[226,218,239],pale:[248,245,253],white:[255,255,255]};
  let y=20,section="";
  const size=function(){return {w:pdf.internal.pageSize.getWidth(),h:pdf.internal.pageSize.getHeight()};};
  const color=function(method,values){method.apply(pdf,values);};
  function pageStart(continued){
   const d=size();
   pdf.setFillColor(255,255,255);pdf.rect(0,0,d.w,d.h,"F");
   pdf.setFont("helvetica","bold");pdf.setFontSize(7.2);color(pdf.setTextColor,palette.purple);
   pdf.text("KAUSHALPATH  /  CBSE-STYLE ANNUAL PRACTICE",margin,9);
   pdf.setFont("helvetica","normal");pdf.setFontSize(7);color(pdf.setTextColor,palette.muted);
   pdf.text(className+" · "+subject+" · "+(isKey?"MARKING SCHEME":"QUESTION PAPER"),d.w-margin,9,{align:"right",maxWidth:d.w-margin*2-60});
   color(pdf.setDrawColor,palette.line);pdf.setLineWidth(.25);pdf.line(margin,12,d.w-margin,12);
   if(continued){pdf.setFont("helvetica","italic");pdf.setFontSize(8);color(pdf.setTextColor,palette.muted);pdf.text("Continued",margin,17);}
   y=continued?23:19;section="";
  }
  function newPage(){pdf.addPage("a4","portrait");pageStart(true);}
  function fitRoom(height){if(y+height>size().h-17)newPage();}
  function addText(raw,opts){
   opts=opts||{};const textValue=String(raw==null?"":raw).replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/[–—−]/g,"-").replace(/×/g,"x").replace(/÷/g,"/").replace(/≤/g,"<=").replace(/≥/g,">=").replace(/≈/g,"~=").replace(/→/g,"->").replace(/π/g,"pi").replace(/θ/g,"theta").replace(/Ω/g,"ohm").replace(/\u00a0/g," ").trim();
   if(!textValue)return;
   const d=size(),fontSize=opts.fontSize||9,style=opts.style||"normal",maxW=d.w-margin*2-(opts.indent||0);
   pdf.setFont("helvetica",style);pdf.setFontSize(fontSize);color(pdf.setTextColor,opts.color||palette.ink);
   const lines=pdf.splitTextToSize(textValue,maxW),lineHeight=fontSize*.44;
   const blockHeight=lines.length*lineHeight+(opts.after==null?2:opts.after)+(opts.before||0);
   fitRoom(blockHeight);
   if(opts.before)y+=opts.before;
   if(opts.fill){
    pdf.setFillColor.apply(pdf,opts.fill);
    pdf.roundedRect(margin-1,y-3,maxW+2,Math.max(5,lines.length*lineHeight+4),1.2,1.2,"F");
   }
   pdf.text(lines,margin+(opts.indent||0),y,{lineHeightFactor:1.15,maxWidth:maxW});
   y+=lines.length*lineHeight+(opts.after==null?2:opts.after);
  }
  function addSection(name){
   if(!name||name===section)return;
   section=name;
   addText(name,{fontSize:11,style:"bold",color:palette.purple,before:3,after:4,fill:palette.pale});
  }
  function answerLabel(q){
   if(q.responseType==="written")return "Suggested answer:\n"+String(q.modelAnswer||q.e||"Use the case evidence, show your reasoning and justify the conclusion.")+"\n\nIndicative marking rubric:\n"+(Array.isArray(q.rubric)?q.rubric.join("\n"):"Award marks for accurate concepts, evidence, reasoning and a clear conclusion.");
   const choice=Array.isArray(q.o)&&Number.isInteger(q.a)&&q.a>=0?q.o[q.a]:"";
   return "Correct answer: "+(choice||"Not available")+"\nExplanation: "+String(q.e||"Review the relevant chapter concept.");
  }
  pageStart(false);
  pdf.setFont("helvetica","bold");pdf.setFontSize(16);color(pdf.setTextColor,palette.ink);
  const titleLines=pdf.splitTextToSize(title,size().w-margin*2);pdf.text(titleLines,margin,y);y+=titleLines.length*7+3;
  addText("Maximum marks: "+paper.maxMarks+" · Self-paced sample test · No timer · Suggested practice time: "+(paper.duration/60)+" hour"+(paper.duration===60?"":"s"),{fontSize:9,style:"bold",color:palette.blue,after:3});
  addText(isKey
   ?"Marking scheme and suggested answers. Accept equivalent correct reasoning and syllabus-appropriate wording; this is an original practice model, not an official CBSE key."
   :"Instructions: Attempt every question. Read any source or case before answering. Show calculations/reasoning where relevant. This is an original KaushalPath practice model, not an official CBSE paper.",{fontSize:8.5,color:palette.muted,after:5});
  paper.qs.forEach(function(q,index){
   addSection(q.sectionTitle||"Section A · Objective questions");
   const marks=Number(q.mark)||1;
   addText("Q"+(index+1)+". ["+marks+" mark"+(marks===1?"":"s")+"] "+q.q,{fontSize:9.1,style:"bold",color:palette.ink,before:2,after:2});
   if(Array.isArray(q.o)&&q.o.length){
    q.o.forEach(function(option,optionIndex){
     addText(String.fromCharCode(65+optionIndex)+". "+option,{fontSize:8.5,indent:3,after:1,color:[65,57,80]});
    });
   }else if(!isKey){
    const answerLines=marks>=4?3:marks>=3?2:1;
    for(let line=0;line<answerLines;line++){fitRoom(5);color(pdf.setDrawColor,palette.line);pdf.line(margin+2,y+1,size().w-margin-2,y+1);y+=5;}
   }
   if(isKey){
    addText(answerLabel(q),{fontSize:8.4,indent:2,color:palette.teal,before:2,after:4,fill:[242,250,247]});
   }else{
    addText("Marks: "+marks,{fontSize:7.4,color:palette.muted,after:3});
   }
  });
  const total=pdf.getNumberOfPages();
  for(let p=1;p<=total;p++){
   pdf.setPage(p);const d=size();
   color(pdf.setDrawColor,palette.line);pdf.setLineWidth(.25);pdf.line(margin,d.h-13,d.w-margin,d.h-13);
   pdf.setFont("helvetica","normal");pdf.setFontSize(7);color(pdf.setTextColor,palette.muted);
   pdf.text("KaushalPath · Original CBSE-style model paper",margin,d.h-8);
   pdf.text("Page "+p+" of "+total,d.w-margin,d.h-8,{align:"right"});
  }
  const blob=pdf.output("blob");
  if(!(blob instanceof Blob)||blob.size<1000)throw new Error("The generated PDF is unexpectedly small.");
  const url=URL.createObjectURL(blob),anchor=document.createElement("a");
  const slug=cbseAnnualNormalize(subject).replace(/\s+/g,"-");
  anchor.href=url;anchor.download="CBSE-"+className.replace(/\s+/g,"-")+"-"+slug+"-Sample-Test-"+(isKey?"Marking-Scheme":"Question-Paper")+".pdf";
  anchor.style.display="none";document.body.appendChild(anchor);anchor.click();anchor.remove();
  window.setTimeout(function(){URL.revokeObjectURL(url);},30000);
  return {filename:anchor.download,pages:total,size:blob.size};
 });
}

function renderTests(){
 const grid=$("testGrid");grid.innerHTML="";
 questions.forEach(function(t,index){
  const card=document.createElement("article");
  card.className="test-card"+(t.fullLength?" full-length-test-card":"");
  card.style.setProperty("--kp-card-index",String(Math.min(index,12)));
  card.dataset.exam=t.exam;
  const cls=t.exam==="NEET UG"?"teal":(t.exam==="CBSE"||t.exam==="CBSE Annual")?"orange":"";
  const kind=t.sampleTest?"CBSE sample test · self-paced · competency + written responses":t.annualExam?"CBSE model paper · competency + written responses":t.official?"Official sample-paper question":t.fullLength?"PYQs + syllabus-mapped competency practice":"Original practice set";
  const maxMarks=t.qs.reduce(function(total,q){return total+(Number.isFinite(q.mark)?q.mark:t.mark);},0);
  const marking=t.annualExam?"Objective marks automatic; written responses self-marked":t.official?"+1 / 0 / 0":"+"+t.mark+" / "+(t.negativeMark>0?"−"+t.negativeMark:"0")+" / 0";
  let sourceLinks="";
  if(t.official) sourceLinks='<div class="test-source-links"><a href="'+safe(t.sourceUrl)+'" target="_blank" rel="noopener noreferrer">Official question paper ↗</a> <a href="'+safe(t.schemeUrl)+'" target="_blank" rel="noopener noreferrer">Marking scheme ↗</a></div>';
  else if(t.fullLength && t.exam==="JEE Main") sourceLinks='<div class="test-source-links"><a href="https://jeemain.nta.nic.in/2026/" target="_blank" rel="noopener noreferrer">Official JEE Main papers and syllabus ↗</a></div>';
  else if(t.fullLength && t.exam==="NEET UG") sourceLinks='<div class="test-source-links"><a href="https://neet.nta.nic.in/documents/page/4/" target="_blank" rel="noopener noreferrer">Official NEET UG syllabus and documents ↗</a></div>';
  card.innerHTML='<span class="tag '+cls+'">'+safe(t.exam)+" · "+safe(t.level)+'</span><h3>'+safe(t.title)+'</h3><p>'+safe(t.desc)+'</p><div class="test-meta"><span>'+(t.sampleTest?"Self-paced · no timer":"◷ "+t.duration+" min")+'</span><span>▦ '+t.qs.length+' questions</span><span>◎ '+maxMarks+' marks</span><span>Scoring: '+marking+' (correct / wrong / blank)</span><span>'+kind+'</span></div>'+sourceLinks+'<button class="btn btn-blue" type="button" data-start="'+safe(t.id)+'">Start test ↗</button>';
  grid.appendChild(card);
 });
}
function renderStudyText(answer){const out=$("studyOutput");out.innerHTML=markdownToHtml(answer);lastAnswerText=answer;$("copyAnswer").disabled=!answer;if($("saveStudyPdf"))$("saveStudyPdf").disabled=!answer;if($("saveStudyLibrary"))$("saveStudyLibrary").disabled=!answer;}
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
const chapterSubtopics=[
 {level:"Class 10",subject:"Mathematics",match:/real numbers|number system|fundamental theorem of arithmetic/,topics:["Euclid’s division lemma","Fundamental theorem of arithmetic","HCF and LCM using prime factorisation","Proofs of irrationality","Decimal expansions of rational numbers"]},
 {level:"Class 10",subject:"Mathematics",match:/polynomial|zeroes of polynomial/,topics:["Finding zeroes of a polynomial","Relationship between zeroes and coefficients","Forming a polynomial from its zeroes","Graphical interpretation of zeroes","Division algorithm for polynomials"]},
 {level:"Class 10",subject:"Mathematics",match:/pair of linear|linear equations in two variables/,topics:["Graphical method","Substitution method","Elimination method","Cross-multiplication method","Consistency and number of solutions","Word problems using two equations"]},
 {level:"Class 10",subject:"Mathematics",match:/quadratic equation/,topics:["Standard form ax² + bx + c = 0","Factorisation method","Quadratic formula","Discriminant and nature of roots","Word problems leading to quadratic equations"]},
 {level:"Class 10",subject:"Mathematics",match:/arithmetic progression|\bap\b/,topics:["Common difference","nth term of an AP","Sum of the first n terms","Finding missing terms","Word problems based on AP"]},
 {level:"Class 10",subject:"Mathematics",match:/triangle|similarity/,topics:["Criteria for triangle similarity","Basic proportionality theorem","Converse of the basic proportionality theorem","Pythagoras theorem and converse","Areas of similar triangles"]},
 {level:"Class 10",subject:"Mathematics",match:/coordinate geometry/,topics:["Distance formula","Section formula","Midpoint of a line segment","Area of a triangle using coordinates","Applications of coordinate geometry"]},
 {level:"Class 10",subject:"Mathematics",match:/trigonometry|heights and distances/,topics:["Trigonometric ratios","Standard angle values","Trigonometric identities","Complementary angles","Heights and distances"]},
 {level:"Class 10",subject:"Mathematics",match:/circle/,topics:["Tangent to a circle","Radius perpendicular to tangent","Tangents from an external point","Proofs involving tangents","Length of tangents"]},
 {level:"Class 10",subject:"Science",match:/chemical reaction|equation/,topics:["Writing and balancing chemical equations","Types of chemical reactions","Oxidation and reduction","Corrosion","Rancidity"]},
 {level:"Class 10",subject:"Science",match:/acids bases salts|acid|base|salt/,topics:["Indicators and pH scale","Properties of acids and bases","Neutralisation reactions","Importance of pH in everyday life","Preparation and uses of salts"]},
 {level:"Class 10",subject:"Science",match:/life process/,topics:["Nutrition in plants and humans","Human respiration","Transportation in humans and plants","Excretion","Photosynthesis"]},
 {level:"Class 10",subject:"Science",match:/light|reflection|refraction/,topics:["Ray diagrams for spherical mirrors","Mirror formula and magnification","Refraction through a glass slab","Lens formula and magnification","Power of a lens","Sign convention"]},
 {level:"Class 10",subject:"Science",match:/electricity|current/,topics:["Ohm’s law and V–I graphs","Resistance and resistivity","Resistors in series and parallel","Heating effect of current","Electric power and energy"]},
 {level:"Class 10",subject:"Science",match:/magnetic effect/,topics:["Magnetic field lines","Field around a straight conductor and coil","Fleming’s left-hand rule","Electric motor","Domestic electric circuits"]},
 {level:"Class 11",subject:"Mathematics",match:/sets/,topics:["Roster and set-builder forms","Types of sets","Subsets and power sets","Venn diagrams","Union, intersection and complements"]},
 {level:"Class 11",subject:"Mathematics",match:/trigonometric function/,topics:["Radian measure","Unit-circle interpretation","Trigonometric identities","Graphs of sine and cosine","Trigonometric equations"]},
 {level:"Class 11",subject:"Mathematics",match:/complex number/,topics:["Imaginary unit i","Algebra of complex numbers","Modulus and conjugate","Argand plane","Quadratic equations with complex roots"]},
 {level:"Class 11",subject:"Physics",match:/motion in a straight line|kinematics/,topics:["Distance and displacement","Speed and velocity","Position-time graphs","Velocity-time graphs","Equations of uniformly accelerated motion","Relative motion in one dimension"]},
 {level:"Class 11",subject:"Physics",match:/motion in a plane|projectile/,topics:["Vectors and vector components","Vector addition","Projectile motion","Uniform circular motion","Relative velocity in two dimensions"]},
 {level:"Class 11",subject:"Physics",match:/laws of motion|newton/,topics:["Newton’s first law","Newton’s second law and momentum","Newton’s third law","Free-body diagrams","Friction","Circular-motion applications"]},
 {level:"Class 11",subject:"Physics",match:/work energy power/,topics:["Work by constant and variable forces","Kinetic energy theorem","Potential energy","Conservation of mechanical energy","Power","Collisions"]},
 {level:"Class 11",subject:"Chemistry",match:/structure of atom|atomic structure/,topics:["Electromagnetic radiation","Bohr model","Quantum numbers","Orbitals and electron configuration","Aufbau principle, Pauli principle and Hund’s rule"]},
 {level:"Class 11",subject:"Chemistry",match:/chemical bonding|bonding/,topics:["Lewis structures","Ionic and covalent bonds","VSEPR shapes","Hybridisation","Molecular orbital theory","Hydrogen bonding"]},
 {level:"Class 11",subject:"Biology",match:/cell structure|cell the unit/,topics:["Cell theory","Prokaryotic and eukaryotic cells","Cell organelles and functions","Plasma membrane transport","Plant versus animal cells"]},
 {level:"Class 12",subject:"Mathematics",match:/matrices/,topics:["Types and order of matrices","Matrix operations","Transpose of a matrix","Symmetric and skew-symmetric matrices","Inverse of a matrix","Solving linear equations using matrices"]},
 {level:"Class 12",subject:"Mathematics",match:/determinant/,topics:["Evaluating determinants","Properties of determinants","Minors and cofactors","Adjoint and inverse","Area of a triangle using determinants","Solving linear systems"]},
 {level:"Class 12",subject:"Mathematics",match:/continuity|differentiability|derivative/,topics:["Continuity at a point","Differentiability and continuity","Chain rule","Implicit differentiation","Derivatives of inverse trigonometric functions","Logarithmic differentiation"]},
 {level:"Class 12",subject:"Mathematics",match:/integral/,topics:["Indefinite integrals","Substitution method","Integration by parts","Partial fractions","Definite integral properties","Area under a curve"]},
 {level:"Class 12",subject:"Mathematics",match:/vector|three dimensional|3d geometry/,topics:["Vector operations","Dot and cross products","Direction ratios and cosines","Equation of a line in 3D","Angle between lines","Shortest distance between skew lines"]},
 {level:"Class 12",subject:"Physics",match:/electric charge|electric field|electrostatics/,topics:["Coulomb’s law","Electric field and field lines","Electric dipole","Electric flux","Gauss’s law and applications"]},
 {level:"Class 12",subject:"Physics",match:/current electricity/,topics:["Electric current and drift velocity","Ohm’s law","Resistivity and temperature dependence","Cells and internal resistance","Kirchhoff’s rules","Wheatstone bridge"]},
 {level:"Class 12",subject:"Physics",match:/ray optics|optics/,topics:["Reflection and refraction at spherical surfaces","Lens maker’s formula","Thin-lens equation","Total internal reflection","Optical instruments","Ray diagrams"]},
 {level:"Class 12",subject:"Chemistry",match:/electrochemistry/,topics:["Galvanic and electrolytic cells","Standard electrode potential","Nernst equation","Conductivity and molar conductivity","Kohlrausch’s law","Faraday’s laws of electrolysis"]},
 {level:"Class 12",subject:"Chemistry",match:/chemical kinetic/,topics:["Rate of reaction","Rate law and order","Integrated rate equations","Half-life","Arrhenius equation","Activation energy"]},
 {level:"Class 12",subject:"Biology",match:/molecular basis|inheritance|genetics/,topics:["DNA and RNA structure","DNA replication","Transcription and translation","Genetic code","Gene regulation","Human Genome Project"]},
 {level:"Class 12",subject:"Biology",match:/human reproduction|reproduction/,topics:["Male and female reproductive systems","Gametogenesis","Menstrual cycle","Fertilisation and implantation","Pregnancy and parturition","Reproductive health"]}
];
function chapterTopicsFor(level,subject,chapter){
 const value=String(chapter||"").trim();
 if(!value)return topicsFor(level,subject);
 const match=chapterSubtopics.find(function(rule){return rule.level===level&&rule.subject===subject&&rule.match.test(value);});
 if(match)return match.topics;
 const norm=function(t){return String(t||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();};
 const stop=new Set(["chapter","unit","the","and","for","with","of","in","on","an","a","to","class","introduction","basics"]);
 const words=norm(value).split(" ").filter(function(w){return w.length>2&&!stop.has(w);});
 const scored=topicsFor(level,subject).map(function(t){const candidate=norm(t),score=words.reduce(function(n,w){return n+(candidate.includes(w)?1:0);},0);return {topic:t,score:score};}).filter(function(x){return x.score>0;}).sort(function(a,b){return b.score-a.score;}).map(function(x){return x.topic;});
 if(scored.length>=4)return scored.slice(0,9);
 return ["Key concepts and definitions in "+value,"Important formulas, facts and diagrams in "+value,"Worked examples from "+value,"Common mistakes and exam questions from "+value,"Quick revision of "+value].concat(scored).slice(0,9);
}
function addTopicChips(root,level,subject,onChoose,compact,chapter){
 if(!root)return;
 root.innerHTML="";
 chapterTopicsFor(level,subject,chapter).slice(0,compact?7:9).forEach(function(topic){
  const button=document.createElement("button");button.type="button";button.className=compact?"chat-topic-button":"topic-chip";button.textContent=topic;
  button.addEventListener("click",function(){onChoose(topic);});root.appendChild(button);
 });
}
function updateHubTopics(){
 const level=$("classLevel").value;
 const subject=subjectName()||$("subject").value,chapter=$("chapter").value.trim();
 addTopicChips($("topicSuggestions"),level,subject,function(topic){$("topic").value=topic;$("topic").focus();},false,chapter);
 const hint=$("topicSuggestionsHint");
 if(hint)hint.textContent=chapter?"Topics related to “"+chapter+"” · select one to fill the question box.":"Type a chapter to get chapter-specific topics. Select one to fill the question box.";
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
$("chapter").addEventListener("input",updateHubTopics);$("chapter").addEventListener("change",updateHubTopics);
function describeApiFailure(response,data){
 const requestId=String(data&&data.requestId||response.headers.get("x-request-id")||"").trim();
 let message=String(data&&data.error||"");
 if(!message&&response.status===429)message="The study assistant is busy. Wait a short while and retry.";
 if(!message&&[502,503,504].includes(response.status))message="The study assistant could not reach an available response service. Your prompt is preserved; retry in a moment.";
 if(!message)message="The study assistant request failed (HTTP "+response.status+").";
 if(response.status===429&&!/wait|retry/i.test(message))message+=" Please wait a short while before retrying.";
 return message+(requestId?" (Reference: "+requestId+")":"");
}
async function streamStudyRequest(payload,onText,signal,onStatus,onSources){
 const remoteTools=needsRemoteTools(payload);
 if(remoteTools&&onStatus)onStatus(payload&&payload.imageData?"Preparing your image…": "Checking relevant public sources…");
 const response=await fetch("/api/study-guide",{method:"POST",headers:{"content-type":"application/json","accept":"text/event-stream, application/json"},body:JSON.stringify(Object.assign({},payload,{stream:true})),signal:signal});
 const contentType=response.headers.get("content-type")||"";
 if(!response.ok){const errorData=await response.json().catch(function(){return{};});throw new Error(describeApiFailure(response,errorData));}
 const contentText=function(value){
  if(typeof value==="string")return value;
  if(Array.isArray(value))return value.map(function(part){return typeof part==="string"?part:(part&&typeof part.text==="string"?part.text:(part&&typeof part.content==="string"?part.content:""));}).join("");
  if(value&&typeof value.text==="string")return value.text;
  return "";
 };
 if(!response.body||!contentType.includes("text/event-stream")){
  const data=await response.json().catch(function(){return{};});if(data.error)throw new Error(data.error);if(onSources&&Array.isArray(data.sources))onSources(data.sources);
  const value=data.text||(data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content);
  const text=contentText(value);if(text.trim()){onText(text);return text;}
  return retryCloudWithoutStream(payload,onText,signal,onStatus,onSources);
 }
 const reader=response.body.getReader(),decoder=new TextDecoder();let pending="",answer="",streamError=null;
 function consume(line){
  const clean=String(line||"").trim();if(!clean.startsWith("data:"))return;
  const raw=clean.slice(5).trim();if(!raw||raw==="[DONE]")return;
  let event;try{event=JSON.parse(raw);}catch(e){return;}
  if(event.error){const message=typeof event.error==="string"?event.error:(event.error.message||"The study assistant stopped responding. Please try again.");const requestId=String(event.requestId||response.headers.get("x-request-id")||"").trim();streamError=new Error(message+(requestId?" (Reference: "+requestId+")":""));return;}
  if(onSources&&Array.isArray(event.sources))onSources(event.sources);
  const choice=event.choices&&event.choices[0];
  if(choice&&choice.finish_reason==="error"){streamError=new Error("The study assistant stopped before returning an answer. Please try again.");return;}
  const delta=choice&&choice.delta,values=[delta&&delta.content,choice&&choice.message&&choice.message.content,choice&&choice.text,event.text,event.output_text,event.response&&event.response.output_text];
  let text="";for(let i=0;i<values.length;i++){text=contentText(values[i]);if(text)break;}
  if(text){answer+=text;onText(text);}
 }
 while(true){
  const result=await reader.read();pending+=decoder.decode(result.value||new Uint8Array(),{stream:!result.done});
  const lines=pending.split(/\r?\n/);pending=lines.pop()||"";lines.forEach(consume);
  if(streamError)throw streamError;if(result.done)break;
 }
 if(pending)consume(pending);if(streamError)throw streamError;
 if(answer.trim())return answer;
 return retryCloudWithoutStream(payload,onText,signal,onStatus);
}
async function retryCloudWithoutStream(payload,onText,signal,onStatus,onSources){
 if(signal&&signal.aborted)throw new DOMException("Request aborted","AbortError");
 if(onStatus)onStatus("Trying an alternate response format…");
 const response=await fetch("/api/study-guide",{method:"POST",headers:{"content-type":"application/json","accept":"application/json"},body:JSON.stringify(Object.assign({},payload,{stream:false})),signal:signal});
 const data=await response.json().catch(function(){return{};});if(onSources&&Array.isArray(data.sources))onSources(data.sources);
 if(!response.ok)throw new Error(describeApiFailure(response,data));
 let answer=typeof data.text==="string"?data.text:"";
 if(!answer.trim()){const choice=data.choices&&data.choices[0],content=choice&&choice.message&&choice.message.content;if(typeof content==="string")answer=content;else if(Array.isArray(content))answer=content.map(function(part){return part&&typeof part.text==="string"?part.text:"";}).join("");}
 if(!answer.trim())throw new Error("The study assistant did not return an answer. Please retry.");
 onText(answer);return answer;
}
function makePrompt(level,subject,chapter,mode,topic){
 const task=({"notes":"Create detailed NCERT-aligned chapter notes, not a short summary. Organise every relevant chapter topic into clear sections. Explain definitions, intuition, mechanisms or derivations, assumptions, formulas with variable meanings and units, fully worked examples, important exceptions, connections between concepts, diagrams in words where helpful, common misconceptions, exam traps, and end-of-chapter recall questions with worked answers. Keep it original rather than copying textbook passages. If chapter scope or edition is uncertain, say so and do not invent official citations.","explain":"Explain the concept in plain language, step by step, with one worked or everyday example and a short self-check.","revision":"Create a compact revision sheet with high-yield points, formulas or facts, common mistakes and five recall prompts.","questions":"Create five original practice questions, then provide their answers with short explanations.","solve":"Solve the learner's question step by step, show calculations and units, state assumptions, and check the result."})[mode]||"Explain this clearly with a short example.";
 return "Act as a careful CBSE study tutor. Student level: "+level+". Subject: "+subject+". Chapter: "+(chapter||"not specified")+". Task: "+task+"\nLearner request:\n"+topic+"\nBe accurate and age-appropriate. Keep the answer focused. Do not invent official citations or claim live syllabus verification.";
}
let lastStudyController=null;
$("studyImage").addEventListener("change",async function(){
 const file=this.files&&this.files[0],hint=$("studyImageHint");studyAttachment=null;if(!file){if(hint)hint.textContent="Select an image, PDF, Word, Excel, PowerPoint or text file.";return;}
 if(hint)hint.textContent="Preparing "+file.name+"…";
 try{studyAttachment=await prepareAttachmentFile(file);if(hint)hint.textContent="Ready to attach: "+file.name+" · "+(studyAttachment.kind==="image"?(studyAttachment.needsServerConversion?"image will be converted for analysis":"image compressed"):(studyAttachment.kind==="document"?"document text will be extracted":"text file ready"))+".";
 }catch(error){this.value="";studyAttachment=null;if(hint)hint.textContent=error.message;toast(error.message);}
});
$("chatImage").addEventListener("change",async function(){
 const file=this.files&&this.files[0],hint=$("chatImageHint");chatAttachment=null;if(!file){if(hint)hint.textContent="Attach an image, PDF, office document or text file.";return;}
 if(hint)hint.textContent="Preparing "+file.name+"…";
 try{chatAttachment=await prepareAttachmentFile(file);if(hint)hint.textContent="Ready to attach: "+file.name+" · "+(chatAttachment.kind==="image"?(chatAttachment.needsServerConversion?"image will be converted for analysis":"image compressed"):(chatAttachment.kind==="document"?"document text will be extracted":"text file ready"))+".";
 }catch(error){this.value="";chatAttachment=null;if(hint)hint.textContent=error.message;toast(error.message);}
});
$("studyForm").addEventListener("submit",async function(ev){
 ev.preventDefault();
 const topic=$("topic").value.trim(),subject=subjectName(),chapter=$("chapter").value.trim(),level=$("classLevel").value,mode=$("studyMode").value;
 if(!topic||!subject){toast("Choose a subject and a topic first.");return;}
 if($("studyImage").files&&$("studyImage").files.length&&!studyAttachment){toast("Wait for the selected file to finish preparing, then generate again.");return;}
 if(lastStudyController)lastStudyController.abort();
 lastStudyController=new AbortController();
 const controller=lastStudyController,btn=$("askBtn");btn.disabled=true;btn.textContent="Connecting…";
 $("sourceList").innerHTML="";$("studyOutput").textContent="Preparing your study help…";lastAnswerText="";
 $("copyAnswer").disabled=true;if($("saveStudyPdf"))$("saveStudyPdf").disabled=true;if($("saveStudyLibrary"))$("saveStudyLibrary").disabled=true;
 try{
  const urls=($("sourceUrls")?.value||"").split(/\n|,/).map(function(u){return u.trim();}).filter(Boolean);
  renderSourceLinks($("sourceList"),[]);
  const prompt=makePrompt(level,subject,chapter,mode,topic);
  const answer=await streamStudyRequest(Object.assign({prompt:prompt,urls:urls,mode:mode,searchQuery:topic,userPrompt:topic},attachmentPayload(studyAttachment)),function(delta){if(lastAnswerText==="")$("studyOutput").innerHTML="";lastAnswerText+="" + delta;renderMarkdownInto($("studyOutput"),lastAnswerText);$("copyAnswer").disabled=false;if($("saveStudyPdf"))$("saveStudyPdf").disabled=false;if($("saveStudyLibrary"))$("saveStudyLibrary").disabled=false;},controller.signal,function(status){btn.textContent=String(status).includes("alternate response format")?"Retrying…":String(status).includes("Checking")?"Checking sources…":"Generating…";},function(sources){renderSourceLinks($("sourceList"),sources);});
  lastAnswerText=answer;
  const note=document.createElement("p");note.className="tiny";note.textContent="Check important details against your prescribed textbook or official syllabus.";
  $("studyOutput").appendChild(note);
 }catch(err){
  if(lastStudyController!==controller)return;
  const output=$("studyOutput"),partial=String(lastAnswerText||"").trim();
  output.innerHTML="";
  if(err.name==="AbortError"){
   if(partial){
    renderMarkdownInto(output,lastAnswerText);
    const note=document.createElement("p");note.className="study-output-notice";note.textContent="Generation stopped. The partial answer is preserved.";output.appendChild(note);
   }else{
    const stopped=document.createElement("p");stopped.className="study-output-notice";stopped.textContent="Response stopped.";output.appendChild(stopped);
   }
  }else{
   if(partial){
    renderMarkdownInto(output,lastAnswerText);
    const note=document.createElement("p");note.className="study-output-notice";note.textContent="The response was interrupted before it finished. The partial answer is preserved; retry to complete it.";output.appendChild(note);
    $("copyAnswer").disabled=false;if($("saveStudyPdf"))$("saveStudyPdf").disabled=false;if($("saveStudyLibrary"))$("saveStudyLibrary").disabled=false;
   }else{
    const error=document.createElement("div");error.className="study-error-message";error.setAttribute("role","alert");
    const title=document.createElement("strong");title.textContent="Couldn't finish this study request";
    const detail=document.createElement("p");detail.textContent=err.message||"The study assistant is temporarily unavailable.";
    const help=document.createElement("p");help.textContent="Your question and study settings are still saved. Retry, or switch to a shorter task such as Explain a specific topic.";
    error.append(title,detail,help);output.appendChild(error);
   }
   const actions=document.createElement("div");actions.className="study-retry-row";
   const retry=document.createElement("button");retry.type="button";retry.className="btn btn-light";retry.textContent="↻ Retry request";
   retry.addEventListener("click",function(){if(!btn.disabled)$("studyForm").requestSubmit();});
   actions.appendChild(retry);
   output.appendChild(actions);
  }
 }finally{
  if(lastStudyController===controller){lastStudyController=null;btn.disabled=false;btn.textContent="Generate study help ↗";}
 }
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
let chatHistory=[],chatTranscript=[],currentChatSessionId="",activeChatController=null,lastChatAnswer="",lastChatPrompt="",chatBusy=false;
function chatAddMessage(role,text){
 const root=$("chatMessages");
 const welcome=root.querySelector(".chat-welcome");if(welcome)welcome.remove();
 const isUser=role==="user";
 const box=document.createElement("div");box.className="chat-message "+(isUser?"user":"assistant");box.dataset.role=isUser?"user":"assistant";
 const avatar=document.createElement("div");avatar.className="chat-message-avatar";avatar.setAttribute("aria-hidden","true");avatar.textContent=isUser?"Y":"✦";
 const main=document.createElement("div");main.className="chat-message-main";
 const meta=document.createElement("div");meta.className="chat-message-meta";
 const label=document.createElement("div");label.className="chat-message-label";label.textContent=isUser?"You":"KaushalPath AI";meta.appendChild(label);
 if(!isUser){
  const copy=document.createElement("button");copy.type="button";copy.className="chat-inline-action";copy.dataset.copyMessage="true";copy.setAttribute("aria-label","Copy this AI response");copy.title="Copy this response";copy.textContent="Copy";copy.disabled=!String(text||"").trim();meta.appendChild(copy);
 }
 const content=document.createElement("div");content.className="chat-message-content";content.textContent=text||"";
 main.appendChild(meta);main.appendChild(content);box.appendChild(avatar);box.appendChild(main);root.appendChild(box);
 root.scrollTop=root.scrollHeight;
 return content;
}
function enableChatTools(enabled){
 ["chatCopy","chatPdf","chatText","chatSpeak","chatRegenerate","chatSave"].forEach(function(id){$(id).disabled=!enabled;});
}
function updateLocalAiStatus(message,kind){
 const text=document.getElementById("localAiStatus"),badge=document.getElementById("localAiBadge");
 if(text)text.textContent=String(message||"");
 if(badge){
  badge.classList.toggle("is-ready",kind==="ready");
  badge.classList.toggle("is-loading",kind==="loading");
  badge.textContent=kind==="ready"?"Ready on device":kind==="loading"?"Downloading model…":kind==="error"?"Unavailable":(window.KP_LOCAL_AI&&window.KP_LOCAL_AI.isPreferred()?"Local preferred":"Not installed");
 }
}
function refreshLocalAiCapabilities(){
 const local=window.KP_LOCAL_AI;if(!local)return;
 const c=local.capabilities();
 const model=document.getElementById("localAiModel"),memory=document.getElementById("localAiMemory"),reason=document.getElementById("localAiDeviceReason");
 const install=document.getElementById("localAiInstall"),preference=document.getElementById("localAiPrefer"),progress=document.getElementById("localAiProgress"),label=document.getElementById("localAiProgressLabel");
 if(model)model.textContent=local.isReady()?local.getModelLabel():c.modelLabel;
 const memoryBase=c.memory?("Browser RAM hint: "+c.memory+" GB · logical CPU cores: "+(c.cores||"not reported")):"Browser RAM hint is unavailable · logical CPU cores: "+(c.cores||"not reported");
 if(memory)memory.textContent=memoryBase;
 if(memory&&navigator.storage&&typeof navigator.storage.estimate==="function"){
  navigator.storage.estimate().then(function(estimate){
   if(!memory.isConnected)return;
   const quota=Number(estimate&&estimate.quota),usage=Number(estimate&&estimate.usage);
   if(Number.isFinite(quota)&&Number.isFinite(usage))memory.textContent=memoryBase+" · Estimated free browser-origin storage: "+Math.max(0,(quota-usage)/(1024*1024*1024)).toFixed(2)+" GB";
  }).catch(function(){});
 }
 if(reason)reason.textContent=c.reason+" Estimated GPU memory: "+c.estimatedGpuMemory+"; "+c.estimatedDownloadSpace+". Browser estimates are approximate, not a guarantee of free RAM or GPU memory.";
 if(install)install.disabled=!c.canRun;
 if(preference){preference.checked=local.isPreferred();preference.disabled=!c.canRun;}
 if(progress&&!local.isReady())progress.value=0;
 if(label&&!local.isReady())label.textContent="Model will download after you enable it";
 if(local.isReady()){
  updateLocalAiStatus("Local inference is ready. Text-only prompts can run on this device; attached files and web research still require the cloud route.","ready");
  if(install){install.textContent="Local model ready ✓";install.disabled=true;}
  if(label)label.textContent="Model loaded for this session";
 }else if(!c.canRun){
  updateLocalAiStatus(c.reason+" You can continue using cloud AI.","error");
 }
}
let localAiLoadingUi=false;
async function enableLocalAiFromUserAction(){
 const local=window.KP_LOCAL_AI;if(!local){updateLocalAiStatus("The local AI module did not initialise. Refresh the page and retry.","error");return;}
 const install=document.getElementById("localAiInstall"),preference=document.getElementById("localAiPrefer");
 if(!local.capabilities().canRun){refreshLocalAiCapabilities();return;}
 local.setPreferred(true);if(preference)preference.checked=true;
 if(install){install.disabled=true;install.textContent="Preparing model…";}
 localAiLoadingUi=true;updateLocalAiStatus("Downloading model files if they are not cached, then preparing WebGPU memory. Keep this tab open.","loading");
 try{
  const result=await local.load({onProgress:function(p){
   const bar=document.getElementById("localAiProgress"),label=document.getElementById("localAiProgressLabel");
   if(bar&&Number.isFinite(p.progress))bar.value=Math.max(0,Math.min(1,p.progress));
   if(label)label.textContent=Number.isFinite(p.progress)?Math.round(p.progress*100)+"% · "+String(p.text||"Preparing model"):String(p.text||"Preparing model…");
   updateLocalAiStatus(String(p.text||"Preparing on-device model…"),"loading");
  }});
  updateLocalAiStatus(result.fallback?"The larger model could not fit this device, so "+result.label+" was installed instead. Text-only questions can now run locally.":result.label+" is loaded. Text-only questions now run locally when the preference is enabled.","ready");
  if(install){install.textContent="Local model ready ✓";install.disabled=true;}
  if(document.getElementById("localAiProgressLabel"))document.getElementById("localAiProgressLabel").textContent="Ready · cached model reused on future visits where browser storage persists";
  if(document.getElementById("localAiProgress"))document.getElementById("localAiProgress").value=1;
 }catch(error){
  updateLocalAiStatus(!local.isPreferred()?"Cloud AI remains selected. Local setup did not finish. "+String(error&&error.message||error):String(error&&error.message||error)+" No prompt was automatically sent to the cloud. You can switch to cloud AI explicitly below.","error");
  if(install){install.disabled=false;install.textContent="Retry local model setup";}
  if(document.getElementById("localAiProgressLabel"))document.getElementById("localAiProgressLabel").textContent="Setup did not finish";
 }finally{localAiLoadingUi=false;refreshLocalAiCapabilities();}
}
function initLocalAiControls(){
 const local=window.KP_LOCAL_AI;if(!local)return;
 refreshLocalAiCapabilities();
 const install=document.getElementById("localAiInstall"),preference=document.getElementById("localAiPrefer"),cloud=document.getElementById("localAiUseCloud");
 if(install)install.addEventListener("click",enableLocalAiFromUserAction);
 if(preference)preference.addEventListener("change",function(){
  local.setPreferred(preference.checked);
  if(preference.checked){enableLocalAiFromUserAction();}
  else{updateLocalAiStatus("Cloud AI is selected by default. Your downloaded model files are not removed; you can enable local preference again any time.","");refreshLocalAiCapabilities();}
 });
 if(cloud)cloud.addEventListener("click",function(){
  local.setPreferred(false);if(preference)preference.checked=false;
  updateLocalAiStatus("Cloud AI selected. Text prompts will use the server; attachments and web research also use the cloud route.","");
  if(!chatBusy&&typeof local.unload==="function")local.unload().then(function(){updateLocalAiStatus("Cloud AI selected. The local model has been unloaded from GPU memory; its cached files remain available for a later opt-in.","");refreshLocalAiCapabilities();}).catch(function(){updateLocalAiStatus("Cloud AI selected. A local GPU session could not be unloaded cleanly; close or refresh this tab if memory remains constrained.","error");});
  toast("Cloud AI selected for text-only questions.");
 });
 window.addEventListener("kp-local-ai-error",function(event){
  if(!localAiLoadingUi)updateLocalAiStatus(String(event.detail&&event.detail.message||"The saved local model could not be restored. Use Retry local model setup."),"error");
 });
 // Restore on-device AI only after the learner explicitly opted in during a previous visit.
 if(local.isPreferred()&&local.capabilities().canRun&&!local.isReady()){
  updateLocalAiStatus("Restoring your previously enabled local model. If its cache was cleared, model files may need to download again.","loading");
  const installButton=document.getElementById("localAiInstall");
  if(installButton){installButton.disabled=true;installButton.textContent="Loading saved model…";}
  local.load({onProgress:function(p){
   const bar=document.getElementById("localAiProgress"),label=document.getElementById("localAiProgressLabel");
   if(bar&&Number.isFinite(p.progress))bar.value=Math.max(0,Math.min(1,p.progress));
   if(label)label.textContent=Number.isFinite(p.progress)?Math.round(p.progress*100)+"% · "+String(p.text||"Loading saved model"):String(p.text||"Loading saved model…");
   updateLocalAiStatus(String(p.text||"Loading saved local model…"),"loading");
  }}).then(function(result){
   updateLocalAiStatus(result.fallback?"The larger model did not fit; "+result.label+" was loaded instead. Text-only questions will run locally.":result.label+" is ready. Text-only prompts will run locally.","ready");
   if(installButton){installButton.textContent="Local model ready ✓";installButton.disabled=true;}
   const bar=document.getElementById("localAiProgress");if(bar)bar.value=1;
  }).catch(function(error){
   updateLocalAiStatus(String(error&&error.message||error)+" Use Retry local model setup, or switch to cloud AI.","error");
   if(installButton){installButton.disabled=false;installButton.textContent="Retry local model setup";}
  });
 }
}
initLocalAiControls();

async function sendChat(raw,regenerate){
 const question=String(raw||"").trim();if(!question||chatBusy)return;
 if(activeChatController)activeChatController.abort();
 if(!regenerate){
  lastChatAttachment=chatAttachment;chatAttachment=null;
  if($("chatImage"))$("chatImage").value="";
  if($("chatImageHint"))$("chatImageHint").textContent=lastChatAttachment?"Attached: "+lastChatAttachment.name:"Attach an image, PDF, office document or text file.";
  chatHistory.push({role:"user",content:question});lastChatPrompt=question;const displayedQuestion=question+(lastChatAttachment?"\n\n"+attachmentLabel(lastChatAttachment):"");chatAddMessage("user",displayedQuestion);recordChatMessage("user",displayedQuestion);
 }else if(chatHistory.length&&chatHistory[chatHistory.length-1].role==="assistant")chatHistory.pop();
 const attachmentForRequest=lastChatAttachment,webSearch=Boolean($("chatWebSearch")&&$("chatWebSearch").checked);
 const localApi=window.KP_LOCAL_AI,localPreferred=Boolean(localApi&&localApi.isPreferred());
 const needsCloudForThisRequest=Boolean(attachmentForRequest||webSearch);
 const useLocal=localPreferred&&!needsCloudForThisRequest;
 if(localPreferred&&needsCloudForThisRequest)updateLocalAiStatus("This request includes a file or web research, so it will use the cloud route. Text-only questions can use the local model.","");
 chatBusy=true;activeChatController=new AbortController();
 const controller=activeChatController,send=$("chatSend"),input=$("chatInput"),stop=$("chatStop"),messages=$("chatMessages");
 send.disabled=true;send.textContent="Generating…";input.disabled=true;stop.disabled=false;messages.setAttribute("aria-busy","true");$("chatStatus").textContent=useLocal?"Preparing private on-device inference…":(needsCloudForThisRequest?"Connecting to cloud AI for file/research support…":"Connecting to the cloud study assistant…");
 enableChatTools(Boolean(lastChatAnswer));
 const node=chatAddMessage("assistant",""),messageBox=node.closest(".chat-message");
 const routeLabel=messageBox&&messageBox.querySelector(".chat-message-label");
 if(routeLabel)routeLabel.textContent=useLocal?"On-device AI · private":(localPreferred&&needsCloudForThisRequest?"KaushalPath AI · cloud required":"KaushalPath AI · cloud");
 node.innerHTML='<span class="chat-typing" role="status"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span><span class="chat-typing-copy">Preparing your answer…</span></span>';messageBox.classList.add("is-pending");
 let waiting=true,answer="";
 try{
  const level=$("chatClass").value,subject=$("chatSubject").value,mode=$("chatMode").value;
  const prompt=makePrompt(level,subject,"",mode,question);
  renderSourceLinks($("chatSources"),[]);
  const onText=function(delta){
   const shouldFollow=messages.scrollHeight-messages.scrollTop-messages.clientHeight<120;
   if(waiting){node.innerHTML="";waiting=false;messageBox.classList.remove("is-pending");const copyButton=messageBox.querySelector("[data-copy-message]");if(copyButton)copyButton.disabled=false;}
   answer+=delta;renderMarkdownInto(node,answer);
   if(shouldFollow)messages.scrollTop=messages.scrollHeight;
   $("chatStatus").textContent=(useLocal?"Generating on this device · ":"Writing your answer · ")+answer.length+" characters";
  };
  if(useLocal){
   if(!localApi.isReady()){
    $("chatStatus").textContent="Loading the selected on-device model…";
    await localApi.load({onProgress:function(p){updateLocalAiStatus(String(p.text||"Preparing local model…"),"loading");$("chatStatus").textContent=String(p.text||"Preparing local model…");}});
   }
   if(!localApi.isReady())throw new Error("The local model is not ready. Retry setup or choose cloud AI. This request was not sent to the cloud.");
   answer=await localApi.respond({prompt:prompt,mode:mode,history:chatHistory.slice(0,-1).slice(-6),signal:controller.signal,onToken:onText});
  }else{
   answer=await streamStudyRequest(Object.assign({prompt:prompt,mode:mode,urls:[],messages:chatHistory.slice(0,-1).slice(-6),webSearch:webSearch,searchQuery:question,userPrompt:question},attachmentPayload(attachmentForRequest)),onText,controller.signal,function(status){$("chatStatus").textContent=status;},function(sources){renderSourceLinks($("chatSources"),sources);});
  }
  if(!String(answer||"").trim()){
   waiting=false;messageBox.classList.remove("is-pending");node.textContent="The assistant returned an empty response. Please try again.";node.classList.add("chat-message-error");lastChatAnswer="";$("chatStatus").textContent="No answer received";enableChatTools(false);return;
  }
  messageBox.dataset.rawAnswer=answer;
  lastChatAnswer=answer;chatHistory.push({role:"assistant",content:answer});chatHistory=chatHistory.slice(-10);recordChatMessage("assistant",answer);
  $("chatStatus").textContent=useLocal?"Answer ready · on-device inference; your text prompt stayed on this device":(needsCloudForThisRequest?"Answer ready · cloud used for file or research support":(needsRemoteTools(Object.assign({webSearch:webSearch,userPrompt:question},attachmentPayload(attachmentForRequest)))?"Answer ready · sources checked":"Answer ready"));
  enableChatTools(Boolean(answer));
 }catch(err){
  messageBox.classList.remove("is-pending");
  if(err.name==="AbortError"){$("chatStatus").textContent="Response stopped";if(waiting)node.textContent="Response stopped.";}
  else{$("chatStatus").textContent="Unable to complete";node.textContent="The study assistant could not finish this response.\n\n"+err.message+"\n\nTry a shorter question or retry. Your earlier messages are saved.";node.classList.add("chat-message-error");}
  enableChatTools(Boolean(lastChatAnswer));
 }finally{
  if(activeChatController===controller)activeChatController=null;
  chatBusy=false;send.disabled=false;send.textContent="Send question ↗";input.disabled=false;stop.disabled=true;messages.setAttribute("aria-busy","false");input.focus();renderChatSessions();
  if(localApi&&!localApi.isPreferred()&&localApi.isReady()&&typeof localApi.unload==="function")localApi.unload().catch(function(){});
 }
}
$("chatForm").addEventListener("submit",function(ev){ev.preventDefault();const value=$("chatInput").value.trim();if($("chatImage").files&&$("chatImage").files.length&&!chatAttachment){toast("Wait for the selected file to finish preparing, then send your question.");return;}if(value&&!chatBusy){$("chatInput").value="";sendChat(value,false);}});
$("chatInput").addEventListener("keydown",function(ev){if(ev.key==="Enter"&&!ev.shiftKey){ev.preventDefault();$("chatForm").requestSubmit();}});
$("chatMessages").addEventListener("click",async function(ev){
 const copyButton=ev.target.closest("[data-copy-message]");
 if(copyButton){
  const box=copyButton.closest(".chat-message"),content=box&&box.querySelector(".chat-message-content"),value=content?(content.innerText||content.textContent||"").trim():"";
  if(!value){toast("There is no response to copy yet.");return;}
  try{await navigator.clipboard.writeText(value);toast("Response copied.");}catch(e){toast("Clipboard permission was blocked.");}
  return;
 }
 const btn=ev.target.closest("[data-chat-prompt]");if(btn){$("chatInput").value=btn.dataset.chatPrompt;$("chatInput").focus();}
});
$("chatStop").addEventListener("click",function(){if(activeChatController)activeChatController.abort();});
$("chatCopy").addEventListener("click",async function(){if(!lastChatAnswer)return;try{await navigator.clipboard.writeText(lastChatAnswer);toast("Answer copied.");}catch(e){toast("Clipboard permission was blocked.");}});
$("chatSave").addEventListener("click",saveChatAnswerToLibrary);
$("chatPdf").addEventListener("click",function(){if(lastChatAnswer)printAsPdf("AI study answer",lastChatAnswer);});
$("chatText").addEventListener("click",function(){if(lastChatAnswer)download("kaushalpath-ai-answer.txt",lastChatAnswer,"text/plain");});
$("chatSpeak").addEventListener("click",function(){if(!lastChatAnswer)return;if(!("speechSynthesis" in window)){toast("Read aloud is not supported in this browser.");return;}window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(lastChatAnswer);utterance.lang="en-IN";window.speechSynthesis.speak(utterance);});
$("chatRegenerate").addEventListener("click",function(){if(lastChatPrompt&&!chatBusy)sendChat(lastChatPrompt,true);});
$("chatClear").addEventListener("click",function(){if(chatBusy){toast("Stop the current response before starting a new conversation.");return;}resetCurrentChat();});
$("saveStudyPdf").disabled=true;

const HISTORY_KEY="kp-results",FOCUS_KEY="kp-focus-sessions",FOCUS_STATE_KEY="kp-focus-state",ACTIVE_TEST_KEY="kp-active-test",LIBRARY_KEY="kp-saved-library",CHAT_SESSIONS_KEY="kp-chat-sessions",PLANNER_KEY="kp-planner-tasks";
function readLocalJSON(key,fallback){try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}
function writeLocalJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){return false;}}
function validResult(r){return !!r&&typeof r==="object"&&typeof r.title==="string"&&r.title.length<=250&&typeof r.exam==="string"&&typeof r.date==="string"&&r.date.length<=120&&Number.isFinite(Number(r.score))&&Number.isFinite(Number(r.max))&&Number(r.max)>0&&Number.isFinite(Number(r.correct))&&Number.isFinite(Number(r.wrong))&&Number.isFinite(Number(r.blank));}
function getHistory(){const stored=readLocalJSON(HISTORY_KEY,[]);return Array.isArray(stored)?stored.filter(validResult).slice(0,60):[];}
function saveHistory(item){const list=getHistory();list.unshift(item);const saved=writeLocalJSON(HISTORY_KEY,list.slice(0,60));renderHistory();window.dispatchEvent(new CustomEvent("kp:results-updated"));if(!saved)toast("Your result is visible, but browser storage is full or unavailable. Export it now.");}
function getFocusSessions(){const stored=readLocalJSON(FOCUS_KEY,[]);return Array.isArray(stored)?stored.filter(function(s){return s&&typeof s.date==="string"&&Number.isFinite(Date.parse(s.date))&&Number.isFinite(Number(s.seconds))&&Number(s.seconds)>=60&&Number(s.seconds)<=7200&&s.mode==="focus";}).slice(-100):[];}
function saveFocusSessions(list){return writeLocalJSON(FOCUS_KEY,list.slice(-100));}
function clearSavedTest(){try{localStorage.removeItem(ACTIVE_TEST_KEY);}catch(e){}}
function questionIsAnswered(question,answer){
 if(question&&question.responseType==="written")return typeof answer==="string"&&answer.trim().length>0;
 return Number.isInteger(answer)&&answer>=0&&Array.isArray(question&&question.o)&&answer<question.o.length;
}
function validTestSnapshot(test,expectedId){
 if(!test||typeof test!=="object"||test.id!==expectedId||typeof test.title!=="string"||!test.title.trim()||test.title.length>180||typeof test.exam!=="string"||test.exam.length>80||typeof test.level!=="string"||test.level.length>80||!Number.isFinite(Number(test.duration))||Number(test.duration)<1||Number(test.duration)>240||!Number.isFinite(Number(test.mark))||Number(test.mark)<0||Number(test.mark)>100||!Number.isFinite(Number(test.negativeMark))||Number(test.negativeMark)<0||Number(test.negativeMark)>100||!Array.isArray(test.qs)||test.qs.length<1||test.qs.length>100)return false;
 return test.qs.every(function(q){
  if(!q||typeof q.q!=="string"||!q.q.length||q.q.length>4000||typeof q.e!=="string"||q.e.length>5000||(q.mark!=null&&(!Number.isFinite(Number(q.mark))||Number(q.mark)<0||Number(q.mark)>100))||(q.negativeMark!=null&&(!Number.isFinite(Number(q.negativeMark))||Number(q.negativeMark)<0||Number(q.negativeMark)>100)))return false;
  if(q.responseType==="written")return Array.isArray(q.o)&&q.o.length===0&&q.a===-1&&typeof (q.modelAnswer||q.e)==="string"&&String(q.modelAnswer||q.e).length<=5000&&Array.isArray(q.rubric)&&q.rubric.every(function(line){return typeof line==="string"&&line.length<=1000;});
  return Array.isArray(q.o)&&q.o.length>=2&&q.o.length<=8&&q.o.every(function(o){return typeof o==="string"&&o.length<=1200;})&&Number.isInteger(q.a)&&q.a>=0&&q.a<q.o.length;
 });
}
function getSavedTest(){
 const saved=readLocalJSON(ACTIVE_TEST_KEY,null);if(!saved||typeof saved!=="object")return null;
 const testId=String(saved.testId||"");let test=questions.find(function(t){return t.id===testId;});
 if(!test&&validTestSnapshot(saved.testSnapshot,testId)){test=saved.testSnapshot;questions.push(test);}
 if(!test||!Number.isFinite(Number(saved.endAt))){clearSavedTest();return null;}
 const index=Number(saved.index),answers={};
 if(!Number.isInteger(index)||index<0||index>=test.qs.length){clearSavedTest();return null;}
 if(saved.answers&&typeof saved.answers==="object")Object.keys(saved.answers).forEach(function(key){const qi=Number(key);if(!Number.isInteger(qi)||qi<0||qi>=test.qs.length)return;const question=test.qs[qi],raw=saved.answers[key];if(question.responseType==="written"){if(typeof raw==="string"&&raw.length<=12000)answers[qi]=raw;}else{const answer=Number(raw);if(Number.isInteger(answer)&&answer>=0&&answer<question.o.length)answers[qi]=answer;}});
 return {testId:test.id,test:test,answers:answers,index:index,endAt:Number(saved.endAt)};
}
function saveActiveTest(){if(!active||!active.test)return;const ok=writeLocalJSON(ACTIVE_TEST_KEY,{testId:active.test.id,testSnapshot:(active.test.id.indexOf("review-")===0||active.test.annualExam)?active.test:null,answers:active.answers,index:active.index,endAt:active.endAt,updatedAt:Date.now()});if(!ok)toast("Autosave is unavailable in this browser. Keep this tab open.");refreshResumeBanner();}
function refreshResumeBanner(){
 const banner=$("resumeTestBanner");if(!banner)return;if(active){banner.classList.add("hidden");return;}const saved=getSavedTest(),title=$("resumeTestTitle"),detail=$("resumeTestDetail");
 if(!saved){banner.classList.add("hidden");return;}
 const test=questions.find(function(t){return t.id===saved.testId;});if(!test){banner.classList.add("hidden");return;}
 if(title)title.textContent=test.title;
 const remaining=Math.max(0,Math.ceil((saved.endAt-Date.now())/1000)),answered=test.qs.reduce(function(total,q,index){return total+(questionIsAnswered(q,saved.answers[index])?1:0);},0);
 if(detail)detail.textContent=remaining===0?"Time has expired. Resume to submit your saved answers.":answered+" of "+test.qs.length+" answers saved · Question "+(saved.index+1)+" of "+test.qs.length+" · time remaining "+String(Math.floor(remaining/60)).padStart(2,"0")+":"+String(remaining%60).padStart(2,"0")+".";
 banner.classList.remove("hidden");
}
function renderHistory(){
 const list=getHistory(),root=$("historyList");root.replaceChildren();
 if(!list.length){const empty=document.createElement("div");empty.className="empty";empty.textContent="No completed tests yet. Try a practice set above.";root.appendChild(empty);}
 else list.slice(0,12).forEach(function(r){const row=document.createElement("div");row.className="history-row";const left=document.createElement("div"),title=document.createElement("strong"),meta=document.createElement("small"),score=document.createElement("strong");title.textContent=r.title;meta.textContent=r.date+" · "+r.correct+" correct · "+r.wrong+" wrong";score.textContent=r.score+" / "+r.max;left.append(title,meta);row.append(left,score);root.appendChild(row);});
 refreshMomentum();
}
function localDayKey(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function refreshMomentum(){
 const history=getHistory(),sessions=getFocusSessions(),attempted=history.reduce(function(sum,r){return sum+Math.max(0,Number(r.correct)||0)+Math.max(0,Number(r.wrong)||0);},0),correct=history.reduce(function(sum,r){return sum+Math.max(0,Number(r.correct)||0);},0),minutes=Math.round(sessions.reduce(function(sum,s){return sum+Number(s.seconds||0);},0)/60);
 const days=new Set();history.forEach(function(r){const d=new Date(r.date);if(Number.isFinite(d.getTime()))days.add(localDayKey(d));});sessions.forEach(function(s){const d=new Date(s.date);if(Number.isFinite(d.getTime()))days.add(localDayKey(d));});
 let streak=0,cursor=new Date();cursor.setHours(0,0,0,0);if(!days.has(localDayKey(cursor)))cursor.setDate(cursor.getDate()-1);
 while(days.has(localDayKey(cursor))&&streak<3650){streak++;cursor.setDate(cursor.getDate()-1);}
 const attempts=$("momentumAttempts"),accuracy=$("momentumAccuracy"),focus=$("momentumFocus"),streakNode=$("momentumStreak");
 const percentage=attempted?Math.round(correct/attempted*100):0;
 const focusLabel=minutes>=60?Math.floor(minutes/60)+"h "+(minutes%60)+"m":minutes+"m";
 const streakLabel=String(streak)+" "+(streak===1?"day":"days");
 if(attempts)attempts.textContent=String(history.length);
 if(accuracy)accuracy.textContent=percentage+"%";
 if(focus)focus.textContent=focusLabel;
 if(streakNode)streakNode.textContent=streakLabel;
 const dashTests=$("dashboardTestsCompleted"),dashAccuracy=$("dashboardAccuracyStat"),dashFocus=$("dashboardFocusTime"),dashStreak=$("dashboardStreak"),dashScore=$("dashboardAccuracy"),dashCount=$("dashboardTestsCount"),dashCaption=$("dashboardProgressCaption"),dashBar=$("dashboardAccuracyBar");
 if(dashTests)dashTests.textContent=String(history.length);
 if(dashAccuracy)dashAccuracy.textContent=percentage+"%";
 if(dashFocus)dashFocus.textContent=focusLabel;
 if(dashStreak)dashStreak.textContent=streakLabel;
 if(dashScore)dashScore.textContent=attempted?percentage+"%":"—";
 if(dashCount)dashCount.textContent=String(history.length);
 if(dashCaption)dashCaption.textContent=attempted?correct+" correct answers across "+attempted+" attempted. Your progress stays on this device.":"Complete a practice set to start tracking your personal accuracy here.";
 if(dashBar){dashBar.style.width=attempted?percentage+"%":"0%";const progress=dashBar.closest('[role="progressbar"]');if(progress)progress.setAttribute("aria-valuenow",String(percentage));}
}
let focusInterval=null,focusState={mode:"focus",duration:1500,remaining:1500,running:false,endsAt:null};
function saveFocusState(){writeLocalJSON(FOCUS_STATE_KEY,focusState);}
function renderFocusTimer(){
 const clock=$("focusClock"),status=$("focusStatus"),button=$("focusStartPause");if(!clock||!status||!button)return;
 const remaining=Math.max(0,Math.ceil(focusState.running?(focusState.endsAt-Date.now())/1000:focusState.remaining));
 clock.textContent=String(Math.floor(remaining/60)).padStart(2,"0")+":"+String(remaining%60).padStart(2,"0");
 clock.setAttribute("aria-label",(focusState.mode==="focus"?"Focus":"Break")+" time remaining "+clock.textContent);
 button.textContent=focusState.running?"Pause timer":focusState.mode==="focus"?"Start focus":"Start break";
 status.textContent=focusState.running?(focusState.mode==="focus"?"Focus session in progress. Keep one task in front of you.":"Break in progress. Step away from the screen if you can."):focusState.remaining===focusState.duration?(focusState.mode==="focus"?"Ready for a "+Math.round(focusState.duration/60)+"-minute focus block.":"Ready for a short break."):("Timer paused. You can resume the remaining "+clock.textContent+".");
 document.querySelectorAll("[data-focus-preset]").forEach(function(b){const mode=b.dataset.focusMode||"focus",seconds=Number(b.dataset.focusPreset);b.classList.toggle("active",!focusState.running&&mode===focusState.mode&&seconds===focusState.duration);});
}
function stopFocusInterval(){if(focusInterval){clearInterval(focusInterval);focusInterval=null;}}
function setFocusPreset(mode,seconds){stopFocusInterval();focusState={mode:mode,duration:seconds,remaining:seconds,running:false,endsAt:null};saveFocusState();renderFocusTimer();}
function completeFocusTimer(){
 const completedMode=focusState.mode,completedDuration=focusState.duration;
 stopFocusInterval();
 if(completedMode==="focus"){
  const sessions=getFocusSessions();sessions.push({date:new Date().toISOString(),seconds:completedDuration,mode:"focus"});const saved=saveFocusSessions(sessions);refreshMomentum();if(!saved)toast("Focus completed, but the session could not be saved in this browser.");
  focusState={mode:"break",duration:300,remaining:300,running:false,endsAt:null};toast("Focus block complete. Take a 5-minute break.");
 }else{
  focusState={mode:"focus",duration:1500,remaining:1500,running:false,endsAt:null};toast("Break complete. Ready for another focus block?");
 }
 saveFocusState();renderFocusTimer();
}
function focusTick(){if(!focusState.running)return;focusState.remaining=Math.max(0,Math.ceil((focusState.endsAt-Date.now())/1000));if(focusState.remaining<=0){completeFocusTimer();return;}renderFocusTimer();}
function beginFocusInterval(){stopFocusInterval();focusInterval=setInterval(focusTick,250);}
function initFocusTimer(){
 const saved=readLocalJSON(FOCUS_STATE_KEY,null);
 if(saved&&["focus","break"].includes(saved.mode)&&Number.isFinite(Number(saved.duration))&&Number(saved.duration)>=60&&Number(saved.duration)<=3600&&Number.isFinite(Number(saved.remaining))&&Number(saved.remaining)>=0&&Number(saved.remaining)<=Number(saved.duration)){
  focusState={mode:saved.mode,duration:Number(saved.duration),remaining:Number(saved.remaining),running:Boolean(saved.running)&&Number.isFinite(Number(saved.endsAt)),endsAt:Number(saved.endsAt)||null};
  if(focusState.running){focusState.remaining=Math.max(0,Math.ceil((focusState.endsAt-Date.now())/1000));if(focusState.remaining<=0){completeFocusTimer();}else beginFocusInterval();}
 }
 renderFocusTimer();refreshMomentum();
}
$("focusStartPause").addEventListener("click",function(){
 if(focusState.running){focusState.remaining=Math.max(0,Math.ceil((focusState.endsAt-Date.now())/1000));focusState.running=false;focusState.endsAt=null;stopFocusInterval();saveFocusState();renderFocusTimer();return;}
 if(focusState.remaining<=0)focusState.remaining=focusState.duration;
 focusState.running=true;focusState.endsAt=Date.now()+focusState.remaining*1000;saveFocusState();renderFocusTimer();beginFocusInterval();
});
$("focusReset").addEventListener("click",function(){setFocusPreset(focusState.mode,focusState.duration);});
document.querySelectorAll("[data-focus-preset]").forEach(function(button){button.addEventListener("click",function(){setFocusPreset(button.dataset.focusMode||"focus",Number(button.dataset.focusPreset));});});
$("resumeSavedTest").addEventListener("click",function(){
 const saved=getSavedTest();if(!saved){refreshResumeBanner();return;}
 const test=questions.find(function(t){return t.id===saved.testId;});if(!test)return;
 clearInterval(tick);active={test:test,answers:saved.answers,index:saved.index,endAt:saved.endAt};$("resultWorkspace").classList.add("hidden");$("examWorkspace").classList.remove("hidden");$("examWorkspace").scrollIntoView({behavior:"smooth",block:"start"});
 if(active.test.timed!==false&&active.endAt<=Date.now()){finishTest(true);return;}
 renderQuestion();saveActiveTest();tick=setInterval(function(){if(!active)return;updateTimer();},1000);
});
$("discardSavedTest").addEventListener("click",function(){if(!confirm("Discard this saved test attempt? Your completed results will remain."))return;clearSavedTest();refreshResumeBanner();toast("Unfinished test discarded.");});
window.addEventListener("beforeunload",function(){if(active)saveActiveTest();});
document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"&&active){if(active.test&&active.test.fullLength&&document.body.classList.contains("mock-test-window")){finishTest("tab-switch");return;}saveActiveTest();}});
function exportProgressBackup(){const payload={app:"KaushalPath",version:1,exportedAt:new Date().toISOString(),results:getHistory(),focusSessions:getFocusSessions(),savedLibrary:getSavedLibrary(),chatSessions:getChatSessions(),plannerTasks:getPlannerTasks()};download("kaushalpath-progress-backup.json",JSON.stringify(payload,null,2),"application/json");toast("Progress backup exported.");}
$("exportBackup").addEventListener("click",exportProgressBackup);
$("importBackup").addEventListener("click",function(){$("backupFile").click();});
$("backupFile").addEventListener("change",async function(){
 const file=$("backupFile").files&&$("backupFile").files[0];if(!file)return;
 try{
  if(file.size>3*1024*1024)throw new Error("Choose a progress backup smaller than 3 MB.");
  const payload=JSON.parse(await file.text());
  if(!payload||payload.app!=="KaushalPath"||payload.version!==1||!Array.isArray(payload.results)||!Array.isArray(payload.focusSessions)||payload.results.length>60||payload.focusSessions.length>100||(payload.savedLibrary!=null&&!Array.isArray(payload.savedLibrary))||(Array.isArray(payload.savedLibrary)&&payload.savedLibrary.length>40)||(payload.chatSessions!=null&&!Array.isArray(payload.chatSessions))||(Array.isArray(payload.chatSessions)&&payload.chatSessions.length>8)||(payload.plannerTasks!=null&&!Array.isArray(payload.plannerTasks))||(Array.isArray(payload.plannerTasks)&&payload.plannerTasks.length>120))throw new Error("This is not a supported KaushalPath progress backup.");
  if(payload.results.some(function(r){return !validResult(r);}))throw new Error("The backup contains a result record with invalid fields.");
  if(payload.focusSessions.some(function(s){return !s||typeof s.date!=="string"||!Number.isFinite(Date.parse(s.date))||!Number.isInteger(Number(s.seconds))||Number(s.seconds)<60||Number(s.seconds)>7200||s.mode!=="focus";}))throw new Error("The backup contains an invalid focus-session record.");
  const importedLibrary=Array.isArray(payload.savedLibrary)?payload.savedLibrary:[];if(importedLibrary.some(function(item){return !validLibraryItem(item);}))throw new Error("The backup contains an invalid saved-study record.");
  const importedChats=Array.isArray(payload.chatSessions)?payload.chatSessions:[];if(importedChats.some(function(item){return !validChatSession(item);}))throw new Error("The backup contains an invalid saved-chat record.");
  const importedPlannerTasks=Array.isArray(payload.plannerTasks)?payload.plannerTasks:[];if(importedPlannerTasks.some(function(item){return !validPlannerTask(item);}))throw new Error("The backup contains an invalid study-plan task.");
  if(chatBusy)throw new Error("Stop the current AI response before importing a progress backup.");
  if(!confirm("Replace this browser's "+getHistory().length+" result(s), "+getFocusSessions().length+" focus session(s), "+getSavedLibrary().length+" saved answer(s), and "+getChatSessions().length+" conversation(s), and "+getPlannerTasks().length+" study task(s) with "+payload.results.length+" result(s), "+payload.focusSessions.length+" focus session(s), "+importedLibrary.length+" saved answer(s), "+importedChats.length+" conversation(s), and "+importedPlannerTasks.length+" study task(s) from this backup? Export your current progress first if you need a copy."))return;
  const previousResults=getHistory(),previousSessions=getFocusSessions(),previousLibrary=getSavedLibrary(),previousChats=getChatSessions(),previousPlannerTasks=getPlannerTasks();if(!writeLocalJSON(HISTORY_KEY,payload.results)||!saveFocusSessions(payload.focusSessions)||!writeLocalJSON(LIBRARY_KEY,importedLibrary)||!writeLocalJSON(CHAT_SESSIONS_KEY,importedChats)||!writeLocalJSON(PLANNER_KEY,importedPlannerTasks)){writeLocalJSON(HISTORY_KEY,previousResults);saveFocusSessions(previousSessions);writeLocalJSON(LIBRARY_KEY,previousLibrary);writeLocalJSON(CHAT_SESSIONS_KEY,previousChats);writeLocalJSON(PLANNER_KEY,previousPlannerTasks);throw new Error("Browser storage could not save the imported progress. Your browser may be out of space.");}
  clearSavedTest();renderHistory();renderSavedLibrary();renderPlanner();resetCurrentChat();renderChatSessions();refreshResumeBanner();toast("Progress backup imported successfully.");
 }catch(error){toast(error&&error.message?error.message:"Could not import that backup.");}
 finally{$("backupFile").value="";}
});
$("clearProgress").addEventListener("click",function(){
 if(!confirm("Clear all saved test results, focus sessions, saved study answers, study-planner tasks, and the unfinished test on this browser? This cannot be undone."))return;
 writeLocalJSON(HISTORY_KEY,[]);writeLocalJSON(FOCUS_KEY,[]);writeLocalJSON(LIBRARY_KEY,[]);writeLocalJSON(PLANNER_KEY,[]);clearSavedTest();setFocusPreset("focus",1500);renderHistory();renderSavedLibrary();renderPlanner();refreshResumeBanner();toast("Saved progress cleared.");
});
function getHistoryForExport(){return getHistory();}

let selectedSavedLibraryId="";
function validLibraryItem(item){return !!item&&typeof item==="object"&&typeof item.id==="string"&&item.id.length>0&&item.id.length<=120&&typeof item.title==="string"&&item.title.trim().length>0&&item.title.length<=160&&["study","chat"].includes(item.kind)&&typeof item.createdAt==="string"&&Number.isFinite(Date.parse(item.createdAt))&&typeof item.text==="string"&&item.text.trim().length>0&&item.text.length<=12000;}
function getSavedLibrary(){const stored=readLocalJSON(LIBRARY_KEY,[]);return Array.isArray(stored)?stored.filter(validLibraryItem).slice(0,40):[];}
function saveLibraryItem(kind,title,text){
 const cleaned=String(text||"").trim();if(!cleaned){toast("There is no answer to save yet.");return;}
 const items=getSavedLibrary();if(items.some(function(item){return item.kind===kind&&item.text===cleaned;})){toast("This answer is already saved in your library.");return;}
 const truncated=cleaned.length>12000;const item={id:Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),kind:kind,title:String(title||"Study answer").trim().slice(0,160)||"Study answer",createdAt:new Date().toISOString(),text:cleaned.slice(0,12000)};
 items.unshift(item);if(!writeLocalJSON(LIBRARY_KEY,items.slice(0,40))){toast("Browser storage is full or unavailable. Export your progress and try again.");return;}
 renderSavedLibrary();toast(truncated?"Saved the first 12,000 characters to your study library.":"Saved to your study library.");
}
window.KP_SAVE_NOTE_TO_LIBRARY=function(title,text){saveLibraryItem("study",String(title||"Curated chapter notes"),String(text||""));};
function saveStudyAnswerToLibrary(){
 if(!lastAnswerText)return;
 const level=$("classLevel").value,subject=subjectName()||"Study",chapter=$("chapter").value.trim(),topic=$("topic").value.trim(),detail=chapter||topic||$("studyMode").value;
 saveLibraryItem("study",level+" · "+subject+" · "+detail,lastAnswerText);
}
function saveChatAnswerToLibrary(){
 if(!lastChatAnswer)return;
 const level=$("chatClass").value,subject=$("chatSubject").value,prompt=String(lastChatPrompt||"Study answer").trim();
 saveLibraryItem("chat",level+" · "+subject+" · "+prompt,lastChatAnswer);
}
function libraryFilename(title){return String(title||"study-note").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,55)||"study-note";}
function renderSavedLibrary(){
 const root=$("savedLibraryList");if(!root)return;root.replaceChildren();
 const query=String($("librarySearch")&&$("librarySearch").value||"").trim().toLowerCase();
 const all=getSavedLibrary(),items=all.filter(function(item){return !query||(item.title+" "+item.text+" "+item.kind).toLowerCase().includes(query);});
 const count=$("savedLibraryCount");if(count)count.textContent=all.length+" saved "+(all.length===1?"answer":"answers");
 if(!items.length){const empty=document.createElement("div");empty.className="empty library-empty";empty.textContent=query?"No saved answers match your search.":"Your library is empty. Save a useful answer from Study Hub or AI Study Guide to keep it here.";root.appendChild(empty);return;}
 items.forEach(function(item){
  const card=document.createElement("article");card.className="library-card";
  const header=document.createElement("div");header.className="library-card-head";
  const title=document.createElement("h3");title.textContent=item.title;
  const type=document.createElement("span");type.className="library-kind";type.textContent=item.kind==="study"?"Study Hub":"AI Study Guide";
  header.append(title,type);
  const meta=document.createElement("p");meta.className="library-date";meta.textContent=new Date(item.createdAt).toLocaleString();
  const preview=document.createElement("p");preview.className="library-preview";preview.textContent=item.text.replace(/[#*_>|-]/g," ").replace(/\s+/g," ").trim().slice(0,240)+(item.text.length>240?"…":"");
  const actions=document.createElement("div");actions.className="library-card-actions";
  [["open","Open"],["download","Download"],["delete","Delete"]].forEach(function(pair){const button=document.createElement("button");button.type="button";button.className="btn "+(pair[0]==="open"?"btn-purple":"btn-light");button.textContent=pair[1];button.dataset.libraryAction=pair[0];button.dataset.libraryId=item.id;actions.appendChild(button);});
  card.append(header,meta,preview,actions);root.appendChild(card);
 });
}
function openSavedLibraryItem(id){
 const item=getSavedLibrary().find(function(entry){return entry.id===id;});if(!item)return;
 selectedSavedLibraryId=item.id;
 const viewer=$("savedViewer");viewer.dataset.itemId=item.id;viewer.classList.remove("hidden");
 $("savedViewerTitle").textContent=item.title;$("savedViewerMeta").textContent=(item.kind==="study"?"Study Hub":"AI Study Guide")+" · Saved "+new Date(item.createdAt).toLocaleString();
 renderMarkdownInto($("savedViewerContent"),item.text);viewer.scrollIntoView({behavior:"smooth",block:"start"});
}
function deleteSavedLibraryItem(id){
 const previous=getSavedLibrary(),next=previous.filter(function(item){return item.id!==id;});
 if(next.length===previous.length)return;
 if(!writeLocalJSON(LIBRARY_KEY,next)){toast("Could not update the study library in browser storage.");return;}
 if(selectedSavedLibraryId===id){selectedSavedLibraryId="";$("savedViewer").classList.add("hidden");}
 renderSavedLibrary();toast("Saved answer deleted.");
}
$("saveStudyLibrary").addEventListener("click",saveStudyAnswerToLibrary);
$("librarySearch").addEventListener("input",renderSavedLibrary);
$("savedLibraryList").addEventListener("click",function(event){
 const button=event.target.closest("[data-library-action]");if(!button)return;
 const id=button.dataset.libraryId,item=getSavedLibrary().find(function(entry){return entry.id===id;});if(!item)return;
 if(button.dataset.libraryAction==="open")openSavedLibraryItem(id);
 else if(button.dataset.libraryAction==="download")download(libraryFilename(item.title)+".md","# "+item.title+"\n\n"+item.text+"\n","text/markdown");
 else if(button.dataset.libraryAction==="delete"&&confirm("Delete this saved answer?"))deleteSavedLibraryItem(id);
});
$("savedViewerClose").addEventListener("click",function(){$("savedViewer").classList.add("hidden");selectedSavedLibraryId="";});
$("savedViewerCopy").addEventListener("click",async function(){const item=getSavedLibrary().find(function(entry){return entry.id===selectedSavedLibraryId;});if(!item)return;try{await navigator.clipboard.writeText(item.text);toast("Saved answer copied.");}catch(e){toast("Clipboard permission was blocked.");}});
$("savedViewerDownload").addEventListener("click",function(){const item=getSavedLibrary().find(function(entry){return entry.id===selectedSavedLibraryId;});if(item)download(libraryFilename(item.title)+".md","# "+item.title+"\n\n"+item.text+"\n","text/markdown");});
$("savedViewerDelete").addEventListener("click",function(){if(selectedSavedLibraryId&&confirm("Delete this saved answer?"))deleteSavedLibraryItem(selectedSavedLibraryId);});
$("clearLibrary").addEventListener("click",function(){if(!getSavedLibrary().length){toast("Your study library is already empty.");return;}if(!confirm("Delete all saved study answers? This cannot be undone."))return;if(!writeLocalJSON(LIBRARY_KEY,[])){toast("Could not clear the library in browser storage.");return;}selectedSavedLibraryId="";$("savedViewer").classList.add("hidden");renderSavedLibrary();toast("Study library cleared.");});


function validChatSession(item){
 return !!item&&typeof item==="object"&&typeof item.id==="string"&&item.id.length>0&&item.id.length<=120&&typeof item.title==="string"&&item.title.trim().length>0&&item.title.length<=100&&typeof item.createdAt==="string"&&Number.isFinite(Date.parse(item.createdAt))&&typeof item.updatedAt==="string"&&Number.isFinite(Date.parse(item.updatedAt))&&typeof item.lastPrompt==="string"&&item.lastPrompt.length<=3000&&typeof item.level==="string"&&item.level.length<=80&&typeof item.subject==="string"&&item.subject.length<=100&&typeof item.mode==="string"&&item.mode.length<=40&&Array.isArray(item.messages)&&item.messages.length<=24&&item.messages.every(function(message){return message&&["user","assistant"].includes(message.role)&&typeof message.content==="string"&&message.content.length>0&&message.content.length<=8000;});
}
function getChatSessions(){const stored=readLocalJSON(CHAT_SESSIONS_KEY,[]);return Array.isArray(stored)?stored.filter(validChatSession).sort(function(a,b){return Date.parse(b.updatedAt)-Date.parse(a.updatedAt);}).slice(0,8):[];}
function chatSessionTitle(text){const clean=String(text||"Study conversation").split("\n")[0].replace(/\s+/g," ").trim()||"Study conversation";return clean.length>64?clean.slice(0,61)+"…":clean;}
function recordChatMessage(role,content){
 const original=String(content||"");if(!original.trim())return;
 if(!currentChatSessionId)currentChatSessionId="chat-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8);
 const previous=getChatSessions(),existing=previous.find(function(session){return session.id===currentChatSessionId;}),now=new Date().toISOString(),storedContent=original.slice(0,8000);
 chatTranscript=chatTranscript.concat([{role:role,content:storedContent}]).slice(-24);
 if(original.length>8000)toast("Long conversation text was shortened in history. Save important full answers to your Saved Library.");
 const firstUser=chatTranscript.find(function(message){return message.role==="user";});
 const session={id:currentChatSessionId,title:existing?existing.title:chatSessionTitle(firstUser&&firstUser.content),createdAt:existing?existing.createdAt:now,updatedAt:now,lastPrompt:String(lastChatPrompt||"").slice(0,3000),level:$("chatClass").value,subject:$("chatSubject").value,mode:$("chatMode").value,messages:chatTranscript};
 const updated=[session].concat(previous.filter(function(item){return item.id!==currentChatSessionId;})).slice(0,8);
 if(!writeLocalJSON(CHAT_SESSIONS_KEY,updated)){toast("This conversation is still visible, but browser storage could not save it. Export a progress backup when possible.");return;}
 renderChatSessions();
}
function chatWelcomeMarkup(){return '<div class="chat-welcome"><div class="chat-welcome-mark">✦</div><h3>What would you like to understand?</h3><p>Choose a starting point below, or ask your own question. Your conversation stays together as you work through a topic.</p><div class="chat-welcome-prompts"><button type="button" data-chat-prompt="Explain this topic simply, with one everyday example and a quick self-check.">Explain simply</button><button type="button" data-chat-prompt="Create a well-organised revision sheet with key ideas, formulas or facts, examples, and a short recap.">Make revision notes</button><button type="button" data-chat-prompt="Create five original practice questions with answers and short explanations.">Quiz me</button></div></div>';}
function resetCurrentChat(){
 chatHistory=[];chatTranscript=[];currentChatSessionId="";lastChatAnswer="";lastChatPrompt="";chatAttachment=null;lastChatAttachment=null;
 if($("chatImage"))$("chatImage").value="";
 if($("chatImageHint"))$("chatImageHint").textContent="Attach an image, PDF, office document or text file.";
 $("chatMessages").innerHTML=chatWelcomeMarkup();$("chatStatus").textContent="New conversation";
 renderSourceLinks($("chatSources"),[]);enableChatTools(false);renderChatSessions();
}
function setKnownSelectValue(id,value){const select=$(id);if(!select||typeof value!=="string")return;const option=Array.from(select.options).find(function(item){return item.value===value||item.textContent===value;});if(option)select.value=option.value;}
function restoreChatSession(id,silent){
 if(chatBusy){toast("Stop the current response before switching conversations.");return;}
 const session=getChatSessions().find(function(item){return item.id===id;});if(!session)return;
 currentChatSessionId=session.id;chatTranscript=session.messages.map(function(message){return {role:message.role,content:message.content};});
 chatHistory=chatTranscript.slice(-10).map(function(message){return {role:message.role,content:message.content};});
 lastChatPrompt=session.lastPrompt||((chatTranscript.slice().reverse().find(function(message){return message.role==="user";})||{}).content||"");
 lastChatAnswer=(chatTranscript.slice().reverse().find(function(message){return message.role==="assistant";})||{}).content||"";
 setKnownSelectValue("chatClass",session.level);setKnownSelectValue("chatSubject",session.subject);setKnownSelectValue("chatMode",session.mode);
 chatAttachment=null;lastChatAttachment=null;if($("chatImage"))$("chatImage").value="";if($("chatImageHint"))$("chatImageHint").textContent="Attach an image, PDF, office document or text file.";
 const root=$("chatMessages");root.replaceChildren();
 if(!chatTranscript.length)root.innerHTML=chatWelcomeMarkup();
 else chatTranscript.forEach(function(message){const node=chatAddMessage(message.role,message.content);if(message.role==="assistant"){renderMarkdownInto(node,message.content);const box=node.closest(".chat-message");if(box)box.dataset.rawAnswer=message.content;}});
 root.scrollTop=root.scrollHeight;renderSourceLinks($("chatSources"),[]);enableChatTools(Boolean(lastChatAnswer));
 $("chatStatus").textContent="Saved conversation restored · "+chatTranscript.length+" messages. File attachments are not stored; reattach any files you need.";
 renderChatSessions();if(!silent)root.scrollIntoView({behavior:"smooth",block:"end"});
}
function restoreLatestChatSession(){const sessions=getChatSessions();if(sessions.length)restoreChatSession(sessions[0].id,true);else renderChatSessions();}
function renderChatSessions(){
 const root=$("chatSessionList");if(!root)return;root.replaceChildren();
 const query=String($("chatSessionSearch")&&$("chatSessionSearch").value||"").trim().toLowerCase();
 const sessions=getChatSessions().filter(function(session){return !query||(session.title+" "+session.messages.map(function(message){return message.content;}).join(" ")).toLowerCase().includes(query);});
 if(!sessions.length){const empty=document.createElement("p");empty.className="tiny chat-session-empty";empty.textContent=query?"No saved conversations match your search.":"Your recent conversations will appear here automatically.";root.appendChild(empty);return;}
 sessions.forEach(function(session){
  const row=document.createElement("div");row.className="chat-session-row"+(session.id===currentChatSessionId?" is-current":"");
  const open=document.createElement("button");open.type="button";open.className="chat-session-open";open.dataset.openChatSession=session.id;open.disabled=chatBusy;open.setAttribute("aria-label","Open conversation: "+session.title);
  const title=document.createElement("strong");title.textContent=session.title;
  const meta=document.createElement("span");meta.textContent=session.messages.length+" messages · "+new Date(session.updatedAt).toLocaleDateString();
  open.append(title,meta);if(session.id===currentChatSessionId){const current=document.createElement("span");current.className="chat-session-current";current.textContent="Current";open.appendChild(current);}
  const remove=document.createElement("button");remove.type="button";remove.className="chat-session-delete";remove.dataset.deleteChatSession=session.id;remove.textContent="×";remove.title="Delete saved conversation";remove.setAttribute("aria-label","Delete conversation: "+session.title);remove.disabled=chatBusy;
  row.append(open,remove);root.appendChild(row);
 });
}
$("chatSessionSearch").addEventListener("input",renderChatSessions);
$("chatSessionList").addEventListener("click",function(event){
 if(chatBusy){toast("Stop the current response before switching or deleting conversations.");return;}
 const remove=event.target.closest("[data-delete-chat-session]");
 if(remove){
  const id=remove.dataset.deleteChatSession,session=getChatSessions().find(function(item){return item.id===id;});if(!session)return;
  if(!confirm("Delete this saved conversation? This cannot be undone."))return;
  const next=getChatSessions().filter(function(item){return item.id!==id;});
  if(!writeLocalJSON(CHAT_SESSIONS_KEY,next)){toast("Could not delete the conversation from browser storage.");return;}
  if(currentChatSessionId===id)resetCurrentChat();else renderChatSessions();
  toast("Saved conversation deleted.");return;
 }
 const open=event.target.closest("[data-open-chat-session]");if(open)restoreChatSession(open.dataset.openChatSession,false);
});


let plannerFilter="today";
function validPlannerTask(item){
 if(!item||typeof item!=="object"||typeof item.id!=="string"||!item.id||item.id.length>120||typeof item.title!=="string"||!item.title.trim()||item.title.length>160||typeof item.subject!=="string"||item.subject.length>80||typeof item.dueDate!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(item.dueDate)||!Number.isInteger(Number(item.minutes))||Number(item.minutes)<5||Number(item.minutes)>240||!["low","normal","high"].includes(item.priority)||typeof item.completed!=="boolean"||typeof item.createdAt!=="string"||!Number.isFinite(Date.parse(item.createdAt))||(item.completedAt!=null&&(typeof item.completedAt!=="string"||!Number.isFinite(Date.parse(item.completedAt)))))return false;
 const parts=item.dueDate.split("-").map(Number),due=new Date(parts[0],parts[1]-1,parts[2]);
 return localDayKey(due)===item.dueDate;
}
function getPlannerTasks(){const stored=readLocalJSON(PLANNER_KEY,[]);return Array.isArray(stored)?stored.filter(validPlannerTask).slice(0,120):[];}
function plannerTaskDate(date){return new Date(date+"T00:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});}
function savePlannerTasks(tasks){return writeLocalJSON(PLANNER_KEY,tasks.slice(0,120));}
function renderPlanner(){
 const root=$("plannerTaskList");if(!root)return;
 const tasks=getPlannerTasks(),today=localDayKey(new Date()),open=tasks.filter(function(task){return !task.completed;}),due=open.filter(function(task){return task.dueDate<=today;}),upcoming=open.filter(function(task){return task.dueDate>today;}),done=tasks.filter(function(task){return task.completed;});const todayLabel=$("plannerTodayLabel");if(todayLabel)todayLabel.textContent=new Date().toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});
 const counts={open:$("plannerOpenCount"),due:$("plannerDueCount"),minutes:$("plannerPlannedMinutes"),done:$("plannerCompletedCount")};
 if(counts.open)counts.open.textContent=String(open.length);
 if(counts.due)counts.due.textContent=String(due.length);
 if(counts.minutes)counts.minutes.textContent=String(open.reduce(function(sum,task){return sum+Number(task.minutes);},0))+"m";
 if(counts.done)counts.done.textContent=String(done.length);
 const pct=tasks.length?Math.round(done.length/tasks.length*100):0,bar=$("plannerProgressBar"),label=$("plannerProgressLabel");
 if(bar){bar.style.width=pct+"%";bar.setAttribute("aria-valuenow",String(pct));}
 if(label)label.textContent=done.length+" of "+tasks.length+" tasks complete · "+pct+"%";
 document.querySelectorAll("[data-planner-filter]").forEach(function(button){const selected=button.dataset.plannerFilter===plannerFilter;button.classList.toggle("active",selected);button.setAttribute("aria-pressed",selected?"true":"false");});
 let visible=tasks.filter(function(task){if(plannerFilter==="today")return !task.completed&&task.dueDate<=today;if(plannerFilter==="upcoming")return !task.completed&&task.dueDate>today;if(plannerFilter==="done")return task.completed;return true;});
 const priorityRank={high:0,normal:1,low:2};
 visible.sort(function(a,b){if(plannerFilter==="all"&&a.completed!==b.completed)return a.completed?1:-1;return a.dueDate.localeCompare(b.dueDate)||(priorityRank[a.priority]-priorityRank[b.priority])||a.title.localeCompare(b.title);});
 root.replaceChildren();
 if(!visible.length){const empty=document.createElement("div");empty.className="empty planner-empty";empty.textContent=plannerFilter==="today"?"No overdue or due-today tasks. Add a small next step or check Upcoming.":plannerFilter==="upcoming"?"No upcoming tasks yet. Add a task with a future due date.":plannerFilter==="done"?"Completed tasks will collect here. A small finish is still progress.":"No tasks yet. Start with one clear, manageable action.";root.appendChild(empty);return;}
 visible.forEach(function(task){
  const row=document.createElement("article");row.className="planner-task"+(task.completed?" is-complete":"");
  const toggle=document.createElement("button");toggle.type="button";toggle.className="planner-task-check";toggle.dataset.plannerAction="toggle";toggle.dataset.taskId=task.id;toggle.textContent=task.completed?"✓":"";toggle.setAttribute("aria-label",task.completed?"Mark incomplete: "+task.title:"Mark complete: "+task.title);toggle.setAttribute("aria-pressed",task.completed?"true":"false");
  const main=document.createElement("div");main.className="planner-task-main";
  const title=document.createElement("strong");title.className="planner-task-title";title.textContent=task.title;
  const meta=document.createElement("p");meta.className="planner-task-meta";meta.textContent=task.subject+" · "+plannerTaskDate(task.dueDate)+" · "+task.minutes+" minutes";
  const badges=document.createElement("div");badges.className="planner-task-badges";
  const priority=document.createElement("span");priority.className="planner-badge planner-priority-"+task.priority;priority.textContent=task.priority.charAt(0).toUpperCase()+task.priority.slice(1)+" priority";badges.appendChild(priority);
  if(!task.completed&&task.dueDate<today){const overdue=document.createElement("span");overdue.className="planner-badge planner-overdue";overdue.textContent="Overdue";badges.appendChild(overdue);}
  else if(!task.completed&&task.dueDate===today){const dueToday=document.createElement("span");dueToday.className="planner-badge planner-due-today";dueToday.textContent="Due today";badges.appendChild(dueToday);}
  main.append(title,meta,badges);
  const remove=document.createElement("button");remove.type="button";remove.className="planner-task-delete";remove.dataset.plannerAction="delete";remove.dataset.taskId=task.id;remove.textContent="Delete";remove.setAttribute("aria-label","Delete task: "+task.title);
  row.append(toggle,main,remove);root.appendChild(row);
 });
}
function initPlanner(){
 const today=localDayKey(new Date()),date=$("plannerTaskDate");if(date){date.min=today;if(!date.value)date.value=today;}
 $("plannerTaskForm").addEventListener("submit",function(event){
  event.preventDefault();const title=$("plannerTaskTitle").value.trim(),subject=$("plannerTaskSubject").value,dueDate=$("plannerTaskDate").value,minutes=Number($("plannerTaskMinutes").value),priority=$("plannerTaskPriority").value;
  if(!title||title.length>160){toast("Give the task a title of 1–160 characters.");return;}
  const list=getPlannerTasks();if(list.length>=120){toast("Your study plan has reached 120 tasks. Delete finished tasks to make room.");return;}
  const task={id:"task-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),title:title,subject:subject,dueDate:dueDate,minutes:minutes,priority:priority,completed:false,createdAt:new Date().toISOString(),completedAt:null};
  if(!validPlannerTask(task)){toast("Check the task date and time estimate, then try again.");return;}
  if(!savePlannerTasks([task].concat(list))){toast("The task could not be saved in this browser. Export your progress or free up storage.");return;}
  $("plannerTaskForm").reset();date.value=localDayKey(new Date());$("plannerTaskMinutes").value="25";$("plannerTaskPriority").value="normal";renderPlanner();toast("Task added to your study plan.");
 });
 $("plannerTaskList").addEventListener("click",function(event){
  const button=event.target.closest("[data-planner-action]");if(!button)return;
  const id=button.dataset.taskId,task=getPlannerTasks().find(function(item){return item.id===id;});if(!task)return;
  if(button.dataset.plannerAction==="delete"){
   if(!confirm("Delete this study task?"))return;
   const next=getPlannerTasks().filter(function(item){return item.id!==id;});if(!savePlannerTasks(next)){toast("Could not delete the task from browser storage.");return;}renderPlanner();toast("Task deleted.");return;
  }
  if(button.dataset.plannerAction==="toggle"){
   const next=getPlannerTasks().map(function(item){return item.id===id?Object.assign({},item,{completed:!item.completed,completedAt:!item.completed?new Date().toISOString():null}):item;});
   if(!savePlannerTasks(next)){toast("Could not update this task in browser storage.");return;}renderPlanner();toast(task.completed?"Task marked as active.":"Task completed. Nice work.");
  }
 });
 document.querySelectorAll("[data-planner-filter]").forEach(function(button){button.addEventListener("click",function(){plannerFilter=button.dataset.plannerFilter;renderPlanner();});});
 $("plannerClearTasks").addEventListener("click",function(){if(!getPlannerTasks().length){toast("Your study plan is already empty.");return;}if(!confirm("Delete all study-planner tasks? This cannot be undone."))return;if(!savePlannerTasks([])){toast("Could not clear the plan.");return;}renderPlanner();toast("Study plan cleared.");});
 $("plannerStartFocus").addEventListener("click",function(){if(focusState.running&&!confirm("Restart the timer and replace the current focus session?"))return;setFocusPreset("focus",1500);focusState.running=true;focusState.endsAt=Date.now()+focusState.remaining*1000;saveFocusState();renderFocusTimer();beginFocusInterval();const history=$("history");if(history)history.scrollIntoView({behavior:"smooth",block:"start"});toast("25-minute focus session started.");});
 renderPlanner();
}

function startTest(id){const t=questions.find(function(q){return q.id===id;});if(!t)return;const pending=getSavedTest();if(pending&&!confirm("Starting a new test will discard your unfinished saved attempt. Continue?"))return;clearSavedTest();clearInterval(tick);tick=null;active={test:t,answers:{},index:0,endAt:t.timed===false?0:Date.now()+t.duration*60*1000};$("resultWorkspace").classList.add("hidden");$("examWorkspace").classList.remove("hidden");$("examWorkspace").scrollIntoView({behavior:"smooth",block:"start"});saveActiveTest();renderQuestion();if(t.timed!==false)tick=setInterval(function(){if(!active)return;updateTimer();},1000);}
function updateTimer(){if(!active)return;const el=$("timer");if(active.test&&active.test.timed===false){if(el){el.textContent="Self-paced";el.setAttribute("aria-label","Untimed sample test");}return;}const secs=Math.max(0,Math.ceil((active.endAt-Date.now())/1000));if(el)el.textContent=String(Math.floor(secs/60)).padStart(2,"0")+":"+String(secs%60).padStart(2,"0");if(secs<=0)finishTest(true);}
function renderQuestion(){
 if(!active)return;
 const t=active.test,q=t.qs[active.index],selected=active.answers[active.index],root=$("examWorkspace");
 const written=q.responseType==="written";
 const sourceKind=t.official?"Official sample-paper question":q.sourceType==="PYQ"?"Previous-year question":t.sampleTest?"Original CBSE sample-test question":t.annualExam?"Original competency-based model":"Competency-based practice";
 const sourceLabel=t.official?"CBSE Class XII Computer Science · Official SQP 2026–27":(q.sourceLabel||(t.sampleTest?"Original KaushalPath sample test · not an official CBSE paper":t.annualExam?"Original KaushalPath model · not an official CBSE paper":"Syllabus-mapped competency practice"));
 const sourceMarkup='<div class="question-source"><span class="question-source-badge '+(t.official?"official":q.sourceType==="PYQ"?"pyq":"competency")+'">'+safe(sourceKind+" · "+sourceLabel)+'</span>'+(q.subject?'<span class="question-topic">'+safe(q.subject)+(q.topic?" · "+safe(q.topic):"")+'</span>':"")+(q.sourceUrl?'<a href="'+safe(q.sourceUrl)+'" target="_blank" rel="noopener noreferrer">View source ↗</a>':"")+'</div>';
 const sectionMarkup=q.sectionTitle?'<div class="annual-section-label">'+safe(q.sectionTitle)+' · '+Number(q.mark||1)+' mark'+(Number(q.mark)===1?"":"s")+'</div>':"";
 const responseMarkup=written
  ?'<div class="written-answer-wrap"><label class="written-answer-label" for="writtenAnswer">Your answer <span>Up to 12,000 characters</span></label><textarea id="writtenAnswer" data-written-answer maxlength="12000" rows="'+(Number(q.mark)>=4?8:Number(q.mark)>=3?6:4)+'" aria-label="Your written answer" placeholder="Write your reasoning, evidence, working and final conclusion here...">'+safe(typeof selected==="string"?selected:"")+'</textarea><p class="written-answer-help">Your response is saved in this browser as you type. After submission, compare it with the suggested answer and marking rubric, then award yourself marks honestly.</p><p class="tiny"><span data-answer-length>'+(typeof selected==="string"?selected.length:0)+'</span> characters · '+Number(q.mark||1)+' marks available</p></div>'
  :'<div class="options" role="group" aria-label="Answer choices">'+q.o.map(function(o,i){return '<button type="button" class="option '+(selected===i?"selected":"")+'" data-answer="'+i+'" aria-pressed="'+(selected===i?"true":"false")+'"><span class="optkey">'+String.fromCharCode(65+i)+'</span><span>'+safe(o)+'</span></button>';}).join("")+'</div>';
 const answeredCount=t.qs.reduce(function(total,item,index){return total+(questionIsAnswered(item,active.answers[index])?1:0);},0);
 const maxScore=Number.isFinite(Number(q.mark))?Number(q.mark):Number(t.mark)||1;
 root.innerHTML='<div class="exam-top"><div><div class="question-count">'+safe(t.title)+'</div><h3>Question '+(active.index+1)+' of '+t.qs.length+'</h3><p class="tiny">'+answeredCount+' of '+t.qs.length+' questions answered</p></div><div class="timer '+(t.sampleTest?"sample-test-timer":"") +'" id="timer" role="'+(t.sampleTest?"status":"timer") +'" aria-label="'+(t.sampleTest?"Untimed sample test":"Time remaining") +'">'+(t.sampleTest?"Self-paced":"--:--") +'</div></div>'+sourceMarkup+sectionMarkup+'<div class="question '+(written?"written-question":"")+'" role="heading" aria-level="4" aria-live="polite">'+safe(q.q)+'</div>'+responseMarkup+'<div class="question-nav" aria-label="Question navigation">'+t.qs.map(function(item,i){const done=questionIsAnswered(item,active.answers[i]);return '<button type="button" class="qnav '+(done?"done ":"")+(i===active.index?"current":"")+'" data-jump="'+i+'" aria-label="Question '+(i+1)+(done?", answered":"")+'">'+(i+1)+'</button>';}).join("")+'</div><div class="exam-actions"><button class="btn btn-light" type="button" id="prevQ" '+(active.index===0?"disabled":"")+' aria-label="Previous question">← Previous</button><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-light" type="button" id="nextQ">'+(active.index===t.qs.length-1?"Review answers":"Next question →")+'</button><button class="btn btn-blue" type="button" id="finishQ">Finish test</button></div></div><p class="tiny">'+(t.sampleTest?"Self-paced sample test — no timer is enforced. Written responses are self-marked against the downloadable rubric; objective questions are marked automatically.":t.annualExam?"Model paper only — written responses are self-marked against the downloadable rubric; objective questions are marked automatically.":t.official?"Official CBSE sampler scoring: +1 correct, 0 incorrect or unattempted. This is not the full 70-mark paper.":t.level==="Targeted review"?"Targeted retake: missed or unanswered questions only. Original per-question marks and penalties are retained.":t.fullLength?(t.exam==="NEET UG"?"Full NEET-length mock: 180 questions in 180 minutes, with 45 Physics, 45 Chemistry and 90 Biology questions.":"Extended JEE practice mock: 90 questions in 180 minutes; official JEE Main Paper 1 currently uses 75 questions."):"Practice scoring: +"+t.mark+" correct, "+(t.negativeMark>0?"−"+t.negativeMark:"0")+" incorrect, 0 unattempted.")+'</p>';
 updateTimer();
}
function openMockTestWindow(id){const test=questions.find(function(q){return q.id===id&&q.fullLength;});if(!test){startTest(id);return;}const child=window.open("about:blank","_blank","popup=yes,width=1280,height=960,resizable=yes,scrollbars=yes");if(!child){toast("Your browser blocked the mock-test window. Allow pop-ups for this site, then click Start test again.");return;}const pending=getSavedTest();if(pending&&!confirm("Starting a new test will discard your unfinished saved attempt. Continue?")){child.close();return;}if(pending)clearSavedTest();const url=new URL(window.location.href);url.searchParams.set("kpMockTest",test.id);url.hash="#tests";try{child.location.replace(url.toString());child.focus();}catch(error){child.close();toast("Could not open the mock-test window. Allow pop-ups for this site and try again.");}}
$("testGrid").addEventListener("click",function(e){const b=e.target.closest("[data-start]");if(!b)return;const t=questions.find(function(q){return q.id===b.dataset.start;});if(t&&t.fullLength)openMockTestWindow(t.id);else startTest(b.dataset.start);});
$("examWorkspace").addEventListener("input",function(e){if(!active)return;const field=e.target.closest("[data-written-answer]");if(!field)return;active.answers[active.index]=String(field.value||"").slice(0,12000);saveActiveTest();const item=field.closest(".written-answer-wrap");if(item){const count=item.querySelector("[data-answer-length]");if(count)count.textContent=String(active.answers[active.index].length)+" characters";}});
$("examWorkspace").addEventListener("click",function(e){if(!active)return;const ans=e.target.closest("[data-answer]"),jump=e.target.closest("[data-jump]");if(ans){active.answers[active.index]=Number(ans.dataset.answer);saveActiveTest();renderQuestion();return;}if(jump){active.index=Number(jump.dataset.jump);saveActiveTest();renderQuestion();return;}if(e.target.closest("#prevQ")){active.index=Math.max(0,active.index-1);saveActiveTest();renderQuestion();return;}if(e.target.closest("#nextQ")){if(active.index===active.test.qs.length-1){toast("Review your answers, then finish the test.");}else{active.index++;saveActiveTest();renderQuestion();}return;}if(e.target.closest("#finishQ")){const unanswered=active.test.qs.reduce(function(total,q,index){return total+(questionIsAnswered(q,active.answers[index])?0:1);},0);if(unanswered&&!confirm("You still have "+unanswered+" unanswered question(s). Finish this test anyway?"))return;finishTest(false);}});
function finishTest(auto){
 if(!active)return;
 clearInterval(tick);tick=null;
 const t=active.test,answers=active.answers;
 let correct=0,wrong=0,blank=0,objectiveScore=0,objectiveMax=0,writtenCount=0;
 const review=t.qs.map(function(q,i){
  const chosen=answers[i],written=q.responseType==="written",marks=Number.isFinite(q.mark)?q.mark:(Number(t.mark)||1),penalty=Number.isFinite(q.negativeMark)?q.negativeMark:(Number.isFinite(t.negativeMark)?t.negativeMark:(t.exam==="CBSE"?0:1));
  if(written){writtenCount++;if(!questionIsAnswered(q,chosen))blank++;return {
   question:q.q,options:[],chosen:typeof chosen==="string"?chosen:"",correct:-1,explanation:String(q.modelAnswer||q.e||""),modelAnswer:String(q.modelAnswer||q.e||""),rubric:Array.isArray(q.rubric)?q.rubric:[],
   responseType:"written",sectionTitle:String(q.sectionTitle||""),questionFormat:String(q.questionFormat||"Constructed response"),
   subject:typeof q.subject==="string"?q.subject:(typeof t.subject==="string"?t.subject:""),chapter:typeof q.chapter==="string"?q.chapter:"",topic:typeof q.topic==="string"?q.topic:"",questionId:typeof q.id==="string"?q.id:"",sourceType:typeof q.sourceType==="string"?q.sourceType:"",
   mark:marks,negativeMark:0
  };}
  objectiveMax+=marks;
  if(chosen===undefined){blank++;}
  else if(chosen===q.a){correct++;objectiveScore+=marks;}
  else{wrong++;objectiveScore-=penalty;}
  return {question:q.q,options:q.o,chosen:chosen,correct:q.a,explanation:q.e,subject:typeof q.subject==="string"?q.subject:(typeof t.subject==="string"?t.subject:""),chapter:typeof q.chapter==="string"?q.chapter:"",topic:typeof q.topic==="string"?q.topic:"",questionId:typeof q.id==="string"?q.id:(typeof q.questionId==="string"?q.questionId:""),sourceType:typeof q.sourceType==="string"?q.sourceType:"",mark:marks,negativeMark:penalty,responseType:"mcq"};
 });
 const max=t.qs.reduce(function(total,q){return total+(Number.isFinite(q.mark)?q.mark:(Number(t.mark)||1));},0);
 const result={id:t.id,title:t.title,exam:t.exam,level:t.level,date:new Date().toLocaleString(),correct:correct,wrong:wrong,blank:blank,score:objectiveScore,max:max,percentage:writtenCount?null:Math.round(Math.max(0,objectiveScore)/max*100),objectiveScore:objectiveScore,objectiveMax:objectiveMax,pendingWritten:writtenCount>0,review:review};
 clearSavedTest();active=null;
 if(!result.pendingWritten)saveHistory(result);
 renderResult(result,auto);
}
function renderResult(r,auto){
 const pending=Boolean(r.pendingWritten),writtenQuestions=r.review.map(function(q,index){return {q:q,index:index};}).filter(function(item){return item.q.responseType==="written";});
 const ungradedWritten=writtenQuestions.filter(function(item){return !Number.isInteger(item.q.selfMark);}).length;
 const missedCount=r.review.filter(function(q){return q.responseType!=="written"&&(q.chosen===undefined||q.chosen!==q.correct);}).length;
 const root=$("resultWorkspace");root.classList.remove("hidden");$("examWorkspace").classList.add("hidden");
 const headlineScore=pending?String(r.objectiveScore)+" / "+String(r.objectiveMax)+" objective marks":String(r.score)+" / "+String(r.max);
 const percentageMarkup=pending?'<strong>Pending</strong><span>Written answers need self-marking</span>':'<strong>'+r.percentage+'%</strong><span>Overall percentage</span>';
 root.innerHTML='<div class="kicker">'+(pending?"Objective score · written marking required":"Your result")+'</div><h2 style="margin-top:7px">'+safe(r.title)+'</h2><p class="tiny">'+(auto==="tab-switch"?"Automatically submitted because you switched tabs or left the mock-test window. ":auto?"Time ended automatically. ":"")+"Completed "+safe(r.date)+'</p><div class="result-score">'+headlineScore+'</div>'+(pending?'<p class="written-marking-notice">The multiple-choice questions are scored automatically. For each written answer, compare your response with the model answer and rubric, then award yourself marks from 0 to the question maximum. Your final result is saved only after all written questions have been marked.</p>':"")+'<div class="result-grid"><div class="result-metric"><strong>'+r.correct+'</strong><span>Objective correct</span></div><div class="result-metric"><strong>'+r.wrong+'</strong><span>Objective incorrect</span></div><div class="result-metric"><strong>'+r.blank+'</strong><span>Unattempted objective / written</span></div><div class="result-metric">'+percentageMarkup+'</div></div><div class="actions">'+(missedCount?'<button class="btn btn-purple" id="retryMissed">Practice missed questions ('+missedCount+')</button>':"")+(pending?'<button class="btn btn-purple" id="finalizeWrittenMarking" '+(ungradedWritten?"disabled":"")+'>'+(ungradedWritten?"Mark all written questions first":"Finalize and save result")+'</button>':"")+'<button class="btn btn-blue" id="downloadJson">Download result JSON</button><button class="btn btn-light" id="downloadCsv">Download result CSV</button><button class="btn btn-light" id="printResult">Print / save PDF</button><button class="btn btn-light" id="closeResult">Back to tests</button></div><h3 style="margin-top:25px">Answer review and explanations</h3><div id="answerReview"></div>';
 const review=$("answerReview");
 r.review.forEach(function(q,i){
  const div=document.createElement("div");div.className="review-item";
  if(q.responseType==="written"){
   const answered=typeof q.chosen==="string"&&q.chosen.trim().length>0;
   const mark=Number(q.mark)||1;
   const selected=Number.isInteger(q.selfMark)?q.selfMark:null;
   div.innerHTML='<div class="written-review-head"><span class="question-source-badge competency">Written · '+mark+' marks</span><span class="written-review-status">'+(selected===null?"Needs self-marking":"Awarded "+selected+" / "+mark)+'</span></div><strong>'+(i+1)+". "+safe(q.question)+'</strong><h4>Your response</h4><p class="written-student-answer">'+safe(answered?q.chosen:"No answer was entered.")+'</p><h4>Suggested answer / key points</h4><p class="written-model-answer">'+safe(q.modelAnswer||q.explanation)+'</p><h4>Indicative marking rubric</h4><ul class="written-rubric">'+(Array.isArray(q.rubric)?q.rubric:[]).map(function(line){return "<li>"+safe(line)+"</li>";}).join("")+'</ul><div class="written-self-mark"><strong>Marks awarded (0–'+mark+')</strong><div class="written-self-mark-options">'+Array.from({length:mark+1},function(_,value){return '<button type="button" class="btn '+(selected===value?"btn-purple":"btn-light")+'" data-self-mark-question="'+i+'" data-self-mark="'+value+'" aria-pressed="'+(selected===value?"true":"false")+'">'+value+'</button>';}).join("")+'</div></div>';
   Array.from(div.querySelectorAll("[data-self-mark-question]")).forEach(function(button){button.addEventListener("click",function(){q.selfMark=Number(button.dataset.selfMark);renderResult(r,auto);});});
  }else{
   const status=q.chosen===undefined?"Not attempted":q.chosen===q.correct?"Correct":"Incorrect";
   div.innerHTML='<strong>'+(i+1)+". "+safe(q.question)+'</strong><p class="'+(q.chosen===q.correct?"correct":q.chosen===undefined?"":"incorrect")+'">'+status+(q.chosen===undefined?"":" · Your answer: "+String.fromCharCode(65+q.chosen))+' · Correct answer: '+String.fromCharCode(65+q.correct)+" — "+safe(q.options[q.correct])+'</p><p class="tiny">'+safe(q.explanation)+'</p>';
  }
  review.appendChild(div);
 });
 if(pending&&$("finalizeWrittenMarking")){
  $("finalizeWrittenMarking").addEventListener("click",function(){
   const written=r.review.filter(function(q){return q.responseType==="written";});
   if(written.some(function(q){return !Number.isInteger(q.selfMark)||q.selfMark<0||q.selfMark>(Number(q.mark)||1);})){toast("Mark every written question before finalizing.");return;}
   const writtenScore=written.reduce(function(sum,q){return sum+Number(q.selfMark);},0);
   r.score=Number(r.objectiveScore||0)+writtenScore;r.max=written.reduce(function(sum,q){return sum+(Number(q.mark)||1);},Number(r.objectiveMax||0));
   r.percentage=Math.round(Math.max(0,r.score)/Math.max(1,r.max)*100);r.pendingWritten=false;
   saveHistory(r);renderResult(r,auto);toast("Final annual-exam result saved to My Results.");
  });
 }
 if(missedCount&&$("retryMissed")){
  $("retryMissed").addEventListener("click",function(){
   const missed=r.review.filter(function(q){return q.responseType!=="written"&&(q.chosen===undefined||q.chosen!==q.correct);});
   const retryTest={id:"review-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),title:"Targeted review · "+r.title,exam:r.exam,level:"Targeted review",duration:Math.max(3,Math.ceil(missed.length*1.5)),mark:r.exam==="CBSE"?1:4,negativeMark:r.exam==="CBSE"?0:1,desc:"Focused retake of "+missed.length+" missed or unanswered question(s).",qs:missed.map(function(q){return {q:q.question,o:q.options,a:q.correct,e:String(q.explanation||"Review the underlying concept from your notes."),mark:Number.isFinite(q.mark)?q.mark:(r.exam==="CBSE"?1:4),negativeMark:Number.isFinite(q.negativeMark)?q.negativeMark:(r.exam==="CBSE"?0:1)};})};
   questions.push(retryTest);startTest(retryTest.id);
  });
 }
 $("downloadJson").addEventListener("click",function(){download("kaushalpath-result.json",JSON.stringify(r,null,2),"application/json");});
 $("downloadCsv").addEventListener("click",function(){download("kaushalpath-result.csv",resultCsv(r),"text/csv");});
 $("printResult").addEventListener("click",function(){window.print();});
 $("closeResult").addEventListener("click",function(){root.classList.add("hidden");if(document.body.classList.contains("mock-test-window"))document.body.classList.remove("mock-test-window");$("tests").scrollIntoView({behavior:"smooth"});});
 root.scrollIntoView({behavior:"smooth",block:"start"});
}
function download(name,content,type){const blob=new Blob([content],{type:type+";charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
function resultCsv(r){return [["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"],[r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]].map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n");}
$("exportHistory").addEventListener("click",function(){const history=getHistory();if(!history.length){toast("No history to export yet.");return;}const rows=[["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"]];history.forEach(function(r){rows.push([r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]);});download("kaushalpath-history.csv",rows.map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n"),"text/csv");});

async function checkAI(){try{const r=await fetch("/api/study-guide",{headers:{"x-kaushalpath-status":"1"}});const j=await r.json();$("aiStatus").textContent=j.ready?"AI route configured":"AI guide setup needed";$("aiStatus").style.background=j.ready?"#1c584f":"#654a2d";}catch(e){$("aiStatus").textContent="AI status unavailable";}}

document.querySelectorAll("[data-show-exam]").forEach(function(link){link.addEventListener("click",function(){const chosen=link.dataset.showExam||"all";document.querySelectorAll(".test-card").forEach(function(card){card.classList.toggle("hidden",chosen!=="all"&&card.dataset.exam!==chosen);});document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const label=chosen==="all"?"Test Series":chosen==="JEE Main"?"JEE Main Prep":"NEET UG Prep";const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=label;});});
document.querySelectorAll('.side-link[href^="#"]').forEach(function(link){link.addEventListener("click",function(){if(!link.dataset.showExam){document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const labels={"#overview":"Overview","#learn":"CBSE Study Hub","#history":"My Results","#resources":"Official Resources","#library":"Saved Library","#planner":"Study Planner"};const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=labels[link.getAttribute("href")]||"Workspace";}});});

renderTests();renderHistory();refreshResumeBanner();initFocusTimer();renderSavedLibrary();checkAI();restoreLatestChatSession();initPlanner();initCbseAnnualBuilder();


let pendingPwaInstall = null;
function showPwaUpdateNotice() {
 const banner=$("pwaUpdateBanner");
 if(banner)banner.classList.remove("hidden");
}
function initPWA() {
 if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  let hasControllerAtStart=Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener("controllerchange",function(){
   // First install should not interrupt a learner; later controller changes indicate a refreshed app shell.
   if(hasControllerAtStart)showPwaUpdateNotice();
   else hasControllerAtStart=true;
  });
  navigator.serviceWorker.register("/service-worker.js", { scope: "/", updateViaCache: "none" }).then(function(registration){
   if(registration.waiting&&navigator.serviceWorker.controller)showPwaUpdateNotice();
   // Check for a new app shell on each visit instead of relying only on the browser's periodic check.
   if(typeof registration.update==="function")registration.update().catch(function(){});
  }).catch(function(){});
  const reloadUpdate=$("pwaUpdateReload"),dismissUpdate=$("pwaUpdateDismiss");
  if(reloadUpdate)reloadUpdate.addEventListener("click",function(){location.reload();});
  if(dismissUpdate)dismissUpdate.addEventListener("click",function(){$("pwaUpdateBanner").classList.add("hidden");});
 }
 window.addEventListener("offline",function(){toast("You're offline. Saved notes, practice and your study plan remain on this device; AI tools need a connection.");});
 window.addEventListener("online",function(){toast("Connection restored.");});
 const button=$("installApp");if(!button)return;
 const standalone=(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true;
 if(standalone){button.classList.add("hidden");return;}
 window.addEventListener("beforeinstallprompt",function(event){
  event.preventDefault();pendingPwaInstall=event;button.classList.remove("hidden");
 });
 button.addEventListener("click",async function(){
  if(!pendingPwaInstall){toast("Use your browser menu to install or add KaushalPath to your home screen.");return;}
  const promptEvent=pendingPwaInstall;pendingPwaInstall=null;
  try{
   await promptEvent.prompt();
   const choice=await promptEvent.userChoice;
   button.classList.add("hidden");
   toast(choice&&choice.outcome==="accepted"?"KaushalPath installation started.":"You can install KaushalPath later from your browser menu.");
  }catch(error){button.classList.add("hidden");toast("Use your browser menu to install KaushalPath.");}
 });
 window.addEventListener("appinstalled",function(){pendingPwaInstall=null;button.classList.add("hidden");toast("KaushalPath installed.");});
}

function activateWorkspaceView(view,clicked){
 const valid=["overview","learn","ai-guide","tests","history","resources","library","planner"];
 const target=valid.includes(view)?view:"overview";
 const overviewNodes=[document.getElementById("overview"),document.querySelector("main > .hero"),document.querySelector("main > .quickstats"),document.getElementById("learningPath")];
 overviewNodes.forEach(function(node){if(node)node.classList.toggle("view-hidden",target!=="overview");});
 ["learn","ai-guide","tests","resources","history","library","planner"].forEach(function(id){const node=$(id);if(node)node.classList.toggle("view-hidden",target!==id);});
 const clickedExam=clicked&&clicked.dataset.showExam;document.querySelectorAll(".side-link").forEach(function(link){const matchesExam=link.dataset.showExam?link.dataset.showExam===clickedExam||(target==="tests"&&!clickedExam&&link.dataset.showExam==="all"):true;link.classList.toggle("active",link.dataset.view===target&&matchesExam);});
 document.querySelectorAll(".mobile-dock [data-view]").forEach(function(link){const matchesExam=link.dataset.showExam?link.dataset.showExam===clickedExam||(target==="tests"&&!clickedExam&&link.dataset.showExam==="all"):true;link.classList.toggle("active",link.dataset.view===target&&matchesExam);});
 const visibleNodes=target==="overview"?overviewNodes:[$(target)];
 const shouldReduceMotion=Boolean(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
 visibleNodes.forEach(function(node){
  if(!node||node.classList.contains("view-hidden"))return;
  node.classList.remove("kp-view-enter");
  if(shouldReduceMotion)return;
  void node.offsetWidth;
  node.classList.add("kp-view-enter");
 });

 const labels={overview:"Overview",learn:"CBSE Study Hub","ai-guide":"AI Study Guide",tests:"Test Series",history:"My Results",resources:"Official Resources",library:"Saved Library",planner:"Study Planner"};
 if(target==="tests"&&clicked&&clicked.dataset.showExam){
  const exam=clicked.dataset.showExam;
  document.querySelectorAll(".test-card").forEach(function(card){card.classList.toggle("hidden",exam!=="all"&&card.dataset.exam!==exam);});
  labels.tests=exam==="all"?"Test Series":exam==="JEE Main"?"JEE Main Prep":"NEET UG Prep";
 }else if(target==="tests"){document.querySelectorAll(".test-card").forEach(function(card){card.classList.remove("hidden");});}
 $("breadcrumbPage").textContent=labels[target]||"Workspace";
 if(location.hash!=="#"+target)history.replaceState(null,"","#"+target);
 const reducedMotion=Boolean(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
 window.scrollTo({top:0,behavior:reducedMotion?"auto":"smooth"});
}

function initCommandPalette(){
 const dialog=$("commandPalette"),input=$("commandSearch"),results=$("commandResults"),status=$("commandStatus"),trigger=$("openCommandPalette"),close=$("closeCommandPalette");
 if(!dialog||!input||!results||!trigger)return;
 const commands=[
  {kind:"page",title:"Overview",detail:"Your dashboard and live progress",keywords:"home dashboard start",icon:"◈",run:function(){activateWorkspaceView("overview");}},
  {kind:"page",title:"CBSE Study Hub",detail:"Search chapter notes, formulas and worked examples",keywords:"notes chapters ncert class 10 11 12 textbook",icon:"▤",run:function(){activateWorkspaceView("learn");}},
  {kind:"page",title:"JEE Main Preparation",detail:"Physics, Chemistry and Mathematics practice",keywords:"jee engineering entrance mock questions",icon:"∑",run:function(){activateWorkspaceView("tests",{dataset:{showExam:"JEE Main"}});}},
  {kind:"page",title:"NEET UG Preparation",detail:"Biology, Physics and Chemistry practice",keywords:"neet medical entrance mock biology",icon:"✳",run:function(){activateWorkspaceView("tests",{dataset:{showExam:"NEET UG"}});}},
  {kind:"page",title:"Test Series",detail:"Browse all practice sets and timed mocks",keywords:"test quiz exam practice questions",icon:"◷",run:function(){activateWorkspaceView("tests",{dataset:{showExam:"all"}});}},
  {kind:"page",title:"AI Study Guide",detail:"Ask a question, explain an image or explore a source",keywords:"ai explain ask chat image file pdf research",icon:"✦",run:function(){activateWorkspaceView("ai-guide");}},
  {kind:"page",title:"Study Planner",detail:"Turn revision into realistic, trackable tasks",keywords:"plan schedule tasks weekly timetable",icon:"◷",run:function(){activateWorkspaceView("planner");}},
  {kind:"page",title:"Saved Library",detail:"Open notes and answers you saved on this device",keywords:"library saved bookmarks answers",icon:"▣",run:function(){activateWorkspaceView("library");}},
  {kind:"page",title:"My Results",detail:"Review test attempts and focus sessions",keywords:"results history score accuracy timer focus",icon:"▥",run:function(){activateWorkspaceView("history");}},
  {kind:"page",title:"Official Resources",detail:"Open CBSE, NCERT, JEE and NEET sources",keywords:"official curriculum syllabus textbook resources papers",icon:"↗",run:function(){activateWorkspaceView("resources");}},
  {kind:"action",title:"Find a chapter",detail:"Jump straight to the chapter search field",keywords:"search topic chapter notes formula",icon:"⌕",run:function(){activateWorkspaceView("learn");const field=$("notesSearch");if(field){field.focus();field.scrollIntoView({behavior:"smooth",block:"center"});}}},
  {kind:"action",title:"Focus timer",detail:"Open the 25-minute timer and short break presets",keywords:"pomodoro concentration stopwatch study",icon:"◴",run:function(){activateWorkspaceView("history");const target=document.querySelector(".focus-panel");if(target)target.scrollIntoView({behavior:"smooth",block:"center"});}},
  {kind:"action",title:"Start guided tour",detail:"Get a short walkthrough of the workspace",keywords:"help tour walkthrough guide",icon:"✧",run:function(){const tour=$("startTour");if(tour)tour.click();}},
  {kind:"action",title:"Download progress backup",detail:"Export saved results, planner tasks and local progress",keywords:"export backup json download progress",icon:"↓",run:function(){const button=$("exportBackup");if(button)button.click();else activateWorkspaceView("history");}}
 ];
 let lastTrigger=null;
 function normalize(value){return String(value||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();}
 function navigateToChapter(item){
  activateWorkspaceView("learn");
  const classSelect=$("notesClass"),subjectSelect=$("notesSubject"),search=$("notesSearch");
  if(classSelect)classSelect.value=Array.from(classSelect.options).some(function(option){return option.value===item.level;})?item.level:"all";
  if(subjectSelect)subjectSelect.value=Array.from(subjectSelect.options).some(function(option){return option.value===item.subject;})?item.subject:"all";
  if(search){search.value=item.chapter;search.dispatchEvent(new Event("input",{bubbles:true}));}
  const card=Array.from(document.querySelectorAll(".notes-card")).find(function(node){const title=node.querySelector("h3"),meta=node.querySelector(".notes-meta");return title&&title.textContent===item.chapter&&meta&&meta.textContent===item.level+" · "+item.subject;});
  if(card){const read=Array.from(card.querySelectorAll("button")).find(function(button){return button.textContent.trim()==="Read notes";});if(read)read.click();card.scrollIntoView({behavior:"smooth",block:"start"});}
  else if(search)search.focus();
 }
 function navigateToTest(test){
  activateWorkspaceView("tests",{dataset:{showExam:test.exam==="CBSE"?"all":test.exam}});
  const card=Array.from(document.querySelectorAll(".test-card")).find(function(node){const button=node.querySelector("[data-start]");return button&&button.dataset.start===test.id;});
  if(card){card.classList.add("command-highlight");card.scrollIntoView({behavior:"smooth",block:"center"});window.setTimeout(function(){card.classList.remove("command-highlight");},1800);}
 }
 function render(){
  const query=normalize(input.value),entries=[];
  const base=commands.filter(function(command){return !query||normalize(command.title+" "+command.detail+" "+command.keywords).includes(query);});
  base.slice(0,query?5:commands.length).forEach(function(command){entries.push({group:"Quick actions",title:command.title,detail:command.detail,type:command.kind==="page"?"Open page":"Action",icon:command.icon,run:command.run});});
  if(query.length>=2){
   const index=Array.isArray(window.KP_STUDY_NOTE_INDEX)?window.KP_STUDY_NOTE_INDEX:[];
   index.filter(function(item){return normalize(item.searchText||[item.level,item.subject,item.chapter,item.intro].join(" ")).includes(query);}).slice(0,6).forEach(function(item){entries.push({group:"Chapter notes",title:item.chapter,detail:item.level+" · "+item.subject+" — "+item.intro,type:"Open notes",icon:"▤",run:function(){navigateToChapter(item);}});});
   questions.filter(function(test){return normalize([test.title,test.exam,test.level,test.desc].join(" ")).includes(query);}).slice(0,5).forEach(function(test){entries.push({group:"Practice sets",title:test.title,detail:test.exam+" · "+test.level+" · "+test.qs.length+" questions",type:"Open test",icon:"◷",run:function(){navigateToTest(test);}});});
  }
  results.replaceChildren();
  if(!entries.length){const empty=document.createElement("div");empty.className="command-empty";empty.textContent=query.length<2?"Type at least two characters to search chapter notes and tests.":"No matching page, chapter or practice set. Try a subject name or a shorter search.";results.appendChild(empty);}
  else{
   let currentGroup="";
   entries.forEach(function(entry){
    if(entry.group!==currentGroup){currentGroup=entry.group;const group=document.createElement("div");group.className="command-group-label";group.textContent=currentGroup;results.appendChild(group);}
    const button=document.createElement("button");button.type="button";button.className="command-result";button.setAttribute("aria-label",entry.title+" — "+entry.type);
    const icon=document.createElement("span");icon.className="command-result-icon";icon.setAttribute("aria-hidden","true");icon.textContent=entry.icon;
    const textWrap=document.createElement("span");textWrap.className="command-result-text";
    const title=document.createElement("strong");title.textContent=entry.title;
    const detail=document.createElement("small");detail.textContent=entry.detail;
    const type=document.createElement("span");type.className="command-result-type";type.textContent=entry.type;
    textWrap.append(title,detail);button.append(icon,textWrap,type);button.addEventListener("click",function(){dialog.close();entry.run();});results.appendChild(button);
   });
  }
  status.textContent=entries.length+" result"+(entries.length===1?"":"s")+" · Use ↑ ↓ to move, Enter to open, Esc to close.";
 }
 function open(){if(document.body.classList.contains("mock-test-window"))return;lastTrigger=document.activeElement;if(!dialog.open){if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");}input.value="";render();window.setTimeout(function(){input.focus();},0);}
 trigger.addEventListener("click",open);
 if(close)close.addEventListener("click",function(){if(typeof dialog.close==="function")dialog.close();else dialog.removeAttribute("open");});
 dialog.addEventListener("close",function(){if(lastTrigger&&typeof lastTrigger.focus==="function")lastTrigger.focus();});
 dialog.addEventListener("click",function(event){if(event.target===dialog){if(typeof dialog.close==="function")dialog.close();else dialog.removeAttribute("open");}});
 input.addEventListener("input",render);
 dialog.addEventListener("keydown",function(event){
  const buttons=Array.from(results.querySelectorAll(".command-result")),current=buttons.indexOf(document.activeElement);
  if(event.key==="ArrowDown"&&buttons.length&&current>=0){event.preventDefault();buttons[Math.min(buttons.length-1,current+1)].focus();}
  else if(event.key==="ArrowUp"&&buttons.length&&current>=0){event.preventDefault();if(current===0)input.focus();else buttons[current-1].focus();}
 });
 input.addEventListener("keydown",function(event){const buttons=Array.from(results.querySelectorAll(".command-result"));if(event.key==="ArrowDown"&&buttons.length){event.preventDefault();buttons[0].focus();}else if(event.key==="Enter"&&buttons.length){event.preventDefault();buttons[0].click();}});
 document.addEventListener("keydown",function(event){
  if(document.body.classList.contains("mock-test-window"))return;
  const target=event.target,typing=target&&(target.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
  if((event.ctrlKey||event.metaKey)&&String(event.key).toLowerCase()==="k"){event.preventDefault();if(!dialog.open)open();else input.focus();}
  else if(event.key==="/"&&!typing&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!dialog.open){event.preventDefault();open();}
 });
}

document.querySelectorAll("[data-view]").forEach(function(link){
 link.addEventListener("click",function(ev){
  const view=link.dataset.view;if(!view)return;ev.preventDefault();activateWorkspaceView(view,link);
 });
});
window.addEventListener("kp:planner-updated",function(){renderPlanner();});
const printMount=document.createElement("div");printMount.id="printMount";printMount.style.display="none";document.body.appendChild(printMount);
if(!document.getElementById("saveStudyPdf")){toast("PDF tool could not be initialised.");}
fillSubjects($("subject"),$("classLevel").value,$("subject").value);
fillSubjects($("chatSubject"),$("chatClass").value,$("chatSubject").value);
updateHubTopics();updateChatTopics();
initPWA();
initCommandPalette();
activateWorkspaceView("overview");
const requestedMockTest=new URLSearchParams(window.location.search).get("kpMockTest");
if(requestedMockTest){const requestedTest=questions.find(function(test){return test.id===requestedMockTest&&test.fullLength;});if(requestedTest){document.body.classList.add("mock-test-window");document.title=requestedTest.title+" | KaushalPath Mock Test";activateWorkspaceView("tests");startTest(requestedTest.id);}else{toast("This mock test could not be loaded. Return to the test series and try again.");}}

})();
