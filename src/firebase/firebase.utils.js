import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi3bZjD2ZhPuqrcjZLU6JWRai17bXEQ4E",
  authDomain: "crwn-store-8b887.firebaseapp.com",
  databaseURL: "https://crwn-store-8b887.firebaseio.com",
  projectId: "crwn-store-8b887",
  storageBucket: "crwn-store-8b887.appspot.com",
  messagingSenderId: "125266033686",
  appId: "1:125266033686:web:2d22ab7e2e73390acd4937",
  measurementId: "G-MSJTXWNZJ9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
