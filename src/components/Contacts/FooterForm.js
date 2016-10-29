'use strict';

import React, {PropTypes} from 'react';
import handleContactForm from '../../functions/handleContactForm';

class FooterForm  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmited: false,
      values: {},
      errors: {}
    }
  }
  onFormSubmit(e) {
    e.preventDefault();

    const values = {
      umsg: this.refs.umsg.value,
      umail: this.refs.umail.value,
      uname: this.refs.uname.value,
      country: this.props.currentCountry
    }
    
    const validation = handleContactForm(values, this.props.ajax);
    

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
        formSubmited: false,
        values: {},
        errors: {}
      });
      e.nativeEvent.target.reset();
    }

  }
  render() {
    let unameResult = '',
        umailResult = '',
        umsgResult = '';
    
    if (this.state.formSubmited === true) {
      unameResult = (this.state.errors.uname) 
                    ? 'form__input_false'
                    : 'form__input_true';
      umailResult = (this.state.errors.umail) 
                    ? 'form__input_false'
                    : 'form__input_true';
      umsgResult =  (this.state.errors.umsg)
                    ? 'form__input_false'
                    : 'form__input_true';
    }

    return (
      <form action="#" 
            onSubmit={this.onFormSubmit.bind(this)} 
            className="footer-contacts__form footer-form form">
        <h3 className="footer-form__headling">
          {this.props.locales.callBack}
        </h3>
        <p className="footer-form__description">
          {this.props.locales.footerFormText}
        </p>
        <input name="uname" type="text"
               ref="uname" 
               defaultValue={this.state.values.uname}
               placeholder={this.props.locales.name} 
               className={`form__input footer-form__input ${unameResult}`}/>
        <input name="umail"
               ref="umail" 
               type="email"
               defaultValue={this.state.values.umail}
               placeholder={this.props.locales.enterEmail}
               className={`form__input footer-form__input ${umailResult}`}/>
        <textarea name="umsg"
                  ref="umsg" 
                  defaultValue={this.state.values.umsg}
                  placeholder={this.props.locales.message}
                  className={`form__textarea footer-form__textarea ${umsgResult}`}>
        </textarea>
        <button type="submit" className="footer-form__submit button button_green">
          {this.props.locales.submit}
        </button>
      </form>      
    )
  }
}

FooterForm.propTypes = {
  locales: PropTypes.object,
  country: PropTypes.string
}

export default FooterForm;
