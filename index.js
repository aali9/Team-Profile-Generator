const inquirer = require("inquirer");
const fs = require("fs");
//require constructor to pass info to it and create the new objects.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//require the function from folder src that has the template.js in it.
const renderHtml = require("./scr/generateHTLM");

//create an empty array 
const members = [];
