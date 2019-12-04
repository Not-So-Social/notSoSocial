import firebase from "firebase/app"
import "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTUgM1Yl7wn2oCzdAP4YA3bNpP2r53oqE",
  authDomain: "notsosocial-aecab.firebaseapp.com",
  databaseURL: "https://notsosocial-aecab.firebaseio.com",
  projectId: "notsosocial-aecab",
  storageBucket: "notsosocial-aecab.appspot.com",
  messagingSenderId: "973516437107",
  appId: "1:973516437107:web:1524f659823adb27795c06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;