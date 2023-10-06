// firebase.js
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARrJeLMAYdy6opo86g4sJbA8kW7xW32b4",
  authDomain: "kampus-gratis2.firebaseapp.com",
  databaseURL:
    "https://kampus-gratis2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kampus-gratis2",
  storageBucket: "kampus-gratis2.appspot.com",
  messagingSenderId: "36215335171",
  appId: "1:36215335171:web:36c5d4234c515fb83aa136",
  measurementId: "G-M4QT5PH0HJ",
};

const app = initializeApp(firebaseConfig);

export default app;
