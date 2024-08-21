// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3_whvDZhe5Gp1ykngjC-owQKORqlfP4g",
  authDomain: "flashcard-saas-f8883.firebaseapp.com",
  projectId: "flashcard-saas-f8883",
  storageBucket: "flashcard-saas-f8883.appspot.com",
  messagingSenderId: "477891484994",
  appId: "1:477891484994:web:210689ed6253e9619a3cdb",
  measurementId: "G-KSB3S596R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
const db = getFirestore(app)
export {db}