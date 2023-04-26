// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvnTY7doPmKPcJZ21RcaGVOG1vTECnHw",
  authDomain: "linkedin-clone-43be6.firebaseapp.com",
  projectId: "linkedin-clone-43be6",
  storageBucket: "linkedin-clone-43be6.appspot.com",
  messagingSenderId: "335987234808",
  appId: "1:335987234808:web:7a8619042b7fb408f1680d",
  measurementId: "G-9XPG3VCHQD"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app)

export { app,auth,db}