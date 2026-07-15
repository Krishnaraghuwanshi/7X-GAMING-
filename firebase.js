// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiT54_ZeMfkRdrqH7t8ZuLSEqbqGpXJeU",
  authDomain: "x-gaming-f30ea.firebaseapp.com",
  projectId: "x-gaming-f30ea",
  storageBucket: "x-gaming-f30ea.firebasestorage.app",
  messagingSenderId: "19426488145",
  appId: "1:19426488145:web:b6b1daa0c6e6a95327ad70"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
