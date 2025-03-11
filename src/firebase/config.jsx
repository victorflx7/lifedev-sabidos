import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBhIHroRwkyFgEdJ8Vrv_NgTkmVzWcAlv4",
    authDomain: "lifedev-victormatos.firebaseapp.com",
    projectId: "lifedev-victormatos",
    storageBucket: "lifedev-victormatos.firebasestorage.app",
    messagingSenderId: "477029159153",
    appId: "1:477029159153:web:9cd1f6f30b69f9fd321950",
    measurementId: "G-GB2W6B8PCP"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }