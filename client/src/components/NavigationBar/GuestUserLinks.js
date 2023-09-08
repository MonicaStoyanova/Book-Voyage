import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const GuestUserLinks = () => {
  return (
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
  );
};

export default GuestUserLinks;
