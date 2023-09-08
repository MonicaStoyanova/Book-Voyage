import { Link, useMatch, useResolvedPath } from "react-router-dom";

import styles from "./Navbar.module.css";
import { useAuthContext } from "../../context/authContext";
import RegisterUserLinks from "./RegisterUserLinks";
import GuestUserLinks from "./GuestUserLinks";

const Navbar = () => {
  const value = useAuthContext();

  const { currentUser } = value;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Sailing Through Stories...
      </Link>
      {currentUser ? <RegisterUserLinks /> : <GuestUserLinks />}
    </nav>
  );
};

export default Navbar;
