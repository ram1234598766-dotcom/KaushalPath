/* Detailed, original NCERT-aligned Physics chapter notes for Class 10 Science and XI-XII Physics.
   Includes conceptual explanations, formula conditions, worked examples and traps. */
(function () {
  "use strict";
  const make = (level, subject, chapter, intro, sections, formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary) => ({
    level, subject, chapter, intro,
    sections: sections.map(([heading, body]) => ({ heading, body })),
    formulas: formulaCheatSheet.map((x) => x.formula),
    formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary,
    points: sections.map(([heading, body]) => heading + ": " + body.split(/[.!?]/)[0] + "."),
    example: workedExamples.length ? workedExamples[0].steps.join(" ") : "Review the formula card conditions, then solve the prescribed textbook questions independently.",
    depth: "detailed",
    sourceNote: "Original chapter-specific study notes aligned to common NCERT/CBSE Physics concepts. Confirm scope with the current official syllabus and prescribed textbook edition."
  });
  const notes = [
    make("Class 10","Science","Light — Reflection and Refraction",
      "Build ray diagrams and equations from the laws of reflection/refraction; distinguish real/virtual images, mirror/lens sign conventions and magnification.",
      [
        ["Reflection and image formation","The angle of incidence equals the angle of reflection, with both angles measured from the normal to the reflecting surface. A plane mirror forms a virtual, erect, same-size image behind the mirror at the same perpendicular distance as the object is in front. Curved mirrors change how rays converge or diverge. A real image forms where reflected/refracted rays actually meet and can be caught on a screen; a virtual image is an apparent intersection."],
        ["Spherical mirrors and sign convention","Concave mirrors can converge parallel rays near the principal focus; convex mirrors diverge rays and have a virtual focus. The principal axis, pole, centre of curvature, focal point and focal length must be labelled. Use the textbook Cartesian sign convention consistently: distances measured from the pole/optical centre along the incident-light direction and opposite direction receive different signs. The sign is part of the physics, not decoration."],
        ["Refraction and refractive index","Refraction occurs because light changes speed when it crosses an interface between media. Snell's law relates refractive indices and sine of angles measured from the normal. Light entering a higher-index medium bends toward the normal under standard conditions; entering a lower-index medium bends away. Frequency remains the same across a stationary boundary while speed and wavelength change. Total internal reflection requires light travelling from higher to lower refractive index and incidence above the critical angle."],
        ["Lens equation and image interpretation","A convex lens converges parallel rays; a concave lens diverges them. The thin-lens equation connects object distance u, image distance v and focal length f, under the chosen sign convention. Magnification relates image height to object height and distance ratios. Draw principal rays for a sketch and use the equation to confirm the image position. Do not decide real/virtual solely from the sign of one distance unless the sign convention is clear."]
      ],
      [
        {formula:"∠i=∠r",meaning:"Law of reflection; angles are measured from the normal.",when:"Plane/curved mirror ray diagrams.",units:"Angles.",trap:"Do not measure angles from the mirror surface."},
        {formula:"Mirror: 1/f=1/v+1/u (Cartesian convention)",meaning:"Relates focal, image and object distances for spherical mirrors.",when:"Image-distance problems.",units:"All lengths in the same unit.",trap:"Use the specified convention and keep the signs of u,v,f."},
        {formula:"Lens: 1/f=1/v−1/u (Cartesian convention)",meaning:"Thin-lens equation with the common Cartesian sign convention.",when:"Thin-lens image location.",units:"Lengths must match.",trap:"Do not mix the mirror and lens equation signs."},
        {formula:"m=hᵢ/hₒ=v/u (lens convention; mirror convention often m=−v/u)",meaning:"Signed magnification relates image height and object height.",when:"Image size and orientation.",units:"Dimensionless.",trap:"Mirror and lens magnification sign conventions differ in many texts; follow the adopted equation."},
        {formula:"n₁ sin i=n₂ sin r",meaning:"Snell's law of refraction.",when:"Angles and refractive indices.",units:"Dimensionless ratios.",trap:"Angles are measured from the normal and use consistent media labels."}
      ],
      [
        {title:"Plane mirror",steps:["An object is 2 m in front of a plane mirror.","Its image appears 2 m behind the mirror.","Object-image separation is 2+2=4 m when measured along the normal.","The image is virtual, erect and the same size."]},
        {title:"Lens calculation",steps:["For a converging lens, choose the stated sign convention and substitute u and f in 1/f=1/v−1/u.","Rearrange algebraically for 1/v before taking the reciprocal.","Interpret the sign of v using the convention to decide image location/type.","Check that every distance uses the same unit and verify by a ray diagram."]},
        {title:"Snell's law",steps:["Light passes from air (n₁≈1) to glass (n₂=1.5) at incidence 30°.","sin r=(n₁/n₂)sin30°=(1/1.5)(0.5)=1/3.","r=sin⁻¹(1/3), about 19.5°.","The refracted ray bends toward the normal because the second medium has higher refractive index."]}
      ],
      ["Measuring angles from the surface rather than the normal.","Mixing sign conventions or mirror and lens formulae.","Claiming total internal reflection when light travels from lower to higher index.","Confusing a virtual image with an image that cannot be seen."],
      ["CBSE: ray diagrams, sign convention, mirror/lens equation, magnification and refraction. Draw labelled rays and explain image nature with the result."],
      ["Why is the frequency unchanged during refraction?","Which conditions are needed for total internal reflection?","What makes an image real rather than virtual?"],
      ["Principal focus: point where paraxial rays converge or appear to diverge from.","Refractive index: ratio describing light speed in a medium relative to vacuum.","Magnification: image-size ratio including orientation sign."]),
    make("Class 10","Science","The Human Eye and the Colourful World",
      "Explain accommodation, near/far points, myopia/hypermetropia correction, prism dispersion, scattering and atmospheric optical effects.",
      [
        ["Eye as an optical system","The cornea and eye lens refract incoming light to form an image on the retina. Ciliary muscles change lens curvature to accommodate objects at different distances. A normal eye sees distant objects with little accommodation and near objects with increased lens power. The near point and far point describe the closest and farthest distances seen clearly under the relevant conditions."],
        ["Vision defects and corrective lenses","Myopia (short-sightedness) focuses distant-object images in front of the retina; a diverging/concave lens helps move the focus back onto the retina. Hypermetropia (long-sightedness) may focus near objects behind the retina; a converging/convex lens helps. Presbyopia is age-related reduction of accommodation and can require reading or bifocal/progressive correction. The lens power depends on focal length in metres."],
        ["Dispersion and scattering","Dispersion separates white light into colours because refractive index depends on wavelength. In ordinary visible-light dispersion by glass, violet is refracted more than red. Scattering redirects light due to particles/molecular density fluctuations; shorter wavelengths are scattered more strongly under the small-particle Rayleigh regime. A sunset appears red/orange because shorter wavelengths are preferentially scattered out of the long atmospheric path."],
        ["Atmospheric refraction and perception","Twinkling of stars arises from changing atmospheric refraction through turbulent air layers; planets generally twinkle less because their apparent discs average fluctuations. Advance sunrise/delayed sunset and apparent star positions are also connected to atmospheric refraction. The blue sky, reddish sunrise/sunset and wavelength-dependent scattering are distinct effects; avoid attributing all optical phenomena to reflection."]
      ],
      [
        {formula:"Lens power P=1/f (f in metres)",meaning:"Optical power is reciprocal focal length.",when:"Eyeglass lenses and focal-length comparisons.",units:"Dioptre (D=m⁻¹).",trap:"Convert centimetres to metres before calculating."},
        {formula:"Rayleigh scattering ∝1/λ⁴ (small-particle approximation)",meaning:"Shorter visible wavelengths scatter much more strongly.",when:"Explain blue sky and red/orange long-path sunlight qualitatively.",units:"Proportionality.",trap:"The relation applies to suitable particle-size regimes, not every cloud/fog particle."}
      ],
      [
        {title:"Find lens power",steps:["A corrective lens has focal length −0.50 m.","Power P=1/f=1/(−0.50).","P=−2 D.","Negative power indicates a diverging lens in the usual convention."]},
        {title:"Explain myopia correction",steps:["A myopic eye focuses a distant object before light reaches the retina.","A concave lens diverges the incoming rays slightly before the eye lens.","The eye then focuses the image farther back, toward the retina.","State the defect and correction together; do not reverse concave/convex lens roles."]},
        {title:"Explain a red sunset",steps:["Sunlight travels through a longer atmospheric path near the horizon.","Molecules scatter shorter wavelengths more strongly under the Rayleigh approximation.","More blue/violet light is redirected out of the direct line of sight, leaving direct light richer in red/orange.","Dust and aerosols can alter the observed colour, so the simple model is a first explanation."]}
      ],
      ["Using focal length in centimetres directly in P=1/f.","Reversing concave/convex correction for myopia/hypermetropia.","Saying violet is less refracted than red in ordinary glass dispersion.","Confusing scattering with dispersion."],
      ["CBSE: defect and lens correction, lens power, atmospheric refraction and scattering. Label the retina/focal location in defect diagrams."],
      ["Which lens corrects myopia?","Why is the sky blue under molecular scattering?","Why do stars twinkle more noticeably than planets?"],
      ["Accommodation: change in lens power to focus at different distances.","Myopia: distant images focus in front of retina.","Hypermetropia: near images tend to focus behind retina.","Dispersion: separation by wavelength-dependent refraction."]),
    make("Class 10","Science","Electricity",
      "Develop current, potential difference, resistance, Ohm's law, series/parallel networks, resistivity, electrical power and household-energy calculations.",
      [
        ["Current and potential difference","Current is charge passing a cross-section per unit time. Conventional current points in the direction positive charge would move; electron drift in a metal is opposite. Potential difference is energy transferred per unit charge between two points. An ideal ammeter is placed in series and has very low resistance; an ideal voltmeter is placed in parallel and has very high resistance."],
        ["Ohm's law and resistance","For an ohmic conductor at constant temperature and physical conditions, V∝I and V=IR. The V-I graph is a straight line through the origin; slope is resistance if V is vertical and I horizontal, but reciprocal if axes are swapped. Resistance depends on material, length, cross-sectional area and temperature. A non-ohmic device may not have a constant V/I ratio."],
        ["Series, parallel and resistivity","In series, each element carries the same current and the source voltage divides; equivalent resistance is the sum. In parallel, each branch has the same voltage and currents add; reciprocal resistances add. A uniform wire has R=ρL/A. Longer wire increases R, larger cross-section reduces R, while resistivity ρ is a material property under stated conditions."],
        ["Power, energy and household use","Electrical power is the rate of energy transfer. Using V=IR gives equivalent resistor formulas P=VI=I²R=V²/R. Electrical energy E=Pt; commercial units often use kilowatt-hours (kWh), where 1 kWh=3.6×10⁶ J. For appliances, calculate energy from power in kW multiplied by time in hours, not by multiplying wattage directly by hours and calling it joules."]
      ],
      [
        {formula:"I=Q/t",meaning:"Charge flow per unit time.",when:"Current from charge/time data.",units:"Ampere=C s⁻¹.",trap:"Convert milliseconds/minutes to seconds when using SI."},
        {formula:"V=IR",meaning:"Ohm's law for ohmic conductors under fixed physical conditions.",when:"Find voltage, current or resistance.",units:"V, A, Ω.",trap:"Do not assume a lamp/diode remains ohmic over every operating range."},
        {formula:"Rseries=R₁+R₂+…; 1/Rparallel=Σ(1/Rᵢ)",meaning:"Equivalent resistance for ideal series and parallel networks.",when:"Reduce resistor circuits.",units:"Ohms.",trap:"Series share current; parallel share voltage."},
        {formula:"R=ρL/A",meaning:"Resistance of a uniform conductor.",when:"Length/area/material comparison.",units:"ρ in Ω m, L in m, A in m².",trap:"Convert wire radius/diameter to area πr²."},
        {formula:"P=VI=I²R=V²/R; E=Pt",meaning:"Electrical power and energy.",when:"Heating, appliance rating and electricity cost.",units:"P in W, E in J or kWh.",trap:"Use the V and I across the same component."}
      ],
      [
        {title:"Series network",steps:["A 4 Ω and 6 Ω resistor are in series across 20 V.","R_eq=4+6=10 Ω.","Current I=V/R=20/10=2 A.","Voltage drops are 8 V and 12 V, whose sum is 20 V."]},
        {title:"Parallel network",steps:["A 6 Ω and 3 Ω resistor are in parallel across 12 V.","1/R_eq=1/6+1/3=3/6=1/2, so R_eq=2 Ω.","Total current=12/2=6 A; branch currents are 2 A and 4 A.","Branch currents add to the total and each branch has 12 V across it."]},
        {title:"Electricity bill",steps:["A 1.5 kW heater runs 2 hours each day for 30 days.","Energy=1.5 kW×2 h/day×30 days=90 kWh.","At ₹8 per kWh, energy cost=₹720 before fixed charges/taxes.","If asked for joules, convert 90 kWh×3.6×10⁶ J/kWh."]}
      ],
      ["Adding parallel resistances directly.","Mixing series and parallel before identifying actual circuit nodes.","Using the wrong resistor's voltage in P=V²/R.","Confusing kW with kWh."],
      ["CBSE: circuit reduction, resistivity, Ohm's law, power and household units. Draw the circuit and show each reduction step."],
      ["Why is total parallel resistance smaller than the smallest branch resistance?","What does the slope of a V-I graph represent if V is plotted against I?","How many joules are in 1 kWh?"],
      ["Potential difference: energy per unit charge.","Resistivity: material property in R=ρL/A.","kWh: unit of electrical energy, not power."]),
    make("Class 10","Science","Magnetic Effects of Electric Current",
      "Explain field around a current, solenoids, magnetic-force direction, electromagnets, electromagnetic induction and household electric safety.",
      [
        ["Magnetic field and current","A magnetic field is the region in which a magnetic pole/current/moving charge experiences magnetic influence. Field lines outside a bar magnet run from north to south and form closed loops; they never cross because a field has one direction at each point. A current-carrying straight wire produces circular field lines centred on the wire. Field strength increases with current and decreases with distance in the standard long-wire model."],
        ["Right-hand thumb and solenoid","Point the right thumb along conventional current in a straight conductor; curled fingers show magnetic-field direction. A solenoid produces a field similar to a bar magnet and is strengthened by increasing current, turns per length and inserting a suitable ferromagnetic core. A solenoid can act as an electromagnet, unlike a permanent magnet that retains magnetisation without continuous current."],
        ["Force and electromagnetic induction","A current-carrying conductor in a magnetic field experiences force, with direction determined by Fleming's left-hand rule under the stated conventions. A changing magnetic flux through a coil can induce emf/current; direction follows Lenz's law and opposes the change that produces it. Generator action converts mechanical energy into electrical energy; motor action converts electrical energy into mechanical motion."],
        ["Domestic circuits and safety","Household wiring uses live, neutral and earth conductors for supply and safety. Fuse/MCB protection interrupts excessive current due to overload/short circuit. Earthing provides a low-resistance route for fault current and helps protective devices disconnect supply. Wet hands and damaged insulation increase shock risk. Never treat a household wire demonstration as safe to perform without qualified supervision."]
      ],
      [
        {formula:"Long straight wire: B∝I/r",meaning:"Field strength grows with current and weakens with distance.",when:"Qualitative field comparison around current-carrying wire.",units:"B in tesla for full formula; proportionality for school-level reasoning.",trap:"Use the right-hand thumb rule for direction, not magnitude."},
        {formula:"Induced emf ∝ rate of change of magnetic flux",meaning:"Faster/larger flux changes induce larger emf in Faraday's law.",when:"Coil, magnet and generator questions.",units:"Volt.",trap:"A stationary constant field through a stationary coil gives no induced emf."},
        {formula:"Fuse/MCB interrupts excessive current",meaning:"Protection against overload/short circuit heating.",when:"Household safety explanation.",units:"Current rating in ampere.",trap:"A fuse is placed in live wire in conventional domestic wiring schemes."}
      ],
      [
        {title:"Predict field direction",steps:["Conventional current flows upward in a vertical straight wire.","Point the right thumb upward.","The curled fingers indicate circular magnetic-field direction around the wire.","Reverse current and the field direction reverses."]},
        {title:"Induction thought experiment",steps:["Move a bar magnet toward a coil connected to a sensitive galvanometer.","Magnetic flux through the coil changes and an induced current can appear.","Hold the magnet still relative to the coil and the induced current falls to zero after transients.","Moving it away reverses the flux-change direction, reversing induced current direction under the same coil orientation."]},
        {title:"Explain earthing",steps:["A metal appliance case can become live under an insulation fault.","Earth wiring gives fault current a low-resistance path.","A fuse/MCB can disconnect supply when fault current rises sufficiently.","This reduces, but does not eliminate every possible shock hazard; do not touch faulty electrical equipment."]}
      ],
      ["Using electron flow instead of conventional current for a right-hand rule without changing the rule.","Thinking field lines cross.","Saying any static magnet causes continuous induced current.","Confusing motor and generator energy conversion."],
      ["CBSE: right-hand thumb rule, field-line diagrams, force/induction concepts and domestic safety. Use labelled diagrams and state the energy conversion."],
      ["Why does induced current disappear when magnet and coil are stationary relative to each other?","What is the role of earthing?","How does a solenoid resemble a bar magnet?"],
      ["Electromagnet: controllable magnetic field produced by current.","Electromagnetic induction: emf generated by changing magnetic flux.","Earthing: protective connection providing a low-resistance fault path."]),
    make("Class 11","Physics","Units and Measurements",
      "Use SI base/derived units, dimensional analysis, significant figures, uncertainty propagation and instrument precision as part of every calculation.",
      [
        ["Units and dimensions","A physical quantity is numerical value times unit; the number changes when the unit changes, the physical quantity does not. Fundamental SI dimensions include mass M, length L, time T, current I, temperature Θ and amount N. Dimensional formulae represent derived quantities, for example velocity [LT⁻¹] and force [MLT⁻²]. Dimensional consistency is necessary for a valid equation, but it does not determine pure numerical constants or all functional forms."],
        ["Dimensional analysis and limitations","For an equation to be dimensionally valid, both sides and every term added must have the same dimensions. This can test formulas, convert units and infer exponents in a presumed power-law relation. It cannot determine dimensionless constants such as 2 or π, distinguish some functions such as sinθ from θ in a dimensionless limit, or prove an equation physically correct."],
        ["Significant figures and scientific notation","Significant figures communicate precision. Leading zeros are not significant; zeros between non-zero digits are; trailing zeros after a decimal are generally significant when written to indicate precision. For multiplication/division, reported significant figures normally follow the least precise factor; for addition/subtraction, decimal place precision controls rounding. Keep guard digits during work and round at the end."],
        ["Errors and uncertainty","Accuracy describes closeness to an accepted value; precision describes repeatability/spread. Absolute error is an absolute difference; relative error divides by reference/mean magnitude; percentage error multiplies by 100%. For independent small uncertainties, relative errors in products/powers often add in a worst-case or standard approximation depending on the stated method. Record instrument resolution and distinguish random from systematic effects."]
      ],
      [
        {formula:"[v]=LT⁻¹; [a]=LT⁻²; [F]=MLT⁻²",meaning:"Common dimensional formulae.",when:"Check or derive mechanical equations.",units:"Dimensions independent of unit system.",trap:"A dimensional match does not prove a formula is correct."},
        {formula:"For Q=AᵃBᵇ, approximate relative error: ΔQ/Q≈|a|ΔA/A+|b|ΔB/B",meaning:"Worst-case fractional-error propagation for products/powers.",when:"Uncertainty questions under this convention.",units:"Dimensionless ratios.",trap:"Statistical independent-error propagation may instead use quadrature; use stated assumptions."},
        {formula:"Percentage error=relative error×100%",meaning:"Expresses uncertainty relative to magnitude.",when:"Compare measurement quality.",units:"Percent.",trap:"Do not confuse absolute error with relative error."}
      ],
      [
        {title:"Check a formula dimensionally",steps:["Test s=ut+(1/2)at².","[ut]=[LT⁻¹][T]=L.","[at²]=[LT⁻²][T²]=L.","Both terms have length dimensions, so the equation is dimensionally consistent; other physical reasoning is still needed."]},
        {title:"Significant figures",steps:["For 0.004560, leading zeros only locate the decimal point.","Digits 4,5,6 and the trailing zero are significant, giving 4 significant figures.","In multiplication, maintain extra digits and round the final result to the required precision.","Writing 4.560×10⁻³ makes four significant figures explicit."]}
      ],
      ["Assuming dimensional consistency guarantees correctness.","Rounding intermediate values prematurely.","Confusing precision with accuracy.","Using a relative-error formula without stating the independence/worst-case convention."],
      ["CBSE/JEE: dimensions, unit conversions, significant figures and uncertainty. Include units in the final answer and show conversions."],
      ["Can dimensional analysis determine a numerical constant?","How do accuracy and precision differ?","What controls rounding for addition/subtraction?"],
      ["Dimension: powers of base quantities in a physical quantity.","Systematic error: bias producing a consistent offset.","Resolution: smallest change an instrument can reliably display/detect."]),
    make("Class 11","Physics","Motion in a Straight Line",
      "Treat position, displacement, speed, velocity and acceleration using sign conventions, graphs and constant-acceleration kinematics.",
      [
        ["Position and displacement","Position depends on chosen origin; displacement is final minus initial position and can be positive, negative or zero. Distance is total path length and never negative. Average velocity is displacement/time, while average speed is distance/time. If an object reverses direction, distance and displacement differ; split the path at the turning point to total distance."],
        ["Velocity, acceleration and graphs","Velocity is the derivative/rate of position change and carries direction in one dimension. Acceleration measures velocity change per unit time; negative acceleration does not necessarily mean slowing down because velocity might also be negative. Slope of position-time graph gives velocity, slope of velocity-time graph gives acceleration, and signed area under velocity-time graph gives displacement."],
        ["Constant acceleration equations","For uniform acceleration a, v=u+at and s=ut+(1/2)at². Combining them gives v²=u²+2as. These equations assume acceleration is constant over the interval and signs are consistent. Pick positive direction first and insert signed quantities; the equations can handle motion in either direction when used consistently."],
        ["Piecewise and relative motion","For piecewise velocity or acceleration, analyse each interval separately and match position/velocity at boundaries. Relative velocity of A with respect to B in one dimension is v_A−v_B; use a common positive axis. A zero relative velocity means their separation is momentarily constant, not that either object is stationary."]
      ],
      [
        {formula:"v_avg=Δx/Δt; speed_avg=total distance/total time",meaning:"Average velocity and average speed.",when:"Finite time interval.",units:"m s⁻¹.",trap:"Do not substitute distance for displacement in average velocity."},
        {formula:"v=u+at; s=ut+½at²; v²=u²+2as",meaning:"Constant-acceleration kinematic equations.",when:"Acceleration is uniform and time/displacement/speed is required.",units:"SI units.",trap:"Choose the positive direction and use signed variables."},
        {formula:"Slope x–t = v; slope v–t = a; area under v–t = displacement",meaning:"Graph interpretation.",when:"Read motion from plotted data.",units:"Units follow axes.",trap:"Area under speed-time gives distance; area under signed velocity-time gives displacement."}
      ],
      [
        {title:"Uniform acceleration",steps:["A car starts at 4 m/s and accelerates at 3 m/s² for 5 s.","v=u+at=4+3(5)=19 m/s.","s=ut+½at²=4(5)+½(3)(25)=20+37.5=57.5 m.","Check units and that positive acceleration increases the positive velocity."]},
        {title:"Turning point and distance",steps:["A particle moves at +6 m/s for 4 s then at −2 m/s for 3 s.","First displacement=+24 m; second=−6 m.","Net displacement=18 m; total distance=24+6=30 m.","The negative velocity means the second segment is opposite the chosen positive direction."]}
      ],
      ["Confusing distance and displacement.","Using constant-acceleration equations when acceleration varies.","Assuming negative acceleration always means slowing down.","Dropping sign convention in multi-stage motion."],
      ["CBSE/JEE: graph slopes/areas, constant-acceleration equations, average speed versus velocity and piecewise motion."],
      ["What is the signed area under a velocity-time graph?","Can average velocity be zero while average speed is nonzero?","What does negative acceleration mean physically?"],
      ["Displacement: signed change in position.","Velocity: rate of displacement change.","Acceleration: rate of velocity change."]),
    make("Class 11","Physics","Motion in a Plane",
      "Resolve vectors into components, add vectors, use projectile motion and relative velocity, and connect vectors to two-dimensional kinematics.",
      [
        ["Vector components","A vector A at angle θ above the +x axis has A_x=Acosθ and A_y=Asinθ. Signs depend on quadrant and chosen axes. Vector addition is component-wise, while magnitudes do not simply add unless directions match. A unit vector describes direction; it is the original vector divided by its magnitude."],
        ["Two-dimensional motion","Position, velocity and acceleration have independent x and y components. For ideal projectile motion without air resistance, a_x=0 and a_y=−g when upward is positive. Horizontal velocity remains constant, while vertical velocity changes linearly. The trajectory is parabolic under constant gravity."],
        ["Projectile formulae and limitations","For launch speed u at angle θ returning to the launch height, T=2u sinθ/g, maximum height H=u²sin²θ/(2g), and range R=u²sin2θ/g. These assume same launch/landing height, constant g and negligible air resistance. With differing heights, find time from vertical displacement before computing horizontal range."],
        ["Relative velocity and circular components","Velocity of A relative to B is v_A−v_B using vectors in the same frame. For circular motion, acceleration has inward radial component v²/r even at constant speed because direction changes. Components should be interpreted along a convenient coordinate/radial axis rather than mixed with the full vector magnitude."]
      ],
      [
        {formula:"Aₓ=Acosθ; Aᵧ=Asinθ",meaning:"Resolve a vector into Cartesian components.",when:"Vector addition, projectiles and relative motion.",units:"Same as A.",trap:"Use correct signs from the quadrant."},
        {formula:"T=2u sinθ/g; H=u²sin²θ/(2g); R=u²sin2θ/g",meaning:"Projectile time, maximum height and range for equal launch/landing heights.",when:"Ideal projectile problems.",units:"T in s; H,R in m.",trap:"Do not use equal-height range formula if landing height differs."},
        {formula:"v_(A/B)=v_A−v_B",meaning:"Vector velocity of A relative to B.",when:"Moving observers/vehicles.",units:"m s⁻¹.",trap:"Both velocities must be measured in the same reference frame."}
      ],
      [
        {title:"Projectile time and range",steps:["Launch u=20 m/s at 30°, g=10 m/s², landing at launch height.","T=2u sin30°/g=2(20)(0.5)/10=2 s.","Horizontal speed=20cos30°=10√3 m/s.","Range=u_xT=20√3 m; this also matches u²sin60°/g."]},
        {title:"Relative velocity",steps:["A moves east at 12 m/s and B east at 8 m/s.","Choose east positive: v_A/B=12−8=4 m/s.","A moves east relative to B at 4 m/s.","If B instead moves west at 8 m/s, use −8 and the relative speed becomes 20 m/s east."]}
      ],
      ["Using scalar addition for non-collinear vectors.","Forgetting that projectile vertical velocity at the top is zero while horizontal velocity is not.","Applying equal-height projectile formula to a cliff problem.","Mixing angles measured from horizontal and vertical."],
      ["CBSE/JEE: component resolution, projectile formulae, relative motion and radial acceleration."],
      ["Why does projectile acceleration remain downward even at the top?","When is the range formula u²sin2θ/g valid?","How are relative velocities calculated?"],
      ["Projectile: motion under gravity after launch, ignoring air resistance.","Component: projection of a vector along an axis.","Relative velocity: velocity measured from another moving frame."]),
    make("Class 11","Physics","Laws of Motion",
      "Use Newton's laws, free-body diagrams, friction, normal force, tension and connected systems with explicit sign conventions.",
      [
        ["Newton's laws and momentum","Newton's first law defines inertial behaviour; the second law relates net force to momentum change, reducing to F=ma for constant mass; the third law pairs interaction forces on different bodies. Action-reaction forces do not cancel on one body's free-body diagram because they act on different objects. Momentum p=mv is vector-valued and changes when net external impulse acts."],
        ["Free-body diagram method","Select one body, isolate it and draw only forces acting on it: weight, normal, tension, applied force, friction and any other real interactions. Resolve forces along axes chosen to simplify motion. Normal force is not universally mg; it adjusts with geometry, other applied forces and acceleration perpendicular to the surface. Add forces as vectors before applying Newton's second law."],
        ["Friction and inclined planes","Static friction adjusts up to f_s,max=μ_sN and prevents relative slipping; it is not always equal to its maximum. Kinetic friction is approximately μ_kN in the elementary dry-friction model. On an incline, weight components are mg sinθ parallel and mg cosθ perpendicular. Friction direction opposes impending/actual relative slipping at the contact, not necessarily the direction of the object's centre-of-mass motion in every setup."],
        ["Connected bodies and non-inertial cautions","For ideal massless inextensible strings and frictionless massless pulleys, linked objects may share acceleration magnitudes while tensions along a single ideal string are equal. State assumptions before using these properties. Non-inertial frames may require a fictitious force opposite frame acceleration. Multi-body systems are often simpler if the whole system is considered for external force, then individual bodies for tensions."]
      ],
      [
        {formula:"ΣF=dp/dt; for constant mass ΣF=ma",meaning:"Newton's second law.",when:"Force/acceleration/momentum problems.",units:"N=kg m s⁻².",trap:"Use net force, not one isolated force."},
        {formula:"f_s≤μ_sN; f_k≈μ_kN",meaning:"Elementary dry-friction model.",when:"Blocks on surfaces.",units:"N.",trap:"Static friction is only μ_sN at limiting slip."},
        {formula:"Incline: mg sinθ parallel; mg cosθ perpendicular",meaning:"Resolve gravitational weight.",when:"Inclined-plane problems.",units:"N.",trap:"Assume axes parallel/perpendicular to plane for this decomposition."}
      ],
      [
        {title:"Block on a smooth incline",steps:["A block of mass m slides on a smooth plane at angle θ.","Along plane, the only force component is mg sinθ down the slope.","Newton's second law: ma=mg sinθ.","Acceleration a=g sinθ; mass cancels."]},
        {title:"Friction threshold",steps:["A 5 kg block rests on a horizontal surface with μ_s=0.4; take g=10 m/s².","Normal force N=mg=50 N if no other vertical force.","Maximum static friction=μ_sN=20 N.","A horizontal applied force below or equal to 20 N can be balanced by static friction under this simple model; larger force causes slip."]}
      ],
      ["Putting action-reaction pairs on one body's free-body diagram.","Always setting normal force equal to mg.","Using maximum static friction when not at threshold.","Forgetting to state ideal string/pulley assumptions."],
      ["JEE: connected bodies, inclines, friction, lift/pseudo-force and constraint equations. Draw each body's free-body diagram separately."],
      ["Why do action-reaction forces not cancel on one body?","What is the difference between static and kinetic friction?","When is N=mg not valid?"],
      ["Normal force: contact force perpendicular to surface.","Impulse: change in momentum.","Inertial frame: frame where Newton's laws apply without fictitious forces."]),
    make("Class 11","Physics","Work, Energy and Power",
      "Connect work, kinetic/potential energy, conservative forces, work-energy theorem, power and collisions to solve mechanics efficiently.",
      [
        ["Work and sign","For constant force F acting through displacement s, work W=Fs cosθ. Work is positive when the force component is along displacement, negative when opposite, and zero when perpendicular. If force varies, work is the integral of F·ds; on a force-position graph, area represents work along the relevant path. A force may do zero work while changing direction of motion, as in ideal uniform circular motion."],
        ["Kinetic energy and work-energy theorem","Kinetic energy K=½mv². Net work on a particle equals its change in kinetic energy, so it links initial and final speed without directly solving for time. Work is path-dependent for general forces, but the net-work theorem remains valid. Use consistent signs and include work from every force when computing the change."],
        ["Potential energy and conservation","For a conservative force, work can be represented as the negative change in potential energy, W_c=−ΔU. Near Earth, gravitational potential energy change is mgΔh. In a system with only conservative forces, mechanical energy K+U remains constant. Friction or external work can change mechanical energy; total energy is still conserved when heat/internal energy is included."],
        ["Power and collisions","Average power is work divided by elapsed time; instantaneous power is F·v. In collisions, momentum is conserved for a system with negligible external impulse, while kinetic energy may or may not be conserved. Elastic collision conserves both momentum and kinetic energy; inelastic collision loses kinetic energy to internal forms, and a perfectly inelastic collision has bodies move together afterward."]
      ],
      [
        {formula:"W=Fs cosθ; variable force W=∫F·ds",meaning:"Work by a force along displacement.",when:"Energy transfer through force.",units:"J=N m.",trap:"Perpendicular force does no work."},
        {formula:"K=½mv²; W_net=ΔK",meaning:"Kinetic energy and work-energy theorem.",when:"Find speed from work/height rather than time.",units:"J.",trap:"Use net work from all forces."},
        {formula:"P_avg=W/Δt; P_inst=F·v",meaning:"Rate of energy transfer.",when:"Engine/appliance/mechanical power.",units:"W=J s⁻¹.",trap:"Power depends on velocity direction for F·v."},
        {formula:"Mechanical energy K+U conserved for conservative forces only",meaning:"Kinetic/potential energy exchange with no dissipative/external work.",when:"Ideal falling/spring systems.",units:"J.",trap:"Friction means mechanical energy generally decreases."}
      ],
      [
        {title:"Work by an angled force",steps:["A 10 N force acts at 60° to a 3 m displacement.","W=Fs cosθ=10×3×0.5.","Work=15 J.","Only the displacement-parallel component contributes."]},
        {title:"Speed from height",steps:["A body starts from rest and falls 5 m, ignoring air resistance; g=10 m/s².","Loss in gravitational potential mg h becomes kinetic energy ½mv².","mgh=½mv², so v=√(2gh)=√100.","Speed at the bottom is 10 m/s, independent of mass."]}
      ],
      ["Using work as force times distance without the angle/component.","Assuming mechanical energy is conserved in the presence of friction without accounting for heat.","Confusing momentum conservation with kinetic-energy conservation in every collision.","Mixing average and instantaneous power."],
      ["CBSE/JEE: work sign, work-energy theorem, energy conservation, spring energy, power and collision types."],
      ["When is work zero even if a force is nonzero?","What is conserved in an inelastic collision?","Why does mass cancel in ideal free-fall speed from height?"],
      ["Conservative force: work depends only on endpoints.","Mechanical energy: sum K+U.","Power: work/energy transfer per unit time."]),
    make("Class 11","Physics","System of Particles and Rotational Motion",
      "Connect centre of mass, torque, angular momentum, moment of inertia, rotational dynamics and pure rolling.",
      [
        ["Centre of mass","The centre of mass is the mass-weighted position average of a system. For two masses, x_cm=(m₁x₁+m₂x₂)/(m₁+m₂); the idea generalises component-wise. Internal forces cancel in the total momentum equation, so centre-of-mass motion is governed by net external force. The centre of mass need not coincide with a material point, especially in a rigid body."],
        ["Torque and angular momentum","Torque τ=r×F measures the tendency to rotate about a chosen point; its magnitude is rF sinθ. Angular momentum L=r×p for a particle and L=Iω for a rigid body about a fixed principal axis. If net external torque is zero, angular momentum is conserved. Choose the axis carefully because torque/angular momentum depend on the reference point."],
        ["Moment of inertia and rotational energy","Moment of inertia I=Σmᵢrᵢ² describes resistance to angular acceleration about an axis. Mass farther from the axis contributes quadratically. Rotational kinetic energy is ½Iω²; parallel-axis theorem I=I_cm+Md² shifts to a parallel axis. For a fixed axis with constant I, τ=Iα. Many bodies require the stated axis and shape-specific I."],
        ["Rolling without slipping","Pure rolling links centre velocity v_cm and angular velocity ω by v_cm=ωR. Total kinetic energy is translational plus rotational: ½Mv_cm²+½I_cmω². On an incline, write translation for the centre and torque around the centre, plus the rolling constraint a_cm=αR. Static friction can supply torque in ideal no-slip rolling without necessarily dissipating mechanical energy at the contact."]
      ],
      [
        {formula:"r_cm=Σmᵢrᵢ/Σmᵢ",meaning:"Mass-weighted centre position.",when:"Centre-of-mass questions.",units:"Length.",trap:"Weight each position by its mass."},
        {formula:"τ=r×F; |τ|=rF sinθ",meaning:"Torque vector and magnitude.",when:"Rotational dynamics.",units:"N m.",trap:"Force along the lever arm produces zero torque."},
        {formula:"I=Σmᵢrᵢ²; τ=Iα (fixed axis, suitable conditions)",meaning:"Rotational inertia and dynamics.",when:"Angular acceleration/torque.",units:"I in kg m²; torque in N m.",trap:"Moment of inertia depends on axis."},
        {formula:"v_cm=ωR for pure rolling",meaning:"No-slip rolling kinematic constraint.",when:"Rolling body calculations.",units:"m s⁻¹.",trap:"Not valid during slipping."}
      ],
      [
        {title:"Centre of mass",steps:["Masses 2 kg at x=0 and 3 kg at x=5 m.","x_cm=[2(0)+3(5)]/(2+3)=15/5.","Centre of mass is at x=3 m.","It lies closer to the heavier mass, as expected."]},
        {title:"Rolling disc energy",steps:["A solid disc rolls without slipping at speed v; I=½MR² and ω=v/R.","K_total=½Mv²+½Iω².","K_total=½Mv²+½(½MR²)(v²/R²)=¾Mv².","The rotational term is half the translational term for this disc model."]}
      ],
      ["Using the wrong axis for moment of inertia.","Treating torque as scalar when direction matters.","Applying v=ωR to a slipping body.","Conserving angular momentum despite a nonzero external torque."],
      ["JEE: centre of mass, collision/impulse links, torque, inertia, angular momentum and rolling constraints. Draw axis and direction signs."],
      ["How does centre of mass depend on masses?","When is angular momentum conserved?","What condition links v and ω in pure rolling?"],
      ["Centre of mass: mass-weighted average position.","Torque: rotational effect of force.","Moment of inertia: rotational inertia about an axis.","Pure rolling: contact point has zero instantaneous velocity relative to surface."]),
    make("Class 11","Physics","Gravitation",
      "Use Newton's gravitation law, gravitational field/potential, variation of g, orbital motion and escape speed with consistent sign conventions.",
      [
        ["Universal gravitation and field","The attractive force between point masses has magnitude F=Gm₁m₂/r² along the line joining them. For a spherically symmetric body outside it, the field behaves as if the mass were concentrated at its centre. Gravitational field g is force per unit test mass and points toward the source mass; it is a vector."],
        ["Potential and potential energy","With gravitational potential zero at infinity, potential outside a spherical mass is V=−GM/r and a mass m has U=−GMm/r. Negative potential reflects attraction relative to the reference at infinity. Work by gravity equals −ΔU. Near Earth's surface and small height changes, ΔU≈mgΔh is a practical approximation."],
        ["Variation in gravitational acceleration","At distance r from Earth's centre, g=GM/r² outside the sphere. At altitude h above radius R, g_h=g(R/(R+h))². Inside an ideal uniform-density sphere, gravitational field decreases approximately linearly with distance from centre; exact treatment depends on the mass distribution. Weight is mg and can change with location even though mass stays constant."],
        ["Circular orbits and escape","For a circular orbit, gravitational force supplies centripetal force: GMm/r²=mv²/r, giving v=√(GM/r). Orbital period follows T=2πr/v. Escape speed from radius r is √(2GM/r) under the ideal no-drag model. A satellite in lower orbit moves faster but has more negative gravitational potential energy; total orbital energy is negative for a bound circular orbit."]
      ],
      [
        {formula:"F=Gm₁m₂/r²; g=GM/r²",meaning:"Newtonian gravitational force and field outside a spherical mass.",when:"Force, field and orbital calculations.",units:"G in N m² kg⁻²; g in m s⁻².",trap:"Use centre-to-centre separation."},
        {formula:"V=−GM/r; U=−GMm/r (zero at infinity)",meaning:"Gravitational potential and potential energy.",when:"Energy and escape problems.",units:"V in J kg⁻¹; U in J.",trap:"The negative sign is meaningful."},
        {formula:"v_orbit=√(GM/r); v_escape=√(2GM/r)",meaning:"Circular-orbit and escape speeds under ideal assumptions.",when:"Satellite or launch problems.",units:"m s⁻¹.",trap:"Orbit radius r is measured from the planet's centre."}
      ],
      [
        {title:"Escape speed comparison",steps:["v_escape=√(2GM/R).","Circular speed at surface radius is √(GM/R).","Therefore escape speed is √2 times circular speed at the same radius.","This compares ideal speeds and ignores atmosphere/rotation." ]},
        {title:"Gravity at altitude",steps:["For height h=R above Earth's surface, radius from centre is 2R.","g_h=GM/(2R)²=GM/(4R²).","Since surface g=GM/R², g_h=g/4.","Use distance from centre, not altitude alone, in inverse-square formulas."]}
      ],
      ["Using altitude h instead of centre distance r in orbital formulae.","Dropping the negative sign from gravitational potential energy.","Confusing mass and weight.","Treating escape speed and orbital speed as identical."],
      ["CBSE/JEE: inverse-square law, potential, satellite speed/period, variation of g and escape speed."],
      ["Why is gravitational potential negative under the infinity reference?","What determines orbital speed?","How does g change at twice Earth's radius from the centre?"],
      ["Gravitational field: force per unit mass.","Gravitational potential: potential energy per unit mass.","Escape speed: minimum ideal launch speed to reach infinity with zero final speed."]),
    make("Class 11","Physics","Mechanical Properties of Solids",
      "Connect stress, strain, elastic moduli, Hooke's law, energy stored in deformation and the limits of ideal elasticity.",
      [
        ["Stress and strain","Stress is internal restoring force per cross-sectional area under load; tensile/compressive stress is normal, while shear stress acts tangentially. Strain is relative deformation, such as ΔL/L, and is dimensionless. Stress depends on applied force and area, while the amount of strain depends on material and geometry. A larger area gives lower stress under the same axial force."],
        ["Hooke's law and elastic moduli","Within the elastic limit, stress is proportional to strain for a suitable deformation mode. Young's modulus is longitudinal stress/longitudinal strain; bulk modulus relates pressure change to fractional volume change; shear modulus relates shear stress to shear strain. Larger modulus means a stiffer response for the same kind of loading, not necessarily a material that breaks at higher stress."],
        ["Stress-strain curve","A stress–strain curve distinguishes linear elastic behaviour, yield/plastic deformation and failure depending on material. Elastic deformation is recoverable when the load is removed within the elastic range; plastic deformation is not fully recovered. Ultimate strength and breaking stress are separate points. Read the axes and material context carefully."],
        ["Energy stored in elastic deformation","For a linearly elastic spring-like material, work done to stretch it is stored as elastic potential energy. Since force rises from zero to F in a Hooke-law stretch, average force is F/2 and work is ½FΔL. Divide energy by volume to obtain energy density. These expressions require the linear elastic regime."]
      ],
      [
        {formula:"Stress=F/A; longitudinal strain=ΔL/L",meaning:"Loading intensity and relative extension/compression.",when:"Elastic deformation.",units:"Stress in Pa; strain dimensionless.",trap:"Area is cross-section perpendicular to force."},
        {formula:"Young's modulus Y=(F/A)/(ΔL/L)=FL/(AΔL)",meaning:"Stiffness for longitudinal deformation.",when:"Wire/rod extension.",units:"Pa.",trap:"Use consistent length and area units."},
        {formula:"Elastic energy U=½FΔL=½kx² (linear elastic response)",meaning:"Energy stored in a linearly elastic element.",when:"Stretching/compression.",units:"J.",trap:"Not valid beyond the linear elastic regime."}
      ],
      [
        {title:"Wire extension",steps:["Wire length L=2 m, area A=1×10⁻⁶ m², force F=100 N, Young's modulus Y=2×10¹¹ Pa.","ΔL=FL/(AY).","ΔL=100×2/(10⁻⁶×2×10¹¹)=200/(2×10⁵)=0.001 m.","Extension=1 mm; check the small-strain assumption."]},
        {title:"Stress comparison",steps:["Same axial force acts on wires with areas A and 2A.","Stress in first is F/A; in second F/(2A).","The second stress is half as large.","This does not by itself establish which wire breaks first because material strength and defects matter too."]}
      ],
      ["Confusing stress (Pa) with force (N).","Treating strain as having a length unit.","Using Young's modulus to predict breaking strength without data.","Applying Hooke's law beyond the elastic limit."],
      ["JEE: modulus calculations, wire extension, energy density and stress-strain graphs. Include units and distinguish stiffness from strength."],
      ["Why is strain dimensionless?","What is the physical meaning of Young's modulus?","When does U=½kx² apply?"],
      ["Stress: force per area inside material.","Strain: relative deformation.","Elastic limit: range where the material returns to original shape after unloading."]),
    make("Class 11","Physics","Mechanical Properties of Fluids",
      "Use hydrostatic pressure, buoyancy, continuity, Bernoulli, viscosity and surface tension while checking assumptions.",
      [
        ["Pressure and hydrostatics","Pressure is normal force per area. In a fluid at rest, pressure at a point is isotropic and increases with depth because of the weight of fluid above. Hydrostatic pressure difference is ΔP=ρgΔh. Atmospheric pressure may be added for absolute pressure; gauge pressure is relative to atmospheric pressure. Always check which pressure the question requests."],
        ["Buoyancy and floating","The buoyant force equals the weight of displaced fluid in the Archimedes model. A floating body is in vertical equilibrium when buoyancy balances its weight. For uniform-density body and fluid, the submerged-volume fraction relates to density ratio. An object can float with average density lower than fluid density or sink when average density exceeds it, but shape and trapped air can change the average density."],
        ["Continuity and Bernoulli","Steady incompressible flow obeys Av=constant along a pipe. Bernoulli's relation P+½ρv²+ρgh=constant along a streamline for ideal steady inviscid flow with no unaccounted work/energy losses. A narrower section generally has higher speed under continuity; pressure changes follow Bernoulli only under those assumptions. It is not a universal formula for turbulent or strongly viscous flow."],
        ["Viscosity and surface tension","Viscosity quantifies resistance to relative fluid motion and causes energy dissipation in real flows. Stokes drag on a small sphere at low Reynolds number is F=6πηrv under its restricted assumptions. Surface tension arises from molecular interactions at a liquid interface; capillary rise depends on surface tension, contact angle, tube radius, density and gravity. Use the appropriate regime for each formula."]
      ],
      [
        {formula:"ΔP=ρgΔh",meaning:"Hydrostatic pressure difference.",when:"Fluid at rest and vertical height difference.",units:"Pa.",trap:"Use density of the fluid and vertical depth, not path length."},
        {formula:"A₁v₁=A₂v₂ (steady incompressible flow)",meaning:"Continuity for volume flow.",when:"Pipe area/speed.",units:"m³ s⁻¹ for Av.",trap:"If radius halves, area becomes one quarter."},
        {formula:"P+½ρv²+ρgh=constant",meaning:"Bernoulli's equation along a streamline under ideal assumptions.",when:"Pressure-speed-height comparison.",units:"Pa (energy per volume).",trap:"State steady, incompressible, inviscid assumptions."},
        {formula:"F_viscous=6πηrv (Stokes regime)",meaning:"Low-speed drag on a sphere in a viscous fluid.",when:"Small spherical particle at low Reynolds number.",units:"N; η in Pa·s.",trap:"Not a general drag law for turbulent/high-speed motion."}
      ],
      [
        {title:"Pressure at depth",steps:["Water density 1000 kg/m³, depth 5 m and g=9.8 m/s².","Gauge pressure ΔP=ρgh=1000×9.8×5.","ΔP=49,000 Pa=49 kPa.","Absolute pressure would also include atmospheric pressure if requested."]},
        {title:"Pipe narrowing",steps:["Cross-sectional area falls from 4A to A in steady incompressible flow.","A₁v₁=A₂v₂, so 4A v₁=A v₂.","v₂=4v₁.","If radius—not area—falls by a factor of 2, speed changes by a factor of 4."]}
      ],
      ["Confusing gauge and absolute pressure.","Applying Bernoulli without checking fluid-flow assumptions.","Using radius ratios as area ratios.","Applying Stokes drag outside low-Reynolds-number conditions."],
      ["JEE: manometers, buoyancy, continuity, Bernoulli, viscosity and capillary action. Draw pressure levels and state assumptions."],
      ["What does buoyant force equal?","Why does velocity increase in a narrower pipe under incompressible continuity?","When is Stokes' law suitable?"],
      ["Gauge pressure: pressure above ambient reference.","Viscosity: resistance to shear flow.","Surface tension: force per unit length at a liquid interface."]),
    make("Class 11","Physics","Thermal Properties of Matter",
      "Distinguish temperature and heat, apply expansion/calorimetry, phase changes, conduction/convection/radiation and ideal heat-transfer models.",
      [
        ["Temperature and heat","Temperature characterises thermal state and determines the direction of spontaneous heat transfer between systems in contact. Heat is energy transferred because of temperature difference, not a substance stored inside an object. Two bodies can have the same temperature but different internal energy due to mass/material/state. Celsius and Kelvin increments are equal, but absolute thermodynamic temperatures use Kelvin."],
        ["Thermal expansion","Linear expansion for small temperature changes is ΔL=αL₀ΔT; volume expansion is ΔV≈βV₀ΔT with β≈3α for isotropic solids in the elementary model. Real coefficients can vary with temperature. Expansion can affect gaps, bridges, railway tracks and bimetallic strips. When a body is constrained from expanding, thermal stress can arise; do not apply unconstrained expansion formula without considering the constraint."],
        ["Specific heat and latent heat","Heat for a temperature change without phase change is Q=mcΔT. During a phase change at constant pressure, Q=mL while temperature remains approximately constant for a pure substance at its transition condition. For mixtures/calorimetry, total heat gained plus heat lost equals zero in an isolated system under the model. Include container heat capacity and state whether heat loss to surroundings is ignored."],
        ["Heat transfer and radiation","Conduction transfers thermal energy through microscopic interactions; convection moves fluid carrying energy; radiation transfers energy via electromagnetic waves and needs no material medium. Fourier's law gives heat-flow rate proportional to area and temperature gradient for suitable materials. Stefan–Boltzmann radiation scales as absolute temperature to the fourth power for ideal blackbody emission; net exchange depends on surroundings and emissivity."]
      ],
      [
        {formula:"Q=mcΔT; phase change Q=mL",meaning:"Sensible and latent heat.",when:"Calorimetry.",units:"Q in J, c in J kg⁻¹ K⁻¹, L in J kg⁻¹.",trap:"Do not use mcΔT through a pure phase change plateau."},
        {formula:"ΔL=αL₀ΔT; ΔV≈βV₀ΔT",meaning:"Small thermal expansion.",when:"Length/volume change due to heating.",units:"α,β in K⁻¹.",trap:"For isotropic solids β≈3α under the simple approximation."},
        {formula:"P_rad=εσAT⁴ (idealised emitted power)",meaning:"Thermal radiation for a surface under the model.",when:"Radiative heat emission.",units:"W.",trap:"Net heat exchange with surroundings depends on T⁴−T_surr⁴ and emissivity."}
      ],
      [
        {title:"Heating a metal block",steps:["Mass 2 kg, specific heat 500 J kg⁻¹ K⁻¹ and temperature increase 10 K.","Q=mcΔT=2×500×10.","Q=10,000 J=10 kJ.","Assumes no phase change and approximately constant c over this interval."]},
        {title:"Thermal expansion",steps:["A 2 m rod has α=1.2×10⁻⁵ K⁻¹ and warms by 50 K.","ΔL=αL₀ΔT=1.2×10⁻⁵×2×50.","ΔL=1.2×10⁻³ m=1.2 mm.","Check that the fractional expansion is small and the rod is free to expand."]}
      ],
      ["Calling heat and temperature the same thing.","Using latent heat plus mcΔT in the wrong phase-change stage.","Forgetting Kelvin in absolute-temperature radiation formulas.","Applying expansion formulas when the body is constrained without additional mechanics."],
      ["CBSE/JEE: heat capacity, latent heat, expansion, thermal conduction and radiation. Draw heating curves for phase changes."],
      ["Why can temperature stay constant while heat is supplied?","What differs between conduction and convection?","Why is Kelvin required in T⁴ radiation laws?"],
      ["Specific heat: energy per mass per temperature change.","Latent heat: energy per mass for phase transition.","Emissivity: radiating effectiveness relative to blackbody."]),
    make("Class 11","Physics","Thermodynamics",
      "Use the first law, thermodynamic sign conventions, work on P–V diagrams, ideal-gas processes and heat-engine limits.",
      [
        ["First law and sign conventions","A thermodynamic system is described by state variables such as pressure, volume and temperature. Under the convention used here, Q is positive into the system and W is positive work done on the system, giving ΔU=Q+W. If a textbook instead defines W as work done by the system, it commonly writes ΔU=Q−W. Both are consistent if definitions are not mixed."],
        ["Work on a pressure-volume diagram","For quasi-static expansion/compression, work by gas is W_by=∫P dV; it is positive in expansion for this convention and corresponds to the area under the P–V curve. Constant-volume processes have zero P–V work because dV=0. A cycle returns to its initial state, so net change in internal energy over the complete cycle is zero, while net heat/work can be non-zero."],
        ["Ideal gas processes","Isothermal means constant temperature; for an ideal gas internal energy depends only on temperature, so ΔU=0. Isochoric means constant volume and no P–V work. Isobaric means constant pressure. Adiabatic means no heat transfer (Q=0), not necessarily constant temperature. For a reversible adiabatic ideal-gas process, PV^γ=constant under the standard assumptions."],
        ["Heat engines and entropy","A heat engine absorbs heat from a hot reservoir, does work and rejects heat to a cooler reservoir. No cyclic engine can convert all absorbed heat into work; efficiency is limited by the second law. For a reversible Carnot engine η=1−T_c/T_h with absolute temperatures in Kelvin. Entropy change and irreversibility explain why real processes cannot exceed the ideal limit."]
      ],
      [
        {formula:"ΔU=Q+W (W positive when done on system)",meaning:"First law using the stated sign convention.",when:"Heat/work/internal-energy calculations.",units:"J.",trap:"Translate the given work convention before substituting signs."},
        {formula:"W_by=∫P dV",meaning:"Quasi-static boundary work by gas.",when:"P–V diagrams and process comparisons.",units:"Pa·m³=J.",trap:"The algebraic sign depends on expansion/compression and chosen convention."},
        {formula:"Isothermal ideal gas: ΔU=0; adiabatic: Q=0",meaning:"Different restrictions on process.",when:"Apply first law to process types.",units:"Energy.",trap:"Adiabatic does not mean isothermal."},
        {formula:"Carnot η=1−T_c/T_h",meaning:"Maximum reversible heat-engine efficiency between reservoirs.",when:"Ideal engine comparison.",units:"Dimensionless; T in K.",trap:"Do not use Celsius in the ratio."}
      ],
      [
        {title:"Isothermal ideal gas",steps:["An ideal gas absorbs 500 J while expanding isothermally.","Since temperature is constant, ΔU=0.","Using ΔU=Q+W_on: 0=500+W_on, so W_on=−500 J.","Negative work on the system means the gas did 500 J of work on surroundings."]},
        {title:"Carnot efficiency",steps:["Hot reservoir T_h=600 K and cold reservoir T_c=300 K.","η=1−300/600=0.5.","Ideal maximum efficiency is 50%.","No real engine between the same reservoirs exceeds this reversible limit."]}
      ],
      ["Mixing work sign conventions.","Saying adiabatic means temperature does not change.","Using Celsius in Carnot efficiency.","Ignoring P–V work for a changing-volume process."],
      ["CBSE/JEE: work-area, first law, ideal-gas processes, cyclic paths and Carnot efficiency. State the sign convention before calculation."],
      ["What does a zero ΔU over a complete cycle imply?","How do isothermal and adiabatic differ?","Why must reservoir temperatures be in Kelvin?"],
      ["State function: property determined by current state.","Adiabatic: no heat transfer.","Isothermal: constant temperature.","Efficiency: useful work output divided by heat absorbed."]),
    make("Class 11","Physics","Kinetic Theory",
      "Relate ideal-gas pressure and temperature to molecular motion, root-mean-square speed, degrees of freedom and heat capacities.",
      [
        ["Ideal-gas model","An ideal gas is modelled as many particles with negligible molecular volume and negligible intermolecular force except during elastic collisions. Pressure arises from momentum transfer to container walls. The model works better for sufficiently low density and not-too-low temperature, away from condensation. PV=nRT links macroscopic variables but does not by itself describe every real-gas deviation."],
        ["Pressure and molecular speed","Kinetic theory gives P=(1/3)ρc_rms² for a large idealised gas sample, where ρ is mass density and c_rms is root-mean-square molecular speed. Higher temperature increases average translational kinetic energy and therefore typical molecular speed at fixed gas identity. RMS speed differs from arithmetic mean speed; it is the square root of the mean squared speed."],
        ["Equipartition and heat capacity","For a classical ideal gas, each quadratic degree of freedom contributes ½kT average energy per molecule. Translational degrees are three; rotational/vibrational modes depend on molecule and temperature. Internal energy can be expressed U=(f/2)nRT for f active quadratic degrees in the simple model. Molar heat capacities satisfy C_p−C_v=R for ideal gases under standard conditions."],
        ["RMS speed and molecular mass","c_rms=√(3RT/M) for molar mass M in kg mol⁻¹. At the same temperature, lighter molecules have higher RMS speed. Molecular kinetic energy averages depend on T, while the speed distribution also depends on molecular mass. Track the mass units carefully; using g mol⁻¹ without conversion produces a factor error."]
      ],
      [
        {formula:"PV=nRT",meaning:"Ideal gas equation.",when:"Relate pressure, volume, amount and absolute temperature.",units:"Use compatible units for R.",trap:"Temperature must be Kelvin."},
        {formula:"P=⅓ρc_rms²",meaning:"Kinetic-theory pressure relation.",when:"Find RMS molecular speed or pressure.",units:"ρ kg m⁻³, speed m s⁻¹, P Pa.",trap:"ρ is mass density of the gas."},
        {formula:"c_rms=√(3RT/M)",meaning:"RMS speed from temperature and molar mass.",when:"Compare molecules or estimate speeds.",units:"M in kg mol⁻¹.",trap:"Convert molar mass to SI."},
        {formula:"C_p−C_v=R (ideal gas, per mole)",meaning:"Molar heat-capacity difference.",when:"Thermodynamic properties of an ideal gas.",units:"J mol⁻¹ K⁻¹.",trap:"Use molar capacities, not total heat capacities, in this relation."}
      ],
      [
        {title:"Find RMS speed",steps:["For a gas with molar mass M at temperature T, use c_rms=√(3RT/M).","Convert M to kg mol⁻¹ and T to kelvin.","Substitute R=8.314 J mol⁻¹ K⁻¹.","Check dimensions: RT/M gives m² s⁻²; square root gives m/s."]},
        {title:"Heat capacity relation",steps:["A gas has molar Cv=(3/2)R in a simple monatomic ideal-gas model.","Cp=Cv+R=(5/2)R.","The ratio γ=Cp/Cv=5/3 under that model.","Molecular degrees of freedom/active modes can change this ratio for other gases."]}
      ],
      ["Using Celsius in PV=nRT or RMS speed.","Confusing RMS speed with mean speed.","Using g/mol instead of kg/mol.","Applying classical equipartition without considering model limits."],
      ["JEE: ideal gas, RMS speed, pressure relation, degrees of freedom and Cp−Cv. Show units in speed calculations."],
      ["Why do lighter molecules move faster at the same temperature?","What is the RMS speed formula?","What does C_p−C_v=R apply to?"],
      ["RMS speed: square root of mean squared molecular speed.","Degrees of freedom: independent quadratic energy modes in a model.","Ideal gas: model neglecting molecular size and intermolecular forces."]),
    make("Class 11","Physics","Oscillations",
      "Describe simple harmonic motion with displacement, velocity, acceleration, energy, phase and spring/pendulum period.",
      [
        ["Condition for SHM","Simple harmonic motion occurs when restoring acceleration is proportional to displacement from equilibrium and opposite in direction: a=−ω²x. The resulting motion is sinusoidal. Amplitude A is maximum displacement, period T the time for one cycle, frequency f=1/T, and angular frequency ω=2πf. State which point is equilibrium and define the positive displacement direction."],
        ["Velocity, acceleration and phase","For x=Acos(ωt+φ), v=−Aωsin(ωt+φ) and a=−ω²x. Speed is maximum at equilibrium and zero at turning points; acceleration magnitude is maximum at turning points and zero at equilibrium. Phase specifies where the oscillator is in its cycle. A phase difference describes relative timing between two oscillations."],
        ["Energy exchange","For an ideal mass-spring oscillator, total energy E=½kA² remains constant. Potential energy is ½kx² and kinetic energy is ½k(A²−x²). At equilibrium all ideal mechanical energy is kinetic; at extreme displacement all is spring potential. Damping transfers mechanical energy to thermal/internal energy, so amplitude decays."],
        ["Period of spring and simple pendulum","For a mass-spring system, T=2π√(m/k). For a simple pendulum of small angular amplitude, T=2π√(L/g), approximately independent of bob mass. The pendulum relation requires small angles for sinθ≈θ and neglects friction/string mass. Increasing spring mass raises the period; increasing spring stiffness lowers it."]
      ],
      [
        {formula:"a=−ω²x; x=Acos(ωt+φ)",meaning:"Defining relation and sinusoidal position for SHM.",when:"Time-dependent oscillation.",units:"ω in rad s⁻¹; x in m.",trap:"Negative sign indicates acceleration toward equilibrium."},
        {formula:"T=2π/ω; f=1/T",meaning:"Period, angular frequency and frequency.",when:"Oscillation timing.",units:"T seconds, f Hz.",trap:"Frequency counts cycles per second."},
        {formula:"T_spring=2π√(m/k)",meaning:"Ideal mass-spring period.",when:"Horizontal/vertical spring SHM around equilibrium.",units:"m in kg, k in N/m.",trap:"For vertical spring, gravity shifts equilibrium but not the small-oscillation period."},
        {formula:"T_pendulum=2π√(L/g) (small angle)",meaning:"Simple-pendulum period.",when:"Small-amplitude oscillations.",units:"L in m, g m/s².",trap:"Not valid for large angular oscillations without correction."}
      ],
      [
        {title:"Find spring period",steps:["Mass m=0.25 kg and spring constant k=100 N/m.","T=2π√(m/k)=2π√(0.25/100).","√0.0025=0.05 s; T≈0.314 s.","The period increases if mass increases and decreases if stiffness increases."]},
        {title:"Energy at half amplitude",steps:["An ideal oscillator has amplitude A and total energy E=½kA².","At x=A/2, spring potential U=½k(A²/4)=E/4.","Kinetic energy K=E−U=3E/4.","This comparison holds for undamped ideal SHM."]}
      ],
      ["Dropping the restoring minus sign.","Confusing frequency with angular frequency.","Using the pendulum formula for large angles without qualification.","Assuming amplitude affects the ideal spring period."],
      ["JEE: SHM equations, energy, phase, spring combination and pendulum assumptions. Check whether a quantity is maximum at equilibrium or at extremes."],
      ["Where are speed and acceleration magnitude maximum?","What does phase represent?","Which assumption supports the simple-pendulum period formula?"],
      ["Amplitude: maximum displacement.","Angular frequency: 2π times frequency.","Damping: loss of oscillation energy to other forms."]),
    make("Class 11","Physics","Waves",
      "Understand travelling-wave equations, wave speed, superposition, standing waves, sound, beats and Doppler-effect sign conventions.",
      [
        ["Travelling waves","A sinusoidal wave can be written y=A sin(kx−ωt+φ) for travel in the +x direction under the common sign convention. Wavelength λ is spatial repeat distance, period T temporal repeat time, frequency f=1/T, and wave number k=2π/λ. Wave speed v=ω/k=fλ. The medium's particles oscillate; the wave transports energy without carrying the medium bodily along in an ideal travelling wave."],
        ["Superposition and standing waves","In a linear medium, displacements from overlapping waves add. Equal-frequency waves travelling in opposite directions can form a standing wave with nodes (zero displacement at all times) and antinodes (maximum oscillation amplitude). Standing waves have no net energy propagation pattern in the ideal case; node spacing is λ/2 and adjacent node-antinode spacing λ/4."],
        ["Strings and air columns","A string fixed at both ends has nodes at ends and allowed lengths L=nλ/2. An ideal open pipe has displacement antinodes at both ends; a pipe closed at one end has a displacement node at the closed end and antinode at the open end, giving odd-harmonic frequencies in the simple model. End correction and real boundary behaviour can shift measured resonances."],
        ["Sound, beats and Doppler effect","Sound is a longitudinal mechanical wave in gases/liquids/solids and requires a medium. Beats occur when two nearby frequencies superpose, with beat frequency |f₁−f₂| under the standard simple conditions. Doppler shift arises from relative motion of source/observer and wavefronts; signs must be selected by whether separation decreases or increases. Use the formula matching the motion geometry, not a memorised sign without a sketch."]
      ],
      [
        {formula:"v=fλ=ω/k; k=2π/λ; ω=2πf",meaning:"Travelling-wave speed and parameters.",when:"Wave equations and wavelength/frequency.",units:"v m/s, f Hz, λ m, ω rad/s.",trap:"A wave's speed depends on medium; frequency is set by source at a stationary boundary."},
        {formula:"Fixed string: L=nλ/2; fₙ=nv/(2L)",meaning:"Standing-wave harmonics for both ends fixed.",when:"String resonance.",units:"n=1,2,3,…",trap:"Do not confuse harmonic number with node count."},
        {formula:"Beat frequency=|f₁−f₂|",meaning:"Envelope oscillation from nearby frequencies.",when:"Tuning fork and sound interference questions.",units:"Hz.",trap:"Requires close frequencies and a suitable simple superposition model."},
        {formula:"Doppler shift: choose numerator/denominator signs by approach/separation",meaning:"Observed frequency differs due to relative motion.",when:"Moving source/observer in a stationary medium.",units:"Hz and m/s.",trap:"Sound Doppler is measured relative to the medium; a moving medium adds complexity."}
      ],
      [
        {title:"Wave speed",steps:["A wave has frequency 200 Hz and wavelength 1.5 m.","v=fλ=200×1.5.","Wave speed=300 m/s.","If the wave enters a new medium, speed and wavelength can change while frequency stays fixed at the boundary under stationary conditions."]},
        {title:"String fundamental",steps:["A 1 m string is fixed at both ends and wave speed is 100 m/s.","Fundamental wavelength λ₁=2L=2 m.","Frequency f₁=v/λ₁=100/2=50 Hz.","Second harmonic is 100 Hz with λ₂=L=1 m."]}
      ],
      ["Using k=1/λ instead of 2π/λ.","Treating nodes and antinodes as the same.","Applying closed-pipe even harmonics in the ideal model.","Choosing Doppler signs without identifying approach/separation."],
      ["JEE: wave equation direction, standing harmonics, string/pipe conditions, beats and Doppler effect. Draw boundary conditions."],
      ["What is the distance between adjacent nodes?","Why does sound need a medium?","What is the beat frequency for 256 Hz and 260 Hz tones?"],
      ["Wavelength: distance between equal-phase points.","Node: standing-wave point of zero displacement.","Antinode: standing-wave point of maximum amplitude.","Doppler effect: frequency shift due to relative motion."]),
    make("Class 12","Physics","Electric Charges and Fields",
      "Build electrostatic force/field, superposition, electric dipoles, flux and Gauss's law with correct vector geometry.",
      [
        ["Charge and Coulomb's law","Electric charge is conserved and quantised in units of elementary charge. Like charges repel and unlike charges attract. Coulomb's law gives magnitude k|q₁q₂|/r² along the line between point charges in a vacuum/appropriate medium. The force on each charge has equal magnitude and opposite direction. In multiple-charge systems, force/field vectors add by superposition."],
        ["Electric field and dipole","Electric field E is force per unit positive test charge. For a point charge magnitude E=k|q|/r² with direction away from positive and toward negative charge. A dipole consists of equal/opposite charges separated by a distance; its dipole moment points from negative to positive in the standard convention. In a uniform field a dipole experiences torque but no net force, while non-uniform fields may exert net force."],
        ["Electric flux and Gauss's law","Electric flux measures field through a surface: for uniform field and flat area, Φ=EA cosθ, where θ is between field and area normal. Gauss's law says net flux through a closed surface equals enclosed charge divided by ε₀. Gauss's law is always true; it gives a simple direct field calculation when symmetry makes the field magnitude/direction manageable over a Gaussian surface."],
        ["Field by symmetry and conductors","Spherical, cylindrical and planar symmetries allow suitable Gaussian surfaces. External charges can create field inside a surface but contribute zero net flux through the closed surface. In electrostatic equilibrium, the field within conducting material is zero and excess charge resides on its surface; a conductor is an equipotential. Be precise about whether a point is inside the conducting material or in a cavity."]
      ],
      [
        {formula:"F=k|q₁q₂|/r²; E=F/q_test",meaning:"Point-charge force and electric field.",when:"Electrostatic force and field.",units:"F N, E N/C or V/m.",trap:"Directions require charge signs and vector addition."},
        {formula:"Φ=EA cosθ; ∮E·dA=Q_enclosed/ε₀",meaning:"Electric flux and Gauss's law.",when:"Flux and symmetric field.",units:"Flux N m²/C.",trap:"θ is measured between field and surface normal; Gauss uses a closed surface."},
        {formula:"Dipole torque τ=pE sinθ",meaning:"Torque on electric dipole in uniform field.",when:"Dipole orientation/energy.",units:"N m.",trap:"Uniform field gives zero net force on an ideal dipole but torque can be nonzero."}
      ],
      [
        {title:"Point-charge field",steps:["A +2 μC charge is 0.30 m from a point.","E=k|q|/r²≈(9×10⁹)(2×10⁻⁶)/(0.30²).","E≈1.8×10⁴/0.09=2.0×10⁵ N/C.","Field points away from the positive charge."]},
        {title:"Flux through a tilted surface",steps:["Uniform field E passes through flat area A at angle θ=60° between E and the surface normal.","Φ=EA cos60°=EA/2.","If the stated angle were with the surface plane, the cosine/sine would change.","Clarify the angle convention before substituting."]},
        {title:"Gauss-law reasoning",steps:["For a spherical charge distribution with spherical symmetry, choose a concentric spherical Gaussian surface.","By symmetry E is radial and has constant magnitude on the surface.","Total flux is E(4πr²)=Q_enclosed/ε₀.","Solve for E=Q_enclosed/(4πε₀r²) outside a point/spherical charge distribution."]}
      ],
      ["Adding field magnitudes without directions.","Using total charge instead of enclosed charge in Gauss's law.","Using angle from surface plane in EA cosθ formula.","Assuming Gauss's law only applies when symmetry is present; symmetry is needed for simple field extraction, not for law validity."],
      ["JEE: vector superposition, field zero points, dipole, flux and Gauss-law symmetry. State the Gaussian surface and why field is constant on it."],
      ["What does electric field direction mean?","Which charge enters Gauss's law?","What is the angle used in electric flux?"],
      ["Electric field: force per unit positive test charge.","Dipole moment: charge magnitude times separation vector.","Electric flux: surface integral of field's normal component."]),
    make("Class 12","Physics","Electrostatic Potential and Capacitance",
      "Separate field from potential, compute potential energy/work, understand conductors and dielectrics, and reduce capacitor networks.",
      [
        ["Potential and potential difference","Electric potential V is potential energy per unit charge and is a scalar. Potential difference relates work per unit charge for moving a test charge under electrostatic conditions. Electric field points toward greatest decrease in potential; along a uniform field, ΔV=−E·Δr. Superposition adds potentials algebraically while fields add vectorially."],
        ["Conductors and equipotentials","A conductor in electrostatic equilibrium has zero electric field in the conducting material and constant potential throughout it. Electric field at the surface is normal in the ideal equilibrium model. Equipotential surfaces never require work to move a charge along them under the electrostatic force because ΔV=0. Potential may be nonzero even where field is zero, such as the centre of symmetric identical charges."],
        ["Capacitance and dielectrics","Capacitance C=Q/V measures charge stored per potential difference for a capacitor's geometry and medium; it is not determined by charge alone. Parallel-plate capacitance C=εA/d under the ideal approximation. A dielectric polarises in the field and changes capacitance. Before computing energy change, identify whether the battery remains connected (V fixed) or capacitor isolated (Q fixed)."],
        ["Networks and stored energy","Parallel capacitors share the same voltage and add capacitances; series capacitors in a simple isolated chain carry equal charge magnitude and reciprocal capacitances add. Stored energy can be written U=½CV²=Q²/(2C)=½QV. If C changes, these expressions may predict different dependencies depending on the constraint. Do not mix individual capacitor voltage and total supply voltage."]
      ],
      [
        {formula:"V=U/q; ΔV=−∫E·dl",meaning:"Potential energy per charge and field-potential relation.",when:"Work/potential problems.",units:"Volt=J/C.",trap:"Potential is scalar; field is vector."},
        {formula:"C=Q/V; parallel plate C=εA/d",meaning:"Capacitance and ideal parallel-plate geometry.",when:"Charge/potential and capacitor construction.",units:"Farad.",trap:"Changing plate separation or dielectric changes capacitance."},
        {formula:"Cparallel=ΣCᵢ; 1/Cseries=Σ1/Cᵢ",meaning:"Equivalent capacitance.",when:"Capacitor networks.",units:"Farad.",trap:"Parallel and series rules are opposite to resistor rules."},
        {formula:"U=½CV²=Q²/(2C)=½QV",meaning:"Energy stored in a capacitor.",when:"Energy/charge/potential questions.",units:"J.",trap:"Determine whether Q or V is fixed before comparing states."}
      ],
      [
        {title:"Equivalent series capacitors",steps:["Two capacitors 6 μF and 3 μF in series.","1/Ceq=1/6+1/3=1/2 per μF, so Ceq=2 μF.","Across 12 V, series charge Q=CeqV=24 μC.","Each capacitor has the same charge magnitude; voltages are Q/C, 4 V and 8 V."]},
        {title:"Work from potential difference",steps:["A 2 C charge moves through a potential increase of 5 V.","Potential-energy change ΔU=qΔV=2×5=10 J.","Work by the electrostatic field is −ΔU under the usual convention.","State whether the question asks work by the field or external work."]},
        {title:"Battery disconnected vs connected",steps:["An isolated charged capacitor has approximately fixed Q; connecting a battery fixes V.","Inserting a dielectric increases C.","At fixed V, Q=CV and stored energy ½CV² increase; battery supplies charge/energy.","At fixed Q, U=Q²/(2C) decreases as C rises; the source/field mechanical energy balance differs."]}
      ],
      ["Confusing scalar potential with vector field.","Using resistor combination rules for capacitors.","Assuming charge and voltage are both fixed during dielectric insertion.","Adding capacitor voltage drops incorrectly in a parallel network."],
      ["JEE: field-potential relation, conductor properties, dielectric insertion, equivalent capacitance and energy constraints. State Q-fixed or V-fixed."],
      ["Can potential be nonzero where E=0?","Which connection shares voltage?","Why does dielectric insertion depend on whether battery stays connected?"],
      ["Equipotential: surface of constant potential.","Capacitance: stored charge per voltage.","Dielectric: insulating polarizable material."]),
    make("Class 12","Physics","Current Electricity",
      "Understand drift/current, resistivity, emf/internal resistance, Kirchhoff laws, bridge circuits, meter connections and power.",
      [
        ["Current and drift","Current I=dQ/dt measures charge flow. In a metal, mobile electrons drift opposite conventional current. A simple relation I=nqAv_d links carrier density n, charge magnitude q, cross-section A and drift-speed magnitude v_d. Drift speed is usually small even when electrical signals propagate quickly through a circuit."],
        ["Resistance and resistivity","R=ρL/A for a uniform wire. Resistivity describes material and temperature dependence; resistance also depends on geometry. Series resistances add, while parallel resistance obeys reciprocal addition. Temperature can change resistivity; use the provided temperature coefficient when questions include it. A V-I relation is linear for an ohmic conductor under constant conditions."],
        ["EMF and internal resistance","Electromotive force (emf) is energy supplied per unit charge by a source, not literally a force. For a battery with emf ε and internal resistance r delivering current I, terminal voltage V=ε−Ir. During charging, the terminal voltage can exceed emf under the simple model. Internal resistance causes power dissipation inside the source."],
        ["Kirchhoff laws, meters and bridge circuits","Junction law follows charge conservation; loop law follows energy conservation. Choose current directions arbitrarily and a negative solved current means actual direction is opposite the guess. An ideal ammeter has zero resistance and connects in series; ideal voltmeter has infinite resistance and connects in parallel. Wheatstone bridge balance occurs when the appropriate arm ratios match; derive it from zero galvanometer current rather than memorising the wrong ratio order."]
      ],
      [
        {formula:"I=nqAv_d",meaning:"Current from charge-carrier drift in a conductor.",when:"Connect microscopic carriers to current.",units:"A.",trap:"n is number density and v_d is drift speed magnitude."},
        {formula:"R=ρL/A",meaning:"Uniform-wire resistance.",when:"Geometry/material comparison.",units:"Ω, Ω·m, m, m².",trap:"Convert diameter to radius before computing area."},
        {formula:"V_terminal=ε−Ir (discharging source)",meaning:"Terminal voltage with internal resistance while delivering current.",when:"Real-battery circuit.",units:"V.",trap:"Charging condition has different current direction/sign."},
        {formula:"Junction: ΣI_in=ΣI_out; loop: ΣΔV=0",meaning:"Kirchhoff's circuit rules.",when:"Multi-loop networks.",units:"Current/voltage.",trap:"Keep signs consistent as you traverse each loop."}
      ],
      [
        {title:"Battery with internal resistance",steps:["Emf ε=12 V, internal resistance r=1 Ω, external load R=5 Ω.","Current I=ε/(R+r)=12/6=2 A.","Terminal voltage V=IR=10 V, also ε−Ir=12−2=10 V.","The missing 2 V is drop across internal resistance."]},
        {title:"Kirchhoff sign method",steps:["Assign branch currents and choose loop directions.","Across a resistor along assumed current, record a voltage drop IR; opposite direction is a rise.","Across a source, crossing − to + is a rise; + to − is a drop.","Solve simultaneous equations and interpret any negative assumed current as reversed direction."]},
        {title:"Parallel equivalent resistance",steps:["Resistors 6 Ω and 3 Ω in parallel: 1/R=1/6+1/3=1/2.","Equivalent resistance is 2 Ω.","With a 12 V source, current is 6 A.","Branch currents 2 A and 4 A sum to the total, and equivalent R is below the smaller branch resistance."]}
      ],
      ["Confusing emf and terminal potential difference.","Calling electromotive force a mechanical force.","Placing ammeter in parallel or voltmeter in series.","Using Kirchhoff signs inconsistently."],
      ["JEE: networks, internal resistance, meter/bridge problems, power and Kirchhoff loops. Redraw nodes after reductions."],
      ["Why does a real battery terminal voltage drop under load?","What does a negative solved branch current mean?","What resistance should an ideal ammeter have?"],
      ["EMF: energy supplied per unit charge by a source.","Resistivity: intrinsic electrical property of material.","Terminal voltage: potential difference at source terminals under load."]),
    make("Class 12","Physics","Moving Charges and Magnetism",
      "Apply magnetic force, motion of charged particles, Biot–Savart/Ampère fields, force on current and torque on loops.",
      [
        ["Lorentz force","A moving charge in electric/magnetic fields experiences F=q(E+v×B). Magnetic force magnitude is |q|vB sinθ and is perpendicular to velocity and field. It changes the direction of velocity but does no work because F_B·v=0. If v⊥B, motion is circular; if a velocity component is parallel to B, the path is helical."],
        ["Biot–Savart and Ampère's law","A current element contributes a magnetic field whose magnitude/direction depend on current, length element, angle and inverse square distance. Symmetry simplifies long-straight-wire, circular-loop and solenoid fields. Ampère's law relates a closed line integral of B to enclosed current. Use it only with a path where symmetry permits B to be treated simply."],
        ["Force on wire and torque on loop","A current-carrying conductor in magnetic field experiences F=I L×B for a straight segment. Parallel currents attract and antiparallel currents repel. A current loop has magnetic dipole moment μ=IA n-hat and experiences torque τ=μ×B in uniform field. Net force is zero for an ideal dipole in a uniform field but can be nonzero in a non-uniform field."],
        ["Cyclotron and particle motion","For v perpendicular to uniform B, magnetic force supplies centripetal force: |q|vB=mv²/r, so r=mv/(|q|B). Cyclotron angular frequency |q|B/m in the non-relativistic ideal model is independent of speed/radius. Charge sign controls rotation direction. Electric fields can accelerate particles, while magnetic fields bend trajectories."]
      ],
      [
        {formula:"F=q(E+v×B); |F_B|=|q|vB sinθ",meaning:"Lorentz force.",when:"Charge in electric/magnetic field.",units:"N.",trap:"Magnetic force is zero when v parallel/antiparallel B."},
        {formula:"r=mv/(|q|B) (v⊥B)",meaning:"Radius of circular charged-particle motion.",when:"Uniform magnetic field.",units:"m.",trap:"Use charge magnitude in radius and charge sign for direction."},
        {formula:"F=ILB sinθ; τ=μB sinθ, μ=IA",meaning:"Force on wire and torque on a current loop.",when:"Motors and magnetic moments.",units:"N, N m, A m².",trap:"Angle is between current/dipole direction and B."},
        {formula:"Long straight wire B=μ₀I/(2πr)",meaning:"Magnetic-field magnitude around an ideal long wire.",when:"Wire field under long-wire approximation.",units:"T.",trap:"Use distance from the wire and right-hand direction."}
      ],
      [
        {title:"Charged particle radius",steps:["A proton moves perpendicular to a uniform magnetic field.","Set |q|vB=mv²/r.","r=mv/(|q|B).","Check that the field does no work and speed remains constant in the ideal case."]},
        {title:"Force on a wire",steps:["A 0.20 m wire carries 3 A perpendicular to B=0.5 T.","F=ILB=3×0.20×0.5.","Force=0.30 N.","If angle were 30°, multiply by sin30°." ]},
        {title:"Find current direction",steps:["Use the right-hand rule for v×B for a positive charge.","For a negative charge, force direction is opposite.","Draw v and B vectors perpendicular and identify the cross-product direction.","Do not use Fleming's left-hand rule interchangeably without identifying whether the situation is a current-carrying wire or a moving positive charge."]}
      ],
      ["Saying magnetic force does work on an isolated moving charge in a static field.","Forgetting charge sign changes force direction.","Using field angle measured from wire incorrectly.","Applying ideal cyclotron frequency at relativistic speeds without correction."],
      ["JEE: particle trajectories, field from wires/loops, Ampère's law, wire force, torque and cyclotron."],
      ["Why does magnetic force not change speed?","What determines radius of circular motion?","How does current direction affect force direction?"],
      ["Lorentz force: electric plus magnetic force on moving charge.","Biot–Savart law: field contribution from current element.","Magnetic dipole moment: loop area-current vector."]),
    make("Class 12","Physics","Magnetism and Matter",
      "Connect bar-magnet models with magnetic dipoles, Earth's field, material response and the distinction between diamagnetic, paramagnetic and ferromagnetic substances.",
      [
        ["Magnetic dipole and field lines","A bar magnet has north/south poles and field lines form closed loops; outside the magnet lines run N→S and inside S→N. Isolated magnetic monopoles have not been observed in standard classical descriptions. A current loop acts as a magnetic dipole with moment μ=IA. A dipole in a uniform field experiences torque tending to align its moment with B."],
        ["Earth's magnetic field","Earth's field can be described by horizontal/vertical components and magnetic declination/dip. A compass aligns with the local horizontal component when the setup is ideal. Magnetic north and geographic north are not identical. Use angle definitions carefully, especially if resolving total field B into horizontal and vertical components."],
        ["Material response","Diamagnetic substances acquire a weak induced moment opposing the applied field and are weakly repelled; paramagnetic substances have permanent atomic moments that tend to align weakly with the field; ferromagnetic materials can exhibit strong domain alignment and hysteresis. Temperature and material history affect magnetisation. Do not confuse magnetic susceptibility trends with electrical conductivity."],
        ["Hysteresis and applications","A ferromagnetic material's magnetisation can lag an applied field, forming a hysteresis loop. Soft magnetic materials with narrow loops suit transformer cores because hysteresis loss is lower; hard materials with large coercivity can retain magnetisation for permanent magnets. Retentivity and coercivity describe different properties; interpreting the loop axes is essential."]
      ],
      [
        {formula:"μ=IA",meaning:"Magnetic dipole moment of a current loop.",when:"Torque/energy of a loop.",units:"A m².",trap:"Direction is given by right-hand rule relative to current."},
        {formula:"τ=μB sinθ",meaning:"Dipole torque in uniform magnetic field.",when:"Aligning a magnetic dipole.",units:"N m.",trap:"Torque is zero when parallel or antiparallel, though energy differs."},
        {formula:"B²=B_H²+B_V² (orthogonal components)",meaning:"Total field magnitude from horizontal and vertical components.",when:"Earth-field component questions.",units:"Tesla.",trap:"Use components only when perpendicular as stated."}
      ],
      [
        {title:"Torque on a magnetic dipole",steps:["A loop has μ=0.20 A m² and lies at 30° to B=0.5 T.","τ=μBsinθ=0.20×0.5×0.5.","Torque=0.05 N m.","Torque tends to rotate the dipole toward alignment with the field."]},
        {title:"Separate material behaviours",steps:["A weak field is applied to three sample materials.","Diamagnetic response opposes induced magnetisation and is weak; paramagnetic moments tend to align weakly; ferromagnetic domains align strongly.","Ferromagnets can retain magnetisation after field removal.","Classify using magnetic response and hysteresis, not appearance alone."]}
      ],
      ["Thinking magnetic field lines terminate at isolated poles.","Confusing declination with dip angle.","Treating all magnetic materials as strongly attracted.","Swapping coercivity and retentivity."],
      ["CBSE/JEE: dipole moment/torque, Earth's field components, material classes and hysteresis applications."],
      ["What is the direction of a current-loop magnetic moment?","What does magnetic declination describe?","Why do transformer cores use soft magnetic material?"],
      ["Declination: angle between geographic and magnetic meridian directions.","Coercivity: reverse field needed to reduce magnetisation to zero.","Retentivity: ability to retain magnetisation."]),
    make("Class 12","Physics","Electromagnetic Induction",
      "Understand flux, Faraday's law, Lenz's law, motional emf, self/mutual inductance and energy stored in an inductor.",
      [
        ["Magnetic flux","For a uniform field through a plane surface, flux Φ=BAcosθ, where θ is between B and the surface normal. Flux changes if B, area, orientation or relative position changes. The angle measured from the plane itself uses a complementary relation, so establish the angle convention first. Flux linkage for N turns is NΦ."],
        ["Faraday and Lenz laws","Induced emf magnitude is proportional to rate of flux-linkage change: ε=−N dΦ/dt. The minus sign expresses Lenz's law: induced current produces an effect opposing the change in flux that caused it. It does not simply oppose the external field in every case; when the external flux decreases, induced field tries to sustain it. This is consistent with energy conservation."],
        ["Motional emf and eddy currents","A conductor moving through magnetic field can separate charges because of magnetic force, creating motional emf. For a rod of length l moving perpendicular to B and its length, ε=Blv under simple geometry. Time-varying magnetic fields can induce circulating eddy currents in bulk conductors; they cause heating/braking and can be reduced by laminating transformer cores."],
        ["Inductance and magnetic energy","Self-inductance L relates induced emf to current-change rate, ε=−L dI/dt. Mutual induction occurs when changing current/flux in one coil induces emf in another. Energy stored in an ideal inductor is U=½LI². A changing current is opposed by induced emf; this does not prevent current changing, it resists the change."]
      ],
      [
        {formula:"Φ=BAcosθ; ε=−N dΦ/dt",meaning:"Flux and Faraday induction law.",when:"Coil/magnet/area-orientation changes.",units:"Φ in Wb; ε in V.",trap:"θ is angle between B and surface normal."},
        {formula:"Motional emf ε=Blv (simple perpendicular geometry)",meaning:"Emf across moving rod due to magnetic force.",when:"Rod slides perpendicular to B and its own length.",units:"V.",trap:"If directions are not mutually perpendicular, include relevant vector/angle factors."},
        {formula:"ε_L=−L dI/dt; U=½LI²",meaning:"Self-induced emf and energy in an inductor.",when:"Changing current and magnetic energy.",units:"L in henry, energy J.",trap:"Inductor opposes changes in current, not current itself."}
      ],
      [
        {title:"Average induced emf",steps:["A 100-turn coil has flux per turn changing from 0.02 Wb to 0 in 0.1 s.","Magnitude ε=N|ΔΦ|/Δt=100×0.02/0.1.","ε=20 V.","Direction requires Lenz's law and the direction of the flux change."]},
        {title:"Motional emf",steps:["A 0.5 m rod moves at 4 m/s perpendicular to B=0.3 T and the rod length.","ε=Blv=0.3×0.5×4.","Emf=0.6 V.","If the circuit is closed, induced current additionally depends on the circuit resistance."]},
        {title:"Lenz-law reasoning",steps:["A north pole approaches a coil along its axis.","The induced face acts as a north pole to oppose the approach, repelling the approaching magnet.","If the magnet is pulled away, the induced face acts to attract it and oppose flux reduction.","The direction is defined by the change in flux, not a memorised 'north always repels' rule."]}
      ],
      ["Ignoring the minus sign meaning in Lenz's law.","Using angle to the plane where angle to normal is required.","Assuming a static magnetic field always induces emf.","Confusing self and mutual inductance."],
      ["JEE: flux-change graphs, rod motion, direction of induced current, L/R and energy in inductors. Separate magnitude calculation from direction reasoning."],
      ["What does Lenz's law oppose?","When is motional emf produced?","How is magnetic energy stored in an inductor calculated?"],
      ["Magnetic flux: field through a surface.","Inductance: property relating current change to induced emf.","Eddy currents: circulating currents induced in bulk conductors."]),
    make("Class 12","Physics","Alternating Current",
      "Use sinusoidal voltage/current, peak and RMS values, reactance, impedance, phase, power factor and transformer equations.",
      [
        ["AC and RMS","An alternating source changes magnitude and direction periodically. For sinusoidal voltage V=V₀sinωt, RMS voltage is V_rms=V₀/√2, giving the same average power in a resistor as an equivalent DC voltage. RMS is not the same as arithmetic mean of a complete cycle, which is zero for a symmetric sine wave."],
        ["Reactance, impedance and phase","Inductive reactance X_L=ωL increases with frequency; capacitive reactance X_C=1/(ωC) decreases with frequency. In an ideal resistor V and I are in phase; an inductor causes current to lag voltage; a capacitor causes current to lead. For a series RLC circuit, impedance magnitude Z=√[R²+(X_L−X_C)²]. Resonance occurs when X_L=X_C under ideal conditions."],
        ["Power and power factor","Instantaneous power is v(t)i(t); average power for sinusoidal AC is V_rms I_rms cosφ for an ideal series treatment. Power factor cosφ accounts for phase difference and can reduce real power relative to apparent power. Pure ideal inductors/capacitors exchange energy with fields and have zero average real power over a complete cycle."],
        ["Transformers","A transformer uses changing magnetic flux to induce voltage in secondary coils. For an ideal transformer V_s/V_p=N_s/N_p and power approximately conserved, so current ratio is inverse: I_s/I_p≈N_p/N_s. Step-up raises voltage and lowers current; step-down lowers voltage and raises current. A transformer requires time-varying flux; steady DC does not sustain continuous ideal transformer operation after a switching transient."]
      ],
      [
        {formula:"V_rms=V₀/√2; I_rms=I₀/√2 for sinusoidal AC",meaning:"Effective RMS values.",when:"AC heating/power calculations.",units:"V and A.",trap:"Do not use the factor for every arbitrary waveform."},
        {formula:"X_L=ωL; X_C=1/(ωC)",meaning:"Inductive/capacitive reactance.",when:"AC circuits and frequency changes.",units:"Ω.",trap:"X_L rises with frequency; X_C falls."},
        {formula:"Z=√[R²+(X_L−X_C)²]",meaning:"Series RLC impedance magnitude.",when:"Find AC current and phase.",units:"Ω.",trap:"Use reactance difference, not sum, in series RLC."},
        {formula:"V_s/V_p=N_s/N_p; I_s/I_p≈N_p/N_s",meaning:"Ideal transformer ratios.",when:"Turn ratio/voltage/current changes.",units:"Ratios.",trap:"Power conservation is approximate in real transformers."}
      ],
      [
        {title:"RMS voltage",steps:["A sinusoidal supply has peak voltage 325 V.","V_rms=325/√2≈230 V.","This explains common nominal mains magnitudes in ideal sinusoidal reasoning.","The average signed voltage across one full sine cycle is zero, but RMS is not zero."]},
        {title:"Series RLC resonance",steps:["At resonance X_L=X_C.","Net reactive part cancels, so Z=R for the ideal series circuit.","Current amplitude is maximal for a fixed source voltage and phase difference is zero.","Real components introduce resistance/losses and set a finite quality factor."]},
        {title:"Transformer ratio",steps:["An ideal transformer has Np=500 turns and Ns=1000 turns; primary RMS voltage 120 V.","Vs/Vp=Ns/Np=2.","Secondary voltage Vs=240 V.","For ideal power conservation, secondary current is half primary current at the corresponding load."]}
      ],
      ["Using peak values as RMS in power formulas.","Reversing lead/lag statements for inductor/capacitor.","Using transformer voltage ratio as current ratio.","Assuming steady DC sustains transformer induction."],
      ["JEE: RMS, RLC impedance/phase, resonance, power factor and transformer turns. Label peak versus RMS in every calculation."],
      ["What is the relation between peak and RMS for a sine wave?","How does capacitive reactance change with frequency?","Why does a transformer need AC?"],
      ["RMS: root-mean-square effective value.","Reactance: opposition associated with energy storage in L/C.","Impedance: total AC opposition.","Power factor: cosφ for phase difference."]),
    make("Class 12","Physics","Electromagnetic Waves",
      "Understand displacement current, electromagnetic wave propagation, transverse fields and the electromagnetic spectrum.",
      [
        ["Changing electric fields and displacement current","Maxwell's extension to Ampère's law includes a term associated with changing electric flux. It resolves the apparent current-continuity issue in a charging capacitor: conduction current flows in the wires while changing electric field between plates contributes displacement current. In vacuum, electromagnetic waves can propagate without a material medium."],
        ["Wave structure and speed","An electromagnetic wave has electric and magnetic field oscillations transverse to its direction of propagation and mutually perpendicular. In vacuum c=1/√(μ₀ε₀), approximately 3×10⁸ m/s. Electric and magnetic field amplitudes satisfy E₀=cB₀ in vacuum for a plane wave. The wave transports energy and momentum."],
        ["Electromagnetic spectrum","Spectrum ordering by increasing frequency is radio, microwave, infrared, visible, ultraviolet, X-rays and gamma rays (boundaries overlap by convention). Since c=νλ in vacuum, increasing frequency means decreasing wavelength. Energy per photon E=hν increases with frequency. The names often refer to production/use context rather than hard non-overlapping wavelength boundaries."],
        ["Sources and applications","Radio waves support communication and broadcasting; microwaves are used in communication/radar/heating; infrared is linked with thermal radiation/remote sensing; visible light supports vision; ultraviolet can cause fluorescence/chemical/biological effects; X-rays image internal structures; gamma rays arise in nuclear/particle processes and have high penetrating/ionising capability. Uses require safety context; high-energy radiation can damage tissue."]
      ],
      [
        {formula:"c=1/√(μ₀ε₀)≈3×10⁸ m/s",meaning:"Electromagnetic wave speed in vacuum.",when:"Wave propagation.",units:"m/s.",trap:"Speed in material media can be less than c."},
        {formula:"c=νλ; E_photon=hν",meaning:"Frequency, wavelength and photon energy.",when:"Spectrum comparison.",units:"ν Hz; λ m; E J.",trap:"Higher frequency means shorter wavelength in the same medium/vacuum relation."},
        {formula:"E₀=cB₀ (plane wave in vacuum)",meaning:"Relation between electric and magnetic field amplitudes.",when:"Wave-field magnitude.",units:"E in V/m, B in T.",trap:"Use vacuum wave assumptions."}
      ],
      [
        {title:"Compare wavelengths",steps:["Radio wave frequency is lower than ultraviolet frequency.","Because c=νλ in vacuum, the radio wave has longer wavelength.","Photon energy is E=hν, so ultraviolet photons have higher energy.","This does not mean all radio waves are harmless; exposure effects depend on intensity/frequency and context."]},
        {title:"Field amplitudes",steps:["A vacuum EM wave has electric amplitude E₀=300 V/m.","B₀=E₀/c≈300/(3×10⁸) T.","B₀≈1×10⁻⁶ T.","Units verify because (V/m)/(m/s)=V·s/m²=T."]}
      ],
      ["Reversing spectrum order.","Treating EM waves as longitudinal.","Using E=hλ instead of E=hν=hc/λ.","Assuming all radiation in a spectrum band has identical biological effects."],
      ["CBSE/JEE: displacement current concept, transverse nature, spectrum ordering, wave speed and applications."],
      ["Why can EM waves travel in vacuum?","What is the frequency-wavelength relation?","Which has greater photon energy: UV or infrared?"],
      ["Displacement current: term associated with changing electric flux.","Transverse wave: oscillation perpendicular to propagation direction.","Spectrum: ordered range of electromagnetic frequencies/wavelengths."]),
    make("Class 12","Physics","Ray Optics and Optical Instruments",
      "Study refraction at spherical surfaces, lenses, prisms, total internal reflection and optical instruments with consistent conventions.",
      [
        ["Refraction and lens equations","Snell's law uses angles from the normal. A thin lens equation relates object distance, image distance and focal length under the stated Cartesian convention. Converging lenses can form real or virtual images depending on object distance; diverging lenses form virtual erect images for real objects in the ordinary case. Draw principal rays and confirm image nature from the calculation."],
        ["Prisms and dispersion","A prism changes ray direction because refraction occurs at two non-parallel surfaces. Deviation depends on incidence, prism angle and refractive index. At minimum deviation, the path is symmetric, i=r and r₁=r₂=A/2; the refractive index relates to prism/minimum-deviation angles by n=sin[(A+δ_m)/2]/sin(A/2). Shorter visible wavelengths usually have larger refractive index in ordinary glass and deviate more."],
        ["Total internal reflection and fibre optics","TIR requires light travelling from optically denser to rarer medium with incidence exceeding critical angle. For a denser index n₁ and rarer n₂, sinθ_c=n₂/n₁. Optical fibres use repeated TIR to guide light; the core/cladding indices and launch angle must support the condition. A critical angle is defined only for the high-to-low index direction."],
        ["Microscope and telescope logic","A simple microscope magnifies angular size; a compound microscope uses objective and eyepiece, while an astronomical telescope uses an objective to form an image of a distant object and an eyepiece to magnify it. Magnifying power depends on focal-length ratios and the near-point/normal-adjustment condition. Always identify final image condition before choosing the appropriate formula."]
      ],
      [
        {formula:"n₁ sin i=n₂ sin r",meaning:"Snell's law.",when:"Refraction at an interface.",units:"Indices dimensionless.",trap:"Angles are from the normal."},
        {formula:"sinθ_c=n₂/n₁ (n₁>n₂)",meaning:"Critical angle for total internal reflection.",when:"High-index to low-index interface.",units:"Angle.",trap:"No TIR for incidence from low to high index."},
        {formula:"n=sin[(A+δ_m)/2]/sin(A/2)",meaning:"Refractive index of prism at minimum deviation.",when:"Symmetric minimum-deviation setup.",units:"Dimensionless.",trap:"Use δ_m, not an arbitrary deviation angle."},
        {formula:"Thin lens: 1/f=1/v−1/u under Cartesian convention",meaning:"Image location formula.",when:"Lens problem.",units:"Lengths consistent.",trap:"Use magnification sign and image nature together."}
      ],
      [
        {title:"Critical angle",steps:["Glass index n₁=1.5 and air index n₂≈1.0.","sinθ_c=n₂/n₁=2/3.","θ_c=sin⁻¹(2/3), approximately 41.8°.","TIR requires incidence greater than θ_c inside glass."]},
        {title:"Prism minimum deviation",steps:["A prism has A=60° and minimum deviation δ_m=40°.","n=sin[(60+40)/2]/sin(60/2)=sin50°/sin30°.","Since sin30°=0.5, n≈0.766/0.5≈1.53.","Use angle values from minimum-deviation condition and keep units consistent."]},
        {title:"Lens workflow",steps:["Draw principal axis, object and principal rays.","Choose the Cartesian sign convention and identify u,f.","Substitute in 1/f=1/v−1/u and solve for v.","Use magnification and ray construction to check whether the image is real/virtual and inverted/erect."]}
      ],
      ["Applying critical angle from rarer to denser medium.","Using arbitrary deviation in the minimum-deviation formula.","Mixing sign conventions between lens equations and diagrams.","Using magnifying-power formula without naming image adjustment."],
      ["JEE: prism, TIR, lens systems and instrument magnification. Draw ray diagrams for qualitative verification."],
      ["What is required for TIR?","Why is violet deviation greater in ordinary glass?","What symmetry holds at minimum prism deviation?"],
      ["Critical angle: incidence angle giving 90° refraction in rarer medium.","Minimum deviation: smallest deviation angle for a given prism.","Magnifying power: angular-size ratio."]),
    make("Class 12","Physics","Wave Optics",
      "Explain wavefronts, Huygens' principle, interference, Young's double slit, diffraction and polarisation.",
      [
        ["Wavefronts and Huygens principle","A wavefront is a surface of equal phase. Rays are perpendicular to wavefronts in the simple homogeneous-medium picture. Huygens' principle treats each wavefront point as a source of secondary wavelets; their envelope gives later wavefronts. It provides a wave-based way to understand reflection/refraction and supports the continuity of phase across interfaces."],
        ["Interference and coherence","Interference superposes waves. Coherent sources maintain a stable phase difference, allowing a stable pattern. In a double-slit setup, constructive interference occurs for path difference mλ and destructive interference for (m+½)λ. Bright/dark conditions can change if phase shifts occur at reflections; establish the optical path difference carefully."],
        ["Young's double-slit fringes","For slit separation d, screen distance D≫d and small angles, fringe spacing β=λD/d. Increasing wavelength or screen distance increases fringe spacing; increasing slit separation decreases it. The central fringe is bright when the paths are equal and source phase alignment gives constructive interference. Do not mix slit separation with slit width."],
        ["Diffraction and polarisation","Diffraction is spreading/interference when light passes an aperture or obstacle; a single-slit central maximum has angular width of order 2λ/a for aperture width a in the small-angle model. Polarisation restricts electric-field oscillation to an orientation and demonstrates the transverse nature of light. Interference and diffraction are both wave phenomena but arise from different geometries of superposition."]
      ],
      [
        {formula:"Bright: path difference=mλ; dark: (m+½)λ",meaning:"Constructive/destructive interference for ideal coherent sources.",when:"Double-slit fringe positions.",units:"Length.",trap:"Check any phase inversion or initial phase difference."},
        {formula:"β=λD/d",meaning:"Young double-slit fringe spacing for small angles and D≫d.",when:"Spacing or wavelength calculation.",units:"Length.",trap:"d is separation of slits; aperture width is a different parameter."},
        {formula:"Single-slit first minima sinθ≈λ/a",meaning:"Diffraction minimum for slit width a.",when:"Estimate diffraction spread.",units:"Dimensionless.",trap:"Small-angle approximation θ≈sinθ is used for small θ."}
      ],
      [
        {title:"Fringe spacing",steps:["Wavelength λ=600 nm, screen distance D=2 m, slit separation d=0.5 mm.","Convert λ=6×10⁻⁷ m and d=5×10⁻⁴ m.","β=λD/d=(6×10⁻⁷×2)/(5×10⁻⁴)=2.4×10⁻³ m.","Fringe spacing=2.4 mm."]},
        {title:"Predict fringe change",steps:["Double slit separation doubles from d to 2d while other values stay fixed.","β′=λD/(2d)=β/2.","Fringes become half as far apart.","Increasing wavelength instead would spread the fringes." ]}
      ],
      ["Confusing slit separation with slit width.","Assuming a stable interference pattern without coherence.","Forgetting nm/mm conversions.","Treating polarisation as longitudinal-wave behaviour."],
      ["JEE: fringe spacing, path difference, fringe shifts, single-slit diffraction and polarisation. Draw geometry and convert all lengths to SI."],
      ["What do coherent sources require?","How does fringe spacing depend on slit separation?","Why does polarisation show light is transverse?"],
      ["Wavefront: equal-phase surface.","Coherence: stable phase difference.","Diffraction: wave spreading/interference at aperture/obstacle.","Polarisation: restriction of transverse oscillation direction."]),
    make("Class 12","Physics","Dual Nature of Radiation and Matter",
      "Connect photoelectric effect, photon energy, de Broglie wavelength and matter-wave evidence to threshold frequency and particle momentum.",
      [
        ["Photon model and photoelectric effect","A photon carries energy E=hν. For photoemission, photon energy must meet/exceed the work function φ; excess appears as maximum kinetic energy of emitted electrons in the ideal equation. Below threshold frequency, increasing intensity alone does not emit electrons in the simple single-photon model. Above threshold, intensity affects photon flux and photocurrent while frequency affects maximum kinetic energy."],
        ["Einstein's photoelectric equation","K_max=hν−φ=eV_s where V_s is stopping potential magnitude. A graph of stopping potential or K_max against frequency has a linear dependence with slope h or h/e depending on plotted variable and intercept related to work function/threshold. The work function depends on material. Interpret graph axes before assigning slope."],
        ["de Broglie matter waves","A particle with momentum p has wavelength λ=h/p. For a non-relativistic particle accelerated from rest through potential difference V, kinetic energy gained is |q|V=½mv², giving p=√(2m|q|V) and λ=h/√(2m|q|V). Higher momentum means shorter wavelength. This expression assumes non-relativistic speeds."],
        ["Evidence and limits","Electron diffraction supports wave nature of matter. Particle/wave descriptions complement each other; neither requires ordinary macroscopic objects to show visible wave patterns because their de Broglie wavelengths are extremely small. Photoelectric observations challenged a purely classical intensity-based explanation of electron emission."]
      ],
      [
        {formula:"E_photon=hν=hc/λ",meaning:"Energy of a photon.",when:"Photoelectric and radiation problems.",units:"J.",trap:"Convert wavelength/frequency units."},
        {formula:"K_max=hν−φ=eV_s",meaning:"Photoelectric kinetic-energy and stopping-potential relation.",when:"Threshold/graph calculations.",units:"J or eV consistently.",trap:"Emission requires hν≥φ."},
        {formula:"λ=h/p; for non-relativistic particle accelerated through V: λ=h/√(2m|q|V)",meaning:"de Broglie wavelength.",when:"Matter waves and electron acceleration.",units:"λ m.",trap:"Use SI mass/charge/voltage in the SI formula."}
      ],
      [
        {title:"Threshold frequency",steps:["Work function φ=2.0 eV.","Threshold frequency ν₀=φ/h after converting φ to joules if using SI.","Below ν₀, the elementary photoelectric model predicts no photoemission regardless of intensity.","Above threshold, maximum kinetic energy increases linearly with frequency."]},
        {title:"de Broglie scaling",steps:["For the same non-relativistic particle, λ∝1/√V after acceleration from rest through a potential V.","If accelerating voltage increases by a factor of 4, momentum doubles.","Wavelength halves.","This scaling assumes the particle species and non-relativistic model remain the same."]}
      ],
      ["Thinking intensity increases photon energy.","Using kinetic energy formula below threshold.","Mixing eV and joules in a calculation.","Using the non-relativistic de Broglie expression for relativistic particles."],
      ["JEE: stopping-potential graphs, threshold frequency, work function and de Broglie scaling."],
      ["What does threshold frequency mean?","How does intensity differ from frequency in photoelectric effect?","How does de Broglie wavelength depend on momentum?"],
      ["Work function: minimum energy needed to release an electron.","Stopping potential: voltage needed to stop the fastest photoelectrons.","de Broglie wavelength: matter-wave wavelength h/p."]),
    make("Class 12","Physics","Atoms",
      "Use Rutherford scattering, Bohr's model, energy levels, spectral lines and hydrogen-like atom relationships.",
      [
        ["Rutherford scattering","Most alpha particles passed through thin metal foil, implying atoms are largely empty space; a small fraction deflected strongly, suggesting a small, dense, positively charged nucleus. The nuclear model explained scattering but classical orbiting electrons would radiate energy and collapse, so an additional model was needed to explain stability and discrete spectra."],
        ["Bohr postulates and energy","For hydrogen-like atoms, Bohr's model quantises angular momentum and yields discrete energy levels proportional to −Z²/n². An electron emits a photon when dropping to a lower energy level and absorbs one when moving up. Photon energy magnitude equals the energy difference; wavelength follows hc/ΔE. The model works well for one-electron species, not general multi-electron atoms."],
        ["Spectral series","All transitions terminating at a given final level form a spectral series: Lyman ends n=1, Balmer ends n=2, Paschen ends n=3 in the usual hydrogen labelling. Larger energy drops produce higher-energy, shorter-wavelength photons. Use initial/final n carefully and make the emission/absorption direction explicit."],
        ["Limitations and modern meaning","Bohr orbits are a useful historical quantised model but not literal paths in modern quantum mechanics. Modern orbitals represent wavefunctions/probability distributions. When solving exam questions, use the Bohr formula where the question assumes hydrogen-like atoms, and do not generalise its orbit radius/energy relationships to arbitrary atoms."]
      ],
      [
        {formula:"Eₙ=−13.6 Z²/n² eV (hydrogen-like)",meaning:"Bohr energy level for one-electron species.",when:"Atomic transition energy.",units:"eV.",trap:"Z is nuclear charge number; formula is for hydrogen-like systems."},
        {formula:"ΔE_photon=|E_f−E_i|=hν=hc/λ",meaning:"Photon energy matches level-energy difference.",when:"Emission/absorption spectrum.",units:"Use eV consistently or convert to joules.",trap:"Emission has E_f<E_i, but photon energy is positive."},
        {formula:"1/λ=RZ²(1/n_f²−1/n_i²), n_i>n_f for emission",meaning:"Rydberg relation for hydrogen-like series.",when:"Wavelength of a spectral transition.",units:"R in m⁻¹.",trap:"Initial and final quantum numbers must reflect emission order."}
      ],
      [
        {title:"Transition energy",steps:["For hydrogen, transition n=3 to n=2.","E₃=−13.6/9 eV; E₂=−13.6/4 eV.","Photon energy is E₃−E₂ in magnitude ≈1.89 eV.","Use λ=hc/ΔE or the Rydberg formula to find the wavelength; check it belongs to Balmer series because final n=2."]},
        {title:"Find series",steps:["A hydrogen transition ends at n=1.","It belongs to the Lyman series.","These transitions have larger energies than analogous transitions ending at n=2 or 3.","Use final level to identify the series, not merely the starting level."]}
      ],
      ["Using Bohr formula for all multi-electron atoms.","Making photon energy negative for emission.","Confusing starting and ending principal quantum numbers.","Calling an orbital a fixed classical orbit."],
      ["CBSE/JEE: nuclear model, Bohr energy levels, spectral series and wavelength calculation."],
      ["Why did Rutherford's model need modification?","What defines a spectral series?","When is the Bohr model valid?"],
      ["Nucleus: small dense positively charged atomic centre.","Spectral series: transitions sharing a final energy level.","Hydrogen-like atom: one-electron ion."]),
    make("Class 12","Physics","Nuclei",
      "Understand nuclear composition, mass defect, binding energy, radioactivity, half-life, fission and fusion from conservation principles.",
      [
        ["Nuclear size and composition","A nucleus contains Z protons and N neutrons, with mass number A=Z+N. Isotopes have the same Z but different N; isotones share N, and isobars share A. Nuclear radius scales approximately as R=R₀A^(1/3), reflecting roughly constant nuclear density. Nuclear forces are short-range and strong, distinct from long-range electrostatic repulsion between protons."],
        ["Mass defect and binding energy","The mass of a bound nucleus is less than the sum of separate constituent nucleon masses; mass defect corresponds to binding energy through E=Δmc². Binding energy per nucleon indicates average binding and is useful for comparing stability. Use consistent atomic/nuclear mass conventions, including electron masses as needed. Convert unified atomic mass unit to energy only with the appropriate conversion factor if given."],
        ["Radioactive decay","Radioactive decay is stochastic for an individual nucleus but follows an exponential law for large populations: N=N₀e^(−λt)=N₀(1/2)^(t/t₁/₂). Half-life t₁/₂=ln2/λ. Activity is decay rate, A=λN. After each half-life, half of the remaining population decays; the same fraction remains independent of initial amount under the ideal model."],
        ["Fission, fusion and energy","Fission splits a heavy nucleus into lighter nuclei and neutrons, potentially enabling chain reactions if conditions sustain them. Fusion combines light nuclei; it requires overcoming electrostatic repulsion, commonly via high temperature/pressure in stellar conditions. Both can release energy when products are more tightly bound per nucleon than reactants under the relevant mass-energy comparison. Reactor energy release also involves engineering, neutron control and radiation safety."]
      ],
      [
        {formula:"A=Z+N; R≈R₀A^(1/3)",meaning:"Nuclear composition and approximate radius scaling.",when:"Nuclear identification and size.",units:"R in m/fm.",trap:"A is mass number, Z proton number, N neutron number."},
        {formula:"E_bind=Δmc²; 1 u≈931.5 MeV/c²",meaning:"Mass defect converted to binding energy.",when:"Nuclear mass/energy calculations.",units:"Use consistent mass-energy units.",trap:"Binding energy is positive as energy needed to separate the bound nucleons."},
        {formula:"N=N₀(1/2)^(t/t₁/₂); t₁/₂=0.693/λ",meaning:"Radioactive decay law and half-life.",when:"Remaining nuclei/activity.",units:"Time units match λ.",trap:"Use elapsed time divided by half-life."},
        {formula:"Activity A=λN",meaning:"Expected decays per unit time.",when:"Activity changes over time.",units:"Becquerel=s⁻¹.",trap:"Activity halves along with N each half-life."}
      ],
      [
        {title:"Remaining fraction",steps:["Sample passes through 3 half-lives.","Remaining fraction=(1/2)³=1/8=12.5%.","If initial mass was 80 mg, remaining mass is 10 mg.","The amount decayed is 70 mg; do not halve the original mass only once."]},
        {title:"Binding energy from mass defect",steps:["Find mass defect using consistent atomic/nuclear constituents as specified.","Convert Δm to energy using ΔE=Δmc².","If Δm is in u, use approximately 931.5 MeV per u for energy.","Divide total binding energy by A for binding energy per nucleon if requested."]}
      ],
      ["Confusing atomic number with mass number.","Using Celsius/time-unit mismatch in decay exponent.","Forgetting electron-mass convention in mass-defect calculations.","Saying fusion releases energy for every possible pair of nuclei regardless of binding-energy change."],
      ["CBSE/JEE: isotopes/isobars, radius scaling, binding energy, half-life, activity and nuclear reactions."],
      ["What is the difference between Z and A?","How much remains after four half-lives?","What does binding energy per nucleon compare?"],
      ["Isotope: same Z, different neutron number.","Mass defect: difference between separated constituent mass and bound nuclear mass.","Half-life: time for number/activity to halve."]),
    make("Class 12","Physics","Semiconductor Electronics",
      "Understand band gap, intrinsic/extrinsic semiconductors, p-n junctions, diodes, rectification and basic logic circuits.",
      [
        ["Band theory and carriers","In a semiconductor, valence and conduction bands are separated by a relatively small energy gap. Thermal excitation can create electron-hole pairs. Conductivity generally rises with temperature because carrier concentration increases, unlike many metallic conductors. Intrinsic semiconductors have thermally generated carriers; doping adds donor/acceptor impurities to raise electron or hole concentration."],
        ["n-type and p-type doping","Donor impurities contribute extra mobile electrons and produce n-type material; acceptor impurities create holes and produce p-type material. Both materials remain electrically neutral overall. Majority carriers are electrons in n-type and holes in p-type, while minority carriers still exist. Doping is deliberate and controlled; it is not the same as creating a net charge on the whole sample."],
        ["p-n junction and bias","A p-n junction forms a depletion region and built-in potential due to carrier diffusion/recombination. Forward bias reduces the barrier and usually allows large current above the practical turn-on region; reverse bias increases the barrier and supports a small leakage current until breakdown. The exact I-V response depends on diode material and temperature. A diode conducts preferentially in one direction, enabling rectification."],
        ["Rectifiers and logic","A half-wave rectifier uses one diode to pass one half-cycle; a full-wave rectifier uses arrangements that yield the same output polarity for both input half-cycles. Filters smooth the pulsating output. Logic gates implement Boolean operations: NOT inverts, AND outputs 1 only when all inputs are 1, OR outputs 1 when at least one input is 1. Truth tables avoid ambiguity."]
      ],
      [
        {formula:"n-type: electron majority; p-type: hole majority",meaning:"Carrier type after donor/acceptor doping.",when:"Classify semiconductors.",units:"Carrier concentration.",trap:"Material remains electrically neutral overall."},
        {formula:"Forward bias reduces p-n barrier; reverse bias increases it",meaning:"Qualitative diode behaviour.",when:"Diode I-V and rectifier questions.",units:"Voltage/current.",trap:"Reverse current is small but not always exactly zero."},
        {formula:"AND: Y=A·B; OR: Y=A+B; NOT: Y=Ā",meaning:"Boolean expressions for basic logic gates.",when:"Truth tables and gate output.",units:"Binary logic.",trap:"In Boolean algebra, + is OR, not ordinary arithmetic addition."}
      ],
      [
        {title:"Truth table for AND",steps:["Inputs A,B can be 0 or 1.","AND output is 1 only for A=1 and B=1.","Rows (00,01,10,11) produce outputs 0,0,0,1.","For OR the outputs would be 0,1,1,1."]},
        {title:"Explain forward bias",steps:["Connect p-side to positive terminal and n-side to negative terminal in the standard forward-bias arrangement.","The applied voltage opposes/reduces the built-in junction barrier.","Majority carriers cross the junction more readily and current rises.","Reverse the supply polarity for reverse bias; do not swap p/n names."]}
      ],
      ["Treating holes as positive atoms instead of mobile vacancies in electron states.","Saying n-type material has an overall negative charge.","Reversing p-n forward-bias polarity.","Using arithmetic '+' instead of Boolean OR in output calculations."],
      ["CBSE/JEE: intrinsic/extrinsic, carrier types, diode bias, rectifier waveforms and truth tables."],
      ["What is a hole in semiconductor language?","Which bias reduces the junction barrier?","What is the output of OR for inputs 0 and 1?"],
      ["Doping: controlled impurity addition.","Depletion region: region near junction with few mobile carriers.","Rectification: conversion of alternating input into unidirectional output.","Boolean logic: algebra of binary values."]),
    make("Class 12","Physics","Wave Optics and Ray Optics — Formula Consolidation",
      "An extended problem companion that links optical conventions, interference/diffraction and ray diagrams without substituting for the individual concept chapters.",
      [
        ["Ray and wave descriptions","Ray optics models propagation direction and image geometry; wave optics explains interference, diffraction and polarisation. Neither description means light changes physical identity. Select the model that matches the scale and observation; apertures comparable to wavelength demand wave effects, while everyday lens imaging is often treated by rays."],
        ["Sign and angle discipline","All image equations require a consistent sign convention. Snell angles and critical angles are measured from the normal. In wave optics, phase/path difference and slit separation are distinct quantities. Label the diagram before substitution; a correct formula with wrong geometry produces a wrong result."],
        ["Formula selection","For lenses, start with the thin-lens relation and magnification. For double-slit interference, use β=λD/d under small-angle assumptions. For a slit diffraction minimum, aperture width a sets the first-minimum condition a sinθ≈λ. For polarisation, apply the stated relative angle rather than assuming the analyser axis is parallel to the original polarisation."],
        ["Verification","Use units and physical limits as checks. Increasing D or λ increases fringe spacing; increasing d decreases it. A small wavelength compared with opening dimension gives narrow diffraction. A real image can be projected on a screen; virtual images cannot be caught directly on a screen without extra optics."]
      ],
      [
        {formula:"Lens equation 1/f=1/v−1/u",meaning:"Thin-lens image distance.",when:"Image formation.",units:"Lengths.",trap:"Follow one Cartesian convention."},
        {formula:"β=λD/d",meaning:"Young double-slit fringe spacing.",when:"Coherent double-slit setup.",units:"Length.",trap:"D≫d small-angle approximation."},
        {formula:"a sinθ≈λ for first single-slit minimum",meaning:"Diffraction first minimum.",when:"Estimate angular spread.",units:"Lengths cancel.",trap:"a is slit width, not separation between two slits."}
      ],
      [
        {title:"Select the correct optical model",steps:["An image on a lens screen question is usually ray optics.","A fringe-spacing question requires wave interference.","A slit-width broadening question is diffraction.","State assumptions and convert quantities to common units before using the formula."]}
      ],
      ["Mixing up lens sign convention and diffraction geometry.","Confusing slit width with slit separation.","Using full-length degrees/radians interchangeably in wave formulas.","Claiming ray optics explains a stable interference fringe pattern."],
      ["Use this companion as a checklist alongside the individual chapter notes; it does not replace derivations and worked examples."],
      ["What changes fringe spacing?","What is the angle reference in Snell's law?","What physical phenomenon requires wavefront superposition?"],
      ["Interference: superposition of coherent waves.","Diffraction: spreading from apertures/obstacles.","Ray optics: geometrical approximation for light propagation."])
  ];
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(notes);
})();
