/// <reference path="../../typings/mongoose/mongoose.d.ts"/>
import mongoose = require('mongoose');

export interface developer extends mongoose.Document {
    name: String
}

export var developerSchema = new mongoose.Schema({
    name: String
});

export var repository = mongoose.model<developer>('Developer', developerSchema);
