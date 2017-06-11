import { fork } from 'redux-saga/effects';

import uiSagas from './ui/sagas.js';
import positionSaga from './position/sagas.js';

export default function* sagas() {
  yield fork([uiSagas, positionSaga]);
}
