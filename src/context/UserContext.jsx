import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create the context
const UserContext = createContext();

// 2️⃣ Provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to get user from localStorage on load
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 3️⃣ Whenever user changes, update localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 4️⃣ Provide both user and setUser
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 5️⃣ Custom hook for easier access
export const useUser = () => useContext(UserContext);
