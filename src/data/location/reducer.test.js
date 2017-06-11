import locationReducer, { initialState } from './reducer';
import { getLocation, getLocationSuccess, getLocationFailure } from './actions';

it('returns the default state for the wrong action type', () => {
  expect(locationReducer()).toEqual(initialState);
});

it('handles GET_LOCATION_REQUEST', () => {
  expect(locationReducer(initialState, getLocation())).toEqual({
    ...initialState,
    error: null,
    fetching: true,
  });
});

it('handles GET_LOCATION_SUCCESS', () => {
  const coords = { latitude: 0, longitude: 0 };
  const timestamp = null;
  expect(locationReducer(initialState, getLocationSuccess({ coords, timestamp }))).toEqual({
    ...initialState,
    error: null,
    fetchedAt: timestamp,
    fetching: false,
    ...coords,
  });
});

it('handles GET_LOCATION_FAILURE', () => {
  const error = 'Error';
  const timestamp = null;
  expect(locationReducer(initialState, getLocationFailure({ error, timestamp }))).toEqual({
    ...initialState,
    error,
    fetchedAt: timestamp,
    fetching: false,
  });
});
