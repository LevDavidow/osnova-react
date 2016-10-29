'use strict';

import React, {PropTypes} from 'react';

import Category from './CategoryComponent';

import SubCategories from './SubCategoriesComponent';

require('styles//Categories.css');

const CategoriesComponent = (
  {categories, 
  currentCategory, 
  locales,
  shouldLinksWorks,
  rootLink,
  toggleCategoryMenu,
  categoryMenuToggled, 
  setCategory}) => (
  <ul className="modal-categories" > 
    <Category name={locales.showAll}
              active={currentCategory === 0}
              shouldLinksWorks={shouldLinksWorks}
              link={rootLink}
              setCategory={setCategory} 
              id={0} />
    {categories.map((category, key) => {
      if (category.subCategories === undefined) {
        return (<Category name={category.name}
                          link={category.permalink}
                          key={key}
                          active={currentCategory === category.id}
                          setCategory={setCategory}
                          shouldLinksWorks={shouldLinksWorks}
                          id={category.id}/>);
      }else {
        return (<SubCategories name={category.name} 
                               key={key}
                               link={category.permalink}
                               active={category.id === categoryMenuToggled}
                               id={category.id}
                               setCategory={setCategory}
                               currentCategory={currentCategory} 
                               locales={locales}
                               shouldLinksWorks={shouldLinksWorks}
                               toggleCategoryMenu={toggleCategoryMenu} 
                               categories={category.subCategories}/>)
      }
    })}
    </ul>
)

CategoriesComponent.displayName = 'CategoriesComponent';

// Uncomment properties you need
CategoriesComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.number.isRequired,
  locales: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  toggleCategoryMenu: PropTypes.func
};
// CategoriesComponent.defaultProps = {};

export default CategoriesComponent;
