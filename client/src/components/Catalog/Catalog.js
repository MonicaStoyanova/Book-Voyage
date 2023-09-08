import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { BOOKS_URL } from "../../Api";

import styles from "./Catalog.module.css";
import { useAuthContext } from "../../context/authContext";
import CatalogActions from "./CatalogActions";

const Catalog = () => {
  const [books, setBooks] = useState([]);

  const userValue = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(BOOKS_URL)
      .then((response) => response.json())
      .then((data) => {
        const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
        setBooks(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.bookList}>
      {books.map((book) => {
        return (
          <div key={book.id} className={styles.book}>
            <div>
              <img
                className={styles.bookCoverImg}
                src={book.image_url}
                alt="book cover"
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <div>{userValue.currentUser && <CatalogActions book={book} />}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Catalog;
