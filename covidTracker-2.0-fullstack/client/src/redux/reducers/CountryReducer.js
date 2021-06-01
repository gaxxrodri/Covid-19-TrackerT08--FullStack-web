import actionTypes from '../actions/actionTypes';

const countryReducer = (initialCountryData = {}, action) => {
  let updatedCountryData = { ...initialCountryData };
  if (action.type === actionTypes.LOAD_COUNTRY) {
    updatedCountryData = { ...action.data };
  } return updatedCountryData;
};

export default countryReducer;
