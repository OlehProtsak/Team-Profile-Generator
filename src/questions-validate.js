const isNotEmpty = (value) => (value !== "" ? true : "Value cannot be empty");
const isValidNumber = (value) =>
  !isNaN(value) && parseInt(value) > 0
    ? true
    : "Please enter a valid number (a positive integer)";
const isValidEmail = (value) =>
  /\S+@\S+\.\S+/.test(value) ? true : "Please enter a valid email address";

module.exports = {
  isNotEmpty,
  isValidNumber,
  isValidEmail,
};
