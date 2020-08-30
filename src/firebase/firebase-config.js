import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_4dBVJH94d7_kjAbtnuICZvGt86rf-gk',
  authDomain: 'react-app-courses-b6330.firebaseapp.com',
  databaseURL: 'https://react-app-courses-b6330.firebaseio.com',
  projectId: 'react-app-courses-b6330',
  storageBucket: 'react-app-courses-b6330.appspot.com',
  messagingSenderId: '781035190675',
  appId: '1:781035190675:web:e5761e319dabc26bcd5066',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleAuthProvider, firebase};
