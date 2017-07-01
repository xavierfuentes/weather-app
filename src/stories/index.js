import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PredictionsListLayout from '../components/PredictionsListLayout/PredictionsListLayout';
import { predictions } from './predictions';

const predictionsListLayoutProps = { predictions, activatePrediction: action('Prediction Clicked') };

storiesOf('Predictions List', module).add('basic', () => <PredictionsListLayout {...predictionsListLayoutProps} />);
