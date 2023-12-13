import { useState } from "react";
import { useAppContext } from "../../../context/appContext";

import styles from "./MyLists.module.css";
// не ми запазва кой съм сложила в листите след рефреш
const MyLists = () => {
  const value = useAppContext();
  const { favorites, toRead, removeFromReadList } = value;

  const [readItems, setReadItems] = useState([]);

  const toggleReadStatus = (item) => {
    if (readItems.includes(item)) {
      setReadItems(readItems.filter((i) => i !== item));
    } else {
      setReadItems([...readItems, item]);
    }
  };

  const removeCheckedItems = () => {
    readItems.map((item) => removeFromReadList(item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.favorites}>
        <h3>My all-time favorites</h3>
        <ul className="favorites-list">
          {favorites.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>{" "}
      <div className={styles.toRead}>
        <h3>Books I wish to read</h3>
        <ul className="toRead-list">
          {toRead.map((item, index) => (
            <li key={index}>
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
