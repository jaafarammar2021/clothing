import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyCuBUq2OlQSt1d8hTdUbilGpXH6zhBDkcY",
  authDomain: "clothing-db-d22c4.firebaseapp.com",
  projectId: "clothing-db-d22c4",
  storageBucket: "clothing-db-d22c4.appspot.com",
  messagingSenderId: "79235040152",
  appId: "1:79235040152:web:33d2ac0f19ea029c5221ed",
  measurementId: "G-6HS4D6TSSR",
};
export const createUserProfileDocuemnt = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
