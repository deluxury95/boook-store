
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCTOwnAM519ek3tvJ2q3Et7wB36YBCVT0A",
  authDomain: "book-da62b.firebaseapp.com",
  projectId: "book-da62b",
  storageBucket: "book-da62b.firebasestorage.app",
  messagingSenderId: "317179232644",
  appId: "1:317179232644:web:a4010dc58bf509c7a99dd1",
  measurementId: "G-MFBTC7BQM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

