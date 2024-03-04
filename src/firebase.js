// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHNSN1JhljRvlb7OKtbeFbvtIfyGVZHH4",
  authDomain: "spa-4b7bb.firebaseapp.com",
  projectId: "spa-4b7bb",
  storageBucket: "spa-4b7bb.appspot.com",
  messagingSenderId: "677576782925",
  appId: "1:677576782925:web:81b9221ab8d5fb8c761804",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
