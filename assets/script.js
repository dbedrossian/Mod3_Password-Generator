// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all possible options
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","_","-","+","=","~","!","@","#","$","%","^","&","*","_","-","+","=","~"];

// Start of function
  function generatePassword() {

// Defines the variables
  var charSet = [];

// Asks for number of characters for the password.
  var charLength = prompt("How many characters? (Please select between 8 and 120 characters)");

// Alerts if password length is outside the range.
  if (charLength <8 || charLength >120) {
    alert("Characters must be between 8-120 characters long. Please re-enter.")
    generatePassword();
  }

// Confirms each of the character sets, then assigns the string to the total characters if the user selects "yes"
  var charUpper = confirm("Do you want uppercase letters?");

    if (charUpper) {
    charSet.push(...alphaUpper)
    }

  var charLower = confirm("Do you want lowercase letters?");
  
    if (charLower) {
    charSet.push(...alphaLower)
  }

  var num = confirm("Do you want numbers?");

    if (num) {
    charSet.push(...numbers)
  }

  var specChar = confirm("Do you want special characters?");

    if (specChar) {
    charSet.push(...specialChar)
  }
  
  // Alert if no options were selected
  if (!charUpper && !charLower && !num && !specChar) {
    alert("You must choose one.")
    generatePassword();
  }


// Loops through options in the set and concatenates them together, using a random choice
  var password = '';
  for(let i=0; i <charLength; i++) {
  password += charSet[Math.floor(Math.random()*charSet.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// ------------------------------------------------------


// var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var alphaLower = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "0123456789";
// var specChar = "!@#$%^&*_-+=";


// var randomUpper = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
// var randomLower = alphaLower[Math.floor(Math.random()*alphaLower.length)];
// var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
// var randomSpecial = specialChar[Math.floor(Math.random()*specialChar.length)];

// var array = [randomUpper,randomLower,randomNumber,randomSpecial];

// var randomChar = (array[Math.floor(Math.random()*array.length)]);
// console.log(randomChar);

// var numChar = prompt("How many characters?")
// var specChar = confirm("Do you want special characters?")
// var charUpper = confirm("Do you want uppercase letters?")
// var charLower = confirm("Do you want lowercase letters?")
// var num = confirm("Do you want numbers?")

// if (specChar) {
//   console.log(true)}
//   else {
//     console.log(false)
//   }