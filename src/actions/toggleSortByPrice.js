import {TOGGLE_SORT_BY_PRICE} from './const';

module.exports = function(reversed) {
  return { type: TOGGLE_SORT_BY_PRICE, reversed};
};