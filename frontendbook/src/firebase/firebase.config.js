
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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


// require('dotenv').config();


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "book-da62b.firebaseapp.com",
//   projectId: "book-da62b",
//   storageBucket: "book-da62b.appspot.com",
//   messagingSenderId: "317179232644",
//   appId: "1:317179232644:web:a4010dc58bf509c7a99dd1",
//   measurementId: "G-MFBTC7BQM0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

// export default app;
