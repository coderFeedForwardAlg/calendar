// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";
  import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    } from "firebase/auth";

  import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzi7HR_y_bHifDzY3ehlSiEl0gmyHuSrI",
  authDomain: "todotime-e3481.firebaseapp.com",
  projectId: "todotime-e3481",
  storageBucket: "todotime-e3481.appspot.com",
  messagingSenderId: "704665637988",
  appId: "1:704665637988:web:cadeae02f3ddf8b7f17b71",
  measurementId: "G-40PRTFZWB6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);


/************** google auth  ***************/

const auth = getAuth(app);

  //  TODO: figer out what this part does 
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try{
    //const res = await signInWithPopup(auth, googleProvider);  
    const res = await signInWithRedirect(auth, googleProvider); 
    const user = res.user; 
      // check that the user is not already in the db 
    const q = query(collection(db, "users").where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if(docs.docs.length === 0){
        // add user 
      await addDoc(collection(db, "users"),{
        uid: user.displayName,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

  // sign in existing user 
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


  // register new user 
const registerWithEmailAndPassword = async (name, email, password) =>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err){
    console.error(err);
    alert(err.message);
  }
};

  // reset password link 
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("password reset link has been sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

  // log out 
const logout = () =>{
  signOut(auth);
};

export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};


