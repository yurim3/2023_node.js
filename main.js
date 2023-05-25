const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("방가");
});

app.listen(3333);