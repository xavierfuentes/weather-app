import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { throttle } from 'lodash';

import PredictionLayout from './PredictionLayout';

const PredictionsListStyled = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  overflow-x: scroll;
  margin: 0 calc(50% - 9.375em);

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`;

class PredictionsListLayout extends React.PureComponent {
  componentDidMount() {
    this.PredictionsListElement = ReactDOM.findDOMNode(this);
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.dettachScrollListener();
  }

  onScrollChange = (event) => {
    const predictionWidth = event.target.scrollWidth / (Object.keys(this.props.predictions).length + 2);
    const predictionCentered = Math.floor(event.target.scrollLeft / predictionWidth);
    const predictionToActivate = Object.keys(this.props.predictions)[predictionCentered];
    if (this.props.activePrediction !== predictionToActivate) {
      this.props.activatePrediction(this.props.predictions[predictionToActivate]);
    }
  }

  attachScrollListener() {
    this.PredictionsListElement.addEventListener('scroll', throttle(this.onScrollChange, 300));
    this.PredictionsListElement.addEventListener('resize', throttle(this.onScrollChange, 300));
  }

  dettachScrollListener() {
    this.PredictionsListElement.removeEventListener('scroll');
    this.PredictionsListElement.removeEventListener('resize');
  }

  render() {
    const { activatePrediction } = this.props;
    // add extra predictions for "coverflow" effect
    // const predictions = { 0: {}, ...this.props.predictions, 9999999999: {} };
    const predictions = this.props.predictions;

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
