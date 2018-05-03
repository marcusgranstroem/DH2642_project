import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import PropTypes from 'prop-types';

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

EarthquakeInfo.propTypes = {
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    mag: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    quakeId: PropTypes.string.isRequired,
    fetchUserReports: PropTypes.func.isRequired
};

export default EarthquakeInfo;
