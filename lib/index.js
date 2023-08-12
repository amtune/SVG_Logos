// Requirements
const fs = require("fs");
const inquirer = require("inquirer");
// Imported questions array and shape classes
const questions = require("./lib/questions.js.js");
const { Circle, Square, Triangle } = require("./lib/shapes.js.js");

// Reads shape selection from answers, creates and returns new object from respective class
const setShape = (shapeSubmit, shapeColor) => {
	if (shapeSubmit === "circle") {
		const logoShape = new Circle(shapeColor);
		return logoShape;
	} else if (shapeSubmit === "square") {
		const logoShape = new Square(shapeColor);
		return logoShape;
	} else {
		const logoShape = new Triangle(shapeColor);
		return logoShape;
	}
};

// Plugs answers into svg template, then writes file from modified template
function writeToFile(textSubmit, textColor, shapeSubmit, shapeColor) {
	// Calls function for reading shape class selection
	const logoShape = setShape(shapeSubmit, shapeColor);
	// Template for svg file, calls render function of child class of shape class
	const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${logoShape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textSubmit}</text>
</svg>
`;

	fs.writeFile("logo.svg", svgTemplate, (error) => {
		error ? console.error(error) : console.log("\n Generated logo.svg");
	});
}

function init() {
	inquirer.prompt(questions).then((answers) => {
		const { textSubmit, textColor, shapeSubmit, shapeColor } = answers;
		writeToFile(textSubmit, textColor, shapeSubmit, shapeColor);
	});
}

init();
