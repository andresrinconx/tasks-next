import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO34Ai3zt-0VTepMJ6ZpnPyIjjZBqAGro",
  authDomain: "tasks-next-2b6d6.firebaseapp.com",
  projectId: "tasks-next-2b6d6",
  storageBucket: "tasks-next-2b6d6.firebasestorage.app",
  messagingSenderId: "4855243599",
  appId: "1:4855243599:web:02eb225d6fa3c906ba9b3a",
  measurementId: "G-X2QEB15SGD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
