const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'business';


exports.insertDB = (element, collectionDB) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).insertOne(element, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
    });
}

exports.findAllDB = (collectionDB) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log("Found the following records")
            console.log(result[0].name);
            db.close();
        });
    });
}

exports.findQueryDB = (query, collectionDB) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionDB).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log("Found the following records")
            console.log(result);
            db.close();
        });
    });
}