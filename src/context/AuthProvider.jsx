import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user for register
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name and photo url in register
  const updateNameAndPhoto = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // login authentication
  const loginSystem = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout authentication
  const logOutSystem = () => {
    return signOut(auth);
  };

  // google sign in method
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub sign in method
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createAccount,
    updateNameAndPhoto,
    loginSystem,
    logOutSystem,
    googleSignIn,
    gitHubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
