'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ScoreSchema = new Schema({
  score:{
      type: Number,
      default: 0
  },
  name:{
    type: String
  }
});

module.exports = mongoose.model('Scores', ScoreSchema);