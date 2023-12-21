import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [AuthStatus, setAuthStatus] = useState(() => {
    if (localStorage.getItem("authStatus") === null) return false;
    return localStorage.getItem("authStatus");
  });
  const [User, setUser] = useState(() => {
    return localStorage.getItem("User");
  });

  useEffect(() => {
    localStorage.setItem("authStatus", AuthStatus);
  }, [AuthStatus]);

  useEffect(() => {
    localStorage.setItem("User", User);
  }, [User]);

  const values = {
    AuthStatus,
    setAuthStatus,
    User,
    setUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
