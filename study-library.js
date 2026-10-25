/* Static CBSE-aligned notes, print-to-PDF exports, capability-aware UI, and an animated guided tour. */
(function () {
  "use strict";
  const NOTE_SOURCE = "Cross-check the current chapter scope against the official CBSE curriculum and prescribed textbook.";
  const note = (level, subject, chapter, intro, points, formulas, example, recall) => ({
    level, subject, chapter, intro, points, formulas, example, recall
  });
  const notes = [
    note("Class 10","Mathematics","Real Numbers","Prime factorisation, divisibility and the relationship between HCF and LCM.",
      ["Euclid's division lemma expresses a = bq + r with 0 <= r < b; repeated division gives the HCF.","The Fundamental Theorem of Arithmetic states that every integer greater than 1 has a unique prime factorisation apart from order.","For two positive integers, HCF x LCM equals their product.","A rational number has a terminating decimal only when the reduced denominator has no prime factors other than 2 and 5."],
      ["a = bq + r, 0 <= r < b","For positive a,b: HCF(a,b) x LCM(a,b) = ab"],
      "For 12 and 18, HCF = 6 and LCM = 36; their product 216 equals 12 x 18.",
      ["Why must a denominator be reduced before testing decimal termination?","Find HCF(135,225) using Euclid's algorithm."]),
    note("Class 10","Mathematics","Polynomials","Connects polynomial zeros to coefficients and graphs.",
      ["A zero of p(x) is a value r for which p(r) = 0.","For ax^2 + bx + c, the sum of zeros is -b/a and the product is c/a when a is nonzero.","A graph meets the x-axis at real zeros; a repeated zero touches the axis without crossing it in a typical quadratic graph.","Polynomial division and factorisation help solve equations and simplify rational expressions."],
      ["Quadratic: alpha + beta = -b/a; alpha beta = c/a","Discriminant: D = b^2 - 4ac"],
      "For x^2 - 5x + 6, the zeros are 2 and 3; their sum is 5 and product is 6.",
      ["What does a repeated quadratic zero look like on a graph?","State the relation between zeros and coefficients."]),
    note("Class 10","Mathematics","Pair of Linear Equations","Solve two linear equations and interpret their intersection geometrically.",
      ["Write equations in a consistent standard form before elimination or substitution.","A unique solution occurs when the two lines intersect once; parallel distinct lines have no solution.","Coincident lines have infinitely many solutions.","Graphical, substitution, elimination and cross-multiplication methods are useful in different cases."],
      ["For a1x+b1y+c1=0 and a2x+b2y+c2=0, a unique solution occurs when a1/a2 != b1/b2."],
      "From x-y=1, x=y+1. Substituting into 2x+3y=12 gives 5y+2=12, so y=2 and x=3.",
      ["When do two linear equations have infinitely many solutions?","Solve 2x+y=7 and x-y=2."]),
    note("Class 10","Mathematics","Quadratic Equations","Use factorisation, completing the square and the quadratic formula.",
      ["A quadratic equation has nonzero x^2 coefficient and standard form ax^2+bx+c=0.","The discriminant predicts the roots: positive means two distinct real roots, zero means equal real roots, negative means no real roots.","Check solutions in the original equation, especially after multiplying or dividing by expressions.","Word problems often need a variable definition and rejection of physically impossible roots."],
      ["x = (-b +/- sqrt(b^2-4ac))/(2a)","D = b^2 - 4ac"],
      "x^2-7x+12=0 factors as (x-3)(x-4)=0, giving x=3 or x=4.",
      ["What does D=0 imply?","Solve 2x^2-5x+2=0."]),
    note("Class 10","Mathematics","Arithmetic Progressions","Recognise a constant difference and calculate terms and sums.",
      ["In an AP, the difference between consecutive terms is constant.","The nth term changes linearly with n; the common difference can be negative or zero.","The sum formula can be used for sequences such as seat rows, savings plans and regularly spaced quantities.","Identify a, d and n carefully before substituting."],
      ["a_n = a + (n-1)d","S_n = n/2[2a+(n-1)d]"],
      "For 3,5,7,..., a=3 and d=2, so a_10=3+9(2)=21.",
      ["Find the 20th term of 7,10,13,...","When is an AP decreasing?"]),
    note("Class 10","Mathematics","Triangles and Similarity","Compare shape-preserving triangles and their side ratios.",
      ["Similar triangles have equal corresponding angles and proportional corresponding sides.","AA similarity is sufficient to establish similarity; SSS and SAS similarity tests use proportional sides.","The Basic Proportionality Theorem relates a line parallel to one side to proportional division of the other two sides.","Use a labelled diagram and match corresponding vertices in the same order."],
      ["For similar triangles, corresponding side ratios are equal.","If side ratio is k, area ratio is k^2."],
      "If similar triangles have corresponding sides 3 and 6, the scale factor is 2 and the area ratio is 1:4.",
      ["How does area ratio relate to side ratio?","Name two tests for triangle similarity."]),
    note("Class 10","Mathematics","Trigonometry","Use right-triangle ratios and identities with angle units stated clearly.",
      ["For an acute angle in a right triangle, sine = opposite/hypotenuse, cosine = adjacent/hypotenuse and tangent = opposite/adjacent.","Know common values at 0, 30, 45, 60 and 90 degrees where defined.","Reciprocal ratios are cosec, sec and cot; tangent equals sine divided by cosine when cosine is nonzero.","Use identities to simplify expressions and check domain restrictions before division."],
      ["sin^2(theta)+cos^2(theta)=1","tan(theta)=sin(theta)/cos(theta)"],
      "For a 3-4-5 right triangle with opposite side 3, sin(theta)=3/5 and cos(theta)=4/5.",
      ["Why is tan 90 degrees undefined?","Evaluate sin 30 degrees and cos 60 degrees."]),
    note("Class 10","Mathematics","Statistics and Probability","Summarise data and interpret chance using equally likely outcomes.",
      ["Mean uses every observation; median depends on the middle position after sorting; mode is the most frequent value.","Grouped-data mean uses class marks with frequencies.","Probability lies between 0 and 1; a value of 0 means impossible and 1 means certain.","For equally likely outcomes, divide the number of favourable outcomes by the number of all outcomes."],
      ["Mean = sum of observations / number of observations","P(E) = favourable outcomes / total equally likely outcomes"],
      "A fair die has 3 even faces out of 6, so P(even)=3/6=1/2.",
      ["Can probability be -0.2? Why?","When can the mean be sensitive to an outlier?"]),
    note("Class 10","Science","Chemical Reactions and Equations","Represent chemical changes with balanced equations and identify reaction types.",
      ["A balanced equation conserves the number of atoms of each element.","Combination joins reactants; decomposition splits a compound; displacement replaces an element; double displacement exchanges ions.","Oxidation involves gain of oxygen or loss of electrons; reduction involves loss of oxygen or gain of electrons.","Observe colour change, gas, precipitate and temperature, but use evidence rather than guessing products."],
      ["Mass of atoms is conserved in a closed-system chemical equation.","Oxidation and reduction occur together in a redox reaction."],
      "2Mg + O2 -> 2MgO is balanced and represents magnesium combustion/combination.",
      ["Why must equations be balanced?","Identify the reaction type in Zn + CuSO4 -> ZnSO4 + Cu."]),
    note("Class 10","Science","Acids, Bases and Salts","Use indicators, pH and neutralisation to explain common materials.",
      ["Acids in aqueous solution increase H+ / hydronium concentration; bases provide OH- or accept protons under the relevant model.","pH is logarithmic: a one-unit decrease means ten times greater hydrogen-ion concentration.","Neutralisation produces salt and water for a typical acid-base reaction.","Safe laboratory practice means adding acid to water, not water to concentrated acid."],
      ["pH = -log10[H+] for the standard concentration convention","Acid + base -> salt + water (typical neutralisation)"],
      "HCl + NaOH -> NaCl + H2O is a balanced neutralisation equation.",
      ["Which is more acidic, pH 2 or pH 4? By what concentration factor?","What does a universal indicator show?"]),
    note("Class 10","Science","Life Processes","Review nutrition, respiration, transport and excretion as life-support systems.",
      ["Autotrophs build organic matter from simpler substances; in green plants, photosynthesis uses light energy.","Aerobic respiration releases usable energy through oxidation of food and normally uses oxygen; fermentation is less complete.","Xylem transports water/minerals and phloem transports sugars in plants.","Nephrons filter blood and selectively reabsorb useful substances while removing wastes."],
      ["Photosynthesis (simplified): 6CO2 + 6H2O -> C6H12O6 + 6O2, in light","Aerobic respiration releases energy from glucose with oxygen."],
      "Alveoli have thin, moist walls and a large surface area, supporting rapid gas diffusion.",
      ["Compare aerobic respiration and fermentation.","Why do plants need both xylem and phloem?"]),
    note("Class 10","Science","Electricity","Connect current, potential difference, resistance and electrical energy.",
      ["Current is charge flow per second; conventional current direction is opposite to electron drift in metal wires.","For an ohmic conductor at constant conditions, voltage is proportional to current.","Series resistances add; reciprocal resistances add in parallel.","Power and energy calculations must use consistent SI units and time units."],
      ["I=Q/t; V=IR","P=VI=I^2R=V^2/R; E=Pt"],
      "A 6-ohm resistor connected to 12 V carries I=12/6=2 A and dissipates P=24 W.",
      ["What happens to equivalent resistance when another resistor is added in parallel?","Convert 2 kWh to joules."]),
    note("Class 10","Science","Light: Reflection and Refraction","Use ray diagrams and sign conventions for mirrors and lenses.",
      ["A plane mirror gives a virtual, erect image of equal size behind the mirror.","A concave mirror can produce real or virtual images depending on object distance; a convex mirror gives a virtual, erect, diminished image for a real object.","Refraction occurs when light speed changes at a boundary; frequency remains constant while wavelength changes.","Use one consistent Cartesian sign convention for distances and focal length."],
      ["Mirror: 1/f = 1/v + 1/u (apply the prescribed sign convention)","Lens power: P=1/f in metres, unit dioptre"],
      "A converging lens of focal length +0.50 m has power +2 D.",
      ["Why does a straw appear displaced in water?","Draw a ray diagram for an object beyond C for a concave mirror."]),
    note("Class 10","Science","Magnetic Effects of Current","Explain magnetic fields, electromagnets, motors and generators.",
      ["A current-carrying conductor produces a magnetic field; field direction can be found using the right-hand thumb rule.","A current-carrying wire in a magnetic field can experience a force; its direction depends on current and field direction.","An electric motor converts electrical energy into mechanical energy.","Electromagnetic induction creates an emf when magnetic flux linkage changes."],
      ["Magnetic-force direction: Fleming's left-hand rule for motor effect","Induced current direction: Lenz's law opposes the change producing it."],
      "Increasing the number of coil turns or core magnetisation can strengthen an electromagnet.",
      ["State one difference between a motor and generator.","What does Lenz's law describe?"]),
    note("Class 10","Science","Our Environment","Trace energy and matter through ecosystems.",
      ["Producers capture energy; consumers obtain it by feeding; decomposers return nutrients by breaking down organic matter.","Energy transfer between trophic levels is inefficient, so available energy declines up a food chain.","Food webs show interconnected feeding relations and are more realistic than a single chain.","Biomagnification can increase concentrations of persistent pollutants at higher trophic levels."],
      ["Energy is lost at each transfer, mainly through metabolism and heat.","Matter cycles; energy flows through ecosystems."],
      "In a simple chain grass -> grasshopper -> frog, the grasshopper is a primary consumer.",
      ["Why are food chains usually short?","Distinguish energy flow from nutrient cycling."]),
    note("Class 10","Social Science","Nationalism in India","Relate mass mobilisation to colonial policies and the freedom movement.",
      ["Nationalist movements brought different groups together, but people could join for different local and economic reasons.","The Non-Cooperation and Civil Disobedience movements used mass participation and non-violent resistance in different contexts.","Salt became a powerful symbol because the tax affected everyday life and represented colonial control.","Use chronology, key personalities, causes, methods and outcomes when building an exam answer."],
      ["For a 5-mark answer: context -> causes -> key events -> participation -> outcome/limits."],
      "A source-based answer should quote or paraphrase evidence from the supplied source before linking it to the historical context.",
      ["Why was salt an effective symbol?","Name two groups with differing expectations from mass movements."]),
    note("Class 10","Social Science","Resources and Development","Classify resources and connect use to sustainability.",
      ["Resources may be natural, human-made or human; renewable/non-renewable describes replenishment, not whether use is automatically safe.","Resource planning involves identification, evaluation, planning and matching resources with technology and institutions.","Soil formation and erosion depend on parent rock, climate, organisms, relief and time.","Conservation can include contour ploughing, terracing, shelter belts and controlled grazing."],
      ["Sustainable development meets present needs without compromising future generations."],
      "Terracing slows runoff on slopes and can reduce soil erosion.",
      ["How do renewable and non-renewable resources differ?","Name two soil-conservation methods."]),
    note("Class 10","Social Science","Federalism","Understand constitutional power-sharing across levels of government.",
      ["Federalism divides powers between national and regional governments under a constitution.","A written constitution, independent judiciary and specified jurisdiction help protect the division of powers.","India's constitutional lists allocate many subjects to Union, State and Concurrent spheres; concurrent conflicts follow constitutional rules.","Local government and decentralisation bring decision-making closer to communities."],
      ["Federalism = constitutionally divided authority across levels, not simply administrative delegation."],
      "Public health, policing and agriculture are commonly discussed as state-level subjects in India's constitutional structure; verify exact list wording in the current textbook.",
      ["Why is judicial review important to a federation?","How can local government improve participation?"]),
    note("Class 10","Social Science","Money and Credit","Explain money as a medium of exchange and compare formal and informal credit.",
      ["Money removes the need for a double coincidence of wants in barter.","Banks accept deposits and lend a portion under regulation, charging interest on loans.","Credit can support productive investment but may worsen hardship if repayment depends on uncertain income.","Formal credit is supervised by regulated institutions; informal lenders may charge exploitative rates."],
      ["Interest = amount borrowed x rate x time under simple-interest assumptions."],
      "A loan for a reliable productive asset differs in risk from a loan whose repayment depends on a volatile crop yield.",
      ["What is collateral?","How can credit become a debt trap?"]),
    note("Class 10","English","Reading, Writing and Literature","A method sheet for concise, evidence-based exam responses.",
      ["Read the task verb first: explain, compare, analyse, infer and evaluate demand different response shapes.","For literature, make a claim, support it with a precise textual detail and explain its significance.","For formal writing, obey the requested format, purpose, audience and word limit; plan before drafting.","Proofread agreement, tense consistency, punctuation and paragraph flow."],
      ["Response frame: point -> evidence/detail -> explanation -> link to task."],
      "A comparison paragraph should discuss both texts on the same dimension, rather than writing two unrelated summaries.",
      ["What makes a textual quotation relevant evidence?","Which two checks catch the most common final-draft errors?"]),
    note("Class 10","Computer Applications","Internet and Digital Safety","Review web concepts and habits for safer everyday computing.",
      ["A URL identifies a resource; HTTPS encrypts data in transit but does not by itself prove that a site is honest.","Use unique passwords and multi-factor authentication; never share one-time passwords or recovery codes.","Check sender domains and links before opening attachments; urgency and unexpected rewards are common phishing signals.","Back up important files and keep browsers, systems and security tools updated."],
      ["Confidentiality, integrity and availability are three common information-security goals."],
      "If a bank message asks you to open a shortened link and enter an OTP, do not use the link; navigate to the bank's official site or app independently.",
      ["Why is HTTPS not a guarantee that a page is legitimate?","Name two signs of phishing."]),
    note("Class 11","Mathematics","Sets and Functions","Use set operations and functions to describe mappings.",
      ["A set is a well-defined collection; roster and set-builder notation express it in different ways.","Union collects elements in either set; intersection collects elements common to both; complement is relative to a specified universal set.","A function assigns exactly one output to each input in its domain.","Domain, codomain and range are different: the range is the set of actual outputs."],
      ["n(A union B)=n(A)+n(B)-n(A intersection B)","A function f maps every x in its domain to one value f(x)."],
      "If A={1,2,3} and B={3,4}, A intersection B={3} and A union B={1,2,3,4}.",
      ["Can a relation map one input to two outputs and still be a function?","Distinguish codomain from range."]),
    note("Class 11","Mathematics","Trigonometric Functions","Use radian measure, periodicity and identities.",
      ["Convert degrees to radians by multiplying by pi/180.","Sine and cosine are periodic with period 2pi; tangent has period pi where it is defined.","Signs of trigonometric functions depend on the quadrant.","Identities can reduce expressions, but divisions require a nonzero denominator."],
      ["radians = degrees x pi/180","sin^2(x)+cos^2(x)=1; 1+tan^2(x)=sec^2(x)"],
      "150 degrees = 150 pi/180 = 5pi/6 radians.",
      ["What is the period of tan x?","In which quadrants is cosine negative?"]),
    note("Class 11","Mathematics","Limits and Derivatives","Interpret a derivative as a limiting rate of change.",
      ["A limit describes nearby behaviour and does not always equal the function value at the point.","Derivative from first principles is the limit of the difference quotient when it exists.","Geometrically, a derivative is tangent slope; physically, it can represent instantaneous rate of change.","Use standard derivative rules only after checking the function's domain."],
      ["f'(x)=lim(h->0)[f(x+h)-f(x)]/h","d(x^n)/dx = n x^(n-1)"],
      "For f(x)=x^2, the difference quotient simplifies to 2x+h; taking h -> 0 gives f'(x)=2x.",
      ["What does f'(a) represent geometrically?","Differentiate 3x^4 - 2x."]),
    note("Class 11","Mathematics","Straight Lines","Connect line equations with slope and intercepts.",
      ["Slope measures vertical change divided by horizontal change between two points.","Parallel non-vertical lines have equal slopes; perpendicular slopes multiply to -1 when both slopes are defined.","Point-slope, slope-intercept and two-point forms are algebraically equivalent descriptions.","Vertical lines have undefined slope and should be represented as x = constant."],
      ["m=(y2-y1)/(x2-x1)","y-y1=m(x-x1); y=mx+c"],
      "Through (1,2) with slope 3: y-2=3(x-1), or y=3x-1.",
      ["Why is a vertical line's slope undefined?","Find the slope through (2,1) and (4,7)."]),
    note("Class 11","Mathematics","Probability","Calculate events using sample spaces and event relationships.",
      ["A sample space contains all possible outcomes; an event is a subset of it.","For equally likely outcomes, probability equals favourable outcomes divided by total outcomes.","The complement rule is useful when 'at least one' is easier to count through 'none'.","Mutually exclusive events cannot happen together; independent events do not alter each other's probability."],
      ["P(A complement)=1-P(A)","For independent A,B: P(A intersection B)=P(A)P(B)"],
      "For two fair coin tosses, the outcomes HH, HT, TH and TT are equally likely; exactly one head has probability 2/4=1/2.",
      ["What is the difference between mutually exclusive and independent?","Find the probability of at least one head in two tosses."]),
    note("Class 11","Physics","Motion in a Straight Line","Describe position, displacement, velocity and acceleration.",
      ["Distance is scalar path length; displacement is signed change in position.","Average velocity is displacement/time; average speed is distance/time.","The slope of a position-time graph gives velocity; the slope of a velocity-time graph gives acceleration.","Use equations of constant acceleration only when acceleration is uniform."],
      ["v=u+at","s=ut+(1/2)at^2; v^2=u^2+2as"],
      "From rest with a=2 m/s^2 for 3 s, v=6 m/s and displacement s=9 m.",
      ["Can average speed exceed the magnitude of average velocity?","When is a velocity-time graph's area negative?"]),
    note("Class 11","Physics","Laws of Motion","Apply force, inertia and momentum in a chosen system.",
      ["Newton's first law describes inertia; the second relates net force to the rate of change of momentum.","Newton's third-law force pairs act on different objects, so they do not cancel on one free-body diagram.","Draw all forces on one object before applying equations.","Friction direction opposes relative motion or its impending tendency at a contact surface."],
      ["For constant mass: F_net=ma","Impulse = change in momentum"],
      "A 4 kg object accelerating at 2 m/s^2 has net force 8 N.",
      ["Why don't action-reaction forces cancel each other on one body?","What forces act on a stationary book on a table?"]),
    note("Class 11","Physics","Work, Energy and Power","Use energy methods to simplify mechanics problems.",
      ["Work by a constant force is the dot product of force and displacement.","Kinetic energy depends on mass and speed squared; gravitational potential energy near Earth depends on height.","Net work equals the change in kinetic energy.","Power is the rate of doing work; instantaneous power can be F dot v."],
      ["W=Fs cos(theta)","K=(1/2)mv^2; near Earth U=mgh; P=W/t"],
      "A 2 kg body at 3 m/s has kinetic energy 9 J.",
      ["What is the work done by a perpendicular force?","When can mechanical energy be conserved?"]),
    note("Class 11","Physics","Gravitation","Connect gravitational force, field and potential energy.",
      ["Every mass attracts every other mass; force acts along the line joining their centres.","For spherical bodies outside them, gravity can be modelled as if mass were concentrated at the centre.","Gravitational potential energy is negative if zero is defined at infinite separation.","Orbital motion results from gravity continually changing the direction of velocity."],
      ["F=Gm1m2/r^2","g=GM/r^2; near Earth delta-U approximately mg delta-h"],
      "Doubling centre-to-centre distance reduces gravitational force to one-quarter.",
      ["How does g depend on distance from Earth's centre?","Why does an orbiting satellite keep falling without hitting Earth?"]),
    note("Class 11","Chemistry","Atomic Structure","Relate atomic spectra to quantised electronic energy levels.",
      ["Atomic number determines proton number; neutral atoms also have that number of electrons.","Isotopes have the same proton number and different neutron counts.","Electrons occupy quantised energy states; transitions between states absorb or emit specific photon energies.","Quantum numbers identify shell, subshell, orbital orientation and spin."],
      ["Photon energy: E=h nu","Wavelength and frequency: c=nu lambda"],
      "A higher-frequency photon has greater energy because E=h nu.",
      ["What distinguishes isotopes?","What happens when an electron moves to a lower energy level?"]),
    note("Class 11","Chemistry","Chemical Bonding","Predict bonding and shape from electrons and electron-pair repulsion.",
      ["Ionic bonding involves electrostatic attraction between ions; covalent bonding involves shared electron pairs.","Lewis structures track valence electrons and help identify bonding and lone pairs.","VSEPR predicts geometry from repulsion among electron domains; lone pairs generally repel more strongly than bonding pairs.","Polarity depends on bond polarity and molecular geometry, not bond polarity alone."],
      ["Formal charge = valence e - nonbonding e - (bonding e/2)","Approximate shapes: CH4 tetrahedral; NH3 trigonal pyramidal; H2O bent"],
      "CO2 has polar C=O bonds but a linear shape, so bond dipoles cancel and the molecule is non-polar.",
      ["Why is water bent rather than linear?","Can a molecule with polar bonds be non-polar?"]),
    note("Class 11","Chemistry","Equilibrium","Understand dynamic balance and how conditions shift the equilibrium position.",
      ["At dynamic equilibrium in a closed system, forward and reverse reaction rates are equal.","The equilibrium constant uses activities/concentrations or partial pressures according to the reaction definition.","Changing concentration or pressure can shift equilibrium position; temperature changes the equilibrium constant.","A catalyst speeds both directions and helps reach equilibrium sooner without changing K."],
      ["For aA+bB <-> cC+dD, Kc=[C]^c[D]^d/([A]^a[B]^b) under the stated convention."],
      "Adding a reactant often shifts equilibrium toward products, subject to the reaction and constraints.",
      ["Does a catalyst change K?","What does 'dynamic' mean at equilibrium?"]),
    note("Class 11","Chemistry","Redox Reactions","Track electron transfer using oxidation numbers.",
      ["Oxidation is electron loss and reduction is electron gain; both occur in a redox process.","Oxidation number is a bookkeeping tool, not always a literal charge.","The total oxidation-number sum equals the species charge.","Balance redox equations by conserving atoms and charge, using an appropriate acidic or basic medium method."],
      ["Oxidation = loss of electrons; reduction = gain of electrons.","Sum of oxidation numbers = total charge."],
      "In Mg + Cl2 -> MgCl2, Mg goes from 0 to +2 and is oxidised; chlorine is reduced from 0 to -1.",
      ["Identify the oxidising agent in a redox equation.","Why must charge balance in ionic equations?"]),
    note("Class 11","Biology","Cell: Structure and Function","Connect cell compartments to the tasks they perform.",
      ["The plasma membrane is selectively permeable and regulates movement into and out of the cell.","Nucleus stores most eukaryotic DNA; ribosomes translate RNA into proteins.","Mitochondria produce much of the ATP during aerobic respiration; chloroplasts perform photosynthesis in plants and algae.","Rough ER, smooth ER, Golgi apparatus and lysosomes support protein/lipid processing, transport and digestion."],
      ["Structure-function rule: relate an organelle's shape, membrane or enzymes to its role."],
      "A large surface area of inner mitochondrial membrane supports oxidative phosphorylation machinery.",
      ["Name the site of protein synthesis.","Give one difference between prokaryotic and eukaryotic cells."]),
    note("Class 11","Biology","Biomolecules","Classify carbohydrates, proteins, lipids and nucleic acids.",
      ["Monosaccharides are simple sugars; polysaccharides store energy or provide structural material.","Proteins are amino-acid polymers joined by peptide bonds; shape is linked to function.","Lipids are hydrophobic or amphipathic molecules used in membranes, storage and signalling.","DNA and RNA are nucleic acids; nucleotides contain sugar, phosphate and nitrogenous base."],
      ["A peptide bond links amino acids; a phosphodiester bond links nucleotides in nucleic acids."],
      "Denaturation can disrupt protein shape without necessarily breaking the primary amino-acid sequence.",
      ["Why can pH or heat alter enzyme activity?","What are the three parts of a nucleotide?"]),
    note("Class 11","Biology","Human Physiology","Review transport, gas exchange, excretion and neural/endocrine control.",
      ["Alveoli exchange gases by diffusion along partial-pressure gradients.","The heart pumps blood through pulmonary and systemic circuits; valves reduce backflow.","Nephrons filter blood then reabsorb needed water and solutes and secrete selected wastes.","Nervous signalling is rapid and targeted; hormones often have slower, longer-lasting effects."],
      ["Homeostasis maintains internal variables within a viable range."],
      "ADH generally increases collecting-duct water permeability, helping the body conserve water.",
      ["How does the alveolus structure aid diffusion?","Compare nervous and endocrine signalling."]),
    note("Class 11","Biology","Plant Physiology","Connect photosynthesis, respiration, transport and plant growth.",
      ["Photosynthesis converts light energy into chemical energy using CO2 and water, releasing oxygen in oxygenic pathways.","Transpiration contributes to water movement through xylem; stomata regulate gas exchange and water loss.","Plant hormones regulate processes such as elongation, dormancy, fruit ripening and responses to stress.","Respiration supplies ATP for cellular work in both light and dark conditions."],
      ["Photosynthesis is a multi-step process; do not treat the simplified net equation as a mechanism."],
      "Closing stomata conserves water but can also limit CO2 entry and reduce photosynthetic rate.",
      ["How do stomata balance gas exchange and water conservation?","What does auxin generally promote in many growing tissues?"]),
    note("Class 11","Computer Science","Python Fundamentals","Use data types, expressions and control flow precisely.",
      ["Python is dynamically typed; names refer to objects and can be rebound to objects of different types.","Use indentation to define compound statements; consistent indentation is required.","Distinguish == (equality comparison) from = (assignment).","Choose int, float, bool, str, list, tuple, set or dict according to the data and operations required."],
      ["len(sequence) gives its number of items; range(stop) generates integers from 0 up to stop-1."],
      "range(2,7,2) yields 2, 4 and 6.",
      ["Why does range(5) exclude 5?","Which built-in type maps keys to values?"]),
    note("Class 11","Computer Science","Functions and Data Structures","Break a program into reusable functions and select suitable containers.",
      ["A function has a name, parameters, body and often a return value; returning a value differs from printing it.","Lists are mutable sequences; tuples are immutable sequences; dictionaries map unique keys to values.","A stack follows LIFO: the last pushed item is the first popped.","Trace code with a table of variable values before predicting output."],
      ["Typical stack operations: push/append and pop.","Dictionary lookup uses a key, e.g. record['name']."],
      "If a stack receives A, then B, then C, the next pop returns C.",
      ["When should a function return rather than print?","What does LIFO mean?"]),
    note("Class 12","Mathematics","Matrices","Represent linear relationships and perform valid matrix operations.",
      ["Matrix addition requires equal dimensions; multiplication AB requires columns of A to equal rows of B.","Matrix multiplication is generally not commutative: AB need not equal BA.","Identity matrices leave a matrix unchanged under valid multiplication.","Check dimensions before doing arithmetic and keep row/column order consistent."],
      ["(AB)_ij = sum_k A_ik B_kj","AI=IA=A for a square compatible matrix A."],
      "A 2x3 matrix can multiply a 3x1 matrix, producing a 2x1 matrix.",
      ["When is A+B defined?","Why can AB differ from BA?"]),
    note("Class 12","Mathematics","Determinants","Use determinants to test invertibility and solve equations.",
      ["For a 2x2 matrix, the determinant is ad-bc.","A square matrix has an inverse exactly when its determinant is nonzero.","Rows or columns can be manipulated using determinant properties, but each operation has a specific effect on the value.","Cramer's rule applies when the determinant of the coefficient matrix is nonzero."],
      ["det([[a,b],[c,d]])=ad-bc","A inverse = adj(A)/det(A), when det(A) is nonzero."],
      "For [[2,1],[5,3]], determinant = 2(3)-1(5)=1.",
      ["What does determinant zero imply about invertibility?","Compute det([[1,2],[4,7]])."]),
    note("Class 12","Mathematics","Continuity and Differentiability","Analyse local behaviour using limits and derivatives.",
      ["A function is continuous at a when its limit exists and equals f(a).","Differentiability implies continuity at a point, but continuity does not guarantee differentiability.","Chain, product and quotient rules reduce complicated derivatives to simpler ones.","For maxima/minima, stationary points are candidates; verify with a valid test and the problem domain."],
      ["Product rule: (uv)'=u'v+uv'","Chain rule: d f(g(x))/dx = f'(g(x))g'(x)"],
      "For y=(3x+1)^2, chain rule gives dy/dx = 2(3x+1)(3)=18x+6.",
      ["Can a continuous function have a corner?","Differentiate sin(x^2)."]),
    note("Class 12","Mathematics","Integrals","Treat integration as accumulation and reverse differentiation.",
      ["An indefinite integral represents a family of antiderivatives and includes +C.","Definite integrals represent signed area/accumulation and obey interval and symmetry properties.","Substitution reverses the chain rule; integration by parts reverses the product rule.","Always differentiate an antiderivative to check it."],
      ["Integral x^n dx = x^(n+1)/(n+1)+C for n not equal to -1","Integration by parts: integral u dv = uv - integral v du"],
      "Integral 2x dx = x^2+C; differentiating x^2+C returns 2x.",
      ["Why is +C needed in indefinite integrals?","What is the geometric meaning of a definite integral?"]),
    note("Class 12","Mathematics","Probability Distributions","Use conditional probability and random variables to calculate expectations.",
      ["A random variable assigns a numerical value to each outcome.","For a discrete distribution, probabilities are non-negative and sum to 1.","Conditional probability updates the event space using known information.","Independent events satisfy P(A intersection B)=P(A)P(B)."],
      ["P(A|B)=P(A intersection B)/P(B), when P(B)>0","E(X)=sum x P(X=x) for a discrete random variable."],
      "For a fair die, E(X)=(1+2+3+4+5+6)/6=3.5.",
      ["What condition is required to define P(A|B)?","Do mutually exclusive nonzero-probability events have to be independent?"]),
    note("Class 12","Physics","Electrostatics","Connect charge, electric field, potential and capacitors.",
      ["Charge is quantised and conserved; like charges repel and unlike charges attract.","Electric field is force per unit positive test charge; field lines point away from positive and toward negative charges.","Electric potential is energy per unit charge and is a scalar.","Capacitors store charge and energy; inserting a dielectric changes capacitance according to the setup."],
      ["Coulomb magnitude: F=k|q1q2|/r^2","E=F/q; capacitor relation Q=CV"],
      "Doubling separation for two point charges reduces Coulomb force to one-quarter.",
      ["Distinguish electric field from electric potential.","What does capacitance measure?"]),
    note("Class 12","Physics","Current Electricity","Analyse circuits using Ohm's law, resistivity and Kirchhoff's rules.",
      ["Current is the rate of charge flow; conventional current direction is positive-charge flow direction.","Resistance depends on material, length, area and temperature; R=rho L/A for a uniform wire.","Series components share current; parallel branches share voltage.","Kirchhoff's junction rule expresses charge conservation and loop rule expresses energy conservation."],
      ["V=IR; P=VI","R=rho L/A"],
      "A 10-ohm resistor across 5 V carries 0.5 A if it is ohmic under those conditions.",
      ["Which quantity is common to components in series?","State Kirchhoff's junction rule."]),
    note("Class 12","Physics","Electromagnetic Induction and AC","Understand induced emf and alternating-current quantities.",
      ["Changing magnetic flux linkage induces an emf; changing flux can occur by changing field, area or orientation.","Lenz's law gives the direction: induced effects oppose the change that produces them.","A transformer uses mutual induction and requires changing magnetic flux.","For sinusoidal AC, rms voltage/current are the DC values producing the same heating effect in a resistor."],
      ["Faraday: induced emf proportional to -d(flux linkage)/dt","For sinusoidal voltage, V_rms=V_0/sqrt(2)."],
      "A coil moved through a non-uniform magnetic field can experience a change in flux and an induced emf.",
      ["Why is the induced effect described as opposing the change?","Why does a transformer not operate on steady DC after the transient?"]),
    note("Class 12","Physics","Ray and Wave Optics","Compare ray diagrams with interference and diffraction concepts.",
      ["Geometric optics is useful when wavelengths are small relative to openings and objects.","Refraction obeys Snell's law; lens sign conventions must remain consistent.","Interference requires coherent waves; constructive and destructive interference depend on path difference.","Diffraction becomes prominent when aperture/obstacle size is comparable to wavelength."],
      ["n1 sin(i)=n2 sin(r)","Fringe spacing for ideal Young double-slit setup: beta=lambda D/d."],
      "For a converging lens with f=+0.25 m, power is +4 D.",
      ["What conditions create stable interference fringes?","How does fringe spacing change if slit separation increases?"]),
    note("Class 12","Chemistry","Solutions and Electrochemistry","Describe concentration, colligative behaviour and electrochemical energy conversion.",
      ["Molarity uses solution volume; molality uses solvent mass and is less temperature-sensitive.","Colligative properties depend mainly on number of dissolved particles in an ideal dilute solution.","A galvanic cell converts spontaneous chemical energy into electrical energy; an electrolytic cell uses electrical energy to drive a non-spontaneous reaction.","Anode is oxidation and cathode is reduction in both galvanic and electrolytic cells."],
      ["Molarity = moles solute / litres solution","Delta-G = -nFE_cell under the usual reversible-cell convention."],
      "In a galvanic cell, electrons travel through the external circuit from anode to cathode.",
      ["Why is molality less temperature-sensitive than molarity?","Define oxidation and reduction at electrodes."]),
    note("Class 12","Chemistry","Chemical Kinetics","Use rate laws and integrated equations to describe reaction speed.",
      ["Reaction rate can be measured through change in concentration per unit time.","Rate law exponents are determined experimentally and need not equal stoichiometric coefficients.","For a first-order reaction, half-life is independent of initial concentration under the ideal model.","Temperature, concentration, catalysts and surface area can affect observed rate according to the system."],
      ["First order: ln([A]0/[A]t)=kt","First-order half-life: t1/2=0.693/k"],
      "If k increases at the same order, the half-life decreases because t1/2 is inversely proportional to k.",
      ["Can reaction order always be read from the balanced equation?","What are the units of a first-order rate constant?"]),
    note("Class 12","Chemistry","Coordination Compounds","Identify central metal ions, ligands and coordination geometry.",
      ["A coordination entity contains a central atom/ion bonded to ligands by coordinate bonds.","Coordination number counts donor atoms directly attached to the central ion.","Ligands may be monodentate or polydentate; chelation often increases complex stability.","Names encode ligands, oxidation state and metal; follow the current naming conventions taught in the course."],
      ["Oxidation state of central ion + ligand-charge sum = complex charge."],
      "For [Cu(NH3)4]2+, ammonia is neutral and the oxidation state of copper is +2.",
      ["What is coordination number?","Why can a bidentate ligand bind through two donor atoms?"]),
    note("Class 12","Chemistry","Aldehydes, Ketones and Carboxylic Acids","Recognise carbonyl reactivity and common transformations.",
      ["Aldehydes contain terminal -CHO; ketones contain a carbonyl between carbon groups; carboxylic acids contain -COOH.","Carbonyl carbon is electrophilic, so nucleophiles can attack it.","Oxidation often converts aldehydes to carboxylic acids; ketones resist mild oxidation.","Hydrogen bonding and molecular structure affect boiling points and solubility."],
      ["Aldehyde: R-CHO; ketone: R-CO-R'; carboxylic acid: R-COOH."],
      "Ethanal (CH3CHO) can be oxidised to ethanoic acid under suitable conditions.",
      ["How do aldehydes and ketones differ structurally?","Why are carboxylic acids weak acids in water rather than fully ionising?"]),
    note("Class 12","Biology","Principles of Inheritance and Variation","Use Mendelian ratios while accounting for more complex inheritance.",
      ["Alleles are alternative forms of a gene; homozygous and heterozygous describe allele combinations.","A monohybrid Aa x Aa cross gives genotype ratio 1:2:1 under standard assumptions.","Dominance, incomplete dominance, codominance, linkage and sex-linked inheritance produce different patterns.","For a pedigree, infer possible genotypes before predicting offspring probabilities."],
      ["Aa x Aa -> 1 AA : 2 Aa : 1 aa under segregation."],
      "With complete dominance, aa occurs in one-quarter of offspring from Aa x Aa, assuming independent segregation and equal viability.",
      ["Distinguish genotype ratio from phenotype ratio.","What is codominance?"]),
    note("Class 12","Biology","Evolution","Explain evolution using variation, inheritance and differential reproductive success.",
      ["Evolution describes changes in heritable characteristics or allele frequencies in populations over generations.","Mutation, recombination and gene flow contribute variation; selection and drift can change allele frequencies.","Natural selection acts on phenotypes while evolutionary change occurs in populations.","Evidence includes fossils, comparative anatomy, molecular homology and observed evolutionary change."],
      ["Hardy-Weinberg model: p+q=1 and p^2+2pq+q^2=1 under its assumptions."],
      "Antibiotic resistance becomes common when resistant variants survive and reproduce under antibiotic selection.",
      ["Why is an individual not said to evolve genetically during its lifetime?","Name assumptions of Hardy-Weinberg equilibrium."]),
    note("Class 12","Biology","Human Reproduction","Trace gamete formation, fertilisation and the reproductive endocrine cycle.",
      ["Gametes are haploid; fertilisation restores the diploid chromosome complement.","In humans, spermatogenesis and oogenesis differ in timing and the number of functional gametes produced.","Hormones coordinate reproductive maturation, ovulation, pregnancy and lactation.","Development proceeds through cleavage, blastocyst formation, implantation and embryonic development."],
      ["Meiosis halves chromosome number; fertilisation restores it."],
      "A zygote forms when a haploid sperm and haploid ovum fuse, restoring diploidy.",
      ["Why are gametes haploid?","What is implantation?"]),
    note("Class 12","Biology","Ecology and Ecosystems","Connect energy flow, nutrient cycles and population interactions.",
      ["Energy enters most ecosystems through photosynthesis and flows across trophic levels; nutrients cycle.","Population size depends on births, deaths, immigration and emigration.","Mutualism, competition, predation, parasitism and commensalism describe different interspecific interactions.","Biodiversity supports ecosystem resilience, but habitat loss, pollution and overexploitation can reduce it."],
      ["Population change = births + immigration - deaths - emigration over the chosen interval."],
      "A food web contains multiple linked food chains and can provide alternative pathways for energy flow.",
      ["Why is an energy pyramid upright?","Compare mutualism and commensalism."]),
    note("Class 12","Computer Science","Python Functions, Modules and Stacks","Organise programs and reason about call/return and LIFO behaviour.",
      ["A function supports reuse, testing and clearer decomposition; a return statement sends a value to its caller.","Local and global names have different scope; avoid unnecessary global state.","A stack uses last-in-first-out order; push/append adds to the top and pop removes the top item.","Trace function calls and stack contents step by step rather than relying on intuition."],
      ["A list can model a stack with append() and pop()."],
      "After append(10), append(20), pop(), the removed value is 20.",
      ["How does return differ from print?","What order does a stack use?"]),
    note("Class 12","Computer Science","File Handling","Choose text/binary mode and manage file resources safely.",
      ["Text files store character data; binary files store bytes and need appropriate encoding or decoding when representing text.","Common modes include r (read), w (overwrite/create), a (append) and their binary variants.","A with statement closes the file automatically after the block, even when an error occurs.","CSV records should be parsed with a CSV-aware library rather than naive comma splitting when quoting is possible."],
      ["with open(path, mode, encoding='utf-8') as f: ...","read() loads content; readline() reads one line; write() writes text in text mode."],
      "Open a text file using mode 'r' to inspect it without overwriting its contents.",
      ["What is the risk of opening a needed file with mode 'w'?","Why specify an encoding for text files?"]),
    note("Class 12","Computer Science","SQL and Relational Databases","Use relational structure and queries to retrieve reliable results.",
      ["A table stores rows (records) and columns (attributes); a primary key uniquely identifies a row.","SELECT chooses columns, FROM chooses tables and WHERE filters rows.","ORDER BY sorts; GROUP BY forms groups; aggregate functions summarise values.","Use parameterised queries in applications rather than concatenating untrusted user input into SQL."],
      ["SELECT column_list FROM table_name WHERE condition;","COUNT, SUM, AVG, MIN and MAX are common aggregate functions."],
      "SELECT name FROM Student WHERE marks >= 80 ORDER BY marks DESC; returns qualifying names in descending marks order.",
      ["What is a primary key?","How do WHERE and HAVING differ in grouped queries?"]),
    note("Class 12","Computer Science","Computer Networks and Cyber Safety","Review addressing, protocols and defensive online behaviour.",
      ["A network connects devices to exchange data and share resources; LAN and WAN differ mainly in scope.","IP routes packets; DNS maps domain names to IP addresses; HTTPS protects data in transit.","Phishing uses deceptive messages or pages to trick people into disclosing information or installing malware.","Use least privilege, updates, secure backups, MFA and careful link inspection."],
      ["Availability, integrity and confidentiality are common information-security objectives."],
      "For a suspicious payment message, open the bank app independently rather than using the supplied shortened link.",
      ["What does DNS do?","Name two safeguards against account takeover."]),
    note("Class 12","Economics","National Income Accounting","Distinguish production, income and expenditure measures.",
      ["GDP measures final goods and services produced within a territory during a period; avoid double counting intermediate goods.","Value added is output value minus intermediate consumption.","Nominal values use current prices; real values adjust for price changes using a chosen base or deflator.","GDP is a useful measure of production, but it does not by itself measure inequality, unpaid work or every aspect of welfare."],
      ["Value added = value of output - intermediate consumption."],
      "Counting wheat, flour and bread as separate final outputs would double count value unless intermediate transactions are handled correctly.",
      ["Why are intermediate goods excluded from final GDP totals?","How does real GDP differ from nominal GDP?"]),
    note("Class 12","Economics","Money, Banking and Government Budget","Trace monetary functions and public revenue/expenditure.",
      ["Money serves as a medium of exchange, unit of account, store of value and standard of deferred payment.","Commercial banks accept deposits and create credit subject to reserve, capital and regulatory constraints.","A government budget records expected receipts and expenditures for a fiscal period.","Revenue receipts generally do not create liabilities or reduce assets; capital receipts can create liabilities or reduce assets."],
      ["Fiscal deficit = total expenditure - (revenue receipts + non-debt capital receipts), under the standard budget definition."],
      "Borrowing is a capital receipt that creates a repayment liability; tax revenue is a revenue receipt.",
      ["Distinguish revenue and capital receipts.","What does fiscal deficit indicate?"]),
    note("Class 12","Accountancy","Accounting Equation and Double Entry","Understand how transactions affect assets, liabilities and equity.",
      ["The accounting equation balances resources with claims: assets equal liabilities plus owner's equity.","Every transaction has at least two effects; equal debits and credits keep the ledger balanced.","Separate capital from revenue transactions and assets from expenses.","A trial balance checks arithmetic agreement but cannot detect every error."],
      ["Assets = Liabilities + Capital (equity)","Total debits = total credits in a balanced double-entry system."],
      "Owner invests cash: cash asset rises and owner's capital rises by the same amount.",
      ["Why can a trial balance agree when a transaction is omitted?","Classify equipment and rent expense."]),
    note("Class 12","Business Studies","Principles and Functions of Management","Relate planning, organising, staffing, directing and controlling.",
      ["Management coordinates people and resources to achieve stated objectives efficiently and effectively.","Planning selects goals and actions; organising allocates tasks and authority; staffing supplies capable people.","Directing guides and motivates; controlling compares actual results with standards and corrects deviations.","Principles are guides for decisions, not rigid rules that fit every context identically."],
      ["Control cycle: set standards -> measure performance -> compare -> correct."],
      "If actual sales fall below a target, a manager analyses the gap before changing marketing or operational actions.",
      ["Differentiate efficiency and effectiveness.","Why is controlling linked to planning?"]),
    note("Class 12","English","Writing Skills and Textual Analysis","Produce structured, evidence-based responses under exam constraints.",
      ["Identify task, audience, format, tone and word limit before writing.","Use an opening that answers the task, organised body paragraphs and a concise closing.","For literature, distinguish plot summary from analysis of character, imagery, theme and author choices.","Reserve a final check for factual consistency, grammar, punctuation and format."],
      ["Analytical response: claim -> textual evidence -> explanation -> connection to prompt."],
      "When asked how imagery builds mood, quote or point to a specific image and explain its effect instead of retelling the whole scene.",
      ["How does evidence strengthen an interpretation?","What information belongs in a formal letter's subject line?"]),
    note("Class 10","Mathematics","Coordinate Geometry","Locate points on the Cartesian plane and calculate distances and section ratios.",
      ["An ordered pair (x,y) identifies a point relative to perpendicular coordinate axes.","The distance formula follows from Pythagoras; keep squared differences positive regardless of coordinate order.","The midpoint averages the two x-coordinates and the two y-coordinates.","For section formula problems, establish the internal ratio and the order of points before substituting."],
      ["Distance = sqrt((x2-x1)^2+(y2-y1)^2)","Midpoint = ((x1+x2)/2,(y1+y2)/2)"],
      "Between (2,1) and (5,5), distance = sqrt(3^2+4^2)=5 units.",
      ["Find the distance between (-1,2) and (3,5).","What is the midpoint of (4,-2) and (8,6)?"]),
    note("Class 10","Mathematics","Circles and Tangents","Use radius-perpendicular and equal-tangent properties.",
      ["A tangent touches a circle at one point and is perpendicular to the radius through the contact point.","From the same external point, the two tangent segments to a circle have equal lengths.","A diagram should mark equal radii and right angles explicitly before using a theorem.","Do not confuse the tangent segment length with the distance from the external point to the centre."],
      ["If PA and PB are tangents from external point P, then PA = PB."],
      "If two tangents from P measure x+2 and 2x-1, equality gives x=3 and each tangent is 5 units.",
      ["Why is a tangent perpendicular to the radius at the contact point?","How many tangents can be drawn from an external point?"]),
    note("Class 10","Mathematics","Areas Related to Circles","Calculate sectors, arcs and composite shapes.",
      ["The sector area is the same fraction of the circle's area as its angle is of 360 degrees.","Arc length uses the same angle fraction applied to the circumference.","For composite figures, sketch the parts and subtract empty regions only once.","State units: lengths use units, while area uses square units."],
      ["Sector area = theta/360 x pi r^2","Arc length = theta/360 x 2 pi r, with theta in degrees."],
      "For radius 7 and angle 90 degrees, sector area = 1/4 x pi x 49.",
      ["Find the circumference of a circle of radius 14.","What fraction of the circle is a 72-degree sector?"]),
    note("Class 10","Mathematics","Surface Areas and Volumes","Choose formulas according to solid shape and exposed surfaces.",
      ["Identify whether the question asks for curved surface area, total surface area or volume.","For a combined solid, count only exposed faces; a joined circular face may be hidden internally.","Convert all dimensions to the same unit before substituting.","Dimensional checks catch errors: area has square units and volume cubic units."],
      ["Cylinder volume = pi r^2 h; curved area = 2 pi r h","Cone volume = (1/3) pi r^2 h; sphere volume = (4/3) pi r^3"],
      "A cylinder with r=3 cm and h=5 cm has volume 45 pi cubic cm.",
      ["Why is a cone's volume one-third of a cylinder with the same base and height?","Which surfaces are exposed when two solids are joined?"]),
    note("Class 10","Mathematics","Geometrical Constructions","Use ruler-compass constructions and preserve the reason for each step.",
      ["A construction is a sequence of geometric operations, not a freehand sketch.","For a line division in a given ratio, a ray and equal compass steps create a proportional construction.","Tangent constructions use the perpendicular-radius property or a right angle at the point of contact.","Keep compass width fixed where needed and mark construction arcs clearly."],
      ["A parallel line through a point can be constructed using equal corresponding angles or a standard proportional construction."],
      "To divide a segment in ratio 3:2, mark five equal intervals on an auxiliary ray and join the fifth point to the segment endpoint.",
      ["Why is the auxiliary ray divided into equal intervals?","Which theorem justifies the tangent at a point on a circle?"]),
    note("Class 10","Science","Metals and Non-Metals","Compare properties, reactions and extraction principles.",
      ["Metallic character is often associated with conductivity, malleability and electron loss, but there are exceptions.","Many metals react with oxygen, water or acids; reaction rates vary by metal and conditions.","Ionic compounds often have high melting points and conduct when molten or dissolved because ions can move.","Extraction depends on reactivity: highly reactive metals generally require electrolysis, while less reactive ores may be reduced chemically."],
      ["Metal + dilute acid -> salt + hydrogen for suitable reactive metals.","Oxidation in extraction often removes oxygen from a metal oxide."],
      "Zinc displaces copper from copper sulfate solution: Zn + CuSO4 -> ZnSO4 + Cu.",
      ["Why does solid sodium chloride not conduct like molten sodium chloride?","Why is electrolysis used for very reactive metals?"]),
    note("Class 10","Science","Carbon and Its Compounds","Explain covalent bonding, carbon chains and common organic groups.",
      ["Carbon forms four covalent bonds and can bond to itself, creating chains, branches and rings.","Saturated hydrocarbons have single carbon-carbon bonds; unsaturated hydrocarbons contain double or triple bonds.","Homologous series members share a functional group and general formula with gradual property changes.","Combustion and oxidation products depend on oxygen supply and reaction conditions."],
      ["Alkanes: CnH2n+2 for open-chain saturated compounds.","Alcohol: -OH; carboxylic acid: -COOH; aldehyde: -CHO."],
      "Ethene contains a C=C double bond and can undergo addition reactions.",
      ["Why can carbon form long chains?","Distinguish saturated and unsaturated hydrocarbons."]),
    note("Class 10","Science","Control and Coordination","Describe nervous and hormonal signalling in animals and plants.",
      ["Receptors detect stimuli; sensory neurons transmit signals to the central nervous system and motor pathways connect to effectors.","Reflexes provide rapid responses through a reflex arc, though complex processing can also involve the brain.","Hormones travel through body fluids and can regulate growth, metabolism and internal balance.","Plant responses use growth-regulating chemicals and may be directional, as in tropisms."],
      ["Reflex arc: receptor -> sensory neuron -> relay pathway -> motor neuron -> effector."],
      "A shoot bending toward light is phototropism and is related to differential growth.",
      ["Why is a reflex action often rapid?","How does a hormone differ from a nerve impulse?"]),
    note("Class 10","Science","How Do Organisms Reproduce?","Compare asexual and sexual reproduction and their biological trade-offs.",
      ["Asexual reproduction can produce genetically similar offspring quickly, while sexual reproduction combines genetic material from two gametes.","Fission, budding, fragmentation and spore formation are different asexual strategies.","In flowering plants, pollination transfers pollen; fertilisation follows when male and female gametes fuse.","Human reproductive health includes informed choices, hygiene, contraception and prevention of sexually transmitted infections."],
      ["Fertilisation restores the diploid chromosome number when haploid gametes fuse."],
      "Asexual reproduction is useful when conditions are stable; sexual reproduction increases variation in offspring.",
      ["How does pollination differ from fertilisation?","Give one advantage and one limitation of asexual reproduction."]),
    note("Class 10","Science","Heredity and Evolution","Use inheritance patterns to connect genes, variation and populations.",
      ["Genes influence inherited traits; alleles can differ in their effects and may show dominance relationships.","A Punnett square organises gamete combinations and predicts probabilities, not guaranteed outcomes for a small family.","Inherited variation and differential reproductive success can contribute to evolution over generations.","Acquired changes during an individual's lifetime are not automatically passed to offspring."],
      ["For Aa x Aa, genotype ratio is 1 AA : 2 Aa : 1 aa under standard Mendelian assumptions."],
      "In a monohybrid Aa x Aa cross, each offspring has probability 1/4 of being aa.",
      ["Why are probabilities not promises for each child?","How do inherited and acquired traits differ?"]),
    note("Class 10","Science","The Human Eye and the Colourful World","Explain accommodation, common vision defects and atmospheric optics.",
      ["The eye lens changes focal length to focus near and distant objects on the retina; this is accommodation.","Myopia focuses distant objects in front of the retina and is commonly corrected with a diverging lens.","Hypermetropia focuses near objects behind the retina and is commonly corrected with a converging lens.","Scattering depends on wavelength; shorter wavelengths scatter more strongly in many small-particle conditions."],
      ["Lens power P=1/f when focal length f is measured in metres."],
      "A lens with focal length -0.5 m has power -2 dioptres.",
      ["Which lens corrects myopia?","Why can the sky appear blue under common daytime conditions?"]),
    note("Class 10","Science","Sources of Energy","Compare energy sources through reliability, environment and resource limits.",
      ["A useful energy source should be assessed by availability, cost, transport, safety and environmental impact.","Fossil fuels are energy-dense but emit pollutants and greenhouse gases; extraction also has environmental costs.","Solar, wind, hydro, biomass and geothermal options depend on local resources and system design.","No energy source is impact-free; storage, transmission, lifecycle materials and land use matter."],
      ["Power measures energy per unit time; energy use depends on power and duration."],
      "A 1 kW appliance running for 3 hours uses 3 kWh of electrical energy.",
      ["Why do intermittent renewable sources often need storage or flexible demand?","Distinguish power from energy."]),
    note("Class 10","Social Science","Power Sharing","Explain why sharing political power supports democratic stability.",
      ["Power sharing can reduce conflict by giving groups a stake in decision-making.","Horizontal power sharing separates legislature, executive and judiciary; vertical power sharing divides authority across levels.","Checks and balances limit concentration of power and support accountability.","The design of institutions reflects social history and constitutional choices."],
      ["Democracy requires accountability and opportunities for participation."],
      "An independent judiciary can review whether public authorities act within constitutional limits.",
      ["Distinguish horizontal and vertical power sharing.","Why can power sharing reduce social conflict?"]),
    note("Class 10","Social Science","Political Parties","Understand party functions and common challenges in representative democracy.",
      ["Parties contest elections, form governments, organise opposition and connect public demands to policy.","A party platform communicates priorities, though implementation depends on institutions, resources and political constraints.","Common challenges include concentration of leadership, money power, limited internal democracy and dynastic succession.","Reform proposals should be assessed for enforceability, fairness and effects on participation."],
      ["A democratic party system requires meaningful competition and accountable representatives."],
      "A credible reform can include transparent funding disclosures and fair internal selection processes.",
      ["Name three functions of political parties.","Why does internal party democracy matter?"]),
    note("Class 10","Social Science","Agriculture and Food Security","Connect farming systems, seasons, inputs and sustainability.",
      ["Cropping patterns depend on climate, soils, irrigation, markets, technology and local knowledge.","Kharif crops are commonly associated with the monsoon season; rabi crops are commonly sown in cooler months, with regional variation.","Sustainable farming protects soil, water, biodiversity and farmer livelihoods over time.","Food security includes availability, access and the ability to obtain adequate nutrition."],
      ["Agricultural productivity is influenced by yield per area, input quality and weather risk."],
      "Crop diversification can reduce dependence on one crop but should consider local ecology and market access.",
      ["Distinguish food availability from food access.","Name two practices that help conserve soil or water."]),
    note("Class 10","Social Science","Globalisation and the Indian Economy","Trace how trade, investment and technology connect economies.",
      ["Globalisation increases flows of goods, services, investment, information and people across borders.","Multinational companies may organise production across countries to manage costs, markets, skills and supply chains.","Benefits and costs can be uneven across workers, firms and regions; labour protections and competition rules affect outcomes.","Trade agreements and public policy influence the distribution of gains and risks."],
      ["A supply chain connects stages of production, transport and sale across firms or locations."],
      "A product assembled locally may use components sourced from several countries.",
      ["Why can globalisation benefit some workers while harming others?","What can governments do to protect workers and consumers?"]),
    note("Class 10","Hindi","Hindi Grammar and Writing Skills","A flexible revision pack for common Hindi language tasks.",
      ["Identify whether the question asks for comprehension, grammar, writing format or literature analysis.","For formal writing, keep the audience, purpose, register and required format in view.","In grammar questions, identify the rule and apply it to the sentence rather than guessing from sound alone.","For prose or poetry responses, refer to a textual detail and explain its importance."],
      ["Exam response: सीधे प्रश्न का उत्तर -> उचित उदाहरण/पाठ-संदर्भ -> संक्षिप्त निष्कर्ष."],
      "Before submitting a letter, check the format, subject, salutation, concise body and closing.",
      ["Why should the answer follow the exact question wording?","Name two checks for formal Hindi writing."]),
    note("Class 11","Mathematics","Relations and Functions","Use Cartesian products, mappings and domain-range language.",
      ["A relation from A to B is a subset of A x B; a function assigns exactly one output to every domain input.","Domain is the permitted input set, codomain is the declared target set and range is the set of actual outputs.","One-to-one and onto describe different mapping properties; neither is implied by being a function alone.","Composition requires compatible domain and codomain, and order matters in general."],
      ["For composition, (f after g)(x)=f(g(x)) where both functions are defined."],
      "For f(x)=x+1 and g(x)=2x, f(g(x))=2x+1 while g(f(x))=2x+2.",
      ["Can two inputs share the same output in a function?","Distinguish range from codomain."]),
    note("Class 11","Mathematics","Complex Numbers and Quadratic Equations","Extend arithmetic with i squared equals -1 and solve quadratics.",
      ["A complex number is a+bi with real a,b and i^2=-1.","Add real and imaginary parts separately; multiply using i^2=-1.","The conjugate of a+bi is a-bi and the product with its conjugate is a^2+b^2.","For real-coefficient quadratics, complex roots occur in conjugate pairs when non-real roots exist."],
      ["|a+bi|=sqrt(a^2+b^2)","(a+bi)(a-bi)=a^2+b^2"],
      "The modulus of 3+4i is sqrt(9+16)=5.",
      ["Compute (1+2i)(3-i).","Why do non-real roots of a real quadratic occur as conjugates?"]),
    note("Class 11","Mathematics","Sequences and Series","Recognise arithmetic and geometric patterns and use sum formulas.",
      ["An AP has constant difference; a GP has constant ratio between consecutive nonzero terms.","For geometric series, the ratio and number of terms determine whether sums grow, shrink or converge in relevant contexts.","Sigma notation compactly represents repeated addition; index bounds matter.","Estimate the scale of a result to catch missing factors or incorrect exponents."],
      ["GP nth term: a r^(n-1)","Finite GP sum when r is not 1: S_n=a(r^n-1)/(r-1)."],
      "For 2,6,18,... the common ratio is 3 and the fifth term is 2 x 3^4 = 162.",
      ["How does a GP differ from an AP?","Find the sum of 3+6+12+24."]),
    note("Class 11","Mathematics","Permutations and Combinations","Distinguish ordered arrangements from unordered selections.",
      ["Use permutations when order matters and combinations when only the selected group matters.","State restrictions clearly: repetition allowed, objects identical, or certain positions fixed all change the count.","The factorial n! counts arrangements of n distinct objects in order.","Use complementary counting when it is easier to count all outcomes and subtract unwanted cases."],
      ["nPr=n!/(n-r)!","nCr=n!/[r!(n-r)!]"],
      "Choosing 2 students from 5 gives 5C2 = 10 groups, while appointing president and secretary gives 5P2 = 20 arrangements.",
      ["Which count is larger: nPr or nCr for the same n and r?","When does order change the answer?"]),
    note("Class 11","Mathematics","Binomial Theorem","Expand integer powers and identify coefficients.",
      ["The theorem expands (a+b)^n using binomial coefficients for non-negative integer n.","The general term combines a binomial coefficient with powers of a and b whose exponents sum to n.","Symmetry nCr = nC(n-r) can reduce work.","Check that each term's total degree remains n for homogeneous expansions."],
      ["(a+b)^n = sum from r=0 to n of nCr a^(n-r)b^r."],
      "(x+2)^2 = x^2 + 4x + 4.",
      ["How many terms appear in (a+b)^5 after combining like terms?","What is the coefficient of x^2 in (x+1)^4?"]),
    note("Class 11","Mathematics","Conic Sections","Recognise circle, parabola, ellipse and hyperbola from their geometry.",
      ["Conic sections arise from intersections of a plane with a double cone; each has a characteristic focus/directrix or distance property.","A circle has constant distance from a centre; an ellipse has a constant sum of distances to two foci.","A parabola has equal distance from its focus and directrix; a hyperbola has a constant absolute difference of focal distances.","Match equation, orientation, centre/vertex and parameter before using a formula."],
      ["Circle: (x-h)^2+(y-k)^2=r^2.","A standard parabola y^2=4ax has vertex at origin and axis along x."],
      "The circle x^2+y^2=9 has centre (0,0) and radius 3.",
      ["How do ellipse and hyperbola focal-distance properties differ?","Find the centre and radius from a circle equation."]),
    note("Class 11","Physics","Units and Measurements","Use dimensions, significant figures and uncertainty carefully.",
      ["Choose SI units consistently and convert quantities before calculations.","Dimensional analysis checks whether terms can be added and whether an equation has compatible dimensions.","Measurement uncertainty limits meaningful digits; significant figures should reflect the precision of input data.","Absolute, fractional and percentage errors describe uncertainty in different forms."],
      ["Percentage error = (absolute error / measured magnitude) x 100%."],
      "Adding 2.0 m and 30 cm requires converting 30 cm to 0.30 m first.",
      ["Can dimensional analysis determine a pure numerical constant?","Why is 1.20 m more precise than 1.2 m in significant-figure notation?"]),
    note("Class 11","Physics","Motion in a Plane","Resolve vectors into components and analyse two-dimensional motion.",
      ["Vectors have magnitude and direction; components let you calculate in independent perpendicular axes.","For projectile motion without air resistance, horizontal acceleration is zero and vertical acceleration is -g under the usual sign convention.","Relative velocity depends on the chosen reference frame.","Draw axes and specify signs before resolving a vector."],
      ["A_x=A cos(theta); A_y=A sin(theta).","Projectile range at same launch/landing height: R=u^2 sin(2theta)/g."],
      "A 10 m/s vector at 30 degrees has horizontal component about 8.66 m/s and vertical component 5 m/s.",
      ["Why can horizontal and vertical projectile motions be treated separately?","What is the direction of centripetal acceleration?"]),
    note("Class 11","Physics","Thermal Properties of Matter","Relate temperature, heat, expansion and phase change.",
      ["Temperature indicates thermal state; heat is energy transferred because of a temperature difference.","Specific heat relates heat supplied to mass and temperature change; latent heat applies during phase change at nearly constant temperature.","Thermal expansion affects length, area and volume and matters in bridges, rails and measuring instruments.","Heat transfer occurs by conduction, convection and radiation."],
      ["Q=mc delta-T; during phase change Q=mL.","Linear expansion: delta-L = alpha L0 delta-T for small changes."],
      "Heating 0.5 kg of water by 10 K requires approximately 0.5 x 4200 x 10 = 21,000 J under constant specific-heat assumptions.",
      ["Why may temperature remain constant during melting?","Compare conduction and convection."]),
    note("Class 11","Physics","Oscillations and Waves","Connect periodic motion, restoring force, frequency and wave propagation.",
      ["Simple harmonic motion occurs when acceleration is proportional to displacement from equilibrium and directed opposite to it.","Frequency is cycles per second; period is seconds per cycle and T=1/f.","Mechanical waves transfer energy through a medium without bulk transfer of the medium itself.","Superposition explains interference; resonance occurs when driving frequency matches a system's natural frequency within the relevant damping conditions."],
      ["For ideal SHM: a=-omega^2 x; T=2pi/omega.","Wave speed v=f lambda."],
      "A frequency of 5 Hz corresponds to period 0.2 s.",
      ["Does a mechanical wave transport matter over long distances?","What is the relation between frequency and period?"]),
    note("Class 11","Chemistry","Some Basic Concepts of Chemistry","Use mole relationships and balanced equations in numerical problems.",
      ["The mole connects a count of particles to a measurable amount of substance.","Balanced equations give mole ratios, not automatically mass ratios.","A limiting reagent is consumed first and limits the amount of product formed.","Keep units with every step and round only at the end when appropriate."],
      ["n=m/M; particles = n x N_A.","Mole ratio follows coefficients of the balanced chemical equation."],
      "For 18 g of water with molar mass 18 g mol^-1, the amount is 1 mol.",
      ["Why must a chemical equation be balanced before stoichiometry?","What determines the limiting reagent?"]),
    note("Class 11","Chemistry","Classification of Elements and Periodicity","Explain recurring atomic and chemical trends.",
      ["Modern periodic table order is increasing atomic number, and periodic properties reflect electron configurations.","Atomic radius generally decreases across a period as effective nuclear attraction increases and generally increases down a group due to added shells.","Ionisation enthalpy, electron gain enthalpy and electronegativity trends have exceptions due to subshell and pairing effects.","Explain trends with electron structure rather than memorising arrows only."],
      ["Across a period, effective nuclear charge often rises; down a group, valence electrons occupy higher shells."],
      "A sodium atom is typically larger than a chlorine atom in the same period because effective nuclear attraction differs.",
      ["Why do trends have exceptions?","Compare atomic and ionic radii."]),
    note("Class 11","Chemistry","Thermodynamics","Distinguish system, surroundings, energy transfer and state functions.",
      ["A system exchanges energy and sometimes matter with its surroundings; define the boundary first.","Heat and work are transfer modes, while internal energy and enthalpy are state functions.","Sign conventions matter: state whether heat entering the system or work done by the system is positive.","Spontaneity depends on the thermodynamic conditions; a spontaneous process is not necessarily fast."],
      ["First law: delta-U = q + w under the chemistry sign convention where w is work on the system.","At constant pressure for suitable conditions, q_p=delta-H."],
      "An exothermic system releases heat and has negative enthalpy change under the usual sign convention.",
      ["Why is spontaneity different from reaction rate?","Which quantities depend on path: heat/work or internal energy?"]),
    note("Class 11","Chemistry","Hydrocarbons","Classify alkanes, alkenes, alkynes and aromatic compounds.",
      ["Alkanes contain single bonds, alkenes have at least one C=C and alkynes have at least one C triple bond.","Unsaturated bonds can undergo addition reactions; alkane reactions often include substitution under suitable conditions.","Combustion can be complete or incomplete depending on oxygen supply.","Structure and functional groups influence physical properties and reaction pathways."],
      ["Open-chain alkane: CnH2n+2; alkene with one double bond: CnH2n; alkyne with one triple bond: CnH2n-2."],
      "Ethene adds bromine under appropriate conditions, changing the bromine colour as the double bond reacts.",
      ["How do addition and substitution reactions differ?","Why can incomplete combustion produce carbon monoxide?"]),
    note("Class 11","Biology","The Living World and Biological Classification","Use shared characteristics to classify organisms and describe scientific naming.",
      ["Taxonomy organises organisms using shared features and evolutionary relationships.","Binomial nomenclature gives each species a two-part scientific name with genus followed by specific epithet.","Classification systems change with evidence, including molecular data; no scheme should be treated as immutable.","Scientific identification relies on diagnostic characteristics and reproducible evidence."],
      ["Taxonomic hierarchy commonly proceeds species -> genus -> family -> order -> class -> phylum/division -> kingdom."],
      "The genus name is capitalised and the specific epithet is lowercase in a standard binomial.",
      ["Why do scientists use universal scientific names?","Where does family sit in the taxonomic hierarchy?"]),
    note("Class 11","Biology","Plant and Animal Diversity","Relate classification to body organisation, reproduction and evolutionary traits.",
      ["Classification criteria include cell type, organisation, nutrition, reproduction and shared evolutionary ancestry.","Major plant groups differ in vascular tissue, seed production and whether seeds are enclosed by fruits.","Animal groups vary in symmetry, body cavity, segmentation, support structures and development.","A feature-based comparison table helps distinguish groups without relying only on memorised names."],
      ["Useful comparison axes: body symmetry, coelom, segmentation, vascular tissue, seeds and reproductive structures."],
      "Mosses lack the true vascular tissue found in ferns and seed plants.",
      ["Which plant groups form seeds?","Name two structural features used to classify animal groups."]),
    note("Class 11","Biology","Cell Cycle and Cell Division","Compare mitosis and meiosis across chromosome number and variation.",
      ["The cell cycle includes growth, DNA replication and division; checkpoints regulate progression.","Mitosis normally yields two genetically similar daughter cells with the same chromosome number.","Meiosis includes two divisions after one round of DNA replication and reduces chromosome number in gametes or spores in relevant life cycles.","Crossing over and independent assortment contribute to genetic variation."],
      ["DNA replication occurs before division; homologous chromosomes separate in meiosis I, sister chromatids in meiosis II."],
      "A diploid cell with 2n=8 produces haploid products with n=4 after meiosis, under the standard model.",
      ["What separates during anaphase I?","Why does meiosis introduce variation?"]),
    note("Class 11","Biology","Plant Structure and Animal Tissues","Connect tissue organisation with transport, support and function.",
      ["Plant meristematic tissues support growth; permanent tissues perform specialised storage, support, protection and transport roles.","Xylem transports water/mineral ions and phloem transports sugars and other solutes.","Animal epithelial tissue lines surfaces; connective tissues support and connect; muscle contracts; nervous tissue transmits signals.","Tissue structure is evidence for function, but exceptions and specialised subtypes exist."],
      ["Xylem and phloem are complex vascular tissues with different transport roles."],
      "Alveolar epithelium is thin to reduce diffusion distance during gas exchange.",
      ["How do xylem and phloem differ?","Which tissue type transmits electrical signals in animals?"]),
    note("Class 11","English","Reading Comprehension and Composition","Use evidence and format to create exam-ready responses.",
      ["Read the passage once for purpose and again to locate evidence for each question.","Inferential questions require a supported conclusion, not copying an unrelated sentence.","For a summary, retain central points and remove examples, repetition and decorative wording.","Match each writing task to its format, audience, tone and word limit."],
      ["Comprehension response: answer -> relevant evidence -> inference when needed."],
      "For a vocabulary-in-context question, test the word's meaning in its sentence rather than choosing a memorised synonym alone.",
      ["What distinguishes an inference from a direct statement?","Why should a summary avoid minor examples?"]),
    note("Class 11","Economics","Statistics for Economics","Organise data and choose suitable ways to present it.",
      ["Statistics includes collection, classification, tabulation, presentation, analysis and interpretation.","Primary data are collected first-hand for a purpose; secondary data were collected by another party or for another purpose.","Mean, median and mode summarise different aspects of a distribution.","Charts should have clear titles, labelled axes, consistent units and a scale that does not distort the pattern."],
      ["Arithmetic mean = sum of observations / number of observations."],
      "A median is less sensitive to one extreme observation than the arithmetic mean in many distributions.",
      ["What is the difference between primary and secondary data?","Which measure identifies the most frequent observation?"]),
    note("Class 11","Accountancy","Journal, Ledger and Trial Balance","Record transactions in a chronological and classified way.",
      ["The journal records transactions in date order; the ledger groups account entries by account.","Debit and credit rules depend on account type; explain the effect of a transaction before recording it.","Posting transfers journal entries to ledger accounts, and balances support the trial balance.","A trial balance can reveal arithmetic errors but cannot detect every missing or misclassified transaction."],
      ["Every recorded transaction follows the double-entry principle: total debits equal total credits."],
      "A cash purchase of stationery reduces cash and records stationery expense or supplies under the applicable accounting policy.",
      ["Why is posting to the ledger necessary?","Can an omitted transaction leave the trial balance in balance?"]),
    note("Class 11","Business Studies","Business Environment","Analyse how external forces shape business decisions.",
      ["The business environment includes economic, social, technological, political, legal and ecological forces.","Environmental scanning helps organisations identify opportunities and threats before changing plans.","Factors interact: a technology change may alter costs, customer expectations, regulation and competition at once.","Distinguish a controllable internal choice from an external condition a business must respond to."],
      ["A useful analysis links factor -> business impact -> possible response."],
      "A change in data-protection rules can affect how a company stores customer details and designs marketing systems.",
      ["Name three components of the business environment.","Why should a firm scan its environment continuously?"]),
    note("Class 12","Mathematics","Applications of Derivatives","Use derivatives to model rates, tangents and optimisation.",
      ["The derivative gives instantaneous rate of change and tangent slope where it exists.","Increasing/decreasing intervals depend on the sign of the first derivative across intervals in the domain.","Local extrema are candidates at stationary points or where the derivative is undefined; confirm behaviour around the candidate.","Optimisation requires translating the word problem into a function and checking feasible boundaries."],
      ["For differentiable f, f'(x)>0 indicates local increase on an interval; f'(x)<0 indicates decrease."],
      "For f(x)=x^2-4x, derivative is 2x-4 and the stationary point is x=2.",
      ["Why must domain restrictions be checked in optimisation?","What can a sign chart of f' tell you?"]),
    note("Class 12","Mathematics","Differential Equations","Represent relationships involving unknown functions and their derivatives.",
      ["A differential equation contains derivatives of an unknown function.","Order is the highest derivative order present after simplification; degree is defined only when the equation is polynomial in derivatives.","General solutions contain arbitrary constants; initial conditions can determine particular solutions.","Separate variables when terms can be rearranged into a function of y times dy and a function of x times dx."],
      ["For separable dy/dx=g(x)h(y), rearrange dy/h(y)=g(x) dx where permitted."],
      "dy/dx=2x integrates to y=x^2+C.",
      ["How do initial conditions determine constants?","What is the order of d2y/dx2 + y = 0?"]),
    note("Class 12","Mathematics","Vector Algebra and Three-Dimensional Geometry","Use vector components and spatial coordinates consistently.",
      ["Vectors are represented by components; their magnitude is the square root of the sum of squared components.","Dot product is scalar and connects angle to projection; cross product is vector and relates to oriented area.","Direction ratios and direction cosines describe line orientation; line equations need a point and direction.","Check whether a requested quantity is scalar, vector, angle or length before choosing an operation."],
      ["a dot b = |a||b| cos(theta)","|a x b| = |a||b| sin(theta)."],
      "For a=(1,2,2), magnitude is sqrt(1+4+4)=3.",
      ["When is a dot product zero?","What does the magnitude of a cross product represent geometrically?"]),
    note("Class 12","Physics","Moving Charges and Magnetism","Relate magnetic forces to velocity and fields.",
      ["A moving charge in a magnetic field experiences force perpendicular to both velocity and field.","Magnetic force does no work on a point charge because it is perpendicular to instantaneous velocity.","Current in a conductor is associated with a magnetic field; field geometry depends on the conductor and current direction.","Use vector rules and draw the velocity, field and force directions before choosing a sign."],
      ["F=q v x B; magnitude |F|=|q|vB sin(theta).","For a long straight wire, B is proportional to current and inversely proportional to distance in the ideal model."],
      "A charge moving parallel to a uniform magnetic field has zero magnetic force because sin(0)=0.",
      ["Why does magnetic force not change a charge's speed in an ideal field?","What is the force direction for a negative charge compared with a positive one?"]),
    note("Class 12","Physics","Dual Nature of Radiation and Matter","Compare particle and wave descriptions of light and matter.",
      ["The photoelectric effect shows that light transfers energy in photon-sized packets.","Emission depends on frequency reaching the threshold; increasing intensity above threshold mainly raises the number of emitted electrons in the ideal description.","Matter waves associate a wavelength with a particle's momentum.","Interpret a graph carefully: identify axes, threshold and slope before extracting constants."],
      ["Photon energy E=h nu.","de Broglie wavelength lambda=h/p."],
      "At fixed frequency above threshold, greater light intensity generally increases photoelectron emission rate, not maximum kinetic energy.",
      ["Why can't increasing intensity compensate for a frequency below threshold in the ideal photoelectric effect?","What does de Broglie wavelength depend on?"]),
    note("Class 12","Physics","Atoms, Nuclei and Radioactivity","Review quantised atomic levels, nuclear energy and decay.",
      ["Atomic line spectra reflect transitions between allowed energy levels.","Nuclear binding energy is related to mass defect; binding energy per nucleon helps compare nuclear stability.","Radioactive decay is stochastic for individual nuclei, while the half-life characterises population decay.","Use consistent units, especially when converting electronvolts and joules."],
      ["Remaining nuclei after n half-lives: N=N0(1/2)^n.","Energy and mass relation: E=mc^2."],
      "After three half-lives, one-eighth of the initial undecayed nuclei remain under the standard exponential model.",
      ["What does half-life mean for a large population?","What is mass defect?"]),
    note("Class 12","Physics","Semiconductor Electronics","Describe p-n junctions and elementary electronic components.",
      ["Semiconductors have conductivity between conductors and insulators and are strongly affected by temperature and doping.","Doping creates n-type or p-type material by introducing donor or acceptor impurities.","A p-n junction diode conducts readily in forward bias and strongly resists current in reverse bias within normal conditions.","Logic gates implement Boolean operations; understand truth tables as input-output definitions."],
      ["AND outputs 1 only when both inputs are 1; OR outputs 1 if at least one input is 1; NOT reverses its input."],
      "For inputs A=1 and B=0, AND returns 0 while OR returns 1.",
      ["How does forward bias affect a p-n junction barrier?","Write the truth table for NOT."]),
    note("Class 12","Chemistry","The d- and f-Block Elements","Relate electronic structure to properties of transition elements.",
      ["Transition-metal properties often include variable oxidation states, coloured ions, complex formation and catalytic activity.","Partially filled d subshells explain many trends, though individual elements show exceptions.","Lanthanide contraction affects the size similarity of later elements and separation chemistry.","Use oxidation-state reasoning to balance redox reactions and identify likely ions."],
      ["Oxidation state follows charge balance across the whole species."],
      "Many transition-metal complexes are coloured because electronic transitions can absorb visible-light wavelengths.",
      ["Why do transition elements often show variable oxidation states?","What is lanthanide contraction?"]),
    note("Class 12","Chemistry","Amines","Classify amines and connect basicity to structure.",
      ["Amines are derivatives of ammonia in which one or more hydrogen atoms are replaced by carbon-containing groups.","Primary, secondary and tertiary amines differ in the number of carbon groups bonded to nitrogen.","Basicity depends on lone-pair availability, solvent effects and substituent effects; avoid treating one trend as universal across every condition.","Aromatic amines may be less basic than comparable aliphatic amines because a lone pair can be delocalised."],
      ["Primary amine: RNH2; secondary: R2NH; tertiary: R3N."],
      "Aniline's nitrogen lone pair can interact with the benzene ring, affecting its basicity compared with many aliphatic amines.",
      ["How are primary and tertiary amines distinguished?","Why can resonance affect basicity?"]),
    note("Class 12","Chemistry","Biomolecules","Connect molecular structure to the biological role of major compounds.",
      ["Carbohydrates provide energy and structural materials; proteins are amino-acid polymers with shape-dependent functions.","Lipids are important in membranes and energy storage; many are hydrophobic or amphipathic.","Nucleic acids store, transmit or express genetic information through nucleotide sequences.","Enzymes are catalysts; temperature, pH and inhibitors affect activity through changes in molecular interactions."],
      ["Amino acids join by peptide bonds; nucleotides join by phosphodiester bonds."],
      "A protein can lose biological activity when its folded structure is disrupted even if its amino-acid sequence remains intact.",
      ["How does DNA differ from RNA in broad structure and roles?","Why can extreme pH denature an enzyme?"]),
    note("Class 12","Biology","Molecular Basis of Inheritance","Trace genetic information from DNA to RNA to protein.",
      ["DNA stores genetic information in nucleotide sequences; complementary base pairing supports replication and transcription.","Transcription makes RNA from a DNA template; translation uses ribosomes to read mRNA codons.","Mutations range from single-base changes to larger rearrangements and can have neutral, harmful or beneficial effects depending on context.","Gene regulation controls where and when genetic information is expressed."],
      ["Central dogma summary: DNA -> RNA -> protein, with important specialised exceptions in biology."],
      "A silent substitution changes a codon without changing the encoded amino acid in the genetic code.",
      ["Distinguish transcription and translation.","Can every mutation be assumed harmful?"]),
    note("Class 12","Biology","Biotechnology: Principles and Applications","Review recombinant DNA tools and responsible applications.",
      ["Restriction enzymes cut DNA at specific sequences; ligases join DNA fragments; vectors help carry DNA into host cells.","PCR amplifies selected sequences; gel electrophoresis separates DNA fragments by size under the chosen conditions.","Applications include medicine, agriculture, diagnostics and research, with biosafety and ethical review considerations.","A reported biotechnology result should be assessed by evidence, controls, reproducibility and real-world constraints."],
      ["PCR requires template DNA, primers, nucleotides and a suitable DNA polymerase."],
      "A gel band migrating farther under comparable conditions usually represents a smaller DNA fragment.",
      ["What is the role of a vector?","Why are control samples important in a biotechnology experiment?"]),
    note("Class 12","Biology","Reproductive Health","Understand contraception, fertility care and prevention of reproductive infections.",
      ["Reproductive health includes physical, emotional and social well-being as well as access to accurate information and care.","Contraceptive methods differ in mechanism, effectiveness, user requirements and protection against sexually transmitted infections.","STI risk can be reduced through barrier protection, testing, timely treatment and informed decisions.","Assisted reproductive technologies address some fertility challenges under medical supervision and with attention to consent and ethics."],
      ["Prevention, early testing, professional care and informed consent are central to reproductive health."],
      "Condoms can reduce STI transmission risk and also act as contraception when used correctly and consistently.",
      ["Do all contraceptives protect against STIs?","Why is confidential, reliable health education important?"]),
    note("Class 12","English","Literature Analysis and Formal Writing","Build answers that connect textual evidence with interpretation.",
      ["State an interpretation clearly, then ground it in a concrete detail from the text.","Analyse how imagery, contrast, tone, setting and character choices contribute to meaning rather than only summarising plot.","For formal formats, follow the prompt's required features, audience and word limit.","Use transitions to make reasoning explicit and proofread for clarity."],
      ["Analytical paragraph: claim -> textual detail -> explanation of effect -> link to theme/task."],
      "A mood analysis should identify an image or word choice and explain how it shapes the reader's response.",
      ["What makes textual evidence relevant to a claim?","How does analysis differ from summary?"])
  ];
  // Attach the expanded, chapter-relevant material to the existing individual chapter entries.
  // Earlier versions merely listed large "master guides" separately, leaving the short chapter cards unchanged.
  function chapterWords(value) {
    const stop = new Set(["that","this","with","from","into","about","using","use","when","where","what","which","their","there","then","than","have","has","and","the","for","for","class","chapter","guide","notes","note","basic","main","common","review","connect","describe","understand","explain","identify","compare","relate","based","principles","applications","structure","function","some","more","less","across","during","through","between","every","other","also","only","into"]);
    return String(value || "").toLowerCase().replace(/[^a-z0-9\s+-]/g," ").split(/\s+/).map((w) => w.replace(/s$/,"")).filter((w) => w.length > 2 && !stop.has(w));
  }
  const CHAPTER_ALIASES = {
    "gravitation":["gravity","gravitation","satellite","orbital","escape speed","kepler","gravitational field","potential energy"],
    "thermal properties of matter":["heat","temperature","expansion","calorimetry","latent heat","specific heat","conduction","radiation"],
    "oscillations and waves":["oscillation","wave","simple harmonic motion","restoring force","frequency","wavelength","resonance"],
    "equilibrium":["chemical equilibrium","ionic equilibrium","equilibrium constant","le chatelier","ph","buffer","solubility product"],
    "redox reactions":["oxidation","reduction","oxidation number","electron transfer","balancing redox"],
    "thermodynamics":["enthalpy","entropy","gibbs energy","heat","work","state function","hess law"],
    "hydrocarbons":["alkane","alkene","alkyne","benzene","addition","substitution","aromatic","organic mechanism"],
    "ray and wave optics":["ray optics","wave optics","lens","mirror","refraction","interference","diffraction","young double slit"],
    "atoms nuclei and radioactivity":["atom","nucleus","radioactivity","half life","binding energy","photoelectric","bohr","de broglie"],
    "semiconductor electronics":["semiconductor","diode","p-n junction","transistor","logic gate","doping","forward bias","reverse bias"],
    "aldehydes ketones and carboxylic acids":["carbonyl","aldehyde","ketone","carboxylic acid","nucleophilic addition","oxidation","reduction"],
    "amines":["amine","basicity","diazonium","aniline","nucleophilic substitution","nitrogen"],
    "biomolecules":["carbohydrate","protein","amino acid","nucleic acid","enzyme","lipid","glucose","peptide"],
    "polynomials":["polynomial","zeroes","zeros","roots","factor theorem","discriminant"],
    "pair of linear equations":["linear equation","simultaneous equation","elimination","substitution","intersection"],
    "electricity":["current","resistance","ohm law","potential difference","series circuit","parallel circuit","electric power"],
    "current electricity":["current","resistance","kirchhoff","emf","internal resistance","resistivity","circuit"],
    "electrostatics":["charge","electric field","potential","gauss law","capacitor","flux"],
    "chemical reactions and equations":["balancing","chemical equation","precipitate","oxidation","reduction","decomposition","displacement"],
    "acids bases and salts":["acid","base","ph","neutralisation","salt","indicator"],
    "cell structure and function":["cell membrane","organelle","nucleus","mitochondria","ribosome","cell theory"],
    "cell: structure and function":["cell membrane","organelle","nucleus","mitochondria","ribosome","cell theory"],
    "cell cycle and cell division":["mitosis","meiosis","chromosome","cell cycle","crossing over"],
    "principles of inheritance and variation":["mendel","inheritance","allele","genotype","phenotype","linkage","pedigree"],
    "molecular basis of inheritance":["dna","rna","replication","transcription","translation","genetic code","operon"],
    "human reproduction":["gamete","fertilisation","ovulation","spermatogenesis","pregnancy","menstrual cycle"],
    "ecology and ecosystems":["ecosystem","trophic","energy flow","population","biodiversity","nutrient cycle","succession"],
    "sets and functions":["set","mapping","domain","range","relation","function"],
    "relations and functions":["relation","mapping","domain","range","function"],
    "trigonometric functions":["trigonometric","sine","cosine","tangent","radian","period"],
    "limits and derivatives":["limit","derivative","rate of change","slope","continuity"],
    "continuity and differentiability":["limit","continuity","derivative","differentiability"],
    "applications of derivatives":["derivative","tangent","normal","maximum","minimum","monotonicity","rate of change"],
    "integrals":["integration","antiderivative","area","substitution","integration by parts","definite integral"],
    "differential equations":["differential equation","separable","order","initial condition","general solution"],
    "matrices":["matrix","inverse","row","column","determinant","linear system"],
    "determinants":["determinant","cofactor","adjugate","inverse","linear system"],
    "vector algebra and three-dimensional geometry":["vector","dot product","cross product","line","plane","direction vector","shortest distance"],
    "probability distributions":["distribution","random variable","expectation","variance","conditional probability"],
    "solutions and electrochemistry":["solution","molarity","molality","colligative","cell potential","nernst","electrode"],
    "chemical kinetics":["rate law","half life","activation energy","arrhenius","integrated rate"],
    "coordination compounds":["ligand","coordination number","oxidation state","geometry","isomerism","crystal field"],
    "the d- and f-block elements":["transition metal","oxidation state","unpaired electron","lanthanoid contraction","magnetic"],
    "moving charges and magnetism":["magnetic force","lorentz force","biot-savart","ampere","cyclotron"],
    "electromagnetic induction and ac":["faraday","lenz","magnetic flux","induced emf","alternating current","transformer"],
    "dual nature of radiation and matter":["photoelectric","photon","de broglie","work function","threshold frequency"],
    "atoms nuclei and radioactivity":["bohr","nuclear","radioactive","half life","binding energy","mass defect"],
    "semiconductor electronics":["semiconductor","diode","p-n junction","transistor","logic gate","doping","forward bias","reverse bias"],
    "ald ehydes ketones and carboxylic acids":["carbonyl","aldehyde","ketone","carboxylic acid","nucleophilic addition","oxidation","reduction"],
    "amines":["amine","basicity","diazonium","aniline","nucleophilic substitution","nitrogen"],
    "biomolecules":["carbohydrate","protein","amino acid","nucleic acid","enzyme","lipid","glucose","peptide"]
  };
  function chapterAliasList(item) {
    const key = String(item.chapter || "").toLowerCase();
    const aliases = [];
    Object.keys(CHAPTER_ALIASES).forEach((prefix) => { if (key.includes(prefix) || prefix.includes(key)) aliases.push(...CHAPTER_ALIASES[prefix]); });
    return aliases;
  }
  function sectionScore(item, section) {
    const heading = String(section && section.heading || "");
    const body = String(section && section.body || "");
    const all = (heading + " " + body).toLowerCase();
    const chapterTokens = chapterWords(item.chapter);
    const introTokens = chapterWords(item.intro);
    const pointTokens = chapterWords((item.points || []).join(" "));
    let score = 0;
    chapterTokens.forEach((word) => { if (word.length > 3 && all.includes(word)) score += 8; });
    introTokens.forEach((word) => { if (word.length > 3 && all.includes(word)) score += 1.5; });
    pointTokens.forEach((word) => { if (word.length > 4 && all.includes(word)) score += 0.35; });
    chapterAliasList(item).forEach((alias) => { if (all.includes(alias)) score += 5; });
    return score;
  }
  function guideMatchScore(item, guide) {
    let score = 0;
    if (guide.level === item.level) score += 4;
    if (guide.subject === item.subject) score += 4;
    const terms = chapterWords(item.chapter);
    const text = String(guide.chapter || "") + " " + String(guide.intro || "");
    terms.forEach((word) => { if (word.length > 3 && text.toLowerCase().includes(word)) score += 5; });
    chapterAliasList(item).forEach((alias) => { if (text.toLowerCase().includes(alias)) score += 2; });
    return score;
  }
  function genericDeepSections(item) {
    const points = Array.isArray(item.points) ? item.points : [];
    const conceptBody = points.map((point, index) =>
      "Core idea " + (index + 1) + ": " + point +
      " Read this as a relationship, not an isolated sentence: identify the object, condition, quantity or process being described; explain why the statement is true; then connect it to the next concept in the chapter. When a question changes a condition, state which part of this idea changes and which assumptions remain fixed."
    ).join("\n\n");
    const isMath = /mathematics|applied mathematics/i.test(item.subject || "");
    const isPhysics = /physics/i.test(item.subject || "");
    const isChem = /chemistry/i.test(item.subject || "");
    const isBio = /biology/i.test(item.subject || "");
    const isCS = /computer science|computer applications|informatics/i.test(item.subject || "");
    let workflow = "";
    if (isMath) workflow = "Start by writing what is given and what must be found. Define symbols and the allowed domain. Select the theorem/formula only after confirming its conditions, transform the expression one operation at a time, and preserve equality by applying the same valid operation to both sides. Do not divide by an expression before checking whether it can be zero. For geometry, name the theorem and identify matching points/sides on a labelled sketch. For statistics/probability, identify the population/sample space and denominator before calculating. At the end, substitute the result back, check the domain, simplify units if applicable, and ask whether the sign or size is sensible.";
    else if (isPhysics) workflow = "Make a small diagram and list the known quantities with units before selecting an equation. State the model assumptions (such as negligible air resistance, ideal component, uniform field, steady flow or constant acceleration) because an equation is only valid under its conditions. Choose a sign convention and keep it throughout. Substitute values with consistent SI units, keep symbolic steps visible, and distinguish scalar quantities from vectors. Check dimensions, direction/sign, limiting cases and significant figures. If energy or conservation can solve the problem more directly than force-by-force algebra, state the conserved quantity and why external work/force is negligible.";
    else if (isChem) workflow = "First identify every species, its formula/charge, the reaction conditions and what the question asks for. For equations, balance atoms and total charge; for redox, identify oxidation-state changes and electron balance. For numerical problems, convert the given quantities to moles or the stated concentration unit before using a ratio. For equilibrium or thermodynamics, distinguish the current state from the standard state and use the given sign convention. For organic chemistry, identify the functional group, reagent and conditions before choosing a mechanism. Finish by checking atom/charge conservation, units, physical plausibility and whether the conditions really support the claimed product.";
    else if (isBio) workflow = "Build the explanation as a sequence: structure or starting condition → mechanism/process → outcome → biological significance. Keep levels distinct (molecule, cell, tissue, organ, organism, population or ecosystem) and name the relevant location. When comparing two processes, use the same comparison criteria for both rather than writing two unrelated lists. For diagrams, learn labels and the function of each labelled part. In genetics, state the genotype assumptions before calculating a ratio; in ecology, distinguish matter cycling from energy flow. Use the prescribed NCERT terminology and avoid adding an exception unless the question or syllabus requires it.";
    else if (isCS) workflow = "Translate the prompt into inputs, outputs, constraints and a sequence of operations. Trace a small example by hand before writing the solution. For Python, distinguish assignment from comparison, mutable from immutable objects, value from reference, and local from global names. For files and databases, specify the mode/schema, check boundary/empty cases, and release resources safely. Test normal, boundary and invalid inputs, and explain why the algorithm returns the requested result rather than only giving code.";
    else workflow = "Identify the key term in the question and define it in the wording used by the prescribed course. Build the answer in a clear chain: context or cause → main event/feature → evidence or explanation → consequence or significance. Use specific details from the chapter instead of repeating the question. For a long answer, organise the response into short paragraphs or numbered points, explain the link between points, and conclude by answering the exact wording of the question. Distinguish fact, inference and evaluation; never invent a quotation, date or data point.";
    const formulas = Array.isArray(item.formulas) ? item.formulas : [];
    return [
      {heading:"Chapter framework and connections",body:"This chapter is titled “" + item.chapter + "”. Its central scope is: " + String(item.intro || "") + " The main ideas below should be learnt as a connected model. First, define each term precisely; next, understand the condition under which it applies; then practise using it to explain a situation or solve a question. The links between ideas are often what distinguish a full-mark answer from a short definition."},
      {heading:"Key ideas unpacked",body:conceptBody || String(item.intro || "")},
      {heading:"How to solve questions step by step",body:workflow},
      {heading:"Formula, process and result checks",body:(formulas.length ? "The chapter's listed relations/rules are: " + formulas.join("; ") + ". Before applying one, state what each symbol represents, keep units consistent, and check the condition under which it is valid. A relation gives a model; it is not a substitute for identifying the physical/chemical/mathematical situation." : "For this chapter, build a small glossary and a cause-and-effect/step sequence from the key ideas. If a process has stages, memorise the order and explain why each stage follows the previous one. If the topic compares categories, use consistent criteria and include one example for each category.") + " " + String(item.example || "")},
      {heading:"How to write a complete exam answer",body:"Use precise terminology and show the reasoning that connects the starting information to the conclusion. For a numerical question, keep the equation, substitution, working and final unit visible. For a proof or derivation, state the theorem/assumption before using it and do not skip the crucial algebraic or logical link. For a process or theory, explain both what happens and why it matters. A correct final number or keyword without the requested explanation may not earn all available marks."}
    ];
  }
  const deepChapterOverrides = [
    {
      level:"Class 11",subject:"Physics",chapter:"Gravitation",
      sections:[
        {heading:"1. Newton’s law of universal gravitation",body:"Every pair of masses attracts one another. The force acts along the line joining their centres, is proportional to the product of the masses, and is inversely proportional to the square of the centre-to-centre separation. The constant G is universal; it is not the same quantity as local gravitational acceleration g. For spherically symmetric bodies outside the body, the external field is equivalent to that of a point mass at its centre. In a multi-body situation, calculate each gravitational force/field separately and add vectors; attractions can reinforce or cancel depending on direction. For extended non-spherical bodies or locations inside a body, do not automatically use the point-mass shortcut without the relevant model."},
        {heading:"2. Gravitational field strength and acceleration due to gravity",body:"Field strength at a point is gravitational force per unit test mass; near a planet of mass M and radius-distance r from its centre, its magnitude is GM/r² and its direction is toward the planet’s centre. At the surface, g=GM/R². Mass m in that field experiences weight mg, so weight can change with location even though the body's mass remains the same. At altitude h above a spherical planet, r=R+h and g(h)=GM/(R+h)²=g_surface[R/(R+h)]². If h is much smaller than R, a first-order approximation gives g(h)≈g_surface(1−2h/R). Inside an ideal uniform-density sphere, g decreases linearly with distance from the centre; real planets do not have uniform density, so that simple internal result has a stated assumption."},
        {heading:"3. Gravitational potential and potential energy",body:"With potential defined as zero at infinity, gravitational potential due to a point/spherical mass is negative: V=−GM/r. A test mass m has potential energy U=mV=−GMm/r. Negative energy means the bound mass pair has lower energy than when infinitely separated; it does not mean the gravitational force is repulsive. Moving a mass from r1 to r2 changes potential energy by ΔU=GMm(1/r1−1/r2). Near Earth's surface, for small height change Δh≪R, this becomes approximately mgΔh. Use the exact expression for large changes in altitude, because g is not constant over large distances."},
        {heading:"4. Circular orbits, orbital speed and time period",body:"An orbiting satellite is in continuous free fall: gravity provides the centripetal acceleration needed to bend its velocity vector around the planet. For a circular orbit of radius r measured from the planet’s centre, set GMm/r²=mv²/r. This gives v=√(GM/r), which is independent of the satellite's mass in the ideal two-body model. The period is T=2πr/v=2π√(r³/GM), so higher circular orbits have lower speed but longer periods. Radius means centre-to-centre orbital radius; using altitude h in place of r is a common error. The circular-orbit results assume the satellite’s mass is small relative to the central body and other bodies/drag are negligible."},
        {heading:"5. Escape speed, orbital energy and Kepler’s laws",body:"Escape speed is the minimum launch speed that gives zero total mechanical energy at infinity in an ideal isolated gravitational field, ignoring atmosphere and propulsion after launch. At radius r, v_escape=√(2GM/r)=√2 times the circular-orbit speed at the same radius. For a circular orbit, kinetic energy is +GMm/(2r), potential energy is −GMm/r, and total energy is −GMm/(2r). Kepler’s laws describe elliptical planetary orbits: orbits are ellipses with the Sun at one focus; the radius vector sweeps equal areas in equal times; and the square of period is proportional to the cube of the semi-major axis for bodies orbiting the same central mass. State which orbital model is being used before substituting."},
        {heading:"6. Satellite types and common reasoning",body:"A geostationary satellite must orbit in the equatorial plane in the same direction as Earth’s rotation and have an orbital period equal to one sidereal day; only then does it appear fixed relative to a ground observer. A low-Earth-orbit satellite has a shorter period and moves across the sky relative to the surface. Astronauts in orbit feel weightless not because gravity has vanished, but because the spacecraft and occupants are accelerating together in free fall. On a conceptual question, explain the acceleration and reference frame rather than just saying “there is no gravity”."}
      ],
      formulas:[
        "F=Gm₁m₂/r²; force magnitude in N, masses in kg, r in m, G≈6.674×10⁻¹¹ N·m²·kg⁻²",
        "g=GM/r²; acceleration due to gravity in m·s⁻²",
        "V=−GM/r (gravitational potential in J·kg⁻¹); U=−GMm/r (potential energy in J)",
        "g(h)=g₀[R/(R+h)]²; for h≪R, g(h)≈g₀(1−2h/R)",
        "v_orbit=√(GM/r); T=2π√(r³/GM)",
        "v_escape=√(2GM/r)=√2 v_orbit for the same r",
        "Circular orbit: K=+GMm/(2r), U=−GMm/r, E_total=−GMm/(2r)",
        "Near surface: ΔU≈mgΔh only when height change is small compared with planetary radius"
      ],
      formulaCheatSheet:[
        {formula:"F=Gm₁m₂/r²",meaning:"Magnitude of the mutual attractive force between two point masses or spherical bodies treated as point masses externally.",when:"Use centre-to-centre distance, not surface gap; add force vectors for multiple masses.",units:"G in N·m²·kg⁻², m in kg, r in m, F in N.",trap:"Doubling r makes F one-quarter; doubling one mass doubles F."},
        {formula:"g=GM/r²",meaning:"Field strength/acceleration due to gravity at distance r from the centre of a spherical body.",when:"Use r=R+h above the surface. At the surface use r=R.",units:"g in m·s⁻², M in kg, r in m.",trap:"g depends on the planet and location; weight mg also depends on the object's mass."},
        {formula:"V=−GM/r; U=−GMm/r",meaning:"Potential is energy per unit mass; potential energy multiplies potential by the test mass.",when:"Use zero potential at infinity; exact equations are for the exterior point/spherical-mass model.",units:"V in J·kg⁻¹; U in J.",trap:"Potential and potential energy are negative under this reference choice, but gravitational force remains attractive."},
        {formula:"v=√(GM/r); T=2π√(r³/GM)",meaning:"Circular-orbit speed and period around a dominant central mass.",when:"Use r from the central body's centre and assume a circular orbit.",units:"v in m·s⁻¹; T in s.",trap:"Higher orbit means slower speed and longer period; do not use altitude as the orbital radius."},
        {formula:"v_escape=√(2GM/r)",meaning:"Minimum ideal speed for a body to reach infinity with zero residual speed.",when:"Use the starting distance from the centre; assume no drag or later propulsion.",units:"m·s⁻¹.",trap:"Escape speed is √2 times circular-orbit speed at the same radius."}
      ],
      workedExamples:[
        {title:"Example 1 — compare gravitational forces",steps:["Two masses are separated by r and exert force F=Gm₁m₂/r².","Replace separation by 2r while keeping masses fixed.","New force is F′=Gm₁m₂/(2r)²=F/4.","State the inverse-square reason; it is not merely “the force gets smaller”." ]},
        {title:"Example 2 — gravity at altitude equal to the planet's radius",steps:["Set h=R, so the distance from the centre is r=R+h=2R.","Use g(h)=GM/(2R)² and g₀=GM/R².","Therefore g(h)/g₀=R²/(2R)²=1/4.","At an altitude equal to Earth's radius, the ideal spherical model predicts one-quarter surface gravity." ]},
        {title:"Example 3 — derive circular orbital speed",steps:["For a satellite in a circular orbit, gravity supplies centripetal force: GMm/r²=mv²/r.","Cancel satellite mass m and one factor of r.","Rearrange to v²=GM/r.","Take the positive magnitude v=√(GM/r); note that a more massive satellite does not have a different circular speed at the same r in this model." ]}
      ],
      commonMistakes:["Using altitude h instead of orbital radius R+h in satellite equations.","Confusing universal constant G with local acceleration g.","Treating negative gravitational potential energy as a negative force.","Claiming gravity is zero for orbiting astronauts.","Applying the near-surface approximation ΔU≈mgΔh to a very large height change.","Forgetting that orbital speed and orbital period move in opposite directions as circular-orbit radius increases."],
      examFocus:["Derive g=GM/R² from Newton's law and weight.","Solve variation of g with altitude and, under stated uniform-density assumptions, depth.","Derive orbital velocity, time period and escape speed; state all assumptions.","Use conservation of energy to compare points in a gravitational field.","Explain weightlessness and geostationary conditions in words, not only formulas."],
      recall:["What is the difference between G and g?","Why is gravitational potential negative when zero is chosen at infinity?","What is the orbital radius if altitude above the surface is h?","Why does orbital speed decrease when circular-orbit radius increases?","Why do astronauts feel weightless in orbit even though Earth's gravitational field remains significant?","State the three Kepler laws in order.","Derive v_escape=√2 v_orbit for the same radius.","When is ΔU≈mgΔh valid?"],
      glossary:["Gravitational field strength: gravitational force per unit test mass at a point.","Gravitational potential: potential energy per unit mass with a chosen reference zero.","Orbital radius: distance from the central body's centre to the orbit.","Escape speed: minimum ideal speed needed to reach infinity with zero residual speed.","Geostationary orbit: equatorial prograde orbit whose period matches Earth's rotation."],
      sourceNote:"Original detailed study aid based on standard Class 11 gravitation concepts. Confirm the exact syllabus scope and notation with the prescribed NCERT edition and school syllabus."
    },
    {
      level:"Class 11",subject:"Physics",chapter:"Thermal Properties of Matter",
      sections:[
        {heading:"1. Temperature, thermal equilibrium and heat",body:"Temperature indicates the direction of spontaneous heat flow between systems in thermal contact; heat is energy transferred because of a temperature difference, not a substance stored in an object. The zeroth law supports temperature measurement: if A is in thermal equilibrium with C and B is also in thermal equilibrium with C, A and B share the same temperature. Always distinguish temperature change from heat transferred because the amount of material and its specific heat also matter."},
        {heading:"2. Thermal expansion of solids and liquids",body:"Heating generally increases average atomic separation, producing expansion. Linear expansion is described by ΔL=αL₀ΔT for a small temperature range where α is treated as constant; area and volume expansion have corresponding coefficients, often approximately 2α and 3α for isotropic solids. Expansion depends on material and original dimensions. In composite rods or rails, different coefficients create relative expansion and thermal stress if movement is constrained. Water has anomalous expansion near 0–4 °C, a textbook exception important for aquatic life."},
        {heading:"3. Calorimetry and change of state",body:"When no heat escapes, energy lost by hotter bodies equals energy gained by cooler bodies. For a temperature change without phase change use Q=mcΔT; the specific heat c is material-dependent. During melting or boiling at a fixed pressure, energy changes phase rather than raising temperature, so use Q=mL. A problem that contains warming, melting, further warming, boiling and steam heating must be split into stages, with a separate equation for each."},
        {heading:"4. Heat transfer: conduction, convection and radiation",body:"Conduction transfers energy through microscopic interactions without bulk motion of the material; metals are usually good conductors while many gases and porous materials are insulators. Convection transports energy through bulk fluid motion and is important in liquids and gases. Thermal radiation is electromagnetic and can travel through vacuum; its net rate depends strongly on absolute temperature and surface properties. Do not mix Celsius with Kelvin in radiation laws."},
        {heading:"5. Newton's cooling law and problem strategy",body:"For a small temperature difference between a body and its surroundings, the rate of cooling is approximately proportional to the excess temperature under suitable conditions. This approximation is not an exact law over arbitrarily large temperature differences. In calorimetry, first account for every component and phase, then solve energy balance. In expansion, keep the original length/area/volume distinct from the final dimension. In thermal-transfer questions, identify whether the process is conduction, convection, radiation or a combination."}
      ],
      formulas:["Q=mcΔT (no phase change)","Q=mL (phase change at the stated pressure)","ΔL=αL₀ΔT; ΔA≈2αA₀ΔT; ΔV≈3αV₀ΔT for isotropic solids and small changes","Conduction through a slab: rate of heat transfer ≈ kA(T_hot−T_cold)/L under steady one-dimensional conditions","Stefan-Boltzmann: P=εσAT⁴ for emitted radiation in the idealised model; net exchange uses T⁴−T_surroundings⁴"],
      formulaCheatSheet:[
        {formula:"Q=mcΔT",meaning:"Sensible heat for a body whose temperature changes without a phase change.",when:"Use c for the relevant material and valid temperature range.",units:"Q in J, m in kg, c in J·kg⁻¹·K⁻¹, ΔT in K or °C difference.",trap:"A temperature difference has the same numerical value in kelvin and Celsius; absolute radiation temperatures must use K."},
        {formula:"Q=mL",meaning:"Latent heat absorbed/released during a phase change.",when:"Use while the phase changes at the specified pressure and phase-change temperature.",units:"L in J·kg⁻¹, Q in J.",trap:"Do not use mcΔT for the ideal phase-change plateau; temperature can remain constant."},
        {formula:"ΔL=αL₀ΔT",meaning:"Small-change linear expansion.",when:"α is approximately constant and mechanical constraints are handled separately.",units:"α in K⁻¹; length units must match.",trap:"Use initial length L₀ in the simple formula and do not assume all solids have the same coefficient."}
      ],
      workedExamples:[
        {title:"Heating followed by melting",steps:["Calculate energy to warm the solid to its melting point with Q₁=mcΔT.","Calculate the melting energy with Q₂=mL.","Add the two stages, Q_total=Q₁+Q₂.","If more heating or boiling is involved, add a separate stage for each process." ]},
        {title:"Expansion percentage",steps:["Write ΔL=αL₀ΔT.","Divide by L₀ to obtain ΔL/L₀=αΔT.","Multiply by 100 for percentage change.","Check that ΔT is a temperature difference and that α uses inverse-temperature units." ]}
      ],
      commonMistakes:["Treating heat as the same thing as temperature.","Using sensible-heat and latent-heat formulas interchangeably.","Using Celsius absolute values in T⁴ radiation expressions.","Ignoring heat lost to the surroundings when the question specifies an ideal insulated calorimeter.","Assuming expansion coefficients are identical for all materials."],
      examFocus:["Draw a heating curve and mark temperature-changing versus phase-changing segments.","Show energy balance explicitly in calorimetry.","Distinguish the three heat-transfer mechanisms and give a physical example.","State assumptions for conduction and Newton's cooling law."],
      recall:["Why can temperature remain constant while a solid melts?","What is the difference between heat and internal energy?","How does a linear expansion coefficient enter the formula?","Which heat-transfer mode can occur through vacuum?","Why should a staged heating problem be split into multiple energy equations?"],
      glossary:["Specific heat capacity: heat needed per unit mass per unit temperature rise.","Latent heat: energy per unit mass for a phase change at stated conditions.","Thermal conductivity: material parameter describing conduction efficiency.","Thermal equilibrium: no net heat flow between bodies in thermal contact."]
    },
    {
      level:"Class 11",subject:"Physics",chapter:"Oscillations and Waves",
      sections:[
        {heading:"1. Periodic motion and simple harmonic motion",body:"Periodic motion repeats after a fixed interval T; frequency f=1/T counts cycles per second. Simple harmonic motion (SHM) is a special periodic motion where the restoring acceleration is proportional to displacement from equilibrium and opposite in direction: a=−ω²x. The minus sign is essential because the acceleration points back toward equilibrium. Not every oscillation is SHM; the linear restoring-force approximation is needed."},
        {heading:"2. SHM position, velocity, acceleration and energy",body:"A convenient displacement model is x=A cos(ωt+φ), where A is amplitude and φ is phase. Differentiating gives velocity and acceleration; the maximum speed is ωA and maximum acceleration is ω²A. Speed is maximum at equilibrium while magnitude of acceleration is maximum at the turning points. For an ideal oscillator, kinetic and potential energy exchange while total mechanical energy stays constant: E=½mω²A²."},
        {heading:"3. Spring and simple pendulum",body:"For a mass on an ideal spring, Hooke's law gives restoring force F=−kx, so ω=√(k/m) and T=2π√(m/k). Increasing mass increases period; increasing spring stiffness decreases it. A simple pendulum has T≈2π√(L/g) only for small oscillation angles, where sinθ≈θ. In that approximation, period is independent of bob mass and approximately independent of amplitude."},
        {heading:"4. Wave propagation and wave parameters",body:"A wave transfers energy and a disturbance without net transport of matter over a cycle in the ideal travelling-wave picture. Wavelength λ is distance between points in the same phase, frequency f is set by the source, and speed v=fλ. Mechanical waves require a material medium while electromagnetic waves can travel in vacuum. When a wave enters a new medium, frequency normally stays fixed at the boundary but speed and wavelength can change."},
        {heading:"5. Superposition, standing waves, sound and resonance",body:"When waves overlap, their displacements add according to superposition. Interference and standing-wave patterns depend on phase, boundary conditions and frequency. Resonance occurs when driving frequency is near a system's natural frequency and response can become large, subject to damping. Sound in air is longitudinal: pressure variations travel along the direction of propagation. For strings/open/closed pipes, identify which ends are nodes or antinodes before applying harmonic-frequency formulas."}
      ],
      formulas:["f=1/T; ω=2πf","SHM: a=−ω²x; x=A cos(ωt+φ)","v_max=ωA; a_max=ω²A","Spring: T=2π√(m/k)","Small-angle pendulum: T≈2π√(L/g)","Wave speed v=fλ"],
      formulaCheatSheet:[
        {formula:"a=−ω²x",meaning:"Restoring acceleration is proportional to displacement and opposite in sign in SHM.",when:"Use only for motion satisfying the SHM model.",units:"ω in rad·s⁻¹; x in m; a in m·s⁻².",trap:"At x=0 acceleration is zero but speed is maximum; at ±A speed is zero."},
        {formula:"T=2π√(m/k)",meaning:"Period of a mass-spring oscillator under the ideal linear-spring model.",when:"Use for small oscillations around equilibrium with negligible damping.",units:"m in kg, k in N·m⁻¹, T in s.",trap:"A stiffer spring gives a shorter period; amplitude does not enter this ideal formula."},
        {formula:"v=fλ",meaning:"Travelling-wave speed equals frequency times wavelength.",when:"Use a consistent wave and medium; at a stationary interface frequency stays fixed while λ may change.",units:"v in m·s⁻¹, f in Hz, λ in m.",trap:"Do not assume wavelength stays constant across two media."}
      ],
      workedExamples:[
        {title:"Mass-spring period",steps:["Record mass m and spring constant k in SI units.","Substitute into T=2π√(m/k).","Check dimensional units: m/k has units s², so its square root is seconds.","Compare trends: multiplying mass by four doubles the period; multiplying k by four halves it." ]},
        {title:"Wave-length from speed and frequency",steps:["Identify speed v and frequency f.","Use λ=v/f, derived from v=fλ.","Convert frequency to Hz and speed to m/s.","Check that wavelength is a length and explain whether the medium changed." ]}
      ],
      commonMistakes:["Dropping the minus sign in SHM acceleration.","Confusing amplitude with wavelength.","Assuming all periodic motion is SHM.","Using the simple-pendulum period for large angles without qualification.","Assuming both wave speed and frequency change at a stationary boundary."],
      examFocus:["Derive the spring period from Newton's law and Hooke's law.","Draw x, v and a against time or displacement for SHM.","Apply energy conservation between equilibrium and turning points.","Use v=fλ with correct boundary-condition reasoning.","For standing waves, identify node/antinode constraints before counting harmonics."],
      recall:["What defines SHM?","Where are speed and acceleration magnitude maximum?","How does spring stiffness affect period?","What remains unchanged when a wave crosses a stationary interface?","How do resonance and damping interact?"],
      glossary:["Amplitude: largest displacement from equilibrium.","Angular frequency: rate of phase change, measured in rad/s.","Node: location of zero displacement in a standing wave.","Antinode: location of maximum standing-wave displacement.","Resonance: large response when driving frequency is near a natural frequency."]
    },
    {
      level:"Class 11",subject:"Chemistry",chapter:"Equilibrium",
      sections:[
        {heading:"1. Dynamic equilibrium and equilibrium constant",body:"Chemical equilibrium in a closed system is dynamic: forward and reverse reactions continue, but their rates are equal, so macroscopic concentrations remain constant. For aA+bB ⇌ cC+dD, the concentration-based equilibrium expression is Kc=[C]^c[D]^d/([A]^a[B]^b), with activities approximated by concentrations in the textbook idealised model. Pure solids and liquids are omitted because their activity is treated as constant. K describes the equilibrium composition at a stated temperature; it is not a speed and does not say how quickly equilibrium is reached."},
        {heading:"2. Reaction quotient and Le Chatelier's principle",body:"The reaction quotient Q has the same algebraic form as K but is evaluated using the current composition. If Q<K, net forward progress tends to form products; if Q>K, net reverse progress tends to form reactants. Changing concentration or pressure shifts the composition toward a new equilibrium, but K does not change at fixed temperature. A catalyst increases both forward and reverse rates and helps the system reach equilibrium sooner; it does not change equilibrium composition."},
        {heading:"3. Temperature, pressure and Kp/Kc",body:"Temperature is the disturbance that changes the equilibrium constant. Heating an exothermic forward reaction favours the endothermic reverse direction; heating an endothermic forward reaction tends to favour products. For gaseous equilibria, pressure changes matter when the total gaseous stoichiometric amounts differ. Kp is expressed through partial pressures. Under the ideal-gas convention Kp=Kc(RT)^Δn, where Δn is gaseous product coefficient sum minus gaseous reactant coefficient sum."},
        {heading:"4. Ionic equilibrium: acids, bases, buffers and solubility",body:"Weak acids and bases ionise only partially, so equilibrium expressions and approximations determine their ion concentrations. pH is −log₁₀[H⁺] in the common concentration convention; pOH uses hydroxide concentration and pH+pOH≈14 at 25 °C for dilute aqueous conditions. A buffer resists pH change because a weak acid/conjugate-base pair consumes added H⁺ or OH⁻. Solubility product Ksp describes an ionic solid's saturated equilibrium; precipitation is assessed by comparing the ionic product with Ksp."},
        {heading:"5. Solve equilibrium problems systematically",body:"Write the balanced equation and the correct K expression first. Set up an ICE-style table (initial, change, equilibrium) where helpful; respect stoichiometric coefficients when changes are linked. Decide whether a small-x approximation is justified only after checking its size against the starting concentration. For pressure/concentration disturbances, reason about the new composition rather than changing K automatically. For acid-base questions, choose the relevant weak/strong model, then check whether water autoionisation or concentration assumptions matter."}
      ],
      formulas:["Kc=[products]^coefficients/[reactants]^coefficients, with pure solids/liquids omitted","Kp=Kc(RT)^Δn for ideal gaseous equilibria","Q<K: forward direction; Q>K: reverse direction","pH=−log₁₀[H⁺]; pH+pOH≈14 at 25 °C in dilute aqueous solution","For a weak acid HA, Ka=[H⁺][A⁻]/[HA] under the standard approximation","For an ideal buffer, pH≈pKa+log₁₀([A⁻]/[HA])"],
      formulaCheatSheet:[
        {formula:"Q compared with K",meaning:"Predicts the net direction needed to reach equilibrium.",when:"Calculate Q from the current composition using the balanced stoichiometric powers.",units:"Dimensionless in the thermodynamic-activity definition; school K expressions may carry apparent units under concentration conventions.",trap:"Q changes with composition; K remains fixed at the same temperature."},
        {formula:"Kp=Kc(RT)^Δn",meaning:"Converts gaseous equilibrium expressions using ideal-gas partial pressures.",when:"Δn counts only gaseous product moles minus gaseous reactant moles.",units:"Use consistent gas constant, pressure and concentration units.",trap:"If Δn=0, Kp=Kc in the ideal relation."},
        {formula:"pH=−log₁₀[H⁺]",meaning:"Logarithmic measure related to hydrogen-ion concentration.",when:"Use the concentration approximation appropriate to dilute aqueous solutions.",units:"pH is dimensionless.",trap:"A one-unit pH drop corresponds to ten-times higher [H⁺], not one additional unit of acidity."}
      ],
      workedExamples:[
        {title:"Direction from Q and K",steps:["Write K from the balanced reaction.","Insert current concentrations/partial pressures to calculate Q.","Compare Q and K numerically.","If Q<K, the reaction proceeds net forward; if Q>K, net reverse; if equal, the composition is at equilibrium." ]},
        {title:"Temperature versus catalyst",steps:["Identify whether the forward reaction is exothermic or endothermic.","For a temperature increase, reason which direction consumes the added heat.","Change K only in response to temperature.","If only a catalyst is added, expect faster approach but unchanged K and equilibrium composition." ]}
      ],
      commonMistakes:["Changing K when only concentrations or pressure are changed.","Including pure solids in the equilibrium expression.","Assuming a catalyst shifts equilibrium toward products.","Using Δn that includes pure liquids/solids.","Applying weak-acid approximations without checking their validity."],
      examFocus:["Form Kc/Kp from a balanced reaction and simplify correctly.","Explain Q versus K and distinguish equilibrium position from rate.","Predict concentration, pressure and temperature effects separately.","Solve weak acid/base pH and buffer questions with stated assumptions.","Compare ionic product with Ksp to predict precipitation."],
      recall:["Why is equilibrium called dynamic?","What does Q<K tell you?","Which disturbance changes K?","When are pure solids omitted from K?","What does a buffer do after a small acid addition?"],
      glossary:["Equilibrium constant: expression characterising equilibrium composition at a stated temperature.","Reaction quotient: the equilibrium expression evaluated at the current state.","Buffer: solution that resists a substantial pH change after a small addition of acid/base.","Solubility product: equilibrium constant for dissolution of a sparingly soluble ionic solid."]
    },
    {
      level:"Class 11",subject:"Chemistry",chapter:"Redox Reactions",
      sections:[
        {heading:"1. Oxidation numbers as electron bookkeeping",body:"Oxidation is loss of electrons and reduction is gain of electrons in the electron-transfer model. Oxidation number is a formal bookkeeping tool that helps identify which atom is oxidised or reduced, even when no free electron is visibly exchanged. In a neutral compound oxidation numbers sum to zero; in an ion they sum to the ion's charge. Common rules include elemental forms being zero, monatomic ions having their ionic charge, oxygen usually −2 with exceptions, and hydrogen usually +1 with non-metals or −1 in metal hydrides."},
        {heading:"2. Oxidising agents and reducing agents",body:"The oxidising agent causes another species to be oxidised and is itself reduced (its oxidation number decreases). The reducing agent causes another species to be reduced and is itself oxidised (its oxidation number increases). This naming convention is a common trap: the agent's name describes what it does to the other species, not the change it undergoes. In every complete redox reaction, electron loss and gain must balance."},
        {heading:"3. Balancing redox reactions",body:"In the oxidation-number method, assign oxidation numbers, identify increases/decreases, and choose coefficients so total increase equals total decrease; then balance remaining atoms and check charge. In the half-reaction method, split oxidation and reduction, balance atoms other than O and H, balance O with H₂O, H with H⁺ in acidic medium, and charge with electrons; combine and cancel common species. In basic medium, neutralise any introduced H⁺ using OH⁻ and simplify water. Follow the method and medium the question specifies."},
        {heading:"4. Redox as a foundation for electrochemistry",body:"A galvanic cell uses a spontaneous redox reaction to drive electron flow through an external circuit. Electrons move from the oxidation half-cell (anode) to the reduction half-cell (cathode). Oxidation always occurs at the anode and reduction at the cathode, whether the cell is galvanic or electrolytic; the electrode signs differ between cell types. Balancing redox equations is therefore a prerequisite for correctly finding electron number n in electrochemical calculations."}
      ],
      formulas:["Oxidation: oxidation number increases / electrons lost","Reduction: oxidation number decreases / electrons gained","In a balanced redox process: total electrons lost = total electrons gained","For any species: sum of oxidation numbers = overall charge"],
      workedExamples:[
        {title:"Assign oxidation number",steps:["Write the known oxidation numbers for common elements.","Let the unknown oxidation number be x.","Set the sum equal to zero for a neutral compound or equal to the overall charge for an ion.","Solve for x and confirm the result is consistent with the chemical species." ]},
        {title:"Balance in acidic medium",steps:["Split the equation into oxidation and reduction half-reactions.","Balance all atoms except O and H; balance O using water and H using H⁺.","Balance net charge with electrons.","Multiply half-reactions to equalise electron counts, add, cancel common species and check atoms/charge." ]}
      ],
      commonMistakes:["Calling the species reduced the reducing agent.","Failing to balance total charge after atom balance.","Using acidic-medium H⁺ steps in basic medium without neutralising them.","Assuming every oxygen atom has oxidation number −2 regardless of peroxide/superoxide or OF₂ exceptions."],
      examFocus:["Assign oxidation number with the sum rule.","Identify oxidant/reductant from oxidation-number changes.","Balance redox equations in the specified medium and show electron equality.","Connect electron count n with electrochemical cell quantities when relevant."],
      recall:["What happens to oxidation number during reduction?","Why are electrons multiplied before half-reactions are added?","How are H⁺ ions handled in a basic medium?","Which species is the oxidising agent in a given redox equation?"],
      glossary:["Oxidation number: formal charge-like bookkeeping value assigned to an atom.","Oxidising agent: species that accepts electrons and is reduced.","Reducing agent: species that donates electrons and is oxidised.","Half-reaction: one part of a redox reaction showing oxidation or reduction separately."]
    },
    {
      level:"Class 11",subject:"Chemistry",chapter:"Thermodynamics",
      sections:[
        {heading:"1. System, surroundings and state functions",body:"Choose a system (for example, the reacting chemicals) and treat everything else as surroundings. An open system exchanges matter and energy, a closed system exchanges energy but not matter, and an isolated system ideally exchanges neither. Internal energy U, enthalpy H, entropy S and Gibbs energy G are state functions: their changes depend on initial and final states, not the path. Heat q and work w are path-dependent energy-transfer modes, not state properties stored independently in the same way."},
        {heading:"2. First law and sign convention",body:"Energy conservation requires the change in internal energy to equal energy transferred as heat plus work under a stated sign convention. A common chemistry convention writes ΔU=q+w, where q is positive for heat absorbed by the system and w is positive for work done on the system. Some physics presentations define work done by the system as positive and write ΔU=q−W_by; never mix the formula from one convention with signs from the other. Expansion work against constant external pressure is w=−P_extΔV in the chemistry convention."},
        {heading:"3. Enthalpy, calorimetry and Hess's law",body:"Enthalpy is H=U+PV; at constant pressure, with only pressure-volume work and suitable conditions, heat transfer equals ΔH. Exothermic reactions have negative ΔH for the forward process; endothermic reactions have positive ΔH. Hess's law follows because enthalpy is a state function: reversing a reaction reverses the sign of ΔH, and multiplying its equation by a factor multiplies ΔH by that factor. Standard reaction enthalpy can be found from formation enthalpies as products minus reactants, each weighted by coefficient."},
        {heading:"4. Entropy and Gibbs energy",body:"Entropy relates to the number of accessible microscopic arrangements and energy dispersal. For a process at constant temperature and pressure, ΔG=ΔH−TΔS gives a thermodynamic criterion: ΔG<0 favours the forward direction under the stated conditions, ΔG=0 corresponds to equilibrium, and ΔG>0 favours the reverse direction. A thermodynamically favourable process may still be slow because kinetics and activation energy are separate questions. Use kelvin in the TΔS term and convert entropy units consistently."},
        {heading:"5. Thermodynamic problem workflow",body:"Write the system boundary, sign convention and process condition first. Decide whether the question asks ΔU, q, work, ΔH, ΔS or ΔG; they are related but not interchangeable. Convert all temperatures to kelvin for entropy/Gibbs relations, track joules versus kilojoules, and apply reaction coefficients to molar enthalpies. When combining equations with Hess's law, reverse/scale the reaction and ΔH together. State whether spontaneity is being judged at standard conditions or for the actual mixture."}
      ],
      formulas:["ΔU=q+w (chemistry sign convention: q into system positive, work on system positive)","w=−P_extΔV for expansion/compression against constant external pressure","H=U+PV; at constant pressure under usual conditions q_p=ΔH","ΔG=ΔH−TΔS, with T in K and consistent energy units","ΔG=ΔG°+RT ln Q; at equilibrium Q=K and ΔG=0","ΔH°_reaction=ΣνΔH°f(products)−ΣνΔH°f(reactants)"],
      workedExamples:[
        {title:"Use the first law",steps:["Write the selected system and sign convention.","Choose positive/negative q and w from their definitions.","Substitute in ΔU=q+w for the chemistry convention.","Check the meaning of the sign of ΔU after calculation." ]},
        {title:"Hess's law combination",steps:["Write the target equation.","Reverse or multiply each supplied reaction so species match the target.","Reverse or multiply its ΔH by the same factor.","Add reactions and enthalpy changes, cancelling intermediates." ]}
      ],
      commonMistakes:["Confusing work done on the system with work done by the system.","Using Celsius in TΔS or RT ln Q.","Treating ΔG<0 as a statement about reaction speed.","Forgetting to reverse the sign of ΔH when reversing an equation.","Mixing J and kJ in a single equation."],
      examFocus:["State the sign convention at the beginning of every first-law problem.","Use reaction stoichiometry correctly in formation-enthalpy sums.","Distinguish state functions from heat/work.","Explain why a spontaneous reaction can still be kinetically slow.","Connect ΔG and Q/K without asserting the standard state is always the actual state."],
      recall:["Which are state functions: heat, work, internal energy, enthalpy?","What does negative ΔH mean for the system?","What is required to use q_p=ΔH?","Why must temperature be in kelvin in ΔG=ΔH−TΔS?"],
      glossary:["State function: property depending on the state rather than the path.","Enthalpy: H=U+PV, useful for constant-pressure heat changes.","Entropy: state function associated with accessible microstates and energy dispersal.","Gibbs energy: criterion for thermodynamic favourability at constant temperature/pressure."]
    },
    {
      level:"Class 11",subject:"Chemistry",chapter:"Hydrocarbons",
      sections:[
        {heading:"1. Structure and classification",body:"Hydrocarbons contain only carbon and hydrogen. Alkanes have only carbon-carbon single bonds and are saturated; alkenes contain a carbon-carbon double bond, alkynes a triple bond, and aromatic compounds contain a conjugated ring such as benzene with special delocalisation. The general formula CₙH₂ₙ₊₂ applies to open-chain alkanes, CₙH₂ₙ to open-chain monoalkenes or cycloalkanes under the simplest case, and CₙH₂ₙ₋₂ to open-chain monoalkynes. Rings and multiple unsaturations change hydrogen count, so always check the structure before applying a general formula."},
        {heading:"2. Isomerism and nomenclature",body:"A structural isomer has the same molecular formula but different connectivity. Chain, position and functional-group isomerism may be relevant depending on the compound class; geometric isomerism requires restricted rotation and suitable substituents. Choose the longest appropriate parent chain, number it to give required substituents/multiple bonds the lowest possible locants, and use standard suffixes for unsaturation. Draw the structure from the name and verify the carbon count and valence."},
        {heading:"3. Alkanes: substitution and stability",body:"Alkanes are relatively unreactive because C–C and C–H sigma bonds are strong and the molecules are nonpolar overall. Under suitable light/heat conditions, halogenation can proceed through a radical chain: initiation creates radicals, propagation consumes and regenerates radicals, and termination combines radicals. The number and stability of possible substitution products depend on carbon environment and reaction selectivity. Do not use electrophilic-addition mechanisms for a saturated alkane."},
        {heading:"4. Alkenes and alkynes: addition",body:"The pi bond in an alkene/alkyne is electron-rich and can undergo addition reactions. In electrophilic additions, regioselectivity may follow stability of the carbocation-like intermediate under a given reagent/condition; peroxide effects are specific and should not be generalised to every reagent. Hydrogenation adds hydrogen, halogenation adds halogen, hydration adds water components, and oxidation products depend on reagent strength and conditions. For alkynes, multiple addition can occur depending on reagent equivalents."},
        {heading:"5. Benzene and aromatic substitution",body:"Benzene's six pi electrons are delocalised around the ring; the molecule is represented by resonance forms rather than alternating localised double bonds that react as ordinary isolated alkenes. Addition typically disrupts aromaticity, so benzene commonly undergoes electrophilic aromatic substitution in which a ring hydrogen is replaced and aromaticity is restored. Reagents such as nitration or halogenation require the appropriate catalysts/conditions; do not write a product without them. Substituents already on the ring can affect both rate and orientation of further substitution."}
      ],
      formulas:["Open-chain alkane: CₙH₂ₙ₊₂","Open-chain monoalkene: CₙH₂ₙ; open-chain monoalkyne: CₙH₂ₙ₋₂","Degree of unsaturation (simple CHN formula): DBE=(2C+2+N−H−X)/2, where X is halogens; oxygen/sulfur do not enter this count in the basic formula"],
      workedExamples:[
        {title:"Identify a homologous series",steps:["Count carbon atoms and identify single, double or triple bonds/rings.","Compare the formula with the appropriate open-chain series only if its assumptions hold.","Check valence and unsaturation against the drawn structure.","Name the compound and verify numbering." ]},
        {title:"Predict an alkene reaction",steps:["Identify the exact alkene and its possible nonequivalent carbon atoms.","Read the reagent, solvent, temperature and any peroxide/catalyst condition.","Choose the correct addition pathway and regioselectivity rule for those conditions.","Draw the product, check carbon count and bond valence, and mention stereochemistry if it is relevant." ]}
      ],
      commonMistakes:["Applying open-chain general formulas to cyclic compounds without adjustment.","Ignoring reagent conditions in organic reaction prediction.","Treating benzene as a normal alkene and forgetting aromatic stabilisation.","Using a rule such as Markovnikov's without checking whether the specified mechanism/conditions apply."],
      examFocus:["Classify structures and identify homologous series/isomers.","Explain radical substitution using initiation, propagation and termination.","Predict alkene/alkyne products only after reading reagent conditions.","Explain why benzene commonly undergoes substitution rather than ordinary addition.","Use valence and molecular formula to verify the proposed structure."],
      recall:["What is the difference between saturated and unsaturated hydrocarbons?","When does the alkane radical-halogenation chain start?","Why does benzene prefer electrophilic substitution?","What structural conditions are required for geometrical isomerism?"],
      glossary:["Homologous series: compounds with the same functional pattern and successive members differing by a structural unit.","Radical: species with an unpaired electron.","Electrophilic addition: addition initiated by an electrophile to an electron-rich multiple bond.","Aromaticity: stabilisation associated with a suitable cyclic conjugated pi-electron system."]
    }

    ,{
      level:"Class 12",subject:"Physics",chapter:"Ray and Wave Optics",
      sections:[
        {heading:"1. Refraction and total internal reflection",body:"Refraction occurs because the phase speed of light changes between media. Snell's law relates refractive indices and angles measured from the normal; the frequency remains fixed at a stationary boundary while speed and wavelength change. Total internal reflection is possible only when light travels from a higher-index medium to a lower-index one and the incidence angle exceeds the critical angle. Use the correct medium for the angle and do not apply the critical-angle condition in the reverse direction."},
        {heading:"2. Mirrors and thin lenses",body:"For mirror/lens calculations, choose one Cartesian sign convention and use it consistently for object distance, image distance and focal length. Sketch the principal rays as a check: parallel rays reflect/refract toward the focus for a converging system, while rays through the optical centre of a thin lens are treated as undeviated in the paraxial approximation. Magnification gives image height relative to object height; its sign indicates orientation under the chosen convention. A formula result should agree with the predicted real/virtual image type."},
        {heading:"3. Optical instruments and power",body:"A lens's power is the reciprocal of its focal length in metres; converging lenses have positive focal length under the standard convention and diverging lenses negative focal length. Combined thin lenses in contact have powers that add under the usual paraxial approximation. For compound instruments, distinguish angular magnification from linear magnification and check whether the final image is at infinity or at the least distance of distinct vision, because those assumptions change the expression."},
        {heading:"4. Interference and Young's double slit",body:"Coherent sources have a stable phase difference. In Young's double-slit setup, bright fringes occur for path difference mλ and dark fringes for (m+½)λ. Under the small-angle approximation, adjacent-fringe spacing is β=λD/d, where D is screen distance and d is slit separation. Increasing wavelength or screen distance spreads fringes; increasing slit separation reduces spacing. Always convert nanometres and millimetres into metres before numerical substitution."},
        {heading:"5. Diffraction and polarisation",body:"Diffraction is the spreading of waves around apertures/obstacles and becomes significant when their dimensions are comparable to wavelength. Single-slit diffraction gives a broad central maximum and side maxima; this differs from the regularly spaced interference fringes of two coherent narrow slits. Polarisation restricts the orientation of the transverse electric-field oscillation, giving evidence that light is transverse. Questions often test concept discrimination as much as calculation."}
      ],
      formulas:["Snell's law: n₁sin i=n₂sin r","Thin lens (Cartesian convention): 1/f=1/v−1/u","Lens power: P=1/f with f in metres; unit dioptre","Young's double slit: β=λD/d; bright path difference=mλ; dark=(m+½)λ","Critical angle: sin C=n₂/n₁ for n₁>n₂"],
      formulaCheatSheet:[
        {formula:"1/f=1/v−1/u",meaning:"Relates focal length, image distance and object distance under the stated Cartesian sign convention.",when:"Use for thin lenses in the paraxial approximation and keep u, v, f signs consistent.",units:"All distances must use the same length unit.",trap:"Do not mix sign conventions from different textbooks; check real/virtual image prediction."},
        {formula:"P=1/f (metres)",meaning:"Optical power measures how strongly a lens converges or diverges light.",when:"Convert focal length to metres first; for thin lenses in contact, powers add in the standard model.",units:"P in dioptres (m⁻¹).",trap:"A centimetre focal length cannot be used as if it were metres."},
        {formula:"β=λD/d",meaning:"Spacing between adjacent bright (or adjacent dark) fringes in Young's double-slit pattern.",when:"Use coherent slits, D much larger than d, and small-angle geometry.",units:"λ, D and d in consistent length units; β is a length.",trap:"Greater slit separation gives smaller fringe spacing."}
      ],
      workedExamples:[
        {title:"Young's double-slit fringe spacing",steps:["Write β=λD/d and convert every quantity to metres.","Substitute wavelength, screen distance and slit separation.","Simplify the length units; the result is a distance between adjacent fringes.","Check the trend: doubling D doubles β, while doubling d halves β." ]},
        {title:"Critical angle decision",steps:["Check that light travels from the higher-index medium into the lower-index medium.","Use sin C=n_lower/n_higher for the ideal interface.","Compare the incidence angle with C.","For incidence greater than C, total internal reflection occurs; below C, refraction occurs." ]}
      ],
      commonMistakes:["Measuring incidence angle from the surface instead of the normal.","Using a lens formula without stating the sign convention.","Confusing interference and diffraction fringe patterns.","Using non-coherent sources for a stable Young's double-slit result.","Forgetting the wavelength unit conversion."],
      examFocus:["Use a ray diagram before applying lens/mirror equations.","Separate image-distance sign from image type and orientation.","State the small-angle approximation behind fringe spacing.","Compare interference, diffraction and polarisation by mechanism, not memorised keywords."],
      recall:["Why does frequency remain fixed at a stationary refracting boundary?","What conditions are needed for total internal reflection?","How does fringe spacing change with slit separation?","What does polarisation tell us about light?"],
      glossary:["Principal axis: reference line through the optical centre and focus.","Coherent sources: sources with a stable phase relationship.","Diffraction: wave spreading around apertures and obstacles.","Polarisation: restricting oscillation orientation of a transverse wave."]
    },
    {
      level:"Class 12",subject:"Physics",chapter:"Dual Nature of Radiation and Matter",
      sections:[
        {heading:"1. Photons and quantised energy",body:"Electromagnetic radiation exchanges energy in photon-sized packets in the quantum picture. Photon energy is proportional to frequency and inversely proportional to wavelength. Intensity relates to energy arriving per unit area and time; at a fixed frequency, increasing intensity typically increases photon flux rather than the energy carried by each photon. Keep the difference between frequency and intensity explicit in conceptual answers."},
        {heading:"2. Photoelectric effect and threshold frequency",body:"In the photoelectric effect, a photon transfers energy to an electron at a material surface. Some energy pays the work function φ; the remainder becomes the maximum kinetic energy of the emitted electron. A threshold frequency exists below which the ideal single-photon model predicts no emission, regardless of intensity. Above threshold, raising frequency increases maximum kinetic energy, while raising intensity primarily increases the number of emitted electrons under the common conditions."},
        {heading:"3. Einstein's photoelectric equation and graphs",body:"Einstein's equation is hν=φ+K_max. Since K_max=eV_stop, a graph of stopping potential versus frequency is linear, with a slope related to h/e and a frequency-axis intercept equal to threshold frequency. The photoelectric current versus voltage graph describes collected electron rate and saturation current; it should not be confused with a graph of electron energy. Identify axes before reading a slope or intercept."},
        {heading:"4. de Broglie matter waves",body:"de Broglie proposed that a moving particle has wavelength λ=h/p. Thus higher momentum means shorter wavelength, and a particle at rest has no finite de Broglie wavelength in the simple p=0 limit. For a non-relativistic particle accelerated from rest through potential difference V, kinetic energy gained is qV, so p≈√(2mqV) and λ≈h/√(2mqV). This is useful for electron diffraction and microscopy concepts."},
        {heading:"5. Limits and interpretation",body:"Wave-particle duality does not mean classical particles and classical waves behave identically; different experiments reveal different observable aspects. Use the photon model to explain the photoelectric energy balance and the matter-wave model to estimate diffraction scales for particles. Keep the equations within their assumptions: the non-relativistic de Broglie expression should not be used when particle speeds approach the speed of light."}
      ],
      formulas:["Photon energy: E=hν=hc/λ","Photoelectric: K_max=hν−φ=eV_stop","Threshold frequency: ν₀=φ/h","de Broglie: λ=h/p; non-relativistic electron accelerated through V: λ≈h/√(2meV)"],
      formulaCheatSheet:[
        {formula:"K_max=hν−φ",meaning:"Maximum photoelectron kinetic energy after paying the material work function.",when:"Only when ν≥ν₀; use consistent energy units for hν and φ.",units:"K_max and φ in J or eV; V_stop in volts with K_max=eV_stop.",trap:"Intensity does not replace threshold frequency; below threshold, increasing intensity alone does not produce photoelectrons in the ideal model."},
        {formula:"λ=h/p",meaning:"Matter-wave wavelength associated with momentum p.",when:"Use the relativistic p=γmv if the particle is relativistic; the common accelerated-electron approximation assumes non-relativistic speed.",units:"h in J·s, p in kg·m·s⁻¹, λ in m.",trap:"The faster/more energetic the particle, the smaller its wavelength."}
      ],
      workedExamples:[
        {title:"Photoelectric energy balance",steps:["Find photon energy hν from frequency or wavelength.","Compare hν with work function φ to decide whether emission occurs.","If emission occurs, calculate K_max=hν−φ.","If stopping potential is requested, use K_max=eV_stop and convert units consistently." ]},
        {title:"de Broglie wavelength trend",steps:["Write λ=h/p.","If non-relativistic kinetic energy is given, use p=√(2mK).","Substitute the particle mass and energy in SI units.","State the inverse relation: doubling momentum halves wavelength." ]}
      ],
      commonMistakes:["Treating intensity and photon energy as the same quantity.","Ignoring the work function in photoelectric calculations.","Confusing photocurrent with maximum kinetic energy.","Using the non-relativistic formula for relativistic particles."],
      examFocus:["Read photoelectric graphs by axes and slopes/intercepts.","Connect stopping potential to maximum kinetic energy.","Distinguish what increasing frequency changes from what intensity changes.","Use de Broglie relation with the correct momentum model."],
      recall:["What does the work function represent?","What happens below threshold frequency?","How are stopping potential and K_max related?","How does de Broglie wavelength vary with momentum?"],
      glossary:["Photon: quantum of electromagnetic radiation in the photon model.","Work function: minimum energy needed to remove an electron from a material surface.","Stopping potential: retarding potential needed to stop the most energetic photoelectrons.","Matter wave: de Broglie wave associated with a particle's momentum."]
    },
    {
      level:"Class 12",subject:"Physics",chapter:"Atoms, Nuclei and Radioactivity",
      sections:[
        {heading:"1. Quantised atomic levels and spectra",body:"Atomic line spectra arise because electrons in atoms occupy allowed energy states rather than a continuous range of bound-state energies. A transition from a higher level to a lower level emits a photon whose energy equals the energy difference; absorption uses a photon with a matching energy difference. The photon energy is positive even when the atomic bound-state energies are written as negative relative to an ionised electron at infinity."},
        {heading:"2. Bohr model and its limits",body:"In the Bohr model for hydrogen-like atoms, allowed angular momentum and electrostatic attraction lead to discrete radii and energies. The model gives useful expressions for hydrogen and one-electron ions, but it is not a general modern model for multi-electron atoms. Check the nuclear charge Z in hydrogen-like expressions and distinguish principal quantum number n from atomic number."},
        {heading:"3. Nuclear composition, mass defect and binding energy",body:"A nucleus contains Z protons and N neutrons, with mass number A=Z+N. A bound nucleus has less mass than the sum of separated nucleon masses; this mass defect corresponds to binding energy through E=Δmc². Binding energy per nucleon is a useful broad indicator of nuclear stability. Energy may be released in fission or fusion when products have greater binding energy per nucleon, but actual reaction feasibility and rates also depend on barriers and conditions."},
        {heading:"4. Radioactive decay and half-life",body:"Radioactive decay of an individual nucleus is random; for a large population the number remaining follows an exponential law. After each half-life, half of the nuclei that remain decay, so after n half-lives the expected fraction left is (1/2)^n. Half-life is a property of the radioactive nuclide under the model, not the time required for every individual nucleus to decay. Activity is proportional to the number of undecayed nuclei."},
        {heading:"5. Nuclear reaction energy and precautions",body:"For a nuclear reaction, the Q-value is the difference between initial and final total rest energies (or corresponding mass values) under the chosen convention. Positive Q indicates energy release in the reaction; negative Q indicates energy input is required. Keep atomic versus nuclear masses consistent when calculating mass defect and account for electron masses when the data convention requires them. Do not equate radioactivity, fission and fusion as the same process."}
      ],
      formulas:["Eγ=hν=|E_i−E_f|","For hydrogen-like atom: E_n=−13.6 Z²/n² eV","A=Z+N","Binding energy: E_b=Δmc²","N(t)=N₀(1/2)^(t/t₁/₂); activity A=λN under the standard decay model"],
      formulaCheatSheet:[
        {formula:"Eγ=|E_i−E_f|",meaning:"Photon energy equals the magnitude of the atomic energy-level difference.",when:"Use the upper/lower level order to distinguish emission from absorption.",units:"Use eV or J consistently.",trap:"Negative bound-state energies do not mean photon energy is negative."},
        {formula:"N=N₀(1/2)^(t/t₁/₂)",meaning:"Expected remaining number or amount after time t under exponential decay.",when:"Use for a radioactive population and consistent time units.",units:"t and half-life in same units.",trap:"The formula describes a population expectation, not a prediction for a single nucleus."}
      ],
      workedExamples:[
        {title:"Remaining amount after half-lives",steps:["Calculate n=t/t₁/₂.","Use remaining fraction (1/2)^n.","Multiply by the initial nuclei/mass/activity as appropriate.","Check that the result decreases and remains between zero and the initial quantity." ]},
        {title:"Binding energy from mass defect",steps:["Calculate the separated-nucleon mass sum using consistent mass data.","Subtract bound nuclear mass to get mass defect Δm.","Use E=Δmc² and convert to joules or MeV as requested.","If binding energy per nucleon is needed, divide by A, not by Z." ]}
      ],
      commonMistakes:["Confusing mass number with atomic number.","Forgetting hydrogen-like formulas assume a one-electron ion.","Using a decay half-life as though all nuclei decay exactly at that moment.","Mixing atomic and nuclear mass conventions.","Dividing total binding energy by proton number instead of nucleon number."],
      examFocus:["Draw a level transition and identify photon emission/absorption.","Solve hydrogen-like energy transitions with Z and n clearly stated.","Calculate mass defect and binding energy with unit conversion.","Use half-life formulas for multi-step decay questions.","Explain why fusion/fission can release energy through binding energy per nucleon."],
      recall:["Why are atomic emission spectra discrete?","What is mass defect?","What fraction remains after three half-lives?","What does a positive reaction Q-value mean?"],
      glossary:["Mass number: total number of protons and neutrons in the nucleus.","Binding energy: energy needed to separate a nucleus into its constituent nucleons.","Half-life: time for expected number of undecayed nuclei to halve.","Activity: decay rate, proportional to the number of undecayed nuclei."]
    },
    {
      level:"Class 12",subject:"Physics",chapter:"Semiconductor Electronics",
      sections:[
        {heading:"1. Energy bands and intrinsic semiconductors",body:"In a solid, the large number of closely spaced atomic states form energy bands. The valence band is associated with bound valence electrons and the conduction band with mobile carriers. Semiconductors have a smaller band gap than typical insulators, so thermal energy can create electron-hole pairs. In an intrinsic semiconductor, carrier concentrations are set by the material and temperature; both electrons and holes contribute to conduction."},
        {heading:"2. Doping: n-type and p-type material",body:"Donor impurities provide additional electrons and produce n-type material; acceptor impurities create holes and produce p-type material. Doping changes the majority-carrier type but does not make a semiconductor a metal in every respect. The crystal remains approximately charge-neutral overall because mobile carriers are balanced by ionised dopant atoms. Keep majority and minority carriers distinct."},
        {heading:"3. p-n junction and biasing",body:"When p-type and n-type regions are joined, carriers diffuse and a depletion region with an internal electric field forms. Forward bias reduces the barrier and generally increases current strongly after the relevant turn-on region; reverse bias widens the barrier and permits only a small reverse current until breakdown. A diode's characteristic is nonlinear, so it is not an ordinary constant resistor. Current direction conventions should be stated clearly."},
        {heading:"4. Rectification, regulation and transistor action",body:"A rectifier converts AC to pulsating DC using diode conduction direction. A filter reduces ripple; a Zener diode can be used in reverse breakdown for voltage regulation when connected with the correct series resistor and operating conditions. In transistor operation, a small input/base-control change can control a larger collector/emitter current in the intended active region. Use the circuit configuration and terminal labels given in the diagram rather than assuming all devices have the same connection."},
        {heading:"5. Logic gates and truth tables",body:"Digital logic represents inputs and outputs using binary states. AND produces 1 only when all inputs are 1; OR produces 1 when at least one input is 1; NOT reverses the input. NAND and NOR are complements of AND and OR and can be used as universal gates. For truth-table questions, enumerate input combinations and apply one gate at a time from the input toward the output."}
      ],
      formulas:["Diode current-voltage behaviour is nonlinear; use the specified ideal/approximation model in circuit questions.","Output of AND: 1 only if all inputs are 1; OR: 1 if any input is 1; NOT: complement.","NAND = NOT(AND); NOR = NOT(OR)."],
      workedExamples:[
        {title:"Identify biasing",steps:["Locate the p-side and n-side of the diode from the symbol/material description.","Compare the battery polarity to the junction: forward bias lowers the barrier; reverse bias raises it.","Predict strong versus small current using the appropriate idealised model.","Check whether the question includes breakdown or a non-ideal diode characteristic." ]},
        {title:"Build a logic output",steps:["Write the given input combination.","Evaluate the first gate truth table.","Pass that output to the next gate.","Compare the result with the full truth table and state the output in binary form." ]}
      ],
      commonMistakes:["Confusing electrons with holes or majority/minority carriers.","Reversing forward and reverse bias.","Treating a real diode as a constant resistor in every operating region.","Forgetting inversion in NAND/NOR truth tables."],
      examFocus:["Compare intrinsic, n-type and p-type semiconductors.","Explain depletion region and forward/reverse bias with a labelled diagram.","Read I–V curves and identify operating regions.","Construct truth tables for compound logic circuits."],
      recall:["What is the majority carrier in n-type material?","How does forward bias affect the junction barrier?","Why is a diode nonlinear?","Why are NAND and NOR called universal gates?"],
      glossary:["Hole: effective positive carrier associated with an unoccupied valence-band state.","Doping: controlled impurity addition to alter carrier concentration.","Depletion region: junction region depleted of mobile majority carriers.","Rectification: conversion of AC into unidirectional pulsating output."]
    },
    {
      level:"Class 12",subject:"Chemistry",chapter:"Aldehydes, Ketones and Carboxylic Acids",
      sections:[
        {heading:"1. Carbonyl bond polarity and reactivity",body:"The carbonyl bond is polar because oxygen attracts electron density more strongly than carbon. The carbonyl carbon is electrophilic, so nucleophiles can attack it. Aldehydes commonly react more readily than ketones in nucleophilic addition because they are less sterically hindered and have one hydrogen instead of a second electron-donating carbon group. Reaction outcome depends on the reagent and conditions; do not infer a product from the functional group alone."},
        {heading:"2. Nucleophilic addition and oxidation/reduction",body:"For a simple nucleophilic addition, a nucleophile attacks carbonyl carbon, the π electrons shift toward oxygen, and subsequent protonation or reaction work-up gives the product. Aldehydes are readily oxidised to carboxylic acids under common oxidising conditions; ketones resist mild oxidation and may undergo cleavage under stronger conditions. Reduction converts the carbonyl group to an alcohol under suitable reagents. Reagent names and work-up determine the actual product."},
        {heading:"3. Distinguishing aldehydes from ketones",body:"Aldehydes generally respond to common mild oxidation tests such as Tollens' reagent; a positive silver-mirror test indicates reduction of the silver complex as the aldehyde is oxidised. Ketones generally do not give the same result under the standard conditions. Such tests are not substitutes for reading the reagent conditions and possible interferences. Use observations only when the question actually supplies them."},
        {heading:"4. Carboxylic acids and derivatives",body:"Carboxylic acids are acidic because the conjugate base carboxylate is stabilised by resonance over two oxygen atoms. Electron-withdrawing groups near the carboxyl group can increase acidity by stabilising negative charge; effects depend on distance and substitution. Carboxylic acids can form esters with alcohols under suitable acid-catalysed conditions. A reaction scheme should show reagents, conditions and by-products when the question requests a complete equation."},
        {heading:"5. Reaction prediction checklist",body:"Identify the functional group and whether the reagent acts as an oxidant, reductant, nucleophile, acid/base or derivative-forming reagent. Draw the correct intermediate or functional-group change, maintain carbon count unless the mechanism cleaves the chain, and verify valence. Use oxidation/reduction tests as qualitative evidence with appropriate limitations. When comparing acidity, compare conjugate-base stabilisation rather than memorising a list without explanation."}
      ],
      formulas:["Aldehyde: R–CHO; ketone: R–CO–R′; carboxylic acid: R–COOH","Oxidation-state/reagent reasoning must match the given conditions; no single universal product rule replaces the reaction scheme."],
      workedExamples:[
        {title:"Predict carbonyl reduction",steps:["Identify the aldehyde or ketone and its carbonyl carbon.","Read the reducing agent and work-up conditions.","Replace the carbonyl functionality with the appropriate alcohol group for the stated reaction.","Check whether the product is a primary alcohol (aldehyde) or secondary alcohol (ketone) in the basic case." ]},
        {title:"Compare acid strength",steps:["Draw the conjugate base after removal of H⁺.","Compare resonance and inductive stabilisation, including the distance of substituents.","The more stabilised conjugate base generally corresponds to the stronger acid under comparable conditions.","State that solvent and conditions can affect observed acidity." ]}
      ],
      commonMistakes:["Treating aldehydes and ketones as having identical oxidation behaviour.","Predicting a product without checking reagent/work-up conditions.","Calling the carbonyl oxygen electrophilic when the carbonyl carbon is the usual nucleophilic-attack site.","Forgetting that carboxylate resonance stabilisation explains acidity."],
      examFocus:["Show the attacking nucleophile and electrophilic carbon for addition mechanisms.","Distinguish oxidation and reduction of carbonyl compounds.","Use named tests and observations with correct specificity.","Explain acidity through conjugate-base stabilisation."],
      recall:["Why are aldehydes often more reactive than ketones toward nucleophilic addition?","What is the result of aldehyde oxidation?","Why are carboxylic acids acidic?","How do you distinguish oxidation from reduction in a product scheme?"],
      glossary:["Carbonyl group: C=O functional group.","Nucleophile: electron-pair donor.","Carboxylate: conjugate base of a carboxylic acid, resonance-stabilised.","Work-up: final step converting a reaction intermediate to the isolated product."]
    },
    {
      level:"Class 12",subject:"Chemistry",chapter:"Amines",
      sections:[
        {heading:"1. Classification and naming",body:"Amines are derived conceptually from ammonia by replacing one or more hydrogen atoms with organic groups. Primary amines have one carbon substituent on nitrogen, secondary have two and tertiary have three; this classification is not the same as a primary/secondary/tertiary carbon. Aromatic amines have nitrogen attached to an aromatic ring, as in aniline. Correctly identify the group attached directly to N before naming and classifying."},
        {heading:"2. Basicity and structure",body:"Amines are bases because the nitrogen lone pair can accept a proton. Basicity depends on the availability of that lone pair, the stability of the conjugate acid, solvation and steric effects. In aniline, the lone pair can be delocalised into the aromatic ring, making it less available for protonation than in comparable aliphatic amines under common aqueous comparisons. Inductive donation can increase electron density, but solvent and substitution change the order, so state the comparison conditions."},
        {heading:"3. Preparation and reactions",body:"Common routes include reduction of suitable nitro compounds, nitriles or amides, and nucleophilic substitution routes where conditions support them. Amines react with acids to form ammonium salts; primary amines have characteristic reactions that may differ from secondary/tertiary amines. With nitrous acid, the outcome depends on whether the amine is aliphatic or aromatic and on temperature. Never assume one reaction scheme fits all amine classes."},
        {heading:"4. Diazonium salts and aromatic synthesis",body:"Primary aromatic amines can form diazonium salts under cold acidic conditions (commonly near 0–5 °C in the standard syllabus route). Diazonium groups can be replaced by other groups under appropriate reagents, making them versatile intermediates for aromatic substitution and azo dye formation. The low-temperature condition controls stability; omit it and the proposed intermediate may not persist. Track the original ring substituent positions in multi-step synthesis."},
        {heading:"5. Predicting organic reactions",body:"Start with the class of amine, whether nitrogen is aliphatic/aromatic, and the reagent/temperature. Decide whether the lone pair acts as a base/nucleophile or nitrogen undergoes a reaction specific to that class. For basicity, compare lone-pair availability and conjugate-acid stabilisation. For synthesis, write intermediates in sequence and verify which group is added, removed or replaced at every step."}
      ],
      formulas:["Primary amine: RNH₂; secondary: R₂NH; tertiary: R₃N (for simple monoamines)","Aromatic diazotisation is normally performed cold under the specified acidic conditions."],
      workedExamples:[
        {title:"Compare basicity",steps:["Identify where the nitrogen lone pair is located and whether it is delocalised.","Compare electron-donating/withdrawing effects on the lone pair and conjugate acid.","Account for solvent/solvation if the question specifies an aqueous order.","Explain the order using structure; do not rely on an unexplained memorised list." ]},
        {title:"Plan an aromatic amine conversion",steps:["Identify the starting ring substituents and the desired final group.","Convert primary aromatic amine to diazonium salt only under the correct cold conditions.","Choose the appropriate replacement reagent for the target group.","Check the substitution position, lost nitrogen group and final product structure." ]}
      ],
      commonMistakes:["Classifying amines by the degree of the attached carbon rather than the number of carbon groups on nitrogen.","Assuming aniline is as basic as an aliphatic amine despite lone-pair delocalisation.","Ignoring temperature during diazotisation.","Applying the same nitrous-acid reaction to primary, secondary and tertiary amines."],
      examFocus:["Classify and name amines correctly.","Explain basicity order from structure and solvent.","Identify the conditions and products of diazotisation.","Track diazonium salts through multi-step synthesis schemes."],
      recall:["What determines primary/secondary/tertiary amine classification?","Why is aniline less basic than many aliphatic amines?","What temperature condition is important for aromatic diazotisation?","How does the outcome depend on amine class?"],
      glossary:["Amine: ammonia-derived compound with one or more carbon substituents on nitrogen.","Diazotisation: conversion of a primary aromatic amine to a diazonium salt under cold acidic conditions.","Conjugate acid: species formed when a base accepts a proton.","Azo compound: compound containing the –N=N– group."]
    },
    {
      level:"Class 12",subject:"Chemistry",chapter:"Biomolecules",
      sections:[
        {heading:"1. Carbohydrates and stereochemical forms",body:"Carbohydrates are polyhydroxy aldehydes/ketones or compounds that yield them on hydrolysis in the traditional introductory definition. Monosaccharides cannot be hydrolysed to simpler carbohydrate units; disaccharides and polysaccharides contain glycosidic linkages. Glucose and fructose share formula C₆H₁₂O₆ but differ in structure. Ring forms, anomeric position and glycosidic linkage influence whether a sugar is reducing and how it is digested."},
        {heading:"2. Proteins and amino acids",body:"Amino acids contain amino and carboxyl groups; at relevant pH they can exist as zwitterions with both positive and negative sites. Peptide bonds join amino acids to form polypeptides. Protein structure is described at primary, secondary, tertiary and quaternary levels. Heat or extreme pH can denature many proteins by disrupting higher-order interactions without necessarily breaking every peptide bond. Biological function depends on folded shape and sequence."},
        {heading:"3. Enzymes, vitamins and nucleic acids",body:"Enzymes are biological catalysts that lower activation energy and accelerate both directions toward equilibrium; they do not change equilibrium constants. Their activity depends on temperature, pH, substrate and inhibitors. Vitamins are organic micronutrients with differing solubility and roles; lack can cause specific deficiency syndromes but a single symptom is not a diagnosis. DNA and RNA are nucleotide polymers with sugar-phosphate backbones and nitrogen bases; their structure supports information storage and expression."},
        {heading:"4. Lipids and biological structure",body:"Lipids include fats/oils and other hydrophobic or amphipathic compounds. Triglycerides store energy; phospholipids form bilayer membranes because hydrophilic heads and hydrophobic tails arrange differently in water. Lipids are not defined by one repeating monomer in the same way proteins are defined by amino acids. Their properties depend on chain length and saturation; unsaturated bonds alter packing and many physical properties."},
        {heading:"5. How to answer biomolecules questions",body:"Separate structural description from biological function: name the relevant bond or monomer, then explain what that structure permits. For carbohydrate questions, draw/identify the unit and linkage; for protein questions, connect sequence/folding to function; for nucleic acids, distinguish nucleotide components and complementary pairing. Avoid claiming all enzymes work at one optimum temperature or that every carbohydrate is a reducing sugar. Use the exact examples prescribed by the current textbook."}
      ],
      formulas:["Glucose/fructose molecular formula: C₆H₁₂O₆ (same formula does not imply same structure)","Nucleotide = nitrogenous base + pentose sugar + phosphate group","Peptide bond joins amino-acid residues; glycosidic bond joins sugar units; phosphodiester bond links nucleotides"],
      workedExamples:[
        {title:"Identify a biological polymer",steps:["Look for the building unit: monosaccharide, amino acid or nucleotide.","Identify the linkage that joins repeat units.","State one structural consequence of that linkage.","Connect the structure to a function or property, using the example given in the question." ]},
        {title:"Explain enzyme denaturation",steps:["Identify conditions such as extreme heat or pH.","Explain how interactions stabilising higher-order structure are disrupted.","Link altered shape/active site to reduced activity.","Avoid claiming all denaturation breaks the primary peptide sequence." ]}
      ],
      commonMistakes:["Treating a molecular formula as proof that two molecules have the same structure.","Confusing peptide, glycosidic and phosphodiester bonds.","Saying enzymes change the equilibrium constant.","Claiming denaturation always hydrolyses the peptide backbone."],
      examFocus:["Know monomer, bond and function pairs.","Distinguish starch/cellulose/glycogen and nucleotide components as specified in the syllabus.","Explain how protein shape determines function and how denaturation changes activity.","Connect enzyme action to activation energy, not equilibrium shift."],
      recall:["What is a peptide bond?","What are the components of a nucleotide?","Why can glucose and fructose share a molecular formula?","What does enzyme denaturation usually disrupt?"],
      glossary:["Monosaccharide: simplest carbohydrate unit in the introductory classification.","Peptide bond: amide linkage between amino-acid residues.","Nucleotide: base, pentose sugar and phosphate unit.","Denaturation: loss of native higher-order structure and function in a biomolecule."]
    }
  ];
  function getDeepChapterOverride(item) {
    return deepChapterOverrides.find((x) => x.level === item.level && x.subject === item.subject && x.chapter === item.chapter) || null;
  }
  function enrichIndividualChapter(item) {
    // Only expand the original, short individual chapter cards; deep guide and cheat-sheet records stay untouched.
    if (item.depth === "detailed" || (item.sections && item.sections.length >= 4)) return item;
    const formulaSheet = formulaSheets.filter((sheet) => sheet.level === item.level && sheet.subject === item.subject)
      .sort((a,b) => guideMatchScore(item,b)-guideMatchScore(item,a))[0];
    const currentAlias = chapterAliasList(item);
    let cards = [];
    if (formulaSheet && Array.isArray(formulaSheet.formulaCheatSheet)) {
      cards = formulaSheet.formulaCheatSheet.map((card) => ({
        card, score: sectionScore(item, {heading:card.formula + " " + card.meaning + " " + card.when, body:card.trap + " " + card.units})
      })).filter((x) => x.score > 0).sort((a,b) => b.score-a.score).slice(0,6).map((x) => x.card);
    }
    if (!cards.length) {
      cards = (item.formulas || []).slice(0,8).map((formula) => ({
        formula:String(formula),
        meaning:"This relation summarises a rule or relationship used in " + item.chapter + ". Identify each symbol and the assumptions behind the relation before substituting.",
        when:"Use after classifying the question and checking that the stated conditions match the model.",
        units:"Use the units or notation defined by the textbook/question; keep quantities dimensionally consistent.",
        trap:"Do not apply the formula blindly: check domain, sign, units, boundary conditions and whether a related special case is required."
      }));
    }
    const override = getDeepChapterOverride(item);
    if (override) {
      Object.assign(item, override, {depth:"detailed"});
      return item;
    }
    const genericSections = genericDeepSections(item);
    item.sections = genericSections;
    item.formulaCheatSheet = cards;
    item.depth = "detailed";
    item.workedExamples = [
      {title:"Chapter example — full working and reasoning",steps:[
        "Read the worked example: " + String(item.example || "the example shown above"),
        "Identify the relevant definition, formula, process or evidence from the preceding sections.",
        "Show the intermediate reasoning explicitly; do not skip the step that links the given information to the selected method.",
        "Check the result against units, signs, conservation/consistency rules or the exact wording of the question."
      ]},
      {title:"Self-check after solving",steps:[
        "State the conclusion with the correct quantity, term or process name.",
        "Check that all stated conditions and assumptions are satisfied.",
        "Use a second method, a limiting case, a diagram or the source data to verify the answer where appropriate."
      ]}
    ].slice(0,4);
    item.commonMistakes = (item.commonMistakes || []).concat([
      "Do not memorise a final statement or formula without understanding its conditions and reasoning.",
      "Do not skip a definition, intermediate step, unit, label or link in the reasoning.",
      "Answer the exact command word and scope of the question instead of writing about a related topic."
    ]);
    item.examFocus = (item.examFocus || []).concat([
      "Start with the precise definition/model and state any needed assumption.",
      "Show the important reasoning or working, not only the final result.",
      "Use a labelled diagram, equation, comparison table or evidence chain when it makes the explanation clearer."
    ]);
    item.glossary = item.glossary || [];
    item.recall = (item.recall || []).concat([
      "Explain the chapter's central idea in your own words, including why it is true.",
      "Which assumption or condition would make the main rule invalid?",
      "Work one example without looking at the displayed solution, then check each step."
    ]);
    return item;
  }

  const schoolGuides = Array.isArray(window.KP_SCHOOL_CHAPTER_GUIDES) ? window.KP_SCHOOL_CHAPTER_GUIDES : [];
  const formulaSheets = Array.isArray(window.KP_FORMULA_SHEETS) ? window.KP_FORMULA_SHEETS : [];
  const humanitiesGuides = Array.isArray(window.KP_HUMANITIES_GUIDES) ? window.KP_HUMANITIES_GUIDES : [];
  if (Array.isArray(window.KP_DEEP_NOTES)) notes.push(...window.KP_DEEP_NOTES);
  // Detailed chapter packs replace compact starter summaries sharing the same key.
  // The older add-only de-duplication silently discarded richer content.
  const individualChapterSets = [
    window.KP_MATHS_INDIVIDUAL_DEEP_NOTES,
    window.KP_SCIENCE_INDIVIDUAL_DEEP_NOTES,
    window.KP_BIOLOGY_INDIVIDUAL_DEEP_NOTES,
    window.KP_REMAINING_CHAPTER_DEEP_NOTES,
    window.KP_HUMANITIES_INDIVIDUAL_DEEP_NOTES,
    window.KP_NCERT_CHAPTER_NOTES,
    window.KP_JEE_NEET_CHAPTER_NOTES,
    window.KP_CBSE_ENGLISH_CHAPTER_NOTES,
    window.KP_CBSE_COMMERCE_COMPUTING_HINDI_NOTES
  ].filter(Array.isArray);
  const chapterKey = (item) => [item.level, item.subject, item.chapter].map((x) => String(x || "").trim().toLowerCase()).join("::");
  const detailScore = (item) => (item.sections || []).length * 10 +
    (item.formulaCheatSheet || []).length * 5 + (item.workedExamples || []).length * 4 +
    (item.practiceProblems || []).length * 4 + (item.fastMethods || []).length * 6 + (item.commonMistakes || []).length;
  const chapterIndex = new Map();
  notes.forEach((item, index) => { if (!chapterIndex.has(chapterKey(item))) chapterIndex.set(chapterKey(item), index); });
  individualChapterSets.flat().forEach((item) => {
    const key = chapterKey(item);
    const existingIndex = chapterIndex.get(key);
    if (existingIndex == null) {
      item.depth = "detailed";
      chapterIndex.set(key, notes.length);
      notes.push(item);
      return;
    }
    const existing = notes[existingIndex];
    const chosen = detailScore(item) >= detailScore(existing) ? item : existing;
    const other = chosen === item ? existing : item;
    const combineUnique = (field, identity) => {
      const list = [...(chosen[field] || [])];
      const seen = new Set(list.map(identity));
      (other[field] || []).forEach((value) => {
        const id = identity(value);
        if (!seen.has(id)) { seen.add(id); list.push(value); }
      });
      return list;
    };
    notes[existingIndex] = Object.assign({}, other, chosen, {
      depth: "detailed",
      sections: combineUnique("sections", (x) => String(x.heading || x.body || "")),
      formulas: combineUnique("formulas", (x) => String(x)),
      formulaCheatSheet: combineUnique("formulaCheatSheet", (x) => String(x.formula || "")),
      workedExamples: combineUnique("workedExamples", (x) => String(x.title || (x.steps || []).join("|"))),
      practiceProblems: combineUnique("practiceProblems", (x) => String(x.question || "")),
      fastMethods: combineUnique("fastMethods", (x) => String(x.title || (x.steps || []).join("|"))),
      recall: combineUnique("recall", (x) => String(x)),
      points: combineUnique("points", (x) => String(x)),
      commonMistakes: combineUnique("commonMistakes", (x) => String(x)),
      examFocus: combineUnique("examFocus", (x) => String(x)),
      glossary: combineUnique("glossary", (x) => String(x))
    });
  });
  // Enrich only chapters that still need it after the detailed chapter sources have been merged.
  // This prevents synthetic fallback sections and loosely matched examples from contaminating a detailed chapter.
  notes.forEach(enrichIndividualChapter);
  notes.push(...schoolGuides.filter((item) => !notes.some((existing) => existing.level === item.level && existing.subject === item.subject && existing.chapter === item.chapter)));
  notes.push(...formulaSheets.filter((item) => !notes.some((existing) => existing.level === item.level && existing.subject === item.subject && existing.chapter === item.chapter)));
  notes.push(...humanitiesGuides.filter((item) => !notes.some((existing) => existing.level === item.level && existing.subject === item.subject && existing.chapter === item.chapter)));

  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
  const profile = (() => {
    const memory = Number(navigator.deviceMemory || 0);
    const cores = Number(navigator.hardwareConcurrency || 0);
    const saveData = Boolean(navigator.connection && navigator.connection.saveData);
    const low = saveData || (memory > 0 && memory <= 4) || (cores > 0 && cores <= 4);
    const high = !saveData && memory >= 8 && cores >= 8;
    return {
      tier: low ? "lite" : high ? "enhanced" : "standard",
      imageMaxDimension: low ? 960 : high ? 1600 : 1280,
      reduceMotion: low || window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      saveData
    };
  })();
  window.KP_DEVICE_PROFILE = profile;
  document.documentElement.dataset.kpPerformance = profile.tier;
  if (profile.reduceMotion) document.documentElement.classList.add("kp-reduced-motion");

  function noteText(item) {
    const deepSections = (item.sections || []).map((section) =>
      String(section.heading || "Detailed concept") + "\n" + String(section.body || "") +
      (Array.isArray(section.points) && section.points.length ? "\n" + section.points.map((x) => "- " + x).join("\n") : "")
    );
    const formulaCards = (item.formulaCheatSheet || []).map((card, index) =>
      (index + 1) + ". " + String(card.formula || "Formula") + "\n" +
      "Meaning: " + String(card.meaning || "") + "\n" +
      "When to use: " + String(card.when || "") + "\n" +
      "Units/notation: " + String(card.units || "") + "\n" +
      "Common trap: " + String(card.trap || "")
    );
    const worked = (item.workedExamples || []).map((example, index) =>
      (index + 1) + ". " + String(example.title || "Worked method") + "\n" +
      (example.steps || []).map((x, i) => "   " + (i + 1) + ". " + x).join("\n")
    );
    return [
      item.level + " · " + item.subject,
      item.chapter,
      item.intro,
      ...deepSections,
      "KEY IDEAS\n" + item.points.map((x) => "- " + x).join("\n"),
      item.formulas.length ? "FORMULAS / RULES\n" + item.formulas.map((x) => "- " + x).join("\n") : "",
      formulaCards.length ? "EXPLAINED FORMULA CHEAT SHEET\n" + formulaCards.join("\n\n") : "",
      "WORKED EXAMPLE\n" + item.example,
      worked.length ? "ADDITIONAL WORKED METHODS\n" + worked.join("\n\n") : "",
      item.fastMethods && item.fastMethods.length ? "FAST CALCULATION / QUESTION-SELECTION TRICKS\n" + item.fastMethods.map((m,i) => (i+1)+". "+String(m.title||"Method")+"\nWhen to use: "+String(m.when||"")+"\n"+(m.steps||[]).map((s,j)=>(j+1)+". "+s).join("\n")+"\nCaution: "+String(m.caution||"")).join("\n\n") : "",
      item.commonMistakes && item.commonMistakes.length ? "COMMON MISTAKES\n" + item.commonMistakes.map((x) => "- " + x).join("\n") : "",
      item.examFocus && item.examFocus.length ? "EXAM APPROACH\n" + item.examFocus.map((x) => "- " + x).join("\n") : "",
      item.glossary && item.glossary.length ? "GLOSSARY\n" + item.glossary.map((x) => "- " + x).join("\n") : "",
      item.practiceProblems && item.practiceProblems.length ? "PRACTICE QUESTIONS WITH WORKED ANSWERS\n" + item.practiceProblems.map((p, i) => (i + 1) + ". " + p.question + "\nAnswer: " + p.answer + "\nReasoning: " + p.solution).join("\n\n") : "",
      "QUICK SELF-CHECK\n" + item.recall.map((x, i) => (i + 1) + ". " + x).join("\n"),
      "Source note: " + String(item.sourceNote || NOTE_SOURCE)
    ].filter(Boolean).join("\n\n");
  }
  let activeNote = null;
  function filteredNotes() {
    const level = $("notesClass") ? $("notesClass").value : "all";
    const subject = $("notesSubject") ? $("notesSubject").value : "all";
    const search = String($("notesSearch") && $("notesSearch").value || "").trim().toLowerCase();
    return notes.filter((item) => (level === "all" || item.level === level) &&
      (subject === "all" || item.subject === subject) &&
      (!search || [item.chapter, item.subject, item.intro, ...item.points, ...(item.sections || []).flatMap((section) => [section.heading, section.body || ""]), ...(item.examFocus || []), ...(item.commonMistakes || []), ...(item.fastMethods || []).flatMap(m => [m.title, m.when, m.caution, ...(m.steps || [])]), ...(item.formulaCheatSheet || []).flatMap(f => [f.formula, f.meaning, f.when, f.trap]), ...(item.practiceProblems || []).map(p => p.question)].join(" ").toLowerCase().includes(search)));
  }
  function renderNotes() {
    const root = $("notesResults");
    if (!root) return;
    const list = filteredNotes();
    root.replaceChildren();
    if ($("notesCount")) $("notesCount").textContent = list.length + (list.length === 1 ? " note" : " notes");
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "notes-empty";
      empty.innerHTML = '<strong>No curated note pack matches those filters yet.</strong><p>Open the official curriculum and prescribed textbook below for the full current chapter list, including languages, electives and vocational subjects.</p><div class="actions"><a class="btn btn-light" target="_blank" rel="noopener noreferrer" href="https://cbseacademic.nic.in/curriculum_2027.html">CBSE curriculum ↗</a><a class="btn btn-light" target="_blank" rel="noopener noreferrer" href="https://ncert.nic.in/textbook.php">NCERT textbooks ↗</a></div>';
      root.appendChild(empty); return;
    }
    list.forEach((item) => {
      const card = document.createElement("article");
      card.className = "notes-card";
      const head = document.createElement("div"); head.className = "notes-card-head";
      const meta = document.createElement("div"); meta.className = "notes-meta"; meta.textContent = item.level + " · " + item.subject;
      const h3 = document.createElement("h3"); h3.textContent = item.chapter;
      const summary = document.createElement("p"); summary.className = "notes-summary"; summary.textContent = item.intro;
      const pill = document.createElement("span"); pill.className = "notes-tag"; pill.textContent = item.formulaCheatSheet && item.formulaCheatSheet.length ? "Formula cheat sheet" : item.depth === "detailed" ? "Detailed notes" : "Curated notes";
      head.append(meta, pill); card.append(head, h3, summary);
      const actions = document.createElement("div"); actions.className = "notes-card-actions";
      const read = document.createElement("button"); read.type = "button"; read.className = "btn btn-light"; read.textContent = "Read notes"; read.addEventListener("click", () => showNote(item));
      const pdf = document.createElement("button"); pdf.type = "button"; pdf.className = "btn btn-purple"; pdf.textContent = "Print / Save 12+ page PDF"; pdf.addEventListener("click", () => printNotes([item]));
      const save = document.createElement("button"); save.type = "button"; save.className = "btn btn-light"; save.textContent = "Save to library"; save.addEventListener("click", () => {
        if (typeof window.KP_SAVE_NOTE_TO_LIBRARY === "function") window.KP_SAVE_NOTE_TO_LIBRARY(item.level + " · " + item.subject + " · " + item.chapter, noteText(item));
        else {
          try {
            const key = "kp-curated-notes", saved = JSON.parse(localStorage.getItem(key) || "[]");
            saved.unshift({ title: item.chapter, text: noteText(item), savedAt: new Date().toISOString() });
            localStorage.setItem(key, JSON.stringify(saved.slice(0, 40)));
            toast("Saved to this browser's notes library.");
          } catch (error) { toast("Browser storage is unavailable."); }
        }
      });
      actions.append(read, pdf, save); card.append(actions); root.appendChild(card);
    });
  }
  function showNote(item) {
    activeNote = item;
    const detail = $("notesDetail");
    if (!detail) return;
    detail.replaceChildren();
    const header = document.createElement("div"); header.className = "notes-detail-head";
    const meta = document.createElement("div"); meta.className = "notes-meta"; meta.textContent = item.level + " · " + item.subject + (item.depth === "detailed" ? " · Detailed notes" : "");
    const close = document.createElement("button"); close.className = "btn btn-light"; close.type = "button"; close.textContent = "Close notes"; close.addEventListener("click", () => detail.classList.add("hidden"));
    header.append(meta, close);
    const h2 = document.createElement("h2"); h2.textContent = item.chapter;
    const intro = document.createElement("p"); intro.textContent = item.intro;
    detail.append(header, h2, intro);
    if (item.sections && item.sections.length) {
      const deepHead = document.createElement("h3"); deepHead.textContent = "Detailed concept explanations";
      detail.appendChild(deepHead);
      item.sections.forEach((section) => {
        const sh = document.createElement("h4"); sh.className = "notes-subhead"; sh.textContent = section.heading || "Concept";
        const body = document.createElement("p"); body.className = "notes-deep-body"; body.textContent = section.body || "";
        detail.append(sh, body);
        if (Array.isArray(section.points) && section.points.length) {
          const list = document.createElement("ul"); list.className = "notes-section-points-list kp-key-ideas";
          section.points.forEach((text) => { const li = document.createElement("li"); li.textContent = text; list.appendChild(li); });
          detail.appendChild(list);
        }
      });
    }
    const pointHead = document.createElement("h3"); pointHead.textContent = "Key ideas";
    const pointList = document.createElement("ul"); pointList.className = "notes-key-ideas-list kp-key-ideas"; item.points.forEach((text) => { const li = document.createElement("li"); li.textContent = text; pointList.appendChild(li); });
    detail.append(pointHead, pointList);
    if (item.formulas.length) {
      const fh = document.createElement("h3"); fh.textContent = "Formulas and rules";
      const fl = document.createElement("ul"); fl.className = "notes-formula-list kp-formula-list"; item.formulas.forEach((text) => { const li = document.createElement("li"); li.textContent = text; fl.appendChild(li); });
      detail.append(fh, fl);
    }
    if (item.formulaCheatSheet && item.formulaCheatSheet.length) {
      const ch = document.createElement("h3"); ch.textContent = "Explained formula cheat sheet";
      detail.appendChild(ch);
      item.formulaCheatSheet.forEach((card, index) => {
        const box = document.createElement("section"); box.className = "formula-card";
        const title = document.createElement("h4"); title.className = "notes-subhead"; title.textContent = (index + 1) + ". " + String(card.formula || "Formula");
        const meaning = document.createElement("p"); meaning.className = "formula-card-copy"; meaning.textContent = "Meaning: " + String(card.meaning || "");
        const when = document.createElement("p"); when.className = "formula-card-copy"; when.textContent = "When to use: " + String(card.when || "");
        const units = document.createElement("p"); units.className = "formula-card-copy"; units.textContent = "Units / notation: " + String(card.units || "");
        const trap = document.createElement("p"); trap.className = "formula-card-trap"; trap.textContent = "Common trap: " + String(card.trap || "");
        box.append(title, meaning, when, units, trap); detail.appendChild(box);
      });
    }
    const eh = document.createElement("h3"); eh.textContent = "Worked example";
    const ep = document.createElement("p"); ep.textContent = item.example;
    detail.append(eh, ep);
    if (item.workedExamples && item.workedExamples.length) {
      const wh = document.createElement("h3"); wh.textContent = "Additional worked methods";
      detail.appendChild(wh);
      item.workedExamples.forEach((example) => {
        const sub = document.createElement("h4"); sub.className = "notes-subhead"; sub.textContent = example.title || "Worked method";
        const steps = document.createElement("ol");
        (example.steps || []).forEach((text) => { const li = document.createElement("li"); li.textContent = text; steps.appendChild(li); });
        detail.append(sub, steps);
      });
    }
    if (item.practiceProblems && item.practiceProblems.length) {
      const practiceHead = document.createElement("h3"); practiceHead.textContent = "Practice questions with worked answers";
      detail.appendChild(practiceHead);
      const practiceList = document.createElement("ol"); practiceList.className = "notes-practice-list";
      item.practiceProblems.forEach((problem) => {
        const li = document.createElement("li");
        const question = document.createElement("p"); question.className = "practice-question"; question.textContent = problem.question || "";
        const answer = document.createElement("p"); answer.className = "practice-answer"; answer.textContent = "Answer: " + String(problem.answer || "");
        const solution = document.createElement("p"); solution.className = "practice-solution"; solution.textContent = "Reasoning: " + String(problem.solution || "");
        li.append(question, answer, solution); practiceList.appendChild(li);
      });
      detail.appendChild(practiceList);
    }
    if (item.fastMethods && item.fastMethods.length) {
      const fastHead = document.createElement("h3"); fastHead.textContent = "Fast calculation & question-selection tricks"; detail.appendChild(fastHead);
      item.fastMethods.forEach((m, index) => {
        const sub = document.createElement("h4"); sub.className = "notes-subhead"; sub.textContent = (index + 1) + ". " + String(m.title || "Method");
        const when = document.createElement("p"); when.className = "formula-card-copy"; when.textContent = "Use when: " + String(m.when || ""); detail.append(sub, when);
        const steps = document.createElement("ol"); (m.steps || []).forEach(text => { const li = document.createElement("li"); li.textContent = text; steps.appendChild(li); }); detail.appendChild(steps);
        if (m.caution) { const caution = document.createElement("p"); caution.className = "formula-card-trap"; caution.textContent = "Caution: " + m.caution; detail.appendChild(caution); }
      });
    }
    if (item.commonMistakes && item.commonMistakes.length) {
      const mh = document.createElement("h3"); mh.textContent = "Common mistakes to avoid";
      const ml = document.createElement("ul"); ml.className = "notes-common-mistakes kp-common-mistakes";
      item.commonMistakes.forEach((text) => { const li = document.createElement("li"); li.textContent = text; ml.appendChild(li); });
      detail.append(mh, ml);
    }
    if (item.examFocus && item.examFocus.length) {
      const fh = document.createElement("h3"); fh.textContent = "Exam approach";
      const fl = document.createElement("ul"); fl.className = "notes-exam-focus kp-exam-focus";
      item.examFocus.forEach((text) => { const li = document.createElement("li"); li.textContent = text; fl.appendChild(li); });
      detail.append(fh, fl);
    }
    if (item.glossary && item.glossary.length) {
      const gh = document.createElement("h3"); gh.textContent = "Glossary";
      const gl = document.createElement("ul"); gl.className = "notes-glossary kp-glossary";
      item.glossary.forEach((text) => { const li = document.createElement("li"); li.textContent = text; gl.appendChild(li); });
      detail.append(gh, gl);
    }
    const rh = document.createElement("h3"); rh.textContent = "Quick self-check";
    const rl = document.createElement("ol"); rl.className = "notes-recall-list kp-recall-prompts"; item.recall.forEach((text) => { const li = document.createElement("li"); li.textContent = text; rl.appendChild(li); });
    const actions = document.createElement("div"); actions.className = "notes-card-actions";
    const pdf = document.createElement("button"); pdf.type = "button"; pdf.className = "btn btn-purple"; pdf.textContent = "Print / Save 12+ page PDF"; pdf.addEventListener("click", () => printNotes([item]));
    const save = document.createElement("button"); save.type = "button"; save.className = "btn btn-light"; save.textContent = "Save to library"; save.addEventListener("click", () => {
      if (typeof window.KP_SAVE_NOTE_TO_LIBRARY === "function") window.KP_SAVE_NOTE_TO_LIBRARY(item.level + " · " + item.subject + " · " + item.chapter, noteText(item));
    });
    actions.append(pdf, save); detail.append(rh, rl, actions);
    highlightImportantPhrases(detail);
    detail.classList.remove("hidden");
    detail.scrollIntoView({ behavior: profile.reduceMotion ? "auto" : "smooth", block: "start" });
  }
  function highlightImportantPhrases(root) {
    if (!root || typeof document.createTreeWalker !== "function") return;
    const cuePattern = /\b(?:directly proportional|inversely proportional|is the process of|is equal to|defined as|key idea|exam tip|must know|common mistake|note that|important|remember|definition|principle|theorem|formula|warning|never|always|only if|is called|are called|equals)\b/gi;
    const walker = document.createTreeWalker(root, 4);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!node.nodeValue || !node.nodeValue.trim() || !parent || parent.closest("button, script, style, mark, .notes-meta")) continue;
      cuePattern.lastIndex = 0;
      if (cuePattern.test(node.nodeValue)) textNodes.push(node);
    }
    textNodes.forEach((node) => {
      const value = node.nodeValue;
      cuePattern.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      for (const match of value.matchAll(cuePattern)) {
        if (match.index > cursor) fragment.appendChild(document.createTextNode(value.slice(cursor, match.index)));
        const mark = document.createElement("mark");
        mark.className = "notes-important-mark";
        mark.textContent = match[0];
        fragment.appendChild(mark);
        cursor = match.index + match[0].length;
      }
      if (cursor < value.length) fragment.appendChild(document.createTextNode(value.slice(cursor)));
      if (node.parentNode) node.parentNode.replaceChild(fragment, node);
    });
  }
  function uniqueNoteText(values) {
    const seen = new Set();
    return (Array.isArray(values) ? values : []).map((value) => String(value == null ? "" : value).trim()).filter((value) => {
      const key = value.toLowerCase();
      if (!value || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function noteMindMapGroups(item) {
    const sections = Array.isArray(item.sections) ? item.sections : [];
    const formulas = Array.isArray(item.formulaCheatSheet) ? item.formulaCheatSheet : [];
    const worked = Array.isArray(item.workedExamples) ? item.workedExamples : [];
    const methods = Array.isArray(item.fastMethods) ? item.fastMethods : [];
    const genericHeading = /^(chapter framework and connections|key ideas unpacked|how to solve questions step by step|formula, process and result checks|how to write a complete exam answer)$/i;
    const firstSentence = (value) => {
      const text = String(value == null ? "" : value).replace(/\s+/g, " ").trim();
      if (!text) return "";
      const match = text.match(/^.*?[.!?](?=\s|$)/);
      return match ? match[0].trim() : text;
    };
    const endSentence = (value) => {
      const text = String(value == null ? "" : value).replace(/\s+/g, " ").trim();
      if (!text) return "";
      return /[.!?]$/.test(text) ? text : text + ".";
    };
    const shortExplanation = (value, maxWords = 11) => {
      const sentence = firstSentence(value);
      if (!sentence) return "";
      const words = sentence.split(/\s+/).filter(Boolean);
      if (words.length <= maxWords) return sentence;
      return words.slice(0, maxWords).join(" ").replace(/[,:;—-]+$/, "") + "…";
    };
    const explain = (heading, body, maxWords = 9) => {
      const title = String(heading == null ? "" : heading).replace(/\s+/g, " ").trim();
      const description = shortExplanation(body, maxWords);
      return title && description ? title + " — " + description : title || description;
    };
    const avoidSentence = (value) => {
      const text = endSentence(value).replace(/[.!?]+$/, "").trim();
      if (!text) return "";
      if (/^(avoid|do not|don't|never)\b/i.test(text)) return text + ".";
      return "Avoid " + text.charAt(0).toLowerCase() + text.slice(1) + ".";
    };
    const realSections = sections.filter((section) => {
      const heading = String(section.heading || "").trim();
      return heading && !genericHeading.test(heading) && !/^related topic\s*[·:]/i.test(heading);
    });
    // Six explanation cards per branch fit the landscape page; group overflow
    // without silently omitting recorded ideas from the source chapter.
    const packMapItems = (values, maxLeaves = 6) => {
      const clean = uniqueNoteText((Array.isArray(values) ? values : []).map(mapKeyword).filter(Boolean));
      if (clean.length <= maxLeaves) return clean;
      const buckets = Array.from({ length: maxLeaves }, () => []);
      clean.forEach((label, index) => buckets[Math.floor(index * maxLeaves / clean.length)].push(label));
      return buckets.filter((bucket) => bucket.length).map((bucket) => bucket.join(" · "));
    };
    const conceptItems = realSections.length
      ? realSections.map((section) => explain(section.heading, section.body, 9))
      : (item.points || []).map((point) => shortExplanation(point, 13));
    const keyIdeaItems = (item.points || []).map((point) => shortExplanation(point, 13));
    const ruleItems = formulas.length
      ? formulas.map((card) => explain(card.formula || "Key rule", (card.meaning || "") + (card.when ? " " + card.when : ""), 11))
      : (item.formulas || []).map((formula) => String(formula));
    const workedItems = worked.map((example) =>
      explain(example.title || "Worked example", (example.steps || []).slice(-1)[0] || (example.steps || [])[0] || "", 10))
      .concat(item.example ? ["Main example — " + shortExplanation(item.example, 12)] : []);
    const methodItems = methods.map((method) =>
      explain(method.title || "Problem-solving method", method.when || (method.steps || []).slice(0, 2).join(" "), 10))
      .concat((item.examFocus || []).map((focus) => "Exam focus — " + shortExplanation(focus, 12)));
    const trapItems = (item.commonMistakes || []).map(avoidSentence)
      .concat(formulas.map((card) => card.trap ? "Formula check — " + shortExplanation(card.trap, 10) : ""));
    const vocabularyItems = (item.glossary || []).map((term) => {
      const termText = String(term == null ? "" : term).trim();
      const matching = realSections.find((section) =>
        String(section.body || "").toLowerCase().includes(termText.toLowerCase()) ||
        String(section.heading || "").toLowerCase().includes(termText.toLowerCase()));
      return matching ? explain(termText, matching.body, 10) : termText;
    });
    const practiceItems = (item.practiceProblems || []).map((problem) =>
      explain(problem.question || "Practice question", problem.answer || problem.solution || "", 10))
      .concat((item.recall || []).map((question) => "Recall — " + shortExplanation(question, 11)));
    return [
      { title: "Topic explanations", items: packMapItems(conceptItems) },
      { title: "Key ideas & applications", items: packMapItems(keyIdeaItems) },
      { title: "Formulas & what they mean", items: packMapItems(ruleItems) },
      { title: "Worked reasoning", items: packMapItems(workedItems) },
      { title: "Methods & exam approach", items: packMapItems(methodItems) },
      { title: "Common traps & checks", items: packMapItems(trapItems) },
      { title: "Vocabulary in context", items: packMapItems(vocabularyItems) },
      { title: "Practice & retrieval", items: packMapItems(practiceItems) }
    ].filter((group) => group.items.length);
  }
  function importantTextHtml(value) {
    const cues = /\b(directly proportional|inversely proportional|is the process of|is equal to|defined as|key idea|exam tip|must know|common mistake|note that|important|remember|definition|principle|theorem|formula|warning|never|always|only if|is called|are called|equals)\b/gi;
    return esc(value).replace(cues, '<mark class="kp-important-mark">$1</mark>');
  }
  function noteListHtml(values, ordered, className) {
    const list = Array.isArray(values) ? values : [];
    if (!list.length) return '<p class="empty-note">No separate entries are provided in this subsection. Use the detailed explanations and source note in this chapter pack.</p>';
    const tag = ordered ? "ol" : "ul";
    const classAttribute = className ? ' class="' + esc(className) + '"' : "";
    return "<" + tag + classAttribute + ">" + list.map((value) => "<li>" + importantTextHtml(value) + "</li>").join("") + "</" + tag + ">";
  }
  function notePage(item, pageNumber, heading, intro, body) {
    return '<article class="note-page packet-page"><div class="eyebrow">' + esc(item.level + " · " + item.subject) +
      ' · PAGE ' + esc(pageNumber) + ' OF 12</div><h1>' + esc(heading) + '</h1>' +
      (intro ? '<p class="intro">' + importantTextHtml(intro) + '</p>' : "") + body +
      '<p class="source">' + esc(item.sourceNote || NOTE_SOURCE) + '</p></article>';
  }
  function mapPalette(index) {
    return [
      { color: "#3678E8", pale: "#EAF2FF" },
      { color: "#13A89E", pale: "#E4F8F4" },
      { color: "#F19A32", pale: "#FFF2DF" },
      { color: "#D94F8C", pale: "#FCE9F2" },
      { color: "#8359DA", pale: "#F0EAFE" },
      { color: "#2D9A66", pale: "#E5F7EC" },
      { color: "#6875C8", pale: "#ECEEFF" }
    ][index % 7];
  }
  function mapKeyword(value) {
    // Keep the full wording. The SVG layout wraps long text instead of clipping it with an ellipsis.
    return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
  }
  function mapTextLines(value, maxChars) {
    const words = String(value || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    for (const word of words) {
      const next = line ? line + " " + word : word;
      if (next.length > maxChars && line) {
        lines.push(line);
        line = word;
      } else line = next;
    }
    if (line) lines.push(line);
    return lines;
  }
  function mapSvgLabel(value, x, y, width, height, fontSize, maxChars) {
    // Fit every word inside its branch node. Use a smaller font and wider text
    // wraps as needed instead of referencing an undefined limit or clipping labels.
    let size = Number(fontSize) || 8;
    let chars = Math.max(10, Number(maxChars) || 24);
    let lines = mapTextLines(value, chars);
    let lineHeight = size + 1.6;
    let maxLines = Math.max(1, Math.floor((height - 5) / lineHeight));
    while (lines.length > maxLines && size > 4.8) {
      size = Math.max(4.8, size - 0.4);
      chars = Math.max(chars + 2, Math.floor(width / (size * 0.54)));
      lines = mapTextLines(value, chars);
      lineHeight = size + 1.6;
      maxLines = Math.max(1, Math.floor((height - 5) / lineHeight));
    }
    const firstY = y - ((lines.length - 1) * lineHeight) / 2 + size * 0.34;
    return '<text x="' + x + '" y="' + firstY + '" text-anchor="middle" font-size="' + size +
      '" font-weight="600" fill="#24324A">' + lines.map((line, index) =>
        '<tspan x="' + x + '" dy="' + (index === 0 ? 0 : lineHeight) + '">' + esc(line) + '</tspan>'
      ).join("") + '</text>';
  }
  function renderMindMapPage(item) {
    const groups = noteMindMapGroups(item);
    const W = 1600, H = 960, cx = 800, cy = 490;
    const leftGroups = [], rightGroups = [];
    groups.forEach((group, index) => (index % 2 === 0 ? leftGroups : rightGroups).push({ group, index }));
    const rootRx = 120, rootRy = 68;
    const categoryWidth = 200, categoryHeight = 48;
    const chipPanelX = { left: 22, right: 1238 };
    const chipPanelWidth = 340;
    const nodes = [];
    const mainPaths = [];
    const subPaths = [];
    const categories = [];
    const leafNodes = [];
    const sides = [
      { name: "left", entries: leftGroups, categoryX: 390, outerX: 390, rootTargetX: 590, chipEdge: "right" },
      { name: "right", entries: rightGroups, categoryX: 1010, outerX: 1210, rootTargetX: 1010, chipEdge: "left" }
    ];

    sides.forEach((side) => {
      side.entries.forEach((entry, rowIndex) => {
        const { group, index } = entry;
        const palette = mapPalette(index);
        const y = 145 + ((rowIndex + 0.5) / Math.max(1, side.entries.length)) * 690;
        const isLeft = side.name === "left";
        const catX = side.categoryX;
        const catOuterX = isLeft ? catX : catX + categoryWidth;
        const targetCx = catX + categoryWidth / 2;
        const theta = Math.atan2((y - cy) / rootRy, (targetCx - cx) / rootRx);
        const startX = cx + rootRx * Math.cos(theta);
        const startY = cy + rootRy * Math.sin(theta);
        const endX = isLeft ? catX + categoryWidth : catX;
        const dx = endX - startX;
        const c1x = startX + dx * 0.35;
        const c2x = endX - dx * 0.35;
        mainPaths.push(
          '<path d="M ' + startX + ' ' + startY + ' C ' + c1x + ' ' + startY + ', ' +
          c2x + ' ' + y + ', ' + endX + ' ' + y + '" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>' +
          '<path d="M ' + startX + ' ' + startY + ' C ' + c1x + ' ' + startY + ', ' +
          c2x + ' ' + y + ', ' + endX + ' ' + y + '" fill="none" stroke="' + palette.color +
          '" stroke-width="7" stroke-linecap="round"/>'
        );

        const sourceX = isLeft ? catX : catX + categoryWidth;
        const chipX = chipPanelX[side.name];
        const items = uniqueNoteText((group.items || []).map(mapKeyword));
        const columns = 2;
        const gapX = 7;
        const gapY = 4;
        const chipW = (chipPanelWidth - gapX * (columns - 1)) / columns;
        const rows = Math.max(1, Math.ceil(items.length / columns));
        const panelH = 164;
        const chipH = Math.max(24, Math.min(52, (panelH - gapY * (rows - 1)) / rows));
        const top = y - ((rows * chipH + (rows - 1) * gapY) / 2);
        const fontSize = 11.4;
        const maxChars = Math.max(16, Math.floor((chipW - 14) / (fontSize * 0.56)));
        items.forEach((label, itemIndex) => {
          const col = itemIndex % columns;
          const row = Math.floor(itemIndex / columns);
          const x = chipX + col * (chipW + gapX);
          const chipY = top + row * (chipH + gapY);
          const anchorX = isLeft ? x + chipW : x;
          const anchorY = chipY + chipH / 2;
          const pathStartX = sourceX;
          const bend = isLeft ? -1 : 1;
          const deltaX = anchorX - pathStartX;
          const c1 = pathStartX + deltaX * 0.45;
          const c2 = anchorX - deltaX * 0.25;
          subPaths.push(
            '<path d="M ' + pathStartX + ' ' + y + ' C ' + c1 + ' ' + y + ', ' +
            c2 + ' ' + anchorY + ', ' + anchorX + ' ' + anchorY + '" fill="none" stroke="' +
            palette.pale + '" stroke-width="5" stroke-linecap="round"/>' +
            '<path d="M ' + pathStartX + ' ' + y + ' C ' + c1 + ' ' + y + ', ' +
            c2 + ' ' + anchorY + ', ' + anchorX + ' ' + anchorY + '" fill="none" stroke="' +
            palette.color + '" stroke-width="2.1" stroke-linecap="round" opacity=".9"/>'
          );
          leafNodes.push(
            '<g class="mindmap-topic" data-branch="' + index + '"><title>' + esc((group.title || "") + " — " + label) + '</title>' +
            '<rect x="' + x + '" y="' + chipY + '" width="' + chipW + '" height="' + chipH +
            '" rx="' + Math.min(10, chipH / 2) + '" fill="' + palette.pale + '" stroke="' + palette.color +
            '" stroke-opacity=".42" stroke-width="1.25"/>' +
            '<circle cx="' + (isLeft ? x + chipW - 5 : x + 5) + '" cy="' + anchorY +
            '" r="2.7" fill="' + palette.color + '"/>' +
            mapSvgLabel(label, x + chipW / 2, anchorY, chipW - 12, chipH, fontSize, maxChars) +
            '</g>'
          );
        });

        const titleFont = group.title.length > 23 ? 11.5 : 13;
        categories.push(
          '<g class="mindmap-main-branch" data-branch="' + index + '"><title>' + esc(group.title) + '</title>' +
          '<rect x="' + catX + '" y="' + (y - categoryHeight / 2) + '" width="' + categoryWidth +
          '" height="' + categoryHeight + '" rx="15" fill="' + palette.color + '" stroke="#FFFFFF" stroke-width="2.5"/>' +
          '<circle cx="' + (isLeft ? catX + categoryWidth - 15 : catX + 15) + '" cy="' + y +
          '" r="4.5" fill="#FFFFFF" fill-opacity=".9"/>' +
          '<text x="' + (catX + categoryWidth / 2) + '" y="' + (y + titleFont * 0.36) +
          '" text-anchor="middle" font-size="' + titleFont + '" font-weight="750" fill="#FFFFFF">' +
          esc(group.title) + '</text></g>'
        );
      });
    });

    const chapterFont = String(item.chapter || "").length > 28 ? 19 : String(item.chapter || "").length > 20 ? 22 : 26;
    const chapterLines = mapTextLines(item.chapter || "Chapter", 17);
    const chapterText = '<text x="' + cx + '" y="' + (cy - (chapterLines.length - 1) * 14) +
      '" text-anchor="middle" font-size="' + chapterFont + '" font-weight="800" fill="#192641">' +
      chapterLines.map((line, index) => '<tspan x="' + cx + '" dy="' + (index === 0 ? 0 : 28) + '">' + esc(line) + '</tspan>').join("") +
      '</text>';
    const subtitle = '<text x="' + cx + '" y="' + (cy + 45) + '" text-anchor="middle" font-size="11" font-weight="650" fill="#66558B">' +
      esc(item.level + " · " + item.subject) + '</text>';
    const root = '<g class="mindmap-hub"><rect x="' + (cx - rootRx) + '" y="' + (cy - rootRy) +
      '" width="' + (rootRx * 2) + '" height="' + (rootRy * 2) + '" rx="25" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="4"/>' +
      '<path d="M ' + (cx - rootRx + 24) + ' ' + (cy - rootRy) + ' H ' + (cx + rootRx - 24) +
      '" stroke="#8B5CF6" stroke-width="8" stroke-linecap="round"/>' +
      '<text x="' + cx + '" y="' + (cy - rootRy + 24) + '" text-anchor="middle" font-size="10" font-weight="800" letter-spacing="2.4" fill="#8151DB">CHAPTER MIND MAP</text>' +
      chapterText + subtitle + '</g>';

    const decorativeDots = [
      { x: 1490, c: "#3678E8" }, { x: 1510, c: "#13A89E" }, { x: 1530, c: "#F19A32" },
      { x: 1550, c: "#D94F8C" }, { x: 1570, c: "#8359DA" }
    ].map((dot) => '<circle cx="' + dot.x + '" cy="44" r="5" fill="' + dot.c + '"/>').join("");

    const svg = '<svg class="mindmap-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H +
      '" role="img" aria-label="Colorful connected mind map for ' + esc(item.chapter) + '">' +
      '<defs><filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#2D2450" flood-opacity=".12"/></filter>' +
      '<linearGradient id="mapTop" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#3B82F6"/></linearGradient></defs>' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="26" fill="#FBFCFF"/>' +
      '<path d="M 36 104 H 1564" stroke="#E8ECF5" stroke-width="2"/>' +
      '<rect x="36" y="31" width="9" height="53" rx="4.5" fill="url(#mapTop)"/>' +
      '<text x="64" y="55" font-size="28" font-weight="850" fill="#17233E">' + esc(item.chapter) + '</text>' +
      '<text x="65" y="82" font-size="14" font-weight="550" fill="#6B7690">' +
      esc(item.level + " · " + item.subject + " · All recorded chapter sections, formulas, worked methods, traps and revision prompts are mapped below.") + '</text>' +
      decorativeDots +
      mainPaths.join("") + subPaths.join("") +
      categories.join("") + leafNodes.join("") +
      '<g filter="url(#mapShadow)">' + root + '</g>' +
      '<rect x="36" y="900" width="1528" height="34" rx="12" fill="#F0F3FA"/>' +
      '<circle cx="56" cy="917" r="4" fill="#8B5CF6"/>' +
      '<text x="70" y="921" font-size="11" font-weight="600" fill="#58647B">Seven colour-coded strands show the chapter structure; grouped leaves retain additional listed topics when needed.</text>' +
      '<text x="1545" y="921" text-anchor="end" font-size="10" fill="#6B7690">Study aid: verify syllabus and facts against the prescribed textbook.</text>' +
      '</svg>';
    return '<article class="note-page mindmap-page"><div class="map-caption"><span class="map-caption-kicker">KAUSHALPATH · VISUAL REVISION</span><span class="map-caption-label">PAGE 1 · CONNECTED CONCEPT MAP</span></div>' +
      svg + '</article>';
  }
  function sectionContentHtml(sections) {
    return (Array.isArray(sections) ? sections : []).map((section, index) =>
      '<section class="content-block kp-concept-block"><h2>' + importantTextHtml((index + 1) + ". " + (section.heading || "Concept")) + '</h2>' +
      '<p>' + importantTextHtml(section.body || "") + '</p>' + (section.points && section.points.length ? noteListHtml(section.points, false, "kp-section-points-list kp-key-ideas") : "") + '</section>'
    ).join("");
  }
  function formulaContentHtml(item) {
    const rules = (Array.isArray(item.formulas) ? item.formulas : []).map((formula) => String(formula));
    const cards = (Array.isArray(item.formulaCheatSheet) ? item.formulaCheatSheet : []).map((card, index) =>
      '<section class="formula-card kp-formula-card"><h2>' + importantTextHtml((index + 1) + ". " + (card.formula || "Rule")) + '</h2>' +
      '<p><strong>Meaning:</strong> ' + importantTextHtml(card.meaning || "Read the rule in context before using it.") + '</p>' +
      '<p><strong>When to use:</strong> ' + importantTextHtml(card.when || "Use it when the question meets the conditions described here.") + '</p>' +
      '<p><strong>Units / notation:</strong> ' + importantTextHtml(card.units || "Keep the symbols and units consistent with the question.") + '</p>' +
      '<p class="formula-trap kp-common-mistake-callout"><strong>Common trap:</strong> ' + importantTextHtml(card.trap || "Before you start, check the signs, units and conditions.") + '</p></section>'
    ).join("");
    return (rules.length ? '<h2>Chapter formulas and rules</h2>' + noteListHtml(rules, false, "kp-formula-list") : '<h2>Key relationships and rules</h2>' + noteListHtml(item.points || [], false, "kp-key-ideas")) + cards;
  }
  function workedContentHtml(item) {
    const primary = '<section class="content-block kp-worked-example"><h2>Primary worked example</h2><p>' + importantTextHtml(item.example || "Use the chapter concepts to build a complete answer.") + '</p></section>';
    const extra = (Array.isArray(item.workedExamples) ? item.workedExamples : []).map((example, index) =>
      '<section class="content-block kp-worked-example"><h2>' + importantTextHtml((index + 1) + ". " + (example.title || "Worked method")) + '</h2>' +
      noteListHtml(example.steps || [], true, "kp-worked-steps") + '</section>'
    ).join("");
    return primary + extra;
  }
  function methodsContentHtml(item) {
    const methods = (Array.isArray(item.fastMethods) ? item.fastMethods : []).map((method, index) =>
      '<section class="content-block kp-method-block"><h2>' + importantTextHtml((index + 1) + ". " + (method.title || "Problem-solving path")) + '</h2>' +
      (method.when ? '<p><strong>Use when:</strong> ' + importantTextHtml(method.when) + '</p>' : "") +
      noteListHtml(method.steps || [], true, "kp-method-steps") + (method.caution ? '<p class="formula-trap kp-common-mistake-callout"><strong>Caution:</strong> ' + importantTextHtml(method.caution) + '</p>' : "") + '</section>'
    ).join("");
    const defaultMethod = '<h2>How to build a clear answer</h2>' + noteListHtml([
      "Start by checking exactly what the question wants you to find or explain.",
      "Choose the definition, formula, evidence or method that fits the question.",
      "Show your reasoning one step at a time, including units or assumptions where they matter.",
      "Finish by answering the question directly and checking your result against the chapter notes."
    ], true);
    return methods + defaultMethod;
  }
  function practiceContentHtml(item) {
    const problems = Array.isArray(item.practiceProblems) ? item.practiceProblems : [];
    if (problems.length) {
      return '<ol class="practice-list">' + problems.map((problem) =>
        '<li class="kp-practice-item"><p class="kp-practice-question"><strong>' + importantTextHtml(problem.question || "Practice prompt") + '</strong></p>' +
        '<p class="kp-practice-answer"><strong>Answer:</strong> ' + importantTextHtml(problem.answer || "Use the idea or method explained above to build your answer.") + '</p>' +
        '<p class="kp-practice-reasoning"><strong>Reasoning:</strong> ' + importantTextHtml(problem.solution || "Explain in your own words why this answer fits the question, then check your reasoning.") + '</p></li>'
      ).join("") + '</ol>';
    }
    return '<h2>Recall questions</h2>' + noteListHtml(item.recall || [], true) +
      '<p>Try each question before checking your notes. Mark anything you had to guess, then revisit that part of the chapter.</p>';
  }
  function fullChapterPacket(item) {
    const chapterSections = Array.isArray(item.sections) ? item.sections : []; const glossary = Array.isArray(item.glossary) && item.glossary.length ? noteListHtml(item.glossary, false, "kp-glossary") : noteListHtml(chapterSections.map((section) => section.heading), false, "kp-glossary");
    const conceptLinks = chapterSections.map((section) => (section.heading || "Concept") + " — " + (section.body || ""));
    const exam = Array.isArray(item.examFocus) && item.examFocus.length ? noteListHtml(item.examFocus, false, "kp-exam-focus") : noteListHtml(Array.isArray(item.points) ? item.points : [], false, "kp-exam-focus");
    const traps = (Array.isArray(item.commonMistakes) ? item.commonMistakes : []).concat((Array.isArray(item.formulaCheatSheet) ? item.formulaCheatSheet : []).map((card) => card.trap ? card.trap : "").filter(Boolean));
    const revisionChecklist = [
      "I can explain the main ideas without looking at the notes.",
      "I know the key definitions and when to use them.",
      "I can choose a suitable formula or method and explain why it fits.",
      "I can solve an example and show how I reached the answer.",
      "I can spot common mistakes and put them right.",
      "I have checked these notes against the prescribed textbook and current syllabus."
    ];
    const pages = [
      notePage(item, 2, "Chapter overview & learning outcomes", "Start here to see how the main ideas fit together and what you should be able to explain by the end.",
        '<h2>What this chapter covers</h2>' + noteListHtml((item.sections || []).map((section) => section.heading).concat(item.points || []), false, "kp-priority-list") +
        '<h2>What you should be able to do</h2>' + noteListHtml((item.points || []).map((point) => "Explain and apply: " + point), false, "kp-key-ideas") +
        '<h2>A good way to study this chapter</h2>' + noteListHtml(["Understand the idea before trying to memorise a definition or formula.", "Work through the examples on paper, then try one without looking.", "Check the conditions and common mistakes before you begin the practice questions.", "Finish by explaining the main points in your own words and revisiting anything unclear."], true)),
      notePage(item, 3, "Core concept explanations", "Build your understanding one idea at a time. Notice how each concept connects to the next.",
        sectionContentHtml(item.sections) + '<h2>Chapter key ideas</h2>' + noteListHtml(item.points || [], false, "kp-key-ideas")),
      notePage(item, 4, "Key terms and how they connect", "Learn the important terms, then practise explaining them in your own words.",
        '<h2>Important terms</h2>' + glossary + '<h2>Connections between concepts</h2>' + noteListHtml(conceptLinks, false)),
      notePage(item, 5, "Formulas, rules & relationships", "Before using a formula or rule, check that its conditions match the question.",
        formulaContentHtml(item)),
      notePage(item, 6, "Choosing the right formula or rule", "Here is what the rules mean, when they help, and what to check before using them.",
        noteListHtml((item.formulaCheatSheet || []).map((card) => (card.formula || "Rule") + " — Meaning: " + (card.meaning || "") + " — Use when: " + (card.when || "") + " — Units/notation: " + (card.units || "") + " — Trap: " + (card.trap || "")), false, "kp-formula-reference") +
        '<h2>Before you use it</h2>' + noteListHtml(["Do the conditions in the question match the formula or rule?", "Have you checked the signs, symbols and units?", "Does the answer make sense in the context of the question?", "Can you explain why this method fits better than another one?"], true)),
      notePage(item, 7, "Worked examples & full reasoning", "Follow each step, then cover the solution and try the example again on your own.",
        workedContentHtml(item)),
      notePage(item, 8, "Methods and exam strategies", "Choose your method based on what the question gives you and what it asks you to find.",
        methodsContentHtml(item)),
      notePage(item, 9, "Applications and exam focus", "Practise using what you know to answer exam-style questions clearly and directly.",
        '<h2>Exam approach</h2>' + exam + '<h2>Transfer the idea to a new question</h2>' +
        noteListHtml(["Work out which concept the question is testing and choose the definition or relation that fits.", "Write down what you know and what you still need to find or explain.", "Show how you move from the given information to your conclusion.", "Check that you included any units, comparison, diagram or explanation the question asks for."], true)),
      notePage(item, 10, "Common mistakes and how to avoid them", "Use these points to check your work. When you find a mistake, fix it and try the question again.",
        '<h2>Chapter-specific mistakes</h2>' + noteListHtml(traps, false, "kp-common-mistakes") +
        '<h2>Final verification checks</h2>' + noteListHtml(["Have you used each definition in the right way?", "Can you explain why every step follows from the information given?", "Have you checked the units, signs, names or dates where needed?", "Does your final sentence actually answer the question?"], true)),
      notePage(item, 11, "Practice questions with worked answers", "Give each question a real attempt before reading the solution. Pay attention to the step that felt hardest.",
        practiceContentHtml(item)),
      notePage(item, 12, "Final revision and self-check", "Close your notes and see what you remember. Revisit anything you cannot explain confidently.",
        '<h2>Chapter at a glance</h2>' + noteListHtml(item.points || [], false, "kp-key-ideas") +
        '<h2>Recall prompts</h2>' + noteListHtml(item.recall || [], true) +
        '<h2>Revision checklist</h2>' + noteListHtml(revisionChecklist, true) +
        '<h2>Exam focus</h2>' + exam)
    ];
    return renderMindMapPage(item) + pages.join("");
  }
  function compactChapterHtml(item) {
    const concepts = sectionContentHtml(item.sections);
    return '<article class="note-page compact-note-page"><p class="eyebrow">' + esc(item.level + " · " + item.subject) + '</p>' +
      '<h1>' + esc(item.chapter) + '</h1><p class="intro">' + esc(item.intro) + '</p>' + concepts +
      '<h2>Key ideas</h2>' + noteListHtml(item.points || [], false, "kp-key-ideas") +
      '<h2>Formulas & rules</h2>' + noteListHtml(item.formulas || [], false, "kp-formula-list") +
      '<h2>Worked example</h2><p>' + esc(item.example || "") + '</p>' +
      '<h2>Worked practice</h2>' + practiceContentHtml(item) +
      '<p class="source">' + esc(item.sourceNote || NOTE_SOURCE) + '</p></article>';
  }
    function printNotes(items) {
    if (!Array.isArray(items) || !items.length) {
      toast("Choose a chapter first, then I’ll prepare the notes for you.");
      return;
    }

    // Keep the preview visible on this page. The export should not depend on a
    // popup being allowed or on the browser opening a print dialog automatically.
    const previewShell = document.createElement("section");
    previewShell.className = "notes-pdf-preview-shell";
    previewShell.setAttribute("role", "dialog");
    previewShell.setAttribute("aria-modal", "true");
    previewShell.setAttribute("aria-label", "Chapter PDF preview");
    Object.assign(previewShell.style, {
      position: "fixed", inset: "0", zIndex: "2147483647",
      display: "flex", flexDirection: "column", gap: "10px",
      padding: "max(12px, 2vw)", background: "rgba(25, 17, 42, .82)"
    });

    const toolbar = document.createElement("div");
    Object.assign(toolbar.style, {
      display: "flex", flexWrap: "wrap", alignItems: "center",
      justifyContent: "space-between", gap: "12px", padding: "12px 16px",
      borderRadius: "12px", background: "#fff", color: "#241536",
      boxShadow: "0 8px 30px rgba(0,0,0,.18)"
    });
    const guidance = document.createElement("div");
    const heading = document.createElement("strong");
    heading.textContent = "Your chapter notes are ready";
    heading.style.display = "block";
    const status = document.createElement("span");
    status.setAttribute("role", "status");
    status.textContent = "Preparing your PDF…";
    status.style.cssText = "display:block;margin-top:4px;font-size:13px;color:#675a78";
    const qualityHint = document.createElement("span");
    qualityHint.textContent = "The complete chapter mind map prints on a landscape first page; detailed notes follow on portrait pages. Click Download PDF, then choose “Save as PDF” as the destination in your browser’s print dialog and select Save. The map stays crisp and selectable.";
    qualityHint.style.cssText = "display:block;max-width:640px;margin-top:5px;font-size:12px;line-height:1.45;color:#675a78";
    guidance.append(heading, status, qualityHint);

    const controls = document.createElement("div");
    Object.assign(controls.style, { display: "flex", flexWrap: "wrap", gap: "8px" });
    const downloadButton = document.createElement("button");
    downloadButton.type = "button";
    downloadButton.className = "btn btn-purple";
    downloadButton.textContent = "Download PDF";
    downloadButton.disabled = true;
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn btn-light";
    closeButton.textContent = "Close preview";
    closeButton.addEventListener("click", () => {
      if (previewShell.isConnected) previewShell.remove();
    });
    controls.append(downloadButton, closeButton);
    toolbar.append(guidance, controls);

    const printFrame = document.createElement("iframe");
    printFrame.title = "Preview of your chapter PDF";
    Object.assign(printFrame.style, {
      display: "block", flex: "1 1 auto", minHeight: "0",
      width: "100%", border: "0", borderRadius: "12px",
      background: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,.18)"
    });
    previewShell.append(toolbar, printFrame);
    document.body.appendChild(previewShell);
    const printTarget = printFrame.contentWindow;
    if (!printTarget) {
      previewShell.remove();
      toast("I couldn’t open the chapter preview. Refresh the page and try again.");
      return;
    }

    const startPrint = () => {
      try {
        printTarget.focus();
        printTarget.print();
      } catch (error) {
        status.textContent = "The print dialog didn’t open. Use your browser menu, choose Print, then Save as PDF.";
        toast("The print dialog didn’t open. Use your browser’s Print menu, then choose Save as PDF.");
      }
    };
    downloadButton.addEventListener("click", startPrint);

    const chapter = items.length === 1 && items[0] && typeof items[0] === "object" ? items[0] : null;
    const fileStemSource = String((chapter && chapter.chapter) || (chapter && chapter.title) || "KaushalPath-Chapter-Notes");
    const fileStem = fileStemSource
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 90) || "KaushalPath-Chapter-Notes";
    // Native print-to-PDF uses the page title as the suggested downloaded filename.
    const pageTitle = fileStem;

    try {
      // One chapter includes the concept map and twelve revision sections.
      // The bulk export stays compact so exporting several chapters remains practical.
      const fallbackValue = (value) => {
        if (value == null) return "";
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
        if (typeof value === "object") return String(value.heading || value.title || value.question || value.body || value.text || "Review this item in the Study Hub.");
        return "";
      };
      const fallbackList = (values) => {
        const list = Array.isArray(values) ? values : [];
        if (!list.length) return '<p class="empty-note">No separate entries are available in this subsection.</p>';
        return "<ul>" + list.slice(0, 250).map((value) => "<li>" + esc(fallbackValue(value)) + "</li>").join("") + "</ul>";
      };
      const fallbackChapterPage = (item) => {
        const source = item && typeof item === "object" ? item : {};
        const subjectLine = [fallbackValue(source.level), fallbackValue(source.subject)].filter(Boolean).join(" · ");
        return '<article class="note-page compact-note-page"><p class="eyebrow">' +
          esc(subjectLine || "KaushalPath Study Hub") + '</p><h1>' +
          esc(fallbackValue(source.chapter) || "Chapter notes") + '</h1><p class="intro">' +
          esc(fallbackValue(source.intro)) + '</p><h2>Key ideas</h2>' + fallbackList(source.points) +
          '<h2>Formulas & rules</h2>' + fallbackList(source.formulas) +
          '<h2>Worked example</h2><p>' + esc(fallbackValue(source.example)) + '</p>' +
          '<h2>Recall prompts</h2>' + fallbackList(source.recall) +
          '<p class="source">' + esc(fallbackValue(source.sourceNote) || NOTE_SOURCE) + '</p></article>';
      };
      const renderChapterSafely = (item, index, completePacket) => {
        const source = item && typeof item === "object" ? item : {};
        try {
          return completePacket
            ? fullChapterPacket(source)
            : renderMindMapPage(source) + compactChapterHtml(source);
        } catch (error) {
          console.warn("Detailed chapter rendering failed; using safe fallback.", {
            index,
            chapter: fallbackValue(source.chapter),
            message: error && error.message ? error.message : "Unknown chapter-rendering error"
          });
          try {
            return fallbackChapterPage(source);
          } catch (fallbackError) {
            console.error("Fallback chapter rendering failed.", fallbackError);
            return '<article class="note-page compact-note-page"><h1>Chapter notes</h1><p>Some formatting could not be prepared. Return to the Study Hub and use Print / Save PDF to try a simpler export.</p></article>';
          }
        }
      };
      const sections = items.length === 1
        ? renderChapterSafely(items[0], 0, true)
        : items.map((item, index) => renderChapterSafely(item, index, false)).join("");

      const page = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(pageTitle) + '</title><style>' +
        'html{color-scheme:light}*{box-sizing:border-box}body{font:10pt/1.48 Arial,Helvetica,sans-serif;color:#211735;max-width:800px;margin:0 auto;padding:0}h1{font-size:21pt;line-height:1.12;margin:6px 0 10px;break-after:avoid}h2{font-size:12pt;line-height:1.2;margin:12px 0 5px;border-bottom:1px solid #e2d8f2;padding-bottom:3px;break-after:avoid}h3{font-size:10pt;margin:9px 0 4px;break-after:avoid}.eyebrow{color:#6f42bd;letter-spacing:.08em;text-transform:uppercase;font-size:7pt;font-weight:bold;margin:0 0 5px}.intro{font-size:10pt;color:#594b6f}.note-page{page-break-after:always;break-after:page;min-height:262mm;padding:0 1mm;position:relative}.note-page:last-child{page-break-after:auto;break-after:auto}li{margin:0 0 4px;break-inside:avoid}p{orphans:3;widows:3;white-space:pre-line;margin:5px 0 7px}.source{border-top:1px solid #ddd;padding-top:5px;font-size:7pt;color:#6e6678;margin-top:12px}.content-block{margin:8px 0 12px;break-inside:avoid}.formula-card{border:1px solid #e0d4f0;border-left:3px solid #7545dd;border-radius:5px;padding:6px 9px;margin:6px 0;break-inside:avoid}.formula-trap{background:#fff4e6;padding:5px 7px;border-radius:4px}.empty-note{color:#695c79;font-style:italic}.mindmap-page{display:flex;flex-direction:column}.map-subtitle{color:#594b6f;font-size:8pt;margin-bottom:7px}.map-center{border:2px solid #7650d9;border-radius:10px;background:#f3edff;text-align:center;padding:8px;margin:4px auto 0;width:76%;display:flex;flex-direction:column;gap:2px}.map-center span{font-size:6.5pt;letter-spacing:.12em;font-weight:bold;color:#6540ae}.map-center strong{font-size:13pt}.map-center small{font-size:7pt;color:#594b6f}.map-stem{width:2px;height:10px;background:#9a83cc;margin:0 auto}.mindmap-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;align-content:start}.map-branch{border:1px solid #dcd3ea;border-radius:6px;padding:5px 6px;break-inside:avoid;min-width:0}.map-branch h2{font-size:8pt;margin:0 0 4px;border-bottom:0;padding:0}.map-dot{display:inline-block;width:6px;height:6px;background:#7952d8;border-radius:100%;margin:0 5px 1px 0}.map-nodes{display:flex;flex-wrap:wrap;gap:3px}.map-node{display:inline-block;border:1px solid #ece5f7;border-radius:4px;padding:2px 4px;font-size:6.4pt;line-height:1.22;max-width:100%;overflow-wrap:anywhere}.branch-1 .map-dot{background:#347fd1}.branch-2 .map-dot{background:#078b85}.branch-3 .map-dot{background:#d58a26}.branch-4 .map-dot{background:#cb5b82}.branch-5 .map-dot{background:#4f9670}.branch-6 .map-dot{background:#7b8290}.map-footnote{font-size:6.5pt;color:#6e6678;border-top:1px solid #e3dcec;padding-top:5px;margin-top:6px}.mindmap-page{page:chapter-map;min-height:0!important;padding:0!important;display:flex;flex-direction:column;gap:2mm;break-after:page!important;page-break-after:always!important}.map-caption{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 2mm;font-size:8pt;font-weight:700;color:#4F46A5;letter-spacing:.06em}.map-caption-label{font-size:7pt;color:#68758D;letter-spacing:.03em}.mindmap-svg{display:block;width:100%;height:auto;max-height:166mm;overflow:visible}.packet-page,.compact-note-page{page:chapter-notes}@page chapter-map{size:A4 landscape;margin:7mm 8mm}@page chapter-notes{size:A4 portrait;margin:12mm 13mm}@page{size:A4 portrait;margin:12mm 13mm}@media screen{body{padding:20px;background:#f8f6fb}.print-controls{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;max-width:800px;margin:0 auto 18px;padding:16px 18px;background:#fff;border:1px solid #e5def0;border-radius:12px;box-shadow:0 3px 18px #20123a12}.print-controls p{margin:5px 0 0;color:#675a78;font-size:10pt}.print-controls button{border:0;border-radius:9px;padding:11px 16px;background:#6740bd;color:#fff;font-weight:700;font-size:10pt;cursor:pointer}.note-page{background:#fff;box-shadow:0 2px 18px #20123a12;margin:0 auto 20px;max-width:800px;padding:24px}.mindmap-page{max-width:1200px!important;padding:18px!important}.mindmap-svg{max-height:none}.map-caption{margin-bottom:6px}}@media print{.print-controls{display:none!important}}' +
        '.note-page:nth-of-type(7n+1){--page-accent:#6875C8}.note-page:nth-of-type(7n+2){--page-accent:#3678E8}.note-page:nth-of-type(7n+3){--page-accent:#13A89E}.note-page:nth-of-type(7n+4){--page-accent:#F19A32}.note-page:nth-of-type(7n+5){--page-accent:#D94F8C}.note-page:nth-of-type(7n+6){--page-accent:#8359DA}.note-page:nth-of-type(7n+7){--page-accent:#2D9A66}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}h1{color:var(--page-accent,#3678E8)}h2{color:var(--page-accent,#3678E8);border-bottom:2px solid var(--page-accent,#3678E8);background:#F7F8FF;padding:4px 6px;border-radius:4px}li::marker{color:var(--page-accent,#8359DA);font-weight:bold}.content-block{border:1px solid #E4EAF7;border-left:4px solid var(--page-accent,#3678E8);border-radius:7px;padding:7px 9px;background:#F9FBFF}.content-block:nth-of-type(7n+2){border-left-color:#13A89E;background:#EFFBF8}.content-block:nth-of-type(7n+3){border-left-color:#F19A32;background:#FFF7EB}.content-block:nth-of-type(7n+4){border-left-color:#D94F8C;background:#FFF1F7}.content-block:nth-of-type(7n+5){border-left-color:#8359DA;background:#F6F1FF}.content-block:nth-of-type(7n+6){border-left-color:#2D9A66;background:#EFFAF3}.formula-card:nth-of-type(7n+1){border-color:#CDBEFF;border-left:4px solid #8359DA;background:#F6F1FF}.formula-card:nth-of-type(7n+2){border-color:#A9E5DB;border-left:4px solid #13A89E;background:#EFFBF8}.formula-card:nth-of-type(7n+3){border-color:#F6D09E;border-left:4px solid #F19A32;background:#FFF7EB}.formula-card:nth-of-type(7n+4){border-color:#F2BFD7;border-left:4px solid #D94F8C;background:#FFF1F7}.formula-card:nth-of-type(7n+5){border-color:#BFD2FF;border-left:4px solid #3678E8;background:#EFF5FF}.formula-trap{background:#FFF1D8;border-left:3px solid #F19A32;padding:6px 8px;border-radius:5px}.map-caption-kicker{color:#8359DA}.map-caption-label{color:#3678E8}.mindmap-svg{-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
        '.kp-important-mark{background:#FFF0A8;color:#563F00;border-radius:2px;padding:0 .12em;font-weight:750;-webkit-box-decoration-break:clone;box-decoration-break:clone}.kp-key-ideas>li,.kp-priority-list>li{background:#FFF9DC;border-left:3px solid #E4B22B;padding:5px 8px;margin:0 0 5px;border-radius:0 5px 5px 0}.kp-formula-list>li,.kp-formula-reference>li{background:#F3EDFF;border-left:3px solid #8359DA;padding:5px 8px;margin:0 0 5px;border-radius:0 5px 5px 0;font-weight:600}.kp-exam-focus>li{background:#EAF6FF;border-left:3px solid #3678E8;padding:5px 8px;margin:0 0 5px;border-radius:0 5px 5px 0}.kp-common-mistakes>li,.kp-common-mistake-callout{background:#FFF0E4;border-left:3px solid #E36B30;padding:5px 8px;margin:5px 0;border-radius:0 5px 5px 0}.kp-glossary>li{background:#EFFBF8;border-left:3px solid #13A89E;padding:4px 8px;margin:0 0 4px;border-radius:0 5px 5px 0}.kp-concept-block{border-left-color:#3678E8}.kp-worked-example{background:#EFFBF8;border-left:4px solid #13A89E;padding:7px 9px;border-radius:5px}.kp-method-block{border-left-color:#8359DA}.kp-practice-question{background:#EDF4FF;padding:5px 7px;border-radius:4px;color:#224F9F}.kp-practice-answer{background:#E9F8EE;padding:5px 7px;border-left:3px solid #2D9A66;border-radius:0 4px 4px 0}.kp-practice-reasoning{background:#F6F1FF;padding:5px 7px;border-left:3px solid #8359DA;border-radius:0 4px 4px 0}.kp-section-points-list>li{margin-top:3px}.kp-recall-prompts>li{border-bottom:1px dashed #D8D0E5;padding:3px 0}' +
        '@media print{html,body{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}#chapterPdfContent{width:100%!important;max-width:none!important}.mindmap-page{page:chapter-map;width:100%!important;max-width:none!important;margin:0 auto!important;padding:0!important;min-height:0!important;overflow:visible!important}.mindmap-svg{display:block;width:100%!important;height:auto!important;max-height:180mm!important;overflow:visible!important}.packet-page,.compact-note-page{page:chapter-notes;max-width:none!important}svg{overflow:visible}}' +
        '</style></head><body><main id="chapterPdfContent">' + sections + '</main></body></html>';

      printTarget.document.open();
      printTarget.document.write(page);
      printTarget.document.close();

      const chapterContent = printTarget.document.getElementById("chapterPdfContent");
      if (!chapterContent) throw new Error("The chapter PDF content was not created.");
      downloadButton.disabled = false;
      downloadButton.textContent = "Download PDF";
      status.textContent = "Preview ready. Click Download PDF, then choose “Save as PDF” in the print dialog and click Save. Your map and notes remain crisp and selectable.";
      toast("Chapter notes are ready. Click Download PDF, then choose Save as PDF in the print dialog.");
    } catch (error) {
      console.error("Chapter PDF export failed:", error);
      status.textContent = "I couldn’t prepare these notes. Close this preview, refresh the Study Hub and try again.";
      downloadButton.disabled = true;
      const errorBox = document.createElement("p");
      errorBox.textContent = "The chapter preview could not be prepared. Any chapter with a formatting issue now falls back to a simpler layout; if this message persists, refresh the Study Hub and try again.";
      errorBox.style.cssText = "padding:12px;color:#932a42;background:#fff2f4;border-radius:8px";
      previewShell.insertBefore(errorBox, printFrame);
      toast("I couldn’t prepare this chapter PDF. Refresh the Study Hub and try again.");
    }
  }
function toast(message) {
    const root = $("toast");
    if (root) { root.textContent = message; root.classList.remove("hidden"); }
  }
  if ($("notesClass")) $("notesClass").addEventListener("change", renderNotes);
  if ($("notesSubject")) $("notesSubject").addEventListener("change", renderNotes);
  if ($("notesSearch")) $("notesSearch").addEventListener("input", renderNotes);
  if ($("notesDownloadAll")) $("notesDownloadAll").addEventListener("click", () => printNotes(filteredNotes()));
  renderNotes();

  const tourSteps = [
    {view:"overview",label:"Your workspace",title:"Welcome to KaushalPath",text:"This guide walks through the main learning tools. Your practice results, saved notes and planner are stored in this browser, so export a backup before changing devices."},
    {view:"learn",label:"Step 1 of 6",title:"Use curated chapter notes",text:"The Study Hub is now a notes catalogue, not an AI prompt form. Search by class, subject or chapter, read key ideas, review formulas and export one chapter or all filtered notes through the print-to-PDF flow."},
    {view:"tests",label:"Step 2 of 6",title:"Practise under time pressure",text:"Question sets use answer explanations and configured +4/−1 scoring for the new JEE/NEET practice bank. The new bank is original exam-style practice, while official past papers stay linked from the official resources section."},
    {view:"ai-guide",label:"Step 3 of 6",title:"Use the separate AI Study Guide",text:"The AI Study Guide is separate from the CBSE notes hub. It supports follow-up questions, source search and supported image/document attachments. AI answers can be wrong; verify important claims."},
    {view:"library",label:"Step 4 of 6",title:"Keep useful work in your library",text:"Save generated answers and curated notes to My Library, search saved items, and export them when you need a portable copy."},
    {view:"history",label:"Step 5 of 6",title:"Track and protect your progress",text:"Use the focus timer, result history and progress backup. A JSON backup can move your local progress to another browser, but it does not create an online account or automatic sync."},
    {view:"resources",label:"Step 6 of 6",title:"Verify with official material",text:"CBSE, NCERT and NTA resources are the authority for current syllabus, sample papers and exam rules. No study app can honestly promise 100% error-free learning content."}
  ];
  let tourIndex = 0;
  function activateView(view) {
    const link = document.querySelector('[data-view="' + view + '"]');
    if (link) link.click();
    else if (view === "resources") { const fallback = document.querySelector('a[href="#resources"]'); if (fallback) fallback.click(); }
  }
  function finishTour() {
    const overlay = $("kpTourOverlay");
    if (overlay) overlay.remove();
    try { localStorage.setItem("kp-tour-seen", "1"); } catch (error) {}
  }
  function renderTourStep() {
    const step = tourSteps[tourIndex], box = $("kpTourCard");
    if (!box) return;
    box.classList.remove("tour-step-enter");
    box.innerHTML = '<div class="tour-kicker"><span class="tour-spark">✦</span>' + esc(step.label) + '</div><h2 id="tourDialogTitle">' + esc(step.title) + '</h2><p>' + esc(step.text) + '</p><div class="tour-progress" aria-label="Tour progress"><span style="width:' + ((tourIndex + 1) / tourSteps.length * 100) + '%"></span></div><div class="tour-actions"><button type="button" class="btn btn-light" id="tourSkip">Skip guide</button><div><button type="button" class="btn btn-light" id="tourBack"' + (tourIndex === 0 ? ' disabled' : '') + '>Back</button> <button type="button" class="btn btn-purple" id="tourNext">' + (tourIndex === tourSteps.length - 1 ? 'Finish guide' : 'Next step →') + '</button></div></div>';
    void box.offsetWidth; box.classList.add("tour-step-enter");
    $("tourSkip").addEventListener("click", finishTour);
    $("tourBack").addEventListener("click", () => { tourIndex = Math.max(0, tourIndex - 1); renderTourStep(); });
    $("tourNext").addEventListener("click", () => {
      if (tourIndex === tourSteps.length - 1) { finishTour(); return; }
      tourIndex += 1; activateView(tourSteps[tourIndex].view); renderTourStep();
    });
  }
  function startTour() {
    if (!$("kpTourOverlay")) {
      const overlay = document.createElement("div");
      overlay.id = "kpTourOverlay"; overlay.className = "tour-overlay";
      overlay.setAttribute("role", "dialog"); overlay.setAttribute("aria-modal", "true"); overlay.setAttribute("aria-labelledby", "tourDialogTitle");
      overlay.innerHTML = '<div class="tour-backdrop" data-tour-close="true"></div><section class="tour-card" id="kpTourCard" aria-live="polite"></section>';
      document.body.appendChild(overlay);
      overlay.addEventListener("click", (event) => { if (event.target && event.target.dataset.tourClose) finishTour(); });
      document.addEventListener("keydown", function handleTourKey(event) {
        if (!$("kpTourOverlay")) { document.removeEventListener("keydown", handleTourKey); return; }
        if (event.key === "Escape") finishTour();
      });
    }
    tourIndex = 0; activateView(tourSteps[0].view); renderTourStep();
  }
  if ($("startTour")) $("startTour").addEventListener("click", startTour);
  document.addEventListener("click", (event) => {
    const button = event.target.closest && event.target.closest("[data-start-tour]");
    if (button) { event.preventDefault(); startTour(); }
  });
  try {
    if (!localStorage.getItem("kp-tour-seen")) {
      window.setTimeout(startTour, 800);
    }
  } catch (error) {}

  window.KP_CURATED_NOTE_COUNT = notes.length;
})();
