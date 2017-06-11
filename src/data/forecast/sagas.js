import { get } from 'axios';
import { call, fork, take } from 'redux-saga/effects';

import { GET_LOCATION_SUCCESS } from '../location/types';

function getForecast(coords) {
  return get('/forecast', { params: coords }).then(response => response.data).catch(error => error);
}

function* handleRequestWeatherForecast() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(GET_LOCATION_SUCCESS);
    const { list, city, error} = yield call(getForecast, payload.coords);
  }
}

export default function* forecastSagas() {
  yield fork(handleRequestWeatherForecast);
}
