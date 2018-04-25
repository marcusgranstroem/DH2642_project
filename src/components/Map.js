import Beamer from './Beamer.js';
import google_map_api_key from '../config.js';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import map_style from '../map_style.js';
import ReportsContainer from '../containers/ReportsContainer.js'; 

const Map = ({center={lat:0, lng:0}, zoom=4, options={minZoom: 4, maxZoom: 13, styles: map_style 
}, quakes}) => (
    <div className="Map" style={{ height: '88.9vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_map_api_key }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}
        >
	{quakes.map((earthquake) =>
		    <Beamer
		    key={earthquake.properties.ids}
		    id={earthquake.properties.ids}
		    lat={earthquake.geometry.coordinates[1]}
		    lng={earthquake.geometry.coordinates[0]}
		    magnitude={earthquake.properties.mag * 20}
		    />
		   )
	}
        </GoogleMapReact>
	<ReportsContainer/>
    </div>
);

export default Map;
