import React, { useState, createContext, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

export const Authcontex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user); // ✅ fix: set user for UI
        return res;
      });
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user); // ✅ fix: set user for UI
        return res;
      });
  };

  const logOut = () => {
    return signOut(auth).then(() => setUser(null)); // ✅ fix: UI update on logout
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signin,
  };

  return <Authcontex.Provider value={authData}>{children}</Authcontex.Provider>;
};

export default AuthProvider;