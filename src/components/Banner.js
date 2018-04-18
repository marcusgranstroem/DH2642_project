import React from 'react';
import logo from '../logo.svg';
import { Navbar, Form, FormGroup, FormControl } from 'react-bootstrap';

const Banner = ({start, end, mag, fetchEarthquakes}) => (
<header className="App-header">
    <h2 className="Developed-by">Developed by Nathan Bhat <br />& Marcus Granström</h2>
    <div className="App-logotitle">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">QuakeSee</h1>
    </div>
    <Navbar.Form pullRight>
    <FormGroup className="Search-bar">
        <FormControl type="number" placeholder="Mag" />
        <FormControl type="date" />
        <FormControl type="date" />
    </FormGroup>{' '}
    </Navbar.Form>
</header>
);

export default Banner;
