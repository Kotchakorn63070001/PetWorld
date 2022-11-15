// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// import firebase from 'firebase/app';
// import "firebase/firestore";
require('firebase/auth');
require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vG0jXuqwxSj4g-1mNN60ihWfAgeQIuk",
  authDomain: "petworld-c1c6a.firebaseapp.com",
  projectId: "petworld-c1c6a",
  storageBucket: "petworld-c1c6a.appspot.com",
  messagingSenderId: "889087064278",
  appId: "1:889087064278:web:f1b5faa780441319c63177"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();
// const db = firebase.firestore();

export {auth, db};