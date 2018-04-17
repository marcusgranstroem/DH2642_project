import logo from './logo.svg';
import Map from './components/Map';
import React, { Component } from 'react';
import { Navbar, Form, FormGroup, FormControl } from 'react-bootstrap';

import './css/App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="Developed-by">Developed by Nathan Bhat <br />& Marcus Granström</h2>
          <div className="App-logotitle">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">QuakeSee</h1>
          </div>
          <Navbar.Form pullRight>
			<FormGroup className="Search-bar">
				<FormControl className="Small-search" type="text" placeholder="Mag" />
				<FormControl className="Small-search" type="text" placeholder="Start Date" />
				<FormControl className="Small-search" type="text" placeholder="End Date" />
			</FormGroup>{' '}
		  </Navbar.Form>
        </header>
        <Map/>
      </div>
    );
  }
}

export default App;
