import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCIa2b3B6bbwZ5-6-P44xhF6c7E05DoAyE",
  authDomain: "petit-fb.firebaseapp.com",
  databaseURL: "https://petit-fb.firebaseio.com",
  projectId: "petit-fb",
  storageBucket: "petit-fb.appspot.com",
  messagingSenderId: "446719689469",
  appId: "1:446719689469:web:c140e1ccd6646fcbdb3494",
  measurementId: "G-HZR68V94QZ"
}

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;