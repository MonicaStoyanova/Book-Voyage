import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { BOOKS_URL } from "../../Api";
import details from "../../images/details.jpg";

import styles from "./Details.module.css";

const Details = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BOOKS_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      className={styles.bookDetails}
      style={{
        backgroundImage: `url(${details})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.bookImage}>
        <h2 className={styles.bookTitle}>{book?.title}</h2>{" "}
        <img src={book?.image_url} alt="book cover" />
      </div>

      <div className={styles.bookDescription}>
        <h3 className={styles.detailsTitle}>Authors</h3>
        <p className={styles.detailsParagraph}>{book?.authors}</p>
        <h3 className={styles.detailsTitle}>Genres</h3>
        <p className={styles.detailsParagraph}>{book?.genres}</p>
        <h3 className={styles.detailsTitle}>Pages</h3>
        <p className={styles.detailsParagraph}>{book?.num_pages}</p>
        <h3 className={styles.detailsTitle}>Description</h3>
        <p className={styles.detailsParagraph}>{book?.description}</p>
      </div>
    </div>
  );
};

export default Details;
