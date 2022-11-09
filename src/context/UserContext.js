import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signUpWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  const updateUserProfileInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  });
  const authValue = {
    signUpWithEmailAndPassword,
    signInWithEmail,
    signInWithGoogle,
    currentUser,
    logOut,
    updateUserProfileInfo,
    isDark,
    setIsDark,
    isLoading,
    setIsLoading,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
