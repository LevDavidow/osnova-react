'use strict';

import React from 'react';
import Pagination from './Catalog/PaginationComponent';
import ProductCard from './Card/ProductCardComponent';

import NothingFound from './NothingFoundComponent';

const SearchComponent = ({
  products, 
  locales, 
  pages, 
  currentPage, 
  founded,
  setFilterPage,
  addToCart,
  toggleApplicationForm
}) => {

if (products.length === 0) {
  return (
    <NothingFound locales={locales} 
                  toggleApplicationForm={toggleApplicationForm} />
  )
}

return(
  <article className="container container_top cards-preview">
    <header className="cards-preview__header wrapper">
      <div className="cards-preview__description">
        <h1 className="cards-preview__headling">
          {`${locales.searchResult}: ${founded}`}
        </h1>
      </div>
    </header>
    <div className="cards-preview__inner">
    {products.map((product, key) => (<ProductCard {...product} 
                              locales={locales}
                              onCategoryClick={false}
                              onVendorClick={false}
                              key={key}
                              addToCart={addToCart} />))}
    <Pagination pages={pages} 
            currentPage={currentPage}
            setFilterPage={setFilterPage}/>
    </div>
  </article>
)};


SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
