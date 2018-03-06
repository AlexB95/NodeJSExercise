var business = require('./businessController');

var myobj = { name: "Company Inc", address: "Highway 37" };
var collectionDB = "business";
//business.insertDB(myobj,collectionDB);
business.findAllDB(collectionDB);
