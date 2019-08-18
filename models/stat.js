var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var statSchema = new Schema({
  gamesPlayed: Number,
  win: Number, 
  loss: Number, 
  draw: Number, 
  goals: Number, 
  assists: Number, 
  goalsConceded: Number, 
  ownGoals: Number, 
  penaltiesSaved: Number, 
  penaltiesMissed: Number, 
  yellowCards: Number, 
  redCards: Number, 
  bonus: Number, 
  totalPoints: Number
});

module.exports = mongoose.model('Stats', statSchema);