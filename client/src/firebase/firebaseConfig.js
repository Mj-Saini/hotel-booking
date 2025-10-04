// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWDu4RyOkznR1qAVQ4itacky3c5EbQj1A",
    authDomain: "hotel-booking-f3655.firebaseapp.com",
    projectId: "hotel-booking-f3655",
    storageBucket: "hotel-booking-f3655.firebasestorage.app",
    messagingSenderId: "1078843143293",
    appId: "1:1078843143293:web:30c810cf624dd2d0bbad14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);