import BannerContainer from './containers/BannerContainer.js';
<<<<<<< HEAD
import MapContainer from './containers/MapContainer.js';
=======
import SearchSnackContainer from './containers/SearchSnackContainer.js';
>>>>>>> 096bcdeb4e6e0ab1bb5ba1b52f0f5ea955f3174b
import React, { Component } from 'react';
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
