'use strict';

import React, {PropTypes} from 'react';
import CheckboxFilter from './CheckboxFilterComponent';
import ArrowFilter from './ArrowFilterComponent';
import DropdownFilter from './DropdownFilterComponent';

///Дописать дропдаун.
const FilterComponent = ({
  locales,
  vendors,
  filter,
  sort,
  setVendor,
  setFilterInStorage,
  setFilterMasterSystem,
  toggleSortByPrice,
  toggleSortByLatest,
  toggleFilter
}) => (
  <div className="filter" id="filter">
  <div className="filter__container">
    <div className="filter__item">
      <div className="filter__headling">{locales.filter + ':'}</div>
    </div>
    <div className="filter__item">
      <DropdownFilter vendors={vendors} 
                      filter={setVendor}
                      locales={locales}
                      current={filter.VENDORS}/>
    </div>
    <div className="filter__item">
      <CheckboxFilter name={locales.isInStorage} 
                      filter={setFilterInStorage}
                      active={filter.IS_AVAILABLE}/>
    </div>
    <div className="filter__item">
      <CheckboxFilter name={locales.isMasterSystem} 
                      filter={setFilterMasterSystem}
                      active={filter.IS_MASTER_SYSTEM}/>
    </div>
    <div className="filter__item">
      <ArrowFilter name={locales.price}
                   filter={toggleSortByPrice}
                   active={sort.type === 'PRICE'}
                   reversed={sort.type === 'PRICE' && sort.reversed}
                   />
    </div>
    <div className="filter__item">
      <ArrowFilter name={locales.newest} 
                   filter={toggleSortByLatest}
                   active={sort.type === 'LATEST'}
                   reversed={sort.type === 'LATEST' && sort.reversed}/>
    </div>
    <div className="filter__toggle" onClick={() => toggleFilter()}>
      {locales['filterMobileToggle']}
    </div>
    <div className="filter__confirm" > 
      <button className="button button_green" onClick={() => toggleFilter()}>
        {locales.confirm}
      </button>
    </div>
  </div>
  </div>
)

FilterComponent.displayName = 'FilterComponent';

// Uncomment properties you need
FilterComponent.propTypes = {
  locales: PropTypes.object,
  vendors: PropTypes.array,
  filter: PropTypes.object,
  sort: PropTypes.object,
};
// FilterComponent.defaultProps = {};

export default FilterComponent;
