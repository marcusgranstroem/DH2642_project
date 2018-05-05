import { connect } from 'react-redux';
import Banner from '../components/Banner.js';
import { fetchEarthquakes, handleLogin, errorLogin } from '../actions';

const mapStateToProps = (state) => {
  return {
      searching: state.earthquakeReducer.searching
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchEarthquakes: (start, end, magnitude) => dispatch(fetchEarthquakes(start, end, magnitude)),
    handleLogin: (userToken) => dispatch(handleLogin(userToken)),
    errorLogin: (response) => dispatch(errorLogin(response))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
