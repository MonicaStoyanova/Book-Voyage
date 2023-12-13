import { configureStore } from "@reduxjs/toolkit"; // that is how we create the store
// redux-slices
import booksSlice from "./Slices/bookSlice";

export const store = configureStore({
  reducer: {
    booksSlice: booksSlice,
  },
});
