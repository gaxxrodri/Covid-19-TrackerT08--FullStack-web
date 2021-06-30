import actionTypes from '../actions/actionTypes';

const vaccineByCountryReducer = (initialVaccineByCountryData = {}, action) => {
  let updatedVaccineByCountryData = { ...initialVaccineByCountryData };
  if (action.type === actionTypes.LOAD_VACCINES_BY_COUNTRY) {
    updatedVaccineByCountryData = { ...action.data };
  }
  return updatedVaccineByCountryData;
};

export default vaccineByCountryReducer;
