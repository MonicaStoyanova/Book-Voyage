import { createContext, useContext, useState } from "react";
import { clearUserData } from "../services/userService";

export const AuthContenxt = createContext(null);

export const useAuthContext = () => {
  const context = useContext(AuthContenxt);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const user = localStorage.getItem("user");

  const [currentUser, setCurrentUser] = useState(JSON.parse(user));

  const userLogin = (userData) => {
    setCurrentUser(userData);
  };

  const userLogout = (userData) => {
    setCurrentUser({});
    clearUserData();
  };

  return (
    <AuthContenxt.Provider value={{ currentUser, userLogin, userLogout }}>
      {children}
    </AuthContenxt.Provider>
  );
};
