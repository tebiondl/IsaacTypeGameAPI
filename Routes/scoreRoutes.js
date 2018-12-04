'use strict';
module.exports = function(app) {
  var score = require('../Controllers/scoreController');

  // todoList Routes
  app.route('/score')
    .get(score.getAllScores)
    .post(score.createScore);


  app.route('/score/:scoreId')
    .get(score.getScore)
    .put(score.updateScore)
    .delete(score.deleteScore);
};