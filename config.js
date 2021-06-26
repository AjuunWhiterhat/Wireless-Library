import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBVU5hdU3CHCJBpCwrvcWInfp100tffv88",
    authDomain: "willy-25d06.firebaseapp.com",
    databaseURL: "https://willy-25d06-default-rtdb.firebaseio.com",
    projectId: "willy-25d06",
    storageBucket: "willy-25d06.appspot.com",
    messagingSenderId: "1010232729958",
    appId: "1:1010232729958:web:b45dd81a22b5b0b4c868a7"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();