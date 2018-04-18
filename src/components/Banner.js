import React from 'react';
import logo from '../logo.svg';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

const Banner = ({start, end, mag, fetchEarthquakes}) => (
<header className="App-header">
    <h2 className="Developed-by">Developed by Nathan Bhat <br />& Marcus Granström</h2>
    <div className="App-logotitle">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">QuakeSee</h1>
    </div>
    <Navbar.Form pullRight>
    <FormGroup className="Search-bar">
        <label>
            Minimum Magnitude:
            <FormControl inputRef={(ref) => {this.magnitude = ref}} type="number" placeholder="Mag" onChange={() => fetchEarthquakes(new Date(this.starttime.value).toISOString(), new Date(this.endtime.value).toISOString(), this.magnitude.value)}/>
        </label>
        <label>
            Start Time:
            <FormControl inputRef={(ref) => {this.starttime = ref}} type="date" onChange={() => fetchEarthquakes(new Date(this.starttime.value).toISOString(), new Date(this.endtime.value).toISOString(), this.magnitude.value)}/>
        </label>
        <label>
            End Time:
            <FormControl inputRef={(ref) => {this.endtime = ref}} type="date" onChange={() => fetchEarthquakes(new Date(this.starttime.value).toISOString(), new Date(this.endtime.value).toISOString(), this.magnitude.value)}/>
        </label>
    </FormGroup>{' '}
    </Navbar.Form>
</header>
);

export default Banner;
