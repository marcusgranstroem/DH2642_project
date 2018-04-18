import { connect } from 'react-redux';
import Map from '../components/Map.js';

const mapStateToProps = (state) => {
    return {
	quakes: state.earthquakes
    };
};

const Earthquakes = connect(
  mapStateToProps
)(Map);

