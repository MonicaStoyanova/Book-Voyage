import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // изпрати данните на сървъра
  };
  const navigate = useNavigate();
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">First name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        ></input>
        <label htmlFor="repeat-password">Confirm password</label>
        <input
          value={password}
          onChange={(e) => setRePassword(e.target.value)}
          name="repeat-password"
          id="repeat-password"
        ></input>
        <button className={styles.submit} type="submit">
          Register
        </button>
      </form>
      <button onClick={() => navigate("/login")}>
        Already have an account? Log In here
      </button>
    </>
  );
};

export default Register;
