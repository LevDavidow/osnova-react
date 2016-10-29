import React from 'react';

const Total = ({totalPrice, locales}) => (
  <div className="cart__total button">
    {`${locales.total}: 
      ${totalPrice} 
      ${locales.currency}`}
  </div>
)

export default Total;
