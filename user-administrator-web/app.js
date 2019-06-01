'use strict';

var express = require('express');
var app = express();

var config = require('./config');

// Para las rutas publicas
// https://stackoverflow.com/questions/10434001/static-files-with-express-js
app.use(express.static(config.path));

// peticion de pagina web
app.get('/', function(req, res) {
    res.sendFile(config.pointAccess);
});

// Levantando el servidor
app.listen(config.port);


// Revisar, interesante para buenas practicas en nodejs
// https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
