import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {

    responseGoogle = (response) => {
	console.log(response);
    };
 
    render() {
	return (
	    <div>
	      <GoogleLogin
		clientId="11679518606-kas6j3im0oh402929qfg1q5ciup4o9b5.apps.googleusercontent.com"
		//buttonText="Login"
		onSuccess={this.responseGoogle}
		onFailure={this.responseGoogle}
		/>
	    </div>
	);
    }
}

