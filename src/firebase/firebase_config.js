// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1njFy0xsS6nzHeQGJ-_B2LuYl9yL3TYQ",
  authDomain: "auth-moha-milon-9c322.firebaseapp.com",
  projectId: "auth-moha-milon-9c322",
  storageBucket: "auth-moha-milon-9c322.appspot.com",
  messagingSenderId: "693723057881",
  appId: "1:693723057881:web:5143cf0c93219482b3b8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth);