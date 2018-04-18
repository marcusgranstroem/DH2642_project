import { combineReducers } from 'redux';

import {
    RECIEVE_EARTHQUAKES,
    REQUEST_EARTHQUAKES
} from './actions';

const initalState = {
    earthquakes: [],
    start: null,
    end: null,
    mag: null
};

function earthquakeReducer(state, action) {
    if(typeof state === 'undefined') state = initalState;
    switch (action.type) {
    case REQUEST_EARTHQUAKES:
	return Object.assign({}, state, {start: action.start, end: action.start, mag: action.mag});
    case RECIEVE_EARTHQUAKES:
	return Object.assign({}, state, {earthquakes: action.earthquakes});
    default:
	return state;
    }
}

const quakeSeeReducer = combineReducers({
    earthquakeReducer
});

export default quakeSeeReducer;
