// Global variables
var special = ["!","@","#","$","%","^","&","*","(",")","-","?","<",">","/","~","+"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// function for logic and prompts
function userOptions() {
    // logic here for prompts

    // ask user how many characters they want in password
    var length = parseInt(
    prompt('How many characters would you like in your password?'));
    // Check that password is a number, else return null
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }
  // Check that password is between 8-126 character length, else return null
  if (length < 8) {
    alert('Password must be between 8-126 characters');
    return null; 
  }
  if (length > 126) {
    alert('Password must be between 8-126 characters');
    return null;
  }
  // ask User to confirm which characters to include in password
  var specialChar = confirm('Click OK if you would like special characters.');

  var lowerChar = confirm('Click OK if you would like lowercase characters.');

  var upperChar = confirm('Click Ok if you would like uppercase characters.');

  var numberChar = confirm('Click OK if you would like numbers.');

  // Conditional statment to check if user doesn't select any of the types of characters. If all four variable evaluate to false, then program ends
  if ( 
    specialChar === false &&
    lowerChar === false &&
    upperChar === false &&
    numberChar === false) 
    {
      alert('You must select at least one character type');
      return null;
    }

  // Object to store user input
  var pwOptions = {
    length: length,
    specialChar: specialChar,
    lowerChar: lowerChar,
    upperChar: upperChar,
    numberChar: numberChar
  };

  return pwOptions;
}

// Function for getting a random element from an array
function setRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
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