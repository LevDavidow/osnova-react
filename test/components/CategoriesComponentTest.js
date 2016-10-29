/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import CategoriesComponent from 'components//CategoriesComponent.js';


describe('CategoriesComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(CategoriesComponent, {
      categories: [],
      currentCategory: 1,
      locales: {},
      setCategory: function() {}
    });
  });

  it('should have setCategory as a function', ()=> {
    expect(component.props.setCategory).to.be.a('function');
  });
});
