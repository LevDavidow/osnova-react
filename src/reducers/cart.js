/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  ADD_TO_CART,
  SET_QUANTITY_IN_CART,
  CART_SUBMITED
} from '../actions/const';

const initialState = [];

const addToCart = (state, action) => {
  if(state.some(item => item.id === action.id)) {
    return incrementInCart(state, action);
  }
  return [...state, {
    id: action.id,
    quantity: 1
  }]
}

const incrementInCart = (state, action) => {
  return state.map(item => {
      if (item.id === action.id) {
        item.quantity++;
      }
      return item;
    });
}

const setQuantityInCart = (state, action) => {
  if(action.quantity === 0) {
    return deleteFromCart(state, action);
  }
  return state.map(item => {
      if (item.id === action.id) {
        item.quantity = action.quantity;
      }
      return item;
    });
}

const deleteFromCart = (state, action) => {
  return state.filter(item => item.id !== action.id);
}

const persistCart = (state) => {
  localforage.setItem('cart', state);
  return state;
} 

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case ADD_TO_CART: {
      return persistCart(addToCart(state, action));
    }
    case SET_QUANTITY_IN_CART: {
      return persistCart(setQuantityInCart(state, action));
    }
    case CART_SUBMITED: {
      return persistCart([]);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
