"use strict";
var controller = require('../controller/developerController');
function getAll(req, res) {
    controller.getDevelopers(req, res);
}
exports.getAll = getAll;
;
function create(req, res) {
    controller.createDeveloper(req, res);
}
exports.create = create;
;
