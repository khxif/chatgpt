import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyAALLRQiZK-AXj2ee5W6p35lOpgNEX_yl0",
  authDomain: "chatgpt-nextjs-c07fb.firebaseapp.com",
  projectId: "chatgpt-nextjs-c07fb",
  storageBucket: "chatgpt-nextjs-c07fb.appspot.com",
  messagingSenderId: "1012867023702",
  appId: "1:1012867023702:web:36f35c0a1d3936549b8cf7",
  measurementId: "G-T4YE3QEKP5"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }