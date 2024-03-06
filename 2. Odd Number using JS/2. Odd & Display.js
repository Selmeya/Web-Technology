// Function to find the nearest odd number
  function nearestOddNumber(number) {
   // If the number is odd, return it
   if (number % 2 !== 0) {
    return number;
   }

   // If the number is even, find the nearest odd number
   var lowerOdd = number - 1;
   var higherOdd = number + 1;

   while (true) {
    if (lowerOdd % 2 !== 0) {
     return lowerOdd;
    }
    if (higherOdd % 2 !== 0) {
     return higherOdd;
    }
    lowerOdd--;
    higherOdd++;
   }
  }

  // Function to get numbers from the user and display the nearest odd numbers
  function getAndDisplayNearestOddNumbers() {
   var numbers = prompt("Enter a series of numbers separated by commas:");
   var numbersArray = numbers.split(",").map(Number);
   var nearestOddNumbers = [];

   for (var i = 0; i < numbersArray.length; i++) {
    nearestOddNumbers.push(nearestOddNumber(numbersArray[i]));
   }

   alert("The nearest odd numbers are: " + nearestOddNumbers.join(", "));
  }