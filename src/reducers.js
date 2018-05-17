import {combineReducers} from 'redux';

import {
    CLOSE_ERROR,
    CLOSE_REPORTS,
    ERROR_NICKNAME_CHANGE,
    INVALIDATE_EARTHQUAKES,
    POST_USER_REPORT,
    RECIEVE_EARTHQUAKES,
    RECIEVE_REPORTS,
    REQUEST_EARTHQUAKES,
    REQUEST_REPORTS,
    UPDATE_NICKNAME,
    USER_LOGIN,
    USER_LOGIN_FAILED
} from './actions';

const initalEarthquakeState = {
    earthquakes: [],
    overflow: false,
    searching: false
};

const initalReportsState = {
    displayReports: false,
    userReports: {},
    quakeId: 0
};

const initalLoginState = {
    userName: "",
    userToken: "",
    isLoggedIn: false
};

const initalErrorState = {
    displayError: false,
    errorMessage: {
        error: "",
        details: ""
    }
};

function earthquakeReducer(state, action) {
    if (typeof state === 'undefined') state = initalEarthquakeState;
    switch (action.type) {
        case REQUEST_EARTHQUAKES:
            return Object.assign({}, state, {
                searching: true
            });

        case RECIEVE_EARTHQUAKES:
            return Object.assign({}, state, {
                earthquakes: action.earthquakes,
                overflow: action.overflow,
                searching: false
            });

        default:
            return state;
    }
}

function reportsReducer(state, action) {
    if (typeof state === 'undefined') state = initalReportsState;
    switch (action.type) {
        case CLOSE_REPORTS:
            return Object.assign({}, state, {
                displayReports: false
            });

        case REQUEST_REPORTS:
            return Object.assign({}, state, {
                displayReports: true,
                quakeId: action.quakeId
            });

        case RECIEVE_REPORTS:
            return Object.assign({}, state, {
                userReports: action.recievedReports
            });

        case POST_USER_REPORT:
            let merged;
            if (state.userReports) {
                merged = Object.assign(state.userReports, action.newPost);
            } else {
                merged = action.newPost;
            }
            return Object.assign({}, state, {
                userReports: merged
            });

        default:
            return state;
    }
}

function loginReducer(state, action) {
    if (typeof state === 'undefined') state = initalLoginState;
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                userName: action.nickName,
                userToken: action.userToken,
                isLoggedIn: true
            });

        case UPDATE_NICKNAME:
            return Object.assign({}, state, {
                userName: action.nickName
            });

        default:
            return state;
    }
}

function errorReducer(state, action) {
    if (typeof state === 'undefined') state = initalErrorState;
    switch (action.type) {
        case INVALIDATE_EARTHQUAKES:
            return Object.assign({}, state, {
                errorMessage: action.error,
                displayError: true
            });

        case USER_LOGIN_FAILED:
            return Object.assign({}, state, {
                errorMessage: action.error,
                displayError: true
            });

        case ERROR_NICKNAME_CHANGE:
            return Object.assign({}, state, {
                errorMessage: action.error,
                displayError: true
            });

        case CLOSE_ERROR:
            return Object.assign({}, state, {
                displayError: false
            });

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
