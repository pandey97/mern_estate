// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5842c.firebaseapp.com",
  projectId: "mern-estate-5842c",
  storageBucket: "mern-estate-5842c.appspot.com",
  messagingSenderId: "94539460067",
  appId: "1:94539460067:web:24f03d73d0725751e7c4d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);