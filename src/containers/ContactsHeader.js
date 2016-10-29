// import React, {
//   Component,
//   PropTypes
// } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactHeaderComponent from '../components/Contacts/ContactHeaderComponent';

function mapStateToProps(state) {
  const currentCountry = state.contacts.countries[state.contacts.current];
  const props = {
    // city: currentCountry.city,
    phones: currentCountry.phones.slice(0,2),
    mail: currentCountry.mails[0]
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactHeaderComponent);

