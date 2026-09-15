// ===============================
// KONEKSI FIREBASE
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ===============================
// KONFIGURASI FIREBASE
// ===============================

export const firebaseConfig = {
  apiKey: "AIzaSyCL-MhFb-_jaQmHBg_vUxMY-i99xQ1mgVU",
  authDomain: "absensi-digital-sekolah-d05ad.firebaseapp.com",
  projectId: "absensi-digital-sekolah-d05ad",
  storageBucket: "absensi-digital-sekolah-d05ad.firebasestorage.app",
  messagingSenderId: "309832181663",
  appId: "1:309832181663:web:ef50f99b23d5f162ad7faa"
};


// ===============================
// INISIALISASI FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);


// ===============================
// FIREBASE AUTHENTICATION
// ===============================

const auth = getAuth(app);


// ===============================
// FIRESTORE DATABASE
// ===============================

const db = getFirestore(app);


// ===============================
// EXPORT
// ===============================

export {
    app,
    auth,
    db
};
