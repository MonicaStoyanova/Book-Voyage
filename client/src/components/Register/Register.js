import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import * as userService from "../../services/userService";
import styles from "./Register.module.css";
import { useAuthContext } from "../../context/authContext";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();

  const value = useAuthContext();

  const { userLogin } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      return toast.error("All fields are required");
    }

    if (password !== rePassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const createdUser = await userService.create(email, password);
      localStorage.setItem("user", JSON.stringify(createdUser));
      userLogin(createdUser);
      toast.success("Congrats! Your registration was successful.");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Register</h1>
        <label htmlFor="name">First name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          type="text"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          type="text"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          type="password"
        ></input>
        <label htmlFor="repeat-password">Confirm password</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          name="repeat-password"
          id="repeat-password"
        ></input>
        <button className={styles.submit} type="submit">
          Register
        </button>
        <Link to={"/login"} className={styles.link}>
          Already have an account? Log in here.
        </Link>
      </form>
    </>
  );
};

export default Register;
