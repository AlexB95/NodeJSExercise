/* 'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var movieSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the movie'
    },
    directedBy: {
        type: String,
        default: ''
    },
    duration: {
        type: String,
        required: 'Kindly enter the duration of the movie'
    },
    photo: {
        type: String,
    }
});

module.exports = mongoose.model('Movies', movieSchema); */