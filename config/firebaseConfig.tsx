// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "punsook-story-kids.firebaseapp.com",
  projectId: "punsook-story-kids",
  storageBucket: "punsook-story-kids.appspot.com",
  messagingSenderId: "75676578679",
  appId: "1:75676578679:web:fc093d61a5d89a6df7a772",
  measurementId: "G-04QD1HXWC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)