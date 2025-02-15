// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEMwh0aA8c5FfHHMMdSP5Smg_j0nMF7lg",
  authDomain: "dreamapartmanok.firebaseapp.com",
  projectId: "dreamapartmanok",
  storageBucket: "dreamapartmanok.appspot.com",
  messagingSenderId: "802357793376",
  appId: "1:802357793376:web:4ad88a404366210ca8a905",
  measurementId: "G-NPW1SX5P6V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
