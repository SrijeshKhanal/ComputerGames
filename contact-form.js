// Function to validate the form
function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var messageType = document.querySelector('input[name="messageType"]:checked');

  // Check if fields are empty
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    message === "" ||
    !messageType
  ) {
    alert("All fields are required.");
    return false;
  }

  return true;
}