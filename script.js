let button = document.querySelector("#load");
console.log("Im the button", button);
button.addEventListener("click", function loadRepos() {
	leturl = "https://api.github.com/users/testnakov/repos";
	const httpRequest = new XMLHttpRequest();

	httpRequest.addEventListener("readystatechange", function () {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			document.getElementById("res").textContent =
				httpRequest.responseText;
		}
	});
	httpRequest.open("GET", url);
	httpRequest.send();
});

//fetch('https://swapi.co'/api/people/4')
