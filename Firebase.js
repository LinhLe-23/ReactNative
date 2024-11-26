// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsAnkMDx4uKe9CuUm-a7QSSxPKJ4ieBxE",
  authDomain: "reactnative-ba9a3.firebaseapp.com",
  projectId: "reactnative-ba9a3",
  storageBucket: "reactnative-ba9a3.firebasestorage.app",
  messagingSenderId: "692248841795",
  appId: "1:692248841795:web:f8740941f6c8a17eab8ef6",
  measurementId: "G-N3S62NBPMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);