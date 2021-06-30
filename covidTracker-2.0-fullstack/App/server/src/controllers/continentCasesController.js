const debug = require('debug')('app:continentCasesController');
const ContinentCases = require('../models/continentCasesModel');

function continentCasesController() {
  async function getAll(req, res) {
    try {
      const globalCases = await ContinentCases.find({});
      res.json(globalCases);
      res.status(200);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function getByContinent(req, res) {
    const casesByContinent = await ContinentCases.find({
      continent: req.params.continentName
    });
    res.status(200);
    res.json(casesByContinent);
  }

  async function addNewContinentData(req, res) {
    const newData = new ContinentCases(req.body);
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
    addNewContinentData
  };
}

module.exports = continentCasesController;
