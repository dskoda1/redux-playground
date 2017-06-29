import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'redux-little-router'

import * as AuthActions from '../actions/auth';
import LoggedIn from '../components/LoggedIn';
import LoggedOut from '../components/LoggedOut';

import {
  AppBar,
  RaisedButton
} from 'material-ui';
import { IconMenu, MenuItem, IconButton } from 'material-ui';

const defaultStyle = {
  margin: 20,
  textAlign: 'center'
}


class NavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.loginAction = this.loginAction.bind(this);
    this.dispatchLoginRoute = this.dispatchLoginRoute.bind(this);
    this.dispatchRegisterRoute = this.dispatchRegisterRoute.bind(this);
  }

  loginAction() {
    const { actions } = this.props;
    actions.login('user', 'pass');
  }

  dispatchLoginRoute() {
    this.props.dispatch(push('/login'))
  }

  dispatchRegisterRoute() {
    this.props.dispatch(push('/register'))
  }

  render() {
    const { auth, actions } = this.props;
    return (
      <header className="header">
        <AppBar
          title="Redux Playground"
          showMenuIconButton={false}
          onTitleTouchTap={() => this.props.dispatch(push('/'))}
          iconElementRight={
            auth.loggedIn
            ?
              <LoggedIn
                logoutAction={actions.logout}
                user={auth.user}
              />
            :
              <LoggedOut
                loginClickAction={this.dispatchLoginRoute}
                registerClickAction={this.dispatchRegisterRoute}
              />
          }
        />
      </header>
    )
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.root.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch),
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
