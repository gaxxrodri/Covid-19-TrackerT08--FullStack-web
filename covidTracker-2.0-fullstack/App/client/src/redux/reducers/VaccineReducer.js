import actionTypes from '../actions/actionTypes';

const vaccineReducer = (initialVaccinesContinentData = [], action) => {
  const chartHeader = [['Region Code', 'Continent', 'People vaccinated', 'People partially vaccinated']];
  let updatedVaccinesContinent = [...initialVaccinesContinentData];
  if (action.type === actionTypes.LOAD_VACCINES_MAP) {
    updatedVaccinesContinent = [...chartHeader, ...action.data];
  }
  return updatedVaccinesContinent;
};

export default vaccineReducer;
