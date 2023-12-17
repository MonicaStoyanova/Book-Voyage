import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout, clearUser } from "../../path-to-your-slice"; // Adjust the import path

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await dispatch(logout());
        dispatch(clearUser());
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    performLogout();
  }, []);

  localStorage.clear();

  return <Navigate to="/" />;
};

export default Logout;
