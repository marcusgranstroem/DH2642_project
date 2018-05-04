import App from './App';
import 'babel-polyfill';
import createDebounce from 'redux-debounced';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { fetchEarthquakes } from './actions';
import firebase from './firebase';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import quakeSeeReducer from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';

import './index.css';

const loggerMiddleware = createLogger();


const store = createStore(
    quakeSeeReducer,
    firebase.database,
    applyMiddleware(
        createDebounce(), //Allows for debouncing
	thunkMiddleware, // lets us dispatch() functions
	loggerMiddleware // neat middleware that logs actions
    )
);

store.dispatch(fetchEarthquakes());

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	<App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
 
