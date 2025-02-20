import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        setUser(currentUser);
        console.log(currentUser);
        setLoader(false);
      } else {
        setLoader(false);
      }
    });

    return () => unSubscribe();
  }, []);

  //   Register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign-in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign-out
  const signOutUser = () => {
    return signOut(auth);
  };

  //   Google sign in

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    registerUser,
    signInUser,
    signOutUser,
    googleSignIn,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
