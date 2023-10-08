var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];

var finalPass = [""];

var numberOfCharacthers = [""];

// var numberOfCharacthers = prompt("How many Characters?");  
// var lettersPrompt = confirm("Would you like upper case letters?");
// var numberPrompt = confirm("Would you like numbers?");
// var lowerCase = confirm("Would you like special charecters?");



function generatePassword() {
 passwordLength();
 lowerCase();
 upperCasePrompt();
 numbersInc();
 specialC();
 for(var i = 0; i < finalPass.length; i++){
  // finalPass = Math.floor(Math.random() * passwordLength.length);
  console.log(finalPass);
 }return finalPass;
}





function passwordLength(numberOfCharacthers) {
  numberOfCharecters = prompt('How many charecters would you like included?');
  if (numberOfCharecters < 8 || numberOfCharecters > 128) {
    alert('Password must be between 8-128 charecters!');
  }return;
}

function lowerCase () {
  lowerPrompt = confirm('Would you like Lowercase letters included?');
  if(lowerPrompt) {
    finalPass = (lowerCaseLetters + finalPass);
  }return;
}

function upperCasePrompt() {
   lettersPrompt = confirm('Would you like upper case letters included?')
  if (lettersPrompt) {
    finalPass = (upperCaseLetters + finalPass);
  }return;
}

function numbersInc() {
  numbersP = confirm('Would you like numbers included?');
  if (numbersP) {
    finalPass = (numbers + finalPass);
  }return;
}

function specialC() { 
   special = confirm('Would you like special charecters included?');
  if (special) {
    finalPass = (specialCharacters + finalPass);
  }return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}



// function passLength() {        // between 8-128
//   lengthP = prompt('How many Charecters would you like?')
//   if (lengthP < 8 || lengthP > 128) {
//     alert('Your password must be between 8 and 128 charecters in length.')
//   }return finalPass;
//


