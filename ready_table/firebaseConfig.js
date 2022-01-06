import * as firebase from "firebase/app";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnIgMlaUPXLZqFY0xZKFzNnVIPGzuSL7Y",
  authDomain: "ready-table-firebase-01.firebaseapp.com",
  projectId: "ready-table-firebase-01",
  storageBucket: "ready-table-firebase-01.appspot.com",
  messagingSenderId: "540291082091",
  appId: "1:540291082091:web:47a82688972f8667f8ce2e"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database();
