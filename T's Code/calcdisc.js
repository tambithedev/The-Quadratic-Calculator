function calcDisc(a, b, c) {
//first, hide element from a potential previous calculation 
	document.getElementById("Discriminant").innerHTML = ""

//validate whether it's a number
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
	window.alert("Invalid Input.");
	return "";
	}

//show value
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	document.getElementById("Discriminant").innerHTML = "D = " + D
}
