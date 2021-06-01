import actionTypes from '../actions/actionTypes';

const globalDataReducer = (initialGlobalData = {}, action) => {
  let updatedGlobalData;
  if (action.type === actionTypes.LOAD_GLOBAL) {
    updatedGlobalData = action.data;
  } else {
    updatedGlobalData = initialGlobalData;
  }
  return updatedGlobalData;
};

export default globalDataReducer;
