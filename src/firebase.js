
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBswUNL1rXNr9H05dqboc9OyA5sHJBfKdA",
    authDomain: "karangym-ff6b5.firebaseapp.com",
    databaseURL: "https://karangym-ff6b5.firebaseio.com",
    projectId: "karangym-ff6b5",
    storageBucket: "karangym-ff6b5.appspot.com",
    messagingSenderId: "862024987522",
    appId: "1:862024987522:web:b038fbbd91b58aa5ec559b",
    measurementId: "G-ZGSMW13P09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;