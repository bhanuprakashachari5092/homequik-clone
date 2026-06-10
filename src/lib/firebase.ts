// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHZi50SYZmCeXZJZ9M6yC1tL5xdvNsBw",
  authDomain: "vendor99-c1b57.firebaseapp.com",
  projectId: "vendor99-c1b57",
  storageBucket: "vendor99-c1b57.firebasestorage.app",
  messagingSenderId: "1032071491959",
  appId: "1:1032071491959:web:1e91e863cfb9ec518c3172",
  measurementId: "G-1XLW715G48"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

import { getStorage } from "firebase/storage";

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Analytics (only available in browser environments)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, storage, analytics };
