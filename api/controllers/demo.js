var business = require('./businessController');

var myobj = 2;
var collectionDB = "business";
//business.insertDB(myobj,collectionDB);
business.deleteDB({a: myobj}, collectionDB);