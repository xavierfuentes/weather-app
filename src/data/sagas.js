import { fork } from 'redux-saga/effects';

import uiSagas from './ui/sagas.js';
import locationSaga from './location/sagas.js';

export default function* sagas() {
  yield fork([uiSagas, locationSaga]);
}
