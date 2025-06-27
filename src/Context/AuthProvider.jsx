
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding,setLoading] = useState(true)
  const provider = new GoogleAuthProvider();


  const registetion = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const sendingUserInfo = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgatePass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => unSuscribe();
  }, []);

  const userInfo = {
    registetion,
    login,
    logOut,
    user,
    forgatePass,
    sendingUserInfo,
    signInWithGoogle,
    loding
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
