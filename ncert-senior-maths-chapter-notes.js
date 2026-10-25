/* Individual, original senior-secondary mathematics chapter notes for Classes XI and XII.
   Each chapter is a printable study chapter, not just a formula list. */
(function () {
  "use strict";
  const make = (level, subject, chapter, intro, sections, formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary) => ({
    level, subject, chapter, intro,
    sections: sections.map(([heading, body]) => ({ heading, body })),
    formulas: formulaCheatSheet.map((x) => x.formula),
    formulaCheatSheet, workedExamples, commonMistakes, examFocus, recall, glossary,
    points: sections.map(([heading, body]) => heading + ": " + body.split(/[.!?]/)[0] + "."),
    example: workedExamples.length ? workedExamples[0].steps.join(" ") : "Revisit the formula cards and solve the textbook exercise examples independently.",
    depth: "detailed",
    sourceNote: "Original chapter-specific notes based on common NCERT/CBSE Mathematics concepts. Check your current CBSE syllabus and prescribed textbook edition for exact examinable subtopics."
  });
  const notes = [
    make("Class 11","Mathematics","Sets",
      "Build the language of sets, subsets, operations, interval notation and Venn-diagram counting used throughout probability and functions.",
      [
        ["Set notation and ways of describing sets","A set is a well-defined collection of distinct objects. Listing elements uses roster form, while set-builder form states the property that members satisfy. Order does not matter and repeated listing does not create new members. The empty set contains no elements; a singleton contains exactly one. Use braces for sets and distinguish an element a∈A from a subset {a}⊆A."],
        ["Subsets, universal set and complement","A⊆B means every element of A is also in B. A proper subset A⊂B excludes equality under the common notation convention, so check the convention in your text. The universal set U contains the objects relevant to the question. The complement A′ or Aᶜ consists of elements of U not in A. Complements cannot be defined meaningfully until U is specified."],
        ["Union, intersection and difference","A∪B contains elements in A or B or both; A∩B contains only elements shared by both. A−B keeps elements of A not in B, and order matters: A−B need not equal B−A. Disjoint sets have empty intersection. Venn diagrams help identify overlap before using counting formulas, especially when a problem says 'at least one', 'only A' or 'neither'."],
        ["Counting elements and De Morgan's laws","For finite sets, n(A∪B)=n(A)+n(B)−n(A∩B), because the intersection was counted twice and must be subtracted once. For three sets, add each individual size, subtract each pairwise intersection, then add the triple intersection. De Morgan's laws say (A∪B)′=A′∩B′ and (A∩B)′=A′∪B′. Interpret these in words before drawing a diagram."]
      ],
      [
        {formula:"n(A∪B)=n(A)+n(B)−n(A∩B)",meaning:"Counts members in either finite set without double-counting overlap.",when:"Two-set survey questions.",units:"Number of elements.",trap:"If sets are disjoint, intersection is zero; do not subtract a nonexistent overlap."},
        {formula:"(A∪B)′=A′∩B′; (A∩B)′=A′∪B′",meaning:"De Morgan's complement laws.",when:"Translate 'not A or B' and 'not both A and B' precisely.",units:"Set identity.",trap:"Complement distributes by swapping union and intersection."},
        {formula:"Number of subsets of an n-element set = 2ⁿ",meaning:"Each element has two independent choices: included or excluded.",when:"Count all subsets, including the empty set and the full set.",units:"Integer count.",trap:"Proper subsets exclude the full set, giving 2ⁿ−1."}
      ],
      [
        {title:"Survey with two interests",steps:["In a class of 40, 23 study Mathematics, 19 study Biology and 8 study both.","n(M∪B)=23+19−8=34.","Neither subject=40−34=6.","Mathematics only=23−8=15; Biology only=19−8=11. Check: 15+8+11+6=40."]},
        {title:"Count subsets",steps:["A={a,b,c,d} has n=4 elements.","Each element is either selected or not selected.","Total subsets=2⁴=16, including ∅ and A.","Proper subsets=16−1=15 if proper means every subset except the full set."]},
        {title:"Translate a complement",steps:["U is the students in a class; A is those who play football and B those who play chess.","(A∪B)′ means students who play neither.","By De Morgan, it equals A′∩B′.","In words: students who are not in A and are not in B."]}
      ],
      ["Writing a∈A when the statement is actually {a}⊆A.","Forgetting the overlap in union counting.","Using a complement without defining the universal set.","Confusing A−B with B−A."],
      ["CBSE: notation, set operations, intervals and Venn-counting. JEE: multi-set counting, identities and careful interpretation of 'only', 'at least one' and complements."],
      ["How many subsets does a 6-element set have?","What does A−B mean in words?","Why is the intersection subtracted in the union formula?"],
      ["Subset: set whose elements are all in another set.","Disjoint: sets with empty intersection.","Universal set: all objects relevant to the problem."]),
    make("Class 11","Mathematics","Relations and Functions",
      "Learn Cartesian products, relations as sets of ordered pairs, domain/range, function tests, composition and types of mappings.",
      [
        ["Cartesian products and ordered pairs","The Cartesian product A×B is the set of ordered pairs (a,b) with a∈A and b∈B. Order matters: generally (a,b)≠(b,a). If A and B are finite, n(A×B)=n(A)n(B). A relation from A to B is any subset of A×B, so relations can contain no pairs, one pair or many pairs."],
        ["Domain, codomain and range","The domain contains allowed inputs, codomain is the declared target set, and range is the set of outputs actually produced. For a function, each input in the domain must have exactly one output. Different inputs may share an output unless one-to-one behaviour is required. In an algebraic expression, denominator restrictions, even roots and logarithms may limit the domain."],
        ["Function tests and mapping types","A relation is a function if no input is assigned two different outputs and each domain element is assigned one output. One-one (injective) functions send distinct inputs to distinct outputs. Onto (surjective) functions have range equal to the codomain. Bijective functions are both and have an inverse mapping. A graph is a function of x when every vertical line intersects the graph at most once."],
        ["Composition and inverse","For f:A→B and g:B→C, (g∘f)(x)=g(f(x)); order matters, so g∘f usually differs from f∘g. The output of f must lie in the domain of g. An inverse function exists on the stated sets when f is bijective; find it by writing y=f(x), swapping x and y, and solving for y, while tracking domain and range restrictions."]
      ],
      [
        {formula:"n(A×B)=n(A)n(B) for finite sets",meaning:"Counts all ordered pairs from two sets.",when:"Count relations or Cartesian-product elements.",units:"Integer count.",trap:"A×B and B×A can have the same size but different ordered pairs."},
        {formula:"(g∘f)(x)=g(f(x))",meaning:"Apply f first, then g.",when:"Composition of functions.",units:"Function output.",trap:"Check that f(x) belongs to g's domain."},
        {formula:"Inverse: y=f(x) → swap x,y → solve for y",meaning:"Find inverse formula when the function is bijective on specified domain/codomain.",when:"Solve f⁻¹ and verify composition returns x.",units:"Domain and range swap.",trap:"An inverse may fail if f is not one-one."}
      ],
      [
        {title:"Find domain and range",steps:["For f(x)=1/(x−2), the denominator cannot be zero, so domain is all real x except 2.","Output y cannot be zero because 1/(x−2) never equals 0.","Thus range is all real y except 0.","The function is one-one: equal outputs imply equal denominators and hence equal inputs."]},
        {title:"Compute a composition",steps:["Let f(x)=2x+1 and g(x)=x²−3.","(g∘f)(x)=g(2x+1)=(2x+1)²−3.","Expand to 4x²+4x−2.","(f∘g)(x)=2(x²−3)+1=2x²−5, so order changes the result."]},
        {title:"Find an inverse",steps:["f(x)=3x−4 is considered from real numbers to real numbers.","Set y=3x−4 and rearrange x=(y+4)/3.","Swap x and y: f⁻¹(x)=(x+4)/3.","Check f(f⁻¹(x))=3((x+4)/3)−4=x and f⁻¹(f(x))=x."]}
      ],
      ["Treating domain, codomain and range as interchangeable.","Declaring a function onto without comparing its range to its codomain.","Reversing composition order.","Finding an algebraic inverse without verifying it is one-one on the chosen domain."],
      ["JEE: mapping type, domain restrictions, composition, inverse and graph tests. Always state the set from which inputs are allowed."],
      ["Can two different inputs have the same function output?","When does a function have an inverse function?","Why is g∘f not usually f∘g?"],
      ["Domain: permitted input set.","Codomain: declared target set.","Range: outputs actually attained.","Bijective: both one-one and onto."]),
    make("Class 11","Mathematics","Trigonometric Functions",
      "Move from degree-based right-triangle ratios to radians, unit-circle definitions, signs by quadrant, periodic graphs and trigonometric identities.",
      [
        ["Radians and angle measure","One radian is the angle subtended at the centre by an arc whose length equals the radius. A full turn is 2π radians and 360°, so π radians=180°. Convert by multiplying degrees by π/180, or radians by 180/π. Radian measure is dimensionless and is especially useful for calculus because d(sin x)/dx=cos x when x is in radians."],
        ["Unit-circle definition and signs","For a point (cosθ,sinθ) on the unit circle, cosine is the x-coordinate and sine the y-coordinate. Tangent is sinθ/cosθ where cosine is non-zero. This extends trig functions to angles beyond acute angles and explains quadrant signs: sine is positive in I and II; cosine in I and IV; tangent in I and III. Reference angles help evaluate exact values."],
        ["Periodicity, parity and identities","Sine and cosine repeat every 2π, tangent every π. Sine and tangent are odd functions: sin(−x)=−sin x and tan(−x)=−tan x; cosine is even: cos(−x)=cos x. Compound-angle identities expand sin(A±B), cos(A±B) and tan(A±B). Derive double-angle forms from them, and avoid dividing by trig expressions that may be zero."],
        ["Graphs, transformations and equation solutions","The graph of y=sin x oscillates between −1 and 1; y=cos x has the same range with a phase shift. Multiplying the function by a changes amplitude, while replacing x by kx changes period to 2π/|k| for sine/cosine. To solve trigonometric equations, find all reference angles in the requested interval and then use periodicity; do not report only a principal value when the question asks for a solution set."]
      ],
      [
        {formula:"π radians = 180°",meaning:"Degree–radian conversion.",when:"Calculus, arc-length or angular problems.",units:"Radians are dimensionless, often written 'rad'.",trap:"Calculus derivative formulas assume radian input."},
        {formula:"sin²x+cos²x=1; 1+tan²x=sec²x",meaning:"Fundamental trigonometric identities.",when:"Simplify, prove identities or recover one ratio from another.",units:"Dimensionless.",trap:"Identity manipulations inherit domain exclusions from denominators."},
        {formula:"sin(A±B)=sinA cosB ± cosA sinB",meaning:"Compound-angle identity.",when:"Exact-angle values and transformations.",units:"Angles in the same chosen unit.",trap:"The sign between terms follows the sign in sin(A±B)."},
        {formula:"Period of sin(kx) and cos(kx)=2π/|k|; period of tan(kx)=π/|k|",meaning:"Horizontal repetition interval.",when:"Graphing and counting solutions.",units:"Radian interval.",trap:"Amplitude and period are different graph features."}
      ],
      [
        {title:"Convert 225° to radians",steps:["Multiply by π/180: 225π/180.","Reduce 225/180 by 45 to get 5/4.","The answer is 5π/4 radians.","On the unit circle this angle lies in quadrant III, where sine and cosine are both negative."]},
        {title:"Find sin 75° exactly",steps:["Write 75°=45°+30°.","sin75=sin45 cos30+cos45 sin30.","Substitute √2/2 and √3/2 and 1/2.","The result is (√6+√2)/4."]},
        {title:"Solve sin x=1/2 in [0,2π)",steps:["Reference angle is π/6 because sin(π/6)=1/2.","Sine is positive in quadrants I and II.","Solutions in the interval are π/6 and 5π/6.","For all real x, add 2nπ to each solution, n an integer."]}
      ],
      ["Using degrees in derivative identities.","Giving only one trigonometric solution when an interval contains several.","Confusing cosine's even symmetry with sine's odd symmetry.","Changing period incorrectly when the angle is multiplied by k."],
      ["JEE: compound/double-angle identities, transformation, graph periods and equation solution sets. Show quadrant reasoning for exact signs."],
      ["Why is radian measure essential in elementary calculus formulas?","What are sine and cosine in the unit-circle picture?","Find period of sin(3x)."],
      ["Radian: angle unit defined by arc length divided by radius.","Amplitude: maximum absolute displacement from a graph's midline.","Reference angle: acute angle used with quadrant signs."]),
    make("Class 11","Mathematics","Complex Numbers and Quadratic Equations",
      "Use i²=−1, algebraic form, conjugate, modulus and Argand geometry; connect discriminants and root relations to quadratic equations.",
      [
        ["Algebra of complex numbers","A complex number is z=a+ib with real a,b and i²=−1. Add and subtract real and imaginary parts separately. Multiply by expansion and replace i² with −1. The real and imaginary parts are unique; a+ib=c+id implies a=c and b=d. Complex numbers allow quadratic equations with negative discriminant to have roots."],
        ["Conjugate and modulus","The conjugate z̄=a−ib reflects the Argand point across the real axis. The modulus |z|=√(a²+b²) is its distance from the origin, and |z|²=z z̄=a²+b². Division by a non-zero complex number is simplified by multiplying numerator and denominator by the denominator's conjugate. Modulus is never negative and satisfies |zw|=|z||w|."],
        ["Argand plane and polar form","The Argand plane represents a+ib by point (a,b). The argument is the angle between the positive real axis and the line from origin to z, interpreted with quadrant signs; its values differ by multiples of 2π. Polar form z=r(cosθ+i sinθ) reveals that multiplying complex numbers multiplies their moduli and adds their arguments. The zero complex number has no defined argument."],
        ["Quadratics over real and complex numbers","For ax²+bx+c=0, the discriminant D=b²−4ac controls roots. When D<0, roots are [−b±i√(−D)]/(2a). For a real-coefficient polynomial, non-real roots occur as conjugate pairs. Vieta's relations still apply over the complex numbers: root sum is −b/a and product c/a. Do not interpret a negative discriminant as meaning the equation has no solution in the complex-number system."]
      ],
      [
        {formula:"i²=−1; i⁴=1",meaning:"Powers of i repeat every four powers.",when:"Simplify complex powers.",units:"Algebraic.",trap:"The cycle is i,−1,−i,1."},
        {formula:"z̄=a−ib; |z|=√(a²+b²); z z̄=|z|²",meaning:"Conjugate and modulus.",when:"Find modulus, divide complex numbers, prove identities.",units:"Modulus is a non-negative real.",trap:"Conjugate changes only the sign of the imaginary part."},
        {formula:"(r₁cisθ₁)(r₂cisθ₂)=r₁r₂ cis(θ₁+θ₂)",meaning:"Polar multiplication rule; cis θ abbreviates cosθ+i sinθ.",when:"Powers and arguments.",units:"Arguments in radians or consistent angle unit.",trap:"For division, subtract arguments and divide moduli."},
        {formula:"Quadratic roots=[−b±√(b²−4ac)]/(2a)",meaning:"Allows complex square roots when discriminant is negative.",when:"Solve real- or complex-coefficient quadratic equations.",units:"Algebraic.",trap:"For D<0, write √D=i√(−D), not a real radical."}
      ],
      [
        {title:"Divide (3+2i)/(1−i)",steps:["Multiply top and bottom by 1+i.","Numerator (3+2i)(1+i)=3+3i+2i+2i²=1+5i.","Denominator (1−i)(1+i)=1−i²=2.","Result is 1/2+(5/2)i."]},
        {title:"Solve x²−4x+13=0",steps:["D=(−4)²−4(1)(13)=16−52=−36.","√D=6i.","x=(4±6i)/2.","Roots are 2±3i; their sum 4 and product 13 check Vieta's relations."]},
        {title:"Use complex geometry",steps:["z=3−4i corresponds to point (3,−4).","Its modulus is √(9+16)=5.","The conjugate 3+4i corresponds to reflection across the real axis.","The distance between z and its conjugate is 8, equal to the vertical separation."]}
      ],
      ["Forgetting i²=−1 in multiplication.","Using the wrong sign in the conjugate.","Using tan⁻¹(b/a) without quadrant correction for argument.","Saying D<0 means no solutions at all."],
      ["JEE: powers of i, locus/modulus, argument, roots of unity and complex root relations. Preserve exact radicals and choose the correct quadrant."],
      ["Why is z z̄ always non-negative?","What geometry does |z−z₀|=r describe?","Why do real-coefficient quadratics with D<0 have conjugate roots?"],
      ["Argand plane: coordinate plane for complex numbers.","Conjugate: a−ib for a+ib.","Argument: angle specifying direction of a non-zero complex number."]),
    make("Class 11","Mathematics","Linear Inequalities",
      "Solve linear inequalities, represent solution sets on a number line and combine inequalities without losing boundary conditions.",
      [
        ["Meaning of an inequality","An inequality describes a set of values rather than usually one value. Solving it means finding all values that make the statement true. Adding the same quantity to both sides preserves the inequality direction; multiplying or dividing by a positive number preserves it, while multiplying or dividing by a negative number reverses the symbol."],
        ["Interval and number-line representation","An open endpoint uses parentheses and excludes the boundary value; a closed endpoint uses square brackets and includes it. For x>2, the solution is (2,∞); for x≥2 it is [2,∞). Infinity itself is never included, so its endpoint always remains open. Shade or mark the correct side of the boundary when drawing a number line."],
        ["Compound inequalities","For a<x≤b, the solution is the intersection of x>a and x≤b. Solve each inequality or isolate x through equivalent operations. If the lower bound exceeds the upper bound, the intersection is empty. 'Or' corresponds to a union; 'and' corresponds to an intersection. Word problems involving range or capacity often use both a lower and upper bound."],
        ["Two-variable inequalities","A linear inequality in x and y defines a half-plane separated by its boundary line. Draw the line first, then test a convenient point such as (0,0) unless it lies on the boundary. Use a solid line for an included boundary (≤ or ≥) and a dashed line for a strict one (< or >). A system requires the overlapping region satisfying every inequality."]
      ],
      [
        {formula:"Multiply/divide inequality by negative c → reverse sign",meaning:"Order reverses when every value is multiplied by a negative number.",when:"Isolate the variable.",units:"Algebraic rule.",trap:"Forgetting to reverse is one of the most common errors."},
        {formula:"a<x≤b → (a,b]",meaning:"Interval notation captures strict/inclusive boundaries.",when:"Report a one-dimensional solution set.",units:"Real numbers.",trap:"Infinity is always an open endpoint."},
        {formula:"System solution = intersection of individual solution sets",meaning:"A value must satisfy every inequality in an 'and' system.",when:"Multiple inequalities or feasible regions.",units:"Set of allowed values.",trap:"Do not unite sets when the condition says 'and'."}
      ],
      [
        {title:"Solve −3x+6≥12",steps:["Subtract 6: −3x≥6.","Divide by −3 and reverse the sign: x≤−2.","Interval form is (−∞,−2].","Check x=−3 gives 15≥12, while x=0 gives 6≥12 false."]},
        {title:"Solve 2<3x−1≤11",steps:["Add 1 to every part: 3<3x≤12.","Divide every part by 3: 1<x≤4.","Interval form is (1,4].","The left endpoint is excluded, and the right endpoint is included."]},
        {title:"Graph a half-plane",steps:["For y≥2x−1, draw the boundary y=2x−1 as a solid line.","Test (0,0): 0≥−1 is true.","Shade the side containing the origin.","Verify another point on the shaded side and note that the boundary is included."]}
      ],
      ["Not reversing the inequality after division by a negative number.","Including an excluded endpoint.","Using a dashed line for an inclusive boundary.","Mixing 'and' with 'or' in compound inequalities."],
      ["CBSE: algebraic solutions and graphs. JEE: feasible regions, multiple conditions and careful boundary inclusion."],
      ["Which operation reverses an inequality?","How is an open endpoint drawn?","What geometric region satisfies a two-variable linear inequality?"],
      ["Half-plane: one side of a boundary line.","Intersection: elements common to multiple sets.","Feasible region: set satisfying all stated constraints."]),
    make("Class 11","Mathematics","Permutations and Combinations",
      "Count ordered arrangements and unordered selections with and without repetition, using multiplication rules, factorials and complements.",
      [
        ["Fundamental counting principle","If a process has successive stages with m₁,m₂,… choices and each stage's choices are compatible, total outcomes are the product m₁m₂…. For a code with 3 letters followed by 2 digits, count choices position by position and adjust for restrictions such as no repetition. Write what makes outcomes distinct before selecting a formula."],
        ["Permutations: order matters","Arranging r distinct objects chosen from n has nPr=n!/(n−r)!. Factorial n! is n(n−1)…1, with 0!=1. If some objects are identical, divide the total arrangements by the factorials of the repeated multiplicities. Circular arrangements have rotational symmetry; in the standard arrangement of n distinct people around a round table, rotations represent the same arrangement and the count is (n−1)!."],
        ["Combinations: order does not matter","Selecting r objects from n without order gives nCr=n!/[r!(n−r)!]. The division by r! removes the different orders of the same selected group. Complementary counting can be more efficient for 'at least one' restrictions: count all cases, subtract cases with none. Use binomial symmetry nCr=nC(n−r) to choose the smaller factorial calculation."],
        ["Restrictions and distribution","For adjacent or together conditions, treat a constrained group as a block, arrange blocks, then arrange within each block. For 'not adjacent', often arrange the other objects first and count the available gaps. Distributions into distinct boxes differ from distributions into identical boxes. Always state whether objects and boxes are distinguishable and whether empty boxes are allowed."]
      ],
      [
        {formula:"nPr=n!/(n−r)!",meaning:"Ordered selections of r distinct objects from n.",when:"Positions or roles make order significant.",units:"Count.",trap:"A president-secretary pair is ordered because the roles differ."},
        {formula:"nCr=n!/[r!(n−r)!]",meaning:"Unordered selection of r objects from n.",when:"Committee or group selection where positions do not differ.",units:"Count.",trap:"Do not multiply by r! unless the order becomes relevant."},
        {formula:"nCr=nC(n−r); Σ nCr=2ⁿ",meaning:"Combination symmetry and total subset count.",when:"Simplify identities or count all subsets by size.",units:"Count.",trap:"The sum ranges from r=0 to n."},
        {formula:"Circular arrangements of n distinct people: (n−1)!",meaning:"Fix one person to remove equivalent rotations.",when:"Arrange around a round table without a distinguished starting seat.",units:"Count.",trap:"If reflections are also equivalent (necklace), more symmetry may need to be removed."}
      ],
      [
        {title:"Choose a committee",steps:["Select 3 students from 8 where roles do not matter.","Use 8C3=8!/(3!5!).","Compute (8×7×6)/(3×2×1)=56.","If the same 3 students had president, secretary and treasurer roles, the count would be 8P3=336."]},
        {title:"Arrange the letters of LEVEL",steps:["There are 5 letters; L repeats twice and E repeats twice.","If all were distinct there would be 5! arrangements.","Divide by 2! for the L pair and 2! for the E pair.","Distinct arrangements=5!/(2!2!)=30."]},
        {title:"At least one special object",steps:["Choose 4 objects from 10, of which 3 are red and 7 are non-red.","Total selections=10C4.","Selections with no red=7C4.","Selections with at least one red=10C4−7C4=210−35=175."]}
      ],
      ["Using permutations for an unordered committee.","Counting identical letters as distinct arrangements.","Ignoring whether repetition is allowed.","Applying the circular formula when a fixed seat or reflection distinction changes the problem."],
      ["JEE: restrictions, identical objects, arrangements together/apart and probability combinatorics. Define distinguishability before counting."],
      ["When does nCr apply instead of nPr?","Why divide by factorials of repeated objects?","How does complementary counting help with 'at least one'?"],
      ["Permutation: ordered arrangement.","Combination: unordered selection.","Factorial: product n(n−1)…1 with 0!=1."]),
    make("Class 11","Mathematics","Binomial Theorem",
      "Expand powers of a sum using binomial coefficients, find general terms, coefficients and middle terms, and apply the theorem to approximations.",
      [
        ["Why coefficients form a binomial pattern","For a positive integer n, expansion of (a+b)^n has n+1 terms. Each choice in multiplying n factors contributes a term; choosing k factors to supply b produces nCk ways, so the term is nCk a^(n−k)b^k. The coefficients are symmetric because choosing k factors is equivalent to choosing the n−k factors that remain."],
        ["General term and coefficient extraction","The (r+1)th term is T_(r+1)=nCr a^(n−r)b^r when indexing begins with r=0. To find a specific power, compare its exponent with the general term, solve for r and check 0≤r≤n. If negative powers or fractional powers are involved, determine whether the binomial expansion is finite or an infinite series under suitable conditions."],
        ["Middle terms and symmetry","If n is even, there is one middle term at position n/2+1. If n is odd, there are two middle terms at positions (n+1)/2 and (n+3)/2. Because coefficients are symmetric, paired terms from opposite ends have equal binomial coefficients. The powers of a and b still differ, so equal coefficients do not mean equal terms."],
        ["Approximation and careful simplification","For small x, (1+x)^n can be approximated by 1+nx when higher powers are negligible in the context; this is not an exact identity except in limited cases. Keep the condition |x| small for approximations. When simplifying a general term, combine exponents carefully and avoid expanding the entire polynomial if only one coefficient is needed."]
      ],
      [
        {formula:"(a+b)ⁿ = Σₖ₌₀ⁿ nCk aⁿ⁻ᵏ bᵏ",meaning:"Finite binomial expansion for non-negative integer n.",when:"Expand powers and find selected terms.",units:"Algebraic.",trap:"The exponent on a decreases as the exponent on b increases."},
        {formula:"Tᵣ₊₁ = nCr aⁿ⁻ʳ bʳ",meaning:"General term indexed from r=0.",when:"Find a coefficient or a specific power.",units:"Algebraic term.",trap:"The (r+1)th term corresponds to r, not r+1, in the combination."},
        {formula:"Σₖ₌₀ⁿ nCk=2ⁿ; nCk=nC(n−k)",meaning:"Sum and symmetry of binomial coefficients.",when:"Find coefficient sums or prove identities.",units:"Integers.",trap:"The sum includes k=0 and k=n."}
      ],
      [
        {title:"Find the coefficient of x³ in (2+x)^5",steps:["General term with r copies of x: 5Cr 2^(5−r)x^r.","For x³, r=3.","Coefficient=5C3×2²=10×4.","The coefficient is 40."]},
        {title:"Find middle term(s) of (x+2)^5",steps:["Here n=5 is odd, so there are two middle terms: positions 3 and 4.","T_(r+1)=5Cr x^(5−r)2^r.","For position 3, r=2: 10x³×4=40x³.","For position 4, r=3: 10x²×8=80x²."]},
        {title:"Use coefficient sum",steps:["Set a=1 and b=1 in (a+b)^n.","Then (1+1)^n=Σ nCk.","So the sum of all coefficients of (1+x)^n is 2^n.","For the alternating sum, set x=−1; the sum becomes zero for n≥1."]}
      ],
      ["Misindexing the general term by one.","Finding a coefficient but forgetting the numerical factor from a or b.","Giving only one middle term for odd n.","Using a finite binomial theorem for a non-integer exponent without conditions."],
      ["JEE: coefficient of a power, independent term, middle term and identities. Write the general term before solving for the index."],
      ["How many terms appear in (a+b)^n?","What is the (r+1)th term?","Why do odd powers have two middle terms?"],
      ["Binomial coefficient: nCr.","General term: expression for a selected term of an expansion.","Independent term: term whose variable exponent is zero."]),
    make("Class 11","Mathematics","Sequences and Series",
      "Model arithmetic and geometric progressions, finite/infinite sums, arithmetic-geometric patterns and standard summation identities.",
      [
        ["Sequence, nth term and recurrence","A sequence assigns a term to each permitted positive integer index. A formula for a_n gives the term directly; a recurrence defines a term from earlier ones. To identify a pattern, compare differences, ratios and second differences rather than relying on visual appearance. If a formula is proposed, test initial terms and the recurrence."],
        ["Arithmetic and geometric progressions","An AP has constant first difference d; a GP has a constant ratio r where defined. AP terms grow linearly with index, while GP terms scale multiplicatively. AP sum formulas are arithmetic means of first/last terms times the term count; a GP sum is a geometric factor times the first term. The cases d=0 or r=1 should be handled naturally."],
        ["Infinite geometric series","For |r|<1, the terms ar^n approach zero and the partial sums approach a finite limit a/(1−r), with indexing beginning at a. If |r|≥1, the ordinary infinite GP does not converge to a finite sum (except trivial zero cases). Do not use the infinite-sum formula simply because a series has many terms; convergence is essential."],
        ["Standard sums and telescoping","Useful identities include Σk=n(n+1)/2, Σk²=n(n+1)(2n+1)/6 and Σk³=[n(n+1)/2]². Telescoping sums simplify when a term can be written as a difference, such as 1/[k(k+1)]=1/k−1/(k+1); most intermediate terms cancel. Always specify the starting and ending index because shifting an index changes boundary terms."]
      ],
      [
        {formula:"AP: aₙ=a+(n−1)d; Sₙ=n/2[2a+(n−1)d]",meaning:"nth term and finite sum.",when:"Constant difference sequences.",units:"Same as a and d.",trap:"Check the starting index."},
        {formula:"GP: aₙ=arⁿ⁻¹; Sₙ=a(rⁿ−1)/(r−1), r≠1",meaning:"nth term and finite sum.",when:"Constant ratio sequences.",units:"Same as a.",trap:"If r=1, use Sₙ=na."},
        {formula:"Infinite GP: S∞=a/(1−r), |r|<1",meaning:"Limit of finite sums.",when:"A convergent geometric series.",units:"Same as a.",trap:"The convergence condition cannot be omitted."},
        {formula:"Σk=n(n+1)/2; Σk²=n(n+1)(2n+1)/6",meaning:"Standard sums over k=1,…,n.",when:"Simplify arithmetic and polynomial sums.",units:"Algebraic.",trap:"Check whether the problem starts at k=0 or 1."}
      ],
      [
        {title:"Find a GP sum",steps:["For 3,6,12,…,384, a=3 and r=2.","Solve 3×2^(n−1)=384, so 2^(n−1)=128=2^7 and n=8.","S8=3(2^8−1)/(2−1)=3×255.","Sum=765."]},
        {title:"Evaluate a telescoping sum",steps:["Compute Σ from k=1 to 5 of 1/[k(k+1)].","Rewrite each term as 1/k−1/(k+1).","Sum is (1−1/2)+(1/2−1/3)+…+(1/5−1/6).","All intermediate terms cancel; result=1−1/6=5/6."]},
        {title:"Test infinite convergence",steps:["Consider 5+2.5+1.25+…; a=5 and r=1/2.","Since |r|<1, the infinite GP converges.","S∞=5/(1−1/2)=10.","For r=2, term magnitudes grow, so the infinite sum formula is not applicable."]}
      ],
      ["Using an AP formula for a GP.","Forgetting the r=1 case.","Applying S∞ when |r|≥1.","Losing the first or last term during telescoping."],
      ["JEE: sums, recurrence, infinite GP convergence and telescoping. Check index endpoints before simplifying."],
      ["What condition makes an infinite GP converge?","How is the AP sum related to first and last terms?","Which terms remain after a telescoping sum?"],
      ["Recurrence: rule defining terms from previous terms.","Convergence: partial sums approach a finite limit.","Telescoping: sum where intermediate terms cancel."]),
    make("Class 11","Mathematics","Straight Lines",
      "Use slope, direction, point-slope and general equations to derive line conditions, distances and angle formulas in coordinate geometry.",
      [
        ["Slope and special cases","For two points with distinct x-coordinates, slope m=(y₂−y₁)/(x₂−x₁). It measures vertical change per horizontal change. Horizontal lines have slope 0; vertical lines have undefined slope, so forms involving division by slope need a separate vertical-line case. A line's slope is unchanged when the same non-zero vector is used to describe its direction."],
        ["Equations of a line","Point-slope form y−y₁=m(x−x₁) uses a known point and slope. Two-point form follows by setting slope equal to the ratio of coordinate differences. Slope-intercept form y=mx+c is convenient for a non-vertical line, while general form Ax+By+C=0 supports distance calculations and includes vertical lines when B=0. These are different representations of the same geometric object."],
        ["Parallel, perpendicular and angle","Parallel non-vertical lines have equal slopes. Perpendicular lines with finite slopes satisfy m₁m₂=−1; the condition comes from the dot product of their direction vectors being zero. For two lines, tanθ=|(m₂−m₁)/(1+m₁m₂)| when the denominator is non-zero. If 1+m₁m₂=0, the lines are perpendicular and θ=90°."],
        ["Distance and normal form","Distance from point (x₁,y₁) to Ax+By+C=0 is |Ax₁+By₁+C|/√(A²+B²). The denominator normalises the line's normal vector (A,B), turning the numerator into a perpendicular distance. The formula gives zero for a point on the line. For parallel lines, their distance is constant and can be found by writing them with matching A,B coefficients."]
      ],
      [
        {formula:"m=(y₂−y₁)/(x₂−x₁)",meaning:"Slope of the line through two non-vertical points.",when:"Find direction or line equation.",units:"Rise/run; dimensionless if both coordinates share units.",trap:"If x₂=x₁, the line is vertical and slope is undefined."},
        {formula:"y−y₁=m(x−x₁)",meaning:"Point-slope line equation.",when:"A point and slope are known.",units:"Coordinate units.",trap:"Substitute both coordinates of the point correctly."},
        {formula:"Distance = |Ax₁+By₁+C|/√(A²+B²)",meaning:"Perpendicular distance from a point to general-form line.",when:"Point-line distance, circle tangency or geometry.",units:"Coordinate length units.",trap:"Use absolute value in numerator."},
        {formula:"tanθ=|(m₂−m₁)/(1+m₁m₂)|",meaning:"Angle between two non-vertical lines under finite-slope conditions.",when:"Find acute angle between lines.",units:"Ratio is dimensionless.",trap:"Check denominator zero for the perpendicular case."}
      ],
      [
        {title:"Equation through two points",steps:["Line passes through (1,2) and (5,10).","Slope m=(10−2)/(5−1)=2.","Use y−2=2(x−1), so y=2x.","In general form the equation is 2x−y=0."]},
        {title:"Distance from a point",steps:["Find distance from P=(2,3) to 3x+4y−10=0.","Numerator=|3(2)+4(3)−10|=|8|=8.","Denominator=√(3²+4²)=5.","Distance=8/5 units."]},
        {title:"Check perpendicular lines",steps:["Lines have slopes 2 and −1/2.","Their slope product is 2(−1/2)=−1.","Therefore the lines are perpendicular.","If one slope were undefined, use direction vectors or identify vertical/horizontal lines instead."]}
      ],
      ["Using slope formulas on a vertical line.","Confusing parallel condition with perpendicular condition.","Dropping absolute value in point-line distance.","Using a point that does not lie on the derived line."],
      ["JEE: line-family conditions, angle and distance, normal form, concurrency and coordinate proof. Maintain consistent forms before comparing coefficients."],
      ["What is the slope of a vertical line?","Why is the point-line distance zero for a point on the line?","What is the perpendicular slope to 3/4?"],
      ["Slope: measure of line direction.","Normal vector: vector perpendicular to a line.","Intercept: where a line meets an axis."]),
    make("Class 11","Mathematics","Conic Sections",
      "Derive and recognise circle, parabola, ellipse and hyperbola from geometric definitions, standard equations and focus/directrix properties.",
      [
        ["Conics as loci","A conic can be defined as a locus of points satisfying a distance relationship. A circle has constant distance to a centre. A parabola has equal distance to a focus and a directrix. An ellipse has a constant sum of distances from two foci; a hyperbola has a constant absolute difference. These definitions explain the shape and focus properties better than memorising equations alone."],
        ["Parabola","For y²=4ax, the vertex is at origin, focus is (a,0), directrix x=−a and axis is the x-axis. The sign/orientation changes for forms such as x²=4ay. At a point on the parabola, distance to the focus equals perpendicular distance to the directrix. The latus rectum passes through the focus perpendicular to the axis and has length 4|a|."],
        ["Ellipse","An ellipse centred at origin with major axis along x has x²/a²+y²/b²=1 where a≥b>0. Its foci are (±c,0), with c²=a²−b². The sum of distances to the foci equals 2a. If the major axis is vertical, interchange the roles of a and b in the coordinate terms. The eccentricity e=c/a lies between 0 and 1."],
        ["Hyperbola and identification","A standard hyperbola x²/a²−y²/b²=1 has foci (±c,0) with c²=a²+b² and eccentricity e=c/a>1. The asymptotes are y=±(b/a)x for the centred standard form. Unlike the ellipse, the hyperbola's focus-distance difference is constant. Identify a conic from the signs and denominators of the squared coordinates, then complete squares if the centre/vertex is shifted."]
      ],
      [
        {formula:"Parabola y²=4ax: focus (a,0), directrix x=−a",meaning:"Standard parabola opening right for a>0.",when:"Focus/directrix, latus rectum and point questions.",units:"a is a signed length parameter.",trap:"A form x²=4ay opens vertically, not horizontally."},
        {formula:"Ellipse: c²=a²−b²; e=c/a; 0≤e<1",meaning:"Major semiaxis a, minor semiaxis b and focal distance c.",when:"Find foci/eccentricity from standard equation.",units:"a,b,c share length units.",trap:"For a vertical major axis, identify the larger denominator first."},
        {formula:"Hyperbola: c²=a²+b²; e=c/a>1",meaning:"Focus distance relationship for standard hyperbola.",when:"Foci and eccentricity.",units:"Length units.",trap:"Do not use the ellipse's minus relationship."},
        {formula:"Circle: (x−h)²+(y−k)²=r²",meaning:"Locus of constant distance r from centre (h,k).",when:"Identify centre and radius.",units:"Coordinate length units.",trap:"Both squared terms have the same coefficient."}
      ],
      [
        {title:"Identify parabola data",steps:["Equation y²=12x equals y²=4ax, so 4a=12 and a=3.","Vertex=(0,0), focus=(3,0), directrix x=−3.","Latus-rectum length=4a=12.","The axis is the x-axis and it opens to the right."]},
        {title:"Find ellipse foci",steps:["Ellipse x²/25+y²/9=1 has a²=25 and b²=9.","c²=25−9=16, so c=4.","Foci are (−4,0) and (4,0).","Eccentricity e=c/a=4/5."]},
        {title:"Find hyperbola asymptotes",steps:["Equation x²/9−y²/16=1 has a=3 and b=4.","Asymptotes are y=±(b/a)x.","Hence y=±(4/3)x.","The foci use c²=a²+b²=25, so they are (±5,0)."]}
      ],
      ["Mixing ellipse and hyperbola focal relations.","Selecting a as the smaller semiaxis in an ellipse equation.","Forgetting which coordinate is squared with the positive sign in a hyperbola.","Confusing a vertex with a focus."],
      ["JEE: focus/directrix, eccentricity, latus rectum, standard equation recognition and shifted conics. Sketch the axes and focal direction."],
      ["What distance property defines a parabola?","Why is c²=a²−b² for an ellipse but a sum for a hyperbola?","What are the asymptotes of x²/4−y²/9=1?"],
      ["Focus: fixed point in a conic's definition.","Directrix: fixed line used in a conic's distance definition.","Eccentricity: dimensionless ratio describing conic shape."]),
    make("Class 11","Mathematics","Introduction to Three-Dimensional Geometry",
      "Represent points in space, compute distances and midpoints, and interpret coordinates with three mutually perpendicular axes.",
      [
        ["Coordinates in three dimensions","A point P(x,y,z) is located by signed distances along three perpendicular axes. Coordinate planes are xy (z=0), yz (x=0), and zx (y=0). The coordinate signs determine the octant. Distinguish a coordinate plane from an axis: an axis requires two coordinates to be zero."],
        ["Distance formula from spatial Pythagoras","Between A(x₁,y₁,z₁) and B(x₂,y₂,z₂), coordinate differences form three perpendicular components. Applying Pythagoras twice yields d=√[(Δx)²+(Δy)²+(Δz)²]. The formula is symmetric in A and B. If z coordinates are equal, it reduces to the two-dimensional distance formula."],
        ["Section and midpoint formula","A point internally dividing AB in ratio m:n uses the same opposite-weight pattern as 2D: each coordinate is weighted by the other endpoint's segment ratio. Midpoint is coordinate-by-coordinate averaging. Use the ratio AP:PB as written and test the formula by considering m=n, when the result must be the midpoint."],
        ["Geometric use and checks","Distances allow you to identify equal lengths, test whether four points form certain shapes, or find a spatial midpoint. For points in a common coordinate plane, one coordinate is zero; for points on an axis, two are zero. A non-negative distance can be zero only if all three coordinate differences are zero, meaning the points coincide."]
      ],
      [
        {formula:"d=√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]",meaning:"Distance between points in 3D.",when:"Spatial distances.",units:"Length units.",trap:"Include all three coordinates."},
        {formula:"Midpoint=((x₁+x₂)/2,(y₁+y₂)/2,(z₁+z₂)/2)",meaning:"Point halfway between endpoints in space.",when:"Midpoints and equal-distance arguments.",units:"Coordinate units.",trap:"Average like coordinates, not across axes."},
        {formula:"Internal section m:n: ((n x₁+m x₂)/(m+n), ...)",meaning:"Coordinate-wise internal division.",when:"Find a point on a 3D segment.",units:"Coordinate units.",trap:"The weights oppose the endpoint's own segment length."}
      ],
      [
        {title:"Distance in 3D",steps:["A=(1,−2,3), B=(4,2,−9).","Differences are 3,4,−12.","Distance=√(9+16+144)=√169=13.","The large z difference contributes 144 to the squared distance."]},
        {title:"Midpoint in space",steps:["A=(−2,4,8), B=(6,0,−2).","Average x: (−2+6)/2=2.","Average y: (4+0)/2=2; average z: (8−2)/2=3.","Midpoint is (2,2,3)."]},
        {title:"Recognise a coordinate plane",steps:["For P=(0,−3,5), x=0.","Therefore P lies in the yz-plane.","It does not lie on the y-axis because z is nonzero.","This distinction is important when checking spatial location."]}
      ],
      ["Forgetting the z coordinate.","Treating a coordinate plane as an axis.","Using the section ratio in the same direction as the wrong endpoint.","Rounding a distance before comparing it with another."],
      ["JEE: distance, section, midpoints and coordinate-geometric interpretation. Keep exact values where possible."],
      ["What conditions put a point on the x-axis?","How does the 3D distance formula reduce to 2D?","Why is the midpoint formula coordinate-wise?"],
      ["Octant: one of eight regions created by the three coordinate planes.","Coordinate plane: plane where one coordinate equals zero.","Spatial distance: Euclidean distance between two points in 3D."]),
    make("Class 11","Mathematics","Limits and Derivatives",
      "Develop limit intuition, evaluate algebraic limits, understand continuity intuition, and derive the derivative as an instantaneous rate of change.",
      [
        ["Limit is behaviour near a point","lim x→a f(x)=L describes values of f(x) near a, not necessarily f(a). The limit can exist even if the function is undefined at a or has a different value there. For a two-sided limit, the left- and right-hand limits must agree. Factorisation and rationalisation often remove 0/0 forms without changing nearby values, but domain exclusions must be preserved."],
        ["Standard limits and algebraic techniques","Common trigonometric limits such as lim x→0 sinx/x=1 assume x in radians. For rational functions, factor common factors after substitution yields 0/0; for roots, rationalise with a conjugate. Infinite limits or nonzero-over-zero forms require separate reasoning. Don't cancel terms across addition: x²−1 factorises, but x²+1 does not factor over the reals."],
        ["Derivative as a limit","Derivative f′(a)=lim h→0 [f(a+h)−f(a)]/h measures the instantaneous rate of change and the tangent slope at x=a. A secant uses two points; the tangent is the limiting position of a secant as the second point approaches the first. The difference quotient must be simplified before substituting h=0."],
        ["Basic differentiation and interpretation","Power rule d(x^n)/dx=nx^(n−1), and constants differentiate to zero. Linearity allows derivatives of sums to be taken term by term. At a physical level, derivative of position with respect to time is velocity and derivative of velocity is acceleration. A derivative may be negative, indicating a decreasing function or a rate in the negative direction."]
      ],
      [
        {formula:"lim x→0 sinx/x=1 (x in radians)",meaning:"Fundamental small-angle limit.",when:"Evaluate trigonometric limits near zero.",units:"Dimensionless ratio.",trap:"The identity is not 1 if x is in degrees without conversion."},
        {formula:"f′(a)=lim h→0 [f(a+h)−f(a)]/h",meaning:"Derivative definition.",when:"First-principles differentiation and tangent slope.",units:"Output units per input unit.",trap:"Simplify before substituting h=0."},
        {formula:"d(xⁿ)/dx=nxⁿ⁻¹; d(c)/dx=0",meaning:"Power and constant rules.",when:"Differentiate polynomial terms.",units:"Derivative reduces power by one.",trap:"For n=0, derivative of a constant is zero."}
      ],
      [
        {title:"Evaluate lim x→2 (x²−4)/(x−2)",steps:["Direct substitution gives 0/0, so factor numerator.","x²−4=(x−2)(x+2).","For x≠2 near 2, expression equals x+2.","Limit is 4, even though the original expression is undefined at x=2."]},
        {title:"Differentiate x³−4x+7 from rules",steps:["Derivative of x³ is 3x².","Derivative of −4x is −4; derivative of constant 7 is zero.","Therefore f′(x)=3x²−4.","At x=2, tangent slope is 3(4)−4=8."]},
        {title:"Use derivative definition for f(x)=x²",steps:["Difference quotient =[(x+h)²−x²]/h.","Expand: (x²+2xh+h²−x²)/h=2x+h for h≠0.","Take h→0, giving f′(x)=2x.","The slope at x=3 is 6."]}
      ],
      ["Assuming lim f(x)=f(a) by definition.","Substituting zero into an unresolved 0/0 form.","Using degrees for standard trigonometric limits.","Confusing derivative value with the function value."],
      ["CBSE/JEE foundation: factorisation, rationalisation, standard limits, first principles and derivative interpretations. State restrictions at cancelled points."],
      ["Can a limit exist when f(a) is undefined?","Why is the derivative a limit of a secant slope?","What does a negative derivative mean?"],
      ["Limit: value approached by function values.","Difference quotient: average change ratio before taking the limit.","Derivative: instantaneous rate of change."]),
    make("Class 11","Mathematics","Statistics",
      "Summarise ungrouped/grouped data, measures of central tendency, dispersion, variance and standard deviation.",
      [
        ["Mean and weighted data","The arithmetic mean is the sum of observations divided by their number. If data values occur with frequencies, mean=Σfᵢxᵢ/Σfᵢ. Mean uses every observation, so extreme values can pull it. The assumed-mean method reduces arithmetic by working with deviations from a convenient central value; the final mean must still be shifted back to the original scale."],
        ["Median and quartiles","Median is the middle ordered observation (or average of the two middle values for an even number of ungrouped observations). It is robust against extreme outliers because it depends on order, not magnitude. Quartiles divide ordered data into four parts. For grouped observations, median and quartiles are estimated by interpolation within the relevant class using cumulative frequencies."],
        ["Variance and standard deviation","Variance averages squared deviations from the mean, preventing positive and negative deviations from cancelling. Population variance is Σ(xᵢ−x̄)²/n for n observations in the defined population; frequency form weights each squared deviation by fᵢ. Standard deviation is the non-negative square root of variance and returns to the data's unit. Some contexts use sample variance with n−1; use the convention specified in the question."],
        ["Compare spread and choose a measure","Two sets may have the same mean but very different spread. Standard deviation is zero when all observations are equal, and it cannot be negative. The coefficient of variation (when taught) compares relative dispersion using standard deviation divided by mean, often expressed as a percentage; it requires a meaningful nonzero mean. Statistics should be interpreted in context rather than treated as labels only."]
      ],
      [
        {formula:"x̄=Σxᵢ/n; frequency mean=Σfᵢxᵢ/Σfᵢ",meaning:"Arithmetic average.",when:"Find central tendency.",units:"Same as observations.",trap:"Do not divide by number of distinct classes when frequencies are present."},
        {formula:"Variance=Σ(xᵢ−x̄)²/n; SD=√variance",meaning:"Population variance and standard deviation for the stated dataset.",when:"Measure dispersion around mean.",units:"Variance is units²; SD same units as data.",trap:"Square deviations before summing."},
        {formula:"CV=(SD/mean)×100%",meaning:"Relative spread compared with mean.",when:"Compare variation across scales, where meaningful.",units:"Percent.",trap:"Do not use if mean is zero or interpretation is inappropriate."}
      ],
      [
        {title:"Mean and standard deviation of 2,4,6",steps:["Mean=(2+4+6)/3=4.","Deviations are −2,0,2; squared deviations are 4,0,4.","Population variance=(4+0+4)/3=8/3.","Population SD=√(8/3)≈1.633."]},
        {title:"Frequency mean",steps:["Values x are 1,2,3 with frequencies 2,4,4.","N=10 and Σfx=2+8+12=22.","Mean=22/10=2.2.","Check that the mean lies between the minimum and maximum value."]},
        {title:"Compare spread conceptually",steps:["Dataset A: 9,10,11 has mean 10 and small deviations.","Dataset B: 0,10,20 also has mean 10 but larger deviations.","The second dataset has greater variance and SD because its observations lie farther from the mean.","Equal means do not imply equal consistency."]}
      ],
      ["Confusing variance units with standard-deviation units.","Forgetting frequencies in weighted mean or variance.","Using sample n−1 when the problem specifies population n, or vice versa.","Computing a negative standard deviation."],
      ["JEE: variance shortcuts, frequency distributions and coefficient of variation. State the convention for population/sample variance."],
      ["Why are deviations squared in variance?","What does SD measure in the original units?","Can two datasets with identical means have different SD?"],
      ["Variance: mean squared deviation around the mean.","Standard deviation: square root of variance.","Outlier: observation far from the bulk of data."]),
    make("Class 11","Mathematics","Probability",
      "Learn sample spaces, event algebra, equally likely outcomes, addition and multiplication laws, conditional probability and independence.",
      [
        ["Sample space and event operations","A sample space lists all possible outcomes of an experiment. An event is a subset of the sample space. Union A∪B means at least one event occurs; intersection A∩B means both occur; complement A′ means A does not occur. Mutually exclusive events have empty intersection. Use a list, table or tree when outcomes contain multiple stages."],
        ["Probability axioms and complements","Probability satisfies 0≤P(A)≤1, P(S)=1 and P(∅)=0. Complement rule: P(A′)=1−P(A). For any events, P(A∪B)=P(A)+P(B)−P(A∩B). If A,B are mutually exclusive, the intersection term is zero. The classical favourable/total formula requires equally likely elementary outcomes; probability axioms also handle non-equally-likely models."],
        ["Conditional probability and independence","P(A|B)=P(A∩B)/P(B) if P(B)>0. It restricts the sample space to B. Events are independent when P(A∩B)=P(A)P(B), equivalently P(A|B)=P(A) when conditioning is valid. Mutually exclusive events with positive probabilities are not independent, because occurrence of one rules out the other."],
        ["Multiplication trees and Bayes reasoning","For sequential events, multiply a conditional probability by the probability of the conditioning event: P(A∩B)=P(B)P(A|B). Tree diagrams label branches with conditional probabilities and multiply along each path, then add probabilities for disjoint paths that satisfy the event. Bayes' theorem reverses conditioning and updates a cause probability from observed evidence."]
      ],
      [
        {formula:"P(A∪B)=P(A)+P(B)−P(A∩B)",meaning:"Addition law for two events.",when:"Events may overlap.",units:"Probability.",trap:"Subtract the overlap once."},
        {formula:"P(A|B)=P(A∩B)/P(B), P(B)>0",meaning:"Probability of A conditional on B.",when:"The question supplies information that B has occurred.",units:"Probability.",trap:"Do not swap A and B."},
        {formula:"A,B independent ⇔ P(A∩B)=P(A)P(B)",meaning:"Independence means one event does not alter the other's probability.",when:"Test or use independent events.",units:"Probability.",trap:"Mutually exclusive is not the same as independent."}
      ],
      [
        {title:"Addition law",steps:["Suppose P(A)=0.6, P(B)=0.5 and P(A∩B)=0.2.","P(A∪B)=0.6+0.5−0.2=0.9.","The result is ≤1, as a probability must be.","If one had simply added 0.6+0.5, the overlap would have been double-counted."]},
        {title:"Conditional probability",steps:["A card is selected from a standard deck. B means the card is a face card; A means it is a king.","There are 12 face cards and 4 kings, all 4 kings are face cards.","P(A|B)=P(A∩B)/P(B)=(4/52)/(12/52)=1/3.","The conditioning changes the sample space from 52 cards to the 12 face cards."]},
        {title:"Check independence",steps:["For a fair die, A={even} and B={multiple of 3}.","P(A)=3/6=1/2; P(B)=2/6=1/3.","A∩B={6}, so P(A∩B)=1/6=P(A)P(B).","The events are independent, though they are not mutually exclusive."]}
      ],
      ["Adding probabilities without removing overlap.","Using P(A|B)=P(A)/P(B).","Assuming independence when selecting without replacement.","Calling events mutually exclusive and independent simultaneously when both have nonzero probability."],
      ["JEE: event algebra, conditional trees, independence and Bayes. Write the sample space/condition before calculating."],
      ["What extra information does conditional probability encode?","How do mutually exclusive events differ from independent events?","When is the complement method efficient?"],
      ["Mutually exclusive: events cannot occur together.","Independent: joint probability factors into marginal probabilities.","Conditional probability: probability after restricting information to an event."]),
    make("Class 11","Mathematics","Limits and Derivatives — Formula and Problem-Solving Extension",
      "A chapter-specific workbook for derivative rules, left/right limits and first-principles methods commonly used in Class 11 algebraic and trigonometric functions.",
      [
        ["One-sided limits and discontinuity", "A right-hand limit considers values x>a; a left-hand limit considers x<a. A two-sided finite limit exists exactly when both one-sided limits exist and agree. For piecewise functions, evaluate each branch from the appropriate side; never substitute into the wrong branch. A jump can have finite but unequal one-sided limits, while a removable discontinuity has a finite common limit but an incorrect/missing point value."],
        ["Algebraic limit techniques", "When direct substitution gives a nonzero denominator, substitute directly. For 0/0, factor and cancel common factors or rationalise using the conjugate. Cancellation is valid only away from the excluded point, which is enough for a limit but not for claiming the original functions are equal at that point. Standard limits require consistent radians and suitable assumptions."],
        ["Derivative rules and tangent slope", "The derivative is a limit of difference quotients and represents tangent slope where it exists. Use linearity, power rule and known trigonometric derivatives. A derivative may fail to exist at corners or cusps even if the original function is continuous. A vertical tangent also creates a finite-derivative issue in the ordinary dy/dx representation."],
        ["Interpret results", "Use derivatives to describe increasing/decreasing behaviour locally and rates of change. Units are output-unit per input-unit. A position function s(t) measured in metres produces velocity in m/s and acceleration in m/s². In geometry, f′(a) gives the tangent-line slope; the tangent through (a,f(a)) has equation y−f(a)=f′(a)(x−a)."]
      ],
      [
        {formula:"lim x→a f(x) exists ⇔ LHL=RHL (finite)",meaning:"Two-sided limit existence criterion.",when:"Piecewise function and jump questions.",units:"Output units.",trap:"A function value at a may differ from its limit."},
        {formula:"d(sin x)/dx=cos x; d(cos x)/dx=−sin x",meaning:"Trigonometric derivatives for radian input.",when:"Differentiate trig functions.",units:"Per radian-independent input unit convention; mathematically x is radians.",trap:"If x is in degrees, chain-conversion factors are needed."},
        {formula:"Tangent: y−f(a)=f′(a)(x−a)",meaning:"Line through graph point with derivative slope.",when:"Find tangent at a point.",units:"Slope units are y-units/x-units.",trap:"The point is (a,f(a)), not (a,f′(a))."}
      ],
      [
        {title:"Piecewise limit",steps:["For f(x)=x+1 when x<2 and f(x)=5−x when x≥2, find the limit at 2.","Left limit is 2+1=3.","Right limit is 5−2=3.","The limit exists and equals 3; f(2)=3 as well, so the function is continuous there."]},
        {title:"Tangent line",steps:["Let f(x)=x² and find tangent at x=3.","f(3)=9; f′(x)=2x so slope is 6.","Equation y−9=6(x−3).","Simplify to y=6x−9 and check it passes through (3,9)."]}
      ],
      ["Using a branch on the wrong side in a piecewise limit.","Substituting into a 0/0 form without simplification.","Applying trig derivative identities with degree input.","Confusing point coordinates and slope."],
      ["Use left/right limit tables for piecewise functions and check the final line by substituting its point."],
      ["When can a limit exist even if a function is discontinuous?","Why must trig calculus use radians?","What two pieces of data define a tangent line?"],
      ["LHL/RHL: left/right-hand limits.","Tangent: line matching instantaneous slope at a graph point.","Discontinuity: failure of continuity at a point."]),
    make("Class 12","Mathematics","Relations and Functions",
      "Deepen equivalence relations, domain/range restrictions, one-one and onto properties, composition and inverse-function reasoning.",
      [
        ["Relations and equivalence","A relation R on a set A is reflexive if every a relates to itself, symmetric if aRb implies bRa, and transitive if aRb and bRc imply aRc. An equivalence relation satisfies all three and partitions A into disjoint equivalence classes. To prove an equivalence relation, address each property separately for arbitrary elements; a few examples alone do not establish a general statement."],
        ["Domain/range with restrictions","A function's domain and codomain are part of its definition. For rational functions, exclude zeros of the denominator; for real square roots, require the radicand to be non-negative; for real logarithms, require the argument to be positive. The range is found by solving y=f(x) and determining which y values can be achieved, often requiring a discriminant or inequality."],
        ["Injective and surjective reasoning","One-one can be shown by assuming f(x₁)=f(x₂) and proving x₁=x₂, or by monotonicity on a suitable interval. Onto requires every codomain value to be hit; solve y=f(x) for a domain input and show it exists for every permitted y. A function may be one-one but not onto if the codomain is too large; the same formula can change type when its domain/codomain changes."],
        ["Composition and inverse","Composition applies the rightmost function first. The inverse swaps inputs and outputs and reverses composition: f⁻¹∘f is the identity on the domain when f is bijective. If the formula is not one-one globally, a restricted domain may make it invertible. When solving for an inverse, state its domain and range, then verify both compositions on the relevant sets."]
      ],
      [
        {formula:"Reflexive: aRa; symmetric: aRb⇒bRa; transitive: aRb and bRc⇒aRc",meaning:"Tests for an equivalence relation.",when:"Prove relation properties.",units:"Logical conditions.",trap:"All three conditions are required."},
        {formula:"(g∘f)(x)=g(f(x))",meaning:"Composition of functions.",when:"Combine functions with compatible domains.",units:"Function mapping.",trap:"Apply f first."},
        {formula:"f bijective ⇒ f⁻¹ exists and f⁻¹(f(x))=x",meaning:"Inverse-function condition and identity relation.",when:"Find or verify inverses.",units:"Domain/range swap.",trap:"Do not claim an inverse without one-one behaviour."}
      ],
      [
        {title:"Determine whether f(x)=x² is one-one on R",steps:["Assume f(2)=4 and f(−2)=4.","The inputs are distinct but outputs equal.","Therefore it is not one-one on all real numbers.","On domain [0,∞), it is one-one and inverse is √x with range [0,∞)."]},
        {title:"Prove a relation is equivalence",steps:["On integers, define aRb when a−b is divisible by 3.","Reflexive: a−a=0 is divisible by 3.","Symmetric: if a−b is divisible by 3, then b−a=−(a−b) is also divisible by 3.","Transitive: a−b and b−c divisible by 3 imply their sum a−c is divisible by 3. All three properties hold."]}
      ],
      ["Ignoring the stated codomain when checking onto.","Finding an inverse formula without restricting a non-one-one domain.","Using examples instead of arbitrary-element proof.","Composing functions when output/input sets do not match."],
      ["CBSE: relation properties, inverse and composite functions. JEE: domain/range, equivalence classes and graph-based injectivity."],
      ["What are the three properties of an equivalence relation?","Can x² have an inverse over all real numbers?","Why is codomain relevant to 'onto'?"],
      ["Equivalence class: set of all elements related to a given element under an equivalence relation.","Injective: one-one mapping.","Surjective: onto mapping."]),
    make("Class 12","Mathematics","Inverse Trigonometric Functions",
      "Understand principal-value ranges, inverse-trig graphs and identities, and simplify compositions without losing domain restrictions.",
      [
        ["Why restrict trigonometric domains","Sine, cosine and tangent are periodic and therefore not one-one over their full natural domains. An inverse function requires a one-one function, so standard inverse trig functions restrict the original domains to principal intervals. These restrictions select one output for each valid ratio. Arcsin and arccos both accept inputs from [−1,1], while arctan accepts all real inputs."],
        ["Principal-value ranges","The principal range of arcsin x is [−π/2,π/2], arccos x is [0,π], and arctan x is (−π/2,π/2). Thus arcsin(sin θ) equals θ only when θ is already in the arcsin principal range; outside it, reduce to an equivalent angle in the allowed interval. Inverse-trig expressions are not ordinary reciprocal ratios."],
        ["Core identities and composition","For x in [−1,1], arcsin x+arccos x=π/2. The identity arctan x+arctan(1/x) depends on the sign of x and principal range; for x>0 it equals π/2, and for x<0 it equals −π/2. Composition with a trig function requires tracking both the input domain and the selected principal value."],
        ["Graph and derivative perspective","Inverse trig graphs reflect the restricted original graph across y=x. Their derivatives include domain-sensitive denominators: d(arcsin x)/dx=1/√(1−x²) for −1<x<1; d(arctan x)/dx=1/(1+x²). At endpoint values, the arcsin/arccos derivative expressions require care because the denominator can vanish and a finite derivative may not exist."]
      ],
      [
        {formula:"arcsin x ∈ [−π/2,π/2]; arccos x ∈ [0,π]",meaning:"Principal value ranges.",when:"Simplifying compositions.",units:"Radians.",trap:"Do not return an arbitrary coterminal angle."},
        {formula:"arcsin x+arccos x=π/2",meaning:"Complementary inverse-trig identity for x∈[−1,1].",when:"Simplify sums.",units:"Radians.",trap:"Both inverse functions must be defined."},
        {formula:"d(arcsin x)/dx=1/√(1−x²)",meaning:"Derivative on −1<x<1.",when:"Differentiate inverse sine.",units:"Derivative with respect to x.",trap:"Formula excludes endpoints in the ordinary finite derivative sense."},
        {formula:"d(arctan x)/dx=1/(1+x²)",meaning:"Derivative of inverse tangent.",when:"Differentiation and integration.",units:"Algebraic.",trap:"Do not confuse arctan with cotangent or reciprocal tangent."}
      ],
      [
        {title:"Simplify arcsin(sin 5π/6)",steps:["5π/6 lies outside the arcsin principal range.","sin(5π/6)=1/2.","arcsin(1/2)=π/6 in [−π/2,π/2].","Therefore the composition equals π/6, not 5π/6."]},
        {title:"Simplify arctan 1 + arctan 1",steps:["arctan 1=π/4 in the principal range.","Sum=π/4+π/4.","Result=π/2.","Check the identity uses separate inverse tangent values and is not the same as arctan(1+1)."]}
      ],
      ["Treating inverse trig as reciprocals.","Ignoring principal ranges in arcsin(sinθ).","Applying a reciprocal-angle identity without checking the sign of x.","Using derivative formula at a point where the denominator vanishes."],
      ["CBSE/JEE: principal values, identities, compositions, graph/range and derivatives. Write the principal range next to the expression while simplifying."],
      ["What is the principal range of arccos?","When does arcsin(sin θ)=θ hold?","What is the difference between arctan x and 1/tan x?"],
      ["Principal value: selected value within an inverse function's output range.","Inverse trigonometric function: inverse of a restricted trig mapping.","Composition: one function applied after another."]),
    make("Class 12","Mathematics","Matrices",
      "Work with matrix order, operations, transposes, symmetric/skew-symmetric matrices, inverses and matrix equations.",
      [
        ["Order and equality","A matrix of order m×n has m rows and n columns. Two matrices are equal only if their orders agree and corresponding entries match. Addition/subtraction require equal orders. Matrix multiplication AB is defined only when columns of A equal rows of B; if A is m×n and B n×p, AB is m×p. Matrix multiplication is generally not commutative."],
        ["Transpose and matrix types","The transpose Aᵀ swaps rows and columns. A square matrix is symmetric if Aᵀ=A and skew-symmetric if Aᵀ=−A; every diagonal entry of a skew-symmetric real matrix is zero. Any square matrix A can be decomposed as (A+Aᵀ)/2 plus (A−Aᵀ)/2, a sum of symmetric and skew-symmetric parts."],
        ["Identity and inverse","The identity matrix I satisfies AI=IA=A for compatible square matrices. An inverse A⁻¹ satisfies AA⁻¹=A⁻¹A=I and, if it exists, is unique. A matrix with inverse is nonsingular; singular matrices do not have an inverse. Matrix multiplication must preserve order when multiplying by inverses; from AX=B, left-multiply by A⁻¹ to obtain X=A⁻¹B."],
        ["Solving matrix equations","Write the unknown matrix with its entries and compare dimensions before manipulating. If AX+B=C, isolate AX first, then multiply on the left by A⁻¹ if available. Do not switch A⁻¹ to the right side unless dimensions and algebra justify it. Verify an inverse by multiplication when practical, and check the final equation by substitution."]
      ],
      [
        {formula:"(AB)ᵢⱼ=Σₖ AᵢₖBₖⱼ",meaning:"Entry of a matrix product is a row-column dot product.",when:"Matrix multiplication.",units:"Algebraic entries.",trap:"Rows of the first matrix match columns of the second."},
        {formula:"(AB)ᵀ=BᵀAᵀ",meaning:"Transpose reverses multiplication order.",when:"Prove matrix identities.",units:"Matrix equality.",trap:"Order reverses."},
        {formula:"A⁻¹=adj(A)/det(A), det(A)≠0 (square matrices)",meaning:"Inverse through adjugate and determinant.",when:"Find inverse by determinant method.",units:"Matrix entries.",trap:"A non-square matrix does not have a two-sided inverse of this form."}
      ],
      [
        {title:"Multiply a 2×2 pair",steps:["A=[[1,2],[3,4]], B=[[2,0],[1,5]].","(AB)₁₁=1×2+2×1=4; (AB)₁₂=1×0+2×5=10.","Second row gives 3×2+4×1=10 and 3×0+4×5=20.","AB=[[4,10],[10,20]]. Compute BA separately to see non-commutativity."]},
        {title:"Solve AX=B",steps:["Let A be invertible and AX=B.","Multiply on the left by A⁻¹: A⁻¹AX=A⁻¹B.","Since A⁻¹A=I, IX=X, so X=A⁻¹B.","Check dimensions: A is n×n, X and B have the same row count n."]},
        {title:"Decompose a matrix",steps:["For square A, define S=(A+Aᵀ)/2 and K=(A−Aᵀ)/2.","Sᵀ=(Aᵀ+A)/2=S, so S is symmetric.","Kᵀ=(Aᵀ−A)/2=−K, so K is skew-symmetric.","S+K=A, proving every square matrix has this decomposition over real entries."]}
      ],
      ["Multiplying matrices in the wrong order.","Assuming AB=BA.","Ignoring dimensions when adding or multiplying.","Using a determinant inverse formula when determinant is zero."],
      ["CBSE/JEE: multiplication order, transpose identities, inverse, matrix equations and consistency. Label dimensions for every product."],
      ["Why is matrix multiplication not generally commutative?","What are the diagonal entries of a skew-symmetric matrix?","How do you solve AX=B if A is invertible?"],
      ["Identity matrix: diagonal ones and other entries zero.","Singular matrix: square matrix with determinant zero.","Transpose: matrix formed by interchanging rows and columns."]),
    make("Class 12","Mathematics","Determinants",
      "Evaluate determinants, use row/column properties, compute adjugate and inverse, and solve linear systems with Cramer's rule.",
      [
        ["Determinant and invertibility","A determinant is a scalar associated with a square matrix. For a 2×2 matrix [[a,b],[c,d]], det=ad−bc. A square matrix has an inverse exactly when its determinant is non-zero. If the determinant is zero, rows/columns are linearly dependent, but a linear system may be inconsistent or have infinitely many solutions; singularity alone does not choose between those cases."],
        ["Properties and row operations","Interchanging two rows changes determinant sign. Multiplying one row by k multiplies the determinant by k. Adding a multiple of one row to another leaves determinant unchanged. If two rows are equal or proportional, determinant is zero. Use these properties to simplify a determinant before expanding; record any scaling and swaps so the final value retains the correct sign."],
        ["Minors, cofactors and adjugate","The minor Mᵢⱼ is the determinant formed by deleting row i and column j. Cofactor Cᵢⱼ=(−1)^(i+j)Mᵢⱼ. The adjugate is the transpose of the cofactor matrix. For det(A)≠0, A⁻¹=adj(A)/det(A). Keep the checkerboard cofactor signs in mind; a minor is not itself the cofactor unless its sign factor is positive."],
        ["Cramer's rule and applications","For AX=B with square coefficient matrix and Δ=det(A)≠0, the unique solution is xᵢ=Δᵢ/Δ where column i is replaced by constants to obtain Δᵢ. The method does not apply as a unique-solution formula when Δ=0. Determinants also compute triangle area from coordinates; use the absolute value and a factor 1/2 so area cannot be negative."]
      ],
      [
        {formula:"det([[a,b],[c,d]])=ad−bc",meaning:"Determinant of a 2×2 matrix.",when:"Invertibility and small systems.",units:"Scalar.",trap:"Correct diagonal product order matters."},
        {formula:"A⁻¹=adj(A)/det(A)",meaning:"Inverse formula for det(A)≠0.",when:"Find inverse or solve matrix equation.",units:"Matrix.",trap:"Must transpose the cofactor matrix to get the adjugate."},
        {formula:"Cramer's rule: xᵢ=Δᵢ/Δ, Δ≠0",meaning:"Solve square linear system through determinants.",when:"Small system with nonzero coefficient determinant.",units:"Unknown units as in original equations.",trap:"Δᵢ replaces column i, not row i."},
        {formula:"Triangle area = 1/2 |det[[x₁,y₁,1],[x₂,y₂,1],[x₃,y₃,1]]|",meaning:"Coordinate area formula.",when:"Area of a triangle from vertex coordinates.",units:"Square units.",trap:"Absolute value is needed because orientation can make determinant negative."}
      ],
      [
        {title:"Evaluate a 3×3 determinant",steps:["For A=[[1,2,3],[0,1,4],[5,6,0]], expand along row 1.","det(A)=1(1×0−4×6)−2(0×0−4×5)+3(0×6−1×5).","This is −24+40−15=1.","A nonzero result means A is invertible."]},
        {title:"Solve a 2×2 system by Cramer",steps:["Solve 2x+y=5 and x−y=1.","Δ=det[[2,1],[1,−1]]=−2−1=−3.","Δx=det[[5,1],[1,−1]]=−5−1=−6; Δy=det[[2,5],[1,1]]=2−5=−3.","x=Δx/Δ=2 and y=Δy/Δ=1; substitute to verify."]},
        {title:"Area from coordinates",steps:["For A=(0,0), B=(4,0), C=(1,3), base AB=4 and height to x-axis is 3.","Area=1/2×4×3=6 square units.","Using the determinant formula gives the same absolute determinant divided by 2.","If the determinant gives −12 for a reversed vertex order, area remains 6, not −6."]}
      ],
      ["Changing determinant sign without tracking row swaps.","Forgetting the cofactor sign pattern.","Replacing a row in Cramer's rule instead of a column.","Using Cramer's rule when Δ=0 and reporting a unique solution."],
      ["CBSE/JEE: determinant properties, inverse, Cramer systems and coordinate areas. Keep row-operation effects explicit."],
      ["When does a square matrix have an inverse?","What is the difference between minor and cofactor?","Why is triangle area non-negative?"],
      ["Minor: determinant after deleting a row/column.","Cofactor: signed minor.","Adjugate: transpose of cofactor matrix."]),
    make("Class 12","Mathematics","Continuity and Differentiability",
      "Build a calculus workflow from continuity checks to derivative rules, implicit/logarithmic differentiation and differentiability tests.",
      [
        ["Continuity at a point","A function f is continuous at a if f(a) is defined, the two-sided limit exists, and lim x→a f(x)=f(a). For piecewise functions, calculate left and right limits from the relevant branches before evaluating f(a). At endpoints, one-sided continuity may be the correct requirement. A removable discontinuity occurs when a finite limit exists but the function value is missing or mismatched."],
        ["Differentiability and its relation to continuity","Differentiability at a requires the difference quotient to have a finite two-sided limit. Differentiability implies continuity, but continuity does not imply differentiability: |x| is continuous at 0 but its left and right slopes differ. Corners, cusps, jumps and vertical tangents are warning signs. Test one-sided derivatives when the function is piecewise or absolute-valued."],
        ["Derivative rules and chain rule","For composite y=f(g(x)), dy/dx=f′(g(x))g′(x). Product and quotient rules handle products and ratios; implicit differentiation treats y as a function of x and applies dy/dx terms when differentiating expressions containing y. Logarithmic differentiation can simplify powers/products, but domain and positivity restrictions should be stated where logarithms are used."],
        ["Higher derivatives and inverse functions","The second derivative differentiates the first derivative and often describes curvature or acceleration of a rate. For a differentiable invertible function, (f⁻¹)′(y)=1/f′(x) when y=f(x) and f′(x)≠0. This reciprocal relation is local and depends on an inverse branch. When differentiating inverse trigonometric functions, preserve their domain and principal ranges."]
      ],
      [
        {formula:"Continuity at a: lim x→a f(x)=f(a)",meaning:"The limit and actual value agree.",when:"Piecewise or parameter functions.",units:"Function output.",trap:"A matching left/right limit alone is not enough if f(a) differs."},
        {formula:"(uv)'=u'v+uv'; (u/v)'=(u'v−uv')/v²",meaning:"Product and quotient rules.",when:"Differentiate products/quotients.",units:"Output per input.",trap:"Use v² in denominator of quotient rule."},
        {formula:"d[f(g(x))]/dx=f'(g(x))g'(x)",meaning:"Chain rule.",when:"Nested functions.",units:"Derivative chain.",trap:"Do not omit derivative of the inner function."},
        {formula:"If y=f(x) and inverse exists: (f⁻¹)'(y)=1/f'(x)",meaning:"Derivative of inverse at corresponding values.",when:"Differentiate inverse relations.",units:"Reciprocal slope.",trap:"Requires non-zero f′(x) and a valid inverse branch."}
      ],
      [
        {title:"Continuity parameter",steps:["For f(x)=kx+1 for x<2 and x²−1 for x≥2, require continuity at 2.","Left limit=2k+1; right value=4−1=3.","Set 2k+1=3, giving k=1.","Check with k=1: both sides tend to 3 and f(2)=3."]},
        {title:"Implicit differentiation",steps:["Given x²+y²=25, differentiate with respect to x.","2x+2y(dy/dx)=0.","Therefore dy/dx=−x/y when y≠0.","This gives slope on the circle; at y=0 the tangent is vertical and dy/dx is undefined."]},
        {title:"Logarithmic differentiation",steps:["Let y=x^x for x>0.","Take natural logarithms: ln y=x ln x.","Differentiate: y′/y=ln x+1.","Thus y′=x^x(ln x+1)."]}
      ],
      ["Checking only the function values, not one-sided limits.","Assuming every continuous function is differentiable.","Forgetting dy/dx when differentiating y terms implicitly.","Using logarithmic differentiation outside the valid real domain."],
      ["CBSE/JEE: piecewise continuity, differentiability, chain/product/quotient rules and implicit functions. State excluded points."],
      ["Does differentiability imply continuity?","Why is |x| not differentiable at zero?","What extra factor appears in the chain rule?"],
      ["Continuity: no break at a point in the limit-value sense.","Differentiability: existence of finite instantaneous rate.","Implicit differentiation: differentiate a relation involving y without solving explicitly for y."]),
    make("Class 12","Mathematics","Applications of Derivatives",
      "Use first and second derivatives to analyse monotonicity, extrema, tangents/normals, rates of change and optimisation.",
      [
        ["Increasing and decreasing intervals","If f′(x)>0 throughout an interval, f is increasing there; if f′(x)<0, it is decreasing. Solve f′=0 and identify points where f′ is undefined, then partition the domain and test the derivative sign on each interval. A critical point alone does not prove a maximum or minimum: derivative signs must change appropriately or a second-derivative condition must apply."],
        ["Local extrema and tests","A local maximum is a point whose function value is at least neighbouring values; a local minimum is at most neighbouring values. If f′ changes + to −, a local maximum occurs; − to + gives a local minimum. If f′ does not change sign, a stationary point may be neither. The second derivative test says f′(a)=0 and f″(a)<0 implies a local maximum; f″(a)>0 implies a local minimum."],
        ["Tangents, normals and approximation","The tangent to y=f(x) at x=a has slope f′(a); the normal is perpendicular with slope −1/f′(a) when the tangent slope is finite and nonzero. If tangent slope is zero, the normal is vertical. A small change obeys Δy≈f′(x)Δx, which supports local linear approximation and error estimates when Δx is small."],
        ["Optimisation as a model","Translate the problem into one objective function of one variable. Use constraints to eliminate other variables, find critical points, and compare boundary values in the feasible interval. For boxes, fences or cost questions, state the allowable domain before differentiating. A maximum in an unconstrained algebraic domain is not necessarily the maximum in the physical problem."]
      ],
      [
        {formula:"f′>0 increasing; f′<0 decreasing",meaning:"Derivative sign controls monotonicity on an interval.",when:"Find increasing/decreasing intervals.",units:"Derivative sign.",trap:"Split the domain at critical points and derivative discontinuities."},
        {formula:"f′ changes +→−: local max; −→+: local min",meaning:"First-derivative test.",when:"Classify critical points.",units:"Function behaviour.",trap:"f′=0 alone is not sufficient."},
        {formula:"f′(a)=0, f″(a)<0 → local maximum; f″(a)>0 → local minimum",meaning:"Second derivative test under its hypotheses.",when:"Classify stationary points.",units:"Second derivative sign.",trap:"If f″(a)=0 the test is inconclusive."}
      ],
      [
        {title:"Find extrema of x³−3x",steps:["f′=3x²−3=3(x−1)(x+1), so critical points are −1 and 1.","For x<−1, derivative positive; for −1<x<1, negative; for x>1, positive.","At x=−1 sign changes + to −, so local maximum f(−1)=2.","At x=1 sign changes − to +, so local minimum f(1)=−2."]},
        {title:"Optimise a rectangle with perimeter 40",steps:["Let sides be x and y; 2x+2y=40 gives y=20−x with 0<x<20.","Area A=x(20−x)=20x−x².","A′=20−2x=0 gives x=10; A″=−2<0, so maximum.","Then y=10 and maximum area=100 square units."]},
        {title:"Write a tangent and normal",steps:["For y=x² at x=2, point is (2,4), derivative slope is 4.","Tangent: y−4=4(x−2), hence y=4x−4.","Normal slope is −1/4.","Normal: y−4=−(1/4)(x−2)."]}
      ],
      ["Classifying every stationary point as an extremum.","Forgetting to inspect the endpoints of a closed feasible interval.","Using the normal slope −1/m when m=0 without handling the vertical case.","Differentiating before applying the word-problem constraint."],
      ["CBSE/JEE: derivative signs, local/global extrema and optimisation. Use a sign chart and check boundaries."],
      ["What derivative-sign change gives a maximum?","When is the second derivative test inconclusive?","Why must the physical domain be written before optimisation?"],
      ["Critical point: where derivative is zero or undefined in the domain.","Monotonicity: increasing/decreasing behaviour.","Optimisation: finding a greatest/least objective value under constraints."]),
    make("Class 12","Mathematics","Integrals",
      "Interpret integration as antiderivative and accumulation; use substitution, parts, partial fractions and definite-integral properties.",
      [
        ["Indefinite integral and constant of integration","An antiderivative F satisfies F′(x)=f(x). The indefinite integral ∫f(x)dx represents the family F(x)+C because derivatives of constants vanish. Always include +C unless a definite integral or initial condition determines the constant. Verify a candidate integral by differentiating it; this is often the quickest way to catch missing factors."],
        ["Choose a method by structure","Substitution reverses the chain rule: choose u=g(x) when g′(x)dx is present. Integration by parts reverses the product rule and is useful when differentiating one factor simplifies it. Partial fractions decompose rational expressions after factoring the denominator; if numerator degree is at least denominator degree, perform polynomial division first. A method is chosen to reduce complexity, not by a rigid formula checklist."],
        ["Definite integrals and properties","A definite integral accumulates signed area. Reversing limits changes sign; adjacent intervals add; an even function over [−a,a] gives twice its integral over [0,a], and an odd function integrates to zero over symmetric limits. The integral can be negative even when geometric area is positive because regions below the x-axis contribute negative signed area."],
        ["Change of variables and endpoint care","For a definite integral, substitution also changes the limits to the u-values. Keep limits and variable consistent; do not substitute back and leave transformed bounds mixed with x. Improper integrals or singular endpoints require limit treatment. When area rather than signed integral is requested, split the interval at zeros or intersections and integrate absolute/top-minus-bottom differences."]
      ],
      [
        {formula:"∫xⁿdx=xⁿ⁺¹/(n+1)+C, n≠−1",meaning:"Power antiderivative.",when:"Integrate powers of x.",units:"Antiderivative has one extra input power.",trap:"For n=−1 use ln|x|+C."},
        {formula:"∫u dv=uv−∫v du",meaning:"Integration by parts.",when:"Product where differentiating u simplifies it.",units:"Antiderivative.",trap:"Choose u and dv to make the remaining integral easier."},
        {formula:"∫ₐᵇ f(x)dx=−∫ᵦᵃ f(x)dx",meaning:"Reversing limits flips sign.",when:"Use symmetry or simplify definite integrals.",units:"Signed accumulation.",trap:"Do not discard negative sign."},
        {formula:"Even f: ∫₋ₐᵃ f=2∫₀ᵃ f; odd f: integral=0",meaning:"Symmetry properties.",when:"Symmetric intervals.",units:"Integral units.",trap:"Verify parity first."}
      ],
      [
        {title:"Substitution",steps:["Integrate ∫2x cos(x²)dx.","Let u=x², so du=2x dx.","Integral becomes ∫cos u du=sin u+C.","Substitute back: sin(x²)+C; differentiating recovers the integrand."]},
        {title:"Integration by parts",steps:["Evaluate ∫x eˣ dx.","Choose u=x, dv=eˣdx, so du=dx and v=eˣ.","Integral=xeˣ−∫eˣdx.","Result=eˣ(x−1)+C."]},
        {title:"Use symmetry",steps:["Evaluate ∫ from −2 to 2 of x³+2 dx.","x³ is odd so its symmetric integral is zero.","2 is even, so ∫−2² 2dx=2×4=8.","Total integral is 8, not zero, because only the odd part cancels."]}
      ],
      ["Forgetting +C in an indefinite integral.","Using integration by parts with an inconvenient choice.","Changing the integrand but not the limits after substitution.","Treating signed integral as always equal to geometric area."],
      ["CBSE/JEE: method selection, definite-integral symmetry, substitution and integration by parts. Differentiate indefinite results to check."],
      ["What must accompany an indefinite integral?","When does an odd function integrate to zero?","Why do limits change during substitution?"],
      ["Antiderivative: a function whose derivative is the integrand.","Signed area: integral where below-axis area counts negative.","Improper integral: integral requiring a limiting process at an unbounded/singular endpoint."]),
    make("Class 12","Mathematics","Applications of Integrals",
      "Calculate areas under curves and between curves with correct boundaries, curve ordering and geometric interpretation.",
      [
        ["Area under a curve","A definite integral ∫ₐᵇ f(x)dx represents signed accumulation. If f is non-negative throughout [a,b], it equals the geometric area under the graph and above the x-axis. If the curve crosses the axis, split at its roots and negate the negative portions when calculating geometric area. Plotting a rough sketch reveals sign changes and prevents a misleading negative 'area'."],
        ["Area between two curves","Where y=f(x) is above y=g(x), the area between them is ∫ₐᵇ[f(x)−g(x)]dx. Find intersection points first, since they usually provide boundaries. If the curves switch order inside the interval, split at each crossing. Integrating absolute difference is the general idea, but piecewise splitting makes the calculation explicit."],
        ["Choose vertical or horizontal strips","Integrating with respect to x uses vertical strips and typically computes top minus bottom. Integrating with respect to y uses horizontal strips and computes right minus left. Choose the variable that expresses the boundaries simply. In some regions, one orientation needs several pieces while the other needs only one, so a small sketch can save substantial algebra."],
        ["Units and verification","Area has square units and cannot be negative. Check intersection values by substituting them into both curves. If the top-bottom expression appears negative on the whole interval, the curve ordering is probably reversed. Estimate dimensions or sketch the region to check whether the final magnitude is plausible."]
      ],
      [
        {formula:"Area under non-negative f: A=∫ₐᵇ f(x)dx",meaning:"Geometric area for a graph above the x-axis.",when:"Curve and x-axis bound the region.",units:"Square units.",trap:"If f becomes negative, split intervals or integrate |f|."},
        {formula:"Area between y=f(x) and y=g(x): ∫ₐᵇ(top−bottom)dx",meaning:"Area between curves over an interval with fixed ordering.",when:"Find enclosed regions from intersections.",units:"Square units.",trap:"Solve intersections and verify which curve is on top."},
        {formula:"Using horizontal strips: A=∫(right−left)dy",meaning:"Area between curves expressed as x-functions of y.",when:"Horizontal boundaries make region simpler.",units:"Square units.",trap:"Swap right/left ordering, not top/bottom."}
      ],
      [
        {title:"Area under y=x from 0 to 3",steps:["y=x is non-negative for 0≤x≤3.","Area=∫₀³ xdx=[x²/2]₀³.","Area=9/2 square units.","Geometrically this is a right triangle with base 3 and height 3, also area 9/2."]},
        {title:"Area between y=x and y=x²",steps:["Intersections satisfy x=x², so x=0 or x=1.","For 0<x<1, x lies above x².","Area=∫₀¹(x−x²)dx=[x²/2−x³/3]₀¹.","Area=1/2−1/3=1/6 square units."]},
        {title:"Avoid negative area",steps:["For y=x²−1 from x=−2 to 2, the curve crosses the x-axis at −1 and 1.","Geometric area is ∫−2−1(x²−1)dx + ∫−1¹(1−x²)dx + ∫₁²(x²−1)dx.","Use symmetry to double the left/right outer area and compute the centre separately.","This equals ∫|x²−1|dx, not the signed integral alone."]}
      ],
      ["Integrating curve difference without checking which is above.","Using a single formula across an ordering switch.","Forgetting that roots/intersections bound the enclosed region.","Reporting negative geometric area."],
      ["CBSE/JEE: area under curves, enclosed regions, symmetry and changing integration orientation. A sketch is part of the solution method."],
      ["How do you find the bounds for enclosed area?","When should you use top-minus-bottom?","What is the difference between signed integral and geometric area?"],
      ["Enclosed region: bounded area formed by curves and/or lines.","Vertical strip: differential area approximated as height dx.","Intersection: point satisfying both curve equations."]),
    make("Class 12","Mathematics","Differential Equations",
      "Classify ordinary differential equations and solve variable-separable and first-order linear equations with initial conditions.",
      [
        ["Order, degree and solution","Order is the highest derivative present after the equation is written appropriately. Degree is the power of the highest-order derivative when the equation is polynomial in derivatives; it may be undefined if radicals or non-polynomial forms remain. A general solution contains arbitrary constants; a particular solution is obtained by using initial/boundary conditions. Verify solutions by differentiating and substituting back."],
        ["Variable separation","For dy/dx=g(x)h(y), rearrange to dy/h(y)=g(x)dx and integrate both sides. Dividing by h(y) can lose constant solutions where h(y)=0; test such solutions separately before declaring the general solution complete. Add constants carefully and combine them into one constant where valid."],
        ["First-order linear form","A first-order linear equation can be written dy/dx+P(x)y=Q(x). Its integrating factor is IF=e^(∫P(x)dx). Multiplying the equation by IF makes the left side d(y·IF)/dx, so integrate both sides. Use this method only after arranging the equation with coefficient 1 on dy/dx."],
        ["Initial conditions and interpretation","After integrating, use the given y(x₀)=y₀ to determine the arbitrary constant. Check the solved expression satisfies both the differential equation and the initial condition. Differential equations model growth, decay, mixtures and motion; the form of P(x), Q(x) or separation reflects assumptions of the model, not merely algebra."]
      ],
      [
        {formula:"dy/dx=g(x)h(y) ⇒ dy/h(y)=g(x)dx",meaning:"Variable-separable method.",when:"All y-dependent terms can be isolated from x-dependent terms.",units:"Differential relation.",trap:"Check solutions lost when dividing by h(y)."},
        {formula:"dy/dx+P(x)y=Q(x); IF=e^(∫P(x)dx)",meaning:"Integrating factor for first-order linear ODE.",when:"Linear first-order equation.",units:"Exponent is dimensionless in a physically consistent model.",trap:"Arrange the coefficient of dy/dx to be 1 first."},
        {formula:"d(y·IF)/dx=Q(x)·IF",meaning:"Product derivative created by integrating factor.",when:"Integrate first-order linear ODE.",units:"Derivative relation.",trap:"The IF multiplies every term."}
      ],
      [
        {title:"Solve a separable equation",steps:["dy/dx=xy, with y(0)=2.","For y≠0, separate: dy/y=x dx.","Integrate: ln|y|=x²/2+C, so y=C₁e^(x²/2).","Apply y(0)=2, giving C₁=2; solution y=2e^(x²/2). Check y=0 is also a solution of the differential equation but not this initial condition."]},
        {title:"Solve a linear equation",steps:["dy/dx+y=eˣ.","Here P(x)=1, so IF=e^(∫1dx)=eˣ.","Multiply: eˣ dy/dx+eˣy=e^(2x), i.e. d(yeˣ)/dx=e^(2x).","Integrate yeˣ=(1/2)e^(2x)+C, so y=(1/2)eˣ+Ce^(−x)."]},
        {title:"Classify an equation",steps:["d²y/dx²+(dy/dx)³=0 has highest derivative y″, so order is 2.","The highest-order derivative y″ appears to the first power and the equation is polynomial in derivatives, so degree is 1.","For a non-polynomial equation such as √(y′)+y=0, first determine whether it can be expressed polynomially in derivatives before assigning degree.","Classification depends on the equation form, not the solution's complexity."]}
      ],
      ["Dividing by y or another factor without checking zero solutions.","Using IF before normalising the equation.","Forgetting arbitrary integration constants.","Applying initial conditions before obtaining the general form and losing a branch."],
      ["CBSE/JEE: order/degree, separation and integrating factor. Check each candidate solution by substitution."],
      ["What is the order of y″+y=0?","Why must zero solutions be checked before dividing by y?","What is the integrating factor for y′+3y=0?"],
      ["Order: highest derivative order.","Degree: power of highest derivative when polynomial in derivatives.","Integrating factor: multiplier that converts a linear ODE into a product derivative."]),
    make("Class 12","Mathematics","Vector Algebra",
      "Use vector components, magnitude, direction, dot/cross products, projections and geometric applications in three dimensions.",
      [
        ["Vectors and component form","A vector has magnitude and direction; a scalar has magnitude only. In Cartesian coordinates, a= a₁i+a₂j+a₃k. Magnitude is √(a₁²+a₂²+a₃²), and a unit vector is a/|a| for nonzero a. Position vectors locate points from an origin; the vector from A to B is r_B−r_A."],
        ["Dot product and projection","a·b=|a||b|cosθ is a scalar. Perpendicular non-zero vectors have dot product zero. The scalar projection of a on b is (a·b)/|b| and the vector projection is [(a·b)/|b|²]b. Dot products calculate angles and work (force dot displacement), but beware that dot product zero can also occur if one vector itself is zero."],
        ["Cross product and area","a×b is a vector perpendicular to both, with magnitude |a||b|sinθ. The order matters: a×b=−b×a. Parallel vectors have zero cross product. The cross-product magnitude equals parallelogram area and half of it is triangle area. Use the determinant/component formula and check the direction with a right-hand rule."],
        ["Vector equations and physical meaning","A vector equation can represent a line direction, force balance or geometry. Resolve vectors into components for equations rather than adding magnitudes blindly. The resultant magnitude is not usually the sum of individual magnitudes unless they are parallel in the same direction. A unit vector has no units; physical vector units come from the quantity represented."]
      ],
      [
        {formula:"|a|=√(a₁²+a₂²+a₃²)",meaning:"Magnitude of a 3D vector.",when:"Lengths, unit vectors and dot/cross calculations.",units:"Same as vector components.",trap:"Do not include the direction signs after squaring."},
        {formula:"a·b=a₁b₁+a₂b₂+a₃b₃=|a||b|cosθ",meaning:"Scalar product.",when:"Angle, perpendicularity and projection.",units:"Product of vector units.",trap:"Dot product is a scalar, not a vector."},
        {formula:"|a×b|=|a||b|sinθ",meaning:"Cross-product magnitude.",when:"Area and perpendicular direction.",units:"Product of vector units.",trap:"Order reversal changes the sign of the vector."},
        {formula:"Projection of a on b = [(a·b)/|b|²]b",meaning:"Vector component of a along b.",when:"Resolve a into parallel/perpendicular components.",units:"Same as a.",trap:"b must be nonzero."}
      ],
      [
        {title:"Angle between vectors",steps:["a=(1,2,2), b=(2,1,2). Dot product=2+2+4=8.","|a|=3 and |b|=3.","cosθ=8/9.","Therefore θ=cos⁻¹(8/9), an acute angle."]},
        {title:"Area from cross product",steps:["a=(1,0,0), b=(0,3,0).","a×b=(0,0,3), so its magnitude is 3.","Parallelogram area=3 square units; triangle area with these sides=3/2 square units.","The direction is perpendicular to the xy-plane."]},
        {title:"Test perpendicularity",steps:["a=(2,−1,3), b=(1,2,0).","a·b=2−2+0=0.","Since neither vector is zero, their angle is 90°.","This is easier than computing their magnitudes and angle."]}
      ],
      ["Adding vector magnitudes instead of components.","Confusing cross-product order.","Dividing by a zero vector in projection.","Using the dot product as a vector."],
      ["JEE: projections, angle, area and scalar/vector triple-product foundations. Check dimensions and direction."],
      ["What does a·b=0 imply for nonzero vectors?","What geometric area does |a×b| give?","Why does a×b change sign when order reverses?"],
      ["Unit vector: vector with magnitude one.","Scalar projection: signed component of a along a direction.","Resultant: vector sum of several vectors."]),
    make("Class 12","Mathematics","Three-Dimensional Geometry",
      "Represent lines and planes in vector and Cartesian form, calculate angles and distances, and distinguish intersecting, parallel and skew lines.",
      [
        ["Line equation in space","A line through point r₀ with direction vector d is r=r₀+td. In Cartesian parametric form, x=x₁+at, y=y₁+bt, z=z₁+ct. Symmetric form divides coordinate differences by direction ratios when each denominator is nonzero. Parametric form is safer if one direction ratio is zero."],
        ["Plane equation and normal","A plane with normal n=(A,B,C) through (x₁,y₁,z₁) has A(x−x₁)+B(y−y₁)+C(z−z₁)=0. General form Ax+By+Cz+D=0 uses (A,B,C) as a normal vector. Parallel planes have proportional normals; a line is parallel to a plane when its direction vector has zero dot product with the plane normal."],
        ["Angles between lines and planes","Angle between two lines follows from their direction vectors and dot product. Angle between planes follows from their normals. The acute angle between a line direction d and plane normal n is not the angle between line and plane; the angle between line and plane is complementary to that normal angle. Check whether the question asks acute, obtuse or directed angle."],
        ["Distances and skew lines","Point-plane distance is |Ax₁+By₁+Cz₁+D|/√(A²+B²+C²). For skew lines with direction vectors d₁,d₂, their common perpendicular has direction d₁×d₂; distance can be computed by projecting the separation between one point on each line onto the unit common perpendicular. Confirm that lines do not intersect before calling them skew."]
      ],
      [
        {formula:"Line: r=r₀+td",meaning:"Position vector on a line through r₀ with direction d.",when:"Line representation and intersection.",units:"t dimensionless if d is a displacement scale.",trap:"The direction vector need not be a unit vector."},
        {formula:"Plane: Ax+By+Cz+D=0; normal=(A,B,C)",meaning:"Cartesian equation and plane normal.",when:"Plane relationships, angles and distances.",units:"Coordinate units.",trap:"All coefficients A,B,C cannot be zero."},
        {formula:"Point-plane distance=|Ax₁+By₁+Cz₁+D|/√(A²+B²+C²)",meaning:"Perpendicular distance to plane.",when:"Point-to-plane distance.",units:"Length units.",trap:"Use absolute value and all three normal components."},
        {formula:"Direction d parallel to plane ⇔ d·n=0",meaning:"Line direction is perpendicular to plane normal.",when:"Check line-plane parallelism.",units:"Dot product zero.",trap:"Parallel line may lie inside the plane; check point membership separately."}
      ],
      [
        {title:"Find line-plane intersection",steps:["Line r=(1,0,2)+t(2,1,−1), plane x+y+z=5.","Substitute x=1+2t, y=t, z=2−t.","Sum=3+2t; set equal to 5, giving t=1.","Intersection point=(3,1,1)."]},
        {title:"Point-plane distance",steps:["Point P=(1,2,3), plane 2x−y+2z−6=0.","Numerator=|2−2+6−6|=0.","Distance is 0, so P lies on the plane.","For a point not on the plane, divide the absolute expression by √(4+1+4)=3."]},
        {title:"Angle between two lines",steps:["Direction vectors d₁=(1,0,1), d₂=(1,1,0).","Dot product=1; magnitudes are both √2.","Cosine of angle=1/2.","The smaller angle is 60°."]}
      ],
      ["Calling lines skew when they are parallel.","Using line-plane angle formula with the normal angle unadjusted.","Using symmetric line form when a direction component is zero.","Forgetting to check the parameter value in all coordinates."],
      ["JEE: line-plane intersections, point-plane distances, line/plane angles and skew-line shortest distance. Keep direction vectors separate from point coordinates."],
      ["What vector is normal to Ax+By+Cz+D=0?","How do you test whether a line direction is parallel to a plane?","What distinguishes skew from parallel lines?"],
      ["Normal vector: perpendicular to a plane.","Skew lines: nonparallel lines that do not intersect in 3D.","Parametric line: line described using a parameter t."]),
    make("Class 12","Mathematics","Linear Programming",
      "Translate a real situation into a linear objective and constraints, graph a feasible region, and evaluate corner points to find an optimum.",
      [
        ["Decision variables, objective and constraints","Choose non-negative decision variables that represent quantities the problem controls. The objective function is a linear expression to maximise or minimise. Constraints express resource limits, required minimums or capacity; each constraint becomes a linear inequality. State the variables and units before writing the inequalities, because a correct numerical solution depends on an accurate model."],
        ["Feasible region","Each inequality defines a half-plane; their intersection, together with non-negativity restrictions, is the feasible region. Use solid boundaries for inclusive inequalities. Test a point to select the correct side of each line. The region may be bounded, unbounded or empty. A feasible point satisfies every constraint, not just the objective function."],
        ["Corner-point principle","For a linear objective over a non-empty bounded polygonal feasible region, at least one optimum occurs at a corner point; if an entire edge has the same objective value, multiple optima exist. Find vertices by solving pairs of boundary equations and checking that every constraint is satisfied. Do not evaluate intersections that lie outside the feasible region."],
        ["Interpret and validate the optimum","Compute the objective value at every feasible vertex. Compare values and report both the optimal variable values and what they mean in the original context. If the feasible region is unbounded, an optimum may still exist depending on the objective direction; inspect the model rather than assuming the corner-point procedure always gives a finite answer. Confirm the model's units and resource use."]
      ],
      [
        {formula:"Objective Z=ax+by",meaning:"Linear expression to maximise/minimise.",when:"After defining decision variables.",units:"Objective units from a,b and variables.",trap:"Don't confuse objective function with a constraint."},
        {formula:"Feasible region = intersection of all constraint half-planes",meaning:"All allowed choices simultaneously.",when:"Graphical method.",units:"Region in variable plane.",trap:"A point satisfying only some constraints is infeasible."},
        {formula:"Corner-point test: evaluate Z at every feasible vertex",meaning:"Candidate optimum for standard bounded linear-programming problems.",when:"Find max/min after graphing.",units:"Objective units.",trap:"Exclude intersection points outside the feasible region."}
      ],
      [
        {title:"Corner-point method",steps:["Maximise Z=3x+2y subject to x≥0, y≥0, x+y≤4 and x≤2.","Feasible vertices are (0,0), (2,0), (2,2) and (0,4).","Z-values are 0, 6, 10 and 8 respectively.","Maximum is Z=10 at (2,2); interpret x,y in the units stated in the problem."]},
        {title:"Check feasibility",steps:["A candidate (3,2) violates x+y≤4 because 5>4.","It is not feasible even if its objective value is large.","A point like (2,1) satisfies non-negativity, x≤2 and x+y≤4.","Evaluate the objective only after feasibility is established."]}
      ],
      ["Forgetting non-negativity constraints.","Testing an infeasible intersection as an optimal candidate.","Drawing a dashed line for inclusive constraints.","Reporting only the optimum value without the decision-variable solution."],
      ["CBSE/JEE: formulation, feasible-region graph, vertex listing and interpretation. Label each constraint line and show which corner points were tested."],
      ["Why can a non-feasible point never be the answer?","When may multiple optimal points exist?","What must be reported after finding the largest Z?"],
      ["Constraint: restriction on permissible variable values.","Feasible point: satisfies every constraint.","Objective function: linear measure being maximised/minimised."]),
    make("Class 12","Mathematics","Probability — Conditional and Random-Variable Extension",
      "Work with conditional probability, independent events, total probability, Bayes' theorem, discrete random variables and expectation.",
      [
        ["Conditional probability and independence","P(A|B)=P(A∩B)/P(B) when P(B)>0. Independence means information about B does not change A's probability; then P(A∩B)=P(A)P(B). Drawing two objects without replacement usually creates dependence because the first result changes the second draw's composition. Distinguish independent trials from mutually exclusive events."],
        ["Total probability and Bayes' theorem","If B₁,…,Bₙ form a partition of the sample space and all have defined conditional probabilities, P(A)=ΣP(Bᵢ)P(A|Bᵢ). Bayes' theorem reverses conditioning: P(Bⱼ|A)=P(Bⱼ)P(A|Bⱼ)/P(A). In diagnostic-style questions, the base rate P(Bⱼ) matters; a high sensitivity does not mean every positive result has high probability of coming from that group."],
        ["Discrete random variables","A random variable X maps outcomes to numerical values. A discrete probability distribution lists possible xᵢ and probabilities pᵢ with pᵢ≥0 and Σpᵢ=1. Expected value E(X)=Σxᵢpᵢ is the long-run weighted mean, not a guarantee that any single trial will equal it. Variance E[(X−E(X))²] describes spread."],
        ["Binomial distribution","A binomial model applies when there are n fixed independent Bernoulli trials, each with the same success probability p, and X counts successes. P(X=r)=nCr pʳ(1−p)ⁿ⁻ʳ. Mean is np and variance np(1−p). If probabilities differ, trials are dependent, or the number of trials is not fixed, the simple binomial model is not appropriate."]
      ],
      [
        {formula:"P(A|B)=P(A∩B)/P(B)",meaning:"Conditional probability.",when:"Known event B is given.",units:"Probability.",trap:"Requires P(B)>0."},
        {formula:"P(A)=ΣP(Bᵢ)P(A|Bᵢ)",meaning:"Total probability over a disjoint exhaustive partition.",when:"Several groups or causes can produce event A.",units:"Probability.",trap:"The groups must cover all possibilities exactly once."},
        {formula:"P(B|A)=P(B)P(A|B)/P(A)",meaning:"Bayes' theorem.",when:"Reverse a conditional probability using observed evidence.",units:"Probability.",trap:"Denominator P(A) should be computed from all relevant causes."},
        {formula:"Binomial: P(X=r)=nCr pʳ(1−p)ⁿ⁻ʳ; E=np; Var=np(1−p)",meaning:"Probability, mean and variance for n independent identical Bernoulli trials.",when:"Fixed number of trials with same success chance.",units:"Probability/count.",trap:"Independence and constant p are required."}
      ],
      [
        {title:"Binomial exact probability",steps:["A fair coin is tossed 5 times; probability of exactly 2 heads.","n=5, r=2, p=1/2.","P(X=2)=5C2(1/2)²(1/2)³=10/32.","Result=5/16. Check all probabilities over r=0,…,5 sum to 1."]},
        {title:"Total probability",steps:["Machine A produces 60% of items with 2% defect rate; B produces 40% with 5% defect rate.","P(defect)=0.6(0.02)+0.4(0.05)=0.012+0.020=0.032.","Overall defect probability=3.2%.","Weight the defect rates by production share, not by simply averaging 2% and 5%."]},
        {title:"Expected value",steps:["X takes values 0,1,2 with probabilities 0.2,0.5,0.3.","E(X)=0(0.2)+1(0.5)+2(0.3)=1.1.","This is the probability-weighted long-run average.","Check probabilities sum to 1 before calculating expectation."]}
      ],
      ["Confusing P(A|B) with P(B|A).","Using Bayes without accounting for all causes in P(A).","Applying binomial formula to dependent trials.","Treating expected value as a guaranteed outcome."],
      ["JEE: conditional probability, total probability, Bayes, distributions, expectation and binomial parameters. Define the random variable explicitly."],
      ["What conditions define a binomial experiment?","Why do prior probabilities affect Bayes' theorem?","Can an expected value be non-integer?"],
      ["Bernoulli trial: trial with success/failure outcomes and success probability p.","Random variable: numerical function of random outcomes.","Expectation: probability-weighted mean."])
  ];
  const existing = Array.isArray(window.KP_NCERT_CHAPTER_NOTES) ? window.KP_NCERT_CHAPTER_NOTES : [];
  window.KP_NCERT_CHAPTER_NOTES = existing.concat(notes);
})();
