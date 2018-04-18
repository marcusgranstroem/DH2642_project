# QuakeSee
For your earthquake information, on the fly.

## What is this?
Our project is to visualize earthquakes. You will be able to scroll on a map and see earthquakes based on a search. The available search paramaters are minimum magnitude, start time and end time (referring to a time interval in which earthquakes could have happened).

### What we have done
- Scrollable map
- Searchbars (That work)
- Visible Points of Earthquakes
- Visible Points Size scaled to magnitude

### What we plan to do
- Styling
- Log in and User Creation
- Visible points should be clickable. When clicked information about the earthquake will appear.
- Users can leave a report for each earthquake. An example of a report is some text about what happened and if the person needs help. What the reports will contain is undecided as of now.
- Users will be able to see other people's reports when selecting an earthquake.

## Link to project

https://quakesee.firebaseapp.com/
  
## File Structure

App.js is the main application that creates all the components. We then have a containers folder that includes the container compononents. We also have a components folder that contains presentational components and other components.

Container components:
- BannerContainer (Container for the header/banner)
- MapContainer (Container for the Map)

Presentational components:
- Banner (Presentational for Banner and includes Search bars)
- Map (Presentational for Map)
- Beamer (Presentational for visible points AKA Earthquakes)

There is also an scss folder that uses sass for styling, however right now it just contains the default css files when making a react project. 

Since we use Redux we have the actions and reducers files that do API calls and handle the store. Read more about Redux to understand what they are.

## Libraries

- React bootstrap (buttons etc)
- React google maps: https://tomchentw.github.io/react-google-maps/#usage--configuration

## Config (If you want to run the project locally)
Go into the src folder and run `make dependencies`

Place file config.js in the src folder.

```js
const google_map_api_key = '';

export default google_map_api_key;
```

Then use `npm-start` to start the application. (Further set up and dependency installation may be required, we reccomend using the link instead).
