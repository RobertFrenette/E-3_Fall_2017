const fs = require('fs');
const express = require('express');

const port = 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/data', (req, res) => {
    res.end(fs.readFileSync(`${__dirname}/public/data/automobiles.json`)); 
});

app.listen(port, () => {
    console.log(`Express Server listening on http://localhost:${port}`);
});
