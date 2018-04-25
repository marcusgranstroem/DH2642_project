import { connect } from 'react-redux';
import EarthquakeInfo from '../components/EarthquakeInfo.js';

const mapStateToProps = (state, ownProps) => {
    var earthquake = 0;

    for (var i = 0; i < state.earthquakeReducer.earthquakes.length; i++) {
	let tmp = state.earthquakeReducer.earthquakes[i];
	if(tmp.properties.ids === ownProps.quakeId) {
	    earthquake = tmp;
	    break;
	}
    }

    let realDate = new Date(earthquake.properties.time);
  return {
      name: earthquake.properties.title,
      lat: earthquake.geometry.coordinates[1],
      long: earthquake.geometry.coordinates[0],
      mag: earthquake.properties.mag,
      date: realDate.toLocaleDateString() + " " + realDate.toLocaleTimeString()
  };
};

export default connect(
  mapStateToProps
)(EarthquakeInfo);
