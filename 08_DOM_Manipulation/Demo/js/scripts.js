// execute the following code after the page has loaded
window.onload = function() {
    "use strict";
    
    // create varaibles to hold HTML Elements
    var itemName = document.getElementById('itemName');
    var itemQuantity = document.getElementById('itemQuantity');
    var addButton = document.getElementById('addButton');
    var message = document.getElementById('message');
    var itemList = document.getElementById('itemList');
    
    // create empty Array to hold Items
    var listItems = [];

    // Create Constructor Function for an Item Object
    function Item(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
        
    function persistItem(itemNameValue, itemQuantityValue) {
        var newItem = new Item(itemNameValue, itemQuantityValue);
        listItems.push(newItem);
    }
    
    function displayItems(items) {
        // loop through Array and display items
        console.log('items: ' + items);
        
        // first clear existing items - for looping demo
        itemList.innerHTML = '';
        
        var len = listItems.length;
        for (var i = 0; i < len; i++) {
            var theItem = listItems[i];
            var itemName = theItem.name;
            var itemQuantity = theItem.quantity;
            
            var li = document.createElement('li');
            var txt = document.createTextNode(itemName + ', ' + itemQuantity);

            li.appendChild(txt);
            itemList.appendChild(li);
        }
    }
    
    function resetForm() {
        itemName.value = '';
        itemQuantity.value = '';
        itemName.focus();
    }
    
    // bind click event handler to button
    addButton.onclick = function(){
        // check to see if we have proper input
        
        var itemNameValue = itemName.value;
        var itemQuantityValue = itemQuantity.value;
        console.log('Item Name = ' + itemNameValue);
        console.log('Quantity = ' + itemQuantityValue);
        
        if (itemNameValue === '') {
            // no Item Name entered
            message.innerHTML = 'Please enter an Item Name.';
            itemName.focus();
        } else if (itemQuantityValue === '') {
            message.innerHTML = 'Please enter a Quantity.';
            itemQuantity.focus();
        } else if (itemQuantityValue === '' || isNaN(itemQuantityValue)) {
            message.innerHTML = 'Quantity must be numberic.';
            itemQuantity.focus();
        } else {
            // clear error message
            message.innerHTML = ''; 
            
            // create new Item and push to Array
            persistItem(itemNameValue, itemQuantityValue);

            // display Items on page
            displayItems(listItems);
            
            // reset "form"
            resetForm();
        }
    };
};
