//Imports
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");


//function to prompt questions for the users logo details
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
                message: "Choose text color: Enter color keyword OR a hexadecimal number",
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
        // Error if text value is more than 3 
        .then((data) => {
            if (data.text.length > 3) {
                console.log("Must enter 3 characters or less");
                promptUser();
            } else {
                writeToFile("logo.svg", data);
            }
        });
}
// Function writes the SVG file using user input from prompts
function writeToFile(filename, data) {
    let svgData = "";
    // Opening tag
    svgData = '<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">';
    // Opening tag
    svgData += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgData += `${data.shape}`;

    // Checks user input, then adds shape properties and shape color to SVG file
    let shapeChoice;
    switch (data.shape) {
        case "Circle":
            shapeChoice = new Circle(data.shapeColor);
            break;
        case "Square":
            shapeChoice = new Square(data.shapeColor);
            break;
        case "Triangle":
            shapeChoice = new Triangle(data.shapeColor);
            break;
        default:
            throw "Invalid shape choice"
    }
    svgData += shapeChoice.render();

    // text tag 
    svgData += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
    // Closing tag
    svgData += "</g>";
    // Closing tag
    svgData += "</svg>";


    fs.writeFile(filename, svgData, (err) => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log('SVG file made.');
        }
    });
}
promptUser()