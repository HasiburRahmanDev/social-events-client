import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithPopupFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutFunc = () => {
    return signOut(auth);
  };
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    signOutFunc,
    updateProfileFunc,
    loading,
    setLoading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
