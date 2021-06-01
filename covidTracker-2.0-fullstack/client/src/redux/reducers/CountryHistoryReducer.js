import actionTypes from '../actions/actionTypes';

const countryHistoryReducer = (initialCountryData = {}, action) => {
  let updatedCountryData = { ...initialCountryData };
  if (action.type === actionTypes.LOAD_COUNTRY_HISTORY) {
    updatedCountryData = { ...action.data };
  } return updatedCountryData;
};

export default countryHistoryReducer;
