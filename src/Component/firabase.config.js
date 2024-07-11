// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Corrected import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDbQHR034R-WzTOrwEWKNJ_L05cF7TDw",
    authDomain: "practice-project51.firebaseapp.com",
    projectId: "practice-project51",
    storageBucket: "practice-project51.appspot.com",
    messagingSenderId: "575788714773",
    appId: "1:575788714773:web:1b0ca14e6587b868d2b71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
