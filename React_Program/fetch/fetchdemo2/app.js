async function getData() {
	const githubId = document.getElementById("githubId").value.trim();
	const detailsDiv = document.querySelector("#details");

	if (!githubId) {
		detailsDiv.innerHTML = `<p style="color: crimson;">Please enter a valid GitHub username.</p>`;
		return;
	}

	detailsDiv.innerHTML = '<div class="loader"></div>'; // Show loading spinner

	try {
		// Fetch the response
		const response = await fetch(`https://api.github.com/users/${githubId}`);

		// Check for non-200 status
		if (response.status !== 200) {
			throw new Error("User not found");
		}

		// Parse JSON response
		const user = await response.json();

		// Extract user details
		let name = user.name;
		let company = user.company;
		let website = user.blog;
		let imgurl = user.avatar_url;

		detailsDiv.innerHTML = ""; // Clear loader

		// Create elements to display user details
		const img = document.createElement("img");
		img.src = imgurl;

		const p1 = document.createElement("p");
		p1.innerHTML = `<strong>Name:</strong> ${name || "N/A"}`;

		const p2 = document.createElement("p");
		p2.innerHTML = `<strong>Company:</strong> ${company || "N/A"}`;

		const p3 = document.createElement("p");
		p3.innerHTML = `<strong>Website:</strong> <a href="http://${website}" target="_blank">${
			website || "N/A"
		}</a>`;

		// Append elements to the details div
		detailsDiv.appendChild(img);
		detailsDiv.appendChild(p1);
		detailsDiv.appendChild(p2);
		detailsDiv.appendChild(p3);
	} catch (error) {
		// Handle errors
		detailsDiv.innerHTML = `<p style="color: crimson;">Error: ${error.message}</p>`;
	}
}
