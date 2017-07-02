import React from 'react';

import PredictionsListStyled from './PredictionsListStyled';
import PredictionLayout from '../PredictionLayout/PredictionLayout';

class PredictionsListLayout extends React.Component {
  componentDidMount() {
    // attach scroll listener
  }

  componentWillUnmount() {
    // deattach scroll listener
  }

  render() {
    const { predictions, activatePrediction } = this.props;
    return (
      <PredictionsListStyled>
        {Object.keys(predictions).map(index =>
          <PredictionLayout key={index} prediction={predictions[index]} onClick={activatePrediction} />
        )}
      </PredictionsListStyled>
    );
  }
}

export default PredictionsListLayout;
