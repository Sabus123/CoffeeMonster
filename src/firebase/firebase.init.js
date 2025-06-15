// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYr1R9X1aHM0U3tGzTS0laU-vPGiminV8",
  authDomain: "coffee-authentication-7ce35.firebaseapp.com",
  projectId: "coffee-authentication-7ce35",
  storageBucket: "coffee-authentication-7ce35.firebasestorage.app",
  messagingSenderId: "1068784860688",
  appId: "1:1068784860688:web:b9b3dedf023b9d2481d495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);