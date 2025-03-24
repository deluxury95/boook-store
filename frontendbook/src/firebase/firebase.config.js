// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBobxaFPxorZyX8qS_8zvDDsY9dkwPdLbM",
  authDomain: "mern-book-inventory-9c0cb.firebaseapp.com",
  projectId: "mern-book-inventory-9c0cb",
  storageBucket: "mern-book-inventory-9c0cb.firebasestorage.app",
  messagingSenderId: "527017394161",
  appId: "1:527017394161:web:1b40db3acbadd75ef14e50",
  measurementId: "G-013DFFD9L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;