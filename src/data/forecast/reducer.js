import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from './types';

export const initialState = {
  error: null,
  fetching: false,
  city: null,
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
      const { predictions, city } = payload;
      return {
        ...state,
        error: null,
        fetching: false,
        city,
        predictions,
      };
    case GET_FORECAST_FAILURE:
      return {
        ...state,
        error: payload.error,
        fetching: false,
      };

    default:
      return state;
  }
};

export default locationReducer;
