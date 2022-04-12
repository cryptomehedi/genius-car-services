// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ-6q0MU_mEoSXes0wt_sg0ZW1JmmvtkM",
    authDomain: "genius-car-services-8c07f.firebaseapp.com",
    projectId: "genius-car-services-8c07f",
    storageBucket: "genius-car-services-8c07f.appspot.com",
    messagingSenderId: "470782933675",
    appId: "1:470782933675:web:dd7a2f3f6ee2044f8cd5ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;