// This file contains JavaScript for the Loops and Arrays Section Demo

/*
 * Note: This example contains code that is more advanced than what we have covered
 *       in the Course thus far. However, it is suitable for demonstrating the topics
 *       discussed in the Loops and Arrays Section.
 */

// execute the following code after the page has loaded
window.onload = function() {
    // force Strict Mode
    "use strict";
    
    console.log('Window loaded.');
    
    // create varaibles to hold HTML Elements
    var itemName = document.getElementById('itemName');
    var itemQuantity = document.getElementById('itemQuantity');
    var addButton = document.getElementById('addButton');
    var message = document.getElementById('message');
    var itemList = document.getElementById('itemList');
    
    // create empty Array to hold Items
    var listItems = [];
    console.log('listItems: ' + listItems);
    
    // bind click event handler to button
    addButton.onclick = function(){
        // check to see if we have proper input
        
        var itemNameValue = itemName.value;
        var itemQuantityValue = itemQuantity.value;
        console.log('Item Name = ' + itemNameValue);
        console.log('Quantity = ' + itemQuantityValue);
        
        if (itemNameValue == '') {
            // no Item Name entered
            message.innerHTML = 'Please enter an Item Name.';
            itemName.focus();
        } else if (itemQuantityValue == '') {
            message.innerHTML = 'Please enter a Quantity.';
            itemQuantity.focus();
        } else if (itemQuantityValue == '' || isNaN(itemQuantityValue)) {
            message.innerHTML = 'Quantity must be numberic.';
            itemQuantity.focus();
        } else {
            // Note: The following could go in its own function(s)
            
            message.innerHTML = ''; // clear error message
            
            // Note: Later in the Semester we will create actual "ul" HTML Elements -vs- using innerHTML
            var itemToAdd = '<li>' + itemQuantityValue + ' ' + itemNameValue + '(s)</li>';
            // push new item to Array
            listItems.push(itemToAdd);
            
            // loop through Array and display items
            console.log('listItems: ' + listItems);
            // first clear existing items - just for looping demo
            itemList.innerHTML = '';
            var len = listItems.length;
            for (var i = 0; i < len; i++) {
                itemList.innerHTML += listItems[i];
            }
            
            // reset "form"
            itemName.value = '';
            itemQuantity.value = '';
            itemName.focus();
        }
    };
};
