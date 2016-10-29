import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Catalog from '../components/Catalog/Catalog';


const applyFilterWithoutPage = (state, filters) =>  {
  let products = state.map(product => product);
  
  if (filters.IS_AVAILABLE === true) {

    products = products.filter(product => !!product['isAvailable']);
  }


  if (filters.IS_MASTER_SYSTEM === true) {
    products = products.filter(product => !!product['isMasterSystem']);
  }


  if (filters.VENDOR > 0) {
    products = products.filter(product => {
      return product['vendor']['id'] === filters['VENDOR']
    });
  }


  if (filters.CATEGORY > 0) {
    products = products.filter(product => {
      return product.categories.some(category => {
          return category['id'] === filters['CATEGORY'];
      });
    });
  }

  return products || [];
}

const applySort = (oldState, sort) => {
  //Добавим иммутабельности
  const state = oldState.map(item => item);
  switch (sort.type) {
    case 'PRICE':  {
      state.sort((p1, p2) => {
        if(p1.price < p2.price) {
          return -1;
        }
        return 1;
      });
      return (sort.reversed) ? state.reverse() : state;
      break;
    }
    case 'LATEST':  {
      //Date in unix time. Done!
      state.sort((p1, p2) => {
        if (p1.updated < p2.updated) {
          return -1;
        }
        return 1;
      });
      return (sort.reversed) ? state.reverse() : state;
      break;
    } 
    default: return state;
  }
}

const applyPage = (state, page, perPage) => {
  //Применение пагинации по базовому варианту.
  return state.slice(perPage * page  - perPage, page * perPage);
}

const calcTotalPages = (state, perPage) => {
  const result = state.length/perPage;
  
  //Проверка на то что результат округлится до целого вверх.
  if (result * 10 % 10 >= 5  || result * 10 % 10  === 0) {
    return Math.round(result);
  }
  
  //Иначе добавляем еденицу и округляем вниз.
  return Math.round(result + 1);
}

const getRescentProducts = (state, olDrescent) => {
  let rescent = olDrescent || []; 
  return state.filter(product => 
                rescent.some(id => id === product.id));
}

function mapStateToProps(state) {

  let products = applyFilterWithoutPage(state.products, state.filter);
  products = applySort(products, state.sort);

  //Определить и вынести в конфиг количество продуктов на страницу!!!
  const props = {
    filterProps: {
      locales: state.locales,
      vendors: state.vendors,
      filter: state.filter,
      sort: state.sort
    },
    catalogInnerProps: {
      products: applyPage(products, state.filter.PAGE, 8),
      locales: state.locales,
      pages: calcTotalPages(products, 8),
      currentPage: state.filter.PAGE,
    },
    rescentSliderProps: {
      locales: state.locales,
      products: getRescentProducts(
        state.products, 
        state.rescentlyViewed),
      
    }
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const filterActions = bindActionCreators({
    setFilterInStorage: require('../actions/setFilterInStorage'),
    setFilterMasterSystem: require('../actions/setFilterMasterSystem'),
    setVendor: require('../actions/setVendor'),
    toggleSortByLatest: require('../actions/toggleSortByLatest'),
    toggleSortByPrice: require('../actions/toggleSortByPrice'),
    toggleFilter: require('../actions/toggleFilter')
  }, dispatch);
  const catalogInnerActions = bindActionCreators({
    addToCart: require('../actions/addToCart'),
    setFilterPage: require('../actions/setFilterPage'),
    setCategory :  require('../actions/setCategory'),
    setVendor :  require('../actions/setVendor'),
    toggleApplicationForm: require('../actions/toggleApplicationForm')
  }, dispatch);
  const rescentSliderActions = bindActionCreators({
    addToCart: require('../actions/addToCart'),
    setCategory :  require('../actions/setCategory'),
    setVendor :  require('../actions/setVendor')
  }, dispatch);
  const actionMap = { 
    catalogInnerActions,
    filterActions,
    rescentSliderActions,
  };
  return actionMap;
}

export {calcTotalPages, applyPage, applySort, applyFilterWithoutPage, getRescentProducts}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

