//Уменьшить верхнее меню.
class ScrollDirectionSpy {
  // Если происходит скролл вверх - вызывает первый колбек 1 раз,
  // Скролл вниз - второй коллбек 1 раз
  constructor(callbackToTop, callbackToBottom) {
    this.callbackToTop = callbackToTop;
    this.callbackToBottom = callbackToBottom;

    this._previousCallbackToTop = false;
    this._previousScroll = 0;

    document.addEventListener('scroll', this.watch.bind(this))
  }
  watch(event) {
    const scroll = this.getBodyScrollTop();
    if (scroll > this._previousScroll) {
      this.handleScrollToTop();
    }else {
      this.handleScrollToBottom();
    }
    this._previousScroll = scroll;
  }
  getBodyScrollTop(){  
   return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);  
  }
  handleScrollToTop() {
    if(! this._previousCallbackToTop) {
      this.callbackToTop();
      this._previousCallbackToTop = !this._previousCallbackToTop;
    }
  }
  handleScrollToBottom() {
    if(this._previousCallbackToTop) {
      this.callbackToBottom();
      this._previousCallbackToTop = !this._previousCallbackToTop;
    }
  }    
}
  
const headerShrinkedInit = () =>  {
  const headerShrinker = new ScrollDirectionSpy(
    () => document.querySelector('html')
                  .classList
                  .add('header-shrinked'),
    () => document.querySelector('html')
                  .classList
                  .remove('header-shrinked') 
  )
  return headerShrinker;
}

export default headerShrinkedInit