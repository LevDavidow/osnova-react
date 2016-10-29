class Modal {
  constructor(className) {
    this._className = className.slice(1);
    this.modal = document.querySelector(className)
    this.classList = this.modal.classList;
    this._baseHtml = document.querySelector('body');
    this._items = this._baseHtml.classList;
    this._allowClose = true;

    this.current = '';

    this._events = {
      open: [],
    }
   
    Array.prototype
         .slice
         .call(this.modal.childNodes, '')
         .forEach(item => {
            item.addEventListener('click', this._closeForEvent
                                               .bind(this));
            item.addEventListener('touchstart', this._closeForEvent
                                               .bind(this));
         });

    this.modal.addEventListener('click',
      () => this.close());
    
    this.modal.addEventListener('touchstart',
      () => this.close());
  }

  _closeForEvent(e) {
    //Hack for not breaking react event system
    this._allowClose = false;
    setTimeout(()=> {
      this._allowClose = true;
    }, 10)
  }

  addEventListener(event, callback) {
    const index = this._events[event].push(callback);
    return () => {
      delete this._events[index];
    }
  }

  _fireEvent(event) {
    this._events[event].forEach(callback =>  {
      if(typeof callback === 'function') {
        callback();
      } 
    });
  }
  
  _freezeHtml() {
    this._baseHtml.style.width = this._baseHtml.clientWidth  + 'px';
    this._baseHtml.style.overflow = 'hidden';
  }

  _unfreezeHtml() {
    this._baseHtml.style.width = '';
    this._baseHtml.style.overflow = '';
  }

  open(className) {
    this._fireEvent('open');

    this._freezeHtml();
    this.classList.add(this._className + '_open'); 
    if (this.current) {
      this._items.remove(this.current);
    }
    this.current = className;
    this._items.add(className);
  }

  close() {
    if(this._allowClose) {
      if (this.current) {
        this._items.remove(this.current);
      }
      this.classList.remove(this._className + '_open');
      this.current = undefined;
      this._unfreezeHtml();
      return true;
    }
    return false;
  }

  toggle(className) {
    if(this.current && this.current === className) {
      this.close();
    }else {
      this.open(className);
    }
  }
}

const modalInit = () => {
 const modal = new Modal('.modal');

  //Открыть модалку категорий
  document.querySelector('#menu-item-36 a')
          .addEventListener('click',
            (e) => {
              e.preventDefault();
              modal.toggle('modal__categories_open')
            }
  );

  //Открыть модалку формы
  document.getElementById('control-bar__item_order')
          .addEventListener('click',
          (e) => {
            e.preventDefault();
            modal.toggle('modal__form_open')
          }
  );

  //Модалка хедера
  document.getElementById('header__mobile-hamburger')
          .addEventListener('click',
          (e) => {
            e.preventDefault();
            modal.toggle('header-mobile_open')
          }
  );
  return modal;
}

export default modalInit