document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
 
  
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  

  if (email === 'hero@gmail.com' && password=== 'hero'){
    
    /* window.location.href = "bank.html"; */
    console.log('Your are login Successfully');
}
else {
  alert('Your Email & Password Not Valid!....Please Try Again!')
  }
 
})