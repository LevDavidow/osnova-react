
import { connect } from 'react-redux';

import SubscribeFormComponent from '../components/SubscribeFormComponent';

function mapStateToProps(state) {
  const props = {
    ajax: state.ajax,
    locales: state.locales
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeFormComponent);

