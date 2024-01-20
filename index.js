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
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );

  // Create a Manager object and add it to the team
  const manager = new Manager(name, id, email, officeNumber);
  teamMembers.push(manager);
  console.log(`${manager.name}, welcome! Let's add members to your team.`);

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
      console.log(`${engineer.getRole()} successfully added to your team!`);
      addTeamMember();
    } else if (userChoice === "Add an intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      console.log(`${intern.getRole()} successfully added to your team!`);
      addTeamMember();
    } else if (userChoice === "Finish building the team") {
      console.log("Team building complete!");
      const htmlContent = render(teamMembers);

      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
        console.log(`Output directory created at: ${OUTPUT_DIR}`);
      }

      fs.writeFileSync(outputPath, htmlContent);
    }
  })();
}

gatherTeamInfo();
