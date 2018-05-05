import { combineReducers } from 'redux';

import {
    CLOSE_REPORTS,
    INVALIDATE_EARTHQUAKES,
    RECIEVE_EARTHQUAKES,
    REQUEST_EARTHQUAKES,
    RECIEVE_REPORTS,
    REQUEST_REPORTS,
    USER_LOGIN,
    USER_LOGIN_FAILED,
    POST_USER_REPORT,
    CLOSE_ERROR
} from './actions';

const initalEarthquakeState = {
    earthquakes: [],
    overflow: false,
    searching: false
};

const initalReportsState = {
    displayReports: false,
    userReports: [],
    quakeId: 0
};

const initalLoginState = {
    userName: "",
    isLoggedIn: false
};

const initalErrorState = {
    displayError: false,
    errorMessage: {error: "", details: ""}
};

function earthquakeReducer(state, action) {
    if(typeof state === 'undefined') state = initalEarthquakeState;
    switch (action.type) {
    case REQUEST_EARTHQUAKES:
        return Object.assign({}, state, {searching: true});
    case RECIEVE_EARTHQUAKES:
	return Object.assign({}, state, {earthquakes: action.earthquakes, overflow: action.overflow, searching: false});
    default:
	return state;
  }
}

function reportsReducer(state, action) {
    if(typeof state === 'undefined') state = initalReportsState;
    switch (action.type) {
    case CLOSE_REPORTS:
        return Object.assign({}, state, {displayReports: false});
    case REQUEST_REPORTS:
        return Object.assign({}, state, {displayReports: true, quakeId: action.quakeId});
    case RECIEVE_REPORTS:
        return Object.assign({}, state, {userReports: action.recievedReports});
    case POST_USER_REPORT:
        return state;
    default:
        return state;
    }
}

function loginReducer(state, action) {
     if(typeof state === 'undefined') state = initalLoginState;
    switch (action.type) {
    case USER_LOGIN:
        return Object.assign({}, state, {userName: action.nickName, isLoggedIn: true});
    default:
        return state;
    }
}

function errorReducer(state, action) {
    if(typeof state === 'undefined') state = initalErrorState;
   switch (action.type) {
   case INVALIDATE_EARTHQUAKES:
       return Object.assign({}, state, {errorMessage: action.error, displayError: true});
   case USER_LOGIN_FAILED:
       return Object.assign({}, state, {errorMessage: action.error, displayError: true});
   case CLOSE_ERROR:
       return Object.assign({}, state, {displayError: false});
   default:
       return state;
   }
}

const quakeSeeReducer = combineReducers({
    earthquakeReducer,
    reportsReducer,
    loginReducer,
    errorReducer
});

export default quakeSeeReducer;
