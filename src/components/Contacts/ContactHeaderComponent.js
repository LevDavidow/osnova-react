'use strict';

//<li className="contact-icons__item">
  //    <a href="#footer" className="contact-icons__icon contact-icons__icon_map flaticon-loc"> 
    //  <span className="contact-icons__text">{city}</span>
     // </a>
    //</li>

import React, {PropTypes} from 'react';

require('styles//Search.css');

const getPhones = phones => {
  if(phones && phones.length > 0) {
    return phones.map((phone, index) => (
    <li key={index} className="contact-icons__item">
      <a href={`tel:${phone}`} className="contact-icons__icon contact-icons__icon_phone flaticon-phone">
      <span className="contact-icons__text">{phone}</span>
      </a>
    </li>
    ));
  }
  return '';
}

const ContactHeaderComponent = ({city, phones, mail}) => (
  <ul className='contact-icons' >
    {getPhones(phones)}
    <li className="contact-icons__item">
      <a href={`mailto:${mail}`} className="contact-icons__icon contact-icons__icon_mail flaticon-mail">
       <span className="contact-icons__text">{mail}</span>
       </a>
    </li>
  </ul>
);

// Uncomment properties you need
ContactHeaderComponent.propTypes = {
  country: PropTypes.string,
  mail: PropTypes.string,
  phones: PropTypes.array
};
// SearchComponent.defaultProps = {};

export default ContactHeaderComponent;
