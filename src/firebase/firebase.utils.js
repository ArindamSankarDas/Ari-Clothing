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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (error) {
      console.log("there has been an error", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDoucments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
