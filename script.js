// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","_","-","+","="];

var randomUpper = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
var randomLower = alphaLower[Math.floor(Math.random()*alphaLower.length)];
var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
var randomSpecial = specialChar[Math.floor(Math.random()*specialChar.length)];

var array = [randomUpper,randomLower,randomNumber,randomSpecial];

console.log(array[Math.floor(Math.random()*array.length)]);


function generatePassword() {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var numChar = prompt("How many characters?")
// var specChar = prompt("Do you want special characters?")
// var charUpper = prompt("Do you want uppercase letters?")
// var charLower = prompt("Do you want lowercase letters?")
// var num = prompt("Do you want numbers?")
