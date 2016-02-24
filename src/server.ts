///<reference path="../typings/express/express.d.ts"/>
///<reference path="../typings/mongoose/mongoose.d.ts"/>

import express = require('express');
import mongoose = require('mongoose');
import routes = require('./routes/developerRoutes');

mongoose.connect('mongodb://127.0.0.1/meantest');

var app = express();

app.get('/', function(request, response) {
   response.send('This is awesome'); 
});

app.get('/developers', routes.getAll);
app.post('/developers/:name', routes.create)

app.listen(3000, function() {
   console.log('Server is running'); 
});