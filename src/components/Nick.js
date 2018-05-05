import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MaterialIcon from 'material-icons-react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import PropTypes from 'prop-types';

export default class NewReport extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
            textFieldValue: '',
            open: false
        };
    }

    _handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <p>{this.props.userName}</p>
        	    <IconMenu
                    iconButtonElement={<IconButton><MaterialIcon icon="account_circle"/></IconButton>}
                    onRequestChange={this.handleToggle}
                    open={this.state.open}
                >
                      <p>Change User Name</p>
                      <TextField
                        floatingLabelText={this.props.userName}
                        multiLine={true}
                        rows={3}
        	        value={this.state.textFieldValue}
        	        onChange={(e) => this._handleTextFieldChange(e)}
                        />
                        <FlatButton
                          label="Submit"
                          primary={true}
                          onClick={() => {console.log("Hello"); this.handleToggle();}}
                          />
        	    </IconMenu>
            </div>
        );
    }
}

NewReport.propTypes = {
    userName: PropTypes.string.isRequired
};
