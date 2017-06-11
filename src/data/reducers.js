import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import positionReducer from './position/reducer';

export default combineReducers({
  ui: uiReducer,
  position: positionReducer,
});
