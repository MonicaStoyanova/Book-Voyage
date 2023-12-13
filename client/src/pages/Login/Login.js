import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { login } from "../../services/userService";
import styles from "./Login.module.css";
import { useAuthContext } from "../../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const value = useAuthContext();

  const { userLogin } = value;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const loginRequest = async () => {
        const user = await login(email, password);
        localStorage.setItem("user", JSON.stringify(user));
        userLogin(user);
        toast.success("Login successful");
        navigate("/");
      };
      loginRequest();
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@mail.com"
          id="email"
          name="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        ></input>
        <button className={styles.submit}>Log In</button>
        <Link to={"/register"} className={styles.link}>
          Don`t have an account? Click here!
        </Link>
      </form>
    </div>
  );
};

export default Login;
