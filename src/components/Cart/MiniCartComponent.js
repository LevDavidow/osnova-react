'use strict';

import React,{PropTypes} from 'react';

const MiniCartComponent = ({items, locales}) => {
let bage = '';

if(items > 0) {
  bage = (
    <div className="mini-cart__bage">{items}</div>
  )
}

return (
  
  <div className="mini-cart"> 
    <i className="control-bar__icon flaticon-cart mini-cart__icon"></i>
    {bage}
    <div className="control-bar__tooltip mini-cart__tooltip">
      {locales['cart']}
    </div>
  </div>
)}

MiniCartComponent.displayName = 'MiniCartComponent';

// Uncomment properties you need
MiniCartComponent.propTypes = {
  items: PropTypes.number
};
// MiniCartComponent.defaultProps = {};

export default MiniCartComponent;
