import React from 'react';
import logo from '../logo.svg';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DatePicker from 'material-ui/DatePicker';
import Login from './Login.js';
import TextField from 'material-ui/TextField';
import MaterialIcon from 'material-icons-react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';

export default class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mag: 0,
            minDate: '',
            maxDate: ''
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    _handleTextFieldChange = (e) => {
        this.setState({
            mag: e.target.value
        });
    }

    _handleMinDateChange = (e, date) => {
        this.setState({
            minDate: date
        });
    }

    _handleMaxDateChange = (e, date) => {
        this.setState({
            maxDate: date
        });
    }

    render () {
        var loader;
        if (this.props.searching)
            loader = (<CircularProgress/>);
        return (
            <header className="App-header">
                <h2 className="Developed-by">Developed by Nathan Bhat <br />& Marcus Granström</h2>
                <div className="App-logotitle">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">QuakeSee</h1>
                </div>
                <div className="End-bar">
		            <Login/>
                    <FloatingActionButton mini={true} onClick={this.handleToggle} className="Search-button">
                        <MaterialIcon icon="search"/>
                    </FloatingActionButton>
                    <Drawer docked={false} width={300} open={this.state.open} openSecondary={true} onRequestChange={(open => this.setState({open}))}>
                        <TextField type="number" hintText="Minimum Magnitude" onChange={
                            (e) => {this._handleTextFieldChange(e);
                                this.props.fetchEarthquakes(this.state.minDate, this.state.maxDate, e.target.value);}
                        }/>
                        <DatePicker hintText="Minimum Date" onChange={
                            (e, date) => {this._handleMinDateChange(e, date);
                                this.props.fetchEarthquakes(date, this.state.maxDate, this.state.mag);}
                        }/>
                        <DatePicker hintText="Maximum Date" onChange={
                            (e, date) => {this._handleMaxDateChange(e, date);
                                this.props.fetchEarthquakes(this.state.minDate, date, this.state.mag);}
                        }/>
                        {loader}
                    </Drawer>
                </div>
            </header>
        );
    }
}

Banner.propTypes = {
    fetchEarthquakes: PropTypes.func.isRequired
}
