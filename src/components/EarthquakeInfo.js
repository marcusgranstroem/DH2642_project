import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const EarthquakeInfo = ({name, lat, long, mag, date }) => (
    <div className="Earthquake-info">
      <Menu>
    	<MenuItem primaryText={'Place: ' + name} disabled={true}/>
        <MenuItem primaryText={'Latitude: ' + lat} disabled={true}/>
        <MenuItem primaryText={'Longitude: ' + long} disabled={true}/>
        <MenuItem primaryText={'Magnitude: ' + mag} disabled={true}/>
        <MenuItem primaryText={'Time: ' + date} disabled={true}/>
      </Menu>
    </div>
);

export default EarthquakeInfo;
