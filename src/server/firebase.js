// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWUfKBB6RHEhFZjut7mFr324092uPQ4G8",
  authDomain: "sunny-surprise.firebaseapp.com",
  projectId: "sunny-surprise",
  storageBucket: "sunny-surprise.appspot.com",
  messagingSenderId: "502252285723",
  appId: "1:502252285723:web:67f73e20637498d86f6dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}