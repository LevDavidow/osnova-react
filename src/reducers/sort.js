/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {
  TOGGLE_SORT_BY_LATEST,
  TOGGLE_SORT_BY_PRICE
} from '../actions/const';

const initialState = {
  type: 'LATEST',
  reversed: true
};

const toggleSort = (state, action, sortType) => {
  if(state.type = sortType) {
    return {...state, reversed: !state.reversed}
  }else {
    return {type: sortType, reversed: false}
  }
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case TOGGLE_SORT_BY_PRICE: {
      return toggleSort(state, action, 'PRICE');
      break;
    }
    case TOGGLE_SORT_BY_LATEST: {
      return toggleSort(state, action, 'LATEST');
      break;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
