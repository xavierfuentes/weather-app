import { GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS, GET_LOCATION_FAILURE, GET_CITY_SUCCESS } from './types';

export const getLocation = () => ({
  type: GET_LOCATION_REQUEST,
});

export const getLocationSuccess = ({ coords, timestamp }) => ({
  type: GET_LOCATION_SUCCESS,
  payload: { coords, timestamp },
});

export const getLocationFailure = ({ error, timestamp }) => ({
  type: GET_LOCATION_FAILURE,
  payload: { error, timestamp },
});

export const getCitySuccess = city => ({
  type: GET_CITY_SUCCESS,
  payload: { city },
});
