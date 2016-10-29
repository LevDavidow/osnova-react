'use strict';

import React, {PropTypes} from 'react';
import Category from './CategoryComponent.js'

require('styles//SubCategories.css');

const SubCategoriesComponent = ({name, 
  id, 
  locales,
  link, 
  currentCategory, 
  categories,
  active,
  shouldLinksWorks,
  toggleCategoryMenu, 
  setCategory}) => {
const isOpen =  (active) ? "modal-categories__category_open-subcategory" : ''
return (
<li className={"modal-categories__category modal-categories__category_subcategory " + isOpen} >
  <span className="modal-categories__name modal-categories__name_subcategories"
    onClick={(e) => {
      e.stopPropagation();
      toggleCategoryMenu(id)
    }} >
    {name}  
  </span>
  <ul className="modal-categories__subcategories">
    <Category name={locales.showAll}
        active={currentCategory === id}
        link={link}
        shouldLinksWorks={shouldLinksWorks}
        setCategory={setCategory} 
        id={id}/>
    {categories.map((cat, key) => (
        <Category name={cat.name}
                  key={key}
                  link={cat.permalink}
                  shouldLinksWorks={shouldLinksWorks}
                  active={currentCategory === cat.id}
                  setCategory={setCategory}
                  id={cat.id} />
      ))
    }
  </ul>
</li>
)};
 


SubCategoriesComponent.displayName = 'SubCategoriesComponent';

// Uncomment properties you need
SubCategoriesComponent.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  locales: PropTypes.object,
  currentCategory: PropTypes.number,
  categories: PropTypes.array,
  toggleCategoryMenu: PropTypes.func,
  setCategory: PropTypes.func,
  permalink: PropTypes.string
  //active: PropTypes.bool
};
// SubCategoriesComponent.defaultProps = {};

export default SubCategoriesComponent;

