// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSvACBTQcHgZHPAr273Z8zfOntLhoS5Ps",
  authDomain: "frontend-intern-task.firebaseapp.com",
  projectId: "frontend-intern-task",
  storageBucket: "frontend-intern-task.appspot.com",
  messagingSenderId: "999160615497",
  appId: "1:999160615497:web:f24c2d8208da1312dde598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;