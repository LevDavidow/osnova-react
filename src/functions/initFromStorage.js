import configureStore from '../stores';

const initFromStorage = () => {
  console.log('initializing from old storage');
    let oldStore = {};

    return localforage.iterate((value, key) => {
      oldStore[key] = value;
    }).then(() => {

      const products =  oldStore.products || [];
      let cart = oldStore.cart || [];
      let rescentlyViewed = oldStore.rescentlyViewed || [];

      const productsIdMap = {}

      products.forEach(product => {
        productsIdMap[product.id] = true;
      });

      cart = cart.filter(item => productsIdMap[item.id] === true);

      rescentlyViewed = rescentlyViewed.filter(id => productsIdMap[id] === true);

        return configureStore({
        'cart': cart, 
        'contacts': oldStore.contacts || {}, 
        'ajax': oldStore.ajax || {},
        'rescentlyViewed': rescentlyViewed, 
        'products': products,
        'categories': oldStore.categories || [],
        'vendors': oldStore.vendors || [], 
        //"locales": oldStore.locales, 
      });
    })
}

export default initFromStorage;