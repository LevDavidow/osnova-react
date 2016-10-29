'use strict';

import React, {PropTypes} from 'react';

import CatalogInner from './CatalogInnerComponent';
import Filter from '../Filter/FilterComponent';
import RescentSlider from '../RescentSlider/RescentSlider';

require('styles//CatalogInner.css');

const Catalog = ({
  filterProps, filterActions,
  rescentSliderProps, rescentSliderActions,
  catalogInnerProps, catalogInnerActions
  }) => {
  
  const getRescentSilder = () => {
    if(rescentSliderProps.products.length > 0) {
      const rescentSliderPropAndActions = {
        ...rescentSliderProps, 
        ...rescentSliderActions
      }
      return (<RescentSlider {...rescentSliderPropAndActions} />)
    }
    return ''  
  }

  const rescentSlider = getRescentSilder();

  const filterPropsAndActions = {
    ...filterProps, 
    ...filterActions
  }

  const catalogInnerPropsAndActions = {
    ...catalogInnerProps, 
    ...catalogInnerActions
  }
  
  return (
    <div className="main_helper">
      <Filter {...filterPropsAndActions} />
      <CatalogInner {...catalogInnerPropsAndActions} />
      {rescentSlider}
    </div>
  )
}

Catalog.displayName = 'Catalog';

// Uncomment properties you need
// CatalogInnerComponent.defaultProps = {};

export default Catalog
