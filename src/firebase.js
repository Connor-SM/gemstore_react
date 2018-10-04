import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBz56MXKwg1ShyuoIwXkknuQvrJ02kl_40",
  authDomain: "gemstore-9c912.firebaseapp.com",
  databaseURL: "https://gemstore-9c912.firebaseio.com",
  projectId: "gemstore-9c912",
  storageBucket: "",
  messagingSenderId: "633710988259"
};
firebase.initializeApp(config);

export default firebase;
