import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import ReportsContainer from '../containers/ReportsContainer.js';

const EarthquakeInfo = ({name, lat, long, mag, date, quakeId, fetchUserReports}) => (
    <div className="Earthquake-info">
      <Menu width={300}>
    	<MenuItem primaryText={'Place: '} secondaryText={name} disabled={true}/>
        <MenuItem primaryText={'Latitude: '} secondaryText={lat} disabled={true}/>
        <MenuItem primaryText={'Longitude: '} secondaryText={long} disabled={true}/>
        <MenuItem primaryText={'Magnitude: '} secondaryText={mag} disabled={true}/>
        <MenuItem primaryText={'Time: '} secondaryText={date} disabled={true}/>
	<MenuItem primaryText={"User Reports"} onClick={() => {fetchUserReports(quakeId);}}/>
      </Menu>
    </div>
);

export default EarthquakeInfo;
