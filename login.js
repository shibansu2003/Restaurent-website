function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Please enter both username and password.";
      return false;
    }
  
    // Add your additional validation logic here if needed
  
    return true;
  }
  