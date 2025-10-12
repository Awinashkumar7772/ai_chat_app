// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "ai-chat-app-5d613.firebaseapp.com",
  projectId: "ai-chat-app-5d613",
  storageBucket: "ai-chat-app-5d613.firebasestorage.app",
  messagingSenderId: "504722010747",
  appId: "1:504722010747:web:92299c726754acf3ba68de",
  measurementId: "G-GR1G25J6W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const Db = getFirestore(app,'Ai Chat App')