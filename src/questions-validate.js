// Function to check if a value is not empty
const isNotEmpty = (value) => (value !== "" ? true : "Value cannot be empty");

// Function to check if a value is a valid positive number
const isValidNumber = (value) =>
  !isNaN(value) && parseInt(value) > 0
    ? true
    : "Please enter a valid number (a positive integer)";

// Function to check if a value is a valid email address
const isValidEmail = (value) =>
  /\S+@\S+\.\S+/.test(value) ? true : "Please enter a valid email address";

module.exports = {
  isNotEmpty,
  isValidNumber,
  isValidEmail,
};
