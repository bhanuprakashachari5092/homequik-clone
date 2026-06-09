// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625",
  measurementId: "G-534LQS00XG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics (only available in browser environments)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };
