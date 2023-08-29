import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BOOKS_URL } from "../../Api";
import styles from "./Details.module.css";
import details from "../../images/details.jpg";

const Details = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BOOKS_URL}/${id - 1}`)
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
        <h2>{book?.title}</h2> <img src={book?.image_url} alt="book cover" />
      </div>

      <div className={styles.bookDescription}>
        <h3>Authors</h3>
        <p>{book?.authors}</p>
        <h3>Genres</h3>
        <p>{book?.genres}</p>
        <h3>Pages</h3>
        <p>{book?.num_pages}</p>
        <h3>Description</h3>
        <p>{book?.description}</p>
      </div>
    </div>
  );
};

export default Details;
