/* Original exam-style practice questions. Official previous-year papers remain linked in the app. */
(function () {
  "use strict";
  const q = (question, options, answer, explanation) => ({ q: question, o: options, a: answer, e: explanation });
  const makeSet = (id, title, exam, subject, minutes, qs) => ({
    id, title, exam, level: "Practice",
    duration: minutes, mark: 4, negativeMark: 1,
    desc: "20 original " + subject + " MCQs. Pattern-inspired practice, not an official past paper.",
    qs
  });

  const jeeMath = [
    q("The roots of x^2 - 5x + 6 = 0 are:", ["2 and 3", "1 and 6", "-2 and -3", "3 and 4"], 0, "Factor x^2 - 5x + 6 as (x - 2)(x - 3)."),
    q("An arithmetic progression has first term 3 and common difference 2. Its 10th term is:", ["19", "21", "23", "25"], 1, "a_n = a + (n - 1)d = 3 + 9(2) = 21."),
    q("The determinant of [[1, 2], [3, 4]] is:", ["-2", "2", "10", "-10"], 0, "For [[a,b],[c,d]], det = ad - bc = 4 - 6 = -2."),
    q("For every real angle theta, sin^2(theta) + cos^2(theta) equals:", ["0", "2", "1", "tan(theta)"], 2, "This is the fundamental Pythagorean trigonometric identity."),
    q("If f(x) = x^3, then f'(2) is:", ["6", "8", "12", "16"], 2, "f'(x) = 3x^2, so f'(2) = 12."),
    q("An antiderivative of 2x with respect to x is:", ["2 + C", "x^2 + C", "2x^2 + C", "x + C"], 1, "Integral of 2x dx is x^2 + C."),
    q("The distance between points (1,2) and (4,6) is:", ["4", "5", "6", "7"], 1, "Distance = sqrt((4-1)^2 + (6-2)^2) = sqrt(25) = 5."),
    q("The area of a circle of radius 3 units is:", ["3 pi", "6 pi", "9 pi", "12 pi"], 2, "Area = pi r^2 = 9 pi square units."),
    q("The solution of 2x + 1 = 7 is:", ["2", "3", "4", "6"], 1, "Subtract 1 and divide by 2: x = 3."),
    q("A bag contains 3 red and 2 blue balls. The probability of drawing a red ball in one draw is:", ["2/5", "3/5", "1/2", "3/2"], 1, "Favourable outcomes / total outcomes = 3/5."),
    q("The limit of sin(x)/x as x tends to 0 (with x in radians) is:", ["0", "1", "infinity", "undefined"], 1, "The standard trigonometric limit is 1."),
    q("The discriminant of ax^2 + bx + c = 0 is:", ["b^2 + 4ac", "b^2 - 4ac", "a^2 - 4bc", "2b - ac"], 1, "The discriminant is D = b^2 - 4ac."),
    q("log base 10 of 1000 is:", ["2", "3", "10", "100"], 1, "10^3 = 1000, so log10(1000) = 3."),
    q("The dot product of vectors (1,2) and (3,4) is:", ["7", "10", "11", "14"], 2, "1(3) + 2(4) = 3 + 8 = 11."),
    q("A square matrix is singular when its determinant is:", ["1", "non-zero", "zero", "equal to its trace"], 2, "A matrix is invertible exactly when its determinant is non-zero."),
    q("The number of ways to choose 2 objects from 5 distinct objects is:", ["5", "10", "20", "25"], 1, "5C2 = 5!/(2!3!) = 10."),
    q("For real x, the range of y = x^2 is:", ["y < 0", "all real numbers", "y >= 0", "y > 1"], 2, "A real square cannot be negative; zero is attained at x = 0."),
    q("The sum of the first n terms of an AP with first term a and difference d is:", ["n(2a + nd)", "n/2[2a + (n-1)d]", "a + (n-1)d", "nd/2"], 1, "The standard AP sum formula is S_n = n/2[2a + (n-1)d]."),
    q("The modulus of the complex number 3 + 4i is:", ["1", "5", "7", "25"], 1, "Modulus = sqrt(3^2 + 4^2) = 5."),
    q("A triangle has side lengths 3, 4 and 5. The angle opposite the side of length 5 is:", ["acute", "right", "obtuse", "straight"], 1, "3^2 + 4^2 = 5^2, so the triangle is right-angled.")
  ];

  const jeePhysics = [
    q("A net force acts on a 2 kg object and produces acceleration 3 m/s^2. The net force is:", ["1.5 N", "5 N", "6 N", "9 N"], 2, "Newton's second law gives F = ma = 2 x 3 = 6 N."),
    q("A 12 V source drives 2 A through a resistor. The electrical power is:", ["6 W", "12 W", "24 W", "48 W"], 2, "P = VI = 12 x 2 = 24 W."),
    q("If the separation between two point charges doubles, the magnitude of their electrostatic force becomes:", ["twice", "half", "one-fourth", "four times"], 2, "Coulomb force varies inversely with the square of separation."),
    q("Linear momentum of a particle of mass m moving at velocity v is:", ["mv", "mv^2", "m/v", "v/m"], 0, "Momentum is a vector defined as p = mv."),
    q("The work done by a constant force perpendicular to displacement is:", ["positive", "negative", "zero", "infinite"], 2, "W = Fs cos(theta); cos(90 degrees) = 0."),
    q("The centripetal acceleration of an object moving at speed v in a circle of radius r is:", ["vr", "v/r", "v^2/r", "r/v^2"], 2, "For uniform circular motion, a_c = v^2/r directed toward the centre."),
    q("An object falls from rest through 5 m. Taking g = 10 m/s^2 and neglecting air resistance, its final speed is:", ["5 m/s", "10 m/s", "25 m/s", "50 m/s"], 1, "v^2 = u^2 + 2gh = 100, so v = 10 m/s."),
    q("Two resistors of 2 ohm and 3 ohm are connected in series. Their equivalent resistance is:", ["1.2 ohm", "2.5 ohm", "5 ohm", "6 ohm"], 2, "Series resistances add: 2 + 3 = 5 ohm."),
    q("Two 2 ohm resistors are connected in parallel. Their equivalent resistance is:", ["1 ohm", "2 ohm", "3 ohm", "4 ohm"], 0, "For two equal parallel resistors, R_eq = R/2 = 1 ohm."),
    q("A lens has focal length +0.5 m. Its power is:", ["-2 D", "-0.5 D", "+0.5 D", "+2 D"], 3, "Power P = 1/f when f is in metres, so P = +2 D."),
    q("The speed v, frequency f and wavelength lambda of a wave are related by:", ["v = f/lambda", "v = f lambda", "f = v lambda", "lambda = vf"], 1, "Wave speed equals frequency multiplied by wavelength."),
    q("The kinetic energy of a 2 kg body moving at 3 m/s is:", ["3 J", "6 J", "9 J", "18 J"], 2, "K = mv^2/2 = 2 x 9 / 2 = 9 J."),
    q("On a velocity-time graph, the slope represents:", ["displacement", "acceleration", "speed squared", "momentum"], 1, "Acceleration is the rate of change of velocity with time."),
    q("The SI unit of electric current is:", ["coulomb", "ampere", "volt", "ohm"], 1, "Current is charge flow per second and is measured in amperes."),
    q("Inside an ideal conductor in electrostatic equilibrium, the electric field is:", ["zero", "maximum", "always 1 N/C", "infinite"], 0, "Free charges redistribute until the internal electrostatic field vanishes."),
    q("In an ideal step-up transformer, the secondary coil has:", ["fewer turns", "more turns", "no turns", "the same current in every load"], 1, "A step-up transformer has more secondary turns and raises voltage."),
    q("The dimensions of acceleration are:", ["[L T^-1]", "[L T^-2]", "[M L T^-2]", "[M L^2 T^-2]"], 1, "Acceleration is length divided by time squared."),
    q("The magnitude of torque for a perpendicular force F applied at lever arm r is:", ["F/r", "Fr", "F+r", "r/F"], 1, "Torque magnitude is rF sin(theta); at 90 degrees it is rF."),
    q("Heat needed to raise a mass m by temperature change delta-T when specific heat is c is:", ["mc/delta-T", "m/(c delta-T)", "mc delta-T", "c delta-T/m"], 2, "Sensible heat is Q = mc delta-T."),
    q("For a projectile launched and landing at the same height with speed u and angle theta, the range is:", ["u^2 sin(theta)/g", "u^2 sin(2 theta)/g", "2u cos(theta)/g", "u sin(theta)/g"], 1, "Combine time of flight 2u sin(theta)/g with horizontal speed u cos(theta).")
  ];

  const jeeChem = [
    q("At 25 degrees C, the pH of a neutral aqueous solution is approximately:", ["0", "3", "7", "14"], 2, "At 25 degrees C, neutral water has equal H+ and OH- concentrations of 10^-7 M."),
    q("The predominant bonding in solid sodium chloride is:", ["metallic", "ionic", "non-polar covalent", "hydrogen bonding"], 1, "Na transfers an electron to Cl, producing oppositely charged ions."),
    q("One mole contains approximately:", ["6.022 x 10^20 entities", "6.022 x 10^23 entities", "3.011 x 10^23 entities", "1.000 x 10^3 entities"], 1, "The Avogadro constant is about 6.022 x 10^23 mol^-1."),
    q("Isotopes of the same element have:", ["different atomic numbers", "same atomic number but different mass numbers", "same neutron number always", "different proton and electron counts in neutral atoms"], 1, "Isotopes share proton number but differ in neutron number."),
    q("Oxidation, in terms of electron transfer, is:", ["gain of electrons", "loss of electrons", "gain of neutrons", "loss of protons only"], 1, "Oxidation is loss of electrons; reduction is gain."),
    q("A catalyst generally increases reaction rate by:", ["raising the activation energy", "lowering the activation energy pathway", "changing the equilibrium constant", "being consumed stoichiometrically"], 1, "A catalyst offers an alternative pathway with lower activation energy."),
    q("The ideal gas equation is:", ["P + V = nRT", "PV = nRT", "P/V = nRT", "PV = RT/n"], 1, "For an ideal gas, pressure times volume equals amount times R times temperature."),
    q("The usual hybridisation of carbon in methane, CH4, is:", ["sp", "sp2", "sp3", "dsp2"], 2, "Four equivalent sigma bonds give a tetrahedral arrangement and sp3 hybridisation."),
    q("Which is a strong monoprotic acid in dilute aqueous solution?", ["HCl", "CH3COOH", "H2O", "NH3"], 0, "Hydrochloric acid dissociates essentially completely in dilute water."),
    q("Molarity is defined as:", ["moles of solute per kilogram of solvent", "moles of solute per litre of solution", "grams of solvent per mole", "litres of solute per mole of solution"], 1, "Molarity M = moles of solute divided by solution volume in litres."),
    q("The bond order of N2 in its ground state is:", ["1", "2", "3", "4"], 2, "Molecular orbital theory gives nitrogen a bond order of 3."),
    q("For an exothermic reaction, the enthalpy change delta-H is:", ["positive", "negative", "always zero", "always equal to temperature"], 1, "Heat is released at constant pressure, so the system's enthalpy decreases."),
    q("The halogens occupy which group in the modern periodic table?", ["Group 1", "Group 2", "Group 17", "Group 18"], 2, "Fluorine, chlorine, bromine and iodine are Group 17 elements."),
    q("The characteristic functional group of ethanol is:", ["-COOH", "-OH", "-CHO", "-COO-"], 1, "Ethanol is an alcohol and contains a hydroxyl group."),
    q("For a given reaction, the equilibrium constant changes when:", ["a catalyst is added", "temperature changes", "more solid is added to a pure-solid equilibrium", "the vessel is stirred"], 1, "The equilibrium constant is temperature-dependent; a catalyst changes rate, not K."),
    q("Alkali metals are found in:", ["Group 1", "Group 14", "Group 17", "Group 18"], 0, "Lithium, sodium and potassium are Group 1 metals."),
    q("The approximate molar volume of an ideal gas at 273.15 K and 1 atm is:", ["2.24 L mol^-1", "11.2 L mol^-1", "22.4 L mol^-1", "44.8 L mol^-1"], 2, "At the traditional STP of 273.15 K and 1 atm, one mole occupies about 22.4 L."),
    q("The charge of an electron is:", ["positive", "negative", "zero", "dependent on its speed"], 1, "An electron carries one negative elementary charge."),
    q("A solution at pH 3 has how much greater hydrogen-ion concentration than one at pH 5?", ["2 times", "10 times", "100 times", "1000 times"], 2, "A two-unit pH difference means a 10^2 = 100-fold concentration difference."),
    q("The IUPAC retained systematic name for CH3COOH is:", ["methanoic acid", "ethanoic acid", "propanone", "ethanol"], 1, "CH3COOH contains two carbon atoms and a carboxylic acid group: ethanoic acid.")
  ];

  const neetPhysics = [
    q("For a projectile launched and landing at the same height, the range for fixed speed is maximum at:", ["30 degrees", "45 degrees", "60 degrees", "90 degrees"], 1, "R = u^2 sin(2 theta)/g, maximised when sin(2 theta) = 1."),
    q("Two 6 ohm resistors are connected in parallel. Their equivalent resistance is:", ["3 ohm", "6 ohm", "12 ohm", "18 ohm"], 0, "1/R_eq = 1/6 + 1/6 = 1/3, so R_eq = 3 ohm."),
    q("Impulse delivered by a net force equals the change in:", ["kinetic energy", "momentum", "potential energy", "charge"], 1, "Impulse is the time integral of force and equals delta-p."),
    q("The SI unit of electric field can be expressed as:", ["N/C", "C/N", "J C", "ohm metre"], 0, "Electric field is force per unit positive test charge, N/C."),
    q("A 24 V source is connected across a 12 ohm resistor. The current is:", ["0.5 A", "1 A", "2 A", "12 A"], 2, "Ohm's law gives I = V/R = 24/12 = 2 A."),
    q("The gravitational potential energy near Earth's surface, relative to a chosen zero level, is:", ["mg/h", "mgh", "mv", "mv^2/2"], 1, "For height h near Earth's surface, gravitational potential energy is mgh."),
    q("For an isolated system, total electric charge is:", ["always increasing", "always decreasing", "conserved", "converted entirely into mass"], 2, "Charge conservation is a fundamental physical law."),
    q("For a uniform wire of fixed material and cross-sectional area, resistance is proportional to its:", ["length", "radius", "mass only", "inverse temperature in all cases"], 0, "R = rho L/A when resistivity and cross-sectional area are fixed."),
    q("The refractive index n of a medium is:", ["v/c", "c/v", "cv", "c + v"], 1, "Absolute refractive index n = speed of light in vacuum / speed in medium."),
    q("The magnitude of magnetic force on a charge q moving at speed v perpendicular to magnetic field B is:", ["qv/B", "qB/v", "qvB", "qvB^2"], 2, "Lorentz magnetic force magnitude is qvB sin(theta); at 90 degrees it is qvB."),
    q("For a capacitor, charge Q, capacitance C and potential difference V satisfy:", ["Q = CV", "C = QV", "V = QC", "Q = C/V"], 0, "The defining capacitance relation is Q = CV."),
    q("Sound cannot propagate through:", ["steel", "water", "air", "vacuum"], 3, "Sound needs a material medium to transmit mechanical vibrations."),
    q("The SI unit of specific heat capacity is:", ["J kg^-1 K^-1", "J kg K", "kg J^-1", "W m^-1"], 0, "Specific heat is energy per unit mass per unit temperature change."),
    q("The centripetal force needed for a mass m moving at speed v in a circle of radius r is:", ["mv/r", "mv^2/r", "mr/v^2", "mvr"], 1, "The inward resultant force is mv^2/r."),
    q("The work-energy theorem states that net work equals change in:", ["momentum", "kinetic energy", "mass", "temperature"], 1, "W_net = K_final - K_initial."),
    q("In simple harmonic motion, acceleration a and displacement x from equilibrium obey:", ["a = omega x", "a = -omega^2 x", "a = omega^2/x", "a = constant"], 1, "SHM acceleration is proportional to displacement and directed toward equilibrium."),
    q("For an object at the centre of curvature of a concave mirror, the image is:", ["virtual and erect", "real, inverted and same size", "real and twice the size", "virtual and diminished"], 1, "An object at C forms an image at C, real, inverted and equal in size."),
    q("In vacuum, electromagnetic waves travel at approximately:", ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^10 m/s", "zero"], 1, "Their speed in vacuum is c, approximately 3 x 10^8 m/s."),
    q("Ohm's law for an ohmic conductor at constant physical conditions is:", ["V = IR", "I = VR", "R = VI", "V = I/R"], 0, "Potential difference is proportional to current: V = IR."),
    q("The time of flight for a projectile launched at speed u and angle theta, returning to the launch height, is:", ["u cos(theta)/g", "u sin(theta)/g", "2u sin(theta)/g", "2u cos(theta)/g"], 2, "Vertical displacement returns to zero after T = 2u sin(theta)/g.")
  ];

  const neetChem = [
    q("The atomic number of an element equals the number of:", ["neutrons", "protons", "nucleons", "neutrons plus electrons"], 1, "Atomic number Z is the number of protons in the nucleus."),
    q("A cation forms when an atom or group:", ["gains electrons", "loses electrons", "gains neutrons", "loses protons in ordinary ionisation"], 1, "Loss of negatively charged electrons gives a net positive charge."),
    q("The molar mass of H2O is approximately:", ["16 g mol^-1", "17 g mol^-1", "18 g mol^-1", "20 g mol^-1"], 2, "Two H atoms contribute about 2 and one O contributes about 16 g/mol."),
    q("At the same temperature, a solution at pH 2 has how much greater [H+] than a solution at pH 4?", ["2 times", "10 times", "100 times", "1000 times"], 2, "Each pH unit is a tenfold change in hydrogen-ion concentration."),
    q("For a system at equilibrium, adding more reactant generally shifts equilibrium toward:", ["reactants", "products", "neither side under any conditions", "only the catalyst"], 1, "Le Chatelier's principle predicts a shift that consumes the added reactant."),
    q("An aqueous electrolyte conducts electricity mainly because it contains mobile:", ["neutral molecules only", "ions", "photons", "neutrons"], 1, "Mobile cations and anions carry current through the solution."),
    q("Many esters are recognised by their:", ["metallic lustre", "fruity odour", "high electrical conductivity", "magnetic domains"], 1, "Simple esters commonly have characteristic fruity smells."),
    q("The general formula for an open-chain saturated acyclic alkane is:", ["C_nH_2n", "C_nH_2n+2", "C_nH_n", "C_nH_2n-2"], 1, "Acyclic alkanes contain only single bonds and follow C_nH_2n+2."),
    q("The aldehyde functional group is written as:", ["-OH", "-COOH", "-CHO", "-NH2"], 2, "An aldehyde has a terminal carbonyl group bonded to hydrogen, -CHO."),
    q("The molecular formula of benzene is:", ["C6H6", "C6H12", "C5H6", "C6H14"], 0, "Benzene contains six carbon and six hydrogen atoms."),
    q("Within a typical main-group family, atomic radius generally increases down the group because:", ["nuclear charge falls to zero", "additional electron shells are occupied", "all electrons disappear", "the number of protons decreases"], 1, "Successive elements down a group occupy shells with larger principal quantum numbers."),
    q("The electron-shell arrangement of a neutral sodium atom (Z = 11) is:", ["2, 8, 1", "2, 7, 2", "2, 9", "8, 3"], 0, "Sodium has 11 electrons: 2 in the first shell, 8 in the second and 1 in the third."),
    q("Water has an unusually high boiling point for its molecular size largely because of:", ["metallic bonding", "hydrogen bonding between molecules", "ionic bonding between every molecule", "nuclear forces"], 1, "Intermolecular hydrogen bonding requires extra energy to overcome."),
    q("A catalyst added to a reversible reaction at constant temperature changes the equilibrium constant by:", ["increasing it", "decreasing it", "not changing it", "making it zero"], 2, "A catalyst speeds forward and reverse reactions but does not change K."),
    q("A buffer solution resists large changes in:", ["pH when small acid/base amounts are added", "mass when weighed", "volume in all circumstances", "temperature under every condition"], 0, "A suitable weak acid/base pair consumes small added amounts of H+ or OH-."),
    q("Baking soda is:", ["Na2CO3", "NaHCO3", "CaCO3", "NaOH"], 1, "Baking soda is sodium hydrogen carbonate, NaHCO3."),
    q("An enzyme is best described as a biological:", ["fuel", "catalyst", "vitamin only", "nucleic acid monomer"], 1, "Enzymes increase reaction rates by lowering activation energy, usually with substrate specificity."),
    q("A polymer is built from repeated smaller units called:", ["isotopes", "monomers", "cations only", "allotropes"], 1, "Monomers join through polymerisation to create macromolecular chains or networks."),
    q("The bond order of O2 in its ground state is:", ["1", "1.5", "2", "3"], 2, "Molecular orbital theory gives dioxygen a bond order of 2."),
    q("The molecular shape of NH3 is:", ["linear", "trigonal planar", "trigonal pyramidal", "tetrahedral with four bonded atoms"], 2, "Three N-H bonds and one lone pair produce a trigonal pyramidal molecular shape.")
  ];

  const neetBiology = [
    q("The main site of aerobic ATP production in a typical eukaryotic cell is the:", ["lysosome", "mitochondrion", "Golgi apparatus", "nucleolus"], 1, "Mitochondria carry out the citric acid cycle and oxidative phosphorylation."),
    q("Ribosomes are responsible for:", ["protein synthesis", "lipid storage only", "DNA packaging only", "photosynthesis in animals"], 0, "Ribosomes translate mRNA into polypeptide chains."),
    q("Which vascular tissue primarily transports water and mineral ions from roots?", ["phloem", "xylem", "epidermis", "cambium only"], 1, "Xylem conducts water and dissolved mineral ions; phloem transports sugars and other organic solutes."),
    q("The classic model of DNA replication is described as:", ["conservative in all organisms", "semi-conservative", "dispersive only in humans", "translation"], 1, "Each daughter DNA double helix contains one parental strand and one newly synthesised strand."),
    q("Genotype refers to an organism's genetic constitution, whereas phenotype refers to its:", ["observable traits", "number of chromosomes only", "gamete size only", "mitochondrial count only"], 0, "Phenotype is the observable expression resulting from genotype and environment."),
    q("In a cross Aa x Aa with complete dominance, the probability of aa offspring is:", ["0", "1/4", "1/2", "3/4"], 1, "The genotype ratio is 1 AA : 2 Aa : 1 aa, so aa occurs with probability 1/4."),
    q("Insulin is secreted by which cells of the pancreas?", ["alpha cells of islets", "beta cells of islets", "red blood cells", "acinar cells of the salivary gland"], 1, "Pancreatic beta cells produce insulin; alpha cells produce glucagon."),
    q("The functional unit of the kidney is the:", ["neuron", "nephron", "alveolus", "villus"], 1, "A nephron filters blood and modifies the filtrate through reabsorption and secretion."),
    q("Most gas exchange between air and blood in human lungs occurs across:", ["the tracheal rings", "alveolar surfaces", "the epiglottis", "the diaphragm muscle"], 1, "Thin alveolar walls and dense capillary networks support diffusion of O2 and CO2."),
    q("Antibodies are also called:", ["immunoglobulins", "phospholipids", "glycogen", "steroids"], 0, "Antibodies are immunoglobulin proteins produced by B-cell-derived plasma cells."),
    q("One normal mitotic division of a diploid somatic cell produces:", ["four haploid cells", "two genetically similar daughter cells", "one gamete only", "two cells with double chromosome number"], 1, "Mitosis normally preserves chromosome number and produces two daughter cells."),
    q("Meiosis is important in sexual reproduction because it:", ["doubles chromosome number every generation", "reduces chromosome number in gametes", "prevents recombination", "produces identical somatic cells only"], 1, "Meiosis halves the chromosome number, enabling fertilisation to restore diploidy."),
    q("Stomata in leaves are important for:", ["gas exchange and regulation of water loss", "absorbing all soil minerals directly", "transporting blood", "seed fertilisation only"], 0, "Stomatal pores regulate CO2/O2 exchange and transpiration."),
    q("The primary light-absorbing pigment in oxygenic photosynthesis is:", ["haemoglobin", "chlorophyll a", "melanin", "keratin"], 1, "Chlorophyll a is the main reaction-centre pigment in oxygenic photosynthesis."),
    q("Natural selection occurs when individuals with certain heritable traits:", ["always stop reproducing", "leave more surviving offspring in a particular environment", "change their DNA because they need to", "avoid all variation"], 1, "Differential reproductive success can change trait frequencies over generations."),
    q("PCR is widely used to:", ["amplify a selected DNA sequence", "translate protein directly", "separate all proteins by size", "make ribosomes without nucleic acids"], 0, "Polymerase chain reaction uses primers, nucleotides and a thermostable polymerase to amplify DNA."),
    q("A standard mRNA codon consists of:", ["one nucleotide", "two nucleotides", "three nucleotides", "four amino acids"], 2, "A codon is a triplet of nucleotides that specifies an amino acid or stop signal."),
    q("In a conventional energy pyramid, producers form the:", ["top level", "base level", "decomposer-only level", "level with no stored energy"], 1, "Producers capture energy and support higher trophic levels; energy decreases upward."),
    q("Antidiuretic hormone (ADH) generally increases water reabsorption in the:", ["collecting ducts and late distal nephron", "glomerulus only by making pores larger", "urinary bladder wall", "renal artery alone"], 0, "ADH increases collecting-duct water permeability, helping concentrate urine."),
    q("Vaccination helps protect against later exposure mainly by promoting:", ["immune memory", "permanent removal of all white blood cells", "loss of every antigen receptor", "immediate antibiotic production"], 0, "Vaccines prime adaptive immunity and can create memory B and T cells.")
  ];

  window.KP_EXTRA_QUESTIONS = [
    makeSet("jee-math-pattern-01", "JEE Main · Mathematics Practice 01", "JEE Main", "Mathematics", 48, jeeMath),
    makeSet("jee-physics-pattern-01", "JEE Main · Physics Practice 01", "JEE Main", "Physics", 48, jeePhysics),
    makeSet("jee-chem-pattern-01", "JEE Main · Chemistry Practice 01", "JEE Main", "Chemistry", 48, jeeChem),
    makeSet("neet-physics-pattern-01", "NEET UG · Physics Practice 01", "NEET UG", "Physics", 20, neetPhysics),
    makeSet("neet-chem-pattern-01", "NEET UG · Chemistry Practice 01", "NEET UG", "Chemistry", 20, neetChem),
    makeSet("neet-bio-pattern-01", "NEET UG · Biology Practice 01", "NEET UG", "Biology", 20, neetBiology)
  ];
})();
