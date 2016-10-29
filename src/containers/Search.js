import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/SearchComponent';

import {applyPage, calcTotalPages} from './Catalog' 

const addToCart = require('../actions/addToCart');
const setFilterPage = require('../actions/setFilterPage');
const toggleApplicationForm = require('../actions/toggleApplicationForm');

export const applySearch = (state, query) => {
  const products = [...state];
  const queryLowerCase = query.toLowerCase();
  return products.filter(product => {
    return product.name.toLowerCase().match(queryLowerCase) || 
           product.description.toLowerCase().match(queryLowerCase);
  });
}

function mapStateToProps(state) {
  const products = applySearch(state.products, state.filter.SEARCH_QUERY);
  const props = {
    products: applyPage(products, state.filter.PAGE, 8),
    pages: calcTotalPages(products, 8),
    founded: products.length,
    currentPage: state.filter.PAGE,
    locales: state.locales
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = {  
    addToCart: (id) => dispatch(addToCart(id)),
    setFilterPage: (page) => dispatch(setFilterPage(page)), 
    toggleApplicationForm: () => dispatch(toggleApplicationForm())
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);


