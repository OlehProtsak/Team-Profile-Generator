// Importing required modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Importing classes for team members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Importing the HTML rendering function
const render = require("./src/page-template.js");

// Importing sets of questions for different team members
const {
  menuChoiceOptions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./src/questions.js");

// Setting up the output directory and file path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Function to gather information about the team
async function gatherTeamInfo() {
  // Array to store team members
  const teamMembers = [];

  // Prompt for manager's information
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );

  // Create a Manager object and add it to the team
  const manager = new Manager(name, id, email, officeNumber);
  teamMembers.push(manager);
  console.log(`${manager.name}, welcome! Let's add members to your team.`);

  //async IIFE to recursively add team members based on user choices
  let userChoice;
  (async function addTeamMember() {
    const { choice } = await inquirer.prompt(menuChoiceOptions);
    userChoice = choice;

    if (userChoice === "Add an engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      const engineer = new Engineer(name, id, email, github);
      teamMembers.push(engineer);
      console.log(
        `${engineer.getRole()}: ${engineer.getName()}  successfully added to your team!`
      );

      // Recursively call addTeamMember to continue adding members
      addTeamMember();
    } else if (userChoice === "Add an intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      console.log(
        `${intern.getRole()}: ${intern.getName()} successfully added to your team!`
      );

      // Recursively call addTeamMember to continue adding members
      addTeamMember();
    } else if (userChoice === "Finish building the team") {
      // Display a message when team building is complete
      console.log("Team building complete!");

      // Render the HTML content using the render function
      const htmlContent = render(teamMembers);

      // Check if the output directory exists, create if not
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
        console.log(`Output directory created at: ${OUTPUT_DIR}`);
      }

      // Write the HTML content to the output file
      fs.writeFileSync(outputPath, htmlContent);
    }
  })();
}

// Call the gatherTeamInfo function to start the process
gatherTeamInfo();
