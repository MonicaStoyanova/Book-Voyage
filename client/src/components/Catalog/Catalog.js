import React, { useEffect, useState } from "react";
import { BOOKS_URL } from "../../Api";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

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
            <div>
              {favoritesChecker(book.id) ? (
                <button
                  className={styles.removeFavorite}
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove from favorites
                </button>
              ) : (
                <div>
                  <button
                    className={styles.toFavorites}
                    onClick={() => addToFavorites(book)}
                  >
                    Add to favorites
                  </button>
                  <button
                    className={styles.toRead}
                    onClick={() => addToRead(book.title)}
                  >
                    Add to read
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Catalog;
