import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV5eO94OpsgPl9tbyN7j3CDPiepfDIyec",
  authDomain: "miniblog-a05bb.firebaseapp.com",
  projectId: "miniblog-a05bb",
  storageBucket: "miniblog-a05bb.appspot.com",
  messagingSenderId: "750724686895",
  appId: "1:750724686895:web:44e9f223248153787252da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inicializando banco de dados
const db = getFirestore(app)


export { db };