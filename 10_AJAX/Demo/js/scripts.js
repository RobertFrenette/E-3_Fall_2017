"use strict";

var map; // GoogleMaps Object
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {});
}

function updateMap(lat, lng, txt) {
    var latLng = {lat: lat, lng: lng};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: latLng
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: txt
    }); 
}

window.onload = function(){
    var theForm = document.getElementById('theForm');
    var zip = document.getElementById('zip');
    var lat = document.getElementById('lat');
    var lng = document.getElementById('lng');
    var output = document.getElementById('output');

    var mapBtn = document.getElementById('mapBtn');
    var mapDiv = document.getElementById('map');
    
    theForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // make an send an XmlHttpRequest
        var x = new XMLHttpRequest();
        x.open("GET","http://maps.googleapis.com/maps/api/geocode/json?address="+ zip.value +"&sensor=false",true);
        x.send();

        // set up a listener for the response
        x.onreadystatechange=function(){
            if (this.readyState==4 && this.status==200){
                var o = this.response;
                output.innerHTML = o;
                console.log(o);
                var l = JSON.parse(this.response).results[0].geometry.location;
                if (l.lat) {
                    lat.innerHTML = l.lat;
                }
                if (l.lng) {
                    lng.innerHTML = l.lng;
                }

                mapBtn.setAttribute('class', 'visible');
            }
        }
    });
    mapBtn.addEventListener('click', function() {
        mapDiv.setAttribute('class', 'visible');
        updateMap(parseFloat(lat.innerHTML), parseFloat(lng.innerHTML), zip.value);
    });
};
