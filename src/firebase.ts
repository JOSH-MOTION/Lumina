import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPkRKL_BtKDScV48frURqLqJpatsRWRUA",
  authDomain: "photomobi-7fad4.firebaseapp.com",
  projectId: "photomobi-7fad4",
  storageBucket: "photomobi-7fad4.firebasestorage.app",
  messagingSenderId: "148055284050",
  appId: "1:148055284050:web:6d60920ba0cd976401428b",
  measurementId: "G-TMR6CHEEVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
