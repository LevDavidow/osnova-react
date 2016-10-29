import React from 'react';

const Row = ({
  id,
  name,
  article,
  imageSrc,
  categories,
  quantity,
  locales,
  permalink,
  price,
  setQuantityInCart
}) => {

const getPrice = (quantity, price) => {
  return (price*quantity).toFixed(2) + locales.currency;
}

return (
  <tr className="cart-table__row">
    <td className="cart-table__thumbnail">
      <img src={imageSrc}/>
    </td>
    <td className="cart-table__description">
      <h2 className="cart-table__name">
        <a href={permalink}>{name}</a>
      </h2>
      <ul className="cart-table__categories categories">
        {categories.map((category, key) => (
            <li key={key} className="categories__category">
              <a href={category.link}>
                {' ' + category.name}
              </a>
            </li>
          ))}
      </ul>
      <div className="cart-table__article">
        {locales.article + ': ' + article}
      </div>
    </td>
    <td className="cart-table__buttons">
      <div className="cart-table__button cart-table__button_up"
           onClick={() => setQuantityInCart(id, quantity + 1)}></div>
      <div className="cart-table__button cart-table__button_down"
            onClick={() => setQuantityInCart(id, quantity-1)}></div>
      <input type="text" 
             value={quantity}
             onChange={e => {
                const value = parseInt(e.target.value, 10);
                if (isNaN(value)) {
                  setQuantityInCart(id, 0);
                } else {
                  setQuantityInCart(id, value);
                }
              }}
             className="cart-table__quantity" />
    </td>
    <td className="cart-table__subprice">
      {price + locales.currency}
    </td>
    <td className="cart-table__price">
      {getPrice(quantity, price) + locales.currency}
    </td>
  </tr>
)}

export default Row;

