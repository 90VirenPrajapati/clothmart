import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBeoibQgTypD4XgETsOwHnnnJc9ren_Pvo",
    authDomain: "cloth-mart-8f8c2.firebaseapp.com",
    projectId: "cloth-mart-8f8c2",
    storageBucket: "cloth-mart-8f8c2.appspot.com",
    messagingSenderId: "446910886842",
    appId: "1:446910886842:web:80dfd0bd88bae3bd056383",
    measurementId: "G-B4P44N3EN4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {db, auth}