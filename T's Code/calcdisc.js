function calcDisc(a, b, c) {
//first, hide elements from a potential previous calculation 
	document.getElementById("Discriminant").innerHTML = ""
	document.getElementById("displayCoefficients").innerHTML = ""
	document.getElementById("step1var1").innerHTML = ""
	document.getElementById("step1var2").innerHTML = ""

//validate whether it's a number
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (a == 0)) {
	window.alert("Invalid Input.");
	return "";
	}

//show show solution steps button
let p = document.getElementById('showStepsButton');
p.removeAttribute("hidden");

//show value
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	document.getElementById("Discriminant").innerHTML = "D = " + D
}
