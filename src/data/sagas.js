import { fork, all } from 'redux-saga/effects';

import uiSagas from './ui/sagas.js';
import locationSaga from './location/sagas.js';
import forecastSagas from './forecast/sagas.js';

export default function* sagas() {
  yield all([
    fork(uiSagas),
    fork(locationSaga),
    fork(forecastSagas),
  ]);
}
