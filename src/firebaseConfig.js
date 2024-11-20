import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI-uHw7EIhX-xX5l3UifO7mtwkrOJ4jZU",
  authDomain: "backend-cursoreact-3be7d.firebaseapp.com",
  projectId: "backend-cursoreact-3be7d",
  storageBucket: "backend-cursoreact-3be7d.firebasestorage.app",
  messagingSenderId: "419193760900",
  appId: "1:419193760900:web:56894d30a3943172c926d1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
