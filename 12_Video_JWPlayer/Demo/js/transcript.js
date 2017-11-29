//  This code modified from Larry's example
(function($){
    $.fn.playerConnect = function(player){
        console.log(this);
        var transcriptElements = this;

        player.onTime(function(evt){
            /*   
             *  Get the current time of the video playback and assign it to the variable 'time'.
             *  It is a property of the player's evt object. Refer to the classroom lecture, or use the
             *  documentation of onTime at http://support.jwplayer.com/customer/portal/articles/1413089-javascript-api-reference#seek
             *  to see the properties available within this event object. (Note that the 'duration' property
             *  of the JWPlayer onTime event is not related to the duration described by the transcript element
             *  in our HTML, and you will not need to use it.)
             */
            var time =  ''; //YOUR CODE TO ADD #2 - replace the empty quotes with your code

            /*  Next you need to iterate over the transcriptElements (using a 'for' loop or
             *   transcriptElements.each()), and for each one, see if the 'time' is greater
             *   than the element's data-start and less than the end
             *   ('end' being equal to data-start plus data-dur).  The jquery .attr() function
             *   will be useful here.
             *
             *  If the player time is in range use jQuery's addClass() to add the "hilite" class
             *   to the element. Otherwise, use removeClass() to remove it. ".hilite" is already defined
             *   in the stylesheet, so you don't have to manipulate the element styles themselves.
             *
             *  Remember that the attribute values are going to come to you as Strings
             *   and you'll need to change them into Floats or Integers (parseFloat(), parseInt()).
             *   Don't worry about non-numeric data or missing attributes - it's OK to assume that
             *   the data in the HTML is valid.
             *
             *   in pseudo-code it's something like this:
             *      for each transcript element
             *          if (time >= element_start_time && time <=element_end_time)
             *             add "hilight" class
             *          else
             *             remove "hilite" class
             *
             *   Note that the 'transcriptElements' array variable is already defined (line 43) and
             *   contains the array of <SPAN> elements. You just have to iterate and do the rest
             */

            // YOUR for() loop or transcriptElements.each() goes here...
            // YOUR CODE TO ADD #3
            transcriptElements.each(function() {
                //console.log('data-start: ' + $(this).attr('data-start'));
                //console.log('data-dur: '   + $(this).attr('data-dur'));
                //console.log('');

                // Implement pseudo-code from above here!
            });
        });

        return this.click(function(evt){
            // YOUR CODE TO ADD #4
            // Get the value of the data-start attribute (the jQuery .attr() function could help here)
            // and call player.seek([your value goes here])

            //console.log($(this).attr('data-start'));
       })
   };
})(jQuery);


$(document).ready(function(){
   //  YOUR CODE TO ADD #1 (already done for you)
   var player = jwplayer("playerDiv").setup({
                    file: "http://www.people.fas.harvard.edu/~lbouthillier/nasa-spinoffs.mp4",
                    height: 360,
                    width: 640,
                    controls:true,
                });

   player.onReady(function(){
        $('.words').playerConnect(player);
    });
});
