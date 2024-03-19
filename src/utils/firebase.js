// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdV9xQ5WZajiy36hqefV9K-roYuXqdUXY",
  authDomain: "netflix-4839b.firebaseapp.com",
  projectId: "netflix-4839b",
  storageBucket: "netflix-4839b.appspot.com",
  messagingSenderId: "620906829826",
  appId: "1:620906829826:web:0e584a6402e7e7a267ef1b",
  measurementId: "G-G39TLNPVGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
