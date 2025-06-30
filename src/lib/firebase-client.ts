import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6SwPDlyjyYhL5NxcCb_pI9wbONOAOVTU",
  authDomain: "womi-prod.firebaseapp.com",
  projectId: "womi-prod",
  storageBucket: "womi-prod.firebasestorage.app",
  messagingSenderId: "471398985500",
  appId: "1:471398985500:web:b59173d7b5afa377cc14d9",
  measurementId: "G-L28XBSJVRD",
};

console.log("firebaseConfig", firebaseConfig);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
