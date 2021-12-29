import * as firebase from "firebase/app";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCu9_eSFQdhHF4sxEvZFf8U4kccom7WxI",
  authDomain: "ready-table-project.firebaseapp.com",
  databaseURL:
    "https://ready-table-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ready-table-project",
  storageBucket: "ready-table-project.appspot.com",
  messagingSenderId: "285590853859",
  appId: "1:285590853859:web:304cd3df4edb47a1118dd6"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
