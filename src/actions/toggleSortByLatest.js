import {TOGGLE_SORT_BY_LATEST} from './const';

module.exports = function(reversed) {
  return { type: TOGGLE_SORT_BY_LATEST, reversed};
};