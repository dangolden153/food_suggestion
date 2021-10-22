import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOQEz1TTSgkznhSZX8mHkWsGDXvuGAsFI",
  authDomain: "ig-clone-99d1c.firebaseapp.com",
  projectId: "ig-clone-99d1c",
  storageBucket: "ig-clone-99d1c.appspot.com",
  messagingSenderId: "272179859383",
  appId: "1:272179859383:web:3232dbbf94b601929e6232",
  measurementId: "G-PRGN8DH87Z",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebase, Firebase };
