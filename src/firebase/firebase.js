import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATlV_4Bz0kUi375E4x6hlVKATdCQ-C_OY",
  authDomain: "luminawellbeing-8b0d9.firebaseapp.com",
  projectId: "luminawellbeing-8b0d9",
  storageBucket: "luminawellbeing-8b0d9.firebasestorage.app",
  messagingSenderId: "405649670893",
  appId: "1:405649670893:web:850ea448a9c997a7ca82e4",
  measurementId: "G-D00R40RD5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);