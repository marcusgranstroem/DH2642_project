import React from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

export default class Login extends React.Component {

    render() {
	return (
	    <div className="Login">
	      <GoogleLogin
          className="Login-button"
		clientId="11679518606-kas6j3im0oh402929qfg1q5ciup4o9b5.apps.googleusercontent.com"
		buttonText="Login"
		onSuccess={this.props.handleLogin}
		onFailure={this.props.errorLogin}
		/>
	    </div>
	);
    }
}

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    errorLogin: PropTypes.func.isRequired
};
