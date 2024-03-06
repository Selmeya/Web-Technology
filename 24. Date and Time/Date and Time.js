function displayDateTime() {
   // Create a new Date object
   var currentDate = new Date();

   // Get the current date and time components
   var date = currentDate.toDateString();
   var time = currentDate.toLocaleTimeString();

   // Display the date and time on the HTML document
   document.getElementById('date').innerHTML = "Current Date: " + date;
   document.getElementById('time').innerHTML = "Current Time: " + time;
  }

  // Call the displayDateTime function when the page loads
  window.onload = displayDateTime;