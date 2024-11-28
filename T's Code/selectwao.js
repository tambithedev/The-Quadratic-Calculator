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
			const button = document.getElementById(/*"buttonName*/);

			button.addEventListener('click', () => {
			  const url = /*"regularWaoUrl"*/;
			  location.href = `${url}?${key1=randomSelection}`;
			});
			break;
	//the rest go to the "special" wrong answer pages
		case 5:
			location.href = /*"ccPageUrl"*/;
			break;
		case 6:
			location.href = /*"parkourPageUrl"*/;
			break;
		case 7:
			location.href = /*"sleepPageUrl"*/;
			break;
		case 8:
			location.href = /*"graphPageUrl"*/;
			break;
		case 9:
			location.href = /*"-1/12PageUrl"*/;
	}
}
