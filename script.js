document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username').value.trim();
  const phoneInput = document.getElementById('phone').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  // Username Validation: First letter must be capital
  const usernamePattern = /^[A-Z][a-zA-Z0-9_]*$/;
  if (!usernamePattern.test(usernameInput)) {
      errorMessage.textContent = 'Username must start with a capital letter.';
      return;
  }

  // Phone Number Validation: Only numbers, exactly 10 digits
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput)) {
      errorMessage.textContent = 'Phone number must be exactly 10 digits.';
      return;
  }

  // Email Validation: Must end with "@gmail.com"
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(emailInput)) {
      errorMessage.textContent = 'Email must be a valid Gmail address (e.g., example@gmail.com).';
      return;
  }

  // If all validations pass
  errorMessage.textContent = ''; // Clear error messages
  alert('Registration successful!');
  // You can process form data or submit it to a server here
});

  
  
  document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to close this tab?')) {
        window.close();
    }
});

  // Optionally, clear the form fields after submission
  registrationForm.reset();

   
