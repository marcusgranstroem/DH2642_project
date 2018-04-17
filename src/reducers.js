import { combineReducers } from 'redux';

import {
    RECIEVE_EARTHQUAKES 
} from './actions';

const initalState = {
    earthquakes: []
};

function earthquakes(state = initalState, action) {
    switch (action.type) {
    case RECIEVE_EARTHQUAKES:
	
	break;
    default:
	return state;
    }
}

const quakeSee = combineReducers({
    earthquakes
});

export default quakeSee;
