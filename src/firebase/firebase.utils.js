import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase with my config
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
firebase.initializeApp(config);
// firebase.analytics();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  // If user does not exist in db yet - create new user
  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


// Get needed functions from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Setup google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;