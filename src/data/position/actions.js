import { GET_POSITION_REQUEST, GET_POSITION_SUCCESS, GET_POSITION_FAILURE } from './types';

export const getPosition = () => ({
  type: GET_POSITION_REQUEST,
});

export const getPositionSuccess = ({ coords }) => ({
  type: GET_POSITION_SUCCESS,
  payload: { coords },
});

export const getPositionFailure = ({ error }) => ({
  type: GET_POSITION_FAILURE,
  payload: { error },
});
