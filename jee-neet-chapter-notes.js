/* Deep, individual JEE Main and NEET UG chapter lessons.
   Original study content: concept explanations, formula cards, worked methods, speed strategies and solved practice.
   Verify topic inclusion and weightage against the current official NTA syllabus before treating this as an exam-complete checklist. */
(function () {
  "use strict";
  const formula = (formula, meaning, when, units, trap) => ({ formula, meaning, when, units, trap });
  const method = (title, when, steps, caution) => ({ title, when, steps, caution });
  const worked = (title, steps) => ({ title, steps });
  const problem = (question, answer, solution) => ({ question, answer, solution });
  const make = (level, subject, chapter, intro, sections, formulaCheatSheet, workedExamples, fastMethods, practiceProblems, commonMistakes, examFocus, recall, glossary) => {
    const formulaCards = Array.isArray(formulaCheatSheet) ? formulaCheatSheet : [];
    const methods = Array.isArray(fastMethods) ? fastMethods : [];
    const examples = Array.isArray(workedExamples) ? workedExamples : [];
    const formulaConnections = formulaCards.slice(0, 3).map(card =>
      card.formula + " means " + card.meaning + " Use it when " + card.when +
      " Units/check: " + card.units + " Common trap: " + card.trap
    ).join(" ");
    const methodConnections = methods.slice(0, 3).map(item =>
      item.title + " is useful " + item.when + " Work through it in this order: " +
      item.steps.join(" ") + " Check before finalising: " + item.caution
    ).join(" ");
    const sectionHeadings = sections.map(item => item[0]).join(" → ");
    const applicationSection = [
      "Concept connections and how to recognise the problem type.",
      "First identify what the question asks for: a definition, a relationship, a derivation, a numerical value, a graph interpretation, a proof or a choice among options. In this chapter, the main learning path is " + sectionHeadings + ". Treat these as connected ideas: establish the physical, chemical or mathematical meaning first, then choose the model that matches the assumptions in the question.",
      "For a quantitative problem, list known quantities with units, identify what is unknown, draw a diagram or write the relevant mathematical/chemical representation, and only then select an equation. Do not use a memorised formula solely because a keyword appears; check that the conditions under which it was derived actually apply.",
      formulaConnections,
      "For a conceptual question, explain the cause-and-effect link rather than repeating a definition. State what changes, what remains fixed, and why the predicted result follows. If two answer choices look similar, compare their assumptions, units, direction/sign and limiting cases."
    ].filter(Boolean).join(" ");
    const workflowSection = [
      "Step-by-step method selection, execution and checking.",
      "A reliable workflow is to classify the question, state the governing principle, write the applicable relation in symbols before substituting numbers, and keep intermediate arithmetic separate from conceptual reasoning. Show units in every numerical line. For a derivation, explain why each step is allowed; for a proof, state the condition used at every implication; for a graph, connect slope, area, sign or curvature to the quantity being asked about.",
      methodConnections,
      examples.slice(0, 2).map(example => example.title + ": " + example.steps.join(" ")).join(" "),
      "After obtaining an answer, check dimensions, signs, domain restrictions and limiting behaviour. Ask whether the result is physically possible, whether it satisfies the original equation/conditions, and whether rounding changes the requested precision. In multiple-choice questions, estimate the magnitude before comparing options; reject options that violate units, conservation, mathematical domain or an explicit condition.",
      "Use the worked examples as templates, not as recipes to memorise. Change one given quantity and predict how the answer should change; then solve it. This tests whether you understand the dependency and is especially effective for preparation under timed exam conditions."
    ].filter(Boolean).join(" ");
    const expandedSections = sections.map(([heading, body]) => ({ heading, body })).concat([
      { heading: "Concept connections and recognising problem types", body: applicationSection },
      { heading: "Formula selection, worked method and answer checks", body: workflowSection }
    ]);
    return {
      level, subject, chapter, intro,
      sections: expandedSections,
      formulaCheatSheet: formulaCards,
      formulas: formulaCards.map(item => item.formula),
      workedExamples: examples, fastMethods: methods, practiceProblems, commonMistakes, examFocus, recall, glossary,
      points: expandedSections.map(item => item.heading + ": " + item.body.split(/[.!?]/)[0] + "."),
      example: examples.length ? examples[0].steps.join(" ") : "Identify the governing principle, state assumptions, then check the units and limiting case.",
      depth: "detailed",
      sourceNote: "Original, expanded chapter lesson for JEE Main / NEET UG preparation. Cross-check the current official NTA syllabus and prescribed NCERT edition; methods and shortcuts apply only under their stated conditions."
    };
  };

  const mathsQuadratic = make("JEE Main","Mathematics","Quadratic Equations and Inequalities — JEE Deep Notes",
    "Master root behaviour, coefficient relations, parameter questions, sign charts and fast options-based solving. First classify the question; do not automatically expand and solve every quadratic.",
    [
      ["1. Standard form and root types","Write ax²+bx+c=0 with a≠0. The discriminant D=b²−4ac tells whether roots are distinct real (D>0), equal real (D=0), or non-real conjugates (D<0) for real coefficients. The quadratic formula gives exact roots, but factorisation, symmetry and coefficient relations are often faster when the question asks only for a sum, product, sign or range."],
      ["2. Vieta's relations and symmetric expressions","If roots are α and β, then α+β=−b/a and αβ=c/a. Thus α²+β²=(α+β)²−2αβ; 1/α+1/β=(α+β)/(αβ) when αβ≠0; and (α−β)²=D/a². These identities avoid finding individual radicals. Always check whether a denominator may be zero before dividing."],
      ["3. Parameter and location questions","For both roots to be positive, require real roots, positive sum and positive product; for both negative, require real roots, negative sum and positive product. For opposite signs, product is negative. Conditions about roots relative to a number k can be transformed with x=y+k or examined using the vertex and sign of the polynomial. Equality cases matter: strict versus non-strict inequalities changes the answer."],
      ["4. Inequalities and graph reasoning","For ax²+bx+c, the parabola opens upward if a>0 and downward if a<0. With two real roots, the sign flips at each simple root; without real roots, the sign is the sign of a everywhere. Solve the roots, mark them on a number line, and test one point from each interval. This sign chart is safer than relying on a memorised pattern when the leading coefficient is negative."]
    ],
    [
      formula("D=b²−4ac","Discriminant; controls the real-root pattern and equals a²(α−β)².","Use when roots are not required explicitly, when testing repeated roots, or in parameter restrictions.","a,b,c are coefficients; D has squared coefficient units if x has units.","D=0 gives one repeated root, not two different roots."),
      formula("α+β=−b/a; αβ=c/a","Sum and product of roots.","Use for symmetric root expressions and quick root-sign tests.","Same units as x for the sum; x² for the product.","Do not use a reciprocal-root formula if αβ=0."),
      formula("Vertex: x=−b/(2a); fmin/max=−D/(4a)","Location/value of the parabola's turning point.","Use for ranges, minimum/maximum and whether the graph crosses an axis.","x-coordinate units; function-value units.","The vertex is a minimum only when a>0.")
    ],
    [
      worked("Find a symmetric root expression without solving",["For 2x²−7x+3=0, α+β=7/2 and αβ=3/2.","α²+β²=(α+β)²−2αβ=49/4−3=37/4.","This is faster and avoids the unnecessary square-root expression for each root."]),
      worked("Find a parameter for equal roots",["For x²+(m−2)x+9=0, equal roots require D=0.","(m−2)²−36=0, so m−2=±6.","Therefore m=8 or m=−4; substitute each value to verify D=0."])
    ],
    [
      method("Vieta before the quadratic formula","When the question asks a symmetric expression of roots.",["Write S=−b/a and P=c/a.","Rewrite the target using S and P; for example α²+β²=S²−2P.","Evaluate with fractions or exact arithmetic.","Check denominators and whether roots are zero."],"This is not enough for expressions that distinguish α from β."),
      method("Root-sign test","When the prompt asks positive/negative roots, not their values.",["Check D≥0 for real roots.","Use product P to decide same versus opposite signs.","Use sum S to decide whether same-sign roots are positive or negative.","Check whether zero is allowed by the wording."],"Sign conditions are necessary and sufficient only together with real-root existence."),
      method("Inequality sign chart","When solving a product or quotient involving a quadratic.",["Factor if possible; otherwise calculate roots.","Mark all critical values in increasing order.","Determine sign on each interval, including the sign of the leading coefficient.","Apply strict/inclusive endpoints and exclude denominator zeros."],"Repeated roots do not cause a sign change.")
    ],
    [
      problem("For x²−5x+6=0, find α²+β².","13","α+β=5, αβ=6, so α²+β²=25−12=13."),
      problem("For 3x²−kx+12=0, when are roots real and equal?","k=±12","D=k²−144=0, so k²=144. The equality condition is exact."),
      problem("When is x²−4x+3≤0?","x∈[1,3]","Factor as (x−1)(x−3). The upward parabola is non-positive between its roots, including endpoints.")
    ],
    ["Using D>0 when repeated roots are allowed.","Assuming positive product automatically means both roots are positive.","Dropping a zero-root case in reciprocal expressions.","Forgetting to reverse/track signs when the leading coefficient is negative."],
    ["JEE: practise discriminant-parameter questions, root location, symmetric expressions, ranges and quadratic inequalities. In MCQs, test coefficients and endpoint cases before doing long algebra."],
    ["What does D=0 tell you?","When is 1/α+1/β defined?","How do the sum and product together identify the signs of real roots?"],
    ["Discriminant: b²−4ac, controlling the root pattern.","Vieta's relations: formulas linking roots to coefficients.","Vertex: turning point of a parabola."]);

  const mathsComplex = make("JEE Main","Mathematics","Complex Numbers, Argand Plane and Roots of Unity — JEE Deep Notes",
    "Move fluently between algebraic form, geometry and polar form. Complex numbers are especially efficient when a question is about distances, rotations, conjugates or repeated powers.",
    [
      ["1. Algebraic form and conjugation","Write z=x+iy with i²=−1. Addition is componentwise; multiplication uses i²=−1. The conjugate is x−iy, and z z̄=x²+y²=|z|². To divide by a complex denominator, multiply numerator and denominator by the conjugate of the denominator. This converts the denominator into a non-negative real number and keeps the calculation organised."],
      ["2. Modulus and loci","The modulus |z| is distance from the origin, and |z−z₀| is distance from z₀. Therefore |z−z₀|=r describes a circle, while |z−z₁|=|z−z₂| describes the perpendicular bisector of the segment joining z₁ and z₂. Inequalities involving modulus describe disks or exteriors. Sketching the Argand plane can make a complicated-looking algebra problem almost immediate."],
      ["3. Argument and polar form","Write z=r(cosθ+i sinθ), where r=|z|. Multiplication multiplies moduli and adds arguments; division divides moduli and subtracts arguments. Argument is defined modulo 2π, so a principal argument is only one representative. Determine the quadrant before using inverse tangent, because arctan(y/x) alone can return the wrong direction."],
      ["4. De Moivre and roots of unity","For integer n, [r(cosθ+i sinθ)]ⁿ=rⁿ(cos nθ+i sin nθ). The n roots of a nonzero complex number are equally spaced around a circle in the Argand plane. The nth roots of unity lie on the unit circle at angles 2πk/n. Their symmetry makes sums of roots and polynomial identities easier than expanding each root separately. For equations involving az+b, interpret multiplication by a as scaling and rotation and addition by b as translation; this geometric reading often simplifies locus and transformation questions."]
    ],
    [
      formula("|z|²=z z̄=x²+y²","Squared distance of a complex point from zero.","Use to evaluate modulus or simplify products with conjugates.","If x,y represent ordinary coordinates, modulus has coordinate units.","|z| is never negative; z z̄ is real."),
      formula("z=r(cosθ+i sinθ); z₁z₂ has argument θ₁+θ₂","Polar multiplication converts products into scale-and-rotate operations.","Use for powers, products, quotients and roots.","r is the modulus; θ is an angle in radians in calculus-style formulae.","Reduce final angles modulo 2π and respect the requested principal range."),
      formula("n roots: r^(1/n) cis((θ+2πk)/n), k=0,…,n−1","All nth roots of a nonzero complex number.","Use for roots of unity and polynomial equations zⁿ=w.","Angles conventionally in radians.","Do not report duplicate roots by using k beyond n−1.")
    ],
    [
      worked("Fast division",["Compute (3+4i)/(1−2i).","Multiply top and bottom by 1+2i: numerator (3+4i)(1+2i)=−5+10i; denominator 5.","The quotient is −1+2i; check by multiplying back by 1−2i."]),
      worked("Roots of unity",["Solve z³=1. Write 1=cis(2πm).","The three distinct roots are cis(0), cis(2π/3), cis(4π/3).","Their vector sum is zero because they are equally spaced around the unit circle."])
    ],
    [
      method("Conjugate shortcut","For division or a product of a complex number and its conjugate.",["Multiply by the conjugate of the denominator.","Use (a+bi)(a−bi)=a²+b².","Separate real and imaginary components only at the end.","Substitute the result back if signs are easy to confuse."],"The denominator must be nonzero."),
      method("Locus recognition","When two moduli or a modulus inequality appears.",["Interpret each modulus as a distance.","Translate equal distances into a circle or perpendicular bisector.","Translate a fixed distance into a circle, and a less-than relation into a disk.","Use the sketch to eliminate impossible regions."],"Check whether the boundary is included."),
      method("Power cycling","When a problem involves i raised to a large integer power.",["Reduce the exponent modulo 4 because i⁴=1.","Use the remainder to read i⁰, i¹, i² or i³.","For general complex powers, use polar form and multiply the argument.","Keep integer-power and fractional-power branches distinct."],"The modulo-4 trick applies to powers of i, not arbitrary complex z.")
    ],
    [
      problem("Find |2−i|².","5","Multiply by conjugate: (2−i)(2+i)=4+1=5."),
      problem("Solve z²=−1.","z=i or z=−i","The two square roots are ±i; both must be given."),
      problem("How many distinct roots does z⁵=1 have?","5","A nonzero number has five distinct fifth roots; their arguments differ by 2π/5.")
    ],
    ["Using arctan without checking the quadrant.","Treating a principal argument as the only possible argument.","Forgetting the denominator's conjugate during division.","Giving repeated roots by letting k run past n−1."],
    ["JEE: loci, argument ranges, conjugation identities, roots of unity and powers are common high-yield patterns. Draw the Argand plane before doing heavy algebra."],
    ["Which geometric locus is |z−a|=|z−b|?","Why is z z̄ a non-negative real?","What angles describe the nth roots of unity?"],
    ["Argand plane: coordinate plane for complex numbers.","Conjugate: x−iy for x+iy.","Roots of unity: complex numbers whose fixed positive integer power equals one."]);

  const mathsSequence = make("JEE Main","Mathematics","Sequences, Series and Binomial Theorem — JEE Deep Notes",
    "Identify the sequence structure before choosing a formula. Fast questions often test the difference between a term, a partial sum, a coefficient and an infinite-series limit.",
    [
      ["1. Arithmetic and geometric patterns","An arithmetic progression has constant adjacent difference d; its nth term is a+(n−1)d. A geometric progression has constant ratio r for nonzero adjacent terms; its nth term is arⁿ⁻¹. Verify the pattern from at least two adjacent pairs instead of assuming a list is AP or GP from its first three terms alone."],
      ["2. Partial sums and telescoping","A series is a sum of terms; Sₙ is the sum through the nth term. If Sₙ is known, the nth term is aₙ=Sₙ−Sₙ₋₁ for n≥2. Telescoping sums simplify when terms are written as differences, for example 1/[n(n+1)]=1/n−1/(n+1). After expansion, most interior terms cancel, leaving only boundary terms."],
      ["3. Binomial coefficients","In (a+b)ⁿ, the general term is Tₖ₊₁=ⁿCₖ aⁿ⁻ᵏbᵏ. The exponent of a decreases while the exponent of b increases so the total degree stays n. Coefficients are symmetric: ⁿCₖ=ⁿCₙ₋ₖ; their sum is 2ⁿ. Use coefficient matching when a problem asks for a particular power rather than expanding the entire expression."],
      ["4. Infinite geometric series and convergence","The infinite sum a+ar+ar²+… converges to a/(1−r) only when |r|<1. For a finite GP, the formula works for r≠1, while r=1 gives Sₙ=na. Some exam traps are simply formula conditions: distinguish finite from infinite and do not use a convergence formula when |r|≥1."]
    ],
    [
      formula("aₙ=a+(n−1)d; Sₙ=n/2[2a+(n−1)d]","nth term and sum of an AP.","Use when adjacent differences are constant.","a,d and S units follow the sequence quantity.","Do not confuse Sₙ with the nth term."),
      formula("aₙ=arⁿ⁻¹; Sₙ=a(rⁿ−1)/(r−1), r≠1","nth term and finite GP sum.","Use when the ratio between successive nonzero terms is constant.","Same units as the terms.","For r=1 use Sₙ=na; for an infinite sum require |r|<1."),
      formula("Tₖ₊₁=ⁿCₖ aⁿ⁻ᵏbᵏ","General term in a binomial expansion.","Use to find coefficients, middle terms or a selected power.","Coefficient is dimensionless if terms are formal variables.","Index k starts at zero, so the first term is T₁.")
    ],
    [
      worked("Recover a term from partial sums",["Suppose Sₙ=n²+2n.","For n≥2, Sₙ₋₁=(n−1)²+2(n−1)=n²−1.","Therefore aₙ=Sₙ−Sₙ₋₁=2n+1; check n=1 directly."]),
      worked("Binomial coefficient matching",["Find the coefficient of x³ in (2+x)⁵.","The term with x³ uses k=3: ⁵C₃ 2² x³.","The coefficient is 10×4=40; no full expansion is needed."])
    ],
    [
      method("Telescoping sum","When the term can be split into a simple difference.",["Factor the denominator or use partial fractions.","Write each term as A/n−A/(n+1) or a similar difference.","Expand the first few terms to confirm cancellation.","Keep the first and last uncancelled terms."],"Never assume cancellation before writing the shifted index correctly."),
      method("Binomial term by exponent","When asked for one coefficient or the constant term.",["Write the general term with k.","Match the exponent of x (including negative powers if present).","Solve for k, then check it is an integer in 0…n.","Evaluate the binomial coefficient and remaining factor."],"For non-integer binomial powers, the finite integer-power rule does not apply unchanged."),
      method("Check a series sum","When the ratio might equal a special value.",["Find the first term and common ratio.","Check r=1 separately.","For an infinite GP, test |r|<1 before using a/(1−r).","Check that the numerical answer behaves sensibly as n grows."],"Finite and infinite sums have different conditions.")
    ],
    [
      problem("Find S₅ for 3, 7, 11, …","55","Here a=3,d=4, so S₅=5/2[6+16]=55."),
      problem("Evaluate 1/(1·2)+1/(2·3)+…+1/(9·10).","9/10","Rewrite each term as 1/k−1/(k+1); cancellation leaves 1−1/10."),
      problem("What is the constant term in (x²+1/x)⁶?","15","The general term has x exponent 2(6−k)−k=12−3k; set it to zero, so k=4 and coefficient is ⁶C₄=15.")
    ],
    ["Applying a geometric sum when ratios vary.","Forgetting the r=1 special case.","Using k as the one-based term number in the binomial general term.","Applying the infinite-GP formula outside |r|<1."],
    ["JEE: sequence definitions, telescoping, Sₙ-to-aₙ, binomial coefficient matching and convergence conditions. Derive only the needed term; full expansions waste time."],
    ["How do you recover aₙ from Sₙ?","When does an infinite geometric sum converge?","Which k gives the constant term in a binomial expression?"],
    ["Telescoping: cancellation of adjacent terms in a sum.","Common ratio: fixed multiplicative factor in a GP.","Binomial coefficient: ⁿCₖ, the number of k-element selections from n items."]);

  const mathsTrig = make("JEE Main","Mathematics","Trigonometric Equations and Inverse Trigonometric Functions — JEE Deep Notes",
    "Solve a trigonometric equation without losing periodic solutions or violating inverse-function ranges. The shortcut is unit-circle structure—not guessing a single principal angle.",
    [
      ["1. Identities and transformations","Begin with sin²x+cos²x=1. Other identities follow by division only where the denominator is nonzero. Compound-angle formulas are often best for products or shifted angles; double-angle formulas can convert products into sums. Preserve excluded values if you divide by sin x or cos x, because those values may themselves solve the original equation."],
      ["2. General solution of equations","For sin x=sin α, the full family can be written x=nπ+(−1)ⁿα for integer n, with angles in radians. For cosine and tangent, use the symmetry and periods: cosine repeats every 2π and tangent every π. On a finite interval, list all reference angles in the correct quadrants, then add the required periodic repetitions."],
      ["3. Inverse functions and principal values","Arcsin, arccos and arctan return a principal value in their defined range. Thus arcsin(sin x)=x only when x is already in the arcsin range; otherwise reduce by periodicity and reflection. A sign chart or unit circle is safer than cancelling inverse functions mechanically."],
      ["4. Domain-aware equation solving","When an equation becomes quadratic in sin x or cos x, solve for the ratio and retain only values in [−1,1]. If squaring was used, substitute candidates back into the unsquared equation. Include endpoint values such as ±1, and check whether the original expression is defined at every candidate."]
    ],
    [
      formula("sin²x+cos²x=1","Pythagorean identity; links sine and cosine.","Use to eliminate one ratio or convert an equation to a single variable.","Angles in radians or degrees consistently.","Dividing by a trig function can discard zero cases."),
      formula("sin x=sin α ⇒ x=nπ+(−1)ⁿα","Complete sine-solution family.","Use for all real solutions, then restrict to the requested interval.","Angles in radians; n∈ℤ.","A single principal angle is not a general solution."),
      formula("tan x has period π; sin x and cos x have period 2π","Periodicity of the basic functions.","Use to generate all equivalent solutions.","Angle unit must match the period.","Do not use a 2π period for tangent.")
    ],
    [
      worked("Solve sin x=1/2 on [0,2π)",["Reference angle is π/6 because sin(π/6)=1/2.","Sine is positive in quadrants I and II, so x=π/6 or 5π/6.","The interval excludes 2π; no further angles belong."]),
      worked("Evaluate arcsin(sin 5π/6)",["The input 5π/6 lies in the principal range of arcsin.","Therefore arcsin(sin 5π/6)=5π/6.","By contrast, arcsin(sin 7π/6) is not 7π/6 because that angle is outside the principal output range."])
    ],
    [
      method("Reference-angle sweep","When solving a trig equation on a finite interval.",["Find the acute reference angle.","Determine the sign of the ratio in each quadrant.","List every matching angle in the interval.","Check endpoints and the equation's original domain."],"This is faster and safer than repeatedly solving a general formula."),
      method("Reduce powers/products","When powers like sin²x or products like sin x cos x appear.",["Choose sin²+cos²=1, a double-angle identity, or a quadratic substitution.","Keep all original restrictions before dividing.","Solve the transformed equation.","Back-substitute and test candidates in the original expression."],"Squaring can introduce extraneous roots."),
      method("Inverse trig composition","When a trig function sits inside arcsin/arccos/arctan.",["Write the inverse function's principal range.","Reduce the input angle to the appropriate interval.","Use symmetry and periodicity.","Return the principal output, not every equivalent angle."],"Always honour the principal-value definition.")
    ],
    [
      problem("Solve cos x=0 on [0,2π).","π/2, 3π/2","Cosine vanishes at the two vertical unit-circle points in this half-open interval."),
      problem("Evaluate arccos(cos 5π/3).","π/3","Cosine is 1/2, and arccos returns a value in [0,π], so the result is π/3."),
      problem("Why must zero cases be checked after dividing by sin x?","Because sin x may be zero and those values can solve the original equation.","Division by sin x is valid only for sin x≠0; solve the excluded cases separately.")
    ],
    ["Returning one solution for a periodic equation.","Treating arcsin(sin x)=x for every real x.","Using identities after division without checking the denominator's zero set.","Mixing radians and degrees."],
    ["JEE: equation roots, inverse-trig principal ranges, identity transformations and finite-interval solutions. Explicitly write the interval and keep a candidate check after squaring."],
    ["What is the period of tangent?","What range does arccos return?","Why can squaring create an extraneous solution?"],
    ["Principal value: the selected angle in an inverse function's output range.","Reference angle: acute angle used to determine trig magnitude.","Period: smallest positive interval over which a function repeats."]);

  const mathsPC = make("JEE Main","Mathematics","Permutations and Combinations — JEE Deep Notes",
    "Count outcomes by asking whether order matters, whether repetition is allowed, and whether identical objects or restrictions exist. Formula selection should follow the story, not precede it.",
    [
      ["1. Fundamental counting principle","If one stage can be completed in m ways and a later independent stage in n ways, the combined process has mn outcomes. For mutually exclusive cases, add the counts. Break complicated arrangements into stages, but ensure the cases do not overlap. A tree diagram can expose double-counting in small cases."],
      ["2. Permutations versus combinations","A permutation counts ordered selections; a combination counts unordered selections. For r distinct objects from n, nPr=n!/(n−r)! and nCr=n!/[r!(n−r)!]. The identity nPr=r! nCr reminds you that each chosen group has r! arrangements. If the question assigns roles such as captain and secretary, order matters."],
      ["3. Repetition and identical objects","Arrangements of n objects with repeated groups of sizes a,b,… are n!/(a!b!…). For length-r sequences with n choices each position and repetition allowed, the count is nʳ. Circular arrangements of distinct people around a round table are often (n−1)!, because rotations describe the same arrangement; check whether reflections are also equivalent."],
      ["4. Restrictions and complementary counting","When a rule says two people must sit together, treat them as one block first, then multiply by the internal arrangements. For 'at least one' questions, the complement often simplifies the count. For no-adjacent arrangements, place the less numerous objects first and count available gaps. State precisely what counts as a distinct arrangement."]
    ],
    [
      formula("nPr=n!/(n−r)!","Ordered selection of r distinct objects from n.","Use when roles or positions make different orders distinct.","Counts are dimensionless integer outcomes.","Do not use when order is irrelevant."),
      formula("nCr=n!/[r!(n−r)!]","Unordered selection of r objects from n.","Use for committees, groups or selecting positions without order.","Counts are dimensionless integer outcomes.","Repeated selections or indistinguishable objects need a different model."),
      formula("Repetition among identical items: n!/(a!b!…)","Distinct permutations with repeated objects.","Use when swapping equal letters does not create a new word.","Counts are dimensionless integer outcomes.","The repeated-group factorials are divisors.")
    ],
    [
      worked("Roles versus committee",["Choose president and secretary from 5 students: 5P2=5×4=20.","Choose a two-person committee: 5C2=5×4/(2×1)=10.","Same selected students, but roles make order matter only in the first question."]),
      worked("Anagram with repeated letters",["For BALLOON there are 7 letters, with L repeated twice and O repeated twice.","Distinct arrangements =7!/(2!2!)=1260.","Dividing by both repeated factorials removes duplicate arrangements of identical letters."])
    ],
    [
      method("Ask the order question first","Before choosing P or C.",["Write what a counted outcome looks like.","Swap two selected objects mentally.","If the outcome changes, count order; if not, use combinations.","Then adjust for restrictions or repeated objects."],"Some problems have ordered stages even when the final group is unordered."),
      method("Complement for at-least-one","When directly counting many ways to include at least one chosen item.",["Count all possible outcomes.","Count the cases with none of the chosen feature.","Subtract the no-feature count from the total.","Check whether the sample space includes repetition."],"The complement must be precisely defined."),
      method("Block method","When some people/items must remain together.",["Bundle the restricted items into one super-item.","Arrange the super-items.","Multiply by the internal arrangements within each block.","If items must not be together, consider total minus together."],"If the bundle has internal order restrictions, account for them separately.")
    ],
    [
      problem("How many 3-person committees from 8 students?","56","Order is irrelevant: 8C3=8×7×6/(3×2×1)=56."),
      problem("How many 4-digit codes from digits 0–9 if repetition is allowed and leading zero is permitted?","10,000","Each of four positions has 10 independent choices, so 10⁴."),
      problem("How many distinct arrangements of LEVEL?","30","Five letters with E repeated twice and L repeated twice: 5!/(2!2!)=30.")
    ],
    ["Using nPr for an unordered group.","Forgetting that leading zero may or may not be permitted.","Using factorials without dividing repeated objects.","Treating circular rotations as different when the problem says they are identical."],
    ["JEE: restricted arrangements, word permutations, gap/block methods, repetition, complementary counting and committee-style combinations. Draw stages before evaluating factorials."],
    ["When does order matter?","What does the block method do?","Why divide by factorials for identical letters?"],
    ["Permutation: ordered arrangement/selection.","Combination: unordered selection.","Complementary counting: count the total minus the forbidden cases."]);

  const mathsProbability = make("JEE Main","Mathematics","Probability and Conditional Probability — JEE Deep Notes",
    "Translate verbal probability into events, sample spaces and conditional structure. Avoid the frequent mistake of assuming independence or adding overlapping probabilities.",
    [
      ["1. Events and basic rules","The sample space contains elementary outcomes; an event is a subset. For equally likely outcomes, P(A)=favourable outcomes/total outcomes. The complement has probability 1−P(A). For two events, P(A∪B)=P(A)+P(B)−P(A∩B), which prevents double-counting their overlap."],
      ["2. Conditional probability and independence","P(A|B)=P(A∩B)/P(B), with P(B)>0. This asks for the probability of A after restricting attention to outcomes where B occurred. Independence means P(A∩B)=P(A)P(B), equivalently P(A|B)=P(A) when defined. Mutually exclusive nonzero events are not independent because one event excludes the other."],
      ["3. Total probability and Bayes' theorem","Partition the sample space into disjoint, exhaustive causes Bᵢ. Then P(A)=ΣP(A|Bᵢ)P(Bᵢ). Bayes' theorem reverses the condition: P(Bⱼ|A)=P(A|Bⱼ)P(Bⱼ)/P(A). Use a tree with branch probabilities when a problem has stages, defective products from different factories, or tests with false positives."],
      ["4. Expected value and distribution checks","For a discrete random variable X, E[X]=ΣxP(X=x). Expected value is a probability-weighted average and need not be a possible single outcome. Check every probability is between zero and one and that probabilities across mutually exclusive exhaustive outcomes sum to one. In repeated trials, probabilities predict long-run proportions, not exact small-sample counts."]
    ],
    [
      formula("P(A∪B)=P(A)+P(B)−P(A∩B)","Addition rule including overlap.","Use for 'A or B' when events may overlap.","Probability is dimensionless in [0,1].","Add without subtracting intersection only when events are mutually exclusive."),
      formula("P(A|B)=P(A∩B)/P(B)","Conditional probability.","Use when the information says B has occurred.","Require P(B)>0.","P(A|B) and P(B|A) are generally different."),
      formula("P(B|A)=P(A|B)P(B)/P(A)","Bayes' theorem for reversing a condition.","Use when evidence is observed and the question asks its likely cause.","Require P(A)>0.","Include all possible causes in the total-probability denominator.")
    ],
    [
      worked("Conditional probability from a card deck",["A standard 52-card deck has 4 aces and 13 spades.","Given the card is a spade, 13 outcomes remain and one is the ace of spades.","P(ace|spade)=1/13, not 4/52 unless calculating the unconditional probability."]),
      worked("Expected value",["A fair die pays ₹10 for a 6 and ₹0 otherwise.","E[X]=10(1/6)+0(5/6)=₹10/6.","This is average value over many trials, not a promise that one roll pays ₹1.67."])
    ],
    [
      method("Tree diagram","For multi-stage events or conditional probabilities.",["Write first-stage probabilities on branches.","Write conditional next-stage probabilities after each outcome.","Multiply along a path to get a joint probability.","Add disjoint paths for an event, then divide for conditioning if needed."],"Do not multiply conditional branch probabilities that belong to different prior outcomes."),
      method("Bayes table","For disease tests, defective products or multiple sources.",["Create one row per possible cause.","Multiply cause probability by likelihood of the evidence.","Add all cause-weighted likelihoods to get P(evidence).","Divide the target row by the total."],"Base rates matter; sensitivity alone does not give the posterior probability."),
      method("Independence test","When the word 'independent' is given or must be checked.",["Calculate P(A∩B).","Compare it with P(A)P(B).","If equal, the events are independent.","Do not infer independence merely because the events are different."],"Mutual exclusivity and independence have different meanings.")
    ],
    [
      problem("If P(A)=0.4, P(B)=0.5 and events are independent, find P(A∩B).","0.2","Independence gives product 0.4×0.5=0.2."),
      problem("If P(A)=0.6, P(B)=0.5 and P(A∩B)=0.3, find P(A∪B).","0.8","Use 0.6+0.5−0.3=0.8."),
      problem("Why is a medical-test positive result not necessarily a 99% disease probability if sensitivity is 99%?","Because prevalence and false-positive rate also matter.","Bayes' theorem combines prior disease probability with positive-test likelihood from both diseased and non-diseased groups.")
    ],
    ["Assuming independence without evidence.","Adding overlapping events without subtracting the intersection.","Reversing conditional probabilities.","Ignoring the base rate in Bayes questions."],
    ["JEE: conditional probability, Bayes, distributions and expectation. Convert wording into a tree or table before calculating; it reduces denominator mistakes."],
    ["What condition is needed for P(A|B)?","How do independence and mutual exclusivity differ?","Why does Bayes require the total evidence probability?"],
    ["Sample space: all possible elementary outcomes.","Independent events: one event does not change the probability of the other.","Prior probability: probability before incorporating new evidence."]);

  const mathsCalculus = make("JEE Main","Mathematics","Limits, Continuity and Differentiation — JEE Deep Notes",
    "Choose limit transformations strategically, check piecewise boundaries and use derivatives as rates and sign tests. The fastest solution usually begins by identifying the indeterminate form.",
    [
      ["1. Limits and indeterminate forms","Substitute directly first. If a finite nonzero value appears, it is usually the limit. If the result is 0/0, factor, rationalise, use a standard limit or compare dominant terms. ∞/∞ often calls for dividing by the highest power. Expressions like 0×∞ or ∞−∞ must be rewritten as a quotient or common-denominator expression before a rule is applied."],
      ["2. Continuity versus differentiability","Continuity at x=a requires the left limit, right limit and f(a) to agree. Differentiability requires compatible left and right derivatives as well; a corner may be continuous but not differentiable. For piecewise functions, solve continuity conditions first, then test derivative conditions. A graph sketch helps identify corners, cusps, jumps and vertical tangents."],
      ["3. Derivative rules and chain rule","Differentiate outer and inner functions carefully. For y=f(g(x)), dy/dx=f'(g(x))g'(x). Product and quotient rules are needed where products/ratios do not simplify. Implicit differentiation differentiates both sides with respect to x, treating y as a function of x. Logarithmic differentiation can simplify products of powers but requires domain awareness."],
      ["4. Derivatives for monotonicity and extrema","Solve f'(x)=0 and include points where the derivative does not exist but the function is defined. Make a sign chart for f' to classify increasing/decreasing intervals and turning points. A stationary point is not automatically a maximum or minimum. For absolute extrema on a closed interval, evaluate all interior critical points and endpoints."]
    ],
    [
      formula("limₓ→₀ sin x/x=1","Fundamental trigonometric limit.","Use when x is in radians and sine's argument approaches zero.","Dimensionless ratio.","The formula assumes radians; degrees change the limit constant."),
      formula("(f(g(x)))'=f'(g(x))g'(x)","Chain rule.","Use for composite expressions like sin(x²), ln(3x+1) or a power of a function.","Derivative units are output-units/input-units.","Do not forget the inner derivative."),
      formula("f'(x)>0 ⇒ f increasing; f'(x)<0 ⇒ f decreasing","Derivative sign test on an interval.","Use for monotonicity and candidate extrema.","Derivative units follow f/x.","Check sign intervals and domain gaps, not just roots.")
    ],
    [
      worked("A standard 0/0 limit",["Evaluate limₓ→₂ (x²−4)/(x−2).","Factor x²−4=(x−2)(x+2), then cancel for x≠2.","The limit equals limₓ→₂(x+2)=4; the original function's value at 2 is not required for the limit."]),
      worked("Chain rule",["For y=sin(x²+1), the outer derivative is cos(x²+1).","Multiply by the inner derivative 2x.","dy/dx=2x cos(x²+1); differentiating only the outer function would be incomplete."])
    ],
    [
      method("Factor first for 0/0","When polynomials vanish at the same point.",["Substitute and identify 0/0.","Factor numerator and denominator.","Cancel the common nonzero-nearby factor.","Evaluate the simplified limit."],"Cancellation is valid for the limit even if the original function is undefined at the target."),
      method("Dominant powers","For polynomial/rational limits as x→±∞.",["Identify highest degree in numerator and denominator.","Divide every term by the highest denominator power.","Compare degrees and leading coefficients.","Check the sign direction for x→−∞ when odd powers occur."],"Do not use dominant terms at finite points without justification."),
      method("Derivative sign chart","For monotonicity and local extrema.",["Find critical points in the domain.","Sort them and split the real line into intervals.","Test the sign of f' on each interval.","Check endpoints and nondifferentiable points for absolute-extremum questions."],"A repeated root of f' may not change sign.")
    ],
    [
      problem("Evaluate limₓ→₃ (x²−9)/(x−3).","6","Factor to x+3 and take the limit."),
      problem("If f'(x) changes from positive to negative at x=a, what is the usual local classification?","Local maximum, subject to differentiability/continuity conditions.","The function rises before a and falls after a, so a is a local maximum."),
      problem("Differentiate ln(1+x²).","2x/(1+x²)","Use d ln u/dx=u'/u with u=1+x².")
    ],
    ["Using trigonometric limit formulas with degree angles.","Assuming continuity implies differentiability.","Omitting the inner derivative in a composite function.","Checking f'=0 but ignoring undefined derivatives and interval endpoints."],
    ["JEE: piecewise limits, standard limits, chain/implicit/log differentiation and derivative sign charts. Write restrictions before cancellation, division or squaring."],
    ["What must match for piecewise continuity?","Why is differentiability stronger than continuity?","What extra factor appears in the chain rule?"],
    ["Indeterminate form: expression whose direct substitution does not determine a limit.","Critical point: domain point where derivative is zero or undefined.","Monotonicity: increasing/decreasing behaviour over an interval."]);

  const mathsIntegral = make("JEE Main","Mathematics","Integration, Definite Integrals and Area — JEE Deep Notes",
    "Integration is both reverse differentiation and signed accumulation. Technique selection—substitution, parts, partial fractions or symmetry—saves much more time than trying a random formula.",
    [
      ["1. Substitution and reverse chain rule","Look for an inner function g(x) beside a factor proportional to g'(x). Set u=g(x), replace du and integrate in u. This is the reverse of the chain rule. Always substitute back and differentiate the result as a quick verification. For definite integrals, transform both limits into the new variable or return to x before applying limits."],
      ["2. Integration by parts and partial fractions","Integration by parts reverses the product rule: ∫u dv=uv−∫v du. Pick u so differentiating it simplifies the expression. Rational functions may need polynomial division before partial fractions. Factor the denominator fully and use the correct form for repeated linear or irreducible quadratic factors; an incomplete decomposition can omit terms."],
      ["3. Definite integrals and symmetry","A definite integral is signed area. Swapping its limits changes the sign; splitting the interval adds integrals. For even f, ∫₋ₐᵃf=2∫₀ᵃf; for odd f the symmetric integral is zero. Confirm parity and interval symmetry before using these shortcuts. If a graph crosses the axis, geometric area may require absolute values or splitting."],
      ["4. Area between curves","Solve intersection points first. On each interval, decide which curve is higher, then integrate top minus bottom. If the curve ordering switches, split the region at the intersection. A sketch can prevent sign errors and show whether integration with respect to x or y gives fewer pieces."]
    ],
    [
      formula("∫f(g(x))g'(x)dx=∫f(u)du","Substitution/reverse chain rule.","Use when an inner function and its derivative are both present.","Indefinite integral includes +C.","Do not forget +C or transform the limits."),
      formula("∫u dv=uv−∫v du","Integration by parts.","Use for products where one factor simplifies when differentiated.","Units multiply through the integral.","Poor choice of u can make the remaining integral harder."),
      formula("Even: ∫₋ₐᵃ f=2∫₀ᵃ f; Odd: integral=0","Symmetry shortcuts.","Use only for symmetric limits and verified parity.","Integral units = integrand units × x units.","The odd shortcut applies to the signed integral, not always to geometric area.")
    ],
    [
      worked("Substitution",["Evaluate ∫2x cos(x²)dx.","Set u=x², so du=2x dx.","The integral is ∫cos u du=sin u+C=sin(x²)+C; differentiate to check."]),
      worked("Area between curves",["Find area between y=x and y=x² from x=0 to x=1.","On this interval x≥x², so area=∫₀¹(x−x²)dx.","Evaluate [x²/2−x³/3]₀¹=1/2−1/3=1/6 square units."])
    ],
    [
      method("Recognise u and du","When an expression contains a function and its derivative.",["Mark a plausible inner function.","Differentiate it mentally and compare with the remaining factor.","Adjust a constant factor and integrate.","Differentiate the answer to verify."],"If no derivative factor appears, substitution may not simplify the integral."),
      method("Use parity on symmetric limits","When the limits are −a to a.",["Check f(−x).","If f(−x)=f(x), double the 0-to-a integral.","If f(−x)=−f(x), the signed integral is zero.","If neither relation holds, split into even and odd parts."],"Do not use parity on an asymmetric interval."),
      method("Top-minus-bottom area","For a region enclosed by curves.",["Solve all relevant intersections.","Sketch the curves and order them on each segment.","Integrate upper minus lower.","Split wherever the ordering changes."],"A signed integral is not automatically a non-negative geometric area.")
    ],
    [
      problem("Evaluate ∫₀² x dx.","2","Antiderivative is x²/2, so 4/2−0=2."),
      problem("What is ∫₋₃³ x³ dx?","0","x³ is odd and the limits are symmetric."),
      problem("Find the area under y=2x from x=0 to x=3.","9","Area=∫₀³2x dx=[x²]₀³=9.")
    ],
    ["Forgetting +C in indefinite integration.","Treating below-axis signed area as positive geometric area automatically.","Using symmetry before checking f(−x).","Forgetting to split when the upper curve changes."],
    ["JEE: substitution, parts, partial fractions, definite-integral symmetry, area and differential-equation connections. Check any proposed antiderivative by differentiating."],
    ["What is the difference between a definite integral and geometric area?","When can odd symmetry make an integral zero?","Why should curve intersections be found first?"],
    ["Antiderivative: function whose derivative is the integrand.","Parity: even/odd symmetry of a function.","Signed area: integral that counts below-axis regions negatively."]);

  const mathsMatrices = make("JEE Main","Mathematics","Matrices and Determinants — JEE Deep Notes",
    "Use dimensions, determinant properties and matrix equations systematically. Shape checks and row-operation accounting prevent many avoidable errors.",
    [
      ["1. Matrix dimensions and operations","An m×n matrix has m rows and n columns. Addition requires equal dimensions. AB is defined when columns of A equal rows of B; the product is m×p if A is m×n and B is n×p. Matrix multiplication is not generally commutative: AB need not equal BA, and one product may be defined when the other is not."],
      ["2. Determinant and row operations","The determinant is defined for square matrices. Swapping two rows reverses its sign; multiplying one row by k multiplies the determinant by k; adding a multiple of another row leaves it unchanged. A repeated or proportional row gives determinant zero. For triangular matrices the determinant is the product of diagonal entries, often the fastest path."],
      ["3. Inverse and singular matrices","A square matrix is invertible exactly when its determinant is nonzero. For a 2×2 matrix, the inverse is 1/(ad−bc) times [[d,−b],[−c,a]]. The adjugate formula generalises this. If determinant is zero, the matrix is singular, but a linear system may have no solution or infinitely many; inspect consistency/rank rather than guessing."],
      ["4. Linear systems and Cramer's rule","For AX=B, when A is invertible, X=A⁻¹B gives the unique solution. Cramer's rule also needs a nonzero coefficient determinant. With a zero determinant, compare ranks or reduce equations. Always substitute the found solution into the original equations as a final check."]
    ],
    [
      formula("det([[a,b],[c,d]])=ad−bc","Determinant of a 2×2 matrix.","Use for invertibility and simple linear systems.","Determinant carries product units if entries carry units.","det=0 means no inverse, not automatically no solution."),
      formula("A⁻¹=adj(A)/det(A)","Inverse of an invertible square matrix.","Use for AX=B only if det(A)≠0.","Matrix entries of inverse carry reciprocal dimensions where applicable.","Do not divide by zero determinant."),
      formula("dim(AB)=(rows of A)×(columns of B)","Dimension check for multiplication.","Use before multiplying matrices.","Rows/columns are counts.","AB may exist while BA does not.")
    ],
    [
      worked("Inverse of a 2×2 matrix",["For A=[[2,1],[5,3]], det(A)=6−5=1.","Swap 2 and 3, negate off-diagonal entries: adj(A)=[[3,−1],[−5,2]].","Since determinant is 1, that adjugate is the inverse; multiply A A⁻¹ to check identity."]),
      worked("Solve a simple matrix system",["For 2x+y=5 and x+y=3, subtract the second equation from the first to get x=2.","Substitute into x+y=3 to obtain y=1.","The same result can be obtained through inverse methods, but elimination is faster for this small system."])
    ],
    [
      method("Dimension pre-check","Before a matrix product.",["Write the dimensions beside each matrix.","Check the inner dimensions match.","Write the expected output shape before multiplying.","Only then calculate entries using row-column dot products."],"Never assume AB and BA are both defined."),
      method("Determinant by row reduction","When a large determinant has obvious row relationships.",["Use row replacement operations to create zeros.","Track any row swaps and scalar row multiplications.","Reduce toward triangular form.","Multiply diagonal entries and restore tracked factors."],"Adding a multiple of one row to another leaves determinant unchanged; scaling or swapping does not."),
      method("Consistency test","When a coefficient determinant is zero.",["Reduce the coefficient and augmented matrices.","Look for a row like 0=nonzero, which signals inconsistency.","Compare ranks for consistency and number of free variables.","Do not conclude there is no solution from determinant zero alone."],"Use the full system, not just the coefficient matrix.")
    ],
    [
      problem("Find determinant of [[4,2],[3,1]].","−2","det=4×1−2×3=−2."),
      problem("What is the dimension of a 3×2 times 2×5 product?","3×5","The inner dimension 2 matches; outer dimensions 3 and 5 remain."),
      problem("Can det(A)=0 still allow AX=B to have solutions?","Yes, either no solution or infinitely many in the singular square case.","A singular coefficient matrix lacks a unique inverse; consistency depends on the augmented system.")
    ],
    ["Multiplying matrices elementwise instead of row-by-column.","Forgetting determinant sign changes after row swaps.","Using inverse formulas for singular matrices.","Assuming a zero determinant always means an inconsistent system."],
    ["JEE: determinant properties, inverse, matrix equation solving and consistency. Row operations can dramatically shorten determinant work when their effect is tracked."],
    ["Which dimensions must match for AB?","What happens to determinant after swapping rows?","Why does determinant zero not fully classify a linear system?"],
    ["Singular matrix: square matrix with determinant zero.","Adjugate: transpose of the cofactor matrix.","Rank: dimension of the matrix row/column space."]);

  const mathsVector3D = make("JEE Main","Mathematics","Vectors and Three-Dimensional Geometry — JEE Deep Notes",
    "Use component arithmetic for angles, projections, lines and distances. In 3D, non-parallel lines do not have to intersect; they can be skew.",
    [
      ["1. Components and dot product","Represent vectors by components and preserve signs. The dot product is a scalar: a·b=|a||b|cosθ. It is zero for perpendicular nonzero vectors. Scalar projection measures the component along a direction; vector projection additionally preserves that direction. A negative dot product corresponds to an obtuse angle between nonzero vectors."],
      ["2. Cross product and geometry","The cross product a×b is perpendicular to both vectors and has magnitude |a||b|sinθ. This magnitude equals parallelogram area; half is triangle area. Order matters: a×b=−b×a. If the cross product is zero, the vectors are parallel or one vector is zero."],
      ["3. Lines in 3D","A line can be written r=a+λd using a point vector and direction vector. In symmetric form, coordinate differences are divided by direction ratios, but parametric form is safer if any ratio is zero. To test intersection, equate all three coordinates and seek one consistent parameter pair. If direction vectors are non-parallel but no common point exists, the lines are skew."],
      ["4. Distance and common perpendicular","The angle between vector directions comes from the dot product. For skew lines with direction vectors d₁,d₂, the cross product supplies a common-perpendicular direction; the shortest distance is the absolute projection of a point-to-point separation onto the unit common-perpendicular direction. Check whether the lines intersect or are parallel before using a special distance formula."]
    ],
    [
      formula("a·b=|a||b|cosθ","Dot product and angle relationship.","Use for angles and perpendicularity.","Dot product units multiply the vector component units.","Check magnitudes are nonzero before dividing."),
      formula("|a×b|=|a||b|sinθ","Cross-product magnitude.","Use for area and a direction perpendicular to both vectors.","Area units for geometric position vectors.","Cross-product order changes its sign."),
      formula("Distance between skew lines = |(r₂−r₁)·(d₁×d₂)|/|d₁×d₂|","Shortest perpendicular distance between non-parallel skew lines.","Use when the lines do not intersect.","Length units.","If d₁×d₂=0, the formula denominator vanishes; treat parallel lines separately.")
    ],
    [
      worked("Angle between vectors",["Let a=(1,0,0), b=(1,1,0).","a·b=1, |a|=1 and |b|=√2.","cosθ=1/√2, so θ=45°; this also confirms the dot-product sign is positive."]),
      worked("Check whether lines intersect",["Write x,y,z equations with parameters λ and μ.","Solve x-coordinate equality and use that pair in the y and z equalities.","If the same λ,μ satisfy all three, the lines intersect; otherwise they do not.","Then compare directions to distinguish parallel from skew."])
    ],
    [
      method("Angle from components","For vectors with simple coordinates.",["Calculate the dot product.","Find squared magnitudes first to avoid premature square roots.","Use cosθ=(a·b)/(|a||b|).","Check the final ratio lies in [−1,1]."],"A zero vector has no defined direction angle."),
      method("Decide parallel/intersect/skew","For two line equations.",["Compare their direction vectors for parallelism.","If not parallel, solve two coordinate equations for parameters.","Substitute the parameters into the third equation.","If the third equality fails, the lines are skew."],"Do not assume non-parallel implies intersection in 3D."),
      method("Shortest distance","For skew lines.",["Take a point on each line and the difference vector.","Compute the cross product of direction vectors.","Project the point difference onto that normal direction.","Divide by the normal magnitude; use absolute value."],"The formula is for non-parallel line directions.")
    ],
    [
      problem("Find a unit vector along (2,−1,2).","(2/3,−1/3,2/3)","Magnitude is √(4+1+4)=3; divide each component by 3."),
      problem("What does a·b=0 imply if both vectors are nonzero?","The vectors are perpendicular.","By a·b=|a||b|cosθ, the cosine is zero so θ=90°."),
      problem("Can two non-parallel lines in 3D be skew?","Yes.","Their direction vectors are not parallel but the lines can occupy non-coplanar positions and never meet.")
    ],
    ["Swapping cross-product order without changing sign.","Mixing point coordinates with direction ratios.","Calling non-parallel lines intersecting without solving all coordinates.","Using symmetric form with a zero direction ratio."],
    ["JEE: vector projections, areas, line angles, skew-line distance and line relationships. Parametric equations and a cross-product direction check are reliable time-savers."],
    ["What does the cross-product magnitude represent?","What is the condition for two vectors to be perpendicular?","How do skew lines differ from intersecting lines?"],
    ["Direction vector: vector parallel to a line.","Scalar projection: signed component along a direction.","Skew lines: non-parallel, non-intersecting lines in 3D."]);

  const physicsUnits = make("JEE Main","Physics","Units, Dimensions, Significant Figures and Experimental Errors — JEE Deep Notes",
    "Use dimensional analysis for equation checks, scaling, error estimates and unit conversion. It can expose mistakes quickly, but it cannot prove an equation's numerical constants or functional form.",
    [
      ["1. Dimensions and homogeneity","Write each physical quantity in base dimensions such as mass M, length L, time T and current I. In a valid sum, every additive term must have the same dimensions. For example, a term proportional to velocity cannot be added directly to a term proportional to acceleration. Dimensionally homogeneous expressions can still be physically wrong, so follow the check with physics reasoning."],
      ["2. Deriving powers by dimensions","If a quantity is assumed to depend on variables through powers, write Q∝AᵃBᵇCᶜ and equate exponents of M,L,T on both sides. Solving the simultaneous equations gives the exponents. This is fast for scaling laws when the list of variables is known; it cannot determine dimensionless constants or distinguish all functions such as sinθ and θ."],
      ["3. Measurement error and significant figures","Absolute error has the units of the measured quantity; relative error is absolute error divided by magnitude; percentage error is the relative error times 100%. For products and quotients, approximate relative errors add in magnitude for worst-case bounds. If z=xᵃyᵇ, then Δz/z≈|a|Δx/x+|b|Δy/y. Significant digits communicate precision, not accuracy."],
      ["4. Read the question's unit system","Convert before substituting when prefixes differ. One kilometre is 10³ metres, one millisecond is 10⁻³ seconds, and one microcoulomb is 10⁻⁶ coulombs. In numerical MCQs, estimate order of magnitude and signs before calculating. Avoid mixing Celsius with thermodynamic Kelvin relations and avoid rounding intermediate values too early."]
    ],
    [
      formula("[Q]=MᵃLᵇTᶜ…","Dimensional representation of a physical quantity.","Use to test equations or infer powers in a proposed proportionality.","Dimensions, not units; e.g. speed has LT⁻¹.","Dimensionally correct does not guarantee physically correct."),
      formula("Relative error = Δx/x; percentage error = 100Δx/x","Normalised measurement uncertainty.","Use to compare error relative to size or convert to percentage.","Relative error dimensionless.","Use magnitude of uncertainty; a signed correction is different."),
      formula("z=xᵃyᵇ ⇒ Δz/z≈|a|Δx/x+|b|Δy/y","First-order worst-case relative-error estimate for a product of powers.","Use for small independent measurement errors in a derived quantity.","Relative error is dimensionless.","For statistical independent random uncertainties, a quadrature rule may be appropriate instead; follow the stated model.")
    ],
    [
      worked("Dimensional check",["Check whether s=ut+(1/2)at² is homogeneous.","[ut]=(LT⁻¹)T=L and [at²]=(LT⁻²)T²=L.","Both terms have length dimensions; the equation passes this necessary check."]),
      worked("Error in a squared measurement",["If radius r has 2% relative error and area A=πr², then ΔA/A≈2Δr/r.","The approximate area error is 4%.","This is a first-order estimate for a small radius uncertainty."])
    ],
    [
      method("Eliminate options with dimensions","When answer options have distinct physical units/powers.",["Write dimensions of the target quantity.","Check each option term by term.","Reject dimensionally inconsistent choices.","Use physical reasoning for the remaining options."],"Do not pick a unique answer if multiple options share dimensions."),
      method("Power-law scaling","For a relation Q∝AᵃBᵇ.",["Assume the power-law form and write dimensions.","Equate exponents of each base dimension.","Solve the linear equations in a,b,… .","Substitute a known case or check units."],"Dimensional analysis does not determine a pure numerical constant."),
      method("Percentage error shortcut","For products, powers or quotients.",["Write the result as a product of powers.","Multiply each relative error by the absolute power.","Add terms for a worst-case bound.","Convert to percentage last."],"Do not apply the worst-case sum when the problem explicitly gives independent random uncertainty propagation.")
    ],
    [
      problem("Dimensions of force?","MLT⁻²","Force=mass×acceleration; acceleration is LT⁻²."),
      problem("If x has 1% error, estimate the percentage error in x³.","3%","Relative error is multiplied by the power three for small errors."),
      problem("Can dimensional analysis determine the constant 1/2 in s=ut+(1/2)at²?","No.","A dimensionless numerical constant does not change dimensions.")
    ],
    ["Treating dimensional consistency as proof of correctness.","Adding relative percentage errors with signs that make them cancel in a worst-case bound.","Using Celsius in laws requiring absolute temperature.","Rounding before the final step."],
    ["JEE: dimensions, unit conversion, percentage errors and scaling. Estimate before calculating; it helps spot a result off by powers of ten."],
    ["What is the limitation of dimensional analysis?","How is relative error defined?","How does a power n affect approximate relative error?"],
    ["Homogeneity: every additive term has the same dimension.","Relative error: absolute uncertainty divided by measured magnitude.","Significant figures: digits conveying measurement precision."]);

  const physicsKinematics = make("JEE Main","Physics","Kinematics: Motion in One and Two Dimensions — JEE Deep Notes",
    "Separate displacement from distance, use graph slopes/areas and resolve projectile motion into components. Select equations from assumptions, not from the visual appearance of a question.",
    [
      ["1. Position, displacement and velocity","Displacement is final position minus initial position and can be negative; distance is total path length and is non-negative. Average velocity is displacement/time, whereas average speed is distance/time. Instantaneous velocity is the slope of the position-time curve. The reference frame and positive direction must be stated before assigning signs."],
      ["2. Constant-acceleration equations","When acceleration is constant, v=u+at, s=ut+½at² and v²=u²+2as are linked descriptions of the same motion. They do not apply unchanged when acceleration varies. Choose the equation that excludes the unwanted variable, and check that displacement and acceleration use consistent signs."],
      ["3. Graph interpretation and relative motion","Slope of a position-time graph is velocity; slope of velocity-time is acceleration; signed area under velocity-time is displacement. Total distance requires adding absolute areas when velocity changes sign. Relative velocity vA/B=vA−vB in a common frame. In crossing or chase problems, draw a timeline and identify whether objects move in the same or opposite directions."],
      ["4. Projectile motion","Ignoring air resistance, horizontal acceleration is zero and vertical acceleration is −g if upward is positive. Resolve u into ux=u cosθ and uy=u sinθ. For equal launch and landing heights, T=2u sinθ/g and R=u² sin2θ/g. If heights differ, solve vertical displacement first instead of applying the equal-height range formula."]
    ],
    [
      formula("v=u+at; s=ut+½at²; v²=u²+2as","Constant-acceleration kinematics.","Use only when acceleration is constant over the interval.","u,v in m/s; a in m/s²; s in m; t in s.","Define signs; do not mix distance with signed displacement."),
      formula("T=2u sinθ/g; R=u² sin2θ/g","Equal-height projectile flight time and range.","Use with uniform gravity and negligible air resistance.","T in s; R in m; θ in degrees or radians consistently.","Not valid unchanged when landing height differs."),
      formula("vA/B=vA−vB","Velocity of A measured relative to B.","Use for same-frame relative-motion questions.","m/s if velocities are in m/s.","Opposite directions need signed velocities, not blindly added magnitudes.")
    ],
    [
      worked("Relative speed in opposite directions",["Car A moves east at +20 m/s; car B moves west at −15 m/s.","vA/B=20−(−15)=35 m/s.","The relative separation changes at 35 m/s while they approach under the stated direction convention."]),
      worked("Projectile with a 30° launch",["Launch speed is 20 m/s at 30°, use g=10 m/s² and equal landing height.","Vertical component is 10 m/s, so T=2(10)/10=2 s.","Horizontal component is 10√3 m/s; range is 20√3 m."])
    ],
    [
      method("Choose the variable-free equation","When three of u,v,a,s,t are known.",["Write the known and unknown quantities.","Pick the kinematics equation that omits the unwanted variable.","Apply signs from your axis choice.","Check limiting behaviour and units."],"The constant-acceleration condition is essential."),
      method("Velocity-time area","When the question asks displacement or distance from a graph.",["Split at every crossing of the time axis.","Compute signed area for displacement.","Add absolute area magnitudes for total distance.","Use graph slope separately if acceleration is requested."],"A negative area is not negative distance."),
      method("Projectile component method","When a body is launched at an angle.",["Resolve launch velocity into horizontal and vertical components.","Use vertical motion to determine the time of the event.","Use horizontal uniform motion for range/displacement.","Check the landing height assumption."],"Maximum range at 45° applies only to equal-height ideal projectile motion.")
    ],
    [
      problem("A body starts from rest and accelerates at 3 m/s² for 4 s. Find final speed.","12 m/s","v=u+at=0+3×4=12."),
      problem("If a velocity-time graph has +6 m area and −2 m area, find displacement and total distance.","Displacement 4 m; distance 8 m","Signed areas sum to 4; distance adds magnitudes 6+2."),
      problem("At what launch angle is ideal equal-height projectile range maximum?","45°","R∝sin2θ, maximised when 2θ=90° within 0°–90°.")
    ],
    ["Using equal-height projectile formulas for different start/end heights.","Confusing speed with signed velocity.","Taking graph area as distance without absolute values.","Using constant-acceleration equations for non-uniform acceleration."],
    ["JEE/NEET Physics: graph interpretation, relative motion, meeting times, projectiles and vertical motion. Draw axes and split each phase when acceleration changes."],
    ["What does position-time slope mean?","When are the standard kinematics equations valid?","Why is projectile range formula conditional?"],
    ["Displacement: signed position change.","Relative velocity: velocity measured from another moving frame.","Trajectory: path followed by the moving body."]);

  const physicsNLM = make("JEE Main","Physics","Newton's Laws, Friction and Constraints — JEE Deep Notes",
    "Free-body diagrams, correctly directed friction and independent equations are the foundation for pulleys, inclined planes and connected-body questions.",
    [
      ["1. Draw one free-body diagram per object","Select a body and draw only forces exerted on it: gravity, contact normal, friction, tension and applied forces. An action-reaction partner acts on another body, so it does not appear on the same isolated diagram. Resolve angled forces into components along axes chosen to simplify the acceleration."],
      ["2. Newton's second law","The vector equation ΣF=ma applies to the net external force on the chosen body. Along each axis, write one scalar equation with consistent signs. A negative solved acceleration or tension-related variable may simply mean the assumed direction was opposite to reality; do not discard the magnitude without interpreting the sign."],
      ["3. Static and kinetic friction","Static friction adjusts to the value needed to prevent relative slipping and satisfies |fₛ|≤μₛN. Only at limiting motion is fₛ=μₛN. During sliding, the elementary model uses fₖ=μₖN. The friction direction opposes actual or impending relative slipping at the contact, not automatically the direction an object moves on a page."],
      ["4. Connected bodies and constraints","For ideal massless strings over ideal pulleys, connected points share a constraint-dependent acceleration. Write each body's free-body diagram separately and then use the string-length constraint. If an object does not slip relative to a surface, a=αR at the contact for rolling; this is a constraint, not an extra force."]
    ],
    [
      formula("ΣF=ma","Net-force relation.","Use for translational dynamics after selecting a body/system.","Force N=kg·m/s².","Do not include action-reaction partners on one isolated body."),
      formula("|fₛ|≤μₛN; fₖ=μₖN","Friction models.","Static equality only at impending slip; kinetic relation during sliding.","Friction in newtons; μ dimensionless.","Normal reaction is not always mg."),
      formula("Incline: mg sinθ parallel; mg cosθ perpendicular","Components of weight on an incline.","Use axes along and normal to the slope.","Force units.","Friction direction must be inferred from relative slipping tendency.")
    ],
    [
      worked("Block on a rough incline",["For a block on an incline θ with no other normal force, N=mg cosθ.","The downhill gravity component is mg sinθ; the maximum static friction is μₛmg cosθ.","Sliding begins when mg sinθ>μₛmg cosθ, or tanθ>μₛ."]),
      worked("Two connected masses",["For a hanging mass m₂ pulling a frictionless-table mass m₁, write T=m₁a and m₂g−T=m₂a.","Add the equations to eliminate tension: m₂g=(m₁+m₂)a.","Hence a=m₂g/(m₁+m₂); substitute back for T."])
    ],
    [
      method("Friction threshold","For 'just starts to move' or 'limiting equilibrium'.",["Draw the diagram and calculate N.","Set static friction to μₛN only at the threshold.","Balance forces along the impending-slip direction.","Check whether the assumed slip direction is consistent."],"For ordinary static equilibrium below threshold, friction is not automatically maximum."),
      method("Eliminate tension","For simple ideal connected masses.",["Write ΣF=m₁a and ΣF=m₂a separately.","Use equal magnitudes of acceleration only if the string constraint guarantees it.","Add/subtract equations so tension cancels.","Back-substitute to recover tension."],"Different pulley constraints can produce different accelerations."),
      method("Incline components","When gravity is the only force normal to the plane.",["Set axes parallel/perpendicular to the incline.","Use mg sinθ along the slope and mg cosθ normal to it.","Find N from the normal equation.","Use friction only after determining slip tendency."],"Extra normal-direction forces change N.")
    ],
    [
      problem("For m=2 kg and a=3 m/s², what is net force?","6 N","ΣF=ma=2×3=6 N."),
      problem("At limiting equilibrium on a simple incline, what relation connects μₛ and θ?","μₛ=tanθ","Set mg sinθ=μₛmg cosθ and cancel mg cosθ."),
      problem("Do action-reaction forces cancel on one free-body diagram?","No","They act on different bodies; each selected body's net force includes only forces acting on that body.")
    ],
    ["Setting static friction equal to μN in every situation.","Assuming N=mg on an incline or under an angled force.","Putting equal-and-opposite interaction forces on the same diagram.","Ignoring the string constraint or assigning inconsistent accelerations."],
    ["JEE: pulley systems, block-incline friction, normal reaction changes and equilibrium thresholds. Separate each object and state the impending motion before assigning friction direction."],
    ["When is static friction equal to its maximum?","Why is normal reaction not universally mg?","What does a negative acceleration sign mean?"],
    ["Free-body diagram: diagram of forces on a selected object.","Limiting friction: maximum static friction before slipping.","Constraint: geometric/string condition restricting motion."]);

  const physicsWork = make("JEE Main","Physics","Work, Energy, Power and Circular Motion — JEE Deep Notes",
    "Energy methods avoid unnecessary time equations; circular motion requires inward net force. Treat centripetal force as the radial resultant, not as an extra force.",
    [
      ["1. Work and kinetic energy","Work by a constant force is W=Fs cosθ; only the component along displacement contributes. The work-energy theorem states that net work equals change in kinetic energy. Conservative-force work can be represented through potential energy, while non-conservative work such as friction may change mechanical energy."],
      ["2. Potential energy and power","Near Earth's surface, gravitational potential energy change is mgΔh. Spring potential energy is ½kx² for an ideal spring measured from its natural length. Power is the rate of energy transfer: average P=W/Δt, and instantaneous P=F·v. A force can do zero work when perpendicular to instantaneous displacement even if it changes direction of motion."],
      ["3. Uniform circular motion","Centripetal acceleration points toward the centre and has magnitude v²/r. Sum the real inward radial force components and set them equal to mv²/r. At constant speed, velocity still changes direction, so acceleration is nonzero. In vertical circles, tension/normal force and gravity contribute differently at the top and bottom."],
      ["4. Spring and collision bookkeeping","For an ideal spring, force is −kx and stored energy is ½kx². In a collision, momentum is conserved for an isolated system; kinetic energy is conserved only in an elastic collision. Do not use energy conservation across frictional work or an inelastic collision without accounting for the energy transfer."]
    ],
    [
      formula("W=Fs cosθ; Wnet=ΔK","Work and work-energy theorem.","Use when force and displacement are known or when speed endpoints are sought.","Joule = N·m.","Use the angle between force and displacement."),
      formula("K=½mv²; U_s=½kx²","Translational kinetic and ideal-spring energy.","Use to connect speeds, heights and spring compression.","Energy in joules; k in N/m.","For spring energy, x is measured from natural length."),
      formula("a_c=v²/r; ΣF_inward=mv²/r","Centripetal condition.","Use for circular motion after drawing radial force components.","a in m/s²; force in N.","Centripetal force is a resultant, not an additional force.")
    ],
    [
      worked("Work-energy to find speed",["A 2 kg body starts at rest and receives net work 36 J.","Wnet=ΔK=½mv², so 36=½(2)v²=v².","The final speed is 6 m/s; no time or acceleration is required."]),
      worked("Flat curve threshold",["On a level road, friction supplies the inward force for a car turning at radius r.","At the limit μₛmg=mv²/r.","Thus v_max=√(μₛgr), under the level-road/no-extra-force model."])
    ],
    [
      method("Energy instead of time kinematics","When asking for speed after a height change, spring compression or known work.",["Choose initial and final states.","Write K_i+U_i+W_nonconservative=K_f+U_f.","Insert signs for work and potential-energy changes.","Solve for the requested speed or displacement."],"Do not omit friction or external work."),
      method("Circular force balance","For a loop, turn or orbit.",["Choose inward radial direction as positive.","Draw only the real forces with radial components.","Set their signed sum to mv²/r.","Use energy separately if speed depends on height."],"Radial inward direction changes relative to the object around a vertical circle."),
      method("Power shortcut","When velocity is known at the instant.",["Resolve the force along velocity.","Use P=Fv cosθ.","For average power, use total work divided by elapsed time.","Check watts = joules/second."],"A perpendicular force has zero instantaneous power.")
    ],
    [
      problem("A 3 kg object has speed 4 m/s. Find kinetic energy.","24 J","K=½×3×16=24 J."),
      problem("A 10 N force acts perpendicular to displacement. Work?","0 J","cos90°=0, so W=Fs cos90°=0."),
      problem("For a circular path of radius 2 m at speed 6 m/s, find centripetal acceleration.","18 m/s²","a=v²/r=36/2=18 m/s².")
    ],
    ["Treating centripetal force as an extra force on top of real forces.","Using energy conservation while ignoring non-conservative work.","Using the angle between the path and some unrelated axis in W=Fs cosθ.","Assuming constant speed means zero acceleration in circular motion."],
    ["JEE: spring/block energy, frictional work, loops, turns and instantaneous power. Energy often removes time from the calculation; use Newton's law for the radial constraint."],
    ["When is work zero despite nonzero force?","What does the work-energy theorem state?","Why is there acceleration in uniform circular motion?"],
    ["Conservative force: path-independent work in its usual domain.","Power: rate of energy transfer.","Centripetal acceleration: inward acceleration needed for circular motion."]);

  const physicsRotation = make("JEE Main","Physics","Rotational Dynamics and Rolling — JEE Deep Notes",
    "Link angular and translational motion with torque, moment of inertia, rolling constraints and angular-momentum conservation.",
    [
      ["1. Angular kinematics","Angular displacement θ, angular velocity ω and angular acceleration α parallel linear variables. For constant angular acceleration, ω=ω₀+αt and θ=ω₀t+½αt². Use radians in these equations. The no-slip rolling relation v_cm=ωR connects the body's centre speed to its angular speed."],
      ["2. Torque and moment of inertia","Torque is τ=r×F, with magnitude rF sinθ; the lever arm is the perpendicular distance to the force line. Moment of inertia I=Σmr² depends on the axis and mass distribution. The parallel-axis theorem gives I=I_cm+Md² for a parallel axis. Greater I means more torque is required for the same angular acceleration."],
      ["3. Angular momentum and energy","For a rigid body rotating about a fixed principal axis, L=Iω and rotational kinetic energy is ½Iω². If net external torque about a chosen axis is zero, angular momentum about that axis is conserved. When I changes, ω adjusts. Mechanical energy conservation can complement rotational dynamics if dissipative work is absent."],
      ["4. Rolling and combined systems","A rolling body can possess both centre-of-mass translational kinetic energy and rotational kinetic energy. For pure rolling, the contact point has zero instantaneous velocity relative to the ground in the ideal model. Write translation and rotation equations separately for a spool or pulley; use a=αR only when the contact/string does not slip."]
    ],
    [
      formula("τ=Iα","Rotational Newton's law for a fixed axis.","Use for net torque about the axis when I is constant.","τ in N·m; I in kg·m²; α in rad/s².","Choose the same axis for torque and inertia."),
      formula("L=Iω; K_rot=½Iω²","Angular momentum and rotational kinetic energy for fixed-axis rotation.","Use for spin changes, energy and conservation.","L in kg·m²/s; energy in J.","Angular momentum conservation needs zero net external torque."),
      formula("v=ωR; a=αR","No-slip rolling constraints.","Use when rolling contact does not slip.","v in m/s; ω in rad/s.","Do not apply if slipping occurs.")
    ],
    [
      worked("Rolling solid disc",["A solid disc rolls without slipping at centre speed v; I=½MR².","ω=v/R, so total energy=½Mv²+½Iω².","K=½Mv²+¼Mv²=¾Mv²."]),
      worked("Skater pulling arms inward",["Suppose external torque is negligible, so I_iω_i=I_fω_f.","If moment of inertia halves, final angular speed doubles.","The increase in rotational kinetic energy is supplied by the skater's internal work, not by a violation of energy conservation."])
    ],
    [
      method("Check which conservation law fits","For rotating/rolling problems.",["If the target is speed vs height and no dissipative work occurs, try energy.","If external torque is zero and inertia changes, use angular momentum.","If forces/accelerations are requested, use translation and torque equations.","Apply rolling constraints only after checking no slip."],"Energy and angular momentum have different conservation conditions."),
      method("Parallel-axis theorem","When the axis is displaced from the centre of mass.",["Find I_cm about the parallel centre-of-mass axis.","Measure perpendicular distance d between axes.","Add Md² to I_cm.","Check the units and physical trend."],"The axes must be parallel."),
      method("Reduce rolling inertia to a coefficient","When common moment-of-inertia forms are given.",["Write K=½Mv²+½I(v²/R²).","Factor ½Mv²[1+I/(MR²)].","Insert the correct I/(MR²) ratio.","Compare coefficients to rank acceleration/energy."],"The coefficient depends on the body's shape and axis.")
    ],
    [
      problem("If I=2 kg·m² and α=3 rad/s², find net torque.","6 N·m","τ=Iα=2×3=6."),
      problem("For a ring rolling without slipping, what is ω in terms of centre speed v and radius R?","v/R","The kinematic rolling relation is v=ωR."),
      problem("When is angular momentum conserved about an axis?","When net external torque about that axis is zero.","This follows from dL/dt=τ_external about the chosen axis.")
    ],
    ["Using the wrong axis for I.","Applying angular-momentum conservation when external torque is nonzero.","Leaving out one of the two kinetic-energy parts for rolling.","Assuming static friction always dissipates energy in ideal no-slip rolling."],
    ["JEE: rotational energy, rolling down inclines, pulleys/spools and angular-momentum conservation. Write both translational and rotational equations and use one constraint to link them."],
    ["What determines moment of inertia?","What condition conserves angular momentum?","What does pure rolling imply at the contact point?"],
    ["Torque: rotational effect of a force about an axis.","Moment of inertia: resistance to angular acceleration for an axis.","Pure rolling: rolling without sliding at the contact."]);

  const physicsGravitation = make("JEE Main","Physics","Gravitation, Satellites and Escape Speed — JEE Deep Notes",
    "Treat gravitational force, field, potential and orbital energy as connected but distinct quantities. The main speed gains come from using energy per unit mass and recognising inverse-square scaling.",
    [
      ["1. Universal gravitation and field","Two point masses attract with magnitude F=Gm₁m₂/r² along their centre line. Outside a spherically symmetric body, its gravitational field is equivalent to that of a point mass at the centre. Field strength g=GM/r² and is directed inward. Inside an ideal uniform spherical shell, net gravitational field is zero; inside a uniform solid sphere, g scales linearly with distance from the centre."],
      ["2. Potential and potential energy","With zero potential chosen at infinity, gravitational potential V=−GM/r and the potential energy of mass m is U=−GMm/r. The negative sign indicates a bound state under this reference choice. Potential is scalar, so contributions add algebraically; field is vector, so direction matters. Near Earth's surface, ΔU≈mgΔh is an approximation for small height changes compared with Earth's radius."],
      ["3. Circular orbit","Gravity supplies the centripetal force for a circular satellite orbit: GMm/r²=mv²/r, hence v=√(GM/r). Orbital period follows T=2πr/v, giving T²∝r³ for the same central mass. The satellite's total mechanical energy in a circular orbit is −GMm/(2r); kinetic energy is positive and potential energy is twice as negative."],
      ["4. Escape speed and energy reasoning","Escape speed is the minimum launch speed in the ideal two-body model needed to reach infinity with zero final speed. Set initial kinetic plus potential energy to zero at infinity: ½mv_e²−GMm/R=0. Escape speed does not depend on the escaping object's mass. Atmospheric drag, rotation and non-spherical effects modify real launches but are excluded in standard problems."]
    ],
    [
      formula("F=GMm/r²; g=GM/r²","Gravitational force and field outside a spherical mass.","Use centre-to-centre distance r.","F in N; g in m/s².","At height h above a planet, use r=R+h, not h alone."),
      formula("V=−GM/r; U=−GMm/r","Potential and potential energy with zero at infinity.","Use for energy changes, binding and escape.","V in J/kg; U in J.","Potential is negative under this reference convention."),
      formula("v_orbit=√(GM/r); T²=4π²r³/(GM)","Circular-orbit speed and period.","Use for an ideal circular orbit around a central mass M.","v in m/s; T in s.","Use orbital radius from the planet's centre."),
      formula("v_escape=√(2GM/R)=√(2gR)","Escape speed from radius R.","Use for launch from the surface with no drag/rotation in the model.","m/s.","Escape speed is independent of the escaping object's mass.")
    ],
    [
      worked("Double the orbital radius",["Circular speed varies as r⁻¹/².","If r becomes 4r, new speed is v/2.","Orbital period varies as r³/², so it becomes 8 times longer."]),
      worked("Escape speed from surface gravity",["Using v_e=√(2gR), take g≈9.8 m/s² and Earth's radius R≈6.4×10⁶ m.","v_e≈√(2×9.8×6.4×10⁶)≈1.12×10⁴ m/s.","This is about 11.2 km/s under the simplified model."])
    ],
    [
      method("Scale instead of recalculate","When orbital radius or planet mass changes by a simple factor.",["Start from v∝√(M/r), T∝r^(3/2)/√M, and g∝M/r².","Write the ratio new/old.","Cancel unchanged quantities before substituting.","Square roots and powers are usually easier than recomputing constants."],"Use radius from centre, not altitude."),
      method("Escape-energy balance","When escape speed or minimum energy is requested.",["Set zero potential at infinity.","Write initial K+U and final energy at infinity.","Set final speed to zero for minimum escape.","Cancel the escaping mass."],"This ideal formula neglects drag and other external work."),
      method("Field versus potential","When contributions from several masses are present.",["For potential, add signed scalar terms −GM_i/r_i.","For field, calculate each vector's direction and add components.","Check symmetry before expanding components.","A zero field does not necessarily imply zero potential."],"Never add field magnitudes without directions.")
    ],
    [
      problem("If distance from a point mass doubles, how does gravitational force change?","To one quarter","F∝1/r², so F_new/F_old=1/2²."),
      problem("Does surface escape speed depend on the projectile's mass?","No","The mass cancels between kinetic energy and gravitational potential-energy terms."),
      problem("In a circular orbit, what supplies centripetal force?","Gravity","The gravitational force is the inward resultant for the ideal circular orbit.")
    ],
    ["Using altitude h where centre distance R+h is required.","Treating potential as a vector.","Using surface g for a high orbit without updating gravity.","Assuming the satellite's total energy is positive in a bound circular orbit."],
    ["JEE/NEET Physics: field/potential, gravity scaling, satellite periods, orbital energy and escape speed. Learn proportionalities; they make ratio MCQs fast."],
    ["Why is gravitational potential negative with zero at infinity?","How does circular orbital speed scale with radius?","Why does escape speed not depend on the launch object's mass?"],
    ["Gravitational field: force per unit test mass.","Gravitational potential: potential energy per unit mass.","Escape speed: minimum speed to reach infinity in the ideal model."]);

  const physicsSHM = make("JEE Main","Physics","Simple Harmonic Motion and Waves — JEE Deep Notes",
    "Recognise SHM through acceleration proportional to displacement and opposite in direction. Phase reasoning, energy and wave speed relations solve many timed questions without lengthy differential equations.",
    [
      ["1. SHM condition and phase","Simple harmonic motion satisfies a=−ω²x relative to equilibrium. The general displacement is x=A cos(ωt+φ) or an equivalent sine form. Velocity and acceleration are phase-shifted: velocity is largest at equilibrium and zero at extreme positions; acceleration is zero at equilibrium and maximal in magnitude at extremes."],
      ["2. Period and physical systems","For an ideal mass-spring system, ω=√(k/m) and T=2π√(m/k). For a simple pendulum at small amplitude, T≈2π√(l/g), independent of bob mass and approximately independent of amplitude. State the small-angle condition. A real pendulum with large amplitude does not obey the same simple formula exactly."],
      ["3. Energy in SHM","Total ideal oscillator energy is ½kA² and is conserved. At displacement x, spring potential energy is ½kx² and kinetic energy is ½k(A²−x²). At equilibrium, kinetic energy is maximum; at turning points it is zero. Energy ratios are often faster than solving x(t) when only speeds at positions are requested."],
      ["4. Wave relations and superposition","For a travelling sinusoidal wave, speed v=fλ=ω/k. A wave transports energy and information; medium particles oscillate about equilibrium rather than travelling with the wave over the whole distance. In standing waves, nodes have zero displacement amplitude and antinodes maximum amplitude. Boundary conditions determine the allowed harmonics."]
    ],
    [
      formula("a=−ω²x; T=2π/ω","SHM condition and period.","Use for harmonic oscillators referenced to equilibrium.","ω in rad/s; T in seconds.","Acceleration must point toward equilibrium."),
      formula("T_spring=2π√(m/k)","Period of an ideal mass-spring oscillator.","Use with linear restoring force and idealised massless spring.","m in kg; k in N/m.","Greater mass increases period; greater stiffness lowers it."),
      formula("v²=ω²(A²−x²)","Speed at displacement x in SHM.","Use when amplitude and current position are known.","v in m/s; x,A in m.","Valid for ideal SHM measured from equilibrium."),
      formula("v_wave=fλ=ω/k","Wave speed relation.","Use for periodic waves once frequency and wavelength are known.","v m/s; f Hz; λ m.","Don't confuse wave speed with the medium particle's oscillation speed.")
    ],
    [
      worked("Speed at half amplitude",["For SHM, v²=ω²(A²−x²).","At x=A/2, v=ωA√(1−1/4)=ωA√3/2.","Compare with maximum speed ωA: speed is √3/2 of maximum."]),
      worked("Mass change",["For a spring oscillator T∝√m.","If mass is multiplied by 9 while k stays fixed, period becomes 3T.","No full substitution is needed for a ratio question."])
    ],
    [
      method("Energy instead of phase algebra","For speed at a known displacement.",["Write total energy ½kA².","Subtract potential energy ½kx² to get kinetic energy.","Set ½mv²=½k(A²−x²).","Use k/m=ω² to get the speed."],"This gives speed magnitude, not the direction."),
      method("Scale the period","When a mass, spring constant, length or gravity changes.",["Write the proportionality for the relevant oscillator.","Form a new/old ratio.","Apply square-root scaling.","Check the physical trend: heavier spring mass means slower oscillation."],"Use the simple-pendulum formula only in the small-angle approximation."),
      method("Identify wave variables","For travelling-wave questions.",["Read frequency or angular frequency from time dependence.","Read wave number/wavelength from spatial dependence.","Calculate speed from v=fλ or ω/k.","Use direction of the phase term to infer propagation direction."],"A wave's particle displacement amplitude is not its wavelength.")
    ],
    [
      problem("At which position is speed maximum in ideal SHM?","Equilibrium, x=0","All ideal oscillator energy is kinetic there."),
      problem("If wavelength is 0.5 m and frequency 40 Hz, find wave speed.","20 m/s","v=fλ=40×0.5=20 m/s."),
      problem("What is the spring oscillator period if m becomes four times larger?","Twice the original period","T∝√m, so the ratio is √4=2.")
    ],
    ["Saying velocity is maximum at the extreme position.","Forgetting the small-angle condition for a simple pendulum.","Confusing particle speed with wave propagation speed.","Using SHM equations when the restoring force is not linear."],
    ["JEE/NEET Physics: spring/pendulum scaling, energy, phase, wave speed and standing-wave modes. Ratios often avoid plugging constants."],
    ["Where is SHM acceleration maximum?","What determines ideal mass-spring period?","What do nodes and antinodes represent?"],
    ["Amplitude: maximum displacement from equilibrium.","Phase: angular state within an oscillation cycle.","Wavelength: spatial period of a travelling wave."]);

  const physicsElectrostatics = make("JEE Main","Physics","Electrostatics, Potential and Capacitors — JEE Deep Notes",
    "Treat field as a vector and potential as a scalar. Superposition, symmetry and the fixed-charge/fixed-voltage condition are decisive in capacitor questions.",
    [
      ["1. Coulomb force and field","Point charges interact through an inverse-square force in vacuum. Electric field is force per unit positive test charge; its direction is the force direction on a positive charge. By superposition, field vectors from separate charges add componentwise. Field lines are a diagrammatic aid, not physical strings; where they are denser, field magnitude is represented as larger."],
      ["2. Potential and energy","Electric potential is potential energy per unit charge and is scalar. For a point charge V=kq/r, retaining the sign of q; the field is vector-valued. Field may be zero at a point while potential is nonzero, for example at the midpoint of two identical positive charges. Work by the electrostatic field between two fixed points depends on the potential difference."],
      ["3. Gauss's law and conductors","Gauss's law relates net flux through a closed surface to enclosed charge. It is most useful for spherical, cylindrical or planar symmetry, where field magnitude can be taken out of the flux integral. In electrostatic equilibrium the field inside conducting material is zero and the conductor is equipotential. External charges can still contribute to the field at locations outside that conductor."],
      ["4. Capacitor networks and energy","Capacitance C=Q/V. Parallel capacitors add directly because they share voltage; series capacitors add reciprocals because the isolated series elements carry equal magnitude charge. Stored energy is ½CV²=Q²/(2C)=½QV. Before inserting a dielectric, determine whether the battery remains connected (fixed V) or the capacitor is isolated (fixed Q)."]
    ],
    [
      formula("F=k|q₁q₂|/r²; E=F/q_test","Coulomb force and electric field.","Use for point charges and superposition.","F in N; E in N/C or V/m.","Field direction depends on source-charge sign."),
      formula("V=kq/r; U=qV","Potential and potential-energy relation.","Use for energy/work and scalar superposition.","V in volts; U in joules.","Keep charge signs; V is not a vector."),
      formula("Φ_E=Q_enclosed/ε₀","Gauss's law for total flux through a closed surface.","Use symmetry to solve for field from flux.","Flux N·m²/C.","Gauss's law alone does not determine E without symmetry information."),
      formula("C_series⁻¹=Σ1/Cᵢ; C_parallel=ΣCᵢ","Equivalent capacitance.","Use for ideal capacitor combinations.","C in farads.","Identify actual connected nodes, not just the drawing's visual adjacency.")
    ],
    [
      worked("Series capacitors",["For 6 μF and 3 μF in series, 1/Ceq=1/6+1/3=1/2 per μF.","Thus Ceq=2 μF.","The equivalent capacitance is smaller than either component, a useful sanity check."]),
      worked("Field zero, potential not zero",["At the midpoint of two equal positive point charges, their electric fields have equal magnitude and opposite directions.","Their potentials are both positive scalars and add.","So net E=0 but net V>0; never infer potential only from field cancellation."])
    ],
    [
      method("Field vs potential","When a problem combines symmetric charges.",["For E, resolve each contribution into vector components.","For V, add signed scalar terms kq/r.","Use symmetry to identify cancellations before arithmetic.","Check units: V/m versus V."],"Zero field does not imply zero potential."),
      method("Capacitor condition first","For dielectric or energy-change questions.",["Ask whether the battery stays connected.","If connected, voltage is fixed; if isolated, charge is fixed.","Use the corresponding energy expression and changed capacitance.","Check the direction of the energy change."],"Do not mix fixed-Q and fixed-V cases."),
      method("Gauss symmetry test","Before choosing a Gaussian surface.",["Identify spherical, cylindrical or planar symmetry.","Choose a closed surface matching that symmetry.","State where E is constant or perpendicular/parallel to the surface.","Evaluate flux and solve only after that check."],"A convenient surface does not create symmetry that the charge distribution lacks.")
    ],
    [
      problem("If separation doubles, how does Coulomb-force magnitude change?","To one quarter","F∝1/r²."),
      problem("Which combination raises equivalent capacitance above the individual capacitors?","Parallel connection","Parallel capacitances add: Ceq=ΣC."),
      problem("Can E=0 while V≠0?","Yes","Equal positive charges at their midpoint have cancelling fields but adding positive potentials.")
    ],
    ["Adding field magnitudes without directions.","Treating potential like a vector.","Using Gauss's law as an immediate field formula for arbitrary charge distributions.","Forgetting whether charge or voltage is fixed when a dielectric is inserted."],
    ["JEE/NEET Physics: symmetry, field/potential distinction, Gauss law and capacitor networks. Identify fixed quantities before calculating energy."],
    ["What quantity does Gauss's law use inside the surface?","Why do series capacitors have lower equivalent capacitance?","What is the difference between field and potential?"],
    ["Electric flux: surface integral of the normal electric-field component.","Equipotential: location with constant potential.","Dielectric: insulating, polarisable material."]);

  const physicsCurrent = make("JEE Main","Physics","Current Electricity and Circuit Networks — JEE Deep Notes",
    "Use current conservation and potential differences as separate tools. Resistor-network speed tricks work only when the nodes and ideal assumptions are correctly identified.",
    [
      ["1. Current, resistance and resistivity","Current is charge passing a cross-section per unit time. For an ohmic resistor at fixed physical conditions, V=IR. A uniform wire's resistance is ρL/A, so increasing length raises resistance and increasing area lowers it. Resistivity is material- and temperature-dependent; resistance additionally depends on geometry."],
      ["2. Series and parallel networks","In series, the same current passes through each element and resistances add. In parallel, the same potential difference acts across each branch and reciprocal resistances add. For a mixed circuit, reduce groups only when they genuinely share the required node structure. Redraw the circuit after each reduction instead of relying on visual adjacency."],
      ["3. Kirchhoff rules and real sources","The junction rule follows from charge conservation; the loop rule follows from energy conservation. Choose current directions arbitrarily and keep signs consistent. A negative current means actual flow is opposite to the assumed arrow. A real cell with emf ε and internal resistance r has terminal voltage ε−Ir while delivering current."],
      ["4. Power, meters and bridge balance","Power in a resistor can be written VI, I²R or V²/R; choose the form with known quantities. An ideal ammeter has zero resistance and is inserted in series; an ideal voltmeter has infinite resistance and is connected in parallel. In a balanced Wheatstone bridge, no current flows through the bridge detector, simplifying the ratios."]
    ],
    [
      formula("R=ρL/A; V=IR","Resistance model and Ohm's law.","Use for uniform wires and ohmic elements at fixed conditions.","R in Ω; ρ in Ω·m.","Do not treat ρ as the same thing as R."),
      formula("Series: R_eq=ΣR; parallel: 1/R_eq=Σ1/R","Equivalent resistance.","Use after confirming circuit topology.","Ω.","Parallel equivalent is below the smallest positive branch resistance."),
      formula("P=VI=I²R=V²/R","Electrical power in a resistor.","Use with current/voltage across the same element.","W.","Do not mix source voltage with resistor voltage without accounting for internal resistance."),
      formula("Wheatstone balance: R₁/R₂=R₃/R₄","Zero-current bridge relation under the stated arm labelling.","Use only when the galvanometer/bridge branch is balanced.","Resistance ratios are dimensionless.","Check the exact arms before substituting.")
    ],
    [
      worked("Series resistors",["A 12 V ideal source drives 4 Ω and 8 Ω in series.","R_eq=12 Ω, so current is 12/12=1 A.","Voltage drops are 4 V and 8 V, summing to 12 V as required."]),
      worked("Two parallel resistors",["For 6 Ω and 3 Ω in parallel, 1/R_eq=1/6+1/3=1/2.","R_eq=2 Ω, less than the smallest branch resistance 3 Ω.","This inequality is a fast sanity check."])
    ],
    [
      method("Node test before combining","For a complicated resistor diagram.",["Mark every continuous ideal-wire node.","Series elements must share a node with no branching connection between them.","Parallel elements must connect to the same two nodes.","Then reduce one group and redraw."],"A visually aligned resistor is not necessarily in series."),
      method("Kirchhoff sign discipline","For multi-loop networks.",["Pick current directions and loop traversal directions.","At a resistor, moving with current is a drop under the usual convention.","Across a cell, record rise/drop according to polarity.","Solve simultaneous equations; interpret negative currents as reversed."],"Changing sign convention mid-equation causes inconsistent results."),
      method("Power-form selection","For a resistor question.",["If voltage across the resistor is known, use V²/R.","If current through it is known, use I²R.","If both are given consistently, use VI.","Check power against source power and network losses."],"The same element's V and I must be paired.")
    ],
    [
      problem("Find equivalent resistance of 2 Ω and 3 Ω in series.","5 Ω","Series resistances add."),
      problem("Find equivalent resistance of 2 Ω and 3 Ω in parallel.","1.2 Ω","R_eq=2×3/(2+3)=6/5 Ω."),
      problem("What does a negative solved branch current mean?","Actual current flows opposite the assumed direction.","Current directions may be assigned arbitrarily; a sign result updates the arrow interpretation.")
    ],
    ["Adding parallel resistances directly.","Combining components without checking nodes.","Confusing emf and terminal voltage.","Using the wrong resistor voltage in a power formula."],
    ["JEE/NEET: mixed networks, meter placement, internal resistance, Kirchhoff loops, bridge balance and power. Node-marking is faster than staring at the drawing."],
    ["Why does parallel connection lower resistance?","How are ideal meters connected?","What is the meaning of a negative current answer?"],
    ["Resistivity: material property in R=ρL/A.","EMF: energy supplied per unit charge by a source.","Terminal voltage: voltage available across source terminals under load."]);

  const physicsEMI = make("JEE Main","Physics","Magnetism, Electromagnetic Induction and AC — JEE Deep Notes",
    "Separate magnetic-force direction, flux change and induced-current direction. Lenz's law opposes the change in flux, not simply the existing field in every situation.",
    [
      ["1. Magnetic force","A moving charge experiences magnetic force q v×B. Its magnitude is |q|vB sinθ and the direction reverses for negative charge compared with the right-hand rule for positive charge. When force is perpendicular to velocity, it changes direction but performs no work, so speed stays constant in a uniform magnetic field."],
      ["2. Magnetic flux and Faraday's law","For a uniform field crossing a planar loop, flux Φ=BA cosθ, where θ is measured relative to the surface normal. Flux changes if B, area, orientation or the loop's position changes. Faraday's law gives induced emf as −N dΦ/dt. The minus sign encodes Lenz's law; it should not be dropped when direction is required."],
      ["3. Lenz's law and energy","The induced current creates a magnetic effect that opposes the change causing it. If a magnet approaches a coil, the coil's induced field opposes approach; when the magnet recedes, the coil opposes the decrease in flux. This is consistent with energy conservation because external work is needed to maintain motion against the magnetic response."],
      ["4. AC and transformers","For sinusoidal voltage/current, V_rms=V_peak/√2. In a pure resistor, current and voltage are in phase and average power is V_rms I_rms. Ideal transformers use changing magnetic flux; voltage ratio follows turns ratio and current ratio is inverse. Steady DC does not sustain transformer action after the switching transient."]
    ],
    [
      formula("|F|=|q|vB sinθ","Magnetic force magnitude on a moving charge.","Use for a charged particle in a magnetic field.","N when SI units are used.","If v∥B, force is zero; if q is negative, direction reverses."),
      formula("Φ=BA cosθ; ε=−N dΦ/dt","Flux and induced emf.","Use for changing field, area, orientation or motion.","Flux Wb; emf V.","Angle is between field and surface normal."),
      formula("V_rms=V_peak/√2","RMS value of a sinusoidal voltage.","Use for effective heating value in a resistor.","V.","Do not use the sinusoidal factor for a non-sinusoidal waveform without checking.")
    ],
    [
      worked("Average induced emf",["A 200-turn coil's flux per turn changes by 0.02 Wb in 0.1 s.","Magnitude ε=N|ΔΦ|/Δt=200×0.02/0.1.","The average induced emf magnitude is 40 V; direction needs Lenz's law separately."]),
      worked("Particle radius in a uniform field",["For v perpendicular to B, magnetic force provides centripetal force: |q|vB=mv²/r.","Cancel one v to obtain r=mv/(|q|B).","Greater momentum gives a larger radius; greater |q|B gives a smaller radius."])
    ],
    [
      method("Lenz direction in words","When asked for the induced-current direction.",["State whether flux through the loop is increasing or decreasing.","Determine the field the induced current must create to oppose that change.","Use the right-hand grip rule to infer current direction.","Check viewpoint and whether the charge/current convention is stated."],"The induced field opposes the change in flux, not necessarily the original field."),
      method("Flux-rate shortcut","For a uniform linear change.",["Write Φ=BA cosθ.","Identify the one factor changing with time.","Compute ΔΦ/Δt and multiply by N.","Determine the sign/direction separately."],"If multiple factors change, use the full derivative."),
      method("RMS versus peak","For ideal sinusoidal AC.",["Identify whether the value given is peak or RMS.","Convert using √2 only for a sinusoid.","Use RMS values for standard average resistor power.","Keep phase/power factor if circuit includes reactance."],"A pure resistor is a special phase case.")
    ],
    [
      problem("A charge moves parallel to B. What is magnetic force?","Zero","sin0=0 in |q|vB sinθ."),
      problem("What changes when flux linkage is constant?","No induced emf from flux change","Faraday's law is proportional to dΦ/dt; zero flux derivative gives zero induced emf."),
      problem("A sinusoidal source has peak voltage 100 V. Find RMS voltage.","100/√2≈70.7 V","V_rms=V_peak/√2.")
    ],
    ["Using the angle to the plane instead of its normal in BA cosθ.","Assuming Lenz's law always opposes the field rather than its change.","Using peak AC values for standard RMS power equations.","Assuming steady DC drives continuous transformer operation."],
    ["JEE/NEET: magnetic force, flux graphs, rod motion, induction direction, transformer ratios and AC RMS. Separate emf magnitude from direction to avoid sign confusion."],
    ["Why does magnetic force not change speed when perpendicular to velocity?","What does Faraday's minus sign represent?","Why is a transformer ineffective with steady DC?"],
    ["Magnetic flux: field through a surface.","RMS: root-mean-square effective AC value.","Mutual induction: emf induced by changing flux linked with another circuit."]);

  const physicsModern = make("JEE Main","Physics","Modern Physics, Atoms, Nuclei and Semiconductors — JEE Deep Notes",
    "Modern-physics questions often reward direct model recognition: photon energy, de Broglie momentum, quantised transitions, half-life and simple device behaviour.",
    [
      ["1. Photoelectric effect","A photon has energy hν. Some energy overcomes the work function φ, and the remainder can become maximum electron kinetic energy: K_max=hν−φ. Below threshold frequency, increasing intensity alone does not cause the ordinary single-photon photoelectric emission. Above threshold, intensity usually changes the emission rate while frequency determines maximum kinetic energy."],
      ["2. Matter waves and atomic levels","The de Broglie relation λ=h/p associates wavelength with momentum. A particle with greater momentum has shorter wavelength. For atomic transitions, photon energy magnitude equals the difference between levels, ΔE=hν=hc/λ. Emission releases energy; absorption raises the atom. Keep energy level signs and photon-energy magnitude distinct."],
      ["3. Nuclei and half-life","Mass defect compares the mass of separated nucleons with the bound nucleus using a consistent mass convention. Binding energy equals mass defect times c². Radioactive decay follows N=N₀(½)^(t/T½) for a large population under the standard model. Half-life is statistical; it does not predict which individual nucleus will decay."],
      ["4. Semiconductor basics","Doping changes carrier concentration. In a p-n junction, forward bias lowers the effective barrier and allows appreciable current; reverse bias usually leaves only small current until breakdown. Logic gates implement truth functions. Read the diode polarity and gate truth table carefully instead of relying only on a symbol's visual appearance."]
    ],
    [
      formula("E_photon=hν=hc/λ","Energy of a photon.","Use for photoelectric effect and spectra.","J; use consistent constants and SI units.","Shorter wavelength means higher photon energy."),
      formula("K_max=hν−φ","Photoelectric maximum kinetic energy.","Use only if ν is at/above threshold frequency.","J or eV consistently.","Intensity does not replace the threshold-frequency condition."),
      formula("λ_de Broglie=h/p","Matter-wave wavelength.","Use for particles with known momentum.","m in SI.","Higher momentum means smaller wavelength."),
      formula("N=N₀(1/2)^(t/T½)","Radioactive population remaining after elapsed half-lives.","Use for fractional decay/remaining amount.","N and N₀ are counts or amounts.","A half-life relation gives a population fraction, not individual decay timing.")
    ],
    [
      worked("Remaining after three half-lives",["Each half-life halves the remaining amount.","After three: (1/2)³=1/8.","That is 12.5% remaining and 87.5% decayed."]),
      worked("Photon energy scaling",["Since E=hc/λ, halving wavelength doubles photon energy.","If the initial photon energy is 2 eV, the new energy is 4 eV.","This ratio shortcut avoids converting h and c numerically if only a comparison is requested."])
    ],
    [
      method("Half-life counting","When time is an integer multiple of half-life.",["Calculate n=t/T½.","Remaining fraction is 2⁻ⁿ.","Multiply by N₀ or initial mass.","Convert to decayed fraction only at the end."],"For non-integer n the exponential form still works."),
      method("Photoelectric graph","When a graph relates K_max or stopping potential to frequency.",["Read threshold frequency from the zero-kinetic-energy intercept.","Slope of K_max versus frequency is h in energy units per frequency.","Work function is the threshold photon energy.","Keep eV/J and volts consistent."],"Intensity affects current, not the ideal K_max–frequency slope."),
      method("Semiconductor truth table","For logic-gate questions.",["Write the gate's Boolean operation.","Evaluate every input combination.","Apply NOT only to its own input/output as drawn.","Compare with the supplied truth table."],"Do not infer the gate solely from a fuzzy symbol or missing bubble.")
    ],
    [
      problem("After four half-lives, what fraction remains?","1/16","Remaining fraction=(1/2)⁴=1/16."),
      problem("If wavelength becomes one third, what happens to photon energy?","It becomes three times larger","E is inversely proportional to wavelength."),
      problem("Does a catalyst in a chemical reaction change equilibrium constant?","No, at fixed temperature","Catalysts change kinetics, not the equilibrium thermodynamic constant.")
    ],
    ["Claiming intensity overcomes below-threshold frequency in the standard photoelectric model.","Confusing mass defect with binding energy without c².","Using half-life as deterministic lifetime of each nucleus.","Forgetting the assumptions behind simple p-n diode behaviour."],
    ["JEE/NEET: photon graphs, de Broglie scaling, atomic transitions, binding-energy reasoning, decay fractions and semiconductor basics. Ratio methods are usually faster than constants."],
    ["What determines photon energy?","What remains after three half-lives?","How do forward and reverse bias differ?"],
    ["Work function: minimum energy needed to eject an electron.","Half-life: time for a population to reduce by half.","Doping: deliberate impurity addition to modify semiconductor behaviour."]);

  const chemMole = make("JEE Main","Chemistry","Mole Concept, Stoichiometry and Concentration — JEE Deep Notes",
    "Make every numerical chemistry question a unit conversion problem first. Balanced coefficients give mole ratios, not direct mass ratios.",
    [
      ["1. Mole and molar mass","Amount n=m/M converts a sample's mass into moles. The entity must be named: atoms, molecules, ions or formula units. Avogadro's constant links moles to number of entities. For ionic compounds, distinguish the number of formula units from the number of ions produced on dissociation."],
      ["2. Stoichiometry and limiting reagent","Balance the equation before calculations. Convert given reactants to moles and divide by each reactant's coefficient; the smallest normalised amount identifies the limiting reagent. Use it to calculate the theoretical product, then convert to mass/volume as requested. Percent yield compares actual product with theoretical product; percent purity adjusts the usable reactant amount."],
      ["3. Concentration units","Molarity is moles of solute per litre of solution; molality is moles per kilogram of solvent. Mole fraction uses total moles. Molarity changes if solution volume changes with temperature, while molality normally does not. In dilution with unchanged solute amount, M₁V₁=M₂V₂ if the concentration and volume units are consistent."],
      ["4. Gas calculations and approximations","For an ideal gas PV=nRT, use Kelvin temperature and units compatible with R. At the same temperature and pressure, gas volume ratios follow mole ratios under ideal-gas conditions. Record significant figures at the end, and avoid rounding moles early if a limiting reagent could be close."]
    ],
    [
      formula("n=m/M; N=nN_A","Mass-to-moles and moles-to-particles.","Use to move between mass, amount and entity count.","m in g with M in g/mol; N_A≈6.022×10²³ mol⁻¹.","Identify what entity the problem counts."),
      formula("Molarity=M=n/V(L); molality=m=n/kg solvent","Concentration definitions.","Use for solutions; distinguish solution volume from solvent mass.","M mol/L; molality mol/kg.","Do not use solution mass for molality."),
      formula("M₁V₁=M₂V₂","Dilution of unchanged solute amount.","Use when adding solvent only and volumes are compatible.","M units same on both sides; V same units.","Not generally valid when reaction, evaporation or solute addition occurs.")
    ],
    [
      worked("Limiting reagent",["For N₂+3H₂→2NH₃, suppose 1 mol N₂ and 2 mol H₂ are available.","Divide by coefficients: N₂ gives 1/1=1; H₂ gives 2/3.","H₂ limits. Product amount is (2/3)×2=4/3 mol NH₃, assuming the stated ideal reaction."]),
      worked("Quick mass-to-moles",["5.6 g N₂ has molar mass 28 g/mol.","n=5.6/28=0.2 mol.","The division is 56/280 in matching scale, so 0.2 is easy to check mentally."])
    ],
    [
      method("Limiting reagent by coefficient ratio","When two or more reactant amounts are supplied.",["Balance the reaction.","Convert each reactant to moles.","Divide each amount by its stoichiometric coefficient.","The smallest ratio limits; use only it for maximum product."],"Do not compare raw mole numbers if coefficients differ."),
      method("Cancel units as you calculate","For mass, moles and particle count.",["Write each conversion as a fraction with units.","Cancel matching units before numerical multiplication.","Keep extra digits until the final result.","Check the final unit matches the question."],"This reveals many factor-of-1000 mistakes."),
      method("Dilution shortcut","When adding solvent to a solution.",["Confirm the amount of solute remains fixed.","Use M₁V₁=M₂V₂.","Use volume units consistently on both sides.","Check that final concentration decreases after dilution."],"The relation is not a universal formula for chemical reaction mixtures.")
    ],
    [
      problem("How many moles are in 18 g water?","1 mol","Molar mass H₂O=18 g/mol, so n=18/18=1."),
      problem("If a 2 M solution is diluted from 100 mL to 500 mL, find final molarity.","0.4 M","M₂=M₁V₁/V₂=2×100/500=0.4 M."),
      problem("Why must the equation be balanced before finding limiting reagent?","Coefficients define the required mole ratios.","The smallest coefficient-normalised mole amount identifies which reactant is exhausted first.")
    ],
    ["Using unbalanced equations for mole ratios.","Confusing molality solvent mass with solution mass.","Using Celsius in PV=nRT.","Rounding early and changing which reactant appears limiting."],
    ["JEE/NEET Chemistry: limiting reagent, yield, purity, concentration conversion and ideal-gas stoichiometry. Convert to moles first almost every time."],
    ["What determines the limiting reagent?","What does molality divide by?","When does M₁V₁=M₂V₂ apply?"],
    ["Mole: amount containing Avogadro's number of specified entities.","Limiting reagent: reactant that caps theoretical product.","Mole fraction: moles of one component divided by total mixture moles."]);

  const chemAtomic = make("JEE Main","Chemistry","Atomic Structure, Quantum Numbers and Electronic Configuration — JEE Deep Notes",
    "Connect evidence from spectra to quantised energy and use quantum-number constraints to eliminate impossible configurations quickly.",
    [
      ["1. Photon and spectral transitions","An atom absorbs energy to move to a higher allowed energy state and emits a photon when moving downward. The photon energy magnitude is ΔE=hν=hc/λ. Shorter wavelength means larger photon energy. Energy-level diagrams show allowed transitions; don't treat the atom as radiating every possible energy continuously."],
      ["2. Quantum numbers","Principal quantum number n is a positive integer; azimuthal quantum number l ranges from 0 to n−1; magnetic quantum number m_l ranges from −l through +l; spin m_s is ±1/2. A subshell contains 2l+1 orbitals and can hold 2(2l+1) electrons. These count rules quickly test whether a proposed electron state is allowed."],
      ["3. Electron filling","Aufbau ordering gives a useful baseline; Pauli exclusion forbids two electrons in one atom having all four identical quantum numbers. Hund's rule places electrons singly in degenerate orbitals with parallel spins before pairing in the elementary filling model. Some transition configurations are exceptions to a simple filling prediction, so follow the actual ion/element stated."],
      ["4. Matter waves and uncertainty","de Broglie wavelength is λ=h/p. For an electron accelerated through potential difference V in the non-relativistic model, kinetic energy gain is eV and p≈√(2me eV), giving λ∝1/√V. Heisenberg uncertainty relates position and momentum uncertainties; it is not merely a statement about poor instruments."]
    ],
    [
      formula("ΔE=hν=hc/λ","Photon energy for a transition.","Use for spectra and wavelength-frequency conversions.","J or eV; λ in m for SI constants.","Use energy magnitude; emission/absorption direction is separate."),
      formula("l=0,…,n−1; m_l=−l,…,+l; m_s=±½","Allowed quantum-number values.","Use to test allowed states and count orbitals/electrons.","Quantum numbers dimensionless.","l cannot be n or higher."),
      formula("Orbitals per subshell=2l+1; electrons max=2(2l+1)","Subshell orbital/electron capacity.","Use for s,p,d,f capacity questions.","Counts are integers.","Pauli exclusion limits each orbital to two opposite-spin electrons."),
      formula("λ=h/p; for non-relativistic electron λ∝V⁻¹/²","Matter-wave wavelength and voltage scaling.","Use for accelerated-particle comparisons.","λ in metres.","Relativistic speeds require a different momentum relation.")
    ],
    [
      worked("Quantum number validity",["Can n=3,l=2,m_l=−2,m_s=+1/2 occur?","Yes: l lies in 0…2, m_l lies in −2…2 and spin is allowed.","For n=2,l=2 the state would be invalid because l must be below n."]),
      worked("Wavelength scaling",["An electron is accelerated through four times the potential difference in the non-relativistic model.","Since λ∝1/√V, wavelength becomes 1/√4=1/2 of the original.","This ratio result avoids calculating h, e and m_e explicitly."])
    ],
    [
      method("Quantum-number elimination","For a multiple-choice validity question.",["Check n is a positive integer.","Check l=0…n−1.","Check m_l is an integer in −l…+l.","Check m_s is ±1/2."],"One invalid quantum number makes the state invalid."),
      method("Electron/orbital counting","For subshell capacity questions.",["Use 2l+1 orbitals.","Multiply by two electrons per orbital.","For an entire shell, use n² orbitals and 2n² electrons under the standard model.","Respect configuration and ion charge in actual electron counts."],"Electron configuration can have known exceptions for particular elements."),
      method("Photon ratio method","For transitions with two wavelengths.",["Use E∝1/λ.","Form the wavelength ratio.","Invert it to get the photon-energy ratio.","State whether the transition is absorption or emission separately."],"Do not compare frequencies as if they scaled directly with wavelength.")
    ],
    [
      problem("Maximum electrons in a d subshell?","10","For d, l=2, orbitals=2(2)+1=5, capacity=10."),
      problem("Can l=1 occur when n=1?","No","For n=1, only l=0 is allowed."),
      problem("If photon wavelength halves, what happens to energy?","It doubles","Photon energy is inversely proportional to wavelength.")
    ],
    ["Allowing l=n.","Forgetting that each orbital holds at most two opposite-spin electrons.","Confusing a photon energy with electron kinetic energy in all contexts.","Applying non-relativistic scaling at relativistic speeds."],
    ["JEE/NEET Chemistry: quantum numbers, orbital capacities, electron configuration, spectral lines and matter-wave scaling. Validity constraints are quick marks."],
    ["How many orbitals are in a p subshell?","Which values may spin quantum number take?","How does photon energy scale with wavelength?"],
    ["Orbital: quantum-mechanical state/probability description.","Quantum number: value labelling an allowed electron state property.","de Broglie wavelength: matter-wave wavelength associated with momentum."]);

  const chemBond = make("JEE Main","Chemistry","Chemical Bonding, Molecular Geometry and Molecular Orbital Theory — JEE Deep Notes",
    "Predict shape, polarity, bond order and magnetism by combining Lewis structures, VSEPR, hybridisation models and molecular orbital filling.",
    [
      ["1. Lewis structures and formal charge","Count valence electrons, add/subtract for ion charge, join the skeleton, fill terminal octets, then place remaining electrons at the centre. If needed, introduce multiple bonds to reduce formal charges and satisfy valence patterns. Formal charge is bookkeeping, not an experimentally measured local charge; compare plausible resonance structures rather than claiming the real molecule oscillates between drawings."],
      ["2. VSEPR and shape","Count electron domains around the central atom; a multiple bond usually counts as one domain in the simple VSEPR model. Four domains have tetrahedral electron-domain geometry. Lone pairs repel more strongly than bonding pairs and alter molecular shape/angles. Distinguish electron-domain geometry from the shape described by atomic positions."],
      ["3. Polarity and hybridisation","A molecule's net dipole is the vector sum of bond dipoles and molecular geometry. Symmetric arrangements can cancel polar bonds, as in ideal linear CO₂. Hybridisation is a bonding model linking orbitals to a geometry; it should be consistent with the central atom's bonding environment. Electron domains, lone pairs and formal charge should be checked together."],
      ["4. Molecular orbitals and bond order","Electrons fill molecular orbitals according to energy, Pauli and Hund rules. Bond order is half the difference between bonding and antibonding electron counts. Greater bond order often means shorter/stronger bonds in comparable cases. Unpaired molecular-orbital electrons explain paramagnetism of O₂; Lewis structures alone do not capture that correctly."]
    ],
    [
      formula("Formal charge=valence e⁻−nonbonding e⁻−½(bonding e⁻)","Bookkeeping charge on an atom in a Lewis structure.","Use to compare valid Lewis/resonance structures.","Electron counts are dimensionless.","The formal charge sum must equal overall species charge."),
      formula("Bond order=(bonding e⁻−antibonding e⁻)/2","Net bonding in basic MO theory.","Use for stability, bond length/strength comparisons and magnetic filling.","Dimensionless.","Count electrons in the correct orbitals before calculating."),
      formula("Net molecular dipole = vector sum of bond dipoles","Overall molecular polarity.","Use after establishing molecular geometry.","Dipole moment units may be C·m or Debye.","Polar bonds do not guarantee a polar molecule.")
    ],
    [
      worked("CO₂ polarity",["Each C=O bond is polar.","The molecule is linear and the bond dipoles point in opposite directions with equal magnitude.","They cancel, so ideal CO₂ has zero net dipole moment despite polar bonds."]),
      worked("Formal charge check",["In a correctly drawn Lewis structure, calculate formal charge per atom with the same formula.","Add every atom's formal charge.","The total must equal the molecule/ion charge; if not, electron counting or bond placement is inconsistent."])
    ],
    [
      method("VSEPR by electron domains","When the question asks a molecular shape.",["Draw a Lewis structure first.","Count bonding domains and lone pairs around the central atom.","Name the electron-domain arrangement.","Remove lone-pair positions to name molecular shape and explain angle changes."],"A multiple bond is one region in elementary VSEPR counting."),
      method("Polarity by symmetry","When polar bonds may cancel.",["Determine the 3D shape.","Draw bond-dipole directions.","Check whether symmetry pairs equal and opposite contributions.","If they cancel, net dipole is zero; otherwise sum components."],"Do not decide polarity by looking only at bond polarity."),
      method("MO bond order","For magnetism or bond-length options.",["Write the supplied orbital filling order.","Count bonding and antibonding electrons separately.","Calculate half their difference.","Check unpaired electrons for paramagnetic/diamagnetic classification."],"Use the orbital-order convention appropriate to the stated molecule/level.")
    ],
    [
      problem("Why is H₂O bent?","Two lone pairs on oxygen affect the molecular shape.","Four electron domains give tetrahedral electron-domain arrangement; only two are bonding positions, so molecular shape is bent."),
      problem("What is the MO bond order if bonding electrons=8 and antibonding=4?","2","Bond order=(8−4)/2=2."),
      problem("Can a molecule with polar bonds have zero dipole?","Yes","Symmetric bond dipole vectors can cancel, as in ideal CO₂.")
    ],
    ["Counting a double bond as two VSEPR domains in the basic model.","Assuming polar bonds make the whole molecule polar.","Ignoring lone pairs when naming shape.","Confusing formal charge with oxidation state."],
    ["JEE/NEET Chemistry: shape, bond angle, polarity, formal charge, hybridisation, MO bond order and magnetism. Draw the structure before recalling a memorised geometry."],
    ["Why is O₂ paramagnetic in MO theory?","What must the sum of formal charges equal?","How can bond dipoles cancel?"],
    ["VSEPR: model of repulsion between electron domains.","Hybridisation: mixing orbital model used to describe bonding geometry.","Bond order: net bonding measure from MO occupancy."]);

  const chemThermoEquil = make("JEE Main","Chemistry","Chemical Thermodynamics, Equilibrium and Ionic Equilibrium — JEE Deep Notes",
    "Keep reaction direction, equilibrium composition and reaction rate separate. Thermodynamic favourability does not guarantee a rapid reaction.",
    [
      ["1. Enthalpy, entropy and Gibbs energy","At constant pressure under the relevant conditions, reaction enthalpy is related to heat exchange. Gibbs energy ΔG=ΔH−TΔS at constant temperature; ΔG<0 favours forward progress under the stated conditions, ΔG=0 indicates equilibrium and ΔG>0 favours reverse progress. Temperature must be in kelvin, and entropy units must be consistent."],
      ["2. Equilibrium quotient and shifts","The reaction quotient Q has the same mathematical form as K but uses current composition. If Q<K, net forward progress tends to raise Q; if Q>K, reverse progress tends to lower Q. Concentration/pressure changes shift composition but do not alter K at fixed temperature. A catalyst changes approach rate, not the equilibrium constant."],
      ["3. Acid-base and ionic equilibrium","For weak acids/bases, equilibrium constants quantify partial ionisation. pH=−log₁₀[H⁺] in the standard dilute aqueous approximation. For a weak monoprotic acid with initial concentration C and small ionisation x, Ka≈x²/C, so [H⁺]≈√(KaC); check the small-ionisation assumption before using this shortcut."],
      ["4. Buffer, solubility and common-ion effects","Buffers resist pH change because a weak acid/conjugate base pair consumes added H⁺ or OH⁻. The Henderson–Hasselbalch form pH=pKa+log([A⁻]/[HA]) is an approximation using equilibrium concentrations/activities. Ksp describes an ionic solid's dissolution equilibrium; convert molar solubility to ion concentrations using stoichiometric coefficients before taking products."]
    ],
    [
      formula("ΔG=ΔH−TΔS","Gibbs energy at constant temperature.","Use for direction/favourability under stated conditions.","ΔH,ΔG in energy/mol; T in K; ΔS energy/(mol·K).","Keep entropy units compatible with enthalpy and kelvin."),
      formula("Q<K: forward; Q>K: reverse","Direction of net change toward equilibrium.","Use after forming Q with current concentrations/pressures.","K and Q dimensionless under activity-based thermodynamics.","A catalyst does not shift K at fixed temperature."),
      formula("pH=−log₁₀[H⁺]","Aqueous acidity measure in the standard dilute convention.","Use when hydrogen-ion concentration is known.","[H⁺] mol/L in the approximation.","For non-ideal/concentrated solutions activities matter."),
      formula("Weak acid: [H⁺]≈√(KaC); pH≈½(pKa−log C)","Small-ionisation estimate for a weak monoprotic acid.","Use if ionisation is small compared with initial concentration.","C in mol/L; pH dimensionless.","Check the approximation; do not apply to strong acids or high ionisation.")
    ],
    [
      worked("Equilibrium direction",["Given Q=0.02 and K=0.5 at the same temperature.","Since Q<K, the forward reaction is favoured until Q rises to K.","Do not change K merely because a reactant was added."]),
      worked("Weak-acid pH estimate",["For a weak acid with Ka=10⁻⁵ and C=0.1 M, [H⁺]≈√(10⁻⁵×10⁻¹)=√10⁻⁶=10⁻³ M.","Thus pH≈3 under the small-ionisation approximation.","The ionisation fraction is about 10⁻³/10⁻¹=1%, supporting the approximation as a first estimate."])
    ],
    [
      method("Compare Q with K","When a reaction mixture is not at equilibrium.",["Write the balanced equilibrium expression.","Insert current, not equilibrium, quantities to form Q.","Compare Q and K.","State the direction of net reaction; K stays fixed unless temperature changes."],"Use activities or the course's stated concentration approximation consistently."),
      method("Weak-acid square-root shortcut","For a weak monoprotic acid with small dissociation.",["Write Ka≈x²/C.","Take x≈√(KaC).","Use pH≈−log x or the equivalent pKa relation.","Check x/C is small."],"If the calculated ionisation is not small, solve the exact quadratic."),
      method("Henderson–Hasselbalch buffer estimate","For buffer mixture questions.",["Identify conjugate acid/base pair.","Find pKa and the ratio [base]/[acid].","Use pH=pKa+log ratio.","Check ratio direction and units."],"The formula is an approximation and is not a universal pH formula.")
    ],
    [
      problem("If ΔH=−40 kJ/mol, TΔS=−10 kJ/mol, find ΔG.","−30 kJ/mol","ΔG=ΔH−TΔS=−40−(−10)=−30."),
      problem("If Q>K, which direction is favoured?","Reverse","The mixture has product activity too high relative to equilibrium."),
      problem("For Ka=10⁻⁴ and C=0.01 M, estimate [H⁺] using the weak-acid shortcut.","10⁻³ M","√(10⁻⁴×10⁻²)=√10⁻⁶=10⁻³ M; ionisation is 10% of C, so the approximation is only a rough estimate and should be checked.")
    ],
    ["Changing equilibrium constant after concentration change at fixed temperature.","Treating ΔG<0 as a statement that a reaction is fast.","Using the weak-acid approximation without checking ionisation.","Using an inconsistent sign convention for ΔS/ΔH."],
    ["JEE/NEET Chemistry: ΔG, Hess law, Q vs K, pH/pKa, weak-acid estimates, buffers and solubility equilibria. Powers of ten often make the calculation much faster."],
    ["What changes K at fixed species model?","Why does Q<K favour forward progress?","When is the weak-acid square-root estimate acceptable?"],
    ["Gibbs energy: state function combining enthalpy and entropy contributions.","Reaction quotient: equilibrium expression evaluated at current composition.","Buffer: solution resisting pH change."]);

  const chemSolutionsKinetics = make("JEE Main","Chemistry","Solutions, Electrochemistry and Chemical Kinetics — JEE Deep Notes",
    "Three calculation families share a useful habit: identify the governing equation, convert units first, and check whether the problem says ideal/dilute or supplies a correction factor.",
    [
      ["1. Concentration and colligative properties","Molarity uses solution volume, molality uses solvent mass and mole fraction uses total moles. Dilute colligative changes depend primarily on number of solute particles. Boiling elevation and freezing depression are proportional to molality in the elementary ideal model; electrolyte dissociation or association can change effective particle count through a van't Hoff factor."],
      ["2. Electrochemical cells","Oxidation occurs at the anode and reduction at the cathode. Use standard reduction potentials consistently: E°cell=E°cathode−E°anode. Electron flow in a galvanic cell is from anode to cathode through the external wire. The Nernst equation adjusts potential for non-standard activities; pure solids and liquids are normally omitted from Q."],
      ["3. Conductance and Faraday relations","Conductance is inverse resistance; conductivity accounts for cell geometry, and molar conductivity divides conductivity by molar concentration with unit conversion. During electrolysis, deposited amount depends on charge passed and the number of electrons per ion through Faraday's law. Check time in seconds and current in amperes before computing charge Q=It."],
      ["4. Kinetics and half-life","The rate law exponents are experimentally determined; they are not automatically the balanced-equation coefficients. For a first-order reaction, ln([A]₀/[A]t)=kt and t½=0.693/k. The units of k depend on order. Arrhenius behaviour connects k and temperature through activation energy, with temperature expressed in kelvin."]
    ],
    [
      formula("ΔT_b=iK_bm; ΔT_f=iK_fm","Boiling-point elevation and freezing-point depression.","Use for dilute ideal solutions with effective particle factor i.","K in K·kg/mol; molality in mol/kg.","Use solvent constants; include i only when the problem model requires it."),
      formula("E°cell=E°cathode−E°anode","Standard galvanic cell potential from tabulated reduction potentials.","Use when half-cell reduction potentials are provided.","V.","Do not subtract oxidation potentials with the same formula without changing conventions."),
      formula("Q=It; m=Q M/(nF)","Charge passed and electrolysis mass relation.","Use for ideal Faraday electrolysis questions.","Q coulombs; I A; t s; F≈96485 C/mol.","n is electrons per deposited ion; avoid confusing it with moles."),
      formula("t½=0.693/k (first order)","First-order half-life.","Use when first-order kinetics is stated.","k in inverse-time units.","This independence from initial concentration is specific to first order.")
    ],
    [
      worked("Electrolysis charge",["A 2 A current flows for 10 minutes; convert time to 600 s.","Charge Q=It=2×600=1200 C.","Only then use the electrochemical equivalent or Faraday relation with the supplied molar mass/electron number."]),
      worked("First-order half-life",["For k=0.231 min⁻¹, t½=0.693/0.231.","The result is 3.0 minutes.","The inverse-minute unit cancels to minutes."])
    ],
    [
      method("Concentration unit check","Before using colligative or osmotic formulas.",["Convert solvent mass to kilograms for molality.","Convert solution volume to litres for molarity.","Include a particle factor only when supported by the model.","Check that the temperature/pressure units match constants."],"A unit conversion error can shift the result by 1000."),
      method("Cell-potential sign","For a galvanic cell with reduction-potential table.",["Identify the reduction cathode and oxidation anode.","Keep both tabulated values as reduction potentials.","Subtract E°anode from E°cathode.","Check the sign against the stated spontaneous direction."],"If a half reaction is reversed, track the potential convention correctly."),
      method("Determine reaction order from experiments","When rates at different concentrations are supplied.",["Compare trials where only one reactant concentration changes.","Form rate and concentration ratios.","Solve the exponent relating those ratios.","Repeat for other reactants and check the units of k."],"Do not read order directly from a complex overall equation.")
    ],
    [
      problem("If k=0.1 s⁻¹ for a first-order process, estimate half-life.","6.93 s","t½=0.693/0.1=6.93 s."),
      problem("At the anode, what happens?","Oxidation","Anode is defined by the oxidation process in both galvanic and electrolytic cells."),
      problem("Does a catalyst change K at fixed temperature?","No","It accelerates forward and reverse routes, changing how quickly equilibrium is reached.")
    ],
    ["Using molality with total solution mass.","Reversing E°cell subtraction.","Using minutes rather than seconds in Faraday charge without conversion.","Inferring reaction order from stoichiometric coefficients."],
    ["JEE/NEET Chemistry: concentration calculations, colligative properties, cell potentials, electrolysis, rate orders and half-life. Keep the units visible until the final line."],
    ["Which electrode is the cathode?","What determines k's units?","Why must Faraday charge use seconds when current is in amperes?"],
    ["Conductivity: ability of a material/solution to conduct current.","Faraday constant: charge per mole of electrons.","Reaction order: sum of experimentally determined rate-law exponents."]);

  const chemGOC = make("JEE Main","Chemistry","General Organic Chemistry: Effects, Acidity, Basicity and Intermediates",
    "Use electron movement and intermediate stability to reason about organic reactions. The reliable shortcut is to rank the conjugate species first, then select the reaction pathway.",
    [
      ["1. Inductive, resonance and hyperconjugation effects","Inductive effects transmit through sigma bonds and weaken with distance; electron-withdrawing groups can stabilise negative charge nearby. Resonance delocalises electrons across overlapping p orbitals and can strongly stabilise conjugate systems. Hyperconjugation involves donation from adjacent sigma bonds into a suitable orbital. Effects can compete, so state which charge/intermediate is being stabilised before ranking."],
      ["2. Acidity and basicity","A stronger acid generally has a more stable conjugate base under comparable conditions. Resonance, electronegativity, atom size, hybridisation and inductive effects influence stability. Basicity depends on lone-pair availability and stability of the protonated form. A lone pair delocalised into an aromatic ring is often less available for protonation than a comparable localised lone pair."],
      ["3. Reaction intermediates","Carbocations are electron deficient and are often stabilised by resonance, inductive donation and hyperconjugation; radicals and carbanions follow different stabilisation trends. Do not blindly apply one universal order to all intermediate types. Check the actual structure, resonance contributors and substituent effects. Rearrangements may occur when a more stable carbocation is accessible."],
      ["4. Mechanistic electron flow","Nucleophiles donate an electron pair, electrophiles accept an electron pair, and leaving groups depart with an electron pair in common polar mechanisms. Curved arrows begin at an electron pair or bond and point to where electrons move. Check formal charges and atom count after each step. Reagent, solvent, substrate and temperature can change the pathway."]
    ],
    [
      formula("Acidity increases as conjugate-base stability increases","Qualitative acidity rule.","Use to compare compounds in comparable solvent and conditions.","pKa is dimensionless logarithmic convention.","Do not rank solely by atom electronegativity if resonance/size changes dominate."),
      formula("Carbocation stability depends on resonance, hyperconjugation and inductive effects","Qualitative intermediate-stability framework.","Use when the reaction pathway is carbocation-like.","Not a numerical formula.","Do not apply carbocation trends to carbanions unchanged."),
      formula("pKa₁<pKa₂ ⇒ acid 1 is stronger in the same comparison","pKa comparison.","Use when pKa values are supplied.","pKa dimensionless.","A lower pKa indicates stronger acidity.")
    ],
    [
      worked("Compare carboxylic acid and alcohol acidity",["A carboxylate conjugate base spreads negative charge over two oxygen atoms by resonance.","An alkoxide localises more of the charge on one oxygen.","Thus a typical carboxylic acid is much more acidic than a typical alcohol under comparable conditions."]),
      worked("Basicity of amines",["Identify whether the nitrogen lone pair is localised or delocalised.","Resonance delocalisation reduces availability for bonding to H⁺, all else equal.","Then consider inductive effects, solvent and steric factors before declaring the final order."])
    ],
    [
      method("Conjugate-base first","For acidity comparisons.",["Remove the same type of proton from each candidate.","Draw/describe the conjugate bases.","Compare resonance, electronegativity/size, hybridisation and inductive stabilisation.","Translate greater stabilisation into stronger acid."],"Compare within similar solvent conditions."),
      method("Intermediate ranking","For reaction-major-product options.",["Identify the intermediate expected from each path.","Check resonance stabilisation first where available.","Then compare hyperconjugation/inductive donation and steric context.","Look for rearrangement to a more stable intermediate."],"The order depends on carbocation, carbanion or radical type."),
      method("Curved-arrow audit","When drawing a mechanism.",["Start arrows at electrons, lone pairs or bonds.","Point toward an electron-poor atom or new bond location.","Recalculate formal charges after the step.","Check valence, atom count and leaving-group identity."],"An arrow never starts at a positive charge alone.")
    ],
    [
      problem("Why are carboxylic acids generally more acidic than alcohols?","The carboxylate conjugate base is resonance-stabilised.","Charge delocalisation over two oxygen atoms reduces conjugate-base energy."),
      problem("What does a nucleophile do?","Donates an electron pair","It attacks an electron-poor/electrophilic site in the usual polar mechanism."),
      problem("Does every organic reaction have one universal intermediate stability order?","No","Carbocations, carbanions and radicals respond differently to substituents and resonance.")
    ],
    ["Ranking acidity without comparing conjugate bases.","Applying carbocation stability order to carbanions.","Drawing arrows from atoms instead of electron sources.","Ignoring reagent/solvent conditions."],
    ["JEE Chemistry: acidity/basicity, stability orders, resonance, GOC effects and mechanism prediction. A clean conjugate-base sketch is often faster than memorised tables."],
    ["What stabilises a conjugate base?","How is a nucleophile defined?","Why can an aromatic amine be less basic than an alkyl amine?"],
    ["Inductive effect: electron-density influence through sigma bonds.","Resonance: delocalisation across overlapping orbitals.","Electrophile: electron-pair acceptor."]);

  const chemCoordination = make("JEE Main","Chemistry","Coordination Compounds and Transition-Metal Chemistry — JEE Deep Notes",
    "Separate oxidation state, coordination number, ligand count, geometry, isomerism and magnetic properties. These are related but not interchangeable questions.",
    [
      ["1. Oxidation state and coordination number","For a complex, sum the oxidation state of the metal and the formal ligand charges to equal the species charge. Coordination number counts donor atoms attached directly to the metal, so a bidentate ligand contributes two even if it is one molecule. Counterions outside square brackets do not count toward the coordination number."],
      ["2. Nomenclature and isomerism","Name ligand entities in the prescribed alphabetical order and use the required multiplicative prefixes; then identify the central metal and its oxidation state. Structural isomerism changes connectivity or ligand identity at positions such as linkage/coordination; stereoisomerism preserves connectivity but changes spatial arrangement. Draw the arrangement when cis/trans or optical isomerism is asked."],
      ["3. Geometry, d-electrons and magnetic properties","Coordination number and ligand environment help predict common geometries such as octahedral, tetrahedral or square planar. d-electron count should be determined from the ion configuration, not copied from the neutral atom. Count unpaired electrons after accounting for the applicable ligand-field model; stronger/weaker field and geometry can affect spin state."],
      ["4. d/f-block trends","Transition elements often show variable oxidation states, catalytic behaviour and coloured compounds. Unpaired electrons can cause paramagnetism; d–d transitions can contribute to colour, though charge-transfer effects also occur. Lanthanoid contraction is the gradual size decrease across the series due to imperfect shielding by f electrons, affecting size trends and separation chemistry."]
    ],
    [
      formula("Metal oxidation state + Σ ligand charges = complex charge","Charge balance for a coordination entity.","Use before naming or counting d-electrons.","Charges dimensionless.","Do not include external counterions as ligands inside the brackets."),
      formula("Coordination number = number of directly bonded donor atoms","Coordination number.","Use to infer geometry and classify complexes.","Integer count.","A multidentate ligand contributes multiple donor atoms."),
      formula("μ_spin≈√[n(n+2)] BM","Elementary spin-only magnetic moment estimate for n unpaired electrons.","Use when the simple spin-only model is appropriate.","BM (Bohr magnetons).","Count unpaired electrons for the actual complex/ion first.")
    ],
    [
      worked("Oxidation state",["In [Cu(NH₃)₄]²⁺, ammonia is neutral.","Let Cu oxidation state be x: x+4(0)=+2.","Thus copper is +2; the four coordinated nitrogens give coordination number 4."]),
      worked("Unpaired electrons workflow",["Write the metal ion electron configuration after removing electrons appropriately.","Determine geometry/ligand-field spin arrangement if the model requires it.","Count singly occupied orbitals.","Only then estimate magnetic moment or classify paramagnetism/diamagnetism."])
    ],
    [
      method("Charge balance first","For complex formula/naming questions.",["Write overall complex charge.","Add known ligand charges.","Solve for metal oxidation state.","Count donor atoms separately to find coordination number."],"Oxidation state and coordination number are not the same."),
      method("Geometry and isomer check","When formulas may have isomers.",["Establish coordination number and ligand types.","Draw likely geometry.","Place ligands and compare connectivity/spatial arrangement.","Use a drawing to justify cis/trans, fac/mer or optical relationships."],"Not all coordination numbers have the same geometry."),
      method("Magnetic moment workflow","When asked for spin or magnetism.",["Find metal oxidation state.","Determine d-electron count.","Apply geometry and ligand strength to spin filling.","Count unpaired electrons and use the requested model."],"Do not use neutral atom configuration for a cation without adjustment.")
    ],
    [
      problem("What is the coordination number of [Cu(NH₃)₄]²⁺?","4","Four monodentate ammonia ligands each coordinate through one donor atom."),
      problem("Which process occurs at the anode?","Oxidation","This definition applies to galvanic and electrolytic cells."),
      problem("What causes lanthanoid contraction?","Increasing nuclear charge with imperfect shielding by 4f electrons","The effective attraction on outer electrons gradually increases across the series.")
    ],
    ["Counting ligand molecules instead of donor atoms.","Ignoring the overall charge when finding oxidation state.","Confusing anode/cathode definitions across cell types.","Counting unpaired electrons before determining the metal ion and geometry."],
    ["JEE/NEET Chemistry: complex naming, oxidation state, coordination number, geometry, isomerism, spin and d/f-block trends. Use the charge equation first."],
    ["What does a bidentate ligand contribute to coordination number?","How is oxidation state calculated?","What is lanthanoid contraction?"],
    ["Ligand: species donating a pair of electrons to a metal centre.","Chelation: multi-point binding by a polydentate ligand.","Lanthanoid contraction: gradual decrease in size across the lanthanoids."]);

  const biologyCell = make("NEET UG","Biology","Cell: The Unit of Life, Biomolecules and Enzymes — NEET Deep Notes",
    "Learn cell structures through structure–function relationships, then use biomolecule chemistry and enzyme mechanisms to explain what cells can do.",
    [
      ["1. Membranes and transport","The fluid-mosaic model describes a lipid bilayer with embedded proteins, plus other components depending on the membrane. Simple diffusion moves down a concentration gradient without a carrier; facilitated diffusion uses a protein but remains passive. Active transport moves against a gradient using energy directly or indirectly. Osmosis is net water movement across a selectively permeable membrane according to water potential."],
      ["2. Organelles and compartmentalisation","Ribosomes translate mRNA into polypeptides; rough ER is involved in processing many proteins entering secretory/membrane pathways, and Golgi modifies and packages products. Mitochondria support aerobic ATP generation in eukaryotes; chloroplasts perform oxygenic photosynthesis in plants/algae. Lysosomes digest/recycle material. Cell types vary, so organelle claims should match the organism and tissue."],
      ["3. Biomolecules and biological bonds","Carbohydrates, lipids, proteins and nucleic acids have different monomers, bond types and roles. Peptide bonds link amino acids; phosphodiester bonds link nucleotides; glycosidic bonds link carbohydrate units. Protein folding depends on sequence and interactions; denaturation can disrupt functional shape without necessarily breaking the primary peptide chain."],
      ["4. Enzyme action and regulation","Enzymes lower activation energy by stabilising a reaction pathway; they do not change the reaction's equilibrium constant. Temperature and pH alter activity by affecting structure and interactions. Substrate concentration increases rate until a limiting/saturation pattern occurs in many enzyme systems. Competitive inhibitors compete at a binding site; other inhibitors can affect activity through different mechanisms."]
    ],
    [],
    [
      worked("Passive or active transport?",["A substance moves down its electrochemical gradient through a membrane protein.","The protein-mediated route can be facilitated diffusion: no direct energy is required to move down the gradient.","If movement is against the gradient, active transport or coupled transport is needed."]),
      worked("Identify a biomolecule bond",["Two amino acids join by a peptide bond with condensation chemistry.","Nucleotides in a nucleic-acid chain are linked through phosphodiester bonds.","Matching the bond name to the monomer pair is a common direct-recall task."])
    ],
    [
      method("Transport classification","For membrane-process MCQs.",["Ask whether the substance moves down or against its gradient.","Check whether a membrane protein is used.","Check whether energy is consumed directly or coupled.","Select simple diffusion, facilitated diffusion or active transport."],"Protein-mediated does not automatically mean active transport."),
      method("Organelle structure-to-function","For matching questions.",["Identify the process named in the stem.","Find the compartment where that process occurs.","Use a structural clue such as membrane folds, ribosomes or internal pigments.","Check that the organism actually has that organelle."],"Do not generalise eukaryotic organelles to prokaryotes."),
      method("Enzyme graph reading","For rate versus substrate concentration.",["Identify the axes and controlled variables.","Recognise a rise then plateau as saturation-like behaviour.","Distinguish temperature/pH optima from substrate saturation.","Explain the curve using active sites and enzyme structure."],"A graph may use a non-standard scale; read labels first.")
    ],
    [
      problem("Does facilitated diffusion require ATP just because it uses a protein?","No","It moves down the gradient; protein mediation is not the same as active transport."),
      problem("Which bond links amino acids?","Peptide bond","It connects the carboxyl group of one amino acid to the amino group of another."),
      problem("Does a catalyst change equilibrium constant?","No","An enzyme changes pathway kinetics, not the thermodynamic equilibrium constant.")
    ],
    ["Calling all carrier-mediated transport active.","Confusing organelle function in eukaryotes with prokaryotes.","Saying enzymes change equilibrium instead of rate.","Treating denaturation as necessarily breaking every peptide bond."],
    ["NEET: membrane transport, organelle functions, biomolecule bonds and enzyme factors. Exact wording and diagram labels matter; read 'down/against gradient' carefully."],
    ["What distinguishes facilitated diffusion from active transport?","Which bond links nucleotides?","What does activation energy describe?"],
    ["Facilitated diffusion: protein-mediated passive transport.","Denaturation: loss of functional biomolecular structure.","Activation energy: barrier associated with a reaction pathway."]);

  const biologyPlant = make("NEET UG","Biology","Plant Physiology: Photosynthesis, Respiration and Transport — NEET Deep Notes",
    "Connect photosynthetic light capture to carbon fixation, then relate xylem/phloem transport to water potential and source–sink movement.",
    [
      ["1. Light reactions and carbon fixation","Photosystems harvest light energy and transfer electrons. Water oxidation replenishes electrons and releases oxygen; electron transport helps generate a proton gradient used to synthesise ATP. NADPH provides reducing power for carbon fixation. The Calvin cycle's fixation, reduction and regeneration stages consume ATP/NADPH; the simplified overall photosynthesis equation is a summary, not a complete pathway."],
      ["2. C3/C4 logic and limiting factors","C3 carbon fixation initially produces a three-carbon product; C4 plants first fix carbon into a four-carbon compound that helps concentrate CO₂ around Rubisco in suitable tissues. This can reduce photorespiration under hot/high-light conditions but involves additional energy. A factor can limit rate when increasing it raises photosynthesis under the given conditions; light, CO₂, temperature and water interact."],
      ["3. Cellular respiration","Glycolysis occurs in the cytosol and converts glucose into pyruvate while yielding ATP/NADH. Aerobic eukaryotic respiration continues through mitochondrial pathways; oxygen acts as the terminal electron acceptor in the respiratory chain. Fermentation regenerates NAD⁺ when respiratory electron transport is unavailable and produces less ATP per glucose than complete aerobic oxidation."],
      ["4. Water and sugar transport","Water moves along water-potential gradients. Transpiration from leaves can create tension supporting upward xylem movement; cohesion and adhesion help maintain the water column. Phloem transports assimilates from sources to sinks, and source/sink relationships can change with growth stage. Phloem flow is not simply always downward; direction depends on the particular conducting pathway."]
    ],
    [],
    [
      worked("Stomatal closure trade-off",["When stomata close during water stress, water loss and transpiration usually decline.","CO₂ entry also declines, which can limit carbon fixation.","The response conserves water but can reduce photosynthetic rate; do not describe it as an unqualified gain."]),
      worked("Xylem versus phloem",["Xylem primarily carries water/mineral ions; its movement is strongly associated with transpiration pull and water-potential gradients.","Phloem distributes sucrose and other assimilates through source–sink relationships.","Use the exact transported substance to identify tissue in a direct MCQ."])
    ],
    [
      method("Photosynthesis pathway recall","For sequence/order questions.",["Separate light reactions from carbon-fixation reactions.","Track water oxidation, ATP/NADPH generation and oxygen release.","Track CO₂ fixation and the Calvin-cycle phases.","Check which inputs/outputs are being asked about."],"Do not claim released oxygen originates from CO₂ in oxygenic photosynthesis."),
      method("Source–sink identification","For phloem movement questions.",["Identify whether a tissue exports or uses/stores sugar at that moment.","Label sources and sinks rather than top/bottom of a plant.","Follow the relevant phloem path.","Allow the role to change with development."],"Phloem is not universally unidirectional in the plant as a whole."),
      method("Plant-process comparison table","For photosynthesis vs respiration.",["List location, principal inputs, outputs and energy direction.","Separate plant daytime photosynthesis from continuous cellular respiration.","Match the level of organisation (organelle, tissue, whole plant)."],"Avoid interpreting simplified global equations as every molecular intermediate.")
    ],
    [
      problem("Where does oxygen released in oxygenic photosynthesis originate?","Water","Water splitting during the light reactions releases O₂."),
      problem("Which tissue transports most sugars from source to sink?","Phloem","Phloem distributes assimilates according to source–sink relationships."),
      problem("What is the trade-off when stomata close?","Reduced water loss but also reduced CO₂ entry","Stomatal regulation balances water conservation with gas exchange.")
    ],
    ["Confusing xylem and phloem roles.","Saying phloem always transports downward.","Attributing photosynthetic O₂ to CO₂.","Ignoring the extra-energy trade-off in C4 carbon concentration."],
    ["NEET: photosystems, Calvin cycle, C3/C4 distinctions in scope, respiration locations and source–sink transport. Study sequence diagrams and outputs separately."],
    ["What is the role of NADPH in carbon fixation?","Why may C4 pathways help in hot conditions?","What determines phloem direction?"],
    ["Source: tissue exporting assimilates.","Sink: tissue using/importing/storing assimilates.","Transpiration: water-vapour loss from aerial plant surfaces."]);

  const biologyPhysiology = make("NEET UG","Biology","Human Physiology I: Digestion, Breathing and Circulation — NEET Deep Notes",
    "Review each organ system as a pathway: anatomy, process, transport form, regulation and the consequence of a disturbance.",
    [
      ["1. Digestion and absorption","Mechanical processing and enzyme action convert food polymers into absorbable molecules. Salivary amylase begins starch digestion; gastric conditions support protein digestion; pancreatic and intestinal enzymes continue breakdown. Most nutrient absorption occurs across the small-intestinal surface, which has folds/villi/microvilli to enlarge area. Bile aids fat emulsification but is not itself a digestive enzyme."],
      ["2. Ventilation and gas exchange","Ventilation moves air to the alveoli, where thin moist surfaces and dense capillary supply support diffusion. Gas movement follows partial-pressure gradients. Oxygen is transported mainly bound to haemoglobin; carbon dioxide travels in multiple forms, with bicarbonate carrying a large fraction. Breathing mechanics and gas exchange are related but distinct processes."],
      ["3. Cardiac circulation","The right side of the heart drives pulmonary circulation and the left side drives systemic circulation. Valves limit backflow; the conduction system coordinates atrial and ventricular contraction. Arteries are defined by carrying blood away from the heart, not by oxygen content, so pulmonary arteries are an important exception to simplistic 'artery means oxygenated' rules."],
      ["4. Blood pressure and control","Cardiac output is heart rate times stroke volume. Pressure, vessel resistance, blood volume and vascular radius interact, so one variable should not be assumed fixed unless the question says so. Haemoglobin binding is reversible and influenced by conditions such as pH, CO₂ and temperature; interpret oxygen-dissociation questions using the stated conditions."]
    ],
    [],
    [
      worked("Artery versus vein",["Classify by direction of flow relative to the heart, not oxygen concentration.","Pulmonary arteries carry deoxygenated blood from right ventricle to lungs.","Pulmonary veins return oxygenated blood to the left atrium."]),
      worked("Gas-exchange direction",["Compare partial pressures in alveolar air and blood.","O₂ diffuses from higher alveolar partial pressure into blood under normal conditions.","CO₂ diffuses from blood into alveoli when its partial pressure is higher in blood."])
    ],
    [
      method("Trace blood flow","For heart-route questions.",["Start at the venae cavae/right atrium.","Follow right ventricle → pulmonary artery → lungs → pulmonary veins.","Follow left atrium → left ventricle → aorta → body.","Place each valve between its correct chambers/vessels."],"Do not determine vessel names from oxygenation alone."),
      method("Digestive enzyme matching","For organ/secretion/substrate questions.",["Identify the nutrient polymer.","Locate the enzyme or secretion described.","Distinguish enzymes from bile and other helpers.","Match the final absorbable products."],"Bile emulsifies fats but does not hydrolyse them enzymatically."),
      method("Partial-pressure logic","For gas-exchange direction.",["Read the two partial pressures.","Diffusion is from higher to lower partial pressure.","State the membrane/interface crossed.","Keep ventilation separate from diffusion."],"Bulk airflow and molecular diffusion are not the same process.")
    ],
    [
      problem("Where does most nutrient absorption occur?","Small intestine","Its extensive surface area and transport system support absorption."),
      problem("Do all arteries carry oxygenated blood?","No","Arteries carry blood away from the heart; pulmonary arteries carry deoxygenated blood."),
      problem("What drives diffusion of respiratory gases?","Partial-pressure gradients","Each gas moves down its own partial-pressure gradient across the exchange surface.")
    ],
    ["Calling bile an enzyme.","Defining arteries by oxygen content rather than direction.","Confusing ventilation with alveolar diffusion.","Ignoring the bicarbonate route for CO₂ transport."],
    ["NEET: organ–secretion matches, absorption sites, blood-flow route, cardiac-cycle order and gas-transport forms. Diagrams are especially high-value."],
    ["What is the function of bile?","Why are pulmonary arteries an exception to a common mnemonic?","What gradient drives O₂ diffusion?"],
    ["Villi: small-intestinal projections increasing absorption area.","Partial pressure: contribution of one gas to total pressure.","Cardiac output: heart rate × stroke volume."]);

  const biologyExcretionNeuro = make("NEET UG","Biology","Human Physiology II: Excretion, Neural Control and Endocrine Regulation — NEET Deep Notes",
    "Use location and sequence to learn nephron function, membrane-potential signalling and hormone feedback. Questions often test a single stage or the direction of a control response.",
    [
      ["1. Nephron and urine formation","Glomerular filtration moves water and small solutes from blood into filtrate under pressure. Selective reabsorption returns useful water and solutes; tubular secretion moves additional substances into the tubule. Final urine composition reflects all three processes. The proximal tubule reabsorbs many useful solutes; the loop and collecting duct contribute to concentration under countercurrent/hormonal control."],
      ["2. Water balance and hormones","Antidiuretic hormone increases water permeability in the collecting duct, tending to conserve body water and reduce urine volume. Aldosterone promotes sodium reabsorption in the appropriate nephron segments, with water balance effects depending on context. Hormonal regulation is homeostatic: stimulus, release and target-tissue response form a feedback loop."],
      ["3. Neural signalling","Resting membrane potential depends on ion gradients and membrane permeability. An action potential involves rapid changes in membrane ion conductance and propagates along the axon. At chemical synapses, neurotransmitter release crosses a synaptic cleft and interacts with receptors on the target cell. The neural signal is electrical along the membrane and chemical across a typical chemical synapse."],
      ["4. Endocrine and feedback","Hormones circulate and act on cells expressing appropriate receptors. Negative feedback counteracts a deviation from a regulated range; positive feedback amplifies a process in specific cases. Neural responses are often fast and localised, while endocrine effects can be slower and longer-lasting. Use hormone source, target and net action together rather than memorising names alone."]
    ],
    [],
    [
      worked("Predict ADH effect",["ADH increases water permeability of collecting ducts.","More water is reabsorbed into the body under suitable osmotic conditions.","Urine volume tends to fall and urine becomes more concentrated."]),
      worked("Filtration versus reabsorption",["A small solute is filtered from blood into the nephron lumen.","If the body needs that solute, tubular transport can return it to blood.","The fact it was filtered does not prove it must appear in final urine."])
    ],
    [
      method("Nephron sequence",["Follow filtrate through Bowman's capsule, proximal tubule, loop of Henle, distal tubule and collecting duct.","Mark filtration at the renal corpuscle.","Add major reabsorption/secretion where the chapter teaches it.","Apply hormone effects only to the correct segments."],"Use a labelled diagram; written summaries alone can reverse the route."),
      method("Feedback loop","When a hormone's effect is asked.",["Identify the stimulus/change.","Name the releasing gland/cells if known.","Name the target and its response.","Describe whether that response restores or amplifies the original change."],"Negative feedback is about the loop's effect, not a negative hormone concentration."),
      method("Action potential vs synapse",["Identify whether the signal is travelling along one neuron or between cells.","Along the axon: membrane-potential change and propagation.","Across chemical synapse: neurotransmitter release, diffusion and receptor binding.","State the directionality supported by the synapse design."],"Not every synapse uses the same mechanism; use the context given.")
    ],
    [
      problem("What does ADH generally do to collecting-duct permeability?","Increases water permeability","This promotes water reabsorption and tends to reduce urine volume."),
      problem("What are the three broad steps of urine formation?","Filtration, reabsorption and secretion","Final urine is the result of all three processes."),
      problem("What is negative feedback?","A response that counteracts a deviation in the regulated variable","The output tends to reduce the original stimulus.")
    ],
    ["Saying every filtered substance is excreted.","Reversing ADH's typical effect on urine volume.","Mixing electrical conduction along a neuron with chemical transmission across a synapse.","Naming a hormone without stating its target/effect."],
    ["NEET: nephron diagram, urine formation, ADH/aldosterone, action potential, synapses and feedback loops. Trace the signal or filtrate through the structure."],
    ["Which process returns useful solutes to blood?","Why does ADH affect urine concentration?","What distinguishes a synapse from axonal conduction?"],
    ["Glomerular filtration: pressure-driven movement of small solutes/water from blood into filtrate.","Neurotransmitter: chemical released at a synapse.","Negative feedback: control response reducing the original deviation."]);

  const biologyReproduction = make("NEET UG","Biology","Reproduction: Human and Flowering-Plant Systems — NEET Deep Notes",
    "Keep gamete formation, fertilisation, implantation and development distinct. For flowering plants, distinguish pollination from double fertilisation and track which structure becomes seed, embryo and fruit.",
    [
      ["1. Gametogenesis and chromosome number","Meiosis reduces chromosome-set number so haploid gametes can fuse at fertilisation and restore diploidy. Spermatogenesis and oogenesis differ in timing, arrest stages and the number of functional gametes typically produced. Chromosome number should be counted carefully: DNA replication doubles DNA content but does not by itself double chromosome number under the usual centromere definition."],
      ["2. Human cycle and development","The hypothalamic-pituitary-gonadal axis coordinates reproductive hormones. FSH and LH support follicular development, ovulation and luteal function in the standard cycle description; ovarian hormones influence the uterine lining. Fertilisation usually occurs in the oviduct, cleavage forms the early embryo, and the blastocyst implants in the uterine lining. These stages are different events and should be ordered clearly."],
      ["3. Flowering-plant reproduction","Microsporogenesis forms microspores that develop into pollen; megasporogenesis forms megaspores, one of which commonly develops into the embryo sac. Pollination transfers pollen to a receptive stigma, after which a compatible pollen tube grows toward the ovule. Pollination is not fertilisation. Outbreeding mechanisms can reduce self-pollination and support genetic diversity."],
      ["4. Double fertilisation and contraception","In angiosperms, syngamy forms the zygote and the other male gamete participates in triple fusion, producing the primary endosperm nucleus in the standard account. Ovule integuments form the seed coat; ovules form seeds and the ovary commonly forms fruit. Contraceptive methods differ by mechanism and STI protection; condoms reduce STI transmission risk whereas many other methods do not."]
    ],
    [],
    [
      worked("Stage-order question",["Pollen transfer is pollination, not fertilisation.","After compatible pollen germinates, a pollen tube grows and delivers male gametes.","Syngamy and triple fusion are distinct fusions with distinct products."]),
      worked("Ploidy reasoning",["A diploid organism forms haploid gametes through meiosis.","Fusion of two haploid gametes forms a diploid zygote.","The sequence prevents chromosome-set number from doubling every generation."])
    ],
    [
      method("Separate the reproductive stages","When the question gives events out of order.",["Label gamete formation, gamete transfer, fertilisation and implantation/development.","Place each event at its usual site.","Connect each event to its product.","Check ploidy at meiosis and fertilisation."],"Do not merge pollination with fertilisation."),
      method("Human hormone mapping","For hormone-source-effect MCQs.",["Identify the stage of the cycle described.","Associate FSH/LH and ovarian hormones with follicular, ovulatory or luteal events.","Match the hormone effect with the target tissue.","Check whether the question asks ovarian change or uterine change."],"Hormone levels vary across the cycle; avoid absolute statements without context."),
      method("Seed/fruit mapping","For flowering-plant structure questions.",["Ovule → seed; integuments → seed coat.","Zygote → embryo; fertilisation product in central cell → endosperm.","Ovary commonly → fruit.","Check exceptions or accessory fruit structures if a specific plant is mentioned."],"Use 'commonly' when the question includes developmental exceptions.")
    ],
    [
      problem("What is the difference between pollination and fertilisation?","Pollination transfers pollen; fertilisation fuses gametes.","Pollen reaching a stigma precedes tube growth and fusion of male gametes."),
      problem("Which product arises from syngamy?","Zygote","Syngamy is fusion of one male gamete with the egg."),
      problem("Which common contraceptive method also lowers STI transmission risk?","Condoms","Other contraceptive methods may prevent pregnancy without preventing STI transmission.")
    ],
    ["Confusing ovulation with fertilisation or implantation.","Saying both male gametes form the embryo.","Counting gametes as diploid.","Assuming all contraceptive methods prevent STIs."],
    ["NEET: reproductive hormone roles, embryo-stage order, meiosis/ploidy, pollen structures and double fertilisation. Use structure-to-product maps."],
    ["Where does fertilisation commonly occur in humans?","What are the products of syngamy and triple fusion?","Why are gametes haploid?"],
    ["Gametogenesis: formation of gametes.","Pollination: transfer of pollen to a receptive stigma.","Implantation: attachment/embedding of the early embryo in the uterine lining."]);

  const biologyGenetics = make("NEET UG","Biology","Principles of Inheritance, Molecular Genetics and Biotechnology — NEET Deep Notes",
    "Solve genetics questions as probability plus chromosome behaviour; solve molecular questions by tracking template, direction and product at every stage.",
    [
      ["1. Mendelian crosses and probability","In a heterozygote cross Aa×Aa under the standard single-gene complete-dominance model, genotype frequencies are 1 AA:2 Aa:1 aa and phenotype frequencies are commonly 3 dominant:1 recessive. A Punnett square enumerates gamete combinations; predicted ratios are probabilities across many offspring, not guaranteed small-family counts. Linkage and non-Mendelian inheritance modify simple independent-assortment expectations."],
      ["2. DNA replication and transcription","DNA replication is semi-conservative. DNA polymerase extends new DNA 5′→3′, so one strand is synthesised continuously while the lagging strand is assembled through fragments that are later joined. Transcription uses a DNA template to make RNA. For eukaryotic genes, the initial RNA transcript can require processing before mature mRNA is translated."],
      ["3. Translation, code and mutation","Ribosomes read mRNA codons in a reading frame; tRNAs deliver amino acids. The code is degenerate because several codons can specify the same amino acid, but a codon must be interpreted in its frame. A substitution may be silent, missense or nonsense; insertion/deletion can cause a frameshift if the number of bases is not a multiple of three."],
      ["4. Recombinant DNA workflow","Restriction enzymes cut DNA at recognised sequences, ligase joins compatible ends, vectors carry DNA into hosts and PCR amplifies target regions. Gel electrophoresis separates fragments; smaller fragments often migrate farther through the matrix under comparable conditions. A cloned construct, a confirmed sequence and a safe/useful product are distinct milestones, so experimental controls and verification matter."]
    ],
    [],
    [
      worked("Aa×Aa genotype probability",["Each parent passes A or a with probability 1/2.","Combine gametes: AA 1/4, Aa 1/2, aa 1/4.","Under complete dominance, AA and Aa show the dominant phenotype, giving 3/4 dominant and 1/4 recessive."]),
      worked("Identify a frameshift",["A one-base insertion changes the reading frame downstream of the insertion.","Codons after that position are regrouped, so many amino acids may change and an early stop can appear.","An insertion of three bases does not shift the reading frame, though it can still alter the protein."])
    ],
    [
      method("Genetics probability tree","For a requested genotype or offspring probability.",["Write each parent's genotype.","List gametes with probabilities.","Multiply along independent gamete paths.","Add the disjoint paths that match the requested genotype/phenotype."],"Do not treat a 1:2:1 ratio as a guaranteed count in a small family."),
      method("Molecular-biology direction check","For replication/transcription diagrams.",["Mark template and product strands.","Write 5′ and 3′ ends explicitly.","Check polymerase extension direction.","Differentiate DNA replication, transcription and translation products."],"The template sequence and new product sequence are antiparallel/complementary as appropriate."),
      method("Biotechnology tool matching","When a question names an experimental task.",["Cut at a recognised sequence: restriction enzyme.","Join DNA fragments: ligase.","Amplify a target: PCR.","Separate fragments: gel electrophoresis; deliver DNA: vector."],"Tools do not substitute for one another; read the specific task.")
    ],
    [
      problem("In Aa×Aa, what is the probability of aa?","1/4","Each parent passes a with probability 1/2; multiply 1/2×1/2."),
      problem("Which enzyme joins DNA fragments?","DNA ligase","Restriction enzymes cut; ligase forms the joining linkage."),
      problem("Does every mutation change an organism's phenotype?","No","Effects depend on sequence, expression, genetic background and environment.")
    ],
    ["Confusing transcription with translation.","Saying every mutation is harmful.","Using a dihybrid ratio without checking independent assortment assumptions.","Swapping the jobs of restriction enzymes and ligase."],
    ["NEET: Mendelian probability, chromosome behaviour, genetic code, replication/transcription direction and tool-function matching. Read codons and strand polarity carefully."],
    ["What ratio describes Aa×Aa genotypes?","What does a frameshift affect?","Which tool amplifies a DNA region?"],
    ["Allele: alternative form of a gene.","Codon: three-nucleotide mRNA unit.","Vector: vehicle for delivering genetic material to a host."]);

  const biologyEcology = make("NEET UG","Biology","Ecology: Populations, Ecosystems, Energy and Biodiversity — NEET Deep Notes",
    "Separate population change, organism interactions, matter cycles and energy flow. Ecology terms often differ by a single word, so learn the mechanism behind each term.",
    [
      ["1. Population growth and attributes","Population density, age structure, natality, mortality and dispersion are population attributes. Exponential growth is represented by dN/dt=rN under abundant resources; logistic growth includes a carrying capacity K. Carrying capacity is conditional on environment and resource availability, so it can change. Real populations may fluctuate because of climate, disease, migration and time lags."],
      ["2. Species interactions","Competition involves shared limiting resources; predation benefits predator and harms prey; parasitism benefits the parasite at host cost; mutualism benefits both partners; commensalism benefits one with little apparent effect on the other. Interaction categories describe effects in a context, and those effects can depend on environment. Identify the two partners before using +, − and 0 notation."],
      ["3. Energy transfer and productivity","Producers convert external energy into chemical energy; consumers and decomposers use organic matter. Energy is lost as heat and metabolism at each trophic transfer, so less energy is available at higher levels. Gross primary productivity is total production; net primary productivity subtracts producer respiration. The approximate 10% transfer rule is a heuristic, not a fixed universal constant."],
      ["4. Biodiversity and conservation","Biodiversity includes genetic, species and ecosystem diversity. Habitat loss, invasive species, overexploitation, pollution and climate change can drive declines. In-situ conservation protects organisms in natural habitats; ex-situ methods include seed banks, botanical collections and captive breeding. Conservation effectiveness depends on the threat, ecology, local communities and long-term management, not simply the protected-area label."]
    ],
    [],
    [
      worked("Logistic-growth interpretation",["A population approaches K as density-dependent limits intensify.","Growth rate slows as N approaches K because the factor (1−N/K) tends to zero.","If habitat/resources change, K may also change; it is not a universal fixed number."]),
      worked("GPP versus NPP",["NPP=GPP−respiration by producers.","If GPP is 2000 energy units and producer respiration is 700, NPP=1300 units.","NPP is the energy/production available for growth and consumers in the simplified ecosystem account."])
    ],
    [
      method("Interaction-sign table","For species-interaction MCQs.",["Write species A and B separately.","State whether each benefits, is harmed or is unaffected.","Map effects to mutualism, competition, predation, parasitism or commensalism.","Use the mechanism to justify the label."],"Do not decide from one partner's effect alone."),
      method("Energy-flow sanity check","For trophic-level efficiency questions.",["Start with the energy actually available at the lower level.","Apply the supplied transfer efficiency, if given.","Keep energy flow separate from nutrient cycling.","Avoid treating the 10% heuristic as exact where data contradict it."],"Use the question's provided efficiency rather than memorised approximation."),
      method("Population graph reading","When a J-shaped or S-shaped curve is shown.",["Read axes and units.","Identify exponential versus logistic form.","Locate where growth rate changes or levels off.","Connect the shape to resource assumptions and carrying capacity."],"A curve's shape needs context; real populations are not always smooth.")
    ],
    [
      problem("What does NPP equal?","GPP−producer respiration","It is the net organic production after producers' own respiratory use."),
      problem("Why is an energy pyramid upright in the usual ecosystem model?","Usable energy declines at each trophic transfer","Metabolism and heat loss mean higher trophic levels receive less available energy."),
      problem("What is the difference between in-situ and ex-situ conservation?","In-situ protects in the natural habitat; ex-situ protects outside it","Examples include protected ecosystems versus seed banks/captive collections.")
    ],
    ["Saying nutrients flow one-way like energy.","Using 10% transfer as an exact universal law.","Confusing GPP with NPP.","Treating carrying capacity as permanently fixed."],
    ["NEET: growth curves, interaction signs, productivity, trophic energy, nutrient cycles and conservation types. Learn definitions by mechanism and compare paired terms."],
    ["What term describes carrying capacity?","How do energy and nutrients differ?","What does NPP subtract from GPP?"],
    ["Carrying capacity: population size supported under stated conditions.","Trophic level: position in a food chain/web.","In-situ conservation: protection within natural habitat."]);

  const biologyHealthBioTech = make("NEET UG","Biology","Human Health, Immunity, Biotechnology and Microbial Applications — NEET Deep Notes",
    "Understand what each cell, antibody, microbe or biotechnology tool does before memorising its name. For medical facts, this is exam study content—not personal medical advice.",
    [
      ["1. Innate and adaptive immunity","Innate immunity includes barriers, inflammatory responses and broad cellular defences. Adaptive immunity recognises specific antigens. B cells can differentiate into antibody-secreting plasma cells, while T-cell subtypes contribute coordination or cell-mediated responses. Antibodies bind specific antigen features, but protection is not an all-or-none guarantee against every infection."],
      ["2. Vaccination and infection prevention","Vaccines expose the immune system to a controlled antigen or antigen-encoding instruction so that adaptive responses and memory can develop. Effectiveness varies with vaccine, pathogen, schedule and host. Infection prevention combines approaches matched to transmission route, including sanitation, vector control, barriers, vaccination and appropriate testing/treatment."],
      ["3. Biotechnology tools","PCR amplifies a selected DNA region using primers, nucleotides and a suitable polymerase through repeated temperature cycles. Restriction enzymes cut at recognised sequences; ligase joins DNA; vectors carry genetic material to hosts; electrophoresis separates fragments. Controls help distinguish a genuine result from contamination or a nonspecific product."],
      ["4. Microbes and human welfare","Microorganisms support fermentation, production of industrial compounds, sewage treatment, biogas generation, biocontrol and biofertilisation. In secondary sewage treatment, microbial communities reduce organic load; reduced biochemical oxygen demand (BOD) indicates less biodegradable organic matter requiring microbial oxygen demand. Methanogens participate in anaerobic biogas formation. Benefits depend on strain and conditions."]
    ],
    [],
    [
      worked("PCR versus gel electrophoresis",["If the task is to create many copies of a target sequence, PCR amplifies it.","If the task is to separate DNA fragments by size, gel electrophoresis is used.","A common workflow can use both, but they perform different jobs."]),
      worked("High BOD interpretation",["A high BOD indicates considerable biodegradable organic load in the water sample.","Microbial decomposition can consume dissolved oxygen.","Effective secondary treatment reduces the organic load and generally lowers BOD."])
    ],
    [
      method("Tool by verb","When an MCQ describes a biotechnology action.",["Cut DNA: restriction endonuclease.","Join DNA ends: DNA ligase.","Amplify a target: PCR.","Separate fragments: gel electrophoresis; carry DNA: vector."],"Map the tool to the specific verb instead of memorising a loose list."),
      method("Immunity classification","For innate/adaptive and antibody/cell-mediated questions.",["Identify whether recognition is broad or antigen-specific.","Name the cell or molecule involved.","State its direct role.","Separate immune memory from immediate innate defence."],"Not every immune response is antibody-only."),
      method("BOD reasoning","For wastewater-treatment questions.",["Identify organic load and microbial decomposition.","Connect higher biodegradable load to greater oxygen demand.","Explain why treatment reduces the load.","Keep BOD distinct from the dissolved oxygen concentration itself."],"BOD is a demand measure, not the same quantity as DO.")
    ],
    [
      problem("Which tool amplifies a target DNA segment?","PCR","Primers define the region and repeated cycles amplify it."),
      problem("Do antibiotics treat viral infections directly?","No","Antibiotics target susceptible bacteria; viral infections require different clinical considerations."),
      problem("What does BOD represent?","Biochemical oxygen demand associated with biological degradation of organic matter","It is used as an indicator of biodegradable organic load in wastewater.")
    ],
    ["Calling every immune response antibody-mediated.","Confusing PCR with electrophoresis.","Saying antibiotics directly treat viruses.","Treating BOD as identical to dissolved oxygen."],
    ["NEET: immune cells/antibodies, vaccine logic, microbial processes, BOD and biotechnology tools. Use exact function words—cut, join, amplify, carry, separate."],
    ["What is immune memory?","Which tool separates DNA fragments?","Why does effective sewage treatment reduce BOD?"],
    ["Antigen: feature recognised by immune components.","Vector: vehicle for introducing genetic material.","BOD: biochemical oxygen demand."]);

  const sourceNotes = [
    mathsQuadratic, mathsComplex, mathsSequence, mathsTrig, mathsPC, mathsProbability, mathsCalculus, mathsIntegral, mathsMatrices, mathsVector3D,
    physicsUnits, physicsKinematics, physicsNLM, physicsWork, physicsRotation, physicsGravitation, physicsSHM, physicsElectrostatics, physicsCurrent, physicsEMI, physicsModern,
    chemMole, chemAtomic, chemBond, chemThermoEquil, chemSolutionsKinetics, chemGOC, chemCoordination,
    biologyCell, biologyPlant, biologyPhysiology, biologyExcretionNeuro, biologyReproduction, biologyGenetics, biologyEcology, biologyHealthBioTech
  ];
  // Physics and Chemistry content is shared across the common JEE/NEET foundation,
  // but NEET versions carry their own level label and NCERT-concept exam focus.
  const neetViews = sourceNotes.filter(item => item.level === "JEE Main" && ["Physics","Chemistry"].includes(item.subject)).map(item => Object.assign({}, item, {
    level: "NEET UG",
    intro: item.intro + " NEET focus: prioritise NCERT definitions/diagrams, units, conceptual direction and one-step numerical applications, while retaining the same complete derivations and worked methods.",
    examFocus: [...item.examFocus, "NEET review: revise the prescribed NCERT explanation and labelled diagrams; use the formulas only under their stated conditions."]
  }));
  window.KP_JEE_NEET_CHAPTER_NOTES = sourceNotes.concat(neetViews);
})();
