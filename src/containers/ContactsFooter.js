// import React, {
//   Component,
//   PropTypes
// } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactFooterComponent from '../components/Contacts/ContactFooterComponent';
const setContactCountry = require('../actions/setContactCountry.js')

function mapStateToProps(state) {
  const props = {
    countries: state.contacts.countries,
    current: state.contacts.current,
    locales: state.locales,
    ajax: state.ajax
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    setContactCountry: (id) => dispatch(setContactCountry(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFooterComponent);

