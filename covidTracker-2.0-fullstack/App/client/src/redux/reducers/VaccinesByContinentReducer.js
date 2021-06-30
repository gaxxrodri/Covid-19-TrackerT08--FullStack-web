import actionTypes from '../actions/actionTypes';

const vaccinesByContinentReducer = (initialVaccineByContinentData = {}, action) => {
  let updatedVaccineByContinentData = { ...initialVaccineByContinentData };
  if (action.type === actionTypes.LOAD_VACCINES_BY_CONTINENT) {
    updatedVaccineByContinentData = { ...action.data };
  }
  return updatedVaccineByContinentData;
};

export default vaccinesByContinentReducer;
