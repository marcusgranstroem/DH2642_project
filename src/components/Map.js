import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_map_api_key from '../config.js';
import Beamer from './Beamer.js';

const Map = ({center={lat:0, lng:0}, zoom=1, quakes}) => (
    <div className="Map" style={{ height: '88.9vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_map_api_key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Beamer lat={59} lng={30} magnitude={40}/>
          <Beamer lat={50} lng={10} magnitude={60}/>
          <Beamer lat={62} lng={0} magnitude={120}/>
        </GoogleMapReact>
      </div>
);

export default Map;
