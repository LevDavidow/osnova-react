'use strict';

import React, {PropTypes} from 'react';
import handleApplicationForm from '../functions/handleApplicationForm';
import sendForm from '../functions/sendForm';

class ApplicationForm  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmited: false,
      filename: this.props.locales['fileIsNotDefined'],
      sendText: this.props.locales['submit'],
      values: {},
      errors: {}
    }
  }
  onFormSubmit(e) {
    e.preventDefault();

    if(this.refs.ufile.files.length === 0) {
      this.setState({
        ...this.state,
        filename: this.props.locales['youShouldSetTheFile']
      });
      return;
    }

    const values = {
      umsg: this.refs.umsg.value,
      ucontacts: this.refs.ucontacts.value,
      uname: this.refs.uname.value,
      ufile: this.refs.ufile.files[0]
    }
    
    

    const validation = handleApplicationForm(values, this.props.ajax);
    

    if(validation.verified === false) {
      const errors = {};

      validation.errors.forEach(error => {
        errors[error] = true
      });

      this.setState({
        formSubmited: true,
        filename: this.props.locales['fileIsNotDefined'],
        sendText: this.props.locales['submit'],
        errors,
        values
      });
    }else {
      
      e.persist();

      const handleSubmit = (res) => {
        if(res) {
          console.log(res);
        }
        
        this.setState({
          ...this.state,
          formSubmited: false,
          filename: this.props.locales['fileIsNotDefined'],
          sendText: this.props.locales['submit'],
          values: {},
          errors: {}
        });
        e.nativeEvent.target.reset();
        
        this.props.enableModalClosing();
      }
      
      this.setState({
        formSubmited: true,
        sendText: this.props.locales['submiting'],
        errors: {},
        values: {}
      });

      const dataToSend = Object.keys(values).map(key => {
        return {
          'name': key,
          'value': values[key]
        }
      });

      sendForm({...this.props.ajax,
        callback: handleSubmit
      })(dataToSend, 'application');
    
    }
  }
  
  handleFileChange(e) {
    const filename = e.target.files[0].name || false;
  
    if(filename) {
  
      const values = {
        umsg: this.refs.umsg.value,
        ucontacts: this.refs.ucontacts.value,
        uname: this.refs.uname.value
      }
  
      this.setState({
        ...this.state,
        values,
        filename
      });
  
    }
  }
  
  render() {
    let unameResult = '',
        ucontactsResult = '',
        umsgResult = '';
    
    if (this.state.formSubmited === true){
      unameResult = (this.state.errors.uname)
                    ? 'form__input_false'
                    : 'form__input_true';
      ucontactsResult = (this.state.errors.ucontacts)
                    ? 'form__input_false'
                    : 'form__input_true';
      umsgResult =  (this.state.errors.umsg)
                    ? 'form__input_false'
                    : 'form__input_true';
    }

    return (
      <form action='#' onSubmit={this.onFormSubmit.bind(this)} className='form'>
        <p className='upload-form__headling'>{this.props.locales.contactData}</p>
        <p className='upload-form__description upload-form__description_margined'>{this.props.locales.contactUsWithAnyQuestionsAndProposals}</p>
        <div className='upload-form__inputs'>
          <input type='text'
                 name='uname'
                 ref='uname'
                 defaultValue={this.state.values.uname}
                 placeholder={this.props.locales.name}
                 className={`form__input upload-form__input ${unameResult}`}/>
          <textarea name='umsg'
                    ref='umsg'
                    defaultValue={this.state.values.umsg}
                    placeholder={this.props.locales['nameOrDescriptionOfTheProduct']}
                    className={`fform__textarea upload-form__textarea ${umsgResult}`} >
          </textarea>
          <input type='text'
                 name='ucontacts'
                 ref='ucontacts'
                 defaultValue={this.state.values.ucontacts}
                 placeholder={'+380577770778'}
                 className={`form__input upload-form__input ${ucontactsResult}`} />
        </div>
        <div className='upload-form__file'>
          <p className='upload-form__headling'>
            {this.props.locales['uploadAnImage']}
          </p>
          <label className='input-file'>
            <p className='upload-form__filetext'>
              {this.state.filename}
            </p>
            <button type='button' className='button button_white'>
              {this.props.locales['setFile']}
            </button>
            <input type='file'
                   name='ufile'
                   ref='ufile'
                   onChange={this.handleFileChange.bind(this)}
                   defaultValue={this.state.values.ufile}
                   className='upload-form__fileinput' />
          </label>
        </div>
        <button type='submit' className='button button_green upload-form__submit'>
          {this.state.sendText}
        </button>
      </form>
)
  }
}

ApplicationForm.propTypes = {
  locales: PropTypes.object,
  ajax: PropTypes.object
}

export default ApplicationForm;
