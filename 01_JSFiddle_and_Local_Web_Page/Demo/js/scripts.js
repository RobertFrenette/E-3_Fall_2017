"use strict";

// This is a single line comment.

/*
  This is a multi line comment.
  Orig Fiddle: https://jsfiddle.net/RMFrenette/3qksqf4g/
*/

// clear the JavaScript Console
console.clear();

// write greeting to the console
console.log('Hello, World!');

// declare varaible to hold greeting.
var greeting = 'Hello, World!';

// write greeting to console using data in var
console.log(greeting);

// alert greeting
alert(greeting);

// prompt user for first name
var firstName = prompt('Please enter your First Name.');
// greet user
alert('Hello, ' + firstName + '!');

// confirm dialog
var userResponse = confirm("Press a button!");
console.log('You clicked: ' + userResponse);

// reuse existing var
userResponse = confirm("Press the other button!");
console.log('You clicked: ' + userResponse);
