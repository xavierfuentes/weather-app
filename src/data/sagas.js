import { fork } from 'redux-saga/effects';

import uiSagas from './ui/sagas.js';

export default function* sagas() {
  yield fork(uiSagas);
}
