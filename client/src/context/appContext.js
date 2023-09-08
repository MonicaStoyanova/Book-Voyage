import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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

    if (oldToRead.indexOf(title) !== -1) {
      return toast.error(`${title} is already in the list`);
    }

    const updatedToRead = [...oldToRead, title];

    toast.success(`${title} added to the list`);
    setToRead(updatedToRead);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addToRead,
        toRead,
        setToRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
