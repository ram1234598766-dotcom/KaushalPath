/* Individual Biology chapter notes for CBSE/NCERT Classes 10–12.
   Content is original and explanatory; verify annual syllabus scope and prescribed textbook diagrams/terminology. */
(function () {
  "use strict";
  const card = (formula, meaning, when, units, trap) => ({formula,meaning,when,units,trap});
  const q = (question, answer, explanation) => ({question,answer,explanation});
  const b = (level, chapter, intro, sections, factCards, workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions=[]) => ({
    level, subject:level === "Class 10" ? "Science" : "Biology", chapter, intro, depth:"detailed",
    sections:sections.map(([heading,body])=>({heading,body})),
    formulas:factCards.map(x=>x.formula), formulaCheatSheet:factCards,
    workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions,
    points:sections.map(([heading,body])=>heading+": "+body.split(/[.!?]/)[0]+"."),
    example:workedExamples.length?workedExamples[0].steps.join(" "):"Use the chapter pathway, process cards and self-checks to consolidate the concept.",
    sourceNote:"Original explanations aligned to common NCERT Biology concepts. The current CBSE curriculum and prescribed NCERT edition control the examinable scope."
  });
  const all = [
  b("Class 10","Life Processes",
    "Nutrition, respiration, transport and excretion explain how living organisms obtain matter/energy, distribute useful substances and remove metabolic wastes.",
    [
      ["Nutrition in organisms","Autotrophs manufacture organic food from inorganic raw materials; green plants use light energy, chlorophyll, carbon dioxide and water to form carbohydrates while releasing oxygen. Heterotrophs obtain organic nutrients from other organisms or organic matter. In human nutrition, ingestion, digestion, absorption, assimilation and egestion are different steps: digestion breaks large molecules into smaller ones, absorption moves them into blood/lymph, and assimilation uses them in tissues."],
      ["Respiration and energy release","Cellular respiration releases usable energy from food. Aerobic respiration uses oxygen and typically yields much more ATP than anaerobic pathways; in yeast, anaerobic breakdown produces ethanol and carbon dioxide, while muscle cells under low oxygen may produce lactic acid. Breathing is gas movement in/out of the respiratory system, whereas cellular respiration is biochemical energy release in cells. The two terms must not be used interchangeably."],
      ["Transport and excretion","In humans, blood transports oxygen, carbon dioxide, nutrients, hormones and wastes. The heart pumps blood through pulmonary and systemic circuits; arteries carry blood away from the heart and veins return blood, so oxygen content is not the definition of artery versus vein. In plants, xylem transports water/mineral ions and phloem distributes sugars from sources to sinks. Kidneys filter blood and selectively reabsorb useful substances; urine formation is not simply passive filtration alone."]
    ],
    [
      card("Photosynthesis: carbon dioxide + water -> carbohydrate + oxygen (simplified)","Summary equation for oxygenic photosynthesis.","Explain how plants build organic food using light.","Balanced biochemical forms use appropriate coefficients.","It is a summary, not the full sequence of photosynthetic reactions."),
      card("Aerobic respiration releases more ATP than fermentation/anaerobic breakdown","Oxygen supports full oxidation of respiratory substrates in the standard model.","Compare aerobic and anaerobic pathways.","ATP is an energy-transfer molecule.","Do not confuse breathing with cellular respiration."),
      card("Xylem: water/mineral transport; phloem: organic-solute transport","Main vascular transport roles in plants.","Match plant tissue to function.","Not a numeric formula.","Phloem transport can be upward or downward depending on source-sink relations."),
      card("Nephron: filtration -> selective reabsorption/secretion -> urine","High-level kidney processing pathway.","Explain why useful nutrients normally remain in the body.","Concentration/volume units depend on question.","Urine is not identical to the initial filtrate.")
    ],
    [
      {title:"Trace a starch-containing meal",steps:["Mechanical and chemical digestion break food into smaller molecules; salivary amylase begins starch digestion in the mouth.","In the small intestine, pancreatic/intestinal enzymes complete digestion, and the resulting simple sugars are absorbed through villi.","Blood carries absorbed nutrients to the liver and body tissues, where they are assimilated or stored.","Egestion removes undigested material; it is different from excretion of metabolic wastes."]},
      {title:"Follow oxygen to a muscle cell",steps:["Inhaled air reaches alveoli; oxygen diffuses into capillary blood down its partial-pressure gradient.","Haemoglobin transports most oxygen to systemic tissues.","Oxygen diffuses from blood to cells and supports aerobic respiration in mitochondria.","Carbon dioxide produced by cellular metabolism travels back toward lungs for exhalation."]
    }],
    ["Using respiration to mean only breathing.","Saying all arteries carry oxygen-rich blood; pulmonary circulation is an important exception.","Confusing egestion with excretion.","Saying plants have no transport system."],
    ["Learn the labelled diagrams of the human digestive, respiratory, circulatory and excretory systems. For each, trace the route in order and connect the structure to its job."],
    ["How is absorption different from assimilation?","What do xylem and phloem transport?","Why is urine formation more than filtration alone?"],
    ["Assimilation: use/incorporation of absorbed nutrients by cells.","Nephron: functional unit of kidney.","Villus: small-intestinal projection that increases absorptive surface."],
    [q("Which process removes undigested food from the alimentary canal?","Egestion.","Egestion eliminates material not digested/absorbed; excretion removes metabolic wastes."),q("Which plant tissue carries most dissolved sugars?","Phloem.","Phloem translocates organic solutes, especially sucrose, from sources to sinks.")]),
  b("Class 10","Control and Coordination",
    "The nervous and endocrine systems detect information, coordinate responses and maintain regulated internal conditions; plants respond through growth and chemical signals.",
    [
      ["Stimulus, receptor and response","A stimulus is a change in the internal or external environment. Receptors detect it, sensory pathways transmit information, coordination centres process it and effectors such as muscles/glands produce a response. Reflex actions use a rapid pathway, commonly through the spinal cord, that reduces delay; the brain still receives information and can influence many reflex responses."],
      ["Neuron and synapse","A neuron has dendrites/cell body that receive/integrate signals, an axon that conducts the impulse, and axon terminals that communicate with the next cell. In many synapses, arrival of an electrical signal triggers neurotransmitter release across a small gap, leading to a response in the next cell. The impulse does not simply jump as a physical object through the synaptic cleft."],
      ["Hormones and plant coordination","Endocrine glands release hormones into blood, which carries them to target tissues with appropriate receptors. Hormones can coordinate slower, longer-lasting processes such as growth, metabolism and reproduction. Plant hormones such as auxin influence cell elongation/tropisms; phototropism is a growth response to light direction and gravitropism relates to gravity. Plant responses do not require a nervous system."]
    ],
    [
      card("Stimulus -> receptor -> coordinator -> effector -> response","A basic response pathway.","Explain reflex or voluntary response.","Sequence rather than numeric formula.","The precise pathway varies by receptor and response."),
      card("Reflex arc: receptor -> sensory neuron -> spinal cord/interneuron -> motor neuron -> effector","Common rapid coordination pathway.","Trace a protective reflex.","Neural signals are electrical along neurons and commonly chemical at synapses.","Not every reflex pathway has exactly the same interneuron arrangement."),
      card("Hormone acts on target cells with appropriate receptors","Target specificity is central to endocrine action.","Explain why one hormone affects some tissues more than others.","Hormones vary chemically and in concentration.","Hormones are not simply transmitted along one neuron."),
      card("Auxin and tropisms","Plant hormone activity can create unequal growth across a plant organ.","Explain phototropism/gravitropism at the syllabus level.","No fixed numeric relation needed here.","A plant response is a regulated growth response, not intentional movement.")
    ],
    [
      {title:"Withdraw a hand from a hot object",steps:["Receptors in skin detect the harmful stimulus and sensory neurons carry the signal inward.","A rapid spinal reflex pathway activates motor neurons.","Effector muscles contract, withdrawing the hand.","The brain is informed, allowing conscious awareness and later learning."]},
      {title:"Explain bending toward light",steps:["Light is detected as directional input by the growing plant shoot.","Auxin distribution/activity differs between the illuminated and shaded sides in the standard school-level account.","Cells on one side elongate more, causing curvature toward the light.","Describe the result as differential growth, not a rapid animal-like muscular movement."]
    }],
    ["Calling the reflex action a response without any receptor/effector pathway.","Saying a hormone affects every cell equally.","Confusing tropism (directional growth) with nastic movement (response not determined by stimulus direction).","Treating synaptic transmission as a continuous electrical wire."],
    ["Practice the labelled neuron, reflex arc, brain regions and endocrine-gland diagrams from the prescribed text. Compare nervous and hormonal coordination by speed, signal route and duration."],
    ["What is the role of an effector?","Why are synapses useful?","How does a plant coordinate response without nerves?"],
    ["Receptor: structure that detects a stimulus.","Effector: muscle/gland or other structure producing the response.","Hormone: chemical messenger released by endocrine tissue."],
    [q("Which neuron carries a signal from receptor toward the central nervous system?","Sensory neuron.","It transmits information from receptors to the coordination centres."),q("Why can plant shoots bend toward light?","Unequal growth across the shoot.","Directional light-associated hormone distribution leads to different cell elongation on the two sides.")]),
  b("Class 10","How Do Organisms Reproduce?",
    "Asexual and sexual reproduction transfer hereditary information to a new generation while differing in speed, cell division and genetic variation.",
    [
      ["Asexual reproduction","Asexual reproduction involves one parent and no fusion of gametes. Binary fission divides one cell into two; budding forms an outgrowth that develops into an individual; fragmentation and spore formation occur in appropriate organisms; vegetative propagation uses plant parts to form new plants. Offspring are usually genetically very similar to the parent apart from mutations, so this method can be rapid in stable conditions."],
      ["Sexual reproduction and variation","Sexual reproduction involves formation of gametes and their fusion at fertilisation. Meiosis reduces chromosome number in gametes, while fertilisation restores the species' characteristic diploid number in the zygote. DNA copying can introduce small changes and the combination of genetic material from two parents contributes to variation, which can help populations respond to changing environments."],
      ["Human and flowering-plant reproduction","In flowering plants, pollen carries the male gametophyte to the stigma; pollen-tube growth enables male gametes to reach the ovule. Fertilisation produces the zygote, with angiosperms also forming endosperm through the second fusion event in the standard account. In humans, reproductive organs form gametes; sperm and ovum fuse, and subsequent cell division and development occur after fertilisation."]
    ],
    [
      card("Asexual reproduction: one parent, no gamete fusion","Common pattern in fission, budding, spores and vegetative propagation.","Classify an organism's reproductive method.","No formula.","Offspring similarity does not mean mutations can never occur."),
      card("Meiosis -> haploid gametes; fertilisation -> diploid zygote","Chromosome number reduction and restoration.","Explain why sexual reproduction does not double chromosome number each generation.","Ploidy expressed as n or 2n.","Do not claim meiosis occurs during every cell division."),
      card("Pollination is not fertilisation","Pollination transfers pollen; fertilisation fuses gametes.","Distinguish flowering-plant reproductive stages.","Process terminology.","Pollen reaching stigma does not immediately mean a zygote exists.")
    ],
    [
      {title:"Compare budding and binary fission",steps:["In binary fission, one parent cell divides into daughter cells, often of similar size.","In budding, a new individual develops as an outgrowth from the parent.","Both are asexual and do not involve gamete fusion.","Use the organism example and diagram features stated in the question to identify the process."]},
      {title:"Trace flowering-plant reproduction",steps:["Anther produces pollen; pollination transfers pollen to a compatible stigma.","A pollen tube grows through style toward the ovule.","A male gamete fuses with the egg to form the zygote; the second fusion contributes to endosperm formation in angiosperms.","The ovule develops into a seed and the ovary commonly develops into the fruit."]
    }],
    ["Confusing pollination with fertilisation.","Saying asexual reproduction creates no variation at all in every circumstance.","Mixing chromosome number before and after meiosis.","Confusing ovule and ovary when describing seed and fruit."],
    ["Use process diagrams and compare asexual/sexual reproduction across number of parents, speed, variation and gamete involvement. Use the exact reproductive terminology from the prescribed text."],
    ["Why is meiosis important before fertilisation?","What is one difference between budding and fission?","What develops from an ovule after fertilisation?"],
    ["Gamete: reproductive cell, usually haploid.","Fertilisation: fusion of gametes.","Vegetative propagation: new plants formed from vegetative plant parts."],
    [q("Does pollination itself fuse male and female gametes?","No.","Pollination transfers pollen; fertilisation occurs later when gametes fuse."),q("What restores diploid chromosome number in sexual reproduction?","Fertilisation.","Two haploid gametes combine genetic material in the zygote.")]),
  b("Class 10","Heredity and Evolution",
    "Explain inherited traits with genes, alleles and chromosome transmission; use Mendelian crosses and distinguish inherited variation from environmental effects.",
    [
      ["Genes, alleles and inheritance","Genes are DNA regions contributing to inherited characteristics. Alternative versions of a gene are alleles; a diploid organism can carry two alleles at a locus. Dominance describes phenotype in a heterozygote under the stated model; a dominant allele is not necessarily more common or better for survival. During gamete formation, allele copies segregate so each gamete usually receives one allele of a pair."],
      ["Monohybrid crosses and sex determination","A heterozygous Aa individual makes gametes A and a in equal proportions under a simple Mendelian model. Crossing Aa x Aa yields genotype ratio 1 AA:2 Aa:1 aa. Under complete dominance, its expected phenotype ratio is 3 dominant:1 recessive. The ratio predicts probabilities across many offspring, not a guaranteed result for every small family. Human sex determination involves chromosome combinations as described in the textbook; avoid interpreting sex chromosomes as a value judgement."],
      ["Variation and evolution","Variation arises from mutation, recombination and different combinations of inherited material. Natural selection changes population characteristics across generations when inherited variants influence reproductive success in a particular environment. Acquired characteristics developed by an individual during life do not automatically become inherited genetic changes. Fossil, anatomical and molecular evidence provide different ways to infer evolutionary relationships."]
    ],
    [
      card("Aa x Aa -> genotype expectation 1:2:1","Classic monohybrid heterozygote cross.","Find expected genotype probabilities under complete segregation assumptions.","Ratios are dimensionless counts/probabilities.","Genotype ratio and phenotype ratio are not always the same."),
      card("Under complete dominance, Aa x Aa phenotype ratio=3:1","Dominant phenotype groups AA and Aa; recessive is aa.","Predict offspring phenotype probabilities.","Idealised Mendelian model.","Do not interpret dominance as prevalence or superiority."),
      card("Evolution = inherited population change across generations","Population-level concept.","Explain natural selection and genetic evidence.","Generational timescale.","Individuals respond/acclimatise; populations evolve.")
    ],
    [
      {title:"Calculate offspring probabilities for Aa x Aa",steps:["Each parent produces A and a gametes with probability 1/2 in the simple Mendelian model.","The four equally likely combinations are AA, Aa, aA and aa.","Genotype probabilities are 1/4 AA, 1/2 Aa and 1/4 aa.","With complete dominance, 3/4 show the dominant phenotype and 1/4 the recessive phenotype."]},
      {title:"Distinguish acquired and inherited traits",steps:["Describe how the trait arose in the individual.","Ask whether a heritable DNA/genetic change in germ-line material is involved.","A body change acquired through exercise or injury is not automatically passed to offspring.","An inherited allele can affect a trait across generations; environment may still influence its expression."]
    }],
    ["Calling an allele dominant because it is more common.","Reading a predicted ratio as an exact guarantee for a small number of children.","Confusing acquired changes with genetic inheritance.","Describing evolution as a purposeful change that an individual decides to make."],
    ["Use Punnett squares carefully, show the gametes and distinguish genotype from phenotype. For evolution, identify evidence, mechanism and population-level time scale."],
    ["What are alleles?","Why is Aa x Aa genotype ratio not always the phenotype ratio?","How is natural selection different from an acquired trait?"],
    ["Allele: alternative form of a gene.","Genotype: genetic constitution at a locus or set of loci.","Phenotype: observable characteristic shaped by genotype and environment."],
    [q("In Aa x Aa, what is the probability of aa?","1/4.","Only one of four equal genotype combinations is aa."),q("Does dominant mean more common?","No.","Dominance describes heterozygous expression under a genetic model, not population frequency.")]),
  b("Class 10","Our Environment",
    "Study ecosystems, food chains, trophic levels, energy transfer, decomposers and the persistence/management of waste.",
    [
      ["Ecosystem structure","An ecosystem includes organisms and the abiotic environment interacting. Producers capture energy, consumers obtain energy by feeding, and decomposers break down dead material/waste and return nutrients to the environment. Food chains are simplified feeding pathways; real ecosystems have food webs with multiple links. A trophic level describes an organism's feeding position, not its taxonomic classification."],
      ["Energy flow and nutrient cycling","Energy enters most ecosystems through sunlight and moves from producers to consumers; much energy is used in metabolism and dissipated as heat at each transfer. This is why less energy is generally available at higher trophic levels and the energy pyramid is upright in the standard model. Matter such as carbon and nitrogen cycles through organisms and the environment; energy flow is not a closed cycle in the same way."],
      ["Biodegradable and non-biodegradable waste","Biodegradable material can be broken down by biological processes under suitable conditions. Non-biodegradable waste persists longer or requires other treatment pathways. Accumulation can harm organisms and contaminate ecosystems. Reduce, reuse, recycle and safe disposal can lower impacts; whether an item biodegrades quickly depends on its material and environmental conditions."]
    ],
    [
      card("Energy flow: producer -> consumer -> higher trophic levels","Direction of energy transfer in a food chain.","Explain trophic-level energy patterns.","Illustrative pathway.","Energy flows; matter is recycled."),
      card("10% transfer is a rough ecological illustration, not a universal law","Only a fraction of energy at one trophic level becomes available to the next.","Interpret simple energy-pyramid examples.","Energy units follow the given data.","Do not assert exactly 10% for every ecosystem."),
      card("Decomposers recycle nutrients from organic material","Fungi/bacteria and other decomposers act on dead matter/waste.","Explain nutrient recycling.","Not a numeric formula.","Decomposition rate depends on conditions.")
    ],
    [
      {title:"Build a food chain",steps:["Start with a producer such as grass or algae.","Add a primary consumer that obtains energy by feeding on the producer.","Add higher consumers using a plausible feeding link.","Use arrows to show energy transfer from food to consumer."]},
      {title:"Interpret energy loss",steps:["If producers store 10,000 energy units and a question assumes 10% transfer, primary consumers receive about 1,000 units.","A secondary consumer could receive about 100 units under the same simplified assumption.","Explain that much energy is used/dissipated rather than transferred to biomass at the next trophic level.","Call the 10% figure an illustrative rule used by the question, not a universal constant."]
    }],
    ["Saying energy cycles like nutrients.","Assuming every food chain has exactly the same number of trophic levels.","Treating all synthetic materials as biodegradable.","Using a numerical energy-transfer percentage when the question has supplied a different one."],
    ["Trace the arrow direction in food chains and distinguish nutrient recycling from energy transfer. For waste questions, state a disposal/reduction pathway and its environmental reason."],
    ["Why is an energy pyramid generally upright?","What role do decomposers play?","How do biodegradable and non-biodegradable wastes differ?"],
    ["Trophic level: feeding position in a chain/web.","Decomposer: organism that breaks down dead organic material.","Biodegradable: capable of biological breakdown under suitable conditions."],
    [q("Does energy return to producers as a closed cycle?","No.","Energy moves through trophic levels and is dissipated as heat, while matter cycles."),q("Name one role of decomposers.","Break down dead organic matter and help recycle nutrients.","Their activity returns nutrients to environmental pools that organisms can reuse.")]),
  b("Class 11","The Living World",
    "Understand the characteristics of life, taxonomic identification, binomial nomenclature and the hierarchy used to organise biological diversity.",
    [
      ["Characteristics and biological organisation","Life is recognised through a connected set of properties, including cellular organisation, metabolism, homeostasis, growth, response and reproduction at the organism/population level. No single superficial trait is sufficient in every case; for example, some living individuals may not reproduce. Metabolism refers to the sum of chemical reactions in a living system and is a central characteristic of living cells."],
      ["Taxonomy, systematics and nomenclature","Taxonomy involves identification, nomenclature and classification; systematics also emphasises relationships among organisms. Binomial nomenclature gives each species a two-part scientific name: genus plus specific epithet. The genus begins with a capital letter and the epithet with lowercase, and both are italicised when typed under standard conventions. Scientific names provide a consistent international reference that common names do not."],
      ["Taxonomic hierarchy and tools","The standard hierarchy moves from species to genus, family, order, class, phylum/division and kingdom. Lower ranks generally group more closely related organisms. Herbarium sheets, museums, botanical gardens, zoological parks, taxonomic keys and field guides preserve or support identification. A dichotomous key uses paired contrasting choices; follow each choice based on evidence rather than guessing from a familiar label."]
    ],
    [
      card("Binomial name = Genus + specific epithet","Two-part scientific naming convention.","Write a scientific name correctly.","Formatting: italicise both words in typed text.","Genus capitalised; epithet lowercase."),
      card("Species -> genus -> family -> order -> class -> phylum/division -> kingdom","Common taxonomic hierarchy from lower to higher rank.","Place a taxon within the classification system.","Rank sequence.","Do not reverse the order when asked for hierarchy.")
    ],
    [
      {title:"Write a binomial name",steps:["Write the genus first with an uppercase initial.","Write the specific epithet second in lowercase.","Italicise both words in typed text or underline separately in handwritten work as directed.","Do not treat the common name as the scientific name."]},
      {title:"Use a dichotomous key",steps:["Read both alternatives at the current step.","Choose the alternative supported by the specimen's observable feature.","Follow the indicated next step.","If neither choice fits, recheck the observation or key version rather than forcing an identification."]
    }],
    ["Treating growth alone as proof of life.","Writing the specific epithet with an uppercase initial.","Confusing taxonomy with systematics as used in the text.","Skipping a paired choice in a dichotomous key."],
    ["Memorise the hierarchy and scientific-name formatting, but be ready to apply the rank to examples. Explain what the taxonomic tool does, not only its name."],
    ["What are the two parts of a binomial name?","How does a dichotomous key work?","Which rank sits immediately above genus?"],
    ["Taxonomy: identification, naming and classification.","Systematics: study of diversity and relationships.","Taxon: a named unit at any classification rank."],
    [q("What is the correct order of the two parts in a binomial name?","Genus first, specific epithet second.","Standard scientific nomenclature uses the genus and specific epithet in that order."),q("What is a dichotomous key based on?","Pairs of contrasting character choices.","Each answer leads the user to the next identification step.")]),
  b("Class 11","Biological Classification",
    "Compare major classification groups using cell structure, nutrition, reproduction and evolutionary relationships, while treating viruses and lichens carefully.",
    [
      ["Basis of classification","Classification systems use cellular organisation, nutrition, reproduction, morphology, physiology and molecular evidence. Prokaryotic cells lack a membrane-bound nucleus; eukaryotic cells have one. Organisms may be autotrophic or heterotrophic, unicellular or multicellular, and reproduce through diverse modes. A system groups organisms by shared evidence; it is not merely a list of visible similarities."],
      ["Major groups and diagnostic traits","In the five-kingdom framework, Monera includes prokaryotes; Protista includes varied unicellular eukaryotes; Fungi absorb nutrients and commonly have chitinous cell walls; Plantae are primarily photosynthetic multicellular eukaryotes; Animalia ingest food and lack cell walls. These are textbook-level generalisations: know the characteristic examples and distinguish the nutritional/cellular features requested."],
      ["Viruses, viroids and lichens","Viruses are acellular infectious entities containing genetic material in a protein coat and rely on host cells for reproduction. Viroids are much smaller infectious RNA agents without a protein coat in the standard definition. Lichens are a symbiotic association of a fungal partner with a photosynthetic partner such as an alga/cyanobacterium. Do not place viruses casually into a cell-based kingdom system without discussing their acellular nature."]
    ],
    [
      card("Prokaryote: no membrane-bound nucleus; eukaryote: nucleus present","Core cell-organisation distinction.","Classify organisms by cellular structure.","Structural trait.","Prokaryotes still contain DNA and ribosomes."),
      card("Fungi: absorptive heterotrophy; chitinous cell wall in the typical model","Major group identifier.","Compare fungi with plants/animals.","Not a numerical relation.","Fungi do not photosynthesise simply because many live in soil."),
      card("Virus: genetic material + protein coat; host-dependent replication","Acellular infectious organisation.","Describe why viruses differ from cells.","Structural description.","A virus has no independent cellular metabolism comparable with a cell.")
    ],
    [
      {title:"Classify by cell organisation",steps:["Check whether a membrane-bound nucleus exists.","If not, the organism is prokaryotic under the common school distinction.","If yes, it is eukaryotic; further compare cell wall, nutrition and organisation.","Use multiple features and the classification framework specified by the question."]},
      {title:"Distinguish virus and bacterium",steps:["A bacterium is a cellular prokaryote with its own cellular machinery.","A virus is acellular and needs a host cell for replication.","Antibiotics target susceptible bacteria, not viruses directly.","State the structural distinction and its biological consequence."]
    }],
    ["Calling fungi plants because they are non-motile.","Saying viruses reproduce independently outside host cells.","Confusing viroid with virus.","Treating a group label as proof that every member has identical traits."],
    ["Use a comparison table with cell type, cell wall, nutrition and reproduction. For exceptions, explain the defining feature and name the framework rather than forcing an inaccurate universal claim."],
    ["What distinguishes prokaryotic and eukaryotic cells?","What makes lichens a symbiotic association?","Why are viruses described as acellular?"],
    ["Prokaryote: cell lacking a membrane-bound nucleus.","Symbiosis: close association between different species.","Viroid: infectious RNA agent without a protein coat in the standard definition."],
    [q("Do viruses have normal independent cellular reproduction?","No.","They replicate using machinery of a host cell."),q("What is a common fungal cell-wall material?","Chitin.","This characteristic helps distinguish fungi from plants in the standard group comparison.")]),
  b("Class 11","Plant Kingdom",
    "Compare major plant groups by vascular tissue, seeds, flowers, reproductive structures and dominant life-cycle stages.",
    [
      ["Algae and bryophytes","Many algae are photosynthetic and largely aquatic; body organisation ranges from unicellular to multicellular forms. Bryophytes lack the true vascular tissues of higher plants and rely on water for aspects of fertilisation, commonly inhabiting moist environments. The gametophyte is prominent/dominant in the standard bryophyte description, and the sporophyte remains attached and dependent to varying degrees."],
      ["Pteridophytes, gymnosperms and angiosperms","Pteridophytes have vascular tissue but reproduce by spores rather than seeds. Gymnosperms produce seeds that are not enclosed in a fruit; their reproductive structures commonly include cones. Angiosperms produce flowers, with ovules enclosed in ovaries before fertilisation and seeds enclosed in fruits afterwards. These broad criteria are powerful for comparison questions."],
      ["Alternation of generations","Plant life cycles alternate between haploid gametophyte and diploid sporophyte stages. Meiosis produces spores; gametes fuse at fertilisation to form a zygote that develops into the sporophyte. Which generation is dominant varies across plant groups. When diagrams show n and 2n, label where meiosis and fertilisation occur so chromosome number changes are explicit."]
    ],
    [
      card("Bryophytes: no true vascular tissue; prominent gametophyte","Common textbook group traits.","Compare plant groups.","Ploidy expressed as n/2n where relevant.","Do not call bryophytes seed-producing plants."),
      card("Pteridophytes: vascular tissue, spores, no seeds in the typical group comparison","Intermediate vascular plant group.","Differentiate ferns from seed plants.","Group trait.","Vascular tissue does not imply seeds."),
      card("Gymnosperms: seeds not enclosed in fruit; angiosperms: flowering plants with seeds enclosed in fruit","Seed/flower distinction.","Classify major seed-plant groups.","Group trait.","Do not confuse ovule and seed or ovary and fruit."),
      card("Meiosis -> spores; fertilisation -> zygote","Core alternation-of-generations events.","Trace the plant life cycle.","Ploidy changes n <-> 2n.","Spores and gametes are not the same cell type.")
    ],
    [
      {title:"Classify a described plant",steps:["Ask whether true vascular tissue is present.","If absent and it reproduces through the bryophyte pattern, use bryophyte traits.","If vascular but spore-producing, consider pteridophytes.","If seeds occur, decide whether they are exposed or enclosed by fruit."]},
      {title:"Trace a haploid/diploid cycle",steps:["A diploid sporophyte produces haploid spores by meiosis.","Spores grow into haploid gametophytes.","The gametophyte forms gametes; fertilisation forms a diploid zygote.","The zygote develops into the sporophyte, restarting the cycle."]
    }],
    ["Assuming all vascular plants produce seeds.","Confusing spores and gametes.","Saying gymnosperm seeds are enclosed in fruit.","Forgetting which process halves or restores chromosome number."],
    ["Build a table of vascular tissue, spores/seeds, flowers/fruits and dominant generation. Read life-cycle diagrams from meiosis through fertilisation rather than memorising arrows alone."],
    ["Which plant group has vascular tissue but no seeds?","Which group has seeds enclosed in fruit?","Which event restores diploidy?"],
    ["Gametophyte: haploid generation producing gametes.","Sporophyte: diploid generation producing spores.","Alternation of generations: life cycle alternating haploid and diploid multicellular stages."],
    [q("Do pteridophytes produce seeds in the usual textbook comparison?","No.","They are vascular plants that reproduce by spores."),q("What is the key seed distinction between gymnosperms and angiosperms?","Gymnosperm seeds are exposed; angiosperm seeds are enclosed within fruits.","Flowers/ovaries and fruit formation distinguish angiosperms in the standard account.")]),
  b("Class 11","Animal Kingdom",
    "Classify animal groups through body symmetry, organisation, germ layers, coelom, segmentation, support and diagnostic structures.",
    [
      ["Body plans and embryonic layers","Animal organisation may be cellular, tissue-level, organ-level or organ-system level. Symmetry may be asymmetrical, radial or bilateral. Diploblastic animals form two main germ layers; triploblastic animals form three. These criteria describe developmental/body-plan patterns and should be used alongside examples rather than as isolated labels."],
      ["Body cavity, segmentation and skeleton","A true coelom is a body cavity lined by mesoderm; acoelomate, pseudocoelomate and coelomate patterns differ in tissue lining. Segmentation repeats body units in some groups. Support may come from an exoskeleton, endoskeleton or hydrostatic structures. Compare traits from the prescribed classification table and note that a phylum is diagnosed by a bundle of features."],
      ["Major phyla and chordates","Poriferans have pores and water-flow systems; cnidarians have specialised stinging cells; platyhelminths are flatworms; nematodes are roundworms; annelids are segmented worms; arthropods have jointed appendages; molluscs have a soft body with characteristic structures; echinoderms are marine with water vascular systems. Chordates are defined by features such as notochord, dorsal hollow nerve cord and pharyngeal slits at a relevant stage."]
    ],
    [
      card("Radial vs bilateral symmetry","Arrangement of body parts around axes/planes.","Compare organism body plans.","Structural criterion.","Symmetry is one trait, not the sole basis for classification."),
      card("Coelom: body cavity lined by mesoderm","A key anatomical classification feature.","Compare acoelomate/pseudocoelomate/coelomate animals.","Structural criterion.","A cavity is not a true coelom unless the lining criterion is met."),
      card("Chordate traits include notochord and dorsal hollow nerve cord at a stage","Diagnostic group features.","Distinguish chordates from non-chordates.","Structural/developmental.","Some traits are transient in some chordates.")
    ],
    [
      {title:"Classify from diagnostic characters",steps:["Underline the features explicitly given: symmetry, segmentation, appendages, body cavity and habitat.","Compare them to the defining traits of the listed phyla.","Choose the group supported by multiple matching features.","Explain the diagnostic evidence, not only the organism's common name."]},
      {title:"Distinguish arthropods and annelids",steps:["Arthropods have jointed appendages and an external chitinous exoskeleton in the common account.","Annelids have segmented bodies but lack arthropod jointed appendages/exoskeleton pattern.","Use the organism's exact traits to classify it.","Avoid relying on habitat alone because unrelated groups can share a habitat."]
    }],
    ["Using a single ambiguous feature to classify an animal.","Confusing pseudocoelom with a true coelom.","Calling all marine animals echinoderms.","Forgetting that chordate features may be present only at certain developmental stages."],
    ["Make comparative tables and learn representative examples/diagnostic terms. NEET-style questions often ask feature-to-phylum matching and contrast pairs."],
    ["What makes a true coelom different from a pseudocoelom?","Name one arthropod diagnostic feature.","Which traits characterise chordates?"],
    ["Phylum: major taxonomic rank below kingdom in the standard animal hierarchy.","Coelom: mesoderm-lined body cavity.","Notochord: flexible supporting structure found in chordates at a stage."],
    [q("What is one defining arthropod feature?","Jointed appendages.","The group is characterised by jointed appendages and a characteristic exoskeleton."),q("Does habitat alone reliably identify an animal phylum?","No.","Unrelated animal groups can live in similar habitats; use structural/body-plan features.")]),
  b("Class 11","Cell: The Unit of Life",
    "Understand the cell as a structural/functional unit, compare prokaryotic and eukaryotic cells, and link organelles to functions.",
    [
      ["Cell theory and membranes","Cell theory states that organisms are composed of cells, cells are basic units of life, and new cells arise from pre-existing cells in the standard formulation. The plasma membrane is selectively permeable and regulates transport. The fluid-mosaic model includes a lipid bilayer with proteins and other components. Transport can be passive down a gradient or active against a gradient using energy directly or indirectly."],
      ["Prokaryotic and eukaryotic organisation","Prokaryotic cells lack a membrane-bound nucleus and many membrane-bound organelles, but contain DNA, ribosomes and cell membrane. Eukaryotic cells compartmentalise many processes in organelles, including nucleus, mitochondria and endomembrane structures. Plant cells commonly include cellulose cell walls, plastids and large central vacuoles; animal cells lack a cellulose wall and plastids. Cell types vary, so avoid treating every organelle as universal."],
      ["Organelles and coordination","The nucleus stores most eukaryotic genetic material and regulates gene expression; ribosomes synthesise polypeptides; rough ER supports synthesis/processing of many proteins; Golgi modifies and packages products. Mitochondria support aerobic ATP production; chloroplasts perform photosynthesis in photosynthetic eukaryotes; lysosomes digest/recycle material. Structure relates to function through membranes, enzymes, surface area and compartmentalisation."]
    ],
    [
      card("Plasma membrane: selective permeability","Controls exchange and cell boundary interactions.","Explain transport/compartmentalisation.","Membrane structure rather than a fixed formula.","Selective does not mean impermeable to everything."),
      card("Ribosome: translation/protein synthesis","Builds polypeptides from mRNA instructions.","Match organelle to function.","Molecular process.","Ribosomes can be free in cytosol or attached to rough ER."),
      card("Mitochondrion: aerobic ATP production; chloroplast: photosynthesis","Core organelle functions.","Compare plant/animal/eukaryotic cell organelles.","Functional facts.","Do not say only animal cells use mitochondria."),
      card("Prokaryote vs eukaryote: membrane-bound nucleus absent vs present","Cell-organisation contrast.","Classify cell structure.","Structural criterion.","Prokaryotes still have DNA and ribosomes.")
    ],
    [
      {title:"Trace a secreted protein",steps:["DNA information is transcribed into mRNA in the nucleus in a typical eukaryotic cell.","Ribosomes associated with rough ER translate the mRNA into a polypeptide.","The endoplasmic reticulum and Golgi contribute folding/modification and packaging.","Transport vesicles deliver the product to the plasma membrane for secretion."]},
      {title:"Compare a plant and animal cell",steps:["Both have plasma membranes, cytoplasm, DNA and ribosomes.","A typical plant cell has a cellulose cell wall, chloroplasts in photosynthetic tissues and a large central vacuole.","An animal cell lacks a cellulose wall and plastids.","State the tissue context when organelle presence varies, such as chloroplasts not being found in every plant cell."]
    }],
    ["Saying prokaryotes have no DNA.","Confusing rough ER, smooth ER and Golgi roles.","Claiming every plant cell has chloroplasts.","Describing active transport as movement down a gradient without energy."],
    ["Learn labelled cell diagrams, compare cell types, and answer organelle-function questions through structure-function reasoning rather than memorised pairs alone."],
    ["What is selective permeability?","Which organelle synthesises polypeptides?","What is the main nuclear distinction between prokaryotes and eukaryotes?"],
    ["Organelle: specialised cell compartment/structure.","Translation: use of mRNA instructions to build a polypeptide.","Fluid-mosaic model: membrane model with lipids and mobile proteins."],
    [q("Which organelle is most directly associated with translation?","Ribosome.","Ribosomes link amino acids according to mRNA codons."),q("Do prokaryotes contain DNA?","Yes.","They lack a membrane-bound nucleus, but genetic material is present.")]),
  b("Class 11","Biomolecules",
    "Connect monomers, chemical bonds, protein structure, nucleic acids, lipids, carbohydrates and enzyme specificity.",
    [
      ["Major biomolecule classes","Carbohydrates serve energy and structural roles; lipids store energy and form membranes; proteins provide enzymes, structure, transport and signalling; nucleic acids store/transmit genetic information. Biomolecules vary in size and bonding. A polymer is made from subunits in a pattern, while many lipids are not true repeating-unit polymers in the same sense as proteins and nucleic acids."],
      ["Proteins and enzymes","Amino acids link through peptide bonds to form polypeptides. Folding into secondary, tertiary and sometimes quaternary structure supports a protein's function. Enzymes lower activation energy and increase reaction rate without being consumed by the overall reaction. Temperature, pH, substrate concentration and inhibitors affect activity; extreme conditions may disrupt interactions necessary for active-site shape."],
      ["Nucleic acids and metabolism","Nucleotides contain a sugar, phosphate and nitrogenous base; nucleosides lack the phosphate. DNA typically uses deoxyribose and thymine, while RNA uses ribose and uracil. Metabolism includes anabolic pathways building molecules and catabolic pathways breaking them down. ATP couples energy-releasing processes to energy-requiring cellular work."]
    ],
    [
      card("Amino acids -> peptide bonds -> polypeptides/proteins","Basic protein construction.","Identify protein monomer and linkage.","Amino acids vary in side chain.","Peptide bond is not the same as glycosidic or phosphodiester bond."),
      card("Nucleotide = sugar + phosphate + nitrogenous base","Building block of nucleic acids.","Distinguish nucleotide from nucleoside.","Molecular composition.","A nucleoside has sugar and base but no phosphate."),
      card("DNA: deoxyribose/thymine; RNA: ribose/uracil","Common nucleic-acid comparison.","Compare DNA and RNA.","Composition facts.","RNA forms and roles vary; the basic base/sugar distinction remains."),
      card("Enzymes lower activation energy","Catalytic mechanism at the pathway level.","Explain why enzymes accelerate reactions.","No numeric formula needed.","Enzymes do not change the reaction's equilibrium constant.")
    ],
    [
      {title:"Identify a nucleic-acid building block",steps:["Check whether the molecule includes a pentose sugar and nitrogenous base.","If phosphate is also present, it is a nucleotide.","If phosphate is absent, it is a nucleoside.","Use sugar/base identity to distinguish typical DNA and RNA components."]},
      {title:"Explain enzyme specificity",steps:["The active site has chemical/structural features complementary to a substrate.","Binding positions reactants and stabilises the transition state, lowering activation energy.","The product leaves and enzyme can catalyse another reaction cycle.","Temperature/pH can disrupt active-site structure; an enzyme does not make a thermodynamically unfavourable reaction automatically favourable."]
    }],
    ["Confusing nucleotide with nucleoside.","Saying enzymes are used up like reactants.","Treating all lipids as repeating-unit polymers.","Mixing the peptide, glycosidic and phosphodiester bonds."],
    ["Memorise biomolecule structure/function/bond matrices and enzyme-factor effects. For diagrams, identify monomer and linkage before describing biological role."],
    ["What extra component distinguishes a nucleotide from a nucleoside?","Which bond joins amino acids?","How does an enzyme affect activation energy?"],
    ["Peptide bond: covalent link between amino acids.","Phosphodiester bond: linkage in nucleic-acid backbone.","Activation energy: barrier to a reaction pathway."],
    [q("What bond connects amino acids in a polypeptide?","Peptide bond.","It joins the amino and carboxyl groups of adjacent amino-acid residues."),q("Does an enzyme change the equilibrium constant?","No.","It changes reaction rates by lowering activation barriers, not the thermodynamic equilibrium constant.")]),
  b("Class 11","Cell Cycle and Cell Division",
    "Track DNA replication, chromosome behaviour in interphase, mitosis and meiosis, and connect division to growth, repair and gamete formation.",
    [
      ["Cell cycle and DNA content","The cell cycle consists of interphase (G1, S, G2) and M phase. During S phase, DNA is replicated, so DNA content increases while chromosome number by centromere convention does not simply double at that moment. Check whether the problem counts chromosomes, chromatids or DNA molecules; the distinction is central to chromosome-number questions."],
      ["Mitosis","Mitosis separates duplicated sister chromatids after chromosome condensation, alignment and spindle attachment. It usually produces two daughter nuclei with the chromosome number maintained. Mitosis supports growth, repair and many forms of asexual reproduction. Cytokinesis divides the cytoplasm and occurs differently in plant and animal cells in the standard textbook account."],
      ["Meiosis and variation","Meiosis includes two divisions after one DNA replication. In meiosis I, homologous chromosomes pair and separate; crossing over can occur during prophase I. In meiosis II, sister chromatids separate. The resulting haploid cells support sexual reproduction and variation through recombination and independent assortment. A chromosome-count answer should state the starting ploidy and the stage being counted."]
    ],
    [
      card("S phase: DNA replication","Duplicates genetic material before cell division.","Track DNA content across the cycle.","Relative DNA content is often shown as C units.","Replication does not mean immediate separation into daughter chromosomes."),
      card("Mitosis: sister chromatids separate; chromosome number generally maintained","Equational division in common somatic-cell context.","Compare mitosis and meiosis.","Chromosome number depends on organism/ploidy.","Distinguish chromosome number from DNA amount."),
      card("Meiosis I: homologues separate; meiosis II: sister chromatids separate","Two-stage reduction division.","Track chromosome behaviour.","Ploidy drops across meiosis I.","Only one DNA replication precedes the two meiotic divisions.")
    ],
    [
      {title:"Track a diploid cell with 2n=8",steps:["Before S phase it has 8 chromosomes and the pre-replication DNA amount.","After S phase it still has 8 chromosomes by centromere count, but each is duplicated into sister chromatids.","After meiosis I, homologous chromosomes separate and each daughter cell is haploid with n=4 duplicated chromosomes.","After meiosis II, sister chromatids separate to form haploid products with n=4 chromosomes each."]},
      {title:"Compare mitosis and meiosis",steps:["Mitosis normally has one division and preserves chromosome number in daughter cells.","Meiosis has two divisions after one replication and reduces ploidy.","Crossing over and independent assortment contribute variation in meiosis.","Tie the division to function: tissue growth/repair versus gamete/spore production in the relevant life cycle."]
    }],
    ["Counting chromatids as chromosomes without defining the convention.","Saying DNA replicates before each meiotic division.","Confusing homologous chromosomes with sister chromatids.","Claiming meiosis always produces four genetically identical cells."],
    ["Draw a stage table with DNA replication, homologous pairing, homologous separation and chromatid separation. Track n, chromosome count and DNA content separately."],
    ["Which stage includes DNA replication?","What separates in meiosis I?","Why can meiotic products differ genetically?"],
    ["Chromatid: one copy/strand of a replicated chromosome structure.","Homologous chromosomes: chromosome pair carrying corresponding genes.","Cytokinesis: division of cytoplasm."],
    [q("When do homologous chromosomes separate?","Meiosis I.","The first meiotic division separates the homologous chromosome pair."),q("Does DNA replication occur between meiosis I and II?","No.","There is one S phase before meiosis I, followed by two divisions.")]),
  b("Class 11","Morphology of Flowering Plants",
    "Identify roots, stems, leaves, inflorescences, flowers, fruits and seeds, including modifications and their functions.",
    [
      ["Root, stem and leaf architecture","Roots commonly anchor plants and absorb water/minerals, but may be modified for storage, support, respiration or parasitic functions. Stems provide support, bear leaves/flowers and may store food, climb or photosynthesise. Leaves typically carry out photosynthesis and gas exchange but may be modified into tendrils, spines, storage structures or reproductive plantlets. Structure and origin matter more than appearance alone."],
      ["Flower and inflorescence","A typical flower includes sepals, petals, stamens and carpels. Stamens include anther/filament; the carpel includes stigma, style and ovary with ovules. Inflorescence describes how flowers are arranged on the floral axis, rather than the structure of one flower. Floral formulae/diagrams should be interpreted by the symbols and orientation convention supplied in the textbook."],
      ["Fruit and seed","After fertilisation, the ovule develops into a seed and the ovary commonly develops into a fruit. The seed includes an embryo and protective seed coat, with food storage in cotyledons or endosperm according to the plant. Some fruits include accessory tissues. Compare monocot and dicot seed structures by number of cotyledons and the organisation illustrated in the prescribed diagram."]
    ],
    [
      card("Anther produces pollen; ovule contains the female gametophyte/embryo sac","Reproductive structure-function relationships.","Label flower reproductive diagrams.","Anatomical fact.","Do not confuse ovule with ovary."),
      card("Ovule -> seed; ovary -> fruit in the standard flowering-plant sequence","Post-fertilisation development.","Explain seed and fruit formation.","Developmental relation.","Some fruits include accessory parts; use the textbook's precise wording."),
      card("Root/stem/leaf modifications are identified by origin + form + function","Comparative morphology principle.","Match modification and adaptation.","Structural concept.","Similar-looking structures can have different origins.")
    ],
    [
      {title:"Identify floral parts",steps:["Locate the outer protective/attractive whorls, then stamens and carpels inward.","Label anther and filament in a stamen.","Label stigma, style and ovary in a carpel.","Explain each part's role in pollen production, reception or ovule protection."]},
      {title:"Distinguish a stem and leaf modification",steps:["Check how the structure connects to the parent plant and its developmental origin.","Identify evidence such as buds/nodes for stem structures or leaf arrangement/venation for leaf structures.","Connect the form to support, storage, protection or reproduction.","Avoid assigning an organ solely because its final shape resembles another organ."]
    }],
    ["Confusing an inflorescence with an individual flower.","Calling the ovule a fruit.","Naming a modification from function without identifying its origin.","Overgeneralising monocot/dicot seed traits without referencing the diagram."],
    ["Practice labelled diagrams, modification-function tables and flower-to-fruit sequences. Explain why the structure is classified as a root, stem or leaf modification."],
    ["Which floral part develops into a seed?","What structures form a stamen?","Why should organ origin be considered when naming modifications?"],
    ["Inflorescence: arrangement of flowers on an axis.","Carpel: female reproductive unit including ovary, style and stigma.","Cotyledon: embryonic seed leaf."],
    [q("What commonly develops from the ovary after fertilisation?","Fruit.","The ovary wall and associated tissues contribute to fruit development."),q("What are the two main parts of a stamen?","Anther and filament.","The anther bears pollen-producing structures and the filament supports it.")]),
  b("Class 11","Anatomy of Flowering Plants",
    "Explain epidermal, ground and vascular tissue systems, meristems, secondary growth and monocot/dicot anatomical patterns.",
    [
      ["Tissue systems","The epidermal system protects the plant and regulates exchange through stomata/root hairs. Ground tissue performs photosynthesis, storage and support. Vascular tissue conducts materials: xylem chiefly carries water/mineral ions while phloem transports organic solutes. Cell shape, wall thickening, arrangement and the presence of specialised conducting elements explain how a tissue performs its role."],
      ["Meristems and secondary growth","Meristematic cells divide actively and give rise to new tissues. Apical meristems support increase in length; lateral meristems/cambium contribute to secondary thickening in many woody dicots. The vascular cambium forms secondary xylem inward and secondary phloem outward in the standard account. Secondary growth is not equally developed in all flowering plants, so identify the organ/group described."],
      ["Compare roots, stems and leaves","Root/stem cross-sections differ in xylem/phloem arrangement, endodermis/pericycle patterns and vascular bundles. A typical dicot stem has bundles arranged in a ring with cambium, whereas a typical monocot stem has scattered bundles and usually lacks the same cambium arrangement. A leaf has mesophyll and vascular bundles; dorsiventral and isobilateral leaves differ in tissue arrangement. Use more than one diagnostic feature."]
    ],
    [
      card("Xylem: water/minerals; phloem: sugars/organic solutes","Vascular functions.","Label or compare vascular tissue.","Transport process.","Phloem can translocate materials in either direction depending on source/sink."),
      card("Vascular cambium: secondary xylem inward, secondary phloem outward","Secondary growth in standard woody stem model.","Explain increase in stem girth.","Tissue-direction relationship.","Do not claim every monocot stem has the same secondary growth pattern as a woody dicot."),
      card("Dicot stem bundles often ring-arranged; monocot bundles often scattered","Common anatomical comparison.","Identify standard cross-section diagrams.","Pattern comparison.","Use additional traits when an image is unclear.")
    ],
    [
      {title:"Label a stem cross section",steps:["Locate epidermis, ground tissue and vascular bundles.","Identify xylem on the inner side and phloem on the outer side in the standard bundle pattern.","Check whether bundles are ring-arranged or scattered.","Use the presence/absence of cambium and other traits to support the monocot/dicot conclusion."]},
      {title:"Explain secondary growth",steps:["Lateral meristematic tissue such as vascular cambium divides.","It produces secondary xylem toward the inside and secondary phloem toward the outside.","Accumulation of secondary tissues increases girth in the typical woody stem.","Recognise that cambium patterns vary among plant groups."]
    }],
    ["Switching xylem and phloem positions.","Assuming every plant has secondary growth.","Identifying monocot/dicot from one vague feature alone.","Confusing meristematic tissue with mature permanent tissue."],
    ["Study labelled root, stem and leaf sections. In compare/contrast answers, name the feature, state its location and explain its diagnostic significance."],
    ["Which meristem is associated with increase in girth?","Where is xylem relative to phloem in a typical vascular bundle?","What is the role of epidermis?"],
    ["Meristem: plant tissue with actively dividing cells.","Cambium: lateral meristem producing secondary vascular tissue.","Mesophyll: leaf tissue between epidermal layers."],
    [q("What does vascular cambium produce in the standard stem model?","Secondary xylem inward and secondary phloem outward.","The orientation matters when interpreting secondary growth."),q("Which plant tissue carries photosynthate such as sucrose?","Phloem.","Phloem translocates organic solutes from source tissues to sinks.")]),
  b("Class 11","Photosynthesis in Higher Plants",
    "Trace light reactions, electron transport, ATP/NADPH formation and carbon fixation; compare C3 and C4 pathways at the syllabus level.",
    [
      ["Light absorption and electron transport","Pigments in photosystems absorb light energy, exciting electrons that move through electron-transfer components. In oxygenic photosynthesis, water oxidation supplies electrons and releases oxygen. Electron transport helps establish a proton gradient across a thylakoid membrane; ATP synthase uses this gradient to produce ATP. Reduced NADP (NADPH) supplies reducing power for carbon-fixation reactions."],
      ["Calvin cycle and carbon fixation","The Calvin cycle uses ATP and NADPH to incorporate CO2 into organic molecules through fixation, reduction and regeneration stages. In the C3 pathway, the first stable product is a three-carbon compound. The cycle depends on products of the light reactions, but is not itself the light-absorbing process. When resources or environmental conditions change, the balance between carbon fixation and photorespiration can affect yield."],
      ["C4 pathway and limiting factors","C4 plants initially fix CO2 into a four-carbon compound in mesophyll cells and concentrate CO2 near the Calvin-cycle enzyme in bundle-sheath cells, reducing photorespiration under many hot/high-light conditions. Photosynthesis rate can be affected by light, CO2 availability, temperature, water status and pigment/enzyme function. A factor becomes limiting when increasing another factor cannot raise the rate until the limiting factor changes."]
    ],
    [
      card("Light reactions: ATP + NADPH production; water splitting releases O2","Energy and reducing-power stage.","Explain where oxygen and ATP/NADPH originate.","Molecules carry energy/reducing power.","The released oxygen originates from water in oxygenic photosynthesis."),
      card("Calvin cycle uses CO2, ATP and NADPH to build carbohydrate precursors","Carbon-fixation stage.","Explain synthesis of organic matter.","Molecular pathway.","Do not say the Calvin cycle directly splits water."),
      card("C3 first stable product is three-carbon; C4 first stable product is four-carbon","Pathway comparison.","Compare C3/C4 photosynthesis.","Carbon count per initial stable product.","The pathway name relates to the first stable product, not number of carbon dioxide molecules.")
    ],
    [
      {title:"Trace the source of released oxygen",steps:["Light energy drives oxidation of water in the photosystem-II-associated process.","Water supplies electrons and protons; oxygen is released from water oxidation.","Electron transport supports proton-gradient formation and ATP synthesis.","Therefore the O2 released during oxygenic photosynthesis is derived from water, not directly from CO2."]},
      {title:"Interpret a limiting-factor graph",steps:["Identify the independent variable (such as light intensity) and photosynthesis-rate axis.","A rising region indicates that the factor was limiting over that interval.","A plateau indicates another factor or biochemical capacity has become limiting.","Explain the result as an interaction of factors, not an unlimited linear response."]
    }],
    ["Claiming photosynthetic oxygen comes from CO2.","Confusing light reactions with carbon fixation.","Saying C4 plants do not use the Calvin cycle.","Assuming more light always increases the rate indefinitely."],
    ["Memorise locations and products of light reactions/Calvin cycle, the source of oxygen and the first stable products of C3/C4 pathways. Explain graphs using limiting-factor logic."],
    ["Where does oxygen released by photosynthesis originate?","What do ATP and NADPH provide to the Calvin cycle?","Why can C4 metabolism help reduce photorespiration?"],
    ["Photolysis: light-associated splitting of water in the photosynthetic process.","Carbon fixation: incorporation of inorganic carbon into organic compounds.","Photorespiration: process competing with efficient carbon fixation under certain conditions."],
    [q("What is the origin of oxygen liberated in photosynthesis?","Water.","Water oxidation supplies electrons and produces O2."),q("What is the first stable product classically associated with C3 fixation?","A three-carbon compound.","This carbon number gives the C3 pathway its name in the standard comparison.")]),
  b("Class 11","Respiration in Plants",
    "Explain glycolysis, fermentation, Krebs cycle and electron transport as pathways that release energy from organic substrates.",
    [
      ["Glycolysis and fermentation","Glycolysis occurs in the cytosol and converts glucose into pyruvate, producing a small net yield of ATP and reduced electron carriers. In oxygen-limited conditions, fermentation regenerates NAD+ so glycolysis can continue. Yeast fermentation produces ethanol and carbon dioxide; lactic fermentation produces lactate in certain cells/organisms. Fermentation does not completely oxidise glucose."],
      ["Aerobic oxidation","When oxygen is available, pyruvate can be processed in mitochondria in eukaryotic cells; the citric acid/Krebs cycle produces carbon dioxide and reduced carriers. Electrons from NADH/FADH2 move through the electron-transport chain in the inner mitochondrial membrane. The proton gradient drives ATP synthase, and oxygen serves as the final electron acceptor in the standard aerobic pathway."],
      ["ATP yield and pathway comparison","Aerobic respiration generally extracts much more energy per glucose than anaerobic fermentation, although exact ATP yield depends on assumptions and cellular conditions. The role of oxygen is in the electron-transport chain, not as a direct reactant in glycolysis. Plants respire too; photosynthesis and respiration are distinct pathways with different purposes and conditions."]
    ],
    [
      card("Glycolysis: glucose -> pyruvate; occurs in cytosol","Initial breakdown of glucose.","Compare cellular respiration stages.","ATP and NADH products are pathway-dependent.","Glycolysis does not require oxygen directly."),
      card("Fermentation regenerates NAD+ for continued glycolysis","Low-oxygen/no-respiratory-chain pathway in standard examples.","Explain ethanol/lactate formation.","Products differ by organism/pathway.","Fermentation has a low ATP yield relative to aerobic respiration."),
      card("Aerobic electron transport uses oxygen as final electron acceptor","Major ATP production pathway in mitochondria in eukaryotes.","Explain aerobic ATP production.","ATP yield depends on model assumptions.","Oxygen is not used directly in glycolysis.")
    ],
    [
      {title:"Compare aerobic and anaerobic outcomes",steps:["Glycolysis converts glucose to pyruvate and yields a small net ATP amount.","Without adequate oxygen-dependent electron transport, fermentation regenerates NAD+ so glycolysis can continue.","With aerobic conditions, pyruvate oxidation and the Krebs/electron-transport pathways yield much more energy and produce CO2 and water overall.","State the pathway and organism/cell context before listing products."]},
      {title:"Why does a cell need NAD+ regeneration?",steps:["Glycolysis requires NAD+ as an electron acceptor at an oxidation step.","Without regeneration, available NAD+ becomes limited and glycolysis stops.","Fermentation transfers electrons from NADH to an organic intermediate, restoring NAD+.","This permits continued low-yield ATP production even when aerobic respiration is limited."]
    }],
    ["Calling fermentation full oxidation of glucose.","Saying plants only photosynthesise and do not respire.","Locating glycolysis inside the mitochondrion.","Claiming oxygen is directly required for the glycolytic steps."],
    ["Use a pathway table: site, starting material, products and ATP/carrier role. If asked for yield, state which textbook accounting convention is being used."],
    ["Where does glycolysis occur?","Why is oxygen the final electron acceptor important?","What does fermentation regenerate?"],
    ["Glycolysis: glucose breakdown pathway in cytosol.","NADH: reduced electron carrier.","ATP synthase: enzyme using a proton gradient to produce ATP."],
    [q("Does glycolysis require oxygen directly?","No.","It can occur under both aerobic and anaerobic conditions; later pathways differ."),q("Why is fermentation useful when oxygen-dependent respiration is unavailable?","It regenerates NAD+ to keep glycolysis running.","This allows some ATP formation to continue.")]),
  b("Class 11","Plant Growth and Development",
    "Describe growth patterns, developmental phases, dormancy and plant growth regulators through source, effect and context.",
    [
      ["Plant growth and growth phases","Plant growth is a lasting increase in size/dry mass and commonly occurs in meristematic regions. Cell division, elongation and differentiation contribute to development. Growth curves often show lag, rapid and stationary phases under given conditions. Rate depends on water, mineral supply, temperature, light and genetic/developmental context. A single hormone rarely explains every response in every tissue."],
      ["Auxins, gibberellins and cytokinins","Auxins promote cell elongation in relevant contexts and participate in apical dominance/tropic responses. Gibberellins can promote stem elongation, seed germination and other developmental changes. Cytokinins promote cell division and can influence shoot development and delay some aspects of senescence. Their effects depend on concentration, tissue and interaction with other signals."],
      ["ABA, ethylene and developmental responses","Abscisic acid is associated with stress responses, including stomatal closure and seed dormancy in the common teaching model. Ethylene is a gaseous plant hormone important in fruit ripening and aspects of senescence/stress responses. Photoperiod, vernalisation and environmental cues can affect flowering. Distinguish a growth regulator from a nutrient: hormone signals coordinate processes; minerals provide essential elements."]
    ],
    [
      card("Auxin: elongation/tropic response in appropriate tissues","Plant growth-regulator summary.","Explain differential growth or apical dominance.","Hormone concentration/context matters.","Do not assign every plant response to auxin alone."),
      card("Gibberellin: stem elongation and seed-germination roles","Developmental regulator.","Match regulator to typical effect.","Context-dependent effect.","Different species/tissues can respond differently."),
      card("Cytokinin: cell division; ABA: stress/dormancy; ethylene: fruit ripening","High-yield regulator comparison.","Answer hormone-function questions.","No single numerical formula.","Learn the common role plus the process it influences.")
    ],
    [
      {title:"Explain dormancy during stress",steps:["Environmental cues and hormonal balance influence whether a seed remains dormant or begins germination.","ABA is commonly associated with maintenance of dormancy and stress responses in the textbook account.","Favourable conditions and appropriate signals can support germination.","State the species/condition if the question supplies it, because responses are context-dependent."]},
      {title:"Explain a tropic response",steps:["A stimulus such as directional light is detected.","Growth-regulator distribution/activity differs across sides of the organ.","Cells elongate or grow at different rates.","The organ curves in relation to stimulus direction; describe positive/negative tropism correctly."]
    }],
    ["Treating a hormone as having one universal effect in all tissues.","Confusing plant nutrients with growth regulators.","Saying ABA always causes growth promotion.","Ignoring interactions between hormones and environmental conditions."],
    ["Create a regulator-effect table and practise linking the hormone, tissue/process and observed response. Use precise wording such as 'associated with' where effects depend on context."],
    ["Which hormone is associated with fruit ripening?","What is one common role of cytokinins?","How can auxin contribute to phototropism?"],
    ["Tropism: directional growth response.","Dormancy: temporary state of reduced growth/metabolic activity.","Vernalisation: flowering response influenced by prolonged cold in appropriate plants."],
    [q("Which regulator is commonly associated with fruit ripening?","Ethylene.","Ethylene has an important role in ripening of many fruits."),q("What does a tropic response mean?","Directional growth in response to a stimulus.","The direction of growth relates to the direction of the stimulus.")]),
  b("Class 11","Digestion and Absorption",
    "Connect digestive organs and enzymes to chemical breakdown, absorption through intestinal surfaces and nutrient assimilation.",
    [
      ["Mechanical and chemical digestion","Food is ingested, moved and mechanically broken up, increasing surface area for enzymes. Salivary amylase begins starch digestion; gastric conditions support protein digestion by pepsin; bile emulsifies fats but is not itself a digestive enzyme. Pancreatic and intestinal enzymes complete digestion in the small intestine. Each enzyme acts on particular substrates and conditions."],
      ["Absorption through the small intestine","The small intestine has folds, villi and microvilli that increase absorptive area. Simple sugars and amino acids generally enter blood capillaries; many digested lipids are packaged into particles that enter lymphatic lacteals before joining the blood. Absorption is transport across the epithelial surface, while assimilation is use by cells. Undigested material proceeds to the large intestine for water/electrolyte handling and eventual egestion."],
      ["Regulation and health context","Digestive secretion and movement are regulated by neural and hormonal signals. The exact nutrient route depends on molecule type and physiology. Enzyme activity can change with pH and temperature; pH differs across mouth, stomach and intestine. Avoid treating every nutrient as absorbed at the same location or transported through the same vessel."]
    ],
    [
      card("Amylase: starch breakdown; proteases: protein breakdown; lipases: fat breakdown","Enzyme-to-substrate roles.","Match digestive enzyme to action.","Substrates are chemically distinct.","Bile emulsifies fat but is not a digestive enzyme."),
      card("Villi/microvilli increase absorptive surface","Intestinal structural adaptation.","Explain efficient nutrient absorption.","Surface area increases.","A larger surface alone does not explain selective transport."),
      card("Absorption != assimilation != egestion","Three different digestive outcomes.","Define digestion stages precisely.","Process terminology.","Excretion refers to metabolic wastes, not undigested food.")
    ],
    [
      {title:"Trace starch digestion",steps:["Salivary amylase begins breaking starch in the mouth.","The stomach's acidic environment reduces salivary amylase activity; gastric protease acts on proteins.","Pancreatic/intestinal enzymes digest remaining carbohydrates in the small intestine.","Simple sugars are absorbed through intestinal epithelium and then assimilated by tissues."]},
      {title:"Distinguish the three outcomes",steps:["Digestion chemically converts large food molecules to smaller absorbable forms.","Absorption moves those molecules across the gut lining into blood or lymph.","Assimilation is cellular use/storage of absorbed nutrients.","Egestion removes undigested material through the digestive tract."]
    }],
    ["Calling bile an enzyme.","Confusing absorption with assimilation.","Saying all absorbed lipids travel immediately through intestinal capillaries in the same way as sugars.","Ignoring the pH conditions of digestive enzymes."],
    ["Use a table of organ, secretion, enzyme/substrate, site and product. Trace food in order and use the exact differences among absorption, assimilation and egestion."],
    ["What does bile do to fat?","Why is the small intestine well suited for absorption?","How is assimilation different from digestion?"],
    ["Emulsification: breaking fat globules into smaller droplets.","Lacteal: lymphatic vessel in an intestinal villus.","Assimilation: incorporation/use of absorbed nutrients by cells."],
    [q("Is bile a digestive enzyme?","No.","It emulsifies fat, increasing surface area for lipase."),q("Which gut structure increases absorptive surface?","Villi and microvilli.","Their extensions provide a much larger epithelial exchange area.")]),
  b("Class 11","Breathing and Exchange of Gases",
    "Explain ventilation, alveolar gas exchange, haemoglobin transport and exchange between blood and tissues.",
    [
      ["Ventilation and pressure differences","Inspiration occurs when thoracic volume increases and intrapulmonary pressure falls below atmospheric pressure; air flows inward. Expiration at rest commonly follows elastic recoil as thoracic volume decreases and pressure rises. The diaphragm and intercostal muscles modify thoracic dimensions. Breathing movements are mechanical ventilation, not the same process as intracellular respiration."],
      ["Alveoli and diffusion","Alveoli offer a large surface area, thin respiratory barrier, moist surface and dense capillary network. Oxygen and carbon dioxide diffuse according to partial-pressure gradients. Oxygen moves from alveolar air into pulmonary blood, while carbon dioxide moves in the opposite direction. Ventilation, perfusion, surface integrity and diffusion distance all affect gas exchange."],
      ["Gas transport and regulation","Haemoglobin reversibly binds much of the oxygen in blood. Carbon dioxide is transported dissolved, bound to proteins and largely as bicarbonate after chemical conversion in blood cells. The respiratory centres and chemical signals help adjust ventilation to the body's gas/pH needs. The exact proportion transported in each form should be learned according to the level/figure in the prescribed text."]
    ],
    [
      card("Ventilation: air movement driven by pressure gradients","Mechanism of breathing.","Explain inspiration and expiration.","Pressure units follow question.","Air moves down a pressure gradient."),
      card("Alveolar diffusion follows partial-pressure gradients","Gas exchange principle.","Explain oxygen/CO2 exchange.","Partial pressure often in kPa or mmHg.","Do not confuse diffusion direction between lungs and tissues."),
      card("Haemoglobin reversibly binds oxygen","Main oxygen-transport role.","Explain why blood carries more oxygen than dissolved plasma alone.","Binding is reversible.","Haemoglobin affinity depends on local conditions.")
    ],
    [
      {title:"Explain oxygen's path from air to tissue",steps:["Ventilation brings air to alveoli.","Oxygen diffuses across the thin alveolar-capillary surface into blood following a partial-pressure gradient.","Haemoglobin carries most oxygen through systemic circulation.","Oxygen diffuses from blood into tissue fluid and cells where partial pressure is lower."]},
      {title:"Compare ventilation and cellular respiration",steps:["Ventilation physically moves air into/out of lungs.","Gas exchange is diffusion between air, blood and tissue.","Cellular respiration is biochemical energy release inside cells.","State which meaning the question asks before naming oxygen consumption or carbon dioxide production."]
    }],
    ["Calling ventilation cellular respiration.","Reversing gas movement between lungs and tissues.","Saying carbon dioxide is transported only dissolved in plasma.","Ignoring the role of a large thin alveolar surface."],
    ["Label the respiratory tract, alveolus and diaphragm. Use partial-pressure language to explain diffusion and distinguish ventilation, external respiration, internal respiration and cellular respiration."],
    ["What drives inspiration at rest?","Why are alveoli efficient for diffusion?","How is most oxygen transported in blood?"],
    ["Ventilation: bulk movement of air.","Partial pressure: contribution of a gas to total pressure.","Haemoglobin: oxygen-binding protein in red blood cells."],
    [q("Does haemoglobin bind oxygen reversibly?","Yes.","Reversible binding allows loading in lungs and unloading in tissues."),q("What determines the net direction of gas diffusion?","Partial-pressure gradient.","A gas diffuses from higher to lower partial pressure across the barrier.")]),
  b("Class 11","Body Fluids and Circulation",
    "Study blood components, heart anatomy, cardiac cycle, circulation, blood pressure and lymph transport.",
    [
      ["Blood and blood groups","Plasma carries dissolved substances; red blood cells contain haemoglobin; white blood cells contribute immune defence; platelets support clotting. Formed elements have distinct functions. ABO blood groups depend on antigens on red blood cells and antibodies in plasma in the standard school model. Actual transfusion safety depends on ABO, Rh and clinical matching; never infer universal compatibility from only one label."],
      ["Heart and circulation","The heart has chambers and valves that support one-way blood flow. The right heart sends blood through pulmonary circulation, while the left heart sends blood into systemic circulation. The conduction system coordinates atrial and ventricular contractions. Arteries carry blood away from the heart and veins toward it; vessel names are defined by direction, not oxygen content."],
      ["Cardiac output, pressure and lymph","Cardiac output is heart rate multiplied by stroke volume. Blood pressure is influenced by cardiac output, vascular resistance and other factors. Capillary exchange allows materials to move between blood and tissues; lymphatic vessels return excess tissue fluid and contribute to immune functions. The circulation is closed in humans, and lung/body routes operate in series through the heart."]
    ],
    [
      card("Cardiac output = heart rate x stroke volume","Volume pumped per minute.","Calculate output from rate/volume values.","For example, beats/min x mL/beat = mL/min.","Do not multiply by time twice if a total duration is also given."),
      card("Artery = away from heart; vein = toward heart","Definition based on direction of flow.","Classify a vessel.","Structural fact.","Pulmonary vessels show why oxygen content is not the definition."),
      card("Pulmonary circulation: heart-lung-heart; systemic: heart-body-heart","Two linked circulation pathways.","Trace blood route.","Process sequence.","Label left/right heart based on anatomical orientation and diagram convention.")
    ],
    [
      {title:"Trace blood through the heart",steps:["Body tissues -> venae cavae -> right atrium -> right ventricle.","Right ventricle sends blood through pulmonary artery to lungs.","Pulmonary veins return oxygenated blood to left atrium -> left ventricle.","Left ventricle sends blood through aorta to systemic tissues."]},
      {title:"Calculate cardiac output",steps:["Given heart rate 72 beats/min and stroke volume 70 mL/beat.","Cardiac output=72x70=5040 mL/min.","Convert to 5.04 L/min if requested.","The value is an estimate under the stated resting conditions."]
    }],
    ["Defining arteries and veins by oxygen content.","Reversing pulmonary artery and pulmonary vein roles.","Forgetting that valves prevent backflow.","Treating cardiac output and stroke volume as the same quantity."],
    ["Use the blood-flow sequence and label all valves/vessels. For number questions, carry units in cardiac output and blood-pressure calculations."],
    ["Which side of the heart pumps to the lungs?","What is cardiac output?","What is the function of lymphatic return?"],
    ["Stroke volume: blood pumped by a ventricle per beat.","Cardiac output: blood pumped per unit time.","Lymph: fluid returned through lymphatic vessels."],
    [q("Do arteries always carry oxygen-rich blood?","No.","Arteries are defined as vessels carrying blood away from the heart."),q("Calculate output at 80 beats/min and 60 mL/beat.","4800 mL/min or 4.8 L/min.","Multiply heart rate by stroke volume.")]),
  b("Class 11","Excretory Products and Their Elimination",
    "Explain nephron anatomy, filtration, selective reabsorption, tubular secretion, urine concentration and hormonal regulation.",
    [
      ["Excretory products and organs","Metabolism produces wastes that must be eliminated or regulated. Nitrogenous waste forms differ among organisms and relate to water availability/toxicity. In humans, kidneys filter blood and regulate water, ions and acid-base balance; lungs remove carbon dioxide and skin can excrete small amounts of water/salts. Excretion is different from egestion of undigested food."],
      ["Urine formation","Glomerular filtration moves water and small solutes from blood into Bowman's capsule under pressure. Selective tubular reabsorption returns useful substances, ions and water to blood; tubular secretion moves some substances into the filtrate. The proximal tubule, loop of Henle, distal tubule and collecting duct make distinct contributions. Final urine composition differs substantially from initial filtrate."],
      ["Concentration and regulation","The loop of Henle and medullary osmotic gradient help concentrate urine. ADH increases water permeability in the collecting duct, conserving water when appropriate; aldosterone influences sodium reabsorption and potassium handling in relevant segments. Kidney function is integrated with circulation and hormonal control. Explain the route and the effect rather than memorising isolated hormone names."]
    ],
    [
      card("Filtration -> selective reabsorption -> secretion -> urine","High-level renal pathway.","Explain how filtrate becomes urine.","Concentration varies with hydration/physiology.","Not every filtered molecule is excreted."),
      card("ADH increases collecting-duct water permeability","Hormone role in water conservation.","Explain concentrated vs dilute urine in the standard model.","Regulatory hormone.","More water reabsorption generally lowers urine volume."),
      card("Nephron: glomerulus/Bowman's capsule plus tubule and collecting pathways","Functional kidney unit.","Label the nephron diagram.","Anatomical fact.","Different nephron regions have different roles.")
    ],
    [
      {title:"Trace filtrate through a nephron",steps:["Blood is filtered at the glomerulus into Bowman's capsule.","The proximal tubule reabsorbs a large fraction of water/solutes useful to the body.","Loop, distal tubule and collecting duct contribute to further concentration and regulation.","The final urine leaves through collecting ducts and urinary passages; the blood retains reabsorbed material."]},
      {title:"Respond to dehydration",steps:["Osmoregulatory responses increase ADH release in the standard account.","Collecting-duct water permeability increases and more water returns to blood.","Urine volume generally decreases and urine becomes more concentrated.","The exact response depends on the body's hormonal and kidney state."]
    }],
    ["Calling the first filtrate final urine.","Claiming all glucose in filtrate is normally excreted in healthy kidneys.","Confusing ADH with aldosterone.","Saying excretion and egestion are synonyms."],
    ["Label nephron regions and connect each to filtration/reabsorption/secretion. Compare nitrogenous wastes and their water/toxicity trade-offs as taught in the prescribed chapter."],
    ["Where does filtration begin?","What does ADH do to water reabsorption?","How is excretion different from egestion?"],
    ["Glomerulus: capillary tuft for filtration.","Tubular secretion: transfer from blood into the tubule.","Osmoregulation: regulation of water/solute balance."],
    [q("What is the initial step of urine formation?","Glomerular filtration.","Water and small solutes enter Bowman's capsule from glomerular blood."),q("What is the typical effect of ADH on urine volume?","It reduces volume by promoting water reabsorption.","More collecting-duct water permeability returns water to blood.")]),
  b("Class 11","Locomotion and Movement",
    "Connect skeletal, smooth and cardiac muscles to contractile filaments, joints, bones and neural control of movement.",
    [
      ["Muscle types and structure","Skeletal muscle is striated and generally under voluntary control; smooth muscle is non-striated and common in walls of internal organs; cardiac muscle is striated, branched and specialised for rhythmic contraction. Muscle fibres contain myofibrils with repeating sarcomeres. Actin and myosin interactions produce contraction under calcium and regulatory-protein control."],
      ["Sliding-filament model","During contraction, thin filaments slide relative to thick filaments; the filaments themselves do not shorten in the standard model. Cross-bridge cycling uses ATP. Calcium exposes binding sites through regulatory proteins, allowing myosin-head interaction with actin. Sarcomere bands change as overlap changes, which explains the labelled diagram and why energy is required both for contraction cycling and relaxation/ion pumping."],
      ["Skeleton, joints and movement","Bones support/protect, store minerals and provide levers; joints permit movement and may be fibrous, cartilaginous or synovial. Tendons connect muscle to bone and ligaments connect bones at joints in the standard distinction. Antagonistic muscle pairs pull in opposite directions, because a contracting muscle produces force but does not push the attached bone actively in the opposite way."]
    ],
    [
      card("Actin + myosin cross-bridge cycling uses ATP","Molecular basis of muscle contraction.","Explain sarcomere changes and energy use.","ATP is hydrolysed during the cycle.","Thin/thick filaments slide; they do not themselves shorten in the standard model."),
      card("Tendon: muscle-to-bone; ligament: bone-to-bone","Connective tissue distinction.","Label joint/muscle diagrams.","Anatomical fact.","Do not swap tendon and ligament."),
      card("Antagonistic pair: one muscle contracts while partner relaxes for opposite action","Movement-control pattern.","Explain elbow flexion/extension examples.","Physiological relation.","Muscles create pulling force, not an active push.")
    ],
    [
      {title:"Explain arm flexion and extension",steps:["During flexion, the biceps contracts and the triceps relaxes in the typical example.","During extension, the triceps contracts and biceps relaxes.","The forearm moves around the elbow joint as muscles pull on bones via tendons.","State which muscle contracts for the direction of movement."]},
      {title:"Explain why ATP is required",steps:["ATP supports cross-bridge cycling between myosin and actin.","ATP binding helps myosin detach; hydrolysis energises the head for another cycle.","Calcium-handling pumps also use energy to reset the muscle fibre.","Therefore contraction/relaxation are energy-dependent processes."]
    }],
    ["Saying filaments shrink during contraction.","Confusing tendon with ligament.","Treating all muscle tissue as voluntary striated muscle.","Forgetting that ATP is required for cross-bridge cycling and ion pumping."],
    ["Compare the three muscle types, label the sarcomere and explain antagonistic action through who contracts/relaxes."],
    ["What do tendons connect?","What changes in the sliding-filament model?","Why are some muscles antagonistic?"],
    ["Sarcomere: repeating contractile unit of striated muscle.","Tendon: connects muscle to bone.","Ligament: connects bones at a joint."],
    [q("Which protein pair is central to the sliding-filament model?","Actin and myosin.","Their interaction and relative sliding generate contraction."),q("Do ligaments mainly connect muscle to bone?","No.","Tendons connect muscle to bone; ligaments connect bones.")]),
  b("Class 11","Neural Control and Coordination",
    "Explain neuronal signalling, action potentials at a simplified level, synapses, CNS/PNS organisation and sensory systems.",
    [
      ["Neuron structure and impulse conduction","Dendrites and cell body receive/integrate inputs; the axon conducts action potentials; terminal branches communicate with target cells. An action potential is a rapid change in membrane potential caused by ion movements through channels. Myelin supports saltatory conduction in myelinated fibres, where the signal is regenerated at nodes of Ranvier."],
      ["Synapses and nervous-system organisation","At a chemical synapse, an arriving action potential triggers neurotransmitter release, which crosses the cleft and binds receptors on the target membrane. The response may excite or inhibit the next cell. The central nervous system includes brain and spinal cord; peripheral nerves link it to receptors, muscles and organs. Autonomic pathways help regulate involuntary functions."],
      ["Sensory reception and integration","Receptors convert a stimulus into a signal. The brain integrates multiple inputs and can influence motor output, sensory perception and behaviour. Reflex pathways provide rapid responses but do not mean the brain is uninformed. In diagrams, trace signal direction and identify afferent/sensory versus efferent/motor pathways."]
    ],
    [
      card("Dendrite/cell body receive; axon conducts; terminals transmit","Neuron organisation.","Label neuron and explain direction.","Anatomical/function sequence.","The exact neuron shape differs by class."),
      card("Chemical synapse uses neurotransmitter across synaptic cleft","Common synaptic process.","Explain transmission between neurons.","Chemical signal at cleft.","The cleft is not a continuous electrical wire."),
      card("Sensory/afferent -> CNS; motor/efferent -> effector","Signal direction labels.","Trace a reflex or sensory pathway.","Direction terms.","Afferent/efferent are defined relative to the CNS.")
    ],
    [
      {title:"Trace a reflex pathway",steps:["A receptor detects the stimulus.","A sensory/afferent neuron carries the input toward spinal cord/central nervous system.","A local circuit activates motor/efferent output.","An effector, such as a muscle, produces the response; the brain can also receive the signal."]},
      {title:"Explain myelin",steps:["Myelin insulates sections of an axon in a myelinated fibre.","Action potentials are regenerated at nodes of Ranvier.","This saltatory conduction increases conduction speed in the standard model.","It does not mean the signal literally jumps without ion-channel activity."]
    }],
    ["Calling the synapse gap an electrical connection only.","Swapping sensory and motor neuron direction.","Saying all responses require conscious thought before action.","Confusing CNS and PNS."],
    ["Know neuron diagrams, CNS/PNS divisions, synapse events and reflex pathway labels. Use direction words (towards/away from CNS) to prevent afferent/efferent confusion."],
    ["What crosses a typical chemical synaptic cleft?","Which structures form the CNS?","What is the role of a receptor?"],
    ["Action potential: rapid change in membrane potential that propagates along an excitable membrane.","Afferent: carries information toward CNS.","Efferent: carries commands away from CNS."],
    [q("Which neuron carries signals from a receptor to CNS?","Sensory/afferent neuron.","It carries the incoming sensory signal."),q("What is the main role of myelin in a myelinated axon?","Improve conduction speed through saltatory conduction.","The signal is regenerated at nodes rather than continuously along every membrane segment.")]),
  b("Class 11","Chemical Coordination and Integration",
    "Connect endocrine glands, hormones, feedback and target receptors to homeostasis, metabolism, growth and reproduction.",
    [
      ["Endocrine signalling","Endocrine glands release hormones into blood; hormones act on target cells with compatible receptors. Unlike a nerve impulse, hormonal signalling often reaches a broader distribution of tissues and can persist longer. Hormone class, solubility and receptor location affect how a cell responds, but all hormones do not act identically."],
      ["Feedback and homeostasis","Negative feedback counteracts a deviation from a regulated range; examples include endocrine regulation of glucose and thyroid hormones. Positive feedback amplifies a process in specific cases rather than being the default homeostatic loop. The hypothalamus links nervous and endocrine regulation, while pituitary hormones influence several endocrine glands. Write the sequence of signal, target, effect and feedback."],
      ["Major glands and effects","The thyroid affects metabolic regulation; pancreas releases insulin and glucagon for blood-glucose regulation; adrenal glands contribute stress and salt/water responses; gonads produce sex hormones; parathyroid hormone contributes to calcium balance. The precise release, target and response should be learned from the prescribed table. Hormone levels respond to context, so avoid treating them as independent fixed switches."]
    ],
    [
      card("Negative feedback reduces the original deviation","Common regulatory architecture.","Explain a homeostatic hormone loop.","Process concept.","Not every biological loop is negative feedback."),
      card("Insulin tends to lower blood glucose; glucagon tends to raise it","Opposing pancreatic regulatory roles.","Explain response to increased/decreased glucose.","Physiological relation.","Exact effects depend on the body state and target tissue."),
      card("Hormones act on target cells with appropriate receptors","Basis of target specificity.","Explain why tissues respond differently.","Concentration/context dependent.","A hormone does not necessarily affect every cell equally.")
    ],
    [
      {title:"Explain a negative-feedback response",steps:["A regulated variable deviates from its normal range.","Sensors/control centres detect the change and alter hormone output.","The hormone acts on target tissues to oppose the deviation.","As the variable returns toward its range, the stimulus for the corrective response falls."]},
      {title:"Compare insulin and glucagon",steps:["Insulin is released by pancreatic beta cells in response to elevated blood glucose in the standard account.","It promotes uptake/storage processes that lower blood glucose.","Glucagon supports raising blood glucose under low-glucose conditions.","Describe their opposing roles without claiming they act identically in every tissue."]
    }],
    ["Confusing endocrine glands with exocrine glands.","Calling every feedback loop negative.","Swapping the direction of insulin and glucagon effects.","Memorising hormone names without their source/target/effect."],
    ["Use an endocrine table with gland, hormone, target/effect and feedback relationship. Distinguish hormone origin from where it acts."],
    ["What is a target cell?","How does negative feedback differ from positive feedback?","Which pancreatic hormones have opposing glucose effects?"],
    ["Endocrine: hormone-secreting tissue releasing into internal fluids/blood.","Target cell: cell that responds through a suitable receptor.","Homeostasis: regulated stability of internal conditions."],
    [q("What is a target cell?","A cell with receptors/response machinery for the hormone.","Hormone presence alone does not guarantee response in every cell."),q("What does negative feedback usually do?","Opposes the initial deviation.","The corrective response reduces the signal that triggered it.")]),
  b("Class 12","Sexual Reproduction in Flowering Plants",
    "Follow anther/ovule development, pollination, pollen-tube growth, double fertilisation and seed/fruit formation.",
    [
      ["Male and female reproductive structures","Anthers contain microsporangia where microspore mother cells undergo meiosis to produce haploid microspores; these develop into pollen grains. Ovules contain the megasporangium/nucellus and integuments; a functional megaspore develops into the embryo sac in the standard account. Diagrams require precise labels: anther, pollen sac, stigma, style, ovary, ovule, micropyle and embryo sac."],
      ["Pollination and compatibility","Pollination transfers pollen to a receptive stigma. Self-pollination and cross-pollination differ by the relationship between source and recipient flowers/plants. Pollination agents include wind, water and animals; floral traits can reflect adaptations to these vectors. Outbreeding devices and self-incompatibility reduce selfing in some plants and can promote genetic variation."],
      ["Double fertilisation and post-fertilisation","A compatible pollen grain germinates and a pollen tube grows toward the ovule, delivering male gametes. One male gamete fuses with the egg (syngamy) to produce the diploid zygote. The other participates in triple fusion with the central cell nuclei, forming the primary endosperm nucleus (typically triploid in the standard model). The zygote develops into embryo, ovule into seed and ovary commonly into fruit."]
    ],
    [
      card("Microsporogenesis: meiosis -> haploid microspores","Male-side spore formation.","Explain pollen development.","Ploidy changes from 2n mother cell to n products.","Microspores are not sperm cells yet."),
      card("Syngamy: male gamete + egg -> diploid zygote","First fertilisation event.","Explain embryo formation.","Ploidy: n+n=2n.","Use the term for gamete fusion producing the zygote."),
      card("Triple fusion: second male gamete + central-cell nuclei -> primary endosperm nucleus","Second fusion event in typical angiosperm double fertilisation.","Explain endosperm origin.","Often 3n in the typical textbook case.","Do not say both male gametes fuse with the egg."),
      card("Ovule -> seed; ovary -> fruit in the standard pattern","Post-fertilisation development.","Label the flower-to-seed sequence.","Developmental relation.","Some fruit tissues can include accessory floral parts.")
    ],
    [
      {title:"Sequence from pollen to seed",steps:["Pollen reaches compatible stigma and germinates.","The pollen tube grows through the style and into the ovule.","One male gamete fuses with the egg; the other participates in triple fusion.","Embryo and endosperm develop; the ovule becomes a seed and the ovary commonly becomes fruit."]},
      {title:"Distinguish pollination and fertilisation",steps:["Pollination is transfer of pollen to the stigma.","Compatibility, germination and tube growth follow as needed.","Fertilisation is gamete fusion inside the ovule.","A diagram question may show pollen on the stigma before any zygote has formed."]
    }],
    ["Confusing syngamy and triple fusion.","Saying pollination is fertilisation.","Counting the ovary as the seed-forming structure rather than ovule.","Ignoring pollen-tube growth between pollination and fertilisation."],
    ["Memorise micro/megaspore formation, embryo-sac labels, pollination types, double-fertilisation products and seed/fruit mapping. Use exact NCERT names for the embryo sac structures."],
    ["What are the products of the two angiosperm fusion events?","Where does pollen-tube growth begin?","What develops from an ovule?"],
    ["Microsporogenesis: formation of microspores by meiosis.","Syngamy: fusion of male gamete and egg.","Endosperm: tissue that nourishes embryo development."],
    [q("What are the two fertilisation-related events in angiosperms?","Syngamy and triple fusion.","They form the zygote and the primary endosperm nucleus, respectively."),q("Does pollen on a stigma prove fertilisation has occurred?","No.","Pollen germination and pollen-tube growth normally occur before gametes fuse.")]),
  b("Class 12","Human Reproduction",
    "Connect gametogenesis, reproductive anatomy, endocrine control, fertilisation, implantation, pregnancy and lactation.",
    [
      ["Gametogenesis and anatomy","Spermatogenesis occurs in seminiferous tubules and includes multiplication, growth, meiosis and differentiation. Oogenesis begins before birth in humans and involves meiotic arrests; typically one functional ovum is produced from a primary oocyte, with polar bodies. Sperm production and ovulatory cycles differ in timing and output. Learn the labelled male/female reproductive anatomy and keep gamete formation separate from gamete transport."],
      ["Hormonal regulation and menstrual cycle","The hypothalamic-pituitary-gonadal axis coordinates reproductive function through GnRH, FSH, LH and gonadal hormones in the standard model. Follicular development precedes ovulation; post-ovulatory corpus-luteum hormones influence the uterine lining. Hormone levels vary over the cycle, so questions often ask for sequence and relationship rather than a single fixed value."],
      ["Fertilisation, implantation and pregnancy","Fertilisation usually occurs in the oviduct. The zygote undergoes cleavage, forms an early embryo/blastocyst and implants in the uterine lining. Placental tissues support exchange of oxygen, nutrients and wastes between maternal and fetal circulations without normally mixing the two blood supplies directly. Placenta is also an endocrine structure; pregnancy and childbirth involve coordinated hormonal and physiological events."]
    ],
    [
      card("Haploid sperm + haploid ovum -> diploid zygote","Fertilisation restores diploidy.","Explain chromosome number across generations.","Ploidy n+n=2n.","Gametes are haploid in the standard sexual reproduction account."),
      card("FSH/LH and gonadal hormones coordinate gametogenesis and cycle events","Simplified endocrine sequence.","Label hormone-stage relationships.","Hormone concentrations vary over time.","Avoid treating one hormone as independently controlling every event."),
      card("Fertilisation usually occurs in oviduct; implantation occurs in uterus","High-yield location distinction.","Order human reproductive events.","Anatomical fact.","These are distinct stages and sites.")
    ],
    [
      {title:"Trace human development",steps:["Gametes form through reproductive processes including meiosis.","Sperm and ovum meet and fertilisation forms the zygote, usually in the oviduct.","Cleavage produces an early embryo that reaches the uterus and implants.","The placenta supports exchange and hormone production during pregnancy."]},
      {title:"Compare spermatogenesis and oogenesis",steps:["Spermatogenesis typically produces multiple functional sperm from a primary spermatocyte through meiotic/division stages.","Oogenesis has unequal cytoplasmic division and typically one functional ovum plus polar bodies.","Both involve meiosis and produce haploid gametes.","State developmental timing differences as taught in the prescribed text."]
    }],
    ["Confusing ovulation, fertilisation and implantation.","Saying gametes are diploid.","Mixing ovarian and uterine cycle events.","Assuming placenta means maternal and fetal blood always mix directly."],
    ["Use the reproductive-system diagrams and hormone-cycle graph. For sequence questions, label the organ and stage separately so fertilisation and implantation are not conflated."],
    ["Where does human fertilisation usually occur?","How does meiosis affect gamete ploidy?","What is one function of the placenta?"],
    ["Gametogenesis: formation of gametes.","Ovulation: release of an oocyte from the ovary.","Implantation: attachment of the early embryo to uterine lining."],
    [q("Where does implantation normally occur?","Uterine lining.","The early embryo implants in the endometrium."),q("Why are polar bodies formed in oogenesis?","Unequal cytoplasmic division helps retain most cytoplasm in the functional ovum.","Meiotic products differ greatly in cytoplasmic content.")]),
  b("Class 12","Reproductive Health",
    "Review reproductive health, contraception, infertility support, prenatal care, sexually transmitted infections and informed decision-making.",
    [
      ["Meaning of reproductive health","Reproductive health includes physical, emotional and social well-being related to reproduction, not just absence of disease. It involves accurate education, informed consent, access to care, maternal health, contraception, prevention/management of infections and protection from coercion or stigma. Medical facts should be handled without shame or judgement."],
      ["Contraceptive methods","Barrier methods reduce sperm entry and some also reduce STI transmission risk. Hormonal methods alter reproductive hormone patterns; intrauterine devices have their own mechanisms; permanent methods involve sterilisation. Effectiveness depends on method and correct/consistent use. Not all contraceptive methods prevent infections, so pregnancy prevention and STI prevention must be considered separately."],
      ["Infertility, assisted reproduction and STIs","Infertility can have many causes and may be evaluated medically; assisted reproductive technologies may support fertilisation or embryo transfer under clinical supervision. STIs differ in cause, transmission, symptoms and treatment; some can be asymptomatic. Evidence-based testing, prevention and clinician-directed treatment are more reliable than symptom-based guessing."]
    ],
    [
      card("Barrier method: reduces sperm passage; condoms also reduce STI transmission risk","Method and protection role.","Compare contraceptive methods.","Clinical effectiveness depends on use.","Do not imply every method protects from STIs."),
      card("Contraception, STI prevention and infertility care are distinct goals","Decision-making distinction.","Answer method-selection questions.","Conceptual classification.","A method appropriate for one goal may not address the others.")
    ],
    [
      {title:"Compare two contraceptive options",steps:["Identify the method category and its mechanism.","State whether the primary purpose is pregnancy prevention, STI risk reduction or both.","Mention correct/consistent use and relevant limitations.","Avoid claims of perfect protection and use current professional guidance for real-world decisions."]},
      {title:"Respond to a possible STI exposure",steps:["Do not infer a specific infection from one symptom or from lack of symptoms.","Seek confidential testing and care through a qualified health provider.","Follow evidence-based treatment and partner/public-health guidance where advised.","Distinguish educational facts from personalised medical diagnosis."]
    }],
    ["Claiming all contraceptives prevent STIs.","Saying infertility has only one cause.","Treating an STI symptom as definitive diagnosis.","Using stigmatising language or implying reproductive health is only biological."],
    ["Learn the mechanism and limitation of each method category. Keep reproductive autonomy, informed consent and access to evidence-based care central in application questions."],
    ["Which common contraceptive method also lowers STI transmission risk?","Why is STI testing important even without symptoms?","What broad domains does reproductive health include?"],
    ["Contraception: measures to reduce the likelihood of pregnancy.","STI: sexually transmitted infection.","ART: assisted reproductive technology."],
    [q("Does every contraceptive method protect against STIs?","No.","Barrier methods such as condoms can reduce STI risk; many other methods only address pregnancy."),q("Can an STI be present without obvious symptoms?","Yes.","Some infections may be asymptomatic, so testing and clinical guidance matter.")]),
  b("Class 12","Principles of Inheritance and Variation",
    "Use Mendelian segregation, independent assortment, linkage, sex-linked inheritance, pedigree logic and sources of variation.",
    [
      ["Mendel's laws and probability","Alleles segregate into gametes during meiosis; a gamete usually receives one allele of a pair. Independent assortment describes inheritance of different gene pairs when they assort independently, commonly for genes unlinked or sufficiently far apart. Use Punnett squares or probability trees and remember offspring ratios describe expected probabilities across repeated trials, not exact guarantees."],
      ["Beyond simple dominance","Incomplete dominance produces an intermediate heterozygote phenotype in the standard example; codominance expresses both alleles; multiple alleles and pleiotropy add complexity. Genotype ratios and phenotype ratios differ depending on inheritance. A trait's prevalence is not implied by dominance. For a pedigree, establish possible genotypes then test each against all family relationships."],
      ["Linkage, sex-linked traits and variation","Linked genes on the same chromosome may be inherited together more often than independent assortment predicts; crossing over can recombine linked alleles. X-linked patterns differ because sex chromosomes are not identical. Mutation creates new alleles, while recombination reshuffles existing variation. Explain the evidence and inheritance assumption rather than applying a 3:1 ratio to every genetic problem."]
    ],
    [
      card("Aa x Aa: genotype ratio 1 AA:2 Aa:1 aa","Simple monohybrid cross under Mendelian assumptions.","Compute genotype probabilities.","Probabilities are dimensionless.","Phenotype ratio depends on dominance pattern."),
      card("Independent events: multiply probabilities for a joint outcome","Probability rule in independent gamete transmission.","Solve multi-gene crosses under independence assumptions.","Dimensionless.","Check whether genes are linked before assuming independent assortment."),
      card("Crossing over creates recombinant chromosome combinations","Meiotic source of variation.","Explain linkage/recombination data.","Genetic process.","Linked genes are not absolutely unable to recombine.")
    ],
    [
      {title:"Dihybrid probability using independent assortment",steps:["For each heterozygous parent AaBb, gamete types AB, Ab, aB and ab occur at equal probability in the standard independent-assortment model.","Treat each locus as a separate probability problem if events are independent.","For a specified genotype, multiply the required allele-transmission probabilities.","State the unlinked/independent assumption; if linkage is supplied, a different approach is needed."]},
      {title:"Pedigree approach",steps:["List the phenotype/genotype constraints from each generation.","Determine which genotypes could produce the observed child/parent combinations.","Apply the inheritance model (dominant/recessive, autosomal/sex-linked) consistently.","Check every branch of the pedigree rather than relying on one family pair."]
    }],
    ["Assuming all genes assort independently.","Confusing dominant phenotype with dominant allele frequency.","Treating incomplete dominance as a 3:1 phenotype ratio automatically.","Ignoring the sex-chromosome context in X-linked patterns."],
    ["Show gametes and probabilities. In pedigrees, justify each genotype using the whole family; state linkage/independence assumptions explicitly."],
    ["What is incomplete dominance?","How can crossing over affect linked genes?","Why are Punnett ratios not exact guarantees in small families?"],
    ["Linkage: tendency of genes on the same chromosome to be inherited together.","Pleiotropy: one gene affects multiple traits.","Pedigree: diagram showing inheritance pattern in a family."],
    [q("What is the expected genotype ratio for Aa x Aa?","1:2:1.","The equally likely combinations are AA, Aa, aA and aa."),q("Does a dominant allele have to be common?","No.","Dominance describes heterozygote expression, not allele prevalence.")]),
  b("Class 12","Molecular Basis of Inheritance",
    "Explain DNA structure/replication, transcription, translation, genetic code, gene regulation and molecular evidence for heredity.",
    [
      ["DNA structure and replication","DNA is made of nucleotide chains with sugar-phosphate backbones and complementary bases. Semi-conservative replication produces daughter DNA molecules with one parental and one newly synthesised strand. Helicase separates strands; primers initiate synthesis; DNA polymerases extend new DNA 5-prime to 3-prime. Leading-strand synthesis is continuous, while the lagging strand is made in fragments that must be joined."],
      ["Transcription, processing and translation","Transcription copies sequence information from a DNA template into RNA. Eukaryotic primary transcripts undergo processing, including splicing and end modifications in the standard account. Ribosomes translate mRNA codons; tRNA anticodons pair with codons and deliver amino acids. The reading frame determines codon grouping; an insertion/deletion not in multiples of three can shift the frame."],
      ["Genetic code and regulation","The genetic code is degenerate (many codons can encode the same amino acid), nearly universal at the usual teaching level and read in non-overlapping triplets in standard translation. Start/stop signals organise translation. Mutations can be silent, missense, nonsense or frameshift depending on context. Gene expression is regulated; a classic operon model demonstrates how regulatory proteins and environmental signals influence transcription."]
    ],
    [
      card("DNA replication is semi-conservative","Each daughter double helix contains one old and one new strand.","Explain replication model.","Molecular process.","Do not say one daughter is all old and one is all new."),
      card("DNA polymerase extends 5-prime -> 3-prime","Direction of new DNA synthesis.","Explain leading/lagging strands.","Direction convention.","Template strands run antiparallel."),
      card("Codon: three-base mRNA unit","Defines amino acid/stop signal in translation.","Decode an mRNA sequence.","Three nucleotides per codon.","Read in the correct frame and from 5-prime to 3-prime."),
      card("PCR: denaturation -> primer annealing -> extension","Amplifies a target DNA sequence.","Explain DNA amplification technology.","Temperature-controlled cycles.","Primers define the target boundaries.")
    ],
    [
      {title:"Trace information from gene to protein",steps:["DNA template is transcribed to RNA by RNA polymerase.","In eukaryotes, primary RNA may be processed into mature mRNA.","Ribosomes read mRNA codons; tRNAs bring matching amino acids.","A polypeptide is produced and then folds/modifies to become functional protein."]},
      {title:"Interpret a frameshift",steps:["An insertion/deletion changes the number of bases in the coding sequence.","If the change is not a multiple of three, codon grouping downstream can shift.","The resulting amino-acid sequence and stop position may change substantially.","Not every mutation is harmful; impact depends on location, reading frame and biological context."]
    }],
    ["Confusing transcription and translation.","Reversing DNA synthesis direction.","Assuming every mutation changes the amino-acid sequence.","Reading codons from the wrong frame."],
    ["Learn replication enzyme roles, strand direction, codon concepts and transcription/translation locations. Use a codon table carefully and do not infer phenotype without enough information."],
    ["What is semi-conservative replication?","What does a tRNA anticodon recognise?","What is one consequence of a frameshift mutation?"],
    ["Transcription: RNA synthesis from a template.","Translation: polypeptide synthesis using mRNA.","Frameshift: change in reading frame caused by a non-triplet insertion/deletion."],
    [q("What enzyme seals adjacent DNA fragments?","DNA ligase.","It joins compatible DNA ends and seals nicks."),q("Does every substitution mutation alter a protein?","No.","A substitution may be synonymous or lie in a region that does not change the protein sequence.")]),
  b("Class 12","Evolution",
    "Explain evidence for evolution, variation, natural selection, genetic drift, gene flow, Hardy-Weinberg equilibrium and speciation.",
    [
      ["Evidence and common ancestry","Fossils provide time-ordered evidence of past organisms; homologous structures support common ancestry, while analogous structures can arise under similar selection pressures. Molecular sequence similarities provide another evidence stream. Biogeography and observed evolutionary change contribute to inference. A single piece of evidence may not answer every question, so connect the observation to the evolutionary conclusion."],
      ["Mechanisms that change populations","Mutation introduces new alleles; recombination creates new combinations; gene flow moves alleles between populations; genetic drift changes frequencies through chance sampling, especially in small populations; natural selection causes differential reproductive success among heritable variants. Fitness means relative reproductive contribution under a given environment, not physical strength or moral worth."],
      ["Hardy-Weinberg and speciation","For two alleles with frequencies p and q, p+q=1 and equilibrium genotype proportions are p^2, 2pq and q^2 under assumptions such as a large population, random mating and no selection, migration or mutation. Deviations can signal evolutionary forces or violated assumptions. Speciation involves reduced gene flow/reproductive isolation through different mechanisms and timescales."]
    ],
    [
      card("p+q=1; p^2+2pq+q^2=1","Hardy-Weinberg allele/genotype relations for two alleles.","Estimate genotype frequencies under equilibrium assumptions.","p,q are dimensionless frequencies.","Distinguish allele frequency q from recessive phenotype frequency q^2."),
      card("Natural selection changes heritable population traits across generations","Mechanism of adaptation in populations.","Explain differential reproductive success.","Generational process.","Individuals do not evolve because they intentionally need a trait."),
      card("Genetic drift: random allele-frequency change","Chance sampling, stronger in small populations.","Explain bottleneck/founder effects.","Population process.","Drift does not require a trait to be advantageous.")
    ],
    [
      {title:"Hardy-Weinberg genotype frequencies",steps:["If recessive phenotype frequency is q^2=0.09, calculate q=sqrt(0.09)=0.3 under the model.","Then p=1-q=0.7.","Heterozygote frequency is 2pq=2(0.7)(0.3)=0.42.","State equilibrium assumptions before interpreting this as a population estimate."]},
      {title:"Explain selection",steps:["Identify heritable variation in the population.","Describe how the environment changes survival/reproductive success among variants.","Those variants contribute unequal numbers of descendants.","Over generations, allele/trait frequencies can change; no individual consciously changes its genes to meet a need."]
    }],
    ["Using q rather than q^2 for a recessive phenotype frequency.","Calling genetic drift a non-random fitness advantage.","Saying organisms evolve because they need a trait.","Treating Hardy-Weinberg assumptions as automatically true in nature."],
    ["For equilibrium problems, establish whether the given value is allele, genotype or phenotype frequency. For mechanism questions, separate mutation, recombination, drift, gene flow and selection."],
    ["What is gene flow?","Which assumptions define Hardy-Weinberg equilibrium?","How does natural selection differ from genetic drift?"],
    ["Genetic drift: random frequency change.","Fitness: relative reproductive contribution in an environment.","Speciation: formation of distinct species through reproductive/evolutionary separation."],
    [q("If q^2=0.16 at equilibrium, what is q?","0.4.","Take the positive square root for an allele frequency."),q("Does genetic drift depend on an allele being beneficial?","No.","It is caused by chance sampling, particularly in small populations.")]),
  b("Class 12","Human Health and Disease",
    "Compare pathogens, innate/adaptive immunity, antibodies, vaccination, immune memory, cancer and substance-use risks.",
    [
      ["Pathogens and transmission","Infectious diseases are caused by pathogens including viruses, bacteria, fungi, protozoa and helminths; routes vary by agent and environment. Prevention should match the route, such as clean water, sanitation, vaccination, vector control or barrier protection. A symptom alone rarely identifies a pathogen reliably; diagnostic evidence and qualified clinical care matter."],
      ["Innate and adaptive immunity","Innate defence includes physical/chemical barriers, phagocytes and inflammatory responses. Adaptive immunity is antigen-specific and involves B and T lymphocytes. Activated B cells can become antibody-secreting plasma cells; T cells contribute helper or cell-mediated roles. Immune memory can make later responses faster/stronger, though protection is not always complete."],
      ["Vaccines, cancer and health behaviours","Vaccines train adaptive immunity through controlled antigen exposure or instructions for antigen production. Cancer involves abnormal cell growth and can be influenced by genetic and environmental factors; diagnosis/treatment depends on the specific disease. Substance misuse can affect nervous, cardiovascular, liver and other systems and may involve dependence; prevention and treatment are medical/social issues, not moral labels."]
    ],
    [
      card("Innate immunity: broad early defence; adaptive immunity: antigen-specific response and memory","Immune-system comparison.","Classify immune components.","Conceptual distinction.","Adaptive responses are not limited to antibodies alone."),
      card("Vaccine -> adaptive response/memory","Basis of immunisation.","Explain later response to a pathogen.","Response varies by vaccine/host/pathogen.","Protection is not guaranteed to be absolute."),
      card("Antibiotics target susceptible bacteria; they do not directly treat viruses","Antimicrobial distinction.","Answer treatment-class questions.","Medical fact.","Use qualified clinical advice for real symptoms or treatment.")
    ],
    [
      {title:"Explain a secondary immune response",steps:["The first exposure activates antigen-specific lymphocytes and forms memory cells.","On later exposure, memory B/T-cell responses can begin faster.","Antibody and cell-mediated responses may be stronger or faster depending on the pathogen/vaccine.","This improves protection but does not guarantee that infection can never occur."]},
      {title:"Choose an infection-prevention strategy",steps:["Identify the likely transmission route supplied by the question.","Match the intervention to that route: sanitation, vaccination, barrier protection, vector control or safe handling.","Explain the mechanism of risk reduction.","Avoid claiming one measure prevents every pathogen."]
    }],
    ["Saying antibiotics treat viral infections directly.","Treating immunity as antibody-only.","Assuming vaccination always prevents every infection.","Using stigma or moral judgement when describing substance dependence."],
    ["Compare immune responses and cells, connect prevention to transmission route and use responsible wording for public-health examples. Learn the exact pathogen/disease pair only where listed in the prescribed syllabus."],
    ["What is immune memory?","How do B and T cells differ broadly?","Why do antibiotics not treat viruses directly?"],
    ["Antigen: structure recognised by the immune system.","Antibody: antigen-binding immunoglobulin.","Phagocyte: cell that engulfs particles/microbes."],
    [q("What is a common role of antibodies?","Bind specific antigens.","Antibody binding can neutralise or mark targets for other immune mechanisms."),q("Why can misuse of antibiotics be harmful?","It selects for resistant bacterial populations and causes avoidable side effects.","Antibiotics should be used according to qualified medical guidance.")]),
  b("Class 12","Strategies for Enhancement in Food Production",
    "Understand plant breeding, animal husbandry, tissue culture, biofortification and sustainable methods for improving food production.",
    [
      ["Plant breeding and selection","Plant breeding aims to combine or select traits such as yield, disease resistance, quality and stress tolerance. A typical workflow includes identifying variability, selecting parents, crossing, selecting desirable progeny, testing across environments and releasing a suitable variety. A trait's performance may depend on environment; multi-location trials help assess stability rather than relying on a single trial."],
      ["Animal husbandry and hybridisation","Animal husbandry includes planned breeding, nutrition, housing, disease management and welfare. Cross-breeding can combine useful traits but requires selection and evaluation; poorly planned breeding can also increase inherited problems. Apiculture, poultry, fisheries and livestock have distinct biology and management needs. Productivity should be balanced with animal health and sustainable resource use."],
      ["Tissue culture, single-cell methods and biofortification","Plant tissue culture uses sterile culture conditions and suitable nutrients/hormones to regenerate plants from explants through totipotency. Micropropagation can produce many clones; somatic hybridisation can combine protoplasts from selected cells. Biofortification targets nutritional value, for example micronutrient content. Methods, benefits and risks should be described with their actual aim, not as generic 'more yield' technologies."]
    ],
    [
      card("Plant breeding workflow: variability -> selection/crossing -> evaluation -> release","High-level crop improvement sequence.","Describe a breeding programme.","Process sequence.","A cross alone does not prove stable yield improvement."),
      card("Totipotency: a plant cell can regenerate a whole plant under suitable conditions","Basis of tissue culture.","Explain micropropagation/regeneration.","Cell-development concept.","Regeneration depends on cell state, medium and hormone conditions."),
      card("Biofortification: improve nutritional quality of food","Nutrition-centred crop trait improvement.","Distinguish nutrition from yield alone.","Trait goal.","Yield and nutritional quality are different evaluation outcomes.")
    ],
    [
      {title:"Outline a plant-breeding programme",steps:["Identify the target problem and useful genetic variation.","Select/cross appropriate parents when crossing is part of the chosen method.","Select progeny with desired traits over generations.","Test stability, quality and resistance under relevant conditions before recommending a variety."]},
      {title:"Explain micropropagation",steps:["Select suitable plant tissue/explant and maintain sterile conditions.","Place it on an appropriate culture medium with the needed nutrients/regulators.","Encourage cell division and shoot/root development under controlled conditions.","Acclimatise regenerated plantlets before transferring them to normal growth conditions."]
    }],
    ["Assuming a single cross automatically produces a stable variety.","Confusing biofortification with yield improvement.","Ignoring sterile technique in plant tissue culture.","Treating animal productivity as the only measure of husbandry quality."],
    ["Answer process questions in order and state the target trait. Distinguish conventional breeding, tissue-culture methods and nutrition-focused improvement."],
    ["What is totipotency?","Why are multi-location tests useful?","How does biofortification differ from simply increasing yield?"],
    ["Explants: tissue pieces used to initiate culture.","Micropropagation: large-scale plant multiplication in culture.","Biofortification: breeding/technology that improves nutritional value."],
    [q("What is a common basis of micropropagation?","Plant-cell totipotency under suitable culture conditions.","Selected plant cells can regenerate tissues/whole plants under suitable conditions."),q("What is the primary aim of biofortification?","Improve nutritional quality.","It targets nutrient content/quality rather than yield alone.")]),
  b("Class 12","Microbes in Human Welfare",
    "Explain microbial roles in food, fermentation, industrial products, sewage treatment, biogas, biocontrol and biofertilisers.",
    [
      ["Food and industrial fermentation","Microbes transform substrates into useful products: lactic-acid bacteria assist curd formation; yeast is used in fermentation/bread-making; selected organisms produce organic acids, enzymes, antibiotics and other industrial products. Production depends on strain and controlled pH, temperature, nutrients, oxygen and time. Identify the organism/process/product relationship requested by the question."],
      ["Sewage treatment and BOD","Primary sewage treatment physically removes suspended/settleable material. Secondary treatment uses microbial communities to degrade organic matter, reducing the biochemical oxygen demand (BOD) of the effluent under suitable operation. Activated sludge contains microbial flocs; a portion is recycled to seed treatment and excess sludge may undergo anaerobic digestion. A lower BOD generally indicates less readily biodegradable organic load remains."],
      ["Biogas, biocontrol and biofertilisers","Methanogens operate in anaerobic digestion and contribute to methane-rich biogas. Biocontrol uses organisms/products to suppress pests or pathogens. Biofertilisers use beneficial microbes such as nitrogen-fixing associations or phosphate-solubilising organisms to improve nutrient availability. These methods depend on the relevant crop, soil, organism and environmental conditions and are not universal substitutes for every agricultural input."]
    ],
    [
      card("BOD: oxygen demand related to microbial degradation of organic material","Indicator for biodegradable organic load in water.","Interpret sewage-treatment results.","Units/time depend on the test method.","BOD is not the same thing as dissolved oxygen concentration."),
      card("Methanogens -> methane-rich biogas under anaerobic conditions","Biogas pathway.","Describe anaerobic waste conversion.","Gas mixture includes multiple components.","Methane production is linked to anaerobic conditions."),
      card("Biofertilisers: beneficial microbes improve nutrient availability","Biological nutrient support.","Compare biofertiliser with chemical fertiliser.","Application depends on crop/soil.","A biofertiliser is not a complete replacement for every nutrient need.")
    ],
    [
      {title:"Explain secondary sewage treatment",steps:["Primary treatment removes much solid material physically.","Secondary treatment allows aerobic microbial flocs to degrade organic matter.","As biodegradable organic load falls, BOD of the effluent generally decreases.","Sludge handling/anaerobic digestion is a later process stage in the standard description."]},
      {title:"Match microbial process to use",steps:["Food fermentation: microbes modify food substrate and can change texture/flavour/preservation.","Industrial production: selected strains produce useful compounds under controlled conditions.","Biogas: anaerobic communities convert organic waste, with methanogens contributing methane.","Biocontrol/biofertiliser: beneficial organism interaction reduces pest pressure or improves nutrient availability."]
    }],
    ["Confusing BOD with dissolved oxygen itself.","Calling anaerobic biogas production aerobic.","Assuming all microorganisms are beneficial in every context.","Claiming biofertilisers work identically for every crop/soil."],
    ["Remember the ordered wastewater steps, BOD meaning, common microbial product associations and the distinction between biocontrol and biofertiliser."],
    ["What does BOD indicate?","Why are methanogens associated with anaerobic conditions?","What is one purpose of a biofertiliser?"],
    ["BOD: biochemical oxygen demand.","Methanogen: methane-producing microorganism under anaerobic conditions.","Biocontrol: using biological agents to manage pests/pathogens."],
    [q("What happens to BOD after effective secondary sewage treatment?","It generally decreases.","Microbial treatment reduces readily biodegradable organic load."),q("What is the key condition for methane production in a biogas digester?","Anaerobic conditions.","Methanogens operate without oxygen in the standard biogas process.")]),
  b("Class 12","Biotechnology: Principles and Processes",
    "Understand recombinant DNA workflow, restriction enzymes, ligase, vectors, PCR, gel electrophoresis and host-cell expression.",
    [
      ["Recombinant DNA workflow","A biotechnology workflow identifies a target gene, prepares compatible DNA, joins it into a vector, transfers the construct into a suitable host and screens/verifies successful clones. Restriction endonucleases recognise specific sequences and cut DNA; DNA ligase joins compatible ends. Vector properties such as origin of replication, selectable marker and cloning site support propagation/selection."],
      ["PCR and electrophoresis","PCR amplifies a target DNA segment through denaturation, primer annealing and extension. Primers flank the target and DNA polymerase extends from them. Gel electrophoresis separates charged DNA fragments, with smaller fragments generally migrating farther under comparable conditions in the standard setup. Controls help detect contamination, nonspecific amplification or failed reaction."],
      ["Expression, safety and verification","A construct entering a host does not automatically prove that the desired product is expressed at the correct level or is functional. Selection and screening identify likely recombinants, followed by sequence/protein/function validation. Biological safety, containment, ethics and regulatory requirements matter because a research construct and a useful safe product are not interchangeable."]
    ],
    [
      card("Restriction enzyme: sequence-specific DNA cutting","Creates defined DNA ends/fragments.","Select the tool for a cutting step.","DNA sequence specificity.","Restriction enzymes cut; ligase joins."),
      card("DNA ligase joins compatible DNA ends","Seals DNA backbones.","Construct recombinant DNA.","Enzyme function.","It does not replace restriction digestion."),
      card("PCR: denaturation -> annealing -> extension","Repeated cycles amplify a target DNA region.","Explain amplification experiment.","Temperature-cycle process.","Primer placement determines target boundaries."),
      card("Gel electrophoresis separates DNA fragments","Movement through a gel under an electric field.","Interpret band patterns.","Fragment size is inferred under comparable conditions.","A band indicates DNA of a migration range; verification may still be needed.")
    ],
    [
      {title:"Choose the tool for a goal",steps:["To cut DNA at a recognition site, use an appropriate restriction enzyme.","To join compatible DNA fragments, use DNA ligase.","To make many copies of a selected region, use PCR with primers.","To separate fragment sizes, use gel electrophoresis; to carry DNA into a host, use a suitable vector."]},
      {title:"Trace a recombinant clone",steps:["Prepare the target insert and vector with compatible ends.","Join insert and vector, then introduce the construct into host cells.","Select/screen likely recombinants using vector/host features.","Verify insert identity and expression/function before making claims about product success."]
    }],
    ["Using ligase to cut DNA.","Assuming every transformed host contains the intended insert.","Confusing PCR amplification with gel separation.","Ignoring controls, verification and biosafety."],
    ["Use a workflow diagram with tool-to-task mapping. In application questions, identify the goal first, then choose the enzyme/vector/technique."],
    ["What does a restriction enzyme do?","What do PCR primers determine?","Why is verification needed after cloning?"],
    ["Vector: DNA vehicle carrying a genetic insert.","PCR: polymerase chain reaction.","Selectable marker: feature used to identify/maintain cells with a desired construct."],
    [q("Which enzyme joins DNA fragments?","DNA ligase.","Ligase seals compatible ends/nicks in the DNA backbone."),q("What is the purpose of a PCR primer?","Define the start/end region for amplification and provide an extension starting point.","Primers bind the template around the target sequence.")]),
  b("Class 12","Biotechnology and its Applications",
    "Apply recombinant DNA principles to medicine, agriculture, diagnostics, transgenic organisms and ethical/regulatory questions.",
    [
      ["Medical applications","Biotechnology can produce therapeutic proteins, vaccines and diagnostic tools. Recombinant production uses a host to make a target molecule; correct sequence, folding, purification and safety testing remain essential. Molecular diagnostics can detect pathogen nucleic acid or other markers. Positive test interpretation depends on the assay, sample timing and clinical context."],
      ["Agricultural and organism applications","Transgenic methods introduce or alter genetic material to create a desired trait, such as pest resistance or improved quality in a particular crop. The trait should be evaluated for effectiveness, stability, ecological context and safety; the word 'transgenic' alone does not demonstrate benefit or harm. Bioremediation and industrial biology use organisms or their products to perform functions under controlled conditions."],
      ["Bioethics, safety and public evaluation","Assessment includes intended benefit, possible health/ecological risks, access, ownership/patents, labelling and informed public discussion. A biologically possible product is not automatically approved for every use. Separate scientific evidence from regulatory decision and social/ethical evaluation. Avoid treating every application as either automatically safe or automatically dangerous."]
    ],
    [
      card("Recombinant protein production: gene/construct -> host expression -> purification/verification","High-level therapeutic-product pathway.","Explain how a biologic product is made.","Process sequence.","Expression alone is not proof of correct function/purity."),
      card("Transgenic trait must be tested for performance, safety and context","Evaluation principle.","Discuss agricultural applications.","No fixed numeric relation.","Do not infer universal safety or harm from the label alone."),
      card("Diagnostics detect a target marker/nucleic acid or biological response","Testing principle.","Compare detection techniques at a high level.","Assay-dependent.","Interpret results using accuracy and clinical context.")
    ],
    [
      {title:"Evaluate a pest-resistant crop claim",steps:["State the introduced trait and the pest/problem it targets.","Describe the potential benefit, such as reduced crop damage under relevant conditions.","Identify what must be assessed: efficacy, non-target effects, resistance evolution, gene flow and local agronomy.","Conclude conditionally from evidence rather than asserting the trait is always beneficial or harmful."]},
      {title:"Explain why a recombinant medicine needs verification",steps:["The intended gene must be present in the construct and correctly expressed.","The protein must fold/modify and be purified appropriately.","Identity, potency, contamination and safety require testing.","A successful DNA transfer is only one step in an approved therapeutic product."]
    }],
    ["Saying all genetically modified organisms have the same impact.","Equating gene expression with a verified medical product.","Ignoring ecology and regulatory context.","Treating an assay result as infallible without considering test performance."],
    ["Answer application questions by separating mechanism, benefit, limitation, validation and ethics. Use neutral scientific language and support evaluations with the stated evidence."],
    ["What makes a transgenic organism transgenic?","Why is protein purification/validation needed?","Name one ecological consideration for a crop trait."],
    ["Transgenic: organism carrying introduced/modified genetic material in the relevant definition.","Bioremediation: use of organisms/processes to reduce contaminants.","Bioethics: ethical analysis of biological research and applications."],
    [q("Does DNA transfer alone prove a medicine is safe and effective?","No.","Expression, purification, identity, function and safety testing are separate requirements."),q("Name one factor to evaluate for a pest-resistant crop.","Non-target ecological effects or resistance evolution.","A target trait should be assessed in its agricultural and ecological context.")]),
  b("Class 12","Organisms and Populations",
    "Study environmental responses, population attributes, growth curves, life-history strategies and interactions between species.",
    [
      ["Responses to the environment","Organisms can conform to, regulate, migrate from or enter dormancy during changing conditions. Regulators use energy to maintain internal conditions; conformers allow some internal variables to track external conditions. Acclimatisation is an individual's physiological adjustment, while adaptation through natural selection is inherited population-level change over generations."],
      ["Population attributes and growth","Population attributes include density, age structure, natality, mortality and dispersion. Exponential growth can occur under effectively unlimited resources; logistic growth incorporates limits and approaches carrying capacity K. Carrying capacity can change with habitat, climate and resource use. Age pyramids and population curves help infer possible trends but should be interpreted with their assumptions."],
      ["Species interactions","Competition can harm both competing species when resources overlap; predation benefits predator and harms prey; parasitism benefits a parasite at host cost; mutualism benefits both; commensalism benefits one with little direct effect on the other. Interactions influence population sizes and community structure, but outcomes can depend on context and environmental conditions."]
    ],
    [
      card("Population change = births + immigration - deaths - emigration","Simple accounting of population size change over an interval.","Solve a population count problem.","Counts per defined interval.","If rates are per individual, multiply by the relevant population/time as specified."),
      card("Exponential growth: dN/dt=rN; logistic: dN/dt=rN(1-N/K)","Common idealised growth models.","Compare J- and S-shaped curves.","N population size, r intrinsic growth rate, K carrying capacity.","Models are simplifications; state assumptions."),
      card("Interaction outcomes: mutualism +/+; competition -/-; predation +/-; commensalism +/0","Effect classification.","Identify ecology interaction type.","Qualitative sign notation.","Determine effects on both partners before classifying.")
    ],
    [
      {title:"Calculate net population change",steps:["Start with 120 individuals.","During the interval, 20 births and 5 immigrants add individuals; 15 deaths and 3 emigrants remove them.","Net change=20+5-15-3=7.","Final population is 127, assuming these events are all counted in the interval."]},
      {title:"Classify an interaction",steps:["Describe what happens to each species' fitness/benefit under the stated example.","Use + for benefit, - for harm and 0 for no evident effect in the model.","Match the pair to mutualism, competition, predation, parasitism or commensalism.","Explain the mechanism rather than naming only the sign pair."]
    }],
    ["Calling individual acclimatisation evolution.","Treating carrying capacity as a permanent fixed constant.","Classifying an interaction from one partner only.","Assuming exponential growth can continue under limited resources forever."],
    ["For growth curves, identify axes and assumptions. For interaction questions, state each partner's effect and use the textbook example or mechanism."],
    ["How is logistic growth different from exponential growth?","What is carrying capacity?","What is the difference between acclimatisation and adaptation?"],
    ["Carrying capacity: population size supportable under stated conditions.","Natality: birth rate.","Commensalism: one benefits while the other has no significant effect in the model."],
    [q("What slows logistic growth near K?","Resource limitation and density-related effects.","The growth term reduces as population size approaches carrying capacity."),q("Does acclimatisation necessarily change inherited allele frequencies?","No.","It is an individual's adjustment, not automatically population-level genetic evolution.")]),
  b("Class 12","Ecosystem",
    "Explain productivity, decomposition, energy transfer, ecological pyramids and nutrient cycles as ecosystem processes.",
    [
      ["Productivity and components","Producers convert external energy into chemical energy; consumers obtain energy through feeding; decomposers break down organic matter. Primary productivity is the rate at which producers create biomass/organic matter and may be reported as gross or net productivity. Net primary productivity accounts for producer respiration in the standard relationship. Ecosystems also include abiotic factors such as light, water, temperature and nutrients."],
      ["Decomposition and trophic transfer","Decomposition involves fragmentation, leaching, microbial catabolism, humification and mineralisation in the standard account. Its rate depends on temperature, moisture, oxygen and the chemical quality of detritus. Energy is transferred between trophic levels with losses through metabolism/heat; nutrient elements are recycled. Food chains simplify pathways and food webs show multiple routes."],
      ["Ecological pyramids and cycles","Pyramids represent numbers, biomass or energy across trophic levels. The energy pyramid is conventionally upright because available energy decreases upward; number/biomass pyramids can have different shapes depending on the ecosystem. Nutrient cycles move elements through organisms and non-living reservoirs. Distinguish matter cycling from one-way energy flow."]
    ],
    [
      card("NPP = GPP - producer respiration","Net primary productivity relation in the standard ecological model.","Calculate usable producer productivity.","Same units/time as productivity measures.","Do not subtract consumer respiration in this relation."),
      card("Energy flows through trophic levels; nutrients cycle","Ecosystem energy/matter distinction.","Explain pyramid/cycle questions.","Energy units depend on data.","Energy is not recycled in a closed ecosystem cycle."),
      card("Decomposition depends on detritus quality and abiotic conditions","Mechanism for organic-matter breakdown.","Explain faster/slower decomposition.","Process factor list.","Avoid claiming one factor has the same effect under all conditions.")
    ],
    [
      {title:"Calculate net primary productivity",steps:["Suppose gross primary productivity is 2,000 energy units per area per year and producer respiration is 700 units.","NPP=GPP-respiration=2,000-700=1,300 units.","Interpret NPP as the remaining stored/available production after producer respiration in the model.","Keep area and time units in the final answer."]},
      {title:"Explain why energy pyramids are upright",steps:["Producers capture energy at the first trophic level.","Organisms use much of that energy for metabolism and lose energy as heat.","Only a fraction becomes biomass available to the next trophic level.","Therefore available energy declines upward; nutrient elements can still be recycled separately."]
    }],
    ["Confusing GPP and NPP.","Saying matter flows one-way while energy cycles.","Assuming every ecological pyramid must be upright.","Ignoring the conditions affecting decomposition."],
    ["Learn productivity equations with units and explain ecological pyramids through energy availability. For decomposition, connect process stages to the detritus/environment."],
    ["What does NPP measure?","Why is the energy pyramid upright?","Name one factor affecting decomposition."],
    ["GPP: total primary productivity before producer respiration.","NPP: productivity remaining after producer respiration.","Mineralisation: release of inorganic nutrients from organic matter."],
    [q("If GPP=1000 and producer respiration=300, find NPP.","700.","NPP=GPP-R."),q("Do nutrients recycle in ecosystems?","Yes.","Elements cycle through organisms and abiotic reservoirs; energy flow is not a closed cycle.")]),
  b("Class 12","Biodiversity and Conservation",
    "Understand genetic/species/ecosystem diversity, biodiversity patterns, ecosystem services, threats and in-situ/ex-situ conservation.",
    [
      ["Levels and patterns of biodiversity","Genetic diversity is variation within species; species diversity concerns variety/relative representation of species; ecosystem diversity concerns habitat/ecosystem types. Biodiversity is not just a species count; it supports resilience and ecosystem processes. Species richness tends to vary with latitude and area in broad patterns, but local environments and histories matter."],
      ["Importance and threats","Biodiversity supports food, medicines, pollination, nutrient cycling, water/soil regulation and cultural values. Major threats include habitat loss/fragmentation, invasive species, overexploitation, pollution and climate change. A cause-effect response should explain how a threat reduces population size, reproductive success or habitat connectivity rather than merely listing a name."],
      ["Conservation approaches","In-situ conservation protects organisms within natural habitats through protected areas, habitat management and ecosystem stewardship. Ex-situ conservation protects components outside their natural habitats, such as seed/gene banks, botanical gardens, zoos and captive-breeding programmes. Both approaches have roles; conservation success depends on genetic diversity, habitat needs, local context and long-term management."]
    ],
    [
      card("Genetic / species / ecosystem diversity","Three commonly distinguished biodiversity levels.","Classify an example.","Conceptual categories.","Do not confuse population size with species diversity."),
      card("In-situ: natural habitat; ex-situ: outside natural habitat","Conservation strategy distinction.","Classify conservation examples.","Conceptual distinction.","Ex-situ does not always replace habitat protection."),
      card("Habitat loss, invasive species, overexploitation, pollution and climate change","Major drivers of biodiversity decline.","Explain a decline cause.","Cause categories.","A question may ask for mechanism and not only the category name.")
    ],
    [
      {title:"Choose a conservation approach",steps:["Identify whether the intervention protects the species within its ecosystem or outside it.","Protected habitats/community conservation are in-situ approaches.","Seed banks, botanical gardens and captive-breeding collections are ex-situ approaches.","Explain what threats the approach addresses and what it cannot solve alone."]},
      {title:"Explain habitat fragmentation",steps:["A continuous habitat is divided into smaller isolated patches.","Populations may become smaller and gene flow can decline.","Edge effects and reduced access to food/mates can raise extinction risk.","Mitigation may include connected habitat corridors and reducing the original habitat loss."]
    }],
    ["Treating in-situ and ex-situ as mutually exclusive for every conservation programme.","Listing threats without explaining their mechanisms.","Assuming biodiversity means only species number.","Forgetting genetic diversity within a species."],
    ["Use a compare table for diversity levels and conservation types. In long answers, state the threat, mechanism, consequence and a plausible conservation response."],
    ["What are the three biodiversity levels?","Give one ex-situ conservation example.","How can fragmentation affect gene flow?"],
    ["Genetic diversity: variation among genes/alleles within a species.","Habitat fragmentation: division of habitat into isolated patches.","Invasive species: non-native organism that spreads and causes ecological/economic harm in a given context."],
    [q("What is one in-situ conservation method?","Protecting a species within its natural habitat, such as a protected area.","The defining feature is conservation in the native ecosystem."),q("Why is genetic diversity important?","It provides variation that can support adaptation and population resilience.","Populations with variation may better withstand environmental change and disease.")])
  ];
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(all);
})();
