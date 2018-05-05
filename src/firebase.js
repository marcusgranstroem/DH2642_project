import * as firebase from 'firebase';
import api_keys from './config.js';

const config = {
    apiKey: api_keys.firebase_db_key,
    authDomain: "quakesee.firebaseapp.com",
    databaseURL: "https://quakesee.firebaseio.com",
    projectId: "quakesee",
    storageBucket: "quakesee.appspot.com",
    messagingSenderId: "11679518606"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
