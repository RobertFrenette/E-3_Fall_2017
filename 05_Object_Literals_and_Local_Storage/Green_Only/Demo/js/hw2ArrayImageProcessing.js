/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Homework Unit #2
 */

/*
 * makeGreen - Reads data from an image bitmap array and writes new image data to a another array object
 *            The output data contains only green pixel data, with other color values removed (set to 0).
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *            
 *            NOTE: original and output are actually Uint8ClampedArray Object types.
 *                  ex. Object.prototype.toString.call(original) == Uint8ClampedArray
 **/

function makeGreen(original, output){
    console.log(original);
    var len = original.length;
    console.log("There are " + len + " elements in the original array.");

    for (var i = 0; i < len; i+=4) {
        if (i < 12) {
            console.log(" ");
            console.log("r: " + original[i]); // red
            console.log("g: " + original[i + 1]); // green
            console.log("b: " + original[i + 2]); // blue
            console.log("a: " + original[i + 3]); // alpha
        }

        // copy over value(s)
        output[i]     = 0;                // red
        output[i + 1] = original[i + 1];  // green
        output[i + 2] = 0;                // blue
        output[i + 3] = original[i + 3];  // alpha
    }
}
