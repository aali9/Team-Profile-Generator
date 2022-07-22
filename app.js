const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./scr/generate-site');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = async () => {
    const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput_1 => {
        if (nameInput_1) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter your employee ID (Required)',
      validate: employeeId_1 => {
        if (employeeId_1) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: email_1 => {
        if (email_1) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter your office number (Required)',
      validate: officeNumber_1 => {
        if (officeNumber_1) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    },
  ]);
  console.log(answers);
  const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
  teamMembers.push(manager);
  promptMenu();
};

const promptMenu = async () => {
    const userChoice = await inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select which option you would like to continue with:',
      choices: ['add an engineer', 'add an intern', 'finish building my team']
    }
  ]);
  switch (userChoice.menu) {
    case "add an engineer":
      promptEngineer();
      break;
    case "add an intern":
      promptIntern();
      break;
    default:
      buildTeam();
  }
};

const promptEngineer = async () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of engineer? (Required)',
      validate: engineerName_1 => {
        if (engineerName_1) {
          return true;
        } else {
          console.log('Please enter the name of engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter your employee ID (Required)',
      validate: employeeId_1 => {
        if (employeeId_1) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: email_1 => {
        if (email_1) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your Github username. (Required)',
      validate: githubUsername_1 => {
        if (githubUsername_1) {
          return true;
        } else {
          console.log('Please enter your Github username!');
          return false;
        }
      }
    }
  ]);
  console.log(answers);
  const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
  teamMembers.push(engineer);
  promptMenu();
};

const promptIntern = async () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);

    const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the intern? (Required)',
      validate: internName_1 => {
        if (internName_1) {
          return true;
        } else {
          console.log('Please enter the name of the intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter your employee ID (Required)',
      validate: employeeId_1 => {
        if (employeeId_1) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: email_1 => {
        if (email_1) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter your school name. (Required)',
      validate: school_1 => {
        if (school_1) {
          return true;
        } else {
          console.log('Please enter your school name!');
          return false;
        }
      }
    }
  ]);
  console.log(answers);
  const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
  teamMembers.push(intern);
  promptMenu();
};

const buildTeam = () => {
    console.log(`
    ===============
    Finished building my team!
    ===============
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();