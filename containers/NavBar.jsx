import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth'

import {
  AppBar,
  RaisedButton
} from 'material-ui';

const defaultStyle = {
  margin: 20,
  textAlign: 'center'
}

class NavBar extends Component {

  constructor(props, context) {
    super(props, context);

    this.loginAction = this.loginAction.bind(this);
    this.getAuthComponent = this.getAuthComponent.bind(this);
  }

  getAuthComponent() {
    const { auth, actions } = this.props;
    if (auth.loggedIn) {
      return (
        <RaisedButton
          label="Logout"
          onTouchTap={actions.logout}
        />
      )
    }
    else {
      return (
        <RaisedButton
          label="Login"
          onTouchTap={this.loginAction}
        />
      )
    }
  }

  loginAction() {
    const { actions } = this.props;
    actions.login('user', 'pass');
  }

  render() {
    const { auth, actions } = this.props;

    return (
      <header className="header">
        <AppBar
          title="Redux Playground"
          iconElementRight={this.getAuthComponent()}
        />
      </header>
    )
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.root.auth
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
)(NavBar);
