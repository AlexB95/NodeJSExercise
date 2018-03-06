'use strict';
module.exports = function(app) {
  var business = require('../controllers/businessController');
  var collectionDB = "business";
  // business Routes
  app.route('/business')
    .get((req, res) => res = business.findAllDB(collectionDB))
    

  app.route('/business/:businessID')
    .get(function(req, res){
      console.log(req.params, collectionDB);
    })
};