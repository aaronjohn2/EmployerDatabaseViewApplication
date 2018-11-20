import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC3m1LnKXudteB2WKCToWZ-0-_cVgp-NNU",
    authDomain: "edva-cmpe172.firebaseapp.com",
    databaseURL: "https://edva-cmpe172.firebaseio.com",
    projectId: "edva-cmpe172",
    storageBucket: "edva-cmpe172.appspot.com",
    messagingSenderId: "606646992739"
};

const app = firebase.initializeApp(config);

export default app;