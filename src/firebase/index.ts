// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fareshare-88233.firebaseapp.com",
  databaseURL:
    "https://fareshare-88233-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fareshare-88233",
  storageBucket: "fareshare-88233.appspot.com",
  messagingSenderId: "9426497039",
  appId: "1:9426497039:web:3bd838ddc259e13a203d7a",
  measurementId: "G-HX11E48XRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Comment these in production
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, "localhost", 8080);
