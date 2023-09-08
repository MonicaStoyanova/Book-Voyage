import { createContext, useContext, useState } from "react";

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

  return (
    <AuthContenxt.Provider value={{ currentUser, userLogin }}>
      {children}
    </AuthContenxt.Provider>
  );
};
