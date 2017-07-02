import React from 'react';

import PredictionStyled from './PredictionStyled';
import PredictionTimeStyled from './PredictionTimeStyled';
import PredictionTemperatureStyled from './PredictionTemperatureStyled';

function formatdDate(timestamp) {
  const dateTime = new Date(timestamp);
  return `${('0' + dateTime.getHours()).slice(-2)}.${('0' + dateTime.getMinutes()).slice(-2)}`;
}

function formatTemperature(temperature) {
  return `${Math.round(temperature)}°`;
}

const PredictionLayout = ({ prediction, onClick }) => {
  const handlePredictionClick = event => {
    onClick(prediction.dt);
  };

  return (
    <PredictionStyled onClick={handlePredictionClick}>
      <PredictionTimeStyled>
        {formatdDate(prediction.dt_txt)}
      </PredictionTimeStyled>
      <PredictionTemperatureStyled>
        {formatTemperature(prediction.main.temp)}
      </PredictionTemperatureStyled>
    </PredictionStyled>
  );
};

export default PredictionLayout;
