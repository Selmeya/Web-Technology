function calculate() {
    // Get user input
    var base = parseFloat(document.getElementById("base").value);
    var exponent = parseFloat(document.getElementById("exponent").value);
    var decimalLimit = parseInt(document.getElementById("decimalLimit").value);

    // Calculate exponential value
    var result = Math.pow(base, exponent);

    // Limit the number of digits after the decimal value
    result = result.toFixed(decimalLimit);

    // Convert result to string
    var resultAsString = result.toString();

    // Return negative infinity using the number object in the HTML document
    var negativeInfinity = Number.NEGATIVE_INFINITY;

    // Display results
    document.getElementById("exponentialResult").innerText = "Exponential Value: " + resultAsString;
    document.getElementById("negativeInfinity").innerText = "Negative Infinity: " + negativeInfinity;
}