import axios from 'axios';

const validateAndUpdateCache = (options) => {
  //Helper for easly mapping in Promise.all(..)
  const saveInStorage = (key, value) => {
    return new Promise(fillfull => {
      localforage.setItem(key, value).then(() => fillfull());
    });
  }
  
  return new Promise(fillfullValidation => {
    //Trying to get current cache labal
    localforage.getItem('CACHE_URL').then(cache => {
    
      //Cache validation by unique url as label
      if (cache === options.CACHE_URL) {
        
        //just continue init
        fillfullValidation();

      } else {
      
      console.log('recieving a new cache');
      
       //Setting up cache loader
      const loader = axios.create();
      
      //Getting new cache JSON
      loader.get(options.CACHE_URL).then(({data}) => {
          
          //Updating cache label
          localforage.setItem('CACHE_URL', options.CACHE_URL);

          //Updating cache
          Promise.all(
            //Getting all loaded properties and saving them to local storage;
            Object.keys(data)
                  .map(key => saveInStorage(key, data[key]) ),
          ).then(() => fillfullValidation());
        });
      }
    });
  });
}

export default validateAndUpdateCache;