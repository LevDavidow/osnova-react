const loadCSS = ( href, before, media ) => { 
  const ss = window.document.createElement( "link" ); 
  const ref = before || window.document.getElementsByTagName( "script" )[ 0 ]; 
  ss.rel = "stylesheet"; 
  ss.href = href; 
  ss.media =  "all"; 
  ref.parentNode.insertBefore( ss, ref ); 
  return ss; 
}

export default loadCSS;