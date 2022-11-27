// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3yZlTioKRFj8RysasVYyTunw6YaMIwWI",
    authDomain: "gwald-blog.firebaseapp.com",
    projectId: "gwald-blog",
    storageBucket: "gwald-blog.appspot.com",
    messagingSenderId: "1023576802348",
    appId: "1:1023576802348:web:d695b42bc3935f4653fd89",
    measurementId: "G-3ZC8NFEN4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

