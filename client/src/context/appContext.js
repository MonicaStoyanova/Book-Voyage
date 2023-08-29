import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [toRead, setToRead] = useState([]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);

    setFavorites(newFavorites);
  };
  const addToRead = (title) => {
    const oldToRead = [...toRead];
    const updatedToRead = [...oldToRead.push(title)];
    setToRead(updatedToRead);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toRead,
        addToRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
