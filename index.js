//Imports
const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./lib/shapes");


//function to prompt user for logo details
function promptUser() {
    inquirer
      .prompt([
        // Text prompt
        {
          type: "input",
          message: "What text would you like you logo to display?: Enter three characters",
          name: "text",
        },
        // Text color prompt
        {
          type: "input",
          message:  "Choose text color: Enter color keyword OR a hexadecimal number",
          name: "textColor",
        },
        // Shape choice prompt
        {
          type: "list",
          message: "What shape would you like the logo to be?",
          choices: ["Circle", "Square", "Triangle"],
          name: "shape",
        },
        // Shape color prompt
        {
          type: "input",
          message: "Choose shape color: Enter color keyword OR a hexadecimal number",
          name: "shapeColor",
        },
      ])
    }
    promptUser()