// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD98cmFCdQ1EYkm_7vQ8HF0dq9l0t89dFY",
  authDomain: "inventory-management-ff2e2.firebaseapp.com",
  projectId: "inventory-management-ff2e2",
  storageBucket: "inventory-management-ff2e2.appspot.com",
  messagingSenderId: "403095039359",
  appId: "1:403095039359:web:a301a9c7b5db85540bfe4a",
  measurementId: "G-Y35HF4C8SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}