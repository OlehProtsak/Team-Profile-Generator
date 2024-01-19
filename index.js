const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./src/page-template.js");

const {
  menuChoiceOptions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./src/questions.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Function to gather information about the team
async function gatherTeamInfo() {
  const teamMembers = [];

  // Prompt for manager's information
  const managerAnswers = await inquirer.prompt(managerQuestions);

  // Create a Manager object and add it to the team
  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );
  teamMembers.push(manager);
  console.log(`${manager.name}, welcome! Let's add members to your team.`);
}

// Call the function to start gathering team information
gatherTeamInfo();
