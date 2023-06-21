const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateHTML = require('./util/generateHtml.js');
const employees = []

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: (answers) => answers.role === "Manager"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: (answers) => answers.role === "Intern"
    },
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?"
    }
]
