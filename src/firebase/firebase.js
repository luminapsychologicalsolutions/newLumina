import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyC9_xhO0Ihpyi801L2YbiE5JftE3o4lxd4",

  authDomain: "lumina-6a3a8.firebaseapp.com",

  projectId: "lumina-6a3a8",

  storageBucket: "lumina-6a3a8.firebasestorage.app",

  messagingSenderId: "530535506276",

  appId: "1:530535506276:web:71cefbf964f3f82860da71",

  measurementId: "G-KN44E87X3Q"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);