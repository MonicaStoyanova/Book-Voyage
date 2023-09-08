import React from "react";

import styles from "./Catalog.module.css";

import { useAppContext } from "../../context/appContext";

const CatalogActions = ({ book }) => {
  const value = useAppContext();

  const { addToRead, addToFavorites, favorites, removeFromFavorites } = value;

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return favoritesChecker(book.id) ? (
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
      <button className={styles.toRead} onClick={() => addToRead(book.title)}>
        Add to read
      </button>
    </div>
  );
};

export default CatalogActions;
