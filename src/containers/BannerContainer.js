import { connect } from 'react-redux';
import Banner from '../components/Banner.js';
import { fetchEarthquakes } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  fetchEarthquakes: (start, end, magnitude) => dispatch(fetchEarthquakes(start, end, magnitude))
})

export default connect(
  mapDispatchToProps
)(Banner);
