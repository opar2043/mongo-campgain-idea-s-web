// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6byM_ZGK8oz9JVpsQKCY_iVJvX838H8",
  authDomain: "assignment-10-b7846.firebaseapp.com",
  projectId: "assignment-10-b7846",
  storageBucket: "assignment-10-b7846.firebasestorage.app",
  messagingSenderId: "777555017281",
  appId: "1:777555017281:web:064d3054fce270026790c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
