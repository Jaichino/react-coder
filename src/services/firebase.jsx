// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyrPkgQPRndvihePAnAeedMb4IIVoVsRU",
    authDomain: "ja-react-coderhouse.firebaseapp.com",
    projectId: "ja-react-coderhouse",
    storageBucket: "ja-react-coderhouse.firebasestorage.app",
    messagingSenderId: "425061525518",
    appId: "1:425061525518:web:fee76aff522465be9cb45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtener base de datos
export const db = getFirestore(app);