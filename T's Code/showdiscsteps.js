function showDiscSteps(a, b, c) {

	//validate whether it's a number	
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (a == 0)) {
		window.alert("Invalid Input.");
		return "";
	}

	//show variables being used at the beginning
	document.getElementById("displayCoefficients").innerHTML =
		"a = " + a + "<br>" + "b = "+ b + "<br>" + "c = " + c;
	
	//define variables to be used in next step for simplification
	let E;
	E = Math.pow(b, 2);
	let F;
	F = 4 * a * c;
	let D;
	D = E - F;

//step 1: discriminant	
	//show Discriminant formula
	document.getElementById("step1var1").innerHTML =
		"Step 1 - Just Do It™<br>D = b<sup>2</sup> - 4⋅a⋅c"; 
	
	//arrive at discriminant, step-by-step
	document.getElementById("step1var2").innerHTML =
		b + "<sup>2</sup> = " + E + "<br>4⋅" + a + "⋅" + c + " = " + F +"<br>∴ D = " + D;
}
