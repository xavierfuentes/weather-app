import { GET_POSITION_REQUEST, GET_POSITION_SUCCESS, GET_POSITION_FAILURE } from './types';

export const initialState = {
  error: null,
  fetching: false,
  latitude: null,
  longitude: null,
};

const positionReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_POSITION_REQUEST:
      return {
        ...state,
        error: null,
        fetching: true,
      };
    case GET_POSITION_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        latitude: payload.coords.latitude,
        longitude: payload.coords.longitude,
      };
    case GET_POSITION_FAILURE:
      return {
        ...state,
        error: payload.error,
        fetching: false,
      };

    default:
      return state;
  }
};

export default positionReducer;
