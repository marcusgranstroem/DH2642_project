import { combineReducers } from 'redux';

import {
    CLOSE_REPORTS,
    INVALIDATE_EARTHQUAKES,
    RECIEVE_EARTHQUAKES,
    REQUEST_EARTHQUAKES,
    RECIEVE_REPORTS,
    REQUEST_REPORTS,
    USER_LOGIN,
} from './actions';

const initalState = {
    earthquakes: [],
    displayReports: false,
    userReports: [],
    overflow: false,
    searching: false,
    userName: ""
};

function earthquakeReducer(state, action) {
    if(typeof state === 'undefined') state = initalState;
    switch (action.type) {
    case INVALIDATE_EARTHQUAKES:
        return state;
    case REQUEST_EARTHQUAKES:
        return Object.assign({}, state, {searching: true});
    case RECIEVE_EARTHQUAKES:
	return Object.assign({}, state, {earthquakes: action.earthquakes, overflow: action.overflow, searching: false});
    default:
	return state;
  }
}

function reportsReducer(state, action) {
    if(typeof state === 'undefined') state = initalState;
    switch (action.type) {
    case CLOSE_REPORTS:
        return Object.assign({}, state, {displayReports: false});
    case REQUEST_REPORTS:
        return Object.assign({}, state, {displayReports: true});
    case RECIEVE_REPORTS:
        return Object.assign({}, state, {userReports: action.recievedReports});
    default:
        return state;
    }
}

function loginReducer(state, action) {
     if(typeof state === 'undefined') state = initalState;
    switch (action.type) {
    case USER_LOGIN:
        return Object.assign({}, state, {userName: action.nickName});
    default:
        return state;
    }
}


const quakeSeeReducer = combineReducers({
    earthquakeReducer,
    reportsReducer,
    loginReducer
});

export default quakeSeeReducer;
