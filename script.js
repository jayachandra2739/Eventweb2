// Select the form and submitted data container
const registrationForm = document.getElementById('registrationForm');
const submittedData = document.getElementById('submittedData');

// Add an event listener to handle form submission
registrationForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get user input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Display the collected data
  submittedData.innerHTML = `
    <h3>Thank You for Registering!</h3>
    <p><strong>Name:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
  `;

  // Optionally, clear the form fields after submission
  registrationForm.reset();
});
