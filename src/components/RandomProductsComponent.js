import React from 'react';
import ProductCard from './Card/ProductCardComponent.js';

const RandomProductsComponent = ({
  products,
  locales,
  ajax,
  addToCart
}) => (
  <section className="container cards-preview">
    <header className="cards-preview__header wrapper">
      <div className="cards-preview__description">
        <h2 className="cards-preview__headling">
          {locales['seeAlso'] + ':'}
        </h2>
      </div>
      <div className="cards-preview__link">
        <a href={ajax.catalogLink} 
        className="button button_green button_arrowed">
          {locales['goToCatalog']}
        </a>
      </div>
    </header>
    <div className="cards-preview__inner">
      {products.map((product, key) => (
          <ProductCard {...product} 
            locales={locales}
            onCategoryClick={false}
            onVendorClick={false}
            key={key}
            addToCart={addToCart} />)
      )}
    </div>
  </section>
) 
export default RandomProductsComponent;