import {ADD_TO_CART} from './const';

module.exports = function(id) {
  return { type: ADD_TO_CART, id };
};
