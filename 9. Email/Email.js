  function validateEmail() {
   var email = document.getElementById("email").value;
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailPattern.test(email)) {
    alert("Email is valid!");
   } else {
    alert("Please enter a valid email address.");
   }
  }