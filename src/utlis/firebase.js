// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjg9UObdZs_IGneYxgUH8VZw_wNDCzAtY",
  authDomain: "netflixgpt-ee58b.firebaseapp.com",
  projectId: "netflixgpt-ee58b",
  storageBucket: "netflixgpt-ee58b.firebasestorage.app",
  messagingSenderId: "661994641941",
  appId: "1:661994641941:web:50ab1a52995ca9e5ff4c1c",
  measurementId: "G-25PXX6KQZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();