const fs = require("fs/promises");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is your name?",
			name: "name",
		},
		{
			type: "input",
			message: "Tell us a bit about yourself?",
			name: "bio",
		},
		{
			type: "input",
			message: "Where are you located at?",
			name: "location",
		},
		{
			type: "input",
			message: "What is your LinkedIn URL?",
			name: "linkedIN",
		},
		{
			type: "input",
			message: "What is your GitHub URL?",
			name: "GitHub",
		},
	])
	.then((response) => {
		const html = generateHtml(response);
		return fs.writeFile("./output.html",html);
	}).then(() => {
		return fs.writeFile("./output.css", `.red{color:red}`);
	}).then(() => {
		console.log("Done!");
	})

function generateHtml({name,bio,location,linkedIN,GitHub}){
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${name}'s portfulio</title>
		<link rel="stylesheet" href="./output.css"/>
	</head>
	<body>
		<h1 class="red">${name}'s portfulio</h1>
	
		<p>${bio}</p>
	
	
		<h2 class="red">Links</h2>
		<ul>
			<li><a href="${linkedIN}">LinkedIn</a></li>
			<li><a href="${GitHub}">GitHub</a></li>
		</ul>
	
		<h2 class="red">Contact</h2>
		<p>you can find me at ${location}.</p>
	</body>
	</html>`
}