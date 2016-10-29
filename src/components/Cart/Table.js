import React from 'react';
import Row from './Row';

const Table = ({
  products, 
  locales, 
  deleteFromCart, 
  setQuantityInCart, 
}) => (
<table className="cart__table cart-table">
  <tbody>
    {products.map((product, key)=> (
      <Row {...product} 
           key={key} 
           locales={locales}
           deleteFromCart={deleteFromCart} 
           setQuantityInCart={setQuantityInCart} />
    ))}
  </tbody>
</table>
)

export default Table;