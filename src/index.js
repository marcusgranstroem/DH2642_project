import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {  fetchEarthquakes } from './actions';
import rootReducer from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);


store
    .dispatch(fetchEarthquakes('20170102', '20170103',2))
    .then(() => console.log(store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
