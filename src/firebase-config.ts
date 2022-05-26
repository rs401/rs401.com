import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import { Analytics, getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlYr02mgHKD3fTc0qlec9owjOboDeuBLc",
  authDomain: "letsgo-325500.firebaseapp.com",
  projectId: "letsgo-325500",
  storageBucket: "letsgo-325500.appspot.com",
  messagingSenderId: "250316135640",
  appId: "1:250316135640:web:3efac400b0464525324bad",
  measurementId: "G-5KJ2NKS3SW"
};
// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
export const analytics: Analytics = getAnalytics(app);