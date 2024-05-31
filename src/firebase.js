// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyA2IMqemhqsiZ_Vi3RdHkD7Tyw7bYpKun8",
  authDomain: "nextjs-firebase-auth-41516.firebaseapp.com",
  projectId: "nextjs-firebase-auth-41516",
  storageBucket: "nextjs-firebase-auth-41516.appspot.com",
  messagingSenderId: "436314798566",
  appId: "1:436314798566:web:f2a03bc0cd90f1334e3e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);