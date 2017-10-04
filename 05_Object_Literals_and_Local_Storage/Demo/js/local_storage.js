// force Strict Mode
"use strict";
console.log('Window loaded.');

// This function validates user intput
function validate(itemNameValue, itemQuantityValue, message) {
  var valid = false;

  if (itemNameValue == '') {
    message.innerHTML = 'Please enter an Item Name.';
  } else if (itemQuantityValue == '') {
    message.innerHTML = 'Please enter a Quantity.';
  } else if (itemQuantityValue == '' || isNaN(itemQuantityValue)) {
    message.innerHTML = 'Quantity must be numberic.';
  } else {
    valid = true;
  }

  return valid;
}

// This function displays an item on the page
function displayItem(itemNameValue, itemQuantityValue, itemList) {
  // Note: Later in the Semester we will create actual "ul" HTML Elements -vs- using innerHTML
  var itemToAdd = '<li>' + itemQuantityValue + ' ' + itemNameValue + '(s)</li>';
  itemList.innerHTML += itemToAdd;
}

// This function resets the form after an item has been added
function resetForm(itemName, itemQuantity, message) {
  itemName.value = '';
  itemQuantity.value = '';
  message.innerHTML = '';

  itemName.focus();
}

// This function creates a new item object and pushes it to listItems Array
function populateArray(listItems, itemNameValue, itemQuantityValue) {
  var item = {
    "name": itemNameValue,
    "quantity": itemQuantityValue
  };
  listItems.push(item);
  console.log(listItems);
}

// This function handles the Clear LocalStorage Button
function initClearStorageButton(clearStorage) {
  // bind click event listener to the form submit event
  clearStorage.addEventListener('click', function(e) {
    // clear LocalStorage
    localStorage.removeItem('persistedItems');
    console.log('LocalStorage has been cleared.');
  }, false);

  clearStorage.className = 'show';
}

// This function checks for existing itesm in LocalStorage
function checkForExistingItems(listItems, clearStorage) {
  if (typeof(Storage) !== "undefined") {
    // try and get item from storage
    var persistedItems = localStorage.getItem('persistedItems');

    if (persistedItems !== null) {
      persistedItems = JSON.parse(persistedItems);

      console.log(persistedItems);

      // loop through persistedItems
      for (var i in persistedItems) {
        var item = persistedItems[i];
        console.log(item);

        var itemNameValue = item.name;
        var itemQuantityValue = item.quantity;

        // create new item object and push to listItems Array
        populateArray(listItems, itemNameValue, itemQuantityValue);

        // display item on page
        displayItem(itemNameValue, itemQuantityValue, itemList);
      }

      initClearStorageButton(clearStorage);
    }
  }
}


// Execute when page has loaded

// create empty Array to hold Items.
var listItems = [];

// create varaibles to hold HTML Elements
var theForm = document.getElementById('theForm');
var itemName = document.getElementById('itemName');
var itemQuantity = document.getElementById('itemQuantity');
var message = document.getElementById('message');
var itemList = document.getElementById('itemList');
var clearStorage = document.getElementById('clearStorage');

// check for items in LocalStorage
checkForExistingItems(listItems, clearStorage);

// bind submit event listener to the form submit event
theForm.addEventListener('submit', function(e) {
  // prevent default behavior / prevent form from submitting
  e.preventDefault();

  // get input field values
  var itemNameValue = itemName.value.trim();
  var itemQuantityValue = itemQuantity.value.trim();

  var valid = validate(itemNameValue, itemQuantityValue, message);

  if (valid) {
    // add item to page
    displayItem(itemNameValue, itemQuantityValue, itemList);

    // create new item object and push to listItems Array
    populateArray(listItems, itemNameValue, itemQuantityValue);

    // persist listItems to LocalStorage
    localStorage.setItem('persistedItems', JSON.stringify(listItems));

    resetForm(itemName, itemQuantity, message);
  }
}, false);
