import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE, SET_PREDICTION_ACTIVE } from './types';

export const initialState = {
  active: null,
  error: null,
  fetching: false,
  predictions: null,
};

const locationReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_FORECAST_REQUEST:
      return {
        ...state,
        error: null,
        fetching: true,
      };
    case GET_FORECAST_SUCCESS:
      const { predictions } = payload;
      return {
        ...state,
        error: null,
        fetching: false,
        predictions,
      };
    case GET_FORECAST_FAILURE:
      return {
        ...state,
        error: payload.error,
        fetching: false,
      };
    case SET_PREDICTION_ACTIVE:
      return { ...state, active: payload.prediction };

    default:
      return state;
  }
};

export default locationReducer;
