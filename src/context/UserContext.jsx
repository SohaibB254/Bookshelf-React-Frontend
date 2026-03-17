import React, { createContext, useContext, useState, useEffect } from "react";

//Create context
const UserContext = createContext();

// Provider
export const UserContextProvider = ({ children }) => {
  // User object from backend
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  //  Login status flag
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedStatus = localStorage.getItem("isLoggedIn");
    return savedStatus === "true" ? true : false;
  });

  //Sync user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("user");
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    }
  }, [user]);

  //Logout function (Optional but useful)
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("Token"); // in case you store JWT
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(UserContext);
