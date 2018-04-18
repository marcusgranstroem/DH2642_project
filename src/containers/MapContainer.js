import { connect } from 'react-redux';
import Map from '../components/Map.js';

const mapStateToProps = (state) => {
    return {
	quakes: state.earthquakeReducer.earthquakes
    };
};

export default connect(
  mapStateToProps
)(Map);

