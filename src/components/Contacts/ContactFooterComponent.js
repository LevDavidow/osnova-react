'use strict';

import React, {PropTypes} from 'react';
import FooterForm from './FooterForm';
import FooterTabs from './FooterTabs';
import FooterSocialShare from './FooterSocialShare';

require('styles//Search.css');

const ContactFooterComponent = ({
  countries, 
  current, 
  setContactCountry, 
  locales, 
  ajax
}) => (
<div className="footer-contacts">
  <div className="footer-contacts__map">
    <iframe src={countries[current].mapSrc} 
            frameBorder={0} 
            style={{'border': 0}} 
            allowFullScreen={true} />
  </div>
  <div className="footer-contacts__callback">
      <FooterForm currentCountry={countries[current].country} 
                  locales={locales}
                  ajax={ajax} />
      <FooterTabs countries={countries} 
                  current={current} 
                  ajax={ajax}
                  setContactCountry={setContactCountry} 
                  locales={locales} />
      <FooterSocialShare locales={locales} 
                         ajax={ajax}/>
  </div>
</div>
);

// Uncomment properties you need
// SearchComponent.defaultProps = {};

export default ContactFooterComponent;
