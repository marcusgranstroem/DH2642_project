import React from 'react';

const EarthquakeInfo = ({name, magnitude, lat, lon, date}) => (
    <div className="Earthquake-info">
      <p>Name: {name}</p>
      <p>magnitude: {magnitude}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
      <p>Date: {date}</p>
    </div>
);

export default EarthquakeInfo;
