import React from "react";
import styles from "./Navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Sailing Through Stories...
      </Link>
      <ul className={styles.ul}>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/register">
          <h3>Register</h3>
        </Link>
        <Link to="/catalog">
          <h3>Catalog</h3>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
