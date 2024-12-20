function showSteps(a, b, c) {

	//validate whether it's a number	
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (a == 0)) {
		window.alert("Invalid Input.");
		return "";
	}
	
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
	H = (0 - b) + G;
	let I;
	I = (0 - b) - G;
	const roots = calcRoots(a,b,c);

//step 1: discriminant	
	//show Discriminant formula
	document.getElementById("step1var1").innerHTML =
		"Step 1 - Calculate Discriminant: D = b<sup>2</sup> - 4⋅a⋅c"; 
	
	//arrive at discriminant, step-by-step
	document.getElementById("step1var2").innerHTML =
		b + "<sup>2</sup> = " + E + "<br>4⋅" + a + "⋅" + c + " = " + F +"<br>∴ D = " + D;
	
//step 2: sqrt discriminant
	//write out step
	document.getElementById("step2var1").innerHTML =
		"Step 2 - Find Square Root of Discriminant: √D";
	//do the thing
	document.getElementById("step2var2").innerHTML =
		"√" + D + " = " + G;

//step 3: solution 1
	//write out step
	document.getElementById("step3var1").innerHTML =
		"Step 3 - Calculate first root: (-b + D) ÷ 2⋅a";
	//do the thing (again)
	document.getElementById("step3var2").innerHTML =
		(0 - b) + " + " + G + " = " + H + "<br>2⋅a = " + (2 * a);
	document.getElementById("step3var3").innerHTML =
		"∴ X<sub>1</sub> = " + roots[0];
//step 4: solution 2
	//write out step
	document.getElementById("step4var1").innerHTML =
		"Step 3 - Calculate second root: (-b - D) ÷ 2⋅a";
	//do the thing (again x2)
	document.getElementById("step4var2").innerHTML =
		(0 - b) + " - " + G + " = " + I + "<br>2⋅a = " + (2 * a);
	document.getElementById("step4var3").innerHTML =
		"∴ X<sub>2</sub> = " + roots[1];
}
