"use strict";
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes/developerRoutes');
mongoose.connect('mongodb://127.0.0.1/meantest');
var app = express();
app.get('/', function (request, response) {
    response.send('This is awesome');
});
app.get('/developers', routes.getAll);
app.post('/developers/:name', routes.create);
app.listen(3000, function () {
    console.log('Server is running');
});
