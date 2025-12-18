function getData() {
	const gitHubId = document.querySelector("#githubId").value.trim();
	const detailsDiv = document.querySelector("#details");
	if (!gitHubId) {
		detailsDiv.innerHTML =
			'<p style="color:crimson;">Please enter a valid github username</p>';
		return;
	}
	detailsDiv.innerHTML = "<div class='loader'></div>";
	let endPoint = `https://api.github.com/users/${gitHubId}`;
	let pr = fetch(endPoint);
	pr.then((response) => {
		console.log("first then running...");
		if (response.status !== 200) {
			throw new Error("User not found!");
		}
		return response.json();
	})
		.then((user) => {
			let name = user.name;
			let company = user.company;
			let website = user.blog;
			let imgUrl = user.avatar_url;

			let img = document.createElement("img");
			img.src = imgUrl;

			let pusername = document.createElement("p");
			pusername.innerHTML = `<strong>Username:</strong>${name}`;

			let pcompany = document.createElement("p");
			pcompany.innerHTML = `<strong>Company:</strong>${company}`;

			let pwebsite = document.createElement("p");
			pwebsite.innerHTML = `<strong>Website:</strong><a href="http://${website}">${website}</a>`;
			detailsDiv.innerHTML = "";
			detailsDiv.appendChild(img);
			detailsDiv.appendChild(pusername);
			detailsDiv.appendChild(pcompany);
			detailsDiv.appendChild(pwebsite);
		})
		.catch((error) => {
			detailsDiv.innerHTML = `<p style="color:crimson;">${error.message}</p>`;
		});
}
