// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  databaseURL: process.env.REACT_APP_DBURL,
  messagingSenderId: process.env.REACT_APP_MESSEGINSENDERID,
  appId: process.env.REACT_APP_APPID,
});

// Initialize Firebase
export default app;
