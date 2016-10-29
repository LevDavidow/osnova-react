'use strict';

import axios from 'axios';

const form = axios.create();

const sendForm  = ({ajaxUrl, actions, callback}) => {
  
  const types = {
    'subscribe': 'PLAIN',
    'contacts': 'PLAIN',
    'cart': 'PLAIN',
    'application': 'FILE'
  }
  
  const _callback = callback || console.log

  return (state, action) => {
    
    switch(types[action]) {
      case 'PLAIN': {
        const data = new FormData();
        
        console.log(state);

        Object.keys(state).forEach(key => 
            data.append(key, state[key]));
        
        data.append('action', actions[action]);

        return form({
          'url': ajaxUrl,
          'method': 'post', 
          'data': data,
        }).then(res => _callback(res))
          .catch(e => _callback(e));
        break;
      }
      case 'FILE': {
        const data = new FormData();
        data.append('action', actions[action]);
        [...state].forEach(param => data.append(param.name, param.value));
        return form.post(ajaxUrl, data)
                   .then(res => _callback(res))
                   .catch(e => _callback(e));
        break;
      }
      default: {
        console.warn('Must be specified form type');
      }
    }
  
  }

}

export default sendForm;