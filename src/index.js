//Regular app init;
import init from './functions/init';
//Init react parts;
import initReact from './functions/initReact';

//Array.from prolyfill. Babel fails on Android without it
import polyfillArrayFrom from './functions/polyfillArrayFrom';

//Asynk css loader;
import loadCSS from './functions/loadCss';


//Initiate Redux store frol local storage
import initFromStorage from './functions/initFromStorage'
//JS loader
//import loadJS from './functions/loadCss';

//Cache contorl
import cacheControl from './functions/validateAndUpdateCache'

require('es6-promise').polyfill();
polyfillArrayFrom();

//Executed in global scope;
require('script!localforage');

//Temporally disabling 
//hosting-side brut-forse protection
document.cookie = 'securitycms=authorized';

//Setting up options
const options = window.OPTIONS;


//Rewrite cache url form cookies; 
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
options.CACHE_URL = getCookie('RZ_CACHE_URL')

//Async loading css

//loadCSS(options.CSS_URL);

loadCSS(options.FONT_URL);

//Actuall init;
const entryPoint = (store) => {
  
  console.log('..entering');
  init(store); 
  
  console.log('usualDomInitialized');
  initReact(store);
  
  console.log('React done!');

}

//Loading previously persisted data;

Promise.all([
//  loadJS('https://yastatic.net/share2/share.js'),
  cacheControl(options),
]).then(() => {
  return initFromStorage();
}).then(store => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
          entryPoint(store);
        }else {
          document.addEventListener('DOMContentLoaded', () => {
            entryPoint(store);
          });
        }
      }).catch(err => {console.error(err)});

              



