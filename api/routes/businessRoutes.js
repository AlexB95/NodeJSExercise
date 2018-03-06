'use strict';
module.exports = function(app) {
  var business = require('../controllers/businessController');

  // business Routes
  app.route('/business')
    .get(business.list_all_business)
    .post(business.create_a_business);

  app.route('/business/:businessID')
    .get(business.read_a_business)
    .put(business.update_a_business)
    .delete(business.delete_a_business);
};