/* eslint-disable class-methods-use-this */
const { getAll, getByContinent, addNewVaccineData } = require('./continentVaccineController')();
const ContinentVaccines = require('../models/continentVaccineModel');

jest.mock('.././models/continentVaccineModel.js');

describe('Given a ContinentVaccinesController function', () => {
  describe('when invoke getAll function', () => {
    test('should return status 200', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn()
      };
      ContinentVaccines.find.mockResolvedValueOnce();
      await getAll(null, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
    test('should return a json', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn()
      };
      const globalCases = {};
      ContinentVaccines.find.mockResolvedValueOnce({});

      await getAll(null, res);

      expect(res.json).toHaveBeenCalledWith(globalCases);
    });
  });
  describe('When invoke getByContinent function', () => {
    test('should return status 200', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn()
      };
      const req = {
        params: {
          continentName: 'Continent'
        }
      };

      ContinentVaccines.find.mockResolvedValueOnce();
      await getByContinent(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
    test('should return return a json', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn()
      };
      const req = {
        params: {
          continentName: 'Asia'
        }
      };
      ContinentVaccines.find.mockResolvedValueOnce({ params: { continentName: 'Asia' } });
      await getByContinent(req, res);

      expect(res.json).toHaveBeenCalledWith(req);
    });
  });
  describe('When invoke addNewVaccineDataData function', () => {
    class MockVaccineData {
      constructor(vaccineData) {
        this.vaccineData = vaccineData;
      }

      save() {}
    }
    test('Should return status 200', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn()
      };
      const req = {
        body: {}
      };
      const newVaccineData = new MockVaccineData('Africa');
      ContinentVaccines.mockReturnValueOnce(newVaccineData);
      await addNewVaccineData(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    test('Should return a json data', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn()
      };
      const req = {
        body: {}
      };
      const newVaccineData = new MockVaccineData('Africa');
      ContinentVaccines.mockReturnValueOnce(newVaccineData);

      await addNewVaccineData(req, res);

      expect(res.json).toHaveBeenCalledWith({ vaccineData: 'Africa' });
    });

    test('Should return status 404', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn()
      };
      const req = {
        body: {}
      };
      ContinentVaccines.mockRejectedValueOnce('error');

      await addNewVaccineData(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
