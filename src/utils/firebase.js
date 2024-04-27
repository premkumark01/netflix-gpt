// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClMG0p-z5WifpuGSkUpbK3raIRwBISFBc",
  authDomain: "netflixgpt-967e5.firebaseapp.com",
  projectId: "netflixgpt-967e5",
  storageBucket: "netflixgpt-967e5.appspot.com",
  messagingSenderId: "700580748215",
  appId: "1:700580748215:web:4ed5e1467064f17ea1e632",
  measurementId: "G-ECJECG8W97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();