import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  addToRead,
  removeFromFavorites,
} from "../../store/Slices/bookSlice";
import styles from "./Catalog.module.css";

const CatalogActions = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.booksSlice.favorites);

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return favoritesChecker(book.id) ? (
    <button
      className={styles.removeFavorite}
      onClick={() => dispatch(removeFromFavorites(book.id))}
    >
      Remove from favorites
    </button>
  ) : (
    <div>
      <button
        className={styles.toFavorites}
        onClick={() => dispatch(addToFavorites(book))}
      >
        Add to favorites
      </button>
      <button
        className={styles.toRead}
        onClick={() => dispatch(addToRead(book.title))}
      >
        Add to read
      </button>
    </div>
  );
};

export default CatalogActions;
