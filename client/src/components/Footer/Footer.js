import React from "react";
import "../../App";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.footerParagraph}>
        Book Voyage by{" "}
        <span>
          <a
            className={styles.footerLink}
            href="https://github.com/MonicaStoyanova"
            target="_blank"
          >
            Monica Stoyanova
          </a>
        </span>{" "}
        {currentYear}&copy;
      </p>
    </footer>
  );
}

export default Footer;
