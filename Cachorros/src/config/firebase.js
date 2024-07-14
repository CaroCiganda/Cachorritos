// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXSWLjWdTLFALfFeMmFHmBLLzAT7qiqvk",
  authDomain: "tigerfood-ecom.firebaseapp.com",
  projectId: "tigerfood-ecom",
  storageBucket: "tigerfood-ecom.appspot.com",
  messagingSenderId: "53562060555",
  appId: "1:53562060555:web:4b33936f781f75ea907c0e",
  measurementId: "G-EM4JS63CSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 