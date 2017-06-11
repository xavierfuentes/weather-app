import { get } from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';

import { GET_LOCATION_SUCCESS } from '../location/types';
import { getForecast, getForecastSuccess, getForecastFailure } from './actions';
import { getCitySuccess } from './../location/actions';

function getForecastApi(coords) {
  return get('/forecast', { params: coords }).then(response => response.data).catch(error => error);
}

function* handleRequestWeatherForecast() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(GET_LOCATION_SUCCESS);
    yield put(getForecast());
    const { forecast, city, error } = yield call(getForecastApi, payload.coords);

    if (city.id && !error) {
      yield put(getForecastSuccess({ forecast }));
      yield put(getCitySuccess({ city }));
    } else {
      yield put(getForecastFailure({ error }));
    }
  }
}

export default function* forecastSagas() {
  yield fork(handleRequestWeatherForecast);
}
