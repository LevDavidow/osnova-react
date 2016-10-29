import React, {PropTypes} from 'react';

require('styles//ProductCard.css');

const ProductProperties = ({properties}) => (
  <ul className="card__properties">
  {properties.map((property, key) => (
    <li className="card__property property" key={key}>
        <span className="property__name">{property.name}</span>
        <span className="property__value">{': ' + property.value}</span>
    </li>
  ))}
  </ul>
)
ProductProperties.propTypes = {
  properties: PropTypes.array
}

export default ProductProperties;