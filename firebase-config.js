// ============================================================
// Firebase Configuration — Shared between Website & Admin
// Project: talabaktam
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc, updateDoc, onSnapshot, query, where, orderBy, serverTimestamp, arrayUnion, arrayRemove, writeBatch, limit, Timestamp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, EmailAuthProvider, reauthenticateWithCredential } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD11SSzVFKQIic4s4KPzfdkS8iKDavDcaQ",
  authDomain: "talabaktam.firebaseapp.com",
  projectId: "talabaktam",
  storageBucket: "talabaktam.firebasestorage.app",
  messagingSenderId: "849866855440",
  appId: "1:849866855440:web:05afb50719c81595cce695"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ===== Expose to global scope for non-module scripts =====
window.FB = {
  db, auth, app,
  // Firestore
  collection, addDoc, getDocs, doc, getDoc, setDoc, deleteDoc, updateDoc,
  onSnapshot, query, where, orderBy, serverTimestamp, limit, Timestamp,
  arrayUnion, arrayRemove, writeBatch,
  // Auth
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, EmailAuthProvider, reauthenticateWithCredential,
};

// Signal readiness
if (window._fbReadyResolve) window._fbReadyResolve();
console.log('[Firebase] ✅ Initialized — Project: talabaktam');
