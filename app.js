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
let active=null,tick=null,lastAnswerText="",studyAttachment=null,chatAttachment=null,lastChatAttachment=null;
function safe(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function resizeImageFile(file){
 return new Promise(function(resolve,reject){
  if(!file){reject(new Error("Choose an image file."));return;}
  if(file.size>15*1024*1024){reject(new Error("Choose an image smaller than 15 MB; it will be compressed before upload."));return;}
  const url=URL.createObjectURL(file),image=new Image();
  image.onload=function(){
   try{
    const max=1280,scale=Math.min(1,max/Math.max(image.naturalWidth,image.naturalHeight));
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
function renderTests(){const grid=$("testGrid");grid.innerHTML="";questions.forEach(function(t){const card=document.createElement("article");card.className="test-card";card.dataset.exam=t.exam;const cls=t.exam==="NEET UG"?"teal":t.exam==="CBSE"?"orange":"";const kind=t.official?"Official sample-paper question":"Original practice set";const maxMarks=t.qs.reduce(function(total,q){return total+(Number.isFinite(q.mark)?q.mark:t.mark);},0);const marking=t.official?"+1 / 0 / 0":"+"+t.mark+" / "+(t.negativeMark>0?"−"+t.negativeMark:"0")+" / 0";const sourceLinks=t.official?'<div class="test-source-links"><a href="'+safe(t.sourceUrl)+'" target="_blank" rel="noopener noreferrer">Official question paper ↗</a> <a href="'+safe(t.schemeUrl)+'" target="_blank" rel="noopener noreferrer">Marking scheme ↗</a></div>':"";card.innerHTML='<span class="tag '+cls+'">'+safe(t.exam)+" · "+safe(t.level)+'</span><h3>'+safe(t.title)+'</h3><p>'+safe(t.desc)+'</p><div class="test-meta"><span>◷ '+t.duration+' min</span><span>▦ '+t.qs.length+' questions</span><span>◎ '+maxMarks+' marks</span><span>Scoring: '+marking+' (correct / wrong / blank)</span><span>'+kind+'</span></div>'+sourceLinks+'<button class="btn btn-blue" type="button" data-start="'+t.id+'">Start test ↗</button>';grid.appendChild(card);});}
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
async function streamStudyRequest(payload,onText,signal,onStatus,onSources){
 const remoteTools=needsRemoteTools(payload);
 if(remoteTools&&onStatus)onStatus(payload&&payload.imageData?"Preparing your image…": "Checking relevant public sources…");
 const response=await fetch("/api/study-guide",{method:"POST",headers:{"content-type":"application/json","accept":"text/event-stream, application/json"},body:JSON.stringify(Object.assign({},payload,{stream:true})),signal:signal});
 const contentType=response.headers.get("content-type")||"";
 if(!response.ok){const errorData=await response.json().catch(function(){return{};});throw new Error(errorData.error||"The AI guide is currently unavailable (HTTP "+response.status+").");}
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
  if(event.error){streamError=new Error(typeof event.error==="string"?event.error:(event.error.message||"The study assistant stopped responding. Please try again."));return;}
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
 if(!response.ok)throw new Error(data.error||"The AI service is temporarily unavailable (HTTP "+response.status+").");
 let answer=typeof data.text==="string"?data.text:"";
 if(!answer.trim()){const choice=data.choices&&data.choices[0],content=choice&&choice.message&&choice.message.content;if(typeof content==="string")answer=content;else if(Array.isArray(content))answer=content.map(function(part){return part&&typeof part.text==="string"?part.text:"";}).join("");}
 if(!answer.trim())throw new Error("The study assistant did not return an answer. Please retry.");
 onText(answer);return answer;
}
function makePrompt(level,subject,chapter,mode,topic){
 const task=({"notes":"Create useful but compact chapter notes with headings, key ideas, definitions or formulas, one worked example, common mistakes and a recap.","explain":"Explain the concept in plain language, step by step, with one worked or everyday example and a short self-check.","revision":"Create a compact revision sheet with high-yield points, formulas or facts, common mistakes and five recall prompts.","questions":"Create five original practice questions, then provide their answers with short explanations.","solve":"Solve the learner's question step by step, show calculations and units, state assumptions, and check the result."})[mode]||"Explain this clearly with a short example.";
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
let chatHistory=[],activeChatController=null,lastChatAnswer="",lastChatPrompt="",chatBusy=false;
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
async function sendChat(raw,regenerate){
 const question=String(raw||"").trim();if(!question||chatBusy)return;
 if(activeChatController)activeChatController.abort();
 if(!regenerate){
  lastChatAttachment=chatAttachment;chatAttachment=null;
  if($("chatImage"))$("chatImage").value="";
  if($("chatImageHint"))$("chatImageHint").textContent=lastChatAttachment?"Attached: "+lastChatAttachment.name:"Attach an image, PDF, office document or text file.";
  chatHistory.push({role:"user",content:question});chatAddMessage("user",question+(lastChatAttachment?"\n\n"+attachmentLabel(lastChatAttachment):""));lastChatPrompt=question;
 }else if(chatHistory.length&&chatHistory[chatHistory.length-1].role==="assistant")chatHistory.pop();
 const attachmentForRequest=lastChatAttachment,webSearch=Boolean($("chatWebSearch")&&$("chatWebSearch").checked);
 chatBusy=true;activeChatController=new AbortController();
 const controller=activeChatController,send=$("chatSend"),input=$("chatInput"),stop=$("chatStop"),messages=$("chatMessages");
 send.disabled=true;send.textContent="Generating…";input.disabled=true;stop.disabled=false;messages.setAttribute("aria-busy","true");$("chatStatus").textContent="Connecting to the study assistant…";
 enableChatTools(Boolean(lastChatAnswer));
 const node=chatAddMessage("assistant",""),messageBox=node.closest(".chat-message");
 node.innerHTML='<span class="chat-typing" role="status"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span><span class="chat-typing-copy">Preparing your answer…</span></span>';messageBox.classList.add("is-pending");
 let waiting=true,answer="";
 try{
  const level=$("chatClass").value,subject=$("chatSubject").value,mode=$("chatMode").value;
  const prompt=makePrompt(level,subject,"",mode,question);
  renderSourceLinks($("chatSources"),[]);
  answer=await streamStudyRequest(Object.assign({prompt:prompt,mode:mode,urls:[],messages:chatHistory.slice(0,-1).slice(-6),webSearch:webSearch,searchQuery:question,userPrompt:question},attachmentPayload(attachmentForRequest)),function(delta){
   const shouldFollow=messages.scrollHeight-messages.scrollTop-messages.clientHeight<120;
   if(waiting){node.innerHTML="";waiting=false;messageBox.classList.remove("is-pending");const copyButton=messageBox.querySelector("[data-copy-message]");if(copyButton)copyButton.disabled=false;}
   answer+=delta;renderMarkdownInto(node,answer);
   if(shouldFollow)messages.scrollTop=messages.scrollHeight;
   $("chatStatus").textContent="Writing your answer · "+answer.length+" characters";
  },controller.signal,function(status){$("chatStatus").textContent=status;},function(sources){renderSourceLinks($("chatSources"),sources);});
  if(!String(answer||"").trim()){
   waiting=false;messageBox.classList.remove("is-pending");node.textContent="The assistant returned an empty response. Please try again.";node.classList.add("chat-message-error");lastChatAnswer="";$("chatStatus").textContent="No answer received";enableChatTools(false);return;
  }
  messageBox.dataset.rawAnswer=answer;
  lastChatAnswer=answer;chatHistory.push({role:"assistant",content:answer});chatHistory=chatHistory.slice(-10);
  $("chatStatus").textContent=needsRemoteTools(Object.assign({webSearch:webSearch,userPrompt:question},attachmentPayload(attachmentForRequest)))?"Answer ready · sources checked":"Answer ready";
  enableChatTools(Boolean(answer));
 }catch(err){
  messageBox.classList.remove("is-pending");
  if(err.name==="AbortError"){$("chatStatus").textContent="Response stopped";if(waiting)node.textContent="Response stopped.";}
  else{$("chatStatus").textContent="Unable to complete";node.textContent="The study assistant could not finish this response.\n\n"+err.message+"\n\nTry a shorter question or retry. Your earlier messages are saved.";node.classList.add("chat-message-error");}
  enableChatTools(Boolean(lastChatAnswer));
 }finally{
  if(activeChatController===controller)activeChatController=null;
  chatBusy=false;send.disabled=false;send.textContent="Send question ↗";input.disabled=false;stop.disabled=true;messages.setAttribute("aria-busy","false");input.focus();
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
$("chatClear").addEventListener("click",function(){if(activeChatController)activeChatController.abort();chatHistory=[];lastChatAnswer="";lastChatPrompt="";enableChatTools(false);$("chatMessages").innerHTML='<div class="chat-welcome"><div class="chat-welcome-mark">✦</div><h3>What would you like to understand?</h3><p>Choose a starting point below, or ask your own question. Your conversation stays together as you work through a topic.</p><div class="chat-welcome-prompts"><button type="button" data-chat-prompt="Explain this topic simply, with one everyday example and a quick self-check.">Explain simply</button><button type="button" data-chat-prompt="Create a well-organised revision sheet with key ideas, formulas or facts, examples, and a short recap.">Make revision notes</button><button type="button" data-chat-prompt="Create five original practice questions with answers and short explanations.">Quiz me</button></div></div>';$("chatStatus").textContent="New conversation";});
$("saveStudyPdf").disabled=true;

const HISTORY_KEY="kp-results",FOCUS_KEY="kp-focus-sessions",FOCUS_STATE_KEY="kp-focus-state",ACTIVE_TEST_KEY="kp-active-test",LIBRARY_KEY="kp-saved-library";
function readLocalJSON(key,fallback){try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}
function writeLocalJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){return false;}}
function validResult(r){return !!r&&typeof r==="object"&&typeof r.title==="string"&&r.title.length<=250&&typeof r.exam==="string"&&typeof r.date==="string"&&r.date.length<=120&&Number.isFinite(Number(r.score))&&Number.isFinite(Number(r.max))&&Number(r.max)>0&&Number.isFinite(Number(r.correct))&&Number.isFinite(Number(r.wrong))&&Number.isFinite(Number(r.blank));}
function getHistory(){const stored=readLocalJSON(HISTORY_KEY,[]);return Array.isArray(stored)?stored.filter(validResult).slice(0,60):[];}
function saveHistory(item){const list=getHistory();list.unshift(item);const saved=writeLocalJSON(HISTORY_KEY,list.slice(0,60));renderHistory();if(!saved)toast("Your result is visible, but browser storage is full or unavailable. Export it now.");}
function getFocusSessions(){const stored=readLocalJSON(FOCUS_KEY,[]);return Array.isArray(stored)?stored.filter(function(s){return s&&typeof s.date==="string"&&Number.isFinite(Date.parse(s.date))&&Number.isFinite(Number(s.seconds))&&Number(s.seconds)>=60&&Number(s.seconds)<=7200&&s.mode==="focus";}).slice(-100):[];}
function saveFocusSessions(list){return writeLocalJSON(FOCUS_KEY,list.slice(-100));}
function clearSavedTest(){try{localStorage.removeItem(ACTIVE_TEST_KEY);}catch(e){}}
function validTestSnapshot(test,expectedId){
 if(!test||typeof test!=="object"||test.id!==expectedId||typeof test.title!=="string"||!test.title.trim()||test.title.length>180||typeof test.exam!=="string"||test.exam.length>80||typeof test.level!=="string"||test.level.length>80||!Number.isFinite(Number(test.duration))||Number(test.duration)<1||Number(test.duration)>240||!Number.isFinite(Number(test.mark))||Number(test.mark)<0||Number(test.mark)>100||!Number.isFinite(Number(test.negativeMark))||Number(test.negativeMark)<0||Number(test.negativeMark)>100||!Array.isArray(test.qs)||test.qs.length<1||test.qs.length>100)return false;
 return test.qs.every(function(q){return q&&typeof q.q==="string"&&q.q.length>0&&q.q.length<=4000&&Array.isArray(q.o)&&q.o.length>=2&&q.o.length<=8&&q.o.every(function(o){return typeof o==="string"&&o.length<=1200;})&&Number.isInteger(q.a)&&q.a>=0&&q.a<q.o.length&&typeof q.e==="string"&&q.e.length<=5000&&(q.mark==null||(Number.isFinite(Number(q.mark))&&Number(q.mark)>=0&&Number(q.mark)<=100))&&(q.negativeMark==null||(Number.isFinite(Number(q.negativeMark))&&Number(q.negativeMark)>=0&&Number(q.negativeMark)<=100));});
}
function getSavedTest(){
 const saved=readLocalJSON(ACTIVE_TEST_KEY,null);if(!saved||typeof saved!=="object")return null;
 const testId=String(saved.testId||"");let test=questions.find(function(t){return t.id===testId;});
 if(!test&&validTestSnapshot(saved.testSnapshot,testId)){test=saved.testSnapshot;questions.push(test);}
 if(!test||!Number.isFinite(Number(saved.endAt))){clearSavedTest();return null;}
 const index=Number(saved.index),answers={};
 if(!Number.isInteger(index)||index<0||index>=test.qs.length){clearSavedTest();return null;}
 if(saved.answers&&typeof saved.answers==="object")Object.keys(saved.answers).forEach(function(key){const qi=Number(key),answer=Number(saved.answers[key]);if(Number.isInteger(qi)&&qi>=0&&qi<test.qs.length&&Number.isInteger(answer)&&answer>=0&&answer<test.qs[qi].o.length)answers[qi]=answer;});
 return {testId:test.id,test:test,answers:answers,index:index,endAt:Number(saved.endAt)};
}
function saveActiveTest(){if(!active||!active.test)return;const ok=writeLocalJSON(ACTIVE_TEST_KEY,{testId:active.test.id,testSnapshot:active.test.id.indexOf("review-")===0?active.test:null,answers:active.answers,index:active.index,endAt:active.endAt,updatedAt:Date.now()});if(!ok)toast("Autosave is unavailable in this browser. Keep this tab open.");refreshResumeBanner();}
function refreshResumeBanner(){
 const banner=$("resumeTestBanner");if(!banner)return;if(active){banner.classList.add("hidden");return;}const saved=getSavedTest(),title=$("resumeTestTitle"),detail=$("resumeTestDetail");
 if(!saved){banner.classList.add("hidden");return;}
 const test=questions.find(function(t){return t.id===saved.testId;});if(!test){banner.classList.add("hidden");return;}
 if(title)title.textContent=test.title;
 const remaining=Math.max(0,Math.ceil((saved.endAt-Date.now())/1000)),answered=Object.keys(saved.answers).length;
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
 if(attempts)attempts.textContent=String(history.length);
 if(accuracy)accuracy.textContent=(attempted?Math.round(correct/attempted*100):0)+"%";
 if(focus)focus.textContent=minutes>=60?Math.floor(minutes/60)+"h "+(minutes%60)+"m":minutes+"m";
 if(streakNode)streakNode.textContent=String(streak)+" "+(streak===1?"day":"days");
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
 if(active.endAt<=Date.now()){finishTest(true);return;}
 renderQuestion();saveActiveTest();tick=setInterval(function(){if(!active)return;updateTimer();},1000);
});
$("discardSavedTest").addEventListener("click",function(){if(!confirm("Discard this saved test attempt? Your completed results will remain."))return;clearSavedTest();refreshResumeBanner();toast("Unfinished test discarded.");});
window.addEventListener("beforeunload",function(){if(active)saveActiveTest();});
document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"&&active)saveActiveTest();});
function exportProgressBackup(){const payload={app:"KaushalPath",version:1,exportedAt:new Date().toISOString(),results:getHistory(),focusSessions:getFocusSessions(),savedLibrary:getSavedLibrary()};download("kaushalpath-progress-backup.json",JSON.stringify(payload,null,2),"application/json");toast("Progress backup exported.");}
$("exportBackup").addEventListener("click",exportProgressBackup);
$("importBackup").addEventListener("click",function(){$("backupFile").click();});
$("backupFile").addEventListener("change",async function(){
 const file=$("backupFile").files&&$("backupFile").files[0];if(!file)return;
 try{
  if(file.size>1000000)throw new Error("Choose a progress backup smaller than 1 MB.");
  const payload=JSON.parse(await file.text());
  if(!payload||payload.app!=="KaushalPath"||payload.version!==1||!Array.isArray(payload.results)||!Array.isArray(payload.focusSessions)||payload.results.length>60||payload.focusSessions.length>100||(payload.savedLibrary!=null&&!Array.isArray(payload.savedLibrary))||(Array.isArray(payload.savedLibrary)&&payload.savedLibrary.length>40))throw new Error("This is not a supported KaushalPath progress backup.");
  if(payload.results.some(function(r){return !validResult(r);}))throw new Error("The backup contains a result record with invalid fields.");
  if(payload.focusSessions.some(function(s){return !s||typeof s.date!=="string"||!Number.isFinite(Date.parse(s.date))||!Number.isInteger(Number(s.seconds))||Number(s.seconds)<60||Number(s.seconds)>7200||s.mode!=="focus";}))throw new Error("The backup contains an invalid focus-session record.");
  const importedLibrary=Array.isArray(payload.savedLibrary)?payload.savedLibrary:[];if(importedLibrary.some(function(item){return !validLibraryItem(item);}))throw new Error("The backup contains an invalid saved-study record.");
  if(!confirm("Replace this browser's "+getHistory().length+" result(s), "+getFocusSessions().length+" focus session(s), and "+getSavedLibrary().length+" saved answer(s) with "+payload.results.length+" result(s), "+payload.focusSessions.length+" focus session(s), and "+importedLibrary.length+" saved answer(s) from this backup? Export your current progress first if you need a copy."))return;
  const previousResults=getHistory(),previousSessions=getFocusSessions(),previousLibrary=getSavedLibrary();if(!writeLocalJSON(HISTORY_KEY,payload.results)||!saveFocusSessions(payload.focusSessions)||!writeLocalJSON(LIBRARY_KEY,importedLibrary)){writeLocalJSON(HISTORY_KEY,previousResults);saveFocusSessions(previousSessions);writeLocalJSON(LIBRARY_KEY,previousLibrary);throw new Error("Browser storage could not save the imported progress. Your browser may be out of space.");}
  clearSavedTest();renderHistory();renderSavedLibrary();refreshResumeBanner();toast("Progress backup imported successfully.");
 }catch(error){toast(error&&error.message?error.message:"Could not import that backup.");}
 finally{$("backupFile").value="";}
});
$("clearProgress").addEventListener("click",function(){
 if(!confirm("Clear all saved test results, focus sessions, saved study answers, and the unfinished test on this browser? This cannot be undone."))return;
 writeLocalJSON(HISTORY_KEY,[]);writeLocalJSON(FOCUS_KEY,[]);writeLocalJSON(LIBRARY_KEY,[]);clearSavedTest();setFocusPreset("focus",1500);renderHistory();renderSavedLibrary();refreshResumeBanner();toast("Saved progress cleared.");
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

function startTest(id){const t=questions.find(function(q){return q.id===id;});if(!t)return;const pending=getSavedTest();if(pending&&!confirm("Starting a new test will discard your unfinished saved attempt. Continue?"))return;clearSavedTest();clearInterval(tick);active={test:t,answers:{},index:0,endAt:Date.now()+t.duration*60*1000};$("resultWorkspace").classList.add("hidden");$("examWorkspace").classList.remove("hidden");$("examWorkspace").scrollIntoView({behavior:"smooth",block:"start"});saveActiveTest();renderQuestion();tick=setInterval(function(){if(!active)return;updateTimer();},1000);}
function updateTimer(){if(!active)return;const secs=Math.max(0,Math.ceil((active.endAt-Date.now())/1000));const el=$("timer");if(el)el.textContent=String(Math.floor(secs/60)).padStart(2,"0")+":"+String(secs%60).padStart(2,"0");if(secs<=0)finishTest(true);}
function renderQuestion(){if(!active)return;const t=active.test,q=t.qs[active.index],selected=active.answers[active.index];const root=$("examWorkspace");root.innerHTML='<div class="exam-top"><div><div class="question-count">'+safe(t.title)+'</div><h3>Question '+(active.index+1)+' of '+t.qs.length+'</h3></div><div class="timer" id="timer" role="timer" aria-label="Time remaining">--:--</div></div><div class="question" role="heading" aria-level="4" aria-live="polite">'+safe(q.q)+'</div><div class="options" role="group" aria-label="Answer choices">'+q.o.map(function(o,i){return '<button type="button" class="option '+(selected===i?"selected":"")+'" data-answer="'+i+'" aria-pressed="'+(selected===i?"true":"false")+'"><span class="optkey">'+String.fromCharCode(65+i)+'</span><span>'+safe(o)+'</span></button>';}).join("")+'</div><div class="question-nav">'+t.qs.map(function(qq,i){return '<button type="button" class="qnav '+(active.answers[i]!==undefined?"done ":"")+(i===active.index?"current":"")+'" data-jump="'+i+'" aria-label="Question '+(i+1)+'">'+(i+1)+'</button>';}).join("")+'</div><div class="exam-actions"><button class="btn btn-light" type="button" id="prevQ" '+(active.index===0?"disabled":"")+'>← Previous</button><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-light" type="button" id="nextQ">'+(active.index===t.qs.length-1?"Review answers":"Next question →")+'</button><button class="btn btn-blue" type="button" id="finishQ">Finish test</button></div></div><p class="tiny">'+(t.official?"Official CBSE sampler scoring: +1 correct, 0 incorrect or unattempted. This is not the full 70-mark paper.":t.level==="Targeted review"?"Targeted retake: missed or unanswered questions only. Original per-question marks and penalties are retained.":"Practice scoring: +"+t.mark+" correct, "+(t.negativeMark>0?"−"+t.negativeMark:"0")+" incorrect, 0 unattempted. This compact set is not a full exam.")+'</p>';updateTimer();}
$("testGrid").addEventListener("click",function(e){const b=e.target.closest("[data-start]");if(b)startTest(b.dataset.start);});
$("examWorkspace").addEventListener("click",function(e){if(!active)return;const ans=e.target.closest("[data-answer]"),jump=e.target.closest("[data-jump]");if(ans){active.answers[active.index]=Number(ans.dataset.answer);saveActiveTest();renderQuestion();return;}if(jump){active.index=Number(jump.dataset.jump);saveActiveTest();renderQuestion();return;}if(e.target.closest("#prevQ")){active.index=Math.max(0,active.index-1);saveActiveTest();renderQuestion();return;}if(e.target.closest("#nextQ")){if(active.index===active.test.qs.length-1){toast("Review your answers, then finish the test.");}else{active.index++;saveActiveTest();renderQuestion();}return;}if(e.target.closest("#finishQ")){const unanswered=active.test.qs.length-Object.keys(active.answers).length;if(unanswered&&!confirm("You still have "+unanswered+" unanswered question(s). Finish this test anyway?"))return;finishTest(false);}});
function finishTest(auto){if(!active)return;clearInterval(tick);tick=null;const t=active.test;let correct=0,wrong=0,blank=0;const answers=active.answers;const review=t.qs.map(function(q,i){const chosen=answers[i];if(chosen===undefined)blank++;else if(chosen===q.a)correct++;else wrong++;return {question:q.q,options:q.o,chosen:chosen,correct:q.a,explanation:q.e,mark:Number.isFinite(q.mark)?q.mark:t.mark,negativeMark:Number.isFinite(q.negativeMark)?q.negativeMark:(Number.isFinite(t.negativeMark)?t.negativeMark:(t.exam==="CBSE"?0:1))};});const score=t.qs.reduce(function(total,q,i){const chosen=answers[i],marks=Number.isFinite(q.mark)?q.mark:t.mark,penalty=Number.isFinite(q.negativeMark)?q.negativeMark:(Number.isFinite(t.negativeMark)?t.negativeMark:(t.exam==="CBSE"?0:1));return total+(chosen===undefined?0:chosen===q.a?marks:-penalty);},0);const max=t.qs.reduce(function(total,q){return total+(Number.isFinite(q.mark)?q.mark:t.mark);},0);const result={id:t.id,title:t.title,exam:t.exam,level:t.level,date:new Date().toLocaleString(),correct:correct,wrong:wrong,blank:blank,score:score,max:max,percentage:Math.round(Math.max(0,score)/max*100),review:review};saveHistory(result);clearSavedTest();active=null;renderResult(result,auto);}
function renderResult(r,auto){const missedCount=r.review.filter(function(q){return q.chosen===undefined||q.chosen!==q.correct;}).length;const root=$("resultWorkspace");root.classList.remove("hidden");$("examWorkspace").classList.add("hidden");root.innerHTML='<div class="kicker">Your result</div><h2 style="margin-top:7px">'+safe(r.title)+'</h2><p class="tiny">'+(auto?"Time ended automatically. ":"")+"Completed "+safe(r.date)+'</p><div class="result-score">'+r.score+' <span style="font-size:1.1rem;color:var(--muted);font-weight:700">/ '+r.max+'</span></div><div class="result-grid"><div class="result-metric"><strong>'+r.percentage+'%</strong><span>Percentage (clamped at 0)</span></div><div class="result-metric"><strong>'+r.correct+'</strong><span>Correct</span></div><div class="result-metric"><strong>'+r.wrong+'</strong><span>Incorrect</span></div><div class="result-metric"><strong>'+r.blank+'</strong><span>Unattempted</span></div></div><div class="actions">'+(missedCount?'<button class="btn btn-purple" id="retryMissed">Practice missed questions ('+missedCount+')</button>':"")+'<button class="btn btn-blue" id="downloadJson">Download result JSON</button><button class="btn btn-light" id="downloadCsv">Download result CSV</button><button class="btn btn-light" id="printResult">Print / save PDF</button><button class="btn btn-light" id="closeResult">Back to tests</button></div><h3 style="margin-top:25px">Answer review and explanations</h3><div id="answerReview"></div>';const review=$("answerReview");r.review.forEach(function(q,i){const div=document.createElement("div");div.className="review-item";const status=q.chosen===undefined?"Not attempted":q.chosen===q.correct?"Correct":"Incorrect";div.innerHTML='<strong>'+(i+1)+". "+safe(q.question)+'</strong><p class="'+(q.chosen===q.correct?"correct":q.chosen===undefined?"":"incorrect")+'">'+status+(q.chosen===undefined?"":" · Your answer: "+String.fromCharCode(65+q.chosen))+' · Correct answer: '+String.fromCharCode(65+q.correct)+" — "+safe(q.options[q.correct])+'</p><p class="tiny">'+safe(q.explanation)+'</p>';review.appendChild(div);});if(missedCount){$("retryMissed").addEventListener("click",function(){const missed=r.review.filter(function(q){return q.chosen===undefined||q.chosen!==q.correct;});const retryTest={id:"review-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),title:"Targeted review · "+r.title,exam:r.exam,level:"Targeted review",duration:Math.max(3,Math.ceil(missed.length*1.5)),mark:r.exam==="CBSE"?1:4,negativeMark:r.exam==="CBSE"?0:1,desc:"Focused retake of "+missed.length+" missed or unanswered question(s).",qs:missed.map(function(q){return {q:q.question,o:q.options,a:q.correct,e:String(q.explanation||"Review the underlying concept from your notes."),mark:Number.isFinite(q.mark)?q.mark:(r.exam==="CBSE"?1:4),negativeMark:Number.isFinite(q.negativeMark)?q.negativeMark:(r.exam==="CBSE"?0:1)};})};questions.push(retryTest);startTest(retryTest.id);});}root.scrollIntoView({behavior:"smooth",block:"start"});$("downloadJson").addEventListener("click",function(){download("kaushalpath-result.json",JSON.stringify(r,null,2),"application/json");});$("downloadCsv").addEventListener("click",function(){download("kaushalpath-result.csv",resultCsv(r),"text/csv");});$("printResult").addEventListener("click",function(){window.print();});$("closeResult").addEventListener("click",function(){root.classList.add("hidden");$("tests").scrollIntoView({behavior:"smooth"});});}
function download(name,content,type){const blob=new Blob([content],{type:type+";charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
function resultCsv(r){return [["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"],[r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]].map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n");}
$("exportHistory").addEventListener("click",function(){const history=getHistory();if(!history.length){toast("No history to export yet.");return;}const rows=[["Test","Exam","Date","Correct","Incorrect","Unattempted","Score","Maximum","Percent"]];history.forEach(function(r){rows.push([r.title,r.exam,r.date,r.correct,r.wrong,r.blank,r.score,r.max,r.percentage]);});download("kaushalpath-history.csv",rows.map(function(row){return row.map(function(x){return '"'+String(x).replace(/"/g,'""')+'"';}).join(",");}).join("\r\n"),"text/csv");});

async function checkAI(){try{const r=await fetch("/api/study-guide",{headers:{"x-kaushalpath-status":"1"}});const j=await r.json();$("aiStatus").textContent=j.ready?"AI guide ready":"AI guide setup needed";$("aiStatus").style.background=j.ready?"#1c584f":"#654a2d";}catch(e){$("aiStatus").textContent="AI status unavailable";}}

document.querySelectorAll("[data-show-exam]").forEach(function(link){link.addEventListener("click",function(){const chosen=link.dataset.showExam||"all";document.querySelectorAll(".test-card").forEach(function(card){card.classList.toggle("hidden",chosen!=="all"&&card.dataset.exam!==chosen);});document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const label=chosen==="all"?"Test Series":chosen==="JEE Main"?"JEE Main Prep":"NEET UG Prep";const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=label;});});
document.querySelectorAll('.side-link[href^="#"]').forEach(function(link){link.addEventListener("click",function(){if(!link.dataset.showExam){document.querySelectorAll(".side-link").forEach(function(item){item.classList.toggle("active",item===link);});const labels={"#overview":"Overview","#learn":"CBSE Study Hub","#history":"My Results","#resources":"Official Resources","#library":"Saved Library"};const crumb=$("breadcrumbPage");if(crumb)crumb.textContent=labels[link.getAttribute("href")]||"Workspace";}});});

renderTests();renderHistory();refreshResumeBanner();initFocusTimer();renderSavedLibrary();checkAI();

function activateWorkspaceView(view,clicked){
 const valid=["overview","learn","ai-guide","tests","history","resources","library"] ;
 const target=valid.includes(view)?view:"overview";
 const overviewNodes=[document.getElementById("overview"),document.querySelector("main > .hero"),document.querySelector("main > .quickstats"),document.getElementById("learningPath")];
 overviewNodes.forEach(function(node){if(node)node.classList.toggle("view-hidden",target!=="overview");});
 ["learn","ai-guide","tests","resources","history","library"].forEach(function(id){const node=$(id);if(node)node.classList.toggle("view-hidden",target!==id);});
 const clickedExam=clicked&&clicked.dataset.showExam;document.querySelectorAll(".side-link").forEach(function(link){const matchesExam=link.dataset.showExam?link.dataset.showExam===clickedExam||(target==="tests"&&!clickedExam&&link.dataset.showExam==="all"):true;link.classList.toggle("active",link.dataset.view===target&&matchesExam);});
 const labels={overview:"Overview",learn:"CBSE Study Hub","ai-guide":"AI Study Guide",tests:"Test Series",history:"My Results",resources:"Official Resources",library:"Saved Library"};
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
