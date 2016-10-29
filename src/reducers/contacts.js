/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
//import initialState from '../data/mockContacts';
import {
  SET_CONTACT_COUNTRY
} from '../actions/const';

const initialState = {};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case SET_CONTACT_COUNTRY: {
      // Modify next state depending on the action and return it
      return {...state, current: action.id};
    } break;
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
