import MapContainer from './containers/MapContainer.js';
import BannerContainer from './containers/BannerContainer.js';
import React, { Component } from 'react';
import './css/App.css';

class App extends Component {

  render() {
	  return (
	    <div className="App">
        <BannerContainer/>
        <MapContainer/>
	    </div>
	  );
  }
}

export default App;
