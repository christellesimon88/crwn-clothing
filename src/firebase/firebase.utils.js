import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfD_I0DGcqOxEet-4S3TZYgBwNyEkphy4",
    authDomain: "crwn-db-4e50d.firebaseapp.com",
    projectId: "crwn-db-4e50d",
    storageBucket: "crwn-db-4e50d.appspot.com",
    messagingSenderId: "686041996055",
    appId: "1:686041996055:web:44110b8e3fb6f8b1643552",
    measurementId: "G-XZER3SJZPY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;