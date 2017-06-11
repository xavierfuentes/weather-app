import { connect } from 'react-redux';

import { citySelector } from '../../data/location/selectors';
import CityLayout from '../../components/CityLayout/CityLayout';

const mapStateToProps = state => ({
  city: citySelector(state),
});

export default connect(mapStateToProps)(CityLayout);
