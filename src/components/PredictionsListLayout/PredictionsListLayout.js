import React from 'react';

import PredictionLayout from '../PredictionLayout/PredictionLayout';

const PredictionsListLayout = ({ predictions, activatePrediction }) =>
  <ul>
    {Object.keys(predictions).map(index =>
      <PredictionLayout key={index} prediction={predictions[index]} onClick={activatePrediction} />
    )}
  </ul>;

export default PredictionsListLayout;
