import logo from '../logo.svg';
//import EarthquakeInfo from '../components/EarthquakeInfo.js';
import React from 'react';
//import PropTypes from 'prop-types';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

/* 
 * Style is used to set coordinate alignement from center of the object,
 * instead of the top left corner.
 * This component holds a state to provide info whether the earthquake info
 * is open or closed.
 */

export default class Beamer extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
      open: false
    };  
  }
    
    handleClick = (event) => {
	// This prevents ghost click.
	event.preventDefault();
	
	this.setState({
	    open: true,
	    anchorEl: event.currentTarget
	});
    };

    handleRequestClose = () => {
	this.setState({
	    open: false
	});
    };
    
    render() {
	return (
	    <div className="Beamer">
	      <img src={logo} onClick={this.handleClick} className="Beamer-sign" alt="beamer" style={{
		       position: 'absolute',
		       width: this.props.magnitude,
		       height: this.props.magnitude,
		       left: -this.props.magnitude / 2,
		   top: -this.props.magnitude / 2}}
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
 
