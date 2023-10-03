// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  //yes/no

var numberOfCharacthers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //number

var numbers = ["1","2","3","4","5","6","7","8","9"]; //yes/no
var specialCharacters = ["!","@","#","$","%","^","&","*"]; //yes/no
var finalPassword = "";

function generatePassword(){
var numberOfCharacthers = prompt("How many Characters?");
upperCaseLetters = confirm("Would you like upper case letters?");
numbers = confirm("Would you like numbers?");
specialCharacters = confirm("Would you like special charecters?");
}

function getRandomNum(){
  getRandomNum = (numbers.math.random());
}

// x = (getRandomNum)

// function for letters promp 


// function for numbers   promt



//function for special characters  promt
// function for length   8-128  promt


// display password when generated  display  for loop

// forEach () ;{


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}

