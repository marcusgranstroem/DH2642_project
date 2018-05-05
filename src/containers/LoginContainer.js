import { connect } from 'react-redux';
import Map from '../components/Map.js';
import { handleLogin, errorLogin } from '../actions.js';

const mapStateToProps = (state) => {
  return {
	quakes: state.earthquakeReducer.earthquakes
  };
};

const mapDispatchToProps = (dispatch) => ({
    handleLogin: (response) => dispatch(handleLogin(response)),
    errorLogin: (response) => dispatch(errorLogin(response))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
