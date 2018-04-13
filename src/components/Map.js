import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_map_api_key from '../config.js';

class Map extends Component {

  static defaultProps = {
    center: { lat: 0, lng: 0 },
    zoom: 1
  };

  render() {
    return (
      <div className="Map" style={{ height: '88.9vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google_map_api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
