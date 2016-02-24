import express = require('express');
import controller = require('../controller/developerController');

export function getAll(req: express.Request, res: express.Response) {
    controller.getDevelopers(req, res);
};

export function create(req: express.Request, res: express.Response) {
    controller.createDeveloper(req, res);
};