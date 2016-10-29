// import React, {
//   Component,
//   PropTypes
// } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import CategoriesComponent from '../components/Catalog/CategoriesComponent'
const setCategory  =  require('../actions/setCategory');
const toggleCategoryMenu = require('../actions/toggleCategoryMenu');

function mapStateToProps(state) {
  const props = {
    locales: state.locales,
    categories: state.categories,
    currentCategory: state.filter.CATEGORY,
    categoryMenuToggled: state.ui.categoryMenuToggled,
    rootLink: state.ajax.catalogLink,
    shouldLinksWorks: state.ui.shouldCategoriesLinksWorks
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    setCategory: (id) => dispatch(setCategory(id)),
    toggleCategoryMenu: (id) => dispatch(toggleCategoryMenu(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);

