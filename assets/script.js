// Global variables for characters available 
var special = ["!","@","#","$","%","^","&","*","(",")","-","?","<",">","/","~","+"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// function for user options and prompts
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
  var specialChars = confirm('Click OK if you would like special characters.');

  var lowerChars = confirm('Click OK if you would like lowercase characters.');

  var upperChars = confirm('Click Ok if you would like uppercase characters.');

  var numberChars = confirm('Click OK if you would like numbers.');

  // Conditional statment to check if user doesn't select any of the types of characters. If all four variable evaluate to false, then program ends
  if ( 
    specialChars === false &&
    lowerChars === false &&
    upperChars === false &&
    numberChars === false) 
    {
      alert('You must select at least one character type');
      return null;
    }

  // Object to store user input
  var pwOptions = {
    length: length,
    specialChars: specialChars,
    lowerChars: lowerChars,
    upperChars: upperChars,
    numberChars: numberChars
  };

  return pwOptions;
}

// Function for getting a random element from an array
function setRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// Function to generate password with user's input
function generatePassword() {
  var options = userOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleChars = [];

  // Array to contain one of each type of chosen characters to ensure each will be used
  var guaranteedChars = [];

  // Check if an options object exists, if not exit function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user's input
  // Push new random special character into guaranteedChars
  if (options.specialChars) {
    possibleChars = possibleChars.concat(special);
    guaranteedChars.push(setRandom(special));
  }
   // Conditional statement that adds array of lowercase characters into array of possible characters based on user's input
  // Push new random lowercase character into guaranteedChars
  if (options.lowerChars) {
    possibleChars = possibleChars.concat(lowerCase);
    guaranteedChars.push(setRandom(lowerCase));
  }
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user's input
  // Push new random uppercase character into guaranteedChars
  if (options.upperChars) {
    possibleChars = possibleChars.concat(upperCase);
    guaranteedChars.push(setRandom(upperCase));
  }
  // Conditional statement that adds array of number characters into array of possible characters based on user's input
  // Push new random number character into guaranteedChars
  if (options.numberChars) {
    possibleChars = possibleChars.concat(numbers);
    guaranteedChars.push(setRandom(numbers));
  }

   // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = setRandom(possibleChars);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}


// Assignment Code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);