import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import locationReducer from './location/reducer';

export default combineReducers({
  ui: uiReducer,
  location: locationReducer,
});
