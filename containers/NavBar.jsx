import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth';
import LoggedIn from '../components/LoggedIn';
// import LoggedOut from '../components/LoggedOut';

import {
  AppBar,
  RaisedButton
} from 'material-ui';
import { IconMenu, MenuItem, MoreVertIcon, IconButton } from 'material-ui';


const defaultStyle = {
  margin: 20,
  textAlign: 'center'
}


class LoggedOut extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Login" />
        <MenuItem primaryText="Register" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }
}

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.loginAction = this.loginAction.bind(this);
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
          iconElementRight={
            auth.loggedIn
            ?
              <LoggedIn
                logoutAction={actions.logout}
                user={auth.user}
              />
            :
              <LoggedOut
                loginAction={this.loginAction}
                registerAction={actions.register}
              />
          }
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
