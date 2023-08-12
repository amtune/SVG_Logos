// Imports colors array for use in prompts
const { colors } = require("./colors.js");

// Questions array for use in index.js inquirer prompts
const questions = [
  // Prompt to enter up to three characters
  {
    type: 'input',
    name: 'textSubmit',
    message: 'Enter up to three characters of text for your logo:',
    // Ensures no more than three characters are accepted
    validate: (input) => {
      return input.length <=3 ? true 
      : console.error("\n Entry exceeds three character maximum.")},
  },
  // Prompt to enter a text color for characters
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color as keyword (i.e. blue) or hexadecimal code (i.e. #0000ff):',
    // Ensures a valid color value is entered
    validate: (input) => {
      const testInput = input.toLowerCase();
      return colors.includes(testInput) ? true
        // This part took a lot of work, it may not look like much but I'm proud of it <3
        : /^#[a-f\d]{6}$/.test(testInput) ? true
        : console.error("\n Invalid color entry format.")
    }
  },
  // Prompt to select a shape for the logo, from circle, triangle, and square
  {
    type: 'list',
    name: 'shapeSubmit',
    message: 'Choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  // Prompt to enter a color for the logo shape
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color as keyword (i.e. blue) or hexadecimal code (i.e. #0000ff):',
    // Ensures a valid color value is entered
    validate: (input) => {
      const testInput = input.toLowerCase();
      return colors.includes(testInput) ? true
        : /^#[a-f\d]{6}$/.test(testInput) ? true
        : console.error("\n Invalid color entry format.")
    }
  },
]

// Exports questions array
module.exports = questions;