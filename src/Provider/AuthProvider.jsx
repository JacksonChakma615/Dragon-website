import React, { useState, createContext } from "react";

export const Authcontex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "jackson chakma",
    email: "jackson@gmail.com",
  });

  const authData = {
    user,
    setUser,
  };

  return (
    <Authcontex.Provider value={authData}>
      {children}
    </Authcontex.Provider>
  );
};

export default AuthProvider;