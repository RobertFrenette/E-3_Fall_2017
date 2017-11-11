'use strict';

$(document).ready(function(){
    var mountains = [];
    
    function Mountain(name, elevation, img) {
        var name = name;
        var elevation = elevation;
        var img = img;
        
        this.getName = function() {
            return name;
        };
        this.getElevation = function() {
            return elevation;
        };
        this.getImg = function() {
            return img;
        };
    }
    
    Mountain.prototype.persist = function(mountains) {
        mountains.push(this);
    };
    
    function displayMountainData(mountain) {
        $('#elevationSpan').html(mountain.getElevation());
        $('#pic').attr('alt', mountain.getName());  
        $('#pic').attr('src', mountain.getImg());
        $('#mtnDataDisplay').attr('class', 'visible');
    }
        
    $('#mtnSelect').change(function(e) {
        var val = $(this).find(":selected").val();
        if (val >= 0) {
            displayMountainData(mountains[val]);
        } else {
            $('#mtnDataDisplay').attr('class', 'hidden');
        }
  });
    
    function populateSelectElement(mountains) {
        mountains.forEach((mountain, index) => {
            $('#mtnSelect').append(
                $('<option/>').attr(
                    { 'value': index }).text(mountain.getName()
                )
            );
        });
    }
    
    function displayPage() {
        $('#loading').attr('class', 'hidden');
        $('#disp').attr('class', 'visible');
    }
    
    function processData(data, mountains) {
        data.forEach((mountain, index) => {
            var newMountain = new Mountain(mountain.mountainName, mountain.mountainElevation, mountain.mountainPic);
            newMountain.persist(mountains);
        });
        
        populateSelectElement(mountains);
        displayPage();
    }
    
    function getMountainsData(mountains) {
        $.getJSON("data/mountains.json",function(data) {
          processData(data.mountains, mountains);
        });
    }
        
    getMountainsData(mountains);
});