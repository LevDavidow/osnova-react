import {SET_PRODUCT_VIEWED} from './const';

module.exports = function(id) {
  return { type: SET_PRODUCT_VIEWED, id };
}