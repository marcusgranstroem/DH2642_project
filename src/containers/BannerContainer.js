import { connect } from 'react-redux';
import Banner from '../components/Banner.js';
import { fetchEarthquakes } from '../actions';

const mapStateToProps = (state) => {
    return {
	start: state.earthquakeReducer.start,
	end: state.earthquakeReducer.end,
	mag: state.earthquakeReducer.mag
    };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEarthquakes: (start, end, magnitude) => dispatch(fetchEarthquakes(start, end, magnitude))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner);
