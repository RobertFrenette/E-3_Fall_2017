function printObject(container, obj) {
    if (obj.printMe) {
        container.innerHTML += obj.printMe();
    }
}

window.onload = function() {
    var container = document.getElementById('container');
    var planets = [];

    planets.push(mercury);
    planets.push(venus);
    planets.push(earth);

    var len = planets.length;
    for (var i = 0; i < len; i++) {
        printObject(container, planets[i]);
    }
}
