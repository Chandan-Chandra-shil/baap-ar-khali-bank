document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
 
  
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  

  if (email === 'hero@gamil.com' && password=== 'heroo'){
  alert('Your are login successfully!')
}
else {
  alert('Your Email & Password Not Valid!....Please Try Again!')
}
})