'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new Schema({
    id: {
        type: Number,
        required: 'Kindly enter the name of the movie'
    },
    name: {
        type: String,
        required: 'Kindly enter the duration of the movie'
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default:''
    },
    photo: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('businesses', businessSchema);