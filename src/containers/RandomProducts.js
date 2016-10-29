import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RandomProducts from '../components/RandomProductsComponent';

const addToCart = require('../actions/addToCart');

const getRandomProducts = (oldState, quantity) => {
  const state = [...oldState];
  state.sort(() => 0.5 - Math.random());
  return state.map((item,id) => {
    if(id < quantity) {
      return item;
    }
  }).filter(item => item !== undefined);
}

function mapStateToProps(state) {
  const props = {
    products: getRandomProducts(state.products, 4),
    ajax: state.ajax,
    locales: state.locales
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = {  
    addToCart: (id) => dispatch(addToCart(id))
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomProducts);


