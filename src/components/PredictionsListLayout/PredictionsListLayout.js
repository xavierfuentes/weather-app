import React from 'react';

import PredictionLayout from '../PredictionLayout/PredictionLayout';

const PredictionsListLayout = ({ predictions }) =>
  <ul>
    {Object.keys(predictions).map(index => <PredictionLayout key={index} prediction={predictions[index]} />)}
  </ul>;

export default PredictionsListLayout;
