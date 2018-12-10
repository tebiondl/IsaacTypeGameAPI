'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ScoreSchema = new Schema({
  score:{
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model('Scores', ScoreSchema);