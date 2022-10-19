// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

var lengthEl = document.querySelector("#length");

var lowercaseEl = document.querySelector("#lowercase");

var uppercaseEl = document.querySelector("#uppercase");

var numbersEl = document.querySelector("#numbers");

var specialEl = document.querySelector("#special");

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

function generatePassword() {
  var generatedPassword = '';
  var pw = ""

  //create window prompts
  var lowercasePrompt = confirm("Would you like your generated password to contain lowercase letters?")
  var uppercasePrompt = confirm("Would you like your generated password to contain uppercase letters?")
  var numbersPrompt = confirm("Would you like your generated password to contain numbers?")
  var specialPrompt = confirm("Would you like your generated password to contain special characters?")
  var lengthPrompt = prompt("How long would you like your password to be? Answer must be between 8-128 characters")
  lengthPrompt = parseInt(lengthPrompt)
  console.log(lengthPrompt)

  if (lowercasePrompt) {
    generatedPassword += getRandomLower();
  }
  if (uppercasePrompt) {
    generatedPassword += getRandomUpper();
  }
  if (numbersPrompt) {
    generatedPassword += getRandomNumber();
  }
  if (specialPrompt) {
    generatedPassword += getRandomSymbol();
  }

  if(lengthPrompt < 8 || lengthPrompt > 128) {
    alert("The password must be more than 8 characters and less than 128.")
    return ""
  }

  var finalPassword = generatedPassword.slice(0, 128);
  finalPassword.length = lengthPrompt
  passwordText.value = finalPassword;
}

// Add event listener to generate button and submit button
generateBtn.addEventListener("click", generatePassword);