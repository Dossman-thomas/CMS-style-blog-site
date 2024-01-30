// Login Form Handler Asynchronous Function
const loginFormHandler = async (event) => {

  event.preventDefault(); // prevents the default behavior of form submission, allowing the function to handle the submission manually

  // retrieve the values entered in the email and password fields of the login form and trim any leading or trailing whitespace
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) { // ensures that both email and password have non-empty values

    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText); // If the response is not successful, an alert is shown with the status text
    }
  }
};



// Attaches event listener to the submit events of the login form, triggering the form handler function when the forms are submitted
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


