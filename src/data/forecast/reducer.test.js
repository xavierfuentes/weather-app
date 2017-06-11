import forecastReducer, { initialState } from './reducer';
import { getForecast, getForecastSuccess, getForecastFailure } from './actions';

it('returns the default state for the wrong action type', () => {
  expect(forecastReducer()).toEqual(initialState);
});

it('handles GET_FORECAST_REQUEST', () => {
  expect(forecastReducer(initialState, getForecast())).toEqual({
    ...initialState,
    error: null,
    fetching: true,
  });
});

it('handles GET_FORECAST_SUCCESS', () => {
  const forecast = {};
  expect(forecastReducer(initialState, getForecastSuccess({ forecast }))).toEqual({
    ...initialState,
    error: null,
    fetching: false,
    predictions: forecast,
  });
});

it('handles GET_FORECAST_FAILURE', () => {
  const error = 'Error';
  expect(forecastReducer(initialState, getForecastFailure({ error }))).toEqual({
    ...initialState,
    error,
    fetching: false,
  });
});
