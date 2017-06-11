import { combineReducers } from 'redux';

import locationReducer from './location/reducer';
import forecastReducer from './forecast/reducer';

export default combineReducers({
  forecast: forecastReducer,
  location: locationReducer,
});
