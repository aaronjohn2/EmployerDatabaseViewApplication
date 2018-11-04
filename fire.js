import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3m1LnKXudteB2WKCToWZ-0-_cVgp-NNU",
    authDomain: "edva-cmpe172.firebaseapp.com",
    databaseURL: "https://edva-cmpe172.firebaseio.com",
    projectId: "edva-cmpe172",
    storageBucket: "edva-cmpe172.appspot.com",
    messagingSenderId: "606646992739"
}

const fire= firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export default fire;