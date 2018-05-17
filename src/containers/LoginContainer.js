import { connect } from 'react-redux';
import Login from '../components/Login.js';
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
)(Login);
