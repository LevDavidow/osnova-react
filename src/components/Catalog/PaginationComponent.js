'use strict';

import React from 'react';

require('styles//Pagination.css');

const getPaginationLink = (page, setFilterPage ,key) => (
  <li className='pagination__item' key={key}>
    <a className='pagination__link' 
       href='#' 
       onClick={e => {
        e.preventDefault();
        setFilterPage(page)
       }} >
    {page}
    </a>
  </li>
)

const getCurrentPage = (page, key) => (
  <li className='pagination__item pagination__item_current' key={key}>
    <span className='pagination__circle'>{page}</span>
  </li>
)

const getPaginationDots = (key) => (
  <li className='pagination__item' key={key}>
    <span className='pagination__dots'>...</span>
  </li>
)


const getPagination = (currentPage, pages, setFilterPage) => {
  const result = [];
  let key = 0
  if (pages < 10) {
    for (let i = 1; i < pages + 1; i++) {
      key++;
      if(i !== currentPage) {
        result.push(getPaginationLink(i, setFilterPage, key));
      }else {
        result.push(getCurrentPage(i, key));
      }
    }
  }else if (currentPage < 5) {
    //Значение в начале
    for(let i = 1; i < pages + 1; i++) {
      
      if(i < 7) {
        key++;
        if(i !== currentPage) {
          result.push(getPaginationLink(i, setFilterPage, key));
        }else {
          result.push(getCurrentPage(i, key));
        }
        continue;
      }

      if (i === 7) {
        key++;
        result.push(getPaginationDots(key));
        continue;
      }
      
      if (i > pages - 2) {
        key++;
        result.push(getPaginationLink(i, setFilterPage, key));
        continue;
      }

    }

  }else if (currentPage < pages - 5){
    //Значение в середине
    for(let i = 1; i < pages + 1; i++) {
      
      if(i < 3) {
        key++;
        result.push(getPaginationLink(i, setFilterPage, key));
        continue;
      }
      
      //Dots
      if(i === currentPage + 2 || i === currentPage - 2) {
        key++;
        result.push(getPaginationDots(key));
        continue;
      }
      
      //Links arround current page
      if(i === currentPage + 1 || i === currentPage - 1) {
          key++;
          result.push(getPaginationLink(i, setFilterPage, key));
          continue;
       }

      //current page
      if(i === currentPage) {
          key++;
          result.push(getCurrentPage(i, key));
          continue;
       }

      

      if(i > pages - 2) {
        key++;
        result.push(getPaginationLink(i, setFilterPage, key));
        continue;
      }
    }

  }else {
    //Значение в конце  
    for(let i = 1; i < pages + 1; i++) {
      
      if(i < 3) {
        key++;
        result.push(getPaginationLink(i, setFilterPage, key));
        continue; 
      }

      if (i === 3) {
        key++;
        result.push(getPaginationDots(key));
        continue;
      }

      
      if (i > pages - 6) {
        key++;
        if(i === currentPage) {
          result.push(getCurrentPage(i, key));
        }else {
          result.push(getPaginationLink(i, setFilterPage, key));
        }
        continue; 
      }
    }
  }

  return result;
}


const PaginationComponent = ({currentPage, pages, setFilterPage}) => (
  <ul className="pagination">
    {getPagination(currentPage, pages, setFilterPage)}
  </ul>
)

PaginationComponent.displayName = 'PaginationComponent';

// Uncomment properties you need
// PaginationComponent.propTypes = {};
// PaginationComponent.defaultProps = {};

export default PaginationComponent;
