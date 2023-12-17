import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../../store/Slices/bookSlice";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.booksSlice.quotes);
  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  const randomQuoteIndex = Math.floor(
    Math.random() * (quotes ? quotes.length : 0)
  );
  const quote = quotes ? quotes[randomQuoteIndex] : null;

  //revise the return statement, CSS should be separated
  return (
    <div className={styles.homeBackground}>
      {quote && (
        <p className={styles.quote}>
          <q>{quote?.text}</q> <br></br> &mdash; {quote?.author}
        </p>
      )}
    </div>
  );
};

export default Home;
