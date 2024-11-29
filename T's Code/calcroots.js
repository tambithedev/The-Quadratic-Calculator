function calcRoots(a, b, c) {
//first, hide all elements from a potential previous calculation 
	document.getElementById("Root 1").innerHTML = ""
	document.getElementById("Root 2").innerHTML = ""
	document.getElementById("negDisc").innerHTML = ""

//validate whether it's a number	
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
		window.alert("Invalid Input.");
		return "";
	}

//if negative discriminant, don't show roots
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	if (D < 0) {
		document.getElementById("negDisc").innerHTML = "This will create complex roots. We do not support this feature. Complex numbers are not real.";
		return "";
	}

//show roots
	let root1;
	let root2;
	root1 = ((0 - b) + Math.sqrt(D)) / (2 * a);
	root2 = ((0 - b) - Math.sqrt(D)) / (2 * a);
	document.getElementById("Root 1").innerHTML = "Root 1: " + root1;
	document.getElementById("Root 2").innerHTML = "Root 2: " + root2;
}
