import { createSelector } from 'reselect';

const forecastSelector = state => state.forecast;

export const allPredictionsSelector = createSelector(forecastSelector, forecast => forecast.predictions);
export const activePredictionSelector = createSelector(forecastSelector, forecast => forecast.active);

export const activePredictionDateTimeSelector = createSelector(
  allPredictionsSelector,
  activePredictionSelector,
  (predictions, active) => new Date(predictions[active].dt_txt)
);
