import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_map_api_key from '../config.js';
import Beamer from './Beamer.js';

/* JUST FOR TESTING */
class Map extends Component {

  static defaultProps = {
    center: { lat: 0, lng: 0 },
    zoom: 1
  };

  render() {
      console.log("thihihi");
      console.log(this.props.quakes);
    return (
      <div className="Map" style={{ height: '88.9vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_map_api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Beamer lat={59} lng={30} magnitude={40}/>
          <Beamer lat={50} lng={10} magnitude={60}/>
          <Beamer lat={62} lng={0} magnitude={120}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
