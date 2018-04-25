import React from 'react';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

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
	     value={this.state.textFieldValue}
	     onChange={(e) => this._handleTextFieldChange(e)}
             />
           <FlatButton
             label="Submit"
             primary={true}
             onClick={() => this.props.submitNew(this.state.textFieldValue)}
             />
	 </form>
     );
 }   
}

