import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import NavBar from './NavBar';
import { LoginForm, RegisterForm } from '../components/forms'
import * as AuthActions from '../actions/auth';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <NavBar />
            <Fragment forRoute="/login">
              <LoginForm
                handleSubmit={this.props.actions.login}
                />
            </Fragment>
            <Fragment forRoute="/register">
              <RegisterForm />
            </Fragment>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,

};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
