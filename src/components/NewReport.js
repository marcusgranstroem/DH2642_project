import React from 'react';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

const NewReport = ({userName, submitNew}) => (
    <form>
        <p>{userName}</p>
        <TextField
            floatingLabelText="Write your Earthquake Experience."
            multiLine={true}
            rows={3}
        />
        <FlatButton
          label="Submit"
          primary={true}
          onClick={() => submitNew()}
        />
    </form>
);

export default NewReport;


/*
<ListItem
    primaryText={userName}
    children={
        <TextField
            floatingLabelText="Write your Earthquake Experience."
            multiLine={true}
            rows={3}
            inputRef={this.message}
        />
    }
    secondaryText={
        <FlatButton
          label="Submit"
          primary={true}
          onClick={() => submitNew(this.message.value)}
        />
    }
    disabled={true}
/>
*/
