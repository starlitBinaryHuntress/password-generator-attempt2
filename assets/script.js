// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

var lengthEl = document.querySelector("#length");

var lowercaseEl = document.querySelector("#lowercase");

var uppercaseEl = document.querySelector("#uppercase");

var numbersEl = document.querySelector("#numbers");

var specialEl = document.querySelector("#special");

const variables = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

function getRandomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPreferences(event) {
  event.preventDefault()
  writePassword();
}

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = '';

  var typesCount = lower + upper + number + symbol;

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return "Please enter your criteria"
  }

  if(length < 8) {
    return "The password must be more than 8 characters."
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName)

      generatedPassword += variables[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, 128);
  return finalPassword;
  
}
//create window prompts
var lowercasePrompt = prompt("Would you like your generated password to contain lowercase letters?")
var uppercasePrompt = prompt("Would you like your generated password to contain uppercase letters?")
var numbersPrompt = prompt("Would you like your generated password to contain numbers?")
var specialPrompt = prompt("Would you like your generated password to contain special characters?")

// Add event listener to generate button and submit button
generateBtn.addEventListener("click", showForm);

submitBtn.addEventListener("click", function() {
  event.preventDefault();
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSpecial = specialEl.checked;

  passwordText.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSpecial, 
    length);
});