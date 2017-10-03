/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Homework Unit #2
 */

 /*
 * We'll grab the canvas elements and the graphics contexts here
 */
var canvases = [];
var contexts = [];
var newImageData = [];

/* there are separate canvases for each of the images you'll create:
 *    - a green version,
 *
 *    We're using an array - canvases[] to store these
 */
canvases['orig'] = document.getElementById('originalCanvas');
canvases['green'] = document.getElementById('greenCanvas');

/*
 * Now get the image context for each canvas, and create a new ImageData object with the correct width and height
 */
for (var key in canvases){
    // for each of the canvases
    if(canvases.hasOwnProperty(key)) { 
        //set the canvas size
        canvases[key].width = 150;
        canvases[key].height = 100;

        //make an image context for the canvas
        contexts[key] = canvases[key].getContext('2d');

        //create a new imageData object for the modified image
        newImageData[key] = contexts[key].createImageData(canvases[key].width, canvases[key].height);
    }
}

/*
 * Then we create a Javascript Image object and set its source URL
 * to the location of the image file we'll be processing.
 */
var image_obj = new Image();
image_obj.src = 'img/harvardextension.jpg';

/*
 * Here's the handler that loads when the image has finished downloading.
 *
 * This needs to be asynchronous (triggered by the image load event) since we don't know how
 *  long the image will take to load.
 */
image_obj.onload = function(){
    // draw the image in the first canvas window - this is the original you can see
    contexts['orig'].drawImage(this, 0, 0);

    // now grab the ImageData object from the graphics context. This contains a 'bitmap' of every pixel in the image
    var imageData = contexts['orig'].getImageData(0, 0, canvases['orig'].width, canvases['orig'].height);

    //grab the image bitmap data array so we can iterate over it
    var pixels = imageData.data;

    /* Here's where we call the functions that do the magic - your magic.
     * In the file hw2ArrayImageProcessing.js you will write the functions that
     * handle the image transformations.
     */
    makeGreen(pixels, newImageData['green'].data); // a call to your function makeGreen()

    // now draw the new image data on the canvases
    for (var key in contexts){
        if(contexts.hasOwnProperty(key) && key!='orig' && key!='composite_newimage') { // should not be necessary, but just in case
            contexts[key].clearRect(0, 0, canvases[key].width, canvases[key].height);
            contexts[key].putImageData(newImageData[key], 0, 0);
        }
    }
}; //end image_obj.onload function
