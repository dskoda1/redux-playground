import React, { PropTypes, Component } from 'react';
import { IconMenu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

export default class LoggedOut extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="Login"
          onTouchTap={this.props.loginClickAction}
        />
        <MenuItem
          primaryText="Register"
          onTouchTap={this.props.registerClickAction}
        />
      </IconMenu>
    )
  }
}

LoggedOut.propTypes = {
  loginClickAction: PropTypes.func.isRequired,
  registerClickAction: PropTypes.func.isRequired
}
