'use strict';
module.exports = function(app) {
  var movieStore = require('../controllers/movieStoreController');

  // movieStore Routes
  app.route('/movies')
    .get(movieStore.list_all_movies)
    .post(movieStore.create_a_movie);


  app.route('/movies/:movieID')
    .get(movieStore.read_a_movie)
    .put(movieStore.update_a_movie)
    .delete(movieStore.delete_a_movie);
};