import { call, fork, put } from 'redux-saga/effects';
import { getLocation, getLocationSuccess, getLocationFailure } from './actions';

function getBrowserLocation() {
  return new Promise(function(resolve, reject) {
    if (!navigator.geolocation) {
      reject(new Error('Your browser does not support Geo Location.'));
    }

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function* getUserLocation() {
  yield put(getLocation());
  const { error, coords, timestamp } = yield call(getBrowserLocation);

  if (coords && !error) {
    yield put(getLocationSuccess({ coords: { latitude: coords.latitude, longitude: coords.longitude }, timestamp }));
  } else {
    yield put(getLocationFailure({ error, timestamp }));
  }
}

export default function* locationSagas() {
  yield fork(getUserLocation);
}
