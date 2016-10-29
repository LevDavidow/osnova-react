/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  SET_PRODUCT_VIEWED
} from '../actions/const';

const initialState = [];

const persistRescentlyViewed = (state) => {
  localforage.setItem('rescentlyViewed', state);
  return state;
}
const setProductViewed = (state, action) => {
  return [...state.filter(id => id !== action.id), action.id];
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case SET_PRODUCT_VIEWED: {
      // Modify next state depending on the action and return it
      return persistRescentlyViewed(setProductViewed(state, action));
    } break;
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
