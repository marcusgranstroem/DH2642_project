import fetch from 'cross-fetch';

export const REQUEST_EARTHQUAKES = 'REQUEST_EARTHQUAKES';
function requestEarthquakes() {
  return {
      type: REQUEST_EARTHQUAKES
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

export function fetchEarthquakes(start, end, magnitude=0) {
    return dispatch => {
	
	dispatch(requestEarthquakes());

      return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}&minmagnitude=${magnitude}`)
	  .then(
              response => response.json(),
              error => console.log('An error occurred.', error)
	  )
	  .then(json =>
		// Here, we update the app state with the results of the API call.
		dispatch(recieveEarthquakes(json)));
    };
}
