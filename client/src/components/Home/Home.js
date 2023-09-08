import { useEffect, useState } from "react";

import { QUOTES_URL } from "../../Api";
import background from "../../images/home.jpg";

import styles from "./Home.module.css";

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(QUOTES_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const randomQuoteIndex = Math.floor(
    Math.random() * Object.keys(quotes).length
  );
  const quote = quotes[randomQuoteIndex];

  return (
    <div
      className="home-background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {quote && (
        <p className={styles.quote}>
          {quote?.text} <br></br> -{quote?.author}
        </p>
      )}
    </div>
  );
};

export default Home;
