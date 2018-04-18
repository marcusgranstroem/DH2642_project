import logo from './logo.svg';
import Map from './components/Map';
import React, { Component } from 'react';

import './css/App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">QuakeSee</h1>
        </header>
        <Map/>
      </div>
    );
  }
}

export default App;
