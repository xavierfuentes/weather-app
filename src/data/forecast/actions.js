import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from './types';

export const getForecast = () => ({
  type: GET_FORECAST_REQUEST,
});

export const getForecastSuccess = ({ forecast, city }) => {
  const predictions = { ...forecast };
  return {
    type: GET_FORECAST_SUCCESS,
    payload: { predictions, city },
  };
};

export const getForecastFailure = ({ error }) => ({
  type: GET_FORECAST_FAILURE,
  payload: { error },
});
