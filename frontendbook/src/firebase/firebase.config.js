// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrG1sZKVAqE0qaSrGrhWya5jhNec208n8",
  authDomain: "mal-non.firebaseapp.com",
  projectId: "mal-non",
  storageBucket: "mal-non.firebasestorage.app",
  messagingSenderId: "154191141071",
  appId: "1:154191141071:web:1bbac60312ad2e056effba",
  measurementId: "G-7V7BY1J5BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; 

