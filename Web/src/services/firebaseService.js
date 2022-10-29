import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCThCX92rkoz0eseJWqoD0EfZb1zg18Ze0",
  authDomain: "hackdaykonecta.firebaseapp.com",
  projectId: "hackdaykonecta",
  storageBucket: "hackdaykonecta.appspot.com",
  messagingSenderId: "1044846660429",
  appId: "1:1044846660429:web:3a3a4ca0a00932e4b60504",
  measurementId: "G-S8Q4NTWKLK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);