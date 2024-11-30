function implement() {
//validation for some reason
	if (a == 0) {
		window.alert("Invalid Input.");
		return "";
	}	

	const urlParams = new URLSearchParams(window.location.search);
	const key = urlParams.get('key');
	switch(key) {
		case "1":
			document.getElementById("Root 1").innerHTML = "X<sub>1</sub> = 69";
			document.getElementById("Root 2").innerHTML = "X<sub>2</sub> = 420";
			document.getElementById("extraMessage").innerHTML = "(I'm so sorry)";
			break;
		case "2":
			document.getElementById("Root 1").innerHTML = "X<sub>1</sub> = 100,000,000,000,000,000";
			document.getElementById("Root 2").innerHTML = "X<sub>2</sub> = 100,000,000,000,000,001";
			document.getElementById("extraMessage").innerHTML = "(maybe)";
			break;
		case "3":
			document.getElementById("Root 1").innerHTML = "Root 1: ${Root 1}";
			document.getElementById("Root 2").innerHTML = "Root 2: ${Root 2}";
			break;
		case "4":
			document.getElementById("Root 1").innerHTML = "X<sub>1</sub> $20 decillion";
			document.getElementById("Root 2").innerHTML = "X<sub>2</sub> $0";
			document.getElementById("extraMessage").innerHTML = "(maybe)";
		case "7":
			document.getElementById("Root 1").innerHTML = "Who Cares??? Go stream The Edge of Sleep!"
		case "8":
			document.getElementById("Root 1").innerHTML = "idk tbh but the roots are probably on this graph somewhere that's helpful I think???"
			let q = document.getElementById('graph');
			q.removeAttribute("hidden");
		case "9":
			document.getElementById("Root 1").innerHTML = "-1/12"
			document.getElementById("Root 2").innerHTML = 'There are no other "solutions". All roads lead to here.'
	}
}
