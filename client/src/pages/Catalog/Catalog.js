import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/Slices/bookSlice";

import styles from "./Catalog.module.css";
import CatalogActions from "./CatalogActions";

const Catalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state) => state.booksSlice.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
            <div>{<CatalogActions book={book} />}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Catalog;
