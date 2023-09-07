import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // изпрати данните на сървъра
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@mail.com"
          id="email"
          name="email"
        ></input>
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        ></input>
        <button className={styles.submit}>Log In</button>
      </form>
      <button onClick={() => navigate("/register")}>
        Don`t have an account? Register here!
      </button>
    </>
  );
};

export default Login;
