// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIuzS79tYWufa9miBLj7jvYzYoj1_E5GM",
  authDomain: "nagymaros-69279.firebaseapp.com",
  projectId: "nagymaros-69279",
  storageBucket: "nagymaros-69279.firebasestorage.app",
  messagingSenderId: "772766364226",
  appId: "1:772766364226:web:74ea8301bb1608d1eff3db",
  measurementId: "G-VJ4F4D7J1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
