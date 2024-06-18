import { getFirestore }from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDuVsv-8rryX71eI3f7uYfIc3ex1IFgZ0",
  authDomain: "miniblog-62f0c.firebaseapp.com",
  projectId: "miniblog-62f0c",
  storageBucket: "miniblog-62f0c.appspot.com",
  messagingSenderId: "986694368136",
  appId: "1:986694368136:web:220a36a74632496f2a583d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };