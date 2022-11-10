var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","_","-","+","="];

var charSet = [];
charLength = 8;

var charUpper = confirm("Do you want uppercase letters?");

if (charUpper) {
  charSet.push(...alphaUpper)
}

var charLower = confirm("Do you want lowercase letters?");
  
if (charLower) {
charSet.push(...alphaLower)
console.log("lower", charSet);
}

var num = confirm("Do you want numbers?");

if (num) {
charSet.push(...numbers)
}

var specChar = confirm("Do you want special characters?");

if (specChar) {
charSet.push(...specialChar)
}

const random = charSet[Math.floor(Math.random()*charSet.length)]
console.log(random);

var password = '';
for(let i=0; i <charLength; i++) {
  password += charSet[Math.floor(Math.random()*charSet.length)];
}
console.log(password);

// for (let index = 0; index < 8; index++) {
//     const element = charSet[index];
// }