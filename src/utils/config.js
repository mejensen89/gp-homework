import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBHBGXxFzNOz5VUg1DJ7qPayMe6BkbtyMU",
    authDomain: "gp-test-3cdd0.firebaseapp.com",
    databaseURL: "https://gp-test-3cdd0.firebaseio.com",
    projectId: "gp-test-3cdd0",
    storageBucket: "gp-test-3cdd0.appspot.com",
    messagingSenderId: "1072334453393"
  };
const fire =  firebase.initializeApp(config);

export default fire