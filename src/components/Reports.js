import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {List} from 'material-ui/List';
import LoginContainer from '../containers/LoginContainer.js';
import NewReportContainer from '../containers/NewReportContainer.js';
import PropTypes from 'prop-types';
import React from 'react';

// Unique ids
const uuidv1 = require('uuid/v1');

export default class Reports extends React.Component {

    state = {
        writing: false
    };

    handleWriting = () => {
        this.setState({writing: true});
    };
    
    handleSubmit = (text) => {
        this.setState({writing: false});
    };
    
    render() {
        var actions;
        if(this.props.isLoggedIn)
            actions = [
                <FlatButton label="Close"
                    secondary={true}
                    onClick={() => {this.props.close(); this.handleSubmit();}}
                />,
                <FlatButton label="Write New"
                    primary={true}
                    onClick={this.handleWriting}
                    disabled={this.state.writing || !this.props.isLoggedIn}
                />,
            ];
        else
            actions = [
                <FlatButton label="Close"
                    secondary={true}
                    onClick={() => {this.props.close(); this.handleSubmit();}}
                />,
                <LoginContainer/>,
            ];

        var reports = [];

        if (!this.props.reports) //Check if there are no Reports
            reports.push(<p>No user reports yet.</p>);
        else {
            let v = this.props.reports;

            // Loop trough all reports for current earthquake
            for(var key in v)
                if(v.hasOwnProperty(key)) {
                    var timestamp = new Date(Number(key));
                    var date = timestamp.toLocaleDateString();
                    var time = timestamp.toLocaleTimeString();

                    reports.push(
                        <div key={uuidv1()} className="Post">
                            <h3>
                                {v[key]['nickName'] + " " + date + " " + time}
                            </h3>
                            {<p>{v[key]['comment']}</p>}
                            <Divider/>
                        </div>
                    );
                }
        }

        if (this.state.writing)
            reports.push(
                <div key={uuidv1()}>
                    <NewReportContainer submitNew={this.handleSubmit}/>
                    <Divider/>
                </div>
            );

        return (
            <Dialog
                className="User-reports"
                title="User Reports"
                actions={actions}
                modal={true}
                open={this.props.open}
                autoScrollBodyContent={true}
                titleClassName="User-reports-title"
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
    open: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired
};
