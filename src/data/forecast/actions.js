import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE, SET_PREDICTION_ACTIVE } from './types';

export const getForecast = () => ({
  type: GET_FORECAST_REQUEST,
});

export const getForecastSuccess = forecast => {
  const predictions = { ...forecast };
  return {
    type: GET_FORECAST_SUCCESS,
    payload: { predictions },
  };
};

export const getForecastFailure = error => ({
  type: GET_FORECAST_FAILURE,
  payload: { error },
});

export const activatePrediction = prediction => ({
  type: SET_PREDICTION_ACTIVE,
  payload: { prediction: prediction.dt },
});
