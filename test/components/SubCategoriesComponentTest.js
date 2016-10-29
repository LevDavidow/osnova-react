/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import SubCategoriesComponent from 'components//SubCategoriesComponent.js';

describe('SubCategoriesComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(SubCategoriesComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('subcategories-component');
  });
});
