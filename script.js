// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all possible options
// var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// var specialChar = ["!","@","#","$","%","^","&","*","_","-","+","="];

var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specChar = "!@#$%^&*_-+=";


// Start of function

function generatePassword() {
// Defines the variables
  var password = "";
  var charSet = "";

// Asks for number of characters for the password.
  var charLength = prompt("How many characters? (Please select between 8 and 120 characters)");

// Alerts if password length is outside the range.
  if (charLength <8 || charLength >120) {
    alert("Characters must be between 8-120 characters long. Please re-enter.")
    var charLength = prompt("How many characters? (Please select between 8 and 120 characters)");
  }

// Confirms each of the character sets, then assigns the string to the total characters if the user selects "yes"
  var charUpper = confirm("Do you want uppercase letters?");

    if (charUpper) {
      charSet += alphaUpper
    }

  var charLower = confirm("Do you want lowercase letters?");
  
  if (charLower) {
    charSet += alphaLower
  }

  var num = confirm("Do you want numbers?");

  if (num) {
    charSet += num
  }

  var specChar = confirm("Do you want special characters?");

  if (specChar) {
    charSet += specChar
  }
  
  // if ((specChar) && (!charUpper) && (!charLower) && (!num)) {
  //   var specChar = "!@#$%^&*_-+=";}
  //   else specChar = "random";



    
  var result = ' ';
  var charLength = specChar.length;
  for(let i=0; i <length; i++) {
    result += specChar.charAt(Math.floor(Math.random()*charLength));
  }

  // var result = ' ';
  // var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var charLength = alphaUpper.length;
  // for(let i=0; i <length; i++) {
  //   result += alphaUpper.charAt(Math.floor(Math.random()*charLength));


return result;

}

console.log(generatePassword(5));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





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