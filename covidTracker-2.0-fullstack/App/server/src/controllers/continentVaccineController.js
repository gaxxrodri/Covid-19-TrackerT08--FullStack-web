const debug = require('debug')('app:continentCasesController');
const ContinentVaccines = require('../models/continentVaccineModel');

function continentVaccineController() {
  async function getAll(req, res) {
    const globalVaccine = await ContinentVaccines.find({});
    res.status(200);
    res.json(globalVaccine);
  }

  async function getByContinent(req, res) {
    const vaccinesByContinent = await ContinentVaccines.find({
      continent: req.params.continentName
    });
    res.status(200);
    res.json(vaccinesByContinent);
  }
  async function addNewVaccineData(req, res) {
    const newData = new ContinentVaccines(req.body);
    try {
      await newData.save();
      res.status(200);
      res.json(newData);
    } catch (error) {
      res.status(404);
      debug(error);
    }
  }

  return {
    getAll,
    getByContinent,
    addNewVaccineData
  };
}

module.exports = continentVaccineController;
