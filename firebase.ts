// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMmhx24YjkXMjIjQ7luOqJx8yh0k7wWg8",
    authDomain: "netflix-e7ce2.firebaseapp.com",
    projectId: "netflix-e7ce2",
    storageBucket: "netflix-e7ce2.appspot.com",
    messagingSenderId: "286015073684",
    appId: "1:286015073684:web:0f5d7a1d5eb8bed3e23381"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }