import React, {Component} from 'react'
import handleSubscribeForm from '../functions/handleSubscribeForm'
class SubscribeFormComponent extends Component {
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
      email: this.refs.email.value
    }
    
    const validation = handleSubscribeForm(values, this.props.ajax);
    
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
  render () {
    let emailResult = '';
     if (this.state.formSubmited === true){
      emailResult = (this.state.errors.email) 
                    ? 'form__input_false'
                    : 'form__input_true';
    }
    return (
    <form onSubmit={this.onFormSubmit.bind(this)} className="form">
      <input type="email" 
             name="email" 
             ref="email"
             defaultValue={this.state.values.email}
             placeholder={this.props.locales.enterEmail} 
             className={`form__input footer-subscribe__input ${emailResult}`}/>
      <button type="submit" className="footer-subscribe__submit button button_green">
        {this.props.locales.subscribe}
      </button>
    </form>
    )
  }
}
export default SubscribeFormComponent;