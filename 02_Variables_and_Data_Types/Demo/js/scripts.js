// force strict mode
"use strict";

// Get HTML form and field elements
var inputForm  = document.getElementById('inputForm');
var val1       = document.getElementById('val1');
var val2       = document.getElementById('val2');
var resultSpan = document.getElementById('resultSpan');
var alertDiv   = document.getElementById('alert');

// Get buttons
var resetButton  = document.getElementById('resetButton');
var submitButton = document.getElementById('submitButton');

// Put cursor in val1 field to start
val1.focus();

/*
 * The following is executed when the user clicks the Reset button
 */
resetButton.onclick = function() {
    // reset form fields
    inputForm.reset();

    // reset text
    resultSpan.innerHTML = "???";
    alertDiv.innerHTML = "";

    // set cursor focus
    val1.focus();
}

/*
 * The following is executed when the user clicks the Submit button
 */
submitButton.onclick = function(event) {
    // get values from input fields
    var val1Value = val1.value;
    var val2Value = val2.value;
    
    // check to see if user both entered values
    if (val1Value == "" || val2Value == "") {
        alertDiv.innerHTML = 'Please enter a value in both fields.';
        if (val1Value == "") {
            val1.focus();
        } else {
            val2.focus();
        }
        return;
    }
    
    // we have both values, so check if they are numbers
    var val1ValueIsNumber = parseInt(val1Value); // parseInt returns true if value is a number
    var val2ValueIsNumber = parseInt(val2Value); // parseInt returns false if value is not a number
    
    // check for first value
    if (!val1ValueIsNumber) {
        alertDiv.innerHTML = 'The value "' +  val1Value + '" is not a number.';
        val1.focus();
        return;
    }

    // check for second value
    if (!val2ValueIsNumber) {
        alertDiv.innerHTML = 'The value "' +  val2Value + '" is not a number.';
        val2.focus();
        return;
    }
    
    // We have both values, and they are numbers, so calculate total
    var val3 = parseInt(val1Value) + parseInt(val2Value);
    alertDiv.innerHTML = "";
    resultSpan.innerHTML = val3;
}
