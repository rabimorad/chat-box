// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGo_YdKLq6tMfgJhoVkpzQwOWAir26mfc",
  authDomain: "chatbox-app-8e4e2.firebaseapp.com",
  projectId: "chatbox-app-8e4e2",
  storageBucket: "chatbox-app-8e4e2.appspot.com",
  messagingSenderId: "1083394860775",
  appId: "1:1083394860775:web:4962b8c5314f43d568a442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)