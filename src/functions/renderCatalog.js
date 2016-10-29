import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 


import Catalog from '../containers/Catalog';

const renderCatalog = (store) => {
  const setVendor = require('../actions/setVendor');
  const setCategory = require('../actions/setCategory');
  const toggleCategoriesFilter = require('../actions/toggleCategoriesFilter')
  const catalog = document.getElementById('container_catalog');

  if (catalog) {
    
    store.dispatch(toggleCategoriesFilter());

    const vendor = catalog.getAttribute('data-vendor');
    
    if(vendor){
      store.dispatch(setVendor(parseInt(vendor, 10)));
    }
    
    const category = catalog.getAttribute('data-category');
    
    if(category){
      store.dispatch(setCategory(parseInt(category, 10)));
    }

    render((
      <Provider store={store}>
        <Catalog />
      </Provider>
    ), document.getElementById('main'));
    console.debug('..readyToCatalog3');
  }

}
export default renderCatalog;