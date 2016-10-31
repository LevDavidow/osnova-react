/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  TOGGLE_CATEGORY_MENU, 
  TOGGLE_CATEGORIES_FILTER, 
  CART_SUBMITED,
  SET_CATEGORY,
  TOGGLE_FILTER,
  SET_SEARCH_QUERY,
  SET_FILTER_PAGE,
  DISABLE_MODAL_CLOSING,
  ENABLE_MODAL_CLOSING,
  TOGGLE_APPLICATION_FORM
} from '../actions/const';

import scrollToTop from '../functions/scrollToTop';

const initialState = {
  categoryMenuToggled: null,
  shouldCategoriesLinksWorks: true,
  cartSubmited: false,
  modalClosing: false,
  applicationFormToggled: false,
  filterToggled: false,
};

const toggleCategoryMenu = (state, action) => {
  if (state.categoryMenuToggled === action.id) {
    return {...state, categoryMenuToggled: undefined};
  }else {
    return {...state, categoryMenuToggled: action.id};
  }
}
 

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    // case 'YOUR_ACTION': {
    //   // Modify next state depending on the action and return it
    //   return nextState;
    // } break;
    
    case TOGGLE_CATEGORY_MENU: {
      return toggleCategoryMenu(state, action);
    } break;
    case TOGGLE_CATEGORIES_FILTER: {
      return {...state, 
          shouldCategoriesLinksWorks: !state.shouldCategoriesLinksWorks
        }
    }
    case CART_SUBMITED: {
      return {...state, cartSubmited: true}
    }
    case DISABLE_MODAL_CLOSING: {
      return {...state, modalClosing: false}
    }
    case ENABLE_MODAL_CLOSING: {
      return {...state, modalClosing: true}
    }
    case SET_CATEGORY: {
      return {...state, modalClosing: true}
    }
    case TOGGLE_APPLICATION_FORM: {
      return {...state, 
        applicationFormToggled: !state.applicationFormToggled}
    }
    case SET_SEARCH_QUERY: {
      return {...state, 
          shouldCategoriesLinksWorks: true
        }
    }
    case TOGGLE_FILTER: {
      return {...state,
        filterToggled: !state.filterToggled
      }
    }
    case SET_FILTER_PAGE: {
      scrollToTop();
      return state;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
