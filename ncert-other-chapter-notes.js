/* Individual, original chapter guides for CBSE Social Science, languages, Computer Science and Commerce.
   Use the current CBSE curriculum and prescribed school text for exact chapter/year coverage and marking schemes. */
(function () {
  "use strict";
  const card = (formula, meaning, when, units, trap) => ({formula,meaning,when,units,trap});
  const q = (question, answer, explanation) => ({question,answer,explanation});
  const guide = (level, subject, chapter, intro, sections, referenceCards, workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions=[]) => ({
    level, subject, chapter, intro, depth:"detailed",
    sections:sections.map(([heading,body])=>({heading,body})),
    formulas:referenceCards.map(x=>x.formula), formulaCheatSheet:referenceCards,
    workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions,
    points:sections.map(([heading,body])=>heading+": "+body.split(/[.!?]/)[0]+"."),
    example:workedExamples.length?workedExamples[0].steps.join(" "):"Use the chapter framework, evidence/examples and practice prompts as a starting point, then check the prescribed textbook.",
    sourceNote:"Original educational guide aligned with common CBSE/NCERT chapter concepts; check the latest syllabus and prescribed edition for exact assessable scope."
  });
  const all = [
  guide("Class 10","Science","Sources of Energy",
    "Compare conventional and non-conventional energy sources through availability, energy conversion, environmental impact, reliability and practical trade-offs.",
    [
      ["Energy source and useful output","An energy source is useful only through a conversion chain: primary energy is converted into electricity, heat, motion or another useful output. For example, a power station may convert chemical energy in fuel into thermal energy, mechanical rotation and then electricity. Every conversion has losses. When comparing sources, state the required service, such as cooking, transport or grid electricity, rather than calling one source universally best."],
      ["Fossil fuels, nuclear and renewable sources","Coal, petroleum and natural gas are energy-dense and can be dispatched when required, but combustion releases pollutants and greenhouse gases and relies on finite resources. Nuclear power produces large amounts of energy from a small fuel mass, but requires rigorous safety, waste management and high-capital infrastructure. Solar, wind, hydro, biomass, geothermal and tidal sources have different availability patterns, land/water needs and environmental effects; renewable does not mean impact-free."],
      ["Storage, reliability and sustainable planning","Solar/wind output depends on weather and time, so storage, flexible demand, transmission and complementary generation can improve reliability. Biomass may be renewable if harvested sustainably, yet burning it can cause pollution and compete with food/land. A sound answer weighs lifecycle emissions, local suitability, cost, safety, intermittency and access. Energy conservation and efficiency reduce demand before new supply has to be built."]
    ],
    [
      card("Useful energy output = input energy - losses","Energy conversion cannot deliver more useful energy than supplied under the standard accounting.","Compare an energy-conversion chain.","All quantities in the same energy unit.","Avoid comparing source energy content to useful delivered energy without noting conversion efficiency."),
      card("Efficiency = useful output energy / input energy x 100%","Share of input energy delivered as the chosen useful output.","Compare devices/power systems when values are supplied.","Percentage.","State what counts as useful output."),
      card("Renewable vs non-renewable","Classification by replenishment timescale relative to use.","Classify source examples.","Qualitative comparison.","A renewable source can still create pollution or ecological harm.")
    ],
    [
      {title:"Compare two energy sources in an exam answer",steps:["State the service required: steady electricity, cooking heat or transport fuel.","Give one advantage and one limitation for each source with a cause.","Consider availability/reliability, conversion losses and environmental effects.","Conclude conditionally for the location/use rather than naming a universal winner."]},
      {title:"Calculate an efficiency",steps:["A device receives 500 J and produces 150 J of useful output.","Efficiency=150/500 x 100%=30%.","The remaining 350 J is not useful output in this accounting; it may be heat, sound or other losses.","Do not assume the energy is destroyed; energy is transferred or transformed."]
    }],
    ["Treating renewable as synonymous with pollution-free.","Ignoring storage or intermittency in solar/wind comparisons.","Comparing energy sources without specifying their use.","Describing an efficiency loss as destruction of energy."],
    ["A high-quality response compares multiple criteria and ties each claim to a mechanism or consequence. Use a simple conversion diagram for conventional electricity and a table for source trade-offs."],
    ["Why is solar/wind storage or grid flexibility important?","Why is biomass not automatically sustainable?","What does conversion efficiency measure?"],
    ["Intermittency: variable availability over time.","Lifecycle impact: effect across extraction, construction, operation and decommissioning.","Efficiency: useful output divided by input."],
    [q("Is every renewable energy source impact-free?","No.","Land, habitats, materials, water and lifecycle emissions still matter."),q("A device receives 200 J and delivers 80 J usefully. What is its efficiency?","40%.","80/200 x 100%=40%.")]),
  guide("Class 10","Social Science","Nationalism in India",
    "Understand the growth of Indian nationalism through colonial policies, mass movements, social groups, protest methods and the limitations of a single national narrative.",
    [
      ["Historical context and mass politics","Nationalist mobilisation expanded through shared grievances against colonial rule, political organisation, print/public debate and mass participation. The First World War intensified economic and political pressures. Non-cooperation and civil disobedience became distinct forms of resistance; describe their objectives, methods and historical triggers rather than treating every protest as identical."],
      ["Different groups and different expectations","Peasants, workers, business groups, students, women and regional communities did not enter the movement with exactly the same demands. For example, a group seeking lower rents or protection for local industry might support a movement while interpreting swaraj differently from a lawyer or a landless labourer. A balanced explanation shows coalition and tension together; nationalist unity did not remove all class, caste, religious or regional differences."],
      ["Symbols, stories and limits","Flags, songs, images, folklore and reinterpretations of history helped people imagine a shared nation. Symbols created emotional unity but could also exclude communities whose experiences were not represented. Movement strategy changed over time, and colonial repression, internal disagreements and negotiations shaped outcomes. Answer historical questions with chronology, causes, evidence from examples and limits of the movement."]
    ],
    [
      card("Cause -> mobilisation -> method -> response -> consequence","Reasoning framework for a historical movement.","Structure a five-mark historical answer.","Chronology and evidence rather than a number formula.","Avoid listing events without explaining causation."),
      card("Compare: Non-Cooperation vs Civil Disobedience","Distinct movement phases and methods.","Answer a compare/contrast prompt.","Compare aim, action, participation, colonial response.","Do not collapse them into one undifferentiated protest."),
      card("Historical source analysis: context + claim + evidence + limit","Method for interpreting a source or slogan/image.","Use an excerpt, image or textbook evidence.","Argument framework.","A source has a perspective and context; it is not automatically a complete account.")
    ],
    [
      {title:"Write a cause-and-consequence paragraph",steps:["Name the policy/event and the grievance it created.","Explain how the grievance spread or mobilised people.","Give a specific movement action or example.","Explain the response/consequence and recognise a limitation or disagreement."]},
      {title:"Compare participation by two social groups",steps:["State the condition or demand affecting each group.","Explain why each group joined or supported a movement.","Identify a shared goal and a difference in immediate expectation.","Conclude how the coalition expanded participation but also created negotiation/tension."]
    }],
    ["Writing only a timeline without linking causes and effects.","Assuming every social group had identical goals.","Using symbols as decoration without explaining their political meaning.","Presenting a nationalist narrative as if it automatically included all communities equally."],
    ["Use chronological signposts, precise event names and two-sided analysis of participation. For sources, refer to the specific words/image and explain what they reveal and what they cannot prove."],
    ["How did wartime conditions influence political mobilisation?","Why could different groups support the same movement for different reasons?","What role did symbols and folklore play?"],
    ["Civil disobedience: deliberate refusal to obey selected laws as protest.","Swaraj: self-rule.","Mass mobilisation: organising large numbers of people for collective political action."],
    [q("Why is it inaccurate to say all nationalist participants wanted exactly the same thing?","Different social groups had different immediate economic, social and political demands.","A broad coalition could share opposition to colonial rule while interpreting self-rule differently."),q("What makes a historical source analysis stronger than a summary?","Context, a claim grounded in source details, and a note of its perspective/limits.","This explains evidence rather than merely repeating an event list.")]),
  guide("Class 10","Social Science","Resources and Development",
    "Classify resources by origin, exhaustibility, ownership and development status; connect conservation to planning, land use and sustainable development.",
    [
      ["Resource classification and development","A resource is a material, service or environmental feature considered useful in a context; usefulness depends on technology, accessibility, institutions and needs. Resources may be classified by origin (biotic/abiotic), exhaustibility (renewable/non-renewable), ownership (individual/community/national/international) and development status (potential, developed, stock, reserves). State the basis of classification before giving examples."],
      ["Resource planning and land degradation","Resource planning requires surveying/identifying resources, building suitable technology and institutions, and matching development plans to broader goals. Land degradation can arise from deforestation, overgrazing, mining, over-irrigation or industrial waste depending on region. Corrective measures must match the cause: controlled grazing, afforestation, proper irrigation/drainage, mine-site rehabilitation and waste management are not interchangeable in every location."],
      ["Soil, conservation and sustainability","Soil formation is slow and depends on parent rock, climate, relief, organisms and time. Erosion by water/wind removes fertile topsoil; contour ploughing, terracing, shelter belts, strip cropping and check dams help under different conditions. Sustainable development considers present needs alongside the ability of future generations to meet theirs. Conservation is not simply preventing all use; it is maintaining ecological function and long-term availability."]
    ],
    [
      card("Resource planning: identify -> develop appropriate technology/institutions -> integrate into plans","Broad planning sequence.","Explain planned resource use.","Process framework.","A resource inventory alone is not a full plan."),
      card("Soil conservation must match the erosion process and terrain","Cause-matched conservation principle.","Select a measure for a map/case study.","Geographic reasoning.","Do not prescribe terracing as the only option for every landscape."),
      card("Sustainable development: meet present needs without undermining future needs","Core sustainability principle.","Evaluate land-use/resource choices.","Concept definition.","Economic output alone is not the full sustainability test.")
    ],
    [
      {title:"Select a soil-conservation measure",steps:["Identify the terrain and erosion mechanism, such as runoff on slopes or wind on open plains.","For steep cultivated slopes, terracing/contour ploughing can slow runoff.","In windy open land, shelter belts/vegetative cover can reduce wind speed and soil movement.","Explain the process by which the selected measure reduces erosion."]},
      {title:"Classify a resource",steps:["State the classification basis requested (origin, exhaustibility, ownership or development status).","Identify the defining property for that basis.","Give a fitting example.","Avoid mixing categories from different classification axes in a single unexplained list."]
    }],
    ["Mixing origin and exhaustibility classifications.","Treating every resource as inexhaustible because it renews naturally.","Listing conservation methods without explaining where they apply.","Equating sustainable development with no development."],
    ["Write definitions with the classification basis, then apply them to examples. Map/case questions are stronger when the landform, climate or human activity is linked to the recommended measure."],
    ["What are the different bases for classifying resources?","Why is resource planning more than identifying resources?","How does contour ploughing reduce erosion?"],
    ["Abiotic: non-living resource.","Biotic: obtained from the biosphere/living components.","Land degradation: decline in land quality/productivity."],
    [q("Why does the best soil-conservation method depend on location?","Different landscapes have different erosion mechanisms and slope/wind/water conditions.","Choose the practice that disrupts the actual process causing soil loss."),q("Is sustainable development the same as banning all resource use?","No.","It plans resource use while preserving ecological function and future availability.")]),
  guide("Class 10","Social Science","Federalism",
    "Explain division of powers, constitutional levels, language policy, decentralisation and how federal arrangements balance unity with regional diversity.",
    [
      ["Meaning and constitutional distribution","Federalism divides authority between levels of government under a constitution, rather than placing all power in a single centre. Powers are distributed through constitutional provisions such as Union, State and Concurrent Lists in India's standard textbook model. The courts interpret constitutional boundaries; the precise allocation can change by amendment, so answer using the current prescribed structure."],
      ["Language and centre-state relations","A federal system must manage regional identity and national coordination. Language policy can promote participation when it accommodates linguistic diversity; imposing one language as the sole expression of national identity can alienate groups. Political bargaining, regional parties and constitutional rules affect how states and the Union work together. Federalism is shaped by both formal rules and democratic practice."],
      ["Decentralisation and local self-government","Decentralisation transfers responsibilities and resources to local bodies closest to residents. Panchayats and municipalities can make local decisions on public services and development; meaningful decentralisation requires clear functions, funds, personnel, elections and accountability. Local self-government does not remove the need for state/Union coordination where problems cross boundaries or require larger-scale resources."]
    ],
    [
      card("Federalism: constitutionally divided power across levels of government","Core structural definition.","Distinguish federal from unitary arrangements.","Conceptual rule.","Different countries have different institutional models."),
      card("Decentralisation requires functions + funds + functionaries/accountability","Conditions for effective local government.","Evaluate whether local governance has real power.","Institutional framework.","Local elections alone do not guarantee effective authority."),
      card("Union/State/Concurrent distribution","Indian constitutional power-sharing structure in the standard civics account.","Classify a policy area when syllabus provides it.","Constitutional categories.","Use the latest textbook/current schedule if a topic has changed.")
    ],
    [
      {title:"Evaluate a decentralisation example",steps:["Identify the local problem and the relevant local body.","State what authority/responsibility it has and what resources/personnel it needs.","Explain how local participation can improve responsiveness and accountability.","Mention a limit such as lack of funds, coordination needs or unequal local capacity."]},
      {title:"Explain accommodation of diversity",steps:["State the diversity-related tension or language/identity concern.","Describe a rule or political process that allows regional participation.","Explain how power-sharing can reduce alienation while keeping the federation workable.","Avoid assuming every federal problem is solved automatically by constitutional wording."]
    }],
    ["Describing federalism as merely administrative decentralisation.","Assuming state governments are just agents of the Union.","Listing local bodies without explaining their authority/resources.","Treating linguistic diversity as automatically incompatible with national unity."],
    ["Answer federal questions by contrasting levels, powers and accountability. Use an example of a policy/list or local-body function only if it aligns with your prescribed textbook."],
    ["What makes federal power division constitutionally protected?","Why does decentralisation need funds as well as elections?","How can language accommodation support federalism?"],
    ["Federalism: constitutionally divided governmental power.","Decentralisation: transfer of authority to lower/local levels.","Concurrent: subject area in which more than one level can legislate within constitutional rules."],
    [q("Why might an elected local body still be ineffective?","It may lack funds, staff, clear powers or accountability.","Elections provide representation but real delivery also requires authority and capacity."),q("How can language accommodation strengthen unity?","It gives communities recognition and space to participate.","Inclusion may reduce alienation compared with coercive uniformity.")]),
  guide("Class 10","Social Science","Power Sharing",
    "Understand why democratic power-sharing matters and compare horizontal, vertical, community and party-based forms.",
    [
      ["Why share power?","Power-sharing can reduce social conflict, protect groups from domination and improve the legitimacy of government. A prudential reason is that sharing power may create stability and reduce conflict costs; a moral reason is that citizens have a democratic right to participate. Explain both reasons separately rather than treating power-sharing as only a compromise."],
      ["Forms of power-sharing","Horizontal power-sharing distributes power among organs such as legislature, executive and judiciary, with checks and balances. Vertical power-sharing distributes authority among central, state and local levels. Power may also be shared among social groups, political parties, coalitions and pressure groups. These forms differ in who shares power and the institutional mechanism used."],
      ["Examples, accommodation and conflict","Political arrangements can accommodate linguistic, religious or regional differences through representation, coalition rules and autonomy. A design must be understood in context: a coalition shares executive authority among parties; federalism distributes authority by constitutional level; independent courts check other organs. Do not use an example as a label without explaining what power is being distributed."]
    ],
    [
      card("Horizontal: among organs; vertical: among levels","Two principal power-sharing directions.","Classify an institutional example.","Conceptual distinction.","Do not confuse vertical power-sharing with party coalition."),
      card("Prudential reason vs moral reason","Different justifications for power-sharing.","Explain why democracy shares power.","Argument categories.","Stability and democratic right are distinct reasons."),
      card("Checks and balances","Each organ can limit excessive exercise by another under the constitutional design.","Explain horizontal sharing.","Institutional mechanism.","Checks do not mean every organ has identical powers.")
    ],
    [
      {title:"Classify power-sharing",steps:["Ask who shares power: organs, levels, social groups, parties or organised interests.","Name the form and identify the actual mechanism.","Explain what domination or coordination problem it addresses.","Use the example to justify the label."]},
      {title:"Write a why-share-power answer",steps:["State the prudential reason: reduce conflict and protect stability.","State the moral/democratic reason: those affected deserve voice and participation.","Give a suitable institutional example.","Conclude that legitimacy and accountability benefit when power is not concentrated without checks."]
    }],
    ["Treating every sharing arrangement as the same form.","Giving only a stability argument and omitting democratic rights.","Confusing power-sharing with power transfer to one lower level only.","Assuming sharing means all groups hold exactly equal power in every decision."],
    ["Use a two-column answer for prudential/moral reasons and a table for horizontal/vertical/community/party forms. Define the mechanism in each example."],
    ["What is the difference between horizontal and vertical power-sharing?","What makes an argument moral rather than prudential?","How do checks and balances work?"],
    ["Horizontal sharing: separation/checking among organs.","Vertical sharing: distribution across government levels.","Coalition: government involving multiple parties sharing executive authority."],
    [q("Why is an elected coalition an example of power-sharing?","Parties share participation in government/executive decision-making.","The arrangement distributes authority among parties rather than concentrating it in one party alone."),q("Is power-sharing only useful to prevent conflict?","No.","It also reflects democratic participation and citizens' right to have a voice.")]),
  guide("Class 10","Social Science","Political Parties",
    "Explain parties as institutions linking citizens to government, their functions, challenges and common reform directions.",
    [
      ["What parties do","Political parties aggregate interests, nominate candidates, contest elections, form governments, shape policy and act as opposition. They provide a label voters can use to judge programmes and performance, though party labels alone do not guarantee accountability. Parties connect social demands with institutions and organise sustained political participation between elections."],
      ["Challenges within party systems","Commonly discussed challenges include internal democracy, concentration of power among leaders, dynastic succession, money/muscle influence and limited meaningful choice. These problems vary across parties and electoral contexts. An analytical answer explains the institutional cause and consequence, rather than merely labelling all parties corrupt or assuming all reforms have identical effects."],
      ["Reform, representation and accountability","Possible reforms include transparent finance, internal elections, disclosure requirements, rules against criminal influence and stronger participation by members and citizens. Reform is not only a law change: voters, media, civil society and party members can also press for accountability. Evaluate reform proposals by asking how they change incentives, implementation and public oversight."]
    ],
    [
      card("Party functions: represent, contest, form government, shape policy, provide opposition","Institutional role checklist.","Structure a political-party answer.","Functional list.","A party may be in government or opposition depending on the result."),
      card("Challenge -> institutional cause -> consequence -> reform","Analytical framework for political reform.","Write a 4–6 mark answer.","Argument structure.","Do not list reforms without linking each to a diagnosed problem.")
    ],
    [
      {title:"Analyse a party challenge",steps:["Name the challenge such as weak internal democracy or opaque finance.","Explain how it develops in the party/electoral structure.","State the consequence for representation or accountability.","Propose a reform and explain the mechanism by which it could help."]},
      {title:"Compare government and opposition roles",steps:["The governing party/coalition uses its mandate to implement policy and manage executive responsibilities.","Opposition parties scrutinise decisions, criticise policy, represent alternate views and offer voters another choice.","Both participate in democratic accountability.","A party's role may change after later elections."]
    }],
    ["Reducing party functions to election campaigning only.","Treating every challenge as identical across all parties.","Proposing a reform without explaining its likely effect.","Confusing opposition scrutiny with automatically opposing every policy."],
    ["Use the challenge-cause-consequence-reform frame. Give a fair explanation of parties' necessary democratic role while recognising real accountability concerns."],
    ["Name four functions of a party.","Why is internal democracy important?","How can opposition support accountability?"],
    ["Opposition: party/parties not forming the government that scrutinise and offer alternatives.","Manifesto: programme/promises presented to voters.","Internal democracy: meaningful participation and accountability within a party."],
    [q("Why is opposition important in a democracy?","It scrutinises government and offers alternatives.","Public criticism and alternate choices help accountability."),q("Why is reform law alone not enough?","Implementation and citizen/party participation also matter.","A rule works only when enforced and political incentives support compliance.")]),
  guide("Class 10","Social Science","Agriculture and Food Security",
    "Connect farming systems, crop seasons, climate/soil, irrigation, institutional support, food production and access to food.",
    [
      ["Physical and human factors in farming","Agriculture depends on climate, relief, soil, water, technology, labour, capital, landholding and markets. Crop patterns vary by rainfall and temperature as well as irrigation and policy. Subsistence/commercial farming describe purpose and scale, while intensive/extensive refer to input/labour/land-use patterns; do not treat these labels as the same classification axis."],
      ["Crop seasons and production choices","Rabi crops are generally sown in cooler months and harvested in spring; kharif crops are associated with the monsoon season; zaid crops occupy a short intervening season in the common textbook account. Crop calendars vary by region. Irrigation can reduce monsoon dependence but overuse can raise salinity/waterlogging or deplete groundwater. Sustainable agricultural planning considers crop choice, soil health and water availability."],
      ["Food security and institutions","Food security requires availability, access and affordability/utilisation of adequate food. Production alone does not guarantee access if people lack income, transport or functioning distribution. Public distribution, buffer stocks, nutrition programmes, storage and procurement may support food security but face challenges including leakage, uneven access and waste. Explain the chain from farm production through storage/market/distribution to households."]
    ],
    [
      card("Food security: availability + access + affordability/utilisation","Multiple dimensions of food security.","Evaluate whether food production alone solves hunger.","Concept framework.","Total production is not the only determinant of household food access."),
      card("Rabi/kharif/zaid","Crop-season classification in the prescribed geography course.","Identify crop calendar and climate relationships.","Seasonal classification.","Local seasons and crop calendars can vary; follow the syllabus's standard examples."),
      card("Production -> storage/procurement -> distribution/access","Food-system chain.","Explain public intervention or food loss.","Process model.","A breakdown at any stage can affect availability or access.")
    ],
    [
      {title:"Explain why irrigation has benefits and risks",steps:["Irrigation supplies water when rainfall is inadequate and can stabilise yields.","Excessive irrigation in unsuitable conditions can cause waterlogging or salinity.","Groundwater pumping can exceed recharge and reduce future availability.","A sustainable solution matches crop, soil, drainage and local water supply."]},
      {title:"Analyse a food-security problem",steps:["Determine whether the problem is low supply, unaffordable food, unequal access or distribution/storage failure.","Identify who is most affected and why.","Match the response: production support, income/access measures, storage, distribution or nutrition support.","Evaluate reach and delivery rather than assuming one policy solves every dimension."]
    }],
    ["Treating higher production as complete food security.","Mixing crop season labels without their climate context.","Ignoring environmental costs of irrigation/chemical inputs.","Listing institutions without explaining what role each plays."],
    ["Use map/crop examples that match the prescribed text. For food security, answer through availability, access, affordability and delivery, then evaluate one limitation."],
    ["Why can food insecurity exist despite high national production?","What can excessive irrigation do to soil?","Name the three commonly taught crop seasons."],
    ["Food security: reliable access to sufficient, safe, nutritious food.","Buffer stock: stored food grain used for distribution/stability purposes.","Groundwater recharge: replenishment of water stored below the surface."],
    [q("Does irrigation always improve long-term sustainability?","No.","Poorly managed irrigation can cause salinity/waterlogging and reduce groundwater."),q("What is one reason food availability does not guarantee household access?","A household may lack income/access or distribution may fail.","Food security includes affordability and access, not only production totals.")]),
  guide("Class 10","Social Science","Money and Credit",
    "Explain money's functions, formal and informal credit, terms of credit, collateral, self-help groups and the development role of lending.",
    [
      ["Money and exchange","Money acts as a medium of exchange, unit of account and store of value under ordinary conditions. It solves the difficulty of barter needing a double coincidence of wants. Modern money includes currency and bank deposits used for payments under regulated arrangements. Trust, legal arrangements, banking systems and payment infrastructure enable money to perform its role."],
      ["Credit, interest and risk","Credit is an agreement to receive resources now and repay later, often with interest. Terms include interest rate, collateral, documentation, repayment period and any additional fee. Credit can fund productive investment or meet urgent needs, but high-cost debt and uncertain income can create a debt trap. Whether credit helps depends on purpose, terms and borrower capacity to repay."],
      ["Formal and informal credit","Formal credit is provided by regulated institutions such as banks/co-operatives and is subject to rules; informal sources include moneylenders, traders, employers and friends. Informal sources may be easier to reach but can charge high interest or impose restrictive conditions. Expanding affordable formal credit and self-help group lending can improve access, especially for borrowers without conventional collateral, but access and inclusion still need attention."]
    ],
    [
      card("Total repayment = principal + interest + applicable fees","Basic accounting of repayment obligations.","Compare loan offers.","Currency units.","A lower advertised rate may not mean lower total cost if fees/terms differ."),
      card("Interest depends on principal, rate and time under the stated model","Credit cost relationship.","Calculate simple interest when specified.","Currency, rate/time units consistent.","Do not apply simple-interest formula if the question specifies compound interest or another schedule."),
      card("Formal credit vs informal credit","Difference based on regulation/oversight and typical access/terms.","Classify a source and evaluate its consequences.","Institutional comparison.","Not every informal loan has identical terms; use the case's actual facts.")
    ],
    [
      {title:"Calculate simple interest",steps:["If a question gives principal P, annual rate r percent and time t years, use I=P(r/100)t for simple interest.","For P=₹5,000, r=10%, t=2 years, I=₹1,000.","Total repayment=₹6,000 if no extra fees are stated.","Check that rate and time refer to the same time unit."]},
      {title:"Assess a credit decision",steps:["Identify the purpose of the loan and likely return/income from that purpose.","Compare interest, collateral, repayment schedule and risk if income falls.","Decide whether the terms are manageable under the case facts.","A productive loan can still be harmful if terms are unaffordable; a low-cost loan is not automatically beneficial if used without a repayment plan."]
    }],
    ["Assuming all credit helps borrowers.","Comparing only principal while ignoring interest/fees.","Mixing annual interest with months without conversion.","Treating all informal lenders as offering identical conditions."],
    ["Use the phrase 'terms of credit' precisely. In a case question, compare purpose, collateral, interest and repayment risk, not only whether the lender is formal."],
    ["Why did money replace barter in many exchanges?","What is collateral?","When can credit create a debt trap?"],
    ["Collateral: asset pledged to secure a loan.","Principal: amount borrowed before interest/fees.","Debt trap: cycle where repayment difficulty leads to further borrowing and worsening debt."],
    [q("Why can credit be both helpful and harmful?","It can fund investment, but unaffordable or high-cost repayment can worsen debt.","Purpose and terms determine whether borrowing improves outcomes."),q("What is collateral used for?","Security for the lender if the borrower fails to repay.","Collateral reduces lender risk but can expose the borrower to asset loss.")]),
  guide("Class 10","Social Science","Globalisation and the Indian Economy",
    "Trace production across countries, multinational investment, trade/technology links, effects on different groups and policy responses.",
    [
      ["Global production and multinational corporations","Globalisation refers to growing connections among countries through trade, investment, technology, information and production networks. Multinational corporations organise production across locations to access markets, inputs, labour, skills or supply chains. A product can have components made in several countries and final assembly elsewhere. Explain each link rather than assuming a company always manufactures a complete product in one location."],
      ["Trade, technology and policy","Improved transport, communication and digital systems reduce the time/cost of coordination. Policy decisions on import duties, investment rules and trade can influence which firms enter markets and under what conditions. Liberalisation can expand competition and consumer choice, but its impact depends on infrastructure, labour standards, bargaining power and local business capacity."],
      ["Uneven outcomes and fair globalisation","Some consumers and producers benefit through choice, market access, investment and productivity; some smaller producers/workers may face pressure from cheaper imports, unstable orders or weaker bargaining power. Outcomes vary by sector and region. Fair globalisation aims to broaden benefits through skill development, labour protections, enforceable standards, small-producer support and transparent rules rather than assuming global links benefit or harm everyone equally."]
    ],
    [
      card("Global value chain: inputs -> components -> assembly -> distribution/market","Production-network framework.","Explain a product's multinational production.","Process, not a numerical formula.","Different stages may occur in different countries."),
      card("Assess impact by group, sector, time and policy context","Evaluation method.","Write balanced answers on globalisation.","Analysis framework.","Avoid one-sided universal claims."),
      card("Trade/FDI can increase choices/investment but expose producers to competition","Common trade-off.","Explain opportunities and risks.","Economic mechanism.","Effects vary by sector, worker power and domestic capacity.")
    ],
    [
      {title:"Analyse a small producer's experience",steps:["Identify the change, such as cheaper imports or a contract from a multinational.","Explain the opportunity (new market/order/technology) or pressure (price competition, delayed payments, unstable contracts).","Identify what determines the outcome: skills, capital, bargaining power, standards and infrastructure.","Suggest a policy/support measure and explain how it changes the producer's position."]},
      {title:"Write a balanced globalisation response",steps:["State two benefits and link each to an example or mechanism.","State two risks and identify which groups are affected.","Explain why outcomes differ across sectors and countries.","Conclude with fair-policy measures rather than assuming integration alone guarantees inclusive growth."]
    }],
    ["Saying globalisation benefits everyone equally.","Equating every multinational investment with exploitation or with automatic development.","Listing technology without explaining how it lowers coordination/trade costs.","Ignoring domestic policy and worker/producer bargaining power."],
    ["Use case examples and write effects by stakeholder. For evaluation questions, show both opportunities and risks and explain conditions under which benefits become broader."],
    ["What allows a multinational to divide production across countries?","Why can a small producer lose from global competition?","What makes globalisation fairer?"],
    ["MNC: multinational corporation.","Foreign investment: investment across national borders.","Liberalisation: reducing selected barriers/restrictions under policy rules."],
    [q("Does globalisation guarantee that every producer benefits?","No.","Benefits depend on sector, skills, resources, bargaining power and policy."),q("Name one way public policy can support fairer globalisation.","Training/skill development, labour protection or support for smaller producers.","These measures can widen the ability to participate and capture benefits.")]),
  guide("Class 10","English","Reading, Writing and Literature",
    "Build reliable reading comprehension, evidence-based literature answers, formal writing and language accuracy under a word/mark limit.",
    [
      ["Reading comprehension","Read the question stem before returning to the passage so the search has a purpose, but read the surrounding lines before choosing an answer. Inference asks what the passage supports rather than what might be true in general. Vocabulary-in-context depends on how a word functions in that sentence. If a response asks for evidence, paraphrase or quote a short relevant phrase and explain why it supports the answer."],
      ["Writing formats and audience","Different formats have distinct structures, such as address/date/subject for a formal letter, greeting/sign-off for an email and clear introduction-body-conclusion for an analytical paragraph. Follow the specific instructions, audience, purpose and word limit. Use linked paragraphs, accurate tone and concrete details. Avoid adding unrelated facts just to fill the word count."],
      ["Literature analysis","A strong literature answer states a claim about character, theme, setting, imagery, irony or tone, then supports it with a specific episode or textual detail. Summary retells what happened; analysis explains why the detail matters and how the writer creates meaning. For character questions, refer to actions, dialogue and consequences rather than describing a character with unsupported adjectives."]
    ],
    [
      card("Claim -> textual evidence -> explanation -> link to question","Literary-analysis structure.","Write a focused paragraph response.","Paragraph method.","Evidence without explanation is often only a quotation or summary."),
      card("Purpose + audience + format + word limit","Checklist for composition tasks.","Plan a letter/email/report/paragraph.","Prompt conditions.","Format marks can be lost even when ideas are good."),
      card("Comprehension: answer the asked question using passage evidence","Reading strategy.","Choose inference, vocabulary and main idea responses.","Evidence rule.","Do not use outside assumptions when the task asks what the passage says.")
    ],
    [
      {title:"Turn a plot summary into analysis",steps:["Summary: state what the character does in the episode.","Identify what that action reveals about a motivation, conflict or change.","Support the interpretation with one precise event/dialogue/image.","Explain its effect on theme or reader and connect back to the question."]},
      {title:"Plan a formal response",steps:["Underline the purpose and target audience in the prompt.","Choose the format's required parts and suitable tone.","Group points logically into paragraphs and ensure each supports the task.","Check word limit, grammar, spelling, punctuation and sign-off/closing convention."]
    }],
    ["Retelling the plot instead of analysing it.","Ignoring the exact word limit or requested format.","Answering an inference question with unrelated outside knowledge.","Using a quotation without explaining its relevance."],
    ["Marking rewards task fulfilment, clarity, organisation, evidence and language accuracy. Practise the format in the question rather than memorising one generic letter/paragraph."],
    ["How does analysis differ from summary?","Why does audience affect tone?","What makes evidence relevant to a literature claim?"],
    ["Inference: conclusion supported by evidence in the passage.","Tone: attitude conveyed by language.","Analytical paragraph: claim supported by evidence and explanation."],
    [q("What makes a literature answer analytical?","It explains how textual evidence supports an interpretation.","The response links a detail to theme, character or writer's purpose rather than only recounting events."),q("What should you check after drafting a formal response?","Format, audience, purpose, word limit and language accuracy.","These are independent task constraints and can each affect marks.")]),
  guide("Class 10","Hindi","Hindi Grammar and Writing Skills",
    "Prepare for Hindi writing and grammar tasks with format awareness, precise language, comprehension and evidence-based literary answers.",
    [
      ["Reading and comprehension","Read the question's focus first, then locate the relevant passage section and read enough context to interpret it accurately. Distinguish a literal answer from an inference. Answer in clear, complete Hindi sentences unless the prompt specifically asks for a phrase or word. Use the source passage as the evidence base and avoid importing unrelated facts."],
      ["Writing formats"," पत्र, अनुच्छेद, संवाद, सूचना, विज्ञापन या अन्य formats require different structures; follow the exact format and word limit specified by the current paper. A formal letter needs a suitable salutation, subject/body and closing according to the prescribed convention; an advertisement should be concise and highlight the relevant benefit/contact details. Paragraph writing needs a central idea, connected supporting points and a clear ending."],
      ["Grammar and literature responses","Grammar answers require attention to form and context, not only memorising labels. Check gender, number, person, tense, agreement, punctuation and spelling. A literature response should connect the question to a character/action/image or passage detail, explain its significance and answer in the required length. Use standard written Hindi rather than informal chat abbreviations."]
    ],
    [
      card("Question focus -> passage evidence -> concise complete answer","Comprehension response method.","Answer factual/inference questions.","Language task framework.","An inference must be supported by text."),
      card("Format + purpose + audience + word limit","Writing checklist.","Prepare a letter/paragraph/dialogue/notice as required.","Prompt conditions.","Do not use one format for every writing type."),
      card("दावा/विचार -> पाठ्य-साक्ष्य/उदाहरण -> व्याख्या","Literature response structure.","Explain character, theme or message.","Answer method.","सिर्फ कथासार लिखना विश्लेषण का विकल्प नहीं है।")
    ],
    [
      {title:"Plan an analytical Hindi paragraph",steps:["प्रश्न का मुख्य विषय और अपेक्षित शब्द-सीमा पहचानें।","एक स्पष्ट मुख्य विचार लिखें।","पाठ या उदाहरण से उपयुक्त विवरण जोड़ें।","विवरण का अर्थ समझाएँ और अंतिम वाक्य में प्रश्न से संबंध स्पष्ट करें।"]},
      {title:"Check a formal writing task",steps:["निर्देश में दिए गए प्रारूप और पाठक को पहचानें।","उचित संबोधन, विषय/मुख्य भाग और समापन रखें।","अनुच्छेदों को तार्किक क्रम में रखें और अनावश्यक बात हटाएँ।","वर्तनी, मात्रा, विराम-चिह्न, व्याकरण और शब्द-सीमा जाँचें।"]
    }],
    ["प्रारूप के आवश्यक भाग छोड़ देना।","प्रश्न के बजाय केवल पाठ का सार लिखना।","शब्द-सीमा से बहुत अधिक या कम लिखना।","अनौपचारिक चैट भाषा या गलत मात्रा/वर्तनी का उपयोग करना।"],
    ["प्रत्येक उत्तर में निर्देश, प्रारूप और शब्द-सीमा पहले देखें। साहित्य में प्रसंग/उदाहरण देकर उसकी भूमिका समझाएँ; केवल कथानक दोहराएँ नहीं।"],
    ["गद्यांश में उत्तर का आधार क्या होना चाहिए?","सारांश और विश्लेषण में क्या अंतर है?","औपचारिक लेखन में पाठक के अनुसार भाषा क्यों बदलती है?"],
    ["प्रारूप: लेखन की अपेक्षित संरचना.","आशय: कथन का अर्थ/अभिप्राय.","विश्लेषण: उदाहरण/साक्ष्य का अर्थ और महत्व समझाना।"],
    [q("साहित्यिक उत्तर अधिक प्रभावी कैसे बनता है?","प्रसंग/उदाहरण के साथ उसके अर्थ को समझाने से।","उदाहरण को प्रश्न के विचार से जोड़ना विश्लेषण है, केवल घटना दोहराना नहीं।"),q("लेखन पूरा होने पर क्या जाँचें?","प्रारूप, शब्द-सीमा, पाठक, उद्देश्य और भाषा।","ये अलग-अलग निर्देश हैं और सबका पालन आवश्यक है।")]),
  guide("Class 10","Computer Applications","Internet and Digital Safety",
    "Understand networks, web services, privacy, authentication, malware, safe communication and responsible digital citizenship.",
    [
      ["Internet and web basics","The internet is a network of interconnected networks using shared protocols. The web is a service running on the internet, based on resources, URLs, browsers and web servers. A browser requests content; DNS helps map domain names to network addresses; HTTPS protects data in transit between client and server when certificate validation is sound. A secure connection does not prove that a website's content or seller is trustworthy."],
      ["Privacy, authentication and social engineering","Personal data includes identifying details, location, credentials, financial information and sensitive records. Authentication verifies identity, while authorisation controls permitted actions. Strong unique passwords, multi-factor authentication, least privilege and timely updates reduce risk. Phishing/social engineering exploit urgency, authority or fear to persuade a person to reveal data or run a malicious file; inspect sender/context and verify through a separate trusted channel."],
      ["Malware, backups and respectful conduct","Malware includes viruses, worms, trojans, spyware and ransomware with different behaviours. Regular updates close known weaknesses; reputable security controls, cautious downloads and non-administrator daily use reduce exposure. Offline/versioned backups can limit ransomware damage. Digital citizenship also involves respecting copyright, reporting abuse, protecting others' privacy and checking information before sharing."]
    ],
    [
      card("Authentication = verify identity; authorisation = define access rights","Security distinction.","Explain login/permission failures.","Conceptual distinction.","A successful login does not mean every action should be permitted."),
      card("HTTPS protects the connection in transit, not the truth of the website","Web-security principle.","Evaluate a suspicious site.","Trust model.","A secure connection does not validate claims, seller honesty or all endpoint security."),
      card("3-2-1 backup idea: multiple copies, different media, one off-site","Common backup heuristic.","Plan recovery from device loss/ransomware.","Operational guideline.","Backups must be tested and protected from the same compromised account.")
    ],
    [
      {title:"Respond to a phishing message",steps:["Do not click the message's link or open its attachment under pressure.","Check the full sender/address and context, but do not rely on display name alone.","Visit the institution using a known saved address or contact it through an independent channel.","Report/delete the message; if credentials were entered, change them from a trusted device and notify the service/guardian/IT contact."]},
      {title:"Choose an appropriate backup",steps:["Keep more than one copy of important work.","Use a second storage medium/location rather than relying only on the original device.","Maintain an offline or versioned copy where appropriate.","Test restore periodically, because an untested backup may be unusable."]
    }],
    ["Assuming HTTPS means the site itself is honest.","Reusing one password across services.","Opening attachments because a message appears urgent.","Keeping all backups connected to the same vulnerable device/account."],
    ["For cyber-safety scenarios, identify the threat, explain the risk and state practical steps in order. Keep legal/ethical conduct and technical protection as related but distinct responsibilities."],
    ["What is the difference between authentication and authorisation?","Why is HTTPS not a guarantee that a website is trustworthy?","Why should backups be tested?"],
    ["Phishing: deceptive attempt to obtain information or action.","MFA: multi-factor authentication.","Ransomware: malware that commonly encrypts/blocks access to data for extortion."],
    [q("What should you do with an unexpected urgent password-reset link?","Avoid the link and verify through a separate trusted channel.","Urgency is commonly used in phishing; independently check the service."),q("What does multi-factor authentication add?","A second independent proof of identity beyond the password.","It can reduce risk if a password is stolen.")]),
  guide("Class 11","Computer Science","Python Fundamentals",
    "Build Python problem-solving skills using data types, expressions, control flow, input/output and tracing.",
    [
      ["Variables, types and expressions","A variable name references a value/object; assignment binds a name and is not the same operation as mathematical equality. Common beginner types include int, float, str and bool. Operators have precedence; use parentheses when they improve clarity. Converting input from input() is often necessary because input returns text. A numeric-looking string will not behave as a number until converted."],
      ["Control flow and Boolean conditions","if/elif/else selects a branch based on a truth-valued condition. A for loop iterates over an iterable; a while loop repeats while its condition remains true. Initialise counters/accumulators before loops and update them so the loop terminates. Combine Boolean conditions with and/or/not and test boundary cases such as zero, empty string and values equal to the comparison threshold."],
      ["Tracing, testing and readable programs","Trace a program line by line with a table of variables and outputs. A syntax error violates Python grammar; a runtime error occurs during execution; a logic error runs but gives the wrong result. Test normal, boundary and invalid cases. Clear names, indentation, comments that explain why and modular functions make a program easier to verify."]
    ],
    [
      card("input() -> string; convert with int()/float() if arithmetic is needed","Python input conversion.","Read numeric input.","Type depends on conversion.","Do not add two input strings expecting numeric addition."),
      card("if condition: ... elif ... else ...","Conditional branching.","Choose among mutually exclusive cases.","Boolean condition.","Order overlapping conditions from most specific to broadest."),
      card("for item in iterable: ...","Iteration over items in a sequence/iterable.","Visit each item in a known collection.","Loop variable receives each item.","Do not assume list positions are values unless the iterable is range/indexes."),
      card("Accumulator: total = total + value","Running total pattern.","Sum values during a loop.","Type must match operation.","Initialise total before the loop.")
    ],
    [
      {title:"Sum n input numbers",steps:["Read n and convert to int.","Set total=0 before the loop.","Repeat n times, convert each input to a number and add it to total.","Print total after the loop and test n=0 as a boundary case."]},
      {title:"Classify a score",steps:["Read and validate the score within the expected range.","Test the highest threshold first, then lower thresholds.","Use elif to ensure exactly one category is selected.","Test a score exactly equal to each boundary to verify comparison symbols."]
    }],
    ["Forgetting that input() returns a string.","Using inconsistent indentation.","Creating an infinite while loop by failing to update its condition.","Using > instead of >= at a boundary without reading the specification."],
    ["For tracing questions, draw a variable table. For coding tasks, state inputs/outputs, initialise variables, test edge cases and use readable control flow."],
    ["What does input() return?","How does elif differ from separate if statements?","Name three error categories in beginner programming."],
    ["Variable: name bound to a value/object.","Iteration: repeated execution over a set of items.","Logic error: program runs but produces incorrect results."],
    [q("Why use int(input()) for an integer?", "To convert the text returned by input into an integer.","input() supplies string data, which does not perform numeric addition by itself."),q("Which loop fits a known number of repetitions?","A for loop over range(n) is commonly suitable.","range(n) generates n integer values from 0 through n-1.")]),
  guide("Class 11","Computer Science","Functions and Data Structures",
    "Organise code into functions and use strings, lists, tuples, dictionaries and suitable operations with correct mutation/return behaviour.",
    [
      ["Function parameters, return values and scope","A function groups a named task, may receive parameters and can return a result. A local variable is created inside a function's scope; returning a value makes the result available to the caller. print() displays output but returns None unless explicitly wrapped by some other function logic. Prefer a pure calculation function when possible because it is easier to test."],
      ["Lists, tuples and strings","Lists are mutable ordered collections; tuples are ordered but immutable; strings are immutable character sequences. Indexing starts at zero and negative indices count from the end. Slicing uses a start-inclusive, end-exclusive range. Mutating a list through append changes the list; an expression that returns a new list/string should be assigned if the result is needed."],
      ["Dictionaries and algorithmic choice","A dictionary maps keys to values and supports key-based lookup. Keys must be hashable in the standard use model. Choose a list for order/position, a tuple for a fixed record, a dictionary for key-to-value association and a set for unique membership testing. Data-structure choice affects clarity, correctness and performance."]
    ],
    [
      card("def f(parameters): ...; return result","Function structure and value return.","Reuse a calculation or split a program into tasks.","Return type depends on code.","print and return are different."),
      card("List: mutable; tuple/string: immutable in standard Python","Mutation behaviour.","Predict whether an operation changes an object.","Object model.","Methods such as sort() mutate a list and often return None."),
      card("Dictionary: key -> value","Mapping structure.","Store a lookup table or count frequencies.","Keys are unique within a dictionary.","Do not assume an absent key can always be indexed safely."),
      card("Slice s[a:b] includes a and excludes b","Sequence slicing convention.","Select a substring/sublist.","Indices are integers.","Stop index is exclusive.")
    ],
    [
      {title:"Write a reusable average function",steps:["Define a function average(values).","Handle an empty list explicitly, because division by zero is invalid.","Return sum(values)/len(values) for a non-empty list.","Print or use the returned value in the caller; do not rely on the function displaying it automatically."]},
      {title:"Count word frequencies",steps:["Create an empty dictionary counts.","For each word, update counts[word] by one, using a default of zero if it is new.","After processing, each key maps to the number of occurrences.","Consider case normalisation/punctuation only if the task specification requires it."]
    }],
    ["Assuming every function automatically prints its result.","Forgetting end-exclusive slicing.","Trying to modify an immutable tuple/string in place.","Using an absent dictionary key without a plan."],
    ["Explain data-structure behaviour and trace mutations carefully. In function questions, separate parameter, local computation, return value and caller output."],
    ["What is the difference between print and return?","Which sequence types are immutable?","Why can a dictionary speed up key-based lookup conceptually?"],
    ["Parameter: named input to a function.","Return value: value sent back to caller.","Mutable: object whose contents can change in place."],
    [q("What does list.sort() generally return?","None; it sorts the list in place.","Do not assign the result expecting a sorted list; use sorted(list) for a new sorted list."),q("What does s[1:4] select?","Indices 1, 2 and 3.","Python slicing includes start and excludes the stop index.")]),
  guide("Class 11","English","Reading Comprehension and Composition",
    "Read analytical passages accurately and build organised, audience-aware compositions with evidence, development and editing.",
    [
      ["Comprehension and inference","Identify the topic, author's purpose, tone and structure before answering detailed questions. An inference should be a conclusion supported by wording, examples or contrast in the passage, not a free-standing opinion. For vocabulary, interpret the word in context rather than selecting its most familiar dictionary meaning. When asked for evidence, refer to the relevant passage detail."],
      ["Paragraph and essay development","A strong composition has a clear thesis/central point, linked supporting reasons and examples, and a conclusion that follows from the discussion. Paragraphs should each develop one part of the argument. A counterpoint can strengthen analysis when it is fairly represented and answered. Avoid unsupported generalisations, repeated points and a conclusion that introduces a new major argument."],
      ["Editing, register and evidence","Formal writing uses precise vocabulary, controlled sentence length and consistent tone. Match the audience and purpose; an editorial, report, speech and formal letter have different conventions. Proofread for agreement, tense consistency, reference clarity, punctuation and word limit. Use quoted or paraphrased evidence accurately and explain its relevance rather than leaving it unexplained."]
    ],
    [
      card("Claim -> reason -> example/evidence -> explanation -> link","Argument development pattern.","Construct a developed paragraph.","Writing structure.","An example alone does not establish the general claim."),
      card("Purpose + audience + register + format","Composition planning checklist.","Respond to a genre-specific writing task.","Prompt constraints.","A clear essay can still lose marks by ignoring format instructions."),
      card("Inference must be supported by passage evidence","Comprehension reasoning rule.","Answer inference/tone/purpose questions.","Evidence method.","Do not answer based solely on personal experience.")
    ],
    [
      {title:"Build a paragraph from a claim",steps:["State one clear claim that directly answers the prompt.","Give a reason or causal explanation.","Add a specific example or passage detail.","Explain how the example supports the claim and connect it to the wider argument."]},
      {title:"Edit a draft efficiently",steps:["Check each paragraph's purpose and whether it advances the central point.","Remove repeated or irrelevant sentences.","Check tense, agreement, pronoun reference and punctuation.","Verify word limit and format against the original task."]
    }],
    ["Writing an essay as a list of unrelated points.","Treating inference as personal opinion.","Using a tone unsuitable for the audience.","Quoting evidence without explaining its significance."],
    ["Plan before drafting, use an explicit line of argument and edit against the task rubric. The strongest responses support an interpretation rather than merely restating the prompt."],
    ["What is the difference between inference and opinion?","Why should each paragraph have a purpose?","What is register in writing?"],
    ["Thesis: central claim an essay argues for.","Register: level/style of language suited to situation and audience.","Inference: evidence-supported conclusion."],
    [q("What should an inference answer rely on?","Specific evidence from the passage.","Inference is not a free personal opinion; it should be supportable from the given text."),q("Why is a counterargument useful?","It shows engagement with an alternative view and can sharpen the main claim.","A fair response to a counterpoint makes reasoning more convincing.")]),
  guide("Class 11","Economics","Statistics for Economics",
    "Understand economic data, population/sample, collection and classification, tables, diagrams and summary measures.",
    [
      ["Role, source and quality of data","Statistics in economics summarises and compares complex observations to support analysis. Primary data are collected first-hand for the study; secondary data already exist from reports, surveys or administrative records. Data quality depends on definitions, coverage, sample design, timing, errors and possible bias. A number without its source, unit and reference period is difficult to interpret reliably."],
      ["Classification, tabulation and presentation","Classification groups observations by meaningful characteristics; tabulation displays them in rows and columns with clear titles, units and source notes. Bar diagrams compare categories, histograms represent continuous grouped frequencies with adjacent bars, and frequency polygons connect class-midpoint frequencies. Choose the display to match the data type and comparison; a visually attractive chart can still mislead if axes/scales are unclear."],
      ["Central tendency and dispersion","Mean uses all values and is affected by extremes; median is a positional middle and can be robust to outliers; mode identifies the most common value/class. Dispersion measures how spread observations are, using range, quartile deviation, mean deviation or standard deviation as prescribed. Averages alone may hide inequality or variability, so interpret them with context and, when appropriate, a dispersion measure."]
    ],
    [
      card("Mean = sum of observations / number of observations","Arithmetic average for ungrouped values.","Summarise a numeric dataset.","Same unit as variable.","Outliers can pull the mean."),
      card("Median: middle ordered value; for even n, average of the two middle values","Positional measure of central tendency.","Summarise skewed data or data with outliers.","Same unit as variable.","Sort values before finding median."),
      card("Range = maximum - minimum","Simple measure of spread.","Compare total spread.","Same unit as observations.","Range depends only on two values."),
      card("Histogram: continuous grouped frequency; bars touch","Graph type for continuous class intervals.","Display a frequency distribution.","Frequency/density as defined by interval widths.","It differs from a bar chart of distinct categories.")
    ],
    [
      {title:"Find mean and median",steps:["For values 2, 4, 4, 10, mean=(2+4+4+10)/4=5.","Order is already 2,4,4,10; median=(4+4)/2=4.","The large value 10 raises the mean above the median.","Explain the difference as sensitivity to the high observation."]},
      {title:"Choose the right graph",steps:["For categories such as modes of transport, a bar diagram is suitable.","For continuous grouped height intervals, a histogram is suitable.","For trend over time, a line graph is often suitable if time ordering matters.","Label title, axes, units and source so comparisons can be interpreted."]
    }],
    ["Using a histogram for unordered categories without a continuous class structure.","Calculating median before ordering values.","Ignoring units or source notes in a table/diagram.","Assuming the mean describes every individual observation."],
    ["Use defined terms and units. In data-presentation questions, explain why the selected graph matches the data and label all axes."],
    ["How do primary and secondary data differ?","Why do histogram bars touch?","What is a limitation of the arithmetic mean?"],
    ["Primary data: collected first-hand for a study.","Secondary data: collected previously by another source or for another purpose.","Dispersion: spread of observations."],
    [q("Which graph is usually suitable for continuous grouped data?","Histogram.","Adjacent class intervals are represented by touching bars."),q("Why might median be more representative than mean in a skewed dataset?","The median is less sensitive to extreme values.","An unusually large or small observation can strongly change the mean.")]),
  guide("Class 11","Accountancy","Journal, Ledger and Trial Balance",
    "Record transactions using debit/credit rules, post journal entries to ledger accounts and check arithmetic balance with a trial balance.",
    [
      ["Accounting equation and double entry","Each transaction affects at least two accounts in a way that preserves Assets = Liabilities + Capital. The double-entry system records equal debit and credit totals, but the correct accounts and direction depend on the transaction. Identify what the business receives, gives up, earns, incurs or owes before assigning debit/credit. Debit does not universally mean increase and credit does not universally mean decrease; account type matters."],
      ["Journal and ledger","The journal records transactions chronologically, with date, accounts, debit/credit amounts and a narration. Posting transfers the amounts to the relevant ledger accounts so movements and balances can be seen account by account. Ledger balancing calculates the net difference and carries the balance forward according to the account's format. Accuracy requires consistent dates, amounts and references across both books."],
      ["Trial balance and limitations","A trial balance lists ledger balances and checks whether debit and credit totals agree. Agreement is useful but does not prove all transactions are correct: an omitted entry, a wrong account with equal debit/credit, or compensating errors may still balance. If it disagrees, check posting, casting, balancing and transposition errors systematically."]
    ],
    [
      card("Assets = Liabilities + Capital","Accounting equation.","Check the effect of a transaction.","Currency amounts.","A transaction should preserve the equation."),
      card("Total debits = total credits in double-entry recording","Arithmetic equality in a complete journal/trial balance model.","Check the bookkeeping system.","Currency amounts.","Equality does not prove there are no errors."),
      card("Trial balance difference = debit total - credit total","A diagnostic difference, not an account by itself.","Investigate an unbalanced trial balance.","Currency amounts.","Do not force totals to agree by inserting an unexplained entry.")
    ],
    [
      {title:"Record a capital contribution",steps:["Owner introduces ₹50,000 cash into the business.","Cash (asset) increases, so debit Cash ₹50,000.","Capital (owner's equity) increases, so credit Capital ₹50,000.","The equation remains balanced: assets and capital both rise by ₹50,000."]},
      {title:"Investigate a trial-balance difference",steps:["Re-add the debit and credit columns to rule out casting mistakes.","Check whether each ledger balance was copied to the correct trial-balance side.","Look for one-sided posting, amount transposition or arithmetic balance errors.","If totals agree, still inspect account selection and completeness because some errors do not disturb equality."]
    }],
    ["Assuming every asset increase is a credit.","Treating debit as always bad or credit as always good.","Posting only one side of a transaction.","Assuming a balanced trial balance guarantees a correct accounting record."],
    ["For each transaction state the two affected accounts and why the debit/credit rule applies. For trial-balance errors, use a checking sequence rather than unexplained adjustment."],
    ["What does double entry require?","What is the purpose of the ledger?","Can a trial balance agree while an error exists?"],
    ["Journal: chronological primary book of entries.","Ledger: classified account-by-account record.","Trial balance: list of balances used as an arithmetic check."],
    [q("Owner brings ₹10,000 cash into the business. What is the entry?","Debit Cash ₹10,000; credit Capital ₹10,000.","Cash asset rises and owner's claim/equity rises."),q("Does a balanced trial balance prove every entry is correct?","No.","Omissions, wrong accounts with equal debit/credit, and compensating errors may remain.")]),
  guide("Class 11","Business Studies","Business Environment",
    "Explain internal/external forces shaping business, dimensions of the macro environment and how environmental change influences decisions.",
    [
      ["Meaning and dimensions","Business environment includes external economic, social, technological, political/legal and other conditions affecting organisations. These forces are dynamic, interconnected and uncertain. They create opportunities and threats but are not fully controlled by a single firm. Internal resources/capabilities influence how a firm responds, while external conditions influence demand, cost, regulation, technology and competition."],
      ["Economic, social, technological and legal factors","Economic changes in income, inflation, interest rates or exchange rates can alter demand and financing costs. Social norms/demographics shape customer expectations. Technology can reduce cost or disrupt an existing business model. Political/legal changes affect compliance, taxation, worker/environment obligations and permitted products. A strong case answer identifies the relevant dimension from evidence in the case rather than assigning every change to all dimensions."],
      ["Importance and response","Scanning the environment helps identify opportunities, anticipate threats, improve planning, adapt to change and align with expectations. It does not eliminate uncertainty. A company may change product mix, supplier, training, pricing or compliance controls after evaluating the force. The response must be appropriate to the cause; adopting technology does not solve a legal-compliance problem by itself."]
    ],
    [
      card("Environment scan: detect change -> assess impact -> plan response -> monitor outcome","Basic management response cycle.","Structure a case-study answer.","Process framework.","Identify the actual environmental force before recommending action."),
      card("PEST-style analysis: political/legal, economic, social, technological factors","Common macro-environment organising method.","Classify a case example.","Conceptual categories.","The exact textbook dimensions may also include other specified factors; use course wording.")
    ],
    [
      {title:"Classify an environment change",steps:["Read the case and underline the concrete change, such as a new law, inflation rise or digital platform.","Assign the primary dimension based on the change's cause.","Explain its effect on demand/cost/operations/compliance.","Suggest a response directly matched to that effect."]},
      {title:"Evaluate a technology opportunity",steps:["State the technology and the task/process it may improve.","Explain possible gains such as speed, reach or lower cost.","Identify transition costs, skills, privacy/security and disruption risks.","Recommend a trial/implementation measure and monitoring rather than assuming automatic success."]
    }],
    ["Calling every external change a political factor.","Listing dimensions without case evidence.","Assuming environmental scanning guarantees certainty.","Recommending action unrelated to the identified force."],
    ["In case studies use: quoted clue -> dimension -> effect -> decision. The explanation earns more than a general list of environmental factors."],
    ["Why is the business environment uncertain?","How can a technological change be both an opportunity and a threat?","Why should recommendations match the identified dimension?"],
    ["Business environment: external forces influencing business decisions.","Opportunity: change that can be exploited for benefit.","Threat: change that may harm performance or viability."],
    [q("A new tax law changes product pricing rules. Which dimension is primary?","Political/legal.","The direct cause is a change in regulation; it may then affect economic decisions."),q("Does environmental scanning remove uncertainty?","No.","It improves readiness and planning but cannot control every external event.")]),
  guide("Class 12","Computer Science","Python Functions, Modules and Stacks",
    "Build modular programs using parameters, return values, imports and the last-in-first-out stack abstraction.",
    [
      ["Functions and modular design","A function packages a task with named parameters and an optional return value. The caller passes arguments; local variables exist within the function scope. return sends a value back and ends that function call, whereas print displays a value. Functions reduce repetition and make unit testing easier. Docstrings/comments should explain purpose, inputs and important assumptions, not restate every line."],
      ["Modules and namespaces","A module is a Python file or library that exposes functions/constants/classes. Importing a module creates a namespace, so use module.function or a deliberate import form. Avoid naming your own file after a standard library module because it can shadow the intended import. Use functions such as math.sqrt or random.choice according to their documented signature and validate inputs as needed."],
      ["Stack: LIFO operations","A stack follows last-in-first-out: the most recently pushed item is popped first. A Python list can implement a stack with append() for push and pop() for removal from the end. Check underflow before popping an empty stack; a stack is useful for undo operations, nested structure processing and reverse-order tasks. Complexity depends on the operation/data structure, but list append/pop at the end are efficient in typical Python implementations."]
    ],
    [
      card("return value vs print(output)","Return passes a value to the caller; print displays it.","Design/test a reusable function.","Function behaviour.","A function that only prints may return None."),
      card("Stack: push=append; pop=remove latest","LIFO model.","Trace a stack or implement a simple stack.","Top of stack is end of list in this implementation.","Guard against pop on an empty stack."),
      card("Module namespace: module_name.function_name","Access imported functionality.","Organise code and avoid name collisions.","Python syntax.","A local file can shadow a standard-library module.")
    ],
    [
      {title:"Write and test a calculation function",steps:["Define a function with clear parameters and a single responsibility.","Return the calculation result instead of only printing it.","Test ordinary values and boundary/invalid inputs.","Call the function from another part of the program and inspect its return value."]},
      {title:"Trace a stack",steps:["Start with empty stack [].","Push 4 then 7: stack becomes [4,7], top is 7.","Pop removes 7, leaving [4].","If the list is empty, define what should happen before calling pop to avoid an exception."]
    }],
    ["Confusing return and print.","Popping an empty stack without a check.","Using a conflicting filename that shadows a standard module.","Assuming stack removal is first-in-first-out."],
    ["Trace function scope/returns separately from visible output. For stack questions, write the stack contents after every push/pop and identify the top."],
    ["What is a module namespace?","What does LIFO mean?","What happens if a function reaches the end without return?"],
    ["LIFO: last-in-first-out.","Module: reusable Python code namespace.","Stack underflow: attempt to remove from an empty stack."],
    [q("In which order are 2, 5, 8 popped from a stack after pushing in that order?","8, 5, 2.","A stack removes the most recently added item first."),q("What is the difference between return and print?","return gives a value back to the caller; print displays it.","The caller can store/use a return value, but print is an output side effect.")]),
  guide("Class 12","Computer Science","File Handling",
    "Read and write text files with correct modes, control file lifetime, handle exceptions and choose sequential or structured processing.",
    [
      ["File purpose, modes and paths","Files persist data beyond the program's lifetime. Python open() takes a path and mode; common modes include r for read, w for overwrite/create, a for append and binary variants for byte data. The working directory determines how relative paths resolve. Be careful with w because it truncates existing contents; confirm the assignment intends replacement rather than append."],
      ["Read and write patterns","read() loads all or a specified number of characters/bytes, readline() reads one line, and iteration over a text file can process lines without loading the whole file at once. write() writes a string and does not automatically add a newline. Encoding choices matter for text. The with statement closes a file reliably even if an exception occurs."],
      ["Exceptions, records and safe updates","FileNotFoundError can occur when reading a missing path; PermissionError can occur without appropriate permissions. Catch expected exceptions and provide a helpful message; do not hide all errors silently. For structured records, split/parse fields carefully and validate them before updating totals or writing output. Avoid destructive overwrites until the intended output path and mode are clear."]
    ],
    [
      card("with open(path, mode, encoding='utf-8') as f:","Context manager opens and closes a file safely.","Read/write text files.","Path is a string/path-like; encoding applies to text.","Use a mode matching the intended operation."),
      card("r=read; w=overwrite/create; a=append","Core text-file modes.","Choose operation on an existing file.","Mode string.","w erases prior contents in an existing file."),
      card("for line in f: ...","Sequential line reading.","Process large text files line by line.","Each line generally includes its newline unless stripped.","Use strip/rstrip only when you intend to remove whitespace/newline.")
    ],
    [
      {title:"Count non-empty lines",steps:["Open the file with a with statement in read mode and a known encoding.","Loop over lines and test line.strip() to ignore whitespace-only rows if required.","Increment the count for each valid row.","Close automatically at the end of the with block and report file errors clearly."]},
      {title:"Append a log record",steps:["Open the target in append mode, not write mode, to preserve previous content.","Create the record as a string with a trailing newline if each entry should be a separate line.","Write the record within a with block.","Check that the path points to the intended file and handle permission/path errors."]
    }],
    ["Using w when existing contents must be preserved.","Assuming write() adds newlines automatically.","Leaving file closing to chance in a multi-path program.","Catching every exception and ignoring the underlying error."],
    ["For tracing tasks, distinguish file pointer position and returned string. In coding questions, specify mode, newline behaviour, encoding and at least one expected error case."],
    ["What is the difference between w and a?","Why use with open?","Does write() automatically append a newline?"],
    ["File pointer: current position for subsequent I/O.","Encoding: mapping between text and stored bytes.","Exception: runtime event that interrupts normal control flow."],
    [q("Which mode appends to a file without discarding existing contents?","a (append).","Append mode writes new data at the end under the standard file semantics."),q("Why does a line count sometimes include blank lines?","The loop includes each line unless blank lines are explicitly filtered.","Check line.strip() or another rule that matches the task specification.")]),
  guide("Class 12","Computer Science","SQL and Relational Databases",
    "Design relational tables and write SQL queries using keys, constraints, filtering, grouping, joins and safe data changes.",
    [
      ["Relational model and keys","A table consists of rows/records and columns/attributes. A primary key uniquely identifies each row and cannot be NULL; a foreign key references a key in another table to maintain referential integrity. Candidate keys are attributes/sets able to uniquely identify rows. Choose data types and constraints that represent real data and prevent invalid states instead of relying entirely on later code checks."],
      ["SELECT, filtering, sorting and aggregation","SELECT lists output columns; WHERE filters individual rows before grouping; ORDER BY sorts results; GROUP BY forms groups for aggregate calculations; HAVING filters groups after aggregation. Use quotes correctly for string literals and use comparison operators with consistent types. NULL requires special handling with IS NULL/IS NOT NULL because it represents missing/unknown rather than a standard value."],
      ["Joins, updates and transaction safety","A join combines related rows through a matching key. INNER JOIN returns matched pairs; LEFT JOIN preserves every left-side row and fills unmatched right-side columns with NULL. UPDATE and DELETE must be checked with a WHERE clause when only selected rows should change. Transactions and backups help make important changes recoverable; test a SELECT first when writing a non-trivial update condition."]
    ],
    [
      card("SELECT columns FROM table WHERE row_condition","Core query order for retrieving rows.","Filter records before grouping.","SQL syntax.","String literals commonly use quotes; column identifiers are not quoted the same way."),
      card("GROUP BY forms groups; HAVING filters groups","Aggregation control flow.","Find totals/counts per category.","Aggregate values depend on function.","WHERE filters rows before aggregation; HAVING filters after grouping."),
      card("PRIMARY KEY uniquely identifies row; FOREIGN KEY references another key","Relational integrity roles.","Design or interpret a schema.","Constraint semantics.","A foreign key does not require that the referenced value be a descriptive name."),
      card("UPDATE table SET column=value WHERE condition","Targeted data change.","Modify specified records.","SQL statement.","Without a WHERE clause, the operation can affect every row.")
    ],
    [
      {title:"Find average marks by class",steps:["Start with SELECT class, AVG(marks) AS avg_marks FROM Students.","Use GROUP BY class to form one group per class.","If filtering average results, use HAVING AVG(marks)>=threshold.","Order the final result if required; do not use WHERE to filter an aggregate after grouping."]},
      {title:"Plan a safe update",steps:["Write a SELECT with the same WHERE condition to inspect the rows that would be affected.","Confirm the key/condition selects only the intended records.","Run UPDATE table SET column=value WHERE condition.","Verify the changed rows and retain a backup/transaction plan for important data."]
    }],
    ["Using WHERE for an aggregate filter instead of HAVING.","Forgetting the join condition and creating a Cartesian product.","Using = NULL instead of IS NULL.","Running UPDATE/DELETE without checking which rows match."],
    ["Explain the logic of a query clause order. For table-design questions, state the primary key and foreign-key relationship. For modifications, show a narrow WHERE condition and verify the affected rows."],
    ["What is the difference between WHERE and HAVING?","Why is a primary key useful?","What rows does a LEFT JOIN preserve?"],
    ["Primary key: unique row identifier.","Foreign key: reference preserving relationships between tables.","Referential integrity: consistency of references across tables."],
    [q("Which clause filters groups after aggregation?","HAVING.","WHERE filters rows before grouping; HAVING filters grouped results."),q("What is the risk of UPDATE without WHERE?","Every row may be modified.","Always inspect the intended row set before changing data.")]),
  guide("Class 12","Computer Science","Computer Networks and Cyber Safety",
    "Understand network types, common topologies, communication protocols, address naming, internet services and responsible security practice.",
    [
      ["Network scope and topology","LAN connects devices within a limited site such as a home, school or office; MAN spans a metropolitan area and WAN covers larger geographic distances. Topologies describe physical/logical connections. Star topology centralises connections at a switch/hub, while bus and ring layouts have different failure and wiring properties. The actual resilience depends on devices, links, redundancy and configuration."],
      ["Protocols and internet services","Protocols specify how systems communicate. IP addressing helps route packets; DNS resolves domain names; HTTP/HTTPS transfers web resources; SMTP and related protocols support mail delivery/access under their roles; FTP/SFTP serve file transfer in their respective security models. A URL identifies a resource/location using scheme, host and optional path/query components. Know each protocol's purpose rather than memorising abbreviations without context."],
      ["Cyber hygiene and online responsibility","Strong unique passwords, MFA, updates, minimal permissions, backups and careful link/attachment handling reduce risk. Encryption in transit protects data between endpoints under a correctly validated connection, but it does not prove the content is truthful or a user safe from fraud. Respect privacy, obtain consent before sharing information/photos and verify suspicious requests through independent channels."]
    ],
    [
      card("LAN / MAN / WAN","Network classification by geographic scope.","Classify a network described in a case.","Scope categories.","The exact geographic range is contextual; use the course definition."),
      card("DNS: domain name -> network address","Naming service role.","Explain how a browser finds a server.","Request/response service.","DNS resolution itself does not establish website trustworthiness."),
      card("HTTPS = HTTP over a protected TLS connection","Transport protection in a typical web setting.","Explain secure browsing indicators.","Protocol/security concept.","A secure connection can still lead to a fraudulent website."),
      card("MFA: two or more distinct verification factors","Account security enhancement.","Recommend a login protection.","Authentication concept.","Two copies of the same factor are not truly independent factors.")
    ],
    [
      {title:"Trace a browser request",steps:["A user enters a URL and the browser identifies the hostname and resource path.","DNS resolves the hostname to a network address under the relevant configuration.","The browser connects to the server and uses HTTP/HTTPS to request the resource.","The response is rendered; verify the site's identity/content separately because a protected connection does not make every page trustworthy."]},
      {title:"Respond to suspected account compromise",steps:["Use a trusted device to change the affected password and revoke unknown sessions if the service allows it.","Enable MFA and change reused passwords on other services.","Notify the relevant service/IT contact and check recovery details and recent activity.","Keep evidence and use the organisation's reporting/recovery process; do not forward suspicious links to others."]
    }],
    ["Assuming HTTPS proves a site's claims are true.","Confusing DNS with HTTP content delivery.","Reusing passwords across accounts.","Describing all network types only by number of computers without geographic scope."],
    ["For protocol questions, connect each protocol to its task. For cyber-safety cases, identify threat, likely goal and ordered response; include both technical protection and user verification."],
    ["What does DNS do?","How does a LAN differ from a WAN?","Why is HTTPS not a guarantee against phishing?"],
    ["Protocol: rules for communication.","DNS: domain name system.","MFA: multi-factor authentication."],
    [q("Which service resolves a domain name to an IP address?","DNS.","DNS lookup helps the client locate the network address associated with a hostname."),q("Should a user trust a login page only because it uses HTTPS?","No.","The connection can be protected even if the page belongs to a fraudulent domain or contains deceptive claims.")]),
  guide("Class 12","Economics","National Income Accounting",
    "Distinguish domestic/national, gross/net and market/basic/factor-cost concepts; use value-added and expenditure approaches without double counting.",
    [
      ["Production, intermediate goods and value added","National accounting measures the value of final output or sums value added across production stages. Intermediate goods are used up in further production; counting both the intermediate input and final output at full value double counts the same production. Value added at a stage equals value of output minus intermediate consumption. Include final goods/services produced within the stated accounting boundary, subject to the national-accounting convention in the course."],
      ["Domestic vs national and gross vs net","Domestic measures production within a country's economic territory, irrespective of the producer's residence under the prescribed definition. National aggregates adjust for net factor income from abroad. Gross values include consumption of fixed capital; net values subtract it. Always expand the abbreviation before calculating so domestic/national and gross/net are not mixed."],
      ["Measurement approaches and price concepts","The value-added/production approach sums value added; income approach sums relevant factor incomes; expenditure approach adds final spending components under the stated economy model. Transfers are not payments for current production and should not be counted as production income in the same way. Market price/basic/factor cost distinctions involve product taxes/subsidies and value-added taxes/subsidies according to the framework taught."]
    ],
    [
      card("Value added = value of output - intermediate consumption","Contribution made at one production stage.","Avoid double counting.","Currency per period.","Do not subtract capital expenditure as intermediate consumption without the accounting context."),
      card("Net = gross - consumption of fixed capital","Gross/net relationship.","Convert gross aggregate to net.","Currency per period.","Use the same boundary and time period."),
      card("National aggregate = domestic aggregate + net factor income from abroad","Domestic/national relationship in the standard framework.","Convert domestic to national when required.","Currency per period.","Do not substitute exports/imports for factor income from abroad."),
      card("GDP expenditure approach: C + I + G + (X-M) under the specified model","Final expenditure accounting identity.","Use when expenditure components are given.","Currency per period.","Avoid double counting imports or intermediate goods and respect the syllabus definition of I/G.")
    ],
    [
      {title:"Compute value added",steps:["A baker sells bread worth ₹1,000 and used flour/other intermediate inputs worth ₹400.","Value added at the bakery stage=1,000-400=₹600.","The input value is counted at its own production stage, not again in full at the final stage.","For a full value-chain calculation, add each stage's value added."]},
      {title:"Convert gross to net",steps:["If a gross domestic aggregate is ₹500 crore and fixed-capital consumption is ₹40 crore, net domestic aggregate=500-40=₹460 crore.","If net factor income from abroad is +₹15 crore, the corresponding national aggregate adjustment is +15 crore under the model.","Keep the domestic/national adjustment separate from gross/net subtraction.","Use exact terms and the accounting year/boundary in the question."]
    }],
    ["Double counting intermediate inputs and final products.","Confusing exports/imports with net factor income from abroad.","Mixing current production with transfer payments.","Subtracting depreciation/capital consumption twice."],
    ["Begin by defining the target aggregate, then list only the adjustments that convert the given measure to that target. In numerical questions, label every step (domestic/national, gross/net, price concept)."],
    ["Why does value added avoid double counting?","What is the difference between domestic and national measures?","Which adjustment changes gross into net?"],
    ["Intermediate consumption: goods/services used up during production.","Consumption of fixed capital: accounting estimate of fixed asset use/decline.","Net factor income from abroad: factor-income receipts from abroad minus factor-income payments abroad."],
    [q("Output=₹800 and intermediate consumption=₹300. Find value added.","₹500.","Value added=800-300."),q("Gross value is ₹1,000 and fixed-capital consumption is ₹70. Find net value.","₹930.","Net=gross-consumption of fixed capital.")]),
  guide("Class 12","Economics","Money, Banking and Government Budget",
    "Explain money, credit creation by commercial banks, central-bank policy, government receipts/expenditure, deficits and fiscal choices.",
    [
      ["Money, deposits and banking","Money serves as medium of exchange, unit of account and store of value in ordinary settings. Commercial banks accept deposits, provide payment services and extend loans subject to capital/liquidity/regulatory constraints. A loan may create a deposit in the banking system; credit creation is limited by cash withdrawals, reserve rules, risk appetite, capital and demand for loans rather than being infinite."],
      ["Central bank and monetary instruments","The central bank regulates monetary/financial conditions through instruments such as policy rates, reserve requirements and open-market operations under the prescribed syllabus. Higher rates may damp borrowing/demand and inflationary pressure but can slow investment/consumption; lower rates may stimulate activity but can have other risks. Effects depend on economic conditions and do not occur instantly or with identical strength in all sectors."],
      ["Government budget and deficits","A budget presents expected receipts and expenditure. Revenue receipts generally do not create liabilities or reduce assets; capital receipts include borrowing and certain asset-sale receipts. Revenue expenditure relates to regular services/operations, while capital expenditure creates assets or reduces liabilities under the taught classification. Fiscal deficit measures the borrowing requirement under the course formula; a deficit can support productive investment or create debt sustainability concerns depending on use, financing cost and growth."]
    ],
    [
      card("Fiscal deficit = total expenditure - total receipts excluding borrowings","Budgetary borrowing requirement in the standard school definition.","Calculate the fiscal deficit from budget data.","Currency per budget period.","Use the exact textbook convention for which receipts are excluded."),
      card("Revenue balance = revenue receipts - revenue expenditure","Difference between recurring revenue inflows and revenue expenditure.","Assess the revenue account.","Currency per period.","Do not include capital receipts in revenue receipts."),
      card("Central bank policy-rate changes influence borrowing costs and demand","Monetary-policy transmission at a high level.","Explain policy effects.","Economic relationship.","An effect is not automatic; context and lags matter.")
    ],
    [
      {title:"Calculate fiscal deficit",steps:["Suppose total expenditure is ₹12 lakh crore and receipts excluding borrowings are ₹9 lakh crore.","Fiscal deficit=12-9=₹3 lakh crore.","Interpret this as the budgetary gap financed through borrowing/other prescribed financing.","Check that borrowings themselves were excluded from the receipt total used in the formula."]},
      {title:"Classify a budget item",steps:["Ask whether the item is a receipt or expenditure.","For a receipt, determine whether it is recurring/revenue or creates a liability/reduces assets/capital.","For expenditure, determine whether it supports regular operations or creates assets/reduces liabilities under the course definition.","Justify with the item’s economic character rather than the size alone."]
    }],
    ["Counting borrowings among receipts in the fiscal-deficit formula.","Calling every government expenditure capital expenditure.","Assuming bank credit creation has no constraints.","Claiming an interest-rate change affects all sectors immediately and equally."],
    ["In budget numericals, write the definition then classify each line item before adding. In policy questions, explain the transmission mechanism and mention a trade-off or time lag."],
    ["Why are borrowings excluded from receipts for fiscal-deficit calculation?","How do policy rates affect borrowing?","What distinguishes revenue and capital expenditure?"],
    ["Fiscal deficit: borrowing requirement under the stated budget definition.","Monetary policy: central-bank actions influencing money/credit conditions.","Capital expenditure: spending classified as creating assets or reducing liabilities under the prescribed account framework."],
    [q("Expenditure=₹20 trillion, receipts excluding borrowings=₹16 trillion. Fiscal deficit?","₹4 trillion.","Subtract the stated receipts from total expenditure."),q("Is every deficit automatically harmful?","No.","Its impact depends on purpose, financing, sustainability and the wider economic setting.")]),
  guide("Class 12","Accountancy","Accounting Equation and Double Entry",
    "Represent transactions through assets, liabilities and equity; use debit/credit rules to record changes in a double-entry system.",
    [
      ["Accounting equation and transaction effects","Assets represent resources controlled by the business; liabilities represent obligations; capital/equity is the owner's residual interest in the accounting model. The equation Assets = Liabilities + Equity must remain balanced after each properly recorded transaction. A transaction may exchange one asset for another, increase assets and liabilities together, or reduce assets and equity together; not every transaction changes total assets."],
      ["Debit/credit logic","Every transaction is recorded through equal debit and credit totals, but the side depends on the account type and the accounting convention taught. Asset and expense increases are generally debits in the basic rules; liability, capital and revenue increases are generally credits. A cash purchase of equipment exchanges one asset for another; a credit purchase increases an asset and a payable."],
      ["From transaction analysis to journal entry","List which accounts change, classify each account and decide whether it increases or decreases. Then apply the debit/credit rule and ensure the amounts balance. Narration should briefly explain the transaction. A balanced journal entry is necessary but not sufficient if the wrong accounts have been chosen; interpret the economic event before applying rules."]
    ],
    [
      card("Assets = Liabilities + Equity","Fundamental accounting equation.","Check a transaction's net effect.","Currency amounts.","Every entry must preserve equality."),
      card("Total debits = total credits","Double-entry recording constraint.","Check journal entries/trial-balance arithmetic.","Currency amounts.","Equality alone does not guarantee the correct account selection."),
      card("Asset/expense increase -> debit; liability/capital/revenue increase -> credit in the basic rules","Basic debit/credit pattern.","Classify a common transaction.","Rule depends on account class.","Do not interpret debit/credit as positive/negative universally.")
    ],
    [
      {title:"Buy equipment for cash",steps:["Business buys equipment for ₹20,000 cash.","Equipment asset increases by ₹20,000, so debit Equipment.","Cash asset decreases by ₹20,000, so credit Cash.","Total assets change composition but not total amount; the accounting equation remains balanced."]},
      {title:"Purchase goods on credit",steps:["Goods/inventory increase by ₹8,000 and supplier payable/liability increases by ₹8,000.","Debit Purchases/Inventory as the course's periodic/perpetual accounting system requires.","Credit Accounts Payable/Supplier ₹8,000.","Assets and liabilities increase equally; the equation remains balanced."]
    }],
    ["Treating debit as universally an increase in every account.","Failing to identify both sides of an exchange transaction.","Confusing owner's capital with revenue earned from sales.","Recording a balanced amount using the wrong accounts."],
    ["Always state transaction analysis, account types and reason for each debit/credit. Use the exact account labels and inventory method required by the prescribed course."],
    ["Why does buying equipment for cash not increase total assets?","What does the accounting equation balance?","Does every debit mean an asset increases?"],
    ["Asset: controlled resource.","Liability: obligation to another party.","Equity/capital: residual interest after liabilities."],
    [q("Purchased furniture for ₹5,000 cash: what changes?","Furniture increases and cash decreases by ₹5,000; total assets are unchanged.","It is an exchange between assets."),q("Credit purchase of goods increases which two broad sides?","An asset/purchase account and a payable liability.","Both sides increase by the same amount.")]),
  guide("Class 12","Business Studies","Principles and Functions of Management",
    "Connect management principles to planning, organising, staffing, directing, controlling and case-based decisions.",
    [
      ["Nature and importance of management","Management coordinates people and resources toward organisational objectives through efficiency and effectiveness. Efficiency concerns resource use; effectiveness concerns goal achievement. A manager may be efficient at a task that does not support the correct objective, so both matter. Management operates at different levels, uses multiple functions and adapts decisions to people, tasks and the environment."],
      ["Principles and organisational choice","Management principles provide flexible guidance rather than rigid laws that fit every case identically. Division of work, authority/responsibility, discipline, unity of command and direction, equity, initiative and related principles support coordination when applied sensibly. The case should be matched to the principle by identifying the specific behaviour/problem, not merely by memorising labels."],
      ["Functions and control cycle","Planning sets objectives and routes; organising allocates tasks/resources; staffing places and develops people; directing motivates/communicates/leads; controlling compares actual performance with standards and corrects deviations. These functions interact. Control includes establishing standards, measuring performance, comparing results and taking corrective action, which can feed back into future planning."]
    ],
    [
      card("Efficiency = resource use; effectiveness = goal achievement","Two separate criteria for management performance.","Evaluate a manager's decision.","Conceptual comparison.","A result can be one without the other."),
      card("Planning -> organising -> staffing -> directing -> controlling","Common management-function sequence.","Explain the broad management process.","Process framework.","Functions overlap in real organisations."),
      card("Control: standards -> measure -> compare -> correct","Core control process.","Analyse a performance-gap case.","Process framework.","Correction should address causes, not just symptoms.")
    ],
    [
      {title:"Identify a management principle in a case",steps:["Underline the observed behaviour, such as receiving conflicting orders or lacking specialised tasks.","Identify the principle whose purpose matches the problem.","Explain the relationship between the principle and the case facts.","State the expected benefit and any implementation condition."]},
      {title:"Apply the control process",steps:["Set a measurable standard/objective.","Measure actual performance against that standard.","Identify and analyse any deviation.","Take corrective action and use lessons for future planning."]
    }],
    ["Listing management functions without explaining the case.","Treating principles as rigid rules independent of context.","Confusing efficiency and effectiveness.","Correcting a result without diagnosing the underlying cause."],
    ["Use case fact -> named principle/function -> explanation -> expected result. For longer answers, show how planning, organisation, direction and control connect."],
    ["What is the difference between efficiency and effectiveness?","What are the core control steps?","Why are principles described as flexible guidance?"],
    ["Management: coordination of resources/people to achieve goals.","Authority: right to give instructions within a role.","Control: comparison of actual results against standards and corrective action."],
    [q("An employee receives orders from two supervisors for the same task. Which principle may be relevant?","Unity of command.","It seeks to avoid conflicting authority/instructions for one subordinate."),q("Why is corrective action part of control?","It addresses deviations and helps restore planned performance.","Measurement alone identifies a gap but does not resolve it.")]),
  guide("Class 12","English","Writing Skills and Textual Analysis",
    "Build exam responses to writing prompts and literature questions with task fulfilment, logical structure, evidence and language control.",
    [
      ["Read the prompt and plan the response","Identify the genre, audience, purpose, key points, tone and word limit before drafting. A report, formal letter, article, speech, notice and analytical paragraph have different structural conventions. Make a quick outline of the major points so the response covers every required part rather than over-developing the first idea."],
      ["Develop a coherent argument","A developed paragraph contains a claim or focus, explanation, specific example/evidence and a link to the main question. Use transitions to show contrast, cause, sequence or consequence. A conclusion should synthesise the argument rather than repeat every sentence or introduce an unrelated new point. For source-based questions, distinguish what the text says from what you infer."],
      ["Literature interpretation and editing","Literary analysis connects detail to effect: a character's action may reveal motive/conflict; an image may establish mood; a contrast may expose a theme. Use short specific textual references and explain why they matter. Proofread for agreement, tense, pronoun reference, punctuation, spelling, formatting and word limit. Quality comes from precision, not unnecessarily ornate vocabulary."]
    ],
    [
      card("Prompt -> audience/purpose/format -> outline -> draft -> edit","Planning sequence.","Respond to genre-specific tasks.","Process framework.","Do not begin drafting before identifying required format details."),
      card("Claim + evidence + explanation + link","Analytical paragraph structure.","Develop literary/textual analysis.","Writing method.","Evidence without explanation often remains description."),
      card("Task fulfilment + organisation + language accuracy","Writing-quality checklist.","Review a final answer.","Checklist.","Good grammar cannot fully compensate for missing a required task element.")
    ],
    [
      {title:"Build a textual analysis paragraph",steps:["State the interpretation of a character/theme/image directly.","Refer to one specific episode, line or image from the text.","Explain how its language or action supports your interpretation.","Connect that meaning to the writer's wider purpose or the question asked."]},
      {title:"Edit a formal composition",steps:["Check that every required bullet/point is addressed.","Verify format conventions, audience and word limit.","Replace repetitive or vague sentences with precise ones.","Proofread grammar, punctuation, spelling and transitions."]
    }],
    ["Writing a plot summary instead of analysis.","Ignoring format-specific elements in the task.","Using unsupported assumptions as if they were text evidence.","Adding vocabulary that makes the sentence less clear."],
    ["Make a short plan before writing. Literary answers should explain the significance of a textual detail; composition answers should obey format, audience and word limit."],
    ["What is the role of evidence in literary analysis?","Why does audience affect language?","What distinguishes summary from analysis?"],
    ["Register: language style suited to audience/purpose.","Inference: conclusion supported by text evidence.","Coherence: logical connection between ideas."],
    [q("What makes a response analytical?","It connects specific evidence to an interpretation and explains its significance.","A summary repeats events; analysis explains their meaning/effect."),q("What is the first check for a writing task?","Identify purpose, audience, format and word limit.","Those constraints should guide planning and final editing.")]),
  guide("Class 12","English","Literature Analysis and Formal Writing",
    "Use textual evidence to support interpretation and produce structured formal writing that meets the exact prompt requirements.",
    [
      ["Theme, character, tone and imagery","Theme is a larger idea explored by a text, not simply a topic word. Character analysis considers actions, dialogue, decisions and change over time. Tone is the attitude conveyed through diction, imagery and structure; mood is the atmosphere experienced by a reader. Imagery and symbols gain meaning from context, so explain the particular effect rather than attaching a memorised label."],
      ["Evidence-led answer method","Start with a direct answer to the question. Select one or two textual moments that support it, then explain the relationship between detail and interpretation. Short references are usually more effective than a long quotation without comment. If a question asks for comparison, compare a shared dimension such as motive, conflict, setting or narrative voice rather than writing two unrelated mini-summaries."],
      ["Formal writing and revision","Formal compositions require accurate structure and suitable register. Address all parts of the prompt, group ideas logically and keep the required word range. Editing should remove repetition, correct errors and strengthen transitions. In a final paragraph, draw together the conclusion from the evidence rather than introducing an unsupported new claim."]
    ],
    [
      card("Claim -> textual detail -> effect -> theme/question","Evidence-to-interpretation pattern.","Answer a literature question.","Analytical method.","Do not stop after naming a literary device."),
      card("Tone = author's/narrator's attitude; mood = atmosphere/reader effect","Useful terminology distinction.","Explain language and atmosphere.","Interpretive terms.","Context may complicate a single label; justify with words/details."),
      card("Compare along a shared dimension","Comparison framework.","Compare characters, poems or viewpoints.","Answer method.","Do not write two separate summaries without comparison.")
    ],
    [
      {title:"Analyse an image or symbol",steps:["Identify the word/image and its immediate context.","Describe the associations it carries in the particular scene or passage.","Explain how it shapes tone, character, conflict or theme.","Tie the interpretation to the prompt and avoid unsupported universal symbolism."]},
      {title:"Write a comparison",steps:["Choose a shared dimension such as ambition, conflict, voice or setting.","State a similarity or difference explicitly.","Use evidence from both texts for the same dimension.","Explain what the comparison reveals instead of merely listing events."]
    }],
    ["Treating theme as a one-word topic without an argument.","Naming a device but not describing its effect.","Using evidence from one text only in a comparison.","Ignoring the format and purpose of a formal writing task."],
    ["Give a clear claim and support it with a short specific detail. For formal writing, check every requested element and edit for clarity rather than length alone."],
    ["How does theme differ from topic?","What is the difference between tone and mood?","What makes a comparison coherent?"],
    ["Theme: central idea developed through a text.","Tone: attitude conveyed by the language/narration.","Mood: atmosphere/effect created for readers."],
    [q("Why is naming a metaphor alone insufficient?","The answer must explain how it shapes meaning in context.","Device identification is only the first step of analysis."),q("How should a comparison organise evidence?","Use the same comparison dimension for both texts.","This makes similarities/differences explicit rather than producing disconnected summaries.")])
  ];
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(all);
})();
