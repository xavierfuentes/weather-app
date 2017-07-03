import { connect } from 'react-redux';

import { activePredictionSelector, allPredictionsSelector } from '../../data/forecast/selectors';
import { activatePrediction } from '../../data/forecast/actions';
import PredictionsListLayout from '../../components/PredictionsListLayout/PredictionsListLayout';

const mapStateToProps = state => ({
  predictions: allPredictionsSelector(state),
  activePrediction: activePredictionSelector(state),
});

const mapDispatchToProps = {
  activatePrediction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsListLayout);
