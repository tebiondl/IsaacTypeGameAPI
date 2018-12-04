'use strict';
var mongoose = require('mongoose'),
Score = mongoose.model('Scores');

exports.getAllScores = function(req, res) {
  Score.find({}, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};




exports.createScore = function(req, res) {
  var score = new Score(req.body);
  score.save(function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.getScore = function(req, res) {
  Score.findById(req.params.scoreId, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.updateScore = function(req, res) {
  Score.findOneAndUpdate({_id: req.params.scoreId}, req.body, {new: true}, function(err, score) {
    if (err)
      res.send(err);
    res.json(score);
  });
};


exports.deleteScore = function(req, res) {


  Score.remove({
    _id: req.params.scoreId
  }, function(err, score) {
    if (err)
      res.send(err);
    res.json({ message: 'Score successfully deleted' });
  });
};
