import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class EarthquakeInfo extends React.Component {

    render() {
	return (
	    <div>
              <RaisedButton
		onClick={this.handleClick}
		label="Click me"
		/>
              <Popover
		open={this.state.open}
		anchorEl={this.state.anchorEl}
		anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		targetOrigin={{horizontal: 'left', vertical: 'top'}}
		onRequestClose={this.handleRequestClose}
		animation={PopoverAnimationVertical}
		>
		<Menu>
		  <MenuItem primaryText="Refresh" />
		  <MenuItem primaryText="Help &amp; feedback" />
		  <MenuItem primaryText="Settings" />
		  <MenuItem primaryText="Sign out" />
		</Menu>
              </Popover>
	    </div>
	);
    }    
}

