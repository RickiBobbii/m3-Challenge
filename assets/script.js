// Assignment Code
/*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/


var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!@#$%^&*()_+{}:\"<>?\\|[];\',./`~';
var all = specials + lowercase + uppercase + numbers;
var range = 8;

function generatePassword(range) {
  var password = '';
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specials.charAt(Math.floor(Math.random() * specials.length));
  for (var i = 0; i < range - 4; i++) {
    password += all.charAt(Math.floor(Math.random() * all.length));
  }
  return password;
}

console.log(generatePassword(range));

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function() {
  var password = generatePassword(range);
  passwordText.value = password;

});
