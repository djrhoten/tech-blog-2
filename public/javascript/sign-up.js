//create new user (sign up)
async function signupFormHandler(event) {
  event.preventDefault();
  //username and password created
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    //if we have both username and password and the user was successfully created take them to their 
    //dashboard to make their first post
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}
//sign up button listener
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);