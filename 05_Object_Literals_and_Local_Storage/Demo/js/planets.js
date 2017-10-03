var mercury = {
    "name":                 "Mercury",
    "aphelion":             "0.466 697",
    "perihelion":           "0.307 499",
    "orbital_period_d":     "87.969 1",
    "orbital_period_y":     "0.240 846",
    "surface_area":         "7.48",
    "surface_area_exp":     "7",
    "volume":               "6.083",
    "volume_exp":           "10",
    "mass":                 "3.3011",
    "mass_exp":             "23",
    "surface_temp_mean":    "340",
    "imgSymbolURL":         "http://upload.wikimedia.org/wikipedia/commons/2/2e/Mercury_symbol.svg",
    "imgURL":               "http:////upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/260px-Mercury_in_color_-_Prockter07-edit1.jpg",
    "info":                 "Mercury is the smallest planet in the Solar System and the one closest to the Sun, with an orbital period of about 88 Earth days, which is much faster than any other planet in the Solar System. Seen from Earth, it appears to move around its orbit in about 116 days. It has no known natural satellites. It is named after the Roman deity Mercury, the messenger to the gods.",

    // Functions
    "getName": function() {
        return this.name;
    },
    "getAphelionPerihelion": function() {
        return "Aphelion: " + this.aphelion + " AU / Perihelion: " + this.perihelion + " AU";
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
       return this.surface_temp_mean + "<sup> k</sup> mean";
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
    "printMe": function() {
        var str = "";
        str += "<h1><img src='" + this.imgSymbolURL + "' class='planetSymbol' />" + this.name + "</h1>";
        str += "<img src='" + this.imgURL + "' class='planetImg' />";
        str += "<br /><br />" + this.getAphelionPerihelion();
        str += "<br />Orbital Period: " + this.getOrbitalPeriod();
        str += "<br />Surface Area: " + this.getSurfaceArea();
        str += "<br />Volume: " + this.getVolume();
        str += "<br />Mass: " + this.getMass();
        str += "<br />Temp: " + this.getTemp();
        str += "<div class='desc'><br />" + this.getInfo() + "<br /><br /></div>";
        return str;
    }
}

var venus = {
    "name":                 "Venus",
    "aphelion":             "0.728213",
    "perihelion":           "0.718440",
    "orbital_period_d":     "224.701",
    "orbital_period_y":     "0.615198",
    "surface_area":         "4.6023",
    "surface_area_exp":     "8",
    "volume":               "9.2843",
    "volume_exp":           "11",
    "mass":                 "4.8675",
    "mass_exp":             "24",
    "surface_temp_mean":    "737",
    "imgSymbolURL":         "http://upload.wikimedia.org/wikipedia/commons/6/66/Venus_symbol.svg",
    "imgURL":               "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/260px-Venus-real_color.jpg",
    "info":                 "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (245 days) of any planet in the Solar System, and, unusually, rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of -4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun: its elongation reaches a maximum of 47.8 degrees.",

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
       return this.surface_temp_mean + "<sup> k</sup> mean";
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
    "printMe": function() {
        var str = "";
        str += "<h1><img src='" + this.imgSymbolURL + "' class='planetSymbol' />" + this.name + "</h1>";
        str += "<img src='" + this.imgURL + "' class='planetImg' />";
        str += "<br /><br />" + this.getAphelionPerihelion();
        str += "<br />Orbital Period: " + this.getOrbitalPeriod();
        str += "<br />Surface Area: " + this.getSurfaceArea();
        str += "<br />Volume: " + this.getVolume();
        str += "<br />Mass: " + this.getMass();
        str += "<br />Temp: " + this.getTemp();
        str += "<div class='desc'><br />" + this.getInfo() + "<br /><br /></div>";
        return str;
    }
}

var earth = {
    "name":                 "Earth",
    "aphelion":             "1.016 73",
    "perihelion":           "0.983 2687",
    "orbital_period_d":     "365.256363004",
    "orbital_period_y":     "1.000 017 420 96",
    "surface_area":         "510,072,000",
    "surface_area_exp":     "2",
    "volume":               "1.083 21",
    "volume_exp":           "12",
    "mass":                 "5.97 23",
    "mass_exp":             "24",
    "surface_temp_mean":    "288",
    "imgSymbolURL":         "http://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol.svg",
    "imgURL":               "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg",
    "info":                 "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life.",

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
       return this.surface_temp_mean + "<sup> k</sup> mean";
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
    "printMe": function() {
        var str = "";
        str += "<h1><img src='" + this.imgSymbolURL + "' class='planetSymbol' />" + this.name + "</h1>";
        str += "<img src='" + this.imgURL + "' class='planetImg' />";
        str += "<br /><br />" + this.getAphelionPerihelion();
        str += "<br />Orbital Period: " + this.getOrbitalPeriod();
        str += "<br />Surface Area: " + this.getSurfaceArea();
        str += "<br />Volume: " + this.getVolume();
        str += "<br />Mass: " + this.getMass();
        str += "<br />Temp: " + this.getTemp();
        str += "<div class='desc'><br />" + this.getInfo() + "<br /><br /></div>";
        return str;
    }
}
