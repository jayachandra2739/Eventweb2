document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username').value.trim();
  const phoneInput = document.getElementById('phone').value.trim();
  const emailInput = document.getElementById('email').value.trim();

  const usernameError = document.getElementById('usernameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');

  // Clear previous error messages
  usernameError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';

  let isValid = true;

  // Username Validation: First letter must be capital
  const usernamePattern = /^[A-Z][a-zA-Z0-9_]*$/;
  if (!usernamePattern.test(usernameInput)) {
      usernameError.textContent = 'Username must start with a capital letter.';
      isValid = false;
  }

  // Phone Number Validation: Only numbers, exactly 10 digits
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput)) {
      phoneError.textContent = 'Phone number must be exactly 10 digits.';
      isValid = false;
  }

  // Email Validation: Must end with "@gmail.com"
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(emailInput)) {
      emailError.textContent = 'Email must be a valid Gmail address (e.g., example@gmail.com).';
      isValid = false;
  }

  // If all validations pass, show success message
  if (isValid) {
      alert('Registration successful!');
      // You can process form data or submit it to a server here
  }
});


  
  
  document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to close this tab?')) {
        window.close();
    }
});

  // Optionally, clear the form fields after submission
  registrationForm.reset();


  
  
