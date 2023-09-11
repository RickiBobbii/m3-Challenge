//variables to hold all inputs and the generated password
var all = '';
var password = '';
//variables to select the proper id from html to generate and display password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//event listerner to generate password on click on button
generateBtn.addEventListener("click", function(event) {
  //clear previous password
  password = "";
  //5 prompt variables
  var lowercase = confirm('Would you like to include Lowercase characters?');
  var uppercase = confirm('Would you like to include Uppercase characters?');
  var numeric = confirm('Would you like to include Numeric characters?');
  var special = confirm('Would you like to include Special characters?');
  // parseInt converts string input into an Integer
  var passLength = parseInt(prompt('Choose password length between 8 and 128 characters.'));
    while (passLength < 8 || passLength > 128) {
      alert("Invalid length! Please select in between 8 and 128 characters");
      passLength = parseInt(prompt('Choose password length between 8 and 128 characters.'));
    }
  if (lowercase || uppercase || numeric || special) {
    // At least one option is selected, adds all strings together that are selected
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
    } else {
      // No option is selected
      console.log('User did not select any option.');
    }

    for (var i = 0; i < passLength; i++) {
      // charAt returns the character at the specified index of the string 
      password += all.charAt(Math.floor(Math.random() * all.length));
    }
    console.log('Your password is:', password);
    //if no option selected
    if (!password) {
      alert("No options selected. Please click button to try again.");
      passwordText.setAttribute("placeholder", "Click button to try again.");
      console.log(password);
      all = '';
      console.log("All variable is " + all);
    };  
    //Displays password in text area
    passwordText.value = password;
    console.log("All if all criteria meet " + all);
    all = '';
    console.log("All set to empty after password displayed" + all);
});