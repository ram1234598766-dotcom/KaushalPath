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
    return [
      item.level + " · " + item.subject,
      item.chapter,
      item.intro,
      "KEY IDEAS\n" + item.points.map((x) => "- " + x).join("\n"),
      item.formulas.length ? "FORMULAS / RULES\n" + item.formulas.map((x) => "- " + x).join("\n") : "",
      "WORKED EXAMPLE\n" + item.example,
      "QUICK SELF-CHECK\n" + item.recall.map((x, i) => (i + 1) + ". " + x).join("\n"),
      "Source note: " + NOTE_SOURCE
    ].filter(Boolean).join("\n\n");
  }
  let activeNote = null;
  function filteredNotes() {
    const level = $("notesClass") ? $("notesClass").value : "all";
    const subject = $("notesSubject") ? $("notesSubject").value : "all";
    const search = String($("notesSearch") && $("notesSearch").value || "").trim().toLowerCase();
    return notes.filter((item) => (level === "all" || item.level === level) &&
      (subject === "all" || item.subject === subject) &&
      (!search || [item.chapter, item.subject, item.intro, ...item.points].join(" ").toLowerCase().includes(search)));
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
      const pill = document.createElement("span"); pill.className = "notes-tag"; pill.textContent = "Curated notes";
      head.append(meta, pill); card.append(head, h3, summary);
      const actions = document.createElement("div"); actions.className = "notes-card-actions";
      const read = document.createElement("button"); read.type = "button"; read.className = "btn btn-light"; read.textContent = "Read notes"; read.addEventListener("click", () => showNote(item));
      const pdf = document.createElement("button"); pdf.type = "button"; pdf.className = "btn btn-purple"; pdf.textContent = "Save as PDF"; pdf.addEventListener("click", () => printNotes([item]));
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
    const meta = document.createElement("div"); meta.className = "notes-meta"; meta.textContent = item.level + " · " + item.subject;
    const close = document.createElement("button"); close.className = "btn btn-light"; close.type = "button"; close.textContent = "Close notes"; close.addEventListener("click", () => detail.classList.add("hidden"));
    header.append(meta, close);
    const h2 = document.createElement("h2"); h2.textContent = item.chapter;
    const intro = document.createElement("p"); intro.textContent = item.intro;
    const pointHead = document.createElement("h3"); pointHead.textContent = "Key ideas";
    const pointList = document.createElement("ul"); item.points.forEach((text) => { const li = document.createElement("li"); li.textContent = text; pointList.appendChild(li); });
    detail.append(header, h2, intro, pointHead, pointList);
    if (item.formulas.length) {
      const fh = document.createElement("h3"); fh.textContent = "Formulas and rules";
      const fl = document.createElement("ul"); item.formulas.forEach((text) => { const li = document.createElement("li"); li.textContent = text; fl.appendChild(li); });
      detail.append(fh, fl);
    }
    const eh = document.createElement("h3"); eh.textContent = "Worked example";
    const ep = document.createElement("p"); ep.textContent = item.example;
    const rh = document.createElement("h3"); rh.textContent = "Quick self-check";
    const rl = document.createElement("ol"); item.recall.forEach((text) => { const li = document.createElement("li"); li.textContent = text; rl.appendChild(li); });
    const actions = document.createElement("div"); actions.className = "notes-card-actions";
    const pdf = document.createElement("button"); pdf.type = "button"; pdf.className = "btn btn-purple"; pdf.textContent = "Save this chapter as PDF"; pdf.addEventListener("click", () => printNotes([item]));
    const save = document.createElement("button"); save.type = "button"; save.className = "btn btn-light"; save.textContent = "Save to library"; save.addEventListener("click", () => {
      if (typeof window.KP_SAVE_NOTE_TO_LIBRARY === "function") window.KP_SAVE_NOTE_TO_LIBRARY(item.level + " · " + item.subject + " · " + item.chapter, noteText(item));
    });
    actions.append(pdf, save); detail.append(eh, ep, rh, rl, actions);
    detail.classList.remove("hidden");
    detail.scrollIntoView({ behavior: profile.reduceMotion ? "auto" : "smooth", block: "start" });
  }
  function printNotes(items) {
    if (!items.length) return;
    const title = items.length === 1 ? items[0].chapter : "KaushalPath Curated Revision Notes";
    const sections = items.map((item) => '<article class="note-page"><div class="eyebrow">' + esc(item.level + " · " + item.subject) + '</div><h1>' + esc(item.chapter) + '</h1><p class="intro">' + esc(item.intro) + '</p><h2>Key ideas</h2><ul>' + item.points.map((x) => '<li>' + esc(x) + '</li>').join("") + '</ul>' +
      (item.formulas.length ? '<h2>Formulas and rules</h2><ul>' + item.formulas.map((x) => '<li>' + esc(x) + '</li>').join("") + '</ul>' : "") +
      '<h2>Worked example</h2><p>' + esc(item.example) + '</p><h2>Quick self-check</h2><ol>' + item.recall.map((x) => '<li>' + esc(x) + '</li>').join("") + '</ol><p class="source">' + esc(NOTE_SOURCE) + '</p></article>').join("");
    const page = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(title) + '</title><style>' +
      'body{font:11pt/1.55 Arial,sans-serif;color:#211735;max-width:780px;margin:28px auto;padding:0 24px}h1{font-size:25pt;line-height:1.15;margin:10px 0}h2{font-size:14pt;margin:18px 0 7px;border-bottom:1px solid #e2d8f2;padding-bottom:4px}.eyebrow{color:#6f42bd;letter-spacing:.08em;text-transform:uppercase;font-size:9pt;font-weight:bold}.intro{font-size:12pt;color:#594b6f}.note-page{page-break-after:always;break-after:page}.note-page:last-child{page-break-after:auto;break-after:auto}li{margin:0 0 7px;page-break-inside:avoid}p{orphans:3;widows:3}.source{border-top:1px solid #ddd;padding-top:8px;font-size:9pt;color:#6e6678}@page{size:A4;margin:17mm} @media screen{body{padding:26px;box-shadow:0 3px 24px #20123a14;border-radius:12px}}' +
      '</style></head><body><p class="eyebrow">KaushalPath · Learn with direction</p>' + sections + '<script>window.addEventListener("load",function(){setTimeout(function(){window.print();},250);});<\/script></body></html>';
    const printWindow = window.open("", "_blank");
    if (!printWindow) { toast("Allow pop-ups to create the PDF, then choose Save as PDF in the print dialog."); return; }
    printWindow.document.open(); printWindow.document.write(page); printWindow.document.close();
    toast("In the print dialog, choose Save as PDF to download the notes.");
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
