
import { connect } from 'react-redux';

import ApplicationFormComponent from '../components/ApplicationFormComponent';

const enableModalClosing = require('../actions/enableModalClosing');

function mapStateToProps(state) {
  const props = {
    ajax: state.ajax,
    locales: state.locales
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    enableModalClosing: () => dispatch(enableModalClosing()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormComponent);

