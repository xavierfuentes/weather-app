import { connect } from 'react-redux';

import { allPredictionsSelector } from '../../data/forecast/selectors';
import PredictionsListLayout from '../../components/PredictionsListLayout/PredictionsListLayout';

const mapStateToProps = state => ({
  predictions: allPredictionsSelector(state),
});

export default connect(mapStateToProps)(PredictionsListLayout);
