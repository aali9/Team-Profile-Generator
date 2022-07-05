const inquirer = require("inquirer");
const fs = require("fs");
//require constructor to pass info to it and create the new objects.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//require the function from folder src that has the template.js in it.
const generateHTML = require("./scr/generateHTLM");

//create an empty array 
const teamMembersArray= [];

//creating a function for Manager to allow the app to initialize and create a manager.
function managerPrompts() {
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
    
      ])
      .then((answers) => {
        //use the Manager constructor to create my new Manager object to be displayed.
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
        );
  
        teamMembersArray.push(manager);
        buildTeam();
      });
  };
  
  //create function with main menu for the next team members
  function buildTeam() {
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
        if (answers.roles === "Engineer") {
          engineerPrompts();
        } else if (answers.roles === "Intern") {
          internPrompts();
        } else {
          writeFile();
        }
      });
  };
  
  
  function engineerPrompts(){
    inquirer.prompt([
      {
              //  QUESTIONS
              type: "input",
              name: "engineerName",
              message: "Hi engineer, what is your name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "Enter your ID number",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Enter your email address",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "What is your github username?",
            },
    ]).then((answers)=>{
      const engineer= new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      )
      teamMembersArray.push(engineer)
      buildTeam();
    });
  
  }
  
  function internPrompts(){
    inquirer.prompt([
       //QUESTIONS
       {
        type: "input",
        name: "internName",
        message: "Hi intern, what is your name?",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter your ID number",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter your email address",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school did you study at?",
      },
  
    ]).then((answers)=>{
       const intern= new Intern(
         answers.internName,
         answers.internId,
         answers.internEmail,
         answers.internSchool
       )
       teamMembersArray.push(intern)
       buildTeam();
    })
  }

  const writeFile = () => {
    fs.writeFileSync("./dist/index.html", generateHTML(teamMembersArray), (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Your team profile has been successfully created!");
      }
    });
  };
  
  managerPrompts();
  
