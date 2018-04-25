import MapContainer from './containers/MapContainer.js';
import BannerContainer from './containers/BannerContainer.js';
import Reports from './components/Reports.js';
import React, { Component } from 'react';
import './css/App.css';

class App extends Component {

  render() {
	  return (
	    <div className="App">
        <BannerContainer/>
        <MapContainer/>
        <Reports/>
	    </div>
	  );
  }
}

export default App;
