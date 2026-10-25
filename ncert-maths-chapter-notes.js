/* Chapter-by-chapter original NCERT-aligned Class 10 Mathematics notes.
   Written as a teaching resource: explanations, formula cards, solved methods, traps and recall.
   It intentionally does not copy the copyrighted NCERT text. */
(function () {
  "use strict";
  const make = (level, subject, chapter, intro, sections, formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary) => ({
    level, subject, chapter, intro,
    sections: sections.map(([heading, body]) => ({ heading, body })),
    formulas: formulaCheatSheet.map((x) => x.formula),
    formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary,
    points: sections.map(([heading, body]) => heading + ": " + body.split(/[.!?]/)[0] + "."),
    example: workedExamples.length ? workedExamples[0].steps.join(" ") : "Review the formula cards, then solve the prescribed textbook examples independently.",
    depth: "detailed",
    sourceNote: "Original chapter-specific notes aligned to common NCERT Class 10 Mathematics concepts. Verify topic inclusion and naming against the current CBSE curriculum and your prescribed textbook edition."
  });
  const notes = [
    make("Class 10","Mathematics","Real Numbers",
      "A complete learning guide to prime factorisation, the Fundamental Theorem of Arithmetic, irrational numbers and decimal expansions, with the exact logic behind the standard results.",
      [
        ["Prime factorisation and uniqueness","Every integer greater than 1 is prime or can be expressed as a product of primes. The Fundamental Theorem of Arithmetic says that this representation is unique except for the order of its prime factors. For instance, 60 = 2^2 × 3 × 5. This matters because divisibility and HCF/LCM questions can be solved by comparing the exponents of the same primes, rather than guessing factors."],
        ["HCF and LCM from prime powers","For the HCF, keep only primes common to all integers and choose the smallest exponent of each. For the LCM, include every prime that occurs and choose the greatest exponent. For two positive integers a and b, HCF(a,b) × LCM(a,b) = a × b. This identity is a useful check, but it does not replace correct prime factorisation. For three or more numbers, do not blindly apply the two-number product identity."],
        ["Why irrational numbers remain irrational","A rational number can be written p/q with integers p,q and q≠0. To prove that a number such as √2 is irrational, assume the opposite and write it in lowest terms. Squaring the assumed fraction forces both p and q to be even, contradicting the claim that the fraction is reduced. The key proof technique is contradiction: temporarily assume rationality, derive a property that cannot hold, and reject the assumption."],
        ["Terminating and recurring decimals","A rational number p/q in lowest terms has a terminating decimal exactly when the prime factorisation of q contains only 2s and/or 5s. This follows because a terminating decimal has a denominator that can be written as 10^n = 2^n5^n. If the reduced denominator contains another prime, the decimal expansion is non-terminating recurring. Always reduce the fraction before inspecting its denominator; cancellation may remove other prime factors."]
      ],
      [
        {formula:"HCF(a,b) × LCM(a,b) = a × b",meaning:"For two positive integers a and b only; this links their greatest common divisor and least common multiple.",when:"Use as a check or to find the missing HCF/LCM after the other quantity is known.",units:"Integers; no physical units.",trap:"Do not apply the identity to three integers as if it were unchanged."},
        {formula:"q = 2^m × 5^n (after reducing p/q)",meaning:"A rational number has a terminating decimal if and only if every prime factor of its reduced denominator is 2 or 5.",when:"Classify the decimal form without long division.",units:"m,n are non-negative integers.",trap:"Reduce the fraction first."},
        {formula:"Euclid's algorithm: a = bq + r, 0 ≤ r < b",meaning:"Repeated division preserves the HCF: HCF(a,b)=HCF(b,r).",when:"Find HCF of large integers efficiently.",units:"q,r are quotient and remainder.",trap:"The remainder must be strictly less than the divisor."}
      ],
      [
        {title:"Find HCF and LCM of 72 and 120",steps:["Prime-factorise: 72 = 2^3 × 3^2; 120 = 2^3 × 3 × 5.","For HCF, take the minimum exponents: 2^3 × 3 = 24.","For LCM, take maximum exponents: 2^3 × 3^2 × 5 = 360.","Check: 24 × 360 = 8640 and 72 × 120 = 8640."]},
        {title:"Decide whether 13/3125 terminates",steps:["Factorise the denominator: 3125 = 5^5.","The fraction is already in lowest terms because 13 is not divisible by 5.","Only the prime factor 5 occurs in the denominator.","Therefore the decimal terminates; the conclusion follows from the theorem, not from a decimal approximation."]},
        {title:"Proof skeleton for √5 irrational",steps:["Assume √5 = p/q where p and q are coprime integers and q≠0.","Then p^2 = 5q^2, so 5 divides p^2 and hence p.","Write p = 5k; substitution gives q^2 = 5k^2, so 5 divides q too.","This contradicts coprimality; therefore √5 is irrational."]}
      ],
      ["Inspecting a denominator before reducing the fraction.","Taking the smaller integer as HCF or multiplying all factors without checking exponents.","Claiming a proof by contradiction is complete before obtaining an actual contradiction.","Using the HCF–LCM product identity for more than two numbers without a valid derivation."],
      ["CBSE focus: justify decimal termination using prime factors; use a complete irrationality proof; show prime-exponent work. JEE foundation: divisibility, HCF/LCM and exponent reasoning."],
      ["Why must p/q be reduced before the decimal test?","State the unique factorisation theorem in your own words.","What contradiction completes the proof that √5 is irrational?","Find the HCF and LCM of 84 and 126."],
      ["Coprime: integers whose HCF is 1.","Prime factorisation: representation as a product of prime powers.","Irrational: a real number not expressible as a ratio of integers."]),
    make("Class 10","Mathematics","Polynomials",
      "Understand polynomial terminology, zeroes and graphs, and the coefficient–zero relationships for quadratic polynomials, including how to construct a polynomial from given zeroes.",
      [
        ["Polynomial, degree and zero","A polynomial in x is a finite sum of terms a_k x^k where the exponents are non-negative integers. The degree is the highest exponent with a non-zero coefficient. A zero (root) α satisfies p(α)=0. For a graph y=p(x), real zeroes correspond to x-coordinates where the curve meets the x-axis. A polynomial may have fewer real zeroes than its degree because some roots may be non-real."],
        ["Quadratic zeroes and coefficients","For p(x)=ax^2+bx+c with a≠0 and zeroes α,β, factorisation gives p(x)=a(x−α)(x−β). Expanding and comparing coefficients yields α+β=−b/a and αβ=c/a. These identities let you check proposed roots or form a polynomial without solving the equation. They apply to roots counted with multiplicity."],
        ["Geometric meaning of roots","A parabola can cross the x-axis at two distinct points, touch it at one repeated point, or never meet it. For a quadratic, the discriminant D=b^2−4ac determines the real-root case: D>0 means two distinct real roots, D=0 means one repeated real root, and D<0 means no real roots. The sign of a also determines whether the parabola opens upward or downward."],
        ["Constructing and transforming polynomials","A monic quadratic with roots α and β is x^2−(α+β)x+αβ. Multiplying the whole polynomial by a non-zero constant does not change its roots. If the sum and product are given, use them directly. Expressions such as α^2+β^2 can be simplified through (α+β)^2−2αβ; this is often quicker and less error-prone than solving for both roots."]
      ],
      [
        {formula:"For ax²+bx+c: α+β = −b/a; αβ = c/a",meaning:"The sum and product of the two roots are determined by the coefficients.",when:"Find root relationships, verify roots or build a quadratic.",units:"Pure numbers/algebraic quantities.",trap:"The sum has a negative sign; do not forget division by a."},
        {formula:"D = b² − 4ac",meaning:"The discriminant predicts the number/type of real roots of a quadratic.",when:"Classify roots without solving fully.",units:"Algebraic expression.",trap:"D<0 means no real roots, not that the polynomial has no complex roots."},
        {formula:"x² − (α+β)x + αβ = 0",meaning:"Monic quadratic formed from roots α and β.",when:"The roots or their sum/product are provided.",units:"Coefficient of x² is 1.",trap:"Reverse signs correctly for the middle coefficient."}
      ],
      [
        {title:"Form a quadratic with zeroes 4 and −2",steps:["Sum = 4 + (−2) = 2; product = 4(−2) = −8.","Use x² − (sum)x + product = 0.","The polynomial is x² − 2x − 8.","Check by factorising: (x−4)(x+2)=x²−2x−8."]},
        {title:"Evaluate α²+β² when α+β=7 and αβ=10",steps:["Use α²+β²=(α+β)²−2αβ.","Substitute 7²−2(10).","The value is 49−20=29.","No need to find α and β separately."]},
        {title:"Classify x²+4x+4",steps:["Identify a=1, b=4, c=4.","D=4²−4(1)(4)=16−16=0.","Therefore there is one repeated real zero.","Factorisation (x+2)² confirms that the zero is −2 twice."]}
      ],
      ["Swapping the signs when constructing x²−Sx+P.","Using coefficient–zero identities when a=0, which is not a quadratic.","Confusing the number of roots with the number of distinct root values.","Treating a graph that touches the axis as having no zero."],
      ["CBSE focus: explain roots geometrically, find zeros, use sum/product. JEE foundation: symmetric expressions in roots and discriminant cases."],
      ["What do the roots represent graphically?","What does D=0 imply?","Construct a monic quadratic with sum −3 and product −10.","Simplify α²+β² using only sum and product."],
      ["Zero/root: input value where a polynomial equals zero.","Monic polynomial: polynomial with leading coefficient 1.","Discriminant: expression that classifies roots of a quadratic."]),
    make("Class 10","Mathematics","Pair of Linear Equations in Two Variables",
      "Learn how a pair of linear equations represents two lines, why consistency depends on their relative positions, and how elimination and substitution solve word problems.",
      [
        ["Equation and line","A linear equation ax+by+c=0 represents a straight line when a and b are not both zero. A pair of equations has a solution at a point that lies on both lines. If the lines intersect, there is exactly one solution; if they coincide, every point on the line is a solution; if they are distinct parallel lines, there is no common solution."],
        ["Consistency test from coefficients","For a1x+b1y+c1=0 and a2x+b2y+c2=0, compare a1/a2, b1/b2 and c1/c2 when denominators are non-zero. If a1/a2 ≠ b1/b2, the pair has a unique solution. If a1/a2=b1/b2≠c1/c2, the lines are parallel and inconsistent. If all three ratios are equal, the equations represent the same line and infinitely many solutions."],
        ["Substitution and elimination","Substitution solves one equation for one variable and puts that expression into the other equation. Elimination adds or subtracts suitable multiples of equations to remove a variable. Choose the method that creates the simplest arithmetic. Multiplying an equation by a non-zero number does not change its solution set, but adding equations is valid only when terms and signs are aligned correctly."],
        ["Translate word problems into equations","Define both unknowns before forming equations. A price problem might use x for the cost of one book and y for a pen; a number problem might use x and y for two integers. Convert every sentence into a relationship, keep units consistent, solve, then substitute the answer into the original statements. If the numerical result is implausible (negative counts, wrong units), revisit the model."]
      ],
      [
        {formula:"a₁/a₂ ≠ b₁/b₂ → unique solution",meaning:"The lines have different slopes and intersect once.",when:"Classify a pair from coefficients.",units:"Ratios require non-zero denominators; use cross-products if unsure.",trap:"Do not confuse the unique-solution condition with the parallel-line condition."},
        {formula:"a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → no solution",meaning:"Same directional coefficients but inconsistent constants produce distinct parallel lines.",when:"Test consistency.",units:"Coefficient ratios.",trap:"Check all three ratios, not just two."},
        {formula:"Elimination: choose multipliers that make one coefficient equal and opposite",meaning:"Adding the equations then removes that variable.",when:"A variable can be eliminated with small integers.",units:"Keep equations in the same variable order.",trap:"Multiplying all terms—including the constant—is mandatory."}
      ],
      [
        {title:"Solve 2x+3y=13 and x−y=1",steps:["From x−y=1, write x=y+1.","Substitute into the first equation: 2(y+1)+3y=13.","Then 5y+2=13, so y=11/5? Recheck arithmetic: 5y=11, y=11/5; x=16/5.","Verify x−y=1 and 2x+3y=13. The fractional answer is valid; context must determine whether integers were expected."]},
        {title:"Classify a parameter pair",steps:["For 2x+4y=6 and x+2y=3, divide the first equation by 2.","Both equations become x+2y=3.","They represent the same line, so infinitely many solutions exist.","An answer must say 'dependent/consistent' and explain the coincident-line reason."]},
        {title:"Set up a price problem",steps:["Let x be the price of a notebook and y the price of a pen.","Translate each shopping statement into an equation, e.g. 3x+2y=190 and 2x+4y=200.","Solve by elimination and check the two prices satisfy both purchases.","Include currency units and state the final interpretation."]}
      ],
      ["Changing a coefficient but forgetting the constant during elimination.","Using substitution without collecting like terms carefully.","Calling a pair inconsistent because the equations look different; compare their ratios.","Reporting values without checking the original equations."],
      ["CBSE focus: graphical interpretation, algebraic methods, consistency, word problems. Show the equation model and final units."],
      ["What geometric case corresponds to infinitely many solutions?","How can coefficient ratios identify parallel lines?","Why is substitution into the original pair a useful final check?"],
      ["Consistent pair: at least one solution exists.","Dependent pair: equations describe the same line.","Inconsistent pair: no common solution."]),
    make("Class 10","Mathematics","Quadratic Equations",
      "Understand how quadratic models arise, solve them by factorisation or the quadratic formula, classify roots with the discriminant, and interpret solutions in context.",
      [
        ["Standard form and solution meaning","A quadratic equation has the form ax²+bx+c=0 with a≠0. A solution is a value that makes the equation true. Rearrange a word problem into standard form before applying a solving method. Multiplying the entire equation by a non-zero constant preserves its roots, but dividing by an expression containing the unknown may remove valid solutions if that expression can be zero."],
        ["Factorisation","Factorisation rewrites the quadratic as a product of linear factors. If (px+q)(rx+s)=0, then at least one factor equals zero, giving two linear equations. This method is fast when the coefficients factor cleanly. Always expand the factorised expression to check it matches the original quadratic; a sign error in the constant term can produce two wrong roots."],
        ["Quadratic formula and discriminant","For ax²+bx+c=0, x=[−b±√(b²−4ac)]/(2a). The discriminant D=b²−4ac indicates whether the square root is positive, zero or negative. D>0 gives two distinct real roots; D=0 gives one repeated real root; D<0 gives no real roots. If the question is about real dimensions or time, interpret only physically meaningful real roots."],
        ["Form and interpret a model","For consecutive integers n and n+1, their product is n(n+1). For a rectangle with perimeter P, length plus width equals P/2. Substitute this relation into area or another condition to obtain a quadratic. After solving, discard values that conflict with the problem (negative length or non-positive time) and verify the retained result in the original context."]
      ],
      [
        {formula:"x = [−b ± √(b²−4ac)]/(2a)",meaning:"The general solution of a quadratic equation in standard form.",when:"Use when factorisation is inconvenient or to express roots in terms of coefficients.",units:"x shares the units of the variable; coefficients may carry units in modelling.",trap:"The denominator is 2a, not 2; preserve the ±."},
        {formula:"D = b²−4ac",meaning:"Determines the real-root case.",when:"Classify number of real roots or identify a repeated root.",units:"Algebraic expression.",trap:"A non-real pair may still exist when D<0; state 'no real roots'."},
        {formula:"If D=0, repeated root x=−b/(2a)",meaning:"The parabola touches the x-axis at its vertex.",when:"Solve a parameter condition for equal roots.",units:"Same as x.",trap:"Repeated means multiplicity two, not two different numerical values."}
      ],
      [
        {title:"Solve 2x²−7x+3=0",steps:["Factorise: (2x−1)(x−3)=0.","Set each factor to zero: x=1/2 or x=3.","Substitute both into the original expression to check.","If x is a length or a count, decide whether each value is contextually allowed."]},
        {title:"Find k if x²+kx+9=0 has equal roots",steps:["Equal roots require discriminant zero.","k²−4(1)(9)=0, so k²=36.","Therefore k=6 or k=−6.","Check both values produce a perfect-square quadratic: (x+3)² or (x−3)²."]},
        {title:"Rectangle application",steps:["Let width be x and length be x+5.","Given area 84, write x(x+5)=84.","Rearrange to x²+5x−84=0=(x+12)(x−7).","The mathematical roots are −12 and 7; only positive width x=7 is meaningful, so length is 12."]}
      ],
      ["Substituting coefficients before putting the equation in standard form.","Forgetting ± in the quadratic formula.","Dropping a negative root in pure algebra when both are mathematically valid; reject it only with context.","Failing to check whether the derived roots fit the original situation."],
      ["CBSE focus: factorisation, quadratic formula, discriminant and modelling. JEE foundation: parameter conditions, root relations and discriminant inequalities."],
      ["What condition gives equal real roots?","Why can a word problem have two algebraic roots but only one useful answer?","Solve x²−9=0 and explain both roots."],
      ["Discriminant: b²−4ac.","Quadratic: degree-two polynomial equation.","Repeated root: root appearing with multiplicity greater than one."]),
    make("Class 10","Mathematics","Arithmetic Progressions",
      "Master common difference, nth term, finite sums and word problems involving evenly increasing or decreasing quantities.",
      [
        ["Recognise an arithmetic progression","A sequence is an arithmetic progression (AP) if the difference between every pair of consecutive terms is constant. The common difference d can be positive, zero or negative. Write the first few differences to test a pattern; matching only the first two gaps is not enough if the sequence continues irregularly. The nth term is located by counting steps from the first term."],
        ["Nth term derivation","The first term is a, second is a+d, and nth is a+(n−1)d because reaching term n requires n−1 increments. This term formula is useful for finding a specific position, deciding if a number belongs to the progression, or solving for n. If n is not a positive integer, the term does not occur at a valid sequence position."],
        ["Sum of first n terms","Pairing the first and last term gives the same sum as pairing the second and second-last. Each pair sums to a+l, where l is the last term. There are n/2 such pairs conceptually, yielding S_n=n/2(a+l)=n/2[2a+(n−1)d]. The result works for odd n too because the centre term is accounted for half in the pairing argument."],
        ["Model real situations","Savings increasing by a fixed amount each month, evenly spaced seats, or daily exercise targets may form an AP. Identify the first quantity, fixed increment and number of terms. A fixed amount added per period is an AP; a fixed percentage increase usually produces a geometric pattern instead. Use the sum formula for total accumulation and the nth-term formula for a value at one time."]
      ],
      [
        {formula:"aₙ = a+(n−1)d",meaning:"The nth term of an AP.",when:"Find a term, position or common difference.",units:"Term and d share units; n is dimensionless.",trap:"Use n−1 increments, not n."},
        {formula:"Sₙ = n/2[2a+(n−1)d] = n(a+l)/2",meaning:"Sum of the first n terms, where l is the nth/last term.",when:"Find cumulative totals or recover n/a/d from given information.",units:"Sum has the units of a term.",trap:"In n(a+l)/2, l must be the final term of the actual n-term list."},
        {formula:"d = aₙ₊₁−aₙ",meaning:"The fixed difference between adjacent AP terms.",when:"Check AP status or find d.",units:"Same units as terms.",trap:"A decreasing AP has negative d."}
      ],
      [
        {title:"Find the 20th term of 7, 11, 15, …",steps:["a=7 and d=4.","a20=7+(20−1)4=7+76.","The 20th term is 83.","Check the count: term 1 is 7, so only 19 increments have occurred by term 20."]},
        {title:"Sum the first 25 positive multiples of 3",steps:["The AP is 3,6,9,…,75, with a=3, d=3, n=25 and l=75.","S25=25(3+75)/2.","S25=25×39=975.","Alternatively, use 3(1+2+…+25); both methods should match."]},
        {title:"Find how many terms of 5, 8, 11, … give last term 65",steps:["Use a_n=a+(n−1)d: 65=5+(n−1)3.","Subtract 5: 60=3(n−1), so n−1=20.","Therefore n=21.","Check term 21 is 5+20×3=65."]}
      ],
      ["Using n instead of n−1 in the nth-term formula.","Confusing a term with a sum.","Using an AP model for fixed percentage growth.","Forgetting that the number of terms must be an integer."],
      ["CBSE focus: nth term, sum, missing terms and contextual word problems. JEE foundation: conditions involving multiple AP terms and sums."],
      ["How many common differences separate term 1 and term 12?","When is d negative?","How would you model monthly savings that rise by a fixed ₹200 each month?"],
      ["Common difference: constant adjacent-term difference.","Finite sequence: list with a fixed number of terms.","Nth term: term occupying position n."]),
    make("Class 10","Mathematics","Triangles",
      "Use similarity criteria, proportional sides, basic proportionality and Pythagorean reasoning to build proofs and solve length problems.",
      [
        ["Similarity versus congruence","Similar triangles have equal corresponding angles and proportional corresponding sides; their shapes match but their sizes may differ. Congruent triangles have equal corresponding sides and angles, so they are the same size and shape. Establish correspondence explicitly—A matches P, B matches Q, C matches R—before writing a ratio, because an incorrect correspondence produces the wrong proportion."],
        ["Similarity criteria","AA (or AAA) similarity requires two pairs of equal angles. SAS similarity requires an included angle equal and the two surrounding side ratios equal. SSS similarity requires all three corresponding side ratios equal. A proof should state which criterion applies and identify the corresponding vertices. Ratios of areas of similar triangles are the squares of the ratio of corresponding sides."],
        ["Basic Proportionality Theorem","A line parallel to one side of a triangle and intersecting the other two sides divides those sides in the same ratio. The converse says that if a line divides two sides in the same ratio, it is parallel to the third side. The theorem depends on parallelism; do not apply the proportion merely because a diagram looks parallel."],
        ["Pythagorean theorem and proof structure","In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. Identify the right angle first so the hypotenuse is unambiguous. For a proof, list the known conditions, establish similarity or proportionality, then state the consequence. A diagram supports reasoning but does not prove that angles or lengths are equal by appearance."]
      ],
      [
        {formula:"If ΔABC ~ ΔPQR: AB/PQ = BC/QR = AC/PR",meaning:"Corresponding sides of similar triangles are proportional.",when:"Find an unknown side after establishing the correct vertex correspondence.",units:"Ratios are dimensionless.",trap:"Write the order of vertices so corresponding sides line up."},
        {formula:"Area(ΔABC)/Area(ΔPQR) = (AB/PQ)²",meaning:"Areas of similar triangles scale as the square of a corresponding side ratio.",when:"Find area ratio or infer side ratio from area ratio.",units:"Ratio of areas.",trap:"Do not use the linear side ratio as the area ratio."},
        {formula:"For a right triangle: hypotenuse² = leg₁² + leg₂²",meaning:"Pythagorean theorem.",when:"Find a missing side in a right triangle or check whether a triangle is right angled.",units:"All sides in same length unit.",trap:"Hypotenuse is opposite the right angle and is the longest side."}
      ],
      [
        {title:"Find a side using similarity",steps:["Suppose ΔABC ~ ΔDEF and AB/DE=3/5.","If BC=12 and BC corresponds to EF, then 12/EF=3/5.","Cross-multiply: 3EF=60, so EF=20.","State the similarity correspondence before using the ratio."]},
        {title:"Use BPT",steps:["In ΔABC, D lies on AB and E lies on AC with DE parallel to BC.","By BPT, AD/DB=AE/EC.","If AD=4, DB=6 and AE=8, then 4/6=8/EC.","Cross-multiply to obtain 4EC=48, so EC=12."]},
        {title:"Check a right triangle",steps:["Use legs 9 cm and 12 cm.","Hypotenuse squared = 9²+12²=81+144=225.","Take the positive square root: hypotenuse=15 cm.","Check the side ordering: 15 cm is longer than either leg."]}
      ],
      ["Assuming triangles are similar without citing a criterion.","Pairing non-corresponding sides in proportions.","Using the Pythagorean theorem without a right angle.","Confusing ratio of areas with ratio of sides."],
      ["CBSE focus: theorem proofs, BPT, similarity, side lengths and standard applications. JEE foundation: similarity chains and geometric inequalities."],
      ["What is the difference between similarity and congruence?","State the converse of BPT.","Why must correspondence be written before a ratio?"],
      ["Corresponding sides: sides occupying matching positions in two triangles.","Similarity: equal shape with proportional lengths.","Hypotenuse: side opposite the right angle."]),
    make("Class 10","Mathematics","Coordinate Geometry",
      "Use the Cartesian plane to compute distance, midpoint and section ratios, and solve geometry questions using coordinates.",
      [
        ["Coordinates and distance","A point is represented by (x,y), where x is the horizontal coordinate and y the vertical coordinate. The horizontal and vertical separations of A(x₁,y₁) and B(x₂,y₂) are x₂−x₁ and y₂−y₁. These form the legs of a right triangle, so the distance formula comes directly from Pythagoras. The final distance is non-negative regardless of which point is named first."],
        ["Section formula","If a point P divides AB internally in the ratio AP:PB=m:n, its coordinate is a weighted average: P=((n x₁+m x₂)/(m+n), (n y₁+m y₂)/(m+n)). The weight of A uses the opposite segment n, and the weight of B uses m. Memorise this opposite-weight pattern and test the formula with a midpoint where m=n."],
        ["Midpoint and coordinate interpretation","The midpoint is the average of the endpoints' x-coordinates and the average of their y-coordinates. A point with equal x-coordinates lies on a vertical line; equal y-coordinates means a horizontal line. To test whether three points are collinear, compare slopes when defined or use area/determinant methods appropriate to the syllabus."],
        ["Choose coordinates to simplify geometry","Coordinate methods can verify lengths and ratios or prove a result, but arithmetic should serve the geometry. Label points carefully, use parentheses to avoid sign mistakes, and keep exact values such as square roots until the last step. If a point divides a segment externally, the section formula uses a difference in the denominator and should be applied only when the external-division convention is clearly stated."]
      ],
      [
        {formula:"AB = √[(x₂−x₁)²+(y₂−y₁)²]",meaning:"Distance between two points.",when:"Find a side length or test equal distances.",units:"Length units.",trap:"Subtract coordinates first; the squares remove sign."},
        {formula:"Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)",meaning:"Point halfway between two endpoints.",when:"Find a centre point or prove diagonals bisect one another.",units:"Coordinate units.",trap:"Average x with x and y with y—not crosswise."},
        {formula:"Internal section m:n: ((n x₁+m x₂)/(m+n), (n y₁+m y₂)/(m+n))",meaning:"Coordinates of the internal division point P when AP:PB=m:n.",when:"Find a point dividing a segment in a stated ratio.",units:"Coordinate units.",trap:"Weights are opposite to the corresponding segment lengths."}
      ],
      [
        {title:"Distance between (−2,3) and (4,−5)",steps:["Δx=4−(−2)=6 and Δy=−5−3=−8.","Distance=√(6²+(−8)²)=√100.","Distance=10 units.","Reversing point order changes signs of differences but not the distance."]},
        {title:"Point dividing a segment internally",steps:["A=(1,2), B=(11,7), and AP:PB=2:3.","P=((3×1+2×11)/5,(3×2+2×7)/5).","P=(25/5,20/5)=(5,4).","Check that P is closer to A than to B because the ratio AP:PB is 2:3."]},
        {title:"Check a midpoint",steps:["Take endpoints A=(−4,6) and B=(8,−2).","Midpoint=((−4+8)/2,(6−2)/2).","M=(2,2).","The displacement from A to M equals the displacement from M to B: (6,−4)."]}
      ],
      ["Swapping m and n in the section formula.","Forgetting negative signs inside coordinate differences.","Approximating radicals too early and introducing avoidable errors.","Using midpoint formulas for a point that divides the segment in another ratio."],
      ["CBSE focus: distance and section formula; interpret coordinates. JEE foundation: collinearity, locus and coordinate geometry used with algebra."],
      ["Why does the distance formula use squares?","What ratio is represented by the midpoint?","Which weight is placed on x₁ in the internal section formula?"],
      ["Cartesian coordinates: ordered pair locating a point on perpendicular axes.","Midpoint: point equidistant from the two endpoints of a segment.","Internal division: point lying between the two endpoints."]),
    make("Class 10","Mathematics","Introduction to Trigonometry",
      "Build trigonometric ratios from a right triangle, derive key identities, and learn exact values and complementary-angle relationships.",
      [
        ["Ratios in a right triangle","For an acute angle θ in a right triangle, sine is opposite/hypotenuse, cosine is adjacent/hypotenuse, and tangent is opposite/adjacent. The reciprocal ratios are cosecant, secant and cotangent. Which side is opposite or adjacent depends on the chosen angle, not on the orientation of the picture. The hypotenuse always lies opposite the right angle."],
        ["Why ratios depend only on the angle","Right triangles sharing an acute angle are similar, so corresponding side lengths scale by the same factor. Dividing side lengths cancels that factor, meaning the trig ratios depend on θ and not on the triangle's absolute size. This is why exact ratios can be used in triangles of different dimensions and why measurements should be made relative to the same reference angle."],
        ["Fundamental identities","Since opposite²+adjacent²=hypotenuse², dividing by hypotenuse² gives sin²θ+cos²θ=1. Dividing by cos²θ gives 1+tan²θ=sec²θ, where cosθ≠0; dividing by sin²θ gives 1+cot²θ=cosec²θ, where sinθ≠0. These conditions matter: algebraic manipulation must not introduce values where the original ratio is undefined."],
        ["Exact values and complementary angles","The standard 30°,45°,60° values come from special right triangles: a 30-60-90 triangle has side ratio 1:√3:2 and a 45-45-90 triangle has side ratio 1:1:√2. Complementary-angle identities include sin(90°−θ)=cosθ and tan(90°−θ)=cotθ. Learn values by deriving them once, rather than memorising an unstructured table."]
      ],
      [
        {formula:"sinθ=opposite/hypotenuse; cosθ=adjacent/hypotenuse; tanθ=opposite/adjacent",meaning:"Primary ratios for an acute angle in a right triangle.",when:"Relate a side to another side using the chosen acute angle.",units:"Ratios are dimensionless.",trap:"Opposite and adjacent change when the reference angle changes."},
        {formula:"sin²θ+cos²θ=1",meaning:"Fundamental identity derived from Pythagoras.",when:"Convert between sine and cosine or simplify expressions.",units:"Dimensionless.",trap:"sin²θ means (sinθ)², not sin(θ²)."},
        {formula:"1+tan²θ=sec²θ; 1+cot²θ=cosec²θ",meaning:"Derived identities, valid where the ratios are defined.",when:"Simplify expressions involving tan/sec or cot/cosec.",units:"Dimensionless.",trap:"Check denominator restrictions before division."}
      ],
      [
        {title:"Find ratios from a 5–12–13 triangle",steps:["For angle θ opposite the side 5, the opposite side is 5, adjacent is 12, and hypotenuse is 13.","sinθ=5/13; cosθ=12/13; tanθ=5/12.","Reciprocals: cosecθ=13/5, secθ=13/12, cotθ=12/5.","Check sin²θ+cos²θ=(25+144)/169=1."]},
        {title:"Simplify (1−sin²θ)/cos²θ",steps:["Use 1−sin²θ=cos²θ from the fundamental identity.","The expression becomes cos²θ/cos²θ.","It equals 1 wherever cosθ≠0, the domain of the original expression.","State the restriction; cancellation does not define an original 0/0 value." ]},
        {title:"Exact-value calculation",steps:["Use tan30°=1/√3 and sin60°=√3/2.","Compute tan30°×sin60°=(1/√3)(√3/2).","The product is 1/2.","Rationalisation is optional unless requested; keep exact radical values before simplifying."]}
      ],
      ["Choosing the wrong opposite side after changing angle.","Treating identities as valid where original denominators are zero.","Confusing reciprocal functions with inverse functions.","Relying on a memorised table without checking the special-triangle ratio."],
      ["CBSE focus: exact ratios, identities and simplification. JEE foundation: identity manipulation and domain checking."],
      ["How is secθ related to cosθ?","Derive sin²θ+cos²θ=1 in one sentence.","What is tan(90°−θ)?","Why are trig ratios independent of triangle size?"],
      ["Hypotenuse: longest side of a right triangle.","Complementary angles: two angles adding to 90°.","Reciprocal ratio: multiplicative inverse of a trigonometric ratio."]),
    make("Class 10","Mathematics","Some Applications of Trigonometry",
      "Apply angle of elevation/depression and right-triangle ratios to heights and distances using diagrams, assumptions and consistent reference levels.",
      [
        ["Translate the words into a diagram","Angle of elevation is measured upward from the observer's horizontal line; angle of depression is measured downward from the horizontal at the observer. The horizontal line and the vertical object form a right angle, allowing sine, cosine or tangent to link height and horizontal distance. Label the observer, object, known distance and the specific angle before writing an equation."],
        ["Select the efficient ratio","If the unknown is vertical height and the known distance is horizontal, tangent is usually most direct: tanθ=height/horizontal distance, after adjusting for any observer eye height. If the slant distance is known, sine or cosine may be appropriate. Use the ratio that connects known and unknown sides and avoid adding variables that the problem does not need."],
        ["Account for the observation height","If a person observes from a point above ground, the vertical difference to the top is not necessarily the full object height. Let h be the building height and e the observer's eye height; then tanθ=(h−e)/d, so h=d tanθ+e. When the problem says measurements are made from ground level, e may be zero; otherwise read the stated reference carefully."],
        ["Multiple observations and validation","For two points on the same horizontal line, form one tangent relation from each position. The nearer point typically has the larger angle of elevation for a fixed height. Solve the equations, then check whether the result is sensible: height must be positive, the angle and distance relationship should match the diagram, and units must remain consistent."]
      ],
      [
        {formula:"tanθ = vertical height difference / horizontal distance",meaning:"Links height and distance when the angle of elevation is measured from horizontal.",when:"Known horizontal distance, unknown height, or vice versa.",units:"Ratio is dimensionless; lengths use the same unit.",trap:"Add observer eye height if the unknown is measured from the ground."},
        {formula:"sinθ = vertical difference / line-of-sight distance",meaning:"Links the opposite side to the slant distance.",when:"The measured distance is along the line of sight.",units:"Ratio is dimensionless.",trap:"Do not use the horizontal distance as the hypotenuse."}
      ],
      [
        {title:"Height of a tower",steps:["A point 30 m from a tower sees its top at 45° elevation; eye height is negligible.","Let tower height be h. tan45°=h/30.","Since tan45°=1, h=30 m.","Assumption: the ground between observer and tower is horizontal and the tower is vertical."]},
        {title:"Observer above ground",steps:["A person with eye height 1.6 m stands 20 m from a building and sees its top at 60° elevation.","Height above eye level =20 tan60°=20√3 m.","Total building height=20√3+1.6≈36.24 m.","The 1.6 m must be added because the trigonometric triangle begins at eye level."]},
        {title:"Check two viewing points",steps:["A tower is observed at angle θ from distance d and angle φ from a point closer by x.","Write tanθ=h/d and tanφ=h/(d−x).","Equate h=d tanθ=(d−x)tanφ and solve the resulting equation for d or h.","Sketch and verify d>x and that φ>θ for 0<θ,φ<90°."]}
      ],
      ["Drawing the angle from the vertical instead of horizontal.","Using slant distance as horizontal distance.","Forgetting eye or instrument height.","Keeping an algebraic solution that contradicts the physical setup."],
      ["CBSE focus: diagram, tangent model, heights and distances. Show the ratio and assumptions explicitly; the diagram alone earns little explanation credit."],
      ["What exactly is the angle of depression?","When should eye height be added?","Why is tangent efficient when horizontal distance and height are involved?"],
      ["Angle of elevation: angle between horizontal and upward line of sight.","Line of sight: straight segment from observer to viewed point.","Horizontal distance: distance measured parallel to level ground."]),
    make("Class 10","Mathematics","Circles",
      "Understand tangents, radii and perpendicularity, and solve problems involving equal tangent segments from an external point.",
      [
        ["Tangent and radius","A tangent touches a circle at exactly one point; the radius drawn to the point of contact is perpendicular to the tangent. The perpendicular relationship is both a theorem and a practical way to make a right triangle from a tangent length. A secant cuts the circle at two points, so it is different from a tangent even if the lines appear nearly identical in a sketch."],
        ["Number of tangents from a point","A point inside a circle has no tangent; a point on the circle has one; an external point has two tangents. The two tangent segments from the same external point are equal. This follows from congruent right triangles formed by radii to the contact points and the common segment from the centre to the external point."],
        ["Use Pythagoras on the radius triangle","If O is the centre, P is external, and PT is tangent at T, then OT⊥PT. Thus OP²=OT²+PT², so tangent length PT=√(OP²−r²), where r is the radius. This equation applies only if OP>r; a point at or within the circle cannot produce a positive tangent length under this construction."],
        ["Proof and construction habits","For a theorem proof, name the circle, centre, contact points and external point. Draw both radii and both tangent segments, then identify right angles and equal sides. To prove tangent lengths equal, compare ΔOPT and ΔOPU: radii are equal, OP is common, and both triangles are right-angled, so the corresponding tangent segments are equal."]
      ],
      [
        {formula:"Radius ⟂ tangent at contact point",meaning:"The radius ending at the point of tangency forms 90° with the tangent.",when:"Create a right triangle or prove a line is perpendicular.",units:"Angle in degrees.",trap:"Perpendicularity holds at the contact point, not at any random point on the tangent."},
        {formula:"PT = PU from the same external point P",meaning:"Tangents drawn from the same external point have equal lengths.",when:"Find an unknown tangent or prove segment equality.",units:"Length units.",trap:"Only tangents from the same external point are guaranteed equal."},
        {formula:"PT = √(OP²−r²)",meaning:"Tangent length from centre distance OP and radius r.",when:"Centre-to-external-point distance is known.",units:"Same length unit.",trap:"Requires OP>r for an external point."}
      ],
      [
        {title:"Find a tangent length",steps:["Circle radius r=5 cm; external point P is 13 cm from centre O.","At tangent point T, OT⊥PT, so triangle OPT is right-angled.","PT²=OP²−OT²=13²−5²=169−25=144.","PT=12 cm."]},
        {title:"Use equal tangents",steps:["From P, tangents touch at A and B; PA=3x+2 and PB=5x−8.","Set lengths equal: 3x+2=5x−8.","Rearrange: 10=2x, so x=5.","Then PA=17 and PB=17, confirming the equality."]},
        {title:"Proof outline for equal tangents",steps:["Join centre O to contact points A and B and to external point P.","OA=OB because both are radii; OP is common; ∠OAP=∠OBP=90°.","Right triangles OAP and OBP are congruent by hypotenuse–side.","Therefore PA=PB by corresponding parts of congruent triangles."]}
      ],
      ["Assuming the tangent is perpendicular to a radius at every point on the line.","Using equal-tangent theorem for points not sharing an external endpoint.","Using OP²+ r² instead of OP²−r².","Omitting the right-angle fact in a proof."],
      ["CBSE focus: tangent theorem, equal tangents and proof. JEE foundation: radical axis/power of a point later generalises related secant-tangent relationships."],
      ["How many tangents can be drawn from a point on the circle?","What right triangle produces the tangent-length formula?","Which sides make the two external-point triangles congruent?"],
      ["Tangent: line touching a circle at one point.","Contact point: point where tangent meets the circle.","Radius: segment from centre to a point on the circumference."]),
    make("Class 10","Mathematics","Areas Related to Circles",
      "Calculate areas and arc lengths of sectors and segments, and convert between central angle, circumference and proportional area.",
      [
        ["Circumference and area","For radius r, circumference is 2πr and area is πr². Circumference scales linearly with radius, while area scales with the square of radius. If radius doubles, circumference doubles but area becomes four times as large. Use the radius—not diameter—in these formulae, unless you explicitly replace r by d/2."],
        ["Sector as a fraction of a circle","A sector subtending angle θ at the centre occupies θ/360 of the full circle when θ is in degrees. Its arc length is the same fraction of the total circumference, and its area is the same fraction of πr². The proportion method is a robust derivation: compare the sector's central angle with the full angle 360°."],
        ["Area of a segment","A segment is the region bounded by a chord and its corresponding arc. For the minor segment, area = area of sector − area of triangle formed by the two radii and the chord. If the angle is obtuse or the segment is major, be explicit about which region is requested; the major segment is the whole circle minus the minor segment."],
        ["Composite figures and shaded regions","Many questions combine semicircles, sectors, triangles or rectangles. Break the drawing into familiar pieces, calculate each area with the same units, and add or subtract according to the shading. For a ring (annulus), subtract the inner disk from the outer disk: π(R²−r²). Keep π exact until the final rounding unless the question prescribes a value."]
      ],
      [
        {formula:"Circumference = 2πr; area = πr²",meaning:"Perimeter and area of a full circle.",when:"Start for all sector, ring and circular-region problems.",units:"Length and square units, respectively.",trap:"Do not use the area formula for perimeter."},
        {formula:"Arc length = (θ/360°) × 2πr",meaning:"Proportional circumference of an arc.",when:"Central angle θ is in degrees.",units:"Length units.",trap:"Use radians only with the alternative formula s=rθ."},
        {formula:"Sector area = (θ/360°) × πr²",meaning:"Fraction of circle area corresponding to angle θ.",when:"Find area swept by two radii and an arc.",units:"Square units.",trap:"θ/360 is a fraction, not a percentage unless divided by 100 accordingly."},
        {formula:"Minor segment area = sector area − triangle area",meaning:"Removes the triangle from the sector to leave the chord-bounded region.",when:"Find circular-segment area.",units:"Square units.",trap:"Check whether the required segment is minor or major."}
      ],
      [
        {title:"Arc length for radius 14 cm and angle 90°",steps:["Arc fraction=90/360=1/4.","Full circumference=2π(14)=28π cm.","Arc length=7π cm, approximately 22 cm.","The angle is one quarter of a full revolution, so the arc is one quarter of the circumference."]},
        {title:"Sector area for radius 6 cm and angle 120°",steps:["Sector fraction=120/360=1/3.","Full area=π(6²)=36π cm².","Sector area=12π cm².","Units are square centimetres because this is area."]},
        {title:"Area of an annulus",steps:["Outer radius R=10 cm and inner radius r=6 cm.","Area=πR²−πr²=π(100−36).","Result=64π cm².","This difference avoids computing the curved boundary lengths because only area is requested."]}
      ],
      ["Using diameter as r.","Mixing angle units in arc formulae.","Adding a triangular part when the shaded segment requires subtraction.","Rounding π and intermediate values too early."],
      ["CBSE focus: sectors, arcs, segments and composite shaded figures. Write units for every area/length and identify minor vs major regions."],
      ["How does area change if radius triples?","Why is a 90° sector one quarter of the circle?","What must be subtracted from sector area to obtain a minor segment?"],
      ["Sector: region bounded by two radii and an arc.","Segment: region bounded by a chord and an arc.","Annulus: region between two concentric circles."]),
    make("Class 10","Mathematics","Surface Areas and Volumes",
      "Choose the correct solid formula, handle combined solids and cavities, and keep exposed surfaces separate from joined/internal surfaces.",
      [
        ["Recognise the solid and its dimensions","A prism or cylinder has uniform cross-section; a pyramid or cone tapers to a vertex; a sphere has no flat faces. Before calculating, mark radius, diameter, perpendicular height, slant height and any shared joining face. A cone's slant height is not its vertical height. Use l²=r²+h² for a right circular cone when the geometry supports it."],
        ["Surface area versus volume","Surface area measures the exposed boundary and uses square units; volume measures space occupied and uses cubic units. Total surface area includes all faces/surfaces of an isolated solid. In combined solids, joined faces are usually not exposed and should not be counted. Curved surface area excludes circular end faces for cylinders/cones."],
        ["Combined solids and cavities","For a toy formed from a hemisphere and cone, volume is the sum if the pieces do not overlap, but external area includes only visible surfaces. For a hollow cylinder, subtract inner volume from outer volume, and consider both inner and outer curved surfaces plus open rims if the question asks total exposed surface. Draw the cross-section and mark which boundaries touch or remain open."],
        ["Unit conversion and reasonableness","Convert all lengths to a common unit before applying formulas. If a radius is doubled while height stays fixed, cylinder volume becomes four times as large; it is not doubled. After calculation, check dimensions: an area cannot have cm³ and a volume cannot have cm². Compare magnitude against the dimensions—for example, a small object should not have a volume exceeding a huge bounding box."]
      ],
      [
        {formula:"Cylinder: CSA=2πrh; TSA=2πr(h+r); V=πr²h",meaning:"Curved area, total area and volume.",when:"Right circular cylinder.",units:"Area in units², volume in units³.",trap:"CSA omits the two circular ends."},
        {formula:"Cone: l=√(r²+h²); CSA=πrl; TSA=πr(l+r); V=⅓πr²h",meaning:"Cone geometry relates slant height to perpendicular height.",when:"Right circular cone.",units:"Use same length units for r,h,l.",trap:"Volume uses vertical h, while curved area uses slant l."},
        {formula:"Sphere: area=4πr²; volume=4/3πr³",meaning:"Full sphere formulas.",when:"A sphere or spherical portion is given.",units:"Area and volume have different powers of length.",trap:"A hemisphere has half the sphere's volume but its total surface area includes the flat circle."},
        {formula:"Combined volume = sum of non-overlapping pieces; cavity volume = outer − inner",meaning:"Build from simpler solids.",when:"Composite objects or hollow solids.",units:"Cubic units.",trap:"Surface area is not automatically the sum of each component's total area."}
      ],
      [
        {title:"Cone slant height",steps:["Radius r=5 cm and perpendicular height h=12 cm.","l=√(r²+h²)=√(25+144)=13 cm.","CSA=πrl=65π cm².","If volume were requested instead, use h=12 cm: V=⅓π(25)(12)=100π cm³."]},
        {title:"Cylinder joined to a hemisphere",steps:["Let both have radius r and cylinder height h; the hemisphere is attached to one circular end.","Volume is πr²h+(2/3)πr³.","External area includes cylinder curved area 2πrh, the open circular end πr², and hemisphere curved area 2πr².","It excludes the joined circular face; external area=2πrh+3πr²."]},
        {title:"Hollow cylinder material volume",steps:["Outer radius R, inner radius r, and length h.","Material volume=πR²h−πr²h=πh(R²−r²).","Substitute consistent lengths and calculate.","If surface area is requested, separately identify outer curved face, inner curved face and the ring-shaped ends."]}
      ],
      ["Mixing slant height with vertical height.","Adding the hidden joined faces to the exposed area.","Subtracting diameters instead of squared radii for hollow volumes.","Writing area in cubic units or volume in square units."],
      ["CBSE focus: cone/cylinder/sphere formula selection and combined solids. JEE foundation: geometry-to-algebra, scaling laws and multi-step constraints."],
      ["Which dimensions appear in cone CSA and volume respectively?","Why is total surface area of a combined solid not usually the sum of component TSAs?","How does sphere volume change when radius doubles?"],
      ["CSA: curved surface area.","TSA: total surface area.","Slant height: distance along a cone's sloping side, not its vertical altitude."]),
    make("Class 10","Mathematics","Statistics",
      "Calculate mean, median and mode for grouped frequency distributions, using class marks, cumulative frequencies and the assumptions behind interpolation.",
      [
        ["Organise the distribution","A frequency table lists classes and the number of observations in each class. Ensure classes do not overlap and cover the data range. The class mark x_i is the midpoint of a class interval, used as a representative value for grouped calculations. Frequency f_i counts observations; total frequency N=Σf_i. Cumulative frequency adds frequencies successively and is needed for median location."],
        ["Grouped mean","The direct mean is Σf_i x_i / Σf_i. When numbers are large, the assumed-mean method subtracts a convenient value a: mean=a+Σf_i d_i/N where d_i=x_i−a. The step-deviation method uses u_i=(x_i−a)/h when class widths share a common h, giving mean=a+hΣf_i u_i/N. All three represent the same weighted average."],
        ["Median from cumulative frequency","The median divides ordered observations into lower and upper halves. In grouped data, identify the median class as the first class whose cumulative frequency reaches or exceeds N/2. The grouped median formula estimates where the middle observation lies inside that class, assuming observations are spread sufficiently regularly through its interval. Identify lower boundary, preceding cumulative frequency, class frequency and class width carefully."],
        ["Mode and interpretation","Mode is the most frequent value; for grouped data the modal class has the highest frequency. The grouped mode formula uses the modal class and the frequencies of adjacent classes to estimate the mode. Mean uses every frequency, median depends on order, and mode identifies a frequent class; they answer different questions and can differ substantially for skewed data."]
      ],
      [
        {formula:"x̄ = Σfᵢxᵢ / N, where N=Σfᵢ",meaning:"Frequency-weighted mean using class marks xᵢ.",when:"Grouped mean.",units:"Same units as the observations.",trap:"Multiply each class mark by its frequency before summing."},
        {formula:"Median = l + [(N/2−cf)/f]h",meaning:"Grouped-data median estimate.",when:"l is lower boundary of median class; cf cumulative frequency before it; f its frequency; h its width.",units:"Same units as the data.",trap:"Use preceding cumulative frequency, not the median class cumulative frequency."},
        {formula:"Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)]h",meaning:"Grouped-data mode estimate from modal class and neighbouring frequencies.",when:"f₁ modal class frequency, f₀ previous class frequency and f₂ next class frequency.",units:"Same units as data.",trap:"Make sure f₁ is the largest relevant frequency."}
      ],
      [
        {title:"Grouped mean by direct method",steps:["Suppose class marks are 10,20,30 and frequencies are 2,5,3.","N=2+5+3=10.","Σfx=2(10)+5(20)+3(30)=200.","Mean=200/10=20."]},
        {title:"Find the median class",steps:["Suppose total frequency N=50, and cumulative frequencies are 8,19,34,44,50.","N/2=25.","The first cumulative frequency at least 25 is 34, so the third class is the median class.","Then substitute that class's lower boundary, previous cumulative frequency, class frequency and width into the formula."]},
        {title:"Choose a measure",steps:["If the task asks for average overall value, mean is a natural choice but can be pulled by extreme values.","If ordered data are skewed or include extremes, median can better represent a typical central observation.","If the task asks the most common category or size, use mode.","State what the measure means in the original context, not just the numerical value."]}
      ],
      ["Using class limits instead of continuous class boundaries where conversion is required.","Forgetting to divide Σfx by total frequency N.","Choosing the class with middle frequency instead of the median class.","Confusing mode with median."],
      ["CBSE focus: grouped mean, median, mode and interpretation. Show the table columns clearly: class mark, frequency, product or cumulative frequency."],
      ["Why is class mark used for grouped mean?","How is the median class found?","Which measure is least affected by a very large outlier?"],
      ["Class mark: midpoint of a class interval.","Cumulative frequency: running total of frequencies.","Modal class: class interval with greatest frequency."]),
    make("Class 10","Mathematics","Probability",
      "Connect probability to equally likely outcomes, sample spaces, event complements and experimental frequencies.",
      [
        ["Sample space and event","The sample space S is the set of all possible outcomes of an experiment. An event E is a subset of S. For a fair die, S={1,2,3,4,5,6}; the event 'even number' is {2,4,6}. List outcomes systematically to avoid missing or double-counting results, especially when two objects are selected or tossed."],
        ["Classical probability","When all outcomes are equally likely, P(E)=number of favourable outcomes / total number of outcomes. Probabilities lie between 0 and 1. Probability 0 means impossible under the model and probability 1 means certain. The complement E̅ contains outcomes that are not in E, so P(E̅)=1−P(E). This is often faster than counting the event itself."],
        ["Fairness and independence","A fair die gives each face equal probability; a fair coin gives heads and tails equal probability. Do not assume outcomes are equally likely unless the problem states or implies a fair symmetric model. For successive independent trials, the result of an earlier trial does not change the next trial's probabilities. Without replacement, however, the composition of the remaining objects changes and probabilities are conditional."],
        ["Experimental versus theoretical probability","Experimental probability is relative frequency: successes divided by trials observed. As repetitions grow, relative frequencies often stabilise around a theoretical probability, but a small sample may differ noticeably. If a question gives experimental results, use those data rather than replacing them with an ideal value. Keep the denominator equal to the number of trials relevant to the stated event."]
      ],
      [
        {formula:"P(E)=n(E)/n(S) for equally likely outcomes",meaning:"Classical probability.",when:"Count outcomes and the model makes them equally likely.",units:"Dimensionless number from 0 to 1.",trap:"Favourable outcomes must be a subset of the complete sample space."},
        {formula:"P(E̅)=1−P(E)",meaning:"Complement rule.",when:"It is easier to count outcomes where the event does not happen.",units:"Probability.",trap:"The complement is relative to the full sample space."},
        {formula:"Experimental probability = observed successes / number of relevant trials",meaning:"Observed relative frequency.",when:"Data from repeated experiments are provided.",units:"Dimensionless proportion.",trap:"Do not confuse attempts with successful outcomes."}
      ],
      [
        {title:"Probability of a prime number on a fair die",steps:["S={1,2,3,4,5,6}; prime outcomes are {2,3,5}.","There are 3 favourable outcomes and 6 equally likely total outcomes.","P(prime)=3/6=1/2.","The result is a probability, not a guarantee that one of the next two rolls is prime."]},
        {title:"Use the complement",steps:["A fair coin is tossed three times. Find probability of at least one head.","The complement is no heads, i.e. TTT.","P(TTT)=(1/2)^3=1/8 under independent fair tosses.","Therefore P(at least one head)=1−1/8=7/8."]},
        {title:"Experimental probability",steps:["A spinner lands on red 18 times in 60 trials.","Experimental P(red)=18/60=3/10=0.3.","This describes the observed relative frequency in these trials.","It estimates, but does not prove, the spinner's exact theoretical probability."]}
      ],
      ["Listing outcomes that are not equally likely and using simple favourable/total counting anyway.","Forgetting the complement is 1−P(E).","Treating experimental probability as exact theoretical probability.","Assuming independence for draws without replacement."],
      ["CBSE focus: sample space, simple events, complement and relative frequency. For JEE-level probability, use a full systematic outcome tree and verify independence."],
      ["Why must outcomes be equally likely for the simple counting formula?","What event is complementary to 'at least one head'?","Can observed relative frequency differ from theoretical probability?"],
      ["Sample space: all possible outcomes in the stated experiment.","Event: subset of a sample space.","Complement: event that the original event does not occur."])
  ];
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(notes);
})();
