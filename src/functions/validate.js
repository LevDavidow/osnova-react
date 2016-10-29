/* 
* Simple validation function;
*   
*   input: [{name: string, value: value, rule: rule}];
*   
*   rules: 'EMAIL', 'IS_REQUIRED', 'EMAIL OR PHONE';
*
*   outputOK: {verified: true, errors: []}
*   outputNotOk: {verified: false, errors: ['name', 'name'...]}
*/

const validate = (items) => {

  const checkRule = (value, rule) => {
    switch (rule) {
      case 'EMAIL': {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value);
        break;
      }
      case 'IS_REQUIRED': {
        return value !== '';
        break;
      }
      case 'PHONE': {
        return /^[0-9\+]{1,}[0-9\-]{3,15}$/im.test(value);
        break;
      }
      case 'EMAIL OR PHONE': {
        return checkRule(value, 'EMAIL') || checkRule(value, 'PHONE');
      }
      case 'PHONE OR NULL': {
        return value === '' || checkRule(value, 'PHONE');
      } 
      default: {
        return false;
      }
    }
  }

  return items.reduce((result, item) => {
    item.rules.forEach(rule => {
      if(!checkRule(item.value, rule)) {
        result.verified = false;
        result.errors.push(item.name);
      }
    });
    return result;
  }, {verified: true, errors: []})
}


export default validate;