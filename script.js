// Global variables
var special = ["!","@","#","$","%","^","&","*","(",")","-","?","<",">","/","~","+"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// function for logic and prompts
function generatePassword() {
    // logic here for prompts
    var length = parseInt(
    prompt('How many characters would you like in your password?'));
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  } 
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);