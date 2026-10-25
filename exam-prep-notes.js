/* Original extended revision notes for JEE Main and NEET UG. These are study aids, not official papers. */
(function () {
  "use strict";
  const pack = (level, subject, chapter, intro, points, formulas, example, sections, workedExamples, commonMistakes, examFocus, recall, glossary) => ({
    level, subject, chapter, intro, points, formulas, example, recall, glossary,
    sections, workedExamples, commonMistakes, examFocus, depth: "detailed",
    sourceNote: "Original revision notes aligned to common NCERT concepts. Confirm the exact topic scope with the current CBSE/NTA syllabus and prescribed NCERT textbook."
  });
  const physicsMechanics = pack("JEE Main", "Physics", "Kinematics: Vectors, Motion Graphs and Projectiles",
    "A complete problem-solving framework for one- and two-dimensional motion, with sign conventions and graph interpretation.",
    [
      "Position is a coordinate relative to a chosen origin; displacement is the final position minus the initial position, while distance is the full path length.",
      "Velocity is the rate of change of displacement and may be negative; speed is the magnitude of velocity.",
      "Acceleration is the rate of change of velocity. Constant-acceleration equations apply only when acceleration is uniform over the interval.",
      "For projectile motion without air resistance, horizontal and vertical components evolve independently under gravity.",
      "The slope of a position-time graph gives velocity; the slope of velocity-time gives acceleration; the signed area under a velocity-time graph gives displacement."
    ],
    ["v = u + at","s = ut + 1/2 at^2","v^2 = u^2 + 2as","Projectile: T = 2u sin(theta)/g; R = u^2 sin(2theta)/g for equal launch/landing heights"],
    "A projectile is launched at 20 m/s at 30 degrees and lands at the launch height. With g = 10 m/s^2, the flight time is T = 2(20)(1/2)/10 = 2 s; horizontal speed = 20 cos(30 degrees) = 10 sqrt(3) m/s; range = 20 sqrt(3) m.",
    [
      {heading:"1. Choose the reference frame and signs",body:"Start every question by writing down the origin, positive axis and time interval. In vertical motion, choosing upward as positive gives acceleration a = -g. Choosing downward as positive gives a = +g. Either convention works, but mixing them changes signs and produces wrong results. Displacement can be negative even though distance is never negative."},
      {heading:"2. Read graphs before substituting formulas",body:"A straight position-time line means constant velocity; a steeper line means a larger velocity magnitude. A curved position-time graph indicates changing velocity. On a velocity-time graph, a horizontal segment means constant velocity, and a negative area contributes negative displacement. If the object reverses direction, total distance requires splitting the motion at the instant velocity changes sign."},
      {heading:"3. Resolve vectors into components",body:"For a vector of magnitude A at angle theta from the positive x-axis, use Ax = A cos(theta) and Ay = A sin(theta), adjusting signs by quadrant. In ideal projectile motion, ax = 0 and ay = -g if upward is positive. The horizontal speed stays constant while the vertical velocity changes linearly. Do not assume the speed stays constant: the direction and vertical component change throughout flight."},
      {heading:"4. Projectile relationships and their limits",body:"For launch speed u at angle theta and equal start/end heights, time of flight comes from vertical displacement returning to zero. Range is horizontal speed multiplied by flight time. Maximum range occurs at 45 degrees only for equal heights, uniform gravity and negligible air resistance. If launch and landing heights differ, use the vertical displacement equation first rather than the equal-height formula."}
    ],
    [
      {title:"Relative velocity in a straight line",steps:["Choose one direction as positive.","Write each object's signed velocity in the same reference frame.","For A relative to B, use v(A/B) = vA - vB.","Check whether the result means approaching or separating."]},
      {title:"Projectile range",steps:["Resolve launch velocity into ux and uy.","Use vertical motion to find the time when the projectile reaches its landing height.","Use horizontal displacement x = ux t.","Check that the assumed landing height matches the question."]}
    ],
    ["Using distance in an equation that needs signed displacement.","Applying constant-acceleration equations when acceleration is not constant.","Using R = u^2 sin(2theta)/g when landing height differs from launch height.","Forgetting that the velocity-time graph's area is signed."],
    ["For JEE, expect relative motion, graph areas, projectile maxima and multi-stage motion. Show the direction convention and derive the relevant equation before substituting values."],
    ["A body returns to its start point. Can its displacement be zero while distance is nonzero?","When is projectile range maximum? State the assumptions.","What does the signed area under a velocity-time graph represent."],
    ["Displacement: signed change in position.","Trajectory: path followed by a moving object.","Relative velocity: velocity of one object measured from another reference frame."]);

  const physicsForces = pack("JEE Main", "Physics", "Newton's Laws, Friction, Circular Motion and Energy",
    "Connect free-body diagrams to Newton's laws, contact forces, circular motion and conservation methods.",
    [
      "Newton's first law describes inertia; the second relates net force to momentum change; the third describes equal-and-opposite interaction forces on different bodies.",
      "A free-body diagram includes only forces acting on the selected body, not forces it exerts on another body.",
      "Static friction adjusts up to a maximum; kinetic friction acts during sliding. Friction direction opposes relative slipping or its tendency.",
      "Uniform circular motion requires an inward net force even if speed is constant; centripetal force is the net inward component, not a new force type.",
      "The work-energy theorem often avoids solving acceleration and time when only speed or displacement is needed."
    ],
    ["F_net = ma","f_s <= mu_s N; f_k = mu_k N in the standard dry-friction model","a_c = v^2/r; F_c = mv^2/r","W = F s cos(theta); K = 1/2 mv^2; P = dW/dt"],
    "A 2 kg object moving at 6 m/s in a circle of radius 3 m needs inward net force mv^2/r = 2(36)/3 = 24 N.",
    [
      {heading:"Free-body diagram method",body:"Select one object and isolate it. Draw gravity downward, the normal perpendicular to the surface, tension along the string, and applied forces in their physical directions. Resolve forces along axes chosen to simplify motion. The normal force is not always equal to mg; an angled pull, vertical acceleration or curved path can change it."},
      {heading:"Friction and limiting conditions",body:"Static friction is whatever value is required to prevent slipping, up to its limit mu_s N. Use f_s = mu_s N only at impending motion. During sliding, the elementary model uses f_k = mu_k N. On an incline, resolve gravity into mg sin(theta) along the slope and mg cos(theta) perpendicular to it; friction direction depends on the tendency to move, not simply on the direction of motion in every static problem."},
      {heading:"Circular motion",body:"Centripetal acceleration points toward the centre and has magnitude v^2/r. Sum the real forces along the inward radial direction and set that component equal to mv^2/r. On a flat turn, friction can provide the inward force; for a vertical circle, tension and gravity contribute differently at the top and bottom. Centripetal force is a name for the net radial force, not an additional force to draw on a diagram."},
      {heading:"Choose between Newton and energy methods",body:"Use Newton's second law when forces, acceleration and time are important. Use work-energy when a net work calculation links initial and final speeds. Conservative forces can be represented by potential energy; non-conservative work changes mechanical energy. Power is a rate, so average power is work divided by elapsed time, while instantaneous power is force dotted with velocity."}
    ],
    [
      {title:"Block on a rough incline",steps:["Draw mg, normal reaction and friction on the isolated block.","Resolve gravity into parallel and perpendicular components.","Use N = mg cos(theta) when no other perpendicular force/acceleration exists.","Compare mg sin(theta) with the maximum static friction before deciding whether it slides."]},
      {title:"Safe speed on a flat curve",steps:["Identify friction as the source of the required inward force.","Write mu_s N >= mv^2/r at the threshold.","Use N = mg if there is no vertical acceleration or other vertical force.","Solve v_max = sqrt(mu_s g r) under the ideal model."]}
    ],
    ["Drawing an action-reaction partner on the same object's free-body diagram.","Assuming normal reaction always equals mg.","Writing an extra 'centripetal force' in addition to real forces.","Setting static friction to its maximum before checking the limiting condition."],
    ["JEE frequently combines pulleys, inclined planes, friction, circular motion and energy. Label each body's diagram separately and state the system boundary."],
    ["Why do action-reaction forces not cancel on one free-body diagram?","What is the difference between static and limiting friction?","Why is centripetal force not an extra interaction."],
    ["Inertia: resistance to change in motion.","Normal reaction: contact force perpendicular to a surface.","Conservative force: force whose work is path-independent in the relevant domain."]);

  const physicsThermal = pack("JEE Main", "Physics", "Thermodynamics and Kinetic Theory",
    "Build the sign-consistent framework for heat, work, internal energy, ideal-gas processes and molecular motion.",
    [
      "A thermodynamic system is the part selected for analysis; heat and work are energy-transfer modes, while internal energy is a state function.",
      "For the chemistry convention used here, the first law is Delta U = Q + W, where Q is heat absorbed by the system and W is work done on it.",
      "For an ideal gas, internal energy depends only on temperature; an isothermal ideal-gas process has Delta U = 0.",
      "At constant pressure, heat for an appropriate process is related to enthalpy change; during a phase change, temperature can remain constant while latent heat is absorbed or released.",
      "Kinetic theory relates microscopic molecular motion to macroscopic temperature and pressure."
    ],
    ["Delta U = Q + W (work on system positive)","PV = nRT","For ideal gas: Delta U = n Cv Delta T","For an ideal gas in an isothermal process, Delta U = 0 and Q = -W under the above sign convention when W is work on system."],
    "An ideal gas expands isothermally and does 200 J of work on the surroundings. With Delta U = 0, the gas must absorb 200 J of heat.",
    [
      {heading:"Define the system and sign convention first",body:"Before using the first law, decide whether the system is the gas, the gas plus piston, or another object. In this set of notes, Q is positive when heat enters the system and W is positive when work is done on the system. Some physics courses instead define W as work done by the system, producing Delta U = Q - W. Both conventions are consistent; errors occur when the formula and sign definitions are mixed."},
      {heading:"PV diagrams and work",body:"For quasi-static gas expansion, work done by the gas is the area under the P-V curve in the usual thermodynamic diagram. Expansion often means work by the gas is positive in the work-by-system convention; compression reverses it. Constant-volume processes do no P-V work because dV = 0. A cycle returns the gas to its initial state, so net change in internal energy over a full cycle is zero."},
      {heading:"Heat capacities and ideal gases",body:"The relation Q = mc Delta T applies when no phase change occurs and the specific heat can be treated as constant. During melting or boiling, use Q = mL instead. For an ideal gas, temperature is proportional to average translational kinetic energy. The molar heat capacity at constant pressure exceeds the one at constant volume because a constant-pressure gas can expand and do work as it is heated."},
      {heading:"Process comparison",body:"Isochoric means constant volume; isobaric constant pressure; isothermal constant temperature; adiabatic no heat exchange. These labels do not independently specify whether work is done or the process is spontaneous. For an adiabatic process Q = 0, so internal-energy change balances the work term under the chosen convention. For an isothermal ideal gas, Delta U = 0, but heat and work may both be nonzero."}
    ],
    [
      {title:"Apply the first law",steps:["Write the system and the sign convention.","Identify heat into/out of system and work on/by system.","Substitute signs into Delta U = Q + W for the convention used here.","Check whether a state change such as constant temperature constrains Delta U."]},
      {title:"Identify process from a P-V graph",steps:["Read whether pressure or volume is constant.","Use the area under the path to estimate work by the gas.","Use the starting and ending states to determine Delta U for an ideal gas.","Apply the first law to find the remaining energy transfer."]}
    ],
    ["Mixing the work-on-system and work-by-system sign conventions.","Assuming heat is the same thing as temperature.","Using Q = mc Delta T through a phase change without latent heat.","Assuming an isothermal process has zero heat transfer."],
    ["JEE tests sign conventions, P-V graph areas, heat capacities, cycles and kinetic-theory relations. Write the convention directly next to the first-law equation."],
    ["Which process has Q=0?","Why does an ideal-gas isothermal process have Delta U=0?","What does the area under a P-V curve represent."],
    ["State function: property determined by the current equilibrium state.","Adiabatic process: no heat exchange with surroundings.","Molar heat capacity: heat per mole per unit temperature rise for a stated process."]);

  const physicsElectro = pack("JEE Main", "Physics", "Electrostatics, Potential and Capacitors",
    "Study charge distributions, electric field, potential, Gauss-law symmetry and capacitor networks.",
    [
      "Electric charge is conserved and quantised; electrostatic force follows an inverse-square relationship for point charges in vacuum.",
      "Electric field is force per unit positive test charge. Field vectors add by superposition.",
      "Electric potential is scalar electric potential energy per unit charge; potential differences determine work per unit charge.",
      "Gauss's law relates net electric flux through a closed surface to enclosed charge; it is most useful for high symmetry.",
      "Capacitance measures stored charge per potential difference; dielectric material can change capacitance, and stored energy can be expressed in multiple equivalent forms."
    ],
    ["F = k |q1 q2|/r^2","E = F/q; point charge E = k |q|/r^2","V(point charge) = kq/r","C = Q/V; U = 1/2 CV^2 = Q^2/(2C) = 1/2 QV"],
    "Two capacitors of 6 microfarad and 3 microfarad in series have equivalent capacitance 1/Ceq=1/6+1/3=1/2, so Ceq=2 microfarad.",
    [
      {heading:"Field and potential are different quantities",body:"Electric field is a vector and describes force direction and magnitude; potential is a scalar and describes energy per unit charge. Superposition adds fields vectorially but adds potentials algebraically. A field can be zero at a point while potential is nonzero, as happens at the midpoint of two identical positive charges: fields cancel but potentials add."},
      {heading:"Use Gauss's law only with symmetry",body:"Gauss's law is always valid, but it simplifies field calculation when the field magnitude and direction are uniform over a convenient Gaussian surface. Spherical symmetry suits a sphere, cylindrical symmetry an appropriately chosen cylinder, and an ideal infinite plane a pillbox. Do not assume a field is constant over a Gaussian surface when symmetry does not justify it."},
      {heading:"Conductors in electrostatic equilibrium",body:"The electric field inside the conducting material is zero in electrostatic equilibrium. Excess charge resides on surfaces, and the conductor is an equipotential. Cavities and external fields require careful boundary reasoning; the statement does not imply there is no field everywhere inside any cavity containing charge."},
      {heading:"Capacitor connections and stored energy",body:"Parallel capacitors share the same potential difference and their capacitances add. Series capacitors carry equal magnitude charge in an isolated simple series chain and their reciprocals add. For a fixed battery, V is fixed; for an isolated charged capacitor, Q is fixed. When a dielectric is inserted, determine what is held fixed before predicting energy change."}
    ],
    [
      {title:"Capacitor network",steps:["Mark each capacitor's connections and identify series/parallel groups.","Replace a parallel group with the sum of capacitances.","Replace a series group using reciprocal addition.","Use Q=CV for each final element and check voltage/charge conservation."]},
      {title:"Symmetry and Gauss's law",steps:["Identify the charge distribution and its symmetry.","Choose a closed surface on which the field is constant or flux is easy to calculate.","Evaluate total flux through the surface.","Use enclosed charge only; external charge can contribute field but has zero net closed-surface flux contribution."]}
    ],
    ["Adding electric field magnitudes without directions.","Treating potential as a vector.","Using Gauss's law as if it gives E without symmetry information.","For capacitor dielectric questions, forgetting whether the battery remains connected."],
    ["JEE often combines field/potential, equilibrium points, flux, conductors, and mixed capacitor networks. State the constraint (fixed Q or fixed V) before energy calculations."],
    ["Can E be zero where V is nonzero? Give a configuration.","What does Gauss's law count inside a closed surface?","Which is fixed for an isolated capacitor when a dielectric is inserted."],
    ["Electric flux: surface integral of the normal component of electric field.","Equipotential: region or surface where potential is constant.","Dielectric: insulating material that polarises in an electric field."]);

  const physicsCurrent = pack("JEE Main", "Physics", "Current Electricity and Circuit Analysis",
    "Use charge conservation, Ohm's law, resistivity, Kirchhoff rules and electrical power to solve DC networks.",
    [
      "Current is charge flow per unit time; conventional current points in the direction positive charge would move.",
      "Resistance of a uniform wire depends on material resistivity, length and cross-sectional area, and may vary with temperature.",
      "Series components share current; parallel branches share voltage, while equivalent resistance can be reduced systematically.",
      "Kirchhoff's junction rule follows from charge conservation; the loop rule follows from conservation of energy.",
      "An ideal ammeter has negligible resistance and an ideal voltmeter has very high resistance."
    ],
    ["I = Delta Q/Delta t; V = IR","R = rho L/A","P = VI = I^2 R = V^2/R","Junction rule: sum currents in = sum currents out"],
    "A 12 V battery across a 4 ohm and 8 ohm series pair gives total R=12 ohm, so current=1 A; voltage drops are 4 V and 8 V.",
    [
      {heading:"Equivalent circuits",body:"In series, resistances add because the same current passes through each element and total voltage is the sum of drops. In parallel, reciprocal resistances add because each branch has the same voltage and branch currents sum. For a mixed network, reduce the innermost clear group first and redraw the circuit after each reduction to avoid treating visually adjacent but unconnected components as series."},
      {heading:"Kirchhoff equation method",body:"Assign branch currents and choose loop directions. At a junction, use a consistent in/out sign rule. Around a loop, crossing a battery from negative to positive is a rise; moving through a resistor in the direction of current is a drop. An arbitrary current direction is allowed; a negative solved current means the real current runs opposite to the guess."},
      {heading:"EMF, terminal voltage and power",body:"A real source with internal resistance r has terminal voltage lower than emf while delivering current: V = emf - Ir. Electric power is the rate of energy transfer. Use P = I^2R when current is known and P = V^2/R when voltage across the resistor is known. Ratings such as 60 W at a specified voltage imply a corresponding resistance only under the intended operating condition."}
    ],
    [
      {title:"Series and parallel reduction",steps:["Replace any unambiguous series chain by its resistance sum.","Replace each parallel group with the reciprocal-sum formula.","Calculate total current from the source and total equivalent resistance.","Work backward to recover branch voltage and current."]},
      {title:"Kirchhoff loops",steps:["Label unknown branch currents and choose directions.","Write an independent equation for each required junction and loop.","Keep battery and resistor signs consistent with traversal direction.","Solve the simultaneous equations and check current conservation."]}
    ],
    ["Treating two components as series when their shared node has another branch.","Adding parallel resistances directly.","Confusing emf with terminal voltage under load.","Using the wrong voltage/current in a power formula."],
    ["JEE uses bridge circuits, internal resistance, meter placement, resistor networks and power transfer. Draw nodes explicitly and verify units in every final result."],
    ["Why does adding a resistor in parallel decrease equivalent resistance?","What does a negative branch current mean?","Which resistance should an ideal ammeter have."],
    ["EMF: energy supplied per unit charge by a source.","Resistivity: material property relating electric field and current density.","Terminal voltage: voltage available at a source's terminals under load."]);

  const physicsMagnet = pack("JEE Main", "Physics", "Magnetism, EMI and Alternating Current",
    "Connect magnetic force, flux changes, induced emf, Lenz's law and AC circuit behaviour.",
    [
      "Magnetic force on a moving charge is perpendicular to both its velocity and the magnetic field.",
      "Magnetic flux depends on field strength, area and orientation; induced emf appears when flux linkage changes.",
      "Lenz's law determines the direction of induced current by opposing the change in flux that produces it.",
      "A transformer uses mutual induction; in an ideal transformer voltage ratio tracks turns ratio and power is conserved approximately.",
      "For sinusoidal AC, rms values produce the same average heating effect in a resistor as the corresponding DC values."
    ],
    ["F = q v B sin(theta)","Flux Phi = BA cos(theta) for a uniform field and flat surface","Induced emf = -N dPhi/dt","V_rms = V_peak/sqrt(2) for sinusoidal voltage"],
    "A 200-turn coil's flux per turn changes by 0.02 Wb in 0.1 s. The magnitude of average induced emf is N |Delta Phi|/Delta t = 200(0.02)/0.1 = 40 V.",
    [
      {heading:"Magnetic force and circular motion",body:"If the magnetic force is perpendicular to velocity, it changes direction but not speed, so it can produce circular motion without doing work. For velocity perpendicular to a uniform field, qvB = mv^2/r, giving r = mv/(|q|B). If velocity has a component parallel to the field, that component remains unchanged and the particle follows a helical path."},
      {heading:"Flux and induction",body:"Magnetic flux through a planar loop is Phi = BA cos(theta) for a uniform field, where theta is measured between the field and the surface normal. Flux can change because B changes, the loop area changes, its orientation changes, or the conductor moves. Faraday's law relates the induced emf to the rate of change of flux linkage; more turns or faster flux change raises its magnitude."},
      {heading:"Lenz's law and energy",body:"The induced current opposes the change in magnetic flux, not necessarily the original magnetic field itself. If a magnet approaches a coil, the induced field acts to oppose the approach; when it moves away, the induced field acts to oppose the decrease. This is consistent with energy conservation: external work is needed to maintain the motion against the induced effect."},
      {heading:"AC and transformers",body:"In a pure resistor, voltage and current are in phase and average power is Vrms Irms. In inductors and capacitors, phase shifts affect average power. A transformer needs changing flux, so a steady DC source does not provide continuous transformer action after the switching transient. Real transformers also have copper, core and leakage losses."}
    ],
    [
      {title:"Induced emf",steps:["Write the flux expression and the angle convention.","Identify which quantity changes with time.","Calculate the rate of change of flux linkage N Phi.","Use Lenz's law separately if direction is required."]},
      {title:"Charged particle in B field",steps:["Check whether v is perpendicular, parallel or oblique to B.","Use magnetic force magnitude |q|vB sin(theta).","If perpendicular, equate it to centripetal force for the radius.","Reverse force direction for a negative charge relative to the right-hand-rule direction."]}
    ],
    ["Using the angle between the field and plane instead of the surface normal in BA cos(theta).","Thinking Lenz's law says the induced field always opposes B itself.","Using peak rather than rms values in AC heating calculations.","Assuming a transformer can continuously transfer power with steady DC."],
    ["JEE questions often ask flux graphs, rod motion, direction of induced current, transformer turns and AC impedance. Separate magnitude from direction before calculating."],
    ["What changes when magnetic force acts on a charge?","What physical change causes induced emf?","Why is a minus sign present in Faraday's law."],
    ["Magnetic flux: field through a surface, measured in weber.","RMS: effective root-mean-square value for heating equivalence.","Mutual induction: emf in one coil caused by changing current/flux associated with another."]);

  const physicsOptics = pack("JEE Main", "Physics", "Ray Optics, Wave Optics and Image Formation",
    "Use sign conventions for mirrors/lenses and understand interference, diffraction and polarisation.",
    [
      "Ray optics approximates light as rays and works when wavelengths are small relative to the optical geometry.",
      "Refraction obeys Snell's law; frequency remains constant across an ordinary stationary boundary while speed and wavelength change.",
      "A consistent Cartesian sign convention is required for mirror/lens equations and magnification.",
      "Young's double-slit interference requires coherent sources; path difference controls constructive and destructive interference.",
      "Diffraction becomes pronounced when an aperture or obstacle dimension is comparable to wavelength."
    ],
    ["n1 sin(i) = n2 sin(r)","Thin lens: 1/f = 1/v - 1/u under the commonly taught Cartesian convention","Power P = 1/f with f in metres","Young fringe spacing beta = lambda D/d"],
    "If wavelength is 600 nm, screen distance 2 m and slit spacing 0.5 mm, fringe spacing is beta = (600 x 10^-9)(2)/(0.5 x 10^-3) = 2.4 mm.",
    [
      {heading:"Refraction and total internal reflection",body:"Refractive index relates the speed of light in vacuum to that in a medium. When light enters a higher-index medium, it bends toward the normal under the usual conditions. Total internal reflection requires light to travel from higher index to lower index and incidence above the critical angle. Do not apply a critical-angle formula in the wrong direction."},
      {heading:"Image formation with lenses and mirrors",body:"First sketch the principal rays, then use the lens or mirror equation with one sign convention throughout. Magnification relates image height to object height and also relates image and object distances with a sign in the standard convention. Real images are formed by converging actual rays and can be caught on a screen; virtual images are apparent intersections and cannot be caught directly on a screen."},
      {heading:"Interference",body:"A stable interference pattern requires coherent sources with a fixed phase relationship. In Young's double slit, adjacent bright fringes are separated by beta = lambda D/d under the small-angle approximation. Increasing wavelength or screen distance spreads fringes; increasing slit separation reduces fringe spacing. Bright fringes occur for integer-wavelength path differences and dark fringes for half-integer differences."},
      {heading:"Diffraction and polarisation",body:"Diffraction is spreading around apertures/obstacles and becomes noticeable when dimensions approach the wavelength. Polarisation demonstrates that light is transverse because the electric-field oscillation direction can be restricted. In problems, distinguish interference between coherent sources from single-aperture diffraction; their intensity patterns and conditions differ."}
    ],
    [
      {title:"Lens calculation",steps:["Choose a Cartesian sign convention and label u, v and f.","Use the prescribed thin-lens equation consistently.","Calculate magnification separately and interpret its sign.","Check whether the result means a real or virtual image for the given lens/object position."]},
      {title:"Interference spacing",steps:["Identify lambda, screen distance D and slit separation d.","Convert all lengths to metres.","Use beta = lambda D/d.","Check that beta has units of length and that the small-angle setup is appropriate."]}
    ],
    ["Mixing sign conventions from different textbooks.","Assuming frequency changes during refraction at a stationary interface.","Ignoring unit conversion in the double-slit formula.","Confusing diffraction with refraction."],
    ["JEE covers sign-convention image questions, optical instruments, critical angle, fringe spacing and path difference. Draw ray/path sketches; diagrams often expose sign mistakes."],
    ["What conditions are required for total internal reflection?","How does fringe spacing change if slit separation doubles?","Why does polarisation indicate a transverse wave."],
    ["Coherent sources: sources with a stable phase difference.","Critical angle: incidence angle in the denser medium that gives a refracted ray at 90 degrees.","Magnification: image-size ratio with sign information about orientation."]);

  const physicsModern = pack("JEE Main", "Physics", "Modern Physics, Atoms, Nuclei and Semiconductors",
    "Connect photons, de Broglie waves, quantised atomic states, nuclear energy and semiconductor devices.",
    [
      "The photoelectric effect supports photon energy transfer; emission depends on frequency reaching the material's threshold.",
      "Matter waves associate wavelength with a particle's momentum, giving larger wavelength for lower momentum.",
      "Atomic spectra arise from transitions between quantised energy states; photon energy equals the level difference.",
      "Nuclear mass defect corresponds to binding energy; half-life characterises exponential decay of large populations.",
      "Semiconductor behaviour depends on band structure and doping; a p-n junction responds differently to forward and reverse bias."
    ],
    ["Photon energy E = h nu = hc/lambda","de Broglie wavelength lambda = h/p","N(t)=N0(1/2)^(t/t_half)","Energy-mass relation E = mc^2"],
    "A radioactive sample passes through three half-lives. The remaining undecayed fraction is (1/2)^3 = 1/8 = 12.5%.",
    [
      {heading:"Photoelectric effect",body:"A photon transfers energy h nu to an electron. Some energy is needed to escape the material (work function); the remainder can appear as maximum kinetic energy. Below threshold frequency, increasing intensity alone does not cause photoemission in the simple single-photon model. Above threshold, increasing intensity usually increases emission rate, while increasing frequency raises maximum kinetic energy."},
      {heading:"Atomic spectra and de Broglie wavelength",body:"When an electron transitions between energy levels, the photon energy magnitude is the difference between the levels. Absorption takes energy in; emission releases it. For matter waves, lambda = h/p shows that high-momentum particles have short wavelengths. For non-relativistic charged particles accelerated through a potential difference, kinetic energy gained can be related to qV before estimating momentum."},
      {heading:"Nuclear physics",body:"Mass defect is the difference between the summed masses of separated nucleons and the bound nucleus, using consistent atomic/nuclear mass conventions. Binding energy per nucleon is a useful indicator of stability across nuclei, but does not by itself predict every reaction rate. Radioactive decay is random for individual nuclei, while the number remaining follows an exponential law for a large population."},
      {heading:"Semiconductors and logic",body:"Doping adds donor or acceptor impurities and creates n-type or p-type material. A p-n diode in forward bias reduces the barrier and can conduct significantly; reverse bias normally supports only a small current until breakdown. Logic gates implement Boolean operations. For a truth-table question, translate each input combination and follow the gate definition rather than relying on the visual shape alone."}
    ],
    [
      {title:"Photoelectric equation",steps:["Convert the light frequency or wavelength to photon energy.","Compare photon energy with the work function to check if emission occurs.","Subtract the work function to find maximum kinetic energy.","Do not equate light intensity with photon energy per photon."]},
      {title:"Half-life",steps:["Calculate how many half-lives elapsed: n = t/t_half.","Remaining fraction is (1/2)^n.","Multiply by initial amount for the remaining nuclei or mass.","For non-integer n, the exponential formula still applies."]}
    ],
    ["Claiming intensity can overcome a below-threshold frequency in the ideal photoelectric effect.","Confusing binding energy with mass defect units.","Treating half-life as the time for every individual nucleus to decay.","Reversing the logic of forward and reverse bias."],
    ["JEE often combines photoelectric graphs, de Broglie wavelength, Bohr-level energy, decay fractions and simple semiconductor logic."],
    ["What changes when photon frequency increases above threshold?","What is the remaining fraction after four half-lives?","What is the role of doping."],
    ["Work function: minimum energy needed to release an electron from a material.","Half-life: time for a large undecayed population to reduce by half.","Doping: intentional addition of impurities to change semiconductor carrier concentration."]);

  const chemistryMole = pack("JEE Main", "Chemistry", "Mole Concept, Stoichiometry and Atomic Structure",
    "Use amount-of-substance calculations, limiting reagents, concentration units and atomic quantum ideas.",
    [
      "One mole represents a fixed number of entities; the entity type (atoms, molecules, ions) must be specified.",
      "Balanced chemical coefficients provide mole ratios, which must be converted to masses or volumes with molar mass and gas conditions.",
      "A limiting reagent is consumed first and caps the theoretical product amount.",
      "Molarity uses solution volume, while molality uses solvent mass; temperature expansion affects the volume-based unit.",
      "Atomic electronic structure uses quantised levels and orbitals described by quantum numbers."
    ],
    ["n = m/M","N = n N_A","Molarity = moles solute / litres solution","For a gas, PV = nRT under the ideal-gas approximation"],
    "For 5.6 g N2 (molar mass 28 g/mol), amount = 0.2 mol. If it reacts in N2 + 3H2 -> 2NH3 with excess H2, theoretical NH3 = 0.4 mol.",
    [
      {heading:"A reliable stoichiometry workflow",body:"Write and balance the reaction first. Convert each given reactant to moles, divide by its coefficient to compare available reaction amounts, and identify the limiting reagent. Use its coefficient ratio to determine theoretical product moles, then convert to the requested unit. Percent yield compares actual product with theoretical product; percent purity adjusts the actual sample mass to the pure substance amount."},
      {heading:"Concentration and solution quantities",body:"Molarity is moles divided by total solution volume in litres; molality is moles divided by solvent mass in kilograms. Dilution of a fixed solute amount often uses M1V1 = M2V2, when the same solute amount is preserved and volumes/units are consistent. In gas problems, use Kelvin temperature and compatible pressure/volume units in PV = nRT."},
      {heading:"Atomic structure",body:"Atomic number equals proton count; mass number equals proton plus neutron count. Isotopes share atomic number but differ in neutron count. Quantum numbers describe shell, subshell, orbital orientation and spin within the allowed rules; orbitals are probability distributions, not literal planetary paths. Electron configurations are built using energy order, Pauli exclusion and Hund's rule, with known exceptions for some atoms."},
      {heading:"Dimensions and significant figures",body:"Track units through every numerical line; units can reveal a conversion mistake early. Keep extra digits during intermediate calculations and round at the final step using the requested significant figures. A theoretical quantity may be limited by the least available reactant even if the other reactant is present in a large excess."}
    ],
    [
      {title:"Limiting reagent",steps:["Balance the chemical equation.","Convert each reactant mass to moles.","Divide moles by the stoichiometric coefficient; the smaller ratio identifies the limiting reagent.","Calculate theoretical product from that reagent only."]},
      {title:"Dilution",steps:["Check that no solute is added or removed during dilution.","Use the same concentration unit on both sides.","Use M1V1=M2V2 with volumes in the same unit.","Remember dilution changes concentration, not moles of solute."]}
    ],
    ["Using mass ratios directly from equation coefficients.","Using Celsius in PV=nRT.","Confusing solvent mass with solution mass for molality.","Rounding each intermediate result too early."],
    ["JEE tests multistep stoichiometry, limiting reagent, empirical formula, gas mixtures, quantum numbers and concentration conversion."],
    ["Why must the equation be balanced before a mole calculation?","When is M1V1=M2V2 valid?","How do isotopes differ."],
    ["Molar mass: mass of one mole of a substance.","Limiting reagent: reactant that restricts maximum product.","Orbital: quantum-mechanical probability description of an electron state."]);

  const chemistryBond = pack("JEE Main", "Chemistry", "Periodic Trends, Chemical Bonding and Molecular Shape",
    "Predict bond type, geometry, polarity, hybridisation and periodic behaviour using electron structure.",
    [
      "Effective nuclear attraction, shielding and shell number help explain trends in atomic radius and ionisation enthalpy.",
      "Ionic bonding is electrostatic attraction among ions; covalent bonding uses shared electron pairs.",
      "Lewis structures count valence electrons and identify bonding/lone pairs; formal charge helps compare plausible structures.",
      "VSEPR relates electron-domain repulsion to molecular geometry; lone pairs affect shape and bond angle.",
      "Molecular polarity depends on both bond dipoles and three-dimensional symmetry."
    ],
    ["Formal charge = valence electrons - nonbonding electrons - 1/2(bonding electrons)","Bond order = 1/2(bonding electrons - antibonding electrons) in MO theory"],
    "CO2 has polar C=O bonds but a linear geometry; equal opposite bond dipoles cancel, so the ideal molecule has no net dipole moment.",
    [
      {heading:"Periodic properties",body:"Across a period, effective nuclear charge generally increases while valence electrons are added to the same main shell, so atomic radius usually decreases. Down a group, higher principal shells and shielding generally increase size. Ionisation enthalpy generally decreases down a group and increases across a period, but paired-electron repulsion and subshell stability cause exceptions. Explain an exception with configuration and orbital occupancy rather than memorising it blindly."},
      {heading:"Lewis structures and formal charge",body:"Count total valence electrons, accounting for charge, connect atoms with single bonds, complete terminal octets, and place remaining electrons on central atoms. Multiple bonds can be formed when needed to reduce formal charges or complete valence shells. Resonance means multiple contributing structures describe delocalised electrons; the real structure is not rapidly flipping between fixed drawings."},
      {heading:"Shape and hybridisation",body:"VSEPR counts electron domains around a central atom. Four domains have tetrahedral electron-domain arrangement; a lone pair changes the molecular shape to trigonal pyramidal, and two lone pairs produce a bent shape. Hybridisation is a useful bonding model, but always distinguish electron-domain geometry from the shape defined by atomic positions."},
      {heading:"Polarity and bond order",body:"A bond dipole points toward the more electronegative atom in the conventional representation. The net molecular dipole is the vector sum of bond dipoles and lone-pair effects. For diatomic molecules, higher bond order usually corresponds to a shorter, stronger bond. Molecular orbital theory explains paramagnetism of O2 through unpaired electrons in antibonding orbitals."}
    ],
    [
      {title:"VSEPR shape",steps:["Draw the Lewis structure and count valence electrons.","Count electron domains around the central atom; a multiple bond counts as one domain in the simple model.","Determine electron-domain geometry, then remove lone-pair positions to name molecular shape.","Use lone-pair repulsion to reason about bond-angle deviations."]},
      {title:"Formal charge",steps:["Count valence electrons of the free atom.","Subtract nonbonding electrons assigned to it.","Subtract half the bonding electrons.","Check that the sum of formal charges matches the overall molecular/ion charge."]}
    ],
    ["Using the octet rule without considering known exceptions.","Calling CO2 polar just because its individual bonds are polar.","Counting a double bond as two independent VSEPR domains.","Confusing orbital hybridisation labels with electron-domain geometry."],
    ["JEE commonly tests shapes, bond angles, formal charge, dipole moment, MO bond order and exceptions in periodic trends."],
    ["Why is H2O bent?","Can a molecule with polar bonds have zero net dipole?","What does bond order mean in MO theory."],
    ["Shielding: reduction in effective nuclear attraction due to other electrons.","Formal charge: bookkeeping charge assigned in a Lewis structure.","Resonance: delocalisation represented by multiple contributing structures."]);

  const chemistryThermo = pack("JEE Main", "Chemistry", "Chemical Thermodynamics and Equilibrium",
    "Connect enthalpy, entropy, Gibbs energy, equilibrium constants and Le Chatelier's principle.",
    [
      "Enthalpy change represents heat transfer at constant pressure under the relevant conditions; reaction values depend on the reaction stoichiometry.",
      "Hess's law works because enthalpy is a state function, so a reaction can be decomposed into a sum of known steps.",
      "Gibbs energy combines enthalpy and entropy contributions and indicates thermodynamic favourability at specified conditions.",
      "At dynamic equilibrium, forward and reverse rates are equal and macroscopic composition remains constant.",
      "A catalyst changes the rate of approach to equilibrium but does not change the equilibrium constant at a fixed temperature."
    ],
    ["Delta G = Delta H - T Delta S","Delta G = Delta G° + RT ln Q","At equilibrium Q=K and Delta G=0","For aA+bB <-> cC+dD, Kc = [C]^c[D]^d/([A]^a[B]^b), under the stated concentration convention"],
    "For an exothermic reaction at fixed pressure, raising temperature generally favours the endothermic direction; the equilibrium constant changes with temperature, not with catalyst addition.",
    [
      {heading:"Thermodynamic signs",body:"Define the system and sign convention before evaluating heat or work. Exothermic means the system releases heat under the stated reaction conditions and Delta H is typically negative for the forward reaction. Endothermic means heat is absorbed and Delta H is positive. Entropy is associated with the number of accessible microstates and dispersal of energy; entropy change is not just a synonym for visible disorder."},
      {heading:"Hess's law and formation enthalpy",body:"Because enthalpy is a state function, reversing a reaction reverses the sign of its enthalpy change, and multiplying the equation by a factor multiplies Delta H by the same factor. Standard reaction enthalpy can be computed from standard enthalpies of formation: sum products minus sum reactants, each weighted by stoichiometric coefficient. Do not forget the reference state conventions embedded in standard formation enthalpy."},
      {heading:"Gibbs energy and spontaneity",body:"At constant temperature and pressure, Delta G < 0 indicates a thermodynamically favourable forward direction under the chosen conditions; Delta G = 0 indicates equilibrium; Delta G > 0 favours the reverse direction. A favourable process may still be slow if the activation barrier is large. The standard Gibbs change and non-standard actual Gibbs change differ when concentrations or partial pressures differ."},
      {heading:"Equilibrium shifts",body:"The reaction quotient Q uses the same form as K but current activities or concentrations. If Q<K, the reaction tends toward products; if Q>K, it tends toward reactants. Adding a reactant may shift composition to consume it, but K at fixed temperature remains unchanged. Temperature changes K because it changes the thermodynamic balance of the reaction; a catalyst lowers kinetic barriers for both directions."}
    ],
    [
      {title:"Hess's law calculation",steps:["Write the target reaction exactly.","Reverse or scale available equations to match target reactants/products.","Apply the same reverse/scale operation to each Delta H.","Add equations and enthalpy values, cancelling intermediates."]},
      {title:"Predict equilibrium direction",steps:["Write K and the current reaction quotient Q using matching species and powers.","Calculate or compare Q and K.","If Q<K, net forward progress raises Q; if Q>K, net reverse progress lowers Q.","Use temperature dependence separately from concentration/pressure shifts."]}
    ],
    ["Changing K when only concentration changes.","Assuming a catalyst shifts the equilibrium composition.","Ignoring stoichiometric coefficients in enthalpy sums or K expressions.","Equating spontaneity with reaction speed."],
    ["JEE often combines calorimetry, Hess's law, Gibbs energy, Kp/Kc and equilibrium perturbations. Clearly separate equilibrium position, rate and thermodynamic driving force."],
    ["What quantity changes when a catalyst is added?","What does Q<K imply?","Can an exothermic reaction be slow."],
    ["Enthalpy: heat-related state function at constant pressure.","Entropy: state function linked to accessible microstates and energy dispersal.","Reaction quotient: equilibrium expression evaluated at current composition."]);

  const chemistryElectro = pack("JEE Main", "Chemistry", "Electrochemistry, Redox and Chemical Kinetics",
    "Solve oxidation-number problems, galvanic cell potentials, Nernst equations, conductance and rate laws.",
    [
      "Oxidation is loss of electrons; reduction is gain. Oxidising agents accept electrons while reducing agents donate them.",
      "Anode is the oxidation electrode and cathode is the reduction electrode in both galvanic and electrolytic cells.",
      "A galvanic cell converts spontaneous chemical energy into electrical work; standard cell potential follows cathode minus anode reduction potentials.",
      "Reaction rate laws are experimentally determined; their powers need not equal coefficients of the balanced equation.",
      "For a first-order reaction, half-life is independent of initial concentration under the ideal first-order model."
    ],
    ["E°cell = E°cathode - E°anode using reduction potentials","Delta G° = -n F E°cell","Nernst: E = E° - (RT/nF) ln Q","First order: ln([A]0/[A]t)=kt; t1/2=0.693/k"],
    "For a first-order process with k = 0.231 min^-1, t1/2 = 0.693/0.231 = 3.0 min.",
    [
      {heading:"Balance redox equations",body:"Assign oxidation numbers, identify which elements increase or decrease oxidation state, and equalise electron loss and gain. In ionic equations, conserve both atoms and charge; use an acidic or basic medium method as specified. Oxidising agent is the species reduced, while reducing agent is the species oxidised, which can feel counterintuitive if the names are not linked to what they cause."},
      {heading:"Galvanic cells",body:"At the anode oxidation releases electrons to the external circuit; at the cathode reduction consumes them. Electrons travel through the external wire from anode to cathode for a galvanic cell. Salt bridges maintain electrical neutrality by ion migration. Cell potential is calculated from reduction potentials as cathode minus anode; do not change tabulated reduction-potential signs unless you also reverse the half-reaction consistently."},
      {heading:"Nernst equation",body:"The Nernst equation adjusts electrode or cell potential for non-standard activities. At 298 K, the log10 form uses approximately 0.0591/n volts multiplied by log Q, with the overall sign as in the chosen equation. If Q rises for a spontaneous forward cell reaction, its cell potential falls. Never put pure solids or pure liquids into Q under the usual convention."},
      {heading:"Kinetics and half-life",body:"Rate law exponents come from experimental evidence, not from stoichiometric balancing unless the reaction is an elementary step. The units of k depend on overall reaction order. For first-order decay, concentration falls exponentially; a semilog plot of concentration versus time is linear. Arrhenius behaviour relates rate constant to activation energy and absolute temperature, assuming a suitable model."}
    ],
    [
      {title:"Cell potential",steps:["Identify oxidation and reduction half-reactions.","Use standard reduction potentials for both half-cells.","Calculate E°cell as E°cathode minus E°anode.","Use Delta G° = -nFE°cell to check the thermodynamic sign."]},
      {title:"Find first-order half-life",steps:["Verify the reaction is described as first-order.","Use t1/2 = 0.693/k with k in inverse-time units.","Convert time units if required.","Remember changing initial concentration does not change the ideal first-order half-life."]}
    ],
    ["Reversing the cell-potential subtraction.","Calling the cathode the oxidation electrode.","Deriving reaction order directly from the balanced equation.","Using Kelvin-incompatible or inconsistent units in kinetic calculations."],
    ["JEE commonly tests redox balancing, cell notation, Nernst, conductivity, order/units of k, integrated laws and half-life."],
    ["What occurs at the anode?","Why are pure solids omitted from Q?","Does a catalyst change the equilibrium constant."],
    ["Oxidising agent: electron acceptor, reduced during reaction.","Galvanic cell: spontaneous redox cell producing electrical energy.","Rate constant: proportionality constant in an experimentally established rate law."]);

  const chemistryOrganic = pack("JEE Main", "Chemistry", "Organic Chemistry: Mechanisms, Hydrocarbons and Functional Groups",
    "Build a structure-first approach to organic reaction prediction, acidity/basicity, substitution, addition and carbonyl chemistry.",
    [
      "Functional groups largely determine characteristic organic reactivity; the carbon skeleton and substituents modify those patterns.",
      "Inductive effects, resonance, hyperconjugation and steric effects influence stability of intermediates and relative reactivity.",
      "Nucleophiles donate an electron pair; electrophiles accept an electron pair. Mechanisms track electron-pair movement rather than atoms magically changing positions.",
      "Alkenes and alkynes commonly undergo addition across multiple bonds; alkanes commonly undergo substitution under suitable radical conditions.",
      "Carbonyl carbon is electrophilic; aldehydes, ketones, carboxylic acids and derivatives have different reaction patterns and oxidation behaviour."
    ],
    ["Open-chain alkane: CnH2n+2","Alcohol: R-OH; aldehyde: R-CHO; ketone: R-CO-R'; carboxylic acid: R-COOH","Nucleophile = electron-pair donor; electrophile = electron-pair acceptor."],
    "In an electrophilic addition to a typical alkene, first identify the pi bond as the electron-rich site, then determine the electrophile and the more stable intermediate under the specified conditions before predicting the product.",
    [
      {heading:"A general mechanism workflow",body:"Draw the substrate clearly and identify bonds with high electron density or polarised atoms. Mark the nucleophile, electrophile, leaving group and any acid/base. Move electron pairs from a source to an electron-poor site, and check formal charges after each step. Then compare possible intermediates using resonance, inductive effects, hyperconjugation, aromaticity and steric accessibility. Product prediction should follow the given reagent and conditions, not just a memorised reaction name."},
      {heading:"Acidity and basicity",body:"The more stable the conjugate base, the stronger the acid tends to be in a comparable solvent. Resonance delocalisation often stabilises anions; electron-withdrawing inductive groups can also stabilise negative charge. Basicity depends on availability of the lone pair and stabilisation of the protonated form. A lone pair delocalised into an aromatic ring may be less available for protonation, as in many aromatic amines compared with related aliphatic amines."},
      {heading:"Hydrocarbons",body:"Alkanes are relatively unreactive but can undergo radical halogenation in suitable light/heat conditions. Alkenes and alkynes have pi bonds that undergo addition; selectivity depends on the reagent, solvent and reaction conditions. Benzene typically undergoes electrophilic aromatic substitution because retaining aromatic stabilisation is energetically favourable. Do not apply an alkene's ordinary addition pattern to an aromatic ring without accounting for aromaticity."},
      {heading:"Carbonyls and carboxylic acids",body:"A carbonyl bond is polar, with electrophilic carbon and nucleophilic oxygen. Nucleophilic addition is common for aldehydes and ketones; aldehydes are often more reactive than ketones toward nucleophilic addition due to steric and electronic effects. Carboxylic acids are acidic because their conjugate bases are resonance-stabilised. Oxidation products depend on functional group and reagent strength; mild oxidation of aldehydes often yields acids, while ketones resist mild oxidation."}
    ],
    [
      {title:"Choose the more acidic compound",steps:["Identify the proton being removed in each compound.","Draw or reason about each conjugate base.","Compare resonance stabilisation, inductive effects, atom size and hybridisation as relevant.","Make sure compounds are compared under comparable solvent/conditions." ]},
      {title:"Predict a reaction product",steps:["Identify the functional group and reaction conditions.","Mark the reagent as nucleophile, electrophile, oxidant, reductant, acid or base when relevant.","Sketch the mechanism or identify the controlling intermediate.","Check atom count, charge and regio/stereochemistry required by the question."]}
    ],
    ["Memorising a product without its reagent conditions.","Calling every electron-rich species a nucleophile in every context without checking conditions.","Ignoring resonance when comparing acidity/basicity.","Treating benzene as an ordinary isolated alkene."],
    ["JEE asks stability order, acidity/basicity, mechanisms, isomerism, and named transformations. When two products are possible, show which intermediate or condition selects the major pathway."],
    ["Why are many aromatic amines less basic than comparable aliphatic amines?","What is the difference between nucleophile and base?","Why does benzene prefer substitution under common conditions."],
    ["Resonance: electron delocalisation across compatible orbitals.","Electrophile: electron-pair acceptor.","Leaving group: group that departs with an electron pair in a reaction step."]);

  const biologyCells = pack("NEET UG", "Biology", "Cell Biology, Biomolecules, Enzymes and Cell Division",
    "Connect cellular structures with function and review membranes, biomolecules, ATP production, and mitotic/meiosis events.",
    [
      "Cell membranes are selectively permeable; movement across them depends on gradients, transport proteins and energy requirements.",
      "Ribosomes translate mRNA into proteins; rough ER and Golgi help process/route many proteins; mitochondria support aerobic ATP production.",
      "Carbohydrates, lipids, proteins and nucleic acids differ in monomers, bonds, properties and biological roles.",
      "Enzymes lower activation barriers; pH, temperature, substrate concentration and inhibitors can alter activity.",
      "Mitosis preserves chromosome number; meiosis reduces it and contributes genetic variation through recombination and assortment."
    ],
    ["ATP couples energy-releasing processes to cellular work.","A nucleotide contains a sugar, phosphate and nitrogenous base.","Peptide bonds link amino acids; phosphodiester bonds link nucleotides."],
    "A diploid cell with 2n = 8 undergoes meiosis. After one DNA replication followed by two divisions, the haploid products have n = 4, assuming normal segregation.",
    [
      {heading:"Membrane structure and transport",body:"The fluid-mosaic model describes a lipid bilayer with embedded proteins and other components. Simple diffusion moves substances down a concentration gradient without direct energy input; facilitated diffusion uses membrane proteins but still moves down a gradient. Active transport moves against a gradient and requires energy directly or indirectly. Osmosis describes water movement through a selectively permeable barrier in response to water-potential differences."},
      {heading:"Organelles and energy",body:"Mitochondria host the citric acid cycle and oxidative phosphorylation in eukaryotic cells, while chloroplasts perform oxygenic photosynthesis in plants and algae. Ribosomes build polypeptides by translating mRNA. Lysosomes contain hydrolytic enzymes for digestion and recycling; the Golgi apparatus modifies and packages many cellular products. Cells differ, so avoid assuming every organelle is present in every cell type."},
      {heading:"Biomolecules and enzymes",body:"Protein function depends on amino-acid sequence and folded structure. Temperature or pH extremes may disrupt interactions needed for folding, reducing enzyme activity. Enzymes are catalysts and are not consumed in the overall reaction, though their state can change during the catalytic cycle. DNA and RNA both use nucleotide chains but differ in typical sugar/base composition and biological role."},
      {heading:"Mitosis versus meiosis",body:"Mitosis produces two daughter cells with chromosome number generally maintained; it supports growth and tissue repair. Meiosis includes a reduction division and a second division; homologous chromosomes pair and can exchange segments in prophase I. Independent assortment and crossing over create variation. In meiosis I homologous chromosomes separate; in meiosis II sister chromatids separate."}
    ],
    [
      {title:"Identify transport process",steps:["Ask whether movement is down or against the relevant gradient.","Check whether a membrane protein is required.","Check whether energy is directly or indirectly used.","Use the wording carefully: facilitated diffusion is protein-mediated but passive."]},
      {title:"Mitosis and meiosis chromosome count",steps:["Record the starting ploidy and chromosome count.","Remember DNA content doubles during S phase without doubling chromosome number by the usual centromere count.","Track chromosome separation in each division.","Check final ploidy and number of products."]}
    ],
    ["Calling facilitated diffusion active transport.","Saying an enzyme changes reaction equilibrium rather than rate.","Confusing chromosome number with DNA amount.","Saying crossing over normally occurs in mitosis rather than meiotic prophase I."],
    ["NEET expects precise NCERT terminology, organelle-function matching, chromosome counts, enzyme effects and comparisons of cell division."],
    ["Which division separates homologous chromosomes?","What is the role of a ribosome?","Why does extreme pH affect many enzymes."],
    ["Selective permeability: membrane property that allows some substances to cross more readily than others.","Ploidy: number of chromosome sets in a cell.","Activation energy: energy barrier associated with a reaction pathway."]);

  const biologyGenetics = pack("NEET UG", "Biology", "Inheritance, Molecular Genetics and Biotechnology",
    "Study Mendelian segregation, gene expression, DNA replication, transcription, translation, mutation and recombinant DNA tools.",
    [
      "Alleles are alternative versions of a gene; segregation separates allele copies into gametes under the Mendelian model.",
      "For Aa x Aa, genotype probabilities are 1/4 AA, 1/2 Aa and 1/4 aa under standard assumptions.",
      "DNA stores sequence information; replication copies it, transcription produces RNA, and translation uses mRNA codons to build a polypeptide.",
      "Mutations can be neutral, harmful or beneficial depending on their effects and environment; not all mutations alter protein sequence.",
      "Biotechnology uses tools such as restriction enzymes, ligase, vectors, polymerase chain reaction and gel electrophoresis."
    ],
    ["For a monohybrid heterozygote cross: 1:2:1 genotype ratio; under complete dominance the phenotype ratio is commonly 3:1.","Codon: three-nucleotide mRNA unit specifying an amino acid or stop.","PCR amplifies a chosen DNA segment through repeated cycles."],
    "For a heterozygous Aa x Aa cross, probability of aa = 1/2 x 1/2 = 1/4 if each parent transmits a with probability 1/2 and gamete union is independent.",
    [
      {heading:"Mendelian patterns and extensions",body:"A Punnett square lists possible gamete combinations and their probabilities; it predicts frequencies over many offspring, not a guaranteed ratio in a small family. Incomplete dominance and codominance alter phenotype patterns, while linkage and recombination complicate independent assortment. Pedigree questions should be solved by establishing possible genotypes and excluding combinations that conflict with observed family patterns."},
      {heading:"DNA replication and gene expression",body:"Semi-conservative replication produces daughter DNA molecules with one parental and one newly synthesised strand. DNA polymerases extend a new strand in the 5-prime to 3-prime direction, producing continuous leading-strand synthesis and discontinuous Okazaki fragments on the lagging strand. Transcription uses one DNA strand as template; translation reads mRNA codons at ribosomes and uses tRNA to deliver amino acids."},
      {heading:"Mutations and regulation",body:"A substitution may be silent, missense or nonsense depending on the resulting codon; insertions/deletions not in multiples of three can cause a frameshift. Whether a mutation matters depends on gene, location, expression, genetic background and environment. Gene regulation allows cell types with similar genomes to produce different RNA/protein profiles; gene expression is not simply 'all genes on all the time'."},
      {heading:"Recombinant DNA methods",body:"Restriction enzymes recognise specific DNA sequences and cut DNA; ligase joins compatible ends; a vector helps carry DNA into a host. PCR uses primers flanking the region of interest and repeated temperature cycles to amplify it. Gel electrophoresis separates nucleic acid fragments through a matrix; smaller fragments often migrate farther under comparable conditions. Controls and verification steps are needed to distinguish a real product from contamination or nonspecific amplification."}
    ],
    [
      {title:"Genetics probability",steps:["Write parental genotypes explicitly.","List each parent’s possible gametes and probabilities.","Combine gametes or use a probability tree.","Check whether the question asks genotype, phenotype, conditional probability or a specific offspring class."]},
      {title:"DNA technology question",steps:["Identify the task: cut DNA, join DNA, carry DNA, amplify DNA or separate fragments.","Match the enzyme/tool to that task.","Track which molecule is template and which is product.","Use controls and sequence/gel evidence when interpreting results."]}
    ],
    ["Treating offspring ratios as guarantees rather than probabilities.","Confusing transcription with translation.","Assuming every mutation is harmful.","Using ligase to cut DNA or restriction enzymes to join DNA."],
    ["NEET frequently tests classic ratios, chromosome events, codon logic, enzymes in biotechnology and the role of vectors. Careful terminology often determines the mark."],
    ["What enzyme seals DNA nicks?","How does a frameshift differ from a base substitution?","What is the role of a primer in PCR."],
    ["Allele: alternative form of a gene.","Codon: three-nucleotide unit on mRNA.","Vector: vehicle used to deliver genetic material into a host cell."]);

  const biologyPhysiology = pack("NEET UG", "Biology", "Human Physiology: Respiration, Circulation, Excretion and Regulation",
    "Connect organ structure to gas exchange, blood transport, kidney filtration, neural signalling and hormones.",
    [
      "Alveoli provide a large, thin, moist surface with dense capillary supply for diffusion of oxygen and carbon dioxide.",
      "The heart maintains pulmonary and systemic circulation; valves reduce backflow and electrical conduction coordinates contraction.",
      "Nephrons filter blood and modify filtrate through selective reabsorption and secretion; the collecting duct's water permeability is regulated in part by ADH.",
      "Nervous signalling uses electrical impulses and synapses; endocrine signalling uses hormones carried to target tissues.",
      "Homeostasis is dynamic regulation of internal variables, not an unchanging fixed value."
    ],
    ["Gas exchange follows partial-pressure gradients.","ADH tends to increase water reabsorption by increasing collecting-duct water permeability.","Negative feedback reduces a deviation from a regulated set range."],
    "A rise in blood glucose stimulates insulin release from pancreatic beta cells; uptake/storage processes help reduce glucose toward the regulated range.",
    [
      {heading:"Respiratory gas exchange",body:"Ventilation moves air; external respiration exchanges gases between alveoli and pulmonary blood; internal respiration exchanges gases between systemic blood and tissues. Diffusion follows partial-pressure differences, and a thin barrier plus large surface area supports rapid transfer. Haemoglobin binds oxygen reversibly, and CO2 travels in multiple forms, with bicarbonate carrying a large fraction in blood."},
      {heading:"Circulation",body:"The right side of the heart sends blood to lungs and the left side sends oxygenated blood to the body. Valves prevent backflow and the conduction system sequences atrial then ventricular contraction. Blood pressure, resistance, vessel radius and cardiac output interact; do not treat one factor as independent in every scenario."},
      {heading:"Kidney function",body:"Filtration occurs at the glomerulus under pressure; selective reabsorption returns useful solutes and water to blood; secretion moves selected substances into the tubule. The loop of Henle and collecting duct contribute to concentrating urine under hormonal and osmotic control. ADH increases water permeability in collecting ducts, which helps conserve water when body fluids are concentrated."},
      {heading:"Nervous and endocrine control",body:"Neurons transmit signals via membrane-potential changes and synaptic communication. Hormones act when they bind appropriate receptors, so a hormone affects target tissues rather than every cell equally. Negative feedback counteracts deviations; positive feedback amplifies a process in specific contexts. The response time and duration differ between neural and endocrine pathways."}
    ],
    [
      {title:"Nephron function sequence",steps:["Follow filtrate from Bowman's capsule to the proximal tubule, loop, distal tubule and collecting duct.","Identify where filtration, major reabsorption and fine regulation occur.","Use hormone facts only for the segment/process they influence.","Distinguish filtrate composition from final urine composition."]},
      {title:"Homeostatic loop",steps:["Identify the variable that changes.","Identify detector/control centre and effector when relevant.","Explain how the response changes the original deviation.","Check whether the loop is negative feedback or a specialised positive-feedback process."]}
    ],
    ["Confusing pulmonary and systemic circuits.","Claiming every substance filtered at the glomerulus ends up in urine.","Saying ADH increases urine volume rather than promoting water conservation.","Assuming a hormone affects only its release organ."],
    ["NEET often tests NCERT organ diagrams, nephron segment roles, cardiac sequence, hormone sources and negative-feedback relationships."],
    ["Where does oxygen enter blood in the lungs?","What does ADH do to collecting-duct permeability?","Why is a valve important in circulation."],
    ["Partial pressure: contribution of one gas to total gas pressure.","Filtration: movement of water and small solutes from blood into renal filtrate.","Homeostasis: regulated stability of internal conditions."]);

  const biologyPlant = pack("NEET UG", "Biology", "Plant Physiology: Photosynthesis, Respiration, Transport and Growth",
    "Review photosynthetic energy conversion, vascular transport, stomatal regulation, respiration and plant growth regulators.",
    [
      "Chlorophyll absorbs light; photosynthetic electron transfer converts light energy into chemical energy and generates ATP/NADPH for carbon fixation.",
      "The Calvin cycle uses ATP and NADPH to incorporate CO2 into organic molecules; oxygen released during oxygenic photosynthesis comes from water splitting.",
      "Xylem transports water/mineral ions and phloem distributes sugars and other solutes from sources to sinks.",
      "Stomata balance CO2 entry and water loss; guard-cell turgor controls aperture.",
      "Plant hormones regulate growth, dormancy, fruit ripening, stress responses and developmental transitions."
    ],
    ["Photosynthesis overall (simplified): 6CO2 + 6H2O -> C6H12O6 + 6O2 in light.","Transpiration and water potential contribute to water movement through the plant.","Cellular respiration supplies ATP in plant cells as well as animal cells."],
    "If stomata close during severe water stress, transpiration decreases but CO2 entry can also fall, potentially limiting carbon fixation.",
    [
      {heading:"Light reactions and carbon fixation",body:"Photosystems harvest light energy and transfer electrons. Water oxidation replenishes electrons and releases oxygen; electron transport helps establish a proton gradient used to synthesise ATP. NADPH provides reducing power for carbon fixation. The Calvin cycle's fixation, reduction and regeneration stages rely on ATP/NADPH. The simplified overall equation is a summary, not a complete mechanistic description."},
      {heading:"Water movement and transpiration",body:"Water moves along water-potential gradients. Transpiration from leaves can create tension that helps pull water up the xylem column; cohesion among water molecules and adhesion to xylem walls support the column. Stomata regulate water loss and gas exchange, so closure is a trade-off: it conserves water but restricts CO2 entry and can reduce photosynthesis."},
      {heading:"Phloem source-sink transport",body:"Mature leaves are often sources because they export sugars; developing fruits, roots, storage organs and growing shoots can be sinks. Phloem transport involves loading/unloading and pressure-driven bulk flow models. Avoid the oversimplification that phloem only moves downward: movement direction depends on source-sink relationships in the plant."},
      {heading:"Plant growth and hormones",body:"Auxin is associated with cell elongation and tropic responses; gibberellins can promote stem elongation and seed germination; cytokinins promote cell division; abscisic acid participates in stress responses and stomatal closure; ethylene is important in fruit ripening and some senescence responses. Hormone effects depend on tissue, concentration and interactions, so memorise common roles while noting context."}
    ],
    [
      {title:"Compare xylem and phloem",steps:["Identify what is transported.","Identify the tissue and its conducting elements.","Describe the driving process at the level required by the syllabus.","State why transport direction can differ with source and sink."]},
      {title:"Photosynthesis experiment reasoning",steps:["State the factor being tested (light, CO2, chlorophyll, etc.).","Identify the control condition and the variable changed.","Describe the predicted result if photosynthesis occurs.","Explain the result with a mechanism and control for confounding factors."]}
    ],
    ["Claiming the oxygen liberated comes from CO2 rather than water.","Saying phloem always transports downward.","Ignoring that stomatal closure affects both water loss and CO2 availability.","Treating the simplified photosynthesis equation as the full mechanism."],
    ["NEET emphasises NCERT terms, photosystems, C3/C4 comparisons in scope, vascular-tissue roles, hormones and experimental conditions."],
    ["Where does released oxygen originate in oxygenic photosynthesis?","How can a leaf be both a source and a sink at different times?","What is one trade-off of stomatal closure."],
    ["Source: plant organ/tissue exporting assimilates.","Sink: organ/tissue importing or storing/using assimilates.","Transpiration: loss of water vapour from aerial plant parts, chiefly via stomata."]);

  const biologyEcology = pack("NEET UG", "Biology", "Ecology, Ecosystem Energy, Population and Biodiversity",
    "Connect population dynamics, interactions, trophic transfer, nutrient cycles, conservation and biodiversity threats.",
    [
      "Population size changes through births, deaths, immigration and emigration; age structure and carrying capacity affect growth.",
      "Mutualism, competition, predation, parasitism and commensalism represent different outcomes of species interactions.",
      "Energy flows through trophic levels and is lost as metabolic heat; nutrients cycle through organisms and the physical environment.",
      "Biodiversity includes genetic, species and ecosystem diversity and contributes to ecological function and resilience.",
      "Habitat loss, invasive species, overexploitation, pollution and climate change are major drivers of biodiversity decline."
    ],
    ["Population change = births + immigration - deaths - emigration over an interval.","Energy pyramids are upright in the conventional ecosystem representation because available energy declines upward.","Nutrient cycles recycle matter while energy flows."],
    "In a simplified 10% transfer illustration, 10,000 energy units at the producer level might support about 1,000 units in primary consumers and 100 units in secondary consumers; this is a rule-of-thumb, not a universal constant.",
    [
      {heading:"Population growth",body:"Exponential growth can occur under abundant resources and is represented by rapid growth over time. Logistic growth includes resource limitation and approaches a carrying capacity K. Real populations are influenced by age structure, environmental fluctuations, disease, competition and migration; carrying capacity can change as conditions change. Density-dependent factors often become stronger as population density rises."},
      {heading:"Interactions and food webs",body:"Competition occurs when organisms use a limited shared resource; predation benefits predator and harms prey; parasitism benefits the parasite at host cost; mutualism benefits both partners; commensalism benefits one with little measurable effect on the other. A food web combines multiple feeding links and often gives more realistic stability pathways than one linear chain."},
      {heading:"Energy transfer and cycles",body:"Producers convert external energy into chemical energy; consumers and decomposers use organic matter. Energy is lost through respiration, movement and heat at each transfer, so less remains for higher trophic levels. Matter such as carbon and nitrogen can be recycled through biological and geochemical processes. Do not say that energy cycles like nutrients."},
      {heading:"Biodiversity and conservation",body:"Genetic diversity supports population adaptability, species diversity affects interactions and ecosystem diversity reflects different habitats/processes. Conservation may be in situ (protecting species in natural ecosystems) or ex situ (such as seed banks, zoos and botanical collections). Effective conservation addresses drivers of decline and local social context rather than focusing only on species counts."}
    ],
    [
      {title:"Population change",steps:["List births and immigration as additions.","List deaths and emigration as removals.","Compute net change over the stated interval.","If rates are given per individual, apply them to the relevant population and time unit."]},
      {title:"Food-web reasoning",steps:["Identify producer, primary consumer and higher trophic roles.","Trace the direction of energy transfer from food to consumer.","Separate energy transfer from matter cycling.","Use the exact organism-to-organism links shown in the question's web."]}
    ],
    ["Assuming every trophic transfer is exactly 10 percent.","Saying energy is recycled in the same way as carbon or nitrogen.","Confusing in situ with ex situ conservation.","Treating a carrying capacity as fixed under all environmental changes."],
    ["NEET often tests interaction terms, trophic-level energy, succession/ecosystem processes, conservation approaches and population curve interpretation."],
    ["Why is the energy pyramid upright?","How does logistic growth differ from exponential growth?","Distinguish in-situ and ex-situ conservation."],
    ["Carrying capacity: population size supported under specified environmental conditions.","Trophic level: feeding position in a food chain/web.","In situ conservation: protection within natural habitat."]);

  const biologyReproduction = pack("NEET UG", "Biology", "Human Reproduction, Reproductive Health and Development",
    "Trace gamete formation, reproductive endocrine cycles, fertilisation, implantation, pregnancy and reproductive-health principles.",
    [
      "Meiosis forms haploid gametes; fertilisation fuses gametes and restores diploidy.",
      "Spermatogenesis and oogenesis differ in timing, sequence and the number of functional gametes typically formed.",
      "Hormones coordinate gonadal function, ovulation, pregnancy and lactation through regulated feedback.",
      "Development includes fertilisation, cleavage, blastocyst formation, implantation and subsequent embryonic development.",
      "Reproductive health includes evidence-based contraception, STI prevention, informed consent and access to qualified care."
    ],
    ["Haploid sperm + haploid ovum -> diploid zygote.","Contraceptive methods differ in mechanism and protection; not all prevent STI transmission."],
    "A diploid zygote results from fusion of two haploid gametes; meiosis beforehand prevents chromosome number from doubling in every generation.",
    [
      {heading:"Gamete formation",body:"Spermatogenesis occurs in seminiferous tubules and produces sperm through mitotic, meiotic and differentiation stages. Oogenesis begins before birth in humans and includes meiotic arrests; typically one functional ovum is produced from a primary oocyte, with polar bodies. Both processes reduce chromosome number through meiosis but differ in timing and cytoplasmic allocation."},
      {heading:"Cycle and hormones",body:"The hypothalamic-pituitary-gonadal axis coordinates reproductive function. FSH and LH support follicular development, ovulation and corpus-luteum function in the standard cycle description. Ovarian hormones change the uterine lining; hormone levels and feedback change across phases. Describe sequence and relationships rather than memorising isolated hormone names."},
      {heading:"Fertilisation and development",body:"Fertilisation commonly occurs in the oviduct. The zygote undergoes cleavage divisions, forming a blastocyst that implants in the uterine lining. Placental tissues support exchange between maternal and fetal circulations without normally mixing the two blood supplies directly. Developmental terminology should be tied to the timing and structure requested in the question."},
      {heading:"Reproductive health",body:"Contraceptive methods include barrier, hormonal, intrauterine and permanent approaches. Effectiveness depends on method and correct/consistent use; condoms also reduce STI transmission risk while many other methods do not. Reproductive-health questions should be answered medically and respectfully, separating prevention, diagnosis and treatment, and recognising that individual medical advice belongs with qualified clinicians."}
    ],
    [
      {title:"Sequence a reproductive event",steps:["Identify the requested stage or hormone.","Place it in the correct organ and time sequence.","Connect the event to the hormone or structural change responsible.","Check whether the prompt asks for gamete formation, fertilisation or implantation; these are distinct events."]},
      {title:"Compare contraception options",steps:["Classify the method by mechanism.","State the main intended effect.","State relevant limitations and whether it protects against STIs.","Use current health guidance rather than overclaiming perfect effectiveness."]}
    ],
    ["Confusing ovulation, fertilisation and implantation.","Assuming all contraceptive methods prevent STIs.","Claiming gametes are diploid.","Describing reproductive hormones without connecting them to the organs/events."],
    ["NEET often tests events in order, hormone source/effect, site of fertilisation, reproductive-health methods and structure-function facts."],
    ["Where does fertilisation usually occur in humans?","Why are gametes haploid?","Which common contraceptive method also reduces STI risk."],
    ["Gamete: haploid reproductive cell.","Implantation: attachment/embedding of the early embryo into the uterine lining.","Contraception: methods used to reduce likelihood of pregnancy."]);

  const biologyEvolution = pack("NEET UG", "Biology", "Evolution, Natural Selection and Population Genetics",
    "Understand evidence for evolution, variation sources, selection, drift, gene flow and the Hardy-Weinberg model.",
    [
      "Evolution is change in heritable population characteristics or allele frequencies across generations, not a deliberate change by an individual.",
      "Mutation and recombination create variation; gene flow, genetic drift and natural selection can change allele frequencies.",
      "Natural selection acts through differential reproductive success among heritable variants in an environment.",
      "Fossils, comparative anatomy, molecular similarities and observed change contribute different kinds of evidence.",
      "Hardy-Weinberg equilibrium is a baseline model that assumes no evolutionary forces and random mating under its standard conditions."
    ],
    ["For two alleles: p + q = 1; genotype proportions at equilibrium: p^2 + 2pq + q^2 = 1.","Selection changes allele frequencies when heritable variants differ in reproductive success."],
    "If q = 0.2 in a two-allele Hardy-Weinberg model, p = 0.8 and the expected heterozygote frequency is 2pq = 2(0.8)(0.2) = 0.32.",
    [
      {heading:"Sources of variation",body:"Mutation introduces new alleles. Meiosis recombines existing alleles through crossing over and independent assortment; random fertilisation combines gametes in new ways. Gene flow moves alleles among populations. Genetic drift changes frequencies through random sampling and is especially influential in small populations."},
      {heading:"Natural selection and adaptation",body:"Selection occurs when heritable traits differ in survival or reproduction in a specific environment. Fitness is relative reproductive success, not physical strength or moral value. Adaptations are population-level outcomes across generations. A trait can be advantageous in one environment and neutral or harmful in another."},
      {heading:"Evidence and speciation",body:"Fossils provide time-ordered evidence of organisms; homologous structures point to shared ancestry, while analogous structures can arise through similar selective pressures. Molecular sequence comparisons offer a distinct evidence stream. Speciation often involves reduced gene flow and reproductive isolation; mechanisms and timelines vary among organisms."},
      {heading:"Hardy-Weinberg calculation",body:"The simplest two-allele model assumes a large population, random mating, no mutation, no migration and no selection. Then p+q=1 and p²+2pq+q²=1. These equations are a comparison baseline, not a claim that real populations always satisfy the assumptions. Read whether a question gives allele frequency or recessive phenotype frequency before taking square roots."}
    ],
    [
      {title:"Hardy-Weinberg problem",steps:["Identify whether the given value is p, q, p² or q².","Use p+q=1 to get the second allele frequency.","Calculate genotype frequencies p², 2pq and q².","State assumptions and check the frequencies sum to one."]},
      {title:"Explain a selection example",steps:["Identify heritable variation in the population.","State the environmental condition affecting reproductive success.","Explain differential survival/reproduction.","Conclude how trait or allele frequency can change over generations."]}
    ],
    ["Saying an individual evolves genetically because it needs to.","Confusing allele frequency with recessive phenotype frequency.","Using p² for heterozygotes instead of 2pq.","Assuming selection always increases population size."],
    ["NEET tests terms and model calculations. Establish whether data represent allele, genotype or phenotype frequency before using p and q."],
    ["What is genetic drift?","List two assumptions of Hardy-Weinberg equilibrium.","Why is fitness relative to an environment."],
    ["Gene flow: movement of alleles among populations.","Genetic drift: random allele-frequency change due to sampling.","Homologous structures: structures with a shared evolutionary origin."]);

  const biologyHealth = pack("NEET UG", "Biology", "Human Health, Immunity, Disease and Vaccination",
    "Compare innate/adaptive immunity, antibodies, immune memory, pathogens, disease transmission and prevention.",
    [
      "Innate immunity uses barriers, cells and responses that act broadly; adaptive immunity recognises specific antigens and can form memory.",
      "B cells can differentiate into antibody-secreting plasma cells; T cells contribute cell-mediated immune responses.",
      "Vaccination exposes the immune system to an antigen or antigen-encoding instruction in a controlled way to build protection without the usual disease process.",
      "Infection prevention includes sanitation, vaccination, safer behaviour, vector control and appropriate testing/treatment.",
      "Antibiotics treat susceptible bacterial infections; they do not treat viral infection directly."
    ],
    ["Antibodies are immunoglobulins that bind specific antigens.","Immune memory can accelerate a response after a later exposure.","Antimicrobial choice depends on pathogen and susceptibility."],
    "A vaccine primes adaptive immunity and can generate memory B/T cells; after later exposure, memory responses can be faster and stronger, though protection varies by vaccine and pathogen.",
    [
      {heading:"Innate and adaptive responses",body:"Physical and chemical barriers are part of innate defence, together with inflammatory responses and phagocytic cells. Adaptive immunity involves antigen-specific B and T lymphocytes. Antibodies bind particular antigen features; T cells can help coordinate responses or kill infected cells depending on subtype. Immune memory means later responses can be faster, but it does not guarantee absolute prevention of infection."},
      {heading:"Vaccination",body:"Vaccines train adaptive immunity through a controlled antigen exposure or antigen-encoding system. Depending on the vaccine, the response can include antibodies, memory B cells and T-cell responses. Effectiveness depends on the vaccine, dose schedule, host factors and pathogen variation. In exam explanations, distinguish individual protection from population-level reduction in transmission."},
      {heading:"Infection and prevention",body:"Pathogens include viruses, bacteria, fungi, protozoa and helminths; transmission pathways differ. Prevention should target the relevant pathway, such as sanitation, vector control, barrier protection, clean water or isolation where indicated. Antibiotics act against bacteria through specific mechanisms and can fail due to resistance; unnecessary use selects for resistant populations."},
      {heading:"Use information responsibly",body:"Medical topics in the learning app are for education. Real symptoms, diagnosis, vaccination schedules and treatment decisions require current local public-health guidance and qualified clinicians. Avoid assuming that a single symptom identifies a disease or that immunity is all-or-none."}
    ],
    [
      {title:"Classify an immune response",steps:["Determine whether the question concerns broad innate defence or antigen-specific adaptive response.","Identify the responsible cell or molecule.","State the action, then the resulting protection or effect.","Separate antibody-mediated and cell-mediated mechanisms where relevant."]},
      {title:"Explain vaccination",steps:["Describe the controlled antigen exposure or instruction.","Connect it to activation of adaptive immunity.","Mention memory-cell formation where appropriate.","Explain why later response can be faster without guaranteeing absolute protection."]}
    ],
    ["Saying antibiotics treat viral infections directly.","Treating all immune responses as antibody-only.","Assuming a vaccine always prevents every infection.","Confusing a pathogen with the disease name."],
    ["NEET commonly tests immunity classes, antibody functions, vaccines, pathogens, transmission and antibiotic resistance."],
    ["What is immune memory?","What is one difference between innate and adaptive immunity?","Why can antibiotic overuse select for resistance."],
    ["Antigen: feature recognised by the immune system.","Antibody: antigen-binding immunoglobulin protein.","Phagocyte: cell that engulfs and processes particles or microbes."]);

  const mathematicsCalculus = pack("JEE Main", "Mathematics", "Limits, Continuity, Differentiation and Applications",
    "Use limits and derivative rules to analyse behaviour, calculate rates, and solve monotonicity and optimisation questions.",
    [
      "A limit describes function behaviour near a point, which need not equal the function's value at that point.",
      "Continuity at x=a requires the limit to exist and equal f(a); differentiability implies continuity but not conversely.",
      "Product, quotient and chain rules transform derivatives of complex expressions into smaller pieces.",
      "The sign of the first derivative indicates increase/decrease intervals; stationary points are candidates, not automatic extrema.",
      "Optimisation requires a defined feasible domain, an objective function and checking critical points and boundaries."
    ],
    ["f'(a)=lim(h->0)[f(a+h)-f(a)]/h","(uv)'=u'v+uv'; chain rule: (f(g(x)))'=f'(g(x))g'(x)","For differentiable f, f'>0 on an interval implies increasing there; f'<0 implies decreasing."],
    "For f(x)=x^2-4x on the real line, f'=2x-4=0 at x=2; f''=2>0 confirms a local and global minimum f(2)=-4.",
    [
      {heading:"Evaluate limits strategically",body:"Try direct substitution first. If it yields 0/0, factor, rationalise, use identities or standard limits while preserving domain restrictions. A limit may exist even when the function is undefined at the point; it may also fail when one-sided limits disagree or oscillation/unbounded behaviour prevents a finite limit."},
      {heading:"Continuity and differentiability",body:"For a piecewise function, check the left-hand limit, right-hand limit and actual function value at each boundary. Differentiability adds the requirement that left and right derivatives agree. Corners, cusps, vertical tangents and jump discontinuities are common reasons differentiability fails. A graph sketch can help anticipate where derivative tests need extra care."},
      {heading:"Derivative rules",body:"The chain rule is the most common missed step when one function sits inside another. Identify the outer function, differentiate it, then multiply by the derivative of the inner function. For implicit functions, differentiate both sides with respect to x and remember that d(y)/dx is not zero in general. Logarithmic differentiation can simplify products and powers when the function is positive or the domain is otherwise handled carefully."},
      {heading:"Monotonicity and optimisation",body:"Solve f'(x)=0 and find where f' is undefined within the domain, then build a sign chart. A stationary point can be a maximum, minimum or neither. For constrained word problems, express the objective in one variable and include physical or geometric constraints. Check boundary values when the domain is closed; a local extremum need not be the absolute extremum."}
    ],
    [
      {title:"First-principles derivative",steps:["Write [f(x+h)-f(x)]/h.","Simplify algebraically before taking h to zero.","Evaluate the limit if it exists.","Check the final expression against the known derivative rule when available."]},
      {title:"Optimisation workflow",steps:["Define the variable and feasible domain.","Express the objective in one variable using constraints.","Find interior critical points.","Compare values at critical points and permitted boundaries."]}
    ],
    ["Confusing f(a) with lim x->a f(x).","Forgetting the inner derivative in the chain rule.","Assuming every stationary point is an extremum.","Ignoring endpoints and domain restrictions in optimisation."],
    ["JEE combines derivative rules, piecewise continuity, tangent/normal, monotonicity and maxima/minima. Show the domain and a sign chart for reasoning marks."],
    ["Does differentiability imply continuity?","What must be compared for continuity at a piecewise boundary?","Why do endpoints matter in absolute optimisation."],
    ["Stationary point: point where derivative is zero.","Monotonicity: interval behaviour of increasing or decreasing function.","Feasible domain: allowed input set under problem constraints."]);

  const mathematicsIntegrals = pack("JEE Main", "Mathematics", "Integration, Definite Integrals and Differential Equations",
    "Treat integration as inverse differentiation and accumulation, with substitution, parts, area and separable differential equations.",
    [
      "Indefinite integration gives a family of antiderivatives and requires a constant of integration.",
      "Substitution reverses the chain rule; integration by parts reverses the product rule.",
      "A definite integral is signed accumulation; geometry may require splitting intervals where curves cross.",
      "Area between curves is upper function minus lower function over intervals with consistent ordering.",
      "Differential equations describe unknown functions through their derivatives; initial conditions can select a particular solution."
    ],
    ["Integral x^n dx = x^(n+1)/(n+1)+C for n != -1","Integration by parts: integral u dv = uv - integral v du","Area = integral_a^b (upper - lower) dx when upper/lower ordering is fixed"],
    "To integrate 2x cos(x^2) dx, set u=x^2, du=2x dx; the integral becomes integral cos(u) du = sin(x^2)+C.",
    [
      {heading:"Recognise the method",body:"Look for an inner function paired with its derivative to use substitution. Use integration by parts for products where differentiating one factor simplifies it, such as polynomial times exponential/logarithmic/trigonometric terms. Partial fractions handle rational functions after polynomial division and factorisation when appropriate. A method should simplify the integral; mechanically applying one rule can make a problem harder."},
      {heading:"Definite integral properties",body:"The integral from a to b changes sign when limits are swapped and adds across adjacent intervals. Symmetry can simplify integrals over [-a,a], but only after checking whether the integrand is even or odd. If a geometric region changes which curve is upper, split the interval at intersections rather than using a single expression with the wrong sign."},
      {heading:"Area and accumulation",body:"A definite integral measures signed area under a curve: parts below the x-axis contribute negatively. Geometric area is non-negative and may require absolute values or interval splitting. For two curves, solve their intersections, decide the upper curve on each subinterval, then integrate top minus bottom. Sketches prevent common sign mistakes."},
      {heading:"Differential equations",body:"For a separable equation dy/dx=g(x)h(y), move y-dependence to one side and x-dependence to the other, integrate and apply initial conditions. Division by h(y) can discard constant solutions where h(y)=0, so check separately. The order is the highest derivative present after simplification; initial conditions determine constants when the problem is well-posed."}
    ],
    [
      {title:"Substitution",steps:["Identify an inner function u=g(x).","Check whether g'(x) dx appears as a factor, possibly up to a constant.","Replace the variable and integrate in u.","Substitute back and differentiate to verify."]},
      {title:"Area between curves",steps:["Solve for the intersection points.","Determine which function lies above on each interval.","Integrate upper minus lower.","Split where the ordering changes and state units for geometric area."]}
    ],
    ["Forgetting +C in an indefinite integral.","Using a definite integral's signed value as geometric area when the curve crosses the axis.","Dividing by a function in a differential equation and losing constant solutions.","Choosing u and dv in integration by parts without simplifying the remaining integral."],
    ["JEE uses substitution, parts, definite-integral symmetry, areas between curves and separable differential equations. Verify antiderivatives by differentiation."],
    ["Why is +C needed?","When should an area integral be split?","Why must a constant solution be checked after division."],
    ["Antiderivative: function whose derivative is the integrand.","Signed area: integral value where below-axis regions count negative.","Order of a differential equation: highest derivative order present."]);

  const mathematicsMatrices = pack("JEE Main", "Mathematics", "Matrices, Determinants and Linear Systems",
    "Calculate with matrix dimensions, determinants, invertibility, elementary operations and linear-system consistency.",
    [
      "Matrix addition requires equal dimensions; multiplication AB requires the number of columns of A to match rows of B.",
      "Matrix multiplication is generally not commutative; order affects both entries and whether a product is defined.",
      "For a square matrix, nonzero determinant is equivalent to invertibility.",
      "A determinant zero means rows/columns are linearly dependent and the matrix is singular.",
      "Linear systems can be solved by elimination, inverse method or Cramer's rule when its determinant condition is satisfied."
    ],
    ["det([[a,b],[c,d]]) = ad - bc","A inverse = adj(A)/det(A), if det(A) != 0","For compatible matrices, (AB)ij = sum over k of Aik Bkj"],
    "For A=[[2,1],[5,3]], det(A)=2(3)-1(5)=1, so A is invertible and A^-1 = [[3,-1],[-5,2]].",
    [
      {heading:"Dimensions and multiplication",body:"Always write matrix dimensions beside the matrix. If A is m x n and B is n x p, then AB is m x p. The entry in row i and column j is a dot product of row i of A with column j of B. In general AB differs from BA, and one product may be defined while the other is not."},
      {heading:"Determinant properties",body:"Interchanging two rows changes the sign of determinant; multiplying a row by a factor scales determinant by that factor; adding a multiple of one row to another leaves it unchanged. A repeated/proportional row makes the determinant zero. Triangular matrices have determinant equal to the product of diagonal entries."},
      {heading:"Inverse and systems",body:"A square matrix has an inverse only when its determinant is nonzero. The inverse method expresses X=A^-1B for AX=B, but is invalid when A is singular. Cramer's rule also requires a nonzero determinant of the coefficient matrix. A zero determinant alone does not tell whether a linear system is inconsistent or has infinitely many solutions; inspect augmented rank or the equations."},
      {heading:"Check solutions",body:"Substitute a solved vector back into the original equations or multiply A by the proposed inverse to check it returns the identity. In determinant calculations, preserve the operation's effect on the determinant. Common mistakes arise from using a row operation without tracking its scale factor."}
    ],
    [
      {title:"Inverse of a 2x2 matrix",steps:["Calculate det(A)=ad-bc.","Confirm determinant is nonzero.","Form adj(A) by swapping diagonal entries and changing signs of off-diagonal entries.","Divide adj(A) by det(A)."]},
      {title:"Classify a linear system",steps:["Write coefficient and augmented matrices.","Check determinant if the coefficient matrix is square.","If determinant is nonzero, the unique solution exists.","If singular, compare ranks or inspect consistency; do not conclude automatically that there is no solution."]}
    ],
    ["Multiplying in the wrong order.","Thinking det(A)=0 always means no solutions.","Forgetting a row-swap sign change.","Applying the inverse formula to a non-square matrix."],
    ["JEE asks determinant properties, inverse, matrix equations and consistency. Dimension checks often rule out wrong operations immediately."],
    ["When is a 2x2 matrix invertible?","What is the result dimension of a 3x2 times 2x4 product?","Why does det zero not decide consistency alone."],
    ["Singular matrix: square matrix with determinant zero.","Adjugate: transpose of the cofactor matrix.","Rank: dimension of the row/column space."]);

  const mathematicsVectors = pack("JEE Main", "Mathematics", "Vectors and Three-Dimensional Geometry",
    "Use vector components, dot/cross products, direction ratios and line equations to solve spatial geometry.",
    [
      "Vector magnitude is the square root of the sum of squared components; a unit vector has magnitude one.",
      "The dot product is scalar and relates to projection and the cosine of the angle between vectors.",
      "The cross product is perpendicular to both vectors; its magnitude represents the area of a parallelogram.",
      "Direction ratios describe line orientation; direction cosines are cosines of angles with coordinate axes.",
      "A line in 3D needs a point and a direction vector; two lines may intersect, be parallel or be skew."
    ],
    ["a·b = |a||b| cos(theta)","|a x b| = |a||b| sin(theta)","Direction cosines l^2+m^2+n^2=1"],
    "For a=(1,2,2), |a|=sqrt(1+4+4)=3 and its unit vector is (1/3,2/3,2/3).",
    [
      {heading:"Vector operations",body:"Represent a vector by components and preserve direction signs. Addition is componentwise; scalar multiplication changes magnitude and may reverse direction for a negative scalar. The dot product is zero for perpendicular nonzero vectors; the cross product is zero for parallel or antiparallel vectors. These tests are useful before performing longer calculations."},
      {heading:"Projection and area",body:"The scalar projection of a on b is a·b/|b| when b is nonzero. The vector projection includes the direction of b. Cross-product magnitude equals parallelogram area and half of it equals triangle area. Order matters: a x b = -(b x a)."},
      {heading:"Lines in three dimensions",body:"A line through point (x1,y1,z1) with direction ratios (a,b,c) can be written parametrically as x=x1+at, y=y1+bt, z=z1+ct. Symmetric form divides coordinate differences by direction ratios when they are nonzero. To check intersection, solve for parameter values that make all three coordinates agree; if no common parameter pair exists, the lines can be skew even if their directions are not parallel."},
      {heading:"Angles and distances",body:"The angle between two direction vectors comes from the dot-product formula. Distance from a point to a plane requires the perpendicular-distance formula using the plane normal. For skew-line distance, the cross product of directions gives a common perpendicular direction; dot the point-to-point separation with the unit common-perpendicular direction."}
    ],
    [
      {title:"Angle between vectors",steps:["Compute the dot product.","Calculate both vector magnitudes.","Use cos(theta)=(a·b)/(|a||b|).","Check the ratio lies in [-1,1] and interpret angle range."]},
      {title:"Line intersection check",steps:["Write parametric equations for both lines.","Equate x, y and z coordinates.","Solve for parameters and check the values satisfy all coordinates.","If no common pair works, decide between parallel and skew using direction vectors."]}
    ],
    ["Forgetting the cross product changes sign when order swaps.","Calling every pair of nonparallel lines intersecting in 3D.","Using a direction ratio as a point coordinate.","Dividing by zero in symmetric line form without using parametric form."],
    ["JEE asks projections, vector area, line-angle/distance and shortest distance. Draw a spatial sketch and keep point vectors separate from direction vectors."],
    ["What does a·b=0 imply?","What is the magnitude of a cross product geometrically?","Can two nonparallel lines in 3D be skew."],
    ["Direction vector: vector parallel to a line's orientation.","Direction cosines: cosines of angles with coordinate axes.","Skew lines: non-parallel, non-intersecting lines in 3D."]);

  const mathematicsProbability = pack("JEE Main", "Mathematics", "Permutations, Combinations and Probability",
    "Count arrangements and selections carefully, then use event rules, conditional probability and expectation.",
    [
      "Permutations count ordered arrangements; combinations count unordered selections.",
      "Restrictions such as repetition, identical objects or fixed positions must be stated before choosing a counting formula.",
      "The sample space contains outcomes; an event is a subset. For equally likely outcomes, probability is favourable over total.",
      "Conditional probability restricts the sample space to an event already known to have occurred.",
      "Independent events multiply probabilities; mutually exclusive nonzero-probability events are not independent."
    ],
    ["nPr = n!/(n-r)!","nCr = n!/[r!(n-r)!]","P(A|B)=P(A∩B)/P(B), P(B)>0","For independent events, P(A∩B)=P(A)P(B)"],
    "Choosing president and secretary from 5 students gives 5P2 = 5 x 4 = 20 ordered outcomes; choosing a two-person committee gives 5C2 = 10 unordered outcomes.",
    [
      {heading:"Counting before formula selection",body:"Ask what makes two outcomes distinct. If swapping selected items creates a different outcome, order matters; otherwise it does not. For repeated or identical objects, divide by repeated factorials where appropriate. For arrangements with restrictions, place the constrained elements first or use complementary counting when the forbidden cases are easier to count."},
      {heading:"Probability rules",body:"For complementary events, P(A complement)=1-P(A). For mutually exclusive events, P(A union B)=P(A)+P(B). In the general case subtract the overlap. Conditional probability uses only outcomes consistent with the known event. Independence is a separate property: it means learning one event's occurrence does not change the probability of the other."},
      {heading:"Bayes and total probability",body:"When a problem has multiple possible causes or groups, partition the sample space into disjoint exhaustive events. Total probability sums the probability of the observed event conditional on each group weighted by its group's probability. Bayes' theorem reverses a conditional probability and updates the probability of a cause after evidence is observed."},
      {heading:"Expectation and common sanity checks",body:"Expected value is a probability-weighted average and does not need to be a possible single outcome. Check that probabilities are nonnegative and sum to one. An answer cannot fall outside 0 to 1 for a probability. In repeated trials, a probability does not specify exactly what happens in a small sample."}
    ],
    [
      {title:"Use the complement",steps:["Define the event requested, such as at least one success.","Define its complement, such as no successes.","Calculate the complement probability when simpler.","Subtract from one."]},
      {title:"Conditional probability",steps:["Identify the known event B and ensure P(B)>0.","Restrict outcomes to B.","Count outcomes also in A for the intersection.","Divide P(A intersection B) by P(B)."]}
    ],
    ["Using nCr when roles distinguish selected people.","Assuming mutually exclusive events are independent.","Adding probabilities without subtracting overlap.","Confusing P(A|B) with P(B|A)."],
    ["JEE mixes combinatorics with probability, conditional events, binomial distributions and expected value. Define the outcome space in words before computing."],
    ["Which problem uses nPr rather than nCr?","Can two mutually exclusive events with nonzero probabilities be independent?","What does conditional probability condition on."],
    ["Permutation: ordered arrangement.","Combination: unordered selection.","Expected value: probability-weighted mean of a random variable."]);

  const biologyDiversity = pack("NEET UG", "Biology", "Biological Classification, Diversity and Structural Organisation",
    "Use shared characteristics to classify life and compare plant/animal groups through structural and reproductive features.",
    [
      "Taxonomy classifies and names organisms; classification systems are updated as new morphological, biochemical and molecular evidence becomes available.",
      "Binomial nomenclature uses genus plus specific epithet; the genus begins with a capital and the epithet is lowercase in standard formatting.",
      "Plant groups differ in vascular tissue, seed production and whether seeds are enclosed by fruits.",
      "Animal phyla can be compared using symmetry, germ layers, body cavity, segmentation, support structures and development.",
      "Tissue organisation links structure to function; a feature should be used diagnostically rather than treated as a universal property without exceptions."
    ],
    ["Common hierarchy: species -> genus -> family -> order -> class -> phylum/division -> kingdom.","Xylem transports water/minerals; phloem transports organic solutes.","Mosses lack the true vascular tissue found in ferns and seed plants."],
    "A question asks why a group is classified as vascular: identify xylem/phloem as the diagnostic transport tissues, then distinguish that feature from seed formation.",
    [
      {heading:"Taxonomy and naming",body:"Scientific names reduce confusion caused by local/common names. The genus groups closely related species and the specific epithet identifies the species within that genus. Taxonomic ranks create nested groups, but evolutionary relationships are inferred from shared characters and evidence rather than rank alone. A dichotomous key uses paired choices based on observable characteristics."},
      {heading:"Plant diversity",body:"Bryophytes generally lack true vascular tissue and depend on moist conditions for aspects of reproduction; pteridophytes have vascular tissue but reproduce via spores; gymnosperms form exposed seeds; angiosperms produce flowers and seeds enclosed within fruits. These broad comparisons are useful, but exam questions may refer to specific subgroups and exceptions."},
      {heading:"Animal diversity",body:"Animal phyla are compared through symmetry, body organisation, germ layers, coelom, segmentation, appendages and developmental features. For example, bilateral symmetry is associated with a distinct anterior end and directional movement in many groups, while radial symmetry fits other ecological lifestyles. Use multiple traits because a single feature rarely describes an entire phylum accurately."},
      {heading:"Tissues and organ systems",body:"Plant meristems support growth, while epidermal, ground and vascular tissues perform protection, photosynthesis/storage and transport/support functions. Animal epithelial tissues cover surfaces and line cavities; connective tissue supports/links; muscle contracts; nervous tissue communicates. Structure-function questions are easier when you explain how thickness, cell shape, arrangement or material composition contributes to the role."}
    ],
    [
      {title:"Classify a described organism",steps:["Extract the diagnostic features explicitly stated.","Compare each feature with the classification criterion requested.","Use multiple matching traits if available.","Avoid inferring a trait that the description does not support."]},
      {title:"Compare plant groups",steps:["Check for vascular tissue.","Check whether reproduction is by spores or seeds.","If seeds occur, determine whether they are exposed or enclosed.","Add the characteristic life-cycle or reproductive structure if the question asks for detail."]}
    ],
    ["Treating taxonomy as permanently fixed.","Confusing gymnosperms and angiosperms.","Using a single feature to classify when the question gives contradictory evidence.","Mixing common name with a scientific name's capitalization rules."],
    ["NEET often tests group-character matching, taxonomic hierarchy, tissue functions and examples. Prioritise the exact comparative vocabulary used in the prescribed textbook."],
    ["What is binomial nomenclature?","Which plant groups have vascular tissue but no seeds?","Which animal tissue transmits electrical signals."],
    ["Taxonomy: identification, naming and classification of organisms.","Vascular tissue: xylem and phloem transport system.","Dichotomous key: identification tool using paired alternatives."]);

  const biologyMolecular = pack("NEET UG", "Biology", "Molecular Basis of Inheritance and Biotechnology",
    "Review DNA replication, transcription, translation, gene regulation and the logic of modern biotechnology tools.",
    [
      "DNA stores genetic sequence; complementary base pairing supports replication and sequence-dependent information transfer.",
      "DNA polymerases synthesise new DNA 5-prime to 3-prime, creating continuous and discontinuous synthesis on antiparallel templates.",
      "Transcription creates RNA from a DNA template; translation reads mRNA codons at ribosomes to assemble polypeptides.",
      "Gene expression is regulated; similar genomes can produce different cellular functions through different expression patterns.",
      "Restriction enzymes, ligase, vectors, PCR and electrophoresis perform distinct tasks in recombinant DNA workflows."
    ],
    ["DNA replication is semi-conservative in the standard model.","Codon = three-base unit on mRNA.","PCR requires template, primers, nucleotides and suitable DNA polymerase."],
    "In a PCR workflow, primers define the target boundaries; repeated denaturation, annealing and extension cycles amplify the sequence bounded by those primers.",
    [
      {heading:"Replication of DNA",body:"DNA's two strands are antiparallel and complementary. Helicase separates strands; primase provides primers; DNA polymerase extends them; ligase seals breaks between fragments. The leading strand is synthesised continuously toward the replication fork, while lagging-strand fragments are synthesised discontinuously and joined. The exact protein details vary across organisms, so use the level expected by the syllabus."},
      {heading:"Transcription and translation",body:"During transcription, RNA polymerase uses a DNA template to build RNA. In eukaryotes, the primary transcript can undergo processing before mature mRNA is used. At the ribosome, codons are read in a frame; tRNAs carry amino acids and match anticodons to codons. Start and stop codons have specific roles; the genetic code is degenerate, meaning multiple codons can specify the same amino acid."},
      {heading:"Regulation and mutation",body:"Regulation controls the timing, location and amount of RNA/protein production. A promoter and associated regulatory factors influence transcription, while post-transcriptional and protein-level processes can further control output. Mutations can alter coding sequences, regulatory regions or chromosome structure. Their effect depends on context; a synonymous substitution can leave the amino acid unchanged, while a frameshift may change many downstream codons."},
      {heading:"Biotechnology workflow",body:"Restriction enzymes recognise target DNA sequences and cut; ligase joins DNA fragments; vectors deliver genetic material; host systems replicate/express the inserted sequence. PCR amplifies a target; electrophoresis separates fragments; probes or sequencing can verify identity. The order of tools matters. Biosafety and ethics also matter because an experimental construct, a confirmed molecular result and a useful safe product are distinct milestones."}
    ],
    [
      {title:"Identify the tool by task",steps:["Need to cut at a sequence? Consider a restriction enzyme.","Need to join compatible DNA ends? Consider DNA ligase.","Need many copies of a target? Consider PCR.","Need to separate fragments by size? Consider gel electrophoresis.","Need to carry DNA into a host? Consider a vector."]},
      {title:"Interpret a mutation",steps:["Identify the DNA/RNA change.","Determine whether the reading frame is shifted.","Use the genetic code only if the affected codon is specified.","Avoid claiming a phenotype without enough information about expression and context."]}
    ],
    ["Confusing DNA ligase with a restriction enzyme.","Saying translation occurs on DNA rather than mRNA at ribosomes.","Claiming every mutation changes a protein or phenotype.","Confusing amplification with separation."],
    ["NEET questions often test enzymes/tools, directions of synthesis, codon roles, replication strands and regulation vocabulary."],
    ["What is the role of primase?","What defines the target segment in PCR?","Can a mutation be phenotypically neutral."],
    ["Transcription: RNA synthesis from a nucleic-acid template.","Translation: synthesis of a polypeptide according to an mRNA sequence.","Ligase: enzyme that joins compatible nucleic-acid ends."]);


  const mathematicsComplex = pack("JEE Main", "Mathematics", "Complex Numbers and Quadratic Equations",
    "Treat complex numbers as points/vectors in the plane and use algebra, modulus, arguments and root relations consistently.",
    ["A complex number z=a+ib has real part a and imaginary part b; i^2=-1.","Conjugation changes the sign of the imaginary part, while modulus measures distance from the origin.","Multiplication by a complex number changes scale and rotation in the Argand plane; arguments are defined modulo 2pi.","Quadratic roots are linked to coefficients, and real-coefficient polynomials have conjugate pairs of non-real roots."],
    ["z=a+ib; conjugate z-bar=a-ib","|z|=sqrt(a^2+b^2); z z-bar=|z|^2","For ax^2+bx+c=0: sum of roots=-b/a; product=c/a"],
    "For z=3-4i, |z|=5, z-bar=3+4i and z z-bar=25.",
    [
      {heading:"Arithmetic and conjugates",body:"Add and subtract real and imaginary components separately. Multiply by expanding and using i^2=-1; higher powers of i repeat every four powers. Dividing by a+bi is usually simplest after multiplying numerator and denominator by a-bi, making the denominator a^2+b^2. The conjugate operation respects sums and products: the conjugate of zw is z-bar times w-bar."},
      {heading:"Modulus and geometry",body:"The Argand plane represents z=a+ib as point (a,b). Its modulus is distance from the origin, and |z1-z2| is distance between two complex points. The equation |z-z0|=r describes a circle centred at z0 with radius r. Triangle inequalities and geometric loci can turn apparently complicated algebra into simple distance reasoning."},
      {heading:"Argument and polar form",body:"Argument is the angle made with the positive real axis; quadrant signs determine the correct angle. A principal argument is restricted to a chosen interval, but all arguments differ by integer multiples of 2pi. In polar form z=r(cos theta+i sin theta), multiplication adds arguments and multiplies moduli. De Moivre's theorem is useful for powers and roots."},
      {heading:"Quadratic equations",body:"Use the discriminant to classify real roots, then use coefficient-root relations when root information is more useful than solving explicitly. If roots are alpha and beta, symmetric expressions can often be computed from alpha+beta and alpha beta without finding either root individually. Check whether the question assumes real roots or allows complex roots."}
    ],
    [
      {title:"Compute a complex quotient",steps:["Write the numerator and denominator as a+bi form.","Multiply by the conjugate of the denominator.","Use i^2=-1 and collect real/imaginary parts.","Check that the final denominator is real and nonzero."]},
      {title:"Find a root expression",steps:["Read sum and product of roots from coefficients.","Rewrite the target expression symmetrically if possible.","Substitute the coefficient relations.","If the expression is not symmetric, solve for the individual roots."]}
    ],
    ["Forgetting that i^2=-1.","Using modulus as a signed quantity.","Ignoring the quadrant when computing argument.","Assuming every quadratic has two distinct real roots."],
    ["JEE often combines complex loci, modulus inequalities, arguments, roots of unity and symmetric root expressions."],
    ["What geometry does |z-z0|=r represent?","Why is z z-bar always a non-negative real number?","How do the arguments of a product relate to the factors?"],
    ["Argand plane: plane representation of complex numbers.","Modulus: distance from zero.","Principal argument: argument chosen in a prescribed interval."]);

  const mathematicsTrigonometry = pack("JEE Main", "Mathematics", "Trigonometric Identities, Equations and Inverse Functions",
    "Use identities, periodicity, domain/range and principal values without losing solutions.",
    ["Trigonometric equations often have infinitely many solutions because sine, cosine and tangent are periodic.","Identity transformations can simplify equations, but every division requires checking when the denominator is zero.","Inverse trigonometric functions return principal values, not every angle that shares a ratio.","Quadrant signs, reference angles and unit-circle reasoning support exact-value calculations."],
    ["sin^2 x + cos^2 x = 1","1+tan^2 x=sec^2 x; 1+cot^2 x=cosec^2 x","sin x = sin alpha gives x = n pi + (-1)^n alpha for integer n, subject to equivalent angle convention."],
    "For sin x = 1/2, the solutions in [0,2pi) are pi/6 and 5pi/6; periodicity adds 2npi.",
    [
      {heading:"Build identities from a base relation",body:"Start from sin^2 x+cos^2 x=1 and divide only when the denominator is nonzero to obtain related identities. Compound-angle formulae express sin(A±B), cos(A±B) and tan(A±B); double-angle and half-angle formulae follow from them. When simplifying, prefer forms that preserve the original domain and do not remove solutions."},
      {heading:"Solve equations systematically",body:"For a trigonometric equation, determine the requested interval first. Find all relevant reference angles, account for signs in each quadrant, then add periodic repetitions. If the equation becomes quadratic in sin x or cos x, solve the algebraic equation and retain only values in [-1,1]. Check roots against any divisions or squaring used during the derivation."},
      {heading:"Inverse trigonometric functions",body:"Inverse sine, cosine and tangent return values in fixed principal ranges. For example, arcsin(sin x) is not always x because the output must lie in the arcsin principal interval. Use a unit circle or graph to reduce an angle into that interval. Composition identities require domain and range checks; a symbolic cancellation can be invalid outside the permitted range."},
      {heading:"Signs, periodicity and symmetry",body:"Sine is odd and cosine is even; tangent has period pi while sine and cosine have period 2pi. These symmetries help reduce angles and evaluate negative inputs. For identities that involve tan or sec, also check points where cosine is zero. Exact values should be simplified and angle units made explicit."}
    ],
    [
      {title:"Solve on a finite interval",steps:["Rewrite the equation using a convenient ratio or identity.","Solve the algebraic equation for sine/cosine/tangent values.","Find all principal/reference angles in the requested interval.","Check excluded values and substitute final candidates."]},
      {title:"Simplify inverse-trig expressions",steps:["Check each inverse function's principal range.","Reduce the original angle or expression to that range.","Apply the identity within its valid domain.","Check boundary cases such as ±1 or zero denominators."]}
    ],
    ["Dividing by sin x or cos x without checking zero cases.","Returning only one solution for a periodic equation.","Treating arcsin(sin x)=x for every real x.","Mixing degrees and radians."],
    ["JEE tests equation solution sets, principal values, compound-angle identities and domain restrictions. Always write the interval or integer period explicitly."],
    ["Why can a trigonometric equation have infinitely many solutions?","What is the principal range of arcsin?","Which angles must be checked when dividing by cosine?"],
    ["Period: smallest positive interval after which a function repeats.","Principal value: selected output in an inverse function's defined range.","Reference angle: acute angle used with quadrant signs to evaluate a trig ratio."]);

  const mathematicsCoordinate = pack("JEE Main", "Mathematics", "Straight Lines, Circles and Coordinate Geometry",
    "Use slope/intercepts, distance, angle conditions and circle equations to solve two-dimensional geometry algebraically.",
    ["A straight line can be described by a point and direction/slope or by a general linear equation.","The distance from a point to a line uses the line coefficients and a normal direction.","A circle is the locus of points at a fixed distance from a centre; completing squares identifies its centre and radius.","Tangency, intersection and chord questions often reduce to simultaneous equations or distance constraints."],
    ["Line y-y1=m(x-x1)","Distance of (x0,y0) from Ax+By+C=0: |Ax0+By0+C|/sqrt(A^2+B^2)","Circle: (x-h)^2+(y-k)^2=r^2"],
    "For x^2+y^2-6x+4y-12=0, completing squares gives (x-3)^2+(y+2)^2=25, so centre is (3,-2) and radius is 5.",
    [
      {heading:"Lines and slope",body:"The slope is rise over run for non-vertical lines. Parallel non-vertical lines share slope; perpendicular lines have slopes whose product is -1 where both are defined. The intercept form can be convenient when axis intercepts are known, while the general form Ax+By+C=0 exposes a normal vector (A,B). A vertical line x=a has undefined slope."},
      {heading:"Distance and angle",body:"Distance from a point to a line is measured along a perpendicular, not an arbitrary connecting segment. The formula with coefficients A and B is the absolute line value at the point divided by the normal magnitude. For the angle between two lines, use their direction vectors or slopes; acute/obtuse orientation depends on whether the question requests the smaller angle or directed angle."},
      {heading:"Circle equations",body:"The standard circle equation directly gives centre and radius; the general equation x^2+y^2+Dx+Ey+F=0 becomes standard after completing squares. If the x^2 and y^2 coefficients differ or an xy term appears, it is not an ordinary circle in the same simple Cartesian orientation. Tangency can be checked by comparing the distance from the centre to a line with the radius."},
      {heading:"Intersection and chord problems",body:"To find intersections, substitute the line equation into the circle and solve the resulting quadratic. Two distinct real roots imply two intersection points; a repeated root corresponds to tangency; no real roots means no real intersection. Chord geometry can also use perpendicular bisectors because the perpendicular from a circle's centre to a chord bisects that chord."}
    ],
    [
      {title:"Find a tangent condition",steps:["Identify centre and radius.","Calculate centre-to-line perpendicular distance.","Set the distance equal to radius for tangency.","Solve for the unknown coefficient and verify the line is real."]},
      {title:"Line-circle intersection",steps:["Substitute y=mx+c or the given line equation into the circle.","Simplify to a quadratic in one variable.","Use the discriminant to count intersections.","Find coordinates only after checking the discriminant."]}
    ],
    ["Using the distance between the centre and a random point on the line rather than perpendicular distance.","Forgetting vertical-line special cases.","Misreading a repeated root as no intersection.","Failing to complete squares correctly."],
    ["JEE often uses tangent condition, chord of contact, distance from a point, angle between lines and circle intersections."],
    ["What does a repeated root mean geometrically?","How do you find a circle's centre from the general equation?","Why does the perpendicular from centre to chord bisect it?"],
    ["Normal vector: vector perpendicular to a line.","Tangency: one repeated intersection point in the standard line-circle case.","Discriminant: quantity indicating root type of a quadratic."]);

  const mathematicsSeries = pack("JEE Main", "Mathematics", "Sequences, Series and Binomial Theorem",
    "Recognise arithmetic/geometric patterns and expand powers using binomial coefficients.",
    ["Arithmetic progressions add a constant difference; geometric progressions multiply by a constant ratio.","The nth term and the sum are different quantities; identify whether the task asks for one term or accumulated total.","Binomial coefficients count choices and form symmetric coefficient patterns.","For a finite geometric series the ratio r=1 is a separate case from the formula with denominator r-1."],
    ["AP nth term: a_n=a+(n-1)d; sum S_n=n/2[2a+(n-1)d]","GP nth term: a_n=ar^(n-1)","Finite GP sum (r!=1): S_n=a(r^n-1)/(r-1)","(a+b)^n=sum from k=0 to n of nCk a^(n-k)b^k"],
    "For 2+6+18+54, a=2, r=3 and n=4; S4=2(3^4-1)/(3-1)=80.",
    [
      {heading:"Arithmetic and geometric sequences",body:"A sequence is a list indexed by position; a series is a sum of sequence terms. In an AP, subtract adjacent terms to confirm constant difference. In a GP, divide adjacent nonzero terms to check a constant ratio. A zero ratio or sign-changing ratio can still be valid if the sequence satisfies the defining relation. Read the indexing carefully because a1 is the first term and a_n is the nth."},
      {heading:"Sum formulas and estimates",body:"Use AP formulas only after identifying first term, difference and number of terms. For a GP, if r=1 every term equals a and S_n=na; otherwise use the geometric sum formula. For an infinite GP, convergence requires |r|<1; this condition should not be applied to a finite sum. A quick magnitude estimate can reveal exponent errors."},
      {heading:"Binomial coefficients",body:"The binomial theorem expands a non-negative integer power. The coefficient of a selected power comes from matching the exponent pattern of a and b. Coefficients are symmetric nCk=nC(n-k), and their sum is 2^n. For a general term, keep exponents adding to n and count the correct zero-based index."},
      {heading:"Common exam patterns",body:"Questions may give the sum S_n and ask for a_n; use a_n=S_n-S_(n-1) for n>=2. They may ask a coefficient or middle term in a binomial expansion, or constrain the ratio of two consecutive terms. Express the general term first, then use coefficient matching to avoid expanding every term."}
    ],
    [
      {title:"Recover an nth term from S_n",steps:["Write S_n and S_(n-1) carefully.","Compute a_n=S_n-S_(n-1).","Simplify the difference.","Check the result against the first term given."]},
      {title:"Find a binomial coefficient",steps:["Write the general term with index k.","Set the exponent to the requested power.","Solve for k and confirm 0<=k<=n.","Evaluate the binomial coefficient and any numerical factor."]}
    ],
    ["Confusing a_n and S_n.","Using the infinite-series formula without |r|<1.","Applying a GP sum formula when r=1.","Dropping the index shift in the binomial general term."],
    ["JEE asks sums from sequence definitions, special sums, coefficients, middle terms and relationships between successive terms."],
    ["When does an infinite GP converge?","How do you recover a term from two partial sums?","Why are binomial coefficients symmetric."],
    ["Common difference: fixed adjacent-term difference in an AP.","Common ratio: fixed adjacent-term ratio in a GP.","Binomial coefficient: nCk, the number of ways to select k items from n."]);

  const physicsRotation = pack("JEE Main", "Physics", "Rotational Motion, Torque, Angular Momentum and Rolling",
    "Translate linear mechanics into rotational variables and apply energy, torque and angular-momentum conservation.",
    ["Angular displacement, angular velocity and angular acceleration describe rotational kinematics.","Torque depends on force, lever arm and angle; it changes angular momentum.","Moment of inertia depends on mass distribution relative to an axis, not just total mass.","Rolling without slipping links centre-of-mass translation to rotation about the centre."],
    ["v=omega R for rolling without slipping","tau=I alpha for a rigid body about a fixed principal axis","L=I omega for rotation about a fixed axis","K_rot=1/2 I omega^2"],
    "A solid disc rolling without slipping at centre speed v has omega=v/R and total kinetic energy 1/2 Mv^2 + 1/2(1/2 MR^2)(v^2/R^2)=3/4 Mv^2.",
    [
      {heading:"Torque and moment of inertia",body:"Torque is the cross product of lever-arm vector and force. Only the perpendicular force component contributes to torque magnitude. Moment of inertia sums each mass element times the square of its distance from the axis, so moving mass farther out increases rotational inertia strongly. Use the parallel-axis theorem when shifting from the centre-of-mass axis to a parallel axis."},
      {heading:"Angular momentum and conservation",body:"Angular momentum depends on position, momentum and reference point in general; for simple fixed-axis rotation it is I omega. If net external torque about a point/axis is zero, angular momentum about that point/axis is conserved. A skater pulling arms inward reduces moment of inertia and increases angular speed if angular momentum remains conserved."},
      {heading:"Rotational energy and rolling",body:"Rotational kinetic energy is 1/2 I omega^2. For pure rolling, each point's motion combines translation of the centre and rotation about it. Static friction may provide the torque needed for rolling without dissipating energy at an ideal no-slip contact, but friction's role depends on the forces and constraints. Rolling objects with the same centre speed can have different total energy because moments of inertia differ."},
      {heading:"Compound dynamics",body:"For a spool, pulley or rolling body, write translation for the centre of mass and torque around the appropriate axis. Use a no-slip constraint such as a=alpha R only when the contact does not slip. For strings, check whether the string is massless, inextensible and does not slip on the pulley; these assumptions determine whether different segments share acceleration."}
    ],
    [
      {title:"Rolling down an incline",steps:["Draw forces and torque about the centre.","Use translation along the slope and rotation about the centre.","Apply a=alpha R for no-slip rolling.","Use energy as a cross-check if the height drop and moment of inertia are known."]},
      {title:"Conservation of angular momentum",steps:["Choose the axis/reference point and state external torque is zero or negligible.","Write initial angular momentum.","Write final angular momentum with the changed inertia or velocities.","Equate initial and final values and check direction signs."]}
    ],
    ["Using I for the wrong axis.","Adding friction energy loss to ideal static no-slip contact without justification.","Applying angular momentum conservation when external torque is nonzero.","Forgetting rotational energy when a body rolls."],
    ["JEE often combines pulleys, rolling constraints, energy conservation and angular momentum. Draw a separate diagram for each body's translation and rotation."],
    ["What determines moment of inertia?","When is angular momentum conserved?","Why does rolling kinetic energy contain translational and rotational terms."],
    ["Torque: rotational effect of a force about a chosen point/axis.","Moment of inertia: rotational inertia for an axis.","Pure rolling: rolling without relative slipping at the contact point."]);

  const physicsFluids = pack("JEE Main", "Physics", "Gravitation, Fluids and Properties of Matter",
    "Use field/potential reasoning and fluid pressure, buoyancy, continuity and Bernoulli relationships with assumptions.",
    ["Gravitational force follows an inverse-square law for point masses or spherical bodies outside them.","Gravitational field is force per unit mass; gravitational potential is potential energy per unit mass.","Fluid pressure at rest increases with depth and acts normal to a surface.","Ideal-fluid continuity follows volume conservation, and Bernoulli's equation represents energy conservation along a streamline under restricted conditions."],
    ["F=Gm1m2/r^2; g=GM/r^2","Near Earth: delta U approx mg delta h","Hydrostatic pressure difference: delta P=rho g delta h","Continuity: A1 v1=A2 v2 for steady incompressible flow","Bernoulli: P+1/2 rho v^2+rho gh=constant along a streamline for ideal steady flow"],
    "In a horizontal pipe that narrows from area 4A to area A, incompressible-flow speed rises by a factor of 4 under continuity.",
    [
      {heading:"Gravity and potential",body:"Outside a spherically symmetric mass, gravitational field behaves as if the mass were concentrated at its centre. Field points toward the mass and potential is conventionally negative when zero is chosen at infinity. Force, field and potential are related but have different units and vector/scalar properties. At height small relative to Earth's radius, mg is a useful approximation for potential-energy change."},
      {heading:"Pressure and buoyancy",body:"Pressure is force per unit area and in a fluid at rest acts equally in all directions at a point. Hydrostatic pressure difference is proportional to density, gravity and vertical depth difference. Buoyant force equals the weight of displaced fluid in the standard Archimedes principle. Whether a body floats depends on its average density and the fluid, including how much volume is submerged."},
      {heading:"Continuity and flow",body:"Continuity states that mass flow is conserved in steady flow; for an incompressible fluid this reduces to A v constant along the tube. A narrower cross-section therefore has higher speed under the ideal assumptions. Distinguish the cross-sectional area from radius: area scales with radius squared."},
      {heading:"Bernoulli and viscosity limits",body:"Bernoulli's equation applies for steady, incompressible, non-viscous flow along a streamline, with no unaccounted pump/turbine work or dissipative loss. Higher speed can coincide with lower static pressure along the same streamline under its assumptions, but that is not a universal statement for every real flow. Viscosity, turbulence, flow separation and varying elevation can change the result."}
    ],
    [
      {title:"Floating body",steps:["Identify body weight and displaced-fluid buoyant force.","At equilibrium, buoyant force equals weight.","Use displaced volume times fluid density to get displaced mass.","Compare object and fluid densities to determine the submerged fraction under uniform-density assumptions."]},
      {title:"Narrow pipe",steps:["Use continuity to relate area and speed.","Use the actual area ratio, noting A is proportional to radius squared.","If pressure is requested, apply Bernoulli only after checking its assumptions.","Convert pressure, density and velocity units consistently."]}
    ],
    ["Confusing gravitational field and potential.","Using full atmospheric pressure when a gauge pressure difference is requested.","Assuming fluid speed doubles when radius halves; area changes quadratically.","Applying Bernoulli to strongly viscous/turbulent flow without qualification."],
    ["JEE combines gravity field/potential, satellites, buoyancy, pressure columns, continuity and Bernoulli. State assumptions before using ideal equations."],
    ["Why does pressure increase with depth?","What does buoyant force equal?","Which assumptions support Bernoulli's equation."],
    ["Gravitational potential: potential energy per unit mass.","Gauge pressure: pressure relative to a chosen ambient reference.","Viscosity: resistance to relative fluid motion."]);

  const chemistrySolutions = pack("JEE Main", "Chemistry", "Solutions, Colligative Properties and Concentration",
    "Convert concentration units accurately and connect dissolved particle number to vapour pressure, boiling/freezing changes and osmotic pressure.",
    ["Molarity uses total solution volume; molality uses solvent mass and is less temperature-sensitive.","Ideal dilute-solution colligative properties depend on the number of dissolved particles, not their chemical identity alone.","Electrolyte dissociation/association changes effective particle count and may require the van't Hoff factor.","Use Kelvin for thermodynamic equations and keep molar mass/concentration units consistent."],
    ["Molarity M=nsolute/Vsolution(L)","Molality m=nsolute/kg solvent","Delta Tb=i Kb m; Delta Tf=i Kf m","Osmotic pressure pi=i C R T in the ideal dilute model"],
    "For a 0.20 molal non-electrolyte solution with Kf=1.86 K kg mol^-1, freezing-point depression is 1.86(0.20)=0.372 K.",
    [
      {heading:"Concentration units",body:"Molarity depends on the final solution volume and can change with temperature expansion. Molality uses solvent mass and remains stable under ordinary temperature changes when no mass is lost. Mole fraction is a component's amount divided by total moles. Mass percentage uses solute mass over solution mass; never replace solvent mass with total solution mass in molality."},
      {heading:"Raoult's law and vapour pressure",body:"For an ideal solution of volatile components, each component's partial vapour pressure is its mole fraction times its pure-component vapour pressure. A non-volatile solute lowers the solvent's vapour pressure and can lead to boiling-point elevation and freezing-point depression. Deviations from ideality occur when interactions between unlike molecules differ from those in the pure components."},
      {heading:"Colligative properties",body:"Boiling elevation and freezing depression are proportional to molality for dilute ideal solutions. Osmotic pressure is the pressure needed to stop solvent flow through a semipermeable membrane and depends on concentration and absolute temperature. Electrolytes may dissociate into multiple ions, so the ideal particle count changes; use a van't Hoff factor only as the question's model permits."},
      {heading:"Find molar mass from a measured effect",body:"Choose the relevant colligative relation, solve for molality or concentration, and relate moles to the known solute mass. If association or dissociation is present, incorporate the effective factor. Check that units cancel to give the expected temperature, pressure or molar-mass unit. Very dilute formulas may be inaccurate at high concentration."}
    ],
    [
      {title:"Convert mass to molality",steps:["Convert solute mass to moles using molar mass.","Convert solvent mass to kilograms.","Divide moles by kg solvent.","Use the result in a colligative formula with consistent units."]},
      {title:"Find boiling elevation",steps:["Identify the solvent's Kb and solution molality.","Determine whether a van't Hoff factor is supplied or required.","Compute Delta Tb=i Kb m.","Add the elevation to the solvent's normal boiling temperature using matching temperature units."]}
    ],
    ["Using grams instead of kilograms for molality.","Using Celsius instead of Kelvin in osmotic pressure.","Forgetting particle dissociation when the model specifies i.","Applying ideal-solution relationships without stating they are approximations."],
    ["JEE asks concentration conversions, vapour pressure, molar mass from colligative properties and electrolyte particle factors."],
    ["Why does molality not change with ordinary volume expansion?","What does osmotic pressure measure?","When is the van't Hoff factor greater than one."],
    ["Mole fraction: fraction of total moles from one component.","Colligative property: property depending primarily on particle count.","Osmosis: net solvent flow through a semipermeable membrane driven by chemical-potential difference."]);

  const chemistryKinetics = pack("JEE Main", "Chemistry", "Chemical Kinetics: Rate Laws, Order and Activation Energy",
    "Derive rates from concentration-time data and distinguish reaction order, molecularity, half-life and temperature effects.",
    ["Rate is change in concentration per time and depends on which species and stoichiometric coefficient are used.","Rate law powers are experimental and do not automatically equal the balanced reaction coefficients.","Integrated rate equations describe how concentration changes over time for a specified rate law.","Arrhenius behaviour relates temperature and rate constant through activation energy; a catalyst lowers the pathway barrier."],
    ["Rate=k[A]^m[B]^n; overall order=m+n","First order: ln([A]0/[A]t)=kt; t1/2=0.693/k","Arrhenius: k=A exp(-Ea/RT)"],
    "For first-order k=0.231 min^-1, half-life=0.693/0.231=3.0 min, independent of initial concentration.",
    [
      {heading:"Rate and rate law",body:"Average rate measures concentration change over an interval; instantaneous rate is the local rate. When using a species that has a coefficient in the balanced equation, normalised reaction rate divides its concentration-change rate by the stoichiometric coefficient with the appropriate sign. The empirical rate law is determined experimentally and its exponents define reaction order."},
      {heading:"Integrated forms and half-life",body:"For a zero-order process, concentration decreases linearly with time in the relevant interval; for a first-order process, the logarithm of concentration changes linearly with time; for a second-order single-reactant model, reciprocal concentration is linear in time. Half-life depends on initial concentration for some orders but not for the ideal first-order case. Choose a plot based on the candidate order."},
      {heading:"Temperature and catalyst",body:"The Arrhenius equation predicts an exponential increase of rate constant as temperature rises for positive activation energy, within the useful range of the model. A catalyst provides an alternate pathway with lower activation barrier and accelerates forward/reverse processes. It changes the time needed to approach equilibrium, not the equilibrium constant at fixed temperature."},
      {heading:"Mechanism and molecularity",body:"A reaction mechanism proposes elementary steps. Molecularity describes the number of reacting entities in one elementary step and is a positive integer; overall reaction order can be zero or fractional and is an experimental property. Rate-determining-step approximations require assumptions about the preceding/following steps, so do not infer a complex rate law from the overall balanced equation alone."}
    ],
    [
      {title:"Determine order from data",steps:["Compare experiments where only one reactant concentration changes.","Calculate the rate ratio and concentration ratio.","Solve the exponent that relates them.","Repeat for each reactant and sum exponents for overall order."]},
      {title:"Use a half-life",steps:["Identify the reaction order or state the model supplied.","Choose the matching integrated relation.","Keep rate-constant units consistent with the equation.","Check whether initial concentration should affect the result."]}
    ],
    ["Reading order straight from a complex overall equation.","Using the wrong integrated equation or k units.","Assuming catalysts change K.","Forgetting natural log versus base-10 log conversion."],
    ["JEE asks order from experimental tables, rate-constant units, half-life, Arrhenius and elementary-step reasoning."],
    ["Can reaction order be fractional?","Which order has half-life independent of initial concentration?","What does a catalyst change."],
    ["Activation energy: barrier quantity in the Arrhenius model.","Molecularity: count of reactant entities in an elementary step.","Rate-determining step: kinetically slow step in an assumed mechanism."]);

  const chemistryCoordination = pack("JEE Main", "Chemistry", "Coordination Compounds: Nomenclature, Isomerism and Bonding",
    "Identify the coordination sphere, ligand denticity, oxidation state, geometry, isomerism and basic crystal-field consequences.",
    ["The coordination entity contains a central atom/ion bonded to ligands; coordination number counts donor atoms bound directly to the centre.","Ligands may be neutral or charged and monodentate or polydentate; chelating ligands bind through multiple donor atoms.","Complex naming records ligand names, ligand counts, metal name and oxidation state following the taught convention.","Geometries such as octahedral, tetrahedral and square planar depend on coordination number and metal/ligand circumstances."],
    ["Oxidation state of centre + sum ligand charges = complex charge","Octahedral d-orbitals split into lower t2g and higher eg sets in the elementary crystal-field model."],
    "In [Cu(NH3)4]2+, ammonia is neutral, so copper has oxidation state +2; there are four donor nitrogen atoms and coordination number 4.",
    [
      {heading:"Identify a complex",body:"Separate the formula's coordination sphere from counterions. Count donor atoms attached directly to the central ion, not simply the number of ligand molecules: a bidentate ligand contributes two to coordination number. Find central oxidation state by balancing ligand charges against the overall complex charge. Do not confuse coordination number with oxidation state."},
      {heading:"Naming and ligand order",body:"Write ligand names first in the prescribed alphabetical ordering and use prefixes to describe quantity; common polydentate ligand names may need special multiplicative prefixes. Then write the central metal name and oxidation state in Roman numerals. Anionic complexes use the appropriate modified metal name under standard nomenclature rules. Follow the course's exact naming conventions for ambidentate ligands and polyatomic ligand names."},
      {heading:"Isomerism",body:"Structural isomerism includes ionisation, linkage and coordination isomerism in their applicable settings. Stereoisomerism includes geometrical arrangements such as cis/trans or fac/mer, and optical isomerism when non-superimposable mirror-image configurations occur. Draw or visualise ligand positions rather than memorising only a formula; the same formula can represent multiple arrangements."},
      {heading:"Crystal-field picture",body:"Ligand fields split d-orbital energies; the splitting magnitude depends on geometry, ligand and metal. Comparing splitting energy with pairing energy helps reason about high-spin/low-spin cases where the model applies. d-d transitions often contribute to colour, and unpaired electrons determine paramagnetism. Crystal-field theory is a useful model, not a full description of every bonding property."}
    ],
    [
      {title:"Find oxidation state and coordination number",steps:["Write the overall complex charge.","Assign known ligand charges and solve charge balance for the central metal.","Count donor atoms bound to the centre.","Check multidentate ligands contribute more than one donor atom."]},
      {title:"Classify an isomer",steps:["Compare which atoms/groups are directly bonded first.","If connectivity differs, check structural isomerism type.","If connectivity matches but spatial positions differ, check stereoisomerism.","Use a labelled arrangement to justify cis/trans or optical relationships."]}
    ],
    ["Counting ligand molecules instead of donor atoms for coordination number.","Ignoring the charge of an anionic ligand.","Confusing oxidation state and coordination number.","Claiming all four-coordinate complexes are tetrahedral."],
    ["JEE asks formula/name conversion, oxidation state, geometry, isomers, d-electron count, magnetic behaviour and ligand-field comparisons."],
    ["What is coordination number?","How does a bidentate ligand affect that number?","What is the difference between linkage and geometrical isomerism."],
    ["Ligand: species donating a pair of electrons to the central ion.","Chelation: binding by a multidentate ligand through multiple donor atoms.","Crystal-field splitting: separation of d-orbital energies in a ligand environment."]);

  const chemistryTransition = pack("JEE Main", "Chemistry", "d- and f-Block Elements and Transition-Metal Trends",
    "Explain variable oxidation state, colour, magnetism, catalytic behaviour, alloy formation and lanthanoid contraction.",
    ["Partially filled d subshells support several oxidation states in many transition elements, though stability varies by configuration and conditions.","Unpaired d electrons often create paramagnetism; paired electrons lead to diamagnetism under the simple spin-only comparison.","Many coloured complexes absorb visible light through electronic transitions; d0 and d10 configurations often lack ordinary d-d transitions.","Lanthanoid contraction reflects gradual size decrease across the lanthanoid series and affects later-element size similarity and separation chemistry."],
    ["Spin-only magnetic moment estimate: mu=sqrt(n(n+2)) BM for n unpaired electrons under the elementary model.","Oxidation-state balance remains the first check for ions and compounds."],
    "A species with three unpaired electrons has spin-only moment sqrt(3(5)) = sqrt(15) BM in the basic model.",
    [
      {heading:"Electronic configurations and oxidation states",body:"Transition-metal valence electrons can involve both ns and (n-1)d subshells. Oxidation can remove ns electrons before d electrons in many ions, but stability depends on the species and environment. Half-filled and filled subshells may contribute to observed exceptions. Always use the stated element/ion rather than assuming a single oxidation state from the periodic group."},
      {heading:"Colour and magnetism",body:"A magnetic field interacts with unpaired electron spins; more unpaired electrons typically means stronger paramagnetic response in the simple comparison. Colour often results when electronic transitions absorb certain visible wavelengths, leaving the complementary light transmitted/reflected. Not all coloured compounds owe their colour to the same mechanism; charge-transfer transitions can also be important."},
      {heading:"Catalysis, alloys and interstitial compounds",body:"Transition metals and their compounds can catalyse reactions because they provide variable oxidation states, adsorb reactants or offer accessible reaction pathways. Alloys contain mixtures of metals or metal with other elements and often improve practical properties. Small atoms fitting into metal-lattice spaces can form interstitial compounds with changed hardness and other properties."},
      {heading:"f-block and lanthanoid contraction",body:"Across the lanthanoids, increasing nuclear charge is imperfectly shielded by f electrons, producing a gradual decrease in ionic size. This affects coordination, separation and the similar radii of some 4d/5d transition-metal pairs. Actinoid chemistry has additional complexity from radioactivity and several accessible oxidation states."}
    ],
    [
      {title:"Count unpaired electrons",steps:["Write the appropriate ion electron configuration.","Identify the d-electron count after ion formation.","Apply the geometry/ligand-spin information if a complex is given.","Count unpaired electrons before using the spin-only estimate."]},
      {title:"Explain a trend",steps:["State the observed trend across the relevant series.","Connect it to nuclear charge, shielding or subshell filling.","Mention important exceptions if the prompt asks for them.","Tie the explanation to the specific property rather than memorising an unsupported arrow."]}
    ],
    ["Using the neutral atom's electron configuration for its cation without removing electrons correctly.","Assuming every coloured transition-metal compound is coloured by d-d transitions.","Ignoring the ligand field when counting unpaired electrons in a complex.","Treating lanthanoid contraction as a sudden size jump."],
    ["JEE often tests oxidation states, magnetic moments, electronic configurations, colour and periodic trends of transition metals."],
    ["Why can transition elements have variable oxidation states?","What information is needed before counting unpaired electrons in a complex?","What is lanthanoid contraction."],
    ["Paramagnetism: attraction due to unpaired electron moments.","Charge-transfer transition: electronic transfer between ligand/metal-related states.","Lanthanoid contraction: gradual decrease in size across the lanthanoid series."]);

  const biologyPlantRepro = pack("NEET UG", "Biology", "Sexual Reproduction in Flowering Plants",
    "Trace flower structure, microsporogenesis, megasporogenesis, pollination, fertilisation, seed development and fruit formation.",
    ["A flower contains reproductive structures; anther and ovule house developing male and female gametophytes respectively.","Microsporogenesis produces haploid microspores that develop into pollen grains; megasporogenesis produces megaspores in the ovule.","Pollination transfers pollen to a receptive stigma; fertilisation follows after compatible pollen-tube growth and gamete fusion.","Double fertilisation in angiosperms produces a zygote and endosperm-forming product, supporting embryo and seed development."],
    ["Meiosis reduces chromosome number in spore-producing cells; fertilisation restores diploidy.","Angiosperm double fertilisation involves syngamy and triple fusion in the typical description."],
    "A pollen grain reaching a compatible stigma is not yet fertilisation; pollen germination, tube growth and delivery of male gametes still occur.",
    [
      {heading:"Flower and gametophytes",body:"A typical flower's androecium contains stamens; an anther has pollen sacs in which microspore mother cells undergo meiosis. Each microspore can develop into a pollen grain representing the male gametophyte at the stage taught by the syllabus. The gynoecium contains carpels; the ovule includes the megasporangium/nucellus and integuments. The functional megaspore develops into the embryo sac, the female gametophyte."},
      {heading:"Pollination mechanisms",body:"Self-pollination transfers pollen within the same flower or plant under the stated classification; cross-pollination transfers between plants of the same species. Wind, water and animals are common agents, and floral traits can reflect the pollination strategy. Outbreeding devices such as different maturation times, spatial separation or self-incompatibility reduce selfing and can support genetic variation."},
      {heading:"Double fertilisation",body:"After compatible pollen germinates, the pollen tube carries male gametes into the ovule. One male gamete fuses with the egg to form the diploid zygote (syngamy). The other fuses with the central cell nuclei in the typical angiosperm embryo sac to form the primary endosperm nucleus, usually triploid in the standard case (triple fusion). These are two distinct events."},
      {heading:"Seed and fruit development",body:"The zygote develops into the embryo, while endosperm nourishes the developing embryo. Integuments form the seed coat; ovules develop into seeds and the ovary commonly develops into fruit. Some structures may persist or develop from accessory floral parts, so the common simplified relationship has exceptions. Dormancy and dispersal improve survival and spread under appropriate conditions."}
    ],
    [
      {title:"Order the reproductive sequence",steps:["Identify microspore/megaspore formation.","Trace pollen transfer to the stigma.","Follow pollen-tube growth and entry to the ovule.","Separate syngamy from triple fusion.","Connect the products to embryo, endosperm, seed and fruit."]},
      {title:"Compare pollination types",steps:["Identify where pollen starts and ends.","Determine whether the source and recipient are the same plant or different plants of the same species.","Name likely agents if the question provides floral clues.","State the consequence for genetic variation or reproductive assurance."]}
    ],
    ["Confusing pollination with fertilisation.","Saying two male gametes both form the embryo.","Confusing ovule with ovary in seed/fruit development.","Treating every angiosperm endosperm detail as identical outside the standard model."],
    ["NEET emphasises pollen and embryo-sac structure, pollination adaptations, double-fertilisation terms and seed/fruit product mapping."],
    ["What is the difference between syngamy and triple fusion?","Which structure develops from the ovule?","Why can outbreeding devices be beneficial."],
    ["Microsporogenesis: formation of microspores through meiosis.","Pollination: pollen transfer to a receptive stigma.","Endosperm: tissue that supports embryo development."]);

  const biologyMicrobes = pack("NEET UG", "Biology", "Microbes in Human Welfare",
    "Connect microorganisms to food production, industrial products, sewage treatment, biogas, biocontrol and biofertilisers.",
    ["Microbes are used in food fermentation and industrial production because their metabolism can generate useful products.","Wastewater treatment uses microbial communities to reduce organic load and support cleaner effluent.","Biogas production involves anaerobic microbial communities that convert organic matter into methane-rich gas.","Biocontrol and biofertilisers can reduce reliance on certain chemical inputs when applied appropriately."],
    ["BOD: biochemical oxygen demand, a measure related to oxygen required to biologically degrade organic matter in water.","Anaerobic digestion produces biogas; methane is a major combustible component."],
    "A high BOD indicates substantial biodegradable organic material in water and can signal that decomposition may deplete dissolved oxygen.",
    [
      {heading:"Food and industry",body:"Lactic-acid bacteria support curd formation by fermenting lactose to lactic acid under suitable conditions. Yeasts are used in fermentation and bread making; microorganisms can produce organic acids, enzymes, antibiotics and other industrial products. Production depends on strain, nutrient supply, oxygen, pH, temperature and process control."},
      {heading:"Sewage treatment",body:"Primary treatment physically removes settleable material; secondary treatment relies heavily on microbial activity. Aerobic microbial flocs oxidise organic matter, lowering the organic load. In the standard sewage description, BOD is lower after effective treatment because less biodegradable organic material remains. The microbial sludge may undergo anaerobic digestion to produce gas."},
      {heading:"Biogas and waste conversion",body:"Biogas plants use anaerobic microbes, including methanogens, to convert organic waste into a methane-rich mixture. Feedstock and operating conditions affect yield. A proper system manages methane flammability, leaks and digestate handling. The process links waste management with energy recovery rather than treating waste simply as a disposal problem."},
      {heading:"Biocontrol and biofertilisers",body:"Biocontrol uses organisms or their products to suppress pests/pathogens; it can be species-specific and requires suitable ecological conditions. Biofertilisers include microbes that fix nitrogen or improve nutrient availability, such as appropriate rhizobial associations and some cyanobacteria. They do not automatically replace every nutrient input and should match crop, soil and local practice."}
    ],
    [
      {title:"Sewage process question",steps:["Identify primary physical treatment versus secondary biological treatment.","Explain the role of microbial flocs in reducing organic load.","Connect reduced organic load with lower BOD.","State where sludge digestion or biogas production fits in the process."]},
      {title:"Choose a microbial application",steps:["Determine whether the goal is fermentation, waste treatment, methane generation, pest control or nutrient supply.","Match the organism group/process to the outcome taught in the chapter.","Explain the relevant metabolism or ecological interaction.","Avoid claiming all microorganisms are beneficial or interchangeable."]}
    ],
    ["Confusing BOD with dissolved oxygen itself.","Assuming biogas generation is aerobic.","Treating biocontrol as a universal substitute for all pesticides.","Forgetting that microbial products depend on conditions and strain."],
    ["NEET often asks process order, BOD interpretation, microbe/product matching and the biological basis of biocontrol or biofertilisers."],
    ["What does BOD indicate?","Why are methanogens associated with anaerobic conditions?","Give one role of a biofertiliser."],
    ["Fermentation: microbial conversion of compounds, commonly without oxygen in the classic yeast process.","Methanogen: microorganism that produces methane under anaerobic conditions.","Biofertiliser: preparation using beneficial microbes to improve nutrient availability."]);

  const biologyMorphology = pack("NEET UG", "Biology", "Morphology and Anatomy of Flowering Plants",
    "Use root, stem, leaf, inflorescence, flower, fruit and seed structures to identify plant adaptations and internal tissues.",
    ["Root systems include primary/tap and fibrous forms; modifications support storage, anchorage, respiration or other functions.","Stems and leaves can be modified for storage, protection, climbing, photosynthesis and reproduction.","Plant anatomy compares epidermal, ground and vascular tissues and the arrangement of xylem/phloem.","Monocot/dicot contrasts are useful patterns, but diagnostic characters should be considered together."],
    ["Xylem conducts water/mineral ions; phloem transports sugars and other organic solutes.","Dicot stem commonly has vascular bundles arranged in a ring; typical monocot stem bundles are scattered."],
    "Aerial prop roots can provide support to a large plant; root modifications should be identified by structure plus function.",
    [
      {heading:"Root, stem and leaf modifications",body:"Roots may be modified for food storage, mechanical support, aerial absorption, respiration or parasitic attachment. Stems may form rhizomes, tubers, corms, tendrils, thorns or photosynthetic structures. Leaves can be modified into spines, tendrils, storage organs or reproductive structures. Identify homology from origin and structure rather than appearance alone."},
      {heading:"Flowers, inflorescences, fruits and seeds",body:"A flower's arrangement of sepals, petals, stamens and carpels supports identification. Inflorescence describes the arrangement of flowers on the axis; it is distinct from the individual flower. Fruit type depends on which floral parts develop and how the ovary changes. Seed structure commonly includes seed coat, embryo and stored food; cotyledon number alone should not replace all other diagnostic information."},
      {heading:"Tissue systems",body:"The epidermal system protects and regulates exchange; ground tissue performs photosynthesis, storage and support; vascular tissue conducts materials. Xylem includes conducting/supporting elements and phloem includes sieve elements and associated cells. Tissue properties and arrangement explain why stems support and transport, roots absorb, and leaves intercept light and exchange gases."},
      {heading:"Anatomical comparisons",body:"Typical dicot and monocot roots/stems differ in vascular arrangement and secondary growth patterns. The common dicot stem description has vascular bundles in a ring and a vascular cambium; common monocot stems have scattered bundles and usually lack the same secondary-growth pattern. These are teaching-level generalisations: check the precise organ and species described."}
    ],
    [
      {title:"Identify a plant modification",steps:["Describe the structure and its origin (root, stem or leaf).","Identify the visible diagnostic feature.","Link that feature to the function or adaptation.","Distinguish similar-looking organs based on their origin."]},
      {title:"Compare cross sections",steps:["Identify the organ first: root, stem or leaf.","Locate epidermis, ground tissue and vascular tissue.","Compare xylem/phloem arrangement and cambium where relevant.","Use at least two features rather than a single clue."]}
    ],
    ["Identifying a structure from function alone without checking its origin.","Confusing inflorescence with flower structure.","Assuming every monocot/dicot example follows every textbook generalisation.","Switching xylem and phloem transport roles."],
    ["NEET emphasizes textbook diagrams, modification-to-function matching, floral parts, and monocot/dicot root/stem anatomy."],
    ["How do xylem and phloem differ?","Why should origin be checked when classifying a plant modification?","Name two common monocot/dicot anatomical contrasts."],
    ["Inflorescence: arrangement of flowers on a plant axis.","Cambium: meristematic tissue that can produce secondary vascular tissues.","Cotyledon: embryonic seed leaf."]);

  const biologyPopulation = pack("NEET UG", "Biology", "Organisms, Populations and Ecological Interactions",
    "Explain environmental responses, population attributes, growth curves and species interactions using ecological reasoning.",
    ["Organisms respond to temperature, water, salinity and other environmental factors through tolerance, regulation, migration or dormancy.","Population attributes include density, age structure, natality, mortality and dispersion; they are not individual attributes.","Exponential growth assumes abundant resources; logistic growth includes limits and approaches carrying capacity.","Species interactions differ in their effects on partners and may change with context."],
    ["Population change = births + immigration - deaths - emigration over a defined interval.","Exponential model: dN/dt=rN; logistic model: dN/dt=rN(1-N/K) in standard notation."],
    "In a logistic model, growth is fastest around an intermediate fraction of carrying capacity and slows as N approaches K.",
    [
      {heading:"Organisms and environmental factors",body:"Temperature influences enzyme activity and water balance; organisms vary in tolerance ranges. Conformers experience internal conditions that change with their environment, while regulators maintain aspects of internal constancy at an energetic cost. Some organisms migrate, enter dormancy or form resistant stages when conditions become unfavourable. Adaptation and acclimatisation are different: inherited population-level change is not the same as an individual's physiological adjustment."},
      {heading:"Population attributes",body:"Population density is a count or estimate relative to area/volume; absolute counts are not always practical, so indirect methods may be needed. Age pyramids describe the proportions of pre-reproductive, reproductive and post-reproductive members and help infer likely future trend. Natality and mortality rates require a defined time base and population denominator. Dispersion can be clumped, uniform or random depending on resources, social behaviour and interactions."},
      {heading:"Exponential and logistic growth",body:"Exponential growth is a useful model when resources are effectively unlimited; it produces a J-shaped curve. Logistic growth incorporates carrying capacity K and produces an S-shaped curve as growth slows with competition or other limits. Carrying capacity is not permanent if habitat, climate, resource use or management changes. Real populations can fluctuate around predictions because of time lags and environmental variation."},
      {heading:"Interactions and coexistence",body:"Competition can occur within or between species; outcomes depend on resource overlap and environment. Predation can regulate prey and move energy across trophic levels; parasites exploit hosts and can affect host fitness. Mutualisms may be obligate or facultative; commensalism involves one partner benefiting with little apparent effect on the other. Use +, -, and 0 outcome notation only after identifying whose fitness effect is described."}
    ],
    [
      {title:"Interpret a population graph",steps:["Identify axes and whether the curve is J-shaped or S-shaped.","Locate any plateau and relate it to carrying capacity.","Describe the changing growth rate as population size changes.","State model assumptions before generalising to real ecosystems."]},
      {title:"Classify a species interaction",steps:["Identify both species and the direct relationship.","Determine whether each partner benefits, is harmed or is largely unaffected.","Match the effect pair to the interaction category.","Explain the ecological mechanism rather than only naming the category."]}
    ],
    ["Calling an individual's acclimatisation evolution.","Treating carrying capacity as fixed under all conditions.","Confusing a population attribute with an individual characteristic.","Classifying an interaction from a single organism's benefit without considering the second partner."],
    ["NEET often tests graphs, ecological terms, age pyramids, population growth assumptions and +/−/0 interaction types."],
    ["How do exponential and logistic curves differ?","What is carrying capacity?","How do commensalism and mutualism differ."],
    ["Carrying capacity: population size the environment can support under stated conditions.","Conformer: organism whose internal state varies with external conditions.","Logistic growth: limited-resource model approaching carrying capacity."]);


  const mathematicsDifferentialEquations = pack("JEE Main", "Mathematics", "Differential Equations: Methods and Modelling",
    "A dedicated JEE chapter on order/degree, variable separation, first-order linear equations, initial conditions and checking solutions.",
    [
      "A differential equation relates an unknown function to one or more derivatives. Order is the highest derivative order; degree is the power of that derivative after the equation is made polynomial in derivatives, when degree is defined. General solutions include arbitrary constants; an initial condition selects a particular member of the family.",
      "For separable equations, rearrange so y-dependent expressions occur with dy and x-dependent expressions with dx, then integrate both sides. Before dividing by a function of y, check whether that function can be zero, because a constant solution may otherwise be lost.",
      "A first-order linear equation has form dy/dx+P(x)y=Q(x). The integrating factor exp(integral P(x)dx) converts the left side into the derivative of a product. Apply the initial condition after obtaining the general solution, and differentiate/substitute the candidate back to check it.",
      "Modelling questions require an explicit dependent variable, independent variable, domain and initial value. A mathematically valid solution may still be physically inappropriate outside its context or domain."
    ],
    ["Order = highest derivative order present","Separable: integral dy/h(y)=integral g(x)dx for dy/dx=g(x)h(y)","Linear integrating factor: IF=e^(integral P(x)dx)","d(IF*y)/dx=IF*Q(x) for y'+P(x)y=Q(x)"],
    "Solve dy/dx+y=2x: IF=e^x; d(e^x y)/dx=2xe^x; integrate e^x(2x-2)+C, so y=2x-2+Ce^(-x).",
    [
      {heading:"1. Classify before solving",body:"Write the differential equation clearly and identify the highest derivative. If degree is asked, ensure the equation is polynomial in derivatives after clearing relevant radicals/fractions; if the highest derivative occurs under a radical or in a non-polynomial form, degree may not be defined. A first-order equation can be linear or nonlinear, and order alone does not choose the method."},
      {heading:"2. Solve a separable equation",body:"For dy/dx=g(x)h(y), divide by h(y) only on intervals where h(y) is non-zero and integrate dy/h(y)=g(x)dx. Use substitution or partial fractions where required. Then solve for y if possible. Finally, substitute any constant solutions that were excluded by division and apply the initial condition."},
      {heading:"3. Use an integrating factor",body:"Standardise the equation as y'+P(x)y=Q(x). Calculate IF=e^(integral P dx), multiply all terms by IF and recognise the left side as d(IF*y)/dx. Integrate to get IF*y=integral(IF*Q dx)+C; divide by IF for y. An integrating factor computed from Q(x) instead of P(x) is a common error."},
      {heading:"4. Verify the solution",body:"Differentiate the proposed function, substitute the derivative and function into the original equation, and simplify both sides. Then apply the given initial condition. Verification is particularly valuable when an integration constant, logarithm or exponential has appeared; it catches sign mistakes and lost branches."}
    ],
    [
      {title:"Solve dy/dx=2xy",steps:["Separate: dy/y=2x dx, for y not zero.","Integrate: ln|y|=x^2+C.","Exponentiate and absorb the sign into the constant: y=Ce^(x^2).","Check y=0 is also a solution and is included by C=0."]},
      {title:"Solve y'-2y=4 with y(0)=1",steps:["P(x)=-2, so IF=e^(-2x).","Multiply: d(e^(-2x)y)/dx=4e^(-2x).","Integrate: e^(-2x)y=-2e^(-2x)+C; thus y=-2+Ce^(2x).","Use y(0)=1 to get C=3, so y=-2+3e^(2x)."]
    }],
    ["Dividing by h(y) and losing constant solutions.","Confusing order and degree.","Using Q(x) rather than P(x) in the integrating factor.","Applying initial conditions before solving for the general constant."],
    ["For a linear equation, write the standard form, integrating factor and product-derivative step explicitly. For separable equations, identify excluded zero-factor cases and verify the final answer in the original equation."],
    ["What is the difference between order and degree?","Why should constant solutions be checked after separation?","Which coefficient defines the integrating factor?"],
    ["Initial condition: given value used to determine a constant.","Separable equation: equation rearrangeable into independent x and y integrals.","Integrating factor: multiplier converting a linear ODE into a product derivative."]);
  mathematicsDifferentialEquations.practiceQuestions = [
    {question:"Solve dy/dx=3x^2 with y(0)=4.",answer:"y=x^3+4.",explanation:"Integrate to y=x^3+C. The initial condition gives C=4."},
    {question:"Find the order of y''+(y')^3+y=0.",answer:"Second order.",explanation:"The highest derivative is y'', so the order is two; the first derivative's power does not change the order."}
  ];

  const mathematicsDefiniteIntegrals = pack("JEE Main", "Mathematics", "Definite Integration: Properties, Symmetry and Area",
    "Use integral properties, substitutions, symmetry, limits and area interpretation to reduce lengthy JEE integrals.",
    [
      "A definite integral represents signed accumulation. Reversing limits changes the sign; adjacent intervals add; a zero-width interval has integral zero. These properties can simplify a problem before any antiderivative is calculated.",
      "For symmetric limits [-a,a], an even integrand gives twice the integral from 0 to a; an odd integrand integrates to zero. Verify the parity of the entire expression, not only one factor, and ensure the limits are symmetric.",
      "The substitution x=a+b-u can reflect an integral across a midpoint. For limits 0 to a, replacing x with a-x can show that the integral of f(x) equals that of f(a-x); adding forms may simplify expressions such as f(x)+f(a-x).",
      "Geometric area is non-negative while a definite integral is signed. Split at zeros/intersections; use upper-minus-lower for areas between curves. Infinite or improper integrals require convergence checks and are not solved merely by substituting an endpoint."
    ],
    ["Integral_a^b f(x)dx = -Integral_b^a f(x)dx","Integral_a^c f + Integral_c^b f = Integral_a^b f","Even f: Integral_-a^a f=2 Integral_0^a f; odd f: Integral_-a^a f=0","Area between curves=Integral_a^b (top-bottom) dx when ordering is fixed"],
    "If f(x)+f(2-x)=6, then integral_0^2 f(x)dx=6: substitution x->2-x shows the integral equals the reflected integral, and summing them gives 2I=12.",
    [
      {heading:"1. Simplify before integrating",body:"Check limit reversal, interval decomposition, substitution, periodicity and symmetry. If the integrand has both f(x) and f(a-x), adding the original and reflected expressions may remove complicated terms. Do not immediately integrate a difficult expression when the interval itself offers a simplification."},
      {heading:"2. Even/odd symmetry",body:"An even function satisfies f(-x)=f(x); an odd function satisfies f(-x)=-f(x). With symmetric limits, paired contributions cancel for odd functions and double for even functions. If the integrand is a product, evaluate parity of all factors together: even times odd is odd, while odd times odd is even."},
      {heading:"3. Area and sign changes",body:"For area under a curve, find where it crosses the x-axis; portions below the axis contribute negative signed integral and must be negated to obtain geometric area. For two curves, solve intersections and confirm which is above on each interval. A sketch can reveal where the integral must be split."},
      {heading:"4. Substitution and convergence",body:"When using substitution in a definite integral, transform both endpoints with the variable, or return to the original variable before evaluating. If the integrand is unbounded at an endpoint, treat the integral as a limit and test convergence rather than evaluating an undefined expression directly."}
    ],
    [
      {title:"Use symmetry for an odd integral",steps:["Evaluate parity of f(x)=x^3 cos(x^2): x^3 is odd and cos(x^2) is even, so the product is odd.","The limits are symmetric [-a,a].","Therefore the integral is zero without finding an antiderivative.","Check both the function parity and limit symmetry before applying this shortcut."]},
      {title:"Area between intersecting curves",steps:["Solve y=x and y=x^2 intersections: x=0 and x=1.","On [0,1], x is above x^2.","Area=integral_0^1(x-x^2)dx=[x^2/2-x^3/3]_0^1=1/6.","If the curves change order in a larger interval, split at each crossing."]
    }],
    ["Using odd/even shortcuts when the limits are not symmetric.","Treating a negative signed integral as negative geometric area.","Using top-minus-bottom without checking which curve is higher.","Transforming the integrand but not the limits in a definite substitution."],
    ["JEE integrals frequently reward a property-based reduction. Check symmetry/reflection and interval structure first, then compute only what remains."],
    ["What is the integral of an odd function over symmetric limits?","Why can area require splitting even when a definite integral does not?","What must change in a substitution of a definite integral?"],
    ["Even function: f(-x)=f(x).","Odd function: f(-x)=-f(x).","Improper integral: integral defined through a limiting process because of an unbounded endpoint/infinite interval."]);
  mathematicsDefiniteIntegrals.practiceQuestions = [
    {question:"Evaluate integral from -3 to 3 of x^5 dx.",answer:"0.",explanation:"x^5 is odd and the integration limits are symmetric."},
    {question:"If integral_0^4 f(x)dx=7, what is integral_4^0 f(x)dx?",answer:"-7.",explanation:"Reversing the limits reverses the sign."}
  ];

  const mathematicsConicsJEE = pack("JEE Main", "Mathematics", "Conic Sections: Focus, Directrix, Tangent and Chord",
    "A JEE-oriented reference to circle/parabola/ellipse/hyperbola parameters, focal properties, tangents and common coordinate traps.",
    [
      "Conics can be defined by a fixed focus and directrix with constant distance ratio e. Circle, ellipse, parabola and hyperbola correspond to distinct eccentricity cases and produce different geometric features. Translate the definition into a standard equation only after identifying the coordinate orientation.",
      "For a parabola y^2=4ax, the axis is horizontal, the vertex is at origin, focus is (a,0), directrix x=-a and latus rectum length is 4a. For x^2=4ay, the axis is vertical. Comparing the squared variable and sign with the standard form avoids swapping x/y coordinates.",
      "In an ellipse x^2/a^2+y^2/b^2=1 with a>b>0, c^2=a^2-b^2, foci are (±c,0) and eccentricity c/a. For a horizontal hyperbola x^2/a^2-y^2/b^2=1, c^2=a^2+b^2 and asymptotes are y=±(b/a)x. The formulas change with orientation.",
      "Tangents and normals express local geometry. For a circle, a tangent is perpendicular to the radius at contact. For standard conics, tangent equations can be derived from the curve condition and slope/differentiation or from the recognised standard form; always confirm the point lies on the conic."
    ],
    ["Parabola y^2=4ax: focus (a,0), directrix x=-a, latus rectum 4a","Ellipse: c^2=a^2-b^2, e=c/a for a>=b","Hyperbola: c^2=a^2+b^2, asymptotes y=±(b/a)x for horizontal form","Circle: (x-h)^2+(y-k)^2=r^2; tangent at (x1,y1): (x1-h)(x-h)+(y1-k)(y-k)=r^2"],
    "For y^2=16x, compare y^2=4ax, so a=4; focus=(4,0), directrix x=-4 and latus rectum length=16.",
    [
      {heading:"1. Read orientation first",body:"Inspect which variable is squared in a parabola and the sign pattern between squared terms in an ellipse/hyperbola. The centre is explicit for central conics, while a parabola has a vertex. If the equation is translated, complete squares or shift coordinates before applying standard formulae."},
      {heading:"2. Recover focal parameters",body:"For ellipses, the major-axis denominator is larger and c^2=a^2-b^2. For hyperbolas, the positive term identifies the transverse-axis direction and c^2=a^2+b^2. Eccentricity is dimensionless; keep a,b,c as lengths and avoid mixing radius, semi-axis and full-axis lengths."},
      {heading:"3. Tangent construction",body:"A tangent can be found using the standard tangent form for the conic, or by differentiating to obtain the tangent slope at a point where the derivative exists. Confirm the given point satisfies the conic equation. If a line is described as tangent, a repeated intersection/root or a zero-discriminant condition may be the fastest route."},
      {heading:"4. Use geometry to verify",body:"Sketch the centre/vertex, focal points, axis and asymptotes. A proposed focus should lie along the symmetry axis, and the directrix should be perpendicular to that axis. For a circle, the tangent-radius right angle provides a direct proof/check."}
    ],
    [
      {title:"Find ellipse foci and eccentricity",steps:["For x^2/25+y^2/9=1, a=5 and b=3.","c=sqrt(a^2-b^2)=sqrt(25-9)=4.","Foci are (±4,0), and e=c/a=4/5.","Check that foci lie along the major axis."]},
      {title:"Tangent to a circle",steps:["For x^2+y^2=25 at point (3,4), first check 3^2+4^2=25.","Use xx1+yy1=r^2 for the circle centred at origin.","The tangent is 3x+4y=25.","The point satisfies both the circle and the tangent equation."]
    }],
    ["Using the ellipse relation for a hyperbola.","Swapping focus/directrix orientation for vertical parabola.","Forgetting to verify the point lies on the conic.","Confusing semi-major axis with full major-axis length."],
    ["JEE questions commonly combine conic equations with focus/directrix, eccentricity, tangent slopes, chords and line-intersection conditions. Draw the axis and mark parameters before substitution."],
    ["How does c^2 differ between ellipse and hyperbola?","How can you check that a line is tangent to a conic?","What is the eccentricity of a parabola?"],
    ["Eccentricity: focus-distance/directrix-distance ratio.","Latus rectum: chord through a focus parallel to the directrix.","Asymptote: line approached by a curve at large distance."]);
  mathematicsConicsJEE.practiceQuestions = [
    {question:"For x^2/36+y^2/20=1, find c.",answer:"4.",explanation:"c^2=36-20=16, so c=4."},
    {question:"What is the focus of x^2=20y?",answer:"(0,5).",explanation:"Compare with x^2=4ay; a=5 and the axis is vertical."}
  ];

  const mathematicsCombinatoricsJEE = pack("JEE Main", "Mathematics", "Permutations, Combinations and Binomial Coefficients",
    "JEE problem-solving for ordered selections, arrangements with restrictions, complementary counting, repeated objects and coefficient extraction.",
    [
      "Define when two outcomes count as different before selecting a formula. Roles, seat positions and code positions make order important; an unlabelled committee usually does not. Fundamental counting multiplies independent stages, while mutually exclusive cases are added. A problem may combine both operations across several cases.",
      "For n distinct objects selected/arranged r at a time, nPr=n!/(n-r)! and nCr=n!/[r!(n-r)!]. Repeated identical objects reduce the number of distinct arrangements because interchanging identical copies does not create a new order. For restrictions, placing constrained objects first or subtracting forbidden arrangements from total can be simpler than direct enumeration.",
      "Binomial expansion uses T_(r+1)=nCr a^(n-r)b^r. To identify the coefficient of x^k, track the powers of x in both a and b, solve for the index and check its allowed range. Coefficients are symmetric, and the sum of coefficients follows by substituting appropriate values into the expansion.",
      "Complementary counting is useful for phrases such as at least one, no two adjacent, or not all. Define the forbidden/allowed event clearly, count the easier side, and subtract from the total only if the sample space is exhaustive and the events are counted consistently."
    ],
    ["nPr=n!/(n-r)!","nCr=n!/[r!(n-r)!]","nPr=nCr*r!","T_(r+1)=nCr a^(n-r)b^r","Sum of coefficients in (a+b)^n = 2^n by setting a=b=1"],
    "Coefficient of x^3 in (1+2x)^5 is 5C3(2^3)=10x8=80.",
    [
      {heading:"1. Decide order and repetition",body:"Write one sentence explaining what makes outcomes distinct. If positions/roles differ, arrangements are ordered. If only group membership matters, use combinations. Repeated objects require adjustment for identical copies; repeated choice with replacement is a different model again and should not be confused with identical items."},
      {heading:"2. Restrictions and complementary counting",body:"For restrictions such as vowels together or two people not adjacent, count an easier arrangement and then place the constrained group, or count the forbidden cases and subtract. Use the complement only after confirming the cases partition the full sample space. If cases overlap, use inclusion-exclusion rather than plain subtraction."},
      {heading:"3. Binomial general term",body:"Set up T_(r+1) before plugging in values. Remember r starts at zero for the first term. If b contains x, its exponent contributes to the target power. For a term independent of x, set the total exponent to zero and check whether the resulting index is an integer within 0..n."},
      {heading:"4. Sanity checks",body:"The total number of r-element subsets is at most the number of ordered selections; nCr=nC(n-r). Coefficients are non-negative integers for non-negative integer n. A probability calculated from a combinatorial count should remain in [0,1], and a final count should be an integer."}
    ],
    [
      {title:"Arrange letters with repeats",steps:["Count all letters, then identify repeated letters.","Start with n! arrangements of labelled positions.","Divide by the factorial of each identical-letter count.","If additional restrictions exist, handle them after obtaining a correct unrestricted count."]},
      {title:"Find a binomial coefficient",steps:["Write T_(r+1)=nCr a^(n-r)b^r.","Collect every factor that contains x and form the full exponent.","Set the exponent equal to the requested power and solve for r.","Substitute that integer index and simplify the coefficient."]
    }],
    ["Using nPr when order does not matter.","Forgetting to divide by repeated-object factorials.","Using the wrong zero-based index in a general term.","Subtracting forbidden cases that overlap or do not cover the intended complement."],
    ["Write the outcome model and count logic before calculations. In binomial problems, make the exponent match explicit so the coefficient selection is auditable."],
    ["When should you use combinations?","Why is the first binomial term indexed r=0?","When is complementary counting more efficient?"],
    ["Permutation: ordered arrangement.","Combination: unordered selection.","Complementary counting: count total outcomes minus forbidden outcomes."]);
  mathematicsCombinatoricsJEE.practiceQuestions = [
    {question:"How many 4-letter arrangements can be made from 7 distinct letters without repetition?",answer:"840.",explanation:"7P4=7x6x5x4=840."},
    {question:"Find the coefficient of x^2 in (3+x)^4.",answer:"54.",explanation:"The x^2 term uses r=2: 4C2 3^2 x^2=6x9x^2."}
  ];

  const mathematicsProbabilityJEE = pack("JEE Main", "Mathematics", "Conditional Probability, Bayes Theorem and Independence",
    "Use a clearly defined sample space and conditional structure to distinguish independent events, dependent draws, total probability and Bayes updates.",
    [
      "Conditional probability restricts attention to outcomes where B has occurred: P(A|B)=P(A intersection B)/P(B). It is defined when P(B)>0. The condition changes the relevant denominator/sample space; it is not a swap of the A and B labels.",
      "Independence means that learning B does not change P(A), so P(A intersection B)=P(A)P(B). Mutually exclusive positive-probability events cannot be independent because their intersection is zero while the product is positive. For sequential draws without replacement, independence usually fails because the first outcome changes the second draw's composition.",
      "If B1,...,Bn partition the possible causes, total probability sums P(A|Bi)P(Bi). Bayes theorem reverses the direction of conditioning and updates the probability of a cause after observing evidence. Enumerate the cause groups and check their prior probabilities sum to one.",
      "Tree diagrams or two-way tables reduce mistakes: write branch probabilities conditional on the path so far, multiply along a path, then add disjoint paths that reach the target event. Verify the final probability lies between zero and one."
    ],
    ["P(A|B)=P(A intersection B)/P(B), P(B)>0","Independent: P(A intersection B)=P(A)P(B)","P(A)=sum_i P(A|B_i)P(B_i) for a partition","Bayes: P(B_j|A)=P(A|B_j)P(B_j)/sum_i P(A|B_i)P(B_i)"],
    "A test is positive 90% of the time for a condition and 5% of the time for people without it. If prevalence is 1%, P(condition|positive)=0.9(0.01)/(0.9(0.01)+0.05(0.99))≈15.4%.",
    [
      {heading:"1. Conditional sample spaces",body:"When B is known to occur, eliminate all outcomes outside B. Within the reduced space, identify how many also satisfy A. This gives P(A|B). In a discrete equally likely model, the count version is n(A intersection B)/n(B); in general probability, use the ratio of probabilities."},
      {heading:"2. Independence vs mutual exclusion",body:"Independence is about whether one event changes the probability of the other. Mutual exclusion is about whether they can occur together. They are not synonyms. With positive probabilities, disjoint events are dependent, since observing one rules the other out."},
      {heading:"3. Total probability",body:"Split all possibilities into mutually exclusive and collectively exhaustive cases such as different factories, bags or population groups. Compute the probability of the target event within each case and weight it by the probability of that case. The sum gives the overall target probability."},
      {heading:"4. Bayes update",body:"Bayes theorem calculates the probability of a cause after seeing evidence. Numerator is the probability of the evidence under that cause times the cause's prior probability. Denominator adds the evidence probability across all possible causes. The base rate matters: a highly accurate test can still produce many false positives when the condition is rare."}
    ],
    [
      {title:"Draw without replacement",steps:["A box contains 3 red and 2 blue balls; two are drawn without replacement.","P(first red)=3/5.","Given first red, only 2 red and 2 blue remain, so P(second red|first red)=2/4.","Joint probability of two red=3/5 x 2/4=3/10; the draws are not independent."]},
      {title:"Use Bayes with two sources",steps:["List prior probability of each source and likelihood of the observation from each source.","Multiply each likelihood by its prior to get joint contributions.","Add the contributions to get total probability of the observation.","Divide the target source's contribution by the total observation probability."]
    }],
    ["Confusing P(A|B) and P(B|A).","Assuming draws without replacement are independent.","Forgetting prior probability in Bayes theorem.","Ignoring rare-event base rates when interpreting test results."],
    ["For JEE, draw a probability tree and annotate conditional branches. In Bayes questions, keep priors, likelihoods and posterior probabilities in separate rows."],
    ["What makes events independent?","Why aren't mutually exclusive positive-probability events independent?","What denominator is used in Bayes theorem?"],
    ["Conditional probability: probability restricted to a given event.","Likelihood: probability of observed evidence under a specified cause/model.","Prior: probability of a cause before the new evidence." ]);
  mathematicsProbabilityJEE.practiceQuestions = [
    {question:"If P(A intersection B)=0.12 and P(B)=0.3, find P(A|B).",answer:"0.4.",explanation="P(A|B)=0.12/0.3=0.4."},
    {question:"Can two disjoint events with non-zero probabilities be independent?",answer:"No.",explanation:"Their intersection probability is zero, but the product of their positive probabilities is non-zero."}
  ];

  const mathematicsLimitsJEE = pack("JEE Main", "Mathematics", "Limits, Continuity and Differentiability: JEE Techniques",
    "A focused guide to indeterminate forms, algebraic transformations, standard limits, continuity of piecewise functions and derivative rules.",
    [
      "Start with direct substitution. If the result is 0/0, transform the expression by factoring, rationalising, a standard identity, substitution or a known limit. Infinity/infinity requires comparing dominant growth rather than direct substitution. An indeterminate form is a signal for further work, not an answer.",
      "Standard trigonometric limits assume radians. Identities such as 1-cos x=2 sin^2(x/2) convert cosine expressions to a standard form. For exponential/logarithmic limits, apply the formula appropriate to the exact expression and check its domain. Keep higher-order terms only when needed by the requested limit.",
      "Continuity at a requires equal left/right limits that also equal f(a). For piecewise functions, solve the parameter using both one-sided limits and the function value. Differentiability requires the left/right derivatives to match; corners such as |x| at zero are continuous but not differentiable.",
      "Derivative rules include product, quotient and chain rules. The chain rule is especially important for nested functions; implicit differentiation treats y as a function of x. For an inverse function, differentiability and non-zero derivative conditions matter where the inverse-derivative formula is applied."
    ],
    ["lim(x->0) sin x/x=1 (radians)","lim(x->0) (1-cos x)/x^2=1/2 (radians)","Continuity at a: lim(x->a-)f = lim(x->a+)f = f(a)","Chain rule: d f(g(x))/dx=f'(g(x))g'(x)"],
    "Evaluate lim(x->0) (1-cos 2x)/x^2: use 1-cos 2x=2sin^2 x, so the expression is 2(sin x/x)^2 and the limit is 2.",
    [
      {heading:"1. Factor and cancel",body:"If polynomial numerator and denominator both vanish at a, factor out x-a if possible. Cancellation is valid for x not equal a around the limit point; the simplified expression may have a different value at a and still the same limit. Always return to the limit after simplification."},
      {heading:"2. Rationalise radical expressions",body:"Multiply by the conjugate to turn a difference of square roots into a difference of squares. Simplify common factors and evaluate the limit only after the indeterminate form has been removed. Check denominator non-zero conditions and do not cancel terms that are not factors."},
      {heading:"3. Continuity and differentiability parameters",body:"For a piecewise definition at x=a, compute left limit, right limit and f(a) separately. Solve equality conditions for the unknown parameter. For differentiability, compute left and right derivatives or use the definition; satisfying continuity alone is not enough."},
      {heading:"4. Derivative discipline",body:"For a composite function, write outer and inner functions explicitly. Product and quotient rules need all changing factors; a common mistake is differentiating only the numerator/factor. Implicit differentiation requires dy/dx for every occurrence of y."}
    ],
    [
      {title:"Rationalise a square-root limit",steps:["For lim(x->0)(sqrt(1+x)-1)/x, direct substitution gives 0/0.","Multiply numerator and denominator by sqrt(1+x)+1.","Numerator becomes x; cancel x for x!=0.","Limit is 1/2 after substituting x=0 in the simplified denominator."]},
      {title:"Test differentiability of |x| at zero",steps:["For x>0, |x|=x, so right derivative at zero is 1.","For x<0, |x|=-x, so left derivative at zero is -1.","The one-sided derivatives differ; the derivative does not exist at zero.","The function is nevertheless continuous at zero because both sides and f(0) equal zero."]
    }],
    ["Treating 0/0 as zero.","Using degrees in standard trigonometric limit formulae.","Assuming continuity guarantees differentiability.","Forgetting the inner derivative in chain rule."],
    ["Choose the transformation based on the indeterminate form. For piecewise continuity/differentiability, write left limit, right limit and function value on separate lines."],
    ["What does 0/0 indicate?","Why is |x| not differentiable at zero?","What condition is needed for continuity at a?"],
    ["Indeterminate form: a form requiring further limit analysis.","One-sided limit: value approached from one side.","Derivative: instantaneous rate/tangent slope." ]);
  mathematicsLimitsJEE.practiceQuestions = [
    {question:"Evaluate lim(x->0) sin(5x)/(2x).",answer:"5/2.",explanation="Rewrite as (5/2) times sin(5x)/(5x), whose limit is 1."},
    {question:"Is f(x)=x^2 continuous but not differentiable at x=1?",answer:"No; it is both continuous and differentiable.",explanation,"Polynomials are continuous and differentiable for every real x; derivative is 2x."}
  ];

  const mathematics3DLinesJEE = pack("JEE Main", "Mathematics", "Three-Dimensional Geometry: Lines, Planes and Shortest Distance",
    "A deeper JEE reference to vector/Cartesian equations, angles between lines/planes, point-plane distance and skew-line separation.",
    [
      "A line in three dimensions requires a point and a non-zero direction vector. Parametric form is robust even when a direction component is zero; symmetric form divides coordinate differences by direction ratios and must be adapted where a component is zero. Two lines intersect only if one common pair of parameters satisfies all three coordinate equations.",
      "A plane ax+by+cz+d=0 has normal vector (a,b,c). The angle between planes can be found through their normals; the angle between a line and a plane is complementary to the angle between the line direction and plane normal. Use absolute value if the problem requests the acute angle.",
      "The shortest distance from point P to a plane uses the absolute plane expression divided by normal magnitude. For two skew lines, the common perpendicular direction is the cross product of their direction vectors; the distance is the projection of the displacement between a point on each line onto that common perpendicular.",
      "Parallel, intersecting and skew are distinct in 3D. Non-parallel lines need not intersect: solve for all coordinates, not just x and y. Parallel-line distance can be found from the cross-product-based point-to-line distance relation, while intersecting lines have zero distance."
    ],
    ["Line: r=a+lambda d","Plane normal n=(A,B,C) for Ax+By+Cz+D=0","Point-plane distance=|Ax0+By0+Cz0+D|/sqrt(A^2+B^2+C^2)","Skew-line distance=| (b-a) dot (d1 x d2) | / |d1 x d2| for non-parallel directions"],
    "For plane 2x-y+2z-5=0 and point (1,2,3), distance=|2-2+6-5|/sqrt(4+1+4)=1/3.",
    [
      {heading:"1. Line equations and intersection",body:"For each line, write r=a+lambda d, where a is a position vector and d is a direction vector. Equating two line equations yields three scalar equations in two parameters. An intersection exists only if the same parameter pair solves all three; failure may mean the lines are parallel or skew, so check direction vectors before classifying."},
      {heading:"2. Angles and normals",body:"Plane coefficients give a normal vector directly. Angle between two lines uses their direction vectors; angle between two planes uses their normals. To find the line-plane angle, take the complementary relation because the plane's normal is perpendicular to the plane. Use dot products with correct magnitudes and ensure inverse cosine arguments lie in [-1,1]."},
      {heading:"3. Point-plane distance",body:"The normal direction is perpendicular to every line in the plane. The shortest point-plane segment lies along that normal. The distance formula evaluates the plane expression at the point and normalises by normal magnitude; absolute value makes distance non-negative regardless of which side of the plane contains the point."},
      {heading:"4. Skew-line distance",body:"If directions d1,d2 are not parallel, their cross product is perpendicular to both, along the common-normal direction. Let b-a be the vector joining any point on line 1 to any point on line 2. Project this displacement onto the unit cross-product direction using a dot product and absolute value. The formula fails for parallel directions because cross-product magnitude is zero; use a parallel-line formula instead."}
    ],
    [
      {title:"Check if two lines intersect",steps:["Write both lines in parametric form.","Equate their x coordinates and solve for parameter relation.","Substitute that relation into y and z equations.","Only if one parameter pair satisfies all three does an intersection exist; otherwise distinguish parallel from skew using direction vectors."]},
      {title:"Shortest distance between skew lines",steps:["Extract direction vectors d1 and d2 and points a,b from the lines.","Compute d1 x d2; if it is non-zero, the directions are not parallel.","Project b-a onto d1 x d2 using the scalar triple product and divide by its magnitude.","Take absolute value to obtain a non-negative length."]
    }],
    ["Classifying lines using only two coordinate equations.","Confusing line-plane angle with line-normal angle.","Forgetting absolute value in distance.","Using skew-line formula when directions are parallel."],
    ["In 3D questions, explicitly state position and direction vectors. For line intersection, check all three coordinates; for shortest distance, identify the common-normal direction."],
    ["What vector is normal to a plane?","Why do two non-parallel lines in 3D sometimes fail to intersect?","What does the scalar triple product measure in skew-line distance?"],
    ["Direction vector: parallel to a line.","Normal vector: perpendicular to a plane.","Skew lines: non-parallel, non-intersecting lines." ]);
  mathematics3DLinesJEE.practiceQuestions = [
    {question:"Find distance from (1,2,3) to plane x+2y+2z-9=0.",answer:"2/3 units.",explanation:"The plane-expression value is 1+4+6-9=2 and the normal magnitude is sqrt(1+4+4)=3, so distance=2/3."},
    {question:"What condition shows two 3D lines are parallel?",answer:"Their direction vectors are scalar multiples.",explanation:"Parallel directions are linearly dependent; this alone does not make the two lines coincide."}
  ];

  const mathematicsSeriesJEE = pack("JEE Main", "Mathematics", "Sequences and Series: Advanced JEE Patterns",
    "Use recurrence/partial sums, AP/GP identities, telescoping, arithmetic-geometric patterns and convergence conditions.",
    [
      "Given an explicit nth term, substitute n to find a term; given partial sums S_n, recover a_n by a_n=S_n-S_(n-1) for n>=2. A common error is treating S_n as a_n or forgetting the shifted index in S_(n-1).",
      "Arithmetic-geometric sequences combine a linear term with a geometric factor, for example a+(n-1)d multiplied by r^(n-1). The sum can be simplified by writing the sum and r times the sum and subtracting to cancel most terms. Check r=1 separately and preserve finite limits.",
      "Telescoping sums simplify when terms are differences such as 1/k-1/(k+1), because most interior terms cancel after expansion. Partial fractions can reveal this form. Never cancel across a sum before writing the telescoping terms explicitly.",
      "An infinite geometric series converges only when |r|<1. Some other series require additional tests; do not use a geometric-series formula for a generic infinite sum without proving or identifying its form. In JEE problems, the condition on r or n often decides which expression is valid."
    ],
    ["AP nth term: a_n=a+(n-1)d","GP nth term: a_n=ar^(n-1)","Finite GP: S_n=a(r^n-1)/(r-1), r!=1; if r=1 then S_n=na","Infinite GP: S=a/(1-r), only for |r|<1","If S_n known, a_n=S_n-S_(n-1) for n>=2"],
    "Sum S=sum(k=1 to n)(1/k-1/(k+1))=1-1/(n+1)=n/(n+1), because intermediate fractions cancel.",
    [
      {heading:"1. Recover term from partial sum",body:"When S_n is supplied, shift n to n-1 carefully and subtract. Expand the two expressions only as much as required. This difference can turn a quadratic/cubic sum expression into a simpler nth-term pattern. Check n=1 separately if the definition of S_0 is not stated."},
      {heading:"2. Telescoping sums",body:"Rewrite a term into partial fractions or a difference of adjacent expressions. Expand first several terms to see the cancellation pattern, then keep the first and last surviving terms. The finite limit n matters: a telescoping result often leaves an end term depending on n."},
      {heading:"3. Arithmetic-geometric sums",body:"For sums involving k r^(k-1), let S be the target sum, multiply the entire sum by r and align terms. Subtract to cancel like powers; solve for S. Keep the endpoints and power indices precise. If r=1, the algebraic division by 1-r is invalid and the sum must be evaluated as the AP/natural-number sum."},
      {heading:"4. Convergence and sanity checks",body:"The infinite geometric formula needs |r|<1 so r^n approaches zero. A finite sum has no such convergence requirement. Check that a positive-term sum remains non-negative and grows consistently with n; an answer that becomes negative for positive terms signals an algebra/indexing error."}
    ],
    [
      {title:"Recover the nth term",steps:["If S_n=n(n+1), compute S_(n-1)=(n-1)n.","a_n=S_n-S_(n-1)=n(n+1)-n(n-1)=2n.","Check n=1 gives a_1=2, matching S_1=2."]},
      {title:"Sum a telescoping sequence",steps:["Use 1/[k(k+1)]=1/k-1/(k+1).","Sum from k=1 to n: (1-1/2)+(1/2-1/3)+...+(1/n-1/(n+1)).","Interior terms cancel; result is 1-1/(n+1)=n/(n+1).","The form is valid for positive integer n."]
    }],
    ["Confusing the nth term with its partial sum.","Dropping the first or last term in telescoping cancellation.","Using infinite GP formula for |r|>=1.","Dividing by 1-r when r=1."],
    ["For a sequence/series question, first classify AP/GP/telescoping/recurrence. Expand a few terms to expose cancellation and check special parameter values before simplifying."],
    ["How do partial sums recover terms?","What condition is needed for an infinite GP?","Why should r=1 be handled separately?"],
    ["Partial sum: sum of a finite initial set of terms.","Telescoping: cancellation of adjacent terms in a sum.","Convergence: existence of a finite limit for partial sums." ]);
  mathematicsSeriesJEE.practiceQuestions = [
    {question:"Find S_n=sum(k=1 to n) 1/[k(k+1)].",answer:"n/(n+1).",explanation:"Rewrite each term as 1/k-1/(k+1); all interior terms cancel."},
    {question:"For which r does an infinite GP converge?",answer:"|r|<1.",explanation:"Only then does r^n approach zero, allowing the finite-sum limit to exist."}
  ];

  const mathematicsMatricesJEE = pack("JEE Main", "Mathematics", "Matrices and Determinants: Inverse, Rank and Systems",
    "A JEE-focused matrix toolkit for dimensions, elementary row operations, determinants, inverse, singular systems and verification.",
    [
      "Dimensions must be checked before every product. If A is m x n and B is n x p, AB exists with order m x p. Multiplication is not commutative in general. Matrix identities must preserve order; for example, multiplying AX=B by A^-1 on the left gives X=A^-1B when A is square and invertible.",
      "Determinant row operations have different effects. Swapping rows reverses sign; multiplying a row by a non-zero scalar multiplies determinant; adding a multiple of one row to another preserves determinant. Use operations that create zeros or triangular form, while tracking the determinant effect.",
      "A non-zero determinant for a square coefficient matrix guarantees a unique solution to AX=B. If determinant is zero, the matrix is singular; the system may be inconsistent or have infinitely many solutions, so examine augmented consistency/rank rather than guessing. Verify any computed solution in the original equations.",
      "Inverse and determinant methods are useful but can be algebraically expensive. For a small system, elimination may be faster. In exam work, state the condition for the method you choose, keep arithmetic organised and confirm the result."
    ],
    ["For 2x2 A=[[a,b],[c,d]], det(A)=ad-bc","A^-1=adj(A)/det(A), if det(A)!=0","AX=B has unique solution X=A^-1B when A is invertible","(AB)^T=B^T A^T","Row swap reverses determinant sign; row addition preserves it"],
    "For A=[[2,1],[5,3]], det=1 and A^-1=[[3,-1],[-5,2]]. This inverse can be checked by multiplying A A^-1=I.",
    [
      {heading:"1. Multiply only compatible dimensions",body:"Check inner dimensions before multiplication. Each output entry is a dot product of a row from the left matrix and a column from the right matrix. Avoid applying scalar commutativity: AB and BA can be different or one may be undefined."},
      {heading:"2. Simplify determinants using operations",body:"Choose a row/column with zeros or create zeros by adding/subtracting multiples of other rows. Track row swaps and row scaling. A triangular determinant is the product of diagonal entries. If a row/column is a multiple of another, determinant is zero."},
      {heading:"3. Solve a matrix equation",body:"Before using an inverse, calculate or establish det(A)!=0. If A is singular, the inverse formula is invalid. For a singular system, inspect the original equations, row-reduced form or ranks to determine consistency. A zero determinant does not itself tell the full number of solutions."},
      {heading:"4. Verify the result",body:"Multiply A by the proposed inverse to check identity, or substitute a solution vector in AX=B. Dimensions should match at each operation. If numerical fractions are involved, keep exact fractions as long as possible to avoid rounding-induced mistakes."}
    ],
    [
      {title:"Classify a system from determinant",steps:["Write the coefficient matrix A.","Compute det(A). If non-zero, A is invertible and the system has a unique solution.","If det(A)=0, the inverse/Cramer's method cannot be applied directly.","Inspect consistency separately: a singular system can have no solution or infinitely many solutions."]},
      {title:"Use a row operation",steps:["For a 3x3 determinant, choose a row with a useful entry pattern.","Apply R2 <- R2-kR1 to create a zero; this operation preserves determinant.","Expand along a row/column with zeros or continue to triangular form.","If you swap rows or multiply a row, track the determinant change."]
    }],
    ["Applying inverse formula to a singular matrix.","Assuming det(A)=0 means no solution in every case.","Ignoring determinant changes after row swaps/scaling.","Multiplying in the wrong order in a matrix equation."],
    ["For every method, write its validity condition first. In a singular system, continue to consistency analysis instead of stopping at determinant zero."],
    ["What does det(A)!=0 guarantee for AX=B?","Which row operation reverses determinant sign?","Why is matrix multiplication order important?"],
    ["Singular matrix: square matrix with zero determinant.","Rank: dimension of row/column space.","Adjugate: transpose of cofactor matrix." ]);
  mathematicsMatricesJEE.practiceQuestions = [
    {question:"Can a 2x2 matrix with determinant zero have an inverse?",answer:"No.",explanation:"Invertibility requires a non-zero determinant."},
    {question:"If det(A) is non-zero for square A, how many solutions does AX=B have?",answer:"Exactly one for any compatible B.",explanation:"A is invertible, so X=A^-1B is uniquely determined."}
  ];

  const mathematicsTrigJEE = pack("JEE Main", "Mathematics", "Trigonometric Equations and Inverse Trigonometric Functions",
    "Solve periodic equations completely, simplify inverse-trigonometric expressions and respect principal ranges and domain restrictions.",
    [
      "A trigonometric equation generally has multiple solutions due to periodicity. For sin x=c or cos x=c, first determine the reference angle and signs in each quadrant, then include integer periods and restrict to the required interval. Do not return only one principal solution when all solutions are requested.",
      "Inverse trigonometric functions return principal values from specified ranges. Therefore arcsin(sin x) is not always x; it reduces the angle to the arcsin principal range. Compositions depend on the interval/range of the inner function and must be checked at endpoints.",
      "Identity transformations can simplify equations, but dividing by sin x, cos x or another expression may remove solutions where the divisor is zero. Squaring both sides can introduce extraneous solutions. Substitute final candidates in the original equation.",
      "The unit circle is a reliable way to reason about signs and angle ranges. Use one angle unit consistently; standard limits use radians, while many trigonometry exercises state degrees."
    ],
    ["sin^2 x+cos^2 x=1","sin x=sin alpha -> x=n pi+(-1)^n alpha for integer n (radian form)","tan x has period pi; sin/cos have period 2pi","Principal arcsin range [-pi/2,pi/2] and arccos range [0,pi] in standard conventions"],
    "Solve sin x=1/2 on [0,2pi): reference angle pi/6; sine is positive in quadrants I and II, so x=pi/6 and 5pi/6.",
    [
      {heading:"1. Solve by quadrant",body:"Find the reference angle for the absolute trig ratio, then use the sign of the requested function to decide the allowed quadrants. Include all solutions in the interval and verify endpoints. When the requested function is tangent, remember its period is pi rather than 2pi."},
      {heading:"2. Keep principal values separate",body:"arcsin, arccos and arctan map a ratio to an angle in a chosen principal interval. If the input angle is outside that range, reduce it using periodicity/symmetry before evaluating. A formal cancellation of inverse and direct trigonometric functions may fail outside the principal interval."},
      {heading:"3. Preserve lost cases",body:"If you divide by a trigonometric factor, separately check where it equals zero. If you square an equation, substitute candidates back into the original equation because squaring can erase sign information. State denominator restrictions in any identity proof."},
      {heading:"4. Exact form and degree/radian consistency",body:"Keep exact angles and radicals where possible. Confirm all angles are in the unit specified by the question. Use a unit-circle sketch for signs rather than relying on a memorised pattern without context."}
    ],
    [
      {title:"Solve cos x= -sqrt(3)/2 on [0,2pi)",steps:["The reference angle is pi/6.","Cosine is negative in quadrants II and III.","Solutions are 5pi/6 and 7pi/6.","Both satisfy the original equation and interval."]},
      {title:"Simplify arcsin(sin(5pi/6))",steps:["5pi/6 lies outside the principal arcsin interval [-pi/2,pi/2].","Its sine is 1/2.","The principal angle in the arcsin range with sine 1/2 is pi/6.","Thus arcsin(sin(5pi/6))=pi/6, not 5pi/6."]
    }],
    ["Giving one solution for a periodic equation.","Assuming arcsin(sin x)=x for all real x.","Dividing away zero cases.","Mixing degrees and radians."],
    ["In equations, write the reference angle, quadrants and complete solution set. In inverse-trig questions, explicitly compare the angle with the principal range."],
    ["What is the period of tan x?","Why can squaring create extraneous solutions?","What is the principal range of arccos?"],
    ["Reference angle: acute angle associated with a trig ratio.","Principal value: selected inverse-function output.","Period: smallest positive interval over which a function repeats." ]);
  mathematicsTrigJEE.practiceQuestions = [
    {question:"Solve cos x=1/2 on [0,2pi).",answer:"pi/3 and 5pi/3.",explanation:"Cosine is positive in quadrants I and IV with reference angle pi/3."},
    {question:"Is arccos(cos(5pi/3)) equal to 5pi/3?",answer:"No; it equals pi/3.",explanation:"arccos returns a principal value in [0,pi], and cos(5pi/3)=1/2."}
  ];

  const mathematicsApplicationsDerivatives = pack("JEE Main", "Mathematics", "Applications of Derivatives: Monotonicity, Tangents and Optimisation",
    "Use derivative signs, critical points, tangent/normal equations and boundary checks to solve JEE rate and optimisation problems.",
    [
      "A derivative gives the instantaneous rate of change and tangent slope. The tangent at x=a is y-f(a)=f'(a)(x-a), while the normal is perpendicular to the tangent when a finite slope exists. A horizontal tangent has a vertical normal, which should be expressed as x=a rather than assigned an infinite numeric slope.",
      "Monotonicity follows from the sign of f'. Find domain points where f'=0 or is undefined, then create a sign chart. A stationary point is only a candidate for an extremum; a derivative may keep the same sign on both sides as with x^3 at zero.",
      "Optimisation requires an objective function and feasible domain. Use constraints to express all quantities in one variable, identify interior critical points and compare function values at boundaries for absolute maxima/minima on a closed interval. Check physical restrictions such as positive lengths and exclude points where the model is undefined.",
      "For related-rate problems, differentiate the relation linking changing quantities with respect to time before substituting the instant-specific values. Distinguish the derivative dV/dt from the derivative with respect to a dimensionless parameter or spatial variable."
    ],
    ["Tangent: y-f(a)=f'(a)(x-a)","Normal slope=-1/f'(a) if f'(a)!=0","f'>0 increasing; f'<0 decreasing","Closed-interval absolute extrema: compare critical points and both endpoints"],
    "For f(x)=x^3-3x, f'=3x^2-3=3(x-1)(x+1), so f increases on (-infinity,-1), decreases on (-1,1) and increases on (1,infinity).",
    [
      {heading:"1. Build the derivative sign chart",body:"Find every critical number in the domain. Partition the number line into intervals and test the sign of f' on each interval. A positive-to-negative change signals a local maximum, negative-to-positive a local minimum, and no sign change may indicate neither. Do not infer the global extremum from local behaviour alone."},
      {heading:"2. Tangent and normal",body:"Calculate f(a) and f'(a) separately. Insert the point (a,f(a)) and slope f'(a) into the point-slope equation. If the tangent slope is zero, the normal is vertical. Check the resulting line passes through the point."},
      {heading:"3. Absolute optimisation",body:"Translate a word problem into an objective such as area, cost, volume or distance. Use the constraints to reduce it to one variable. Solve f'=0, check where the derivative is undefined within the feasible domain and evaluate permitted endpoints. Verify the result has sensible units and satisfies the original constraints."},
      {heading:"4. Marginal interpretation",body:"When f(x) represents cost/revenue/production, f'(x) approximates the change in output for a small change in input near x. In an applied response, state units such as rupees per unit or metres per second squared. An optimum depends on the model assumptions and domain, not on derivative algebra alone."}
    ],
    [
      {title:"Find local extrema of f=x^3-3x",steps:["f'=3x^2-3=0 gives x=-1 and x=1.","The sign is positive for |x|>1 and negative for -1<x<1.","There is a local maximum at x=-1 and a local minimum at x=1.","Compute f(-1)=2 and f(1)=-2 for the corresponding values."]},
      {title:"Maximise a rectangular area with fixed perimeter",steps:["Let sides be x and y and perimeter 2x+2y=P.","Constraint gives y=P/2-x, so area A=x(P/2-x).","A'=P/2-2x=0 gives x=P/4 and y=P/4.","Second derivative A''=-2<0 confirms a maximum; both sides are positive within the feasible interval."]
    }],
    ["Assuming every stationary point is a maximum/minimum.","Forgetting boundaries in absolute optimisation.","Using f'(a) as the y-coordinate of the tangent point.","Ignoring units or feasible-domain constraints."],
    ["Show the derivative sign chart for monotonicity. In optimisation, define variables, derive the constraint, check the critical point and justify max/min with sign or second derivative."],
    ["What does a positive derivative imply on an interval?","Why do endpoints matter in absolute optimisation?","How do you write the normal at a horizontal tangent?"],
    ["Critical point: domain point where derivative vanishes or is not defined.","Marginal value: local derivative of an economic/physical function.","Feasible domain: values allowed by the problem constraints."]);
  mathematicsApplicationsDerivatives.practiceQuestions = [
    {question:"Find the tangent to y=x^2 at x=3.",answer:"y=6x-9.",explanation:"Point is (3,9), slope is 6; y-9=6(x-3)."},
    {question:"Can f'(a)=0 without a local extremum?",answer:"Yes.",explanation:"For example f=x^3 at zero has derivative zero but remains increasing across the point."}
  ];

  const base = [
    physicsMechanics, physicsForces, physicsThermal, physicsElectro, physicsCurrent, physicsMagnet, physicsOptics, physicsModern, physicsRotation, physicsFluids,
    chemistryMole, chemistryBond, chemistryThermo, chemistryElectro, chemistryOrganic, chemistrySolutions, chemistryKinetics, chemistryCoordination, chemistryTransition,
    mathematicsCalculus, mathematicsIntegrals, mathematicsMatrices, mathematicsVectors, mathematicsProbability, mathematicsComplex, mathematicsTrigonometry, mathematicsCoordinate, mathematicsSeries,
    mathematicsDifferentialEquations, mathematicsDefiniteIntegrals, mathematicsConicsJEE, mathematicsCombinatoricsJEE, mathematicsProbabilityJEE, mathematicsLimitsJEE, mathematics3DLinesJEE, mathematicsSeriesJEE, mathematicsMatricesJEE, mathematicsTrigJEE, mathematicsApplicationsDerivatives,
    biologyCells, biologyGenetics, biologyPhysiology, biologyPlant, biologyEcology, biologyReproduction, biologyEvolution, biologyHealth, biologyDiversity, biologyMolecular, biologyPlantRepro, biologyMicrobes, biologyMorphology, biologyPopulation
  ];
  const examDupes = [];
  base.forEach((item) => {
    if (item.level === "JEE Main" && ["Physics","Chemistry"].includes(item.subject)) {
      examDupes.push(Object.assign({}, item, {
        level: "NEET UG",
        intro: item.intro + " NEET focus: learn the NCERT terminology, standard diagrams and direct conceptual implications before attempting calculations.",
        examFocus: (item.examFocus || []) .concat(["NEET adaptation: prioritise clear conceptual recall, units, NCERT definitions and one-step applications."])
      }));
    }
  });
  window.KP_DEEP_NOTES = base.concat(examDupes);
})();
