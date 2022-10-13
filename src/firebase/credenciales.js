// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVOGJNra4TfskZ3NvDabk66F7ndvdlVu8",
  authDomain: "e-commerce-stripe-e6bbd.firebaseapp.com",
  projectId: "e-commerce-stripe-e6bbd",
  storageBucket: "e-commerce-stripe-e6bbd.appspot.com",
  messagingSenderId: "1076407606342",
  appId: "1:1076407606342:web:ad47722ea936b1b7597e47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app
