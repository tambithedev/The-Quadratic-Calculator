function selectWao() {
//each different page/joke has a number assigned to it
	let randomSelection;
	randomSelection = Math.floor(Math.random() * 9) + 1; //random number between 1 and 9 (inclusive)
	switch(randomSelection) {
	//cases 1-4: go to the "regular format" wrong answer page, exiting with a parameter
		case 1:
		case 2:
		case 3:
		case 4:
		case 7:
		case 8:
		case 9:
			const button = document.getElementById("wao");

			button.addEventListener('click', () => {
			  const url = "rwao.html";
			  location.href = `${url}?key=${randomSelection}`;
			});
			break;
	//the rest go to the "special" wrong answer pages
		case 5:
			location.href = "swao1.html";
			break;
		case 6:
			location.href = "swao2.html";
			break;
	}
}
