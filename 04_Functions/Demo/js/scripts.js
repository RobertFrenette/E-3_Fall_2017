/*
 * This fuction displays the dots on the page.
 *
 * @param   pointsArray - Array containing the [top,left] dot positions
 * @param   colorsArray - Array of Colors
 * @param   maxDots     - max number of Array elements
 */
function displayDots(pointsArray, colorsArray, maxDots) {
    var container = document.getElementById('container');
    container.innerHTML = "";

    for (var i = 0; i < maxDots; i++) {
        // get current element from the Array
        var element = pointsArray[i]; // this is a two-dimensional Array [top,left]
        var top     = element[0];     // first element in two-dim Array
        var left    = element[1];     // second element
        
        // get color
        var color = colorsArray[i];

        // create new div element
        var dot = document.createElement('div');

        // assign attribute prop to new div element
        dot.id = "dot_" + i;
        dot.style.top  = top + "px";
        dot.style.left = left + "px";
        dot.className = "dot";
        dot.style.backgroundColor = color;

        // create new textNode
        var txtNode = document.createTextNode(i + 1);

        // add textNode to div
        dot.appendChild(txtNode);

        // add new div element to the container element
        container.appendChild(dot);
    }
}

/*
 * This fuction populates the pointsArray top/left positions
 * for the number of dots passed in the maxDots param.
 *
 * @param   maxDots     - max number of Array elements
 * @return  dotsArray   - Array containing maxDots number of [top, left] positions in two-dimensional Arrays
 */
function getDots(maxDots) {
    var dotsArray = [];
    var TOP_MAX   = 250;
    var LEFT_MAX  = 1000;

    for (var i = 0; i < maxDots; i++) {
        // http://www.w3schools.com/jsref/jsref_random.asp
        // http://www.w3schools.com/jsref/jsref_floor.asp
        var top  = Math.floor((Math.random() * TOP_MAX));
        var left = Math.floor((Math.random() * LEFT_MAX));

        // Two-dimensional Array [0,1]
        dotsArray.push([top, left]);
    }

    return dotsArray;
}


/*
 * This fuction generates random colors
 *
 * @param   maxDots     - max number of Array elements
 * @return  colorsArray - Array containing colors
 */
function getColors(maxDots) {
    var colorsArray = [];
    var MAX = 255;

    for (var i = 0; i < maxDots; i++) {
        var r = Math.floor((Math.random() * MAX));
        var g = Math.floor((Math.random() * MAX));
        var b = Math.floor((Math.random() * MAX));

        var color = 'rgb(' + r + ',' + g + ',' + b + ')';

        colorsArray.push(color);
    }

    return colorsArray;
}

/*
 * This function generates a random number up between 1 and the max param limit
 * and returns it to the calling function.
 * 
 * @param   max - max value of random numbers
 * @return  the random generated number
 */
function getMaxDots(max) {
    return Math.floor(Math.random() * max + 1);
}


/*
 * This is the main processing fuction.
 *
 * @param   maxDots - Random number indicating how many dots to display on page
 */
function process(maxDots) {
    var pointsArray = [];
    var colorsArray = [];
    console.log('maxDots: ' + maxDots);

    // call function to populate the pointsArray with position of dots to be displayed
    pointsArray = getDots(maxDots);
    console.log('pointsArray:');
    console.log(pointsArray);

    // call function to populate the colorsArray with random r/g/b values
    colorsArray = getColors(maxDots);
    console.log('colorsArray:');
    console.log(colorsArray);
    
    // call function to display dots in the pointsArray on the page
    displayDots(pointsArray, colorsArray, maxDots);
}


/*
 * Call process() function to start processing,
 * passing a random number to indicate how many dots to display on the page.
 */
window.onload = function() {
    var MAX = 100;
    var TIMER_INTERVAL = 3000;
    process(getMaxDots(MAX)); // calls getMaxDots() function, and passes the value retuned to the process() function

    // http://www.w3schools.com/jsref/met_win_setinterval.asp
    var myVar = setInterval(myTimer, TIMER_INTERVAL);
    function myTimer() {
        console.clear();
        process(getMaxDots(MAX)); // calls getMaxDots() function, and passes the value retuned to the process() function
    }
}
