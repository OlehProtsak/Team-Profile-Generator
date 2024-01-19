const {
  isNotEmpty,
  isValidEmail,
  isValidNumber,
} = require("./questions-validate");

const menuChoiceOptions = [
  {
    type: "list",
    name: "choice",
    message: "Select an option:",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the team manager's name:",
    validate: isNotEmpty,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the team manager's ID:",
    validate: isValidNumber,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the team manager's email address:",
    validate: isValidEmail,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the team manager's office number:",
    validate: isValidNumber,
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name:",
    validate: isNotEmpty,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's ID:",
    validate: isValidNumber,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email address:",
    validate: isValidEmail,
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's GitHub username:",
    validate: isNotEmpty,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name:",
    validate: isNotEmpty,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's ID:",
    validate: isValidNumber,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address:",
    validate: isValidEmail,
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school:",
    validate: isNotEmpty,
  },
];

module.exports = {
  menuChoiceOptions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
