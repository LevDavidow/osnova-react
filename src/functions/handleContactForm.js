'use strict';
import sendForm from './sendForm';
import validate from './validate';

const handleContactForm  = (state, ajax) => {
  const validation = validate([
    {
      name: 'uname',
      value: state.uname,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'umsg',
      value: state.umsg,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'country',
      value: state.country,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'umail',
      value: state.umail,
      rules: ['IS_REQUIRED', 'EMAIL']
    }
  ]);
  if (validation.verified) {
    sendForm(ajax)(state, 'contacts')
  }
  return validation;
}

export default handleContactForm;