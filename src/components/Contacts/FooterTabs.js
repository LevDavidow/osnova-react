import React from 'react';

const FooterTabs = ({countries, current, setContactCountry, locales}) => {
  const tabs = countries.map((country, key) => (
                <li role="button" 
                    key={key} 
                    onClick={() => setContactCountry(key)}
                    className={`footer-tabs__tab 
                                ${(key === current) ? 'footer-tabs__tab_active' : '' }`}>
                {country.country}
                </li>
              ));
return(
<div className="footer-contacts__tabs footer-tabs">
  <ul className="footer-tabs__list">
    {tabs}
  </ul>
  <div className="footer-tabs__item">
    <h2 className="footer-tabs__headling footer-tabs__headling_icon flaticon-loc">
      <span className="footer-tabs__headling footer-tabs__headling_text">
        {`${countries[current].country}, 
          ${countries[current].city}, 
          ${countries[current].street}`}
      </span>
      </h2>
    <h3 className="footer-tabs__subheadling">{locales.phones}</h3>
    <ul className="footer-tabs__contacts">
      {countries[current].phones.map((phone, key) => (
        <li className="footer-tabs__contact" key={key}> 
          <a href={`tel:${phone}`} className="footer-tabs__contact-link footer-tabs__contact-link_phone flaticon-phone"> 
            <span className="footer-tabs__contact-text">{phone}</span>
          </a>
        </li>
      ))}
    </ul>
    <h3 className="footer-tabs__subheadling">{locales.mails}</h3>
    <ul className="footer-tabs__contacts">
      {countries[current].mails.map((mail, key) => (
        <li className="footer-tabs__contact" key={key}> 
          <a href={`mailto:${mail}`} className="footer-tabs__contact-link footer-tabs__contact-link_mail flaticon-mail"> 
            <span className="footer-tabs__contact-text">{mail}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
)}

export default FooterTabs;