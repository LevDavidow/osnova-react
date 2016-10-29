import React from 'react';

const Headlings = ({headling, subheadling}) => (
  <div className="cart__description">
    <h2 className="cart__headling">{headling}</h2>
     <p className="cart__subheadling">{subheadling}</p>
  </div>
)

export default Headlings;
