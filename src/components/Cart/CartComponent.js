'use strict';

import React from 'react';

import Table from './Table';
import Total from './Total';
import Headlings from './Headlings';
import FormCart from './FormCart';

const CartComponent = ({
  products,
  cart, 
  locales,
  ajax,
  totalPrice,
  isCartSubmited,
  setQuantityInCart,
  submitCart
}) => {
  if (isCartSubmited === false && cart.length > 0) {
    return  (
      <div className="container container_top cart">
        <Table products={products} 
               locales={locales} 
               setQuantityInCart={setQuantityInCart} />
        <Total totalPrice={totalPrice}
               locales={locales} />
        <Headlings headling={locales["cart__headling"]}
                   subheadling={locales["cart__subheadling"]} />
        <FormCart ajax={ajax} 
                  submitCart={submitCart}
                  locales={locales} 
                  cart={cart}/>
      </div>
    );
  }else if (isCartSubmited === false){
    return (
      <div className="container container_top cart">
        <Headlings headling={'Для начала работы добавьте товары в корзину'}
                   subheadling={'Свяжитесь с нами в случае каких-либо вопросов'} />
      </div>
    );
  }else {
    return (
      <div className="container container_top cart">
        <Headlings headling={'Спасибо за ваш заказ'}
                   subheadling={'Наши менеджеры свяжутся с вами в ближайшее время'} />
      </div>
    );
  }
};

CartComponent.displayName = 'CartComponent';

// Uncomment properties you need
// CartComponent.propTypes = {};
// CartComponent.defaultProps = {};

export default CartComponent;
