'use strict';

import React, { PropTypes } from 'react';

require('styles//Category.css');

const CategoryComponent = ({name, id, setCategory, link, shouldLinksWorks}) => (
  <li className="modal-categories__category">
    <a href={link}
      className="modal-categories__name" 
      onClick={(e) => {
        if(!shouldLinksWorks) {
          e.preventDefault();
          setCategory(id);
        }
      }} >
        {name}
    </a>
  </li>
)


CategoryComponent.displayName = 'CategoryComponent';

// Uncomment properties you need
CategoryComponent.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
};
// CategoryComponent.defaultProps = {};

export default CategoryComponent;
