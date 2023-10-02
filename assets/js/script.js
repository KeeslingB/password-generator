// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //yes/no
var numberOfCharacthers = "abcdefghijklmnopqrstuvwxyz"; //number
var numbers = ["1","2","3","4","5","6","7","8","9"]; //yes/no
var specialCharacters = ["!","@","#","$","%","^","&","*"]; //yes/no
var finalPassword = "";

function generatePassword(){
var numberOfCharacthers = prompt("How many Characters?");
console.log(numberOfCharacthers)
}

console.log(numberOfCharacthers.match.random(1,28));
console.log(numberOfCharacthers);

// function for letters promp



function randomNumber(1,9){
  console.log("would you like numbers included?");
}
// function for numbers   promt



//function for special characters  promt




// function for length   8-128  promt


// display password when generated  display  for loop







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}

