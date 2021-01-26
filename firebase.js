import firebase from 'firebase'

const firebaseConfig={
    apiKey: "AIzaSyD6UlfVy2pnG-Bx9R3aO3oyXfucGtBE1GM",
    authDomain: "shikshalay-demo.firebaseapp.com",
    projectId: "shikshalay-demo",
    storageBucket: "shikshalay-demo.appspot.com",
    messagingSenderId: "656214581999",
    appId: "1:656214581999:web:c755a9d2f51182ac5e311a",
    measurementId: "G-W1F4MZ15HH"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};