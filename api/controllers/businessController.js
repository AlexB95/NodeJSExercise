var mongoose = require('mongoose'),
    businessModel = require('../models/businessModel')
    Business = mongoose.model('businesses');

exports.list_all_business = function (req, res) {
    Business.find({}, function (err, business) {
        if (err)
            res.send(err);
        res.send(business);
    });
};

exports.create_a_business = function (req, res) {
    var new_business = new Business(req.body);
    new_business.save(function (err, business) {
        if (err)
            res.send(err);
        res.json(business);
    });
};

exports.read_a_business = function (req, res) {
    Business.findById(req.params.businessId, function (err, business) {
        if (err)
            res.send(err);
        res.json(business);
    });
};

exports.update_a_business = function (req, res) {
    Business.findOneAndUpdate({
        id: req.params.businessId
    }, req.body, {
        new: true
    }, function (err, business) {
        if (err)
            res.send(err);
        res.json(business);
    });
};

exports.delete_a_business = function (req, res) {
    Business.remove({
        id: req.params.businessId
    }, function (err, business) {
        if (err)
            res.send(err);
        res.json({
            message: 'Business successfully deleted'
        });
    });
};