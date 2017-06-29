import React, { PropTypes, Component } from 'react';

import { IconMenu, MenuItem, MoreVertIcon, IconButton } from 'material-ui';

export default class LoggedIn extends Component {
  render() {
    const { logoutAction, user } = this.props;
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Hello, {user}"/>
        <MenuItem primaryText="Logout" onTouchTap={logoutAction} />
      </IconMenu>
    )
  }
};

LoggedIn.propTypes = {
  logoutAction: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
}
