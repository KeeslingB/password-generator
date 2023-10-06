// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var numbers = ["1","2","3","4","5","6","7","8","9"]; 
var specialCharacters = ["!","@","#","$","%","^","&","*"];
var finalPass =[""]; 
var bigB = [specialCharacters + upperCaseLetters +lowerCaseLetters + numbers +specialCharacters] ;
length = password.length;

// var numberOfCharacthers = prompt("How many Characters?");  
// var lettersPrompt = confirm("Would you like upper case letters?");
// var finalnumbers = confirm("Would you like numbers?");
// var lowerCase = confirm("Would you like special charecters?");


function generatePassword(){
  passLength();
  upperPrompts();
  numbPrompt();
  lowerPrompt();
  passLength();
  // randomFinal();
return finalPass;
}

function passLength() {        // between 8-128
  lengthP = prompt('How many Charecters would you like?')
  if (lengthP < 8 || lengthP > 128) {
    alert('Your password must be between 8 and 128 charecters in length.')
  }return finalPass;
}

function upperPrompts() {
  var lettersPrompt = confirm("Would you like upper case letters?");
  if(lettersPrompt){
    finalPass = ([finalPass + upperCaseLetters]);
  }
}

function numbPrompt(){
  var finalnumbers = confirm("Would you like numbers?");
  if(finalnumbers){
    finalPass = ([finalPass + numbers]);
  }
}

function lowerPrompt() {
  var lowerCase = confirm("Would you like special charecters?");
  if(lowerCase){
    finalPass = ([finalPass + specialCharacters]);
  }
}

// function randomFinal(){
// for (let i = 0; i < length; i++) {
//   let finalPass = [Math.floor(Math.random() * finalPass.length)];
// }return finalPass;
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
