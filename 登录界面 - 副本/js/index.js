
// Get the form elements
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

// Add an event listener to the submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the input values
  if (username === '' || password === '') {
    alert('Please fill in both username and password');
    return;
  }

  // Check if the username and password match the expected values
  if (username === '0827' && password === 'spadek') {
    // alert('Login successful!');
    window.location.href = 'welcome.html';
  } else {
    alert('Invalid username or password');
  }
});