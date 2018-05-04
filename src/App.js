import BannerContainer from './containers/BannerContainer.js';
import firebase from './firebase';
import MapContainer from './containers/MapContainer.js';
import React, { Component } from 'react';
import SearchSnackContainer from './containers/SearchSnackContainer.js';

import './css/App.css';

class App extends Component {
    
    render() {
	return (
	  <div className="App">
		<BannerContainer/>
		<MapContainer/>
                <SearchSnackContainer/>
	  </div>
	);
    }
}

export default App;
