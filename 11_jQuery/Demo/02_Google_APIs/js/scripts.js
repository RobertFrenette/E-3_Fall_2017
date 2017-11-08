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

$(document).ready(function(){
    var theForm = $('#theForm');
    var zip     = $('#zip');
    var lat     = $('#lat');
    var lng     = $('#lng');
    var output  = $('#output');

    var mapBtn = $('#mapBtn');
    var mapDiv = $('#map');
    
    theForm.submit(getlatLng);
    mapBtn.click(displayMap);

    function getlatLng(e) {
        e.preventDefault();

        $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+ zip.val() +"&sensor=false", function(data){
            lat.html(data.results[0].geometry.location.lat);
            lng.html(data.results[0].geometry.location.lng);
            mapBtn.show();
        });
    }

    function displayMap() {
        mapDiv.show();
        updateMap(parseFloat(lat.html()), parseFloat(lng.html()), zip.val());
    }
});
