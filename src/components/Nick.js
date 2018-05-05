import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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

    handleSubmit = () => {
        this.setState({
            textFieldValue: '',
            open: false
        });
    }

    render() {
        return (
            <div className="User-menu">
                <p>{this.props.userName}</p>
        	    <IconMenu
                    iconButtonElement={<FloatingActionButton mini={true} className="User-button"><MaterialIcon icon="account_circle"/></FloatingActionButton>}
                    onRequestChange={this.handleToggle}
                    open={this.state.open}
                >
                      <p className="User-name">Change User Name</p>
                      <TextField
                        floatingLabelText={this.props.userName}
                        multiLine={true}
                        rows={1}
        	        value={this.state.textFieldValue}
        	        onChange={(e) => this._handleTextFieldChange(e)}
                        />
                        <FlatButton
                          label="Submit"
                          primary={true}
                          onClick={() => {console.log("Hello"); this.handleSubmit();}}
                          />
        	    </IconMenu>
            </div>
        );
    }
}

NewReport.propTypes = {
    userName: PropTypes.string.isRequired
};
