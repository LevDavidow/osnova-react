import React, {PropTypes} from 'react';

require('styles//ProductCard.css');

const ProductDescription = ({description, length}) => {
  let descriptionLong =  description.split('');
  const descriptionShort = descriptionLong.splice(0, length)
                                          .join('')
                                          .replace(/\s+$/g, '');
      descriptionLong =  descriptionLong.join('');
  return (
    <div className="card__description">
      <span className="card__description_short">{descriptionShort}</span>{descriptionLong}
    </div>
  )
}
ProductDescription.displayName = 'ProductDescription';

// Uncomment properties you need
ProductDescription.propTypes = {
  description: PropTypes.string,
  length: PropTypes.number,
};

export default ProductDescription;