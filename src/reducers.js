import { combineReducers } from 'redux';

import {
    RECIEVE_EARTHQUAKES 
} from './actions';

const initalState = {
    earthquakes: []
};

function earthquakeReducer(state, action) {
    if(typeof state === 'undefined') state = initalState;
    switch (action.type) {
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
