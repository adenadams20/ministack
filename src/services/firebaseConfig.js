// Import des fonctions Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// src/firebaseConfig.j

// ✅ Configuration Firebase à partir des variables d'environnement
const firebaseConfig = {
  apiKey: "AIzaSyBa-QobWSIZkRRA8a4c5W_4VIEuL3RFGQM",
  authDomain: "ministack-9175c.firebaseapp.com",
  projectId: "ministack-9175c",
  storageBucket: "ministack-9175c.firebasestorage.app",
  messagingSenderId: "758710672171",
  appId: "1:758710672171:web:0757f10caa31f868ad436e",
  measurementId: "G-Z88W320XKY"
};
// ✅ Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// ✅ Crée et exporte Firestore
export const db = getFirestore(app);
export default app;
