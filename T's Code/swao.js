function trueEnding(a, b, c) {
//validate whether it's a number	
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
		window.alert("Invalid Input.");
		return "";
	}
//redirect to the results page
	const url = "the-true-ending.html";
	location.href = `${url}?key1=${a}&key2=${b}&key3=${c}`;
}

function tteresult() {
//assign values for comparisons
        const urlParams = new URLSearchParams(window.location.search);
	const chickenNo = urlParams.get('key1');
	const beefNo = urlParams.get('key2');
	const vineNo = urlParams.get('key3');
//output results	
	document.getElementById("beef").innerHTML = "<b>" + (beefNo + 1 - 1) + "</b>" + " jumps for the beef," 
	document.getElementById("chicken").innerHTML = "<b>" + (chickenNo + 1 - 1) + "</b>" + " jumps for the chicken,"	
	document.getElementById("vineBooms").innerHTML = "and " + "<b>" + (vineNo + 1 - 1) + "</b>" + " vine booms along the way."	
		//the +1-1 thing is to fix a weird thing that happens when you press Calculate with empty fields.
//output rank and bonus message
	if ((chickenNo > beefNo) || (beefNo == 0)) {
		document.getElementById("rank").innerHTML = "You are a parkour noob."
	} else if (beefNo == chickenNo) {
		document.getElementById("rank").innerHTML = "You are a parkour Pro."
	} else {
		document.getElementById("rank").innerHTML = "You are a Parkour Master."
	}
	 
	if (vineNo > 220) {
		document.getElementById("bonus").innerHTML = "You also used more vine booms than the Parkour God himself. W rizz."
	} else if (vineNo == 0) {
		document.getElementById("bonus").innerHTML = "No vine booms? L rizz." 
	}
}
