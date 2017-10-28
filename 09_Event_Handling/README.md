## Event Handling

This Section covers Traditional and DOM Level 3 Event Handling, including Forms.

### JSFiddles:

 * [E-3_Fall_2017: Fiddle 15](***************************) Event Handling - Traditional.
 * [E-3_Fall_2017: Fiddle 16](***************************) Event Handling - DOM Level 3.
 * [E-3_Fall_2017: Fiddle 17](***************************) Event Handling - Forms.
 
 
//////
E-3_Fall_2017: Fiddle 15
Event Handling - Traditional

<h1>
  CSCI E-3
  <br />Introduction to Web Programming Using JavaScript
</h1>
<h2>
  Harvard Extension School
  <br />Fall, 2017
</h2>
<h3>TF: Rob Frenette</h3>
<div>
  Event Handling - Traditional.
</div>
<hr />
<input type="button" id="btn" value="Click Me" />
<br /><span id="msg">&nbsp;</span>
<br /><br />The button has been single-clicked <span id="singleClick">0</span> time(s).
<br /><br /><input type="button" id="reset" value="Reset" />

"use strict";
console.clear();

var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
var singleClick = document.getElementById("singleClick");
var reset = document.getElementById("reset");

var singleClickCount = 0;

btn.onmouseover = function(evt){
    msg.innerHTML = 'The Mouse cursor is over the button.';
}

btn.onmouseout= function(evt){
    msg.innerHTML = '';
}

btn.onclick= function(evt){
   singleClick.innerHTML = ++singleClickCount;
}

reset.onclick = function(e) {
	singleClickCount = 0;
	singleClick.innerHTML = singleClickCount;
}
//////



//////
E-3_Fall_2017: Fiddle 16
Event Handling - DOM Level 3

<h1>
  CSCI E-3
  <br />Introduction to Web Programming Using JavaScript
</h1>
<h2>
  Harvard Extension School
  <br />Fall, 2017
</h2>
<h3>TF: Rob Frenette</h3>
<div>
  Event Handling - DOM Level 3.
</div>
<hr />
<div id="container"></div>
<input type="button" id="btn" value="Click Me" />
<br /><span id="msg">&nbsp;</span>
<br /><br />The button has been single-clicked <span id="singleClick">0</span> time(s).
<br /><br /><input type="button" id="reset" value="Reset" />

"use strict";
console.clear();

var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
var singleClick = document.getElementById("singleClick");
var reset = document.getElementById("reset");

var singleClickCount = 0;

// DOM Level 3 Event Handling:
// element.addEventListener(event, function, useCapture)
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

btn.addEventListener("mouseover", function(evt){
		 msg.innerHTML = 'The Mouse cursor is over the button.';
}, false); // falseis default. The event handler is executed in the bubbling phase.

btn.addEventListener("mouseout", function(evt){
		 msg.innerHTML = '';
});

btn.addEventListener("click", function(evt){
	   singleClick.innerHTML = ++singleClickCount;
});

reset.addEventListener("click", function(evt){
	singleClickCount = 0;
	singleClick.innerHTML = singleClickCount;
});
//////



//////
E-3_Fall_2017: Fiddle 17
Event Handling - Forms

<h1>
  CSCI E-3
  <br />Introduction to Web Programming Using JavaScript
</h1>
<h2>
  Harvard Extension School
  <br />Fall, 2017
</h2>
<h3>TF: Rob Frenette</h3>
<div>
  Event Handling - Forms.
</div>
hr />
<div id="container">
  <h1>Registration Form</h1>
  <form id="theForm">
    <label for="userName">User Name</label>  
    <input type="text" id="userName" required autofocus />
    <br />
    <label for="password">Password</label>  
    <input type="password" id="password" required />
    <br />
    <label for="confirm">Confirm</label>  
    <input type="password" id="confirm" required />
    <br /><br />
    <label for="email">Email</label>  
    <input type="email" placeholder="you@domain.com" id="email" />
    <br />
    <label for="phone">Phone</label>  
    <input type="text" name="phone" placeholder="555-123-4567" pattern="\d{3}-\d{3}-\d{4}"/>
    <br /><br />
    <label for="age">Age</label>
    <input type="number" id="age" min="18" max="50" />
    <br /><br />
    <input type="reset" value="Clear" id="reset" />
    <input type="submit" value="Register" />
    <br /><br /><span id="msg"></span>
  </form>
</div>

#msg {
  color: red;
}

// Styles below from: http://www.the-art-of-web.com/html/html5-form-validation/
input:required:invalid, input:focus:invalid {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeVJREFUeNqkU01oE1EQ/mazSTdRmqSxLVSJVKU9RYoHD8WfHr16kh5EFA8eSy6hXrwUPBSKZ6E9V1CU4tGf0DZWDEQrGkhprRDbCvlpavan3ezu+LLSUnADLZnHwHvzmJlvvpkhZkY7IqFNaTuAfPhhP/8Uo87SGSaDsP27hgYM/lUpy6lHdqsAtM+BPfvqKp3ufYKwcgmWCug6oKmrrG3PoaqngWjdd/922hOBs5C/jJA6x7AiUt8VYVUAVQXXShfIqCYRMZO8/N1N+B8H1sOUwivpSUSVCJ2MAjtVwBAIdv+AQkHQqbOgc+fBvorjyQENDcch16/BtkQdAlC4E6jrYHGgGU18Io3gmhzJuwub6/fQJYNi/YBpCifhbDaAPXFvCBVxXbvfbNGFeN8DkjogWAd8DljV3KRutcEAeHMN/HXZ4p9bhncJHCyhNx52R0Kv/XNuQvYBnM+CP7xddXL5KaJw0TMAF8qjnMvegeK/SLHubhpKDKIrJDlvXoMX3y9xcSMZyBQ+tpyk5hzsa2Ns7LGdfWdbL6fZvHn92d7dgROH/730YBLtiZmEdGPkFnhX4kxmjVe2xgPfCtrRd6GHRtEh9zsL8xVe+pwSzj+OtwvletZZ/wLeKD71L+ZeHHWZ/gowABkp7AwwnEjFAAAAAElFTkSuQmCC);
  background-position: right top;
  background-repeat: no-repeat;
  -moz-box-shadow: none;
}
input:required:valid {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrEk79PFEEUx9/uDDd7v/AAQQnEQokmJCRGwc7/QeM/YGVxsZJQYI/EhCChICYmUJigNBSGzobQaI5SaYRw6imne0d2D/bYmZ3dGd+YQKEHYiyc5GUyb3Y+77vfeWNpreFfhvXfAWAAJtbKi7dff1rWK9vPHx3mThP2Iaipk5EzTg8Qmru38H7izmkFHAF4WH1R52654PR0Oamzj2dKxYt/Bbg1OPZuY3d9aU82VGem/5LtnJscLxWzfzRxaWNqWJP0XUadIbSzu5DuvUJpzq7sfYBKsP1GJeLB+PWpt8cCXm4+2+zLXx4guKiLXWA2Nc5ChOuacMEPv20FkT+dIawyenVi5VcAbcigWzXLeNiDRCdwId0LFm5IUMBIBgrp8wOEsFlfeCGm23/zoBZWn9a4C314A1nCoM1OAVccuGyCkPs/P+pIdVIOkG9pIh6YlyqCrwhRKD3GygK9PUBImIQQxRi4b2O+JcCLg8+e8NZiLVEygwCrWpYF0jQJziYU/ho2TUuCPTn8hHcQNuZy1/94sAMOzQHDeqaij7Cd8Dt8CatGhX3iWxgtFW/m29pnUjR7TSQcRCIAVW1FSr6KAVYdi+5Pj8yunviYHq7f72po3Y9dbi7CxzDO1+duzCXH9cEPAQYAhJELY/AqBtwAAAAASUVORK5CYII=);
  background-position: right top;
  background-repeat: no-repeat;
}

"use strict";
console.clear();

var theForm = document.getElementById('theForm');
var userName = document.getElementById('userName');
var password = document.getElementById('password');
var confirm = document.getElementById('confirm');
var age = document.getElementById('age');
var msg = document.getElementById('msg');
var reset = document.getElementById('reset');

function valid() {
  var isValid = true;
  
  if (password.value != confirm.value) {
  	msg.innerHTML = 'Passwords must match.'
    confirm.value = '';
    password.focus();
  	isValid = false;
  }
  
  return isValid;
}

userName.addEventListener('blur', function(e) {
	if (this.value.trim() == '') {
  	msg.innerHTML = 'User Name is required.';
    this.focus();
  }
});

age.addEventListener("input", function () {
    if (!this.validity.valid) {
        if (this.validity.rangeOverflow) {
            msg.innerHTML = 'Age is too high.';
        } else if (this.validity.rangeUnderflow) {
            msg.innerHTML = 'Age is too low.';
        }
    } else{
        msg.innerHTML = '';
    }
});

theForm.addEventListener('submit', function(e) {
  // prevent form from submitting
	e.preventDefault();
  
  if (valid()) {
    alert('Registration confirmed!');
  	msg.innerHTML = '';
		reset.click();
  }
});

reset.addEventListener('click', function(e) {
  userName.focus();
});
//////