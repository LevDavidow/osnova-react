import React from 'react';
import handleCartForm from '../../functions/handleCartForm.js';
import sendForm from '../../functions/sendForm';

class FormCart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formSubmited: false,
      send: this.props.locales['order'],
      values: {},
      errors: {}
    }
  }
  
  onFormSubmit(e) {
    e.preventDefault();

    const values = {
      uname: this.refs.uname.value,
      uphone: this.refs.uphone.value,
      ucountry: this.refs.ucountry.value,
      ustreet: this.refs.ustreet.value,
      usurname: this.refs.usurname.value,
      umail: this.refs.umail.value,
      ucity: this.refs.ucity.value,
      products: JSON.stringify(this.props.cart)
    }
        
    const validation = handleCartForm(values, this.props.ajax);
    
    if(validation.verified === false) {
      const errors = {};

      validation.errors.forEach(error => {
        errors[error] = true
      });

      this.setState({
        formSubmited: true,
        errors,
        values
      });
    }else {
      
      this.setState({
        formSubmited: true,
        send: this.props.locales['submiting'],
        errors: {},
        values: {}
      });

       const handleSubmit = (res) => {
        if(res) {
          console.log(res);
        }
        
        this.setState({
          ...this.state,
          formSubmited: false,
          filename: this.props.locales["fileIsNotDefined"],
          sendText: this.props.locales['submit'],
          values: {},
          errors: {}
        });
        this.props.submitCart();
  
      }

      sendForm({...this.props.ajax,
        callback: handleSubmit,
      })({...values}, 'cart');
    
    }
  }
  
  handleError(name, errors, formSubmited) {
    if (formSubmited) {
      if (errors[name] === true) {
        return 'form__input_false';
      }
      return 'form__input_true';
    }
    return '';
  }
  
  render() {
    return (
        <form onSubmit={this.onFormSubmit.bind(this)} 
              className="cart__form form cart-form">
          <div className="cart-form__column">
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['first_name']}*</div>
              <input type="text" 
                     placeholder={this.props.locales['first_name']} 
                     name="uname"
                     ref="uname" 
                     className={`input form__input 
                                ${this.handleError('uname', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['phone']}*</div>
              <input type="text" 
                     placeholder={'+380577770778'}
                     name="uphone" 
                     ref="uphone"
                     className={`input form__input 
                                ${this.handleError('uphone', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['country']}*</div>
              <input type="text" 
                     placeholder={this.props.locales['country']} 
                     name="ucountry"
                     ref="ucountry" 
                     className={`input form__input 
                                ${this.handleError('ucountry', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['street']}*</div>
              <input type="text" 
                     placeholder={this.props.locales['street']} 
                     name="ustreet" 
                     ref="ustreet" 
                     className={`input form__input 
                                ${this.handleError('ustreet', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
          </div>
          <div className="cart-form__column">
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['surname']}*</div>
              <input type="text" 
                     placeholder={this.props.locales['surname']} 
                     name="usurname"
                     ref="usurname"
                     className={`input form__input 
                                ${this.handleError('usurname', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['email']}*</div>
              <input type="email" 
                     placeholder="mailto@gmail.com"
                     name="umail" 
                     ref="umail"
                     className={`input form__input 
                                ${this.handleError('umail', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
            <label className="cart-form__label">
              <div className="cart-form__name">{this.props.locales['city']}*</div>
              <input type="text" 
                     placeholder={this.props.locales['city']} 
                     name="ucity"
                     ref="ucity"
                     className={`input form__input 
                                ${this.handleError('ucity', 
                                        this.state.errors, this.state.formSubmited)}
                                 cart-form__input`} />
            </label>
          </div>
          <button type="submit" className="button button_green cart-form__submit">
            {this.state.send}!
          </button>
        </form>
      )
    }
}

export default FormCart;
  
          
