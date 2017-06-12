import { connect } from 'react-redux';

import { citySelector } from '../../data/location/selectors';
import { activePredictionDateTimeSelector } from '../../data/forecast/selectors';
import CityLayout from '../../components/CityLayout/CityLayout';

const mapStateToProps = state => ({
  city: citySelector(state),
  timestamp: activePredictionDateTimeSelector(state),
});

export default connect(mapStateToProps)(CityLayout);
