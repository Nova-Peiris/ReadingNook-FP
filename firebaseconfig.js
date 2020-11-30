// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWFVdhAgEXLgL1m8ofTEiziqxIpCsFGoo",
    authDomain: "readingnook-project.firebaseapp.com",
    databaseURL: "https://readingnook-project.firebaseio.com",
    projectId: "readingnook-project",
    storageBucket: "readingnook-project.appspot.com",
    messagingSenderId: "474974523420",
    appId: "1:474974523420:web:5734f2ffbc8c9d8c474fd9",
    measurementId: "G-Z9K1KN89T0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;