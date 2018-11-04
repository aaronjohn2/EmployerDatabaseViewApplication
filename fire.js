import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
const fire= firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export default fire;