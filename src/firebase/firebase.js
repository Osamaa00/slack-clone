import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-lkmNz6mGLzzvlhHIym4nXL-sfgm-So8",
  authDomain: "slack-clone-20c3c.firebaseapp.com",
  projectId: "slack-clone-20c3c",
  storageBucket: "slack-clone-20c3c.appspot.com",
  messagingSenderId: "132742861776",
  appId: "1:132742861776:web:43e847ff9a5ca26d85dfd5",
  measurementId: "G-L5KNR3ZWLJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
