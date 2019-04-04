import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCiflpMAPyFWgRXFJ0qesbUyELut0xATsM',
  authDomain: 'crwn-clothing-live.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-live.firebaseio.com',
  projectId: 'crwn-clothing-live',
  storageBucket: 'crwn-clothing-live.appspot.com',
  messagingSenderId: '355873179783'
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
