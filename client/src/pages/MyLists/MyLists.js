import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  removeFromReadList,
} from "../../../store/Slices/bookSlice";

import styles from "./MyLists.module.css";

const MyLists = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.booksVoyage.favorites);
  const toRead = useSelector((state) => state.booksVoyage.toRead);

  const [readItems, setReadItems] = useState([]);

  useEffect(() => {
    setReadItems([]);
  }, [favorites, toRead]);

  const toggleReadStatus = (item) => {
    if (readItems.includes(item)) {
      setReadItems(readItems.filter((i) => i !== item));
    } else {
      setReadItems([...readItems, item]);
    }
  };

  const removeCheckedItems = () => {
    readItems.forEach((item) => {
      if (favorites.some((book) => book.title === item)) {
        dispatch(removeFromFavorites(item.id));
      } else if (toRead.includes(item)) {
        dispatch(removeFromReadList(item));
      }
    });
    setReadItems([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.favorites}>
        <h3>My all-time favorites</h3>
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className={styles.toRead}>
        <h3>Books I wish to read</h3>
        <ul className="toRead-list">
          {toRead.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={readItems.includes(item)}
                  onChange={() => toggleReadStatus(item)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={removeCheckedItems}>Remove Checked Items</button>
      </div>
    </div>
  );
};

export default MyLists;
