import { fork, all } from 'redux-saga/effects';

import uiSaga from './ui/sagas.js';
import locationSaga from './location/sagas.js';
import forecastSagas from './forecast/sagas.js';

export default function* sagas() {
  yield all([
    fork(uiSaga),
    fork(locationSaga),
    fork(forecastSagas),
  ]);
}
