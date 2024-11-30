function redirToDisc() {
	const button = document.getElementById("calcDiscButton");

	const a = document.getElementById("a");
	const b = document.getElementById("b");
	const c = document.getElementById("c");

	const url = `calcdisc.html?key1=${a}&key2=${b}&key3=${c}`
	document.getElementById("calcDiscLink").value = url
	/*button.addEventListener('click', () => {
		const url = "./calcdisc.html";
		window.location.replace(`${url}?key1=${a.value}&key2=${b.value}&key3=${c.value}`);
});*/
}
