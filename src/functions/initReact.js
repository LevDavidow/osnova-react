import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import scrollToTop from './scrollToTop';
import renderCatalog from './renderCatalog'
import Categories from '../containers/Categories';

import ContactsFooter from '../containers/ContactsFooter';
import ContactsHeader from '../containers/ContactsHeader';

import SubscribeForm from '../containers/SubscribeForm';
import ApplicationForm from '../containers/ApplicationForm';

import Search from '../containers/Search';

import Carousel from '../components/Carousel/Carousel.js';

import RandomProducts from '../containers/RandomProducts';

import Cart from '../containers/Cart';

import MiniCart from '../containers/MiniCart';

const initReact = (store) => {
  const setProductViewed = require('../actions/setProductViewed.js');
  
  render(
    <Provider store={store}>
      <MiniCart />
    </Provider>,
    document.getElementById('control-bar__item_cart')
  )

  render(
    <Provider store={store}>
      <Categories />
    </Provider>,
    document.getElementById('modal-categories')
  );
  
  render(
    <Provider store={store}>
      <ContactsHeader />
    </Provider>,
    document.getElementById('contact-bar__real')
  );
  render(
    <Provider store={store}>
      <ContactsFooter />
    </Provider>,
    document.getElementById('contacts-footer')
  );
  
  //render catalog with category || vendor
  renderCatalog(store);

  render(
    <Provider store={store}>
      <SubscribeForm />
    </Provider>,
    document.getElementById('footer-subscribe__form')
  );
  
  render(
    <Provider store={store}>
      <ApplicationForm />
    </Provider>,
    document.getElementById('upload-form__form')
  );

  //Product stuff
  const singleProduct = document.getElementById('product');
  if(singleProduct) {
    const id = parseInt(singleProduct.getAttribute('data-product'), 10);
    store.dispatch(setProductViewed(id));

    const gallery = document.getElementById('gallery')
    const images = JSON.parse(gallery.getAttribute('data-content'));
    const title = gallery.getAttribute('data-title');
    render(
      <Carousel images={images} title={title} />,
      document.getElementById('gallery')
    )

    render(
      <Provider store={store}>
        <RandomProducts />
      </Provider>,
      document.getElementById('random_products')
    )
  }

  //Cart render
  const cart = document.getElementById('cart')
  if (cart && store.getState().cart.length > 0) {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
      document.getElementById('main') 
    )
  }

  //render search if required
  store.subscribe(() => {
    const searchQuery = store.getState().filter['SEARCH_QUERY'];
    console.log(searchQuery);
    if(searchQuery && searchQuery !== '') {
      scrollToTop();
      render(
        <Provider store={store}>
              <Search />
        </Provider>,
         document.getElementById('main')
      )
    }
  });


}

export default initReact;