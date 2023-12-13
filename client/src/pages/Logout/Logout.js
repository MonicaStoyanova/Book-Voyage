import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { AuthContenxt } from "../../context/authContext";

export const Logout = () => {
  const { userLogout } = useContext(AuthContenxt);

  useEffect(() => {
    userLogout();
  }, [userLogout]);
  localStorage.clear();

  return <Navigate to="/" />; 
};
