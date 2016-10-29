'use strict';
import sendForm from './sendForm';
import validate from './validate';

const handleSubscribeForm  = ({email}, ajax) => {
  const validation = validate([
    {
      name: 'email',
      value: email,
      rules: ['IS_REQUIRED', 'EMAIL']
    }
  ]);
  if (validation.verified) {
    sendForm(ajax)({email}, 'subscribe')
  }
  return validation;
}

export default handleSubscribeForm;