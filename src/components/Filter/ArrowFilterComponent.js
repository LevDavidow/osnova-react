'use strict';

import React from 'react';


const ArrowFilterComponent = ({name, active, reversed, filter}) => (
  <div className={
    `filter__radio ${
      (active) ? 'filter__radio_active'
               : ''
    }`
  } onClick={() => filter(reversed)}>
    {name}
  </div>
)

ArrowFilterComponent.displayName = 'ArrowFilterComponent';

// Uncomment properties you need
// ArrowFilterComponent.propTypes = {};
// ArrowFilterComponent.defaultProps = {};

export default ArrowFilterComponent;
