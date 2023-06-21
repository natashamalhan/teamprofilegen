const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateHTML = require('./util/generateHtml.js');
const employees = []
