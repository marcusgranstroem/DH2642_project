import { combineReducers } from 'redux';

import {
    RECIEVE_EARTHQUAKES 
} from './actions';

const initalState = {
    earthquakes: []
};

function earthquakeReducer(state = initalState, action) {
    switch (action.type) {
    case RECIEVE_EARTHQUAKES:
	return Object.assign({}, state, {earthquakes: action.earthquakes});
    default:
	return state;
    }
}

const quakeSee = combineReducers({
    earthquakeReducer
});

export default quakeSee;
