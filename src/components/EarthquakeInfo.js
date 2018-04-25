import Menu from 'material-ui/Menu';
import React from 'react';

const EarthquakeInfo = ({name, lat, long, mag, date }) => (
    <div className="Earthquake-info">
      <Menu>
	<p> Place: {name} </p>
	<p> Latitude: {lat} </p>
	<p> Longitude: {long} </p>
	<p> Magnitude: {mag} </p>
	<p> Time: {date} </p>
      </Menu>
    </div>
);

export default EarthquakeInfo;
