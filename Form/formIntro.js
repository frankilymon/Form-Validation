function validationForm() {
  var uname = document.forms["myForm"]["uname"].value;
  var age = document.forms["myForm"]["age"].value;
  var residentStatus = document.forms["myForm"]["residency"].value;
  var accountType = document.querySelectorAll("input[name=acctype]:checked");
  var nationality = document.forms["myForm"][nationality].value;
  if (uname.length < 6) {
    alert("The username needs to be atleast 6 characters long");
    return false;
  } else {
    var selectedAccounts = [];
    for (let i = 0; i < accountType.length; i++) {
      selectedAccounts.push(accountType[i].value);
    }
    var alertMsg =
      "The details supplied: " +
      " \nUsername: " +
      uname +
      "\nAge: " +
      age +
      "\nResident status: " +
      residentStatus +
      "\nAccounts selected: " +
      selectedAccounts +
      "\nNationality index: " +
      nationality;
    alert(alertMsg);
    return true;
  }
}
