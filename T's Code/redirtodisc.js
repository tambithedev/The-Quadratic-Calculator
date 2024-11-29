function redirToDisc() {
			const button = document.getElementById("calcDiscButton");

			button.addEventListener('click', () => {
			  const url = "calcdisc.html";
			  location.href = `${url}?$key1=${a}&key2=${b}key3=${c}`;
			});
}
