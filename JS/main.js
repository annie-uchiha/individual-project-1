function validateForm() {
  var form = document.getElementById("form");
  if (form.checkValidity()) {
    // Form is valid, submit it
    return true;
  } else {
    // Form is not valid, display an error message
    alert("Please fill out the search field.");
    return false;
  }
}
