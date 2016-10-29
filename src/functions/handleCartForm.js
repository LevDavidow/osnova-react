'use strict';
import validate from './validate';


const handleCartForm  = (values, ajax) => {
  const validation = validate([
    {
      name: 'uname',
      value: values.uname,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'usurname',
      value: values.usurname,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'ucity',
      value: values.ucity,
      rules: ['IS_REQUIRED']
    },
    {
      name: 'umail',
      value: values.umail,
      rules: ['IS_REQUIRED', 'EMAIL']
    },
    {
      name: 'uphone',
      value: values.uphone,
      rules: ['PHONE OR NULL']
    }
  ]);
  return validation;
}

export default handleCartForm;