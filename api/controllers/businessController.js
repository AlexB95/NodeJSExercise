const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'business';


exports.insertDB = (element, collectionDB) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).insertOne(element, function (err, res) {
            if (err) throw err;
            console.log("Element " + JSON.stringify(element) + " inserted");
            db.close();
        });
    });
}

exports.findAllDB = (collectionDB) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log("Found the following records")
            console.log(result);
            db.close();
        });
    });
}

exports.findQueryDB = (query, collectionDB) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log("Found the following records")
            console.log(result);
            db.close();
        });
    });
}

exports.updateDB = (toUpdate, updateData, collectionDB) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).updateMany(toUpdate, { $set: updateData }, function (err, result) {
            if (err) throw err;
            console.log("Document updated where " + JSON.stringify(toUpdate) + " to " + JSON.stringify(updateData));
            db.close();
        });
    });
}

exports.deleteDB = (toDelete, collectionDB) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).remove(toDelete, function (err, result) {
            if (err) throw err;
            console.log("Deleted " + JSON.stringify(toDelete) + " from document");
            db.close();
        });
    });
}