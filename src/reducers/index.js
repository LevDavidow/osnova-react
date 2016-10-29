/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
/* Populated by react-webpack-redux:reducer */
const reducers = {
  cart: require('../reducers/cart.js'),
  contacts: require('../reducers/contacts.js'),
  sort: require('../reducers/sort.js'),
  ajax: require('../reducers/ajax.js'),
  rescentlyViewed: require('../reducers/rescentlyViewed.js'),
  filter: require('../reducers/filter.js'),
  products: require('../reducers/products.js'),
  categories: require('../reducers/categories.js'),
  vendors: require('../reducers/vendors.js'),
  locales: require('../reducers/locales.js'),
  ui: require('../reducers/ui.js')
};
module.exports = combineReducers(reducers);
