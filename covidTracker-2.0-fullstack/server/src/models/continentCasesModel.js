const mongoose = require('mongoose');

const continentCasesSchema = mongoose.Schema({
  continent: String,
  confirmed: Number,
  recover: Number,
  deaths: Number,
  population: Number,
  updated: Date
});

module.exports = mongoose.model('continentCases', continentCasesSchema);
