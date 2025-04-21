// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1IiVzIy4jsUnVlDX3NG6apurfdcEwaLA",
  authDomain: "atividade-samarapalladino.firebaseapp.com",
  projectId: "atividade-samarapalladino",
  storageBucket: "atividade-samarapalladino.firebasestorage.app",
  messagingSenderId: "142306953455",
  appId: "1:142306953455:web:d923a3680c813722cd731a",
  measurementId: "G-L2000M44PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);