const loadJS = (url) => {
  return new Promise(fillfull => {
    
    const injectedScript = document.createElement('script');
    
    const myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState == 4 && myRequest.status == 200)   {
          injectedScript.innerHTML = myRequest.responseText;       
      }
    };

    myRequest.open('GET', url, true);
    myRequest.overrideMimeType('application/javascript');
    myRequest.send();
})}

export default loadJS;