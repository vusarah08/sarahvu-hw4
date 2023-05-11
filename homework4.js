function fnameValidation(){
    fname = document.getElementById('fname').value;
    var namePattern = /^[A-Za-z'-]+$/;


    if(fname == ''){
        document.getElementById("ferror").innerHTML = "First name must not be empty.";
        return false;

    } else if(fname!= ''){
        if(!fname.match(namePattern)){
            document.getElementById("ferror").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        } else if(fname.length < 1){
            document.getElementById("ferror").innerHTML = "First name must contain at least 1 character";
            return false;
    }else if(fname.length > 30){
        document.getElementById("ferror").innerHTML = "First name must not exceed 30 characters";
        return false;
    } else{
        document.getElementById("ferror").innerHTML = "";
        return true; 

    }
    }
}

function minitialValidation(){
    minitial = document.getElementById('minitial').value;
    var initialPattern = /^[A-Z]/;

    if(minitial != ''){
        if(!minitial.match(initialPattern)){
            document.getElementById("minitial-error").innerHTML = "Upper letters only";
            return false;
        }else if (minitial.length > 1){
            document.getElementById("minitial-error").innerHTML = "Must not exceed 1 character";
            return false;
        }else {
            document.getElementById("minitial-error").innerHTML = "";
            return true;
        }
    }
}
function lnameValidation() {
    lname = document.getElementById('lname').value;
     var lnamePattern = /^[A-Za-z'-]+$/;
 
     if (lname == '') {
         document.getElementById("lerror").innerHTML = "Last Name must not be left blank!";
         return false;
     } else if (lname!= '') {
         if (!lname.match(lnamePattern)) {
             document.getElementById("lerror").innerHTML = "Letters, apostrophes, and dashes only!";
             return false;
         } else if (lname.length < 1) {
             document.getElementById("lerror").innerHTML = "Last name must contain at least 1 charactrer!";
             return false;
         } else if (lname.length > 30) {
             document.getElementById("lerror").innerHTML = "Last name must be less than 30!";
             return false;
         }
         else {
             document.getElementById("lerror").innerHTML = "";
             return true;
         }
     }
 }
 function emailValidation() {
    email = document.getElementById('email').value;
    var X = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (email == '') {
        document.getElementById("emailerror").innerHTML = "Email must be entered!";
        return false;
    } else if (!email.match(emailpattern)) {
        document.getElementById("emailerror").innerHTML = "Email address must be valid!";
        return false;
    } else {
        document.getElementById("emailerror").innerHTML = "";
        return true
    }
}
function validateDate(){
    dateInput = document.getElementById('dob');
    var date = new Date(dateInput.value);
    var maxAge = new Date().setFullYear(new Date().getFullYear() - 120);
    var error = document.getElementById("dateerror");

    if (date > new Date() || date < new Date(maxAge)){
        error.innerHTML = "Please enter a date that is not in the future or more than 120 years ago";
        dateInput.value = '';
        return false;
    }else {
        error.innerHTML = '';
        return true;
    }
}
function sliderValidation(x){
    document.getElementById('slidervalue').innerHTML = x;

}
function socialValidation(){
    social = document.getElementById('social').value;
    var socialPattern = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
    var error = document.getElementById('socialerror');

    if(social == ''){
        error.innerHTML = "Field must not be empty.";
        return false;

    } else if(!social.match(socialPattern)) {
        error.innerHTML =" Must match the following format: xxx-xx-xxxx";
        return false;
    } else{
        error.innerHTML = '';
        return true;
    }

}
function phoneValidation(){
    phone = document.getElementById('phone').value;
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    var error = document.getElementById('phoneerror');

    if(phone ==''){
        error.innerHTML = "Field must not be emtpy.";
        return false;

    } else if(!phone.match(phonePattern)){
        error.innerHTML = "Must match the following format: xxx-xxx-xxxx. Digits only.";
        return false;

    } else {
        error.innerHTML = '';
        return true;
    }

}
function validateZipCode() {
    const zipInput = document.getElementById("zipcode").value;
    const zipRegex = /^\d{5}(-\d{4})?$/;
  
    return zipRegex.test(zipInput);
  }
  const zipInput = document.getElementById("zipcode");
  const zipError = document.getElementById("ziperror");
  
  zipInput.addEventListener("input", () => {
    let zipValue = zipInput.value.trim();
    const isValidZip = validateZipCode(zipValue);
    if (isValidZip) {
      zipValue = zipValue.slice(0, 5);
      zipInput.value = zipValue;
  
      zipInput.setCustomValidity("");
      zipError.innerHTML = "";
    } else {
      zipInput.setCustomValidity(
        "Must enter a valid zip code (5 digits i.e. 12345).");
      zipError.innerHTML =
        "Must enter a valid zip code (5 digits i.e. 12345).";
    }
  });

function userValidation(){
    user = document.getElementById('user').value;
    var userPattern = /^[^0-9]/;
    var unamePattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;
    var error = document.getElementById('usererror');

    if(user == ''){
        error.innerHTML = "Field must not be blank.";
        return false;

    }else if(user!=''){
        if(!user.match(userPattern)){
            error.innerHTML = "Username must not start with a number.";
            return false;
        }else if(!user.match(unamePattern)){
            error.innerHTML = "Username must not include spaces or speical characters.";
            return false;

        } else if (user.length < 5) {
            error.innerHTML = "Username must be at least 5 characters.";
            return false;
        } else if(user.length > 30) {
            error.innerHTML = "Username must not exceed 30 characters.";
            return false;

        }else {
            error.innerHTML = '';
            return true;
        }

    }

}
function passValidation(){
    pass = document.getElementById('pass').value;
    user = document.getElementById('user').value;
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    var error = document.getElementById('passerror');

    if(pass == ''){
        error.innerHTML = "Field must not be empty";
        return false;

    } else if (pass != ''){
        if(!pass.match(passPattern)){
            error.innerHTML = "Password must contain 1 uppercase, 1 lowercase, 1 special character, and 1 digit.";
            return false;

        }else if (pass == user){
             error.innerHTML = "Password must not match UserID.";
             return false;

        } else if (pass.length < 8){
            error.innerHTML = "Password must be at least 8 characters.";
            return false;
        } else if (pass.length > 30){
            error.innerHTML = "Password must not exceedd 30 characters.";

        } else {
            error.innerHTML = "";
            return true;

        }

    }
}
function pass2Validation() {
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;

    if (!pass2) {
      document.getElementById("pass2error").innerHTML =
        "Field must not be empty";
      return false;
    }

    if (pass2 !== pass) {
      document.getElementById("pass2error").innerHTML =
        "Passwords must be the same.";
      return false;
    } else if (pass2 == pass) {
      document.getElementById("pass2error").innerHTML = "";
      return true;
    }
  }
  const validations = [
    fnameValidation,
    minitialValidation,
    lnameValidation,
    socialValidation,
    validateZipCode,
    emailValidation,
    validateDate,
    userValidation,
    phoneValidation,
    passValidation,
    pass2Validation,
  ];
  function checkValidations() {
    for (let func of validations) {
      console.log(func(), func.name)

      if (!func()) {
        document.getElementById("suberror").innerHTML =
          "Must fix your fields and re-submit";
        return false;
      }
    }
    return true;
}
function getData() {

    var form = document.getElementById("DataForm");

    var outputTableBody = document.getElementById("outputTableBody");

    var row, dataNameCell, valueCell;
    outputTableBody.innerHTML = "";

    for (var i = 0; i < form.elements.length; i++) {

    if (form.elements[i].value !== "") {

    row = document.createElement("tr");

    dataNameCell = document.createElement("td");

    valueCell = document.createElement("td");

    dataNameCell.textContent = form.elements[i].name;

    if (form.elements[i].type === "checkbox") {

    valueCell.textContent = form.elements[i].checked ? "checked" : "unchecked";

    } else if (form.elements[i].type === "radio") {

    if (form.elements[i].checked) {

    valueCell.textContent = form.elements[i].value;

    }

    } else {

    valueCell.textContent = form.elements[i].value;

    }
row.appendChild(dataNameCell);

row.appendChild(valueCell);

outputTableBody.appendChild(row);
}
}
    }
    const d = new Date() ; 
    let text = d. toLocaleDateString(); document. getElementById ("today"). innerHTML = text;
 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}