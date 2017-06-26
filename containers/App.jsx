import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';

import NavBar from './NavBar';

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
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);