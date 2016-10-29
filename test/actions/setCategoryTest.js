const setCategory = require('../../src/actions/setCategory.js');

import { SET_CATEGORY } from '../../src/actions/const';


describe('setCategory', () => {
  it('should return right action', () => {
    expect(setCategory(1)).to.deep.equal({
      type: SET_CATEGORY,
      id: 1
    });
  });
})