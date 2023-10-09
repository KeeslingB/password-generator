var generateBtn = document.querySelector("#generate");

var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

var numbers = '123456789';

var specialCharacters = '!@#$%^&*()_+';

var finalPass = "";

var length = null;

function generatePassword() {
  length = passwordLength();
  if (length.ok === false) { return; }
  lowerCase();
  upperCasePrompt();
  numbersInc();
  specialC();
  let password = compilePassword();
  return password;
}

function compilePassword() {
  let compiledPassword = "";
  for (i = 0; i < length.length; i++) {
    let randomIndex = Math.floor(Math.random() * finalPass.length - 1);
    compiledPassword += finalPass[randomIndex];
  }
  return compiledPassword;
}

function passwordLength() {
  const numberOfCharacters = prompt('How many charecters would you like included?');
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert('Password must be between 8-128 charecters!');
    return { ok: false };
  }
  console.log(numberOfCharacters);
  return { ok: true, length: numberOfCharacters };
}

function lowerCase() {
  lowerPrompt = confirm('Would you like Lowercase letters included?');
  if (lowerPrompt) {
    finalPass = (lowerCaseLetters + finalPass);
    return;
  }
}

function upperCasePrompt() {
  lettersPrompt = confirm('Would you like upper case letters included?')
  if (lettersPrompt) {
    finalPass = (upperCaseLetters + finalPass);
    return;
  }
}

function numbersInc() {
  numbersP = confirm('Would you like numbers included?');
  if (numbersP) {
    finalPass = (numbers + finalPass);
    return;
  }
}

function specialC() {
  special = confirm('Would you like special charecters included?');
  if (special) {
    finalPass = (specialCharacters + finalPass);
    return;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); {
}

