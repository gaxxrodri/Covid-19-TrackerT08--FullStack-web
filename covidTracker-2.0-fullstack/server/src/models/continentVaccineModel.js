const mongoose = require('mongoose');

const continentVaccineSchema = mongoose.Schema({
  continent: String,
  administered: Number,
  people_vaccinated: Number,
  people_partially_vaccinated: Number,
  population: Number,
  updated: Date
});

module.exports = mongoose.model('continentVaccines', continentVaccineSchema);
