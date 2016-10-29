import React from 'react';

import Headlings from './Cart/Headlings';

const NothingFoundComponent = ({locales, toggleApplicationForm}) => (
  <div className="container container_top about-company">
      <Headlings headling={locales['nothingFoundMessage']}
                subheadling={locales['nothingFoundSubMessage']} />
      <button className="button button_green button_arrowed"
              onClick={() => toggleApplicationForm()}
              style={{
                margin: '0 auto'
              }} >
          {locales['sendApplication']}
      </button>
  </div>
);

export default NothingFoundComponent