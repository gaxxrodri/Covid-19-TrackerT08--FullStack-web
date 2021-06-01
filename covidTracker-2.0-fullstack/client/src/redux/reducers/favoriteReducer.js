import actionTypes from '../actions/actionTypes';

function favoriteReducer(initialFavData = [], action) {
  let updatedFavData = [...initialFavData];
  switch (action.type) {
    case actionTypes.ADD_FAV:
      updatedFavData = [...updatedFavData, action.data];
      break;
    case actionTypes.DELETE_FAV:
      updatedFavData = updatedFavData.filter((country) => country !== action.country);
      break;
    default:
      break;
  }
  return updatedFavData;
}

export default favoriteReducer;
