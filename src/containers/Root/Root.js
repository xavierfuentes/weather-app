import { connect } from 'react-redux';

import { isAppReady } from '../../data/ui/selectors';
import AppLayout from '../../components/AppLayout/AppLayout';

const mapStateToProps = state => ({
  isAppReady: isAppReady(state),
});

export default connect(mapStateToProps)(AppLayout);
