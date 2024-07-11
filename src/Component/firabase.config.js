// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDDqhO3R4g-WZrOrEvMKNJ_L05C7FTDYw",
  authDomain: "practice-project51.firebaseapp.com",
  projectId: "practice-project51",
  storageBucket: "practice-project51.appspot.com",
  messagingSenderId: "575788714773",
  appId: "1:575788714773:web:1bc0a14e6587b868d2b71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;