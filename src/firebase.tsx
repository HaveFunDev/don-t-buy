// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyM4X2UbwtAvDux976rJtWXuJYP8cLB20",
  authDomain: "don-t-buy-d90ee.firebaseapp.com",
  projectId: "don-t-buy-d90ee",
  storageBucket: "don-t-buy-d90ee.appspot.com",
  messagingSenderId: "614736227049",
  appId: "1:614736227049:web:593686eb51355cfdbe9e78",
  measurementId: "G-40JW3M8C8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

