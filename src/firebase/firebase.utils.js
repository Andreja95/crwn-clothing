import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCxSSnTCA9ANimhfiYKYNNmq0tAeafUa18',
    authDomain: 'crwn-db-4b9ee.firebaseapp.com',
    projectId: 'crwn-db-4b9ee',
    storageBucket: 'crwn-db-4b9ee.appspot.com',
    messagingSenderId: '550046295435',
    appId: '1:550046295435:web:5d32548315b6872e4fbb8e',
    measurementId: 'G-KYZTJ45622',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
