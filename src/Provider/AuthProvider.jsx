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
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const axiosPublic = useAxiosPublic();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userInfo = { email: currentUser.email };

          const { data } = await axiosPublic.post("/jwt", userInfo);

          if (data.token) {
            localStorage.setItem("token", data.token);
            setLoader(false);
          }
        } catch (error) {
          alert(error);
          localStorage.removeItem("token");
          setLoader(false);
        }
      } else {
        localStorage.removeItem("token");
        setLoader(false);
      }
    });

    return () => unSubscribe();
  }, [axiosPublic]);

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
