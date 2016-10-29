/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  SET_CATEGORY,
  SET_VENDOR,
  SET_FILTER_MASTER_SYSTEM,
  SET_FILTER_IN_STORAGE,
  SET_FILTER_PAGE,
  TOGGLE_SORT_BY_LATEST,
  TOGGLE_SORT_BY_PRICE,
  SET_SEARCH_QUERY
} from '../actions/const';

const initialState = {
  'IS_AVAILABLE': false,
  'IS_MASTER_SYSTEM': false,
  'VENDOR': 0,
  'CATEGORY': 0,
  'PAGE': 1,
  'SEARCH_QUERY': null
};

const setPageToInitial = (state) => {
  return {...state, 'PAGE': 1}
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case SET_VENDOR: {
      return setPageToInitial({...state, 'VENDOR': action.id})
      break;
    }
    case SET_CATEGORY: {
      return setPageToInitial({...state, 'CATEGORY': action.id})
      break;
    }
    case SET_FILTER_PAGE: {
      return {...state, 'PAGE': action.page}
      break;
    }
    case SET_FILTER_IN_STORAGE: {
      return setPageToInitial({...state, 'IS_AVAILABLE': !state.IS_AVAILABLE })
      break;
    }
    case SET_FILTER_MASTER_SYSTEM: {
      return setPageToInitial({...state, 'IS_MASTER_SYSTEM': !state.IS_MASTER_SYSTEM})
      break;
    }
    case TOGGLE_SORT_BY_PRICE: {
      return setPageToInitial(state);
      break;
    }
    case TOGGLE_SORT_BY_LATEST: {
      return setPageToInitial(state);
      break;
    }
    case SET_SEARCH_QUERY: {
      return setPageToInitial({...state, 'SEARCH_QUERY': action.query});
      break;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
