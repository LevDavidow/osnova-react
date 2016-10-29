'use strict';

import React, {PropTypes} from 'react';


const DropdownFilterComponent = ({vendors, filter, current, locales}) => (
  <div className="filter__helper">
    <select className="filter__list" onChange={
      e => {
        const value = parseInt(e.target.value, 10);
        if (value === 0) {
          e.preventDefault();
        }else if (value === "ALL") {
          filter(0);
        }else {
          filter(value);
        }
      }
    } value={current} defaultValue={0}>
      <option value={0} 
              disabled={true} 
              className="filter__option">{locales.vendor}</option>
      <option value={'ALL'} className="filter__option">{locales.all}</option>
      {vendors.map((vendor, key)=> (
        <option className="filter__option"
                key={key}
                value={vendor.id}>
                {vendor.name}
        </option>
      ))}
    </select>
  </div>
);

DropdownFilterComponent.displayName = 'DropdownFilterComponent';

// Uncomment properties you need
DropdownFilterComponent.propTypes = {
  vendors: PropTypes.array,
  filter: PropTypes.func,
  current: PropTypes.number
};
// DropdownFilterComponent.defaultProps = {};

export default DropdownFilterComponent;
