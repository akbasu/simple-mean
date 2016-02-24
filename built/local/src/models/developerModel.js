"use strict";
var mongoose = require('mongoose');
exports.developerSchema = new mongoose.Schema({
    name: String
});
exports.repository = mongoose.model('Developer', exports.developerSchema);
