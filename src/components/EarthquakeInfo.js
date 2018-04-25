import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const EarthquakeInfo = ({name, lat, long, mag, date }) => (
    <div className="Earthquake-info">
      <Menu>
    	<MenuItem primaryText={'Place: '} secondaryText={name} disabled={true}/>
        <MenuItem primaryText={'Latitude: '} secondaryText={lat} disabled={true}/>
        <MenuItem primaryText={'Longitude: '} secondaryText={long} disabled={true}/>
        <MenuItem primaryText={'Magnitude: '} secondaryText={mag} disabled={true}/>
        <MenuItem primaryText={'Time: '} secondaryText={date} disabled={true}/>
      </Menu>
    </div>
);

export default EarthquakeInfo;
