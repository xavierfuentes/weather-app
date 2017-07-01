import { connect } from 'react-redux';

import { citySelector } from '../../data/location/selectors';
import { activePredictionDateTimeSelector } from '../../data/forecast/selectors';
import ActivePredictionLayout from '../../components/ActivePredictionLayout/ActivePredictionLayout';

const mapStateToProps = state => ({
  city: citySelector(state),
  timestamp: activePredictionDateTimeSelector(state),
});

export default connect(mapStateToProps)(ActivePredictionLayout);
