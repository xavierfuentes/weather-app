import { connect } from 'react-redux';

import { allPredictionsSelector } from '../../data/forecast/selectors';
import { activatePrediction } from '../../data/forecast/actions';
import PredictionsListLayout from '../../components/PredictionsListLayout/PredictionsListLayout';

const mapStateToProps = state => ({
  predictions: allPredictionsSelector(state),
});

const mapDispatchToProps = {
  activatePrediction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsListLayout);
