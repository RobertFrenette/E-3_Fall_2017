// Planet Object - Object Literal
var planet = {
    "name":               "Earth",
    "aphelion":           "1.016 73",
    "perihelion":         "0.983 2687",
    "orbital_period_d":   "365.256363004",
    "orbital_period_y":   "1.000 017 420 96",
    "surface_area":       "510,072,000",
    "surface_area_exp":   "2",
    "volume":             "1.083 21",
    "volume_exp":         "12",
    "mass":               "5.97 23",
    "mass_exp":           "24",
    "surface_temp_mean":  "288",
    "imgSymbolURL":       "http://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol.svg",
    "imgURL":             "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg",
    "info":               "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life.",

    // Functions
    "getName": function() {
        return this.name;
    },

    "getAphelionPerihelion": function() {
        return "aphelion: " + this.aphelion + " AU / perihelion: " + this.perihelion + " AU";
    },
    
    "getOrbitalPeriod": function() {
        return this.orbital_period_d + " d / " + this.orbital_period_y + " y ";
    },
    
    "getSurfaceArea": function() {
        return this.surface_area + " x 10 <sup>" + this.surface_area_exp + "</sup> km";
    },
    
    "getVolume": function() {
        return this.volume + " x 10 <sup>" + this.volume_exp + "</sup> km";
    },
    
    "getMass": function() {
        return this.mass + "<sup>" + this.mass_exp + "</sup> kg";
    },
    
    "getTemp": function() {
       return this.surface_temp_mean + "<sup>k</sup> mean";
    },
    
    "getSymbolImgURL": function() {
        return this.imgSymbolURL;
    },
    
    "getImgURL": function() {
        return this.imgURL;
    },
    
    "getInfo": function() {
        return this.info;
    },
}

function displayPlanet(thePlanet) {
    if (thePlanet.getName) {
        document.getElementById('planetName').innerHTML = thePlanet.getName();
    }
    if (thePlanet.getInfo) {
        document.getElementById('planetInfo').innerHTML = thePlanet.getInfo();
    }
}

window.onload = function() {
    displayPlanet(planet);
}
