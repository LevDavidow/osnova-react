'use strict';

import React from 'react';


const CheckboxFilterComponent = ({name, active, filter}) => (
  <div className={
    `filter__checkbox ${
      (active) ? 'filter__checkbox_active'
               : ''
    }`
  } onClick={() => filter()}>
    {name}
  </div>
)
CheckboxFilterComponent.displayName = 'CheckboxFilterComponent';

// Uncomment properties you need
// CheckboxFilterComponent.propTypes = {};
// CheckboxFilterComponent.defaultProps = {};

export default CheckboxFilterComponent;
