'use strict';

import React, {PropTypes} from 'react';
import ProductCard from '../Card/ProductCardComponent';
import Pagination from './PaginationComponent';

import NothingFound from '../NothingFoundComponent';

const CatalogInnerComponent = ({
  products, 
  locales, 
  pages, 
  currentPage,
  addToCart,
  setVendor,
  setCategory,
  toggleApplicationForm,
  setFilterPage}) => {

if (products.length === 0) {
  return (
    <NothingFound locales={locales} 
                  toggleApplicationForm={toggleApplicationForm} />
  )
}

return (
  <div id="container_catalog" 
       className="container container_cards container_catalog">
    {products.map((product, key) => (
      <ProductCard {...product} 
        locales={locales}
        onCategoryClick={setCategory}
        onVendorClick={setVendor}
        key={key}
        addToCart={addToCart} />
    ))}
    <Pagination pages={pages} 
            currentPage={currentPage}
            setFilterPage={setFilterPage}/>
  </div>
)}
CatalogInnerComponent.displayName = 'CatalogInnerComponent';

// Uncomment properties you need
CatalogInnerComponent.propTypes = {
  products: PropTypes.array,
  locales: PropTypes.object,
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  addToCart: PropTypes.func.isRequired,
  setFilterPage: PropTypes.func.isRequired
};
// CatalogInnerComponent.defaultProps = {};

export default CatalogInnerComponent;
