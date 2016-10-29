import React, {
  PropTypes
} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart/CartComponent';

const getProductsInCart = (state, cart) => {
  const products = state.map(product => product);
  
  return products.reduce((result, product) => {
    
    const cartProduct = cart.filter(cartProduct => {
      return product.id === cartProduct.id; 
    })[0];

    if (cartProduct) {
      result.push({...product, quantity: cartProduct['quantity']})
    }

    return result;
  }, []);
}

const calculateTotalPrice = (state, cart) => {
  return state.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0)
}

function mapStateToProps(state) {
  const products = getProductsInCart(state.products, state.cart);
  const props = {
    products: products,
    ajax: state.ajax,
    cart: state.cart,
    locales: state.locales,
    totalPrice: calculateTotalPrice(products).toFixed(2),
    isCartSubmited: state.ui.cartSubmited
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setQuantityInCart: require('../actions/setQuantityInCart'),
    submitCart: require('../actions/submitCart')
  };
  const actionMap = bindActionCreators(actions, dispatch);
  return actionMap;
}
export {
  getProductsInCart,
  calculateTotalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
 