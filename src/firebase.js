import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfI_gf52MJnWPuuTq9N0r0ZDEL8oFQR0o",
  authDomain: "chit-and-chat-74431.firebaseapp.com",
  projectId: "chit-and-chat-74431",
  storageBucket: "chit-and-chat-74431.appspot.com",
  messagingSenderId: "52963720110",
  appId: "1:52963720110:web:30f50b50a7aab12476263f",
  measurementId: "G-8PYZ6WYEB0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };