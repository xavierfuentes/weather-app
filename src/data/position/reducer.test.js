import positionReducer, { initialState } from './reducer';
import { getPosition, getPositionSuccess, getPositionFailure } from './actions';

it('returns the default state for the wrong action type', () => {
  expect(positionReducer()).toEqual(initialState);
});

it('handles GET_POSITION_REQUEST', () => {
  expect(positionReducer(initialState, getPosition())).toEqual({
    ...initialState,
    error: null,
    fetching: true,
  });
});

it('handles GET_POSITION_SUCCESS', () => {
  const coords = { latitude: 0, longitude: 0 };
  const timestamp = null;
  expect(positionReducer(initialState, getPositionSuccess({ coords, timestamp }))).toEqual({
    ...initialState,
    error: null,
    fetchedAt: timestamp,
    fetching: false,
    ...coords,
  });
});

it('handles GET_POSITION_FAILURE', () => {
  const error = 'Error';
  const timestamp = null;
  expect(positionReducer(initialState, getPositionFailure({ error, timestamp }))).toEqual({
    ...initialState,
    error,
    fetchedAt: timestamp,
    fetching: false,
  });
});
