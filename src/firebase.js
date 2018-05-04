import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDhVAgUJGjyAXob44SWcbQMvJEw6AAKAiA",
    authDomain: "quakesee.firebaseapp.com",
    databaseURL: "https://quakesee.firebaseio.com",
    projectId: "quakesee",
    storageBucket: "quakesee.appspot.com",
    messagingSenderId: "11679518606"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
