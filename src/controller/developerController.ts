/// <reference path="../../typings/mongoose/mongoose.d.ts"/>
import mongoose = require('mongoose');
import express = require('express');
import developerModel = require("../models/developerModel");

import developer = developerModel.developer;
import repository = developerModel.repository;

export function createDeveloper(req: express.Request, res: express.Response) {
    var developerName = req.params.name;
    repository.create({ name: developerName }, (error) => {
        if (error) {
            res.send(400);
        }
        else {
            res.send("Created dev")
        }
    });
};

export function getDevelopers(req: express.Request, res: express.Response) {
    repository.find({}, (error, developers) => {
        if (error) {
            res.send(400);
        }
        else {
            res.send(developers)
        }
    });
};