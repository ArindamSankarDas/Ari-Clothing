import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBThtUUxTlHRKnpkpERqYh0TLw1JQegzBY",
  authDomain: "ari-clothing.firebaseapp.com",
  projectId: "ari-clothing",
  storageBucket: "ari-clothing.appspot.com",
  messagingSenderId: "651477960857",
  appId: "1:651477960857:web:f0544c0e7fa7edc1845008",
  measurementId: "G-FEVGQT7J1E",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
