import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import favoriteReducer from './favoriteReducer';
import globalDataReducer from './globalDataReducer';
import vaccineByCountryReducer from './vaccineByCountryReducer';
import vaccinesByContinentReducer from './vaccinesByContinentReducer';
import countryHistoryReducer from './countryHistoryReducer';
import vaccineReducer from './vaccineReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducer,

  vaccinesContinentData: vaccineReducer,
  countryData: countryReducer,
  countryHistoryData: countryHistoryReducer,
  vaccineByCountryData: vaccineByCountryReducer,
  vaccinesByContinent: vaccinesByContinentReducer,
  favoriteCountry: favoriteReducer
});

export default rootReducers;
