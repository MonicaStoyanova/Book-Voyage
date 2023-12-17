import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../path-to-your-slice"; // Adjust the import path
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.booksSlice.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const loggedInUser = await dispatch(login({ email, password }));
      dispatch(setUser(loggedInUser));
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@mail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button className={styles.submit}>Log In</button>
        <Link to={"/register"} className={styles.link}>
          Don't have an account? Click here!
        </Link>
      </form>
    </div>
  );
};

export default Login;
