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

const loggerMiddleware = createLogger();

const store = createStore(
    quakeSeeReducer,
    applyMiddleware(
	thunkMiddleware, // lets us dispatch() functions
	loggerMiddleware // neat middleware that logs actions
    )
);


store
    .dispatch(fetchEarthquakes('20170102', '20170103',2))
    .then(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
