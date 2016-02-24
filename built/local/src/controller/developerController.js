"use strict";
var developerModel = require("../models/developerModel");
var repository = developerModel.repository;
function createDeveloper(req, res) {
    var developerName = req.params.name;
    repository.create({ name: developerName }, function (error) {
        if (error) {
            res.send(400);
        }
        else {
            res.send("Created dev");
        }
    });
}
exports.createDeveloper = createDeveloper;
;
function getDevelopers(req, res) {
    repository.find({}, function (error, developers) {
        if (error) {
            res.send(400);
        }
        else {
            res.send(developers);
        }
    });
}
exports.getDevelopers = getDevelopers;
;
