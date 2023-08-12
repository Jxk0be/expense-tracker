// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0E5bW8t2AvbakGVBrQzhMqwVOpit246E",
  authDomain: "expense-tracker-85b05.firebaseapp.com",
  projectId: "expense-tracker-85b05",
  storageBucket: "expense-tracker-85b05.appspot.com",
  messagingSenderId: "647448819985",
  appId: "1:647448819985:web:1bca7635f55e28478fb4b0",
  measurementId: "G-WJXCMJ3HN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);