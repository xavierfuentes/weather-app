import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import locationReducer from './location/reducer';
import forecastReducer from './forecast/reducer';

export default combineReducers({
  forecast: forecastReducer,
  location: locationReducer,
  ui: uiReducer,
});
