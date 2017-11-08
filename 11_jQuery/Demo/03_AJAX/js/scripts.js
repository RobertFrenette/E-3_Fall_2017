'use strict';

$(document).ready(function(){
    var loading = document.getElementById('loading');
    var disp = document.getElementById('disp');
    
    var mtnSelect = document.getElementById('mtnSelect');
    var resultSpans = document.getElementsByClassName('res');
    var mtnDataDisplay = document.getElementById('mtnDataDisplay');
    var elevationSpan = document.getElementById('elevationSpan');
    var pic = document.getElementById('pic');
    
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
        elevationSpan.innerHTML = mountain.getElevation();
        pic.setAttribute('alt', mountain.getName());  
        pic.setAttribute('src', mountain.getImg());
        mtnDataDisplay.setAttribute('class', 'visible');
    }
    
    function resetResults() {
        var len = resultSpans.length;
        for (var i = 0; i < len; i++) {
            resultSpans[i].innerHTML = '';
        }
        mtnDataDisplay.setAttribute('class', 'hidden');
    }
    
    mtnSelect.addEventListener('change', function() {
        var val = this.options[this.selectedIndex].value;
        if (val >= 0) {
            var mtn = mountains[val];
            displayMountainData(mtn);
        } else {
         resetResults();
        }
    }, false);
    
    function populateSelectElement(mountains) {
        mountains.forEach((mountain, index) => {
            var name = mountain.getName();
            var option = document.createElement('option');
            
            option.value = index;
            option.appendChild(document.createTextNode(name));
            
            mtnSelect.appendChild(option);
        });
    }
    
    function displayPage() {
        loading.setAttribute('class', 'hidden');
        disp.setAttribute('class', 'visible');
    }
    
    function processData(data) {
        var len = data.length;
        
        for (var i = 0; i < len; i++) {
            var mountain = data[i];
            var name = mountain.mountainName;
            var elevation = mountain.mountainElevation;
            var img = mountain.mountainPic;
            var newMountain = new Mountain(name, elevation, img);
            newMountain.persist(mountains);
        }
        populateSelectElement(mountains);
        
        displayPage();
    }
    
    function getMountainsData() {
        $.getJSON("data/mountains.json",function(data) {
          processData(data.mountains);
        });
    }
        
    getMountainsData();
});