import { get } from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';

import { GET_LOCATION_SUCCESS } from '../location/types';
import { getForecast, getForecastSuccess, getForecastFailure, activatePrediction } from './actions';
import { getCitySuccess } from './../location/actions';

function arrayToObject(array, key) {
  return array.reduce((accumulator, value) => {
    accumulator[value[key]] = value;
    return accumulator;
  }, {});
}

function getForecastApi(coords) {
  return get('/forecast', { params: coords })
    .then(({ data }) => {
      const { city, forecast } = data;
      // converts the array of predictions in an associative array with timestamps as keys
      return { city, forecast: arrayToObject(forecast, 'dt') };
    })
    .catch(error => error);
}

function* handleRequestWeatherForecast() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { payload } = yield take(GET_LOCATION_SUCCESS);
    yield put(getForecast());
    const { forecast, city, error } = yield call(getForecastApi, payload.coords);

    if (city.id && !error) {
      const sortedTimestamps = Object.keys(forecast).sort((a, b) => Number(a) - Number(b));
      const closestPrediction = sortedTimestamps[0];

      yield put(getForecastSuccess(forecast));
      yield put(getCitySuccess(city));
      yield put(activatePrediction(closestPrediction));
    } else {
      yield put(getForecastFailure(error));
    }
  }
}

export default function* forecastSagas() {
  yield fork(handleRequestWeatherForecast);
}
