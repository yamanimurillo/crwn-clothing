import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVqr0osHcuP8CNw58_BYnlZ9_a4lLMPmo",
    authDomain: "crwn-db-94579.firebaseapp.com",
    databaseURL: "https://crwn-db-94579.firebaseio.com",
    projectId: "crwn-db-94579",
    storageBucket: "crwn-db-94579.appspot.com",
    messagingSenderId: "22286361378",
    appId: "1:22286361378:web:9461a6b2ef9a2fa7087b7b",
    measurementId: "G-Z302TYD561"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;