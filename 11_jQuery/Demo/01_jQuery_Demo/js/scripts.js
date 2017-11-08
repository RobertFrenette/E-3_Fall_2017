"use strict";
console.clear();

function validateInput(uName, pwd, pwdConfirm, uEmail, msg) {
  var valid = true;
  if (uName.val() === '') {
    msg.html('Please enter a User Name.');
    uName.focus();
    valid = false;
  } else if (pwd.val() === '') {
    msg.html('Please enter a Password.');
    pwd.focus();
    valid = false;
  } else if (pwdConfirm.val() === '') {
    msg.html('Please enter a Password Confrmation.');
    pwdConfirm.focus();
    valid = false;
  } else if (uEmail.val() === '') {
    msg.html('Please enter an Email Address.');
    uEmail.focus();
    valid = false;
  } else if (pwd.val() != pwdConfirm.val()) {
    msg.html('Passwords do not match.');
    pwdConfirm.val('');
    pwdConfirm.focus();
    valid = false;
  }
  return valid;
}

function addUser(uName, uEmail, list, count) {
  list.append(
    $('<li>').append(
      $('<a>').attr('href', 'mailto:' + uEmail).append(
        $('<span>').append(uName)
      )));
      
   var currentUserCount = Number(count.html());
   count.html(++currentUserCount);
}

$(document).ready(function() {
  console.log('Document is ready...');

  // Get HTML Elements
  var theForm   = $('#theForm');
  var reset     = $('#reset');
  var userName  = $('#userName');
  var password  = $('#password');
  var confirm   = $('#confirm');
  var email     = $('#email');
  var msg       = $('#msg');
  var users     = $('#users');
  var userCount = $('#userCount');

  // Setup Page
  userName.focus();
  msg.html('');
  userCount.html('');

  // Bind Event Handlers
  theForm.submit(function(event) {
    event.preventDefault();
    console.log('The ' + event.type + ' handler for ' + this.id + ' was called.');

    // check for valid input
    if (validateInput(userName, password, confirm, email, msg)) {
      addUser(userName.val(), email.val(), users, userCount);
      reset.click();
    }
  });

  reset.click(function() {
    console.log('The ' + event.type + ' handler for ' + this.id + ' was called.');

    // clear input fields
    userName.html('');
    password.html('');
    confirm.html('');
    email.html('');

    msg.html('');

    // position cursor
    userName.focus();
  });
});
