'use strict';
import validate from './validate';

const handleApplicationForm  = ({uname, umsg, ucontacts, ufile}) => {
  const validation = validate([
    {
      name: 'uname',
      value: uname,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'umsg',
      value: umsg,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'ucontacts',
      value: ucontacts,
      rules: ['IS_REQUIRED', 'EMAIL OR PHONE']
    }
  ]);
  return validation;
}

export default handleApplicationForm;