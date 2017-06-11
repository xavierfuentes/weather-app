import { createSelector } from 'reselect';

const forecastSelector = (state) => state.forecast;

export const allPredictionsSelector = createSelector(forecastSelector, forecast => forecast.predicitons);
