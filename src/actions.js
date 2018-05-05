import fetch from 'cross-fetch';
import database from './firebase';

export const REQUEST_EARTHQUAKES = 'REQUEST_EARTHQUAKES';
function requestEarthquakes() {
  return {
    type: REQUEST_EARTHQUAKES,
    // TODO add loader
  };
}

export const RECIEVE_EARTHQUAKES = 'RECIEVE_EARTHQUAKES';
function recieveEarthquakes(json, limit) {
  return {
    type: RECIEVE_EARTHQUAKES,
    earthquakes: json.features,
    recieveAt: Date.now(),
    overflow: json.features.length === limit
  };
}

export const INVALIDATE_EARTHQUAKES = 'INVALIDATE_EARTHQUAKES';
export function invalidateEarthquakes() {
  return {
	 type: INVALIDATE_EARTHQUAKES
  };
}

export const REQUEST_REPORTS = 'REQUEST_REPORTS';
function requestReports(quakeId) {
  return {
      type: REQUEST_REPORTS,
      quakeId
  };
}

export const RECIEVE_REPORTS = 'RECIEVE_REPORTS';
function recieveReports(reports) {
    return {
        type: RECIEVE_REPORTS,
        recievedReports: reports
    };
}

export const CLOSE_REPORTS = 'CLOSE_REPORTS';
function closeReports() {
    return {
        type: CLOSE_REPORTS
    };
}

export const USER_LOGIN = 'USER_LOGIN';
function userLogin(nickName) {
    return {
        type: USER_LOGIN,
        nickName: nickName
    };
}

export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
function userLoginFailed(error) {
    return {
        type: USER_LOGIN_FAILED,
        error: error
    };
}

export const POST_USER_REPORT  = 'POST_USER_REPORT';
function postUserReport(post) {
    return {
        type: POST_USER_REPORT,
        newPost: post
    };
}

/*
 * Fetch earthquakes from https://earthquake.usgs.gov
 * Result is limited to reduce the amount of data recieved from
 */
export function fetchEarthquakes(start=0, end=0, magnitude=0) {
    const thunk = dispatch => {
  	// Limit amount of return values
  	var limit = 200;
  	dispatch(requestEarthquakes());

  	if(magnitude < 0) {
  	    console.error("Magnitude was set to" + magnitude);
  	    magnitude = 0;
  	}
  	// API only handles timeformat in ISO8601
  	if(start !== 0 && start !=="") {
  	    let d = new Date(start);
  	    start = d.toISOString();
  	} else {
  	    let d = new Date((new Date().valueOf() - 1000*3600*24));
  	    start = d.toISOString();
  	}

  	if(end !== 0 && end !=="") {
  	    let e = new Date(end);
  	    end = e.toISOString();
  	} else {
  	    let d = new Date();
  	    end = d.toISOString();
  	}

        let url =
            `https://earthquake.usgs.gov/fdsnws/event/1/query?` +
            `format=geojson&` +
            `starttime=${start}&` +
            `endtime=${end}&` +
            `minmagnitude=${magnitude}&` +
            `limit=${limit}`;

  	return fetch(url)
    .then(
        response => response.json()
    )
            .then(json =>
                  // Here, we update the app state with the results of the API call.
                  dispatch(recieveEarthquakes(json, limit))
                 )
            .catch(
                (error) => {dispatch(invalidateEarthquakes());
                            console.error('An error occurred. ', error);}
            );
    };
    thunk.meta = {
        debounce: {
            time: 400,
            key: 'SEARCH'
        }
    };
    return thunk;
}

export function fetchUserReports(quakeId) {
    const thunk = dispatch => {
        //let reports = [];
        dispatch(requestReports(quakeId));

        // Callback function to retrieve all values from path in db
        //var callback = snap => {
          //  reports.push(snap.val());
        //};

        database.ref('/userReports/' + quakeId + '/').once("value")
            .then((reports) => {
                dispatch(recieveReports(reports.val()));
            });
    };
    return thunk;
}

export function closeUserReports() {
    const thunk = dispatch => {
	dispatch(closeReports());
    };
    return thunk;
}

export function handleLogin(response) {
    const thunk = dispatch => {

        let userToken = response.googleId;
        database.ref('/userProfiles/' + userToken + '/nickName/').once("value")
            .then(nickName =>
                  {
                      dispatch(userLogin(nickName.val()));
                  }
            );
    };
    return thunk;
}

export function errorLogin(response) {
    const thunk = dispatch => {
        dispatch(userLoginFailed(response)); 
    };
    return thunk;
}

export function postReport(quakeId, userName, comment) {
    const thunk = dispatch => {
        // Get current time in ms (UNIX time)
        console.log(userName);
        let timestamp = new Date().getTime();
        let reportsRef = database.ref('/userReports/'+ quakeId + '/');
        reportsRef.update({
                [timestamp]: {
                    "nickName": userName,
                    "comment": comment
                }
        }) 
            .then(
                dispatch(postUserReport({[timestamp]: {'comment': comment, 'nickName': userName}})
                        ));
};
    return thunk;
}
