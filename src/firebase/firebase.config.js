// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXuKJpLf-ahYMeK9rAQJwb53TE7wGv0tg",
  authDomain: "banglar-chefs.firebaseapp.com",
  projectId: "banglar-chefs",
  storageBucket: "banglar-chefs.appspot.com",
  messagingSenderId: "405576398979",
  appId: "1:405576398979:web:5da1b9c94b7272237c43b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;