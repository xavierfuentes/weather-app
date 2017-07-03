import React from 'react';
import ReactDOM from 'react-dom';

import PredictionsListStyled from './PredictionsListStyled';
import PredictionLayout from '../PredictionLayout/PredictionLayout';

class PredictionsListLayout extends React.Component {
  PredictionsListElement = null;

  componentDidMount() {
    this.PredictionsListElement = ReactDOM.findDOMNode(this);
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.dettachScrollListener();
  }

  onScrollChange(event) {
    const predictionWidth = event.target.scrollWidth / (Object.keys(this.props.predictions).length + 2);
    const predictionCentered = Math.floor(event.target.scrollLeft / predictionWidth);
    const predictionToActivate = Object.keys(this.props.predictions)[predictionCentered];
    if (this.props.activePrediction !== predictionToActivate) {
      this.props.activatePrediction(this.props.predictions[predictionToActivate]);
    }
  }

  attachScrollListener() {
    this.PredictionsListElement.addEventListener('scroll', this.onScrollChange.bind(this));
    this.PredictionsListElement.addEventListener('resize', this.onScrollChange.bind(this));
  }

  dettachScrollListener() {
    this.PredictionsListElement.removeEventListener('scroll');
    this.PredictionsListElement.removeEventListener('resize');
  }

  render() {
    const { activatePrediction } = this.props;
    // add extra predictions for "coverflow" effect
    const predictions = { 0: {}, ...this.props.predictions, 9999999999: {} };

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
