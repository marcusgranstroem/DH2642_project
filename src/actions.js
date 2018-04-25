import fetch from 'cross-fetch';

export const REQUEST_EARTHQUAKES = 'REQUEST_EARTHQUAKES';
function requestEarthquakes() {
  return {
    type: REQUEST_EARTHQUAKES,
    // TODO add loader
  };
}

export const RECIEVE_EARTHQUAKES = 'RECIEVE_EARTHQUAKES';
function recieveEarthquakes(json) {
  return {
    type: RECIEVE_EARTHQUAKES,
    earthquakes: json.features,
    recieveAt: Date.now()
  };
}

export const INVALIDATE_EARTHQUAKES = 'INVALIDATE_EARTHQUAKES';
export function invalidateEarthquakes() {
  return {
	 type: INVALIDATE_EARTHQUAKES
  };
}

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
  	  console.log(start);
  	} else {
  	  let d = new Date((new Date().valueOf() - 1000*3600*24));
  	  start = d.toISOString();
  	  console.log(start);
  	}
  	if(end !== 0 && end !=="") {
  	  let e = new Date(end);
  	  end = e.toISOString();
  	  console.log(end);

  	} else {
  	  let d = new Date();
  	  end = d.toISOString();
  	  console.log(end);
  	}

  	return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}&minmagnitude=${magnitude}&limit=${limit}`)
    .then(
        response => response.json()
    )
    .then(json =>
        // Here, we update the app state with the results of the API call.
        dispatch(recieveEarthquakes(json))
    )
    .catch(
        (error) => {dispatch(invalidateEarthquakes());
        console.log('An error occurred.', error)}
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

export const REQUEST_REPORTS = 'REQUEST_REPORTS';
function requestReports() {
  return {
    type: REQUEST_REPORTS
  };
}

export const RECIEVE_REPORTS = 'RECIEVE_REPORTS';
function recieveReports() {
  return {
    type: RECIEVE_REPORTS
  };
}

export const CLOSE_REPORTS = 'CLOSE_REPORTS';
function closeReports() {
  return {
    type: CLOSE_REPORTS
  };
}

export function fetchUserReports(quakeId) {
    const thunk = dispatch => {
	
	dispatch(requestReports());
	dispatch(recieveReports());
    };
    return thunk;
}

export function closeUserReports() {
    const thunk = dispatch => {
	
	dispatch(closeReports());
    };
    return thunk;
}
