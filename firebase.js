// ================= FIREBASE CONFIG =================
// Import Firebase modules dari CDN (untuk browser environment)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, onValue, set, get, push, orderByChild, limitToLast, query, orderByKey }
  from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

// Firebase configuration milik USER
const firebaseConfig = {
  apiKey: "AIzaSyCLu-MifEZsFNFyiB3KTINe7kPadh6CPOE",
  authDomain: "monitoringair-37c90.firebaseapp.com",
  // Catatan: Secara default menggunakan region us-central1 (default-rtdb.firebaseio.com)
  // Ganti ke region asia-southeast1 jika database Anda dibuat di region Singapura.
  databaseURL: "https://monitoringair-37c90-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "monitoringair-37c90",
  storageBucket: "monitoringair-37c90.firebasestorage.app",
  messagingSenderId: "834586591493",
  appId: "1:834586591493:web:c5acc63ebf14aff8c1f76c",
  measurementId: "G-65DR1XRQHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export untuk dipakai di halaman lain
export { db, ref, onValue, set, get, push, orderByChild, limitToLast, query, orderByKey };
