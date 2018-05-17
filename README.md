# QuakeSee
For your earthquake information, on the fly.

## What is this?
Our project is to visualize earthquakes. You will be able to scroll on a map and see earthquakes based on a search. The available search paramaters are minimum magnitude, start time and end time (referring to a time interval in which earthquakes could have happened).

### What we have done
- Scrollable map
- Log in and User Creation
- Searchbars
- Visible and clickable points of Earthquakes scaled to magnitude
- Users can leave and view reports for each earthquake.

## Link to project

https://quakesee.firebaseapp.com/
  
## Config (If you want to run the project locally)
In the root of the project; run `make dependencies`

Place file config.js in the src folder (If you don't have an API key for google maps then it will still work, you will just get warnings).

```js
const api_keys = {
    google_map_api_key: '<API KEY FOR GOOGLE MAPS GOES HERE>',
    firebase_db_key: '<FIREBASE API KEY FOR QUAKESEE APP GOES HERE>'
};

export default api_keys;
```
Then use `npm-start` to start the application. (Further set up and dependency installation may be required, we reccomend using the link instead).
