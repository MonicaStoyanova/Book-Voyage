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
        <li>
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <h3>Login</h3>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <h3>Register</h3>
          </Link>
        </li>
        <li>
          <Link to="/catalog">
            <h3>Catalog</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
