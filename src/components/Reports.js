import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import NewReport from './NewReport.js';
import PropTypes from 'prop-types';

const uuidv1 = require('uuid/v1');

export default class Reports extends React.Component {

  state = {
    writing: false
  };

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
        onClick={this.props.close}
      />,
      <FlatButton
        label="Write New"
        primary={true}
        onClick={this.handleWriting}
	disabled={this.state.writing}
      />,
    ];
      
      const reports = [];
      if (!this.props.reports) //Check if there are no Reports
          reports.push(<p>No user reports yet.</p>);
      else {
          // Get inside first object which is "0"
          let tmp = this.props.reports[0];
          for(var key in tmp) {
              if(tmp.hasOwnProperty(key)) {
                  reports.push(
                      <div key={uuidv1()}>
                        <ListItem primaryText={tmp[key]['nickName']} secondaryText={<p>{tmp[key]['comment']}</p>} disabled={true}/>
                        <Divider />
                      </div>
                  );
              }
          }
          
      } 
      /*     TODO
             if (this.state.writing)
             reports.push(
             <div>
               <NewReport userName={"Marcus Granström"} submitNew={this.handleSubmit}/>
               <Divider />
             </div>
             );*/
      
      
    return (
        <Dialog
          title="User Reports"
          actions={actions}
          modal={true}
          open={this.props.open}
          autoScrollBodyContent={true}
          >
          <List>
            {reports}
          </List>
        </Dialog>
    );
  }
}

Reports.propTypes = {
    close: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};
