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

//creating a function for Manager to allow the app to initialize and create a manager.
function promptManager() {
    inquirer
      .prompt([
        {
      //Questions
          type: "input",
          name: "managerName",
          message: "Hi team manager, what is your name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter your ID number",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter your email address",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is your office number?",
        },
      ])
      .then((answers) => {
        //use the Manager constructor to create my new Manager object to be displayed.
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
  
        members.push(manager);
  // create a loop to go into main menu.
        menu();
      });
  }
  
  //create function with main menu for the next team members
  function menu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "mainMenu",
          message: "What would you like to do next?",
          choices: ["Engineer", "Intern", "Build Team"],
        },
      ])
      .then((answers) => {
        switch (answers.mainMenu) {
          case "Engineer":
            promptEngineer();
            break;
          case "Intern":
            promptIntern();
            break;
          default:
            buildTeam();
        }
      });
  }
  
  promptManager();
  
 