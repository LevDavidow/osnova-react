import {SET_SEARCH_QUERY} from './const';

module.exports = function(query) {
  return { type: SET_SEARCH_QUERY, query };
}