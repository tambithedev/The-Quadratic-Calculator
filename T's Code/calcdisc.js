function calcDisc(a, b, c) {
		if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
		window.alert("Invalid Input.");
		return "";
	}
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	return D;
}
