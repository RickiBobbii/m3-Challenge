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

var lowercase = confirm('Would you like to include lowercase characters?');
var uppercase = confirm('Would you like to include uppercase characters?');
var numeric = confirm('Would you like to include numeric characters?');
var special = confirm('Would you like to include special characters?');
// parseInt converts string input into an Integer
var length = parseInt(prompt('How long do you want your password to be?'));

if (lowercase || uppercase || numeric || special) {
  // At least one option is selected
  var all = '';
  if (lowercase) {
    all += 'abcdefghijklmnopqrstuvwxyz';
    console.log(all);
  }
  if (uppercase) {
    all += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(all);
  }
  if (numeric) {
    all += '0123456789';
    console.log(all);
  }
  if (special) {
    all += '!@#$%^&*()_+{}:\"<>?\\|[];\',./`~';
    console.log(all);
  }
  var password = '';
  for (var i = 0; i < length; i++) {
    // charAt returns the character at the specified index of the string 
    password += all.charAt(Math.floor(Math.random() * all.length));
  }
  console.log('Your password is:', password);
} else {
  // No option is selected
  console.log('User did not select any option.');
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


generateBtn.addEventListener("click", function(event) {
  passwordText.value = password;
  
  //no option selected
  if (!password) {
    alert("No options selected. Please refresh page to try again.");
    
    //Trying to replace textarea placeholder text from displaying undefined, needs fixed
    passwordText.removeAttribute("readonly");
    passwordText.setAttribute("placeholder", "Refresh page to try again.");

    console.log(passwordText);
    //same as previous comment, this gives a way to backspace and see refresh message, needs fixed
    passwordText.addEventListener("input", function() {
      if (!password) {
        passwordText.value = "";
      }
    } );
  };  
});