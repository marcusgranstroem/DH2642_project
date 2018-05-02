import App from './App';
import 'babel-polyfill';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import quakeSeeReducer from './reducers';
import { fetchEarthquakes } from './actions';
import './index.css';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import createDebounce from 'redux-debounced';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const loggerMiddleware = createLogger();


const store = createStore(
  quakeSeeReducer,
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
 
