import BannerContainer from './containers/BannerContainer.js';
import MapContainer from './containers/MapContainer.js';
import React, { Component } from 'react';
import SearchSnackContainer from './containers/SearchSnackContainer.js';
import ErrorMessageContainer from './containers/ErrorMessageContainer.js';

import './css/App.css';

class App extends Component {

    render() {
    	return (
    	  <div className="App">
    		<BannerContainer/>
    		<MapContainer/>
            <SearchSnackContainer/>
            <ErrorMessageContainer/>
    	  </div>
    	);
    }
}

export default App;
