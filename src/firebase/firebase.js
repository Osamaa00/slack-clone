import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD-lkmNz6mGLzzvlhHIym4nXL-sfgm-So8",
  authDomain: "slack-clone-20c3c.firebaseapp.com",
  projectId: "slack-clone-20c3c",
  storageBucket: "slack-clone-20c3c.appspot.com",
  messagingSenderId: "132742861776",
  appId: "1:132742861776:web:43e847ff9a5ca26d85dfd5",
  measurementId: "G-L5KNR3ZWLJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;
