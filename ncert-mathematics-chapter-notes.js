/* Individual, original CBSE/NCERT-aligned Mathematics chapter guides.
   Each entry contains topic explanations, formula cards, worked methods, common traps, and guided practice.
   Check the current official curriculum for annual exclusions/revisions; these are study notes, not a substitute for the prescribed book. */
(function () {
  "use strict";
  const practice = (question, answer, explanation) => ({question, answer, explanation});
  const formula = (formula, meaning, when, units, trap) => ({formula, meaning, when, units, trap});
  const chapter = (level, title, intro, sections, formulas, workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions=[]) => ({
    level, subject:"Mathematics", chapter:title, intro, depth:"detailed",
    sections:sections.map(([heading,body])=>({heading,body})),
    formulas:formulas.map(x=>x.formula), formulaCheatSheet:formulas,
    workedExamples, commonMistakes, examFocus, recall, glossary, practiceQuestions,
    points:sections.map(([heading,body])=>heading+": "+body.split(/[.!?]/)[0]+"."),
    example:workedExamples.length?workedExamples[0].steps.join(" "):"Read the worked methods and check every condition before applying a result.",
    sourceNote:"Original explanatory notes aligned with common NCERT/CBSE Mathematics concepts. The current CBSE curriculum and prescribed NCERT edition determine the final assessable scope."
  });
  const all = [
  chapter("Class 10","Real Numbers",
    "Prime factorisation, Euclid's division algorithm, HCF/LCM, irrationality and decimal expansion. Start by identifying whether a question asks for a proof, a factorisation, or a numerical HCF/LCM.",
    [
      ["Euclid's division lemma and algorithm","For positive integers a and b, write a=bq+r with 0<=r<b. The quotient q and remainder r are integers. Repeating the division on the previous divisor and remainder eventually produces remainder zero; the last non-zero remainder is the HCF. The key reason this works is that the common divisors of a and b are exactly the common divisors of b and a-bq, so replacing (a,b) with (b,r) preserves the HCF. Use this reasoning in proofs instead of merely listing divisions."],
      ["Prime factorisation, HCF and LCM","Every integer greater than 1 has a unique prime factorisation apart from the order of factors. To compute HCF from prime powers, take only primes common to both numbers with the smaller exponent. For LCM, include every prime that occurs with the larger exponent. For two positive integers, HCF times LCM equals the product of the integers; this relationship is a useful check, not a replacement for showing the requested factorisation."],
      ["Irrational numbers and decimal expansions","A rational number can be expressed as p/q with integers p,q and q not zero. After reducing the fraction to lowest terms, its decimal expansion terminates exactly when the denominator has no prime factors other than 2 and 5. Otherwise its decimal expansion is non-terminating recurring. To prove irrationality, assume the number is rational, write it as a reduced fraction, and show the assumption forces a common factor in numerator and denominator, contradicting that the fraction was reduced."]
    ],
    [
      formula("a=bq+r, 0<=r<b","Division algorithm for integers; r is the remainder.","Begin Euclid's algorithm or a divisibility proof.","a,b,q,r are integers; b>0.","Remainder must be smaller than the positive divisor."),
      formula("HCF(a,b) x LCM(a,b)=a x b","Product relation for two positive integers.","Check a calculated HCF/LCM pair.","All quantities are positive integers.","Do not generalise this formula to arbitrary rational inputs without a defined convention."),
      formula("Reduced denominator = 2^m 5^n","A rational number terminates in decimal form iff its reduced denominator has no prime factor except 2 or 5.","Classify a rational decimal expansion.","m,n are non-negative integers.","Reduce the fraction before examining the denominator.")
    ],
    [
      {title:"Find HCF(135,225) using Euclid's algorithm",steps:["225=135(1)+90.","135=90(1)+45.","90=45(2)+0; the last non-zero remainder is 45, so HCF=45.","If LCM is required, use 135x225/45=675." ]},
      {title:"Test decimal termination",steps:["Reduce 77/210 by its HCF 7 to obtain 11/30.","Factor the denominator: 30=2x3x5.","The factor 3 remains in the reduced denominator, so the decimal is non-terminating recurring."]
    }],
    ["Testing decimal termination before reducing the fraction.","Using the last remainder instead of the last non-zero remainder as HCF.","Forgetting to explain why each Euclidean replacement preserves the HCF.","In an irrationality proof, not using the assumption that p/q is in lowest terms."],
    ["CBSE often asks a Euclid-algorithm computation, an HCF/LCM application, decimal termination and a contradiction proof for irrationality. Show the divisions and justify the final conclusion."],
    ["Why does the Euclidean algorithm preserve the HCF?","Can 13/160 terminate? Explain using prime factors.","What contradiction is obtained in a standard irrationality proof?"],
    ["HCF: greatest positive integer dividing each of the given integers.","Prime factorisation: expression as a product of primes with exponents.","Rational number: number expressible as p/q with integers p,q and q non-zero."],
    [practice("Find the HCF of 867 and 255.","51.","867=255x3+102; 255=102x2+51; 102=51x1+0, so the last non-zero remainder is 51."),practice("Will 43/500 have a terminating decimal?","Yes.","500=2^2x5^3 and the fraction is already reduced, so the denominator contains only 2 and 5.")]),
  chapter("Class 10","Polynomials",
    "Zeros, factors, coefficient-zero relationships and graph interpretation for linear, quadratic and simple higher-degree polynomials.",
    [
      ["Meaning of a zero and factor theorem","A number alpha is a zero of p(x) when p(alpha)=0. The factor theorem says x-alpha is a factor exactly when p(alpha)=0. Thus, solving p(x)=0, finding zeros and factorising a polynomial are connected versions of the same task. A zero is an input value, not the output value zero itself; that distinction matters when interpreting graphs and statements."],
      ["Quadratic coefficient relationships","For ax^2+bx+c with a non-zero, if zeros are alpha and beta, then alpha+beta=-b/a and alpha beta=c/a. These relationships let you verify proposed zeros or build a quadratic from its roots without expanding a graph. If you know the roots and the leading coefficient, p(x)=a(x-alpha)(x-beta). The signs in the sum and product should be checked carefully."],
      ["Graphs and multiplicity","The graph of y=p(x) crosses or touches the x-axis where p(x)=0. A simple real zero usually corresponds to crossing; an even-multiplicity zero often touches and turns. For a quadratic, the discriminant tells whether the graph has two distinct real zeros, one repeated real zero or no real zeros. A graph may intersect the x-axis multiple times only up to the polynomial's degree."]
    ],
    [
      formula("p(alpha)=0 iff (x-alpha) is a factor","Factor theorem linking roots and factors.","Check a proposed factor or zero.","Polynomial coefficients can be real or rational as specified.","A zero alpha means the input; do not confuse it with p(0)."),
      formula("alpha+beta=-b/a; alpha beta=c/a","Sum/product of zeros of ax^2+bx+c.","Find roots' symmetric combinations or construct a quadratic.","a!=0.","Use the coefficient of x with a negative sign in the sum."),
      formula("D=b^2-4ac","Discriminant classifies roots of a real-coefficient quadratic.","Determine the number/type of real zeros without solving exactly.","D has squared coefficient units if coefficients are dimensional.","D=0 means a repeated real root, not no real roots.")
    ],
    [
      {title:"Build a quadratic from zeros 2 and -3",steps:["For roots alpha=2 and beta=-3, write (x-2)(x+3).","Expand to x^2+x-6.","Any non-zero constant multiple has the same zeros; the monic polynomial is x^2+x-6.","Check sum=-1 and product=-6 against the coefficients."]},
      {title:"Find zeros from coefficient relationships",steps:["For 2x^2-7x+3, alpha+beta=7/2 and alpha beta=3/2.","Factor the polynomial as (2x-1)(x-3).","The zeros are 1/2 and 3; their sum and product match the coefficient relations."]
    }],
    ["Forgetting that the leading coefficient must be non-zero.","Incorrect signs in sum/product formulas.","Assuming every quadratic has two distinct real roots.","Stating zeros without showing substitution or factorisation."],
    ["Show factorisation or apply the zero/coefficient relationships explicitly. For graph questions, link each real zero to an x-axis intersection and mention multiplicity when relevant."],
    ["If D=0, what happens at the x-axis?","Construct the monic quadratic with roots 4 and -2.","Why is p(alpha)=0 equivalent to x-alpha dividing p(x)?"],
    ["Zero/root: input value at which the polynomial evaluates to zero.","Multiplicity: number of times a factor occurs.","Discriminant: b^2-4ac for a quadratic."],
    [practice("Find the sum and product of roots of 3x^2+2x-8.","Sum=-2/3; product=-8/3.","Use alpha+beta=-b/a and alpha beta=c/a."),practice("A quadratic has a repeated root when what condition holds?","b^2-4ac=0.","The discriminant is zero, so both roots equal -b/(2a).")]),
  chapter("Class 10","Pair of Linear Equations",
    "Solve two linear equations in two variables, interpret their graphs and classify unique, no-solution and infinitely-many-solution cases.",
    [
      ["Meaning of a solution pair","A solution (x,y) must satisfy both equations simultaneously. On a graph, each linear equation represents a line; a common solution is an intersection point. If the lines intersect once, the system has one solution. If they are parallel and distinct, there is no common solution. If the lines coincide, every point on the shared line is a solution, so there are infinitely many."],
      ["Algebraic solution methods","Substitution isolates one variable and replaces it in the other equation. Elimination multiplies equations to make coefficients equal/opposite, then adds or subtracts them. Cross-multiplication can be efficient for standard equations, but substitution/elimination makes the logic more visible and often reduces sign errors. Keep equations aligned and perform the same operation on the whole equation."],
      ["Consistency and ratios","For a1x+b1y+c1=0 and a2x+b2y+c2=0, a unique solution occurs when a1/a2 differs from b1/b2. Parallel distinct lines have a1/a2=b1/b2 but unequal to c1/c2; coincident lines have all three ratios equal, with denominator-zero cases handled by a safer coefficient comparison. These are tests for consistency, not a substitute for solving when a numerical pair is requested."]
    ],
    [
      formula("a1/a2 != b1/b2","Lines intersect once; the system has a unique solution.","Classify consistency from coefficients.","Ratios use corresponding non-zero denominators.","Do not compare ratios with a zero denominator blindly."),
      formula("a1/a2=b1/b2 != c1/c2","Parallel distinct lines; no solution.","Identify inconsistency.","Coefficients share a scale factor in x,y but not the constant term.","Equal slopes alone do not imply coincident lines."),
      formula("a1/a2=b1/b2=c1/c2","Coincident lines; infinitely many solutions.","Identify dependent equations.","Use corresponding coefficients.","A single numerical pair is not the full solution set for coincident lines.")
    ],
    [
      {title:"Solve 2x+y=7 and x-y=2",steps:["From x-y=2, write y=x-2.","Substitute into 2x+y=7: 2x+x-2=7.","Then 3x=9, so x=3 and y=1.","Check: 2(3)+1=7 and 3-1=2."]},
      {title:"Choose a parameter for infinitely many solutions",steps:["Compare 2x+4y=6 with x+2y=k.","The left-hand coefficients are proportional by factor 2.","For the lines to coincide, the constant term must also be proportional: 6=2k, so k=3.","If k differs from 3, the lines are parallel and distinct."]
    }],
    ["Changing only one side of an equation during elimination.","Losing a negative sign when substituting.","Calling a system inconsistent because a ratio comparison was made with invalid denominators.","Not checking the final pair in both original equations."],
    ["In word problems, define variables and units first; translate each condition into an equation; solve; then interpret whether the resulting values make sense."],
    ["What graph corresponds to no solution?","How do you test whether two equations describe the same line?","Why should you substitute the final pair into both equations?"],
    ["Consistent system: at least one solution.","Dependent equations: one equation is a multiple of the other.","Inconsistent system: no simultaneous solution."],
    [practice("Solve x+y=9 and x-y=3.","x=6, y=3.","Add equations to get 2x=12; substitute to find y=3."),practice("For 3x+6y=12 and x+2y=k, when are the lines coincident?","k=4.","The first equation is 3 times x+2y=4, so the second must have the same constant after scaling.")]),
  chapter("Class 10","Quadratic Equations",
    "Solve ax^2+bx+c=0 by factorisation, completing the square or the quadratic formula, and interpret the discriminant and word problems.",
    [
      ["Standard form and solution meaning","A quadratic equation has degree two and can be written ax^2+bx+c=0 with a!=0. A solution is a value that makes the equation true. Factorisation works best when the quadratic splits neatly into linear factors; zero-product reasoning then gives the roots. Before using any formula, move all terms to one side and confirm the coefficient of x^2 is not zero."],
      ["Formula derivation and discriminant","Completing the square transforms ax^2+bx+c=0 into a square equal to a constant. Dividing by a and completing the square gives x=(-b±sqrt(b^2-4ac))/(2a). The discriminant D=b^2-4ac classifies real roots: positive gives two distinct real roots, zero gives a repeated real root, and negative gives no real roots. The ± sign yields two candidates when the square root is real."],
      ["Modelling with quadratics","Translate a real situation into an equation only after defining the unknown and expressing all quantities in a consistent unit. The algebra may yield two mathematical roots, but the context can exclude negative lengths, negative time or impossible counts. Check the accepted root in the original context. For a projectile/area/number problem, define the physical domain before finalising the answer."]
    ],
    [
      formula("x=(-b±sqrt(b^2-4ac))/(2a)","Quadratic formula for ax^2+bx+c=0, a!=0.","Use when factorisation is not obvious or roots need exact form.","a,b,c are coefficients; all terms must be in standard form.","The whole numerator is divided by 2a."),
      formula("D=b^2-4ac","Discriminant for root classification.","Decide the number of real roots.","D shares the units of b^2 and ac if coefficients carry units.","D=0 produces one distinct root with multiplicity two."),
      formula("alpha+beta=-b/a; alpha beta=c/a","Root-coefficient relations.","Check solutions or solve root-relationship problems.","Valid when a!=0.","These relationships do not themselves give each root unless more information is available.")
    ],
    [
      {title:"Solve x^2-5x+6=0",steps:["Find two numbers with product 6 and sum -5: -2 and -3.","Factor: (x-2)(x-3)=0.","Set each factor to zero: x=2 or x=3.","Check both in the original equation."]},
      {title:"Use the formula for 2x^2+x-3=0",steps:["Identify a=2, b=1, c=-3.","D=1-4(2)(-3)=25.","x=(-1±5)/4, so x=1 or x=-3/2.","If the roots represent lengths or counts, assess the context before accepting both."]
    }],
    ["Forgetting to set the equation equal to zero before identifying a,b,c.","Using ± incorrectly or missing one root.","Dropping the denominator 2a around the whole numerator.","Accepting a mathematically valid but contextually impossible root."],
    ["For word problems, write the variable definition, form the equation, solve and interpret roots. For proof problems, show factorisation or formula substitution rather than listing answers."],
    ["How does D distinguish the three root cases?","Why can one of two roots be rejected in a word problem?","What equation results after completing the square?"],
    ["Quadratic: degree-two polynomial equation.","Discriminant: b^2-4ac.","Root: value satisfying the equation."],
    [practice("Solve x^2-9=0.","x=3 or x=-3.","Factor as (x-3)(x+3)=0."),practice("For 3x^2-6x+3=0, describe the roots.","One repeated real root x=1.","D=(-6)^2-4(3)(3)=0, and the equation is 3(x-1)^2=0.")]),
  chapter("Class 10","Arithmetic Progressions",
    "Recognise constant-difference sequences, find a term, compute partial sums, and model equal-step patterns.",
    [
      ["Identify an AP","A sequence is an arithmetic progression when the difference between consecutive terms is constant. That constant is d=a2-a1. It may be positive, negative or zero. Check more than the first two differences before declaring a sequence an AP. The first term is a, while an is the nth term; keep term index and term value separate."],
      ["Derive the nth term","Starting from a, add d repeatedly: a, a+d, a+2d,... The nth term has exactly n-1 differences, so an=a+(n-1)d. This form is useful when the question asks for one particular term or the position of a known term. If an is known, solve the linear equation for n and check that n is a positive integer."],
      ["Sum of the first n terms","Pair the first and last terms in the sequence: each pair sums to a+l, where l is the last term. This gives Sn=n/2(a+l). Substituting l=a+(n-1)d yields Sn=n/2[2a+(n-1)d]. Use an explicit finite number of terms; never apply the formula to an infinite sequence. The sum can be checked by a small list when n is small."]
    ],
    [
      formula("an=a+(n-1)d","Nth term of an arithmetic progression.","Find a term or solve for its position.","a, an, d have the same units.","Use n-1, not n, differences."),
      formula("Sn=n/2(a+l)","Sum from first term a to nth/last term l.","Use when the last term is known.","Sum has the unit of a term.","l means the last term included, not the common difference."),
      formula("Sn=n/2[2a+(n-1)d]","Sum using first term and common difference.","Use when n and d are known directly.","n is a positive integer count.","Count the terms correctly when the sequence starts at a non-unit index.")
    ],
    [
      {title:"Find the 20th term of 7, 11, 15, ...",steps:["a=7 and d=4.","a20=7+(20-1)4=7+76=83.","Check the pattern: the 1st term is 7 and each next term adds 4."]},
      {title:"Sum the first 25 positive multiples of 3",steps:["The terms are 3,6,...,75, so n=25, a=3, l=75.","S25=25/2(3+75)=25x39=975.","A useful check is 3(1+2+...+25)=3(25x26/2)=975."]
    }],
    ["Using n instead of n-1 in the nth-term formula.","Using the common difference where the last term l is required.","Confusing the nth term with the sum of n terms.","Treating the first term as 0 when the sequence starts at a different value."],
    ["Sequence questions often hide an AP in savings, seating, tile counts or daily increases. Define a, d and n before calculating, and check that the requested term count is correct."],
    ["How can you test whether a sequence is an AP?","What does d<0 indicate?","When is Sn=n/2(a+l) convenient?"],
    ["Common difference: fixed change between consecutive terms.","Nth term: term at position n.","Partial sum: sum up to a specified finite position."],
    [practice("Find the 15th term of 4, 9, 14, ...","74.","a=4, d=5; a15=4+14x5=74."),practice("How many terms of 2,5,8,... sum to 77?","7 terms.","Sn=n/2[4+(n-1)3]=77; solving 3n^2+n-154=0 gives n=7 as the positive integer solution.")]),
  chapter("Class 10","Triangles and Similarity",
    "Apply triangle similarity, proportional sides, the Basic Proportionality Theorem and Pythagoras' theorem with clear diagram reasoning.",
    [
      ["Similarity versus congruence","Similar triangles have equal corresponding angles and proportional corresponding side lengths; their shapes match but their sizes may differ. Congruent triangles are similar with scale factor one. Keep vertex correspondence in order when writing a statement such as triangle ABC similar to triangle PQR: A corresponds to P, B to Q and C to R."],
      ["Criteria and proportional sides","AA similarity is enough because the third angle is then fixed; SAS similarity needs the included angle equal and the surrounding sides proportional; SSS similarity requires all three corresponding side ratios equal. Once similarity is established, write a consistent ratio of matching sides and use it to find an unknown. Do not mix a side from one correspondence with a non-corresponding side from the other triangle."],
      ["BPT and Pythagoras","The Basic Proportionality Theorem says a line parallel to one side of a triangle divides the other two sides in the same ratio. The converse can prove parallelism from a ratio. Pythagoras applies only to a right triangle; its converse tests whether a triangle with sides a,b,c, c largest, is right-angled. Draw the perpendicular or mark the right angle before applying the theorem."]
    ],
    [
      formula("Corresponding sides of similar triangles are proportional","Side ratios are equal after matching corresponding vertices.","Find a missing side in similar triangles.","Lengths use the same unit.","Confirm angle/side correspondence before writing ratios."),
      formula("DE || BC => AD/DB = AE/EC","Basic Proportionality Theorem for triangle ABC with D on AB and E on AC.","Use a parallel segment to relate divided sides.","All ratios compare lengths.","The theorem requires the parallelism premise."),
      formula("a^2+b^2=c^2","Pythagoras for a right triangle with c the hypotenuse.","Find a missing side or test right-angledness.","Length units square on both sides.","Do not apply to a non-right triangle.")
    ],
    [
      {title:"Use similarity to find a side",steps:["Establish AA similarity from two equal angles.","Write the corresponding vertex order explicitly.","Set corresponding side ratios equal, for example AB/PQ=BC/QR.","Cross-multiply, solve and check that the result is a length."]},
      {title:"Apply BPT",steps:["In triangle ABC, let DE be parallel to BC with D on AB and E on AC.","State AD/DB=AE/EC by BPT.","Substitute the given three lengths and solve the proportion.","Use the converse only if the question gives matching side ratios and asks to prove parallelism."]
    }],
    ["Writing similarity without matching vertices in order.","Using Pythagoras before identifying a right angle.","Applying BPT when the segment is not known to be parallel.","Confusing a length ratio with a ratio of areas."],
    ["For proof questions, state the criterion and the exact corresponding sides/angles. For numerical questions, write a proportion before substitution and include a diagram marking the given relationships."],
    ["What is the difference between similar and congruent triangles?","Which condition is needed for the SAS similarity criterion?","What does the converse of BPT let you prove?"],
    ["Similarity: same shape with proportional corresponding sides.","Scale factor: common ratio of corresponding lengths.","Hypotenuse: side opposite the right angle."],
    [practice("Similar triangles have corresponding side ratio 3:5. What is their area ratio?","9:25.","Area scales with the square of the length factor, so (3/5)^2=9/25."),practice("A right triangle has legs 6 and 8. Find the hypotenuse.","10.","c=sqrt(6^2+8^2)=sqrt(100)=10.")]),
  chapter("Class 10","Trigonometry",
    "Define trigonometric ratios in a right triangle, use identities and solve height-and-distance situations with suitable diagrams.",
    [
      ["Ratios depend on the reference angle","For an acute angle theta in a right triangle, sin(theta)=opposite/hypotenuse, cos(theta)=adjacent/hypotenuse and tan(theta)=opposite/adjacent. The other three ratios are reciprocals. Label the side opposite the chosen angle only after choosing theta; the same side may be adjacent for the other acute angle. Ratios are dimensionless because they compare lengths."],
      ["Standard values and identities","Memorise the exact values at 0, 30, 45, 60 and 90 degrees in the ranges allowed by the syllabus. The fundamental identity sin^2(theta)+cos^2(theta)=1 leads to 1+tan^2(theta)=sec^2(theta) when cos(theta) is non-zero and 1+cot^2(theta)=cosec^2(theta) when sin(theta) is non-zero. Reciprocal and quotient relationships can simplify expressions, but respect undefined denominators."],
      ["Heights and distances","Sketch the observer, horizontal ground, vertical object and line of sight. Angle of elevation is measured from the horizontal upward; angle of depression is measured from the horizontal downward. Choose the right triangle and use the ratio matching the known and unknown sides. If observer height is nonzero, separate the vertical difference from the object's total height."]
    ],
    [
      formula("sin(theta)=opposite/hypotenuse; cos(theta)=adjacent/hypotenuse","Definitions of sine and cosine in a right triangle.","Relate an acute angle to side lengths.","All side lengths use the same units; ratio is dimensionless.","Label sides relative to the angle being used."),
      formula("tan(theta)=opposite/adjacent = sin(theta)/cos(theta)","Tangent relates vertical and horizontal legs.","Heights, distances and slope-like ratios.","Dimensionless.","Tangent is undefined when cosine is zero."),
      formula("sin^2(theta)+cos^2(theta)=1","Fundamental identity derived from Pythagoras.","Simplify expressions or find a missing ratio.","Dimensionless.","A square means (sin theta)^2."),
      formula("1+tan^2(theta)=sec^2(theta)","Identity obtained by dividing the fundamental identity by cos^2(theta).","Simplify expressions when cosine is non-zero.","Dimensionless.","Check where the division would be undefined.")
    ],
    [
      {title:"A pole's height from distance and angle",steps:["Let the horizontal distance from the pole be 20 m and angle of elevation 30 degrees.","tan(30 degrees)=height/20.","height=20/sqrt(3) m, approximately 11.55 m.","This assumes the observer is on the pole's ground level; add observer height only if specified."]},
      {title:"Simplify using an identity",steps:["For sin^2(theta)+cos^2(theta), apply the fundamental identity to get 1.","If a denominator such as 1+tan^2(theta) appears, replace it by sec^2(theta) where defined.","State any restrictions imposed by the original denominator."]
    }],
    ["Using the opposite/adjacent labels for the wrong angle.","Using degrees and radians inconsistently.","Forgetting to add an observer's height when the diagram includes an elevated viewpoint.","Cancelling terms across a sum as if they were factors."],
    ["Draw and label a right triangle before selecting a ratio. In identity proofs, transform one side at a time and mention denominator restrictions where relevant."],
    ["Why is a trigonometric ratio dimensionless?","When is tan(theta) undefined?","How does an angle of depression relate to an elevation angle in parallel horizontal lines?"],
    ["Angle of elevation: angle from horizontal upward to an object.","Angle of depression: angle from horizontal downward to an object.","Reciprocal ratio: ratio whose product with the original is one."],
    [practice("If tan(theta)=3/4 for an acute angle, find sin(theta).","3/5.","Take opposite=3 and adjacent=4; hypotenuse=5 by Pythagoras."),practice("A tower is 30 m away and the angle of elevation is 45 degrees. Find height above observer level.","30 m.","tan45=1=height/30, so height=30 m.")]),
  chapter("Class 10","Statistics and Probability",
    "Organise grouped data, find measures of central tendency and understand experimental/theoretical probability.",
    [
      ["Grouped frequency distributions","A class interval groups a range of values and the frequency tells how many observations lie there. The class mark is the midpoint. The mean by direct method weights each observation/class mark by its frequency; the assumed-mean or step-deviation method reduces arithmetic but must use the correct class width. A cumulative frequency adds frequencies progressively and is useful for locating the median class."],
      ["Mean, median and mode","The mean uses every value and is sensitive to extreme values. For grouped data, use class marks and frequencies. The median divides ordered observations into two halves; grouped median uses the median-class lower boundary, previous cumulative frequency, median-class frequency and class width. The mode identifies the most frequent value or modal class. Use the formula that matches the data format, not the ungrouped version for grouped intervals."],
      ["Probability basics","The sample space lists all outcomes of a random experiment. For equally likely outcomes, P(E)=number of favourable outcomes/total outcomes. A probability is between 0 and 1; an impossible event has probability zero and a certain event has probability one. A complement gives P(not E)=1-P(E). Do not assume outcomes are equally likely unless the experiment or question justifies it."]
    ],
    [
      formula("Mean = sum(f_i x_i)/sum(f_i)","Weighted mean of class marks x_i with frequencies f_i.","Find the mean of grouped data.","Mean has the unit of the observed variable.","Use class marks, not class boundaries, in the standard grouped mean formula."),
      formula("Median = l + [(N/2 - cf)/f] h","Grouped-data median formula.","Estimate median from continuous class intervals.","l and h are lengths in the variable's units.","l is the lower boundary of the median class."),
      formula("P(E)=n(E)/n(S)","Classical probability for equally likely outcomes.","Count favourable outcomes in a finite sample space.","Dimensionless, between 0 and 1.","Counting alone is insufficient when outcomes are not equally likely."),
      formula("P(E')=1-P(E)","Complement rule.","Find the chance an event does not occur.","Dimensionless.","E' is the complement in the same sample space.")
    ],
    [
      {title:"Grouped mean using class marks",steps:["Write each interval's midpoint x_i.","Multiply each midpoint by frequency f_i and add the products.","Divide by total frequency N.","Check that a weighted mean lies within the range of observed class marks."]},
      {title:"Probability of a non-prime result on a fair die",steps:["Sample space is {1,2,3,4,5,6}, all six outcomes equally likely.","Prime outcomes are 2,3,5, so non-prime outcomes are 1,4,6.","P(non-prime)=3/6=1/2.","The complement check is 1-P(prime)=1-3/6=1/2."]
    }],
    ["Confusing class width with frequency.","Choosing the median class from frequency alone instead of cumulative frequency.","Using a grouped formula on raw ungrouped data without need.","Assuming equally likely outcomes where the experiment is biased."],
    ["State the table quantities N, cf, f, l and h before substituting in grouped median/mode formulas. In probability, write the sample space or justify the favourable/total counts."],
    ["Why is the class mark a midpoint?","What is the allowed range of probability?","How does cumulative frequency help locate the median class?"],
    ["Frequency: count of observations in a class.","Class mark: midpoint of a class interval.","Sample space: set of possible outcomes."],
    [practice("For a fair die, find P(getting a number greater than 4).","1/3.","Favourable outcomes are 5 and 6: 2/6=1/3."),practice("What is the class mark of 20-30?","25.","Class mark=(20+30)/2=25.")]),
  chapter("Class 10","Coordinate Geometry",
    "Use coordinate distances, section formula and area of a triangle to model geometry on the Cartesian plane.",
    [
      ["Coordinates and distance","A point is represented by (x,y). Horizontal separation is the difference in x-coordinates and vertical separation the difference in y-coordinates. The distance formula comes from Pythagoras applied to these perpendicular differences. Keep the differences squared, so a negative coordinate difference still contributes a positive squared distance."],
      ["Section formula","If P divides AB internally in the ratio AP:PB=m:n, then its coordinates are the weighted averages ((n x1+m x2)/(m+n), (n y1+m y2)/(m+n)) for A=(x1,y1), B=(x2,y2). The weights are opposite the distances: the coordinate is closer to the endpoint with the larger opposite segment? Verify by testing midpoint m=n and an endpoint-near case. For external division, signs change and the denominator is m-n; check the applicable textbook convention."],
      ["Area and collinearity","The determinant-style coordinate formula calculates the area of a triangle from its vertices. The absolute value ensures non-negative area. If the calculated area is zero, the three points are collinear. Preserve coordinate order and put the entire expression inside the absolute value; otherwise sign errors can produce a negative area or an incorrect non-collinearity conclusion."]
    ],
    [
      formula("d=sqrt((x2-x1)^2+(y2-y1)^2)","Distance between two points.","Find a side length or test a triangle.","Same unit as coordinates.","Square each coordinate difference separately."),
      formula("P=((n x1+m x2)/(m+n), (n y1+m y2)/(m+n))","Internal division of AB in ratio m:n.","Find coordinates of a point dividing a segment.","m,n are positive lengths/ratio parts.","Keep AP:PB=m:n and weights in the matching order."),
      formula("Area=1/2 |x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|","Area of triangle from three vertices.","Find area or test collinearity.","Square coordinate units if coordinates represent lengths.","Use absolute value around the complete signed sum.")
    ],
    [
      {title:"Distance between (-2,3) and (4,-5)",steps:["Delta x=4-(-2)=6 and delta y=-5-3=-8.","Distance=sqrt(6^2+(-8)^2)=sqrt(100)=10.","The answer is positive even though one coordinate difference is negative."]},
      {title:"Midpoint and section ratios",steps:["For ratio 1:1, section formula simplifies to average coordinates.","For A=(2,1), B=(8,7), midpoint is ((2+8)/2,(1+7)/2)=(5,4).","Substitute back into the segment geometry to check the midpoint is equally far from each endpoint."]
    }],
    ["Swapping m and n in the section formula.","Dropping negative signs before squaring in the distance formula.","Forgetting the absolute value in area.","Treating area zero as a triangle with three distinct non-collinear vertices."],
    ["Many coordinate questions hide standard geometry. If proving points lie on a circle/line or a triangle is right-angled, distance/area calculations may provide a clean test."],
    ["What does area zero tell you about three points?","Why is distance never negative?","How does the section formula simplify at the midpoint?"],
    ["Cartesian plane: plane defined by perpendicular coordinate axes.","Collinear: points lying on one straight line.","Internal division: point lying between the segment endpoints."],
    [practice("Find the midpoint of (1,-4) and (7,2).","(4,-1).","Average the x-coordinates and the y-coordinates separately."),practice("What is the distance between (0,0) and (5,12)?","13.","sqrt(5^2+12^2)=sqrt(169)=13.")]),
  chapter("Class 10","Circles and Tangents",
    "Understand tangent-radius perpendicularity, equal tangents from an external point and coordinate-free tangent proofs.",
    [
      ["Tangent and radius","A tangent touches a circle at exactly one point. The radius drawn to the point of contact is perpendicular to the tangent; this gives a right triangle, often the key to tangent-length questions. The converse is also useful: a line perpendicular to a radius at its endpoint on the circle is tangent there. Mark the point of contact and right angle in the diagram."],
      ["Equal tangent lengths","Tangents PA and PB drawn from the same external point P to a circle have equal lengths. One proof compares right triangles OAP and OBP: OA=OB are radii, OP is common, and both contact angles are right angles, so the triangles are congruent by RHS. Then PA=PB. This result applies to tangents from the same external point, not arbitrary tangents from different points."],
      ["Using the tangent property in problems","When an external point lies outside the circle, connecting it to the centre and a contact point often forms a right triangle with OP as hypotenuse. Apply Pythagoras to find the tangent length. If several sides of a triangle are tangent to a circle, equal tangent segments from each vertex can be used to express side lengths in terms of two short tangent segments."]
    ],
    [
      formula("Radius at point of contact is perpendicular to tangent","OA is perpendicular to PA when PA touches at A.","Create a right triangle for proof or calculation.","Lengths use the same unit; angle is 90 degrees.","Use the contact radius, not any arbitrary radius."),
      formula("PA=PB","Tangents from the same external point are equal.","Find unknown tangent lengths or prove a triangle side relationship.","Length units.","The external point must be the same for both tangents."),
      formula("PA=sqrt(OP^2-r^2)","Tangent length from external point P to circle centre O, radius r.","Use right triangle OAP.","OP and r have length units.","Requires P outside the circle, so OP>r.")
    ],
    [
      {title:"Find tangent length",steps:["A circle has radius 5 cm and external centre distance OP=13 cm.","OA is perpendicular to PA, so triangle OAP is right-angled at A.","PA=sqrt(OP^2-OA^2)=sqrt(169-25)=12 cm.","Check 5-12-13 is a right-triangle triple."]},
      {title:"Prove equal tangents",steps:["Join OA, OB and OP for contact points A,B.","Both triangles OAP and OBP are right triangles with OA=OB and OP common.","By RHS congruence, PA=PB.","State that the result concerns two tangents from the same external point."]
    }],
    ["Assuming any two tangents to the circle have equal length regardless of starting point.","Using OP^2+r^2 instead of OP^2-r^2 for tangent length.","Forgetting the radius is perpendicular specifically at the contact point.","Calling a secant a tangent when it intersects at two points."],
    ["In proof questions, cite the theorem and establish the congruent right triangles. In length questions, label OP, radius and tangent before applying Pythagoras."],
    ["Why is the tangent perpendicular to the contact radius?","What must be true about the external point for a real tangent length?","Why can RHS congruence prove PA=PB?"],
    ["Tangent: line meeting a circle at one point.","Secant: line meeting a circle at two points.","Point of contact: single intersection point for a tangent."],
    [practice("OP=10 cm and radius=6 cm. Find tangent length.","8 cm.","PA=sqrt(10^2-6^2)=sqrt64=8."),practice("Two tangents PA and PB are drawn from P. If PA=3x+1 and PB=5x-7, find x.","x=4.","Set equal: 3x+1=5x-7 gives 8=2x, so x=4.")]),
  chapter("Class 10","Areas Related to Circles",
    "Calculate arc length, sector area, segment area and composite plane regions using proportional parts of a circle.",
    [
      ["Arc and sector as fractions of a circle","A central angle theta degrees represents theta/360 of a full turn. The arc length is the same fraction of circumference; sector area is the same fraction of the whole circle's area. Both formulas assume theta is in degrees. Keep the radius and diameter distinct: circumference uses 2pi r=pi d, while area uses pi r^2."],
      ["Segments and shaded regions","A segment is the region between a chord and its corresponding arc. Its area is sector area minus the area of the triangle formed by the two radii and the chord, for a minor segment with the included central angle. For a shaded composite region, draw boundaries, identify basic shapes and subtract unshaded areas from the relevant total. Do not subtract an area twice when regions overlap."],
      ["Units and approximations","Arc length is linear in radius, while sector area is proportional to radius squared. This means doubling the radius doubles a fixed-angle arc length but quadruples sector area. Keep units consistent; use pi=22/7 or 3.14 only as instructed, and preserve pi in exact answers when requested."]
    ],
    [
      formula("Circumference=2pi r; area=pi r^2","Perimeter and area of the complete circle.","Start any sector/arc or composite-area problem.","Circumference has length units; area has square units.","Do not use diameter in the r^2 term."),
      formula("Arc length=(theta/360) x 2pi r","Fraction of the circumference subtended by theta degrees.","Find length of a minor or major arc.","Length units.","theta must be the central angle in degrees for this version."),
      formula("Sector area=(theta/360) x pi r^2","Fraction of full-circle area subtended by theta degrees.","Find wedge-shaped sector area.","Square units.","The factor theta/360 is a fraction, not a percentage needing an extra division."),
      formula("Minor segment area=sector area-triangle area","Subtract the triangle from its corresponding sector.","Find area between a chord and the minor arc.","Square units.","Check whether the question asks minor or major segment.")
    ],
    [
      {title:"Area of a 60-degree sector, radius 7 cm",steps:["The fraction of a full circle is 60/360=1/6.","Sector area=(1/6)pi(7^2)=49pi/6 cm^2.","For an arc, use (1/6)(2pi x 7)=7pi/3 cm.","Write area in square units and arc length in linear units."]},
      {title:"Shaded region by subtraction",steps:["Find the area of the outer shape or full circle.","Find each unshaded inner region independently.","Subtract the non-overlapping unshaded areas once.","Sketch the component regions to confirm the calculation matches the shaded part."]
    }],
    ["Using radius where diameter was given without dividing by two.","Writing area in cm rather than cm^2.","Using the wrong angle for the sector.","Assuming a major segment is smaller than half the circle without checking the angle."],
    ["Shaded-area questions are easiest with a labelled sketch and a table of component areas. Keep exact pi form until the final rounding step."],
    ["How does sector area scale if radius doubles?","What two areas form a minor segment?","Why are arc length and sector area in different units?"],
    ["Sector: region bounded by two radii and an arc.","Chord: segment joining two points on a circle.","Segment: region between a chord and its corresponding arc."],
    [practice("Find circumference of radius 14 cm using pi=22/7.","88 cm.","2pi r=2(22/7)(14)=88."),practice("Find area of a 90-degree sector of radius 4 cm.","4pi square units.","(90/360)pi(16)=4pi.")]),
  chapter("Class 10","Surface Areas and Volumes",
    "Choose the correct surface/volume formula for solids and composite figures; track external surfaces, hollow parts and converted units.",
    [
      ["Identify shape and dimensions","Before choosing a formula, decide whether the object is a cylinder, cone, sphere, hemisphere, frustum, or a combination. Mark radius, diameter, vertical height and slant height distinctly. The cone's slant height differs from vertical height and is linked through Pythagoras. For a composite solid, volume adds for joined material solids but removed cavities are subtracted."],
      ["Curved versus total surface area","Curved/lateral area includes the side surface only; total surface area adds exposed bases or ends. For a hemisphere, total area includes the curved surface plus the circular base. When two solids are joined, the shared contact surface is internal and must not be counted in the external area. In painting/plating problems, include only exposed surfaces that receive paint or coating."],
      ["Volume, capacity and unit conversion","Volume measures three-dimensional space and has cubic units. For liquid capacity, convert between cubic centimetres and millilitres or cubic metres and litres as directed. When dimensions change by scale factor k, area changes by k^2 and volume by k^3. In melting/recasting, material volume is conserved, so equate the original total volume to the sum of new-solid volumes."]
    ],
    [
      formula("Cylinder: CSA=2pi rh; TSA=2pi r(h+r); V=pi r^2 h","Side area, total area and volume for a right circular cylinder.","Pipes, tanks, cans and cylindrical containers.","CSA/TSA square units; V cubic units.","TSA includes two circular ends, while CSA does not."),
      formula("Cone: l=sqrt(r^2+h^2); CSA=pi r l; V=(1/3)pi r^2 h","Slant height, side area and volume of a right circular cone.","Conical tents, caps, funnels and composite solids.","l,r,h are lengths; area square units; volume cubic units.","Use slant height l for CSA and vertical h for volume."),
      formula("Sphere: SA=4pi r^2; V=(4/3)pi r^3","Surface area and volume of a sphere.","Spherical objects and recasting.","SA square units; V cubic units.","Volume scales with r cubed."),
      formula("Scale factor k: area x k^2; volume x k^3","Dimensional scaling of similar solids.","Compare new and old radii/heights.","Area and volume have different power laws.","Do not apply the linear factor directly to area or volume.")
    ],
    [
      {title:"Melt a sphere into smaller spheres",steps:["Calculate original volume using (4/3)pi R^3.","Let each small sphere have radius r; one has volume (4/3)pi r^3.","Number n satisfies (4/3)pi R^3=n(4/3)pi r^3.","Cancel constants: n=(R/r)^3, assuming no material loss."]},
      {title:"Paint a closed cylinder",steps:["Identify radius r and height h.","For a closed cylinder, use TSA=2pi r(h+r).","Multiply by paint cost per square unit if a rate is given.","If one or both ends are open or joined to another solid, remove the corresponding internal/exposed area appropriately."]
    }],
    ["Mixing slant height and vertical height.","Counting a joined circular base as exposed surface area.","Using cm^2 for a volume answer.","For recasting, equating surface areas instead of volumes."],
    ["Write the chosen formula and identify each dimension before substitution. For compound solids, draw the join and explain which faces are external."],
    ["Why does a cone use slant height in its curved surface area?","What quantity remains conserved during melting/recasting?","How does volume change when every dimension doubles?"],
    ["CSA: curved surface area.","TSA: total surface area including exposed bases.","Capacity: volume a container can hold."],
    [practice("Find volume of a cylinder with r=3 cm and h=10 cm.","90pi cm^3.","V=pi r^2 h=pi(9)(10)."),practice("If the radius of a sphere triples, by what factor does volume change?","27 times.","Volume is proportional to r^3, so 3^3=27.")]),
  chapter("Class 10","Geometrical Constructions",
    "Construct tangents and proportional line segments with compass-and-straightedge reasoning; accuracy depends on the locus and intersection steps.",
    [
      ["Construction as a geometric proof","A construction is not just a drawing; each compass arc encodes an equal-distance condition and each intersection encodes a locus. Explain why the constructed point satisfies the required angle, distance or tangency condition. Draw clear arcs and label points so the logic can be followed. Use a ruler only for straight lines and do not use a protractor when a compass construction is required."],
      ["Divide a segment proportionally","To divide AB in a specified ratio m:n, draw an auxiliary ray from A and mark m+n equal intervals on it. Join the last mark to B, then draw a parallel through the mth mark. By similar triangles, the intersection point divides AB in the required ratio. The construction relies on parallelism and proportional sides, so state the similarity/BPT relationship in the reasoning."],
      ["Tangent construction","For a circle with centre O and external point P, join OP and find its midpoint M. Draw the circle centred at M with radius MO; it intersects the original circle at tangent points because the angle subtended by diameter OP is a right angle. Joining each intersection to P gives the tangents. The key theorem is that a tangent is perpendicular to the radius at its contact point."]
    ],
    [
      formula("m+n equal intervals on an auxiliary ray","Creates a scale for an internal m:n division.","Construct a proportional segment accurately.","Compass arcs define equal lengths.","Use the mth of m+n marks when constructing AM:MB=m:n."),
      formula("Angle in a semicircle = 90 degrees","Thales' theorem supports the external-point tangent construction.","Construct tangents from an external point to a circle.","Angles are in degrees.","The right angle is at the intersection on the circle; OP is the diameter."),
      formula("Tangent at A is perpendicular to OA","Characterises a tangent's contact point.","Prove a constructed line is tangent.","Radius and tangent are lengths; angle=90 degrees.","A perpendicular line through a point not on the circle is not that circle's tangent.")
    ],
    [
      {title:"Construct a tangent from P to a circle",steps:["Join P to centre O.","Bisect OP at M.","Draw the circle with centre M and radius MO; let it cut the given circle at T1 and T2.","Join PT1 and PT2. State that angle OT1P and OT2P are right angles, so each line is a tangent."]},
      {title:"Divide AB in ratio 3:2",steps:["From A draw a ray and mark five equal intervals A1 through A5.","Join A5 to B.","Through A3 draw a line parallel to A5B, meeting AB at P.","By similar triangles/BPT, AP:PB=3:2."]
    }],
    ["Skipping the proof of why the construction works.","Marking unequal intervals on the auxiliary ray.","Joining the wrong auxiliary point to B when constructing a ratio.","Treating a neat-looking sketch as proof of tangency."],
    ["Write construction steps in order, label the key intersection, and provide the theorem (similarity/BPT or angle in a semicircle) that verifies the result."],
    ["Why is the midpoint of OP used in tangent construction?","How many equal intervals are needed to divide a segment in ratio m:n?","Which theorem verifies tangency from the external point?"],
    ["Locus: set of points satisfying a geometric condition.","Compass construction: construction using circles/arcs and straight lines.","Tangent point: point where a tangent meets a circle."],
    [practice("To divide AB in ratio 4:3, how many equal marks are needed on the auxiliary ray?","7 intervals.","The number of parts is m+n=4+3."),practice("What proves PT is tangent when O lies on the circle radius OT and angle OTP is 90 degrees?","Radius-tangent perpendicular criterion.","A line perpendicular to the radius at its endpoint on the circle is tangent.")]),
  chapter("Class 11","Sets and Functions",
    "Describe sets, subsets, operations, intervals and functions using precise membership and domain/range language.",
    [
      ["Set notation and subsets","A set is a well-defined collection of objects. Membership uses x in A, while subset A subset B means every element of A is also in B. The empty set is a subset of every set. For a finite set with n elements, the number of subsets is 2^n because each element is independently included or excluded."],
      ["Operations and identities","Union A union B contains objects in either set; intersection A intersection B contains objects in both; difference A-B contains elements in A but not in B. Complement depends on the chosen universal set. Venn diagrams visualise these relationships. The inclusion-exclusion formula subtracts the overlap when counting a union; without that subtraction the common elements are counted twice."],
      ["Relations and functions","A relation from A to B is a subset of the Cartesian product A x B. A function assigns each input in its domain exactly one output. It may map different inputs to the same output, so one-to-one is an extra property rather than part of the basic definition. The range is the set of outputs actually attained, which may be smaller than the codomain."]
    ],
    [
      formula("n(A union B)=n(A)+n(B)-n(A intersection B)","Inclusion-exclusion for two finite sets.","Count a union without double-counting the overlap.","Counts are non-negative integers.","Subtract the intersection once."),
      formula("Number of subsets of an n-element set = 2^n","Each element has two inclusion choices.","Count all subsets of a finite set.","n is a non-negative integer.","The empty set and the full set both count."),
      formula("Function: each x in domain maps to exactly one f(x)","Uniqueness condition for outputs per input.","Check whether a relation is a function.","Domain/codomain sets are explicit.","A single input cannot have two different outputs.")
    ],
    [
      {title:"Count elements in a union",steps:["Suppose n(A)=20, n(B)=15 and n(A intersection B)=6.","Use n(A union B)=20+15-6.","The union contains 29 elements.","Check it cannot exceed n(A)+n(B)=35 or be smaller than either set."]},
      {title:"Check if a relation is a function",steps:["List each input's associated output(s).","Every input in the stated domain must have one and only one output.","An input with no output or two distinct outputs violates the definition.","Different inputs are allowed to share one output."]
    }],
    ["Calling the codomain and range the same in every problem.","Forgetting the empty set when counting subsets.","Adding set sizes without subtracting the overlap.","Treating a one-to-one condition as necessary for every function."],
    ["Use element definitions for set identities and check a function by input uniqueness. For domain/range, exclude values where the expression is undefined and state the codomain if supplied."],
    ["Is the empty set a subset of every set?","Can a function map two inputs to the same output?","Why does the inclusion-exclusion formula subtract the intersection?"],
    ["Domain: permitted inputs.","Codomain: declared target set.","Range: outputs actually attained."],
    [practice("A set has 5 elements. How many subsets does it have?","32.","2^5=32, including empty and full subsets."),practice("If A has 12 elements, B has 10 and their intersection 4, find union size.","18.","12+10-4=18.")]),
  chapter("Class 11","Relations and Functions",
    "Represent relations and functions, determine domain/range, and classify injective, surjective, even, odd and composite functions.",
    [
      ["Cartesian products and relations","A x B is the set of ordered pairs (a,b) with a in A and b in B. Order matters: (a,b) generally differs from (b,a). A relation selects some of these ordered pairs. The domain of a relation includes first components that occur; its range includes second components that occur."],
      ["Types of functions","A function is one-to-one (injective) if distinct inputs have distinct outputs. It is onto (surjective) if every element in the codomain is reached. A bijection is both. These labels depend on the chosen domain and codomain; the same formula can be onto for one codomain and not onto for another. To test injectivity algebraically, start from f(a)=f(b) and see whether it forces a=b."],
      ["Composition, inverse and parity","Composition f o g means f(g(x)); apply the inside function first and ensure g(x) lies in the domain of f. A function has an inverse function on its declared sets when it is bijective. Even functions satisfy f(-x)=f(x), while odd functions satisfy f(-x)=-f(x), with a domain symmetric around zero. A graph can reveal these symmetries."]
    ],
    [
      formula("n(A x B)=n(A)n(B) for finite sets","Count ordered pairs in a Cartesian product.","Find the size of product sets.","Counts are integers.","Ordered pairs are not unordered combinations."),
      formula("(f o g)(x)=f(g(x))","Function composition; g acts first.","Combine two function rules.","Inputs must be in compatible domains.","Do not reverse the composition order."),
      formula("Even: f(-x)=f(x); odd: f(-x)=-f(x)","Parity tests for functions with symmetric domain.","Classify graph/function symmetry.","Equality holds for all x in the domain.","Check the domain includes both x and -x.")
    ],
    [
      {title:"Calculate composition",steps:["Let f(x)=2x+1 and g(x)=x^2.","(f o g)(x)=f(g(x))=2x^2+1.","(g o f)(x)=g(f(x))=(2x+1)^2.","The different expressions show composition is generally not commutative."]},
      {title:"Test whether f(x)=x^2 is one-to-one",steps:["Assume f(a)=f(b), so a^2=b^2.","This gives a=b or a=-b.","Distinct inputs 2 and -2 have the same output 4 on the real domain.","Therefore it is not injective on R, but it is injective if domain is restricted to non-negative reals."]
    }],
    ["Confusing f(g(x)) with g(f(x)).","Calling a function onto without specifying the codomain.","Assuming x^2 is one-to-one over all real numbers.","Ignoring domains in composition and inverse questions."],
    ["For inverse questions, verify one-to-one and onto under the stated sets, solve y=f(x) for x, then swap variables and state the inverse domain/range."],
    ["Can a many-to-one function have an inverse function on its whole image?","Why does the codomain affect surjectivity?","How do you test evenness?"],
    ["Injective: distinct inputs give distinct outputs.","Surjective: every codomain element is reached.","Bijection: both injective and surjective."],
    [practice("Find (f o g)(x) for f(x)=x+4 and g(x)=3x.","3x+4.","Substitute g(x) into f."),practice("Is f(x)=x^3 odd over R?","Yes.","f(-x)=(-x)^3=-x^3=-f(x).")]),
  chapter("Class 11","Trigonometric Functions",
    "Extend trigonometry to real angles, radians, unit-circle signs, periodicity, identities and trigonometric equations.",
    [
      ["Degrees and radians","One complete revolution is 360 degrees or 2pi radians, so radians measure angle as arc length divided by radius. Convert by multiplying degrees by pi/180 or radians by 180/pi. Radian measure is dimensionless in mathematical formulas, but writing rad helps prevent confusion. Standard calculus limits require radian measure."],
      ["Unit-circle definitions and signs","On the unit circle, the terminal point at angle x has coordinates (cos x, sin x). Therefore cosine and sine may be positive or negative according to the quadrant, and tan x=sin x/cos x where cosine is non-zero. This extends trigonometric functions beyond acute triangles. Reciprocal functions are undefined wherever their denominators vanish."],
      ["Periodicity and identities","Sine and cosine have period 2pi; tangent has period pi. Even/odd identities help simplify negative arguments. Compound-angle identities and double-angle identities are derived from the coordinates/angle addition relationships. To solve equations, find reference angles, include every periodic branch and check restrictions created by division or squaring."]
    ],
    [
      formula("radians=degrees x pi/180","Convert angular measure from degrees to radians.","Use in circular motion and calculus.","Radians dimensionless; degrees use degree symbol.","Do not insert degree values directly in derivative/limit formulas."),
      formula("sin^2 x+cos^2 x=1","Fundamental identity.","Simplify expressions or find a missing ratio.","Dimensionless.","Keep the square on the entire sine/cosine value."),
      formula("sin(A+B)=sin A cos B+cos A sin B","Angle addition for sine.","Expand or simplify compound angles.","Angles must use one consistent unit.","The sine addition signs are both plus in this formula."),
      formula("Period: sin/cos 2pi; tan pi","Smallest positive period of the basic functions.","Write a complete general solution.","Period in radians.","Do not use 2pi for tangent.")
    ],
    [
      {title:"Convert 150 degrees to radians",steps:["Multiply 150 by pi/180.","Simplify 150/180=5/6.","The angle is 5pi/6 radians."]},
      {title:"Solve sin x=1/2 on [0,2pi)",steps:["Reference angle is pi/6.","Sine is positive in quadrants I and II.","Solutions are pi/6 and 5pi/6.","For all real x, add 2npi to these solutions for integer n."]
    }],
    ["Using degrees when a calculus identity requires radians.","Forgetting the second solution in [0,2pi).","Applying reciprocal identities at zero denominators.","Giving only principal angles instead of the complete periodic solution."],
    ["Draw a unit circle for signs and branches. For identities, state denominator restrictions; for equations, include interval endpoints as permitted by the interval notation."],
    ["Why is tan undefined at pi/2?","How do you convert degrees to radians?","What is the period of cosine?"],
    ["Radian: angle subtending an arc equal to the radius.","Period: interval over which a function repeats.","Reference angle: acute angle used with quadrant signs."],
    [practice("Convert 225 degrees to radians.","5pi/4.","225pi/180 simplifies to 5pi/4."),practice("Solve cos x=0 on [0,2pi).","pi/2 and 3pi/2.","Cosine is the x-coordinate on the unit circle and is zero on the vertical axis.")]),
  chapter("Class 11","Complex Numbers and Quadratic Equations",
    "Represent a+ib algebraically and geometrically; solve quadratic equations when roots may be non-real.",
    [
      ["Complex number arithmetic","A complex number z=a+ib has real part a and imaginary part b, with i^2=-1. Add/subtract corresponding components and multiply by expanding then replacing i^2 with -1. To divide by a non-zero complex number, multiply top and bottom by its conjugate so the denominator becomes real. Keep real and imaginary parts grouped until the final line."],
      ["Conjugate, modulus and Argand plane","The conjugate of a+ib is a-ib and z times its conjugate equals a^2+b^2. The modulus is sqrt(a^2+b^2), the distance from the origin in the Argand plane. The quantity |z1-z2| is the distance between two complex points. Multiplication by a complex number can scale and rotate a vector, while conjugation reflects a point across the real axis."],
      ["Quadratic equations and roots","For ax^2+bx+c=0 with a non-zero, the discriminant b^2-4ac determines whether roots are real or a conjugate pair for real coefficients. The quadratic formula still works over complex numbers using i for negative discriminants. Sum and product of roots remain -b/a and c/a. When roots are given, factor using (x-alpha)(x-beta)."]
    ],
    [
      formula("i^2=-1; (a+ib)(c+id)=(ac-bd)+i(ad+bc)","Complex number multiplication.","Multiply, simplify powers or solve complex equations.","a,b,c,d are real parts/coefficient values.","Replace i^2 by -1, not +1."),
      formula("conjugate(a+ib)=a-ib","Reflection across the real axis.","Simplify division or prove modulus properties.","Real and imaginary components stay real.","Only the sign of the imaginary part changes."),
      formula("|a+ib|=sqrt(a^2+b^2)","Distance of the complex point from the origin.","Find modulus or locus.","Same units as real/imaginary coordinate.","Modulus is non-negative."),
      formula("x=(-b±sqrt(b^2-4ac))/(2a)","Quadratic formula; a negative discriminant yields complex roots.","Solve a general quadratic.","a!=0.","Use i sqrt(|D|) for sqrt(D) when D<0.")
    ],
    [
      {title:"Divide (3+2i)/(1-i)",steps:["Multiply numerator and denominator by 1+i.","Numerator: (3+2i)(1+i)=1+5i because i^2=-1.","Denominator: (1-i)(1+i)=2.","Answer is 1/2+(5/2)i."]},
      {title:"Solve x^2+4=0",steps:["x^2=-4.","Taking complex square roots gives x=±2i.","The roots sum to zero and product to 4, matching the monic quadratic's coefficient relations."]
    }],
    ["Treating i as a real variable with i^2=+1.","Forgetting to conjugate both denominator terms.","Assuming a negative discriminant means no roots when complex roots are allowed.","Using modulus as a signed distance."],
    ["For JEE, be comfortable with powers of i, conjugate/modulus, loci, root relations and equations involving z and its conjugate. State whether solutions are required over R or C."],
    ["What is the modulus of 3-4i?","How does conjugation act geometrically?","What are the roots of x^2+9=0?"],
    ["Argand plane: complex plane with real and imaginary axes.","Conjugate: complex number with opposite imaginary part.","Modulus: distance from the origin."],
    [practice("Simplify i^23.","-i.","Powers repeat every four: i^23=i^3=-i."),practice("Find roots of x^2-2x+5=0.","1±2i.","D=4-20=-16, so x=(2±4i)/2=1±2i.")]),
  chapter("Class 11","Sequences and Series",
    "Distinguish sequence terms from sums, derive AP/GP expressions, use finite series and recognise simple summation patterns.",
    [
      ["Sequences versus series","A sequence lists terms a1,a2,... indexed by n; a series sums terms, such as S_n=a1+...+a_n. A formula for an nth term does not directly give the sum. If partial sums S_n are given, the nth term for n>=2 is a_n=S_n-S_(n-1). This difference technique is a common route when the sequence pattern is not obvious."],
      ["Arithmetic and geometric progressions","In an AP, adjacent differences are constant and a_n=a+(n-1)d. In a GP, adjacent ratios are constant and a_n=ar^(n-1), if the ratio is defined. AP sums use the average of first and last terms times the count. Finite GP sums use a separate case for r=1; the infinite GP formula is valid only if |r|<1."],
      ["Summation and checking patterns","Common sums include natural numbers, squares and cubes. Derive or verify a pattern for small n before applying it generally. Pairing terms can simplify symmetric sums. For an infinite geometric series, partial sums approach a limit only when |r|<1; if the magnitude of r is at least one, the standard infinite sum does not converge."]
    ],
    [
      formula("a_n=a+(n-1)d","Nth term of an AP.","Find a specific position or solve for n.","a and d have term units.","Use n-1 changes."),
      formula("S_n=n/2[2a+(n-1)d]=n(a+l)/2","AP sum.","Add first n terms.","Sum has same unit as a term.","l is the last included term."),
      formula("a_n=ar^(n-1)","Nth term of a GP.","Find a term given a and ratio.","a_n and a share units; r dimensionless.","The exponent is n-1."),
      formula("S_n=a(r^n-1)/(r-1), r!=1","Finite GP sum.","Add n GP terms.","Sum has term units.","Handle r=1 separately: S_n=na."),
      formula("1+2+...+n=n(n+1)/2","Sum of first n positive integers.","Evaluate arithmetic sums.","n is a positive integer count.","Use only for consecutive positive integers from 1.")
    ],
    [
      {title:"Find an AP sum",steps:["For 5,8,11,... the first term a=5 and difference d=3.","The 20th term is 5+19(3)=62.","S20=20/2(5+62)=670.","Alternatively substitute a and d directly in the AP sum formula."]},
      {title:"Finite GP sum",steps:["For 2,6,18,54, the first term a=2, ratio r=3 and n=4.","S4=2(3^4-1)/(3-1).","S4=2(81-1)/2=80.","The direct sum 2+6+18+54 confirms the result."]
    }],
    ["Using the AP formula for a GP or vice versa.","Forgetting the r=1 special case.","Using the infinite-GP sum when |r|>=1.","Confusing a_n and S_n."],
    ["A key test is recognising the common difference or ratio from the first several terms. If a partial-sum expression is supplied, subtract consecutive sums to recover the term."],
    ["What is the difference between a_n and S_n?","When does an infinite geometric series converge?","How can partial sums give the nth term?"],
    ["AP: sequence with constant adjacent difference.","GP: sequence with constant adjacent ratio.","Partial sum: sum through a finite index."],
    [practice("Find the 12th term of a=7,d=-2.","-15.","a12=7+11(-2)=-15."),practice("Find 1+3+9+27+81.","121.","This GP has a=1,r=3,n=5, so S5=(3^5-1)/(3-1)=121.")]),
  chapter("Class 11","Permutations and Combinations",
    "Count ordered arrangements and unordered selections; handle repetitions, restrictions and factorial-based formulas.",
    [
      ["Fundamental counting principle","If one task can be done in m ways and a subsequent independent choice in n ways, the combined choices are m*n. Multiply counts for stages, and add counts for mutually exclusive cases. Before counting, define what makes two outcomes different. If swapping two selected items changes the outcome, order matters; if not, use a selection count."],
      ["Permutations","A permutation is an ordered arrangement. The number of ways to arrange r distinct objects selected from n is nPr=n!/(n-r)!. For all n distinct objects, n!. If objects repeat, divide by factorials of the repeated counts because swapping identical copies does not create a new arrangement. Restrictions are often easiest by placing constrained objects first or using complementary counting."],
      ["Combinations and the relationship","A combination is an unordered selection of r objects from n and is nCr=n!/[r!(n-r)!]. The r! factor removes the different orders of the same chosen group. A useful relationship is nPr=nCr*r!. Symmetry gives nCr=nC(n-r), useful when choosing a small excluded group is easier than selecting a large group."]
    ],
    [
      formula("n!=n(n-1)...2*1; 0!=1","Factorial counts orders of n distinct objects.","Arrange distinct objects.","Integer count.","0! is defined as 1."),
      formula("nPr=n!/(n-r)!","Ordered selection of r objects from n distinct objects.","Assign distinct roles or arrange in positions.","n and r integers with 0<=r<=n.","If order changes the outcome, use permutation."),
      formula("nCr=n!/[r!(n-r)!]","Unordered selection of r objects from n.","Choose a committee/subset.","n and r integers with 0<=r<=n.","Do not multiply by r! unless order matters."),
      formula("nPr=nCr*r!","Each r-element subset has r! orders.","Switch between ordered and unordered counts.","Dimensionless count.","Use only when all selected objects are distinct.")
    ],
    [
      {title:"Choose president and secretary from 8 students",steps:["The roles differ, so order matters.","There are 8 choices for president and 7 remaining choices for secretary.","Total=8x7=56=8P2.","If the roles did not differ, the answer would instead be 8C2=28."]},
      {title:"Choose a 3-person committee from 7 students",steps:["A committee has no role order, so use combinations.","7C3=7!/(3!4!).","Simplify to (7x6x5)/(3x2x1)=35.","Check against permutations: 7P3/3!=210/6=35."]
    }],
    ["Using permutations for a committee with no roles.","Forgetting repeated objects in a word-arrangement problem.","Counting overlapping cases twice when adding cases.","Applying nCr when the problem requires distinct positions."],
    ["Underline words such as arrange, assign, select, committee, code and repetition. These usually reveal whether order and repeated choices matter."],
    ["Why is nCr smaller than nPr for r>1?","How do repeated identical letters change arrangement counts?","When is complementary counting useful?"],
    ["Permutation: ordered arrangement.","Combination: unordered selection.","Factorial: product of positive integers up to n."],
    [practice("How many ways to arrange 4 of 6 students in 4 distinct seats?","360.","6P4=6x5x4x3=360."),practice("How many 2-person teams can be selected from 9 students?","36.","9C2=9x8/2=36.")]),
  chapter("Class 11","Binomial Theorem",
    "Expand integer powers, calculate general terms and coefficients, and apply binomial coefficients to approximation and pattern questions.",
    [
      ["Structure of the expansion","For a non-negative integer n, (a+b)^n is the sum of terms containing powers a^(n-r)b^r weighted by nCr. The exponent on a decreases as r increases, while the exponent on b increases, so the sum of exponents in each term remains n. The binomial coefficient counts ways to choose which r factors contribute b."],
      ["General term and coefficient selection","The general term is T_(r+1)=nCr a^(n-r)b^r for r starting at 0. The first term corresponds to r=0 and the last to r=n. To find a particular power of x, set its exponent equal to the exponent in the general term and solve for r; then verify that r is an integer between 0 and n."],
      ["Coefficients and approximations","Binomial coefficients are symmetric, nCr=nC(n-r), and sum to 2^n. For small x, powers such as (1+x)^n can be approximated by retaining low-order terms if the problem explicitly permits a small-quantity approximation. Do not discard higher-order terms in an exact expansion question."]
    ],
    [
      formula("(a+b)^n=sum[nCr a^(n-r)b^r, r=0..n]","Binomial expansion for non-negative integer n.","Expand or locate a term/coefficient.","Exponents are non-negative integers in this formula.","Use r+1 as the term number."),
      formula("T_(r+1)=nCr a^(n-r)b^r","General term of the expansion.","Find a selected power or term.","Term units follow the factors a,b.","Match the power of x in the full term, including powers inside b."),
      formula("nCr=nC(n-r); sum of coefficients=2^n","Symmetry and coefficient-sum properties.","Check expansion or evaluate coefficient sums.","n is a non-negative integer.","Sum of coefficients comes from substituting a=b=1.")
    ],
    [
      {title:"Find the coefficient of x^3 in (2+x)^5",steps:["General term is 5Cr 2^(5-r)x^r.","Set r=3 for x^3.","Coefficient=5C3 x 2^2=10x4=40.","No other term has power x^3."]},
      {title:"Find the middle term of (a+b)^6",steps:["There are n+1=7 terms.","For odd number of terms, the middle is the 4th term.","Use r=3: T4=6C3 a^3 b^3=20a^3b^3.","If n is odd, there are two middle terms."]
    }],
    ["Mixing the term number r with the zero-based index r.","Forgetting powers applied to the second term, such as (2x)^r.","Giving a coefficient while missing the numerical factor.","Assuming every expansion has one middle term."],
    ["Write the general term before choosing r. Coefficient problems are often easiest by exponent matching, not by expanding all terms."],
    ["How many terms appear in (a+b)^n?","Why do binomial coefficients sum to 2^n?","How do you locate the middle term?"],
    ["Binomial coefficient: nCr.","General term: expression for the (r+1)th term.","Coefficient: numerical factor multiplying a variable power."],
    [practice("Find the coefficient of x^2 in (1+3x)^4.","54.","Choose r=2: 4C2(3x)^2=6x9x^2."),practice("What is the sum of coefficients of (2x-1)^5?","1.","Set x=1: (2-1)^5=1.")]),
  chapter("Class 11","Conic Sections",
    "Recognise circles, parabolas, ellipses and hyperbolas from definitions, standard equations and focal properties.",
    [
      ["Focus-directrix definition and eccentricity","A conic can be described by a locus whose distance from a fixed focus has a constant ratio to distance from a directrix. That ratio is eccentricity e. A circle has e=0 in the limiting classification, a parabola e=1, an ellipse 0<e<1 and a hyperbola e>1. Geometric definitions support the standard equations."],
      ["Standard equations and orientation","The form of the equation shows the axis direction and centre/vertex. A circle has equal squared x and y coefficients. A parabola has only one squared variable, while an ellipse and hyperbola have both x^2 and y^2 terms, with same or opposite signs respectively. Translations shift a centre or vertex; the signs in a standard form determine whether the major/transverse axis is horizontal or vertical."],
      ["Parameters and sketching","For an ellipse, a is the semi-major axis and c is the centre-to-focus distance with c^2=a^2-b^2. For a hyperbola, c^2=a^2+b^2. For a parabola y^2=4ax, the focus is (a,0), directrix x=-a and latus rectum length 4a. Draw the centre/vertex, axis and asymptotes/foci when required rather than relying only on an equation."]
    ],
    [
      formula("Circle: (x-h)^2+(y-k)^2=r^2","Centre (h,k), radius r.","Identify a circle or find its centre/radius.","Coordinates and radius use length units.","Complete squares if equation is general."),
      formula("Parabola y^2=4ax; focus (a,0), directrix x=-a","Standard right-opening parabola when a>0.","Find focus/directrix/vertex from equation.","a has coordinate-length units.","For x^2=4ay the axis is vertical."),
      formula("Ellipse: x^2/a^2+y^2/b^2=1; c^2=a^2-b^2 for a>=b","Standard ellipse centred at origin with horizontal major axis.","Find foci and eccentricity.","a,b,c lengths; e dimensionless.","Which denominator is larger determines the major axis."),
      formula("Hyperbola: x^2/a^2-y^2/b^2=1; c^2=a^2+b^2","Standard horizontal hyperbola centred at origin.","Find foci and asymptotes.","a,b,c lengths; e dimensionless.","The minus sign indicates the transverse axis direction.")
    ],
    [
      {title:"Find the centre and radius",steps:["For x^2+y^2-6x+4y-12=0, group x and y terms.","Complete squares: (x-3)^2-9+(y+2)^2-4-12=0.","Rearrange to (x-3)^2+(y+2)^2=25.","Centre=(3,-2) and radius=5."]},
      {title:"Find the parabola focus",steps:["For y^2=12x, compare with y^2=4ax.","4a=12 so a=3.","Vertex is (0,0), focus is (3,0) and directrix is x=-3.","The axis is horizontal because the y-coordinate is squared."]
    }],
    ["Swapping a and b without checking the major axis.","Using ellipse c^2=a^2+b^2, which belongs to a hyperbola.","Reading a parabola focus from the wrong orientation.","Forgetting to complete squares when centre/radius are not obvious."],
    ["Sketch the conic before reading coordinates. State centre or vertex, axis orientation, focus/directrix or asymptotes when asked."],
    ["What eccentricity range identifies an ellipse?","What determines a parabola's axis orientation?","How does the focus-distance formula differ between ellipse and hyperbola?"],
    ["Focus: fixed point used in a conic definition.","Directrix: fixed line in the conic definition.","Eccentricity: constant focus-distance/directrix-distance ratio."],
    [practice("Identify centre/radius of (x+2)^2+(y-1)^2=9.","Centre=(-2,1), radius=3.","Compare with (x-h)^2+(y-k)^2=r^2."),practice("What is eccentricity of a parabola?","1.","By the focus-directrix definition, distance to focus equals distance to directrix.")]),
  chapter("Class 12","Matrices",
    "Use matrix order, operations, transpose, symmetric/skew-symmetric forms and inverse methods for linear systems.",
    [
      ["Dimensions and matrix equality","A matrix with m rows and n columns is m x n. Two matrices are equal only if they have the same order and corresponding entries are equal. Addition/subtraction requires equal order. Matrix multiplication AB requires columns of A equal rows of B, and the product has the row count of A and column count of B."],
      ["Multiplication, identity and transpose","Matrix multiplication is generally not commutative: AB need not equal BA. The identity matrix leaves a compatible matrix unchanged. The transpose swaps rows and columns, so (AB)^T=B^T A^T. Symmetric matrices satisfy A^T=A and skew-symmetric matrices satisfy A^T=-A; a real skew-symmetric matrix has zero diagonal entries."],
      ["Inverse and solvability","A square matrix is invertible only when its determinant is non-zero. Then A^-1 A=AA^-1=I. A system AX=B can be solved by X=A^-1B only when A is invertible. For a 2x2 matrix, the adjugate formula is manageable; larger matrices may use cofactors/row methods as prescribed. Verify a proposed inverse by multiplication whenever possible."]
    ],
    [
      formula("A(mxn)B(nxp)=C(mxp)","Dimension rule for multiplication.","Check if a product exists and its order.","Order is a dimension, not a unit.","AB may exist while BA does not."),
      formula("(AB)^T=B^T A^T","Transpose reverses product order.","Transpose a product or prove identities.","No physical units in abstract matrices.","Do not keep the original order."),
      formula("A^-1=adj(A)/det(A), det(A)!=0","Inverse formula for square matrices.","Solve AX=B or find the inverse.","det(A) is a scalar.","A singular matrix has no inverse."),
      formula("For 2x2 [[a,b],[c,d]], det=ad-bc","Determinant for a two-by-two matrix.","Check invertibility and calculate inverse.","Scalar expression.","Keep the cross products in the correct order.")
    ],
    [
      {title:"Multiply 2x2 matrices",steps:["For A=[[1,2],[3,4]] and B=[[2,0],[1,5]], each output entry is a row-column dot product.","AB=[[1(2)+2(1),1(0)+2(5)],[3(2)+4(1),3(0)+4(5)]].","So AB=[[4,10],[10,20]].","Check dimensions are 2x2 throughout."]},
      {title:"Inverse of [[2,1],[5,3]]",steps:["Determinant=2(3)-1(5)=1.","Adjugate is [[3,-1],[-5,2]].","Divide by determinant 1: inverse remains [[3,-1],[-5,2]].","Multiplying A by this result gives the identity."]
    }],
    ["Multiplying incompatible matrix dimensions.","Assuming AB=BA.","Applying inverse formula when determinant is zero.","Transposing a product without reversing factor order."],
    ["For matrix equations, isolate the unknown on the correct side and multiply in an order that preserves dimensions. Matrix multiplication order cannot be rearranged as in ordinary scalar algebra."],
    ["When is a matrix invertible?","What is the order of a 3x2 times 2x4 product?","Why does (AB)^T reverse order?"],
    ["Order: row count by column count.","Identity matrix: diagonal ones, other entries zero.","Adjugate: transpose of the cofactor matrix."],
    [practice("Can a 2x3 matrix multiply a 4x2 matrix on the right?","No.","The first matrix has 3 columns but the second has 4 rows."),practice("What is determinant of [[4,2],[6,3]]?","0.","4x3-2x6=12-12=0, so the matrix is singular.")]),
  chapter("Class 12","Determinants",
    "Calculate determinants, use row/column properties, find adjugate/inverse and connect determinants to linear-system solutions and area.",
    [
      ["Meaning and computation","A determinant is a scalar associated with a square matrix. For a 2x2 matrix its value is ad-bc. For a 3x3 determinant, expansion along a row/column combines each entry with its signed minor/cofactor. Pick a row or column containing zeros to reduce arithmetic. The determinant changes with certain row operations, so track any scaling factor or row swap."],
      ["Properties for simplification","Interchanging two rows reverses determinant sign. Multiplying a row by k multiplies determinant by k. Adding a multiple of one row to another leaves the determinant unchanged. Equal/proportional rows make determinant zero. For triangular matrices, the determinant equals the product of diagonal entries. These properties help simplify before expanding."],
      ["Inverse, systems and geometry","A square matrix has an inverse when determinant is non-zero; the adjugate/determinant expression then applies. Cramer's rule solves a square linear system when coefficient determinant is non-zero. For a 2D triangle with vertices (x1,y1),(x2,y2),(x3,y3), a determinant formula gives signed twice-area; absolute value makes area non-negative, and determinant zero signals collinearity."]
    ],
    [
      formula("det([[a,b],[c,d]])=ad-bc","Determinant of a 2x2 matrix.","Evaluate determinant or test invertibility.","Scalar value.","Subtraction order matters."),
      formula("det(A)=0 iff A is singular (square matrix)","Singularity test.","Determine whether an inverse exists.","Scalar determinant.","Determinant zero does not automatically mean a linear system has no solution."),
      formula("A^-1=adj(A)/det(A)","Inverse through cofactor matrix.","Find an inverse if det(A)!=0.","Scalar denominator.","Use transpose of cofactors for adjugate."),
      formula("Area=1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|","Area from coordinate determinant.","Find triangle area or test collinearity.","Square coordinate units.","Absolute value applies to the complete signed expression.")
    ],
    [
      {title:"Simplify a determinant with row operations",steps:["Identify a row operation that creates zeros without scaling the determinant, such as R2 <- R2-2R1.","Perform the operation consistently on every entry in the row.","Expand along the row with zeros.","If a row was multiplied by k or two rows swapped, adjust the determinant accordingly."]},
      {title:"Classify a linear system",steps:["Form the coefficient matrix A and compute det(A).","If det(A)!=0, A is invertible and the system AX=B has a unique solution.","If det(A)=0, the inverse/Cramer's method does not apply directly.","Inspect consistency/rank or the original equations to distinguish no solution from infinitely many solutions."]
    }],
    ["Forgetting determinant sign changes after swapping rows.","Using the inverse formula when determinant is zero.","Concluding a zero determinant always means no solution.","Forgetting the absolute value in coordinate area."],
    ["In determinant simplification, annotate each row operation. For system questions, use det(A) as a first classification test, then check singular cases instead of guessing."],
    ["Which row operation changes the determinant's sign?","What does determinant zero establish?","How can a determinant show three points are collinear?"],
    ["Minor: determinant obtained after removing a row and column.","Cofactor: signed minor.","Singular matrix: square matrix with zero determinant."],
    [practice("Find det([[3,1],[2,5]]).","13.","3x5-1x2=15-2=13."),practice("A square matrix has determinant 0. Does it have an inverse?","No.","The inverse formula requires a non-zero determinant.")]),
  chapter("Class 12","Continuity and Differentiability",
    "Evaluate limits, test continuity and differentiability, and apply derivative rules, implicit differentiation and chain rule.",
    [
      ["Limits and continuity","A function is continuous at x=a when its two-sided limit exists and equals f(a). For piecewise functions, calculate left and right limits separately, then compare them to each other and to the assigned value. An algebraic expression may simplify for x not equal a while the value at a remains separately defined. A removable hole can be filled to restore continuity if the finite limit exists."],
      ["Differentiability and derivative rules","Differentiability requires a finite common left/right derivative at the point. Differentiability implies continuity, but continuity does not guarantee differentiability; corners, cusps and vertical tangents are common counterexamples. Product, quotient and chain rules reduce compound expressions. In the chain rule, differentiate the outer function and multiply by the derivative of the inner function."],
      ["Implicit and logarithmic differentiation","If x and y are linked by an equation, differentiate both sides with respect to x and treat y as a function of x, so d(y^n)/dx=n y^(n-1) dy/dx. Logarithmic differentiation simplifies products and variable powers when the domain permits logarithms. After solving for dy/dx, substitute the requested point and check the denominator is not zero."]
    ],
    [
      formula("Continuity at a: lim(x->a)f(x)=f(a)","Limit equals the actual function value.","Test a piecewise function at its boundary.","No physical units in pure math functions.","Matching left/right limits alone is not enough if f(a) differs."),
      formula("Product rule: (uv)'=u'v+uv'","Derivative of a product.","Differentiate two multiplied functions.","Derivative units are output units/input units.","Do not differentiate only one factor."),
      formula("Quotient rule: (u/v)'=(u'v-uv')/v^2","Derivative of a quotient.","Differentiate a ratio with v!=0.","Check denominator domain.","The numerator order is u'v-uv'."),
      formula("Chain rule: d[f(g(x))]/dx=f'(g(x))g'(x)","Derivative of a composite function.","Differentiate an outer function of an inner expression.","Derivative units multiply through the chain.","Do not omit the inner derivative.")
    ],
    [
      {title:"Continuity of a piecewise function",steps:["For x<a use the left expression to compute the left-hand limit at a.","For x>a compute the right-hand limit.","Equate the limits and the value f(a) to solve any unknown parameter.","Check all three values explicitly rather than stating continuity from appearance."]},
      {title:"Differentiate y=(3x^2+1)^5",steps:["Outer function is u^5, derivative 5u^4.","Inner function u=3x^2+1 has derivative 6x.","By chain rule y'=5(3x^2+1)^4(6x)=30x(3x^2+1)^4.","Differentiate the final result mentally against the structure of the original function."]
    }],
    ["Equating only one-sided limits in a continuity problem.","Confusing continuity with differentiability.","Missing the inner derivative in chain rule.","Using quotient rule with incorrect numerator sign."],
    ["For piecewise continuity, explicitly state LHL, RHL and f(a). For differentiability, compute left/right derivatives at the boundary when required."],
    ["Does differentiability imply continuity?","Give an example of a continuous but non-differentiable function at one point.","What factor is multiplied by the outer derivative in chain rule?"],
    ["LHL: left-hand limit.","RHL: right-hand limit.","Differentiability: existence of a common finite derivative."],
    [practice("Differentiate sin(2x).","2cos(2x).","The outer derivative is cos(2x) and the inner derivative is 2."),practice("Is f(x)=|x| differentiable at 0?","No.","Left derivative is -1 and right derivative is +1, so they do not agree.")]),
  chapter("Class 12","Integrals",
    "Use antiderivatives, substitution, integration by parts, partial fractions and definite-integral properties to calculate accumulation and area.",
    [
      ["Indefinite integrals and constant","An indefinite integral is a family of antiderivatives, so add a constant C. Verify an antiderivative by differentiating it. The power rule works for x^n when n is not -1; the n=-1 case gives ln|x|. Algebraic simplification before integration can reveal a standard form and reduce errors."],
      ["Choose a method deliberately","Substitution reverses the chain rule: identify an inner expression and its differential. Integration by parts reverses the product rule and is useful when differentiating one factor simplifies it. Partial fractions decompose a proper rational function into simpler fractions after factoring the denominator. If a rational function is improper, perform polynomial division first."],
      ["Definite integrals and area","A definite integral represents signed accumulation and satisfies reversal/additivity properties. The integral changes sign if the limits are swapped. Geometric area is non-negative, so split at x-axis crossings or curve intersections and integrate absolute height/top-minus-bottom on each interval. Use symmetry only after checking the integrand is even/odd and the limits match."]
    ],
    [
      formula("Integral x^n dx = x^(n+1)/(n+1)+C, n!=-1","Power rule for antiderivatives.","Integrate a simple power.","C is arbitrary constant.","For n=-1, use ln|x|+C."),
      formula("Integral u dv = uv - Integral v du","Integration by parts.","Integrate a product when one factor simplifies on differentiation.","Units follow the integral/product.","Choose u and dv to make the remaining integral simpler."),
      formula("u=g(x), du=g'(x)dx","Substitution rule.","Reverse the chain rule.","Transform both integrand and differential.","Do not leave mixed x and u after substitution."),
      formula("Area between curves=Integral(top-bottom) dx","Geometric area when the upper function is fixed on the interval.","Calculate region bounded by curves.","Area units are coordinate-unit squared.","Split interval when which curve is on top changes.")
    ],
    [
      {title:"Integrate 2x cos(x^2)",steps:["Let u=x^2, hence du=2x dx.","The integral becomes integral cos(u) du.","Result is sin(u)+C=sin(x^2)+C.","Differentiate sin(x^2) to verify the integrand."]},
      {title:"Area between y=x and y=x^2 from 0 to 1",steps:["Find intersections x=x^2, giving x=0 and x=1.","On [0,1], x is above x^2.","Area=integral_0^1(x-x^2)dx=[x^2/2-x^3/3]_0^1.","Area=1/2-1/3=1/6 square units."]
    }],
    ["Forgetting +C in an indefinite integral.","Using the power rule for x^-1.","Selecting u and dv that make integration by parts harder.","Treating signed integral as geometric area when the curve lies below the axis."],
    ["State the selected method and its substitution/parts choice. For definite integrals, preserve the limits carefully; when substituting, transform limits or return to x before evaluating."],
    ["Why is +C necessary?","When do you split an area integral?","Which method reverses the chain rule?"],
    ["Antiderivative: function whose derivative is the integrand.","Substitution: variable change used to simplify an integral.","Signed area: integral where below-axis contributions are negative."],
    [practice("Integrate 6x(3x^2+1)^4 dx.","(3x^2+1)^5/5+C.","Set u=3x^2+1, du=6x dx."),practice("Evaluate integral_0^2 3x^2 dx.","8.","Antiderivative is x^3; evaluate 2^3-0=8.")]),
  chapter("Class 12","Applications of Derivatives",
    "Interpret derivatives as rates, find tangents/normals, intervals of monotonicity and local/absolute extrema.",
    [
      ["Derivative as rate and slope","The derivative f'(a) is the instantaneous rate of change and the slope of the tangent to y=f(x) at x=a. If the function models distance against time, derivative has velocity units; if it models cost against output, it is marginal rate of change. A derivative is local, so state the point/interval and units when interpreting it in context."],
      ["Increasing/decreasing and sign charts","Where f'(x)>0 on an interval, f is increasing there; where f'(x)<0, it is decreasing. Critical numbers are domain points where f'=0 or f' fails to exist. Build a sign chart from critical numbers to see where derivative changes sign. A stationary point is not automatically a maximum or minimum; for example, x^3 has f'(0)=0 but continues increasing."],
      ["Optimisation","Define the quantity to maximise/minimise and express it as a function of one variable, including the allowed domain. Solve f'=0 for interior candidates, then compare function values at candidates and domain endpoints for absolute extrema on a closed interval. In word problems, do not forget constraints such as positive lengths and fixed perimeter/volume."]
    ],
    [
      formula("Tangent slope at x=a is f'(a)","Derivative gives instantaneous slope.","Find tangent line or interpret rate.","Output units per input unit.","Evaluate derivative at the point after differentiating."),
      formula("Tangent: y-f(a)=f'(a)(x-a)","Point-slope equation for tangent.","Find tangent line.","Line units follow x/y coordinates.","Use point (a,f(a)), not (a,f'(a))."),
      formula("Normal slope=-1/f'(a) when f'(a)!=0","Perpendicular line slope.","Find normal line.","Slope is dimensionless for same coordinate scale.","If tangent is horizontal, normal is vertical and cannot be written with finite slope."),
      formula("f'>0 increasing; f'<0 decreasing","Derivative-sign criteria.","Determine monotonic intervals.","No unit in sign test.","Check all critical points and domain boundaries.")
    ],
    [
      {title:"Tangent to y=x^2 at x=2",steps:["f(2)=4 and f'(x)=2x.","Slope at x=2 is 4.","Tangent: y-4=4(x-2), so y=4x-4.","Check point (2,4) satisfies the line."]},
      {title:"Absolute minimum on a closed interval",steps:["Find derivative and all critical points inside the interval.","Evaluate f at each critical point and both endpoints.","Compare the finite values.","The smallest is the absolute minimum; an interior derivative test alone is not enough."]
    }],
    ["Assuming f'=0 always means extremum.","Forgetting interval endpoints in absolute optimisation.","Using the derivative value as the point's y-coordinate.","Using a finite normal-slope formula when the tangent is horizontal."],
    ["For optimisation, define the variable/domain and compare candidate values. For monotonicity, use derivative sign intervals rather than isolated test points only."],
    ["What are critical numbers?","Why can f'(a)=0 without a maximum/minimum?","How do you obtain the tangent equation?"],
    ["Critical number: domain point where derivative is zero or does not exist.","Monotonicity: behaviour of increasing/decreasing over an interval.","Absolute extremum: greatest/smallest function value on the full domain/interval."],
    [practice("Find slope of y=x^3 at x=2.","12.","f'=3x^2; f'(2)=12."),practice("Find intervals of increase for f=x^2-4x.","Increasing for x>2; decreasing for x<2.","f'=2x-4 changes sign from negative to positive at x=2.")]),
  chapter("Class 12","Differential Equations",
    "Form and solve first-order differential equations, classify order/degree, separate variables and apply initial conditions.",
    [
      ["Order, degree and solution","The order is the highest derivative present. Degree is the power of the highest-order derivative after the equation is expressed as a polynomial in derivatives (and radicals/fractions are cleared appropriately), when this is defined. A general solution contains arbitrary constants; an initial condition determines constants for a particular solution. A differential equation describes a family of functions, not just a number."],
      ["Variable separable equations","If dy/dx=g(x)h(y), rearrange so all y terms are on one side and all x terms on the other, then integrate both sides. Division by h(y) can lose constant solutions where h(y)=0; check those separately. Keep +C and then use the initial condition. After integrating, solve algebraically for y only if possible and respect any domain restrictions."],
      ["Linear first-order form","A first-order linear equation has form dy/dx+P(x)y=Q(x). An integrating factor is e^(integral P(x)dx). Multiply the equation by it so the left side becomes the derivative of the product (IF*y); integrate both sides, then solve for y. Confirm the product derivative and use the given initial value only after obtaining the general form."]
    ],
    [
      formula("Order = highest derivative order","Classification by the highest derivative present.","Identify order of a differential equation.","Order is an integer.","Degree is different from order."),
      formula("dy/dx=g(x)h(y) => integral dy/h(y)=integral g(x)dx","Variable-separable method.","Solve a first-order equation separable in x,y.","Differentials correspond to variables.","Check h(y)=0 solutions before dividing."),
      formula("IF=e^(integral P(x)dx)","Integrating factor for dy/dx+P(x)y=Q(x).","Solve a first-order linear differential equation.","Exponent is dimensionless under a consistent model.","Use P(x), not Q(x), in the integrating factor."),
      formula("d(IF*y)/dx=IF*Q(x)","Product-derivative form after multiplying by IF.","Integrate the linear equation.","Derivative units match both sides.","Do not omit the arbitrary constant after integration.")
    ],
    [
      {title:"Solve dy/dx=xy",steps:["Separate variables: (1/y)dy=x dx, assuming y is nonzero in this step.","Integrate: ln|y|=x^2/2+C.","Thus y=C1 e^(x^2/2); also check y=0 as a solution.","Use an initial condition to find C1 if supplied."]},
      {title:"Solve dy/dx+y=1",steps:["P(x)=1, so integrating factor IF=e^(integral 1 dx)=e^x.","Multiply through: e^x dy/dx+e^x y=e^x.","Recognise d(e^x y)/dx=e^x; integrate to get e^x y=e^x+C.","Hence y=1+Ce^(-x)."]
    }],
    ["Confusing order with degree.","Dividing by a factor that can be zero and losing a solution.","Using Q(x) instead of P(x) in the integrating factor.","Applying the initial condition before deriving the general solution."],
    ["Write the standard form before classifying or choosing a method. For separable equations, show both integrals; for linear equations, display the integrating factor and product derivative."],
    ["What is the difference between order and degree?","Why should zero-factor solutions be checked after separation?","Which coefficient determines the integrating factor?"],
    ["General solution: family including arbitrary constants.","Initial condition: given value used to determine constants.","Integrating factor: multiplier converting a linear equation into a product derivative."],
    [practice("Solve dy/dx=2x, y(0)=3.","y=x^2+3.","Integrate to y=x^2+C; condition y(0)=3 gives C=3."),practice("What is the order of d^2y/dx^2+(dy/dx)^3=0?","Second order.","The highest derivative is the second derivative, so order=2.")]),
  chapter("Class 12","Vector Algebra and Three-Dimensional Geometry",
    "Use vector components, dot/cross products, lines and planes to calculate angles, projections and distances in three dimensions.",
    [
      ["Vectors and components","A vector has magnitude and direction. Express it in i,j,k components; magnitude is the square root of the sum of squared components. Addition is componentwise. A unit vector has magnitude one and points in the original vector's direction. If a vector is given by two points, subtract the initial point coordinates from the terminal point coordinates."],
      ["Dot and cross products","The dot product is a scalar equal to |a||b|cos(theta); perpendicular non-zero vectors have dot product zero. The scalar projection of a on b divides a dot b by |b|. The cross product is perpendicular to both vectors and its magnitude is |a||b|sin(theta), equal to parallelogram area. Cross-product order matters: a x b=-(b x a)."],
      ["Lines, planes and distances","A 3D line is described by a point plus a direction vector. A plane equation ax+by+cz+d=0 has normal vector (a,b,c). Angle-between-lines uses direction vectors; angle-between-planes uses normal vectors. The distance of a point from a plane is the absolute plane-expression value divided by normal magnitude. For skew lines, the common perpendicular direction comes from the cross product of their direction vectors."]
    ],
    [
      formula("a.b=|a||b|cos(theta)","Dot product and angle/projection.","Find angle or test perpendicularity.","Dot product units are product of vector units.","Dot product is scalar."),
      formula("|a x b|=|a||b|sin(theta)","Cross-product magnitude and area.","Find perpendicular vector or parallelogram area.","Area units are product of length units.","Order swap reverses the vector sign."),
      formula("Unit vector a-hat=a/|a|","Normalise a non-zero vector.","Represent direction with unit magnitude.","Dimensionless if a represents length.","Cannot normalise the zero vector."),
      formula("Point-plane distance=|ax0+by0+cz0+d|/sqrt(a^2+b^2+c^2)","Perpendicular distance to plane ax+by+cz+d=0.","Find shortest point-to-plane distance.","Length units when coordinates are lengths.","Absolute value is required and denominator is normal magnitude.")
    ],
    [
      {title:"Angle between vectors",steps:["For a=(1,2,2), b=(2,1,2), dot product=2+2+4=8.","Each magnitude is 3.","cos(theta)=8/9, so theta=cos^-1(8/9).","Check the ratio lies between -1 and 1."]},
      {title:"Distance from point to plane",steps:["Plane is 2x-y+2z-5=0; point is (1,2,3).","Numerator absolute value=|2(1)-2+6-5|=1.","Normal magnitude=sqrt(2^2+(-1)^2+2^2)=3.","Distance=1/3 units."]
    }],
    ["Using position vectors where a direction vector is required.","Confusing dot-product scalar with cross-product vector.","Forgetting absolute value in distance formulas.","Assuming nonparallel 3D lines always intersect."],
    ["Make clear whether each vector is a position or direction vector. State the angle's defining vectors, and verify skew-line claims using both direction and intersection conditions."],
    ["What does a dot product of zero indicate for non-zero vectors?","Why is cross-product order important?","What vector is normal to a plane equation?"],
    ["Position vector: vector from origin to a point.","Direction vector: vector parallel to a line.","Normal vector: vector perpendicular to a line/plane."],
    [practice("Find magnitude of (2,-3,6).","7.","sqrt(4+9+36)=sqrt49=7."),practice("What is a normal vector to 3x+4y-z+8=0?","(3,4,-1).","The coefficients of x,y,z form the plane normal.")]),
  chapter("Class 12","Probability Distributions",
    "Use random variables, probability distributions, expectation and variance; distinguish mutually exclusive events from independent events.",
    [
      ["Random variables and distributions","A random variable assigns a numerical value to each outcome. A discrete probability distribution lists possible values x_i with probabilities p_i; probabilities must be non-negative and sum to one. The cumulative distribution gives P(X<=x) by adding the relevant probabilities. The expected value is a probability-weighted average and need not be one of the possible outcomes."],
      ["Expectation and variance","The mean E(X)=sum x_i p_i represents long-run average for repeated trials under the model. Variance measures spread around the mean and is E(X^2)-[E(X)]^2. Standard deviation is the square root of variance. A constant shift changes the mean but not variance; multiplying a variable by a constant scales variance by the square of that constant."],
      ["Binomial distribution","A binomial model counts successes in n independent trials, each with the same success probability p, where each trial has two relevant outcomes. The probability of exactly r successes includes nCr because any r of n trials may be the successes. Mean=np and variance=np(1-p). Check independence, fixed n and constant p before applying the formula."]
    ],
    [
      formula("sum p_i=1; p_i>=0","Validity conditions for a discrete distribution.","Check or build a distribution.","Probabilities are dimensionless.","Round-off should not be used to justify a materially incorrect total."),
      formula("E(X)=sum x_i p_i","Expected value of a discrete random variable.","Find distribution mean.","Same unit as X.","Weight each value by its probability."),
      formula("Var(X)=E(X^2)-[E(X)]^2","Variance of a discrete variable.","Measure spread around the mean.","Square of X's units.","Do not use E(X^2)-E(X) as the formula."),
      formula("P(X=r)=nCr p^r(1-p)^(n-r)","Binomial probability for r successes in n trials.","Count successes under independent, identical Bernoulli trials.","Dimensionless.","Check fixed n and constant p.")
    ],
    [
      {title:"Find expectation",steps:["For X taking 0,1,2 with probabilities 0.2,0.5,0.3, first check the probabilities sum to one.","E(X)=0(0.2)+1(0.5)+2(0.3)=1.1.","E(X^2)=0+1(0.5)+4(0.3)=1.7.","Variance=1.7-(1.1)^2=0.49."]},
      {title:"Binomial exactly two successes",steps:["For n=5 and p=0.2, calculate P(X=2).","P=5C2(0.2)^2(0.8)^3.","5C2=10, so P=10(0.04)(0.512)=0.2048.","The probability lies between zero and one."]
    }],
    ["Using probabilities that do not sum to one.","Confusing E(X^2) with [E(X)]^2.","Applying binomial formula to dependent trials or varying probabilities.","Forgetting nCr in the number of ways to place successes."],
    ["Write distribution columns x, p, xp and x^2p for expectation/variance calculations. For binomial models, verify the three assumptions before substituting."],
    ["What conditions must a discrete distribution satisfy?","How does variance change under X->3X?","What assumptions define a binomial model?"],
    ["Random variable: numeric outcome mapping.","Expectation: probability-weighted mean.","Variance: expected squared deviation from mean."],
    [practice("If X has probabilities P(0)=0.4 and P(1)=0.6, find E(X).","0.6.","E(X)=0(0.4)+1(0.6)=0.6."),practice("For a fair coin tossed twice, what is P(exactly one head)?","1/2.","2C1(1/2)(1/2)=2/4=1/2.")])
  ];

  all.push(
  chapter("Class 11","Limits and Derivatives",
    "Study the limiting value of functions and the derivative as a local rate of change, with algebraic and standard-trigonometric limits.",
    [
      ["Meaning of a limit","The limit of f(x) as x approaches a describes the value the function approaches near a, not necessarily f(a). The function may be undefined at a yet have a finite limit. For a two-sided limit to exist, the left-hand and right-hand limits must exist and agree. Start with substitution; when it produces 0/0, factor, rationalise or use a known limit."],
      ["Standard limits and algebra","The limit of (x^n-a^n)/(x-a) as x approaches a equals n a^(n-1) for positive integer n, reflecting factorisation. The standard trigonometric limits are defined in radians. When rationalising a square-root expression, multiply numerator and denominator by the conjugate so a difference of squares appears. Do not cancel terms across addition; only common factors can be cancelled."],
      ["Derivative as a limit","The derivative f'(a)=lim(h->0)[f(a+h)-f(a)]/h is the slope of the tangent and instantaneous rate of change. Expanding f(a+h), simplifying and only then taking h to zero avoids the common 0/0 error. At this level, derivatives of simple polynomials and basic trigonometric functions can be obtained from first principles before rules are generalised."]
    ],
    [
      formula("lim(x->a) [f(x)-f(a)]/(x-a)=f'(a)","First-principles derivative at a.","Derive a derivative from its definition.","Derivative units are output/input units.","Set x=a+h to match the common h-form."),
      formula("lim(x->0) sin x/x=1","Standard trigonometric limit in radians.","Evaluate small-angle limits.","Dimensionless.","It is not generally 1 if x is measured in degrees inside the formula."),
      formula("lim(x->0) (1-cos x)/x^2=1/2","Standard cosine limit in radians.","Evaluate expressions involving 1-cos x.","Dimensionless.","Rationalising or using an identity may be needed before applying it."),
      formula("d(x^n)/dx=n x^(n-1)","Derivative of a power.","Differentiate a monomial.","If x has units, derivative units follow calculus rate rules.","The exponent moves down and is reduced by one.")
    ],
    [
      {title:"Evaluate lim(x->2)(x^2-4)/(x-2)",steps:["Direct substitution yields 0/0, so factor the numerator.","x^2-4=(x-2)(x+2).","For x not equal 2, cancel the common factor to get x+2.","The limit is 4; this does not require the original quotient to be defined at x=2."]},
      {title:"Differentiate x^2 from first principles",steps:["Write f'(x)=lim(h->0)[(x+h)^2-x^2]/h.","Expand to x^2+2xh+h^2-x^2=2xh+h^2.","Divide by h: 2x+h.","Let h approach zero; derivative is 2x."]
    }],
    ["Cancelling terms that are not factors.","Substituting before resolving a 0/0 form.","Using trigonometric standard limits in degree mode.","Confusing the derivative at a point with the derivative function."],
    ["Show the algebraic transformation before substituting a limit. In first-principles derivatives, expand and cancel h before taking the limit."],
    ["Can a limit exist if f(a) is undefined?","Why is cancellation allowed for x!=a in a limit?","What does the derivative represent geometrically?"],
    ["Limit: value approached near a point.","Derivative: instantaneous rate of change.","Indeterminate form: expression such as 0/0 needing further analysis."],
    [practice("Find lim(x->3)(x^2-9)/(x-3).","6.","Factor to (x-3)(x+3), cancel and take x->3."),practice("Differentiate 4x^3 from the power rule.","12x^2.","Multiply by the exponent 3 and reduce the power by one, retaining the coefficient 4.")]),
  chapter("Class 11","Straight Lines",
    "Represent lines using slope, point-slope/intercept forms, angles, parallelism and perpendicularity, and calculate distances.",
    [
      ["Slope and line forms","The slope m=(y2-y1)/(x2-x1) measures vertical change per horizontal change for a non-vertical line. A vertical line has undefined slope and equation x=a. Point-slope form y-y1=m(x-x1) fixes a line through a known point. Slope-intercept y=mx+c is useful when y-intercept is known, and general form Ax+By+C=0 highlights a normal vector."],
      ["Angles and special lines","Parallel non-vertical lines have equal slopes; perpendicular non-vertical lines have slope product -1. These slope tests should not be used uncritically for vertical lines. The angle between line directions can also be found through the tangent formula. A line through the origin is y=mx unless it is vertical."],
      ["Distance and families of lines","The perpendicular distance from point (x0,y0) to line Ax+By+C=0 is the absolute expression value divided by sqrt(A^2+B^2). It is not the length to an arbitrary point on the line. When a parameter appears in the line equation and a condition such as parallel/perpendicular is given, first extract the slope or normal direction and then impose the condition."]
    ],
    [
      formula("m=(y2-y1)/(x2-x1)","Slope between two points.","Find line direction or equation.","Coordinate units cancel if x and y use the same scale.","If x2=x1, the line is vertical and slope is undefined."),
      formula("y-y1=m(x-x1)","Point-slope equation.","Line through a point with known slope.","Units follow coordinates.","Use the actual point coordinates with matching signs."),
      formula("m1*m2=-1","Perpendicular slopes when both are finite and nonzero.","Check perpendicularity.","Dimensionless slopes.","Vertical and horizontal lines are perpendicular but one slope is undefined."),
      formula("Distance=|Ax0+By0+C|/sqrt(A^2+B^2)","Perpendicular point-to-line distance.","Compute shortest distance.","Same units as coordinates.","Absolute value and normal magnitude are both required.")
    ],
    [
      {title:"Equation through (2,-1) with slope 3",steps:["Use y-y1=m(x-x1).","y+1=3(x-2).","Expand: y=3x-7.","Check the line passes through the point and has slope 3."]},
      {title:"Distance from (1,2) to 3x+4y-10=0",steps:["Substitute into the line expression: 3(1)+4(2)-10=1.","Normal magnitude is sqrt(3^2+4^2)=5.","Distance=|1|/5=0.2 units."]
    }],
    ["Using the slope formula for a vertical line.","Thinking perpendicular lines always have negative reciprocals when one is vertical/horizontal.","Forgetting the absolute value in distance.","Mixing x/y coordinates while writing point-slope form."],
    ["Draw or identify the slope before choosing a line form. For distance questions, use the coefficient form rather than substituting a convenient but non-perpendicular point."],
    ["What is the equation of a vertical line?","How can a pair of slopes establish perpendicularity?","What direction is normal to Ax+By+C=0?"],
    ["Slope: line steepness/direction ratio.","Normal vector: vector perpendicular to a line.","Intercept: point where a line meets an axis."],
    [practice("Find slope through (-1,2) and (3,10).","2.","(10-2)/(3-(-1))=8/4=2."),practice("Are 2x+3y=5 and 3x-2y=4 perpendicular?","Yes.","Their slopes are -2/3 and 3/2; their product is -1.")]),
  chapter("Class 11","Probability",
    "Define sample spaces and events, calculate classical probability and use complement, union, mutually exclusive and independent-event rules.",
    [
      ["Sample space and events","A random experiment has a set S of possible outcomes. An event A is a subset of S. For equally likely outcomes P(A)=n(A)/n(S). Check whether outcomes really are equally likely; the formula is not simply a ratio of counts for a biased spinner or a loaded coin. The empty event has probability zero and the sample space itself has probability one."],
      ["Event operations","The complement A' includes outcomes in S that are not in A, so P(A')=1-P(A). For mutually exclusive events, the events cannot occur together and P(A union B)=P(A)+P(B). In the general case, subtract the overlap: P(A union B)=P(A)+P(B)-P(A intersection B). Use a Venn diagram to avoid double counting."],
      ["Independence and conditional information","Events A and B are independent if P(A intersection B)=P(A)P(B), equivalently the occurrence of one does not change the probability of the other under valid non-zero conditions. Mutually exclusive events with positive probabilities are not independent. Conditional probability restricts attention to outcomes where the given event occurred. In repeated independent trials, the multiplication rule comes from multiplying stage probabilities."]
    ],
    [
      formula("P(A)=n(A)/n(S)","Classical probability for equally likely outcomes.","Count finite outcomes.","0<=P(A)<=1.","Verify the equally-likely assumption."),
      formula("P(A')=1-P(A)","Complement rule.","Find probability of not-A.","Dimensionless.","Complement is defined relative to S."),
      formula("P(A union B)=P(A)+P(B)-P(A intersection B)","Addition rule for two events.","Find probability that A or B occurs.","Dimensionless.","Subtract overlap exactly once."),
      formula("Independent: P(A intersection B)=P(A)P(B)","Independence criterion.","Combine independent events.","Dimensionless.","Disjointness and independence are different ideas.")
    ],
    [
      {title:"Probability of at least one head in two fair-coin tosses",steps:["The outcomes are HH, HT, TH, TT, each equally likely.","At least one head occurs in HH, HT and TH.","Probability=3/4.","Alternatively use complement: 1-P(TT)=1-1/4=3/4."]},
      {title:"Union of events with overlap",steps:["Suppose P(A)=0.5, P(B)=0.4 and P(A intersection B)=0.2.","Use P(A union B)=0.5+0.4-0.2.","P(A union B)=0.7.","The overlap is subtracted because it was counted in both original terms."]
    }],
    ["Assuming all outcomes are equally likely without checking.","Adding event probabilities without subtracting their overlap.","Calling mutually exclusive events independent.","Confusing P(A|B) with P(B|A)."],
    ["Draw a sample space for small experiments. For compound events, identify whether the events are disjoint, independent or conditioned before selecting a rule."],
    ["Can two disjoint positive-probability events be independent?","Why does the union formula subtract the intersection?","What is the complement of an event?"],
    ["Sample space: set of all possible outcomes.","Mutually exclusive: events whose intersection is empty.","Independent events: occurrence of one does not change the probability of the other."],
    [practice("A fair die is rolled. Find probability of an even number.","1/2.","Even outcomes are 2,4,6, so 3/6=1/2."),practice("If P(A)=0.6, find P(A').","0.4.","Use 1-0.6=0.4.")])
  );
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(all);
})();
