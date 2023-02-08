// Import the functions you need from the SDKs you need
//import firebase from "firebase/compat/app"
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_N9sDNf9HjftJl-jPZWy8zlvGQJVwBkk",
  authDomain: "reactexample-a2b3f.firebaseapp.com",
  projectId: "reactexample-a2b3f",
  storageBucket: "reactexample-a2b3f.appspot.com",
  messagingSenderId: "404782256047",
  appId: "1:404782256047:web:b3ed0ea5dbd0d2ffa1295a",
  measurementId: "G-NECWF6ZKGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider().setCustomParameters({
  prompt: "select_account"
});

export const db = getFirestore(app);