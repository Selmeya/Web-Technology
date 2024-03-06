// (1) Returning the character at a specified location
  var str = "Hello, World!";
  var charAtIndex = str.charAt(7);
  document.write("<p>Character at index 7: " + charAtIndex + "</p>");

  // (2) Returns the Unicode of the character at the specified index
  var unicodeAtIndex = str.charCodeAt(7);
  document.write("<p>Unicode at index 7: " + unicodeAtIndex + "</p>");

  // (3) Joins two or more strings and returns a new joined string
  var str1 = "Hello, ";
  var str2 = "World!";
  var joinedString = str1.concat(str2);
  document.write("<p>Joined string: " + joinedString + "</p>");

  // (4) Converts Unicode value to string
  var unicodeValue = 65;
  var stringFromUnicode = String.fromCharCode(unicodeValue);
  document.write("<p>String from Unicode value 65: " + stringFromUnicode + "</p>");

  // (5) Converts a string to uppercase letters
  var lowercaseStr = "hello, world!";
  var uppercaseStr = lowercaseStr.toUpperCase();
  document.write("<p>Uppercase string: " + uppercaseStr + "</p>");