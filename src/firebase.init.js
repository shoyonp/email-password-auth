// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DONOT share comfig in public
const firebaseConfig = {
  apiKey: "AIzaSyD6sdemnYSo6cL4tMKh3ve9T2aMnKrboQw",
  authDomain: "email-password-auth-5348d.firebaseapp.com",
  projectId: "email-password-auth-5348d",
  storageBucket: "email-password-auth-5348d.firebasestorage.app",
  messagingSenderId: "225234662671",
  appId: "1:225234662671:web:20cc6653a1876cb381ba7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
