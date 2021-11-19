import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBSIlW7qYSccZtkcKKLNq8L0gcVC9YfFTY",
  authDomain: "clone-50fb8.firebaseapp.com",
  projectId: "clone-50fb8",
  storageBucket: "clone-50fb8.appspot.com",
  messagingSenderId: "842128022344",
  appId: "1:842128022344:web:473b5fe83581655b15717d",
  measurementId: "G-Z94XEZZJF8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};