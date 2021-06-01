import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://covid-api.mmediagroup.fr/v1/';
const URL_CONTINENTS = 'http://localhost:2019/covid/';
const casesUrl = 'cases';
const vaccinesUrl = 'vaccines';
const historyUrl = 'history';

export const loadGlobalData = (url = `${URL_CONTINENTS}${casesUrl}`) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_GLOBAL,
      data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_GLOBAL_ERROR
    });
  }
};

export const loadCountry = (country) => async (dispatch) => {
  const url = `${URL}${casesUrl}?country=${country}`;
  const { data } = await axios.get(url);

  dispatch({
    type: actionTypes.LOAD_COUNTRY,
    data: data.All
  });
};
export const loadCountryHistory = (country) => async (dispatch) => {
  const url = `${URL}${historyUrl}?country=${country}&status=confirmed`;
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_COUNTRY_HISTORY,
    data: data.All.dates
  });
};

export const loadVaccinesByCountry = (country) => async (dispatch) => {
  const url = `${URL}${vaccinesUrl}?country=${country}`;
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_COUNTRY,
    data: data.All
  });
};

const getAmericaData = (array) => {
  const peopleVaccinatedAmericas = array[4][1] + array[5][1];
  const peoplePartiallyVaccinatedAmericas = array[4][2] + array[5][2];
  const updated = array[4][3];
  const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas, updated];
  const segmentArray = array.splice(0, 4);
  return [...segmentArray, americasData];
};

const getContinentData = (allContinents) => allContinents.map((continent) => (
  [
    continent,
    142456,
    523435,
    834258,
    9945659
  ]));

export const loadVaccinesByContinent = (url = `${URL_CONTINENTS}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  const allContinents = ['Africa', 'Asia', 'Oceania', 'European Union', 'North America', 'South America'];
  let continents = getContinentData(allContinents, data);
  continents = getAmericaData(continents);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_CONTINENT,
    data: continents
  });
};

export const loadVaccinesContinentData = (url = `${URL_CONTINENTS}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  const allContinents = ['Africa', 'Asia', 'Oceania', 'Europe', 'North America', 'South America'];

  let continents;
  // eslint-disable-next-line no-unused-vars
  const continentsData = data.map((element) => {
    continents = allContinents.map((continent) => (
      [
        continent,
        element.people_vaccinated,
        element.people_partially_vaccinated
      ]));
    return continents;
  });

  const getAmericasData = (array) => {
    const peopleVaccinatedAmericas = array[4][1] + array[5][1];
    const peoplePartiallyVaccinatedAmericas = array[4][2] + array[5][2];
    const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas];
    const segmentArray = array.splice(0, 4);
    return [...segmentArray, americasData];
  };
  continents = getAmericasData(continents);

  continents.forEach((element) => {
    switch (element[0]) {
      case 'Africa':
        element.unshift('002');
        break;
      case 'Asia':
        element.unshift('142');
        break;
      case 'Oceania':
        element.unshift('009');
        break;
      case 'Europe':
        element.unshift('150');
        break;
      case 'Americas':
        element.unshift('019');
        break;
      default:
        break;
    }
  });

  dispatch({
    type: actionTypes.LOAD_VACCINES_MAP,
    data: continents
  });
};

export function addCountryToFav(country) {
  return {
    type: actionTypes.ADD_FAV,
    data: country
  };
}

export function deleteFavCountry(country) {
  return {
    type: actionTypes.DELETE_FAV,
    country
  };
}
