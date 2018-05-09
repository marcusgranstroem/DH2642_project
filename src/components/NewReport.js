import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

export default class NewReport extends React.Component {
    constructor(props) {
	super(props);
	this.state = {textFieldValue: ''};
    }

    _handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    }

    render() {
        return (
	    <form>
              <p>{this.props.userName}</p>
              <TextField
                floatingLabelText="Write your Earthquake Experience."
                multiLine={true}
                rows={3}
                autoFocus
	        value={this.state.textFieldValue}
	        onChange={(e) => this._handleTextFieldChange(e)}
                />
                <FlatButton
                  label="Submit"
                  primary={true}
                  onClick={() => {
                      this.props.postReport(this.props.quakeId, this.props.userName, this.state.textFieldValue);
                      this.props.submitNew(); // Just to modify local state of parent
                      }
                  }
                  />
	    </form>
        );
    }
}

NewReport.propTypes = {
    userName: PropTypes.string.isRequired,
    submitNew: PropTypes.func.isRequired
};
