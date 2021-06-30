const { Router } = require('express');
const continentCasesController = require('../controllers/continentCasesController')();
const continentVaccineController = require('../controllers/continentVaccineController')();

function continentRouter() {
  const routes = Router();

  routes
    .route('/cases')
    .get(continentCasesController.getAll);

  routes
    .route('/cases/:continentName')
    .get(continentCasesController.getByContinent)
    .post(continentCasesController.addNewContinentData);

  routes
    .route('/vaccines')
    .get(continentVaccineController.getAll);

  routes
    .route('/vaccines/:continentName')
    .get(continentVaccineController.getByContinent)
    .post(continentVaccineController.addNewVaccineData);

  return routes;
}

module.exports = continentRouter();
