import { GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS, GET_LOCATION_FAILURE } from './types';

export const initialState = {
  error: null,
  fetchedAt: null,
  fetching: true,
  latitude: null,
  longitude: null,
};

const locationReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_LOCATION_REQUEST:
      return {
        ...state,
        error: null,
        fetching: true,
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        error: null,
        fetchedAt: payload.timestamp,
        fetching: false,
        latitude: payload.coords.latitude,
        longitude: payload.coords.longitude,
      };
    case GET_LOCATION_FAILURE:
      return {
        ...state,
        error: payload.error,
        fetchedAt: payload.timestamp,
        fetching: false,
      };

    default:
      return state;
  }
};

export default locationReducer;
