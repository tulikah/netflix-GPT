// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8qsbD8CjZ9oUGYGBkMfGEOdX2ZlrO0oQ",
  authDomain: "netflix-gpt-eb6d9.firebaseapp.com",
  projectId: "netflix-gpt-eb6d9",
  storageBucket: "netflix-gpt-eb6d9.appspot.com",
  messagingSenderId: "134007523650",
  appId: "1:134007523650:web:202ead6084a5f4059be0db",
  measurementId: "G-Z8B8RCLHDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();