// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
  REACT_APP_APIKEY: apiKey,
  REACT_APP_AUTHDOMAIN: authDomain,
  REACT_APP_PROJECTID: projectId,
  REACT_APP_STORAGEBUCKET: storageBucket,
  REACT_APP_MESSAGINGSENDERID: messagingSenderId,
  REACT_APP_APPID: appId,
  REACT_APP_MEASUREMENTID: measurementId,
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
