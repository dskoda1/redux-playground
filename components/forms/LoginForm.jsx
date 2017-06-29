import React, {Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField
} from 'redux-form-material-ui'
import { Field, reduxForm, formValueSelector } from 'redux-form'

// validation functions
const required = value => (value == null ? 'Required' : undefined)

class LoginForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={TextField}
          floatingLabelText="Username"
          validate={required}
          ref="username"
          withRef
        />
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm)
