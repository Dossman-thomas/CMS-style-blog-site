const joinNowButton = document.querySelector('#joinNowButton');

// Add an event listener to the button
joinNowButton.addEventListener('click', function() {
  // Redirect the user to the '/signup' page
  document.location.replace('/signup');
});
