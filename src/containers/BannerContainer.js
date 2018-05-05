import { connect } from 'react-redux';
import Banner from '../components/Banner.js';
import { fetchEarthquakes } from '../actions';

const mapStateToProps = (state) => {
  return {
      searching: state.earthquakeReducer.searching,
      isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchEarthquakes: (start, end, magnitude) => dispatch(fetchEarthquakes(start, end, magnitude))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
