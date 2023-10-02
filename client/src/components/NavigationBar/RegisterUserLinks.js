import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const RegisterUserLinks = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </li>

      <li>
        <Link to="/catalog">
          <h3>Catalog</h3>
        </Link>
      </li>
      <li>
        <Link to="/mylists">
          <h3>My List</h3>
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <h3>Logout</h3>
        </Link>
      </li>
    </ul>
  );
};

export default RegisterUserLinks;
