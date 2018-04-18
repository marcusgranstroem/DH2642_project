import logo from '../logo.svg';
import React from 'react';
import PropTypes from 'prop-types';

const Beamer = ({lat, lng, magnitude}) => (
  <div className="Beamer">
	  <img src={logo} className="Beamer-sign" alt="beamer" style={{
		  position: 'absolute',
		  width: magnitude,
		  height: magnitude,
		  left: -magnitude / 2,
      top: -magnitude / 2}}
	  />
  </div>
);

Beamer.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  magnitude: PropTypes.number.isRequired
};

export default Beamer;
