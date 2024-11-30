function calcRoots(a, b, c) {
//first, hide all elements from a potential previous calculation 
	document.getElementById("Root 1").innerHTML = ""
	document.getElementById("Root 2").innerHTML = ""
	document.getElementById("negDisc").innerHTML = ""
	document.getElementById("displayCoefficients").innerHTML = ""
	document.getElementById("step1var1").innerHTML = ""
	document.getElementById("step1var2").innerHTML = ""
	document.getElementById("step2var1").innerHTML = ""
	document.getElementById("step2var2").innerHTML = ""
	document.getElementById("step3var1").innerHTML = ""
	document.getElementById("step3var2").innerHTML = ""
	document.getElementById("step3var3").innerHTML = ""
	document.getElementById("step4var1").innerHTML = ""
	document.getElementById("step4var2").innerHTML = ""
	document.getElementById("step4var3").innerHTML = ""

//validate whether it's a number	
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (a == 0)) {
		window.alert("Invalid Input.");
		return "";
	}

//show calculate discriminant button
let q = document.getElementById('calcDiscButton');
q.removeAttribute("hidden");

//if negative discriminant, don't show roots
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	if (D < 0) {
		document.getElementById("negDisc").innerHTML = "This will create complex roots. We do not support this feature. Complex numbers are not real.";
		return "";
	}
	
//show show steps button
let p = document.getElementById('showStepsButton');
p.removeAttribute("hidden");	

//show roots
	let root1;
	let root2;
	root1 = ((0 - b) + Math.sqrt(D)) / (2 * a);
	root2 = ((0 - b) - Math.sqrt(D)) / (2 * a);
	document.getElementById("Root 1").innerHTML = "X<sub>1</sub> = " + root1;
	document.getElementById("Root 2").innerHTML = "X<sub>2</sub> = " + root2;
	const roots = [root1, root2];
	return roots;
}
