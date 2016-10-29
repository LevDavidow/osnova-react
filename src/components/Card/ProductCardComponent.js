'use strict';

import React, {PropTypes} from 'react';

import ProductCategories from './ProductCategories.js'
import ProductProperties from './ProductProperties.js'
import ProductDescription from './ProductDescription.js'

require('styles//ProductCard.css');

const ProductCardComponent = ({
  id,
  name,
  price,
  vendor,
  description,
  categories,
  isAvailable,
  isMasterSystem,
  properties,
  imageSrc,
  permalink,
  locales,
  onCategoryClick,
  onVendorClick,
  addToCart
}) => {
let addToCartComponent = ''
if (isAvailable && price > 0) {
  addToCartComponent = (<button  onClick={ e => {
              e.preventDefault();
              addToCart(id);
            }} className="card__link button button_cart">{locales.toCart}</button>)
}
let cardImage = '';
if(imageSrc) {
  cardImage = (<img src={imageSrc} alt={name} className="card__image"/>);
}

return(
  <article className="card card_product">
    <a href={permalink} className="card__thumbnail">
      {cardImage}
    </a>
    <div className="cart__inner">
      <div className="card__content">
        <h1 className="card__headling">
          <a href={permalink}>{name}</a>
        </h1>
        <ProductCategories categories={categories} 
                           categoryAction={onCategoryClick}
                           vendor={vendor}
                           vendorAction={onVendorClick} />
        <ProductDescription description={description} length={120}/>
        <ProductProperties properties={properties} />
        <div className="card__helper">
          <div className="card__price price">
            {
              (isAvailable) ? (<span className="price__aviability">
                                               {locales.isAvailable}
                              </span>)
                            : (<span className="price__aviability 
                                               price__aviability_false">
                                               {locales.isNonAvailable}
                              </span>)
            }
            {
              (price && price > 0)  ? (<span className="price__coast">
                                        {price.toFixed(2) 
                                         + ' ' 
                                         + locales.currency}
                                      </span>)
                                    : ''
            }
          </div>
          {addToCartComponent}
        </div>
      </div>
    </div>
  </article>
)}
ProductCardComponent.displayName = 'ProductCardComponent';

// Uncomment properties you need
ProductCardComponent.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  vendor: PropTypes.object,
  categories: PropTypes.array,
  categoriesWithNames: PropTypes.array,
  isAvailable: PropTypes.bool,
  isMasterSystem: PropTypes.bool,
  properties: PropTypes.array,
  imageSrc: PropTypes.string,
  permalink: PropTypes.string,
  locales: PropTypes.object,
  addToCart: PropTypes.func
};
// ProductCardComponent.defaultProps = {};

export default ProductCardComponent;
