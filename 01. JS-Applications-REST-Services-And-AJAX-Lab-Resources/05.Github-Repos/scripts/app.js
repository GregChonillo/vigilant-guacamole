const input = document.getElementById("username");
let inputText = null;
input.addEventListener("change", (ev) => {
	inputText = ev.target.value;
});
function loadRepos() {
	fetch(`https://api.github.com/users/${inputText}/repos`)
		.then((resp) => resp.json())
		.then((data) => {
			document.getElementById("repos").innerHTML = data.map(
				({ full_name, html_url }) => {
					return `<li><a href = "${html_url}">${full_name}</a></li> `;
				}
			);
		});
}
