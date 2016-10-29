import slidersInit from './sliders.js';
import headerShrinkedInit from './headerShrinked.js';
import modalInit from './modal.js'



const init = (store) => {
  
  const setSearchQuery = require('../actions/setSearchQuery');
  const addToCart = require('../actions/addToCart');
  const disableModalClosing = require('../actions/disableModalClosing');
  const toggleApplicationForm = require('../actions/toggleApplicationForm');
  const toggleFilter = require('../actions/toggleFilter');
  slidersInit();

  headerShrinkedInit();

  const modal = modalInit();
  
  //Сath modal closing from store
  store.subscribe(() => {
    if(store.getState().ui.modalClosing) {
      const closing = ()=> {
        const closed = modal.close();
        if(closed){
          store.dispatch(disableModalClosing());
        }else {
          setTimeout(closing, 5);
        }
      }
      setTimeout(closing, 5);
    }
  });
  
  //Catch mobile filter toggling from store .filter_mobile
  store.subscribe(() => {
    if(store.getState().ui.filterToggled) {
      store.dispatch(toggleFilter());
      modal.toggle('filter_mobile');
    }
  });


  //Catch application form openning from store
  store.subscribe(()=>{
    if(store.getState().ui.applicationFormToggled) {
      store.dispatch(toggleApplicationForm());
      modal.open('modal__form_open');
    }
  });

  //Static products adding to cart;
 [...document.querySelectorAll('.button_cart')].forEach(node =>
        node.addEventListener('click', (e) => {
          e.preventDefault();
          const id = parseInt(node.getAttribute('data-id'));
          store.dispatch(addToCart(id));
        }));

  //Search bar 
  //opening
  document.getElementById('search-bar__close')
          .addEventListener('click',
          () => {
            document.querySelector('html')
                    .classList
                    .toggle('header_search')
          }
  );
  //closing
  document.getElementById('control-bar__item_search')
          .addEventListener('click',
          (e) => {
            document.querySelector('html')
                    .classList
                    .toggle('header_search')
          }
  );
  //dispaching search query to store
  document.querySelector('.header__search')
          .addEventListener('submit', (e)=> {
            e.preventDefault();
            store.dispatch(setSearchQuery(e.target
                                           .query
                                           .value));
          });
  

  //Открыть выбор языка
  // document.getElementById('control-bar__item_lang')
  //         .addEventListener('click', 
  //           function() {
  //             document.getElementById('control-bar__item_lang')
  //                     .classList
  //                     .toggle('control-bar__item_show-list');
  //         });
  
  //Перевод категорий без реакта
  Array.prototype
       .slice
       .call(document.querySelectorAll('.modal-categories__category_subcategory'), '')
       .forEach(node => {
          node.addEventListener('click', () => {
            const prevNode =document.querySelector('.modal-categories__category_open-subcategory')
            if(prevNode){
              prevNode.classList.remove('modal-categories__category_open-subcategory');
            }       
            node.classList.add('modal-categories__category_open-subcategory')
          });
        });
}

export default init;

