document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrorMessages();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (username === "") {
      displayErrorMessage("username-error", "Please enter your username.");
      return;
    }

    if (password.length < 6) {
      displayErrorMessage("password-error", "Password should be at least 6 characters long.");
      return;
    }

    if (confirmPassword !== password) {
      displayErrorMessage("confirm-password-error", "Passwords do not match.");
      return;
    }

    // Submit the form if all validations pass
    alert("Signup successful!");
    document.getElementById("signup-form").reset();
  });

  function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = message;
  }

  function clearErrorMessages() {
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML = "";
    }
  }