import {SET_FILTER_PAGE } from './const';

module.exports = function(page) {
  return { type: SET_FILTER_PAGE, page };
}