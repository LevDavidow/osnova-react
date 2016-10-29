import { SET_QUANTITY_IN_CART } from './const';

module.exports = function(id, quantity) {
  return { type: SET_QUANTITY_IN_CART, id, quantity };
}