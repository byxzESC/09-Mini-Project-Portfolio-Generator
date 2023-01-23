const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input', 
            message: 'What is your name?', 
            name: 'name'
        },
        {
            type: 'input', 
            message: 'Where are you located at?', 
            name: 'location'
        },
        {
            type: 'input', 
            message: 'What is  your LinkedIn URL?', 
            name: 'linkedIN'
        },
        {
            type: 'input', 
            message: 'What is your GitHub URL?', 
            name:'GitHub'
        },
    ])
    .then((response) => {
        console.log(response);
    })