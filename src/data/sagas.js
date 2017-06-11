import { fork, all } from 'redux-saga/effects';

import locationSaga from './location/sagas.js';
import forecastSagas from './forecast/sagas.js';

export default function* sagas() {
  yield all([
    fork(locationSaga),
    fork(forecastSagas),
  ]);
}
