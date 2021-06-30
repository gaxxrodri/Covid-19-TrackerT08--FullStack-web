const { getAll, getByContinent, addNewContinentData } = require('./continentCasesController')();
const ContinentCases = require('../models/continentCasesModel');

jest.mock('.././models/continentCasesModel.js');

describe('GIVEN a continentCasesController function', () => {
  describe('WHEN invoke getAll function', () => {
    test('SHOULD  o THEN return status 200', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      ContinentCases.find.mockResolvedValueOnce();
      await getAll(null, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
    test('should return a json', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()

      };
      const globalCases = {};
      ContinentCases.find.mockResolvedValueOnce({});

      await getAll(null, res);

      expect(res.json).toHaveBeenCalledWith(globalCases);
    });
    test('should resolve as error', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()

      };
      ContinentCases.find.mockRejectedValueOnce('error');

      await getAll(null, res);

      expect(res.send).toHaveBeenCalledWith('error');
    });
    test('should return as 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()

      };
      ContinentCases.find.mockRejectedValueOnce(404);

      await getAll(null, res);

      expect(res.status).toHaveBeenCalledWith(404);
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

      ContinentCases.find.mockResolvedValueOnce();
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
      ContinentCases.find.mockResolvedValueOnce({ params: { continentName: 'Asia' } });
      await getByContinent(req, res);

      expect(res.json).toHaveBeenCalledWith(req);
    });
  });
  describe('When invoke addNewContinentData gunction', () => {
    class MockContinent {
      constructor(continent) {
        this.continent = continent;
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
      const newContinent = new MockContinent('Africa');
      ContinentCases.mockReturnValueOnce(newContinent);
      await addNewContinentData(req, res);
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
      const newContinent = new MockContinent('Africa');
      ContinentCases.mockReturnValueOnce(newContinent);

      await addNewContinentData(req, res);

      expect(res.json).toHaveBeenCalledWith({ continent: 'Africa' });
    });

    test('Should return status 404', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn()
      };
      const req = {
        body: {}
      };
      ContinentCases.mockRejectedValueOnce('error');

      await addNewContinentData(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
