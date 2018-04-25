import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import NewReport from './NewReport.js';

export default class Reports extends React.Component {

  state = {
    writing: false
  };

//  handleOpen = () => {
//    this.setState({open: true});
//  };
//
//  handleClose = () => {
//    this.setState({open: false});
//  };

  handleWriting = () => {
    this.setState({writing: true});
  };

  handleSubmit = (text) => {
      console.log(text);
      this.setState({writing: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Write New"
        primary={true}
        onClick={this.handleWriting}
      />,
    ];

    const reports = [];
    if (false) //Check if there are no Reports
        reports.push(<p>No user reports yet.</p>);
    else //example
        reports.push(
            <div>
                <ListItem primaryText="Nathan Bhat" secondaryText={<p>I was there.</p>} disabled={true}/>
                <Divider />
            </div>
        );

    if (this.state.writing)
        reports.push(
            <div>
                <NewReport userName={"Marcus Granström"} submitNew={this.handleSubmit}/>
                <Divider />
            </div>
        )

      console.log("Hello this is me, the result. Open is now: " + this.props.open);
      
    return (
        <Dialog
          title="User Reports"
          actions={actions}
          modal={true}
          open={this.props.open}
	  // TODO
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          >
          <List>
            {reports}
          </List>
        </Dialog>
    );
  }
}
