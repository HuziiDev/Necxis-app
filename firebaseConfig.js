// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Fv6A9CNg1uoYQ0Z22PvllUzdkUO37cc",
  authDomain: "necxis-project.firebaseapp.com",
  projectId: "necxis-project",
  storageBucket: "necxis-project.firebasestorage.app",
  messagingSenderId: "19808144850",
  appId: "1:19808144850:web:cefd5e834df73b591f8c0b",
  measurementId: "G-CY3PMZ8SXW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };