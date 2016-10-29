import React, {PropTypes} from 'react';

require('styles//ProductCard.css');

const ProductCategories = ({
    categories, 
    categoryAction,
    vendor,
    vendorAction 
}) => {
  const getVendorTemplate = (vendor, vendorAction) => {
    if (vendor.name) {
      return (
        <li className="card__category">
          <a href={vendor.link} 
             onClick={e => {
             if(vendorAction) {
                e.preventDefault();
                vendorAction(vendor.id);
               }
          }}>
            {' ' + vendor.name}
          </a>
        </li>
      )
    }else {
      return;
    }
  }
  const vendorTemplate = getVendorTemplate(vendor, vendorAction);
  return (
    <ul className="card__categories">
      {categories.map((category, key) => (
        <li className="card__category" key={key}>
          <a href={category.link} 
             onClick={e => {
             if(categoryAction) {
              e.preventDefault();
              categoryAction(category.id);
             }
            }}>
            {' ' + category.name}
          </a>
        </li>
      ))}
      {vendorTemplate}
    </ul>
  )
}
ProductCategories.displayName = 'ProductCategories';

// Uncomment properties you need
ProductCategories.propTypes = {
  categories: PropTypes.array
};

export default ProductCategories;