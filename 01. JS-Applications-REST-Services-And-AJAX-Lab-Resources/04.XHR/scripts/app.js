function loadRepos() {
	fetch("https://api.github.com/users/testnakov/repos")
		.then((resp) => resp.json())
		.then(
			(data) =>
				(document.getElementById("res").textContent =
					JSON.stringify(data))
		);
	//console.log("TODO...");
}
