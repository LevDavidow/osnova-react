/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

//import handleContactForm from '../functions/handleContactForm.js';

const initialState = {};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    // case 'YOUR_ACTION': {
      
    //   return state;
    // } break;
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
