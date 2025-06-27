// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7YlDsjrOHh2Zb1u0PGSWhVwylk-OFmRw",
  authDomain: "travel-guru-19a3e.firebaseapp.com",
  projectId: "travel-guru-19a3e",
  storageBucket: "travel-guru-19a3e.firebasestorage.app",
  messagingSenderId: "204394812201",
  appId: "1:204394812201:web:e3e905cc380af7d3e2dd38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);