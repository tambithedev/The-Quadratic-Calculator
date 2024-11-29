function showSteps(a, b, c) {

	//show variables being used at the beginning
	document.getElementById(/*"displaycoefficientsvariable"*/).innerHTML =
		"a = " + a + "<br>" + "b = "+ b + "<br>" + "c = " + c;
	
	//define variables to be used in next step(s) for simplification, and get the solution
	let E;
	E = Math.pow(b, 2);
	let F;
	F = 4 * a * c;
	let D;
	D = E - F;
	let G;
	G = Math.sqrt(D);
	let H;
	H = (0 - b) + D;
	let I;
	I = (0 - b) - D;
	let roots;
	roots = calcroots(a, b, c); //this function is found in calcroots.js

//step 1: discriminant	
	//show Discriminant formula
	document.getElementById(/*"step1variable1"*/).innerHTML =
		"Step 1 - Calculate Discriminant: D = b<sup>2</sup> - 4⋅a⋅c";
	
	//arrive at discriminant, step-by-step
	document.getElementById(/*step1variable2*/).innerHTML =
		b + "<sup>2</sup> = " + E + "<br>4⋅a⋅c = " + F +"<br>∴ D = " + D;
	
//step 2: sqrt discriminant
	//write out step
	document.getElementById(/*"step2variable1"*/).innerHTML =
		"Step 2 - Find Square Root of Discriminant: √D";
	//do the thing
	document.getElementById(/*"step2variable2"*/).innerHTML =
		"√" + D + " = " + G;

//step 3: solution 1
	//write out step
	document.getElementById(/*"step3variable1"*/).innerHTML =
		"Step 3 - Calculate Root 1: (-b + D) ÷ 2⋅a";
	//do the thing (again)
	document.getElementById(/*"step3variable2"*/).innerHTML =
		(0 - b) + " + " + D + " = " + H + "<br>2⋅a = " + (2 * a);
	document.getElementById(/*"step3variable3"*/).innerHTML =
		"∴ Root 1 = " + roots[0];
//step 4: solution 2
	//write out step
	document.getElementById(/*"step4variable1"*/).innerHTML =
		"Step 3 - Calculate Root 1: (-b - D) ÷ 2⋅a";
	//do the thing (again x2)
	document.getElementById(/*"step4variable2"*/).innerHTML =
		(0 - b) + " - " + D + " = " + I + "<br>2⋅a = " + (2 * a);
	document.getElementById(/*"step4variable3"*/).innerHTML =
		"∴ Root 2 = " + roots[1];
}

