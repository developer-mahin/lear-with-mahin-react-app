// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2zE2WKrVfRShsA0-2z7ylzy-u96beAss",
  authDomain: "learn-with-mahin.firebaseapp.com",
  projectId: "learn-with-mahin",
  storageBucket: "learn-with-mahin.appspot.com",
  messagingSenderId: "819866350761",
  appId: "1:819866350761:web:c2165872e236fe8979a5b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;